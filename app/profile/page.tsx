import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Profile',
  description: 'View and manage your Worldmaxxing Global Services account and visa applications.',
  alternates: {
    canonical: 'https://worldmaxxing.com/profile',
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/authOptions"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/db"
import ProfileClient from "@/components/shared/ProfileClient"

export default async function ProfilePage() {
  const session = await getServerSession(authOptions)

  if (!session || !session.user?.email) {
    redirect("/login")
  }

  // Fetch full user data from Prisma if needed
  const user = await prisma.account.findFirst({
    where: {
      email: session.user.email,
      websiteCreatedAt: "Worldmaxxing Site", // ensure it's your site's user
    },
    select: {
      id: true,
      fullName: true,
      email: true,
      areaCode: true,
      phoneNumber: true,
      gender: true,
      createdAt: true,
      applications: {
        select: {
          id: true,
          applicationId: true,
          status: true,
          destination: {
            select: { name: true }
          },
          visaType: {
            select: { name: true }
          },
          createdAt: true,
        },
        orderBy: {
          createdAt: 'desc'
        },
        take: 5
      }
    },
  })

  if (!user) {
    redirect("/login")
  }

  // Map 'applications' to match ProfileClientProps
  const userWithApplications = user
    ? {
        ...user,
        applications: user.applications.map(app => ({
          id: app.id,
          applicationId: app.applicationId,
          status: app.status,
          createdAt: app.createdAt,
          destination: app.destination,
          visaType: app.visaType,
        })),
      }
    : null;

  return userWithApplications && <ProfileClient user={userWithApplications} />
}