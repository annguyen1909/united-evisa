import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Worldmaxxing Global Services Immigration Assistance Service',
  description:
    'Learn how we collect, use, and protect your personal information when you use our Worldmaxxing Global Services Immigration Assistance Service.',
  alternates: {
    canonical: 'https://visa.worldmaxxing.com/privacy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50">
        <main className="flex-1">
          {/* Enhanced Header Section */}
          <section className="relative bg-gradient-to-r from-green-600 via-emerald-600 to-teal-700 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-black bg-opacity-10"></div>
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0 bg-white bg-opacity-5" style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
                backgroundSize: '20px 20px'
              }}></div>
            </div>
            
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
              <div className="text-center">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-black/30 bg-opacity-20 rounded-full mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                  Privacy
                  <span className="block text-green-200">Policy</span>
                </h1>
                
                <p className="text-lg sm:text-xl text-green-100 mb-6 max-w-3xl mx-auto leading-relaxed">
                  Learn how we collect, use, and protect your personal information with transparency and security
                </p>
                
                <div className="inline-flex items-center px-4 py-2 bg-black/30 bg-opacity-20 rounded-full text-green-100 text-sm font-medium">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Last updated: {new Date().toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Main Content with Modern Layout */}
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="space-y-12">
              
              {/* Section 1: Introduction */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-8 py-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
                  </div>
                </div>
                <div className="p-8">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Worldmaxxing Global Services Immigration Assistance Service ("we," "us," or "our") is
                      committed to protecting your privacy and ensuring the security of your personal
                      information. This Privacy Policy explains how we collect, use, disclose, and
                      safeguard your information when you visit our website at worldmaxxing.com
                      and use our Worldmaxxing Global Services Immigration Assistance.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      By using our services, you consent to the collection and use of your information
                      as described in this Privacy Policy. If you do not agree with our policies and
                      practices, please do not use our services.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 2: Information We Collect */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 px-8 py-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
                  </div>
                </div>
                <div className="p-8">
                  <div className="space-y-8">
                    
                    {/* Personal Information */}
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        2.1 Personal Information
                      </h3>
                      <p className="text-gray-700 mb-4">
                        We collect personal information that you provide directly to us, including:
                      </p>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="bg-blue-50 rounded-lg p-4">
                          <h4 className="font-semibold text-blue-900 mb-2">Identification Information</h4>
                          <p className="text-sm text-blue-800">Full name, date of birth, nationality, passport details</p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-4">
                          <h4 className="font-semibold text-green-900 mb-2">Contact Information</h4>
                          <p className="text-sm text-green-800">Email address, phone number, mailing address</p>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-4">
                          <h4 className="font-semibold text-purple-900 mb-2">Travel Information</h4>
                          <p className="text-sm text-purple-800">Travel dates, purpose of visit, accommodation details</p>
                        </div>
                        <div className="bg-orange-50 rounded-lg p-4">
                          <h4 className="font-semibold text-orange-900 mb-2">Payment Information</h4>
                          <p className="text-sm text-orange-800">Credit card details, billing address (securely processed)</p>
                        </div>
                      </div>
                    </div>

                    {/* Automatically Collected Information */}
                    <div className="border-l-4 border-cyan-500 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <svg className="w-6 h-6 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        2.2 Automatically Collected Information
                      </h3>
                      <p className="text-gray-700 mb-4">
                        When you visit our website, we automatically collect certain information:
                      </p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                          <span className="text-gray-700"><strong>Device Information:</strong> IP address, browser type, operating system</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                          <span className="text-gray-700"><strong>Usage Information:</strong> Pages visited, time spent, click patterns</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                          <span className="text-gray-700"><strong>Location Information:</strong> Country/region based on IP address</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                          <span className="text-gray-700"><strong>Technical Information:</strong> Cookies, web beacons, analytics data</span>
                        </div>
                      </div>
                    </div>

                    {/* Third Party Information */}
                    <div className="border-l-4 border-emerald-500 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <svg className="w-6 h-6 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        2.3 Information from Third Parties
                      </h3>
                      <p className="text-gray-700 mb-4">
                        We may receive information from third parties, including:
                      </p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                          <span className="text-gray-700">Payment processors for transaction verification</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                          <span className="text-gray-700">Government authorities for visa processing</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                          <span className="text-gray-700">Analytics providers for website usage data</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                          <span className="text-gray-700">Social media platforms (if connected)</span>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>

              {/* Section 3: How We Use Information */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 px-8 py-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-700 mb-6">
                    We use the information we collect for the following purposes:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                      <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                        <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Service Provision
                      </h4>
                      <ul className="text-sm text-blue-800 space-y-2">
                        <li className="flex items-center space-x-2">
                          <span className="w-1 h-1 bg-blue-600 rounded-full"></span>
                          <span>Process visa applications</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-1 h-1 bg-blue-600 rounded-full"></span>
                          <span>Verify identity and documents</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-1 h-1 bg-blue-600 rounded-full"></span>
                          <span>Process payments</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-1 h-1 bg-blue-600 rounded-full"></span>
                          <span>Send confirmation emails</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                      <h4 className="font-semibold text-green-900 mb-3 flex items-center">
                        <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Customer Support
                      </h4>
                      <ul className="text-sm text-green-800 space-y-2">
                        <li className="flex items-center space-x-2">
                          <span className="w-1 h-1 bg-green-600 rounded-full"></span>
                          <span>Respond to inquiries</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-1 h-1 bg-green-600 rounded-full"></span>
                          <span>Provide technical support</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-1 h-1 bg-green-600 rounded-full"></span>
                          <span>Resolve issues</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-1 h-1 bg-green-600 rounded-full"></span>
                          <span>Send updates</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-yellow-50 to-amber-100 rounded-xl p-6 border border-yellow-200">
                      <h4 className="font-semibold text-yellow-900 mb-3 flex items-center">
                        <svg className="w-5 h-5 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        Website Improvement
                      </h4>
                      <ul className="text-sm text-yellow-800 space-y-2">
                        <li className="flex items-center space-x-2">
                          <span className="w-1 h-1 bg-yellow-600 rounded-full"></span>
                          <span>Analyze usage patterns</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-1 h-1 bg-yellow-600 rounded-full"></span>
                          <span>Improve user experience</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-1 h-1 bg-yellow-600 rounded-full"></span>
                          <span>Fix technical issues</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-1 h-1 bg-yellow-600 rounded-full"></span>
                          <span>Optimize performance</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                      <h4 className="font-semibold text-purple-900 mb-3 flex items-center">
                        <svg className="w-5 h-5 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>
                        Legal Compliance
                      </h4>
                      <ul className="text-sm text-purple-800 space-y-2">
                        <li className="flex items-center space-x-2">
                          <span className="w-1 h-1 bg-purple-600 rounded-full"></span>
                          <span>Comply with laws</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-1 h-1 bg-purple-600 rounded-full"></span>
                          <span>Prevent fraud</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-1 h-1 bg-purple-600 rounded-full"></span>
                          <span>Protect rights</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-1 h-1 bg-purple-600 rounded-full"></span>
                          <span>Maintain security</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Sections in Compact Layout */}
              <div className="grid lg:grid-cols-2 gap-8">
                
                {/* Legal Basis */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Legal Basis for Processing</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="font-medium text-gray-900">Contract Performance:</span>
                        <span className="text-gray-700"> To provide requested services</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="font-medium text-gray-900">Legitimate Interest:</span>
                        <span className="text-gray-700"> To improve services and prevent fraud</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="font-medium text-gray-900">Legal Obligation:</span>
                        <span className="text-gray-700"> To comply with laws and regulations</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="font-medium text-gray-900">Consent:</span>
                        <span className="text-gray-700"> For marketing and non-essential cookies</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Data Security */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">5</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Data Security</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-900 mb-2">Technical Measures</h4>
                      <ul className="text-sm text-green-800 space-y-1">
                        <li>• SSL/TLS encryption</li>
                        <li>• Secure data centers</li>
                        <li>• Regular security updates</li>
                        <li>• Access controls</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 mb-2">Organizational Measures</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Employee training</li>
                        <li>• Data access policies</li>
                        <li>• Incident response plans</li>
                        <li>• Regular audits</li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>

              {/* Your Rights Section */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 px-8 py-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">6</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Your Privacy Rights</h2>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-700 mb-6">
                    Depending on your location, you may have the following rights regarding your personal information:
                  </p>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4 hover:shadow-lg transition-shadow">
                      <div className="flex items-center space-x-2 mb-2">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <h4 className="font-semibold text-blue-900">Access & Portability</h4>
                      </div>
                      <p className="text-sm text-blue-800">Request access to your data and receive a copy in a portable format.</p>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-4 hover:shadow-lg transition-shadow">
                      <div className="flex items-center space-x-2 mb-2">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        <h4 className="font-semibold text-green-900">Correction</h4>
                      </div>
                      <p className="text-sm text-green-800">Request correction of inaccurate or incomplete information.</p>
                    </div>

                    <div className="bg-gradient-to-br from-red-50 to-pink-100 border border-red-200 rounded-xl p-4 hover:shadow-lg transition-shadow">
                      <div className="flex items-center space-x-2 mb-2">
                        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        <h4 className="font-semibold text-red-900">Deletion</h4>
                      </div>
                      <p className="text-sm text-red-800">Request deletion of your personal information (subject to legal requirements).</p>
                    </div>

                    <div className="bg-gradient-to-br from-yellow-50 to-amber-100 border border-yellow-200 rounded-xl p-4 hover:shadow-lg transition-shadow">
                      <div className="flex items-center space-x-2 mb-2">
                        <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18 19l-1.5-1.5m-10-10L5 6l1.5 1.5" />
                        </svg>
                        <h4 className="font-semibold text-yellow-900">Restriction</h4>
                      </div>
                      <p className="text-sm text-yellow-800">Request restriction of processing in certain circumstances.</p>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-indigo-100 border border-purple-200 rounded-xl p-4 hover:shadow-lg transition-shadow">
                      <div className="flex items-center space-x-2 mb-2">
                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <h4 className="font-semibold text-purple-900">Objection</h4>
                      </div>
                      <p className="text-sm text-purple-800">Object to processing based on legitimate interests.</p>
                    </div>

                    <div className="bg-gradient-to-br from-gray-50 to-slate-100 border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow">
                      <div className="flex items-center space-x-2 mb-2">
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                        <h4 className="font-semibold text-gray-900">Withdraw Consent</h4>
                      </div>
                      <p className="text-sm text-gray-800">Withdraw consent for processing based on consent.</p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-teal-50 rounded-lg">
                    <p className="text-teal-800 text-sm">
                      To exercise these rights, please contact us using the information provided in the Contact section below.
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Privacy Information */}
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Data Retention */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">7</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Data Retention</h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">
                    We retain your personal information for as long as necessary to:
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      <span>Provide our services and maintain your account</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      <span>Comply with legal and regulatory requirements</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      <span>Resolve disputes and enforce agreements</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      <span>Prevent fraud and ensure security</span>
                    </li>
                  </ul>
                </div>

                {/* Children's Privacy */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">8</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Children's Privacy</h3>
                  </div>
                  <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-pink-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-pink-900 mb-2">Age Restriction</h4>
                        <p className="text-sm text-pink-800">
                          Our services are not intended for children under 16. We do not knowingly collect 
                          personal information from children under 16. If you believe we have collected 
                          information from a child under 16, please contact us immediately.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-gray-50 to-slate-50 px-8 py-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">10</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>

                  <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-8 border border-gray-200">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900">Data Protection Officer</h3>
                        </div>
                        <div className="space-y-2 ml-13">
                          <p className="text-gray-700 text-sm">
                            Email:{' '}
                            <a
                              href="mailto:visa@worldmaxxing.com"
                              className="text-green-600 hover:text-green-800 font-medium underline decoration-green-200 hover:decoration-green-400 transition-colors"
                            >
                              visa@worldmaxxing.com
                            </a>
                          </p>
                          <p className="text-gray-700 text-sm">
                            Phone: +1 323 286 4541
                          </p>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900">General Privacy Inquiries</h3>
                        </div>
                        <div className="space-y-2 ml-13">
                          <p className="text-gray-700 text-sm">
                            Email:{' '}
                            <a
                              href="mailto:visa@worldmaxxing.com"
                              className="text-blue-600 hover:text-blue-800 font-medium underline decoration-blue-200 hover:decoration-blue-400 transition-colors"
                            >
                              visa@worldmaxxing.com
                            </a>
                          </p>
                          <p className="text-gray-700 text-sm">
                            Address: Worldmaxxing Global Services Immigration Assistance Service
                            <br />
                            1308 E Colorado Blvd
                            <br />
                            #2244
                            <br />
                            Pasadena, CA 91106
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Important Notice */}
              <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl shadow-xl border border-green-200 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-black/30 bg-opacity-20 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3">Additional Information</h3>
                      <p className="text-green-100 text-sm leading-relaxed">
                        For information about how we use cookies and similar technologies, please read our{' '}
                        <a
                          href="/cookie-policy"
                          className="text-white hover:text-green-200 font-semibold underline decoration-green-300 hover:decoration-white transition-colors"
                        >
                          Cookie Policy
                        </a>
                        . For information about our compliance with EU regulations, please read our{' '}
                        <a
                          href="/digital-services-act"
                          className="text-white hover:text-green-200 font-semibold underline decoration-green-300 hover:decoration-white transition-colors"
                        >
                          Digital Services Act
                        </a>{' '}
                        page.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </main>
      </div>
    </>
  );
}