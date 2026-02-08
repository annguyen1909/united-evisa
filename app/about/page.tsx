import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Globe, Shield, Clock, Users, Award, Mail, Phone, MapPin } from 'lucide-react';
import PageSEO from '@/components/shared/PageSEO';

export const metadata: Metadata = {
  title: 'About Us - United eVisa Services | Leading eVisa Provider',
  description: 'Learn about United eVisa Services - a trusted visa service provider helping travelers secure eVisas to 50+ countries. Expert team, fast processing, 24/7 support, and guaranteed approval.',
  keywords: [
    'about united evisa',
    'visa service provider',
    'eVisa company',
    'travel visa services',
    'visa application assistance',
    'trusted visa provider',
    'global visa services'
  ].join(', '),
  openGraph: {
    title: 'About Us - United eVisa Services',
    description: 'Trusted visa service provider helping travelers secure eVisas to 50+ countries worldwide. Expert team, fast processing, and 24/7 support.',
    url: 'https://unitedevisa.com/about',
    siteName: 'United eVisa Services',
    images: [
      {
        url: '/images/hero/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'United eVisa Services - About Us',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - United eVisa Services',
    description: 'Trusted visa service provider helping travelers secure eVisas to 50+ countries worldwide.',
    images: ['/images/hero/hero.jpg'],
  },
  alternates: {
    canonical: 'https://unitedevisa.com/about',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function AboutPage() {
  return (
    <>
      <PageSEO pageType="homepage" />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `url('/images/hero/hero.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                About United eVisa Services
              </h1>
              <p className="text-xl md:text-2xl text-blue-50 mb-8 leading-relaxed">
                Empowering travelers worldwide with fast, secure, and reliable eVisa application services to 50+ countries.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Globe className="h-8 w-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  To make international travel accessible to everyone by simplifying the visa application process. We believe that borders should never be barriers to exploring the world.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Through our expert-verified application system, 24/7 support, and commitment to excellence, we help travelers secure the documents they need quickly and efficiently.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  To become the world's most trusted and innovative visa service provider, recognized for our transparency, efficiency, and unwavering commitment to customer success.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We envision a future where visa applications are stress-free experiences that enable seamless global connectivity and cultural exchange.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-blue-50/40 via-white to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose United eVisa?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're committed to providing exceptional visa services that exceed expectations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
                <div className="p-4 bg-blue-100 rounded-lg w-fit mb-6">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Trusted & Secure</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your data is protected with industry-leading security measures. We comply with international data protection standards and never share your information.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
                <div className="p-4 bg-blue-100 rounded-lg w-fit mb-6">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Processing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Most visa applications are processed within 24-72 hours. Our streamlined system ensures quick turnaround times without compromising accuracy.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
                <div className="p-4 bg-purple-100 rounded-lg w-fit mb-6">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our team of visa specialists is available 24/7 to guide you through every step of the process. Get expert advice when you need it most.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
                <div className="p-4 bg-amber-100 rounded-lg w-fit mb-6">
                  <Globe className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">50+ Destinations</h3>
                <p className="text-gray-600 leading-relaxed">
                  We support visa applications for over 50 countries worldwide, from popular tourist destinations to business travel hubs.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
                <div className="p-4 bg-red-100 rounded-lg w-fit mb-6">
                  <CheckCircle2 className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Guaranteed Approval</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our expert team reviews every application to ensure accuracy. We're confident in our process and stand behind our service quality.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
                <div className="p-4 bg-amber-100 rounded-lg w-fit mb-6">
                  <Award className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Track Record</h3>
                <p className="text-gray-600 leading-relaxed">
                  Trusted by over 500,000 travelers worldwide. Our success rate speaks to our commitment to excellence and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Information */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Company Information
              </h2>
              
              <div className="bg-blue-50/40 rounded-2xl p-8 lg:p-12 mb-8 border border-blue-100">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Who We Are</h3>
                    <p className="text-gray-700 leading-relaxed">
                      United eVisa Services is a leading global visa service provider specializing in eVisa applications for travelers worldwide. Founded with the mission to simplify international travel, we've helped hundreds of thousands of travelers secure the documents they need to explore the world.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Do</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We provide comprehensive visa application services including:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Online eVisa applications for 50+ countries</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Expert guidance and application assistance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>24/7 customer support and status tracking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Requirements verification and eligibility checking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Fast processing with guaranteed approval support</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Commitment</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We are committed to providing transparent, reliable, and efficient visa services. Every application is handled with care, reviewed by our expert team, and processed according to the latest government requirements. Your satisfaction and successful travel are our top priorities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 lg:py-24 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-blue-50 mb-8">
                Have questions? Our team is here to help you with your visa needs.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                  <Phone className="h-6 w-6 mb-3" />
                  <p className="font-semibold mb-1">Phone</p>
                  <a href="tel:+13232864541" className="text-blue-100 hover:text-white">
                    +1 323 286 4541
                  </a>
                </div>
                
                <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                  <Mail className="h-6 w-6 mb-3" />
                  <p className="font-semibold mb-1">Email</p>
                  <a href="mailto:visa@unitedevisa.com" className="text-blue-100 hover:text-white break-all">
                    visa@unitedevisa.com
                  </a>
                </div>
                
                <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                  <MapPin className="h-6 w-6 mb-3" />
                  <p className="font-semibold mb-1">Address</p>
                  <p className="text-blue-100 text-sm text-center">
                    1308 E Colorado Blvd, #2244<br />
                    Pasadena, CA 91106
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/check-requirements">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                    Check Visa Requirements
                  </Button>
                </Link>
                <Link href="/support">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Contact Support
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Apply for your eVisa today and experience our fast, secure, and reliable service.
              </p>
              <Link href="/check-requirements">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Apply for Visa Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
