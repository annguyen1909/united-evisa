/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimers | United eVisa Immigration Assistance Service',
  description:
    'Important disclaimers and legal notices for United eVisa Immigration Assistance Service - Understand our role, limitations, and your rights.',
};

export default function DisclaimersPage() {
  return (
    <>
      <div className="bg-[#f7f9fb] min-h-screen flex flex-col w-full">
        <main className="flex-1">
          {/* Header Section */}
          <section className="w-full bg-white border-b border-gray-200">
            <div className="max-w-4xl mx-auto px-4 py-12">
              <h1 className="text-4xl font-extrabold text-[#0A284B] mb-4">
                Disclaimers & Legal Notices
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
                    1. Company Information and Service Nature
                  </h2>
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded mb-4">
                    <p className="text-[#0A284B] mb-3">
                      <strong>Important Notice:</strong> unitedevisa.com is operated by United
                      eVisa Immigration Assistance Service, a private company that provides
                      visa application assistance and support services.
                    </p>
                    <p className="text-[#0A284B] font-semibold">
                      We are NOT affiliated with any government or official immigration
                      authority.
                    </p>
                  </div>
                  <p className="text-[#0A284B] mb-4">
                    Our role is to assist you with the visa application process by providing
                    guidance, document review, and customer support. We act as an intermediary
                    service provider to simplify the application process for international
                    travelers.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">
                    2. Legal Services Disclaimer
                  </h2>
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded mb-4">
                    <p className="text-[#0A284B] font-semibold">
                      We are NOT a law firm and do NOT provide legal advice, legal opinions, or
                      legal representation of any kind.
                    </p>
                  </div>
                  <p className="text-[#0A284B] mb-4">
                    Our services are limited to visa application assistance and support. We do not
                    provide legal counsel, interpret laws, or represent clients in legal matters.
                    For legal advice regarding immigration matters, please consult with a qualified
                    immigration attorney.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">
                    3. Government Application Alternative
                  </h2>
                  <p className="text-[#0A284B] mb-4">
                    You may choose to apply for a eVisa directly through the official
                    government portal for a lower cost. By using our service, you agree to pay both
                    the official government visa fee and an additional service fee for our
                    processing and assistance. All pricing is clearly disclosed throughout the
                    application process for full transparency.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">
                    4. Service Limitations and Disclaimers
                  </h2>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-[#0A284B] mb-3">
                      4.1 Application Processing
                    </h3>
                    <ul className="list-disc ml-6 text-[#0A284B] space-y-2">
                      <li>
                        We cannot guarantee visa approval - final decisions are made by
                        immigration authorities
                      </li>
                      <li>
                        Processing times are estimates and may vary based on government workload
                      </li>
                      <li>
                        We are not responsible for delays caused by government processing or system
                        issues
                      </li>
                      <li>
                        Application success depends on the accuracy of information provided by the
                        applicant
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-[#0A284B] mb-3">
                      4.2 Information Accuracy
                    </h3>
                    <ul className="list-disc ml-6 text-[#0A284B] space-y-2">
                      <li>
                        While we strive for accuracy, information on our website may change without
                        notice
                      </li>
                      <li>
                        Visa requirements and fees are subject to change by authorities
                      </li>
                      <li>We recommend verifying current requirements with official sources</li>
                      <li>We are not responsible for decisions based on outdated information</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-[#0A284B] mb-3">
                      4.3 Travel Arrangements
                    </h3>
                    <ul className="list-disc ml-6 text-[#0A284B] space-y-2">
                      <li>
                        We are not responsible for flight cancellations, delays, or travel
                        disruptions
                      </li>
                      <li>We do not provide travel insurance or cover travel-related expenses</li>
                      <li>
                        We recommend purchasing travel insurance before making travel arrangements
                      </li>
                      <li>We are not liable for accommodation or tour booking issues</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">
                    5. Financial Disclaimers
                  </h2>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-[#0A284B] mb-3">5.1 Fee Structure</h3>
                    <ul className="list-disc ml-6 text-[#0A284B] space-y-2">
                      <li>Service fees are non-refundable once processing begins</li>
                      <li>Government fees are non-refundable once submitted to authorities</li>
                      <li>
                        Additional fees may apply for expedited processing or special services
                      </li>
                      <li>All fees are clearly disclosed before payment</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-[#0A284B] mb-3">5.2 Refund Policy</h3>
                    <ul className="list-disc ml-6 text-[#0A284B] space-y-2">
                      <li>
                        Service fees are refunded only if application is rejected by authorities
                      </li>
                      <li>No refunds for approved applications or change of mind</li>
                      <li>No refunds for incomplete applications or missing documents</li>
                      <li>Processing fees are non-refundable</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">
                    6. Data and Privacy Disclaimers
                  </h2>
                  <ul className="list-disc ml-6 text-[#0A284B] space-y-2">
                    <li>
                      We collect and process personal data in accordance with our Privacy Policy
                    </li>
                    <li>
                      Data may be shared with government authorities as required for visa processing
                    </li>
                    <li>We implement security measures but cannot guarantee 100% data security</li>
                    <li>We are not responsible for data breaches caused by third-party services</li>
                    <li>
                      Users are responsible for maintaining the security of their account
                      credentials
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">
                    7. Technical Disclaimers
                  </h2>
                  <ul className="list-disc ml-6 text-[#0A284B] space-y-2">
                    <li>
                      We strive for 24/7 service availability but cannot guarantee uninterrupted
                      access
                    </li>
                    <li>
                      Website functionality may be affected by technical issues or maintenance
                    </li>
                    <li>
                      We are not responsible for issues caused by user's internet connection or
                      device
                    </li>
                    <li>System updates may temporarily affect service availability</li>
                    <li>We recommend using supported browsers for optimal functionality</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">
                    8. Third-Party Services Disclaimer
                  </h2>
                  <p className="text-[#0A284B] mb-4">
                    Our services may involve third-party providers for:
                  </p>
                  <ul className="list-disc ml-6 text-[#0A284B] space-y-2">
                    <li>Payment processing and financial transactions</li>
                    <li>Email delivery and communication services</li>
                    <li>Website hosting and technical infrastructure</li>
                    <li>Analytics and performance monitoring</li>
                    <li>Customer support and communication tools</li>
                  </ul>
                  <p className="text-[#0A284B] mt-4">
                    We are not responsible for the actions, policies, or practices of these
                    third-party providers. Each third-party service has its own terms of service and
                    privacy policy.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">
                    9. Force Majeure Disclaimer
                  </h2>
                  <p className="text-[#0A284B] mb-4">
                    We shall not be liable for any failure or delay in performance due to
                    circumstances beyond our reasonable control, including but not limited to:
                  </p>
                  <ul className="list-disc ml-6 text-[#0A284B] space-y-2">
                    <li>Natural disasters, acts of God, or extreme weather conditions</li>
                    <li>Government actions, regulations, or policy changes</li>
                    <li>Technical failures, system outages, or cyber attacks</li>
                    <li>Labor disputes, strikes, or work stoppages</li>
                    <li>War, terrorism, civil unrest, or political instability</li>
                    <li>Pandemics, health emergencies, or travel restrictions</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">
                    10. Limitation of Liability
                  </h2>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                    <p className="text-[#0A284B] font-semibold mb-2">Limitation of Liability:</p>
                    <ul className="text-sm text-[#0A284B] space-y-1">
                      <li>
                         Our total liability shall not exceed the amount paid for our services
                      </li>
                      <li>
                        We are not liable for indirect, incidental, or consequential damages
                      </li>
                      <li>We are not liable for lost profits, data, or business opportunities</li>
                      <li>We are not liable for emotional distress or mental anguish</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">11. Indemnification</h2>
                  <p className="text-[#0A284B] mb-4">
                    By using our services, you agree to indemnify and hold harmless United
                    eVisa Immigration Assistance Service, its officers, directors, employees, and
                    agents from and against any and all claims, damages, losses, or expenses arising from:
                  </p>
                  <ul className="list-disc ml-6 text-[#0A284B] space-y-2">
                    <li>Your use of our services</li>
                    <li>Your violation of our terms of service</li>
                    <li>Your violation of any applicable laws or regulations</li>
                    <li>Your provision of false or misleading information</li>
                    <li>Your failure to comply with visa requirements</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">
                    12. Changes to Disclaimers
                  </h2>
                  <p className="text-[#0A284B] mb-4">
                    We reserve the right to modify these disclaimers at any time. Changes will be
                    effective immediately upon posting on our website. Your continued use of our
                    services after any changes indicates your acceptance of the updated disclaimers.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">
                    13. Governing Law and Jurisdiction
                  </h2>
                  <p className="text-[#0A284B] mb-4">
                    These disclaimers are governed by and construed in accordance with the laws of
                    [Your Jurisdiction]. Any disputes arising from these disclaimers shall be
                    subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">
                    14. Contact Information
                  </h2>
                  <p className="text-[#0A284B] mb-4">
                    If you have any questions about these disclaimers, please contact us:
                  </p>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-[#0A284B] mb-2">
                          Legal Department
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
                    These disclaimers are part of our commitment to transparency and legal
                    compliance. For complete information about our services, please read our{' '}
                    <a href="/terms" className="text-[#2563eb] hover:underline font-semibold">
                      Terms of Service
                    </a>
                    ,{' '}
                    <a href="/privacy" className="text-[#2563eb] hover:underline font-semibold">
                      Privacy Policy
                    </a>
                    , and{' '}
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