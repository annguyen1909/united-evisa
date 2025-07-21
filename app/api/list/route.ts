import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/db";

export async function GET() {
  const session = await getServerSession();
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  
  console.log('List route - User email:', session.user.email);
  console.log('List route - Looking for account with websiteCreatedAt:', "Worldmaxxing Site");
  
  const account = await prisma.account.findUnique({
    where: { email_websiteCreatedAt: { email: session.user.email, websiteCreatedAt: "Worldmaxxing Site" } },
    select: { id: true },
  });
  
  console.log('List route - Found account:', account);
  
  // Check for all accounts with this email to see if there are multiple
  const allAccountsWithEmail = await prisma.account.findMany({
    where: { email: session.user.email },
    select: { id: true, websiteCreatedAt: true },
  });
  console.log('List route - All accounts with this email:', allAccountsWithEmail);
  
  if (!account) {
    console.log('List route - No account found, returning empty applications');
    return NextResponse.json({ applications: [] });
  }
  
  console.log('List route - Looking for applications with accountId:', account.id);
  
  const applications = await prisma.application.findMany({
    where: { accountId: account.id },
    include: {
      visaType: true,  // Add this to include the VisaType relation  // Also include Passengers as defined in your interface
    },
    orderBy: { createdAt: "desc" },
  });
  
  console.log('List route - Found applications:', applications.length);
  console.log('List route - Application IDs:', applications.map(app => app.applicationId));
  
  return NextResponse.json({ applications });
}