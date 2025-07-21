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