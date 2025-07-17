'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import StatusMismatch from '@/components/shared/StatusMismatch';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Clock, CheckCircle2, FileText, Mail, Phone, Calendar, AlertCircle } from 'lucide-react';
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
    estimatedProcessingTime?: string;
    visaType?: string | { id: string; name: string; waitTime?: string; fees?: any; requiredDocuments?: any; allowedNationalities?: any; destinationId?: string };
    destination?: string | { id: string; name: string; [key: string]: any };
}

interface Passenger {
    id?: string;
    fullName: string;
    dateOfBirth?: string;
    nationality?: string;
    passportNumber?: string;
}


function ProcessingContent() {
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
                    // Status validation: only allow if status is 'Processing'
                    if (data.status && data.status.toLowerCase() !== 'processing') {
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
                                <AlertCircle className="h-5 w-5" />
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
            <StatusMismatch expectedStatus="Processing" actualStatus={applicationData.status} />
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 py-10">
            <div className="max-w-4xl mx-auto px-4">
                {/* Main Status Card */}
                <Card className="bg-white shadow-sm border border-slate-200 mb-8">
                    <CardHeader className="text-center pb-6">
                        <div className="flex justify-center mb-2 pt-4">
                            <div className="relative">
                                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                                    <Clock className="h-8 w-8 text-yellow-600 animate-pulse" />
                                </div>
                                <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                                </div>
                            </div>
                        </div>
                        <CardTitle className="text-3xl font-bold text-slate-800 mb-2">
                            Application Under Review
                        </CardTitle>
                        <p className="text-lg text-slate-600">
                            Your visa application is currently being processed by our team
                        </p>
                        <Badge className="bg-yellow-100 mx-auto hover:bg-yellow-100 text-yellow-800 border-transparent mt-3 text-sm px-3 py-1">
                            Status: Processing
                        </Badge>
                    </CardHeader>

                    <CardContent className="space-y-6">
                        {/* Application Details */}
                        <div className="bg-slate-50 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-slate-800 mb-4">Application Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-slate-500">Application ID</p>
                                    <p className="text-slate-800 font-medium">
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
                                    <p className="text-sm text-slate-500">Travel Dates</p>
                                    <p className="font-medium text-slate-800">
                                        {applicationData.stayingStart && applicationData.stayingEnd 
                                            ? `${formatDate(applicationData.stayingStart)} - ${formatDate(applicationData.stayingEnd)}`
                                            : 'Not specified'}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Estimated Processing Time</p>
                                    <p className="font-medium text-slate-800">
                                        {applicationData.estimatedProcessingTime || '3-5 business days'}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Separator />

                        {/* Processing Timeline */}
                        <div>
                            <h3 className="text-lg font-semibold text-slate-800 mb-4">Processing Timeline</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 className="h-4 w-4 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-medium text-slate-800">Application Submitted</p>
                                        <p className="text-sm text-slate-500">Your application has been received successfully</p>
                                    </div>
                                    <p className="text-sm text-slate-500">
                                        {applicationData.submittedAt ? formatDate(applicationData.submittedAt) : 'Complete'}
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Clock className="h-4 w-4 text-white animate-pulse" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-medium text-slate-800">Under Review</p>
                                        <p className="text-sm text-slate-500">Your application is currently being reviewed by our visa specialists</p>
                                    </div>
                                    <p className="text-sm text-yellow-600 font-medium">In Progress</p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 bg-slate-300 rounded-full flex items-center justify-center flex-shrink-0">
                                        <FileText className="h-4 w-4 text-slate-500" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-medium text-slate-500">Decision & Notification</p>
                                        <p className="text-sm text-slate-400">You will be notified once a decision has been made</p>
                                    </div>
                                    <p className="text-sm text-slate-400">Pending</p>
                                </div>
                            </div>
                        </div>

                        <Separator />

                        {/* What Happens Next */}
                        <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-emerald-800 mb-3 flex items-center gap-2">
                                <AlertCircle className="h-5 w-5" />
                                What Happens Next?
                            </h3>
                            <div className="space-y-3 text-emerald-700">
                                <p className="flex items-start gap-2">
                                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold mt-0.5">1</span>
                                    <span>Our visa specialists are carefully reviewing your application and supporting documents</span>
                                </p>
                                <p className="flex items-start gap-2">
                                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold mt-0.5">2</span>
                                    <span>If additional information is needed, we will contact you via email or phone</span>
                                </p>
                                <p className="flex items-start gap-2">
                                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold mt-0.5">3</span>
                                    <span>Once approved, your visa will be sent to your registered email address</span>
                                </p>
                                <p className="flex items-start gap-2">
                                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold mt-0.5">4</span>
                                    <span>You will receive an SMS notification when your visa is ready</span>
                                </p>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="bg-slate-50 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-slate-800 mb-4">Need Assistance?</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                                    <Mail className="h-5 w-5 text-emerald-600" />
                                    <div>
                                        <p className="font-medium text-slate-800">Email Support</p>
                                        <a href="mailto:support@unitedevisa.com" className="text-emerald-600 hover:underline text-sm">
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
                            <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                                <p className="text-sm text-amber-700">
                                    <strong>Please note:</strong> Our support team is available Monday to Friday, 9 AM to 6 PM EST. 
                                    Response time is typically within 24 hours.
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
                            <Link href="/profile" className="flex-1">
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
                            <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-semibold text-amber-800 mb-2">Important Notice</h4>
                                <div className="text-amber-700 space-y-2 text-sm">
                                    <p>• Processing times may vary depending on application complexity and current volume</p>
                                    <p>• Please ensure your travel plans allow sufficient time for visa processing</p>
                                    <p>• Do not make final travel arrangements until you receive your approved visa</p>
                                    <p>• Keep this application ID ({applicationData.applicationId}) for your records</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default function ProcessingPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-600 mb-4"></div>
                    <p className="text-slate-700 font-medium">Loading application status...</p>
                </div>
            </div>
        }>
            <ProcessingContent />
        </Suspense>
    );
}
