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

    if (!applicationId) {
      console.warn("Invalid applicationId received:", applicationId);
      return NextResponse.json({ error: "Invalid applicationId" }, { status: 400 });
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
        destination: {
          select: {
            code: true
          }
        }
      },
    });

    if (!application || !application.total) {
      return NextResponse.json(
        { error: 'Application not found or total not set' },
        { status: 404 }
      );
    }

    // For India, always use the backend-calculated total
    // For other countries, use the frontend-provided amount if it's valid
    let finalAmount: number;
    const isIndia = application.destination?.code?.toLowerCase() === 'in';
    
    if (isIndia) {
      // For India, always use the backend total (this is how India repo works)
      finalAmount = application.total;
      console.log(`[India Payment] Using backend-calculated total: $${finalAmount} for application ${applicationId}`);
    } else {
      // For other countries, validate the frontend amount
      if (!amount || typeof amount !== "number") {
        console.warn("Invalid amount received for non-India application:", amount);
        return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
      }
      finalAmount = amount;
      console.log(`[Non-India Payment] Using frontend-provided amount: $${finalAmount} for application ${applicationId}`);
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

    const amountInCents = Math.round(finalAmount * 100);

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
        amount: finalAmount,
        status: paymentIntent.status,
        type: 'PaymentIntent',
        title: 'Payment Intent Created',
        description: `Payment intent created for ${account.email} (${isIndia ? 'India' : 'Other'})`,
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