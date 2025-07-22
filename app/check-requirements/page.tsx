'use client';

import { notFound, useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState, Suspense, useCallback } from 'react';
import { getCountryBySlug, COUNTRIES } from '@/lib/countries';
import { getNationalityByCode } from '@/lib/nationalities';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import {
    CheckCircle, XCircle, ArrowRight, Calendar, Clock, CreditCard,
    Globe, ArrowLeftRight, BadgeInfo, User, Info, Search, Sparkles
} from 'lucide-react';
import VisaSteps from '../components/VisaSteps';
import CheckEligibility from '../../components/shared/CheckEligibility';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

function CheckRequirementsContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const nationalitySlug = searchParams.get('n');
    const destinationSlug = searchParams.get('d');

    const [nationalityName, setNationalityName] = useState<string | null>(null);
    const [destinationName, setDestinationName] = useState<string | null>(null);
    const [visaTypeResults, setVisaTypeResults] = useState<any[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [showDestinations, setShowDestinations] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCountries, setFilteredCountries] = useState(COUNTRIES);

    // Debounced search function
    const debouncedSearch = useCallback(
        (() => {
            let timeoutId: NodeJS.Timeout;
            return (term: string) => {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                    const filtered = COUNTRIES.filter(country =>
                        country.name.toLowerCase().includes(term.toLowerCase())
                    );
                    setFilteredCountries(filtered);
                }, 300);
            };
        })(),
        []
    );

    // Handle search input changes
    const handleSearchChange = (value: string) => {
        setSearchTerm(value);
        debouncedSearch(value);
    };

    useEffect(() => {
        const checkEligibility = async () => {
            // If no parameters provided, show destinations list
            if (!nationalitySlug && !destinationSlug) {
                setShowDestinations(true);
                setLoading(false);
                return;
            }

            // If only one parameter is provided, redirect to home
            if (!nationalitySlug || !destinationSlug) {
                router.push('/');
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
                    <p className="text-slate-700 font-medium">Loading...</p>
                </div>
            </div>
        );
    }

    // Show destinations list if no parameters provided
    if (showDestinations) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
                {/* Header Section */}
                <div className="relative bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 text-white overflow-hidden">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute inset-0 opacity-20">
                        <div style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                            backgroundRepeat: 'repeat'
                        }} className="w-full h-full" />
                    </div>
                    <div className="relative max-w-6xl mx-auto px-4 py-16">
                        <div className="text-center">
                            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                                <Globe className="h-4 w-4" />
                                <span className="text-sm font-medium">Visa Requirements</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                                Check Visa <span className="text-emerald-200">Requirements</span>
                            </h1>
                            <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                                Select your destination to check visa requirements and eligibility
                            </p>
                        </div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-4 py-12">
                    {/* Check Eligibility Section */}
                    <div className="mb-12">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-white/30">
                                <Globe className="h-4 w-4 text-emerald-600" />
                                <span className="text-sm font-medium text-slate-700">Quick Check</span>
                            </div>
                            <h2 className="text-2xl font-bold text-slate-800 mb-2">
                                Check Your Visa Eligibility
                            </h2>
                            <p className="text-slate-600">
                                Select your nationality and destination to check visa requirements instantly
                            </p>
                        </div>
                        <CheckEligibility />
                    </div>

                    {/* All Destinations Grid */}
                    <div className="mb-12">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-white/30">
                                <Globe className="h-4 w-4 text-emerald-600" />
                                <span className="text-sm font-medium text-slate-700">All Destinations</span>
                            </div>
                            <h2 className="text-2xl font-bold text-slate-800 mb-2">
                                Browse All Available Destinations
                            </h2>
                            <p className="text-slate-600 mb-6">
                                Click on any destination to check visa requirements
                            </p>
                            
                            {/* Search Input */}
                            <div className="max-w-md mx-auto mb-8">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                                    <input
                                        type="text"
                                        placeholder="Search destinations..."
                                        value={searchTerm}
                                        onChange={(e) => handleSearchChange(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-xl shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 placeholder-slate-400"
                                    />
                                </div>
                                {searchTerm && (
                                    <p className="text-sm text-slate-500 mt-2">
                                        Found {filteredCountries.length} destination{filteredCountries.length !== 1 ? 's' : ''}
                                    </p>
                                )}
                            </div>
                        </div>

                        {filteredCountries.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                                {filteredCountries.map((country) => (
                                    <Link
                                        key={country.code}
                                        href={`/requirements-posts/${country.slug || country.name.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="group bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/50 p-6 hover:shadow-xl hover:shadow-emerald-100/50 transition-all duration-300 transform hover:-translate-y-1 hover:border-emerald-200"
                                    >
                                        <div className="text-center">
                                            <div className="relative mb-4">
                                                <img
                                                    src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`}
                                                    alt={country.name}
                                                    className="w-16 h-16 rounded-lg border-2 border-white shadow-md object-cover bg-white mx-auto"
                                                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                                                />
                                                <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
                                                    <ArrowRight className="h-3 w-3 text-white" />
                                                </div>
                                            </div>
                                            <h3 className="font-semibold text-slate-800 group-hover:text-emerald-700 transition-colors">
                                                {country.name}
                                            </h3>
                                            <p className="text-xs text-slate-500 mt-1">
                                                {country.visaTypes?.length || 0} visa types available
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 shadow-lg max-w-md mx-auto">
                                    <Search className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                                    <h3 className="text-lg font-semibold text-slate-800 mb-2">No destinations found</h3>
                                    <p className="text-slate-600 mb-4">
                                        No destinations match your search for "{searchTerm}". Try a different search term.
                                    </p>
                                    <Button
                                        onClick={() => handleSearchChange('')}
                                        variant="outline"
                                        className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                                    >
                                        Clear Search
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Help Section */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 rounded-2xl p-8 shadow-lg">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg">
                                <BadgeInfo className="h-6 w-6" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-blue-800 mb-3">How to Check Requirements</h3>
                                <div className="space-y-2 text-blue-700">
                                    <p className="leading-relaxed">
                                        Select your destination above, then enter your nationality to see detailed visa requirements, processing times, and fees.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                        <div className="bg-white/60 p-4 rounded-lg border border-blue-100">
                                            <h4 className="font-semibold text-blue-800 mb-2">Step 1: Choose Destination</h4>
                                            <p className="text-sm text-blue-600">Select your destination country from the list above.</p>
                                        </div>
                                        <div className="bg-white/60 p-4 rounded-lg border border-blue-100">
                                            <h4 className="font-semibold text-blue-800 mb-2">Step 2: Enter Nationality</h4>
                                            <p className="text-sm text-blue-600">Provide your nationality to check eligibility.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            {/* Header Section with Background */}
            <div className="relative bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute inset-0 opacity-20">
                    <div style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundRepeat: 'repeat'
                    }} className="w-full h-full" />
                </div>
                <div className="relative max-w-6xl mx-auto px-4 py-16">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                            <Sparkles className="h-4 w-4" />
                            <span className="text-sm font-medium">Visa Eligibility Check</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            Your Visa <span className="text-emerald-200">Results</span>
                        </h1>
                        <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                            Review your visa eligibility status and requirements for traveling from <span className="font-semibold text-white">{nationalityName}</span> to <span className="font-semibold text-white">{destinationName}</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Current Results Header */}
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-slate-800 mb-4 text-center">
                        Your Visa Eligibility Results
                    </h2>
                </div>

                {/* Nationality and Destination */}
                <Card className="mb-10 border-0 shadow-lg bg-white/70 backdrop-blur-sm">
                    <CardContent className="p-8">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-8">
                            {/* Nationality */}
                            <div className="flex items-center gap-4 bg-gradient-to-r from-emerald-50 to-teal-50 p-4 px-6 rounded-xl border border-emerald-100/50 shadow-sm">
                                <div className="relative">
                                    <img
                                        src={`https://flagcdn.com/${nationalitySlug?.toLowerCase()}.svg`}
                                        alt={nationalityName || ''}
                                        className="w-12 h-12 rounded-full border-2 border-white shadow-md object-cover bg-white"
                                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                                    />
                                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white"></div>
                                </div>
                                <div>
                                    <p className="text-xs text-emerald-600 font-semibold uppercase tracking-wide">From</p>
                                    <p className="text-lg font-bold text-slate-800">{nationalityName}</p>
                                </div>
                            </div>

                            {/* Arrow */}
                            <div className="hidden sm:flex items-center justify-center">
                                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-3 rounded-full shadow-lg">
                                    <ArrowLeftRight className="h-6 w-6 text-white" />
                                </div>
                            </div>

                            {/* Arrow for mobile */}
                            <div className="flex sm:hidden items-center justify-center">
                                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-3 rounded-full shadow-lg rotate-90">
                                    <ArrowLeftRight className="h-6 w-6 text-white" />
                                </div>
                            </div>

                            {/* Destination */}
                            <div className="flex items-center gap-4 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 px-6 rounded-xl border border-blue-100/50 shadow-sm">
                                <div className="relative">
                                    <img
                                        src={`https://flagcdn.com/${destinationSlug?.toLowerCase()}.svg`}
                                        alt={destinationName || ''}
                                        className="w-12 h-12 rounded-full border-2 border-white shadow-md object-cover bg-white"
                                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                                    />
                                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>
                                </div>
                                <div>
                                    <p className="text-xs text-blue-600 font-semibold uppercase tracking-wide">To</p>
                                    <p className="text-lg font-bold text-slate-800">{destinationName}</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Results Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {visaTypeResults.map((visa, index) => (
                        <Card key={index} className={`overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm ${visa.isEligible ? 'ring-2 ring-emerald-200' : 'ring-2 ring-red-200'}`}>
                            <div className={`h-1 w-full ${visa.isEligible ? 'bg-gradient-to-r from-emerald-500 to-teal-500' : 'bg-gradient-to-r from-red-500 to-pink-500'}`} />
                            <CardHeader className="pt-8 pb-6">
                                <div className="flex items-start gap-4">
                                    <div className={`p-3 rounded-xl shadow-lg ${visa.isEligible ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white' : 'bg-gradient-to-r from-red-500 to-pink-500 text-white'}`}>
                                        {visa.isEligible ? (
                                            <CheckCircle className="h-6 w-6" />
                                        ) : (
                                            <XCircle className="h-6 w-6" />
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <CardTitle className="text-xl font-bold text-slate-800 mb-2">
                                            {visa.name}
                                        </CardTitle>
                                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${visa.isEligible ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                                            {visa.isEligible ? '✓ Eligible' : '✗ Not Eligible'}
                                        </div>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="pb-6">
                                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                                    {visa.description || `This visa allows ${nationalityName} citizens to visit ${destinationName} for ${visa.type?.toLowerCase() || 'specific purposes'}.`}
                                </p>

                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-slate-50/80 p-3 rounded-lg border border-slate-100">
                                            <div className="flex items-center gap-2 mb-1">
                                                <Calendar className="h-4 w-4 text-emerald-600" />
                                                <span className="text-xs font-medium text-slate-600 uppercase tracking-wide">Duration</span>
                                            </div>
                                            <p className="text-sm font-semibold text-slate-800">{visa.visaDuration ? visa.visaDuration + ' days' : 'Not specified'}</p>
                                        </div>
                                        <div className="bg-slate-50/80 p-3 rounded-lg border border-slate-100">
                                            <div className="flex items-center gap-2 mb-1">
                                                <Clock className="h-4 w-4 text-blue-600" />
                                                <span className="text-xs font-medium text-slate-600 uppercase tracking-wide">Processing</span>
                                            </div>
                                            <p className="text-sm font-semibold text-slate-800">{visa.expectedProcessingTime || "3-5 days"}</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-slate-50/80 p-3 rounded-lg border border-slate-100">
                                            <div className="flex items-center gap-2 mb-1">
                                                <Globe className="h-4 w-4 text-purple-600" />
                                                <span className="text-xs font-medium text-slate-600 uppercase tracking-wide">Validity</span>
                                            </div>
                                            <p className="text-sm font-semibold text-slate-800">{visa.visaValidity || "Not specified"}</p>
                                        </div>
                                        <div className="bg-slate-50/80 p-3 rounded-lg border border-slate-100">
                                            <div className="flex items-center gap-2 mb-1">
                                                <CreditCard className="h-4 w-4 text-orange-600" />
                                                <span className="text-xs font-medium text-slate-600 uppercase tracking-wide">Gov. Fee</span>
                                            </div>
                                            <p className="text-sm font-bold text-emerald-600">${visa.govFee || "Varies"}</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>

                            <CardFooter className="pt-4 pb-8">
                                {visa.isEligible ? (
                                    <Link href={`/apply?country=${destinationName.toLowerCase()}&type=${encodeURIComponent(visa.id)}&nationality=${nationalitySlug}`} className="w-full">
                                        <Button
                                            className="w-full cursor-pointer bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                                        >
                                            Apply Now
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Button>
                                    </Link>
                                ) : (
                                    <Button
                                        variant="outline"
                                        className="w-full text-slate-500 border-slate-200 bg-slate-50 cursor-not-allowed font-semibold py-3"
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
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 rounded-2xl p-8 mb-12 shadow-lg">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg">
                            <BadgeInfo className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-blue-800 mb-3">Important Information</h3>
                            <div className="space-y-2 text-blue-700">
                                <p className="leading-relaxed">
                                    Visa eligibility is subject to change based on immigration policies. We recommend checking with the embassy or consulate for the most up-to-date requirements.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    <div className="bg-white/60 p-4 rounded-lg border border-blue-100">
                                        <h4 className="font-semibold text-blue-800 mb-2">Additional Requirements</h4>
                                        <p className="text-sm text-blue-600">Some visas may require additional documentation or interviews.</p>
                                    </div>
                                    <div className="bg-white/60 p-4 rounded-lg border border-blue-100">
                                        <h4 className="font-semibold text-blue-800 mb-2">Processing Times</h4>
                                        <p className="text-sm text-blue-600">Times may vary during peak seasons or due to application volume.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Visa Process Steps */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl border-0 p-8 shadow-xl mb-12">
                    <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">Visa Application Process</h2>
                    <VisaSteps />
                </div>

                {/* Search Again Section */}
                <div className="mb-12">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-white/30">
                            <Search className="h-4 w-4 text-emerald-600" />
                            <span className="text-sm font-medium text-slate-700">Check Another Destination</span>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-2">
                            Want to Check Another Country?
                        </h2>
                        <p className="text-slate-600">
                            Easily check visa requirements for different destinations
                        </p>
                    </div>
                    <div className="text-center">
                        <Link href="/check-requirements">
                            <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                                Browse All Destinations
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link href="/apply">
                        <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                            Start New Application
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function CheckRequirementsPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-600 mb-4"></div>
                    <p className="text-slate-700 font-medium">Loading...</p>
                </div>
            </div>
        }>
            <CheckRequirementsContent />
        </Suspense>
    );
}