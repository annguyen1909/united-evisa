"use client";

import { useEffect, useState, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import CheckEligibility from "../../components/shared/CheckEligibility";
import { motion } from "framer-motion";
import {
  CheckCheck,
  GlobeLock,
  Map,
  Clock,
  ArrowRight,
  Star,
  Users,
  Shield,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const backgroundImages = [
    "/images/hero/hero.webp",
    "/images/hero/hero2.webp",
    "/images/hero/hero3.webp",
    "/images/hero/hero4.webp",
  ];

  const TRANSITION_MS = 1000;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [isFirstLoaded, setIsFirstLoaded] = useState(false);
  const [currentLoaded, setCurrentLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // preload first image for LCP, and mark it loaded
  useEffect(() => {
    const img = new window.Image();
    img.src = backgroundImages[0];
    img.onload = () => {
      setIsFirstLoaded(true);
      setCurrentLoaded(true);
    };
    // also kick off background preloads (non-blocking)
    backgroundImages.slice(1).forEach((src) => {
      const p = new window.Image();
      p.src = src;
    });
  }, []);

  // automatic slide timer
  useEffect(() => {
    if (!isFirstLoaded) return;
    const timer = setInterval(() => {
      const next = (currentIndex + 1) % backgroundImages.length;
      // prepare transition: keep prev, swap current (currentLoaded will reset)
      setPrevIndex(currentIndex);
      setCurrentLoaded(false);
      setCurrentIndex(next);
    }, 5000);
    return () => clearInterval(timer);
  }, [isFirstLoaded, currentIndex]);

  // when new image finishes loading, start fade and cleanup prev after transition
  useEffect(() => {
    if (prevIndex === null) return;
    if (!currentLoaded) return;
    setIsTransitioning(true);
    const t = setTimeout(() => {
      setPrevIndex(null);
      setIsTransitioning(false);
    }, TRANSITION_MS);
    return () => clearTimeout(t);
  }, [currentLoaded, prevIndex]);

  const goTo = (index: number) => {
    if (index === currentIndex) return;
    setPrevIndex(currentIndex);
    setCurrentLoaded(false);
    setCurrentIndex(index);
  };

  return (
    <section className="w-full relative min-h-[600px] md:min-h-[700px] z-0 flex flex-col items-center justify-center border-b-4 border-emerald-700">
      {/* Image stack: previous (fades out) and current (waits to show until loaded) */}
      <div className="absolute inset-0 w-full h-full" style={{ zIndex: -2 }}>
        {/* previous image wrapper */}
        {prevIndex !== null && (
          <div
            className={`absolute inset-0 transition-opacity duration-[${TRANSITION_MS}ms] ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
            aria-hidden
          >
            <Image
              src={backgroundImages[prevIndex]}
              alt={`Background ${prevIndex + 1}`}
              fill
              priority={prevIndex === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        )}

        {/* current image wrapper: invisible until it loads, then shows */}
        <div
          className={`absolute inset-0 transition-opacity duration-[${TRANSITION_MS}ms] ${
            currentLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={backgroundImages[currentIndex]}
            alt={`Background ${currentIndex + 1}`}
            fill
            priority={currentIndex === 0}
            sizes="100vw"
            className="object-cover object-center"
            onLoadingComplete={() => {
              setCurrentLoaded(true);
            }}
          />
        </div>
      </div>

      {/* overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-800/50 to-slate-900/80 md:from-slate-900/70 md:via-slate-800/40 md:to-slate-900/70"
        style={{ zIndex: -1 }}
      />

      <div className="w-full max-w-6xl mx-auto px-4 py-16 md:py-24 flex flex-col items-center">
        {/* Hero content simplified for brevity */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Trust Badge - Enhanced for mobile */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-lg px-3 md:px-4 py-2 rounded-full text-emerald-300 text-sm font-medium mb-4 md:mb-6 border border-emerald-400/30">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-xs md:text-sm">
              Trusted by 50,000+ travelers worldwide
            </span>
            <Star className="h-4 w-4 fill-current" />
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 md:mb-6 drop-shadow-lg leading-tight">
            Get Your{" "}
            <span className="font-extrabold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
              eVisa
            </span>{" "}
            in
            <br />
            <span className="text-amber-400">24 Hours</span>
          </h1>

          {/* Mobile-First CTA Button - Moved to top for immediate visibility */}
          <div className="md:hidden mb-6">
            <Link href="/apply" className="block">
              <Button className="w-4/5 bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 hover:from-emerald-700 hover:via-emerald-800 hover:to-teal-800 text-white px-6 py-4 text-lg font-bold rounded-xl shadow-2xl hover:shadow-emerald-500/30 transform hover:scale-105 transition-all duration-300 border-2 border-emerald-400/60 min-h-[56px] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  🚀 START APPLICATION NOW
                  <ArrowRight className="h-5 w-5" />
                </span>
              </Button>
            </Link>
          </div>

          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-6 md:mb-8 leading-relaxed px-2">
            Skip the embassy visits and long queues. Get your visa approved
            online in as little as{" "}
            <span className="text-emerald-400 font-semibold">24 hours</span>{" "}
            with our trusted service.
          </p>

          {/* Key Benefits - Mobile optimized */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-10 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-2 text-white bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/20">
              <div className="bg-emerald-500 p-2 md:p-3 rounded-full">
                <Zap className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <span className="text-sm md:text-base font-semibold text-center">
                Fast Processing
              </span>
              <span className="text-xs text-white/70 text-center">
                From 24 hours
              </span>
            </div>

            <div className="flex flex-col items-center gap-2 text-white bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/20">
              <div className="bg-emerald-500 p-2 md:p-3 rounded-full">
                <Shield className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <span className="text-sm md:text-base font-semibold text-center">
                100% Secure
              </span>
              <span className="text-xs text-white/70 text-center">
                Bank-level security
              </span>
            </div>

            <div className="flex flex-col items-center gap-2 text-white bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/20">
              <div className="bg-emerald-500 p-2 md:p-3 rounded-full">
                <Users className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <span className="text-sm md:text-base font-semibold text-center">
                Expert Support
              </span>
              <span className="text-xs text-white/70 text-center">
                24/7 assistance
              </span>
            </div>

            <div className="flex flex-col items-center gap-2 text-white bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/20">
              <div className="bg-emerald-500 p-2 md:p-3 rounded-full">
                <CheckCheck className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <span className="text-sm md:text-base font-semibold text-center">
                99.5% Success
              </span>
              <span className="text-xs text-white/70 text-center">
                Approval rate
              </span>
            </div>
          </div>

          {/* CTA Buttons - Desktop version only */}
          <div className="hidden md:flex flex-row gap-4 justify-center items-center mb-6 md:mb-8 px-4">
            <Link href="/apply" className="w-auto">
              <Button className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 hover:from-emerald-700 hover:via-emerald-800 hover:to-teal-800 text-white px-8 py-6 text-lg font-bold rounded-xl shadow-2xl hover:shadow-emerald-500/30 transform hover:scale-105 transition-all duration-300 border-2 border-emerald-400/60 min-h-[56px] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  🚀 START APPLICATION NOW
                  <ArrowRight className="h-5 w-5" />
                </span>
              </Button>
            </Link>
            <div className="text-white/90 text-sm flex flex-col space-y-1 bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <div className="flex items-center gap-1 justify-start">
                <CheckCheck className="h-4 w-4 text-emerald-400" />
                <span className="font-medium">No hidden fees</span>
              </div>
              <div className="flex items-center gap-1 justify-start">
                <CheckCheck className="h-4 w-4 text-emerald-400" />
                <span className="font-medium">Money-back guarantee</span>
              </div>
            </div>
          </div>

          {/* Process Steps Preview - Mobile optimized */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-white text-base md:text-lg font-semibold mb-3 md:mb-4 text-center">
              How it works:
            </h3>
            <div className="grid grid-cols-2 sm:flex sm:flex-row gap-3 md:gap-4 text-white text-sm">
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <div className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                  1
                </div>
                <span className="text-center sm:text-left">Fill application</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <div className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                  2
                </div>
                <span className="text-center sm:text-left">Make payments</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <div className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                  3
                </div>
                <span className="text-center sm:text-left">Upload documents</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <div className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                  4
                </div>
                <span className="text-center sm:text-left">Receive eVisa</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Check Eligibility Component */}
        <motion.div
          className="w-full z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <Suspense fallback={
            <div className="w-full max-w-4xl mx-auto pt-0 px-4 sm:px-6">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-100 backdrop-blur-sm">
                <div className="text-center">
                  <div className="animate-pulse">
                    <div className="h-8 bg-slate-200 rounded mb-6"></div>
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 gap-0">
                      <div className="flex-1 h-12 bg-slate-200 rounded-l-xl"></div>
                      <div className="flex-1 h-12 bg-slate-200"></div>
                      <div className="w-full md:w-auto md:min-w-[130px] h-12 bg-slate-200 rounded-r-xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }>
            <CheckEligibility />
          </Suspense>
        </motion.div>
      </div>

      {/* Image Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-0">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ease-in-out 
              ${
                index === currentIndex
                  ? "w-10 bg-white"
                  : "w-2.5 bg-white/50 hover:bg-white/70"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
