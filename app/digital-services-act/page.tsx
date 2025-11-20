import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Services Act Compliance | Worldmaxxing Global Services Immigration Assistance Service',
  description:
    'Learn about our compliance with the EU Digital Services Act (DSA) and your rights as a user of our Worldmaxxing Global Services Immigration Assistance Service.',
  alternates: {
    canonical: 'https://worldmaxxing.com/digital-services-act',
  },
};

export default function DigitalServicesActPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <main className="flex-1">
          {/* Enhanced Header Section */}
          <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 overflow-hidden">
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                  Digital Services Act (DSA) 
                  <span className="block text-blue-200">Compliance</span>
                </h1>
                
                <p className="text-lg sm:text-xl text-blue-100 mb-6 max-w-3xl mx-auto leading-relaxed">
                  Learn about our compliance with the EU Digital Services Act and your rights as a user of our services
                </p>
                
                <div className="inline-flex items-center px-4 py-2 bg-black/30 bg-opacity-20 rounded-full text-blue-100 text-sm font-medium">
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
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-8 py-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
                  </div>
                </div>
                <div className="p-8">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Worldmaxxing Global Services Immigration Assistance Service ("we," "us," or "our") is
                      committed to compliance with the European Union's Digital Services Act (DSA)
                      Regulation (EU) 2022/2065. This page explains how we comply with the DSA and
                      your rights as a user of our digital services.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      The DSA aims to create a safer digital space where the fundamental rights of
                      users are protected and to establish a level playing field for businesses
                      operating in the EU digital market.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 2: About DSA */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-8 py-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">About the Digital Services Act</h2>
                  </div>
                </div>
                <div className="p-8">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      The Digital Services Act (DSA) is a comprehensive EU regulation that:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <span className="text-gray-700">Protects users' fundamental rights online</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <span className="text-gray-700">Establishes clear responsibilities for digital service providers</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <span className="text-gray-700">Promotes transparency and accountability</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <span className="text-gray-700">Creates a safer digital environment</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <span className="text-gray-700">Ensures fair competition in the digital market</span>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      The DSA applies to all digital services that serve users in the EU, regardless
                      of where the service provider is located.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3: Our Services */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 px-8 py-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Our Services Under the DSA</h2>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    We provide the following digital services that fall under the scope of the DSA:
                  </p>

                  <div className="grid lg:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Online Intermediation Services</h3>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                          <span className="text-gray-700">Visa application processing and submission</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                          <span className="text-gray-700">Online payment processing</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                          <span className="text-gray-700">Document verification services</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                          <span className="text-gray-700">Customer support and communication platforms</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Information Society Services</h3>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                          <span className="text-gray-700">Website hosting and content delivery</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                          <span className="text-gray-700">Email communication services</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                          <span className="text-gray-700">Online forms and data collection</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                          <span className="text-gray-700">Analytics and performance monitoring</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4: DSA Compliance Measures */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 px-8 py-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Our DSA Compliance Measures</h2>
                  </div>
                </div>
                <div className="p-8">
                  <div className="space-y-8">
                    
                    {/* Transparency Requirements */}
                    <div className="border-l-4 border-indigo-500 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <svg className="w-6 h-6 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        4.1 Transparency Requirements
                      </h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        We maintain transparency in our operations by:
                      </p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                          <span className="text-gray-700">Providing clear terms of service and privacy policies</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                          <span className="text-gray-700">Disclosing our business practices and data handling procedures</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                          <span className="text-gray-700">Maintaining public contact information</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                          <span className="text-gray-700">Publishing annual transparency reports</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                          <span className="text-gray-700">Clearly explaining our fee structure and pricing</span>
                        </div>
                      </div>
                    </div>

                    {/* Content Moderation */}
                    <div className="border-l-4 border-green-500 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        4.2 Content Moderation
                      </h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        We implement content moderation practices to ensure:
                      </p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <span className="text-gray-700">Prohibition of illegal content and activities</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <span className="text-gray-700">Protection against fraud and scams</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <span className="text-gray-700">Maintenance of service quality and reliability</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <span className="text-gray-700">Compliance with applicable laws and regulations</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <span className="text-gray-700">Fair and transparent moderation procedures</span>
                        </div>
                      </div>
                    </div>

                    {/* User Rights Protection */}
                    <div className="border-l-4 border-purple-500 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <svg className="w-6 h-6 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        4.3 User Rights Protection
                      </h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">We protect your fundamental rights by:</p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                          <span className="text-gray-700">Ensuring freedom of expression and information</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                          <span className="text-gray-700">Protecting personal data and privacy</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                          <span className="text-gray-700">Providing non-discriminatory access to services</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                          <span className="text-gray-700">Maintaining service availability and reliability</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                          <span className="text-gray-700">Offering effective dispute resolution mechanisms</span>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>

              {/* Section 5: Your Rights */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 px-8 py-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">5</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Your Rights Under the DSA</h2>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    As a user of our services, you have the following rights:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 border border-yellow-200 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Right to Information</h4>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            Access clear information about our services, terms, and policies.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 border border-yellow-200 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Right to Redress</h4>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            Submit complaints and seek resolution for issues with our services.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 border border-yellow-200 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Right to Appeal</h4>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            Appeal decisions made by our content moderation systems.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 border border-yellow-200 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Right to Representation</h4>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            Be represented by designated organizations in disputes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 6: Reporting Illegal Content */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-red-50 to-pink-50 px-8 py-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">6</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Reporting Illegal Content</h2>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    If you encounter illegal content on our platform, you can report it through the
                    following channels:
                  </p>

                  <div className="bg-gradient-to-br from-red-50 to-pink-50 border-l-4 border-red-500 rounded-xl p-6 mb-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          Report Illegal Content
                        </h3>
                        <p className="text-gray-700 mb-3">
                          Email:{' '}
                          <a
                            href="mailto:visa@worldmaxxing.com"
                            className="text-blue-600 hover:text-blue-800 font-medium underline decoration-blue-200 hover:decoration-blue-400 transition-colors"
                          >
                            visa@worldmaxxing.com
                          </a>
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Please include detailed information about the content, including URLs,
                          screenshots, and reasons for the report.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium text-blue-900">Response Time</span>
                    </div>
                    <p className="text-blue-800 text-sm">
                      We will review all reports within 24 hours and take appropriate action in
                      accordance with our content moderation policies and applicable laws.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 7: Dispute Resolution */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-50 to-teal-50 px-8 py-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">7</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Dispute Resolution</h2>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    We provide multiple channels for dispute resolution:
                  </p>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Internal Dispute Resolution
                          </h3>
                          <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                            Contact our customer support team for initial resolution attempts.
                          </p>
                          <p className="text-gray-700 text-sm">
                            Email:{' '}
                            <a
                              href="mailto:visa@worldmaxxing.com"
                              className="text-blue-600 hover:text-blue-800 font-medium underline decoration-blue-200 hover:decoration-blue-400 transition-colors"
                            >
                              visa@worldmaxxing.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Alternative Dispute Resolution
                          </h3>
                          <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                            If internal resolution fails, you may seek resolution through designated ADR
                            providers.
                          </p>
                          <p className="text-gray-700 text-sm">
                            We are committed to cooperating with certified ADR providers in the EU.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Legal Recourse</h3>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            You retain the right to seek legal recourse through courts or other legal
                            channels as provided by applicable law.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 8: Annual Transparency Report */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 px-8 py-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">8</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Annual Transparency Report</h2>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    In accordance with DSA requirements, we publish annual transparency reports that
                    include:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                      <span className="text-gray-700">Number of content moderation decisions</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                      <span className="text-gray-700">Types of illegal content removed</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                      <span className="text-gray-700">Average response times to user reports</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                      <span className="text-gray-700">Number of appeals and their outcomes</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                      <span className="text-gray-700">Measures taken to ensure service reliability</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                      <span className="text-gray-700">Complaints received and their resolution</span>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Our latest transparency report is available upon request. Please contact us at{' '}
                    <a
                      href="mailto:visa@worldmaxxing.com"
                      className="text-blue-600 hover:text-blue-800 font-medium underline decoration-blue-200 hover:decoration-blue-400 transition-colors"
                    >
                      visa@worldmaxxing.com
                    </a>
                    .
                  </p>
                </div>
              </div>

              {/* Section 9: Contact Information */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-slate-50 to-gray-50 px-8 py-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">9</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    For questions about our DSA compliance or to exercise your rights, please
                    contact us:
                  </p>

                  <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-8 border border-gray-200">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900">General Inquiries</h3>
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
                            Phone: +1 323 286 4541
                          </p>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900">Legal Department</h3>
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
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl border border-blue-200 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-black/30 bg-opacity-20 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3">Important Notice</h3>
                      <p className="text-blue-100 text-sm leading-relaxed">
                        This DSA compliance page is part of our commitment to transparency and user
                        protection. For more information about our data practices, please read our{' '}
                        <a href="/privacy" className="text-white hover:text-blue-200 font-semibold underline decoration-blue-300 hover:decoration-white transition-colors">
                          Privacy Policy
                        </a>{' '}
                        and{' '}
                        <a
                          href="/cookie-policy"
                          className="text-white hover:text-blue-200 font-semibold underline decoration-blue-300 hover:decoration-white transition-colors"
                        >
                          Cookie Policy
                        </a>
                        .
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