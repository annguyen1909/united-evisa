"use client";

import { usePathname } from "next/navigation";
import clsx from "clsx";
import React from "react";

const steps = [
  { step: 1, label: "Apply", href: "/apply" },
  { step: 2, label: "Passengers", href: "/apply/passengers" },
  { step: 3, label: "Review & Submit", href: "/apply/review" },
];

export default function StepNavigation() {
  const pathname = usePathname();
  const cleanPath = pathname.split("?")[0].replace(/\/$/, "");

  let currentStepIndex = 0;
  if (cleanPath === "/apply") currentStepIndex = 0;
  else if (cleanPath === "/apply/passengers") currentStepIndex = 1;
  else if (cleanPath === "/apply/review") currentStepIndex = 2;
  console.log("cleanPath:", cleanPath);
  console.log("currentStepIndex:", currentStepIndex, "cleanPath:", cleanPath);

  return (
    <div className="flex items-center justify-between max-w-4xl mx-auto mb-8">
      {steps.map((step, i) => {
        const isCurrent = i === currentStepIndex;
        const isCompleted = i < currentStepIndex;

        return (
          <React.Fragment key={i}>
            {/* Step icon + label */}
            <div className="flex items-center space-x-2">
              <div
                className={clsx(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold",
                  isCompleted
                    ? "bg-[#16601E] text-white"
                    : isCurrent
                      ? "bg-[#16601E] text-white"
                      : "bg-gray-300 text-gray-700"
                )}
              >
                {step.step}
              </div>
              <span
                className={clsx(
                  "text-sm",
                  isCurrent
                    ? "font-bold text-black"
                    : isCompleted
                      ? "text-gray-700"
                      : "text-gray-600"
                )}
              >
                {step.label}
              </span>
            </div>

            {/* Stretching divider line */}
            {i < steps.length - 1 && (
              <div className="flex-1 h-px bg-gray-300 mx-2" />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
