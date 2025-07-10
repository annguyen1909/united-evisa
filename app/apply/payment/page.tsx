"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/components/shared/StripePaymentForm";
import { COUNTRIES } from "@/lib/countries";
import { Country } from "@/lib/countries/type";
import SupportSidebar from "@/components/shared/SupportSidebar";
import moment from "moment";
import { DollarSign, CreditCard, Calendar, Map, CheckCircle, AlertCircle } from "lucide-react";

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
                
                // Create payment intent
                console.log("Creating payment intent for applicationId:", appId);
                createPaymentIntent(appId, total);
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
            const response = await fetch("/api/create-payment-intent", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    amount: Math.round(total * 100), 
                    applicationId: appId 
                })
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
        const destination = country?.name ?? applicationData.destination?.name ?? "---";
        const visaName = visa?.name ?? applicationData.visaType?.name ?? "---";
        const govFee = visa?.govFee ?? 0;
        const passenger = applicationData.passengerCount || 1;
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
        // Use fixed service fee and total
        const total = visa ? (govFee + FIXED_SERVICE_FEE) * passenger : applicationData.total || 0;

        orderSummary = (
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm sticky top-6">
                <h2 className="text-lg font-semibold text-center text-slate-800 mb-4 pb-2 border-b border-slate-100">
                    Order Summary
                </h2>
                <div className="space-y-4 text-sm">
                    <div className="flex items-center justify-between">
                        <span className="font-medium text-slate-700">Destination</span>
                        <span className="font-medium text-emerald-700">{destination}</span>
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
                        <span className="text-slate-800">{visa ? `$${govFee.toFixed(2)}` : "---"}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-slate-600">Service Fee</span>
                        <span className="text-slate-800">${FIXED_SERVICE_FEE.toFixed(2)}</span>
                    </div>
                    <hr className="border-slate-100" />
                    <div className="flex items-center justify-between pt-1">
                        <span className="font-semibold text-base text-slate-800">Total</span>
                        <span className="font-bold text-lg text-emerald-700">{visa ? `$${total.toFixed(2)}` : `$${applicationData.total?.toFixed(2)}`}</span>
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

    return (
        <div className="min-h-screen bg-slate-50 pb-16">            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">
                    Secure Payment
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                            <div className="flex items-center space-x-2 pb-4 mb-6 border-b">
                                <div className="bg-blue-100 p-1.5 rounded-full">
                                    <CreditCard className="h-5 w-5 text-blue-700" />
                                </div>
                                <h2 className="text-lg font-semibold text-slate-800">Payment Details</h2>
                            </div>
                            {/* Step not allowed warning */}
                            {stepNotAllowed ? (
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 text-center mb-8">
                                    <h2 className="text-xl font-bold text-yellow-700 mb-2">Step Not Allowed</h2>
                                    <p className="text-yellow-600 mb-4">
                                        You cannot access this step until you have completed the previous step <span className='text-emerald-700'>(Passengers)</span>
                                    </p>
                                    <button
                                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 mt-2 rounded"
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
                                            <div className="animate-spin rounded-full h-12 w-12 border-[3px] border-slate-200 border-t-emerald-600"></div>
                                            <span className="mt-4 text-slate-600">Preparing secure payment...</span>
                                        </div>
                                    ) : applicationData && applicationData.paymentStatus === "Completed" ? (
                                        <div className="bg-green-50 border border-green-100 rounded-lg p-6 text-center">
                                            <div className="flex justify-center mb-4">
                                                <CheckCircle className="h-10 w-10 text-green-500" />
                                            </div>
                                            <h3 className="text-lg font-medium text-green-700 mb-2">Payment Already Completed</h3>
                                            <p className="text-green-600 mb-4">
                                                This application has already been paid. If you believe this is an error, please contact support.
                                            </p>
                                            <button
                                                className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-2 rounded-lg mt-2"
                                                onClick={() => router.push(`/apply/documents?applicationId=${applicationId}`)}
                                            >
                                                Go to Document Upload
                                            </button>
                                        </div>
                                    ) : clientSecret ? (
                                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
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
                                                onClick={() => fetchApplicationData(applicationId)}
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
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-600 mb-4"></div>
                    <p className="text-slate-700 font-medium">Loading payment...</p>
                </div>
            </div>
        }>
            <PaymentContent />
        </Suspense>
    );
}