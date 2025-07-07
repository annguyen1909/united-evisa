"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle } from "lucide-react"

export default function ResetPasswordForm() {
  const [step, setStep] = useState<"email" | "reset" | "success">("email")
  const [email, setEmail] = useState("")
  const [userId, setUserId] = useState<string | null>(null)
  const [hasPassword, setHasPassword] = useState<boolean>(true)
  const [currentPassword, setCurrentPassword] = useState("")
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
      case 4: return 'bg-emerald-500'
      case 5: return 'bg-green-600'
      default: return 'bg-slate-200'
    }
  }

  // Step 1: Lookup user by email
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const res = await fetch("/api/user/by-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (!res.ok || !data.userId) {
        setError("No account found for this email")
        setLoading(false)
        return
      }
      setUserId(data.userId)
      setHasPassword(!!data.hasPassword)
      setStep("reset")
    } catch {
      setError("Failed to lookup user")
    } finally {
      setLoading(false)
    }
  }

  // Step 2: Reset or set password
  const handleResetSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (hasPassword && !currentPassword) {
      return setError("Please enter your current password")
    }
    if (!newPassword) {
      return setError("Please enter a new password")
    }
    if (newPassword !== confirmPassword) {
      return setError("New passwords do not match")
    }
    if (newPassword.length < 8) {
      return setError("Password should be at least 8 characters")
    }
    if (strength.score < 3) {
      return setError("Please use a stronger password")
    }

    setLoading(true)
    try {
      let response
      response = await fetch('/api/user/set-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId,
          newPassword
        }),
      })
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.error || 'Failed to update password')
      }
      setSuccess(hasPassword ? "Password changed successfully!" : "Password set successfully!")
      setStep("success")
      setCurrentPassword("")
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
          <Button type="button" className="w-full bg-emerald-600 hover:bg-emerald-700 mt-2">
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
            Enter your email to reset or set your password.
          </p>
        </div>
        {error && (
          <div className="p-3 rounded-md bg-red-50 border border-red-100 text-sm flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-red-500" />
            <span className="text-red-700">{error}</span>
          </div>
        )}
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="border-slate-200 focus:ring-emerald-500"
          />
        </div>
        <Button
          type="submit"
          className="bg-emerald-600 hover:bg-emerald-700 text-white w-full sm:w-auto"
          disabled={loading}
        >
          {loading ? "Checking..." : "Continue"}
        </Button>
      </form>
    )
  }

  // Step 2: Password reset/set form
  return (
    <form onSubmit={handleResetSubmit} className="space-y-6">
      <div className="space-y-1">
        <h3 className="font-medium text-slate-800">
          {hasPassword ? "Change Password" : "Set Password"}
        </h3>
        <p className="text-sm text-slate-500">
          {hasPassword
            ? "Update your password to keep your account secure"
            : "Your account does not have a password set. Please create one."}
        </p>
      </div>
      {error && (
        <div className="p-3 rounded-md bg-red-50 border border-red-100 text-sm flex items-center gap-2">
          <AlertCircle className="h-4 w-4 text-red-500" />
          <span className="text-red-700">{error}</span>
        </div>
      )}
      {hasPassword && (
        <div className="space-y-2">
          <Label htmlFor="currentPassword">Current Password</Label>
          <Input
            id="currentPassword"
            type="password"
            value={currentPassword}
            onChange={e => setCurrentPassword(e.target.value)}
            className="border-slate-200 focus:ring-emerald-500"
          />
        </div>
      )}
      <div className="space-y-2">
        <Label htmlFor="newPassword">New Password</Label>
        <Input
          id="newPassword"
          type="password"
          value={newPassword}
          onChange={e => setNewPassword(e.target.value)}
          className="border-slate-200 focus:ring-emerald-500"
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
          className={`border-slate-200 focus:ring-emerald-500 ${confirmPassword && newPassword !== confirmPassword ? 'border-red-300' : ''
            }`}
        />
        {confirmPassword && newPassword !== confirmPassword && (
          <p className="text-xs text-red-600 mt-1">Passwords do not match</p>
        )}
      </div>
      <Button
        type="submit"
        className="bg-emerald-600 hover:bg-emerald-700 text-white w-full sm:w-auto"
        disabled={loading}
      >
        {loading
          ? (hasPassword ? "Updating..." : "Setting...")
          : (hasPassword ? "Update Password" : "Set Password")}
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