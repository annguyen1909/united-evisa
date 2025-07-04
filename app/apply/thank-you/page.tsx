"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
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

    if (!applicationId || !paymentIntent || redirectStatus !== "succeeded") {
      setError("Invalid payment information");
      setIsLoading(false);
      return;
    }

    let attempts = 0;
    let interval: NodeJS.Timeout;

    async function fetchApplicationData() {
      try {
        const response = await fetch(`/api/applications/${applicationId}`);
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
        <p>Loading your confirmation...</p>
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

        <div className="text-center space-y-4">
          <p className="text-gray-700">
            We will notify you about the status of your application. You can also check the status anytime.
          </p>
          <div className="flex justify-center gap-4">
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
          </div>
        </div>
      </Card>
    </div>
  );
}