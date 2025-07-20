// app/api/create-payment-intent/route.ts
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { prisma } from '@/lib/db';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-05-28.basil',
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const amount = body.amount;
    const applicationId = body.applicationId;

    if (!amount || typeof amount !== "number" || !applicationId) {
      console.warn("Invalid amount or applicationId received:", amount, applicationId);
      return NextResponse.json({ error: "Invalid amount or applicationId" }, { status: 400 });
    }

    // Get the application to verify it exists and get account email
    const application = await prisma.application.findUnique({
      where: { applicationId },
      select: {
        id: true,
        total: true,
        accountId: true,
        paymentStatus: true,
        status: true,
      },
    });

    if (!application || !application.total) {
      return NextResponse.json(
        { error: 'Application not found or total not set' },
        { status: 404 }
      );
    }

    // Prevent creating payment intent if payment is already completed
    if (
      application.paymentStatus === 'Payment Completed' ||
      application.status === 'Collecting Documents'
    ) {
      console.log(
        `Payment intent creation blocked for application ${applicationId}: Payment already completed`
      );
      return NextResponse.json(
        { error: 'Payment already completed for this application' },
        { status: 400 }
      );
    }

    const account = await prisma.account.findUnique({
      where: { id: application.accountId },
      select: { email: true },
    });

    if (!account) {
      return NextResponse.json({ error: 'Account not found' }, { status: 404 });
    }

    const amountInCents = Math.round(amount * 100);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency: 'usd',
      receipt_email: account.email,
      metadata: { applicationId },
      automatic_payment_methods: { enabled: true },
    });

    // Record the Stripe activity when payment intent is created
    await prisma.stripeActivity.create({
      data: {
        id: paymentIntent.id,
        applicationId: application.id,
        amount: amount,
        status: paymentIntent.status,
        type: 'PaymentIntent',
        title: 'Payment Intent Created',
        description: `Payment intent created for ${account.email}`,
        timestamp: new Date(paymentIntent.created * 1000),
        transactionId: paymentIntent.id,
      },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (err: unknown) {
    console.error('Stripe error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}