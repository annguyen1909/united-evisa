import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { prisma } from "@/lib/db";
import { sendEmail } from "@/lib/email";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-05-28.basil",
});
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;
const LOG_SCOPE = "stripe-webhook";

function redactEmail(email?: string | null): string {
    if (!email || !email.includes("@")) return "redacted";
    const [local, domain] = email.split("@");
    const maskedLocal = local.length <= 2 ? `${local[0] || "*"}*` : `${local.slice(0, 2)}***`;
    return `${maskedLocal}@${domain}`;
}

function redactName(name?: string | null): string {
    if (!name) return "redacted";
    const trimmed = name.trim();
    if (!trimmed) return "redacted";
    return `${trimmed[0]}***`;
}

function logInfo(event: string, meta: Record<string, unknown> = {}) {
    console.log(JSON.stringify({ level: "info", scope: LOG_SCOPE, event, meta, ts: new Date().toISOString() }));
}

function logWarn(event: string, meta: Record<string, unknown> = {}) {
    console.warn(JSON.stringify({ level: "warn", scope: LOG_SCOPE, event, meta, ts: new Date().toISOString() }));
}

function logError(event: string, meta: Record<string, unknown> = {}) {
    console.error(JSON.stringify({ level: "error", scope: LOG_SCOPE, event, meta, ts: new Date().toISOString() }));
}

export async function POST(req: NextRequest) {
    logInfo("webhook_received");
    const sig = req.headers.get("stripe-signature")!;
    const body = await req.text();

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
        logInfo("event_verified", { eventType: event.type, eventId: event.id });
    } catch (err) {
        logError("signature_verification_failed", { message: err instanceof Error ? err.message : "unknown_error" });
        return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    try {
        switch (event.type) {
            case 'payment_intent.succeeded': {
                const paymentIntent = event.data.object as Stripe.PaymentIntent;
                console.log('Webhook received payment_intent.succeeded:', paymentIntent.id);
                await handlePaymentSuccess(paymentIntent);
                break;
            }
            case 'payment_intent.payment_failed': {
                const paymentIntent = event.data.object as Stripe.PaymentIntent;
                console.log('Webhook received payment_intent.payment_failed:', paymentIntent.id);
                await handlePaymentFailure(paymentIntent);
                break;
            }
            default:
                logInfo("event_unhandled", { eventType: event.type, eventId: event.id });
        }

        return NextResponse.json({ received: true });
    } catch (error) {
        logError("event_processing_failed", { message: error instanceof Error ? error.message : "unknown_error" });
        return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}

async function handlePaymentSuccess(paymentIntent: Stripe.PaymentIntent) {
    const applicationId = paymentIntent.metadata.applicationId;

    if (!applicationId) {
        logError("missing_application_id_in_metadata", { paymentIntentId: paymentIntent.id });
        return;
    }

    try {
        const application = await prisma.application.findUnique({
            where: { applicationId },
            include: {
                account: {
                    select: {
                        email: true,
                        fullName: true,
                        websiteCreatedAt: true,
                    },
                },
                destination: {
                    select: {
                        name: true,
                    },
                },
                passengers: true,
                visaType: true,
            },
        });

        if (!application) {
            logError("application_not_found", { applicationId, paymentIntentId: paymentIntent.id });
            return;
        }

        const alreadyCompleted = application.paymentStatus === 'Payment Completed';

        if (!alreadyCompleted) {
            await prisma.application.update({
                where: { applicationId: applicationId },
                data: {
                    status: 'Collecting Documents',
                    paymentStatus: 'Payment Completed',
                },
            });
            logInfo("application_marked_paid", { applicationId, paymentIntentId: paymentIntent.id });
        } else {
            logInfo("application_already_paid", { applicationId, paymentIntentId: paymentIntent.id });
        }

        // Send United eVisa admin notification only when this application belongs to United eVisa site
        const isUnitedEvisaSite = application.account?.websiteCreatedAt === "United eVisa Site";
        if (!alreadyCompleted && isUnitedEvisaSite) {
            try {
                await sendEmail({
                    to: "visa@unitedevisa.com",
                    template: "new-application-notification",
                    data: {
                        applicationId: application.applicationId,
                        customerEmail: application.account?.email || "Unknown",
                        customerName: application.account?.fullName || "Customer",
                        destinationName: application.destination?.name || "Unknown",
                        visaTypeName: application.visaType?.name || "Unknown",
                        passengerCount: application.passengerCount || 1,
                        total: application.total || 0,
                        stayingStart: application.stayingStart ? application.stayingStart.toISOString() : new Date().toISOString(),
                        stayingEnd: application.stayingEnd ? application.stayingEnd.toISOString() : new Date().toISOString(),
                    },
                });
                logInfo("admin_notification_sent", { applicationId });
            } catch (emailError) {
                logError("admin_notification_failed", {
                    applicationId,
                    message: emailError instanceof Error ? emailError.message : "unknown_error",
                });
            }
        } else if (!alreadyCompleted && !isUnitedEvisaSite) {
            logInfo("admin_notification_skipped_other_site", {
                applicationId,
                site: application.account?.websiteCreatedAt ?? "unknown",
            });
        }

        let cardType = 'Unknown';
        let cardLast4 = '****';
        let cardholderName = '';
        let billingAddress = '';
        let billingZipcode = '';

        if (paymentIntent.payment_method) {
            const paymentMethod = await stripe.paymentMethods.retrieve(
                paymentIntent.payment_method as string
            );
            cardLast4 = paymentMethod.card?.last4 || '****';
            cardType = paymentMethod.card?.brand || 'Unknown';
        }

        logInfo("cardholder_wait_started", { applicationId });

        let attempts = 0;
        const maxAttempts = 20;

        while (attempts < maxAttempts) {
            const cardHolder = await prisma.cardHolder.findUnique({
                where: { applicationId: application.id },
            });

            if (cardHolder) {
                cardholderName = cardHolder.name;
                billingAddress = cardHolder.address;
                billingZipcode = cardHolder.zipcode;
                logInfo("cardholder_found", {
                    applicationId,
                    attempt: attempts + 1,
                    cardholderName: redactName(cardholderName),
                });
                break;
            }

            await new Promise((resolve) => setTimeout(resolve, 500));
            attempts++;
        }

        if (!cardholderName) {
            logWarn("cardholder_not_found_after_wait", { applicationId, waitMs: 10000 });
            cardholderName = 'Billing Form Data Missing';
            billingAddress = 'Billing Form Data Missing';
            billingZipcode = 'Billing Form Data Missing';
        }

        await prisma.stripeActivity.upsert({
            where: { id: `payment_${paymentIntent.id}` },
            update: {
                status: 'succeeded',
                amount: paymentIntent.amount / 100,
                description: `Payment of $${(paymentIntent.amount / 100).toFixed(2)} ${paymentIntent.currency.toUpperCase()} - Made by ${redactName(cardholderName)}.`,
                timestamp: new Date(),
            },
            create: {
                id: `payment_${paymentIntent.id}`,
                applicationId: application.id,
                type: 'Payment',
                title: 'Payment',
                amount: paymentIntent.amount / 100,
                status: 'succeeded',
                transactionId: `payment_${paymentIntent.id}`,
                description: `Payment of $${(paymentIntent.amount / 100).toFixed(2)} ${paymentIntent.currency.toUpperCase()} - Made by ${redactName(cardholderName)}.`,
                timestamp: new Date(),
            },
        });
        logInfo("stripe_activity_upserted", { applicationId, paymentIntentId: paymentIntent.id });

        await prisma.cardHolder.upsert({
            where: { applicationId: application.id },
            update: {
                name: cardholderName,
                cardType: cardType,
                cardNumber: `****${cardLast4}`,
                address: billingAddress,
                zipcode: billingZipcode,
            },
            create: {
                id: `card_${application.id}`,
                name: cardholderName,
                cardType: cardType,
                cardNumber: `****${cardLast4}`,
                address: billingAddress,
                zipcode: billingZipcode,
                applicationId: application.id,
            },
        });
        logInfo("cardholder_upserted", { applicationId, cardType, cardLast4: `****${cardLast4}` });

        const passengers = await prisma.passenger.findMany({
            where: { applicationId: application.id },
            select: { fullName: true },
        });

        const visaType = await prisma.visaType.findUnique({
            where: { id: application.visaTypeId },
            select: { fees: true },
        });

        const governmentFee = visaType?.fees || 0;
        const serviceFee = 59.99;
        const passengerCount = application.passengerCount || 1;
        const applicationTotal = (governmentFee + serviceFee) * passengerCount;

        const passengerNames = passengers.map((p) => p.fullName?.toLowerCase().trim()).filter(Boolean);
        const cardholderNameLower = cardholderName.toLowerCase().trim();
        const nameMatches = passengerNames.some((name) => name === cardholderNameLower);

        let riskStatus: string;
        let riskActivityTitle: string;
        let riskActivityDescription: string;

        if (!nameMatches) {
            riskStatus = 'Not Passed';
            riskActivityTitle = 'Risk - Not Passed';
            riskActivityDescription = 'System automatically failed Risk. Name did not match.';
        } else if (applicationTotal >= 900) {
            riskStatus = 'Not Passed';
            riskActivityTitle = 'Risk - Not Passed';
            riskActivityDescription = `System automatically failed Risk. Order total is $900 or more ($${applicationTotal.toFixed(2)}).`;
        } else {
            riskStatus = 'Passed';
            riskActivityTitle = 'Risk - Passed';
            riskActivityDescription = 'System automatically passed Risk. Name matched.';
        }

        const risk = await prisma.risk.upsert({
            where: { id: `risk_${application.id}` },
            update: {
                status: riskStatus,
                updatedAt: new Date(),
                lastUpdated: new Date(),
            },
            create: {
                id: `risk_${application.id}`,
                status: riskStatus,
                applicationId: application.id,
                createdAt: new Date(),
                updatedAt: new Date(),
                lastUpdated: new Date(),
            },
        });

        await prisma.riskActivity.upsert({
            where: { id: `risk_activity_${risk.id}` },
            update: {
                title: riskActivityTitle,
                description: riskActivityDescription,
                type: 'System',
                timestamp: new Date(),
            },
            create: {
                id: `risk_activity_${risk.id}`,
                title: riskActivityTitle,
                description: riskActivityDescription,
                riskId: risk.id,
                type: 'System',
                timestamp: new Date(),
            },
        });
        logInfo("risk_records_upserted", { applicationId, riskStatus });

    } catch (error) {
        logError("handle_payment_success_failed", {
            applicationId,
            paymentIntentId: paymentIntent.id,
            message: error instanceof Error ? error.message : "unknown_error",
        });
    }
}

async function handlePaymentFailure(paymentIntent: Stripe.PaymentIntent) {
    const applicationId = paymentIntent.metadata.applicationId;

    if (!applicationId) {
        logError("missing_application_id_in_failed_metadata", { paymentIntentId: paymentIntent.id });
        return;
    }

    try {
        await prisma.stripeActivity.upsert({
            where: { id: `payment_failed_${paymentIntent.id}` },
            update: {
                amount: paymentIntent.amount / 100,
                status: 'failed',
                description: `Payment failed for application ${applicationId}`,
                timestamp: new Date(),
            },
            create: {
                id: `payment_failed_${paymentIntent.id}`,
                applicationId: (await prisma.application.findUnique({
                    where: { applicationId },
                    select: { id: true }
                }))?.id,
                type: 'Payment',
                title: 'Payment Failed',
                amount: paymentIntent.amount / 100,
                status: 'failed',
                transactionId: `payment_failed_${paymentIntent.id}`,
                description: `Payment failed for application ${applicationId}`,
                timestamp: new Date(),
            },
        });

        logInfo("failed_payment_activity_upserted", { applicationId, paymentIntentId: paymentIntent.id });
    } catch (error) {
        logError("handle_payment_failure_failed", {
            applicationId,
            paymentIntentId: paymentIntent.id,
            message: error instanceof Error ? error.message : "unknown_error",
        });
    }
}