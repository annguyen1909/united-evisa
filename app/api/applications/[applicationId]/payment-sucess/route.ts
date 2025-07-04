import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getServerSession } from 'next-auth';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2025-05-28.basil'  // Use the required API version
});

export async function POST(
  request: NextRequest,
  { params }: { params: { applicationId: string } }
) {
  try {
    const { applicationId } = params;
    const body = await request.json();
    const { paymentIntentId, billingDetails } = body;
    
    if (!paymentIntentId) {
      return NextResponse.json({ error: "Payment Intent ID is required" }, { status: 400 });
    }
    
    const session = await getServerSession();
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    // Find the application
    const application = await prisma.application.findUnique({
      where: { applicationId }
    });
    
    if (!application) {
      return NextResponse.json({ error: "Application not found" }, { status: 404 });
    }
    
    // Verify ownership
    const account = await prisma.account.findUnique({
      where: { 
        email_websiteCreatedAt: { 
          email: session.user.email, 
          websiteCreatedAt: "United Evisa" 
        }
      },
      select: { id: true },
    });
    
    if (!account || account.id !== application.accountId) {
      return NextResponse.json({ error: "Unauthorized to process payment for this application" }, { status: 403 });
    }
    
    // Verify payment with Stripe
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    
    if (paymentIntent.status !== 'succeeded') {
      return NextResponse.json({ 
        error: "Payment not successful", 
        status: paymentIntent.status 
      }, { status: 400 });
    }
    
    // If billing details provided, save as CardHolder
    if (billingDetails) {
      const name = billingDetails.name;
      const cardType = billingDetails.card?.brand || 'unknown';
      const lastDigits = billingDetails.card?.last4 || '';
      const cardNumber = `**** **** **** ${lastDigits}`;
      const address = [
        billingDetails.address?.line1,
        billingDetails.address?.line2,
        billingDetails.address?.city,
        billingDetails.address?.state,
        billingDetails.address?.country
      ].filter(Boolean).join(', ');
      
      const zipcode = billingDetails.address?.postal_code || '';
      
      // Create or update CardHolder record
      await prisma.cardHolder.upsert({
        where: { applicationId: application.id },
        update: {
          name,
          cardType,
          cardNumber,
          address,
          zipcode
        },
        create: {
          id: crypto.randomUUID(),
          applicationId: application.id,
          name,
          cardType,
          cardNumber,
          address,
          zipcode
        }
      });
    }
    
    // Record payment in StripeActivity
    await prisma.stripeActivity.create({
      data: {
        id: crypto.randomUUID(),
        applicationId: application.id,
        title: 'Payment Successful',
        amount: application.total || 0,
        status: 'succeeded',
        type: 'payment',
        description: `Payment for application ${applicationId}`,
        timestamp: new Date(),
        transactionId: paymentIntentId
      }
    });
    
    // Update application status
    await prisma.application.update({
      where: { id: application.id },
      data: {
        status: 'Collecting Documents',
        paymentStatus: 'Payment Completed',
        updatedAt: new Date()
      }
    });
    
    return NextResponse.json({
      success: true,
      message: 'Payment processed successfully',
      status: 'Collecting Documents'
    });
  } catch (error) {
    console.error('Error processing payment success:', error);
    return NextResponse.json({ error: 'Failed to process payment confirmation' }, { status: 500 });
  }
}