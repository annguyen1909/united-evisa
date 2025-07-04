import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getServerSession } from 'next-auth';

// GET - Get document requirements for an application
export async function GET(
  request: NextRequest,
  { params }: { params: { applicationId: string } }
) {
  try {
    const { applicationId } = params;
    
    const session = await getServerSession();
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    // Find the application
    const application = await prisma.application.findUnique({
      where: { applicationId },
      include: {
        visaType: true,
        account: true,
        customRequirements: true,
        passengers: {
          select: {
            id: true,
            fullName: true,
            nationality: true
          }
        }
      }
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
      select: { id: true, role: true },
    });
    
    if (!account || (account.id !== application.accountId && account.role !== 'ADMIN')) {
      return NextResponse.json({ error: "Unauthorized to access this application" }, { status: 403 });
    }
    
    // Get standard document requirements from visa type
    const standardRequirements = application.visaType.requiredDocuments 
      ? JSON.parse(application.visaType.requiredDocuments as string) 
      : [];
    
    // Get custom requirements specific to this application
    const customRequirements = application.customRequirements.map(req => ({
      id: req.id,
      title: req.title,
      passengerId: req.passengerId,
      passengerName: application.passengers.find(p => p.id === req.passengerId)?.fullName || 'Unknown'
    }));
    
    return NextResponse.json({
      standardRequirements,
      customRequirements,
      passengers: application.passengers
    });
  } catch (error) {
    console.error('Error fetching document requirements:', error);
    return NextResponse.json({ error: 'Failed to fetch document requirements' }, { status: 500 });
  }
}

// POST - Add custom document requirement
export async function POST(
  request: NextRequest,
  { params }: { params: { applicationId: string } }
) {
  try {
    const { applicationId } = params;
    const body = await request.json();
    const { passengerId, title } = body;
    
    if (!passengerId || !title) {
      return NextResponse.json({ error: "Missing required fields: passengerId or title" }, { status: 400 });
    }
    
    const session = await getServerSession();
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    // Verify this is an admin user (only admins can add custom requirements)
    const account = await prisma.account.findUnique({
      where: { 
        email_websiteCreatedAt: { 
          email: session.user.email, 
          websiteCreatedAt: "United Evisa" 
        }
      },
      select: { id: true, role: true },
    });
    
    if (!account || account.role !== 'ADMIN') {
      return NextResponse.json({ error: "Only administrators can add custom requirements" }, { status: 403 });
    }
    
    // Find the application
    const application = await prisma.application.findUnique({
      where: { applicationId }
    });
    
    if (!application) {
      return NextResponse.json({ error: "Application not found" }, { status: 404 });
    }
    
    // Verify the passenger belongs to this application
    const passenger = await prisma.passenger.findFirst({
      where: {
        id: passengerId,
        applicationId: application.id
      }
    });
    
    if (!passenger) {
      return NextResponse.json({ error: "Passenger not found in this application" }, { status: 404 });
    }
    
    // Create custom requirement
    const requirement = await prisma.customRequirement.create({
      data: {
        applicationId: application.id,
        passengerId,
        title
      }
    });
    
    return NextResponse.json({
      message: 'Custom requirement added successfully',
      requirement
    }, { status: 201 });
  } catch (error) {
    console.error('Error adding custom requirement:', error);
    return NextResponse.json({ error: 'Failed to add custom requirement' }, { status: 500 });
  }
}