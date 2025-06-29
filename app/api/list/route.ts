import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/db";

export async function GET(req: NextRequest) {
  const session = await getServerSession();
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  // Replace with the correct unique identifier for Account
  // Example using 'id' if you have it in session.user, otherwise use the compound key
  // Here is an example using the compound unique key 'email_websiteCreatedAt'
  const account = await prisma.account.findUnique({
    where: { email_websiteCreatedAt: { email: session.user.email, websiteCreatedAt: "United Evisa" } },
    select: { id: true },
  });
  if (!account) {
    return NextResponse.json({ applications: [] });
  }
  const applications = await prisma.application.findMany({
    where: { accountId: account.id },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json({ applications });
}