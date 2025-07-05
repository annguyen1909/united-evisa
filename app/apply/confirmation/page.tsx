"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, ShieldCheck, AlertTriangle, CreditCard } from "lucide-react";
import moment from "moment";
import Link from "next/link";
import PaymentSuccess from "@/components/shared/PaymentSuccess";

export default function ThankYouPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [applicationData, setApplicationData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const applicationId = searchParams.get("applicationId");
    const paymentIntent = searchParams.get("payment_intent");
    const redirectStatus = searchParams.get("redirect_status");

    if (!applicationId) {
      setError("Missing application information");
      setIsLoading(false);
      return;
    }

    let attempts = 0;
    let interval: NodeJS.Timeout;

    async function fetchApplicationData() {
      try {
        const response = await fetch(`/api/applications/${applicationId}?include=risk,cardHolder,stripeActivity`);
        if (response.ok) {
          const data = await response.json();
          setApplicationData(data);

          // Stop polling if status is updated
          if (data.status === "Collecting Documents" || attempts >= 5) {
            clearInterval(interval);
            setIsLoading(false);
          }
        } else {
          throw new Error("Failed to load application data");
        }
      } catch (error) {
        setError("Could not load your application details");
        clearInterval(interval);
        setIsLoading(false);
      }
    }

    // Initial fetch
    fetchApplicationData();

    // Poll every 2 seconds, up to 5 times
    interval = setInterval(() => {
      attempts += 1;
      fetchApplicationData();
      if (attempts >= 5) {
        clearInterval(interval);
        setIsLoading(false);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [searchParams]);

  if (isLoading) {
    return (
      <div className="max-w-3xl mx-auto p-8 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading your confirmation...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-3xl mx-auto p-8">
        <Card className="p-8 text-center bg-red-50">
          <h2 className="text-2xl font-bold text-red-700 mb-4">Error</h2>
          <p className="mb-4">{error}</p>
          <Button onClick={() => router.push("/apply")}>
            Return to Application
          </Button>
        </Card>
      </div>
    );
  }

  const applicationId = searchParams.get("applicationId");
  const destination = applicationData?.Destination?.name || "your destination";
  const visaType = applicationData?.VisaType?.name || "visa";
  const status = applicationData?.status || "Pending";
  const formattedDate = applicationData?.createdAt
    ? moment(applicationData.createdAt).format("MMMM D, YYYY")
    : "recent";
    
  // Payment and risk information
  const cardHolder = applicationData?.CardHolder || null;
  const risk = applicationData?.risks?.[0] || null;
  const stripeActivity = applicationData?.stripeActivity?.[0] || null;
  
  const isRiskPassed = risk?.status === "Passed";
  const paymentAmount = stripeActivity?.amount || applicationData?.total || 0;

  return (
    <div className="max-w-4xl mx-auto p-4 py-12">
      <PaymentSuccess />
      <Card className="bg-white p-8 shadow-lg border rounded-xl">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-20 w-20 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-green-800 mb-2">
            Payment Successful!
          </h1>
          <p className="text-lg text-gray-700">
            Thank you for your payment. Your visa application is now being processed.
          </p>
        </div>

        <div className="bg-green-50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold text-green-800 mb-4">
            Application Details
          </h2>
          <div className="grid gap-4">
            <div className="flex justify-between py-2 border-b border-green-200">
              <span className="font-medium">Application ID:</span>
              <span className="font-bold">{applicationId}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-green-200">
              <span className="font-medium">Destination:</span>
              <span>{destination}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-green-200">
              <span className="font-medium">Visa Type:</span>
              <span>{visaType}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-green-200">
              <span className="font-medium">Status:</span>
              <span className="font-medium text-amber-700">{status}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="font-medium">Submission Date:</span>
              <span>{formattedDate}</span>
            </div>
          </div>
        </div>
        
        {/* Payment & Risk Information */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Payment Information */}
          <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
            <div className="flex items-center mb-3">
              <CreditCard className="h-5 w-5 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold text-blue-800">Payment Information</h3>
            </div>
            <div className="space-y-2 text-sm">
              {cardHolder && (
                <>
                  <div className="flex justify-between py-1 border-b border-blue-100">
                    <span>Cardholder:</span>
                    <span className="font-medium">{cardHolder.name}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-blue-100">
                    <span>Card:</span>
                    <span className="font-medium">
                      {cardHolder.cardType} {cardHolder.cardNumber?.slice(-4) || 'xxxx'}
                    </span>
                  </div>
                </>
              )}
              <div className="flex justify-between py-1 border-b border-blue-100">
                <span>Amount:</span>
                <span className="font-medium">${paymentAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Date:</span>
                <span className="font-medium">
                  {stripeActivity?.timestamp 
                    ? moment(stripeActivity.timestamp).format("MMM D, YYYY") 
                    : moment().format("MMM D, YYYY")}
                </span>
              </div>
            </div>
          </div>
          
          {/* Risk Assessment */}
          <div className={`${isRiskPassed ? 'bg-green-50 border-green-100' : 'bg-amber-50 border-amber-100'} p-5 rounded-lg border`}>
            <div className="flex items-center mb-3">
              {isRiskPassed ? (
                <ShieldCheck className="h-5 w-5 text-green-600 mr-2" />
              ) : (
                <AlertTriangle className="h-5 w-5 text-amber-600 mr-2" />
              )}
              <h3 className={`text-lg font-semibold ${isRiskPassed ? 'text-green-800' : 'text-amber-800'}`}>
                Risk Assessment
              </h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="mr-2">Status:</span>
                {isRiskPassed ? (
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded">
                    Passed
                  </span>
                ) : (
                  <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-1 rounded">
                    Under Review
                  </span>
                )}
              </div>
              <p className="text-sm">
                {isRiskPassed 
                  ? "Your payment has been verified and your application is being processed."
                  : "Our team will review your payment before final processing. This extra verification step helps protect both you and our service."}
              </p>
              {!isRiskPassed && (
                <p className="text-xs text-amber-700 mt-2">
                  Note: This does not affect your place in the queue. Processing will begin immediately after verification.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="text-center space-y-4">
          <p className="text-gray-700">
            We will notify you about the status of your application. You can also check the status anytime.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/list" className="inline-block">
              <Button variant="outline" className="bg-white">
                View All Applications
              </Button>
            </Link>
            <Link href={`/apply/status?applicationId=${applicationId}`} className="inline-block">
              <Button className="bg-green-700 hover:bg-green-800">
                Check Status
              </Button>
            </Link>
            <Link href={`/apply/documents?applicationId=${applicationId}`} className="inline-block">
              <Button className="bg-green-700 hover:bg-green-800">
                Upload Documents
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}