import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-05-28.basil",
});
const LOG_SCOPE = "payment-success-api";

function logInfo(event: string, meta: Record<string, unknown> = {}) {
  console.log(JSON.stringify({ level: "info", scope: LOG_SCOPE, event, meta, ts: new Date().toISOString() }));
}

function logError(event: string, meta: Record<string, unknown> = {}) {
  console.error(JSON.stringify({ level: "error", scope: LOG_SCOPE, event, meta, ts: new Date().toISOString() }));
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ applicationId: string }> }
) {
  try {
    const { applicationId } = await params;
    const body = await request.json();
    const { paymentIntentId, name, address, zipcode, country } = body;

    if (!applicationId || !paymentIntentId) {
      return NextResponse.json(
        { error: "Missing applicationId or paymentIntentId" },
        { status: 400 }
      );
    }

    logInfo("request_received", {
      applicationId,
      paymentIntentId,
      hasBillingDetails: !!(name && address && zipcode && country),
    });

    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    if (paymentIntent.status !== "succeeded") {
      logError("payment_intent_not_succeeded", { applicationId, paymentIntentId, status: paymentIntent.status });
      return NextResponse.json({ error: "Payment not succeeded" }, { status: 400 });
    }

    if (paymentIntent.metadata?.applicationId && paymentIntent.metadata.applicationId !== applicationId) {
      return NextResponse.json({ error: "Payment intent does not match application" }, { status: 400 });
    }

    logInfo("payment_intent_succeeded", { applicationId, paymentIntentId });

    // Get the application
    const application = await prisma.application.findUnique({
      where: { applicationId },
      select: { id: true, status: true, paymentStatus: true },
    });

    if (!application) {
      logError("application_not_found", { applicationId, paymentIntentId });
      return NextResponse.json({ error: "Application not found" }, { status: 404 });
    }

    // Update application status so confirmation/documents pages see payment completed immediately
    // (Webhook also updates this; idempotent so no duplicate side effects.)
    const alreadyPaid =
      application.paymentStatus === "Payment Completed" || application.status === "Collecting Documents";
    if (!alreadyPaid) {
      await prisma.application.update({
        where: { applicationId },
        data: {
          status: "Collecting Documents",
          paymentStatus: "Payment Completed",
        },
      });
      logInfo("application_marked_paid", { applicationId, paymentIntentId });
    }

    // Get card details from payment method
    let cardType = "Unknown";
    let cardLast4 = "****";

    if (paymentIntent.payment_method) {
      try {
        const paymentMethod = await stripe.paymentMethods.retrieve(
          paymentIntent.payment_method as string
        );
        cardLast4 = paymentMethod.card?.last4 || "****";
        cardType = paymentMethod.card?.brand || "Unknown";
      } catch (error) {
        logError("payment_method_retrieve_failed", {
          applicationId,
          paymentIntentId,
          message: error instanceof Error ? error.message : "unknown_error",
        });
      }
    }

    // Build full address from billing form data
    let fullAddress = "";
    if (address) {
      const addressParts = [address, country].filter(Boolean);
      fullAddress = addressParts.join(", ");
    }

    // Create CardHolder record
    if (name && address && zipcode && country) {
      try {
        await prisma.cardHolder.upsert({
          where: { applicationId: application.id },
          update: {
            name: name,
            cardType: cardType,
            cardNumber: `****${cardLast4}`,
            address: fullAddress,
            zipcode: zipcode,
          },
          create: {
            id: `card_${application.id}`,
            name: name,
            cardType: cardType,
            cardNumber: `****${cardLast4}`,
            address: fullAddress,
            zipcode: zipcode,
            applicationId: application.id,
          },
        });

        logInfo("cardholder_upserted", { applicationId, paymentIntentId });
      } catch (error) {
        logError("cardholder_upsert_failed", {
          applicationId,
          paymentIntentId,
          message: error instanceof Error ? error.message : "unknown_error",
        });
      }
    }

    return NextResponse.json({
      success: true,
      message: "Billing details saved",
    });
  } catch (error) {
    logError("request_failed", {
      message: error instanceof Error ? error.message : "unknown_error",
    });
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: "Failed to process payment success", details: errorMessage },
      { status: 500 }
    );
  }
}