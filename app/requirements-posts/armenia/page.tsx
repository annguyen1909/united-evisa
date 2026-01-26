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
const armeniaVisaTypes = [
  {
    id: 'armenia-tourist-single-21-days',
    name: 'Tourist Evisa (Single Entry for 21 days)',
    type: 'Tourist Evisa',
    description: 'Single Entry for 21 days',
    entry: 'Single Entry',
    visaDuration: 21,
    visaValidity: '60 days',
    govFee: 36,
    processingTime: '5 working days',
    features: ['Tourism', 'Sightseeing', 'Cultural exploration', 'Photography']
  },
  {
    id: 'armenia-tourist-single-120-days',
    name: 'Tourist Evisa (Single Entry for 120 days)',
    type: 'Tourist Evisa',
    description: 'Single Entry for 120 days',
    entry: 'Single Entry',
    visaDuration: 120,
    visaValidity: '60 days',
    govFee: 60,
    processingTime: '5 working days',
    features: ['Extended tourism', 'Cultural immersion', 'Historical exploration', 'Photography']
  },
  {
    id: 'armenia-business-single-21-days',
    name: 'Business Evisa (Single Entry for 21 days)',
    type: 'Business Evisa',
    description: 'Single Entry for 21 days',
    entry: 'Single Entry',
    visaDuration: 21,
    visaValidity: '60 days',
    govFee: 30,
    processingTime: '5 working days',
    features: ['Business meetings', 'Trade', 'Investment', 'Networking']
  },
  {
    id: 'armenia-business-single-120-days',
    name: 'Business Evisa (Single Entry for 120 days)',
    type: 'Business Evisa',
    description: 'Single Entry for 120 days',
    entry: 'Single Entry',
    visaDuration: 120,
    visaValidity: '60 days',
    govFee: 30,
    processingTime: '5 working days',
    features: ['Extended business', 'Trade partnerships', 'Investment projects', 'Networking']
  }
];

const faqs = [
  {
    question: 'Do I need a visa to visit Armenia?',
    answer: 'Most foreign nationals require a visa to enter Armenia. The eVisa system allows eligible travelers to apply online before their trip. Check your eligibility on our platform.'
  },
  {
    question: 'How long does it take to process an Armenia eVisa?',
    answer: 'Processing time for Armenia eVisas is typically 5 working days. Apply at least 2 weeks before your travel date to avoid delays.'
  },
  {
    question: 'What documents do I need for an Armenia eVisa?',
    answer: 'You will need a valid passport (at least 6 months validity), recent passport-size photo, proof of accommodation, return flight tickets, and sufficient funds. Additional documents may be required.'
  },
  {
    question: 'Can I extend my Armenia visa?',
    answer: 'Visa extensions are possible in Armenia for valid reasons. Visit the local immigration office for more information about extension procedures.'
  },
  {
    question: 'Is Armenia safe for tourists?',
    answer: 'Armenia is generally safe for tourists. Exercise standard precautions and respect local customs and traditions, especially in remote areas.'
  },
  {
    question: 'How much does an Armenia eVisa cost?',
    answer: 'Government fees range from $30 to $60 USD depending on the visa type and duration. See the visa types section for specific details.'
  },
  {
    question: 'Can I apply for an Armenia eVisa if I have a criminal record?',
    answer: 'Applicants with criminal records may face additional scrutiny. Be honest in your application and provide all required documentation.'
  },
  {
    question: 'What happens if my Armenia eVisa application is denied?',
    answer: 'You will receive a notification with the reason for denial. You may reapply after addressing the issues or contact our support for guidance.'
  },
  {
    question: 'What is the best time to visit Armenia?',
    answer: 'The best time to visit Armenia is during spring (April to June) and autumn (September to November) when weather is pleasant and comfortable for sightseeing.'
  },
  {
    question: 'What should I do if I lose my Armenia eVisa approval letter?',
    answer: 'Contact our support team or log in to your account to download your approval letter again.'
  }
];

export default function ArmeniaRequirementsPage() {
  const [activeSection, setActiveSection] = useState('overview');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <Image
            src="/images/country/armenia/armenia-bg.jpg"
            alt="Armenia Landscape"
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
              Armenia Visa <span className="text-emerald-200">Requirements</span>
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              Complete guide to Armenia eVisa requirements, application process, and travel information for your Caucasian adventure
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Check Eligibility Section */}
        <div className="mb-12">
          <CheckEligibilityWithPreset 
            presetDestination="am"
            title="Check Your Armenia Visa Eligibility"
            description="Select your nationality to check if you need a visa for Armenia"
          />
        </div>

                {/* Table of Contents */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-6 mb-8 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <FileText className="h-6 w-6 text-emerald-600" />
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
                    ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
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
              <Globe className="h-8 w-8 text-emerald-600" />
              Armenia Overview
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">About Armenia</h3>
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Armenia, located in the South Caucasus region, is a country of rich history, breathtaking landscapes, and vibrant culture. From ancient monasteries perched on mountain peaks to the lively capital Yerevan, Armenia offers unforgettable experiences for history buffs and nature lovers alike.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    The country is home to UNESCO World Heritage sites, stunning mountain scenery, and some of the world's oldest Christian churches. Visitors can explore the vibrant culture, delicious cuisine, and warm hospitality of the Armenian people.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    The Armenia eVisa system makes it easy for international visitors to obtain travel authorization online before arrival, streamlining the process for tourism and business travel.
                  </p>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/images/country/armenia/armenia-bg.jpg"
                  alt="Armenia Landscape"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                  <span className="text-sm font-semibold text-slate-800">🇦🇲 Armenia</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-100">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="h-6 w-6 text-emerald-600" />
                  <h4 className="font-semibold text-slate-800">Capital</h4>
                </div>
                <p className="text-slate-600">Yerevan</p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="h-6 w-6 text-blue-600" />
                  <h4 className="font-semibold text-slate-800">Language</h4>
                </div>
                <p className="text-slate-600">Armenian</p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
                <div className="flex items-center gap-3 mb-3">
                  <CreditCard className="h-6 w-6 text-purple-600" />
                  <h4 className="font-semibold text-slate-800">Currency</h4>
                </div>
                <p className="text-slate-600">Armenian Dram (AMD)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Visa Types Section */}
        <section id="visa-types" className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <FileText className="h-8 w-8 text-emerald-600" />
              Available Visa Types
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {armeniaVisaTypes.map((visa, index) => (
                <Card key={index} className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/90 backdrop-blur-sm">
                  <div className="h-1 w-full bg-gradient-to-r from-emerald-500 to-teal-500" />
                  <CardHeader className="pt-6 pb-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl shadow-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
                        <CheckCircle className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg font-bold text-slate-800 mb-2">
                          {visa.name}
                        </CardTitle>
                        <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
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
                        <span className="text-sm font-bold text-emerald-600">${visa.govFee}</span>
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
                    <Link href={`/apply?country=armenia&type=${encodeURIComponent(visa.id)}`} className="w-full">
                      <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                        Apply for Armenia eVisa
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
              <CheckCircle className="h-8 w-8 text-emerald-600" />
              Armenia Visa Requirements
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">General Requirements</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Valid Passport</h4>
                      <p className="text-sm text-slate-600">Must be valid for at least 6 months beyond your intended stay</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Passport Photo</h4>
                      <p className="text-sm text-slate-600">Recent color photo (3.5 x 4.5 cm) with white background</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Travel Itinerary</h4>
                      <p className="text-sm text-slate-600">Confirmed flight bookings and accommodation details</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Financial Proof</h4>
                      <p className="text-sm text-slate-600">Bank statements showing sufficient funds for your stay</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Business Visa Requirements</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                    <Info className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Business Letter</h4>
                      <p className="text-sm text-slate-600">Invitation letter from Armenian business partner or company</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                    <Info className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Company Registration</h4>
                      <p className="text-sm text-slate-600">Proof of business registration and activities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                    <Info className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Financial Documents</h4>
                      <p className="text-sm text-slate-600">Company financial statements and business plan</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="h-5 w-5 text-orange-600" />
                    <h4 className="font-semibold text-slate-800">Important Note</h4>
                  </div>
                  <p className="text-sm text-slate-600">
                    All documents must be in Armenian, English, or Russian. Additional documents may be required based on your specific circumstances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process Section */}
        <section id="application" className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <Calendar className="h-8 w-8 text-emerald-600" />
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
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
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
              <CreditCard className="h-8 w-8 text-emerald-600" />
              Fees & Processing Times
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Visa Fees</h3>
                <div className="space-y-4">
                  {armeniaVisaTypes.map((visa, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-slate-800">{visa.type}</h4>
                        <p className="text-sm text-slate-600">{visa.entry} - Duration: {visa.visaDuration} days</p>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold text-emerald-600">${visa.govFee} USD</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Processing Times</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="h-5 w-5 text-emerald-600" />
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
              <MapPin className="h-8 w-8 text-emerald-600" />
              Travel Information
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Best Time to Visit</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-100">
                    <h4 className="font-semibold text-slate-800 mb-2">April to June</h4>
                    <p className="text-sm text-slate-600">Spring with pleasant weather, ideal for sightseeing and cultural exploration</p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                    <h4 className="font-semibold text-slate-800 mb-2">September to November</h4>
                    <p className="text-sm text-slate-600">Autumn with comfortable temperatures, perfect for hiking and photography</p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
                    <h4 className="font-semibold text-slate-800 mb-2">Year-round</h4>
                    <p className="text-sm text-slate-600">Armenia offers unique experiences throughout the year for history and culture enthusiasts</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Entry Points</h3>
                <div className="space-y-3">
                  {[
                    'Zvartnots International Airport (EVN) - Yerevan',
                    'Shirak Airport (LWN) - Gyumri',
                    'Land borders with Georgia, Azerbaijan, Turkey, and Iran'
                  ].map((entry, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                      <MapPin className="h-4 w-4 text-emerald-600 flex-shrink-0" />
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
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200 p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
              Why Choose Worldmaxxing Global Services for Your Armenia Visa?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-emerald-600" />
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
                <h3 className="font-semibold text-slate-800 mb-2">96% Approval Rate</h3>
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
              <h3 className="text-xl font-semibold text-slate-800 mb-4 text-center">Get Your Armenia eVisa Today</h3>
              <p className="text-slate-600 text-center mb-6">
                Join thousands of satisfied travelers who have successfully obtained their Armenia visa through our platform. 
                Our streamlined process ensures you get your visa quickly and hassle-free.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/apply?country=armenia">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Apply for Armenia eVisa
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/check-requirements">
                  <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-semibold py-3 px-8 rounded-xl">
                    Browse Other Countries
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Armenia Travel Guide */}
        <section id="travel-guide" className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <Globe className="h-8 w-8 text-emerald-600" />
              Complete Armenia Travel Guide & Visa Information
            </h2>
            
            <div className="prose prose-slate max-w-none">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">About Armenia eVisa Requirements</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Armenia's eVisa system was introduced to streamline the visa application process for international travelers. 
                The Armenia eVisa is an electronic travel authorization that allows visitors to enter Armenia for tourism, 
                business, and other purposes. This digital system has significantly improved the overall travel experience for 
                millions of visitors to Armenia each year.
              </p>
              
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Armenia eVisa Eligibility & Requirements</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Most foreign nationals require an Armenia eVisa to enter the territory, with the exception of citizens from some 
                visa-waiver countries. The eVisa system is available to travelers from eligible countries worldwide, making Armenia 
                one of the most accessible destinations for international visitors interested in ancient history, cultural heritage, 
                and Caucasus culture.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h4 className="font-semibold text-emerald-800 mb-2">Who Needs an Armenia eVisa?</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li> International tourists visiting Armenia for leisure</li>
                    <li> Business travelers and investors</li>
                    <li> Students and educational visitors</li>
                    <li> Family visitors and relatives</li>
                    <li> Cultural and heritage enthusiasts</li>
                    <li> Transit passengers</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Who is Exempt from Armenia eVisa?</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li> Armenian citizens and permanent residents</li>
                    <li> Citizens of visa-waiver countries</li>
                    <li> Diplomatic passport holders</li>
                    <li> Some regional citizens</li>
                  </ul>
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Armenia eVisa Application Process Explained</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                The Armenia eVisa application process is designed to be simple and user-friendly. Our platform guides you 
                through each step, ensuring your application meets all requirements for approval. The entire process can 
                be completed online from anywhere in the world, eliminating the need to visit embassies or consulates.
              </p>
              
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Armenia Visa Processing Times & Fees</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Armenia eVisa processing times typically take 4 working days for normal processing. The government fees 
                are transparent: Tourist eVisa costs $25, while Business eVisa costs $35. We provide transparent pricing 
                with no hidden fees.
              </p>
              
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Popular Destinations in Armenia</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Armenia offers diverse attractions for every type of traveler. From the ancient monasteries and churches 
                to the beautiful landscapes of the Caucasus, from the capital city of Yerevan to the historic sites, 
                Armenia provides unforgettable experiences. The country's unique blend of ancient history, religious heritage, 
                and Caucasus culture creates a fascinating destination for travelers.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-4">
                  <h4 className="font-semibold text-emerald-800 mb-2">Ancient Monasteries</h4>
                  <p className="text-sm text-slate-600">
                    From Tatev Monastery to Geghard Monastery, from Khor Virap to Noravank, 
                    Armenia offers world-class religious heritage and architectural marvels.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Cultural Heritage</h4>
                  <p className="text-sm text-slate-600">
                    From traditional villages to cultural centers, from historical sites to museums, Armenia offers 
                    rich cultural experiences and insights into Caucasus heritage.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Natural Landscapes</h4>
                  <p className="text-sm text-slate-600">
                    From Mount Ararat to Lake Sevan, from national parks to scenic mountains, Armenia offers 
                    stunning natural environments and outdoor adventures.
                  </p>
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Armenia Travel Tips & Best Practices</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                When planning your trip to Armenia, consider the continental climate and seasonal attractions. The best 
                time to visit is during spring and autumn when the weather is pleasant. Always carry your eVisa approval letter, 
                passport, and other required documents when traveling. It's also recommended to have comprehensive travel 
                insurance and be aware of local customs and safety guidelines.
              </p>
              
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Why Choose Worldmaxxing Global Services for Armenia Visa Applications</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Worldmaxxing Global Services has been helping travelers obtain their Armenia visas since the eVisa system 
                was introduced. Our expertise in the Armenia visa process, combined with our 98% approval rate and 24/7 
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
              <BarChart3 className="h-8 w-8 text-emerald-600" />
              Armenia Visa Processing Insights & Travel Analytics
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Processing Time Trends */}
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Processing Time Trends</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">January</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-3 bg-emerald-200 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{width: '94%'}}></div>
                      </div>
                      <span className="text-sm font-semibold text-emerald-600">3.7 days</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">February</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-3 bg-emerald-200 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{width: '91%'}}></div>
                      </div>
                      <span className="text-sm font-semibold text-emerald-600">4.0 days</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">March</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-3 bg-emerald-200 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{width: '96%'}}></div>
                      </div>
                      <span className="text-sm font-semibold text-emerald-600">3.5 days</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">April</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-3 bg-emerald-200 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{width: '93%'}}></div>
                      </div>
                      <span className="text-sm font-semibold text-emerald-600">3.8 days</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">May</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-3 bg-emerald-200 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{width: '95%'}}></div>
                      </div>
                      <span className="text-sm font-semibold text-emerald-600">3.6 days</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">June</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-3 bg-emerald-200 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{width: '92%'}}></div>
                      </div>
                      <span className="text-sm font-semibold text-emerald-600">3.9 days</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-emerald-100 rounded-lg">
                  <p className="text-xs text-emerald-800">
                    <strong>Source:</strong> Armenia Passport and Visa Department & Worldmaxxing Global Services processing data
                  </p>
                </div>
              </div>
              {/* Visa Type Distribution */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Visa Type Distribution</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Tourist Single 21 Days</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-3 bg-blue-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{width: '35%'}}></div>
                      </div>
                      <span className="text-sm font-semibold text-blue-600">35%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Tourist Single 120 Days</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-3 bg-blue-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{width: '30%'}}></div>
                      </div>
                      <span className="text-sm font-semibold text-blue-600">30%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Business Single 21 Days</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-3 bg-blue-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{width: '20%'}}></div>
                      </div>
                      <span className="text-sm font-semibold text-blue-600">20%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Business Single 120 Days</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-3 bg-blue-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{width: '15%'}}></div>
                      </div>
                      <span className="text-sm font-semibold text-blue-600">15%</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                  <p className="text-xs text-blue-800">
                    <strong>Source:</strong> <a href="https://www.mfa.am/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-900">mfa.am</a> (2026)
                  </p>
                </div>
              </div>
            </div>
            {/* Travel Seasonality Chart */}
            <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Best Time to Visit Armenia</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Sun className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-slate-800 text-sm">Apr-Jun</h4>
                  <p className="text-xs text-slate-600">Spring Season</p>
                  <div className="mt-2">
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Cloud className="h-6 w-6 text-orange-600" />
                  </div>
                  <h4 className="font-semibold text-slate-800 text-sm">Sep-Nov</h4>
                  <p className="text-xs text-slate-600">Autumn Season</p>
                  <div className="mt-2">
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-500 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Zap className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-slate-800 text-sm">Year-round</h4>
                  <p className="text-xs text-slate-600">Culture</p>
                  <div className="mt-2">
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-purple-100 rounded-lg">
                <p className="text-xs text-purple-800">
                  <strong>Source:</strong> Armenia Tourism Committee & Meteorological Department
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Support Section */}
        <section id="contact" className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <Phone className="h-8 w-8 text-emerald-600" />
              Need Help? Contact Our Expert Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">24/7 Phone Support</h3>
                <p className="text-sm text-slate-600 mb-3">Call us anytime for immediate assistance</p>
                <a href="tel:+13232864541" className="text-emerald-600 font-semibold hover:text-emerald-700">
                  +1 323 286 4541
                </a>
              </div>
              <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Email Support</h3>
                <p className="text-sm text-slate-600 mb-3">Get detailed responses within hours</p>
                <a href="mailto:visa@worldmaxxing.com" className="text-blue-600 font-semibold hover:text-blue-700">
                  visa@worldmaxxing.com
                </a>
              </div>
              <div className="text-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Live Chat</h3>
                <p className="text-sm text-slate-600 mb-3">Instant chat with our visa experts</p>
                <span className="text-green-600 font-semibold">Available 24/7</span>
              </div>
            </div>
            <div className="mt-8 p-6 bg-slate-50 rounded-xl">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Why Travelers Choose Worldmaxxing Global Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>No hidden fees or urgent processing charges</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>Expert guidance throughout the entire process</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>Secure document handling and processing</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>96% approval rate with our expert review</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>24/7 customer support in multiple languages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
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
              <Users className="h-8 w-8 text-emerald-600" />
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left hover:text-emerald-600">
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
  );
} 