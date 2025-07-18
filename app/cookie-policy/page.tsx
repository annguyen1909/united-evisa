/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | United eVisa Immigration Assistance Service',
  description:
    'Learn about how we use cookies and similar technologies on our United eVisa website to improve your experience and provide better services.',
};

export default function CookiePolicyPage() {
  return (
    <>
      <div className="bg-[#f7f9fb] min-h-screen flex flex-col w-full">
        <main className="flex-1">
          {/* Header Section */}
          <section className="w-full bg-white border-b border-gray-200">
            <div className="max-w-4xl mx-auto px-4 py-12">
              <h1 className="text-4xl font-extrabold text-[#0A284B] mb-4">Cookie Policy</h1>
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
                    This Cookie Policy explains how United eVisa Immigration Assistance
                    Service ("we," "us," or "our") uses cookies and similar technologies when you
                    visit our website at unitedevisa.com (the "Website"). This policy should
                    be read alongside our Privacy Policy, which explains how we collect, use, and
                    protect your personal information.
                  </p>
                  <p className="text-[#0A284B]">
                    By using our Website, you consent to the use of cookies in accordance with this
                    Cookie Policy. If you do not agree to our use of cookies, you should set your
                    browser settings accordingly or refrain from using our Website.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">2. What Are Cookies?</h2>
                  <p className="text-[#0A284B] mb-4">
                    Cookies are small text files that are stored on your device (computer, tablet,
                    or mobile phone) when you visit a website. They are widely used to make websites
                    work more efficiently and to provide information to website owners.
                  </p>
                  <p className="text-[#0A284B]">
                    Cookies can be "session" cookies (which are deleted when you close your browser)
                    or "persistent" cookies (which remain on your device for a set period or until
                    you delete them).
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">3. How We Use Cookies</h2>
                  <p className="text-[#0A284B] mb-4">
                    We use cookies for several purposes, including:
                  </p>
                  <ul className="list-disc ml-6 text-[#0A284B] mb-4 space-y-2">
                    <li>
                      <strong>Essential Cookies:</strong> These cookies are necessary for the
                      website to function properly. They enable basic functions like page
                      navigation, access to secure areas, and form submissions.
                    </li>
                    <li>
                      <strong>Performance Cookies:</strong> These cookies help us understand how
                      visitors interact with our website by collecting and reporting information
                      anonymously.
                    </li>
                    <li>
                      <strong>Functional Cookies:</strong> These cookies enable enhanced
                      functionality and personalization, such as remembering your preferences and
                      settings.
                    </li>
                    <li>
                      <strong>Analytics Cookies:</strong> These cookies help us analyze website
                      traffic and understand how our visitors use our site.
                    </li>
                    <li>
                      <strong>Marketing Cookies:</strong> These cookies are used to track visitors
                      across websites to display relevant and engaging advertisements.
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">
                    4. Types of Cookies We Use
                  </h2>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-[#0A284B] mb-3">
                      4.1 Essential Cookies
                    </h3>
                    <p className="text-[#0A284B] mb-2">
                      These cookies are essential for the operation of our website and cannot be
                      disabled. They include:
                    </p>
                    <ul className="list-disc ml-6 text-[#0A284B] space-y-1">
                      <li>Authentication cookies to keep you logged in</li>
                      <li>Security cookies to protect against fraud</li>
                      <li>Session cookies to maintain your application progress</li>
                      <li>Load balancing cookies for website performance</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-[#0A284B] mb-3">
                      4.2 Analytics Cookies
                    </h3>
                    <p className="text-[#0A284B] mb-2">
                      We use Google Analytics and similar services to understand how visitors use
                      our website. These cookies collect information such as:
                    </p>
                    <ul className="list-disc ml-6 text-[#0A284B] space-y-1">
                      <li>Pages visited and time spent on each page</li>
                      <li>Referral sources (how you found our website)</li>
                      <li>Device and browser information</li>
                      <li>Geographic location (country/region level)</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-[#0A284B] mb-3">
                      4.3 Functional Cookies
                    </h3>
                    <p className="text-[#0A284B] mb-2">
                      These cookies enhance your experience by remembering your preferences:
                    </p>
                    <ul className="list-disc ml-6 text-[#0A284B] space-y-1">
                      <li>Language preferences</li>
                      <li>Currency preferences</li>
                      <li>Form data (to prevent re-entry if you accidentally close the page)</li>
                      <li>User interface preferences</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-[#0A284B] mb-3">
                      4.4 Marketing Cookies
                    </h3>
                    <p className="text-[#0A284B] mb-2">
                      These cookies help us deliver relevant advertisements and measure their
                      effectiveness:
                    </p>
                    <ul className="list-disc ml-6 text-[#0A284B] space-y-1">
                      <li>Retargeting cookies to show relevant ads</li>
                      <li>Conversion tracking cookies</li>
                      <li>Social media integration cookies</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">5. Third-Party Cookies</h2>
                  <p className="text-[#0A284B] mb-4">
                    Our website may also use cookies from third-party services, including:
                  </p>
                  <ul className="list-disc ml-6 text-[#0A284B] mb-4 space-y-2">
                    <li>
                      <strong>Google Analytics:</strong> For website analytics and performance
                      monitoring
                    </li>
                    <li>
                      <strong>Google Ads:</strong> For advertising and conversion tracking
                    </li>
                    <li>
                      <strong>Facebook Pixel:</strong> For social media advertising and analytics
                    </li>
                    <li>
                      <strong>Payment Processors:</strong> For secure payment processing
                    </li>
                    <li>
                      <strong>Customer Support Tools:</strong> For live chat and support services
                    </li>
                  </ul>
                  <p className="text-[#0A284B]">
                    These third-party services have their own privacy policies and cookie practices.
                    We encourage you to review their policies for more information.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">
                    6. Managing Your Cookie Preferences
                  </h2>
                  <p className="text-[#0A284B] mb-4">
                    You have several options for managing cookies:
                  </p>

                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-[#0A284B] mb-3">
                      6.1 Browser Settings
                    </h3>
                    <p className="text-[#0A284B] mb-2">
                      Most web browsers allow you to control cookies through their settings. You
                      can:
                    </p>
                    <ul className="list-disc ml-6 text-[#0A284B] space-y-1">
                      <li>Block all cookies</li>
                      <li>Allow only essential cookies</li>
                      <li>Delete existing cookies</li>
                      <li>Set preferences for specific websites</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-[#0A284B] mb-3">
                      6.2 Cookie Consent
                    </h3>
                    <p className="text-[#0A284B]">
                      When you first visit our website, you will see a cookie consent banner. You
                      can:
                    </p>
                    <ul className="list-disc ml-6 text-[#0A284B] space-y-1">
                      <li>Accept all cookies</li>
                      <li>Reject non-essential cookies</li>
                      <li>Customize your preferences</li>
                      <li>Change your preferences at any time</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-[#0A284B] mb-3">6.3 Opt-Out Links</h3>
                    <p className="text-[#0A284B] mb-2">
                      You can opt out of specific third-party cookies:
                    </p>
                    <ul className="list-disc ml-6 text-[#0A284B] space-y-1">
                      <li>
                        <a
                          href="https://tools.google.com/dlpage/gaoptout"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#2563eb] hover:underline"
                        >
                          Google Analytics Opt-out
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/ads/preferences"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#2563eb] hover:underline"
                        >
                          Facebook Ad Preferences
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://adssettings.google.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#2563eb] hover:underline"
                        >
                          Google Ad Settings
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">
                    7. Impact of Disabling Cookies
                  </h2>
                  <p className="text-[#0A284B] mb-4">
                    If you choose to disable cookies, please be aware that:
                  </p>
                  <ul className="list-disc ml-6 text-[#0A284B] space-y-2">
                    <li>Some website features may not function properly</li>
                    <li>You may need to re-enter information more frequently</li>
                    <li>Your user experience may be less personalized</li>
                    <li>Some services may not be available</li>
                    <li>We may not be able to provide you with the best possible service</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">
                    8. Updates to This Policy
                  </h2>
                  <p className="text-[#0A284B] mb-4">
                    We may update this Cookie Policy from time to time to reflect changes in our
                    practices or for other operational, legal, or regulatory reasons. We will notify
                    you of any material changes by:
                  </p>
                  <ul className="list-disc ml-6 text-[#0A284B] space-y-2">
                    <li>Posting the updated policy on our website</li>
                    <li>Updating the "Last updated" date at the top of this policy</li>
                    <li>Sending you an email notification (if required by law)</li>
                  </ul>
                  <p className="text-[#0A284B]">
                    Your continued use of our website after any changes indicates your acceptance of
                    the updated policy.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#0A284B] mb-4">9. Contact Us</h2>
                  <p className="text-[#0A284B] mb-4">
                    If you have any questions about this Cookie Policy or our use of cookies, please
                    contact us:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-[#0A284B] mb-2">
                      <strong>Email:</strong>{' '}
                      <a
                        href="mailto:visa@unitedevisa.com"
                        className="text-[#2563eb] hover:underline"
                      >
                        visa@unitedevisa.com
                      </a>
                    </p>
                    <p className="text-[#0A284B] mb-2">
                      <strong>Address:</strong> United eVisa Immigration Assistance Service
                      <br />
                      [Your Business Address]
                    </p>
                    <p className="text-[#0A284B]">
                      <strong>Phone:</strong> +1 323 286 4541
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-[#2563eb] p-4 rounded">
                  <h3 className="text-lg font-semibold text-[#0A284B] mb-2">Important Note</h3>
                  <p className="text-[#0A284B] text-sm">
                    This Cookie Policy is part of our broader commitment to transparency and data
                    protection. For more information about how we handle your personal data, please
                    read our{' '}
                    <a href="/privacy" className="text-[#2563eb] hover:underline font-semibold">
                      Privacy Policy
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