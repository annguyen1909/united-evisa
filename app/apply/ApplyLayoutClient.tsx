'use client';

import Image from 'next/image';
import { Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

import StepNavigation from '@/components/shared/StepNavigation';

function StepNavWrapper() {
  useSearchParams();
  const pathname = usePathname();

  const hideStepNav = pathname.includes('/apply/status');
  if (hideStepNav) return null;

  return <StepNavigation />;
}

export default function ApplyLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full mx-auto bg-gradient-to-b from-blue-50/40 via-white to-white">
      <div className="relative w-full h-56 md:h-72 flex items-center justify-center max-md:mb-0 overflow-hidden mb-6">
        <Image
          src="/images/apply/apply-bg.webp"
          alt="Apply background"
          fill
          className="object-cover object-center opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-blue-900/60 to-blue-900/80" />
        <div className="relative z-10 text-center px-4">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-amber-200 border border-white/20">
            United Evisa Application
          </span>
          <h1 className="mt-4 text-3xl md:text-4xl font-semibold text-white drop-shadow-lg">
            Apply for your eVisa
          </h1>
          <p className="mt-2 text-base md:text-lg text-white/85 font-medium drop-shadow-sm hidden sm:block mx-auto max-w-2xl">
            Clear steps, secure payments, and real‑time updates for 50+ destinations.
          </p>
        </div>
      </div>

      <Suspense>
        <StepNavWrapper />
      </Suspense>

      {children}
    </div>
  );
}
