'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Calendar, 
  Clock, 
  CreditCard, 
  Globe, 
  MapPin, 
  Users, 
  FileText, 
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Info,
  AlertCircle,
  Star,
  Shield,
  Phone,
  Mail,
  MessageCircle,
  BarChart3,
  Sun,
  Cloud,
  Zap,
  Droplets
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import CheckEligibilityWithPreset from '../../../components/shared/CheckEligibilityWithPreset';
import BreadcrumbNavigation from '@/components/shared/BreadcrumbNavigation';
import RequirementsPostStructuredData from '@/components/shared/RequirementsPostStructuredData';

const zimbabweVisaTypes = [
  {
    id: 'zimbabwe-tourist-single-30-days',
    name: 'Tourist Evisa (Single Entry for 30 days)',
    type: 'Tourist Evisa',
    description: 'Single Entry for 30 days',
    entry: 'Single Entry',
    visaDuration: 30,
    visaValidity: '90 days',
    govFee: 60,
    processingTime: '5 working days',
    features: ['Tourism', 'Wildlife viewing', 'Victoria Falls visits', 'Cultural exploration']
  },
  {
    id: 'zimbabwe-tourist-double-30-days',
    name: 'Tourist Evisa (Double Entries for 30 days)',
    type: 'Tourist Evisa',
    description: 'Double Entries for 30 days',
    entry: 'Double Entries',
    visaDuration: 30,
    visaValidity: '90 days',
    govFee: 75,
    processingTime: '5 working days',
    features: ['Extended tourism', 'Multiple visits', 'Wildlife viewing', 'Victoria Falls visits']
  },
  {
    id: 'zimbabwe-business-single-30-days',
    name: 'Business Evisa (Single Entry for 30 days)',
    type: 'Business Evisa',
    description: 'Single Entry for 30 days',
    entry: 'Single Entry',
    visaDuration: 30,
    visaValidity: '90 days',
    govFee: 60,
    processingTime: '5 working days',
    features: ['Business meetings', 'Trade activities', 'Commercial visits', 'Investment opportunities']
  },
  {
    id: 'zimbabwe-business-double-30-days',
    name: 'Business Evisa (Double Entries for 30 days)',
    type: 'Business Evisa',
    description: 'Double Entries for 30 days',
    entry: 'Double Entries',
    visaDuration: 30,
    visaValidity: '90 days',
    govFee: 75,
    processingTime: '5 working days',
    features: ['Extended business', 'Multiple visits', 'Trade activities', 'Commercial visits']
  },
  {
    id: 'zimbabwe-kaza-multiple-90-days',
    name: 'Kaza Univisa (Multiple Entries for 90 days)',
    type: 'Kaza Univisa',
    description: 'Multiple Entries for 90 days',
    entry: 'Multiple Entries',
    visaDuration: 90,
    visaValidity: '7 days',
    govFee: 80,
    processingTime: '5 working days',
    features: ['Zimbabwe-Zambia border', 'Victoria Falls access', 'Regional tourism', 'Cross-border travel']
  }
];

const faqs = [
  {
    question: 'Do I need a visa to visit Zimbabwe?',
    answer: 'Most foreign nationals require a visa to enter Zimbabwe. The eVisa system allows eligible travelers to apply online before their trip. Check your eligibility on our platform.'
  },
  {
    question: 'How long does it take to process a Zimbabwe eVisa?',
    answer: 'Processing time for Zimbabwe eVisas is typically 5 working days. Apply at least 2 weeks before your travel date to avoid delays.'
  },
  {
    question: 'What documents do I need for a Zimbabwe eVisa?',
    answer: 'You will need a valid passport (at least 6 months validity), recent passport-size photo, proof of accommodation, return flight tickets, and sufficient funds. Additional documents may be required.'
  },
  {
    question: 'Can I extend my Zimbabwe visa?',
    answer: 'Visa extensions are possible in Zimbabwe for valid reasons. Visit the local immigration office for more information about extension procedures.'
  },
  {
    question: 'Is Zimbabwe safe for tourists?',
    answer: 'Zimbabwe is generally safe for tourists. Exercise standard precautions and respect local customs and traditions, especially in remote areas.'
  },
  {
    question: 'How much does a Zimbabwe eVisa cost?',
    answer: 'Government fees range from $60 to $80 USD depending on the visa type and duration. See the visa types section for specific details.'
  },
  {
    question: 'Can I apply for a Zimbabwe eVisa if I have a criminal record?',
    answer: 'Applicants with criminal records may face additional scrutiny. Be honest in your application and provide all required documentation.'
  },
  {
    question: 'What happens if my Zimbabwe eVisa application is denied?',
    answer: 'You will receive a notification with the reason for denial. You may reapply after addressing the issues or contact our support for guidance.'
  },
  {
    question: 'What is the Kaza Univisa?',
    answer: 'The Kaza Univisa allows travel between Zimbabwe and Zambia for tourism purposes, including access to Victoria Falls from both countries.'
  },
  {
    question: 'What should I do if I lose my Zimbabwe eVisa approval letter?',
    answer: 'Contact our support team or log in to your account to download your approval letter again.'
  }
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Check Visa Requirements", href: "/check-requirements" },
  { label: "Zimbabwe Requirements" }
];

export default function ZimbabweRequirementsPage() {
  const [activeSection, setActiveSection] = useState('overview');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <RequirementsPostStructuredData country="Zimbabwe" countrySlug="zimbabwe" />
      
      {/* Breadcrumb Navigation */}
      <div className="w-full bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <BreadcrumbNavigation items={breadcrumbItems} />
        </div>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-amber-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <Image
            src="/images/country/zimbabwe/zimbabwe-bg.jpg"
            alt="Zimbabwe Wildlife"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">Visa Requirements</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Zimbabwe Visa <span className="text-blue-200">Requirements</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Complete guide to Zimbabwe eVisa requirements, application process, and travel information for your African adventure
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Check Eligibility Section */}
        <div className="mb-12">
          <CheckEligibilityWithPreset 
            presetDestination="zw"
            title="Check Your Zimbabwe Visa Eligibility"
            description="Select your nationality to check if you need a visa for Zimbabwe"
          />
        </div>

                {/* Table of Contents */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-6 mb-8 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <FileText className="h-6 w-6 text-blue-600" />
            Table of Contents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { id: 'overview', title: 'Overview', icon: Globe },
              { id: 'visa-types', title: 'Visa Types', icon: FileText },
              { id: 'requirements', title: 'Requirements', icon: CheckCircle },
              { id: 'application', title: 'Application Process', icon: Calendar },
              { id: 'fees', title: 'Fees & Processing', icon: CreditCard },
              { id: 'travel-guide', title: 'Travel Guide', icon: Globe },
              { id: 'analytics', title: 'Processing Insights', icon: BarChart3 },
              { id: 'why-choose-us', title: 'Why Choose Us', icon: Shield },
              { id: 'contact', title: 'Contact & Support', icon: Phone },
              { id: 'faq', title: 'FAQ', icon: Users }
            ].map(({ id, title, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`flex items-center gap-3 p-3 rounded-lg text-left transition-all duration-200 ${
                  activeSection === id
                    ? 'bg-blue-100 text-blue-700 border border-blue-200'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Overview Section */}
        <section id="overview" className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <Globe className="h-8 w-8 text-blue-600" />
              Zimbabwe Overview
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">About Zimbabwe</h3>
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Zimbabwe, located in Southern Africa, is renowned for its stunning landscapes, incredible wildlife, and rich culture. From the majestic Victoria Falls to the pristine Hwange National Park, Zimbabwe offers unforgettable experiences for nature lovers and adventure travelers.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    The country is home to some of Africa's most spectacular wildlife, including elephants, lions, leopards, and a variety of bird species. Visitors can explore the mighty Zambezi River, experience traditional Zimbabwean culture, and enjoy the warm hospitality of the local people.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    The Zimbabwe eVisa system makes it easy for international visitors to obtain travel authorization online before arrival, streamlining the process for tourism and business travel.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <Image
                  src="/images/country/zimbabwe/zimbabwe-bg.jpg"
                  alt="Zimbabwe Wildlife"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                  <span className="text-sm font-semibold text-slate-800">🇿🇼 Zimbabwe</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-r from-blue-50 to-amber-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <h4 className="font-semibold text-slate-800">Capital</h4>
                </div>
                <p className="text-slate-600">Harare</p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="h-6 w-6 text-blue-600" />
                  <h4 className="font-semibold text-slate-800">Language</h4>
                </div>
                <p className="text-slate-600">English, Shona, Sindebele</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
                <div className="flex items-center gap-3 mb-3">
                  <CreditCard className="h-6 w-6 text-purple-600" />
                  <h4 className="font-semibold text-slate-800">Currency</h4>
                </div>
                <p className="text-slate-600">Zimbabwean Dollar (ZWL)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Visa Types Section */}
        <section id="visa-types" className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <FileText className="h-8 w-8 text-blue-600" />
              Available Visa Types
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {zimbabweVisaTypes.map((visa, index) => (
                <Card key={index} className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/90 backdrop-blur-sm">
                  <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-amber-500" />
                  <CardHeader className="pt-6 pb-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl shadow-lg bg-gradient-to-r from-blue-500 to-amber-500 text-white">
                        <CheckCircle className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg font-bold text-slate-800 mb-2">
                          {visa.name}
                        </CardTitle>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                          {visa.type}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pb-4">
                    <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                      {visa.description}
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">Duration:</span>
                        <span className="text-sm font-semibold text-slate-800">{visa.visaDuration} days</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">Validity:</span>
                        <span className="text-sm font-semibold text-slate-800">{visa.visaValidity}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">Processing:</span>
                        <span className="text-sm font-semibold text-slate-800">{visa.processingTime}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">Government Fee:</span>
                        <span className="text-sm font-bold text-blue-600">${visa.govFee} USD</span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-slate-700 mb-2">Suitable for:</h4>
                      <div className="flex flex-wrap gap-1">
                        {visa.features.map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="pt-4 pb-6">
                    <Link href={`/apply?country=zimbabwe&type=${encodeURIComponent(visa.id)}`} className="w-full">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-amber-600 hover:from-blue-700 hover:to-amber-700 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                        Apply for Zimbabwe eVisa
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section id="requirements" className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <CheckCircle className="h-8 w-8 text-blue-600" />
              Visa Requirements
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Required Documents</h3>
                <div className="space-y-4">
                  {[
                    'Valid passport with at least 6 months validity beyond intended stay',
                    'Recent passport-size photograph',
                    'Proof of accommodation in Zimbabwe',
                    'Return flight tickets or onward travel itinerary',
                    'Proof of sufficient funds for the duration of stay',
                    'Travel insurance (recommended)'
                  ].map((requirement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Additional Requirements by Visa Type</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Business Visa</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Business invitation letter</li>
                      <li>• Company registration documents</li>
                      <li>• Proof of business activities</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Kaza Univisa</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Valid for Zimbabwe-Zambia border crossing</li>
                      <li>• Access to Victoria Falls from both countries</li>
                      <li>• Regional tourism and cross-border travel</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Travel Information</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Zimbabwe has a tropical climate moderated by altitude</li>
                      <li>• English, Shona, and Sindebele are official languages</li>
                      <li>• Check current travel advisories for remote areas</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process Section */}
        <section id="application" className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <Calendar className="h-8 w-8 text-blue-600" />
              Application Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: 1,
                  title: 'Application Online',
                  description: 'Submit your eVisa application on our website',
                  icon: FileText
                },
                {
                  step: 2,
                  title: 'Payment Online',
                  description: 'Secured payment system that accepts Cards, or Bank Transfer',
                  icon: CreditCard
                },
                {
                  step: 3,
                  title: 'Submit Documents',
                  description: 'Submit and manage your required documents through our secured portal',
                  icon: ExternalLink
                },
                {
                  step: 4,
                  title: 'Receive Your eVisa',
                  description: 'Sit back and relax — we\'ll deliver your eVisa straight to your inbox',
                  icon: CheckCircle
                }
              ].map(({ step, title, description, icon: Icon }) => (
                <div key={step} className="text-center">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-amber-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {step}
                    </div>
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">{title}</h3>
                  <p className="text-sm text-slate-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fees & Processing Section */}
        <section id="fees" className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <CreditCard className="h-8 w-8 text-blue-600" />
              Fees & Processing Times
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Visa Fees</h3>
                <div className="space-y-4">
                  {zimbabweVisaTypes.map((visa, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-slate-800">{visa.type}</h4>
                        <p className="text-sm text-slate-600">{visa.entry} - Duration: {visa.visaDuration} days</p>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold text-blue-600">${visa.govFee} USD</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Processing Times</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <h4 className="font-semibold text-slate-800">Standard Processing</h4>
                    </div>
                    <p className="text-slate-600">5 working days</p>
                  </div>
                  
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <div className="flex items-center gap-3 mb-2">
                      <AlertCircle className="h-5 w-5 text-orange-600" />
                      <h4 className="font-semibold text-slate-800">Important Note</h4>
                    </div>
                    <p className="text-slate-600">Apply at least 2 weeks before travel to avoid delays</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Travel Information Section */}
        <section id="travel-info" className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <MapPin className="h-8 w-8 text-blue-600" />
              Travel Information
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Best Time to Visit</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-amber-50 rounded-lg border border-blue-100">
                    <h4 className="font-semibold text-slate-800 mb-2">May to October</h4>
                    <p className="text-sm text-slate-600">Dry season with pleasant weather, ideal for wildlife viewing and Victoria Falls visits</p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                    <h4 className="font-semibold text-slate-800 mb-2">November to April</h4>
                    <p className="text-sm text-slate-600">Rainy season with lush vegetation, suitable for bird watching and cultural experiences</p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
                    <h4 className="font-semibold text-slate-800 mb-2">Year-round</h4>
                    <p className="text-sm text-slate-600">Zimbabwe offers unique experiences throughout the year for nature and wildlife enthusiasts</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Entry Points</h3>
                <div className="space-y-3">
                  {[
                    'Robert Gabriel Mugabe International Airport (HRE) - Harare',
                    'Joshua Mqabuko Nkomo International Airport (BUQ) - Bulawayo',
                    'Victoria Falls International Airport (VFA) - Victoria Falls',
                    'Land borders with Zambia, Botswana, South Africa, and Mozambique'
                  ].map((entry, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                      <MapPin className="h-4 w-4 text-blue-600 flex-shrink-0" />
                      <span className="text-slate-700">{entry}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-choose-us" className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-amber-50 rounded-2xl border border-blue-200 p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
              Why Choose United eVisa Services for Your Zimbabwe Visa?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">No Urgent Fees</h3>
                <p className="text-sm text-slate-600">Transparent pricing. No hidden costs or urgent processing fees.</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">24/7 Support</h3>
                <p className="text-sm text-slate-600">Our expert team is available round the clock to assist you with any questions.</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">94% Approval Rate</h3>
                <p className="text-sm text-slate-600">High success rate with our expert guidance and thorough application review.</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Secure & Fast</h3>
                <p className="text-sm text-slate-600">Bank-level security with 5-day processing for most applications.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-slate-800 mb-4 text-center">Get Your Zimbabwe eVisa Today</h3>
              <p className="text-slate-600 text-center mb-6">
                Join thousands of satisfied travelers who have successfully obtained their Zimbabwe visa through our platform. 
                Our streamlined process ensures you get your visa quickly and hassle-free.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/apply?country=zimbabwe">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Apply for Zimbabwe eVisa
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/check-requirements">
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-xl">
                    Browse Other Countries
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Zimbabwe Travel Guide */}
        <section id="travel-guide" className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <Globe className="h-8 w-8 text-blue-600" />
              Complete Zimbabwe Travel Guide & Visa Information
            </h2>
            
            <div className="prose prose-slate max-w-none">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">About Zimbabwe eVisa Requirements</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Zimbabwe's eVisa system was introduced to streamline the visa application process for international travelers. 
                The Zimbabwe eVisa is an electronic travel authorization that allows visitors to enter Zimbabwe for tourism, 
                business, and other purposes. This digital system has significantly improved the overall travel experience for 
                millions of visitors to Zimbabwe each year.
              </p>
              
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Zimbabwe eVisa Eligibility & Requirements</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Most foreign nationals require a Zimbabwe eVisa to enter the territory, with the exception of citizens from some 
                visa-waiver countries. The eVisa system is available to travelers from eligible countries worldwide, making Zimbabwe 
                one of the most accessible destinations for international visitors interested in Victoria Falls, wildlife safaris, 
                and African heritage.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Who Needs a Zimbabwe eVisa?</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li> International tourists visiting Zimbabwe for leisure</li>
                    <li> Business travelers and investors</li>
                    <li> Students and educational visitors</li>
                    <li> Family visitors and relatives</li>
                    <li> Wildlife and adventure enthusiasts</li>
                    <li> Transit passengers</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Who is Exempt from Zimbabwe eVisa?</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li> Zimbabwean citizens and permanent residents</li>
                    <li> Citizens of visa-waiver countries</li>
                    <li> Diplomatic passport holders</li>
                    <li> Some regional citizens</li>
                  </ul>
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Zimbabwe eVisa Application Process Explained</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                The Zimbabwe eVisa application process is designed to be simple and user-friendly. Our platform guides you 
                through each step, ensuring your application meets all requirements for approval. The entire process can 
                be completed online from anywhere in the world, eliminating the need to visit embassies or consulates.
              </p>
              
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Zimbabwe Visa Processing Times & Fees</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Zimbabwe eVisa processing times typically take 4 working days for normal processing. The government fees 
                are transparent: Tourist eVisa costs $25, while Business eVisa costs $35. We provide transparent pricing 
                with no hidden fees.
              </p>
              
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Popular Destinations in Zimbabwe</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Zimbabwe offers diverse attractions for every type of traveler. From the magnificent Victoria Falls 
                to the wildlife-rich national parks, from the ancient ruins of Great Zimbabwe to the modern capital of Harare, 
                Zimbabwe provides unforgettable experiences. The country's unique blend of natural wonders, historical sites, 
                and African culture creates a fascinating destination for travelers.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-r from-blue-50 to-amber-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Natural Wonders</h4>
                  <p className="text-sm text-slate-600">
                    From Victoria Falls to Hwange National Park, from the Zambezi River to Mana Pools, 
                    Zimbabwe offers world-class natural experiences and breathtaking landscapes.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Historical Sites</h4>
                  <p className="text-sm text-slate-600">
                    From Great Zimbabwe ruins to historical monuments, from cultural sites to archaeological wonders, 
                    Zimbabwe offers rich historical experiences and cultural heritage.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Wildlife Safaris</h4>
                  <p className="text-sm text-slate-600">
                    From Hwange National Park to Mana Pools, from game drives to walking safaris, 
                    Zimbabwe offers exceptional wildlife experiences and safari adventures.
                  </p>
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Zimbabwe Travel Tips & Best Practices</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                When planning your trip to Zimbabwe, consider the tropical climate and seasonal accessibility. The best 
                time to visit is during the dry season (May to October). Always carry your eVisa approval letter, 
                passport, and other required documents when traveling. It's also recommended to have comprehensive travel 
                insurance and be aware of local customs and safety guidelines.
              </p>
              
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Why Choose United eVisa Services for Zimbabwe Visa Applications</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                United eVisa Services has been helping travelers obtain their Zimbabwe visas since the eVisa system 
                was introduced. Our expertise in the Zimbabwe visa process, combined with our 98% approval rate and 24/7 
                customer support, makes us the preferred choice for thousands of travelers each year. We provide 
                transparent pricing with no hidden fees, ensuring you get the best value for your visa application.
              </p>
            </div>
          </div>
        </section>

        {/* Travel Data & Analytics Section */}
        <section id="analytics" className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <BarChart3 className="h-8 w-8 text-blue-600" />
              Zimbabwe Visa Processing Insights & Travel Analytics
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Processing Time Trends */}
              <div className="bg-gradient-to-r from-blue-50 to-amber-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Processing Time Trends</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">January</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-3 bg-blue-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{width: '90%'}}></div>
                      </div>
                      <span className="text-sm font-semibold text-blue-600">4.5 days</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">February</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-3 bg-blue-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{width: '87%'}}></div>
                      </div>
                      <span className="text-sm font-semibold text-blue-600">4.7 days</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">March</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-3 bg-blue-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{width: '94%'}}></div>
                      </div>
                      <span className="text-sm font-semibold text-blue-600">4.3 days</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">April</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-3 bg-blue-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{width: '92%'}}></div>
                      </div>
                      <span className="text-sm font-semibold text-blue-600">4.4 days</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">May</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-3 bg-blue-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{width: '96%'}}></div>
                      </div>
                      <span className="text-sm font-semibold text-blue-600">4.2 days</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">June</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-3 bg-blue-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{width: '89%'}}></div>
                      </div>
                      <span className="text-sm font-semibold text-blue-600">4.6 days</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                  <p className="text-xs text-blue-800">
                    <strong>Source:</strong> Zimbabwe Immigration Department & United eVisa Services processing data
                  </p>
                </div>
              </div>
              
              {/* Visa Type Distribution */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Visa Type Distribution</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Tourist Single 30 Days</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-3 bg-blue-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{width: '35%'}}></div>
                      </div>
                      <span className="text-sm font-semibold text-blue-600">35%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Tourist Double 30 Days</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-3 bg-blue-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{width: '25%'}}></div>
                      </div>
                      <span className="text-sm font-semibold text-blue-600">25%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Business Single 30 Days</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-3 bg-blue-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{width: '20%'}}></div>
                      </div>
                      <span className="text-sm font-semibold text-blue-600">20%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Business Double 30 Days</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-3 bg-blue-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{width: '15%'}}></div>
                      </div>
                      <span className="text-sm font-semibold text-blue-600">15%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Kaza Univisa 90 Days</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-3 bg-blue-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{width: '5%'}}></div>
                      </div>
                      <span className="text-sm font-semibold text-blue-600">5%</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                  <p className="text-xs text-blue-800">
                    <strong>Source:</strong> <a href="https://www.zim.gov.zw/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-900">zim.gov.zw</a> (2024)
                  </p>
                </div>
              </div>
            </div>
            
            {/* Travel Seasonality Chart */}
            <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Best Time to Visit Zimbabwe</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Sun className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-slate-800 text-sm">May-Oct</h4>
                  <p className="text-xs text-slate-600">Dry Season</p>
                  <div className="mt-2">
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Droplets className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-slate-800 text-sm">Nov-Apr</h4>
                  <p className="text-xs text-slate-600">Rainy Season</p>
                  <div className="mt-2">
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{width: '70%'}}></div>
                    </div>
                  </div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Zap className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-slate-800 text-sm">Year-round</h4>
                  <p className="text-xs text-slate-600">Wildlife</p>
                  <div className="mt-2">
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-purple-100 rounded-lg">
                <p className="text-xs text-purple-800">
                  <strong>Source:</strong> Zimbabwe Tourism Board & Meteorological Department
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Support Section */}
        <section id="contact" className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <Phone className="h-8 w-8 text-blue-600" />
              Need Help? Contact Our Expert Team
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-amber-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">24/7 Phone Support</h3>
                <p className="text-sm text-slate-600 mb-3">Call us anytime for immediate assistance</p>
                <a href="tel:+13232864541" className="text-blue-600 font-semibold hover:text-blue-700">
                  +1 323 286 4541
                </a>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Email Support</h3>
                <p className="text-sm text-slate-600 mb-3">Get detailed responses within hours</p>
                <a href="mailto:visa@unitedevisa.com" className="text-blue-600 font-semibold hover:text-blue-700">
                  visa@unitedevisa.com
                </a>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Live Chat</h3>
                <p className="text-sm text-slate-600 mb-3">Instant chat with our visa experts</p>
                <span className="text-green-600 font-semibold">Available 24/7</span>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-slate-50 rounded-xl">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Why Travelers Choose United eVisa Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>No hidden fees or urgent processing charges</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>Expert guidance throughout the entire process</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>Secure document handling and processing</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>94% approval rate with our expert review</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>24/7 customer support in multiple languages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>Fast processing with 5-day turnaround</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <Users className="h-8 w-8 text-blue-600" />
              Frequently Asked Questions
            </h2>
            
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left hover:text-blue-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </div>
    </div>
    </>
  );
} 