// /login/page.tsx
import { LoginForm } from "@/components/shared/Login";
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"

export default async function LoginPage() {
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
      <LoginForm />
    </div>
  </div>
);

}
