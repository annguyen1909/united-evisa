'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CheckCircle2, Download, Printer, FileText, Mail, Phone, AlertCircle } from 'lucide-react';
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
    completedAt?: string;
    visaType?: string | { id: string; name: string; waitTime?: string; fees?: any; requiredDocuments?: any; allowedNationalities?: any; destinationId?: string };
    destination?: string | { id: string; name: string; [key: string]: any };
    visaNumber?: string;
    visaExpiryDate?: string;
    visaValidFrom?: string;
    visaValidUntil?: string;
}

interface ResultStatusProps {
    applicationData: ApplicationData;
    onRefresh: () => void;
}

export default function ResultStatus({ applicationData, onRefresh }: ResultStatusProps) {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const handleDownloadVisa = async () => {
        if (!applicationData.applicationId) return;
        
        try {
            const response = await fetch(`/api/applications/${applicationData.applicationId}/download-visa`);
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

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 py-12">
            <div className="max-w-5xl mx-auto px-4">
                {/* Success Header */}
                <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0 mb-8 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5"></div>
                    <CardHeader className="text-center pb-8 pt-8 relative z-10">
                        <div className="flex justify-center mb-6">
                            <div className="relative">
                                <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-green-100 rounded-2xl flex items-center justify-center shadow-lg">
                                    <CheckCircle2 className="h-12 w-12 text-emerald-600" />
                                </div>
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center shadow-md">
                                    <CheckCircle2 className="h-4 w-4 text-white" />
                                </div>
                            </div>
                        </div>
                        <CardTitle className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">
                            Visa Approved!
                        </CardTitle>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Congratulations! Your visa application has been approved and is ready for download
                        </p>
                        <div className="flex justify-center mt-4">
                            <Badge className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white border-0 text-sm px-4 py-2 rounded-full font-medium shadow-lg">
                                Status: Visa Result Sent
                            </Badge>
                        </div>
                    </CardHeader>

                    <CardContent className="space-y-8 px-8 pb-8">
                        {/* Visa Details */}
                        <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200/50 rounded-2xl p-8 shadow-sm">
                            <h3 className="text-xl font-bold text-emerald-800 mb-6 flex items-center gap-3">
                                <div className="p-2 bg-emerald-100 rounded-lg">
                                    <FileText className="h-5 w-5 text-emerald-600" />
                                </div>
                                Your Visa Details
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { label: "Application ID", value: applicationData.applicationId, mono: true },
                                    { 
                                        label: "Visa Number", 
                                        value: applicationData.visaNumber || 'VISA' + applicationData.applicationId?.slice(-6),
                                        mono: true 
                                    },
                                    { 
                                        label: "Valid From", 
                                        value: applicationData.visaValidFrom ? formatDate(applicationData.visaValidFrom) : 
                                               applicationData.stayingStart ? formatDate(applicationData.stayingStart) : 'On arrival'
                                    },
                                    { 
                                        label: "Valid Until", 
                                        value: applicationData.visaValidUntil ? formatDate(applicationData.visaValidUntil) : 
                                               applicationData.visaExpiryDate ? formatDate(applicationData.visaExpiryDate) : 'Check visa document'
                                    },
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
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-emerald-200/50">
                                        <p className="text-sm font-medium text-emerald-600 mb-1">{item.label}</p>
                                        <p className={`font-semibold text-emerald-800 ${item.mono ? 'font-mono text-sm' : ''}`}>
                                            {item.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Download Section */}
                        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200/50 rounded-2xl p-8 shadow-sm">
                            <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-3">
                                <div className="p-2 bg-blue-100 rounded-lg">
                                    <Download className="h-5 w-5 text-blue-600" />
                                </div>
                                Download Your Visa
                            </h3>
                            <p className="text-blue-700 mb-6 leading-relaxed">
                                Your official visa document is ready for download. Please save it to your device and print a copy for travel.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button 
                                    onClick={handleDownloadVisa}
                                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium h-12 px-6 shadow-lg hover:shadow-xl transition-all duration-200"
                                >
                                    <Download className="h-4 w-4 mr-2" />
                                    Download Visa (PDF)
                                </Button>
                                <Button 
                                    onClick={() => window.print()}
                                    variant="outline"
                                    className="border-2 border-blue-300 text-blue-700 hover:bg-blue-50 h-12 px-6 font-medium transition-all duration-200"
                                >
                                    <Printer className="h-4 w-4 mr-2" />
                                    Print This Page
                                </Button>
                            </div>
                        </div>

                        <Separator className="bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

                        {/* Passenger Information */}
                        {applicationData.passengers && applicationData.passengers.length > 0 && (
                            <div className="bg-slate-50/70 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50">
                                <h3 className="text-xl font-bold text-slate-800 mb-6">Travelers</h3>
                                <div className="grid gap-4">
                                    {applicationData.passengers.map((passenger, index) => (
                                        <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200/50 flex items-center justify-between">
                                            <div>
                                                <p className="font-semibold text-slate-800">{passenger.fullName}</p>
                                                <p className="text-sm text-slate-600">
                                                    {passenger.nationality} • {passenger.passportNumber}
                                                </p>
                                            </div>
                                            {passenger.visaNumber && (
                                                <div className="text-right">
                                                    <p className="text-sm text-slate-500">Visa Number</p>
                                                    <p className="font-mono text-sm text-slate-800">{passenger.visaNumber}</p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Important Travel Information */}
                        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/50 rounded-2xl p-8 shadow-sm">
                            <h3 className="text-xl font-bold text-amber-800 mb-4 flex items-center gap-3">
                                <div className="p-2 bg-amber-100 rounded-lg">
                                    <AlertCircle className="h-5 w-5 text-amber-600" />
                                </div>
                                Important Travel Information
                            </h3>
                            <div className="grid gap-4">
                                {[
                                    "Carry a printed copy of your visa document when traveling",
                                    "Ensure your passport is valid for at least 6 months from entry date",
                                    "Verify any additional entry requirements for your destination",
                                    "If you have questions, contact the embassy or consulate of your destination"
                                ].map((info, index) => (
                                    <div key={index} className="flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-amber-200/50">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-md">
                                            {index + 1}
                                        </div>
                                        <p className="text-amber-700 font-medium leading-relaxed">{info}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Support */}
                        <div className="bg-slate-50/70 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50">
                            <h3 className="text-xl font-bold text-slate-800 mb-6">Need Assistance?</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <Link href="/list" className="flex-1">
                                <Button variant="outline" className="w-full h-12 border-2 border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all duration-200 font-medium">
                                    View All Applications
                                </Button>
                            </Link>
                            <Link href="/apply" className="flex-1">
                                <Button className="w-full h-12 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-medium transition-all duration-200 shadow-lg hover:shadow-xl">
                                    Apply for Another Visa
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>

                {/* Application Summary */}
                <Card className="bg-slate-50/70 backdrop-blur-sm border border-slate-200/50 shadow-lg">
                    <CardContent className="p-8">
                        <h4 className="font-bold text-slate-800 mb-6 text-lg">Application Summary</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    label: "Submitted",
                                    value: applicationData.submittedAt ? formatDate(applicationData.submittedAt) : 'Not available'
                                },
                                {
                                    label: "Approved",
                                    value: applicationData.completedAt ? formatDate(applicationData.completedAt) : 'Today'
                                },
                                {
                                    label: "Travel Dates",
                                    value: applicationData.stayingStart && applicationData.stayingEnd 
                                        ? `${formatDate(applicationData.stayingStart)} - ${formatDate(applicationData.stayingEnd)}`
                                        : 'As specified in visa'
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200/50 text-center">
                                    <p className="text-sm font-medium text-slate-500 mb-1">{item.label}</p>
                                    <p className="font-semibold text-slate-800">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
