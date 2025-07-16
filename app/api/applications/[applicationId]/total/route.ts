import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

// POST - Update only the total for an application (no auth, guest allowed)
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ applicationId: string }> }
) {
  try {
    const { applicationId } = await params;
    const body = await request.json();
    const { total } = body;
    if (typeof total !== 'number' || isNaN(total)) {
      return NextResponse.json({ error: 'Invalid total' }, { status: 400 });
    }
    // Update the total for the application (no auth, guest allowed)
    const updated = await prisma.application.update({
      where: { applicationId },
      data: { total },
      select: { applicationId: true, total: true }
    });
    return NextResponse.json(updated);
  } catch (error) {
    console.error('Error updating total:', error);
    return NextResponse.json({ error: 'Failed to update total' }, { status: 500 });
  }
}
