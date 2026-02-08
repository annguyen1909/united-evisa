"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { DollarSign, CheckCircle, AlertCircle, Shield } from "lucide-react";
import Link from "next/link";

export default function FeeGuarantee() {
  return (
    <section className="w-full bg-gradient-to-b from-white via-blue-50/50 to-white py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start">
        <div>
          <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            Transparent pricing
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-slate-900">
            One simple service fee, no hidden add‑ons.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            You only pay for what you need. Government fees vary by destination; our service fee is flat.
          </p>
          <div className="mt-6 rounded-3xl border border-blue-100 bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">United Evisa service fee</div>
            <div className="text-3xl font-semibold text-blue-700 mt-1">$59.99</div>
            <div className="text-sm text-slate-500">per traveler</div>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <Link href="/pricing">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">
                  View pricing details
                </Button>
              </Link>
              <Link href="/apply">
                <Button variant="outline" className="border-blue-200 text-blue-700 rounded-full">
                  Start application
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Government fees",
              description: "Official processing fees charged by the destination government.",
              badge: "Paid to government",
              accent: "amber",
            },
            {
              title: "United Evisa fee",
              description: "Document review, updates, and customer support included.",
              badge: "$59.99 flat fee",
              accent: "blue",
            },
            {
              title: "Total clarity",
              description: "No rush fees, no hidden charges — always transparent.",
              badge: "No surprises",
              accent: "blue",
            },
            {
              title: "Fast processing",
              description: "Typical processing in 3 working days after document submission.",
              badge: "Quick turnaround",
              accent: "blue",
            },
          ].map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm"
            >
              <div
                className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                  card.accent === "amber"
                    ? "bg-amber-100 text-amber-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {card.badge}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{card.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12">
        <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Shield className="h-7 w-7 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-900">
                  Rejected? We refund the service fee.
                </h3>
                <p className="text-sm text-slate-600 mt-2">
                  Your satisfaction is guaranteed. Quick, no‑hassle refund for service fees.
                </p>
              </div>
            </div>
            <Link href="/refund-policy">
              <Button variant="outline" className="border-amber-200 text-amber-700 hover:bg-amber-50 rounded-full">
                Read refund policy
                <AlertCircle className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600">
            <span className="inline-flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-blue-600" />
              100% satisfaction guarantee
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-blue-600" />
              No questions asked
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-blue-600" />
              Quick refund process
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
