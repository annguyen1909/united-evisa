import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal Information | United eVisa Immigration Assistance Service',
  description:
    'Comprehensive legal terms, conditions, and agreements for United eVisa Immigration Assistance Service. Read our terms of service, privacy policy, and legal disclaimers.',
  keywords:
    'United eVisa legal terms, terms of service, legal agreement, visa services legal, immigration legal',
  alternates: {
    canonical: 'https://unitedevisa.com/legal',
  },
};

export default function LegalPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-50/40 via-white to-white flex flex-col">
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 via-blue-900/80 to-blue-900/90"></div>
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 via-blue-800/20 to-indigo-800/20" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
            </div>
            <div className="relative container mx-auto px-4 py-20">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                    <svg className="w-12 h-12 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-amber-200 bg-clip-text text-transparent">
                  Legal Information
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Comprehensive terms of service and legal framework for United eVisa Immigration Assistance Service
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-200 mb-8">
                  <span>Last Updated: {new Date().toLocaleDateString()}</span>
                  <span>•</span>
                  <span>Version 2.0</span>
                  <span>•</span>
                  <span>Universal Terms Agreement</span>
                </div>
                
                {/* Important Legal Notice */}
                <div className="max-w-4xl mx-auto">
                  <div className="bg-red-500/20 backdrop-blur-sm border border-red-400/30 rounded-2xl p-8 text-left">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-red-500/30 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-red-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-red-100 mb-3">IMPORTANT LEGAL NOTICE</h3>
                        <p className="text-red-100 leading-relaxed">
                          PLEASE READ THIS GENERAL TERMS OF SERVICE AGREEMENT CAREFULLY, AS IT CONTAINS
                          IMPORTANT INFORMATION REGARDING YOUR LEGAL RIGHTS AND REMEDIES. BY USING OUR
                          SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREED TO BE BOUND
                          BY THESE TERMS.
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
                  <div className="bg-gradient-to-r from-slate-50 to-gray-50 px-8 py-6 border-b border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                      <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                        </svg>
                      </div>
                      Table of Contents
                    </h2>
                  </div>
                  <div className="p-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <a href="#overview" className="flex items-center p-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">
                          <span className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-xs font-semibold text-slate-600 mr-3">1</span>
                          Overview
                        </a>
                        <a href="#eligibility" className="flex items-center p-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">
                          <span className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-xs font-semibold text-slate-600 mr-3">2</span>
                          Eligibility & Authority
                        </a>
                        <a href="#accounts" className="flex items-center p-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">
                          <span className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-xs font-semibold text-slate-600 mr-3">3</span>
                          Accounts & Data Transfer
                        </a>
                        <a href="#availability" className="flex items-center p-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">
                          <span className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-xs font-semibold text-slate-600 mr-3">4</span>
                          Service Availability
                        </a>
                        <a href="#conduct" className="flex items-center p-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">
                          <span className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-xs font-semibold text-slate-600 mr-3">5</span>
                          General Rules of Conduct
                        </a>
                        <a href="#rights" className="flex items-center p-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">
                          <span className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-xs font-semibold text-slate-600 mr-3">6</span>
                          Reservation of Rights
                        </a>
                        <a href="#third-party" className="flex items-center p-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">
                          <span className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-xs font-semibold text-slate-600 mr-3">7</span>
                          Third-Party Links
                        </a>
                      </div>
                      <div className="space-y-3">
                        <a href="#liability" className="flex items-center p-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">
                          <span className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-xs font-semibold text-slate-600 mr-3">8</span>
                          Limitation of Liability
                        </a>
                        <a href="#fees" className="flex items-center p-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">
                          <span className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-xs font-semibold text-slate-600 mr-3">9</span>
                          Fees & Payments
                        </a>
                        <a href="#indemnity" className="flex items-center p-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">
                          <span className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-xs font-semibold text-slate-600 mr-3">10</span>
                          Indemnity
                        </a>
                        <a href="#visa-specific" className="flex items-center p-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">
                          <span className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-xs font-semibold text-slate-600 mr-3">11</span>
                          Visa-Specific Terms
                        </a>
                        <a href="#government" className="flex items-center p-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">
                          <span className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-xs font-semibold text-slate-600 mr-3">12</span>
                          Government Relations
                        </a>
                        <a href="#compliance" className="flex items-center p-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">
                          <span className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-xs font-semibold text-slate-600 mr-3">13</span>
                          Legal Compliance
                        </a>
                        <a href="#contact" className="flex items-center p-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">
                          <span className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-xs font-semibold text-slate-600 mr-3">14</span>
                          Contact Information
                        </a>
                      </div>
                </div>
              </div>
            </div>

            {/* Legal Sections */}
            <div className="space-y-8">
              {/* Section 1: Overview */}
              <section id="overview" className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-8 py-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Overview</h2>
                  </div>
                </div>
                <div className="p-8">
                <div className="prose prose-gray max-w-none">
                    <p className="mb-6 text-gray-800 text-lg leading-relaxed">
                    This Universal Terms of Service Agreement (this "Agreement") is entered into by
                      and between United eVisa Immigration Assistance Service and you, and is made effective as of the
                    date of your use of this website ("Site") or the date of electronic acceptance.
                    </p>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                      <h3 className="text-xl font-semibold text-blue-900 mb-4">Agreement Scope</h3>
                      <p className="text-blue-800 mb-4">
                    This Agreement sets forth the general terms and conditions of your use of the
                    Site and the products and services purchased or accessed through this Site
                        (individually and collectively, the "Services").
                  </p>
                      <p className="text-blue-800">
                    Whether you are simply browsing or using this Site or purchase Services, your
                    use of this Site and your electronic acceptance of this Agreement signifies that
                        you have read, understand, acknowledge and agree to be bound by this Agreement.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h4 className="font-semibold text-green-900 mb-3">Incorporated Policies</h4>
                        <ul className="space-y-2 text-green-800 text-sm">
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                            Privacy Policy
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                            Cookie Policy
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                            Digital Services Act Compliance
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                            Disclaimers
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                            Refund Policy
                          </li>
                  </ul>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-3">Definitions</h4>
                        <div className="space-y-2 text-gray-700 text-sm">
                          <p><strong>"We", "Us", "Our":</strong> United eVisa Immigration Assistance Service</p>
                          <p><strong>"You", "Your", "User":</strong> Any individual or entity using our Services</p>
                          <p><strong>"Services":</strong> Products and services accessed through this Site</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                      <h4 className="font-semibold text-amber-900 mb-3 flex items-center">
                        <svg className="w-5 h-5 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                        Agreement Updates
                      </h4>
                      <p className="text-amber-800 text-sm">
                    United eVisa Immigration Assistance Service may, in its sole and
                        absolute discretion, change or modify this Agreement at any time. Such changes
                        shall be effective immediately upon posting to this Site. Your continued use
                        constitutes acceptance of the revised Agreement.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2: Eligibility */}
              <section id="eligibility" className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-50 to-green-50 px-8 py-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Eligibility & Authority</h2>
                  </div>
                </div>
                <div className="p-8">
                <div className="prose prose-gray max-w-none">
                    <p className="mb-6 text-gray-800 text-lg">
                    This Site and the Services are available only to Users who can form legally
                      binding contracts under applicable law.
                    </p>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                      <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                        <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        By using our Services, you represent and warrant that you are:
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-blue-800 text-sm">At least eighteen (18) years of age</span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-blue-800 text-sm">Able to form legally binding contracts under applicable law</span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-blue-800 text-sm">Not barred from purchasing Services under applicable laws</span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-blue-800 text-sm">Legally eligible to apply for eVisas under immigration laws</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                      <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                        <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        Corporate Entity Representation
                      </h4>
                      <p className="text-blue-800 text-sm">
                    If you are entering into this Agreement on behalf of a corporate entity, you
                    represent and warrant that you have the legal authority to bind such corporate
                        entity to the terms and conditions contained in this Agreement.
                  </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: Accounts */}
              <section id="accounts" className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 px-8 py-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Accounts & Data Transfer</h2>
                  </div>
                </div>
                <div className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                        <svg className="w-6 h-6 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Account Requirements
                      </h3>
                  <p className="mb-4 text-gray-800">
                        To access some features of this Site or use some Services, you will need to create an Account.
                      </p>
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4">
                        <h4 className="font-semibold text-purple-900 mb-2">Your Responsibilities:</h4>
                        <ul className="space-y-2 text-purple-800 text-sm">
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                            Provide accurate, current, and complete information
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                            Keep Account information up-to-date
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                            Maintain security of login credentials
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                            Take responsibility for all Account activity
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                        <svg className="w-6 h-6 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        International Data Transfer
                  </h3>
                  <p className="mb-4 text-gray-800">
                        If you are visiting from a country other than where our servers are located, your communications may result in international data transfers.
                      </p>
                      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                        <h4 className="font-semibold text-indigo-900 mb-2">Data Protection Compliance:</h4>
                        <ul className="space-y-2 text-indigo-800 text-sm">
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                            GDPR (General Data Protection Regulation)
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                            CCPA (California Consumer Privacy Act)
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                            International data protection laws
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: Availability */}
              <section id="availability" className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-amber-50 to-cyan-50 px-8 py-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Service Availability</h2>
                  </div>
                </div>
                <div className="p-8">
                  <p className="mb-6 text-gray-800 text-lg">
                    We shall use commercially reasonable efforts to provide this Site and Services on a 24/7 basis.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-yellow-900 mb-4 flex items-center">
                        <svg className="w-5 h-5 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                        Potential Service Interruptions
                      </h3>
                      <ul className="space-y-2 text-yellow-800 text-sm">
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></span>
                          Equipment malfunctions
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></span>
                          Periodic maintenance and repairs
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></span>
                          Government system updates
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></span>
                          Network congestion or failures
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></span>
                          Causes beyond our reasonable control
                        </li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center">
                        <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Visa Processing Times
                      </h3>
                      <p className="text-blue-800 text-sm mb-3">
                        While we strive to process applications efficiently, actual processing times are subject to:
                      </p>
                      <ul className="space-y-2 text-blue-800 text-sm">
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                          Government processing schedules
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                          System availability
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                          Completeness of documentation
                        </li>
                  </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <p className="text-gray-700 text-sm">
                      <strong>Important:</strong> We cannot guarantee specific processing times due to factors outside our control.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: Conduct */}
              <section id="conduct" className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-red-50 to-pink-50 px-8 py-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">5</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">General Rules of Conduct</h2>
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <p className="text-gray-800 text-lg mb-6">
                      By using our services, you acknowledge and agree to comply with the following rules of conduct:
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white font-bold text-xs">1</span>
                        </div>
                        Legal Compliance
                      </h3>
                      <p className="text-blue-800 text-sm">
                        Your use of this Site and the Services, including any content you submit, will comply with this Agreement and all applicable local, state, national and international laws, rules and regulations.
                      </p>
                    </div>

                    <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-purple-900 mb-4 flex items-center">
                        <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white font-bold text-xs">2</span>
                        </div>
                        Privacy Protection
                      </h3>
                      <p className="text-purple-800 text-sm">
                        You will not collect or harvest any non-public or personally identifiable information about another User or any other person or entity without their express prior written consent.
                      </p>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-red-900 mb-4 flex items-center">
                        <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white font-bold text-xs">3</span>
                        </div>
                        Prohibited Activities
                      </h3>
                      <p className="text-red-800 text-sm mb-3">
                      You will not use this Site or the Services in a manner that:
                      </p>
                      <ul className="space-y-2 text-red-800 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                          <span>Is illegal, or promotes or encourages illegal activity</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                          <span>Promotes, encourages or engages in terrorism, violence against people, animals, or property</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                          <span>Infringes on the intellectual property rights of another User or any other person or entity</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                          <span>Contains false or deceptive language regarding United eVisa Immigration Assistance Service or our Services</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                          <span>Attempts to circumvent government visa application systems or procedures</span>
                    </li>
                      </ul>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-green-900 mb-4 flex items-center">
                          <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3">
                            <span className="text-white font-bold text-xs">4</span>
                          </div>
                          Information Accuracy
                        </h3>
                        <p className="text-green-800 text-sm">
                          You will provide accurate, complete, and truthful information in all visa applications and related documents.
                        </p>
                      </div>

                      <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-orange-900 mb-4 flex items-center">
                          <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mr-3">
                            <span className="text-white font-bold text-xs">5</span>
                          </div>
                          Anti-Fraud Commitment
                        </h3>
                        <p className="text-orange-800 text-sm">
                          You will not attempt to obtain visas through fraudulent means or misrepresentation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: Rights */}
              <section id="rights" className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 px-8 py-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">6</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Additional Reservation of Rights</h2>
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <p className="text-gray-800 text-lg leading-relaxed">
                      United eVisa Immigration Assistance Service expressly reserves the right to deny, cancel, terminate, suspend, lock, or modify access to (or control of) any Account or Services for any reason.
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                        <svg className="w-6 h-6 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        System Protection
                      </h3>
                      <div className="space-y-3">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <ul className="space-y-2 text-blue-800 text-sm">
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                              <span>To correct mistakes made by United eVisa Immigration Assistance Service in offering or delivering any Services</span>
                    </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                              <span>To protect the integrity and stability of our systems and partner relationships</span>
                    </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                              <span>To assist with fraud and abuse detection and prevention efforts</span>
                    </li>
                  </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                        <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>
                        Legal Compliance
                      </h3>
                      <div className="space-y-3">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <ul className="space-y-2 text-blue-800 text-sm">
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                              <span>To comply with court orders and applicable laws, rules and regulations</span>
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                              <span>To comply with requests of law enforcement, including subpoena requests</span>
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                              <span>To comply with government visa application requirements and regulations</span>
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                              <span>To avoid any civil or criminal liability on the part of United eVisa Immigration Assistance Service</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                    <h4 className="font-semibold text-red-900 mb-3 flex items-center">
                      <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      Termination Rights
                    </h4>
                    <p className="text-red-800 text-sm">
                      United eVisa Immigration Assistance Service expressly reserves the right to terminate, without notice to you, any and all Services where, in United eVisa Immigration Assistance Service's sole discretion, you are harassing or threatening United eVisa Immigration Assistance Service and/or any of United eVisa Immigration Assistance Service's employees.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 7: Third-Party */}
              <section id="third-party" className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-50 to-amber-50 px-8 py-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">7</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Links to Third-Party Websites</h2>
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-8">
                    <p className="text-gray-800 text-lg leading-relaxed">
                      This Site and the Services found at this Site may contain links to third-party websites that are not owned or controlled by United eVisa Immigration Assistance Service.
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-yellow-900 mb-4 flex items-center">
                        <svg className="w-6 h-6 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                        Disclaimer of Responsibility
                      </h3>
                      <div className="space-y-3 text-yellow-800">
                        <p className="text-sm">
                          United eVisa Immigration Assistance Service assumes no responsibility for:
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-2"></span>
                            <span>Content of third-party websites</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-2"></span>
                            <span>Terms and conditions of external sites</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-2"></span>
                            <span>Privacy policies of linked websites</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-2"></span>
                            <span>Practices of any third-party websites</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                        <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        Your Responsibility
                      </h3>
                      <div className="space-y-3 text-blue-800">
                        <p className="text-sm">
                          By using this Site or the Services, you expressly release United eVisa Immigration Assistance Service from any and all liability arising from your use of any third-party website.
                        </p>
                        <div className="bg-blue-100 border border-blue-300 rounded-lg p-3">
                          <h4 className="font-semibold text-blue-900 mb-2 text-sm">Best Practices:</h4>
                          <ul className="space-y-1 text-xs">
                            <li className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                              Review terms and conditions
                            </li>
                            <li className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                              Check privacy policies
                            </li>
                            <li className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                              Verify website security
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <svg className="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Important Reminder
                    </h4>
                    <p className="text-gray-700 text-sm">
                      United eVisa Immigration Assistance Service encourages you to be aware when you leave this Site or the Services found at this Site and to review the terms and conditions, privacy policies, and other governing documents of each other website that you may visit.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 8: Liability */}
              <section id="liability" className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-orange-50 to-red-50 px-8 py-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">8</span>
                  </div>
                    <h2 className="text-2xl font-bold text-gray-900">Limitation of Liability</h2>
                  </div>
                </div>
                <div className="p-8">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
                    <h3 className="text-lg font-semibold text-yellow-900 mb-4 flex items-center">
                      <svg className="w-6 h-6 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      Important Legal Notice
                    </h3>
                    <p className="text-yellow-900 font-semibold text-sm">
                      IN NO EVENT SHALL United eVisa Immigration Assistance Service, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AND ALL THIRD PARTY SERVICE PROVIDERS, BE LIABLE TO YOU OR ANY OTHER PERSON OR ENTITY FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES WHATSOEVER.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                      <svg className="w-6 h-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                      Limitation Scope
                    </h3>
                    <p className="text-gray-800 mb-4">This limitation includes damages resulting from:</p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-4">
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <h4 className="font-semibold text-red-900 mb-3">Website & Content</h4>
                        <ul className="space-y-2 text-red-800 text-sm">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                            <span>The accuracy, completeness, or content of this Site</span>
                    </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                            <span>The accuracy, completeness, or content of any sites linked to this Site</span>
                    </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                            <span>The Services found at this Site or any sites linked to this Site</span>
                          </li>
                  </ul>
                      </div>

                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                        <h4 className="font-semibold text-orange-900 mb-3">Security & Technical</h4>
                        <ul className="space-y-2 text-orange-800 text-sm">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2"></span>
                            <span>Any unauthorized access to or use of our servers and/or any content stored therein</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2"></span>
                            <span>Any interruption or cessation of Services</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2"></span>
                            <span>Any viruses, worms, bugs, Trojan horses, or the like transmitted to or from this Site</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                        <h4 className="font-semibold text-purple-900 mb-3">Personal & Property</h4>
                        <ul className="space-y-2 text-purple-800 text-sm">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                            <span>Personal injury or property damage of any nature whatsoever</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                            <span>Third-party conduct of any nature whatsoever</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h4 className="font-semibold text-blue-900 mb-3">Visa & Travel Related</h4>
                        <ul className="space-y-2 text-blue-800 text-sm">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                            <span>Visa application delays, rejections, or government processing issues</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                            <span>Travel disruptions or cancellations related to visa processing</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <svg className="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Statute of Limitations
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Any cause of action arising out of or related to this Site or the Services must be commenced within one (1) year after the cause of action accrues, otherwise such cause of action shall be permanently barred.
                      </p>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h4 className="font-semibold text-green-900 mb-3 flex items-center">
                        <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                        Maximum Liability
                      </h4>
                      <p className="text-green-700 text-sm">
                        In no event shall United eVisa Immigration Assistance Service's total aggregate liability exceed the total amount paid by you for the particular Services that are the subject of the cause of action.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Fees */}
              <section id="fees" className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 px-8 py-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">9</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Fees & Payments</h2>
                  </div>
                </div>
                <div className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                        <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        General Terms
                      </h3>
                  <p className="mb-4 text-gray-800">
                        You agree to pay any and all prices and fees due for Services purchased or obtained at this Site at the time you order the Services.
                      </p>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <p className="text-green-800 text-sm">
                          <strong>Pricing Policy:</strong> United eVisa Immigration Assistance Service expressly reserves the right to change or modify its prices and fees at any time.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                        <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                        Payment Methods
                      </h3>
                      <p className="mb-4 text-gray-800 text-sm">
                    You may pay for Services by utilizing any of the following Payment Methods:
                  </p>
                      <div className="space-y-2">
                        <div className="flex items-center p-2 bg-blue-50 rounded">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                          <span className="text-blue-800 text-sm">Valid credit card (Visa, MasterCard, American Express)</span>
                        </div>
                        <div className="flex items-center p-2 bg-blue-50 rounded">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                          <span className="text-blue-800 text-sm">Electronic check from your personal or business checking account</span>
                        </div>
                        <div className="flex items-center p-2 bg-blue-50 rounded">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                          <span className="text-blue-800 text-sm">PayPal</span>
                        </div>
                        <div className="flex items-center p-2 bg-blue-50 rounded">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                          <span className="text-blue-800 text-sm">Other payment methods as may be offered from time to time</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-purple-900 mb-4 flex items-center">
                        <svg className="w-5 h-5 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                    Currency and Pricing
                  </h3>
                      <p className="text-purple-800 text-sm mb-3">
                        We use USD (US Dollar) as the base currency for all our services. Transaction processing is supported in USD and select other currencies.
                      </p>
                      <p className="text-purple-800 text-sm">
                        If the currency selected is not a Supported Currency, the transaction will be processed in USD with an estimated conversion price.
                      </p>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-red-900 mb-4 flex items-center">
                        <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                        Important Notice
                      </h3>
                      <p className="text-red-800 text-sm">
                        <strong>Document Deadline:</strong> All required documents must be provided within 3 days of application submission. Otherwise, refund requests will not be accepted.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Continuing with the remaining content... */}
                  <p className="mb-4 text-gray-800">
                    Refunds are processed according to our Refund Policy and may be subject to
                    processing fees and administrative charges.
                  </p>

                  <h3 className="text-xl font-semibold mb-4 mt-8 text-gray-900">
                    Credit Card Authorization
                  </h3>
                  <p className="mb-4 text-gray-800">
                    To ensure cardholder agreement to pay our service fees, our Risk Management team
                    may request:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-800">
                    <li>Completion of an Authorization form with cardholder signature</li>
                    <li>Scan or picture of the actual credit card (with 8 middle digits hidden)</li>
                    <li>Electronic authorization from the cardholder's issuing bank</li>
                  </ul>
                  <p className="mb-4 text-gray-800">
                    Failure to comply with these requirements may result in service cancellation,
                    and we will not be responsible for any losses or damages.
                  </p>

              {/* Section 10: Indemnity */}
              <section id="indemnity" className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 px-8 py-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">10</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Indemnification</h2>
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <p className="text-gray-800 text-lg leading-relaxed">
                      You agree to defend, indemnify, and hold harmless United eVisa Immigration Assistance Service, 
                      its officers, directors, employees, agents, and third-party service providers from and against any 
                      and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including 
                      but not limited to attorney's fees).
                    </p>
                  </div>
                    
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
                      <h3 className="text-xl font-semibold text-amber-900 mb-4 flex items-center">
                        <svg className="w-6 h-6 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                        Your Indemnification Obligations Include
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-amber-800 text-sm">Your use or misuse of our Services</span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-amber-800 text-sm">Your violation of any term of this Agreement</span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-amber-800 text-sm">Your violation of any third-party right</span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-amber-800 text-sm">Any false or misleading information provided</span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-amber-800 text-sm">Fraudulent visa applications</span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-amber-800 text-sm">Immigration law violations</span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-amber-800 text-sm">Unlawful activities during travel</span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-amber-800 text-sm">Third-party claims arising from your actions</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                      <h4 className="font-semibold text-red-900 mb-3 flex items-center">
                        <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                        Important Legal Protection
                      </h4>
                      <p className="text-red-800 text-sm leading-relaxed">
                        This indemnification clause survives termination of this Agreement and your use of our Services. 
                        You remain responsible for defending us against claims even after you stop using our services, 
                        if those claims arise from your previous use of our Services.
                      </p>
                  </div>
                </div>
              </section>
              {/* Section 11: Visa-Specific Terms */}
              <section id="visa-specific" className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-violet-50 to-purple-50 px-8 py-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">11</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Visa-Specific Terms</h2>
                  </div>
                </div>
                <div className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                        <svg className="w-6 h-6 text-violet-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Application Process
                      </h3>
                  <p className="mb-4 text-gray-800">
                        Our services include assistance with eVisa applications. By using our services, you acknowledge that:
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3 p-3 bg-violet-50 rounded-lg">
                          <span className="w-2 h-2 bg-violet-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-violet-800 text-sm">We act as an intermediary between you and the government</span>
                        </div>
                        <div className="flex items-start space-x-3 p-3 bg-violet-50 rounded-lg">
                          <span className="w-2 h-2 bg-violet-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-violet-800 text-sm">Final visa approval is at the sole discretion of immigration authorities</span>
                        </div>
                        <div className="flex items-start space-x-3 p-3 bg-violet-50 rounded-lg">
                          <span className="w-2 h-2 bg-violet-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-violet-800 text-sm">We cannot guarantee visa approval or specific processing times</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                        <svg className="w-6 h-6 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                    Documentation Requirements
                  </h3>
                      <p className="mb-4 text-gray-800 text-sm">
                        You agree to provide all required documentation in the specified format and within the required timeframe. Failure to do so may result in:
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center p-2 bg-red-50 rounded">
                          <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                          <span className="text-red-800 text-sm">Application delays or rejection</span>
                        </div>
                        <div className="flex items-center p-2 bg-red-50 rounded">
                          <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                          <span className="text-red-800 text-sm">Forfeiture of service fees</span>
                        </div>
                        <div className="flex items-center p-2 bg-red-50 rounded">
                          <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                          <span className="text-red-800 text-sm">Additional processing fees</span>
                        </div>
                        <div className="flex items-center p-2 bg-red-50 rounded">
                          <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                          <span className="text-red-800 text-sm">Service termination</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center">
                      <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    Travel Responsibility
                  </h3>
                    <p className="text-blue-800 text-sm mb-3">You acknowledge that:</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></span>
                          <span className="text-blue-800 text-sm">You are responsible for ensuring your travel documents are valid</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></span>
                          <span className="text-blue-800 text-sm">Visa approval does not guarantee entry into the destination country</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></span>
                          <span className="text-blue-800 text-sm">Entry is subject to immigration officer discretion at the port of entry</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></span>
                          <span className="text-blue-800 text-sm">You must comply with all laws and regulations during your stay</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 12: Government Relations */}
              <section id="government" className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-gray-50 to-slate-50 px-8 py-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">12</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Government Relations</h2>
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <p className="text-gray-800 text-lg leading-relaxed">
                      United eVisa Immigration Assistance Service is a private company providing visa application assistance services. We are not affiliated with, endorsed by, or acting on behalf of any government or government agency.
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-yellow-900 mb-4 flex items-center">
                        <svg className="w-6 h-6 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                        Important Disclaimers
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-yellow-800 text-sm">We are not a government agency or official visa processing center</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-yellow-800 text-sm">Our services are designed to assist with the application process</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-yellow-800 text-sm">All visa decisions are made by immigration authorities</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-yellow-800 text-sm">Government fees are separate from our service fees</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-yellow-800 text-sm">We cannot influence or expedite government processing times</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-green-900 mb-4 flex items-center">
                        <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Alternative Application Methods
                      </h3>
                      <p className="text-green-800 text-sm mb-4">
                        You may apply directly through the official government website or at embassies/consulates. Our services are optional and designed to provide convenience and assistance.
                      </p>
                      <div className="bg-green-100 border border-green-300 rounded-lg p-3">
                        <p className="text-green-900 text-xs font-medium">
                          💡 Our services add value through expert guidance, document review, and application support - but direct government application is always an option.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 13: Compliance */}
              <section id="compliance" className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-50 to-amber-50 px-8 py-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">13</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Legal Compliance</h2>
                  </div>
                </div>
                <div className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                        <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>
                        Applicable Laws
                      </h3>
                      <p className="text-gray-800 text-sm">
                        This Agreement and your use of our Services are governed by and construed in accordance with the laws of the jurisdiction in which United eVisa Immigration Assistance Service operates, without regard to conflict of law principles.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                        <svg className="w-6 h-6 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    International Compliance
                  </h3>
                      <p className="text-gray-800 text-sm mb-3">
                    We comply with applicable international laws and regulations, including:
                  </p>
                      <div className="space-y-2">
                        <div className="flex items-center p-2 bg-amber-50 rounded text-xs">
                          <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2"></span>
                          <span className="text-amber-800">General Data Protection Regulation (GDPR)</span>
                        </div>
                        <div className="flex items-center p-2 bg-amber-50 rounded text-xs">
                          <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2"></span>
                          <span className="text-amber-800">California Consumer Privacy Act (CCPA)</span>
                        </div>
                        <div className="flex items-center p-2 bg-amber-50 rounded text-xs">
                          <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2"></span>
                          <span className="text-amber-800">Digital Services Act (DSA)</span>
                        </div>
                        <div className="flex items-center p-2 bg-amber-50 rounded text-xs">
                          <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2"></span>
                          <span className="text-amber-800">Anti-money laundering (AML) regulations</span>
                        </div>
                        <div className="flex items-center p-2 bg-amber-50 rounded text-xs">
                          <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2"></span>
                          <span className="text-amber-800">Know Your Customer (KYC) requirements</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center">
                        <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    Dispute Resolution
                  </h3>
                      <p className="text-blue-800 text-sm mb-3">
                        Any disputes arising from this Agreement or our Services shall be resolved through:
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <span className="w-4 h-4 bg-blue-600 text-white rounded-full text-xs font-bold flex items-center justify-center mt-0.5 flex-shrink-0">1</span>
                          <span className="text-blue-800 text-sm">Direct negotiation between parties</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <span className="w-4 h-4 bg-blue-600 text-white rounded-full text-xs font-bold flex items-center justify-center mt-0.5 flex-shrink-0">2</span>
                          <span className="text-blue-800 text-sm">Mediation (if required by applicable law)</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <span className="w-4 h-4 bg-blue-600 text-white rounded-full text-xs font-bold flex items-center justify-center mt-0.5 flex-shrink-0">3</span>
                          <span className="text-blue-800 text-sm">Arbitration or court proceedings in the appropriate jurisdiction</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-purple-900 mb-4 flex items-center">
                        <svg className="w-5 h-5 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        Severability
                      </h3>
                      <p className="text-purple-800 text-sm">
                        If any provision of this Agreement is found to be unenforceable or invalid, the remaining provisions will continue in full force and effect. The unenforceable provision will be modified to the minimum extent necessary to make it enforceable.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 14: Contact */}
              <section id="contact" className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 px-8 py-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">14</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <p className="text-gray-800 text-lg">
                      If you have any questions about these Terms of Service, Privacy Policy, or any other legal matters, please contact us:
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                      <h3 className="text-lg font-semibold mb-3 text-blue-900 flex items-center">
                        <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Email Contact
                      </h3>
                      <p className="text-blue-800 font-medium text-lg mb-2">visa@unitedevisa.com</p>
                      <p className="text-blue-700 text-sm">
                        For legal inquiries and compliance matters
                      </p>
                    </div>

                    <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-6">
                      <h3 className="text-lg font-semibold mb-3 text-cyan-900 flex items-center">
                        <svg className="w-5 h-5 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        General Support
                      </h3>
                      <p className="text-cyan-800 font-medium text-lg mb-2">visa@unitedevisa.com</p>
                      <p className="text-cyan-700 text-sm">
                        For general questions and assistance
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <svg className="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Response Time Commitment
                    </h4>
                    <p className="text-gray-700 text-sm mb-3">
                      We aim to respond to all legal inquiries within 2-3 business days. For urgent matters, please include "URGENT" in your subject line.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        2-3 Business Days
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Legal Inquiries
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                        Priority Support
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </div>

                {/* Footer Notice */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8">
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Agreement Acceptance</h3>
                    <p className="text-gray-800 mb-6 max-w-2xl mx-auto">
                      By using our services, you acknowledge that you have read, understood, and agreed
                      to be bound by these Terms of Service. If you do not agree to these terms, please
                      do not use our services.
                    </p>
                    <div className="flex items-center justify-center space-x-4 text-blue-700 text-sm">
                      <a href="/privacy" className="hover:underline font-medium">Privacy Policy</a>
                      <span>•</span>
                      <a href="/refund-policy" className="hover:underline font-medium">Refund Policy</a>
                      <span>•</span>
                      <a href="/cookie-policy" className="hover:underline font-medium">Cookie Policy</a>
                    </div>
                    <p className="text-blue-600 text-sm mt-6 font-medium">
                      Last updated: {new Date().toLocaleDateString()} | Version 2.0 | Universal Terms Agreement
                    </p>
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