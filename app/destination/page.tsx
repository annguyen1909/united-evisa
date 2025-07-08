"use client";
import DestinationClient from "@/components/shared/DestinationClient";
import { Suspense } from "react";

export default function DestinationPage() {
  return (
    <div>
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-600 mb-4"></div>
            <p className="text-slate-700 font-medium">Loading destinations...</p>
          </div>
        </div>
      }>
        <DestinationClient />
      </Suspense>
    </div>
  );
}
