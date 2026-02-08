"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CheckEligibility from "../../components/shared/CheckEligibility";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCheck,
  Clock,
  ArrowRight,
  Star,
  Users,
  Shield,
  Zap,
  TrendingUp,
  Globe,
  Award,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function MobileOptimizedHero() {
  const [recentApprovals, setRecentApprovals] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const backgroundImages = [
    "/images/hero/hero.webp",
    "/images/hero/hero2.webp",
    "/images/hero/hero3.webp",
    "/images/hero/hero4.webp",
  ];

  // Simulate real-time approvals counter
  useEffect(() => {
    setIsVisible(true);
    const startCount = Math.floor(Math.random() * 100) + 50;
    setRecentApprovals(startCount);
    
    const interval = setInterval(() => {
      setRecentApprovals(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // Background image rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="w-full relative min-h-screen lg:min-h-[700px] flex flex-col items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 w-full h-full" style={{ zIndex: -2 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={backgroundImages[currentImageIndex]}
              alt="Global visa services"
              fill
              priority={currentImageIndex === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Enhanced Gradient Overlay for mobile readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-800/50 to-slate-900/90 lg:from-slate-900/70 lg:via-slate-800/40 lg:to-slate-900/70" style={{ zIndex: -1 }} />

      <div className="w-full max-w-7xl mx-auto px-4 py-8 lg:py-16 flex flex-col items-center relative z-10">
        
        {/* Mobile-First Trust Header */}
        <motion.div
          className="w-full text-center mb-6 lg:mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Live Activity Badge */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-4">
            <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-400/30 backdrop-blur-md px-3 py-1.5 text-xs sm:text-sm">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse" />
              Live: {recentApprovals} approvals this week
            </Badge>
            <Badge variant="secondary" className="bg-amber-500/20 text-amber-300 border-amber-400/30 backdrop-blur-md px-3 py-1.5 text-xs sm:text-sm">
              <Star className="w-3 h-3 mr-1 fill-current" />
              4.9/5 from 12,000+ reviews
            </Badge>
          </div>
        </motion.div>

        {/* Hero Headlines - Mobile Optimized */}
        <motion.div
          className="text-center mb-8 lg:mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 lg:mb-6 leading-tight">
            Get Your{" "}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-amber-400 bg-clip-text text-transparent">
              eVisa
            </span>
            <br className="hidden sm:block" />
            <span className="sm:ml-2">in</span>{" "}
            <span className="text-amber-400 font-black">24 Hours</span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-6 lg:mb-8 leading-relaxed px-2">
            Skip embassy visits. No paperwork hassles. 
            <span className="block mt-2 text-blue-300 font-semibold">
              99.5% approval rate • 50+ countries • 24/7 support
            </span>
          </p>

          {/* Mobile-First CTA Section */}
          <div className="flex flex-col items-center gap-4 mb-8">
            <Link href="/apply" className="w-full sm:w-auto">
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 sm:py-6 text-lg font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 border-2 border-blue-400/50 min-h-[56px]"
              >
                <Smartphone className="mr-2 h-5 w-5" />
                Start Application Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <div className="flex items-center gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-1">
                <CheckCheck className="h-4 w-4 text-blue-400" />
                <span>No hidden fees</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4 text-blue-400" />
                <span>Money-back guarantee</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mobile-Optimized Key Benefits Grid */}
        <motion.div
          className="w-full mb-8 lg:mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
            {[
              { icon: Zap, title: "24h Processing", subtitle: "Express service", color: "blue" },
              { icon: Shield, title: "100% Secure", subtitle: "Bank-level safety", color: "blue" },
              { icon: Users, title: "24/7 Support", subtitle: "Expert assistance", color: "purple" },
              { icon: TrendingUp, title: "99.5% Success", subtitle: "Approval rate", color: "amber" },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-3 sm:p-4 text-center">
                    <div className={`bg-${benefit.color}-500 p-2 sm:p-3 rounded-full w-fit mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`}>
                      <benefit.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-sm sm:text-base mb-1">{benefit.title}</h3>
                    <p className="text-gray-300 text-xs sm:text-sm">{benefit.subtitle}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Process Preview - Mobile Optimized */}
        <motion.div
          className="w-full mb-8 lg:mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 max-w-3xl mx-auto">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-5 w-5 text-blue-400" />
                <h3 className="text-white text-lg font-bold">Simple 4-Step Process</h3>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {[
                  { step: "1", action: "Apply Online", time: "2 min" },
                  { step: "2", action: "Make Payment", time: "1 min" },
                  { step: "3", action: "Upload Docs", time: "3 min" },
                  { step: "4", action: "Get eVisa", time: "24 hrs" },
                ].map((process, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-sm sm:text-base font-bold mx-auto mb-2">
                      {process.step}
                    </div>
                    <p className="text-white text-xs sm:text-sm font-medium mb-1">{process.action}</p>
                    <p className="text-gray-400 text-xs">{process.time}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Check Eligibility Component */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <CheckEligibility />
        </motion.div>

        {/* Social Proof Footer */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-1">
              <Globe className="h-4 w-4 text-blue-400" />
              <span>50+ Countries</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4 text-blue-400" />
              <span>50,000+ Happy Travelers</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-amber-400 fill-current" />
              <span>Trusted Since 2020</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Image Navigation Dots */}
      <div className="absolute bottom-4 lg:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ease-in-out 
              ${
                index === currentImageIndex
                  ? "w-8 sm:w-10 bg-white shadow-lg"
                  : "w-2 sm:w-2.5 bg-white/50 hover:bg-white/70"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
