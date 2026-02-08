"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { AlertCircle } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { signIn } from "next-auth/react"

export default function SignupForm({ className, ...props }: React.ComponentProps<"div">) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const form = e.currentTarget
    const formData = new FormData(form)

    const payload = {
      email: formData.get("email"),
      password: formData.get("password"),
      fullName: formData.get("fullName"),
      phoneNumber: formData.get("phoneNumber"),
      areaCode: formData.get("areaCode"),
      gender: formData.get("gender"),
      smsOptIn: formData.get("smsOptIn") === "on",
    }

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (!res.ok) {
        setLoading(false)
        setError(data.error || "Signup failed")
      } else {
        // Account created successfully, now sign in the user
        const signInResult = await signIn("credentials", {
          email: payload.email,
          password: payload.password,
          redirect: false,
        })

        setLoading(false)

        if (signInResult?.error) {
          setError("Account created but login failed. Please try logging in manually.")
        } else {
          // Track Google Ads conversion
          if (typeof window !== 'undefined' && (window as any).gtag) {
            console.log('Firing Google Ads conversion for signup');
            (window as any).gtag('event', 'conversion', {
              'send_to': 'AW-17433558858/0ih1CIL0gIAbEMr--_hA',
              'value': 1.0,
              'currency': 'USD'
            });
            
            // Add a small delay before redirect to ensure conversion fires
            setTimeout(() => {
              window.location.href = "/profile"
            }, 500);
          } else {
            console.log('gtag not available for conversion tracking');
            // Successfully signed in, redirect to profile
            window.location.href = "/profile"
          }
        }
      }
    } catch (err) {
      setLoading(false)
      setError("An unexpected error occurred. Please try again.")
    }
  }

  return (
    <div className={cn("flex flex-col gap-6 max-w-4xl mx-auto py-10", className)} {...props}>
      <Card className="overflow-hidden p-0 border-slate-200 shadow-sm">
        <CardContent className="grid p-0 md:grid-cols-2">
          <div className="relative hidden md:block h-full min-h-[650px]">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 via-blue-900/10 to-amber-500/20 z-10 backdrop-blur-[2px]" />
            <Image
              fill
              src="/images/auth/background.jpg"
              alt="Sign up image"
              className="absolute inset-0 object-cover"
              priority
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-8">
              <div className="bg-white/85 p-6 rounded-2xl backdrop-blur-sm shadow-lg text-center max-w-md">
                <h2 className="text-2xl font-bold text-blue-800 mb-2">Welcome to United Evisa</h2>
                <p className="text-slate-700">Create your account to manage applications, upload documents, and track updates.</p>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 md:p-10 w-full">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center mb-2">
                <h1 className="text-2xl font-bold text-slate-800">Create your United Evisa account</h1>
                <p className="text-slate-500 mt-1">Get started in minutes with a secure profile</p>
              </div>

              {error && (
                <div className="bg-red-50 text-red-700 p-3 rounded-md flex items-center gap-2 text-sm border border-red-100">
                  <AlertCircle className="h-4 w-4" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid gap-5">
                <div className="grid gap-2">
                  <Label htmlFor="fullName" className="text-slate-700 font-medium">Full Name *</Label>
                  <Input 
                    id="fullName" 
                    name="fullName" 
                    placeholder="Enter your full name" 
                    required 
                    className="focus:ring-blue-500"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-slate-700 font-medium">Email *</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="Enter your email" 
                    required 
                    className="focus:ring-blue-500"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="password" className="text-slate-700 font-medium">Password *</Label>
                  <Input 
                    id="password" 
                    name="password" 
                    type="password" 
                    required 
                    className="focus:ring-blue-500"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="areaCode" className="text-slate-700 font-medium">Area Code *</Label>
                    <Input 
                      id="areaCode" 
                      name="areaCode" 
                      placeholder="+84" 
                      defaultValue="+1" 
                      required 
                      className="focus:ring-blue-500"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phoneNumber" className="text-slate-700 font-medium">Phone Number *</Label>
                    <Input 
                      id="phoneNumber" 
                      name="phoneNumber" 
                      placeholder="Enter phone number" 
                      required 
                      className="focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="gender" className="text-slate-700 font-medium">Gender *</Label>
                  <Select name="gender" required>
                    <SelectTrigger className="focus:ring-blue-500">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="smsOptIn"
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span>
                      I agree to receive SMS updates about my application. Msg &amp; data rates may
                      apply. Reply STOP to opt out, HELP for help.{" "}
                      <a href="/sms-disclaimer" className="text-blue-600 font-semibold hover:underline">
                        SMS disclaimer
                      </a>{" "}
                      |{" "}
                      <a href="/sms-preferences" className="text-blue-600 font-semibold hover:underline">
                        SMS preferences
                      </a>
                    </span>
                  </label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-amber-500 hover:from-blue-700 hover:to-amber-600 text-white font-medium py-2.5 mt-2" 
                  disabled={loading}
                >
                  {loading ? "Creating Account..." : "Create Account"}
                </Button>

                <div className="text-center text-slate-600 text-sm">
                  Already have an account?{" "}
                  <a href="/login" className="text-blue-600 font-medium hover:underline">
                    Sign in
                  </a>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}