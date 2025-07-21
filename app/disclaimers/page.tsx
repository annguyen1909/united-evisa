import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimers | Worldmaxxing Global Services Immigration Assistance Service',
  description:
    'Important disclaimers and legal notices for Worldmaxxing Global Services Immigration Assistance Service - Understand our role, limitations, and your rights.',
};

export default function DisclaimersPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-red-50">
        <main className="flex-1">
          {/* Enhanced Header Section */}
          <section className="relative bg-gradient-to-r from-orange-600 via-red-600 to-pink-700 overflow-hidden">
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                  Disclaimers &
                  <span className="block text-orange-200">Legal Notices</span>
                </h1>
                
                <p className="text-lg sm:text-xl text-orange-100 mb-6 max-w-3xl mx-auto leading-relaxed">
                  Important disclaimers and legal notices - Understand our role, limitations, and your rights
                </p>
                
                <div className="inline-flex items-center px-4 py-2 bg-black/30 bg-opacity-20 rounded-full text-orange-100 text-sm font-medium">
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
              
              {/* Section 1: Company Information */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-red-50 to-pink-50 px-8 py-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Company Information and Service Nature</h2>
                  </div>
                </div>
                <div className="p-8">
                  <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 rounded-xl p-6 mb-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-800 mb-3 font-medium">
                          <strong>Important Notice:</strong> worldmaxxing.com is operated by Worldmaxxing Global Services
                          eVisa Immigration Assistance Service, a private company that provides
                          visa application assistance and support services.
                        </p>
                        <p className="text-gray-800 font-semibold">
                          We are NOT affiliated with any government or official immigration
                          authority.
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Our role is to assist you with the visa application process by providing
                    guidance, document review, and customer support. We act as an intermediary
                    service provider to simplify the application process for international
                    travelers.
                  </p>
                </div>
              </div>

              {/* Section 2: Legal Services Disclaimer */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 px-8 py-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Legal Services Disclaimer</h2>
                  </div>
                </div>
                <div className="p-8">
                  <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-500 rounded-xl p-6 mb-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-800 font-semibold">
                          We are NOT a law firm and do NOT provide legal advice, legal opinions, or
                          legal representation of any kind.
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Our services are limited to visa application assistance and support. We do not
                    provide legal counsel, interpret laws, or represent clients in legal matters.
                    For legal advice regarding immigration matters, please consult with a qualified
                    immigration attorney.
                  </p>
                </div>
              </div>

              {/* Section 3: Government Application Alternative */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 px-8 py-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Government Application Alternative</h2>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-700 leading-relaxed">
                    You may choose to apply for a eVisa directly through the official
                    government portal for a lower cost. By using our service, you agree to pay both
                    the official government visa fee and an additional service fee for our
                    processing and assistance. All pricing is clearly disclosed throughout the
                    application process for full transparency.
                  </p>
                </div>
              </div>

              {/* Section 4: Service Limitations */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 px-8 py-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Service Limitations and Disclaimers</h2>
                  </div>
                </div>
                <div className="p-8">
                  <div className="space-y-8">
                    
                    {/* Application Processing */}
                    <div className="border-l-4 border-purple-500 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <svg className="w-6 h-6 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        4.1 Application Processing
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                          <span className="text-gray-700">We cannot guarantee visa approval - final decisions are made by immigration authorities</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                          <span className="text-gray-700">Processing times are estimates and may vary based on government workload</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                          <span className="text-gray-700">We are not responsible for delays caused by government processing or system issues</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                          <span className="text-gray-700">Application success depends on the accuracy of information provided by the applicant</span>
                        </div>
                      </div>
                    </div>

                    {/* Information Accuracy */}
                    <div className="border-l-4 border-indigo-500 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <svg className="w-6 h-6 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        4.2 Information Accuracy
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                          <span className="text-gray-700">While we strive for accuracy, information on our website may change without notice</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                          <span className="text-gray-700">Visa requirements and fees are subject to change by authorities</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                          <span className="text-gray-700">We recommend verifying current requirements with official sources</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                          <span className="text-gray-700">We are not responsible for decisions based on outdated information</span>
                        </div>
                      </div>
                    </div>

                    {/* Travel Arrangements */}
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        4.3 Travel Arrangements
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <span className="text-gray-700">We are not responsible for flight cancellations, delays, or travel disruptions</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <span className="text-gray-700">We do not provide travel insurance or cover travel-related expenses</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <span className="text-gray-700">We recommend purchasing travel insurance before making travel arrangements</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <span className="text-gray-700">We are not liable for accommodation or tour booking issues</span>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>

              {/* Section 5-14: Remaining Sections */}
              <div className="grid lg:grid-cols-2 gap-8">
                
                {/* Financial Disclaimers */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-6 py-4 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xs">5</span>
                      </div>
                      <h2 className="text-lg font-bold text-gray-900">Financial Disclaimers</h2>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          Fee Structure
                        </h3>
                        <ul className="text-sm text-gray-700 space-y-1 ml-4">
                          <li>• Service fees are non-refundable once processing begins</li>
                          <li>• Government fees are non-refundable once submitted</li>
                          <li>• Additional fees may apply for expedited processing</li>
                          <li>• All fees are clearly disclosed before payment</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          Refund Policy
                        </h3>
                        <ul className="text-sm text-gray-700 space-y-1 ml-4">
                          <li>• Service fees refunded only if application rejected</li>
                          <li>• No refunds for approved applications</li>
                          <li>• No refunds for incomplete applications</li>
                          <li>• Processing fees are non-refundable</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Data and Privacy Disclaimers */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-cyan-50 to-blue-50 px-6 py-4 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-cyan-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xs">6</span>
                      </div>
                      <h2 className="text-lg font-bold text-gray-900">Data & Privacy Disclaimers</h2>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-cyan-500 rounded-full mt-1.5 flex-shrink-0"></span>
                        <span>We collect and process personal data per our Privacy Policy</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-cyan-500 rounded-full mt-1.5 flex-shrink-0"></span>
                        <span>Data may be shared with authorities for visa processing</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-cyan-500 rounded-full mt-1.5 flex-shrink-0"></span>
                        <span>We implement security measures but cannot guarantee 100% security</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-cyan-500 rounded-full mt-1.5 flex-shrink-0"></span>
                        <span>Users responsible for maintaining account security</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Technical Disclaimers */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-slate-50 to-gray-50 px-6 py-4 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xs">7</span>
                      </div>
                      <h2 className="text-lg font-bold text-gray-900">Technical Disclaimers</h2>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-slate-500 rounded-full mt-1.5 flex-shrink-0"></span>
                        <span>We strive for 24/7 availability but cannot guarantee uninterrupted access</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-slate-500 rounded-full mt-1.5 flex-shrink-0"></span>
                        <span>Functionality may be affected by technical issues or maintenance</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-slate-500 rounded-full mt-1.5 flex-shrink-0"></span>
                        <span>We recommend using supported browsers for optimal functionality</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Third-Party Services */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 px-6 py-4 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xs">8</span>
                      </div>
                      <h2 className="text-lg font-bold text-gray-900">Third-Party Services</h2>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-700 mb-3">Our services may involve third-party providers for:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Payment processing and financial transactions</li>
                      <li>• Email delivery and communication services</li>
                      <li>• Website hosting and technical infrastructure</li>
                      <li>• Analytics and performance monitoring</li>
                    </ul>
                    <p className="text-xs text-gray-600 mt-3">
                      We are not responsible for third-party providers' actions or policies.
                    </p>
                  </div>
                </div>

              </div>

              {/* Additional Sections */}
              <div className="grid lg:grid-cols-3 gap-6">
                
                {/* Force Majeure */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs">9</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Force Majeure</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    We are not liable for failures due to circumstances beyond our control:
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Natural disasters or extreme weather</li>
                    <li>• Government actions or policy changes</li>
                    <li>• Technical failures or cyber attacks</li>
                    <li>• Pandemics or health emergencies</li>
                  </ul>
                </div>

                {/* Limitation of Liability */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs">10</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Liability Limits</h3>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <ul className="text-xs text-red-800 space-y-1">
                      <li>• Total liability limited to amount paid</li>
                      <li>• No liability for indirect damages</li>
                      <li>• No liability for lost profits or data</li>
                      <li>• No liability for emotional distress</li>
                    </ul>
                  </div>
                </div>

                {/* Indemnification */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs">11</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Indemnification</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    You agree to indemnify us from claims arising from:
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Your use of our services</li>
                    <li>• Violation of our terms</li>
                    <li>• Violation of applicable laws</li>
                    <li>• False or misleading information</li>
                  </ul>
                </div>

              </div>

              {/* Final Sections */}
              <div className="space-y-8">
                
                {/* Changes and Governing Law */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">12</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Changes to Disclaimers</h3>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      We reserve the right to modify these disclaimers at any time. Changes will be
                      effective immediately upon posting. Your continued use indicates acceptance.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">13</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Governing Law</h3>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      These disclaimers are governed by applicable law. Any disputes shall be
                      subject to the jurisdiction of appropriate courts.
                    </p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-gray-50 to-slate-50 px-8 py-6 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">14</span>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      If you have any questions about these disclaimers, please contact us:
                    </p>

                    <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-8 border border-gray-200">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <div className="flex items-center space-x-3 mb-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
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
                              Phone: +1 323 286 4541
                            </p>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center space-x-3 mb-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
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
                              Address: Worldmaxxing Global Services Immigration Assistance Service
                              <br />
                              [Your Business Address]
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Important Notice */}
                <div className="bg-gradient-to-r from-orange-600 to-red-700 rounded-2xl shadow-xl border border-orange-200 overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-black/30 bg-opacity-20 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-3">Important Notice</h3>
                        <p className="text-orange-100 text-sm leading-relaxed">
                          These disclaimers are part of our commitment to transparency and legal
                          compliance. For complete information about our services, please read our{' '}
                          <a href="/terms" className="text-white hover:text-orange-200 font-semibold underline decoration-orange-300 hover:decoration-white transition-colors">
                            Terms of Service
                          </a>
                          ,{' '}
                          <a href="/privacy" className="text-white hover:text-orange-200 font-semibold underline decoration-orange-300 hover:decoration-white transition-colors">
                            Privacy Policy
                          </a>
                          , and{' '}
                          <a
                            href="/cookie-policy"
                            className="text-white hover:text-orange-200 font-semibold underline decoration-orange-300 hover:decoration-white transition-colors"
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

            </div>
          </section>
        </main>
      </div>
    </>
  );
}