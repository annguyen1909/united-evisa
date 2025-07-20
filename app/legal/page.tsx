/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal Information | United eVisa Immigration Assistance Service',
  description:
    'Comprehensive legal terms, conditions, and agreements for United eVisa Immigration Assistance Service. Read our terms of service, privacy policy, and legal disclaimers.',
  keywords:
    'United eVisa legal terms, terms of service, legal agreement, visa services legal, immigration legal',
};

export default function LegalPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/90 to-indigo-900/90"></div>
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
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
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

            {/* Table of Contents */}
            <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Table of Contents</h2>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <ul className="space-y-2">
                    <li>
                      <a href="#overview" className="text-blue-700 hover:text-blue-900 font-medium">
                        1. Overview
                      </a>
                    </li>
                    <li>
                      <a
                        href="#eligibility"
                        className="text-blue-700 hover:text-blue-900 font-medium"
                      >
                        2. Eligibility & Authority
                      </a>
                    </li>
                    <li>
                      <a href="#accounts" className="text-blue-700 hover:text-blue-900 font-medium">
                        3. Accounts & Data Transfer
                      </a>
                    </li>
                    <li>
                      <a
                        href="#availability"
                        className="text-blue-700 hover:text-blue-900 font-medium"
                      >
                        4. Service Availability
                      </a>
                    </li>
                    <li>
                      <a href="#conduct" className="text-blue-700 hover:text-blue-900 font-medium">
                        5. General Rules of Conduct
                      </a>
                    </li>
                    <li>
                      <a href="#rights" className="text-blue-700 hover:text-blue-900 font-medium">
                        6. Reservation of Rights
                      </a>
                    </li>
                    <li>
                      <a
                        href="#third-party"
                        className="text-blue-700 hover:text-blue-900 font-medium"
                      >
                        7. Third-Party Links
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#liability"
                        className="text-blue-700 hover:text-blue-900 font-medium"
                      >
                        8. Limitation of Liability
                      </a>
                    </li>
                    <li>
                      <a href="#fees" className="text-blue-700 hover:text-blue-900 font-medium">
                        9. Fees & Payments
                      </a>
                    </li>
                    <li>
                      <a
                        href="#indemnity"
                        className="text-blue-700 hover:text-blue-900 font-medium"
                      >
                        10. Indemnity
                      </a>
                    </li>
                    <li>
                      <a
                        href="#visa-specific"
                        className="text-blue-700 hover:text-blue-900 font-medium"
                      >
                        11. Visa-Specific Terms
                      </a>
                    </li>
                    <li>
                      <a
                        href="#government"
                        className="text-blue-700 hover:text-blue-900 font-medium"
                      >
                        12. Government Relations
                      </a>
                    </li>
                    <li>
                      <a
                        href="#compliance"
                        className="text-blue-700 hover:text-blue-900 font-medium"
                      >
                        13. Legal Compliance
                      </a>
                    </li>
                    <li>
                      <a href="#contact" className="text-blue-700 hover:text-blue-900 font-medium">
                        14. Contact Information
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Legal Sections */}
            <div className="space-y-8">
              {/* Section 1: Overview */}
              <section id="overview" className="bg-white rounded-lg shadow-sm border p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">1. OVERVIEW</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="mb-4 text-gray-800">
                    This Universal Terms of Service Agreement (this "Agreement") is entered into by
                    and between United eVisa Immigration Assistance Service ("United
                    eVisa Immigration Assistance Service") and you, and is made effective as of the
                    date of your use of this website ("Site") or the date of electronic acceptance.
                    This Agreement sets forth the general terms and conditions of your use of the
                    Site and the products and services purchased or accessed through this Site
                    (individually and collectively, the "Services"), and is in addition to (not in
                    lieu of) any specific terms and conditions that apply to the particular
                    Services.
                  </p>
                  <p className="mb-4 text-gray-800">
                    Whether you are simply browsing or using this Site or purchase Services, your
                    use of this Site and your electronic acceptance of this Agreement signifies that
                    you have read, understand, acknowledge and agree to be bound by this Agreement,
                    along with the following policies and the applicable product agreements, which
                    are incorporated herein by reference:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-800">
                    <li>Privacy Policy</li>
                    <li>Cookie Policy</li>
                    <li>Digital Services Act Compliance</li>
                    <li>Disclaimers</li>
                    <li>Refund Policy</li>
                  </ul>
                  <p className="mb-4 text-gray-800">
                    The terms "we", "us" or "our" shall refer to United eVisa Immigration
                    Assistance Service. The terms "you", "your", "User" or "customer" shall refer to
                    any individual or entity who accepts this Agreement, has access to your account
                    or uses the Services. Nothing in this Agreement shall be deemed to confer any
                    third-party rights or benefits.
                  </p>
                  <p className="mb-4 text-gray-800">
                    United eVisa Immigration Assistance Service may, in its sole and
                    absolute discretion, change or modify this Agreement, and any policies or
                    agreements which are incorporated herein, at any time, and such changes or
                    modifications shall be effective immediately upon posting to this Site. Your use
                    of this Site or the Services after such changes or modifications have been made
                    shall constitute your acceptance of this Agreement as last revised.
                  </p>
                </div>
              </section>

              {/* Section 2: Eligibility */}
              <section id="eligibility" className="bg-white rounded-lg shadow-sm border p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  2. ELIGIBILITY & AUTHORITY
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="mb-4 text-gray-800">
                    This Site and the Services are available only to Users who can form legally
                    binding contracts under applicable law. By using this Site or the Services, you
                    represent and warrant that you are:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-800">
                    <li>At least eighteen (18) years of age</li>
                    <li>
                      Otherwise recognized as being able to form legally binding contracts under
                      applicable law
                    </li>
                    <li>
                      Not a person barred from purchasing or receiving the Services found under the
                      laws of the United States or other applicable jurisdiction
                    </li>
                    <li>
                      Legally eligible to apply for a eVisa under current immigration laws and
                      regulations
                    </li>
                  </ul>
                  <p className="mb-4 text-gray-800">
                    If you are entering into this Agreement on behalf of a corporate entity, you
                    represent and warrant that you have the legal authority to bind such corporate
                    entity to the terms and conditions contained in this Agreement, in which case
                    the terms "you", "your", "User" or "customer" shall refer to such corporate
                    entity.
                  </p>
                </div>
              </section>

              {/* Section 3: Accounts */}
              <section id="accounts" className="bg-white rounded-lg shadow-sm border p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  3. ACCOUNTS & DATA TRANSFER
                </h2>
                <div className="prose prose-gray max-w-none">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Accounts</h3>
                  <p className="mb-4 text-gray-800">
                    In order to access some of the features of this Site or use some of the
                    Services, you will have to create an Account. You represent and warrant to United
                    eVisa Immigration Assistance Service that all information you submit
                    when you create your Account is accurate, current and complete, and that you
                    will keep your Account information accurate, current and complete.
                  </p>
                  <p className="mb-4 text-gray-800">
                    You are solely responsible for the activity that occurs on your Account, whether
                    authorized by you or not, and you must keep your Account information secure,
                    including without limitation your customer number/login, password, and Payment
                    Method(s).
                  </p>

                  <h3 className="text-xl font-semibold mb-4 mt-8 text-gray-900">
                    Transfer of Data Abroad
                  </h3>
                  <p className="mb-4 text-gray-800">
                    If you are visiting this Site from a country other than the country in which our
                    servers are located, your communications with us may result in the transfer of
                    information (including your Account information) across international
                    boundaries. By visiting this Site and communicating electronically with us, you
                    consent to such transfers.
                  </p>
                  <p className="mb-4 text-gray-800">
                    <strong>Data Protection:</strong> We comply with applicable data protection laws
                    and regulations, including but not limited to GDPR, CCPA, and data
                    protection laws. Your personal data will be processed in accordance with our
                    Privacy Policy.
                  </p>
                </div>
              </section>

              {/* Section 4: Availability */}
              <section id="availability" className="bg-white rounded-lg shadow-sm border p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  4. AVAILABILITY OF WEBSITE/SERVICES
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="mb-4 text-gray-800">
                    Subject to the terms and conditions of this Agreement and our other policies and
                    procedures, we shall use commercially reasonable efforts to attempt to provide
                    this Site and the Services on a twenty-four (24) hours a day, seven (7) days a
                    week basis.
                  </p>
                  <p className="mb-4 text-gray-800">
                    You acknowledge and agree that from time to time this Site may be inaccessible
                    or inoperable for any reason including, but not limited to:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-800">
                    <li>Equipment malfunctions</li>
                    <li>Periodic maintenance, repairs or replacements</li>
                    <li>Government system maintenance or updates</li>
                    <li>Network congestion or other failures</li>
                    <li>Causes beyond our reasonable control</li>
                  </ul>
                  <p className="mb-4 text-gray-800">
                    <strong>Visa Processing Times:</strong> While we strive to process applications
                    efficiently, actual processing times are subject to government processing
                    schedules, system availability, and the completeness of submitted documentation.
                    We cannot guarantee specific processing times.
                  </p>
                </div>
              </section>

              {/* Section 5: Conduct */}
              <section id="conduct" className="bg-white rounded-lg shadow-sm border p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  5. GENERAL RULES OF CONDUCT
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="mb-4 text-gray-800">You acknowledge and agree that:</p>
                  <ol className="list-decimal pl-6 mb-4 space-y-4 text-gray-800">
                    <li>
                      Your use of this Site and the Services, including any content you submit, will
                      comply with this Agreement and all applicable local, state, national and
                      international laws, rules and regulations.
                    </li>
                    <li>
                      You will not collect or harvest any non-public or personally identifiable
                      information about another User or any other person or entity without their
                      express prior written consent.
                    </li>
                    <li>
                      You will not use this Site or the Services in a manner that:
                      <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                        <li>Is illegal, or promotes or encourages illegal activity</li>
                        <li>
                          Promotes, encourages or engages in terrorism, violence against people,
                          animals, or property
                        </li>
                        <li>
                          Infringes on the intellectual property rights of another User or any other
                          person or entity
                        </li>
                        <li>
                          Contains false or deceptive language regarding United eVisa
                          Immigration Assistance Service or our Services
                        </li>
                        <li>
                          Attempts to circumvent government visa application systems or procedures
                        </li>
                      </ul>
                    </li>
                    <li>
                      You will provide accurate, complete, and truthful information in all visa
                      applications and related documents.
                    </li>
                    <li>
                      You will not attempt to obtain visas through fraudulent means or
                      misrepresentation.
                    </li>
                  </ol>
                </div>
              </section>

              {/* Section 6: Rights */}
              <section id="rights" className="bg-white rounded-lg shadow-sm border p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  6. ADDITIONAL RESERVATION OF RIGHTS
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="mb-4 text-gray-800">
                    United eVisa Immigration Assistance Service expressly reserves the right
                    to deny, cancel, terminate, suspend, lock, or modify access to (or control of)
                    any Account or Services for any reason, including but not limited to the
                    following:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-800">
                    <li>
                      To correct mistakes made by United eVisa Immigration
                      Assistance Service in offering or delivering any Services
                    </li>
                    <li>
                      To protect the integrity and stability of our systems and partner
                      relationships
                    </li>
                    <li>To assist with fraud and abuse detection and prevention efforts</li>
                    <li>To comply with court orders and applicable laws, rules and regulations</li>
                    <li>To comply with requests of law enforcement, including subpoena requests</li>
                    <li>To comply with government visa application requirements and regulations</li>
                    <li>
                      To avoid any civil or criminal liability on the part of United eVisa
                      Immigration Assistance Service
                    </li>
                  </ul>
                  <p className="mb-4 text-gray-800">
                    United eVisa Immigration Assistance Service expressly reserves the right
                    to terminate, without notice to you, any and all Services where, in United
                    eVisa Immigration Assistance Service's sole discretion, you are
                    harassing or threatening United eVisa Immigration Assistance Service
                    and/or any of United eVisa Immigration Assistance Service's employees.
                  </p>
                </div>
              </section>

              {/* Section 7: Third-Party */}
              <section id="third-party" className="bg-white rounded-lg shadow-sm border p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  7. LINKS TO THIRD-PARTY WEBSITES
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="mb-4 text-gray-800">
                    This Site and the Services found at this Site may contain links to third-party
                    websites that are not owned or controlled by United eVisa Immigration
                    Assistance Service. United eVisa Immigration Assistance Service assumes
                    no responsibility for the content, terms and conditions, privacy policies, or
                    practices of any third-party websites.
                  </p>
                  <p className="mb-4 text-gray-800">
                    By using this Site or the Services found at this Site, you expressly release
                    United eVisa Immigration Assistance Service from any and all liability
                    arising from your use of any third-party website.
                  </p>
                  <p className="mb-4 text-gray-800">
                    Accordingly, United eVisa Immigration Assistance Service encourages you
                    to be aware when you leave this Site or the Services found at this Site and to
                    review the terms and conditions, privacy policies, and other governing documents
                    of each other website that you may visit.
                  </p>
                </div>
              </section>

              {/* Section 8: Liability */}
              <section id="liability" className="bg-white rounded-lg shadow-sm border p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  8. LIMITATION OF LIABILITY
                </h2>
                <div className="prose prose-gray max-w-none">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                    <p className="text-yellow-900 font-semibold">
                      IN NO EVENT SHALL United eVisa Immigration Assistance Service, ITS
                      OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AND ALL THIRD PARTY SERVICE PROVIDERS,
                      BE LIABLE TO YOU OR ANY OTHER PERSON OR ENTITY FOR ANY DIRECT, INDIRECT,
                      INCIDENTAL, SPECIAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES WHATSOEVER.
                    </p>
                  </div>
                  <p className="mb-4 text-gray-800">
                    This limitation includes damages resulting from:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-800">
                    <li>The accuracy, completeness, or content of this Site</li>
                    <li>The accuracy, completeness, or content of any sites linked to this Site</li>
                    <li>The Services found at this Site or any sites linked to this Site</li>
                    <li>Personal injury or property damage of any nature whatsoever</li>
                    <li>Third-party conduct of any nature whatsoever</li>
                    <li>
                      Any unauthorized access to or use of our servers and/or any content stored
                      therein
                    </li>
                    <li>Any interruption or cessation of Services</li>
                    <li>
                      Any viruses, worms, bugs, Trojan horses, or the like transmitted to or from
                      this Site
                    </li>
                    <li>Visa application delays, rejections, or government processing issues</li>
                    <li>Travel disruptions or cancellations related to visa processing</li>
                  </ul>
                  <p className="mb-4 text-gray-800">
                    <strong>Statute of Limitations:</strong> Any cause of action arising out of or
                    related to this Site or the Services must be commenced within one (1) year after
                    the cause of action accrues, otherwise such cause of action shall be permanently
                    barred.
                  </p>
                  <p className="mb-4 text-gray-800">
                    <strong>Maximum Liability:</strong> In no event shall United eVisa
                    Immigration Assistance Service's total aggregate liability exceed the total
                    amount paid by you for the particular Services that are the subject of the cause
                    of action.
                  </p>
                </div>
              </section>

              {/* Section 9: Fees */}
              <section id="fees" className="bg-white rounded-lg shadow-sm border p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">9. FEES & PAYMENTS</h2>
                <div className="prose prose-gray max-w-none">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">General Terms</h3>
                  <p className="mb-4 text-gray-800">
                    You agree to pay any and all prices and fees due for Services purchased or
                    obtained at this Site at the time you order the Services. United eVisa
                    Immigration Assistance Service expressly reserves the right to change or modify
                    its prices and fees at any time.
                  </p>

                  <h3 className="text-xl font-semibold mb-4 mt-8 text-gray-900">Payment Methods</h3>
                  <p className="mb-4 text-gray-800">
                    You may pay for Services by utilizing any of the following Payment Methods:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-800">
                    <li>Valid credit card (Visa, MasterCard, American Express)</li>
                    <li>Electronic check from your personal or business checking account</li>
                    <li>PayPal</li>
                    <li>Other payment methods as may be offered from time to time</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-4 mt-8 text-gray-900">
                    Currency and Pricing
                  </h3>
                  <p className="mb-4 text-gray-800">
                    We use USD (US Dollar) as the base currency for all our services. Transaction
                    processing is supported in USD and select other currencies. If the currency
                    selected is not a Supported Currency, the transaction will be processed in USD
                    with an estimated conversion price.
                  </p>

                  <h3 className="text-xl font-semibold mb-4 mt-8 text-gray-900">Refund Policy</h3>
                  <p className="mb-4 text-gray-800">
                    <strong>Important:</strong> All required documents must be provided within 3
                    days of application submission. Otherwise, refund requests will not be accepted.
                  </p>
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
                </div>
              </section>

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
                  <div className="prose prose-gray max-w-none">
                    <p className="mb-6 text-gray-800 text-lg">
                      You agree to defend, indemnify, and hold harmless United eVisa Immigration Assistance Service, 
                      its officers, directors, employees, agents, and third-party service providers from and against any 
                      and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including 
                      but not limited to attorney's fees).
                    </p>
                    
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
                </div>
              </section>
              {/* Section 11: Visa-Specific Terms */}
              <section id="visa-specific" className="bg-white rounded-lg shadow-sm border p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">11. VISA-SPECIFIC TERMS</h2>
                <div className="prose prose-gray max-w-none">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Application Process</h3>
                  <p className="mb-4 text-gray-800">
                    Our services include assistance with eVisa applications. By using our
                    services, you acknowledge that:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-800">
                    <li>We act as an intermediary between you and the government</li>
                    <li>
                      Final visa approval is at the sole discretion of immigration
                      authorities
                    </li>
                    <li>We cannot guarantee visa approval or specific processing times</li>
                    <li>You are responsible for providing accurate and complete information</li>
                    <li>You must meet all eligibility requirements for the requested visa type</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-4 mt-8 text-gray-900">
                    Documentation Requirements
                  </h3>
                  <p className="mb-4 text-gray-800">
                    You agree to provide all required documentation in the specified format and
                    within the required timeframe. Failure to do so may result in:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-800">
                    <li>Application delays or rejection</li>
                    <li>Forfeiture of service fees</li>
                    <li>Additional processing fees</li>
                    <li>Service termination</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-4 mt-8 text-gray-900">
                    Travel Responsibility
                  </h3>
                  <p className="mb-4 text-gray-800">You acknowledge that:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-800">
                    <li>You are responsible for ensuring your travel documents are valid</li>
                    <li>Visa approval does not guarantee entry into the destination country</li>
                    <li>Entry is subject to immigration officer discretion at the port of entry</li>
                    <li>You must comply with all laws and regulations during your stay</li>
                  </ul>
                </div>
              </section>

              {/* Section 12: Government Relations */}
              <section id="government" className="bg-white rounded-lg shadow-sm border p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">12. GOVERNMENT RELATIONS</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="mb-4 text-gray-800">
                    United eVisa Immigration Assistance Service is a private company
                    providing visa application assistance services. We are not affiliated with,
                    endorsed by, or acting on behalf of any government or government
                    agency.
                  </p>
                  <p className="mb-4 text-gray-800">
                    <strong>Important Disclaimers:</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-800">
                    <li>We are not a government agency or official visa processing center</li>
                    <li>Our services are designed to assist with the application process</li>
                    <li>All visa decisions are made by immigration authorities</li>
                    <li>Government fees are separate from our service fees</li>
                    <li>We cannot influence or expedite government processing times</li>
                  </ul>
                  <p className="mb-4 text-gray-800">
                    <strong>Alternative Application Methods:</strong> You may apply directly through
                    the official government website or at embassies/consulates. Our
                    services are optional and designed to provide convenience and assistance.
                  </p>
                </div>
              </section>

              {/* Section 13: Compliance */}
              <section id="compliance" className="bg-white rounded-lg shadow-sm border p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">13. LEGAL COMPLIANCE</h2>
                <div className="prose prose-gray max-w-none">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Applicable Laws</h3>
                  <p className="mb-4 text-gray-800">
                    This Agreement and your use of our Services are governed by and construed in
                    accordance with the laws of the jurisdiction in which United eVisa
                    Immigration Assistance Service operates, without regard to conflict of law
                    principles.
                  </p>

                  <h3 className="text-xl font-semibold mb-4 mt-8 text-gray-900">
                    International Compliance
                  </h3>
                  <p className="mb-4 text-gray-800">
                    We comply with applicable international laws and regulations, including:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-800">
                    <li>General Data Protection Regulation (GDPR)</li>
                    <li>California Consumer Privacy Act (CCPA)</li>
                    <li>Digital Services Act (DSA)</li>
                    <li>Data protection and privacy laws</li>
                    <li>Anti-money laundering (AML) regulations</li>
                    <li>Know Your Customer (KYC) requirements</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-4 mt-8 text-gray-900">
                    Dispute Resolution
                  </h3>
                  <p className="mb-4 text-gray-800">
                    Any disputes arising from this Agreement or our Services shall be resolved
                    through:
                  </p>
                  <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-800">
                    <li>Direct negotiation between parties</li>
                    <li>Mediation (if required by applicable law)</li>
                    <li>Arbitration or court proceedings in the appropriate jurisdiction</li>
                  </ol>

                  <h3 className="text-xl font-semibold mb-4 mt-8 text-gray-900">Severability</h3>
                  <p className="mb-4 text-gray-800">
                    If any provision of this Agreement is found to be unenforceable or invalid, the
                    remaining provisions will continue in full force and effect. The unenforceable
                    provision will be modified to the minimum extent necessary to make it
                    enforceable.
                  </p>
                </div>
              </section>

              {/* Section 14: Contact */}
              <section id="contact" className="bg-white rounded-lg shadow-sm border p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">14. CONTACT INFORMATION</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="mb-4 text-gray-800">
                    If you have any questions about these Terms of Service, Privacy Policy, or any
                    other legal matters, please contact us:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-900">Email Contact</h3>
                      <p className="text-blue-700 font-medium">visa@unitedevisa.com</p>
                      <p className="text-sm text-gray-700 mt-2">
                        For legal inquiries and compliance matters
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-900">General Support</h3>
                      <p className="text-blue-700 font-medium">visa@unitedevisa.com</p>
                      <p className="text-sm text-gray-700 mt-2">
                        For general questions and assistance
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Response Time:</strong> We aim to respond to all legal inquiries
                      within 2-3 business days. For urgent matters, please include "URGENT" in your
                      subject line.
                    </p>
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