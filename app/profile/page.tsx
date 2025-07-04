import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
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
      websiteCreatedAt: "United Evisa", // ensure it's your site's user
    },
    select: {
      id: true,
      fullName: true,
      email: true,
      areaCode: true,
      phoneNumber: true,
      gender: true,
      createdAt: true,
      Application: {
        select: {
          id: true,
          applicationId: true,
          status: true,
          Destination: {
            select: { name: true }
          },
          VisaType: {
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

  // Map 'Application' to 'applications' to match ProfileClientProps
  const userWithApplications = user
    ? {
        ...user,
        applications: user.Application.map(app => ({
          id: app.id,
          applicationId: app.applicationId,
          status: app.status,
          createdAt: app.createdAt,
          destination: app.Destination,
          visaType: app.VisaType,
        })),
      }
    : null;

  return userWithApplications && <ProfileClient user={userWithApplications} />
}