"use client"

import { useState } from "react"
import {
    User, Settings, Key, Clock, LogOut,
    CreditCard, ChevronRight, MapPin, FileText,
    Shield, CheckCircle, AlertCircle, Calendar, Phone
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { signOut } from "next-auth/react"
import { format } from "date-fns"
import ResetPasswordForm from "./ResetPasswordForm"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

type Application = {
    id: string
    applicationId: string
    status: string
    destination: { name: string }
    visaType: { name: string }
    createdAt: Date
}

interface ProfileClientProps {
    user: {
        id: string
        fullName: string
        email: string
        areaCode: string
        phoneNumber: string
        gender: string
        createdAt: Date
        applications: Application[]
    }
}

export default function ProfileClient({ user }: ProfileClientProps) {
    const [activeTab, setActiveTab] = useState("account")

    const getStatusColor = (status: string) => {
        switch (status?.toLowerCase()) {
            case 'approved':
                return 'bg-green-100 text-green-800 border-green-200'
            case 'pending':
                return 'bg-amber-100 text-amber-800 border-amber-200'
            case 'processing':
                return 'bg-blue-100 text-blue-800 border-blue-200'
            case 'rejected':
                return 'bg-red-100 text-red-800 border-red-200'
            default:
                return 'bg-slate-100 text-slate-800 border-slate-200'
        }
    }

    return (
        <section className="min-h-screen bg-slate-50 py-10 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Profile Summary */}
                        <Card className="border-slate-200 overflow-hidden">
                            <CardHeader className="bg-emerald-600 text-white p-6">
                                <div className="flex items-center justify-center mb-4">
                                    <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-white">
                                        <User size={40} />
                                    </div>
                                </div>
                                <CardTitle className="text-center">{user.fullName}</CardTitle>
                                <CardDescription className="text-emerald-100 text-center">{user.email}</CardDescription>
                            </CardHeader>
                            <CardContent className="p-4">
                                <div className="text-sm space-y-3 text-slate-600">
                                    <div className="flex items-center gap-2">
                                        <Phone size={16} />
                                        <span>{user.areaCode} {user.phoneNumber}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} />
                                        <span>Joined {format(new Date(user.createdAt), 'MMM d, yyyy')}</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Navigation */}
                        <Card className="border-slate-200">
                            <CardContent className="p-0">
                                <nav>
                                    <button
                                        onClick={() => setActiveTab('account')}
                                        className={`w-full flex items-center gap-3 p-4 text-left ${activeTab === 'account' ? 'bg-emerald-50 text-emerald-700' : 'hover:bg-slate-50 text-slate-700'}`}
                                    >
                                        <User size={18} />
                                        <span className="font-medium">Account Details</span>
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('applications')}
                                        className={`w-full flex items-center gap-3 p-4 text-left ${activeTab === 'applications' ? 'bg-emerald-50 text-emerald-700' : 'hover:bg-slate-50 text-slate-700'}`}
                                    >
                                        <FileText size={18} />
                                        <span className="font-medium">My Applications</span>
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('security')}
                                        className={`w-full flex items-center gap-3 p-4 text-left ${activeTab === 'security' ? 'bg-emerald-50 text-emerald-700' : 'hover:bg-slate-50 text-slate-700'}`}
                                    >
                                        <Key size={18} />
                                        <span className="font-medium">Security</span>
                                    </button>
                                </nav>
                            </CardContent>
                        </Card>

                        {/* Logout */}
                        <Button
                            variant="outline"
                            className="w-full border-slate-200 text-slate-700 hover:bg-slate-100 flex gap-2"
                            onClick={() => signOut({ callbackUrl: '/' })}
                        >
                            <LogOut size={18} />
                            <span>Sign Out</span>
                        </Button>
                    </div>

                    {/* Main Content */}
                    <div className="space-y-6">
                        {activeTab === "account" && (
                            <Card className="border-slate-200">
                                <CardHeader className="border-b border-slate-100 bg-slate-50/70 flex items-center justify-start p-4">
                                    <div className="flex items-center gap-2">
                                        <User size={18} className="text-emerald-600" />
                                        <CardTitle className="text-lg font-semibold text-slate-800">Account Information</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-4">
                                            <div>
                                                <h3 className="text-sm font-medium text-slate-500 mb-1">Full Name</h3>
                                                <p className="text-slate-800 font-medium">{user.fullName}</p>
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-medium text-slate-500 mb-1">Email Address</h3>
                                                <p className="text-slate-800 font-medium">{user.email}</p>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div>
                                                <h3 className="text-sm font-medium text-slate-500 mb-1">Phone Number</h3>
                                                <p className="text-slate-800 font-medium">{user.areaCode} {user.phoneNumber}</p>
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-medium text-slate-500 mb-1">Gender</h3>
                                                <p className="text-slate-800 font-medium capitalize">{user.gender}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 p-4 bg-amber-50 border border-amber-100 rounded-lg">
                                        <p className="text-amber-800 text-sm">
                                            Need to update your account details? Please contact our support team for assistance.
                                        </p>
                                        <Button variant="outline" className="mt-2 border-amber-200 text-amber-700 hover:bg-amber-100 hover:text-amber-800" asChild>
                                            <Link href="/contact">Contact Support</Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        )}

                        {activeTab === "applications" && (
                            <Card className="border-slate-200">
                                <CardHeader className="border-b border-slate-100 bg-slate-50/70 flex items-center justify-start p-4">
                                    <div className="flex items-center gap-2">
                                        <FileText size={18} className="text-emerald-600" />
                                        <CardTitle className="text-lg font-semibold text-slate-800">Your Visa Applications</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-6">
                                    {user.applications.length === 0 ? (
                                        <div className="text-center py-10">
                                            <div className="bg-slate-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                                <FileText className="w-8 h-8 text-slate-400" />
                                            </div>
                                            <h3 className="text-lg font-medium text-slate-700">No applications yet</h3>
                                            <p className="text-slate-500 mt-1">You haven't submitted any visa applications</p>
                                            <Button className="mt-4 bg-emerald-600 hover:bg-emerald-700" asChild>
                                                <Link href="/apply">Apply for Visa</Link>
                                            </Button>
                                        </div>
                                    ) : (
                                        <div className="space-y-6">
                                            <div className="overflow-x-auto">
                                                <table className="w-full text-sm text-left">
                                                    <thead className="text-xs uppercase bg-slate-50 text-slate-500">
                                                        <tr>
                                                            <th className="px-4 py-3 font-medium">Application ID</th>
                                                            <th className="px-4 py-3 font-medium">Destination</th>
                                                            <th className="px-4 py-3 font-medium">Visa Type</th>
                                                            <th className="px-4 py-3 font-medium">Date</th>
                                                            <th className="px-4 py-3 font-medium">Status</th>
                                                            <th className="px-4 py-3 font-medium"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-slate-200">
                                                        {user.applications.map((app) => (
                                                            <tr key={app.id} className="bg-white hover:bg-slate-50">
                                                                <td className="px-4 py-3 font-medium text-slate-700">{app.applicationId}</td>
                                                                <td className="px-4 py-3 text-slate-700">{app.destination.name}</td>
                                                                <td className="px-4 py-3 text-slate-700">{app.visaType.name}</td>
                                                                <td className="px-4 py-3 text-slate-500">
                                                                    {format(new Date(app.createdAt), 'MMM d, yyyy')}
                                                                </td>
                                                                <td className="px-4 py-3">
                                                                    <Badge className={`font-medium ${getStatusColor(app.status)}`}>
                                                                        {app.status}
                                                                    </Badge>
                                                                </td>
                                                                <td className="px-4 py-3 text-right">
                                                                    <Button variant="ghost" size="sm" className="text-slate-500 hover:text-emerald-700">
                                                                        <ChevronRight size={18} />
                                                                    </Button>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>

                                            {user.applications.length > 0 && (
                                                <div className="flex justify-center">
                                                    <Button variant="outline" className="text-emerald-600 border-emerald-200 hover:bg-emerald-50" asChild>
                                                        <Link href="/list">View All Applications</Link>
                                                    </Button>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        )}

                        {activeTab === "security" && (
                            <Card className="border-slate-200">
                                <CardHeader className="border-b border-slate-100 bg-slate-50/70 flex items-center justify-start p-4">
                                    <div className="flex items-center gap-2">
                                        <Key size={18} className="text-emerald-600" />
                                        <CardTitle className="text-lg font-semibold text-slate-800">
                                            Security Settings
                                        </CardTitle>
                                    </div>
                                </CardHeader>

                                <CardContent className="pt-6">
                                    <ResetPasswordForm/>

                                    <div className="mt-8 pt-8 border-t border-slate-100">
                                        <h3 className="font-medium text-slate-800 mb-4 flex items-center gap-2">
                                            <Shield size={18} className="text-emerald-600" />
                                            Security Recommendations
                                        </h3>
                                        <div className="space-y-3">
                                            <div className="flex items-start gap-3 p-3 bg-green-50 border border-green-100 rounded-lg">
                                                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                                <div>
                                                    <h4 className="font-medium text-green-700">Use a strong password</h4>
                                                    <p className="text-sm text-green-600">
                                                        Your password should include uppercase letters, numbers, and special characters.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3 p-3 bg-amber-50 border border-amber-100 rounded-lg">
                                                <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                                                <div>
                                                    <h4 className="font-medium text-amber-700">Enable two-factor authentication</h4>
                                                    <p className="text-sm text-amber-600">
                                                        Add an extra layer of security by enabling 2FA.
                                                        <span className="font-medium"> Coming soon.</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}