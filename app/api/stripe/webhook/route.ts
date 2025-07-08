import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { prisma } from "@/lib/db";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-05-28.basil",
});

export async function POST(req: NextRequest) {
    console.log("Stripe webhook endpoint called");
    const sig = req.headers.get("stripe-signature")!;
    const body = await req.text();

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET!
        );
        console.log("Stripe webhook event received:", JSON.stringify(event, null, 2));
        console.log("Stripe event type received:", event.type);
    } catch (err) {
        console.error("Webhook signature verification failed.", err);
        return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    if (event.type === "payment_intent.succeeded" || event.type === "charge.succeeded") {
        let cardType = null;
        let lastFourDigits = null;
        let charge: any = null;
        let billingDetails = null;
        let applicationId = null;
        let amount = null;
        let paymentIntentId = null;

        if (event.type === "payment_intent.succeeded") {
            const paymentIntent = event.data.object as any;
            applicationId = paymentIntent.metadata?.applicationId;
            amount = paymentIntent.amount_received / 100;
            paymentIntentId = paymentIntent.id;
            charge = paymentIntent.charges?.data?.[0];
            billingDetails = charge?.billing_details;
        } else if (event.type === "charge.succeeded") {
            charge = event.data.object as any;
            applicationId = charge.metadata?.applicationId;
            amount = charge.amount / 100;
            paymentIntentId = charge.payment_intent;
            billingDetails = charge.billing_details;
        }

        if (charge && charge.payment_method_details && charge.payment_method_details.card) {
            cardType = charge.payment_method_details.card.brand || null;
            lastFourDigits = charge.payment_method_details.card.last4 || null;
        } else {
            // Debug log: print the full charge object if card details are missing
            console.warn('Stripe webhook: No card details found. Full charge object:', JSON.stringify(charge, null, 2));
        }

        // Find the Application by your custom applicationId
        const app = await prisma.application.findFirst({ where: { applicationId } });
        if (app) {
            // Update paymentStatus using the custom applicationId
            await prisma.application.updateMany({
                where: { applicationId },
                data: { paymentStatus: "success" },
            });

            // Create StripeActivity using the UUID id as the foreign key
            await prisma.stripeActivity.create({
                data: {
                    title: "Payment",
                    amount: amount,
                    status: "success",
                    type: "payment",
                    applicationId: app.id, // Use the UUID id here!
                    description: "Payment completed via Stripe",
                    timestamp: new Date(),
                    transactionId: paymentIntentId,
                    id: crypto.randomUUID(),
                },
            });
            console.log('Saving card details:', { cardType, lastFourDigits });
            // Optionally, save card details to a cardHolder table or log for confirmation page
            if (cardType && lastFourDigits) {
                console.log("Card details present, saving to DB:", { cardType, lastFourDigits });
                await prisma.cardHolder.create({
                    data: {
                        id: crypto.randomUUID(),
                        name: billingDetails?.name || "",
                        cardType,
                        cardNumber: `xxxx-xxxx-xxxx-${lastFourDigits}`,
                        address: billingDetails?.address?.line1 || "",
                        zipcode: billingDetails?.address?.postal_code || "",
                        applicationId: app.id,
                    },
                });
            } else {
                console.warn('No card details found in Stripe webhook for paymentIntent/charge:', paymentIntentId);
            }
        } else {
            console.error("No Application found with applicationId:", applicationId);
        }
    }

    return NextResponse.json({ received: true });
}