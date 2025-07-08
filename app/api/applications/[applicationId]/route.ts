import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getServerSession } from 'next-auth';

// GET - Get a single application by ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ applicationId: string }> }
) {
  try {
    const { applicationId } = await params;
    const session = await getServerSession();

    const application = await prisma.application.findUnique({
      where: { applicationId },
      include: {
        visaType: true,
        destination: true,
        passengers: {
          select: {
            id: true,
            applicationId: true,
            createdAt: true,
            passportNumber: true,
            updatedAt: true,
            dateOfBirth: true,
            fullName: true,
            gender: true,
            nationality: true,
            status: true
          }
        },
        cardHolder: true,
        applicationDocuments: true,
        account: {
          select: {
            id: true,
            fullName: true,
            email: true,
            areaCode: true,
            phoneNumber: true,
            gender: true
          }
        }
      }
    });

    if (!application) {
      return NextResponse.json({ error: "Application not found" }, { status: 404 });
    }

    if (session?.user?.email) {
      // Logged in: verify ownership
      const account = await prisma.account.findUnique({
        where: {
          email_websiteCreatedAt: {
            email: session.user.email,
            websiteCreatedAt: "United Evisa"
          }
        },
        select: { id: true },
      });
      if (!account || (account.id !== application.accountId)) {
        return NextResponse.json({ error: "Unauthorized to view this application" }, { status: 403 });
      }
    }
    // If not logged in, allow access

    return NextResponse.json(application);
  } catch (error) {
    console.error('Error fetching application:', error);
    return NextResponse.json({ error: 'Failed to fetch application details' }, { status: 500 });
  }
}

// PATCH - Update application details
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ applicationId: string }> }
) {
  try {
    const { applicationId } = await params;
    const body = await request.json();
    
    const session = await getServerSession();
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    // Find application first
    const application = await prisma.application.findUnique({
      where: { applicationId },
      include: { account: true }
    });
    
    if (!application) {
      return NextResponse.json({ error: "Application not found" }, { status: 404 });
    }
    
    // Verify ownership (only if not an admin)
    const account = await prisma.account.findUnique({
      where: { 
        email_websiteCreatedAt: { 
          email: session.user.email, 
          websiteCreatedAt: "United Evisa" 
        }
      },
      select: { id: true},
    });
    
    if (!account || (account.id !== application.accountId)) {
      return NextResponse.json({ error: "Unauthorized to update this application" }, { status: 403 });
    }
    
    // Update the application
    const updatedApplication = await prisma.application.update({
      where: { id: application.id },
      data: {
        status: body.status,
        paymentStatus: body.paymentStatus,
        passengerCount: body.passengerCount,
        stayingStart: body.stayingStart ? new Date(body.stayingStart) : undefined,
        stayingEnd: body.stayingEnd ? new Date(body.stayingEnd) : undefined,
        total: body.total,
        visaTypeId: body.visaTypeId,
        destinationId: body.destinationId,
        updatedAt: new Date()
      },
      include: {
        visaType: true,
        destination: true,
        passengers: true
      }
    });
    
    return NextResponse.json(updatedApplication);
  } catch (error) {
    console.error('Error updating application:', error);
    return NextResponse.json({ error: 'Failed to update application' }, { status: 500 });
  }
}

// DELETE - Submit a cancellation request
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ applicationId: string }> }
) {
  try {
    const { applicationId } = await params;
    const { reason, details } = await request.json();
    
    const session = await getServerSession();
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    // Find application first
    const application = await prisma.application.findUnique({
      where: { applicationId }
    });
    
    if (!application) {
      return NextResponse.json({ error: "Application not found" }, { status: 404 });
    }
    
    // Verify ownership - simple check that this user owns the application
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
      return NextResponse.json({ error: "Unauthorized to request cancellation for this application" }, { status: 403 });
    }
    
    // Submit cancellation request (not actually cancelling)
    const updatedApplication = await prisma.application.update({
      where: { id: application.id },
      data: {
        status: "Cancellation Requested",  // Change from "Cancelled" to "Cancellation Requested"
        cancellationReason: reason || "User requested cancellation",
        cancellationDetails: details || "",
      }
    });
    
    return NextResponse.json({ 
      message: "Cancellation request submitted successfully",
      application: updatedApplication
    });
  } catch (error) {
    console.error('Error submitting cancellation request:', error);
    return NextResponse.json({ error: 'Failed to submit cancellation request' }, { status: 500 });
  }
}