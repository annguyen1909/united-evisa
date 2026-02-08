"use client";

import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, Star, Globe } from "lucide-react";
import CheckEligibility from "../../components/shared/CheckEligibility";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero.webp"
          alt="United Evisa travel hero"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/60 to-blue-900/90" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 lg:py-28 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-amber-200 w-fit">
            <Star className="h-4 w-4" />
            Trusted eVisa support for fast travel
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            United Evisa makes travel approvals feel effortless.
          </h1>

          <p className="text-base md:text-lg text-white/85 max-w-xl">
            Apply online with clear steps, document review, and real-time updates. Travel-ready
            support for popular destinations worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/apply">
              <Button className="bg-gradient-to-r from-blue-500 to-amber-500 hover:from-blue-600 hover:to-amber-600 text-white px-6 py-5 rounded-full text-base font-semibold shadow-lg">
                Start your application
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/check-requirements">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-6 py-5">
                Check requirements
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
            <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm">
              <div className="text-lg font-semibold">60,000+</div>
              Travelers supported
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm">
              <div className="text-lg font-semibold">50+</div>
              Destinations covered
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm">
              <div className="text-lg font-semibold">&lt; 5 min</div>
              Avg response time
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-white/75">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-amber-200" />
              Secure & encrypted
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-amber-200" />
              24/7 support
            </span>
            <span className="inline-flex items-center gap-2">
              <Globe className="h-4 w-4 text-amber-200" />
              Multi‑language guidance
            </span>
          </div>

          <p className="text-xs text-white/70 max-w-xl">
            Not a government site. We provide independent visa support and you may apply directly
            on official portals without service fees.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="rounded-3xl border border-white/20 bg-white/95 p-6 shadow-2xl">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              Check your eligibility in seconds
            </h2>
            <p className="text-sm text-slate-600 mb-6">
              Select your nationality and destination to see available visa options.
            </p>
            <Suspense
              fallback={
                <div className="space-y-3 animate-pulse">
                  <div className="h-12 rounded-xl bg-slate-200" />
                  <div className="h-12 rounded-xl bg-slate-200" />
                  <div className="h-12 rounded-xl bg-slate-200" />
                </div>
              }
            >
              <CheckEligibility />
            </Suspense>
            <div className="mt-5 rounded-2xl bg-blue-50 px-4 py-3 text-sm text-slate-700">
              Prefer self‑service? You can apply directly on official sites with no service fee.
            </div>
            <div className="mt-6 border-t border-slate-200 pt-5">
              <div className="grid gap-3 text-sm text-slate-600">
                <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3">
                  <span className="font-medium text-slate-800">Step 1</span>
                  <span>Tell us your route</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3">
                  <span className="font-medium text-slate-800">Step 2</span>
                  <span>Upload documents</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3">
                  <span className="font-medium text-slate-800">Step 3</span>
                  <span>Get status updates</span>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                  Document review included
                </span>
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                  Priority support available
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
