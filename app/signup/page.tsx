import SignupForm from "@/components/shared/Signup";
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/authOptions"
import { redirect } from "next/navigation"
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Create your United eVisa Services account to start your visa application process.',
  alternates: {
    canonical: 'https://unitedevisa.com/signup',
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default async function SignupPage() {
  const session = await getServerSession(authOptions)

  if (session?.user) {
    redirect("/profile") // or "/" or whatever page you want
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/40 via-white to-white flex items-center justify-center p-6 md:p-10">
      <div className="relative w-full max-w-sm md:max-w-4xl">
        <div className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-blue-200/40 via-white to-amber-100/40 blur-2xl" />
        <div className="relative">
          <SignupForm />
        </div>
      </div>
    </div>
  );
}