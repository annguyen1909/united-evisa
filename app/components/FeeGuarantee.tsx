"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { DollarSign, CheckCircle, AlertCircle, Shield } from "lucide-react";
import Link from "next/link";

export default function FeeGuarantee() {
  return (
    <section className="w-full bg-gradient-to-br from-emerald-50 to-slate-50 py-16 px-4 sm:px-6 rounded-xl overflow-hidden relative">
      <div className="max-w-6xl mx-auto">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <DollarSign className="w-64 h-64 text-emerald-800" strokeWidth={0.4} />
        </div>
        
        {/* Header */}
        <div className="text-center relative mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-800 mb-3">
            No rush fees. No hidden costs.
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-500 to-emerald-600 mx-auto mb-6 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-center text-emerald-700 text-lg mb-0 leading-relaxed">
            Just one flat service fee of <span className="font-bold text-xl">$49.99 per passenger</span>
          </p>
        </div>

        {/* Cards and Symbols */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-6 md:gap-3 text-center mb-16">
          {/* Card 1 */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 h-full border border-slate-100"
          >
            <div className="bg-emerald-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5">
              <span className="text-xl font-bold text-emerald-700">1</span>
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-3">Government Application Fees</h3>
            <div className="h-1 w-12 bg-emerald-200 mx-auto mb-4 rounded-full"></div>
            <p className="text-slate-600 mb-6">
              This fee covers the cost of your eVisa application, as required by the government of your chosen destination.
            </p>
            <Link href="/destination">
              <Button className="w-full bg-emerald-700 hover:bg-emerald-800 text-white">
                Check Visa Fees
              </Button>
            </Link>
          </motion.div>

          {/* "+" Symbol */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-2xl font-bold text-emerald-700">+</div>
          </div>

          {/* Card 2 */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 h-full border border-slate-100"
          >
            <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5">
              <span className="text-xl font-bold text-blue-700">2</span>
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-3">Our Service Fees</h3>
            <div className="h-1 w-12 bg-blue-200 mx-auto mb-4 rounded-full"></div>
            <p className="text-slate-600 mb-6">
              Enjoy 24/7 support, an 80% approval rate, and full eVisa assistance — all for one flat, transparent fee.
            </p>
            <Button variant="outline" className="w-full border-blue-200 text-blue-700 hover:bg-blue-50">
              $49.99 per passenger
            </Button>
          </motion.div>

          {/* "=" Symbol */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-2xl font-bold text-amber-700">=</div>
          </div>

          {/* Card 3 */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 h-full border border-amber-100"
          >
            <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5">
              <span className="text-xl font-bold text-amber-700">$</span>
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-3">Total Balance</h3>
            <div className="h-1 w-12 bg-amber-200 mx-auto mb-4 rounded-full"></div>
            <p className="text-slate-600 mb-6">
              Flat-rate pricing with zero hidden fees — no extra charges for urgency, transparency you can count on.
            </p>
            <Link href="/apply">
              <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                Apply Now
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Guarantee Banner */}
        <div className="bg-white rounded-xl shadow-md p-8 text-center relative overflow-hidden border border-emerald-100">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-amber-500"></div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center mb-6 gap-4">
            <div className="bg-emerald-100 p-3 rounded-full">
              <Shield className="h-8 w-8 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                Rejected? No worries — you get your service fee back.
              </h2>
            </div>
          </div>
          
          <h2 className="text-3xl font-extrabold text-emerald-700 mb-6">
            Guaranteed!
          </h2>
          
          <div className="flex flex-wrap gap-6 justify-center mb-6">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-emerald-600" />
              <span className="text-slate-700">100% Satisfaction Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-emerald-600" />
              <span className="text-slate-700">No Questions Asked</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-emerald-600" />
              <span className="text-slate-700">Quick Refund Process</span>
            </div>
          </div>
          
          <Link href="/refund-policy">
            <Button variant="outline" className="border-amber-200 text-amber-700 hover:bg-amber-50">
              Read our full refund policy
              <AlertCircle className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}