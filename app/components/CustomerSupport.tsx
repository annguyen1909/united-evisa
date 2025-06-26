"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

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
    <section className="w-full max-w-6xl mx-auto py-8 px-2 sm:px-6 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 bg-gradient-to-r from-[#FED16A]/50 to-[#FFF085]/50">
      {/* Left: Main Info + Contact Methods */}
      <div className="flex flex-col justify-center h-full gap-6">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#CB6601] font-bold text-2xl sm:text-3xl">
              24/7
            </span>
            <span className="text-[#16610E] text-2xl sm:text-3xl font-bold">
              Customer Support
            </span>
            <Image
              src="/images/logo.png"
              alt="Customer Support"
              width={48}
              height={48}
              className="w-10 h-10"
            />
          </div>
          <p className="text-[#16610E] text-base sm:text-lg font-medium mb-6 max-w-xl">
            Need help? Our visa experts are available 24/7. Fast, friendly, and
            expert support — anytime, anywhere. Reach out via call, live chat,
            or email, or use the quick contact form.
          </p>
          <ul className="list-disc pl-5 text-gray-700 text-sm space-y-2">
            <li>Multilingual support for 40+ countries</li>
            <li>Average response time: under 1 hour</li>
            <li>No extra fee for customer support</li>
          </ul>
        </div>
        {/* Contact Methods Card moved here */}
        <div className="shadow-lg border border-border bg-white/90 backdrop-blur-md rounded-xl p-5 space-y-4 max-w-xl">
          <div className="grid grid-cols-3 gap-3">
            {/* Call */}
            <div className="flex items-center gap-3">
              <Image
                src="/images/support/call-us.png"
                alt="Call Support"
                width={36}
                height={36}
                className="w-9 h-9"
              />
              <div>
                <div className="font-semibold text-[#16610E]">Call Us</div>
                <div className="text-xs text-gray-600">24/7 by phone</div>
              </div>
            </div>
            {/* Live Chat */}
            <div className="flex items-center gap-3">
              <Image
                src="/images/support/live-chat.png"
                alt="Live Chat"
                width={36}
                height={36}
                className="w-9 h-9"
              />
              <div>
                <div className="font-semibold text-[#16610E]">Live Chat</div>
                <div className="text-xs text-gray-600">24/7 instant chat</div>
              </div>
            </div>
            {/* Email */}
            <div className="flex items-center gap-3">
              <Image
                src="/images/support/email.png"
                alt="Email Support"
                width={36}
                height={36}
                className="w-9 h-9"
              />
              <div>
                <div className="font-semibold text-[#16610E]">Email Us</div>
                <div className="text-xs text-gray-600">24/7 by email</div>
              </div>
            </div>
          </div>
          <div className="justify-center items-center text-center">
            <Button className="w-1/3 mt-2 bg-[#16610E] hover:bg-[#16610E]/80 text-white text-sm">
              Contact Support
            </Button>
          </div>
        </div>
      </div>

      {/* Right: Sidebar Card */}
      <aside className="flex flex-col gap-6">
        {/* Quick Contact Form */}
        <div className="shadow-lg border border-border bg-white/90 backdrop-blur-md rounded-xl p-5">
          <h3 className="text-[#16610E] font-bold text-base mb-2">
            Quick Contact
          </h3>
          {submitted ? (
            <p className="text-green-700 font-semibold text-sm">
              Thank you! We have received your message.
            </p>
          ) : (
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="border border-gray-300 rounded px-2 py-1 text-sm"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="border border-gray-300 rounded px-2 py-1 text-sm"
                required
              />
              <textarea
                name="message"
                placeholder="How can we help you?"
                value={form.message}
                onChange={handleChange}
                className="border border-gray-300 rounded px-2 py-1 text-sm"
                rows={2}
                required
              />
              <Button
                type="submit"
                className="bg-[#16610E] hover:bg-[#16610E]/80 text-white text-xs w-full"
              >
                Send Message
              </Button>
            </form>
          )}
        </div>

        {/* Mini FAQ */}
        <div className="shadow-lg border border-border bg-white/90 backdrop-blur-md rounded-xl p-5">
          <h3 className="text-[#16610E] font-bold text-base mb-2">
            Frequently Asked Questions
          </h3>
          <ul className="space-y-1 text-gray-700 text-xs">
            <li>
              <strong>How fast will I get a response?</strong>
              <br />
              Our team replies within a few hours, 24/7.
            </li>
            <li>
              <strong>Can I get support in my language?</strong>
              <br />
              Yes, we offer multilingual support for most countries.
            </li>
            <li>
              <strong>Is there a fee for support?</strong>
              <br />
              No, all customer support is free of charge.
            </li>
          </ul>
        </div>
      </aside>
    </section>
  );
}
