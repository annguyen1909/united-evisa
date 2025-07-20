"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { FaGoogle, FaFacebook } from 'react-icons/fa'
import { AlertCircle, Loader2 } from 'lucide-react'
import ResetPasswordForm from "@/components/shared/ResetPasswordForm"

export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [showReset, setShowReset] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    })

    setLoading(false)

    if (res?.error) {
      setError(res.error || "Login failed")
    } else {
      router.push("/profile") // or your desired page after login
    }
  }

  // Handler for forgot password
  const handleForgotPassword = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowReset(true);
  }

  return (
    <div className={cn("flex flex-col gap-6 max-w-4xl mx-auto py-10", className)} {...props}>
      <Card className="overflow-hidden p-0 border-slate-200 shadow-sm">
        <CardContent className="grid p-0 md:grid-cols-2">
          <div className="relative hidden md:block h-full min-h-[550px]">
            <div className="absolute inset-0 bg-emerald-600/20 z-10 backdrop-blur-[2px]" />
            <Image
              fill
              src="/images/auth/background.jpg"
              alt="Image"
              className="absolute inset-0 object-cover"
              priority
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-8">
              <div className="bg-white/80 p-6 rounded-xl backdrop-blur-sm shadow-lg text-center max-w-md">
                <h2 className="text-2xl font-bold text-emerald-800 mb-2">Welcome to United eVisa</h2>
                <p className="text-slate-700">Access your account to manage your visa applications and track their status.</p>
              </div>
            </div>
          </div>
          <div className="p-6 md:p-10 w-full">
            {!showReset ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col items-center text-center mb-4">
                  <h1 className="text-2xl font-bold text-slate-800">Welcome Back</h1>
                  <p className="text-slate-500 mt-1">Sign in to your account</p>
                </div>

                {error && (
                  <div className="bg-red-50 text-red-700 p-3 rounded-md flex items-center gap-2 text-sm border border-red-100">
                    <AlertCircle className="h-4 w-4" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-slate-700 font-medium">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="you@example.com"
                    className="focus:ring-emerald-500"
                  />
                </div>

                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-slate-700 font-medium">Password *</Label>
                    <button
                      type="button"
                      className="text-emerald-600 text-sm hover:text-emerald-700 hover:underline"
                      onClick={handleForgotPassword}
                    >
                      Forgot password?
                    </button>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="focus:ring-emerald-500"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 mt-2"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    "Sign in"
                  )}
                </Button>

                <div className="relative my-2">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-white px-4 text-sm text-slate-500">Or continue with</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" type="button" className="w-full border-slate-300 hover:bg-slate-50 text-slate-800">
                    <FaGoogle className="mr-2 h-4 w-4 text-red-500" />
                    Google
                  </Button>
                  <Button variant="outline" type="button" className="w-full border-slate-300 hover:bg-slate-50 text-slate-800">
                    <FaFacebook className="mr-2 h-4 w-4 text-blue-600" />
                    Facebook
                  </Button>
                </div>

                <div className="text-center text-slate-600 text-sm pt-2">
                  Don&apos;t have an account?{" "}
                  <a href="/signup" className="text-emerald-600 font-medium hover:underline">
                    Create account
                  </a>
                </div>
              </form>
            ) : (
              <ResetPasswordForm />
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}