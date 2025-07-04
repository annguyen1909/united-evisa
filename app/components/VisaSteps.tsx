"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
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
    <div className="w-full  max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-emerald-800">
          4 Easy Steps to Get Your eVisa
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Our streamlined process makes applying for an eVisa quick and hassle-free
        </p>
      </div>

      {/* Timeline Design */}
      <div className="relative">
        {/* Connecting line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-100 hidden md:block"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative">
          {visaTypes.map(({ name, title, description, image }, index) => (
            <motion.div
              key={name}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                {/* Timeline node */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
                  <div className="bg-white p-1 rounded-full">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg
                      ${index === 0 ? 'bg-emerald-600' : 
                        index === 1 ? 'bg-emerald-700' :
                        index === 2 ? 'bg-emerald-800' : 'bg-emerald-900'}`
                    }>
                      {name}
                    </div>
                  </div>
                </div>

                {/* Mobile step indicator */}
                <div className="md:hidden absolute top-0 left-0 bg-emerald-700 text-white font-bold px-3 py-1 text-sm rounded-br-lg">
                  Step {name}
                </div>

                <div className="p-6 pt-8 flex flex-col items-center text-center h-full">
                  <div className="mb-4 w-16 h-16 flex items-center justify-center">
                    <Image
                      src={image || "/images/steps/default.png"}
                      width={80}
                      height={80}
                      className="w-auto h-auto object-contain"
                      alt={title}
                    />
                  </div>

                  <h3 className="font-bold text-lg text-slate-800 mb-2">{title}</h3>
                  <p className="text-slate-600 text-sm">{description}</p>
                  
                  {/* Completed indicator */}
                  <div className="mt-auto pt-4">
                    <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center 
                      ${index === 3 ? 'bg-emerald-100' : 'bg-slate-100'}`
                    }>
                      {index === 3 ? (
                        <CheckCircle className="h-5 w-5 text-emerald-600" />
                      ) : (
                        <span className="text-xs font-semibold text-slate-500">→</span>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}