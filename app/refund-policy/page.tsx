import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy - Worldmaxxing Global Services',
  description:
    'Complete refund policy for Worldmaxxing Global Services Immigration Assistance Service. Learn about refundable and non-refundable fees, processing times, and our money-back guarantee.',
};

export default function RefundPolicyPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <main className="flex-1">
          {/* Hero Section */}
          <div className="bg-white border-b">
            <div className="container mx-auto px-4 py-16">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Refund Policy</h1>
                <p className="text-xl text-gray-800 mb-8">
                  Transparent and fair refund terms for our Worldmaxxing Global Services Immigration
                  Assistance Service
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                  <span>Last Updated: {new Date().toLocaleDateString()}</span>
                  <span>•</span>
                  <span>Version 1.0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              {/* Money Back Guarantee Banner */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-8 mb-8">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <svg
                      className="w-16 h-16 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Money-Back Guarantee</h2>
                  <p className="text-xl text-gray-800 mb-6">
                    <strong>Visa rejected? Get a full refund of your service fees—guaranteed.</strong>
                  </p>
                  <p className="text-gray-700">
                    We stand behind our services with a comprehensive refund policy designed to
                    protect your investment and provide peace of mind.
                  </p>
                </div>
              </div>

              {/* Quick Overview */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
                    <svg
                      className="w-6 h-6 mr-2"
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
                    Refundable
                  </h3>
                  <ul className="space-y-2 text-gray-800">
                    <li> Service fees if visa is rejected</li>
                    <li> Processing errors on our part</li>
                    <li> Technical issues preventing processing</li>
                    <li> Change of mind (before processing begins)</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="text-xl font-semibold text-red-700 mb-4 flex items-center">
                    <svg
                      className="w-6 h-6 mr-2"
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
                    Non-Refundable
                  </h3>
                  <ul className="space-y-2 text-gray-800">
                    <li> Government fees once submitted</li>
                    <li> Approved applications</li>
                    <li> Change of mind after processing begins</li>
                    <li> Incomplete applications</li>
                  </ul>
                </div>
              </div>

              {/* Detailed Refund Policy */}
              <div className="space-y-8">
                {/* Section 1: Refundable Fees */}
                <section className="bg-white rounded-lg shadow-sm border p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Refundable Fees</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-green-700 mb-3">
                        1.1 Service Fee Refund
                      </h3>
                      <p className="text-gray-800 mb-3">
                        <strong>Full refund of service fees</strong> if your eVisa application
                        is declined by immigration authorities.
                      </p>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <p className="text-green-800 text-sm">
                          <strong>Our Guarantee:</strong> If the government rejects your visa
                          application, we will refund 100% of our service fees, no questions asked.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-green-700 mb-3">
                        1.2 Processing Errors
                      </h3>
                      <p className="text-gray-800 mb-3">
                        Full refund if the error is due to our processing mistake or system failure.
                      </p>
                      <ul className="list-disc pl-6 text-gray-800 space-y-1">
                        <li>Incorrect data entry on our part</li>
                        <li>System errors preventing application submission</li>
                        <li>Technical failures during processing</li>
                        <li>Delays caused by our operational issues</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-green-700 mb-3">
                        1.3 Technical Issues
                      </h3>
                      <p className="text-gray-800 mb-3">
                        Refund if we cannot process your application due to technical problems on our
                        end.
                      </p>
                      <ul className="list-disc pl-6 text-gray-800 space-y-1">
                        <li>Website or system downtime</li>
                        <li>Payment processing failures</li>
                        <li>Email delivery issues</li>
                        <li>Document upload problems</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 2: Non-Refundable Fees */}
                <section className="bg-white rounded-lg shadow-sm border p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Non-Refundable Fees</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-red-700 mb-3">2.1 Government Fees</h3>
                      <p className="text-gray-800 mb-3">
                        <strong>Government fees are non-refundable</strong> once submitted to
                        authorities, regardless of the outcome.
                      </p>
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <p className="text-red-800 text-sm">
                          <strong>Important:</strong> Government fees are paid directly to the
                          government and are outside our control. These fees cannot be refunded by us.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-red-700 mb-3">
                        2.2 Approved Applications
                      </h3>
                      <p className="text-gray-800 mb-3">
                        No refund once the approval letter is sent, regardless of whether you use the
                        visa or not.
                      </p>
                      <ul className="list-disc pl-6 text-gray-800 space-y-1">
                        <li>Visa approved but not used</li>
                        <li>Change of travel plans after approval</li>
                        <li>Personal circumstances preventing travel</li>
                        <li>Flight cancellations or travel disruptions</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-red-700 mb-3">2.3 Change of Mind</h3>
                      <p className="text-gray-800 mb-3">
                        <strong>Before Processing:</strong> Change of mind refunds are available if
                        requested before we begin processing your application.
                      </p>
                      <p className="text-gray-800 mb-3">
                        <strong>After Processing Begins:</strong> No refund if you change your travel
                        plans after processing has already started.
                      </p>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                        <p className="text-blue-800 text-sm">
                          <strong>Processing Start:</strong> Processing begins immediately after
                          payment confirmation and document submission. Once we start reviewing your
                          documents or submitting to government authorities, change of mind refunds
                          are no longer available.
                        </p>
                      </div>
                      <ul className="list-disc pl-6 text-gray-800 space-y-1">
                        <li>Deciding not to travel after processing begins</li>
                        <li>Choosing a different travel date after processing begins</li>
                        <li>Selecting a different visa type after processing begins</li>
                        <li>Personal preference changes after processing begins</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-red-700 mb-3">
                        2.4 Incomplete Applications
                      </h3>
                      <p className="text-gray-800 mb-3">
                        <strong>Critical:</strong> No refund if you fail to provide required documents
                        within 3 days of application submission.
                      </p>
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <p className="text-yellow-800 text-sm">
                          <strong>3-Day Rule:</strong> All required documents must be provided within
                          3 days of application submission. Failure to do so will result in forfeiture
                          of all fees.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-red-700 mb-3">2.5 Processing Fees</h3>
                      <p className="text-gray-800 mb-3">
                        Processing fees are non-refundable for any completed processing work.
                      </p>
                      <ul className="list-disc pl-6 text-gray-800 space-y-1">
                        <li>Document review and verification</li>
                        <li>Application form preparation</li>
                        <li>Government fee submission</li>
                        <li>Customer support services</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-red-700 mb-3">
                        2.6 Government Fees - Why They&apos;re Non-Refundable
                      </h3>
                      <p className="text-gray-800 mb-3">
                        Government fees are paid directly to authorities and are{' '}
                        <strong>never refundable</strong>, regardless of the application outcome.
                      </p>
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                        <p className="text-yellow-800 text-sm">
                          <strong>Important:</strong> Even if your visa is rejected, government fees
                          cannot be refunded because they cover the administrative costs of processing
                          your application, regardless of the final decision.
                        </p>
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Why Government Fees Are Non-Refundable:
                      </h4>
                      <ul className="list-disc pl-6 text-gray-800 space-y-2 mb-4">
                        <li>
                          <strong>Administrative Costs:</strong> The government incurs costs to
                          review, process, and make decisions on all applications
                        </li>
                        <li>
                          <strong>Resource Allocation:</strong> Government officials spend time and
                          resources examining your documents and application
                        </li>
                        <li>
                          <strong>System Usage:</strong> Your application uses government systems and
                          databases regardless of the outcome
                        </li>
                        <li>
                          <strong>Processing Time:</strong> Government staff time is consumed during
                          the review period
                        </li>
                        <li>
                          <strong>Decision Making:</strong> The fee covers the cost of making an
                          official decision on your application
                        </li>
                      </ul>
                      <h4 className="font-semibold text-gray-800 mb-2">What You Pay For:</h4>
                      <ul className="list-disc pl-6 text-gray-800 space-y-1">
                        <li>Document verification and validation</li>
                        <li>Background checks and security screening</li>
                        <li>Application processing and review</li>
                        <li>Official decision notification</li>
                        <li>Government system maintenance and support</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 3: Refund Process */}
                <section className="bg-white rounded-lg shadow-sm border p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Refund Process</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        3.1 How to Request a Refund
                      </h3>
                      <ol className="list-decimal pl-6 text-gray-800 space-y-2">
                        <li>
                          <strong>Submit in Writing:</strong> All refund requests must be submitted in
                          writing via email
                        </li>
                        <li>
                          <strong>Include Details:</strong> Provide your application reference number
                          and reason for refund
                        </li>
                        <li>
                          <strong>Supporting Documents:</strong> Include any relevant documentation
                          (rejection letter, etc.)
                        </li>
                        <li>
                          <strong>Contact Information:</strong> Ensure your contact details are
                          current and accurate
                        </li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        3.2 Processing Timeline
                      </h3>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="text-blue-800 font-semibold mb-2">Refund Processing Time:</p>
                        <p className="text-blue-800">
                          Refunds are processed within <strong>5-10 business days</strong> from the
                          date of approval.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">3.3 Refund Method</h3>
                      <ul className="list-disc pl-6 text-gray-800 space-y-2">
                        <li>
                          <strong>Original Payment Method:</strong> Refunds are issued to the original
                          payment method used
                        </li>
                        <li>
                          <strong>Processing Fees:</strong> May apply to refunds depending on payment
                          method
                        </li>
                        <li>
                          <strong>Bank Processing:</strong> Additional time may be required by your
                          bank or payment provider
                        </li>
                        <li>
                          <strong>Currency Conversion:</strong> Refunds in original currency,
                          conversion fees may apply
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 4: Important Conditions */}
                <section className="bg-white rounded-lg shadow-sm border p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Important Conditions</h2>
                  <div className="space-y-6">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-red-800 mb-3">
                        4.1 Critical Time Limits
                      </h3>
                      <ul className="list-disc pl-6 text-red-800 space-y-2">
                        <li>
                          <strong>3-Day Document Rule:</strong> All required documents must be
                          provided within 3 days of application submission
                        </li>
                        <li>
                          <strong>Notification Period:</strong> You must notify us within 3 days if
                          you do not receive the approval letter
                        </li>
                        <li>
                          <strong>Refund Requests:</strong> Must be submitted within 30 days of the
                          relevant event
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Exclusions</h3>
                      <ul className="list-disc pl-6 text-gray-800 space-y-2">
                        <li>Travel arrangements, flights, or accommodation bookings</li>
                        <li>Third-party service fees or charges</li>
                        <li>Bank fees or currency conversion charges</li>
                        <li>Any expenses beyond our service fees</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        4.3 Our Limitations
                      </h3>
                      <ul className="list-disc pl-6 text-gray-800 space-y-2">
                        <li>
                          We are not responsible for decisions made by immigration authorities
                        </li>
                        <li>We cannot influence or expedite government processing times</li>
                        <li>We are not liable for travel disruptions or cancellations</li>
                        <li>Our liability is limited to the amount paid for our services</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 5: Contact Information */}
                <section className="bg-white rounded-lg shadow-sm border p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Contact Information</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Refund Requests</h3>
                      <p className="text-blue-700 font-medium mb-2">visa@worldmaxxing.com</p>
                      <p className="text-sm text-gray-600">For all refund inquiries and requests</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">General Support</h3>
                      <p className="text-blue-700 font-medium mb-2">visa@worldmaxxing.com</p>
                      <p className="text-sm text-gray-600">For general questions and assistance</p>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Response Time:</strong> We aim to respond to all refund inquiries within
                      24-48 hours during business days.
                    </p>
                  </div>
                </section>
              </div>

              {/* Summary Box */}
              <div className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Summary of Our Refund Policy
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6 text-left">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">✅ You Get a Refund When:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li> Immigration authorities reject your visa</li>
                        <li> We make a processing error</li>
                        <li> Technical issues prevent processing</li>
                        <li> You change your mind (before processing begins)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">❌ No Refund When:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li> Government fees (once submitted)</li>
                        <li> Visa is approved</li>
                        <li> You change your mind after processing begins</li>
                        <li> Documents not provided within 3 days</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-white rounded-lg">
                    <p className="text-gray-800 font-semibold">
                      Our Promise: If your visa is rejected by immigration authorities, we will refund 100%
                      of our service fees—guaranteed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
} 