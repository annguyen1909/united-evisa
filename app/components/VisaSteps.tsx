"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

type VisaType = {
  name: string;
  title: string;
  description: string;
  image?: string;
};

const visaTypes: VisaType[] = [
  {
    name: "1",
    title: "Application Online",
    description:
      "Submit your eVisa application on our website",
    image: "/images/steps/step1.png",
  },
  {
    name: "2",
    title: "Payment Online",
    description:
      "Secured payment system that accepts Cards, or Bank Transfer",
    image: "/images/steps/step2.png",
  },
  {
    name: "3",
    title: "Submit Documents",
    description:
      "Submit and manage your required documents through our secured portal",
    image: "/images/steps/step3.png",
  },
  {
    name: "4",
    title: "Receive Your eVisa",
    description:
      "Sit back and relax — we'll deliver your eVisa straight to your inbox",
    image: "/images/steps/step4.png",
  },
];

export default function VisaSteps() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-emerald-50/50 via-white to-emerald-50/30">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-6">
          <CheckCircle className="h-8 w-8 text-emerald-600" />
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-manrope mb-6 text-emerald-800 leading-tight">
          Get Your eVisa in 
          <span className="bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent"> 4 Simple Steps</span>
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
          Our streamlined, secure process makes visa applications effortless. From start to finish, we've got you covered.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full mx-auto mt-6"></div>
      </div>

      {/* Modern Timeline Design */}
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          {visaTypes.map(({ name, title, description, image }, index) => (
            <motion.div
              key={name}
              initial={{ y: 30, opacity: 0, scale: 0.95 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative group"
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col bg-white backdrop-blur-sm group-hover:bg-white group-hover:scale-[1.02]">
                {/* Step number node always visible and centered */}
                <div className="flex items-center justify-center w-full mt-0 mb-6">
                  <div className={`w-14 h-14 mt-2 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg transform transition-all duration-300 group-hover:scale-102
                    ${index === 0 ? 'bg-gradient-to-br from-emerald-400 to-emerald-600' : 
                      index === 1 ? 'bg-gradient-to-br from-emerald-500 to-emerald-700' :
                      index === 2 ? 'bg-gradient-to-br from-emerald-600 to-emerald-800' : 
                      'bg-gradient-to-br from-emerald-700 to-emerald-900'}`
                  }>
                    {name}
                  </div>
                </div>

                {/* Enhanced Mobile step indicator */}
                <div className="lg:hidden absolute top-0 left-0 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold px-4 py-2 text-sm rounded-br-2xl rounded-tl-xl shadow-md">
                  <span className="font-manrope">Step {name}</span>
                </div>

                <div className="p-8 pt-4 flex flex-col items-center text-center h-full">
                  {/* Enhanced image container */}
                  <div className="mb-6 w-20 h-20 flex items-center justify-center bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl shadow-sm group-hover:shadow-md transition-all duration-300">
                    <Image
                      src={image || "/images/steps/default.png"}
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain filter group-hover:scale-110 transition-transform duration-300"
                      alt={title}
                    />
                  </div>

                  {/* Enhanced typography */}
                  <h3 className="font-manrope font-bold text-xl text-slate-800 mb-3 leading-tight">{title}</h3>
                  <p className="text-slate-600 text-base leading-relaxed font-medium flex-grow">{description}</p>
                  
                  {/* Enhanced completion indicator */}
                  <div className="mt-8 pt-4">
                    <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center transition-all duration-300 shadow-sm
                      ${index === 3 ? 
                        'bg-gradient-to-br from-emerald-100 to-emerald-200 group-hover:from-emerald-200 group-hover:to-emerald-300' : 
                        'bg-gradient-to-br from-slate-100 to-slate-200 group-hover:from-slate-200 group-hover:to-slate-300'}`
                    }>
                      {index === 3 ? (
                        <CheckCircle className="h-6 w-6 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
                      ) : (
                        <span className="text-lg font-bold text-slate-500 group-hover:text-emerald-600 transition-colors duration-300">→</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"></div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional decorative elements */}
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-emerald-200 rounded-full opacity-60 animate-pulse hidden lg:block"></div>
        <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-emerald-300 rounded-full opacity-40 animate-pulse delay-1000 hidden lg:block"></div>
      </div>
    </div>
  );
}