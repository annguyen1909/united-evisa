"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function PaymentSuccess() {
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const applicationId = searchParams.get("applicationId");
    const paymentIntent = searchParams.get("payment_intent");
    const redirectStatus = searchParams.get("redirect_status");
    
    // Only try to update if we have valid payment data
    if (applicationId && paymentIntent && redirectStatus === "succeeded") {
      updateApplicationStatus(applicationId, paymentIntent);
    }
  }, [searchParams]);

  async function updateApplicationStatus(appId: string, paymentIntentId: string) {
    try {
      const response = await fetch(`/api/applications/${appId}/payment-sucess`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentIntentId,
        }),
      });
      
      if (response.ok) {
        console.log("Application status updated to Processing");
      } else {
        setError("Failed to update application status");
        console.error("Failed to update application status:", await response.text());
      }
    } catch (error) {
      setError("Error connecting to server");
      console.error("Error updating application status:", error);
    }
  }

  return (
    <>
      {/* This component doesn't render anything visible */}
      {error && (
        <div className="bg-red-50 p-2 text-xs text-red-800 rounded mb-4">
          Note: {error} (Your payment was successful, but there was an issue updating the application status)
        </div>
      )}
    </>
  );
}