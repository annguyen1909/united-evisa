import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getServerSession } from 'next-auth';

// GET - List documents for an application
export async function GET(
  _request: NextRequest,
  { params }: { params: { applicationId: string } }
) {
  try {
    const { applicationId } = params;

    const session = await getServerSession();
    if (!session?.user?.email) {
      return NextResponse.json({
        type: "AUTH",
        message: "For your security, please log in to upload documents. We have created an account for you using your email from Step 1."
      }, { status: 401 });
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

    if (!account || (account.id !== application.accountId)) {
      return NextResponse.json({ error: "Unauthorized to view these documents" }, { status: 403 });
    }

    // Get documents (excluding content for performance)
    const documents = await prisma.applicationDocument.findMany({
      where: { applicationId: application.id },
      select: {
        id: true,
        name: true,
        type: true,
        status: true,
        uploadedAt: true,
        uploadedBy: true,
        createdAt: true,
        updatedAt: true,
        // Exclude 'content' field as it can be large
      }
    });

    return NextResponse.json({ documents });
  } catch (error) {
    console.error('Error fetching documents:', error);
    return NextResponse.json({ error: 'Failed to fetch documents' }, { status: 500 });
  }
}

// POST - Upload a new document
export async function POST(
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

    if (!account || (account.id !== application.accountId)) {
      return NextResponse.json({ error: "Unauthorized to upload documents" }, { status: 403 });
    }

    // Parse form data
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const name = formData.get('name') as string;
    const type = formData.get('type') as string;

    if (!file || !name || !type) {
      return NextResponse.json({ error: "Missing required fields: file, name, or type" }, { status: 400 });
    }

    // Convert file to Buffer
    const fileBuffer = Buffer.from(await file.arrayBuffer());

    // Create document
    const document = await prisma.applicationDocument.create({
      data: {
        applicationId: application.id,
        name,
        type,
        content: fileBuffer,
        status: 'Pending',
        uploadedBy: session.user.email,
        id: crypto.randomUUID(),
        updatedAt: new Date(),
        // id and updatedAt are provided to satisfy Prisma requirements
      }
    });

    await prisma.application.update({
      where: { id: application.id },
      data: { status: "Processing" }
    });

    // Return the document without the content field
    const { ...documentWithoutContent } = document;

    return NextResponse.json({
      message: 'Document uploaded successfully',
      document: documentWithoutContent
    }, { status: 201 });
  } catch (error) {
    console.error('Error uploading document:', error);
    return NextResponse.json({ error: 'Failed to upload document' }, { status: 500 });
  }
}