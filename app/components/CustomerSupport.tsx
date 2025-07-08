"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { PhoneCall, MessageSquare, Mail, Shield, Clock, Globe } from "lucide-react";

export default function CustomerSupport() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to your backend or service
  }

  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-4 sm:px-8 rounded-2xl shadow-lg bg-gradient-to-r from-emerald-50 to-amber-50 border border-amber-100/50">
      <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-10">
        {/* Left: Main Content */}
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="mr-4">
                <span className="bg-amber-500 text-white font-bold text-lg px-3 py-1 rounded-lg shadow-sm">24/7</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-emerald-800">
                Customer Support Center
              </h2>
            </div>

            <p className="text-slate-700 text-lg max-w-2xl">
              Our visa experts are ready to assist you <span className="font-semibold text-emerald-700">anytime, anywhere</span>.
              Get fast, personalized support through multiple channels - all designed to make your visa application process smooth and stress-free.
            </p>

            <div className="flex flex-wrap gap-x-8 gap-y-3">
              <div className="flex items-center gap-2 text-slate-700">
                <Globe className="h-5 w-5 text-emerald-600" />
                <span>Support in 40+ languages</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Clock className="h-5 w-5 text-emerald-600" />
                <span>Response in <strong>under 1 hour</strong></span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Shield className="h-5 w-5 text-emerald-600" />
                <span>No additional support fees</span>
              </div>
            </div>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 transition-all duration-300 hover:shadow-md hover:border-emerald-200 flex flex-col">
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-emerald-100 p-3 rounded-full mr-3">
                    <PhoneCall className="h-5 w-5 text-emerald-700" />
                  </div>
                  <h3 className="font-semibold text-slate-800">Call Support</h3>
                </div>
                <p className="text-sm text-slate-600 mb-3">
                  Speak directly with a visa expert for immediate assistance.
                </p>
              </div>
              <div className="mt-auto flex flex-col gap-2 items-center">
                <span className="text-xs text-slate-500">Available 24/7</span>
                <Button variant="outline" size="sm" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50">
                  +1 800 123 4567
                </Button>
              </div>
            </div>

            {/* Live Chat Option */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 transition-all duration-300 hover:shadow-md hover:border-emerald-200 flex flex-col">
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-3">
                    <MessageSquare className="h-5 w-5 text-blue-700" />
                  </div>
                  <h3 className="font-semibold text-slate-800">Live Chat</h3>
                </div>
                <p className="text-sm text-slate-600 mb-3">
                  Connect instantly with our support team through live chat.
                </p>
              </div>
              <div className="mt-auto flex flex-col gap-2 items-center">
                <span className="text-xs text-slate-500">Response in minutes</span>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Start Chat
                </Button>
              </div>
            </div>

            {/* Email Option */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 transition-all duration-300 hover:shadow-md hover:border-emerald-200 flex flex-col">
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-amber-100 p-3 rounded-full mr-3">
                    <Mail className="h-5 w-5 text-amber-700" />
                  </div>
                  <h3 className="font-semibold text-slate-800">Email Support</h3>
                </div>
                <p className="text-sm text-slate-600 mb-3">
                  Send detailed inquiries for thorough assistance.
                </p>
              </div>
              <div className="mt-auto flex flex-col gap-2 items-center">
                <span className="text-xs text-slate-500">Reply within 1 hour</span>
                <Button variant="outline" size="sm" className="border-amber-200 text-amber-700 hover:bg-amber-50">
                  support@evisa.com
                </Button>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="bg-white/70 rounded-xl p-5 border border-slate-200">
            <h3 className="text-slate-800 font-medium mb-3 flex items-center">
              <span className="text-amber-500 mr-2">★★★★★</span>
              Customer Satisfaction
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-sm text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                "Incredible service! They helped me get my visa in record time when I had an urgent trip."
                <div className="mt-1 text-xs text-slate-500">- Sarah M., United States</div>
              </div>
              <div className="text-sm text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                "The support team answered all my questions promptly. Very professional and helpful."
                <div className="mt-1 text-xs text-slate-500">- Ahmed K., UAE</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form & FAQ */}
        <div className="flex flex-col gap-6">
          {/* Quick Contact Form */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="font-bold text-lg text-emerald-700 mb-4 flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Quick Contact
            </h3>

            {submitted ? (
              <div className="bg-emerald-50 text-emerald-700 p-4 rounded-lg border border-emerald-100 text-center">
                <svg className="mx-auto h-12 w-12 text-emerald-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="font-medium">Thank you for your message!</p>
                <p className="text-sm mt-1">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="text-xs font-medium text-slate-600 mb-1 block">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-slate-300 rounded-md p-2.5 text-sm focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-xs font-medium text-slate-600 mb-1 block">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-slate-300 rounded-md p-2.5 text-sm focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-xs font-medium text-slate-600 mb-1 block">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border border-slate-300 rounded-md p-2.5 text-sm focus:ring-emerald-500 focus:border-emerald-500"
                    rows={3}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 rounded-md transition-colors"
                >
                  Send Message
                </Button>
              </form>
            )}
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="font-bold text-lg text-emerald-700 mb-4">
              Frequently Asked Questions
            </h3>

            <div className="space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <h4 className="font-semibold text-slate-800 mb-1">How fast will I get a response?</h4>
                <p className="text-sm text-slate-600">
                  Our team responds within 1 hour for most inquiries, 24/7, 365 days a year.
                </p>
              </div>

              <div className="border-b border-slate-100 pb-3">
                <h4 className="font-semibold text-slate-800 mb-1">Can I get support in my language?</h4>
                <p className="text-sm text-slate-600">
                  Yes, we offer multilingual support for 40+ languages covering most countries.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-800 mb-1">Is there a fee for customer support?</h4>
                <p className="text-sm text-slate-600">
                  No, all customer support is completely free of charge for all our users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}