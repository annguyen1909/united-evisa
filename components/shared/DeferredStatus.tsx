'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Clock, AlertTriangle, FileText, Mail, Phone, Upload, HelpCircle } from 'lucide-react';
import Link from 'next/link';

import type { ApplicationData } from '@/lib/types';

interface DeferredStatusProps {
    applicationData: ApplicationData;
    onRefresh: () => void;
}

export default function DeferredStatus({ applicationData, onRefresh }: DeferredStatusProps) {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12">
            <div className="max-w-5xl mx-auto px-4">
                {/* Modern Header Card */}
                <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0 mb-8 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-amber-500/5"></div>
                    <CardHeader className="text-center pb-8 pt-8 relative z-10">
                        <div className="flex justify-center mb-6">
                            <div className="relative">
                                <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl flex items-center justify-center shadow-lg">
                                    <HelpCircle className="h-10 w-10 text-orange-600" />
                                </div>
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center shadow-md">
                                    <AlertTriangle className="h-4 w-4 text-white" />
                                </div>
                            </div>
                        </div>
                        <CardTitle className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-3">
                            Application Under Review
                        </CardTitle>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Your visa application requires additional information or clarification to continue processing
                        </p>
                        <div className="flex justify-center mt-4">
                            <Badge className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white border-0 text-sm px-4 py-2 rounded-full font-medium shadow-lg">
                                Status: Deferred
                            </Badge>
                        </div>
                    </CardHeader>

                    <CardContent className="space-y-8 px-8 pb-8">
                        {/* Deferral Notice - Modern Design */}
                        <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200/50 rounded-2xl p-8 shadow-sm">
                            <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center gap-3">
                                <div className="p-2 bg-orange-100 rounded-lg">
                                    <AlertTriangle className="h-5 w-5 text-orange-600" />
                                </div>
                                What Does This Mean?
                            </h3>
                            <p className="text-orange-700 mb-6 leading-relaxed">
                                Your application has been temporarily deferred while we review additional requirements. 
                                This is a common part of the visa process and does not mean your application has been rejected.
                            </p>
                            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-orange-200/50">
                                <p className="text-sm text-orange-800">
                                    <strong className="font-semibold">Reason for Deferral:</strong> {applicationData.deferralReason || 'Additional documentation or information required'}
                                </p>
                            </div>
                        </div>

                        {/* Application Details - Enhanced Grid */}
                        <div className="bg-slate-50/70 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50">
                            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                                <div className="p-2 bg-slate-100 rounded-lg">
                                    <FileText className="h-5 w-5 text-slate-600" />
                                </div>
                                Application Details
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { label: "Application ID", value: applicationData.applicationId, mono: true },
                                    { 
                                        label: "Visa Type", 
                                        value: (() => {
                                            if (typeof applicationData.visaType === 'string') {
                                                if (applicationData.destination && typeof applicationData.destination !== 'string' && applicationData.destination.code?.toLowerCase() === 'in') {
                                                    return applicationData.visaType.replace(/\s*-\s*Group\s*\d+$/, "");
                                                }
                                                return applicationData.visaType;
                                            } else {
                                                if (applicationData.destination && typeof applicationData.destination !== 'string' && applicationData.destination.code?.toLowerCase() === 'in') {
                                                    return applicationData.visaType?.name?.replace(/\s*-\s*Group\s*\d+$/, "");
                                                }
                                                return applicationData.visaType?.name || 'Tourist Visa';
                                            }
                                        })(),
                                    },
                                    { 
                                        label: "Destination", 
                                        value: typeof applicationData.destination === 'string'
                                            ? applicationData.destination
                                            : applicationData.destination?.name || 'Not specified'
                                    },
                                    { 
                                        label: "Submitted On", 
                                        value: applicationData.submittedAt ? formatDate(applicationData.submittedAt) : 'Not available'
                                    },
                                    { 
                                        label: "Deferred On", 
                                        value: applicationData.deferredAt ? formatDate(applicationData.deferredAt) : 'Recently'
                                    },
                                    { 
                                        label: "Expected Resolution", 
                                        value: (() => {
                                            if (applicationData.visaType && typeof applicationData.visaType !== 'string' && applicationData.visaType.waitTime) {
                                                return applicationData.visaType.waitTime;
                                            }
                                            return applicationData.estimatedResolutionTime || '5-7 business days after submission';
                                        })()
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200/50">
                                        <p className="text-sm font-medium text-slate-500 mb-1">{item.label}</p>
                                        <p className={`font-semibold text-slate-800 ${item.mono ? 'font-mono text-sm' : ''}`}>
                                            {item.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Separator className="bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

                        {/* Required Actions - Modern List */}
                        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200/50 rounded-2xl p-8 shadow-sm">
                            <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-3">
                                <div className="p-2 bg-blue-100 rounded-lg">
                                    <FileText className="h-5 w-5 text-blue-600" />
                                </div>
                                Required Actions
                            </h3>
                            <p className="text-blue-700 mb-6 leading-relaxed">
                                Please complete the following actions to continue processing your application:
                            </p>
                            <div className="space-y-4">
                                {applicationData.requiredActions && applicationData.requiredActions.length > 0 ? (
                                    applicationData.requiredActions.map((action, index) => (
                                        <div key={index} className="flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-200/50 shadow-sm">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-md">
                                                {index + 1}
                                            </div>
                                            <p className="text-blue-800 font-medium leading-relaxed">{action}</p>
                                        </div>
                                    ))
                                ) : (
                                    <>
                                        {[
                                            "Provide additional passport pages showing entry/exit stamps",
                                            "Submit updated travel itinerary with confirmed bookings",
                                            "Provide proof of accommodation for the entire stay"
                                        ].map((action, index) => (
                                            <div key={index} className="flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-200/50 shadow-sm">
                                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-md">
                                                    {index + 1}
                                                </div>
                                                <p className="text-blue-800 font-medium leading-relaxed">{action}</p>
                                            </div>
                                        ))}
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Document Submission Methods */}
                        <div className="bg-slate-50/70 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50">
                            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                                <div className="p-2 bg-emerald-100 rounded-lg">
                                    <Upload className="h-5 w-5 text-emerald-600" />
                                </div>
                                How to Submit Required Documents
                            </h3>
                            <div className="grid gap-6">
                                {[
                                    {
                                        step: "1",
                                        title: "Email Submission (Recommended)",
                                        description: `Send documents to visa@unitedevisa.com with subject: "Deferred Application ${applicationData.applicationId}"`
                                    },
                                    {
                                        step: "2", 
                                        title: "Online Portal",
                                        description: "Log in to your account and upload documents through the application portal"
                                    },
                                    {
                                        step: "3",
                                        title: "Phone Support",
                                        description: "Call our support team for guidance on document submission"
                                    }
                                ].map((method, index) => (
                                    <div key={index} className="flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/50 shadow-sm">
                                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                                            <span className="text-white text-sm font-bold">{method.step}</span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-slate-800 mb-1">{method.title}</p>
                                            <p className="text-sm text-slate-600 leading-relaxed">{method.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Support - Enhanced */}
                        <div className="bg-slate-50/70 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50">
                            <h3 className="text-xl font-bold text-slate-800 mb-6">Need Assistance?</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/50 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="p-3 bg-emerald-100 rounded-lg">
                                        <Mail className="h-6 w-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-800">Email Support</p>
                                        <a href={`mailto:visa@unitedevisa.com?subject=Deferred Application ${applicationData.applicationId}`} 
                                           className="text-emerald-600 hover:text-emerald-700 text-sm font-medium transition-colors">
                                            visa@unitedevisa.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/50 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="p-3 bg-emerald-100 rounded-lg">
                                        <Phone className="h-6 w-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-800">Phone Support</p>
                                        <a href="tel:+1-323-286-4541" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium transition-colors">
                                            +1 323 286 4541
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200/50 rounded-xl">
                                <p className="text-sm text-blue-700">
                                    <strong className="font-semibold">Pro Tip:</strong> When contacting support, please reference your application ID: 
                                    <span className="font-mono bg-white/70 px-2 py-1 rounded ml-1">{applicationData.applicationId}</span>
                                </p>
                            </div>
                        </div>

                        {/* Action Buttons - Modern Design */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <Button 
                                onClick={onRefresh}
                                variant="outline" 
                                className="flex-1 h-12 border-2 border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all duration-200 font-medium"
                            >
                                <Clock className="w-4 h-4 mr-2" />
                                Refresh Status
                            </Button>
                            <Link href="/list" className="flex-1">
                                <Button className="w-full h-12 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-medium transition-all duration-200 shadow-lg hover:shadow-xl">
                                    View All Applications
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>

                {/* Important Notice - Enhanced */}
                <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/50 shadow-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5"></div>
                    <CardContent className="p-8 relative z-10">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-amber-100 rounded-lg flex-shrink-0">
                                <AlertTriangle className="h-6 w-6 text-amber-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-amber-800 mb-4 text-lg">Important Reminders</h4>
                                <div className="text-amber-700 space-y-3">
                                    {[
                                        "Submit all required documents as soon as possible to avoid further delays",
                                        "Ensure all documents are clear, legible, and in the required format",
                                        "Processing will resume once all required information is received",
                                        "Your application remains valid and will not be cancelled due to deferral",
                                        "Contact support if you have questions about the required documents"
                                    ].map((reminder, index) => (
                                        <p key={index} className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                                            <span className="leading-relaxed">{reminder}</span>
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
