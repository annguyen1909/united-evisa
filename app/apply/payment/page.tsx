"use client";

import { useEffect, useState, Suspense, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/components/shared/StripePaymentForm";
import { COUNTRIES } from "@/lib/countries";
import { Country } from "@/lib/countries/type";
import SupportSidebar from "@/components/shared/SupportSidebar";
import moment from "moment";
import { DollarSign, CreditCard, Calendar, Map, CheckCircle, AlertCircle } from "lucide-react";
import { calculateIndiaVisaFee } from "@/lib/countries/india";
import { getNationalityByName, NATIONALITIES } from "@/lib/nationalities";
import { SiStripe } from "react-icons/si";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

// Fixed service fee for all countries
const FIXED_SERVICE_FEE = 59.99;

function PaymentContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [clientSecret, setClientSecret] = useState<string>("");
    const [totalAmount, setTotalAmount] = useState<number>(0);
    const [applicationId, setApplicationId] = useState<string>("");
    const [isLoading, setIsLoading] = useState(true);
    const [applicationData, setApplicationData] = useState<any>(null);
    const [country, setCountry] = useState<Country | null>(null);
    const [visa, setVisa] = useState<any>(null);
    const [showError, setShowError] = useState(false);
    const [stepNotAllowed, setStepNotAllowed] = useState(false);
    const [recalculateTrigger, setRecalculateTrigger] = useState(0);
    const [visaTypes, setVisaTypes] = useState<any[]>([]);
    const paymentIntentCreated = useRef(false);

    // Initialize applicationId from URL or session storage
    useEffect(() => {
        // Always prioritize URL parameter
        const urlApplicationId = searchParams.get("applicationId");
        if (urlApplicationId) {
            setApplicationId(urlApplicationId);
            fetchApplicationData(urlApplicationId);
        } else {
            // Fall back to session storage if no URL parameter
            const storedAppId = sessionStorage.getItem("evisa-application-id");
            if (storedAppId) {
                setApplicationId(storedAppId);
                fetchApplicationData(storedAppId);
            } else {
                // No application ID found - redirect to first step
                alert("No application found. Please start from the beginning.");
                router.push("/apply");
            }
        }
    }, [searchParams, router]);

    // Fetch visa types for India (like passengers page)
    useEffect(() => {
        const fetchVisaTypes = async () => {
            try {
                const response = await fetch('/api/destinations/india/visa-types');
                if (response.ok) {
                    const data = await response.json();
                    setVisaTypes(data);
                    console.log('[visa types debug] Fetched visa types:', data.length);
                }
            } catch (error) {
                console.error('Failed to fetch visa types:', error);
            }
        };

        // Only fetch visa types if destination is India
        if (applicationData?.destination?.code?.toLowerCase() === "in") {
            fetchVisaTypes();
        }
    }, [applicationData?.destination?.code]);

    // Fetch application data from database
    async function fetchApplicationData(appId: string) {
        try {
            setIsLoading(true);
            const response = await fetch(`/api/applications/${appId}`);

            if (response.ok) {
                const data = await response.json();
                setApplicationData(data);
                // Check if previous step is completed (customize this check as needed)
                if (!data.passengers || !Array.isArray(data.passengers) || data.passengers.length === 0) {
                    setStepNotAllowed(true);
                    return;
                }
                
                // Check if application status allows payment (like Sri Lanka)
                if (data.status !== 'Waiting for Payment' && data.status !== 'Lead Open') {
                    setStepNotAllowed(true);
                    return;
                }
                
                // Process data for display and payment
                const country = COUNTRIES.find(c => 
                    c.code === data.destination?.code || 
                    c.slug === data.destination?.id
                );
                
                const visa = country?.visaTypes?.find(v => v.id === data.visaType?.id);
                
                setCountry(country || null);
                setVisa(visa || null);
                
                const govFee = visa?.govFee ?? 0;
                const passengerCount = data.passengerCount || 1;
                // Use fixed service fee
                const total = (govFee + FIXED_SERVICE_FEE) * passengerCount;
                
                setTotalAmount(total);
                
                // Create payment intent only once
                if (!paymentIntentCreated.current) {
                    console.log("Creating payment intent for applicationId:", appId);
                    paymentIntentCreated.current = true;
                    createPaymentIntent(appId, total);
                }
            } else {
                throw new Error("Failed to load application data");
            }
        } catch (error) {
            console.error("Error fetching application data:", error);
            alert("Error loading application data. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }

    // Create payment intent with the database-sourced data
    async function createPaymentIntent(appId: string, total: number) {
        try {
            // For India, only send applicationId (backend will use stored total)
            // For other countries, send both amount and applicationId
            const isIndia = applicationData?.destination?.code?.toLowerCase() === 'in';
            
            const requestBody = isIndia 
                ? { applicationId: appId }
                : { amount: total, applicationId: appId };
            
            console.log(`[Payment Intent] Creating payment intent for ${isIndia ? 'India' : 'Other'}:`, requestBody);
            
            const response = await fetch("/api/create-payment-intent", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(requestBody)
            });
            
            const data = await response.json();
            setClientSecret(data.clientSecret);
        } catch (error) {
            console.error("Error creating payment intent:", error);
        }
    }

    const appearance = { theme: "stripe" as "stripe" };
    const options = { clientSecret, appearance };

    // Order summary using database data instead of sessionStorage
    let orderSummary = null;
    if (applicationData) {
        // Force recalculation when trigger changes (for India)
        const _ = recalculateTrigger; // Use trigger to force recalculation
        let passengersArr = Array.isArray(applicationData.passengers) && applicationData.passengers.length > 0
            ? applicationData.passengers
            : [];
        const passenger = applicationData.passengerCount || passengersArr.length || 1;
        const serviceFee = FIXED_SERVICE_FEE * passenger;
        let govFee: number | null = null;
        
        // Log the calculated government and service fees on load
        console.log('[OrderSummary] Calculated govFee:', govFee, 'serviceFee:', serviceFee, 'passenger:', passenger, 'passengersArr.length:', passengersArr.length, 'isIndia:', country?.code?.toLowerCase() === "in");
        
        const destination = country?.name ?? applicationData.destination?.name ?? "---";
        let visaName = visa?.name ?? applicationData.visaType?.name ?? "---";
        
        // Calculate government fee based on country
        if (country?.code?.toLowerCase() === "in") {
            // For India, use the stored total from the application and calculate govFee
            // This is how the India repo works - we trust the stored total
            const storedTotal = applicationData.total;
            const passengerCount = applicationData.passengerCount || passengersArr.length || 1;
            const totalServiceFee = FIXED_SERVICE_FEE * passengerCount;
            
            if (typeof storedTotal === 'number' && storedTotal > 0) {
                // Calculate govFee by subtracting service fee from total
                govFee = storedTotal - totalServiceFee;
                console.log('[India govFee] Using stored total calculation:', {
                    storedTotal,
                    totalServiceFee,
                    calculatedGovFee: govFee,
                    passengerCount
                });
            } else {
                govFee = null;
                console.log('[India govFee] No valid stored total found');
            }
        } else {
            // For non-India, multiply visa.govFee by passenger count
            const passengerCount = applicationData.passengerCount || passengersArr.length || 1;
            govFee = typeof visa?.govFee === 'number' ? visa.govFee * passengerCount : null;
            console.log('[Non-India govFee] Calculated:', govFee, 'for passenger count:', passengerCount);
        }
        const stayingStart = applicationData.stayingStart;
        const stayingEnd = applicationData.stayingEnd;
        const isDateValid = stayingStart && stayingEnd;
        const formattedStart = isDateValid
            ? moment(stayingStart).format("DD/MM/YYYY")
            : "---";
        const formattedEnd = isDateValid
            ? moment(stayingEnd).format("DD/MM/YYYY")
            : "---";
        const durationInMs = isDateValid
            ? new Date(stayingEnd).getTime() - new Date(stayingStart).getTime()
            : null;
        const days =
            durationInMs !== null
                ? Math.floor(durationInMs / (1000 * 60 * 60 * 24))
                : "---";

        // For India, use canonical visa name for display
        if (country?.code?.toLowerCase() === "in" && visa) {
            const canonicalId = visa.id.split('-group-')[0];
            const indiaConfig = COUNTRIES.find(c => c.code === 'in');
            const canonicalVisa = indiaConfig?.visaTypes?.find(vt => vt.id === canonicalId);
            if (canonicalVisa) {
                visaName = canonicalVisa.name;
            }
        }

        // Calculate total based on current govFee and serviceFee
        const total = (() => {
            if (country?.code?.toLowerCase() === "in") {
                // For India, calculate based on current govFee and serviceFee
                if (govFee !== null && typeof govFee === 'number') {
                    return govFee + serviceFee;
                } else {
                    // If no valid govFee, return service fee only
                    return serviceFee;
                }
            } else {
                // For non-India, use the stored total or calculate
                return typeof applicationData.total === 'number' ? applicationData.total : (visa && typeof govFee === 'number' ? (govFee + serviceFee) : serviceFee);
            }
        })();
        
        console.log('[Total calculation]', { 
            isIndia: country?.code?.toLowerCase() === "in",
            govFee, 
            serviceFee, 
            calculatedTotal: total,
            storedTotal: applicationData.total 
        });

        orderSummary = (
            <div className="bg-white rounded-xl border border-blue-100/50 p-6 shadow-sm sticky top-6">
                <h2 className="text-lg font-semibold text-center text-slate-800 mb-4 pb-2 border-b border-blue-50 bg-gradient-to-r from-blue-50/30 to-transparent -mx-6 px-6 py-2 rounded-t-xl">
                    Order Summary
                </h2>
                <div className="space-y-4 text-sm">
                    <div className="flex items-center justify-between">
                        <span className="font-medium text-slate-700">Destination</span>
                        <span className="font-medium text-blue-600">{destination}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="font-medium text-slate-700">Type of Visa</span>
                        <span className="text-slate-800">{visaName}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="font-medium text-slate-700">Travelers</span>
                        <span className="text-slate-800">{passenger}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="font-medium text-slate-700">Staying Time</span>
                        <span className="text-slate-800">{formattedStart} - {formattedEnd}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="font-medium text-slate-700">Duration</span>
                        <span className="text-slate-800">{days} days</span>
                    </div>
                    <hr className="border-slate-100" />
                    <div className="flex items-center justify-between">
                        <span className="text-slate-600">Government Fee</span>
                        <span className="text-slate-800">
                          {(() => {
                            const isIndia = country?.code?.toLowerCase() === "in";
                            const hasValidGovFee = govFee !== null && typeof govFee === 'number';
                            console.log('[GovFee Display Debug]', { 
                              isIndia, 
                              govFee, 
                              hasValidGovFee
                            });
                            return hasValidGovFee && govFee !== null ? `$${govFee.toFixed(2)}` : "---";
                          })()}
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-slate-600">Service Fee</span>
                        <span className="text-slate-800">${serviceFee.toFixed(2)}</span>
                    </div>
                    <hr className="border-slate-100" />
                    <div className="flex items-center justify-between pt-1">
                        <span className="font-semibold text-base text-slate-800">Total</span>
                        <span className="font-bold text-lg text-blue-600">
                          {(() => {
                            const isIndia = country?.code?.toLowerCase() === "in";
                            const hasValidGovFee = govFee !== null && typeof govFee === 'number';
                            console.log('[Total Display Debug]', { 
                              isIndia, 
                              govFee, 
                              hasValidGovFee, 
                              serviceFee, 
                              total 
                            });
                            return hasValidGovFee ? `$${total.toFixed(2)}` : `$${serviceFee.toFixed(2)}`;
                          })()}
                        </span>
                    </div>
                </div>
            </div>
        );
    }

    useEffect(() => {
        let timeout: NodeJS.Timeout | null = null;
        if (!isLoading && !clientSecret && applicationData) {
            timeout = setTimeout(() => setShowError(true), 2000); // 2 seconds delay
        } else {
            setShowError(false);
        }
        return () => {
            if (timeout) clearTimeout(timeout);
        };
    }, [isLoading, clientSecret, applicationData]);

    // Recalculate fees when application data changes (especially for India)
    useEffect(() => {
        if (applicationData && country?.code?.toLowerCase() === "in") {
            console.log('[Payment] Application data changed, recalculating fees for India');
            // Force re-render by updating trigger
            setRecalculateTrigger(prev => prev + 1);
        }
    }, [applicationData?.passengers, applicationData?.passengerCount, country?.code]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-amber-50/20 pb-16">            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">
                    Secure Payment
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-xl p-6 border border-blue-100/50 shadow-sm">
                            <div className="flex items-center space-x-2 pb-4 mb-6 border-b border-blue-50 bg-gradient-to-r from-blue-50/30 to-transparent -mx-6 px-6 py-3 rounded-t-xl">
                                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-1.5 rounded-full shadow-sm">
                                    <CreditCard className="h-5 w-5 text-white" />
                                </div>
                                <h2 className="text-lg font-semibold text-slate-800">Payment Details</h2>
                            </div>
                            {/* Step not allowed warning */}
                            {stepNotAllowed ? (
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 text-center mb-8">
                                    <h2 className="text-xl font-bold text-yellow-700 mb-2">Step Not Allowed</h2>
                                    <p className="text-yellow-600 mb-4">
                                        You cannot access this step until you have completed the previous step <span className='text-blue-700'>(Passengers)</span>
                                    </p>
                                    <button
                                        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 mt-2 rounded-lg shadow-md"
                                        onClick={() => router.push(`/apply/passengers?applicationId=${applicationId}`)}
                                    >
                                        Go Back to Passengers
                                    </button>
                                </div>
                            ) : (
                                <>  
                                    {/* Payment status check */}
                                    {isLoading ? (
                                        <div className="flex flex-col items-center justify-center py-16">
                                            <div className="animate-spin rounded-full h-12 w-12 border-[3px] border-slate-200 border-t-blue-600"></div>
                                            <span className="mt-4 text-slate-600">Preparing secure payment...</span>
                                        </div>
                                    ) : applicationData && (applicationData.paymentStatus === "Completed" || applicationData.paymentStatus === "Payment Completed") ? (
                                        <div className="bg-green-50 border border-green-100 rounded-lg p-6 text-center">
                                            <div className="flex justify-center mb-4">
                                                <CheckCircle className="h-10 w-10 text-green-500" />
                                            </div>
                                            <h3 className="text-lg font-medium text-green-700 mb-2">Payment Already Completed</h3>
                                            <p className="text-green-600 mb-4">
                                                This application has already been paid. If you believe this is an error, please contact support.
                                            </p>
                                            <button
                                                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium px-6 py-2 rounded-lg mt-2 shadow-md"
                                                onClick={() => router.push(`/apply/documents?applicationId=${applicationId}`)}
                                            >
                                                Go to Document Upload
                                            </button>
                                        </div>
                                    ) : clientSecret ? (
                                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                                            {/* Powered by Stripe - Top */}
                                            <div className="flex items-center justify-center mb-6 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
                                                <div className="flex items-center space-x-3">
                                                    <span className="text-sm font-medium text-slate-600">Secured by</span>
                                                    <div className="flex items-center space-x-1">
                                                        <SiStripe className="h-6 w-6 text-[#635bff]" />
                                                        <span className="text-lg font-bold text-[#635bff]">Stripe</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Enhanced Security Badges */}
                                            <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-blue-50 rounded-xl border border-blue-100">
                                                <div className="flex items-center justify-center mb-3">
                                                    <div className="bg-blue-100 p-2 rounded-full">
                                                        <svg className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <h3 className="text-center text-lg font-bold text-slate-800 mb-2">🔒 Bank-Level Security</h3>
                                                <p className="text-center text-sm text-slate-600 mb-4">Your payment is protected with military-grade encryption</p>
                                                
                                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                                    <div className="flex items-center justify-center space-x-2 p-2 bg-white rounded-lg shadow-sm">
                                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                                        <span className="text-xs font-semibold text-slate-700">SSL Encrypted</span>
                                                    </div>
                                                    <div className="flex items-center justify-center space-x-2 p-2 bg-white rounded-lg shadow-sm">
                                                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                                        <span className="text-xs font-semibold text-slate-700">PCI DSS Level 1</span>
                                                    </div>
                                                    <div className="flex items-center justify-center space-x-2 p-2 bg-white rounded-lg shadow-sm">
                                                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                                                        <span className="text-xs font-semibold text-slate-700">SOC 2 Certified</span>
                                                    </div>
                                                </div>
                                                
                                                <div className="mt-3 text-center">
                                                    <p className="text-xs text-slate-500">💳 We never store your card details • 🛡️ Fraud protection included</p>
                                                </div>
                                            </div>
                                            
                                            <Elements options={options} stripe={stripePromise}>
                                                <CheckoutForm amount={totalAmount} applicationId={applicationId} />
                                            </Elements>
                                        </div>
                                    ) : showError ? (
                                        <div className="bg-red-50 border border-red-100 rounded-lg p-6 text-center">
                                            <div className="flex justify-center mb-4">
                                                <AlertCircle className="h-10 w-10 text-red-500" />
                                            </div>
                                            <h3 className="text-lg font-medium text-red-700 mb-2">Payment Initialization Failed</h3>
                                            <p className="text-red-600 mb-4">
                                                We couldn't set up the payment process. This might be due to a temporary issue.
                                            </p>
                                            <button 
                                                onClick={() => {
                                                    paymentIntentCreated.current = false;
                                                    fetchApplicationData(applicationId);
                                                }}
                                                className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-4 py-2 rounded-lg transition-colors font-medium"
                                            >
                                                Try Again
                                            </button>
                                        </div>
                                    ) : null}
                                    
                                    <div className="mt-8 pt-6 border-t border-slate-100">
                                        <div className="flex items-center text-sm text-slate-600">
                                            <svg className="h-5 w-5 text-slate-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                            All payment information is encrypted and secure. We do not store your credit card details.
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    
                    <div className="space-y-6">
                        {orderSummary}
                        <SupportSidebar />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function PaymentPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mb-4"></div>
                    <p className="text-slate-700 font-medium">Loading payment...</p>
                </div>
            </div>
        }>
            <PaymentContent />
        </Suspense>
    );
}