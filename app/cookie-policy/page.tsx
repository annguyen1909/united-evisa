import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy - United eVisa',
  description:
    'Learn about how we use cookies and similar technologies on our United eVisa website to improve your experience and provide better services.',
};

export default function CookiePolicyPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <main className="flex-1">
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 border-b">
            <div className="container mx-auto px-4 py-16">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex justify-center mb-6">
                  <svg
                    className="w-20 h-20 text-amber-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Cookie Policy</h1>
                <p className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto">
                  Understanding how we use cookies and similar technologies to enhance your 
                  experience on our United eVisa platform
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                  <span>Last Updated: {new Date().toLocaleDateString()}</span>
                  <span>•</span>
                  <span>Technical Information</span>
                  <span>•</span>
                  <span>Privacy Protection</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              {/* Cookie Information Banner */}
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-lg p-8 mb-8">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <svg
                      className="w-16 h-16 text-amber-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Cookie Information</h2>
                  <p className="text-xl text-gray-800 mb-6">
                    <strong>We use cookies to enhance your browsing experience and improve our services.</strong>
                  </p>
                  <p className="text-gray-700">
                    By using our website, you consent to our use of cookies. Learn about the different 
                    types we use and how to manage your preferences.
                  </p>
                </div>
              </div>

              {/* Cookie Types Overview */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Essential</h3>
                  </div>
                  <p className="text-gray-700">Required for basic website functionality and security</p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Analytics</h3>
                  </div>
                  <p className="text-gray-700">Help us understand how visitors use our website</p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Functional</h3>
                  </div>
                  <p className="text-gray-700">Remember your preferences and enhance functionality</p>
                </div>
              </div>

              {/* Detailed Sections */}
              <div className="space-y-8">
                {/* Section 1: Introduction */}
                <section className="bg-white rounded-lg shadow-sm border p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-amber-600 font-bold">1</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
                  </div>
                  <p className="text-gray-800 mb-4">
                    This Cookie Policy explains how United eVisa Immigration Assistance Service ("we," "us," or "our") 
                    uses cookies and similar technologies when you visit our website at unitedevisa.com (the "Website"). 
                    This policy should be read alongside our Privacy Policy, which explains how we collect, use, and 
                    protect your personal information.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <p className="text-amber-800 text-sm">
                      <strong>Your Consent:</strong> By using our Website, you consent to the use of cookies in 
                      accordance with this Cookie Policy. If you do not agree to our use of cookies, you should 
                      set your browser settings accordingly or refrain from using our Website.
                    </p>
                  </div>
                </section>

                {/* Section 2: What Are Cookies */}
                <section className="bg-white rounded-lg shadow-sm border p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-amber-600 font-bold">2</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">What Are Cookies?</h2>
                  </div>
                  <div className="space-y-6">
                    <p className="text-gray-800">
                      Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) 
                      when you visit a website. They are widely used to make websites work more efficiently and to 
                      provide information to website owners.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h3 className="font-semibold text-blue-800 mb-2">Session Cookies</h3>
                        <p className="text-blue-700 text-sm">
                          Temporary cookies that are deleted when you close your browser
                        </p>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h3 className="font-semibold text-green-800 mb-2">Persistent Cookies</h3>
                        <p className="text-green-700 text-sm">
                          Remain on your device for a set period or until you delete them
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 3: How We Use Cookies */}
                <section className="bg-white rounded-lg shadow-sm border p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-amber-600 font-bold">3</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">How We Use Cookies</h2>
                  </div>
                  <p className="text-gray-800 mb-6">We use cookies for several purposes, including:</p>
                  
                  <div className="grid gap-4">
                    <div className="flex items-start space-x-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-green-800 mb-1">Essential Cookies</h3>
                        <p className="text-green-700 text-sm">
                          Necessary for the website to function properly. Enable basic functions like page navigation, 
                          access to secure areas, and form submissions.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-blue-800 mb-1">Performance Cookies</h3>
                        <p className="text-blue-700 text-sm">
                          Help us understand how visitors interact with our website by collecting and 
                          reporting information anonymously.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-purple-50 border border-purple-200 rounded-lg">
                      <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-purple-800 mb-1">Functional Cookies</h3>
                        <p className="text-purple-700 text-sm">
                          Enable enhanced functionality and personalization, such as remembering your 
                          preferences and settings.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                      <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-indigo-800 mb-1">Analytics Cookies</h3>
                        <p className="text-indigo-700 text-sm">
                          Help us analyze website traffic and understand how our visitors use our site.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                      <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-orange-800 mb-1">Marketing Cookies</h3>
                        <p className="text-orange-700 text-sm">
                          Used to track visitors across websites to display relevant and engaging advertisements.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 4: Types of Cookies */}
                <section className="bg-white rounded-lg shadow-sm border p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-amber-600 font-bold">4</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Types of Cookies We Use</h2>
                  </div>

                  <div className="space-y-8">
                    {/* Essential Cookies */}
                    <div>
                      <h3 className="text-xl font-semibold text-green-700 mb-3">4.1 Essential Cookies</h3>
                      <p className="text-gray-800 mb-4">
                        These cookies are essential for the operation of our website and cannot be disabled. They include:
                      </p>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <ul className="grid md:grid-cols-2 gap-2 text-green-800 text-sm">
                          <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                            Authentication cookies to keep you logged in
                          </li>
                          <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                            Security cookies to protect against fraud
                          </li>
                          <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                            Session cookies to maintain application progress
                          </li>
                          <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                            Load balancing cookies for website performance
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Analytics Cookies */}
                    <div>
                      <h3 className="text-xl font-semibold text-blue-700 mb-3">4.2 Analytics Cookies</h3>
                      <p className="text-gray-800 mb-4">
                        We use Google Analytics and similar services to understand how visitors use our website. 
                        These cookies collect information such as:
                      </p>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <ul className="grid md:grid-cols-2 gap-2 text-blue-800 text-sm">
                          <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                            Pages visited and time spent on each page
                          </li>
                          <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                            Referral sources (how you found our website)
                          </li>
                          <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                            Device and browser information
                          </li>
                          <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                            Geographic location (country/region level)
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Functional Cookies */}
                    <div>
                      <h3 className="text-xl font-semibold text-purple-700 mb-3">4.3 Functional Cookies</h3>
                      <p className="text-gray-800 mb-4">
                        These cookies enhance your experience by remembering your preferences:
                      </p>
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                        <ul className="grid md:grid-cols-2 gap-2 text-purple-800 text-sm">
                          <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
                            Language preferences
                          </li>
                          <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
                            Currency preferences
                          </li>
                          <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
                            Form data (prevent re-entry)
                          </li>
                          <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
                            User interface preferences
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Marketing Cookies */}
                    <div>
                      <h3 className="text-xl font-semibold text-orange-700 mb-3">4.4 Marketing Cookies</h3>
                      <p className="text-gray-800 mb-4">
                        These cookies help us deliver relevant advertisements and measure their effectiveness:
                      </p>
                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                        <ul className="grid md:grid-cols-2 gap-2 text-orange-800 text-sm">
                          <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></span>
                            Retargeting cookies to show relevant ads
                          </li>
                          <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></span>
                            Conversion tracking cookies
                          </li>
                          <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></span>
                            Social media integration cookies
                          </li>
                          <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></span>
                            Advertising performance measurement
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 5: Third-Party Cookies */}
                <section className="bg-white rounded-lg shadow-sm border p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-amber-600 font-bold">5</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Third-Party Cookies</h2>
                  </div>
                  <p className="text-gray-800 mb-6">
                    Our website may also use cookies from third-party services, including:
                  </p>
                  
                  <div className="grid gap-4">
                    <div className="flex items-center p-4 bg-gray-50 rounded-lg border">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">Google Analytics</h3>
                        <p className="text-gray-600 text-sm">Website analytics and performance monitoring</p>
                      </div>
                    </div>

                    <div className="flex items-center p-4 bg-gray-50 rounded-lg border">
                      <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">Google Ads</h3>
                        <p className="text-gray-600 text-sm">Advertising and conversion tracking</p>
                      </div>
                    </div>

                    <div className="flex items-center p-4 bg-gray-50 rounded-lg border">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">Facebook Pixel</h3>
                        <p className="text-gray-600 text-sm">Social media advertising and analytics</p>
                      </div>
                    </div>

                    <div className="flex items-center p-4 bg-gray-50 rounded-lg border">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">Payment Processors</h3>
                        <p className="text-gray-600 text-sm">Secure payment processing and fraud prevention</p>
                      </div>
                    </div>

                    <div className="flex items-center p-4 bg-gray-50 rounded-lg border">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">Customer Support Tools</h3>
                        <p className="text-gray-600 text-sm">Live chat and customer support services</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                    <p className="text-amber-800 text-sm">
                      <strong>Third-Party Policies:</strong> These third-party services have their own privacy 
                      policies and cookie practices. We encourage you to review their policies for more information.
                    </p>
                  </div>
                </section>

                {/* Section 6: Managing Cookie Preferences */}
                <section className="bg-white rounded-lg shadow-sm border p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-amber-600 font-bold">6</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Managing Your Cookie Preferences</h2>
                  </div>
                  
                  <p className="text-gray-800 mb-6">You have several options for managing cookies:</p>

                  <div className="space-y-6">
                    {/* Browser Settings */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 Browser Settings</h3>
                      <p className="text-gray-800 mb-4">
                        Most web browsers allow you to control cookies through their settings. You can:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <ul className="text-blue-800 text-sm space-y-2">
                            <li className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                              Block all cookies
                            </li>
                            <li className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                              Allow only essential cookies
                            </li>
                          </ul>
                        </div>
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <ul className="text-green-800 text-sm space-y-2">
                            <li className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                              Delete existing cookies
                            </li>
                            <li className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                              Set preferences for specific websites
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Cookie Consent */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 Cookie Consent Banner</h3>
                      <p className="text-gray-800 mb-4">
                        When you first visit our website, you will see a cookie consent banner. You can:
                      </p>
                      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-lg p-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <ul className="text-amber-800 text-sm space-y-2">
                            <li className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2"></span>
                              Accept all cookies
                            </li>
                            <li className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2"></span>
                              Reject non-essential cookies
                            </li>
                          </ul>
                          <ul className="text-amber-800 text-sm space-y-2">
                            <li className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2"></span>
                              Customize your preferences
                            </li>
                            <li className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2"></span>
                              Change preferences anytime
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Opt-Out Links */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">6.3 Third-Party Opt-Out</h3>
                      <p className="text-gray-800 mb-4">
                        You can opt out of specific third-party cookies using these links:
                      </p>
                      <div className="grid md:grid-cols-3 gap-4">
                        <a
                          href="https://tools.google.com/dlpage/gaoptout"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center p-3 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-colors"
                        >
                          <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                            <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-medium text-red-800 text-sm">Google Analytics</div>
                            <div className="text-red-600 text-xs">Opt-out</div>
                          </div>
                        </a>

                        <a
                          href="https://www.facebook.com/ads/preferences"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center p-3 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors"
                        >
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-medium text-blue-800 text-sm">Facebook Ads</div>
                            <div className="text-blue-600 text-xs">Preferences</div>
                          </div>
                        </a>

                        <a
                          href="https://adssettings.google.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center p-3 bg-yellow-50 border border-yellow-200 rounded-lg hover:bg-yellow-100 transition-colors"
                        >
                          <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                            <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-medium text-yellow-800 text-sm">Google Ads</div>
                            <div className="text-yellow-600 text-xs">Settings</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 7: Impact of Disabling Cookies */}
                <section className="bg-white rounded-lg shadow-sm border p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-amber-600 font-bold">7</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Impact of Disabling Cookies</h2>
                  </div>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                    <div className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-yellow-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h3 className="font-semibold text-yellow-800 mb-2">Important Notice</h3>
                        <p className="text-yellow-700">
                          If you choose to disable cookies, please be aware that some website features may not function properly.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-red-700 mb-3">Potential Issues:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700 text-sm">Some website features may not function properly</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700 text-sm">You may need to re-enter information more frequently</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700 text-sm">Your user experience may be less personalized</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700 text-sm">Some services may not be available</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-blue-700 mb-3">Still Available:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700 text-sm">Basic website browsing and information</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700 text-sm">Contact forms and basic inquiries</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700 text-sm">Essential security features</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700 text-sm">Core visa information and services</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 8: Contact Information */}
                <section className="bg-white rounded-lg shadow-sm border p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-amber-600 font-bold">8</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
                  </div>
                  
                  <p className="text-gray-800 mb-6">
                    If you have any questions about this Cookie Policy or our use of cookies, please contact us:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Get In Touch</h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <svg className="w-5 h-5 text-amber-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                          <svg className="w-5 h-5 text-amber-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <div>
                            <p className="font-medium text-gray-900">Phone</p>
                            <p className="text-gray-700">+1 323 286 4541</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-blue-900 mb-4">Response Time</h3>
                      <p className="text-blue-800 mb-3">
                        We aim to respond to all cookie-related inquiries within <strong>24-48 hours</strong> during business days.
                      </p>
                      <div className="bg-blue-100 border border-blue-300 rounded-lg p-3">
                        <p className="text-blue-800 text-sm">
                          <strong>Privacy Notice:</strong> For more information about how we handle your personal data, 
                          please read our <a href="/privacy" className="underline hover:no-underline">Privacy Policy</a>.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* Summary Box */}
              <div className="mt-12 bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-lg p-8">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <svg className="w-12 h-12 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Cookie Policy Summary</h3>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-left">
                    <div className="bg-white rounded-lg p-4 border border-amber-200">
                      <h4 className="font-semibold text-green-700 mb-2">🍪 What We Use</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Essential cookies (required)</li>
                        <li>• Analytics cookies (Google Analytics)</li>
                        <li>• Functional cookies (preferences)</li>
                        <li>• Marketing cookies (advertising)</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-amber-200">
                      <h4 className="font-semibold text-blue-700 mb-2">⚙️ Your Control</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Manage browser settings</li>
                        <li>• Use our consent banner</li>
                        <li>• Opt-out of third parties</li>
                        <li>• Contact us for help</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-amber-200">
                      <h4 className="font-semibold text-purple-700 mb-2">🎯 Our Purpose</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Enhance user experience</li>
                        <li>• Improve website performance</li>
                        <li>• Provide relevant content</li>
                        <li>• Ensure security and functionality</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-white rounded-lg border border-amber-200">
                    <p className="text-gray-800">
                      <strong>Last updated:</strong> {new Date().toLocaleDateString()} • 
                      Questions? Contact us at <a href="mailto:visa@unitedevisa.com" className="text-blue-600 hover:underline">visa@unitedevisa.com</a>
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