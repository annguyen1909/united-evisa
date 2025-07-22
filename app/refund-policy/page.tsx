import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | United eVisa Immigration Assistance Service",
  description:
    "Complete refund policy for United eVisa Immigration Assistance Service. Learn about refundable and non-refundable fees, processing times, and our money-back guarantee.",
  keywords:
    "eVisa refund policy, visa refund, money-back guarantee, immigration refund terms, United eVisa refunds",
  alternates: {
    canonical: 'https://visa.worldmaxxing.com/refund-policy',
  },
};

export default function RefundPolicyPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-slate-900 via-emerald-900 to-green-900 text-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-emerald-900/90 to-green-900/90"></div>
            <div className="absolute inset-0">
              <div
                className="absolute inset-0 bg-gradient-to-br from-slate-800/20 via-emerald-800/20 to-green-800/20"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>
            <div className="relative container mx-auto px-4 py-20">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                    <svg
                      className="w-12 h-12 text-emerald-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-100 to-green-200 bg-clip-text text-transparent font-manrope">
                  Refund Policy
                </h1>
                <p className="text-xl md:text-2xl text-emerald-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Transparent and fair refund terms with our money-back
                  guarantee for visa rejections
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-emerald-200 mb-8">
                  <span>Last Updated: {new Date().toLocaleDateString()}</span>
                  <span>•</span>
                  <span>Version 2.0</span>
                  <span>•</span>
                  <span>Money-Back Guarantee</span>
                </div>

                {/* Money-Back Guarantee Banner */}
                <div className="max-w-4xl mx-auto">
                  <div className="bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-2xl p-8 text-left">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-emerald-500/30 rounded-full flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-emerald-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-emerald-100 mb-3">
                          OUR MONEY-BACK GUARANTEE
                        </h3>
                        <p className="text-emerald-100 leading-relaxed">
                          VISA REJECTED? GET A FULL REFUND OF YOUR SERVICE
                          FEES—GUARANTEED. We stand behind our services with a
                          comprehensive refund policy designed to protect your
                          investment and provide peace of mind.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto space-y-8">
                {/* Table of Contents */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-emerald-50 to-green-50 px-8 py-6 border-b border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 flex items-center font-manrope">
                      <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 10h16M4 14h16M4 18h16"
                          />
                        </svg>
                      </div>
                      Quick Navigation
                    </h2>
                  </div>
                  <div className="p-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <a
                          href="#guarantee"
                          className="flex items-center p-3 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-300 group"
                        >
                          <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-emerald-200 transition-colors">
                            <svg
                              className="w-3 h-3 text-emerald-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          Money-Back Guarantee
                        </a>
                        <a
                          href="#refundable"
                          className="flex items-center p-3 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-300 group"
                        >
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-green-200 transition-colors">
                            <svg
                              className="w-3 h-3 text-green-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                              />
                            </svg>
                          </div>
                          Refundable Fees
                        </a>
                        <a
                          href="#non-refundable"
                          className="flex items-center p-3 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-300 group"
                        >
                          <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-red-200 transition-colors">
                            <svg
                              className="w-3 h-3 text-red-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </div>
                          Non-Refundable Fees
                        </a>
                        <a
                          href="#process"
                          className="flex items-center p-3 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-300 group"
                        >
                          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors">
                            <svg
                              className="w-3 h-3 text-blue-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                              />
                            </svg>
                          </div>
                          Refund Process
                        </a>
                      </div>
                      <div className="space-y-3">
                        <a
                          href="#conditions"
                          className="flex items-center p-3 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-300 group"
                        >
                          <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-orange-200 transition-colors">
                            <svg
                              className="w-3 h-3 text-orange-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                              />
                            </svg>
                          </div>
                          Important Conditions
                        </a>
                        <a
                          href="#timeline"
                          className="flex items-center p-3 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-300 group"
                        >
                          <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-purple-200 transition-colors">
                            <svg
                              className="w-3 h-3 text-purple-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          Processing Timeline
                        </a>
                        <a
                          href="#contact"
                          className="flex items-center p-3 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-300 group"
                        >
                          <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-cyan-200 transition-colors">
                            <svg
                              className="w-3 h-3 text-cyan-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          Contact Information
                        </a>
                        <a
                          href="#summary"
                          className="flex items-center p-3 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-300 group"
                        >
                          <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-indigo-200 transition-colors">
                            <svg
                              className="w-3 h-3 text-indigo-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                          </div>
                          Policy Summary
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Policy Sections */}
                <div className="space-y-8">
                  {/* Section 1: Money-Back Guarantee */}
                  <section
                    id="guarantee"
                    className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                  >
                    <div className="bg-gradient-to-r from-emerald-50 to-green-50 px-8 py-6 border-b border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 font-manrope">
                          Our Money-Back Guarantee
                        </h2>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="prose prose-gray max-w-none">
                        <p className="mb-6 text-gray-800 text-lg leading-relaxed">
                          <strong>
                            Visa rejected? Get a full refund of your service
                            fees—guaranteed.
                          </strong>
                          We stand behind our services with a comprehensive
                          refund policy designed to protect your investment and
                          provide peace of mind.
                        </p>

                        <div className="grid lg:grid-cols-2 gap-8 mb-8">
                          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                            <h3 className="text-xl font-semibold text-emerald-700 mb-4 flex items-center">
                              <svg
                                className="w-6 h-6 mr-2 text-emerald-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              Refundable Scenarios
                            </h3>
                            <ul className="space-y-2 text-emerald-800">
                              <li>✓ Service fees if visa is rejected</li>
                              <li>✓ Processing errors on our part</li>
                              <li>✓ Technical issues preventing processing</li>
                              <li>
                                ✓ Change of mind (before processing begins)
                              </li>
                            </ul>
                          </div>

                          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                            <h3 className="text-xl font-semibold text-red-700 mb-4 flex items-center">
                              <svg
                                className="w-6 h-6 mr-2 text-red-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                              Non-Refundable Scenarios
                            </h3>
                            <ul className="space-y-2 text-red-800">
                              <li>✗ Government fees once submitted</li>
                              <li>✗ Approved applications</li>
                              <li>✗ Change of mind after processing begins</li>
                              <li>✗ Incomplete applications</li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-200 rounded-xl p-6">
                          <h4 className="font-semibold text-emerald-900 mb-3 flex items-center">
                            <svg
                              className="w-5 h-5 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                              />
                            </svg>
                            Our Promise to You
                          </h4>
                          <p className="text-emerald-800 text-sm">
                            If your visa is rejected by immigration authorities,
                            we will refund 100% of our service fees—guaranteed.
                            This is our commitment to your success and
                            satisfaction.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 2: Refundable Fees */}
                  <section
                    id="refundable"
                    className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                  >
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-8 py-6 border-b border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                            />
                          </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 font-manrope">
                          Refundable Fees
                        </h2>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="space-y-8">
                        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                          <h3 className="text-xl font-semibold text-green-700 mb-3 flex items-center">
                            <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3">
                              <span className="text-white text-sm font-bold">
                                1
                              </span>
                            </div>
                            Service Fee Refund
                          </h3>
                          <p className="text-gray-800 mb-4 text-lg">
                            <strong>Full refund of service fees</strong> if your
                            eVisa application is declined by immigration
                            authorities.
                          </p>
                          <div className="bg-white border border-green-200 rounded-lg p-4">
                            <p className="text-green-800 text-sm font-medium">
                              <strong>Our Guarantee:</strong> If the government
                              rejects your visa application, we will refund 100%
                              of our service fees, no questions asked.
                            </p>
                          </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-6">
                          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                            <h3 className="text-xl font-semibold text-blue-700 mb-3 flex items-center">
                              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                                <span className="text-white text-sm font-bold">
                                  2
                                </span>
                              </div>
                              Processing Errors
                            </h3>
                            <p className="text-gray-800 mb-3">
                              Full refund if the error is due to our processing
                              mistake or system failure.
                            </p>
                            <ul className="space-y-2 text-gray-700 text-sm">
                              <li className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                Incorrect data entry on our part
                              </li>
                              <li className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                System errors preventing application submission
                              </li>
                              <li className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                Technical failures during processing
                              </li>
                              <li className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                Delays caused by our operational issues
                              </li>
                            </ul>
                          </div>

                          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                            <h3 className="text-xl font-semibold text-purple-700 mb-3 flex items-center">
                              <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                                <span className="text-white text-sm font-bold">
                                  3
                                </span>
                              </div>
                              Technical Issues
                            </h3>
                            <p className="text-gray-800 mb-3">
                              Refund if we cannot process your application due
                              to technical problems on our end.
                            </p>
                            <ul className="space-y-2 text-gray-700 text-sm">
                              <li className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                                Website or system downtime
                              </li>
                              <li className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                                Payment processing failures
                              </li>
                              <li className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                                Email delivery issues
                              </li>
                              <li className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                                Document upload problems
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* Section 3: Non-Refundable Fees */}
                  <section
                    id="non-refundable"
                    className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                  >
                    <div className="bg-gradient-to-r from-red-50 to-orange-50 px-8 py-6 border-b border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 font-manrope">
                          Non-Refundable Fees
                        </h2>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="space-y-8">
                        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                          <h3 className="text-xl font-semibold text-red-700 mb-3 flex items-center">
                            <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mr-3">
                              <span className="text-white text-sm font-bold">
                                1
                              </span>
                            </div>
                            Government Fees
                          </h3>
                          <p className="text-gray-800 mb-4">
                            <strong>Government fees are non-refundable</strong>{" "}
                            once submitted to authorities, regardless of the
                            outcome.
                          </p>
                          <div className="bg-white border border-red-200 rounded-lg p-4">
                            <p className="text-red-800 text-sm font-medium">
                              <strong>Important:</strong> Government fees are
                              paid directly to the government and are outside
                              our control. These fees cannot be refunded by us.
                            </p>
                          </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8">
                          <div>
                            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
                              <h3 className="text-xl font-semibold text-orange-700 mb-3 flex items-center">
                                <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mr-3">
                                  <span className="text-white text-sm font-bold">
                                    2
                                  </span>
                                </div>
                                Approved Applications
                              </h3>
                              <p className="text-gray-800 mb-3">
                                No refund once the approval letter is sent,
                                regardless of whether you use the visa or not.
                              </p>
                              <ul className="space-y-2 text-gray-700 text-sm">
                                <li className="flex items-center">
                                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                                  Visa approved but not used
                                </li>
                                <li className="flex items-center">
                                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                                  Change of travel plans after approval
                                </li>
                                <li className="flex items-center">
                                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                                  Personal circumstances preventing travel
                                </li>
                                <li className="flex items-center">
                                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                                  Flight cancellations or travel disruptions
                                </li>
                              </ul>
                            </div>

                            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                              <h3 className="text-xl font-semibold text-yellow-700 mb-3 flex items-center">
                                <div className="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center mr-3">
                                  <span className="text-white text-sm font-bold">
                                    4
                                  </span>
                                </div>
                                Incomplete Applications
                              </h3>
                              <p className="text-gray-800 mb-3">
                                <strong>Critical:</strong> No refund if you fail
                                to provide required documents within 3 days.
                              </p>
                              <div className="bg-white border border-yellow-200 rounded-lg p-3">
                                <p className="text-yellow-800 text-sm font-medium">
                                  <strong>3-Day Rule:</strong> All required
                                  documents must be provided within 3 days of
                                  application submission.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div>
                            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 mb-6">
                              <h3 className="text-xl font-semibold text-indigo-700 mb-3 flex items-center">
                                <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center mr-3">
                                  <span className="text-white text-sm font-bold">
                                    3
                                  </span>
                                </div>
                                Change of Mind After Processing
                              </h3>
                              <p className="text-gray-800 mb-3">
                                <strong>Before Processing:</strong> Refunds
                                available if requested before we begin
                                processing.
                              </p>
                              <p className="text-gray-800 mb-3">
                                <strong>After Processing Begins:</strong> No
                                refund for change of mind after processing
                                starts.
                              </p>
                              <div className="bg-white border border-indigo-200 rounded-lg p-3 mb-3">
                                <p className="text-indigo-800 text-sm">
                                  <strong>Processing Start:</strong> Begins
                                  immediately after payment confirmation.
                                </p>
                              </div>
                              <ul className="space-y-2 text-gray-700 text-sm">
                                <li className="flex items-center">
                                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                                  Deciding not to travel after processing begins
                                </li>
                                <li className="flex items-center">
                                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                                  Choosing different travel date
                                </li>
                                <li className="flex items-center">
                                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                                  Selecting different visa type
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 4: Refund Process */}
                  <section
                    id="process"
                    className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                  >
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 px-8 py-6 border-b border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                            />
                          </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 font-manrope">
                          Refund Process
                        </h2>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="grid lg:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                              <span className="text-white text-sm font-bold">
                                1
                              </span>
                            </div>
                            How to Request
                          </h3>
                          <div className="space-y-4">
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                              <h4 className="font-semibold text-blue-900 mb-2">
                                Submit in Writing
                              </h4>
                              <p className="text-blue-800 text-sm">
                                All refund requests must be submitted via email
                              </p>
                            </div>
                            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                              <h4 className="font-semibold text-purple-900 mb-2">
                                Include Details
                              </h4>
                              <p className="text-purple-800 text-sm">
                                Provide application reference number and reason
                              </p>
                            </div>
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                              <h4 className="font-semibold text-green-900 mb-2">
                                Supporting Documents
                              </h4>
                              <p className="text-green-800 text-sm">
                                Include relevant documentation (rejection
                                letter, etc.)
                              </p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                            <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3">
                              <span className="text-white text-sm font-bold">
                                2
                              </span>
                            </div>
                            Processing Timeline
                          </h3>
                          <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-xl p-6">
                            <div className="flex items-center mb-4">
                              <svg
                                className="w-8 h-8 text-emerald-600 mr-3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <div>
                                <h4 className="font-bold text-emerald-900">
                                  Refund Processing Time
                                </h4>
                                <p className="text-emerald-800 text-sm">
                                  5-10 business days from approval
                                </p>
                              </div>
                            </div>
                            <ul className="space-y-2 text-emerald-700 text-sm">
                              <li className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
                                Original payment method
                              </li>
                              <li className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
                                Bank processing may add extra time
                              </li>
                              <li className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
                                Currency conversion fees may apply
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 5: Important Conditions */}
                  <section
                    id="conditions"
                    className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                  >
                    <div className="bg-gradient-to-r from-orange-50 to-red-50 px-8 py-6 border-b border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                          </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 font-manrope">
                          Important Conditions
                        </h2>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="space-y-6">
                        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                          <h3 className="text-xl font-semibold text-red-800 mb-4 flex items-center">
                            <svg
                              className="w-5 h-5 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            Critical Time Limits
                          </h3>
                          <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-white border border-red-200 rounded-lg p-4">
                              <h4 className="font-bold text-red-700 text-sm mb-1">
                                3-Day Document Rule
                              </h4>
                              <p className="text-red-600 text-xs">
                                Documents must be provided within 3 days
                              </p>
                            </div>
                            <div className="bg-white border border-red-200 rounded-lg p-4">
                              <h4 className="font-bold text-red-700 text-sm mb-1">
                                Notification Period
                              </h4>
                              <p className="text-red-600 text-xs">
                                Notify us within 3 days if no approval letter
                              </p>
                            </div>
                            <div className="bg-white border border-red-200 rounded-lg p-4">
                              <h4 className="font-bold text-red-700 text-sm mb-1">
                                Refund Requests
                              </h4>
                              <p className="text-red-600 text-xs">
                                Must be submitted within 30 days
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-6">
                          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                              Exclusions
                            </h3>
                            <ul className="space-y-2 text-gray-700 text-sm">
                              <li className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2"></span>
                                Travel arrangements or accommodation
                              </li>
                              <li className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2"></span>
                                Third-party service fees
                              </li>
                              <li className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2"></span>
                                Bank fees or currency conversion
                              </li>
                            </ul>
                          </div>

                          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-blue-900 mb-3">
                              Our Limitations
                            </h3>
                            <ul className="space-y-2 text-blue-700 text-sm">
                              <li className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                Not responsible for immigration decisions
                              </li>
                              <li className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                Cannot expedite government processing
                              </li>
                              <li className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                Liability limited to service fees paid
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 6: Contact Information */}
                  <section
                    id="contact"
                    className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                  >
                    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 px-8 py-6 border-b border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 font-manrope">
                          Contact Information
                        </h2>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-xl p-6">
                          <h3 className="text-lg font-semibold text-emerald-900 mb-3 flex items-center">
                            <svg
                              className="w-5 h-5 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                              />
                            </svg>
                            Refund Requests
                          </h3>
                          <p className="text-emerald-700 font-medium mb-2">
                            visa@unitedevisa.com
                          </p>
                          <p className="text-sm text-emerald-600">
                            For all refund inquiries and requests
                          </p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6">
                          <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                            <svg
                              className="w-5 h-5 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            General Support
                          </h3>
                          <p className="text-blue-700 font-medium mb-2">
                            visa@unitedevisa.com
                          </p>
                          <p className="text-sm text-blue-600">
                            For general questions and assistance
                          </p>
                        </div>
                      </div>
                      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                        <div className="flex items-center mb-3">
                          <svg
                            className="w-5 h-5 text-gray-600 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <h4 className="font-semibold text-gray-900">
                            Response Time
                          </h4>
                        </div>
                        <p className="text-sm text-gray-700">
                          We aim to respond to all refund inquiries within 24-48
                          hours during business days.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Section 7: Policy Summary */}
                  <section
                    id="summary"
                    className="bg-gradient-to-br from-emerald-50 via-green-50 to-blue-50 border border-emerald-200 rounded-2xl p-8"
                  >
                    <div className="text-center">
                      <div className="flex justify-center mb-6">
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-emerald-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-6 font-manrope">
                        Summary of Our Refund Policy
                      </h3>
                      <div className="grid lg:grid-cols-2 gap-8 text-left mb-8">
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-emerald-100">
                          <h4 className="font-bold text-emerald-700 mb-4 flex items-center text-lg">
                            <svg
                              className="w-6 h-6 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            ✅ You Get a Refund When:
                          </h4>
                          <ul className="space-y-2 text-gray-700">
                            <li className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></span>
                              Immigration authorities reject your visa
                            </li>
                            <li className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></span>
                              We make a processing error
                            </li>
                            <li className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></span>
                              Technical issues prevent processing
                            </li>
                            <li className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></span>
                              You change your mind (before processing begins)
                            </li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-red-100">
                          <h4 className="font-bold text-red-700 mb-4 flex items-center text-lg">
                            <svg
                              className="w-6 h-6 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                            ❌ No Refund When:
                          </h4>
                          <ul className="space-y-2 text-gray-700">
                            <li className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></span>
                              Government fees (once submitted)
                            </li>
                            <li className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></span>
                              Visa is approved
                            </li>
                            <li className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></span>
                              You change your mind after processing begins
                            </li>
                            <li className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></span>
                              Documents not provided within 3 days
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-6 shadow-lg border border-emerald-200">
                        <p className="text-gray-800 font-bold text-lg">
                          Our Promise: If your visa is rejected by immigration
                          authorities, we will refund 100% of our service
                          fees—guaranteed.
                        </p>
                      </div>
                      <div className="flex items-center justify-center space-x-4 text-emerald-700 text-sm mt-6">
                        <a
                          href="/legal"
                          className="hover:underline font-medium"
                        >
                          Terms of Service
                        </a>
                        <span>•</span>
                        <a
                          href="/privacy"
                          className="hover:underline font-medium"
                        >
                          Privacy Policy
                        </a>
                        <span>•</span>
                        <a
                          href="/cookie-policy"
                          className="hover:underline font-medium"
                        >
                          Cookie Policy
                        </a>
                      </div>
                      <p className="text-emerald-600 text-sm mt-4 font-medium">
                        Last updated: {new Date().toLocaleDateString()} |
                        Version 2.0 | Money-Back Guarantee Policy
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
