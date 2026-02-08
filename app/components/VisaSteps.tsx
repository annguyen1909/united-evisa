"use client";

import { motion } from "framer-motion";
import { MapPin, FileCheck, UploadCloud, MailCheck } from "lucide-react";

const steps = [
  {
    title: "Choose your destination",
    description: "Select the country and visa type that matches your travel plan.",
    icon: MapPin,
  },
  {
    title: "Complete the application",
    description: "Fill in your details and get a quick review before you submit.",
    icon: FileCheck,
  },
  {
    title: "Upload documents",
    description: "Send your passport and supporting files securely in one place.",
    icon: UploadCloud,
  },
  {
    title: "Receive your eVisa",
    description: "We email your approved eVisa with clear next‑step instructions.",
    icon: MailCheck,
  },
];

export default function VisaSteps() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-center">
        <div>
          <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            Simple, guided flow
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-slate-900">
            Your eVisa journey in four clear steps
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Built for travelers who want speed and clarity — with support available when you need it.
          </p>
          <div className="mt-6 grid gap-3 text-sm text-slate-600">
            <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
              Transparent service fees, no hidden charges.
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
              Real‑time updates from submission to approval.
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
              Optional document review to reduce mistakes.
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-6 bottom-6 w-px bg-blue-100" />
          <div className="grid gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative rounded-3xl border border-blue-100 bg-gradient-to-r from-white to-blue-50/40 p-5 pl-16 shadow-sm"
                >
                  <div className="absolute left-3 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-md">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}