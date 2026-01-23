import { Metadata } from 'next';

interface ApplyPageProps {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

export async function generateMetadata({ searchParams }: ApplyPageProps): Promise<Metadata> {
  const resolvedParams = searchParams ? await searchParams : undefined;
  const hasParams = Boolean(resolvedParams && Object.keys(resolvedParams).length > 0);

  return {
    title: 'Apply for eVisa | Worldmaxxing Global Services',
    description: 'Start your eVisa application with Worldmaxxing Global Services. Fast, secure, and easy process.',
    alternates: {
      canonical: 'https://worldmaxxing.com/apply',
    },
    robots: hasParams
      ? {
          index: false,
          follow: true,
        }
      : {
          index: true,
          follow: true,
        },
  };
}

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/authOptions";
import { prisma } from "@/lib/db";
import ApplyForm from "@/components/shared/ApplyForm";

export default async function ApplyPage() {
  const session = await getServerSession(authOptions);

  // Only fetch minimal user data needed for the form
  const user = session?.user?.email 
    ? await prisma.account.findFirst({
        where: {
          email: session.user.email,
          websiteCreatedAt: "Worldmaxxing Site",
        },
        select: {
          fullName: true,
          email: true,
          areaCode: true,
          phoneNumber: true,
          gender: true,
        },
      })
    : null;

  return <ApplyForm user={user} />;
}