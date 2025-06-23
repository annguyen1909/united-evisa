import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/db" 

export default async function ProfilePage() {
  const session = await getServerSession(authOptions)

  if (!session || !session.user?.email) {
    redirect("/login")
  }

  // Fetch full user data from Prisma if needed
  const user = await prisma.account.findFirst({
    where: {
      email: session.user.email,
      websiteCreatedAt: "United Evisa", // ensure it’s your site’s user
    },
    select: {
      fullName: true,
      email: true,
      areaCode: true,
      phoneNumber: true,
      gender: true,
    },
  })

  if (!user) {
    redirect("/login")
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-2">Welcome, {user.fullName}</h1>
        <p className="text-gray-600">Email: {user.email}</p>
        <p className="text-gray-600">Phone: {user.areaCode} {user.phoneNumber}</p>
        <p className="text-gray-600">Gender: {user.gender}</p>
      </div>
    </div>
  )
}
