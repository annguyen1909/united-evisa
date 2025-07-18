/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | United eVisa Immigration Assistance Service',
  description:
    'Learn how we collect, use, and protect your personal information when you use our United eVisa Immigration Assistance Service.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="bg-[#f7f9fb] min-h-screen flex flex-col w-full">
        <main className="flex-1">
          {/* Header Section */}
          <section className="w-full bg-white border-b border-gray-200">
            <div className="max-w-4xl mx-auto px-4 py-12">
              <h1 className="text-4xl font-extrabold text-[#0A284B] mb-4">Privacy Policy</h1>
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
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">1. Introduction</h2>
                  <p className="text-[#0A284B] mb-4">
                    United eVisa Immigration Assistance Service ("we," "us," or "our") is
                    committed to protecting your privacy and ensuring the security of your personal
                    information. This Privacy Policy explains how we collect, use, disclose, and
                    safeguard your information when you visit our website at unitedevisa.com
                    and use our United eVisa Immigration Assistance Service.
                  </p>
                  <p className="text-[#0A284B]">
                    By using our services, you consent to the collection and use of your information
                    as described in this Privacy Policy. If you do not agree with our policies and
                    practices, please do not use our services.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">
                    2. Information We Collect
                  </h2>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-[#0A284B] mb-3">
                      2.1 Personal Information
                    </h3>
                    <p className="text-[#0A284B] mb-3">
                      We collect personal information that you provide directly to us, including:
                    </p>
                    <ul className="list-disc ml-6 text-[#0A284B] space-y-2">
                      <li>
                        <strong>Identification Information:</strong> Full name, date of birth,
                        nationality, passport number, passport expiry date
                      </li>
                      <li>
                        <strong>Contact Information:</strong> Email address, phone number, mailing
                        address
                      </li>
                      <li>
                        <strong>Travel Information:</strong> Travel dates, purpose of visit,
                        accommodation details
                      </li>
                      <li>
                        <strong>Payment Information:</strong> Credit card details, billing address
                        (processed securely through third-party payment processors)
                      </li>
                      <li>
                        <strong>Communication Records:</strong> Emails, chat messages, support
                        tickets
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-[#0A284B] mb-3">
                      2.2 Automatically Collected Information
                    </h3>
                    <p className="text-[#0A284B] mb-3">
                      When you visit our website, we automatically collect certain information,
                      including:
                    </p>
                    <ul className="list-disc ml-6 text-[#0A284B] space-y-2">
                      <li>
                        <strong>Device Information:</strong> IP address, browser type, operating
                        system, device identifiers
                      </li>
                      <li>
                        <strong>Usage Information:</strong> Pages visited, time spent on pages,
                        click patterns, search queries
                      </li>
                      <li>
                        <strong>Location Information:</strong> Country/region based on IP address
                        (not precise location)
                      </li>
                      <li>
                        <strong>Technical Information:</strong> Cookies, web beacons, log files,
                        analytics data
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-[#0A284B] mb-3">
                      2.3 Information from Third Parties
                    </h3>
                    <p className="text-[#0A284B] mb-3">
                      We may receive information from third parties, including:
                    </p>
                    <ul className="list-disc ml-6 text-[#0A284B] space-y-2">
                      <li>Payment processors for transaction verification</li>
                      <li>Government authorities for visa processing</li>
                      <li>Analytics providers for website usage data</li>
                      <li>Social media platforms (if you connect your accounts)</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">
                    3. How We Use Your Information
                  </h2>
                  <p className="text-[#0A284B] mb-4">
                    We use the information we collect for the following purposes:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-[#0A284B] mb-2">Service Provision</h4>
                      <ul className="text-sm text-[#0A284B] space-y-1">
                        <li> Process visa applications</li>
                        <li> Verify identity and documents</li>
                        <li> Process payments</li>
                        <li> Send confirmation emails</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-[#0A284B] mb-2">Customer Support</h4>
                      <ul className="text-sm text-[#0A284B] space-y-1">
                        <li>  Respond to inquiries</li>
                        <li> Provide technical support</li>
                        <li> Resolve issues</li>
                        <li> Send updates</li>
                      </ul>
                    </div>

                    <div className="bg-yellow-50 rounded-lg p-4">
                      <h4 className="font-semibold text-[#0A284B] mb-2">Website Improvement</h4>
                      <ul className="text-sm text-[#0A284B] space-y-1">
                        <li> Analyze usage patterns</li>
                        <li> Improve user experience</li>
                        <li> Fix technical issues</li>
                        <li> Optimize performance</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-4">
                      <h4 className="font-semibold text-[#0A284B] mb-2">Legal Compliance</h4>
                      <ul className="text-sm text-[#0A284B] space-y-1">
                        <li> Comply with laws</li>
                        <li> Prevent fraud</li>
                        <li> Protect rights</li>
                        <li> Maintain security</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">
                    4. Legal Basis for Processing
                  </h2>
                  <p className="text-[#0A284B] mb-4">
                    We process your personal information based on the following legal grounds:
                  </p>
                  <ul className="list-disc ml-6 text-[#0A284B] space-y-2">
                    <li>
                      <strong>Contract Performance:</strong> To provide the services you requested
                    </li>
                    <li>
                      <strong>Legitimate Interest:</strong> To improve our services and prevent
                      fraud
                    </li>
                    <li>
                      <strong>Legal Obligation:</strong> To comply with applicable laws and
                      regulations
                    </li>
                    <li>
                      <strong>Consent:</strong> For marketing communications and non-essential
                      cookies
                    </li>
                    <li>
                      <strong>Vital Interest:</strong> To protect your safety or the safety of
                      others
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">
                    5. Information Sharing and Disclosure
                  </h2>
                  <p className="text-[#0A284B] mb-4">
                    We may share your information in the following circumstances:
                  </p>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-[#0A284B] mb-3">
                      5.1 Service Providers
                    </h3>
                    <p className="text-[#0A284B] mb-3">
                      We share information with trusted third-party service providers who assist us
                      in:
                    </p>
                    <ul className="list-disc ml-6 text-[#0A284B] space-y-2">
                      <li>Payment processing and fraud prevention</li>
                      <li>Website hosting and technical support</li>
                      <li>Email delivery and customer communication</li>
                      <li>Analytics and performance monitoring</li>
                      <li>Document verification and identity checks</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-[#0A284B] mb-3">
                      5.2 Government Authorities
                    </h3>
                    <p className="text-[#0A284B] mb-3">
                      We may share information with government authorities when:
                    </p>
                    <ul className="list-disc ml-6 text-[#0A284B] space-y-2">
                      <li>Required by law or regulation</li>
                      <li>Processing visa applications</li>
                      <li>Investigating fraud or illegal activities</li>
                      <li>Complying with court orders or legal requests</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-[#0A284B] mb-3">
                      5.3 Business Transfers
                    </h3>
                    <p className="text-[#0A284B]">
                      In the event of a merger, acquisition, or sale of assets, your information may
                      be transferred to the new entity, subject to the same privacy protections.
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">6. Data Security</h2>
                  <p className="text-[#0A284B] mb-4">
                    We implement appropriate technical and organizational measures to protect your
                    personal information:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-[#0A284B] mb-2">Technical Measures</h4>
                      <ul className="text-sm text-[#0A284B] space-y-1">
                        <li> SSL/TLS encryption</li>
                        <li> Secure data centers</li>
                        <li> Regular security updates</li>
                        <li> Access controls</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-[#0A284B] mb-2">Organizational Measures</h4>
                      <ul className="text-sm text-[#0A284B] space-y-1">
                        <li> Employee training</li>
                        <li> Data access policies</li>
                        <li> Incident response plans</li>
                        <li> Regular audits</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">7. Data Retention</h2>
                  <p className="text-[#0A284B] mb-4">
                    We retain your personal information for as long as necessary to:
                  </p>
                  <ul className="list-disc ml-6 text-[#0A284B] mb-4 space-y-2">
                    <li>Provide our services and maintain your account</li>
                    <li>Comply with legal and regulatory requirements</li>
                    <li>Resolve disputes and enforce agreements</li>
                    <li>Prevent fraud and ensure security</li>
                  </ul>
                  <p className="text-[#0A284B]">
                    Specific retention periods vary by data type and purpose. We will delete or
                    anonymize your information when it is no longer needed.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">8. Your Rights</h2>
                  <p className="text-[#0A284B] mb-4">
                    Depending on your location, you may have the following rights regarding your
                    personal information:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-[#0A284B] mb-2">Access & Portability</h4>
                      <p className="text-sm text-[#0A284B]">
                        Request access to your data and receive a copy in a portable format.
                      </p>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-[#0A284B] mb-2">Correction</h4>
                      <p className="text-sm text-[#0A284B]">
                        Request correction of inaccurate or incomplete information.
                      </p>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-[#0A284B] mb-2">Deletion</h4>
                      <p className="text-sm text-[#0A284B]">
                        Request deletion of your personal information (subject to legal
                        requirements).
                      </p>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-[#0A284B] mb-2">Restriction</h4>
                      <p className="text-sm text-[#0A284B]">
                        Request restriction of processing in certain circumstances.
                      </p>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-[#0A284B] mb-2">Objection</h4>
                      <p className="text-sm text-[#0A284B]">
                        Object to processing based on legitimate interests.
                      </p>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-[#0A284B] mb-2">Withdraw Consent</h4>
                      <p className="text-sm text-[#0A284B]">
                        Withdraw consent for processing based on consent.
                      </p>
                    </div>
                  </div>

                  <p className="text-[#0A284B]">
                    To exercise these rights, please contact us using the information provided in
                    the "Contact Us" section below.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">
                    9. International Data Transfers
                  </h2>
                  <p className="text-[#0A284B] mb-4">
                    Your personal information may be transferred to and processed in countries other
                    than your own. We ensure appropriate safeguards are in place for such transfers:
                  </p>
                  <ul className="list-disc ml-6 text-[#0A284B] space-y-2">
                    <li>Standard Contractual Clauses (SCCs) for EU data transfers</li>
                    <li>Adequacy decisions by relevant authorities</li>
                    <li>Certification schemes and codes of conduct</li>
                    <li>Other appropriate safeguards as required by law</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">10. Children's Privacy</h2>
                  <p className="text-[#0A284B] mb-4">
                    Our services are not intended for children under the age of 16. We do not
                    knowingly collect personal information from children under 16. If you believe we
                    have collected information from a child under 16, please contact us immediately.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">
                    11. Changes to This Privacy Policy
                  </h2>
                  <p className="text-[#0A284B] mb-4">
                    We may update this Privacy Policy from time to time. We will notify you of any
                    material changes by:
                  </p>
                  <ul className="list-disc ml-6 text-[#0A284B] space-y-2">
                    <li>Posting the updated policy on our website</li>
                    <li>Updating the "Last updated" date</li>
                    <li>Sending you an email notification for significant changes</li>
                    <li>Displaying a notice on our website</li>
                  </ul>
                  <p className="text-[#0A284B]">
                    Your continued use of our services after any changes indicates your acceptance
                    of the updated policy.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">12. Contact Us</h2>
                  <p className="text-[#0A284B] mb-4">
                    If you have any questions about this Privacy Policy or our data practices,
                    please contact us:
                  </p>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-[#0A284B] mb-2">
                          Data Protection Officer
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
                          General Privacy Inquiries
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
                  <h3 className="text-lg font-semibold text-[#0A284B] mb-2">
                    Additional Information
                  </h3>
                  <p className="text-[#0A284B] text-sm">
                    For information about how we use cookies and similar technologies, please read
                    our{' '}
                    <a
                      href="/cookie-policy"
                      className="text-[#2563eb] hover:underline font-semibold"
                    >
                      Cookie Policy
                    </a>
                    . For information about our compliance with EU regulations, please read our{' '}
                    <a
                      href="/digital-services-act"
                      className="text-[#2563eb] hover:underline font-semibold"
                    >
                      Digital Services Act
                    </a>{' '}
                    page.
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