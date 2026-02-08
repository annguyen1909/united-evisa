import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of Service Agreement for United eVisa Services Immigration Assistance Service - Learn about eligibility, fees, responsibilities, and legal terms.',
  alternates: {
    canonical: 'https://unitedevisa.com/terms',
  },
};

export default function TermsPage() {
  return (
    <>
      <div className="bg-gradient-to-b from-blue-50/40 via-white to-white min-h-screen">
        <main className="flex-1">
          {/* Hero Header Section */}
          <section className="relative w-full bg-gradient-to-b from-blue-900 via-blue-800 to-amber-600 overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20"></div>
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-4000"></div>
            </div>
            
            <div className="relative max-w-6xl mx-auto px-4 py-20">
              <div className="text-center">
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="w-24 h-24 bg-white/20 rounded-2xl backdrop-blur-sm border border-white/30 shadow-2xl flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-yellow-900" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 leading-tight">
                  Terms of Service
                  <span className="block text-3xl md:text-4xl lg:text-5xl font-bold text-purple-100 mt-2">
                    Agreement
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Legal terms and conditions for using United eVisa Services Immigration Assistance Services
                </p>
                
                <div className="flex items-center justify-center space-x-4 text-purple-200">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4M3 21h18a1 1 0 001-1v-4a1 1 0 00-1-1H3a1 1 0 00-1 1v4a1 1 0 001 1z" />
                    </svg>
                    <span className="text-sm font-medium">Legal Agreement</span>
                  </div>
                  <div className="w-1 h-1 bg-purple-300 rounded-full"></div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium">
                      Last updated: {new Date().toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="max-w-6xl mx-auto px-4 py-16">
            <div className="space-y-12">
              
              {/* Introduction */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 px-8 py-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Service Agreement Overview</h2>
                  </div>
                </div>
                <div className="p-8">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      This United eVisa Services Immigration Assistance Service Agreement (this "Agreement") is entered into by and between 
                      United eVisa Services Immigration Assistance Service ("we," "us," or "our") and you, and is made effective as of 
                      the date of your use of this website ("Site") or the date of electronic acceptance.
                      This Agreement sets forth the general terms and conditions of your use of the United eVisa Services Immigration Assistance Service (the "Services").
                    </p>
                    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-200">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-purple-900 mb-2">Electronic Acceptance</h4>
                          <p className="text-sm text-purple-800">
                            Your electronic acceptance of this Agreement signifies that you have read, understand, acknowledge and agree to be 
                            bound by this Agreement, our Universal Terms of Service Agreement, any plan limits, product disclaimers or other 
                            restrictions presented to you on our website, all of which are incorporated herein by reference.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Eligibility Section */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 px-8 py-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">eVisa Eligibility Requirements</h2>
                  </div>
                </div>
                <div className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    
                    {/* Eligibility Requirements */}
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900">Eligibility Requirements</h3>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                            <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-green-800">Citizens with valid passports from countries listed on our website</span>
                          </div>
                          <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                            <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-green-800">Your passport must be valid for at least six months beyond your intended stay</span>
                          </div>
                          <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                            <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-green-800">You must have a valid email address for communication</span>
                          </div>
                          <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                            <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-green-800">You must have a valid payment method for service fees</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Non-Eligibility */}
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900">Non-Eligibility</h3>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg border border-red-200">
                            <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-red-800">Persons holding Diplomatic/Official passports</span>
                          </div>
                          <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg border border-red-200">
                            <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-red-800">A person who is a resident of the destination country and/or works there</span>
                          </div>
                          <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg border border-red-200">
                            <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-red-800">A person who is declared persona non grata by the destination government</span>
                          </div>
                          <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg border border-red-200">
                            <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-red-800">A person who is the subject of a blacklist, warning circular, or other restrictive list</span>
                          </div>
                          <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg border border-red-200">
                            <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-red-800">Persons under 18 years of age without proper parental consent</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Additional Terms in Compact Layout */}
              <div className="grid lg:grid-cols-2 gap-8">
                
                {/* Visa Validity */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Visa Validity and Terms</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700 text-sm">The eVisa is valid for entry into the destination country for the specified period</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700 text-sm">This visa is non-extendable and non-convertible</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700 text-sm">The visa will be issued electronically and must be presented at designated ports</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700 text-sm">Entry is subject to approval by immigration authorities at the port of entry</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700 text-sm">Visa validity begins from the date of approval, not the date of application</span>
                    </div>
                  </div>
                </div>

                {/* Client Obligations */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Client Obligations</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700 text-sm">Providing accurate and complete personal information</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700 text-sm">Making full payment for services before processing begins</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700 text-sm">Signing the authorization form to confirm the transaction</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700 text-sm">Changes after paying Government Fee charged as new application</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700 text-sm">Notify us within 3 days if you don't receive approval letter</span>
                    </div>
                  </div>
                  </div>
              </div>

              {/* Fees and Payment Terms */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 px-8 py-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Fees and Payment Terms</h2>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-700 mb-8 text-lg">
                    There are two types of fees that you must pay to obtain your eVisa:
                  </p>
                  
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Service Fee */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">4.1 Service Fee</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Our service fee covers the processing of your eVisa application, including:
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700 text-sm">Receiving and reviewing your application</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700 text-sm">Submitting your application to authorities</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700 text-sm">Processing and obtaining the eVisa approval</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700 text-sm">Sending the approval letter to your email</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700 text-sm">24/7 customer support throughout the process</span>
                        </div>
                      </div>
                    </div>

                    {/* Government Fee */}
                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">4.2 Government Fee</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        The government fee is paid to the destination country's Immigration Department. This fee varies by:
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700 text-sm">Visa type (Tourist, Business, Transit)</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700 text-sm">Number of entries (Single, Double, Multiple)</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700 text-sm">Your nationality and country of residence</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700 text-sm">Processing time requirements</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Important Payment Notes */}
                  <div className="mt-8 bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <svg className="w-5 h-5 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      Important Payment Notes
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-2 text-amber-800 text-sm">
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2"></span>
                        Processing begins only after full payment is received
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2"></span>
                        All fees are payable in USD (US Dollar)
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2"></span>
                        No withholding of fees is permitted
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2"></span>
                        Prices are subject to change without notice
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Our Responsibilities */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-amber-50 to-cyan-50 px-8 py-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">5</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Our Responsibilities</h2>
                  </div>
                </div>
                <div className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    
                    {/* What We Do */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        Our Commitments
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-green-800 text-sm">Processing your visa application according to your specifications</span>
                        </div>
                        <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-green-800 text-sm">Providing comprehensive visa information and guidance</span>
                        </div>
                        <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-green-800 text-sm">Notifying you promptly if additional documents are required</span>
                        </div>
                        <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-green-800 text-sm">Providing 24/7 customer support via email and phone</span>
                        </div>
                        <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-green-800 text-sm">Maintaining the security and confidentiality of your information</span>
                        </div>
                      </div>
                    </div>

                    {/* Limitations */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                        <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                          </svg>
                        </div>
                        Limitations of Responsibility
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg border border-red-200">
                          <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-red-800 text-sm">We are not responsible for delays caused by incorrect email addresses</span>
                        </div>
                        <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg border border-red-200">
                          <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-red-800 text-sm">We are not responsible if you fail to notify us within 3 days</span>
                        </div>
                        <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg border border-red-200">
                          <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-red-800 text-sm">We are not responsible for decisions made by immigration authorities</span>
                        </div>
                        <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg border border-red-200">
                          <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-red-800 text-sm">We are not responsible for travel arrangements or accommodation bookings</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Methods & Disclaimer */}
              <div className="grid lg:grid-cols-2 gap-8">
                
                {/* Payment Methods */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">6</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Payment Methods</h3>
                  </div>
                  <p className="text-gray-700 mb-6">
                    We accept various payment methods for your convenience:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 text-sm">Credit Cards</div>
                        <div className="text-blue-700 text-xs">Visa, MasterCard, American Express</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 text-sm">Digital Wallets</div>
                        <div className="text-green-700 text-xs">PayPal, Apple Pay, Google Pay</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-3 bg-purple-50 rounded-lg border border-purple-200">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 text-sm">Cryptocurrency</div>
                        <div className="text-purple-700 text-xs">Bitcoin and major cryptocurrencies</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-700 text-sm">
                      All payments are processed securely through certified payment processors. We do not store your payment information on our servers.
                    </p>
                  </div>
                </div>

                {/* Disclaimer and Limitation */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">7</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Disclaimer & Liability</h3>
                  </div>
                  
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                    <p className="text-red-800 mb-3 text-sm">
                      <strong>Important Disclaimer:</strong> We are not responsible for any loss, delay, or cancellation of your flight tickets, tour bookings, or accommodation reservations if your visa application is declined.
                    </p>
                    <p className="text-red-800 text-sm">
                      In such cases, we will refund you the full amount paid for our services, but we are not liable for any other expenses.
                    </p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2 text-sm flex items-center">
                      <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      Recommendation
                    </h4>
                    <p className="text-blue-800 text-sm">
                      Apply for your eVisa at least 1-2 weeks in advance of your travel date to avoid potential issues and allow sufficient processing time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact & Final Notice */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-slate-50 to-gray-50 px-8 py-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-700 mb-8 text-lg">
                    If you have any questions about this Terms of Service Agreement, please contact us:
                  </p>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">General Inquiries</h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <div>
                            <p className="font-medium text-gray-900">Email</p>
                            <a href="mailto:visa@unitedevisa.com" className="text-blue-600 hover:underline">
                              visa@unitedevisa.com
                            </a>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <div>
                            <p className="font-medium text-gray-900">Phone</p>
                            <p className="text-gray-700">+1 323 286 4541</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Support</h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                          <div>
                            <p className="font-medium text-gray-900">24/7 Support</p>
                            <a href="mailto:visa@unitedevisa.com" className="text-green-600 hover:underline">
                              visa@unitedevisa.com
                            </a>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <div>
                            <p className="font-medium text-gray-900">Address</p>
                            <p className="text-gray-700 text-sm">United eVisa Services Immigration Assistance Service</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Final Notice */}
                  <div className="mt-8 bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-lg p-6">
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center justify-center">
                        <svg className="w-5 h-5 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Important Notice
                      </h3>
                      <p className="text-gray-700 mb-4">
                        By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                      </p>
                      <div className="flex items-center justify-center space-x-4 text-purple-700 text-sm">
                        <a href="/privacy" className="hover:underline font-medium">Privacy Policy</a>
                        <span>•</span>
                        <a href="/cookie-policy" className="hover:underline font-medium">Cookie Policy</a>
                        <span>•</span>
                        <a href="/refund-policy" className="hover:underline font-medium">Refund Policy</a>
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