'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Clock, CheckCircle2, FileText, Mail, Phone, AlertCircle } from 'lucide-react';
import Link from 'next/link';

interface ApplicationData {
    applicationId?: string;
    fullName?: string;
    email?: string;
    areaCode?: string;
    phoneNumber?: string;
    gender?: string;
    stayingStart?: string;
    stayingEnd?: string;
    passengers?: any[];
    status?: string;
    submittedAt?: string;
    estimatedProcessingTime?: string;
    visaType?: string | { id: string; name: string; waitTime?: string; fees?: any; requiredDocuments?: any; allowedNationalities?: any; destinationId?: string };
    destination?: string | { id: string; name: string; [key: string]: any };
}

interface ProcessingStatusProps {
    applicationData: ApplicationData;
    onRefresh: () => void;
}

export default function ProcessingStatus({ applicationData, onRefresh }: ProcessingStatusProps) {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-yellow-50 to-amber-50 py-12">
            <div className="max-w-5xl mx-auto px-4">
                {/* Modern Header Card */}
                <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0 mb-8 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-amber-500/5"></div>
                    <CardHeader className="text-center pb-8 pt-8 relative z-10">
                        <div className="flex justify-center mb-6">
                            <div className="relative">
                                <div className="w-20 h-20 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Clock className="h-10 w-10 text-yellow-600 animate-pulse" />
                                </div>
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-full flex items-center justify-center shadow-md">
                                    <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
                                </div>
                            </div>
                        </div>
                        <CardTitle className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-3">
                            Application Under Review
                        </CardTitle>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Your visa application is currently being processed by our specialist team
                        </p>
                        <div className="flex justify-center mt-4">
                            <Badge className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white border-0 text-sm px-4 py-2 rounded-full font-medium shadow-lg">
                                Status: Processing
                            </Badge>
                        </div>
                    </CardHeader>

                    <CardContent className="space-y-8 px-8 pb-8">
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
                                        value: typeof applicationData.visaType === 'string' 
                                            ? applicationData.visaType 
                                            : applicationData.visaType?.name || 'Tourist Visa'
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
                                        label: "Travel Dates", 
                                        value: applicationData.stayingStart && applicationData.stayingEnd 
                                            ? `${formatDate(applicationData.stayingStart)} - ${formatDate(applicationData.stayingEnd)}`
                                            : 'Not specified'
                                    },
                                    { 
                                        label: "Estimated Processing Time", 
                                        value: applicationData.estimatedProcessingTime || '3-5 business days'
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

                        {/* Processing Timeline - Modern Design */}
                        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200/50 rounded-2xl p-8 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                                <div className="p-2 bg-blue-100 rounded-lg">
                                    <Clock className="h-5 w-5 text-blue-600" />
                                </div>
                                Processing Timeline
                            </h3>
                            <div className="space-y-6">
                                {/* Submitted Step */}
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                                        <CheckCircle2 className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-emerald-200/50">
                                        <p className="font-semibold text-slate-800 mb-1">Application Submitted</p>
                                        <p className="text-sm text-slate-600">Your application has been received successfully</p>
                                    </div>
                                    <div className="text-sm text-slate-500 font-medium">
                                        {applicationData.submittedAt ? formatDate(applicationData.submittedAt) : 'Complete'}
                                    </div>
                                </div>

                                {/* Processing Step */}
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                                        <Clock className="h-6 w-6 text-white animate-pulse" />
                                    </div>
                                    <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-yellow-200/50">
                                        <p className="font-semibold text-slate-800 mb-1">Under Review</p>
                                        <p className="text-sm text-slate-600">Your application is currently being reviewed by our visa specialists</p>
                                    </div>
                                    <div className="text-sm text-yellow-600 font-semibold bg-yellow-100 px-3 py-1 rounded-full">
                                        In Progress
                                    </div>
                                </div>

                                {/* Decision Step */}
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 bg-slate-300 rounded-full flex items-center justify-center flex-shrink-0">
                                        <FileText className="h-6 w-6 text-slate-500" />
                                    </div>
                                    <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200/50">
                                        <p className="font-semibold text-slate-500 mb-1">Decision & Notification</p>
                                        <p className="text-sm text-slate-400">You will be notified once a decision has been made</p>
                                    </div>
                                    <div className="text-sm text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                                        Pending
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* What Happens Next */}
                        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/50 rounded-2xl p-8 shadow-sm">
                            <h3 className="text-xl font-bold text-emerald-800 mb-4 flex items-center gap-3">
                                <div className="p-2 bg-emerald-100 rounded-lg">
                                    <AlertCircle className="h-5 w-5 text-emerald-600" />
                                </div>
                                What Happens Next?
                            </h3>
                            <div className="grid gap-4">
                                {[
                                    "Our visa specialists are carefully reviewing your application and supporting documents",
                                    "If additional information is needed, we will contact you via email or phone",
                                    "Once approved, your visa will be sent to your registered email address",
                                    "You will receive an SMS notification when your visa is ready"
                                ].map((step, index) => (
                                    <div key={index} className="flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-emerald-200/50">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-md">
                                            {index + 1}
                                        </div>
                                        <p className="text-emerald-700 font-medium leading-relaxed">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="bg-slate-50/70 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50">
                            <h3 className="text-xl font-bold text-slate-800 mb-6">Need Assistance?</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/50 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="p-3 bg-emerald-100 rounded-lg">
                                        <Mail className="h-6 w-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-800">Email Support</p>
                                        <a href="mailto:visa@unitedevisa.com" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium transition-colors">
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
                            <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/50 rounded-xl">
                                <p className="text-sm text-amber-700">
                                    <strong className="font-semibold">Please note:</strong> Our support team is available Monday to Friday, 9 AM to 6 PM EST. 
                                    Response time is typically within 24 hours.
                                </p>
                            </div>
                        </div>

                        {/* Action Buttons */}
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

                {/* Important Notice */}
                <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/50 shadow-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5"></div>
                    <CardContent className="p-8 relative z-10">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-amber-100 rounded-lg flex-shrink-0">
                                <AlertCircle className="h-6 w-6 text-amber-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-amber-800 mb-4 text-lg">Important Notice</h4>
                                <div className="text-amber-700 space-y-3">
                                    {[
                                        "Processing times may vary depending on application complexity and current volume",
                                        "Please ensure your travel plans allow sufficient time for visa processing",
                                        "Do not make final travel arrangements until you receive your approved visa",
                                        `Keep this application ID (${applicationData.applicationId}) for your records`
                                    ].map((notice, index) => (
                                        <p key={index} className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                                            <span className="leading-relaxed">{notice}</span>
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
