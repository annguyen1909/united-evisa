"use client";

import { useEffect, useState } from "react";
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

export default function PaymentPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [clientSecret, setClientSecret] = useState<string>("");
    const [totalAmount, setTotalAmount] = useState<number>(0);
    const [applicationId, setApplicationId] = useState<string>("");
    const [isLoading, setIsLoading] = useState(true);
    const [applicationData, setApplicationData] = useState<any>(null);
    const [country, setCountry] = useState<Country | null>(null);
    const [visa, setVisa] = useState<any>(null);

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
                
                // Process data for display and payment
                const country = COUNTRIES.find(c => 
                    c.code === data.Destination?.code || 
                    c.slug === data.Destination?.id
                );
                
                const visa = country?.visaTypes?.find(v => v.id === data.VisaType?.id);
                
                setCountry(country || null);
                setVisa(visa || null);
                
                const govFee = visa?.govFee ?? 0;
                const serviceFee = country?.etaInfo ? Number(country.etaInfo.serviceFee) : 0;
                const passengerCount = data.passengerCount || 1;
                const total = (govFee + serviceFee) * passengerCount;
                
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
        const destination = country?.name ?? applicationData.Destination?.name ?? "---";
        const visaName = visa?.name ?? applicationData.VisaType?.name ?? "---";
        const govFee = visa?.govFee ?? 0;
        const serviceFee = country && country.etaInfo ? Number(country.etaInfo.serviceFee) : 0;
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
        const total = visa ? (govFee + serviceFee) * passenger : applicationData.total || 0;

        orderSummary = (
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-5 w-full sticky top-6">
                <h2 className="text-lg font-semibold text-center text-slate-800 mb-2 pb-2 border-b border-slate-100">
                    Order Summary
                </h2>
                <div className="text-sm space-y-5">
                    {applicationId && (
                        <div className="flex justify-between items-center bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                            <p className="font-medium text-slate-700">Application ID:</p>
                            <p className="font-bold text-emerald-700">{applicationId}</p>
                        </div>
                    )}
                    
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Map className="w-4 h-4 text-slate-500" />
                            <span className="font-medium text-slate-700">Destination</span>
                        </div>
                        <p className="text-slate-800 ml-6">{destination}</p>
                    </div>
                    
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-slate-500" />
                            <span className="font-medium text-slate-700">Travel Period</span>
                        </div>
                        <div className="ml-6">
                            <p className="text-slate-800">{formattedStart} - {formattedEnd}</p>
                            <p className="text-xs text-slate-500 mt-1">({days} days)</p>
                        </div>
                    </div>
                    
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <CreditCard className="w-4 h-4 text-slate-500" />
                            <span className="font-medium text-slate-700">Type of Visa</span>
                        </div>
                        <p className="text-slate-800 ml-6">{visaName}</p>
                    </div>
                    
                    <hr className="border-slate-100" />
                    
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4 text-slate-500" />
                            <span className="font-medium text-slate-700">Visa Fees</span>
                        </div>
                        <div className="ml-6 space-y-2">
                            <div className="flex justify-between">
                                <span className="text-slate-600">Government Fee</span>
                                <span className="text-slate-800 font-medium">
                                    {visa ? `$${govFee.toFixed(2)}` : "---"}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-600">Service Fee</span>
                                <span className="text-slate-800 font-medium">
                                    {country && country.etaInfo ? `$${serviceFee.toFixed(2)}` : "---"}
                                </span>
                            </div>
                            <div className="flex justify-between pt-1">
                                <span className="text-slate-600">Travelers</span>
                                <span className="text-slate-800 font-medium">× {passenger}</span>
                            </div>
                        </div>
                    </div>
                    
                    <hr className="border-slate-100" />
                    
                    <div className="flex justify-between items-center pt-1">
                        <p className="font-semibold text-base text-slate-800">Total</p>
                        <p className="font-bold text-lg text-emerald-700">
                            {visa ? `$${total.toFixed(2)}` : `$${applicationData.total.toFixed(2)}`}
                        </p>
                    </div>
                    
                    <div className="flex items-center justify-center text-xs text-slate-500 pt-3">
                        <CheckCircle className="w-4 h-4 text-slate-400 mr-1.5" />
                        Secure payment processed by Stripe
                    </div>
                </div>
            </div>
        );
    }

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
                            
                            {isLoading ? (
                                <div className="flex flex-col items-center justify-center py-16">
                                    <div className="animate-spin rounded-full h-12 w-12 border-[3px] border-slate-200 border-t-emerald-600"></div>
                                    <span className="mt-4 text-slate-600">Preparing secure payment...</span>
                                </div>
                            ) : clientSecret ? (
                                <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                                    <Elements options={options} stripe={stripePromise}>
                                        <CheckoutForm amount={totalAmount} applicationId={applicationId} />
                                    </Elements>
                                </div>
                            ) : (
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
                            )}
                            
                            <div className="mt-8 pt-6 border-t border-slate-100">
                                <div className="flex items-center text-sm text-slate-600">
                                    <svg className="h-5 w-5 text-slate-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                    All payment information is encrypted and secure. We do not store your credit card details.
                                </div>
                            </div>
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