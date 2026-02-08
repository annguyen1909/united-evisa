"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { useForm } from "react-hook-form"
import { XCircle } from "lucide-react"

export default function ResetPasswordForm() {
  const [step, setStep] = useState<"email" | "otp" | "success">("email")
  const [email, setEmail] = useState("")
  const [otp, setOtp] = useState("")
  const [jwtToken, setJwtToken] = useState<string | null>(null)
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  // Password strength validation
  const passwordStrength = () => {
    if (!newPassword) return { score: 0, text: "" }
    let score = 0
    if (newPassword.length > 8) score += 1
    if (/[A-Z]/.test(newPassword)) score += 1
    if (/[a-z]/.test(newPassword)) score += 1
    if (/[0-9]/.test(newPassword)) score += 1
    if (/[^A-Za-z0-9]/.test(newPassword)) score += 1
    const strengthText = ["", "Weak", "Fair", "Good", "Strong", "Excellent"]
    return { score, text: strengthText[score] }
  }
  const strength = passwordStrength()
  const getStrengthColor = () => {
    switch (strength.score) {
      case 1: return 'bg-red-500'
      case 2: return 'bg-orange-500'
      case 3: return 'bg-yellow-500'
      case 4: return 'bg-blue-500'
      case 5: return 'bg-green-600'
      default: return 'bg-slate-200'
    }
  }

  // Step 1: Request OTP
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const res = await fetch("/api/user/request-reset-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (!res.ok || !data.jwtToken) {
        setError(data.error || "No account found for this email")
        setLoading(false)
        return
      }
      setJwtToken(data.jwtToken)
      setStep("otp")
    } catch {
      setError("Failed to send OTP. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  // Step 2: Submit OTP + new password
  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)
    if (!otp) return setError("Please enter the OTP sent to your email")
    if (!newPassword) return setError("Please enter a new password")
    if (newPassword !== confirmPassword) return setError("New passwords do not match")
    if (newPassword.length < 8) return setError("Password should be at least 8 characters")
    if (strength.score < 3) return setError("Please use a stronger password")
    setLoading(true)
    try {
      const res = await fetch('/api/user/verify-reset-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp, newPassword }),
      })
      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.error || 'Failed to reset password')
      }
      setSuccess("Password reset successfully!")
      setStep("success")
      setOtp("")
      setNewPassword("")
      setConfirmPassword("")
    } catch (err: any) {
      setError(err.message || 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  // Step 3: Success
  if (step === "success") {
    return (
      <div className="space-y-4">
        <div className="p-3 rounded-md bg-green-50 border border-green-100 text-sm flex items-center gap-2">
          <CheckCircle className="h-4 w-4 text-green-500" />
          <span className="text-green-700">{success}</span>
        </div>
        <a href="/login">
          <Button type="button" className="w-full bg-blue-600 hover:bg-blue-700 mt-2">
            Back to Login
          </Button>
        </a>
      </div>
    )
  }

  // Step 1: Email input
  if (step === "email") {
    return (
      <form onSubmit={handleEmailSubmit} className="space-y-6">
        <div className="space-y-1">
          <h3 className="font-medium text-slate-800">Reset Password</h3>
          <p className="text-sm text-slate-500">
            Enter your email to receive a one-time password (OTP) for password reset.
          </p>
        </div>
        {error && (
          <div className="p-3 rounded-md bg-red-50 border border-red-100 text-sm flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-red-500" />
            <span className="text-red-700">{error}</span>
          </div>
        )}
        <div className="space-y-1.5">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className={cn(
              "focus:ring-blue-500",
              error && "border-red-500 focus:ring-red-500"
            )}
          />
          {error && (
            <div className="flex items-center gap-2 mt-1 text-red-500 text-xs">
              <AlertCircle className="h-3.5 w-3.5" />
              <span>{error}</span>
            </div>
          )}
        </div>
        <Button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send OTP"}
        </Button>
      </form>
    )
  }

  // Step 2: OTP + new password form
  if (step === "otp") {
    return (
      <form onSubmit={handleOtpSubmit} className="space-y-6">
        <div className="space-y-1">
          <h3 className="font-medium text-slate-800">Enter OTP & New Password</h3>
          <p className="text-sm text-slate-500">
            Please check your email for the OTP. Enter it below along with your new password.
          </p>
        </div>
        {error && (
          <div className="p-3 rounded-md bg-red-50 border border-red-100 text-sm flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-red-500" />
            <span className="text-red-700">{error}</span>
          </div>
        )}
        <div className="space-y-2">
          <Label htmlFor="otp">OTP</Label>
          <Input
            id="otp"
            type="text"
            value={otp}
            onChange={e => setOtp(e.target.value)}
            required
            className="border-slate-200 focus:ring-blue-500"
            maxLength={6}
            pattern="[0-9]{6}"
            inputMode="numeric"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="newPassword">New Password</Label>
          <Input
            id="newPassword"
            type="password"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            className="border-slate-200 focus:ring-blue-500"
          />
          {newPassword && (
            <div className="mt-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-slate-500">Password strength:</span>
                <span className={`text-xs font-medium ${strength.score <= 2 ? 'text-red-600' :
                    strength.score === 3 ? 'text-yellow-600' : 'text-green-600'
                  }`}>
                  {strength.text}
                </span>
              </div>
              <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className={`h-full ${getStrengthColor()}`}
                  style={{ width: `${(strength.score / 5) * 100}%` }}
                />
              </div>
            </div>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm New Password</Label>
          <Input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            className={`border-slate-200 focus:ring-blue-500 ${confirmPassword && newPassword !== confirmPassword ? 'border-red-300' : ''}`}
          />
          {confirmPassword && newPassword !== confirmPassword && (
            <p className="text-xs text-red-600 mt-1">Passwords do not match</p>
          )}
        </div>
        <Button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
          disabled={loading}
        >
          {loading ? "Resetting..." : "Reset Password"}
        </Button>
        <Button
          type="button"
          variant="outline"
          className="w-full sm:w-auto"
          onClick={() => setStep("email")}
        >
          Back
        </Button>
      </form>
    )
  }

  return null
}