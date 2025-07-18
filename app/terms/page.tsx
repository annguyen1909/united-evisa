/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | United eVisa Immigration Assistance Service',
  description:
    'Terms of Service Agreement for United eVisa Immigration Assistance Service - Learn about eligibility, fees, responsibilities, and legal terms.',
};

export default function TermsPage() {
  return (
    <>
      <div className="bg-[#f7f9fb] min-h-screen flex flex-col w-full">
        <main className="flex-1">
          {/* Header Section */}
          <section className="w-full bg-white border-b border-gray-200">
            <div className="max-w-4xl mx-auto px-4 py-12">
              <h1 className="text-4xl font-extrabold text-[#0A284B] mb-4">
                Terms of Service Agreement
              </h1>
              <p className="text-lg text-[#64748b]">
                Last updated:{' '}
                {new Date().toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
          </section>

          {/* Main Content */}
          <section className="max-w-4xl mx-auto px-4 py-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="prose prose-lg max-w-none">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">
                    Terms of Service Agreement for United eVisa Immigration Assistance
                    Service
                  </h2>
                  <p className="text-[#0A284B] mb-4">
                    This United eVisa Immigration Assistance Service Agreement (this
                    "Agreement") is entered into by and between United eVisa Immigration
                    Assistance Service ("we," "us," or "our") and you, and is made effective as of
                    the date of electronic acceptance. This Agreement sets forth the terms and
                    conditions of your use of our United eVisa Immigration Assistance
                    Service (the "Services").
                  </p>
                  <p className="text-[#0A284B]">
                    Your electronic acceptance of this Agreement signifies that you have read,
                    understand, acknowledge and agree to be bound by this Agreement, our Universal
                    Terms of Service Agreement, any plan limits, product disclaimers or other
                    restrictions presented to you on our website, all of which are incorporated
                    herein by reference.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">
                    1. eVisa Eligibility / Non-Eligibility
                  </h2>
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-[#0A284B] mb-3">
                      Eligibility Requirements:
                    </h3>
                    <ul className="list-disc ml-6 text-[#0A284B] space-y-2">
                      <li>Citizens with valid passports from countries listed on our website</li>
                      <li>
                        Your passport must be valid for at least six months beyond your intended
                        stay
                      </li>
                      <li>You must have a valid email address for communication</li>
                      <li>You must have a valid payment method for service fees</li>
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-[#0A284B] mb-3">Non-Eligibility:</h3>
                    <ul className="list-disc ml-6 text-[#0A284B] space-y-2">
                      <li>Persons holding Diplomatic/Official passports</li>
                      <li>A person who is a resident of the destination country and/or works there</li>
                      <li>A person who is declared persona non grata by the destination government</li>
                      <li>
                        A person who is the subject of a blacklist, warning circular, or other
                        restrictive list
                      </li>
                      <li>Persons under 18 years of age without proper parental consent</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">
                    2. Visa Validity and Terms
                  </h2>
                  <ul className="list-disc ml-6 text-[#0A284B] space-y-2">
                    <li>
                      The eVisa is valid for entry into the destination country for the specified period
                    </li>
                    <li>This visa is non-extendable and non-convertible</li>
                    <li>
                      The visa will be issued electronically and must be presented at designated
                      ports in the destination country
                    </li>
                    <li>
                      Entry is subject to approval by immigration authorities at the port of
                      entry
                    </li>
                    <li>
                      Visa validity begins from the date of approval, not the date of application
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">3. Client Obligations</h2>
                  <ul className="list-disc ml-6 text-[#0A284B] space-y-2">
                    <li>
                      Providing accurate and complete personal information as requested on our
                      website
                    </li>
                    <li>Making full payment for our services before processing begins</li>
                    <li>Signing the authorization form to confirm the transaction</li>
                    <li>
                      Any changes after paying the Government Fee will be charged as a new
                      application
                    </li>
                    <li>
                      You are required to notify us within 3 days if you do not receive the approval
                      letter
                    </li>
                    <li>Providing all required documents within the specified timeframe</li>
                    <li>Ensuring your passport meets the validity requirements</li>
                    <li>Complying with all immigration laws and regulations</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">
                    4. Fees and Payment Terms
                  </h2>
                  <p className="text-[#0A284B] mb-4">
                    There are two types of fees that you must pay to obtain your eVisa:
                  </p>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-[#0A284B] mb-3">4.1 Service Fee</h3>
                    <p className="text-[#0A284B] mb-3">
                      Our service fee covers the processing of your eVisa application, including:
                    </p>
                    <ul className="list-disc ml-6 text-[#0A284B] space-y-2">
                      <li>Receiving and reviewing your application</li>
                      <li>Submitting your application to authorities</li>
                      <li>Processing and obtaining the eVisa approval</li>
                      <li>Sending the approval letter to your email</li>
                      <li>24/7 customer support throughout the process</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-[#0A284B] mb-3">
                      4.2 Government Fee
                    </h3>
                    <p className="text-[#0A284B] mb-3">
                      The government fee is the amount paid to the destination country's Immigration Department for
                      visa processing. This fee varies by:
                    </p>
                    <ul className="list-disc ml-6 text-[#0A284B] space-y-2">
                      <li>Visa type (Tourist, Business, Transit)</li>
                      <li>Number of entries (Single, Double, Multiple)</li>
                      <li>Your nationality and country of residence</li>
                      <li>Processing time requirements</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded mb-4">
                    <h4 className="font-semibold text-[#0A284B] mb-2">Important Payment Notes:</h4>
                    <ul className="text-sm text-[#0A284B] space-y-1">
                      <li> Processing begins only after full payment is received</li>
                      <li> All fees are payable in USD (US Dollar)</li>
                      <li> No withholding of fees is permitted for any claims</li>
                      <li> Right of offset is excluded</li>
                      <li> Prices are subject to change without notice</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">
                    5. Our Responsibilities
                  </h2>
                  <ul className="list-disc ml-6 text-[#0A284B] space-y-2">
                    <li>Processing your visa application according to your specifications</li>
                    <li>Providing comprehensive visa information and guidance</li>
                    <li>Notifying you promptly if additional documents are required</li>
                    <li>Informing you of any processing delays beyond normal timeframes</li>
                    <li>Providing 24/7 customer support via email and phone</li>
                    <li>Maintaining the security and confidentiality of your information</li>
                    <li>Complying with all applicable data protection laws</li>
                  </ul>

                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded mt-4">
                    <h4 className="font-semibold text-[#0A284B] mb-2">
                      Limitations of Responsibility:
                    </h4>
                    <ul className="text-sm text-[#0A284B] space-y-1">
                      <li>
                        We are not responsible for delays caused by incorrect email addresses
                      </li>
                      <li>
                        We are not responsible if you fail to notify us of non-receipt within 3
                        days
                      </li>
                      <li>
                        We are not responsible for decisions made by immigration
                        authorities
                      </li>
                      <li>
                        We are not responsible for travel arrangements or accommodation bookings
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">6. Payment Methods</h2>
                  <p className="text-[#0A284B] mb-4">
                    We accept various payment methods for your convenience:
                  </p>
                  <ul className="list-disc ml-6 text-[#0A284B] space-y-2">
                    <li>
                      <strong>Credit Cards:</strong> Visa, MasterCard, American Express
                    </li>
                    <li>
                      <strong>Digital Wallets:</strong> PayPal, Apple Pay, Google Pay
                    </li>
                    <li>
                      <strong>Bank Transfers:</strong> Available for certain regions
                    </li>
                    <li>
                      <strong>Cryptocurrency:</strong> Bitcoin and other major cryptocurrencies
                    </li>
                  </ul>
                  <p className="text-[#0A284B] mt-4">
                    All payments are processed securely through certified payment processors. We do
                    not store your payment information on our servers.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">
                    7. Disclaimer and Limitation of Liability
                  </h2>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                    <p className="text-[#0A284B] mb-3">
                      <strong>Important Disclaimer:</strong> We are not responsible for any loss,
                      delay, or cancellation of your flight tickets, tour bookings, or accommodation
                      reservations in case your visa application or entry is declined by
                      authorities.
                    </p>
                    <p className="text-[#0A284B]">
                      In such cases, we will refund you the full amount paid to us for our services,
                      but we are not liable for any other expenses you may have incurred.
                    </p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-[#0A284B] mb-2">Recommendation:</h4>
                    <p className="text-[#0A284B]">
                      We strongly recommend that you apply for your eVisa at least 1-2 weeks
                      in advance of your travel date to avoid any potential issues and allow
                      sufficient time for processing.
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">
                    8. Definitions and Terminology
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-[#0A284B] mb-2">Date Format:</h4>
                      <p className="text-sm text-[#0A284B]">dd/mm/yyyy (e.g., 20th October 2024)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0A284B] mb-2">Working Days:</h4>
                      <p className="text-sm text-[#0A284B]">
                        Monday to Friday, excluding public holidays
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0A284B] mb-2">Working Hours:</h4>
                      <p className="text-sm text-[#0A284B]">9:00 AM to 6:00 PM EST (GMT-5)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0A284B] mb-2">Cut-off Time:</h4>
                      <p className="text-sm text-[#0A284B]">3:00 PM EST for same-day processing</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">9. Refund Policy</h2>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-[#0A284B] mb-3">
                      9.1 Refundable Fees
                    </h3>
                    <ul className="list-disc ml-6 text-[#0A284B] space-y-2">
                      <li>
                        <strong>Service Fee:</strong> Full refund if your application is declined by
                        authorities
                      </li>
                      <li>
                        <strong>Processing Errors:</strong> Refund if the error is due to our
                        processing mistake
                      </li>
                      <li>
                        <strong>Technical Issues:</strong> Refund if we cannot process your
                        application due to technical problems
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-[#0A284B] mb-3">
                      9.2 Non-Refundable Fees
                    </h3>
                    <ul className="list-disc ml-6 text-[#0A284B] space-y-2">
                      <li>
                        <strong>Government Fee:</strong> Non-refundable once submitted to
                        authorities
                      </li>
                      <li>
                        <strong>Approved Applications:</strong> No refund once approval letter is
                        sent
                      </li>
                      <li>
                        <strong>Change of Mind:</strong> No refund if you change your travel plans
                        after processing
                      </li>
                      <li>
                        <strong>Incomplete Applications:</strong> No refund if you fail to provide
                        required documents within 3 days
                      </li>
                      <li>
                        <strong>Processing Fees:</strong> Non-refundable for any completed
                        processing work
                      </li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                    <h4 className="font-semibold text-[#0A284B] mb-2">Refund Processing:</h4>
                    <ul className="text-sm text-[#0A284B] space-y-1">
                      <li> Refunds are processed within 5-10 business days</li>
                      <li> Refunds are issued to the original payment method</li>
                      <li> Processing fees may apply to refunds</li>
                      <li> All refund requests must be submitted in writing</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">
                    10. Intellectual Property Rights
                  </h2>
                  <p className="text-[#0A284B] mb-4">
                    All content on our website, including but not limited to text, graphics, logos,
                    images, and software, is the property of United eVisa Immigration
                    Assistance Service and is protected by copyright, trademark, and other
                    intellectual property laws.
                  </p>
                  <p className="text-[#0A284B]">
                    You may not reproduce, distribute, modify, or create derivative works from any
                    content on our website without our express written consent.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">
                    11. Privacy and Data Protection
                  </h2>
                  <p className="text-[#0A284B] mb-4">
                    Your privacy is important to us. We collect, use, and protect your personal
                    information in accordance with our Privacy Policy, which is incorporated into
                    this Agreement by reference.
                  </p>
                  <p className="text-[#0A284B]">
                    By using our services, you consent to the collection and use of your information
                    as described in our Privacy Policy.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">
                    12. Governing Law and Dispute Resolution
                  </h2>
                  <p className="text-[#0A284B] mb-4">
                    This Agreement is governed by and construed in accordance with the laws of [Your
                    Jurisdiction]. Any disputes arising from this Agreement shall be resolved
                    through:
                  </p>
                  <ol className="list-decimal ml-6 text-[#0A284B] space-y-2">
                    <li>Direct negotiation between the parties</li>
                    <li>Mediation through a certified mediator</li>
                    <li>Arbitration in accordance with the rules of [Arbitration Organization]</li>
                    <li>Legal proceedings in the courts of [Your Jurisdiction]</li>
                  </ol>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">13. Force Majeure</h2>
                  <p className="text-[#0A284B] mb-4">
                    We shall not be liable for any failure or delay in performance due to
                    circumstances beyond our reasonable control, including but not limited to:
                  </p>
                  <ul className="list-disc ml-6 text-[#0A284B] space-y-2">
                    <li>Natural disasters or acts of God</li>
                    <li>Government actions or regulations</li>
                    <li>Technical failures or system outages</li>
                    <li>Labor disputes or strikes</li>
                    <li>War, terrorism, or civil unrest</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">
                    14. Severability and Waiver
                  </h2>
                  <p className="text-[#0A284B] mb-4">
                    If any provision of this Agreement is found to be invalid or unenforceable, the
                    remaining provisions shall continue in full force and effect. Our failure to
                    enforce any right or provision shall not constitute a waiver of such right or
                    provision.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">15. Entire Agreement</h2>
                  <p className="text-[#0A284B] mb-4">
                    This Agreement, together with our Privacy Policy, Cookie Policy, and any other
                    policies referenced herein, constitutes the entire agreement between you and us
                    regarding the use of our services.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">
                    16. Contact Information
                  </h2>
                  <p className="text-[#0A284B] mb-4">
                    If you have any questions about this Terms of Service Agreement, please contact
                    us:
                  </p>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-[#0A284B] mb-2">
                          General Inquiries
                        </h3>
                        <p className="text-[#0A284B] text-sm mb-1">
                          Email:{' '}
                          <a
                            href="mailto:visa@unitedevisa.com"
                            className="text-[#2563eb] hover:underline"
                          >
                            visa@unitedevisa.com
                          </a>
                        </p>
                        <p className="text-[#0A284B] text-sm">
                          Phone: +1 323 286 4541
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-[#0A284B] mb-2">
                          Customer Support
                        </h3>
                        <p className="text-[#0A284B] text-sm mb-1">
                          Email:{' '}
                          <a
                            href="mailto:visa@unitedevisa.com"
                            className="text-[#2563eb] hover:underline"
                          >
                            visa@unitedevisa.com
                          </a>
                        </p>
                        <p className="text-[#0A284B] text-sm">
                          Address: United eVisa Immigration Assistance Service
                          <br />
                          [Your Business Address]
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-[#2563eb] p-4 rounded">
                  <h3 className="text-lg font-semibold text-[#0A284B] mb-2">Important Notice</h3>
                  <p className="text-[#0A284B] text-sm">
                    By using our services, you acknowledge that you have read, understood, and agree
                    to be bound by these Terms of Service. For more information about our data
                    practices, please read our{' '}
                    <a href="/privacy" className="text-[#2563eb] hover:underline font-semibold">
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a
                      href="/cookie-policy"
                      className="text-[#2563eb] hover:underline font-semibold"
                    >
                      Cookie Policy
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
} 