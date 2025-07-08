import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/authOptions";
import { prisma } from "@/lib/db";
import ApplyForm from "@/components/shared/ApplyForm";
import { Suspense } from "react";

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

  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-600 mb-4"></div>
          <p className="text-slate-700 font-medium">Loading application form...</p>
        </div>
      </div>
    }>
      <ApplyForm user={user} />
    </Suspense>
  );
}