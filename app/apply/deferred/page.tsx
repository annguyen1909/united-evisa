'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import StatusMismatch from '@/components/shared/StatusMismatch';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Clock, AlertTriangle, FileText, Mail, Phone, Upload, Calendar, HelpCircle } from 'lucide-react';
import Link from 'next/link';

// Types
interface ApplicationData {
    applicationId?: string;
    fullName?: string;
    email?: string;
    areaCode?: string;
    phoneNumber?: string;
    gender?: string;
    stayingStart?: string;
    stayingEnd?: string;
    passengers?: Passenger[];
    status?: string;
    submittedAt?: string;
    deferredAt?: string;
    deferralReason?: string;
    requiredActions?: string[];
    visaType?: string | { id: string; name: string; waitTime?: string; fees?: any; requiredDocuments?: any; allowedNationalities?: any; destinationId?: string };
    destination?: string | { id: string; name: string; [key: string]: any };
    estimatedResolutionTime?: string;
}

interface Passenger {
    id?: string;
    fullName: string;
    dateOfBirth?: string;
    nationality?: string;
    passportNumber?: string;
}


function DeferredContent() {
    const searchParams = useSearchParams();
    const applicationId = searchParams.get('applicationId');

    const [applicationData, setApplicationData] = useState<ApplicationData>({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [statusMismatch, setStatusMismatch] = useState(false);

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
                    // Status validation: only allow if status is 'Deferred'
                    if (data.status && data.status.toLowerCase() !== 'deferred') {
                        setStatusMismatch(true);
                    }
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

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    // Loading state
    if (isLoading) {
        return (
            <div className="min-h-screen bg-slate-50 py-10">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="flex flex-col items-center justify-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-[3px] border-slate-200 border-t-emerald-600"></div>
                        <span className="mt-4 text-slate-600">Loading application status...</span>
                    </div>
                </div>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="min-h-screen bg-slate-50 py-10">
                <div className="max-w-4xl mx-auto px-4">
                    <Card className="bg-red-50 border border-red-200">
                        <CardHeader>
                            <CardTitle className="text-xl font-bold text-red-700 flex items-center gap-2">
                                <AlertTriangle className="h-5 w-5" />
                                Error Loading Application
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-red-600 mb-4">{error}</p>
                            <Button 
                                onClick={() => window.location.reload()}
                                className="bg-red-600 hover:bg-red-700"
                            >
                                Try Again
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }

    // Status mismatch state
    if (statusMismatch) {
        return (
            <StatusMismatch expectedStatus="Deferred" actualStatus={applicationData.status} />
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 py-10">
            <div className="max-w-4xl mx-auto px-4">
                {/* Main Status Card */}
                <Card className="bg-white shadow-sm border border-slate-200 mb-8">
                    <CardHeader className="text-center pb-6">
                        <div className="flex justify-center mb-4">
                            <div className="relative">
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                                    <HelpCircle className="h-8 w-8 text-orange-600" />
                                </div>
                                <div className="absolute -top-1 -right-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                                    <AlertTriangle className="h-3 w-3 text-white" />
                                </div>
                            </div>
                        </div>
                        <CardTitle className="text-3xl font-bold text-slate-800 mb-2">
                            Application Deferred
                        </CardTitle>
                        <p className="text-lg text-slate-600">
                            Your visa application requires additional information or clarification
                        </p>
                        <Badge className="bg-orange-100 hover:bg-orange-100 text-orange-800 border-transparent mt-3 text-sm px-3 py-1">
                            Status: Deferred
                        </Badge>
                    </CardHeader>

                    <CardContent className="space-y-6">
                        {/* Deferral Notice */}
                        <div className="bg-orange-50 border border-orange-100 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-orange-800 mb-3 flex items-center gap-2">
                                <AlertTriangle className="h-5 w-5" />
                                What Does This Mean?
                            </h3>
                            <p className="text-orange-700 mb-4">
                                Your application has been temporarily deferred while we review additional requirements. 
                                This is a common part of the visa process and does not mean your application has been rejected.
                            </p>
                            <div className="bg-orange-100 rounded-lg p-4">
                                <p className="text-sm text-orange-800">
                                    <strong>Reason for Deferral:</strong> {applicationData.deferralReason || 'Additional documentation or information required'}
                                </p>
                            </div>
                        </div>

                        {/* Application Details */}
                        <div className="bg-slate-50 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-slate-800 mb-4">Application Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-slate-500">Application ID</p>
                                    <p className="font-mono text-slate-800 bg-white px-2 py-1 rounded border">
                                        {applicationData.applicationId}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Visa Type</p>
                                    <p className="font-medium text-slate-800">
                                        {typeof applicationData.visaType === 'string' 
                                            ? applicationData.visaType 
                                            : applicationData.visaType?.name || 'Tourist Visa'}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Destination</p>
                                    <p className="font-medium text-slate-800">
                                        {typeof applicationData.destination === 'string'
                                            ? applicationData.destination
                                            : applicationData.destination?.name || 'Not specified'}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Submitted On</p>
                                    <p className="font-medium text-slate-800">
                                        {applicationData.submittedAt ? formatDate(applicationData.submittedAt) : 'Not available'}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Deferred On</p>
                                    <p className="font-medium text-slate-800">
                                        {applicationData.deferredAt ? formatDate(applicationData.deferredAt) : 'Recently'}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Expected Resolution</p>
                                    <p className="font-medium text-slate-800">
                                        {applicationData.estimatedResolutionTime || '5-7 business days after submission of required items'}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Separator />

                        {/* Required Actions */}
                        <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center gap-2">
                                <FileText className="h-5 w-5" />
                                Required Actions
                            </h3>
                            <p className="text-blue-700 mb-4">
                                Please complete the following actions to continue processing your application:
                            </p>
                            <div className="space-y-3">
                                {applicationData.requiredActions && applicationData.requiredActions.length > 0 ? (
                                    applicationData.requiredActions.map((action, index) => (
                                        <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-blue-200">
                                            <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                                                {index + 1}
                                            </div>
                                            <p className="text-blue-800">{action}</p>
                                        </div>
                                    ))
                                ) : (
                                    <>
                                        <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-blue-200">
                                            <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                                                1
                                            </div>
                                            <p className="text-blue-800">Provide additional passport pages showing entry/exit stamps</p>
                                        </div>
                                        <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-blue-200">
                                            <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                                                2
                                            </div>
                                            <p className="text-blue-800">Submit updated travel itinerary with confirmed bookings</p>
                                        </div>
                                        <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-blue-200">
                                            <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                                                3
                                            </div>
                                            <p className="text-blue-800">Provide proof of accommodation for the entire stay</p>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* How to Submit Documents */}
                        <div className="bg-slate-50 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                                <Upload className="h-5 w-5" />
                                How to Submit Required Documents
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-emerald-600 text-sm font-bold">1</span>
                                    </div>
                                    <div>
                                        <p className="font-medium text-slate-800">Email Submission (Recommended)</p>
                                        <p className="text-sm text-slate-600">
                                            Send documents to{' '}
                                            <a href={`mailto:support@unitedevisa.com?subject=Deferred Application ${applicationData.applicationId}`} 
                                               className="text-emerald-600 underline">
                                                support@unitedevisa.com
                                            </a>{' '}
                                            with subject: "Deferred Application {applicationData.applicationId}"
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-emerald-600 text-sm font-bold">2</span>
                                    </div>
                                    <div>
                                        <p className="font-medium text-slate-800">Online Portal</p>
                                        <p className="text-sm text-slate-600">
                                            Log in to your account and upload documents through the application portal
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-emerald-600 text-sm font-bold">3</span>
                                    </div>
                                    <div>
                                        <p className="font-medium text-slate-800">Phone Support</p>
                                        <p className="text-sm text-slate-600">
                                            Call our support team for guidance on document submission
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Processing Timeline */}
                        <div>
                            <h3 className="text-lg font-semibold text-slate-800 mb-4">What Happens Next?</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Clock className="h-4 w-4 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-medium text-slate-800">Waiting for Documents</p>
                                        <p className="text-sm text-slate-500">Submit the required documents as listed above</p>
                                    </div>
                                    <p className="text-sm text-orange-600 font-medium">Current Step</p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 bg-slate-300 rounded-full flex items-center justify-center flex-shrink-0">
                                        <FileText className="h-4 w-4 text-slate-500" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-medium text-slate-500">Document Review</p>
                                        <p className="text-sm text-slate-400">We will review your submitted documents</p>
                                    </div>
                                    <p className="text-sm text-slate-400">Pending</p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 bg-slate-300 rounded-full flex items-center justify-center flex-shrink-0">
                                        <FileText className="h-4 w-4 text-slate-500" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-medium text-slate-500">Final Processing</p>
                                        <p className="text-sm text-slate-400">Complete application processing and decision</p>
                                    </div>
                                    <p className="text-sm text-slate-400">Pending</p>
                                </div>
                            </div>
                        </div>

                        <Separator />

                        {/* Contact Support */}
                        <div className="bg-slate-50 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-slate-800 mb-4">Need Help?</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                                    <Mail className="h-5 w-5 text-emerald-600" />
                                    <div>
                                        <p className="font-medium text-slate-800">Email Support</p>
                                        <a href={`mailto:support@unitedevisa.com?subject=Deferred Application ${applicationData.applicationId}`} 
                                           className="text-emerald-600 hover:underline text-sm">
                                            support@unitedevisa.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                                    <Phone className="h-5 w-5 text-emerald-600" />
                                    <div>
                                        <p className="font-medium text-slate-800">Phone Support</p>
                                        <a href="tel:+1-800-VISA-HELP" className="text-emerald-600 hover:underline text-sm">
                                            +1 (800) VISA-HELP
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                                <p className="text-sm text-blue-700">
                                    <strong>Tip:</strong> When contacting support, please reference your application ID: <span className="font-mono">{applicationData.applicationId}</span>
                                </p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-4">
                            <Button 
                                onClick={() => window.location.reload()}
                                variant="outline" 
                                className="flex-1"
                            >
                                Refresh Status
                            </Button>
                            <Link href="/list" className="flex-1">
                                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                                    View All Applications
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>

                {/* Important Notice */}
                <Card className="bg-amber-50 border border-amber-200">
                    <CardContent className="p-6">
                        <div className="flex items-start gap-3">
                            <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-semibold text-amber-800 mb-2">Important Reminders</h4>
                                <div className="text-amber-700 space-y-2 text-sm">
                                    <p>• Submit all required documents as soon as possible to avoid further delays</p>
                                    <p>• Ensure all documents are clear, legible, and in the required format</p>
                                    <p>• Processing will resume once all required information is received</p>
                                    <p>• Your application remains valid and will not be cancelled due to deferral</p>
                                    <p>• Contact support if you have questions about the required documents</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default function DeferredPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-600 mb-4"></div>
                    <p className="text-slate-700 font-medium">Loading application status...</p>
                </div>
            </div>
        }>
            <DeferredContent />
        </Suspense>
    );
}
