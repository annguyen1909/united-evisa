"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, CreditCard, User, Users } from "lucide-react";
import moment from "moment";
import Link from "next/link";
import PaymentSuccess from "@/components/shared/PaymentSuccess";
import SupportSidebar from "@/components/shared/SupportSidebar";
import Image from "next/image";

function ConfirmationContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [applicationData, setApplicationData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [stepNotAllowed, setStepNotAllowed] = useState(false);

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
        const response = await fetch(`/api/applications/${applicationId}?include=risk,cardHolder,stripeActivity,account`);
        if (response.ok) {
          const data = await response.json();
          setApplicationData(data);

          // Step check: require paymentStatus === 'Completed' and passengers exist
          if (!data.paymentStatus || data.paymentStatus !== 'Completed' || !data.passengers || !Array.isArray(data.passengers) || data.passengers.length === 0) {
            setStepNotAllowed(true);
            clearInterval(interval);
            setIsLoading(false);
            return;
          }

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

  if (stepNotAllowed) {
    return (
      <div className="max-w-3xl mx-auto p-8">
        <Card className="p-8 text-center bg-yellow-50 border border-yellow-200">
          <h2 className="text-2xl font-bold text-yellow-700 mb-4">Step Not Allowed</h2>
          <p className="mb-4 text-yellow-700">You cannot access this page until you have completed all previous steps.</p>
          <Button onClick={() => router.push("/apply/payment?applicationId=" + searchParams.get("applicationId"))}>
            Go Back to Payment
          </Button>
        </Card>
      </div>
    );
  }

  const applicationId = searchParams.get("applicationId");
  const destination = applicationData?.destination?.name || "your destination";
  // For India, show canonical only
let visaType = applicationData?.visaType?.name || "visa";
if (applicationData?.destination?.code?.toUpperCase() === "IN") {
  const groupRegex = /(\s*-?\s*Group\s*\d*$|\s*-?\s*Group$|\s*Group\d*$|\s*Group$)/i;
  if (applicationData?.canonical && applicationData.canonical.trim()) {
    visaType = applicationData.canonical.replace(groupRegex, '').trim();
  } else {
    visaType = (applicationData?.visaType?.name || "visa").replace(groupRegex, '').trim();
  }
}
  const status = applicationData?.status || "Pending";
  const formattedDate = applicationData?.createdAt
    ? moment(applicationData.createdAt).format("MMMM D, YYYY")
    : "recent";
    
  // Payment information
  const cardHolder = applicationData?.cardHolder || null;
  const stripeActivity = applicationData?.stripeActivity?.[0] || null;
  
  const paymentAmount = stripeActivity?.amount || applicationData?.total || 0;

  // Contact info extraction - Get from account data, not cardHolder
  let account = applicationData?.account || {};
  let contact = {
    fullName: account.fullName || applicationData?.cardHolder?.name || "-",
    email: account.email || "-", 
    phone: account.areaCode && account.phoneNumber ? `${account.areaCode} ${account.phoneNumber}` : "-",
    gender: account.gender || "-"
  };

  // If not logged in and no account info, try to get contact info from cookie
  if (!account.email) {
    try {
      const cookieKey = `guestContact_${applicationId}`;
      const cookies = document.cookie.split(';').map(c => c.trim());
      const found = cookies.find(c => c.startsWith(cookieKey + '='));
      if (found) {
        const value = decodeURIComponent(found.split('=')[1]);
        const guestContact = JSON.parse(value);
        contact = {
          fullName: guestContact.fullName || '-',
          email: guestContact.email || '-',
          phone: (guestContact.countryCode ? guestContact.countryCode + ' ' : '') + (guestContact.phone || '-'),
          gender: guestContact.gender || '-'
        };
      }
    } catch (e) {
      // ignore
    }
  }

  // Passengers extraction (try both .passengers and .Passenger for compatibility)
  const passengers = applicationData?.passengers || applicationData?.Passenger || [];
  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <PaymentSuccess />
            <Card className="bg-white p-8 shadow-lg border rounded-xl">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="h-20 w-20 text-emerald-500" />
                </div>
                <h1 className="text-3xl font-bold text-emerald-700 mb-2">
                  Payment Successful!
                </h1>
                <p className="text-lg text-gray-700">
                  Thank you for your payment. Your visa application is now being processed.
                </p>
              </div>

              {/* Application Details - Full Width */}
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

              {/* Payment Info & Contact Info - Side by Side */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Payment Information */}
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <div className="flex items-center mb-4">
                    <CreditCard className="h-5 w-5 text-blue-600 mr-2" />
                    <h3 className="text-lg font-semibold text-blue-800">Payment Information</h3>
                  </div>
                  <div className="space-y-3">
                    {cardHolder && (
                      <>
                        <div className="flex justify-between py-2 border-b border-blue-100">
                          <span className="text-blue-700 font-medium">Cardholder:</span>
                          <span className="font-medium text-blue-900">{cardHolder.name}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-blue-100 items-center">
                          <span className="text-blue-700 font-medium">Card:</span>
                          <span className="font-medium flex items-center gap-2 text-blue-900">
                            {/* Stripe card brand icon */}
                            {cardHolder.cardBrand && (
                              <Image
                                src={`https://cdn.jsdelivr.net/gh/stripe/stripe-js@master/docs/assets/card-icons/${cardHolder.cardBrand}.svg`}
                                alt={cardHolder.cardBrand}
                                width={28}
                                height={18}
                                style={{ display: "inline-block" }}
                                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                              />
                            )}
                            {cardHolder.cardType} {cardHolder.cardNumber}
                          </span>
                        </div>
                      </>
                    )}
                    <div className="flex justify-between py-2 border-b border-blue-100">
                      <span className="text-blue-700 font-medium">Amount:</span>
                      <span className="font-medium text-blue-900">${paymentAmount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-blue-700 font-medium">Date:</span>
                      <span className="font-medium text-blue-900">
                        {stripeActivity?.timestamp 
                          ? moment(stripeActivity.timestamp).format("MMM D, YYYY") 
                          : moment().format("MMM D, YYYY")}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-lg border border-indigo-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-indigo-100 p-2 rounded-full mr-3">
                      <User className="h-5 w-5 text-indigo-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-indigo-800">Contact Information</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-indigo-100">
                      <span className="text-indigo-700 font-medium">Name:</span>
                      <span className="text-indigo-900 font-medium">{contact.fullName}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-indigo-100">
                      <span className="text-indigo-700 font-medium">Email:</span>
                      <span className="text-indigo-900">{contact.email}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-indigo-100">
                      <span className="text-indigo-700 font-medium">Phone:</span>
                      <span className="text-indigo-900">{contact.phone}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-indigo-700 font-medium">Gender:</span>
                      <span className="text-indigo-900">{contact.gender}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Passengers List - Full Width with Scroll */}
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-lg border border-emerald-100 mb-8">
                <div className="flex items-center mb-4">
                  <div className="bg-emerald-100 p-2 rounded-full mr-3">
                    <Users className="h-5 w-5 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-emerald-800">Passengers ({passengers.length})</h3>
                </div>
                {passengers.length === 0 ? (
                  <div className="text-emerald-600 bg-emerald-100 p-4 rounded-lg text-center">No passengers found.</div>
                ) : (
                  <div className="max-h-96 overflow-y-auto pr-2 space-y-3">
                    {passengers.map((p: any, i: number) => (
                      <div key={p.id || i} className="bg-white p-4 rounded-lg border border-emerald-200 shadow-sm">
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-semibold text-emerald-800 text-lg">Passenger {i + 1}</span>
                          <span className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-medium">
                            {p.gender || "N/A"}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-emerald-700 block">Name:</span>
                            <span className="text-emerald-900">{p.fullName}</span>
                          </div>
                          <div>
                            <span className="font-medium text-emerald-700 block">Date of Birth:</span>
                            <span className="text-emerald-900">{p.dateOfBirth ? moment(p.dateOfBirth).format("YYYY-MM-DD") : "-"}</span>
                          </div>
                          <div>
                            <span className="font-medium text-emerald-700 block">Passport:</span>
                            <span className="text-emerald-900">{p.passportNumber}</span>
                          </div>
                          <div>
                            <span className="font-medium text-emerald-700 block">Nationality:</span>
                            <span className="text-emerald-900">{p.nationality}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
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
                  <Link href={`/apply/documents?applicationId=${applicationId}`} className="inline-block">
                    <Button className="bg-green-700 hover:bg-green-800">
                      Upload Documents
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Support Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <SupportSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <div className="max-w-3xl mx-auto p-8 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading your confirmation...</p>
      </div>
    }>
      <ConfirmationContent />
    </Suspense>
  );
}