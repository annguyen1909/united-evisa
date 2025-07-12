"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import CheckEligibility from "../../components/shared/CheckEligibility";
import { motion } from "framer-motion";
import { CheckCheck, GlobeLock, Map, Clock } from "lucide-react";

export default function Hero() {
  const backgroundImages = [
    '/images/hero/hero.webp',
    '/images/hero/hero2.webp',
    '/images/hero/hero3.webp',
    '/images/hero/hero4.webp',
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
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
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
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="inline-block bg-slate-800/50 backdrop-blur-lg px-3 py-1 rounded-full text-amber-400 text-sm font-medium mb-4">
            Fast, Reliable, and Trusted
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
            Welcome to <span className="font-extrabold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">UNITED</span>
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">eVisa</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 drop-shadow-lg max-w-4xl mx-auto">
            Your Trusted Global Visa Assistant
          </h2>
          
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Simplify the way you get a visa — fast, reliable, and stress-free
          </p>
          
          {/* Benefits Icons */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
            <div className="flex items-center gap-2 text-white">
              <div className="bg-emerald-500/20 p-2 rounded-full">
                <CheckCheck className="h-5 w-5 text-emerald-400" />
              </div>
              <span className="text-sm md:text-base">Fast Approval</span>
            </div>
            
            <div className="flex items-center gap-2 text-white">
              <div className="bg-emerald-500/20 p-2 rounded-full">
                <GlobeLock className="h-5 w-5 text-emerald-400" />
              </div>
              <span className="text-sm md:text-base">Secure Processing</span>
            </div>
            
            <div className="flex items-center gap-2 text-white">
              <div className="bg-emerald-500/20 p-2 rounded-full">
                <Map className="h-5 w-5 text-emerald-400" />
              </div>
              <span className="text-sm md:text-base">40+ Countries</span>
            </div>
            
            <div className="flex items-center gap-2 text-white">
              <div className="bg-emerald-500/20 p-2 rounded-full">
                <Clock className="h-5 w-5 text-emerald-400" />
              </div>
              <span className="text-sm md:text-base">24/7 Support</span>
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
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ease-in-out 
              ${index === currentImageIndex
                ? 'w-10 bg-white'
                : 'w-2.5 bg-white/50 hover:bg-white/70'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}