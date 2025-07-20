// app/api/create-payment-intent/route.ts
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-05-28.basil',
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const amount = body.amount;
    const applicationId = body.applicationId;
    // Optionally log govFee and serviceFee if sent
    const govFee = body.govFee;
    const serviceFee = body.serviceFee;

    console.log('[Stripe] Creating payment intent:', {
      applicationId,
      amount,
      govFee,
      serviceFee,
      expectedTotal: govFee && serviceFee ? govFee + serviceFee : undefined
    });

    if (!amount || typeof amount !== "number" || !applicationId) {
      console.warn("Invalid amount or applicationId received:", amount, applicationId);
      return NextResponse.json({ error: "Invalid amount or applicationId" }, { status: 400 });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount, // in cents
      currency: 'usd',
      automatic_payment_methods: { enabled: true },
      metadata: { applicationId }
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (err: unknown) {
    console.error('Stripe error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}