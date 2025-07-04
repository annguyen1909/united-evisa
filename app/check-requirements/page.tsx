'use client';

import { notFound, useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getCountryBySlug } from '@/lib/countries';
import { getNationalityByCode } from '@/lib/nationalities';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import {
    CheckCircle, XCircle, ArrowRight, Calendar, Clock, CreditCard,
    Globe, ArrowLeftRight, BadgeInfo, User, Info
} from 'lucide-react';
import VisaSteps from '../components/VisaSteps';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export default function CheckRequirementsPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const nationalitySlug = searchParams.get('n');
    const destinationSlug = searchParams.get('d');

    const [nationalityName, setNationalityName] = useState<string | null>(null);
    const [destinationName, setDestinationName] = useState<string | null>(null);
    const [visaTypeResults, setVisaTypeResults] = useState<any[] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkEligibility = async () => {
            if (!nationalitySlug || !destinationSlug) {
                notFound();
                return;
            }

            try {
                const nationality = getNationalityByCode(nationalitySlug);
                const destination = getCountryBySlug(destinationSlug);

                if (!nationality || !destination) {
                    notFound();
                    return;
                }

                setNationalityName(nationality.name);
                setDestinationName(destination.name);

                // Build file name (e.g., "Vietnam" → "vietnam")
                const fileName = destination.name.toLowerCase().replace(/ /g, '-');
                const destinationModule = await import(`@/lib/countries/${fileName}`);
                const visaTypes = destinationModule.default.visaTypes || [];

                // For each visa type, check eligibility
                const results = visaTypes.map((visaType: any) => ({
                    ...visaType,
                    isEligible: visaType.allowedNationalities?.includes(nationality.code.toUpperCase()),
                }));
                setVisaTypeResults(results);
            } catch (err) {
                console.error("Error checking eligibility:", err);
                notFound();
            } finally {
                setLoading(false);
            }
        };
        checkEligibility();
    }, [nationalitySlug, destinationSlug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-600 mb-4"></div>
                    <p className="text-slate-700 font-medium">Checking visa eligibility...</p>
                </div>
            </div>
        );
    }

    if (!visaTypeResults || !nationalityName || !destinationName) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <Card className="max-w-md w-full shadow-lg border-red-100">
                    <CardHeader className="bg-red-50 text-red-800">
                        <CardTitle className="flex items-center gap-2">
                            <Info className="h-5 w-5" />
                            Could Not Determine Eligibility
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <p className="text-slate-600 mb-4">
                            We couldn't determine visa eligibility with the provided information. Please try again or contact support for assistance.
                        </p>
                        <Button
                            onClick={() => router.push('/')}
                            variant="outline"
                            className="w-full"
                        >
                            Return Home
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 py-10 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-10 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-3 text-slate-800">
                        Visa Eligibility <span className="text-emerald-700">Results</span>
                    </h1>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Review your visa eligibility status and requirements for traveling from {nationalityName} to {destinationName}.
                    </p>
                </div>

                {/* Nationality and Destination */}
                <Card className="mb-10 border border-slate-200 shadow-sm">
                    <CardContent className="p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-6">
                            {/* Nationality */}
                            <div className="flex items-center gap-3 bg-slate-50 p-3 px-4 rounded-lg border border-slate-100">
                                <img
                                    src={`https://flagcdn.com/${nationalitySlug?.toLowerCase()}.svg`}
                                    alt={nationalityName || ''}
                                    className="w-10 h-10 rounded-full border shadow-sm object-cover bg-white"
                                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                                />
                                <div>
                                    <p className="text-xs text-slate-500 font-medium">From</p>
                                    <p className="text-base font-semibold text-slate-800">{nationalityName}</p>
                                </div>
                            </div>

                            {/* Arrow */}
                            <div className="hidden sm:flex items-center justify-center">
                                <ArrowLeftRight className="h-6 w-6 text-slate-400" />
                            </div>

                            {/* Arrow for mobile */}
                            <div className="flex sm:hidden items-center justify-center">
                                <div className="rotate-90">
                                    <ArrowLeftRight className="h-6 w-6 text-slate-400" />
                                </div>
                            </div>

                            {/* Destination */}
                            <div className="flex items-center gap-3 bg-slate-50 p-3 px-4 rounded-lg border border-slate-100">
                                <img
                                    src={`https://flagcdn.com/${destinationSlug?.toLowerCase()}.svg`}
                                    alt={destinationName || ''}
                                    className="w-10 h-10 rounded-full border shadow-sm object-cover bg-white"
                                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                                />
                                <div>
                                    <p className="text-xs text-slate-500 font-medium">To</p>
                                    <p className="text-base font-semibold text-slate-800">{destinationName}</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Results Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {visaTypeResults.map((visa, index) => (
                        <Card key={index} className={`overflow-hidden border shadow-sm hover:shadow-md transition-all duration-300 ${visa.isEligible ? 'border-emerald-200' : 'border-red-200'}`}>
                            <div className={`h-2 w-full ${visa.isEligible ? 'bg-emerald-600' : 'bg-red-500'}`} />
                            <CardHeader className="pt-6 pb-4">
                                <div className="flex items-start gap-3">
                                    <div className={`p-2 rounded-full ${visa.isEligible ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-600'}`}>
                                        {visa.isEligible ? (
                                            <CheckCircle className="h-5 w-5" />
                                        ) : (
                                            <XCircle className="h-5 w-5" />
                                        )}
                                    </div>
                                    <div>
                                        <CardTitle className="text-lg font-bold text-slate-800">
                                            {visa.name}
                                        </CardTitle>
                                        <CardDescription className="mt-1">
                                            <span className={`font-medium ${visa.isEligible ? 'text-emerald-700' : 'text-red-600'}`}>
                                                {visa.isEligible ? 'Eligible' : 'Not Eligible'}
                                            </span>
                                        </CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="pb-4">
                                <p className="text-slate-600 mb-4 text-sm">
                                    {visa.description || `This visa allows ${nationalityName} citizens to visit ${destinationName} for ${visa.type?.toLowerCase() || 'specific purposes'}.`}
                                </p>

                                <Separator className="mb-4" />

                                <div className="grid grid-cols-2 gap-y-3 text-sm">
                                    <div className="flex items-start gap-2">
                                        <Calendar className="h-4 w-4 text-slate-400 mt-0.5" />
                                        <div>
                                            <p className="text-slate-600 font-medium">Duration</p>
                                            <p className="text-slate-800">{visa.visaDuration || "Not specified"}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <Clock className="h-4 w-4 text-slate-400 mt-0.5" />
                                        <div>
                                            <p className="text-slate-600 font-medium">Processing</p>
                                            <p className="text-slate-800">{visa.expectedProcessingTime || "3-5 days"}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <Globe className="h-4 w-4 text-slate-400 mt-0.5" />
                                        <div>
                                            <p className="text-slate-600 font-medium">Validity</p>
                                            <p className="text-slate-800">{visa.visaValidity || "Not specified"}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CreditCard className="h-4 w-4 text-slate-400 mt-0.5" />
                                        <div>
                                            <p className="text-slate-600 font-medium">Gov. Fee</p>
                                            <p className="text-slate-800 font-semibold">${visa.govFee || "Varies"}</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>

                            <CardFooter className="pt-2 pb-6">
                                {visa.isEligible ? (
                                    <Link href={`/apply?country=${destinationName.toLowerCase()}&type=${encodeURIComponent(visa.type || visa.name)}&nationality=${nationalitySlug}`} className="w-full">
                                        <Button
                                            className="w-full bg-emerald-600 hover:bg-emerald-700"
                                        >
                                            Apply Now
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                ) : (
                                    <Button
                                        variant="outline"
                                        className="w-full text-slate-600 border-slate-300"
                                        disabled
                                    >
                                        Not Available
                                    </Button>
                                )}
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {/* Helpful Information */}
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-10">
                    <div className="flex items-start gap-3">
                        <div className="p-2 rounded-full bg-blue-100 text-blue-700">
                            <BadgeInfo className="h-5 w-5" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-blue-800 mb-1">Important Information</h3>
                            <p className="text-blue-700 text-sm">
                                Visa eligibility is subject to change based on immigration policies. We recommend checking with the embassy or consulate for the most up-to-date requirements.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        variant="outline"
                        onClick={() => router.back()}
                        className="border-slate-300"
                    >
                        Back to Search
                    </Button>
                    <Link href="/apply">
                        <Button className="bg-emerald-600 hover:bg-emerald-700">
                            Start New Application
                        </Button>
                    </Link>
                </div>
                {/* Visa Process Steps */}
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm mb-12">
                    <h2 className="text-xl font-bold text-slate-800 mb-6">Visa Application Process</h2>
                    <VisaSteps />
                </div>
            </div>
        </div>
    );
}