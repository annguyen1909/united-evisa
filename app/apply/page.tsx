import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/db";
import ApplyForm from "@/components/shared/ApplyForm";

export default async function ApplyPage() {
  const session = await getServerSession(authOptions);

  let user = null;
  if (session?.user?.email) {
    user = await prisma.account.findFirst({
      where: {
        email: session.user.email,
        websiteCreatedAt: "United Evisa",
      },
      select: {
        fullName: true,
        email: true,
        areaCode: true,
        phoneNumber: true,
        gender: true,
        createdAt: true,
      },
    });
  }

  return <ApplyForm user={user} />;
}