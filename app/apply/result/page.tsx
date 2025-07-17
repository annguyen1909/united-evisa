'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import StatusMismatch from '@/components/shared/StatusMismatch';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CheckCircle2, Download, Mail, Phone, Calendar, AlertCircle, FileText, Printer } from 'lucide-react';
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
    completedAt?: string;
    visaType?: string | { id: string; name: string; waitTime?: string; fees?: any; requiredDocuments?: any; allowedNationalities?: any; destinationId?: string };
    destination?: string | { id: string; name: string; [key: string]: any };
    visaNumber?: string;
    visaExpiryDate?: string;
    visaValidFrom?: string;
    visaValidUntil?: string;
}

interface Passenger {
    id?: string;
    fullName: string;
    dateOfBirth?: string;
    nationality?: string;
    passportNumber?: string;
    visaNumber?: string;
}


function VisaResultContent() {
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
                    // Status validation: only allow if status is 'Visa Result Sent'
                    if (data.status && data.status.toLowerCase() !== 'visa result sent') {
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

    const handleDownloadVisa = async () => {
        if (!applicationId) return;
        
        try {
            const response = await fetch(`/api/applications/${applicationId}/download-visa`);
            if (response.ok) {
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `visa-${applicationData.applicationId}.pdf`;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
            } else {
                alert('Failed to download visa. Please try again or contact support.');
            }
        } catch (error) {
            console.error('Error downloading visa:', error);
            alert('Failed to download visa. Please try again or contact support.');
        }
    };

    // Loading state
    if (isLoading) {
        return (
            <div className="min-h-screen bg-slate-50 py-10">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="flex flex-col items-center justify-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-[3px] border-slate-200 border-t-emerald-600"></div>
                        <span className="mt-4 text-slate-600">Loading visa results...</span>
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
                                Error Loading Visa Results
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
            <StatusMismatch expectedStatus="Visa Result Sent" actualStatus={applicationData.status} />
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 py-10">
            <div className="max-w-4xl mx-auto px-4">
                {/* Success Header */}
                <Card className="bg-white shadow-sm border border-slate-200 mb-8">
                    <CardHeader className="text-center pb-6">
                        <div className="flex justify-center mb-4">
                            <div className="relative">
                                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                                    <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                                </div>
                                <div className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                                    <CheckCircle2 className="h-3 w-3 text-white" />
                                </div>
                            </div>
                        </div>
                        <CardTitle className="text-3xl font-bold text-slate-800 mb-2">
                            Visa Approved!
                        </CardTitle>
                        <p className="text-lg text-slate-600">
                            Congratulations! Your visa application has been approved and is ready for download
                        </p>
                        <Badge className="bg-emerald-100 hover:bg-emerald-100 text-emerald-800 border-transparent mt-3 text-sm px-3 py-1">
                            Status: Visa Result Sent
                        </Badge>
                    </CardHeader>

                    <CardContent className="space-y-6">
                        {/* Visa Details */}
                        <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-100">
                            <h3 className="text-lg font-semibold text-emerald-800 mb-4 flex items-center gap-2">
                                <FileText className="h-5 w-5" />
                                Your Visa Details
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-emerald-600">Application ID</p>
                                    <p className="font-mono text-emerald-800 bg-white px-2 py-1 rounded border">
                                        {applicationData.applicationId}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-emerald-600">Visa Number</p>
                                    <p className="font-mono text-emerald-800 bg-white px-2 py-1 rounded border">
                                        {applicationData.visaNumber || 'VISA' + applicationData.applicationId?.slice(-6)}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-emerald-600">Valid From</p>
                                    <p className="font-medium text-emerald-800">
                                        {applicationData.visaValidFrom ? formatDate(applicationData.visaValidFrom) : 
                                         applicationData.stayingStart ? formatDate(applicationData.stayingStart) : 'On arrival'}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-emerald-600">Valid Until</p>
                                    <p className="font-medium text-emerald-800">
                                        {applicationData.visaValidUntil ? formatDate(applicationData.visaValidUntil) : 
                                         applicationData.visaExpiryDate ? formatDate(applicationData.visaExpiryDate) : 'Check visa document'}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-emerald-600">Visa Type</p>
                                    <p className="font-medium text-emerald-800">
                                        {typeof applicationData.visaType === 'string' 
                                            ? applicationData.visaType 
                                            : applicationData.visaType?.name || 'Tourist Visa'}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-emerald-600">Destination</p>
                                    <p className="font-medium text-emerald-800">
                                        {typeof applicationData.destination === 'string'
                                            ? applicationData.destination
                                            : applicationData.destination?.name || 'Not specified'}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Download Section */}
                        <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center gap-2">
                                <Download className="h-5 w-5" />
                                Download Your Visa
                            </h3>
                            <p className="text-blue-700 mb-4">
                                Your official visa document is ready for download. Please save it to your device and print a copy for travel.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Button 
                                    onClick={handleDownloadVisa}
                                    className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2"
                                >
                                    <Download className="h-4 w-4" />
                                    Download Visa (PDF)
                                </Button>
                                <Button 
                                    onClick={() => window.print()}
                                    variant="outline"
                                    className="border-blue-200 text-blue-700 hover:bg-blue-50 flex items-center gap-2"
                                >
                                    <Printer className="h-4 w-4" />
                                    Print This Page
                                </Button>
                            </div>
                        </div>

                        <Separator />

                        {/* Passenger Information */}
                        {applicationData.passengers && applicationData.passengers.length > 0 && (
                            <div>
                                <h3 className="text-lg font-semibold text-slate-800 mb-4">Travelers</h3>
                                <div className="space-y-3">
                                    {applicationData.passengers.map((passenger, index) => (
                                        <div key={passenger.id || index} className="bg-slate-50 rounded-lg p-4">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="font-medium text-slate-800">{passenger.fullName}</p>
                                                    <p className="text-sm text-slate-500">
                                                        Passport: {passenger.passportNumber || 'Not provided'}
                                                    </p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-sm text-slate-500">Visa Number</p>
                                                    <p className="font-mono text-slate-800 text-sm">
                                                        {passenger.visaNumber || 'VISA' + applicationData.applicationId?.slice(-6) + (index + 1)}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <Separator />

                        {/* Important Travel Information */}
                        <div className="bg-amber-50 border border-amber-100 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-amber-800 mb-3 flex items-center gap-2">
                                <AlertCircle className="h-5 w-5" />
                                Important Travel Information
                            </h3>
                            <div className="space-y-3 text-amber-700">
                                <p className="flex items-start gap-2">
                                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs font-bold mt-0.5">1</span>
                                    <span><strong>Print your visa:</strong> Carry a printed copy of your visa document when traveling</span>
                                </p>
                                <p className="flex items-start gap-2">
                                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs font-bold mt-0.5">2</span>
                                    <span><strong>Passport validity:</strong> Ensure your passport is valid for at least 6 months from entry date</span>
                                </p>
                                <p className="flex items-start gap-2">
                                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs font-bold mt-0.5">3</span>
                                    <span><strong>Check entry requirements:</strong> Verify any additional entry requirements for your destination</span>
                                </p>
                                <p className="flex items-start gap-2">
                                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs font-bold mt-0.5">4</span>
                                    <span><strong>Contact embassy:</strong> If you have questions, contact the embassy or consulate of your destination</span>
                                </p>
                            </div>
                        </div>

                        {/* Contact Support */}
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
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-4">
                            <Link href="/list" className="flex-1">
                                <Button variant="outline" className="w-full">
                                    View All Applications
                                </Button>
                            </Link>
                            <Link href="/apply" className="flex-1">
                                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                                    Apply for Another Visa
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>

                {/* Application Summary */}
                <Card className="bg-slate-50 border border-slate-200">
                    <CardContent className="p-6">
                        <h4 className="font-semibold text-slate-800 mb-4">Application Summary</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div>
                                <p className="text-slate-500">Submitted</p>
                                <p className="font-medium text-slate-800">
                                    {applicationData.submittedAt ? formatDate(applicationData.submittedAt) : 'Not available'}
                                </p>
                            </div>
                            <div>
                                <p className="text-slate-500">Approved</p>
                                <p className="font-medium text-slate-800">
                                    {applicationData.completedAt ? formatDate(applicationData.completedAt) : 'Today'}
                                </p>
                            </div>
                            <div>
                                <p className="text-slate-500">Travel Dates</p>
                                <p className="font-medium text-slate-800">
                                    {applicationData.stayingStart && applicationData.stayingEnd 
                                        ? `${formatDate(applicationData.stayingStart)} - ${formatDate(applicationData.stayingEnd)}`
                                        : 'As specified in visa'}
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default function VisaResultPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-600 mb-4"></div>
                    <p className="text-slate-700 font-medium">Loading visa results...</p>
                </div>
            </div>
        }>
            <VisaResultContent />
        </Suspense>
    );
}
