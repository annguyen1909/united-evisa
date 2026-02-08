'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Phone, Mail, MessageCircle, ArrowRight, DollarSign } from 'lucide-react';

import type { ApplicationData } from '@/lib/types';

function RefundedContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const applicationId = searchParams.get('applicationId');

    const [applicationData, setApplicationData] = useState<ApplicationData>({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchApplicationData = async () => {
            if (!applicationId) {
                setError('No application ID provided');
                setIsLoading(false);
                return;
            }

            try {
                const response = await fetch(`/api/applications/${applicationId}`);
                if (response.ok) {
                    const data = await response.json();
                    setApplicationData(data);
                } else {
                    setError('Failed to load application data');
                }
            } catch (error) {
                console.error('Error fetching application data:', error);
                setError('Failed to load application data');
            } finally {
                setIsLoading(false);
            }
        };

        fetchApplicationData();
    }, [applicationId]);

    // Loading State
    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-amber-50/20 flex items-center justify-center">
                <div className="text-center">
                    <div className="relative w-16 h-16 mx-auto mb-6">
                        <div className="absolute inset-0 rounded-full border-4 border-slate-200"></div>
                        <div className="absolute inset-0 rounded-full border-4 border-green-600 border-t-transparent animate-spin"></div>
                    </div>
                    <div className="space-y-2">
                        <p className="text-lg font-semibold text-slate-700">Loading application details...</p>
                        <p className="text-sm text-slate-500">Please wait while we retrieve your information</p>
                    </div>
                </div>
            </div>
        );
    }

    // Error State
    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-rose-50 py-12">
                <div className="max-w-2xl mx-auto px-4">
                    <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-pink-500/5"></div>
                        <CardHeader className="text-center pb-6 relative z-10">
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl flex items-center justify-center shadow-lg">
                                    <CheckCircle className="h-8 w-8 text-red-600" />
                                </div>
                            </div>
                            <CardTitle className="text-2xl font-bold text-red-700">
                                Unable to Load Application
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-center space-y-4 relative z-10">
                            <p className="text-red-600 leading-relaxed">{error}</p>
                            <a 
                                href="/list" 
                                className="inline-block cursor-pointer"
                                style={{ textDecoration: 'none' }}
                            >
                                <div className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-medium px-6 py-2 rounded-lg shadow-lg transition-all duration-200">
                                    Back to Applications
                                </div>
                            </a>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-amber-50/20 py-12">
            <div className="max-w-2xl mx-auto px-4">
                <Card className="bg-white/90 backdrop-blur-sm shadow-xl border border-blue-100/50 overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-amber-500/5 pointer-events-none"></div>
                    <CardHeader className="text-center pb-8 pt-8 relative z-10">
                        <div className="flex justify-center mb-6">
                            <div className="relative">
                                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl flex items-center justify-center shadow-lg">
                                    <CheckCircle className="h-12 w-12 text-green-600" />
                                </div>
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center shadow-md">
                                    <DollarSign className="h-4 w-4 text-white" />
                                </div>
                            </div>
                        </div>
                        <CardTitle className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-3">
                            Refund Processed
                        </CardTitle>
                        <p className="text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
                            Your refund has been successfully processed. The amount will be credited back to your original payment method within 5-10 business days.
                        </p>
                        <div className="flex justify-center mt-4">
                            <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 text-sm px-4 py-2 rounded-full font-medium shadow-lg">
                                Status: Refunded
                            </Badge>
                        </div>
                    </CardHeader>

                    <CardContent className="space-y-6 px-8 pb-8 relative z-10">
                        {/* Application Details */}
                        <div className="bg-gradient-to-r from-slate-50 to-gray-50 border border-slate-200/50 rounded-2xl p-8 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                                <div className="p-2 bg-slate-100 rounded-lg">
                                    <CheckCircle className="h-5 w-5 text-slate-600" />
                                </div>
                                Application Details
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { label: "Application ID", value: applicationData.applicationId, mono: true },
                                    { 
                                        label: "Destination", 
                                        value: typeof applicationData.destination === 'string'
                                            ? applicationData.destination
                                            : applicationData.destination?.name || 'Not specified'
                                    },
                                    { 
                                        label: "Visa Type", 
                                        value: typeof applicationData.visaType === 'string'
                                            ? applicationData.visaType
                                            : applicationData.visaType?.name || 'Not specified'
                                    },
                                    { 
                                        label: "Created", 
                                        value: applicationData.createdAt ? new Date(applicationData.createdAt).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        }) : 'Not available'
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200/50">
                                        <p className="text-sm font-medium text-slate-600 mb-1">{item.label}</p>
                                        <p className={`font-semibold text-slate-800 ${item.mono ? 'font-mono text-sm' : ''}`}>
                                            {item.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Refund Information */}
                        <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200/50 rounded-2xl p-8 shadow-sm">
                            <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-3">
                                <div className="p-2 bg-green-100 rounded-lg">
                                    <DollarSign className="h-5 w-5 text-green-600" />
                                </div>
                                Refund Information
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-green-200/50">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-blue-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-md">
                                        1
                                    </div>
                                    <div>
                                        <p className="text-green-700 font-medium leading-relaxed">
                                            Refund Processed
                                        </p>
                                        <p className="text-green-600 text-sm mt-1">
                                            Your refund has been initiated and will be processed within 5-10 business days
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-green-200/50">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-blue-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-md">
                                        2
                                    </div>
                                    <div>
                                        <p className="text-green-700 font-medium leading-relaxed">
                                            Payment Method
                                        </p>
                                        <p className="text-green-600 text-sm mt-1">
                                            Refund will be credited to your original payment method
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-green-200/50">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-blue-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-md">
                                        3
                                    </div>
                                    <div>
                                        <p className="text-green-700 font-medium leading-relaxed">
                                            Confirmation Email
                                        </p>
                                        <p className="text-green-600 text-sm mt-1">
                                            You will receive a confirmation email with refund details
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Next Steps */}
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 rounded-2xl p-8 shadow-sm">
                            <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-3">
                                <div className="p-2 bg-blue-100 rounded-lg">
                                    <ArrowRight className="h-5 w-5 text-blue-600" />
                                </div>
                                What you can do next
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-200/50">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-md">
                                        1
                                    </div>
                                    <div>
                                        <p className="text-blue-700 font-medium leading-relaxed">
                                            Apply for a new visa application
                                        </p>
                                        <p className="text-blue-600 text-sm mt-1">
                                            Start a fresh application with updated information
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-200/50">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-md">
                                        2
                                    </div>
                                    <div>
                                        <p className="text-blue-700 font-medium leading-relaxed">
                                            Contact our support team
                                        </p>
                                        <p className="text-blue-600 text-sm mt-1">
                                            Get assistance with your refund or new application
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="bg-gradient-to-r from-slate-50 to-gray-50 border border-slate-200/50 rounded-2xl p-8 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                                <div className="p-2 bg-slate-100 rounded-lg">
                                    <MessageCircle className="h-5 w-5 text-slate-600" />
                                </div>
                                Contact Our Support Team
                            </h3>
                            <div className="grid gap-4">
                                <a href="mailto:visa@unitedevisa.com" className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/50 hover:bg-white transition-all duration-200 cursor-pointer">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-md">
                                        <Mail className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-800">Email Support</p>
                                        <p className="text-slate-700">visa@unitedevisa.com</p>
                                    </div>
                                </a>
                                <a href="tel:+1-555-123-4567" className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/50 hover:bg-white transition-all duration-200 cursor-pointer">
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center shadow-md">
                                        <Phone className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-800">Phone Support</p>
                                        <p className="text-slate-700">+1 (555) 123-4567</p>
                                    </div>
                                </a>
                                <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/50">
                                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-md">
                                        <MessageCircle className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-800">Live Chat</p>
                                        <p className="text-slate-700">Available 24/7 on our website</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <a 
                                href="/apply" 
                                className="flex-1 block cursor-pointer"
                                style={{ textDecoration: 'none' }}
                            >
                                <div className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium transition-all duration-200 shadow-lg hover:shadow-xl rounded-lg flex items-center justify-center">
                                    Apply for New Visa
                                </div>
                            </a>
                            <a 
                                href="/list" 
                                className="flex-1 block cursor-pointer"
                                style={{ textDecoration: 'none' }}
                            >
                                <div className="w-full h-12 border-2 border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all duration-200 font-medium rounded-lg flex items-center justify-center">
                                    View All Applications
                                </div>
                            </a>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default function RefundedPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-blue-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="relative w-16 h-16 mx-auto mb-6">
                        <div className="absolute inset-0 rounded-full border-4 border-slate-200"></div>
                        <div className="absolute inset-0 rounded-full border-4 border-green-600 border-t-transparent animate-spin"></div>
                    </div>
                    <div className="space-y-2">
                        <p className="text-lg font-semibold text-slate-700">Loading application details...</p>
                        <p className="text-sm text-slate-500">Please wait while we retrieve your information</p>
                    </div>
                </div>
            </div>
        }>
            <RefundedContent />
        </Suspense>
    );
} 