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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Legal Terms & Conditions
              </h1>
              <p className="text-xl text-gray-800 mb-8">
                Comprehensive legal framework governing our United eVisa Immigration
                Assistance Service
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                <span>Last Updated: {new Date().toLocaleDateString()}</span>
                <span>•</span>
                <span>Version 2.0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Important Notice */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">
                    IMPORTANT LEGAL NOTICE
                  </h3>
                  <p className="text-red-800">
                    PLEASE READ THIS GENERAL TERMS OF SERVICE AGREEMENT CAREFULLY, AS IT CONTAINS
                    IMPORTANT INFORMATION REGARDING YOUR LEGAL RIGHTS AND REMEDIES. BY USING OUR
                    SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREED TO BE BOUND
                    BY THESE TERMS.
                  </p>
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
              <section id="indemnity" className="bg-white rounded-lg shadow-sm border p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">10. INDEMNITY</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="mb-4 text-gray-800">
                    You agree to protect, defend, indemnify and hold harmless United eVisa
                    Immigration Assistance Service and its officers, directors, employees, agents,
                    and third party service providers from and against any and all claims, demands,
                    costs, expenses, losses, liabilities and damages of every kind and nature
                    (including, without limitation, reasonable attorneys' fees) imposed upon or
                    incurred by United eVisa Immigration Assistance Service directly or
                    indirectly arising from:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-800">
                    <li>Your use of and access to this Site or the Services found at this Site</li>
                    <li>
                      Your violation of any provision of this Agreement or the policies incorporated
                      herein
                    </li>
                    <li>
                      Your violation of any third-party right, including intellectual property
                      rights
                    </li>
                    <li>
                      Your provision of false, inaccurate, or incomplete information in visa
                      applications
                    </li>
                    <li>Your failure to comply with government visa requirements or regulations</li>
                    <li>Any travel disruptions or issues related to visa processing</li>
                  </ul>
                  <p className="mb-4 text-gray-800">
                    The indemnification obligations under this section shall survive any termination
                    or expiration of this Agreement or your use of this Site or the Services found
                    at this Site.
                  </p>
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
            <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="text-center">
                <p className="text-blue-900 font-semibold mb-2">Agreement Acceptance</p>
                <p className="text-blue-800 text-sm">
                  By using our services, you acknowledge that you have read, understood, and agreed
                  to be bound by these Terms of Service. If you do not agree to these terms, please
                  do not use our services.
                </p>
                <p className="text-blue-700 text-xs mt-4">
                  Last updated: {new Date().toLocaleDateString()} | Version 2.0
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 