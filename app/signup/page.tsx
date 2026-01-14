import SignupForm from "@/components/shared/Signup";
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/authOptions"
import { redirect } from "next/navigation"
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Create your Worldmaxxing Global Services account to start your visa application process.',
  alternates: {
    canonical: 'https://worldmaxxing.com/signup',
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
    <div
      className="bg-cover bg-center bg-no-repeat flex items-center justify-center p-6 md:p-10"
      style={{ backgroundImage: "url('/images/auth/bigbackground.jpg')" }}
    >
      <div className="w-full max-w-sm md:max-w-4xl">
        <SignupForm />
      </div>
    </div>
  );
}