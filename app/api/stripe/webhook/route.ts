import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { prisma } from "@/lib/db";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-05-28.basil",
});

export async function POST(req: NextRequest) {
    const sig = req.headers.get("stripe-signature")!;
    const body = await req.text();

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET!
        );
    } catch (err) {
        console.error("Webhook signature verification failed.", err);
        return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    if (event.type === "payment_intent.succeeded") {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        const applicationId = paymentIntent.metadata?.applicationId;

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
                    amount: paymentIntent.amount_received / 100,
                    status: "success",
                    type: "payment",
                    applicationId: app.id, // Use the UUID id here!
                    description: "Payment completed via Stripe",
                    timestamp: new Date(),
                    transactionId: paymentIntent.id,
                    id: crypto.randomUUID(), // Add this line to provide a unique id
                },
            });
        } else {
            console.error("No Application found with applicationId:", applicationId);
        }
    }

    return NextResponse.json({ received: true });
}