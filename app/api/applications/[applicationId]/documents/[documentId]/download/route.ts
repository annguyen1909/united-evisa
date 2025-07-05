import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getServerSession } from 'next-auth';

// GET - Download document content
export async function GET(
  request: NextRequest,
  { params }: { params: { applicationId: string, documentId: string } }
) {
  try {
    const { applicationId, documentId } = params;
    
    const session = await getServerSession();
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    // Find document and verify it belongs to the application
    const document = await prisma.applicationDocument.findFirst({
      where: {
        id: documentId,
        Application: {
          applicationId
        }
      },
      include: {
        Application: {
          select: {
            accountId: true
          }
        }
      }
    });
    
    if (!document) {
      return NextResponse.json({ error: "Document not found" }, { status: 404 });
    }
    
    // Verify ownership
    const account = await prisma.account.findUnique({
      where: { 
        email_websiteCreatedAt: { 
          email: session.user.email, 
          websiteCreatedAt: "United Evisa" 
        }
      },
      select: { id: true},
    });
    
    if (!account || (account.id !== document.Application.accountId)) {
      return NextResponse.json({ error: "Unauthorized to download this document" }, { status: 403 });
    }
    
    // Determine content type based on document type or name
    let contentType = 'application/octet-stream'; // Default binary content type
    
    if (document.type === 'pdf' || document.name.toLowerCase().endsWith('.pdf')) {
      contentType = 'application/pdf';
    } else if (
      document.type === 'image' || 
      /\.(jpg|jpeg|png|gif|webp)$/i.test(document.name)
    ) {
      const extension = document.name.split('.').pop()?.toLowerCase();
      if (extension === 'jpg' || extension === 'jpeg') contentType = 'image/jpeg';
      else if (extension === 'png') contentType = 'image/png';
      else if (extension === 'gif') contentType = 'image/gif';
      else if (extension === 'webp') contentType = 'image/webp';
      else contentType = 'image/jpeg'; // Default image type
    }
    
    // Return the document content with appropriate content type
    return new NextResponse(document.content, {
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `attachment; filename="${encodeURIComponent(document.name)}"`,
      },
    });
  } catch (error) {
    console.error('Error downloading document:', error);
    return NextResponse.json({ error: 'Failed to download document' }, { status: 500 });
  }
}