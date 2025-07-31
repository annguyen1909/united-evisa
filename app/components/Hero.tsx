"use client";

import { useEffect, useState } from "react";
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
  const [currentImageIndex, setCurrentImageIndex] = useState(-1);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = () => {
      backgroundImages.forEach((src) => {
        const img = new window.Image();
        img.src = src;
      });

      // Once the first image is loaded, show it
      const firstImg = new window.Image();
      firstImg.src = backgroundImages[0];
      firstImg.onload = () => {
        setCurrentImageIndex(0);
        setIsLoaded(true);
      };
    };

    preloadImages();
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    const timer = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [isLoaded]);

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="w-full relative min-h-[600px] z-0 flex flex-col items-center justify-center border-b-4 border-emerald-700">
      {/* Next.js Image for Background, only current image rendered for LCP */}
      <div className="absolute inset-0 w-full h-full" style={{ zIndex: -2 }}>
        {isLoaded && currentImageIndex >= 0 && (
          <Image
            src={backgroundImages[currentImageIndex]}
            alt="Hero background"
            fill
            priority={currentImageIndex === 0}
            sizes="100vw"
            className="object-cover object-center transition-opacity duration-1000 opacity-100"
            style={{ willChange: "opacity" }}
          />
        )}
      </div>

      {/* Dark Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-800/40 to-slate-900/70"
        style={{ zIndex: -1 }}
      />

      <div className="w-full max-w-6xl mx-auto px-4 py-16 md:py-24 flex flex-col items-center">
        {/* Hero Content */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-lg px-4 py-2 rounded-full text-emerald-300 text-sm font-medium mb-6 border border-emerald-400/30">
            <Star className="h-4 w-4 fill-current" />
            <span>Trusted by 50,000+ travelers worldwide</span>
            <Star className="h-4 w-4 fill-current" />
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
            Get Your{" "}
            <span className="font-extrabold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
              eVisa
            </span>{" "}
            in
            <br />
            <span className="text-amber-400">4 Simple Steps</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Skip the embassy visits and long queues. Get your visa approved
            online in as little as{" "}
            <span className="text-emerald-400 font-semibold">24 hours</span>{" "}
            with our trusted service.
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-2 text-white bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="bg-emerald-500 p-3 rounded-full">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm md:text-base font-semibold">
                Fast Processing
              </span>
              <span className="text-xs text-white/70">From 24 hours</span>
            </div>

            <div className="flex flex-col items-center gap-2 text-white bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="bg-emerald-500 p-3 rounded-full">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm md:text-base font-semibold">
                100% Secure
              </span>
              <span className="text-xs text-white/70">Bank-level security</span>
            </div>

            <div className="flex flex-col items-center gap-2 text-white bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="bg-emerald-500 p-3 rounded-full">
                <Users className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm md:text-base font-semibold">
                Expert Support
              </span>
              <span className="text-xs text-white/70">24/7 assistance</span>
            </div>

            <div className="flex flex-col items-center gap-2 text-white bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="bg-emerald-500 p-3 rounded-full">
                <CheckCheck className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm md:text-base font-semibold">
                99.5% Success
              </span>
              <span className="text-xs text-white/70">Approval rate</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="/apply">
              <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-emerald-500/25 transform hover:scale-105 transition-all duration-200 border-2 border-emerald-400/50">
                🚀 Start Your Application Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <div className="text-white/80 text-sm">
              <div className="flex items-center gap-1">
                <CheckCheck className="h-4 w-4 text-emerald-400" />
                <span>No hidden fees</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCheck className="h-4 w-4 text-emerald-400" />
                <span>Money-back guarantee</span>
              </div>
            </div>
          </div>

          {/* Process Steps Preview */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-white text-lg font-semibold mb-4">
              How it works:
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 text-white text-sm">
              <div className="flex items-center gap-2">
                <div className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  1
                </div>
                <span>Fill application</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  2
                </div>
                <span>Make payments</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  3
                </div>
                <span>Upload documents</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  4
                </div>
                <span>Receive eVisa</span>
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
          <CheckEligibility />
        </motion.div>
      </div>

      {/* Image Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-0">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ease-in-out 
              ${
                index === currentImageIndex
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
