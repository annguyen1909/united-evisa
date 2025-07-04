"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle } from "lucide-react"

interface ResetPasswordFormProps {
  userId: string
}

export default function ResetPasswordForm({ userId }: ResetPasswordFormProps) {
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
    
    const strengthText = [
      "", 
      "Weak", 
      "Fair", 
      "Good", 
      "Strong", 
      "Excellent"
    ]
    
    return { score, text: strengthText[score] }
  }

  const strength = passwordStrength()
  
  const getStrengthColor = () => {
    switch(strength.score) {
      case 1: return 'bg-red-500'
      case 2: return 'bg-orange-500'
      case 3: return 'bg-yellow-500'
      case 4: return 'bg-emerald-500'
      case 5: return 'bg-green-600'
      default: return 'bg-slate-200'
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)
    
    // Validate form
    if (!currentPassword) {
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
      const response = await fetch('/api/user/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          userId,
          currentPassword, 
          newPassword 
        }),
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to change password')
      }
      
      setSuccess("Password changed successfully!")
      setCurrentPassword("")
      setNewPassword("")
      setConfirmPassword("")
    } catch (err: any) {
      setError(err.message || 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-1">
        <h3 className="font-medium text-slate-800">Change Password</h3>
        <p className="text-sm text-slate-500">
          Update your password to keep your account secure
        </p>
      </div>
      
      {error && (
        <div className="p-3 rounded-md bg-red-50 border border-red-100 text-sm flex items-center gap-2">
          <AlertCircle className="h-4 w-4 text-red-500" />
          <span className="text-red-700">{error}</span>
        </div>
      )}
      
      {success && (
        <div className="p-3 rounded-md bg-green-50 border border-green-100 text-sm flex items-center gap-2">
          <CheckCircle className="h-4 w-4 text-green-500" />
          <span className="text-green-700">{success}</span>
        </div>
      )}
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="currentPassword">Current Password</Label>
          <Input 
            id="currentPassword" 
            type="password" 
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="border-slate-200 focus:ring-emerald-500"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="newPassword">New Password</Label>
          <Input 
            id="newPassword" 
            type="password" 
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="border-slate-200 focus:ring-emerald-500"
          />
          
          {newPassword && (
            <div className="mt-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-slate-500">Password strength:</span>
                <span className={`text-xs font-medium ${
                  strength.score <= 2 ? 'text-red-600' : 
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
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`border-slate-200 focus:ring-emerald-500 ${
              confirmPassword && newPassword !== confirmPassword ? 'border-red-300' : ''
            }`}
          />
          {confirmPassword && newPassword !== confirmPassword && (
            <p className="text-xs text-red-600 mt-1">Passwords do not match</p>
          )}
        </div>
      </div>
      
      <Button 
        type="submit" 
        className="bg-emerald-600 hover:bg-emerald-700 text-white w-full sm:w-auto"
        disabled={loading}
      >
        {loading ? "Updating..." : "Update Password"}
      </Button>
    </form>
  )
}