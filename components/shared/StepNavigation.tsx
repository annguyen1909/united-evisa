"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  { step: 1, label: "Apply", href: "/apply" },
  { step: 2, label: "Passengers", href: "/apply/passengers" },
  { step: 3, label: "Payment", href: "/apply/payment" },
  { step: 4, label: "Documents", href: "/apply/documents" }
];

export default function StepNavigation() {
  const pathname = usePathname();
  const cleanPath = pathname.split("?")[0].replace(/\/$/, "");

  let currentStepIndex = 0;
  if (cleanPath === "/apply") currentStepIndex = 0;
  else if (cleanPath === "/apply/passengers") currentStepIndex = 1;
  else if (cleanPath === "/apply/payment") currentStepIndex = 2;
  else if (
    cleanPath === "/apply/documents" ||
    cleanPath === "/apply/confirmation"
  ) currentStepIndex = 3; // Both are step 4

  return (
    <div className="max-w-5xl mx-auto mb-8 px-4">
      {/* For larger screens - horizontal steps */}
      <div className="hidden sm:flex items-center justify-between bg-white rounded-3xl p-5 border border-blue-100 shadow-sm">
        {steps.map((step, i) => {
          const isCurrent = i === currentStepIndex;
          const isCompleted = i < currentStepIndex;
          const isLast = i === steps.length - 1;

          return (
            <React.Fragment key={i}>
              {/* Step item */}
              <div className="flex flex-col items-center space-y-1">
                {/* Step circle */}
                <div
                  className={cn(
                    "w-11 h-11 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200",
                    isCompleted
                      ? "bg-blue-600 text-white"
                      : isCurrent
                        ? "bg-gradient-to-r from-blue-600 to-amber-500 text-white ring-4 ring-blue-100"
                        : "bg-slate-100 text-slate-500"
                  )}
                >
                  {isCompleted ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    step.step
                  )}
                </div>

                {/* Step label */}
                <span
                  className={cn(
                    "text-sm whitespace-nowrap",
                    isCurrent
                      ? "font-semibold text-slate-900"
                      : isCompleted
                        ? "font-medium text-blue-700"
                        : "text-slate-500"
                  )}
                >
                  {step.label}
                </span>
              </div>

              {/* Connecting line */}
              {!isLast && (
                <div className="flex-1 mx-2 relative">
                  <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0 h-0.5 bg-slate-200">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-amber-500 transition-all duration-500"
                      style={{ width: isCompleted ? '100%' : '0%' }}
                    ></div>
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* For mobile - simpler vertical steps with labels on right */}
      <div className="sm:hidden bg-white rounded-3xl p-4 border border-blue-100 shadow-sm">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200"></div>

          {steps.map((step, i) => {
            const isCurrent = i === currentStepIndex;
            const isCompleted = i < currentStepIndex;
            const isLast = i === steps.length - 1;

            return (
              <div key={i} className={cn("flex items-center py-3", !isLast && "pb-5")}>
                {/* Step circle */}
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold z-10",
                    isCompleted
                      ? "bg-blue-600 text-white"
                      : isCurrent
                        ? "bg-gradient-to-r from-blue-600 to-amber-500 text-white ring-4 ring-blue-100"
                        : "bg-slate-100 text-slate-500"
                  )}
                >
                  {isCompleted ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    step.step
                  )}
                </div>

                {/* Step label */}
                <span
                  className={cn(
                    "text-sm ml-3",
                    isCurrent
                      ? "font-semibold text-slate-900"
                      : isCompleted
                        ? "font-medium text-blue-700"
                        : "text-slate-500"
                  )}
                >
                  {step.label}
                </span>

                {/* Progress indicator for vertical line */}
                {!isLast && (
                  <div
                    className={cn(
                      "absolute left-4 w-0.5 bg-gradient-to-b from-blue-600 to-amber-500 transition-all duration-500",
                    )}
                    style={{
                      top: `${8 * (i + 1) + 12 + i * 20}px`,
                      height: isCompleted ? '20px' : '0px'
                    }}
                  ></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}