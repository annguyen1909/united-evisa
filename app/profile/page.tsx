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
      createdAt: true,
    },
  })

  if (!user) {
    redirect("/login")
  }

  return (
    <section className="flex flex-col gap-4 items-center justify-center mt-12">
      <div className="w-full max-md:max-w-xl max-w-4xl ">
        <h1 className="text-3xl text-[#16601E] font-bold mb-2">Your Account Information</h1>
        <div className="w-full border-4 border-white p-12 bg-[#FED16A66] rounded-lg shadow-md">
          <div className="flex gap-2 w-full">
            <div className="flex flex-col gap-4 text-left whitespace-nowrap">
              <p className="text-gray-600 font-semibold">Email:</p>
              <p className="text-gray-600 font-semibold">Phone:</p>
              <p className="text-gray-600 font-semibold">Gender:</p>
              <p className="text-gray-600 font-semibold">Joined:</p>
            </div>
            <div className="flex flex-col gap-4 text-left">
              <p className="text-gray-600">{user.email}</p>
              <p className="text-gray-600">{user.areaCode} {user.phoneNumber}</p>
              <p className="text-gray-600">{user.gender}</p>
              <p className="text-gray-600">{new Date(user.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-md:max-w-xl w-full max-w-4xl flex font-semibold text-gray-500">
        <p>If you need to update your name, email, or phone number, please contact our support team for assistance.</p>
      </div>
      <div className="w-full max-md:max-w-xl max-w-4xl ">
        <h1 className="text-3xl text-[#16601E] font-bold mb-2">Update Your Password</h1>
        <div className="flexw-full border-4 border-white p-12 bg-[#FED16A66] rounded-lg shadow-md">
          <div className="flex gap-2 w-full">
            <div className="flex flex-col gap-4 text-left whitespace-nowrap">
              <p className="text-gray-600 font-semibold">Email:</p>
              <p className="text-gray-600 font-semibold">Phone:</p>
              <p className="text-gray-600 font-semibold">Gender:</p>
              <p className="text-gray-600 font-semibold">Joined:</p>
            </div>
            <div className="flex flex-col gap-4 text-left">
              <p className="text-gray-600">{user.email}</p>
              <p className="text-gray-600">{user.areaCode} {user.phoneNumber}</p>
              <p className="text-gray-600">{user.gender}</p>
              <p className="text-gray-600">{new Date(user.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
