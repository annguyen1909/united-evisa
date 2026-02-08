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

const tajikistanVisaTypes = [
  {
    id: 'tajikistan-tourist-gbao-single-60-days',
    name: 'Tourist Evisa Gbao Permit (60 days)',
    type: 'Tourist Evisa Gbao Permit',
    description: 'Single Entry for 60 days',
    entry: 'Single Entry',
    visaDuration: 60,
    visaValidity: '60 days',
    govFee: 80,
    processingTime: '5 working days',
    features: ['Mountain trekking', 'Cultural visits', 'Historical sites', 'Adventure tourism']
  },
  {
    id: 'tajikistan-tourist-gbao-multiple-60-days',
    name: 'Tourist Evisa Gbao Permit (Multiple)',
    type: 'Tourist Evisa Gbao Permit',
    description: 'Multiple Entries for 60 days',
    entry: 'Multiple Entries',
    visaDuration: 60,
    visaValidity: '60 days',
    govFee: 100,
    processingTime: '5 working days',
    features: ['Multiple border crossings', 'Extended stays', 'Regional travel', 'Business trips']
  },
  {
    id: 'tajikistan-tourist-single-60-days',
    name: 'Tourist Evisa (60 days)',
    type: 'Tourist Evisa',
    description: 'Single Entry for 60 days',
    entry: 'Single Entry',
    visaDuration: 60,
    visaValidity: '60 days',
    govFee: 60,
    processingTime: '5 working days',
    features: ['Tourism', 'Family visits', 'Short stays', 'Cultural exploration']
  },
  {
    id: 'tajikistan-tourist-multiple-60-days',
    name: 'Tourist Evisa (Multiple)',
    type: 'Tourist Evisa',
    description: 'Multiple Entries for 30 days',
    entry: 'Multiple Entries',
    visaDuration: 30,
    visaValidity: '60 days',
    govFee: 60,
    processingTime: '5 working days',
    features: ['Multiple entries', 'Short trips', 'Regional travel', 'Business visits']
  }
];

const faqs = [
  {
    question: "Do I need a visa to visit Tajikistan?",
    answer: "Most foreign nationals require a visa to enter Tajikistan. The Tajikistan eVisa system allows travelers from eligible countries to apply online before their trip. The eVisa is mandatory for tourism, business, and transit purposes. Citizens of some CIS countries may be exempt from visa requirements."
  },
  {
    question: "How long does it take to process a Tajikistan eVisa?",
    answer: "Processing time for Tajikistan eVisas typically takes 5 working days. We recommend applying at least 2 weeks before your intended travel date to avoid any delays. Our platform has a 98.5% approval rate, and we provide 24/7 support throughout the application process."
  },
  {
    question: "What documents do I need for a Tajikistan eVisa?",
    answer: "You'll need a valid passport with at least 6 months validity beyond your intended stay, a recent passport-size photo, proof of accommodation in Tajikistan, return flight tickets, and sufficient funds for your stay. Business travelers may need additional documents like invitation letters. All documents should be clear, legible, and in English."
  },
  {
    question: "Can I extend my Tajikistan visa?",
    answer: "Yes, you can extend your Tajikistan visa while in the country. You'll need to visit the Ministry of Foreign Affairs or local police stations. Extensions are typically granted for valid reasons such as tourism, business needs, or medical treatment. There are fees associated with visa extensions, and the process can take several days."
  },
  {
    question: "Is it safe to travel to Tajikistan?",
    answer: "Tajikistan is generally a safe destination for tourists, especially in major cities and tourist areas. The country has friendly locals and a rich cultural heritage. However, it's important to stay informed about current travel advisories and take standard safety precautions, especially when traveling to remote mountain areas."
  },
  {
    question: "What is the best time to visit Tajikistan?",
    answer: "The best time to visit Tajikistan is during the spring (March to May) and autumn (September to November) when the weather is pleasant and suitable for outdoor activities. The summer months (June to August) can be hot, while winter (December to February) brings cold temperatures and snow in mountainous regions."
  }
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Check Visa Requirements", href: "/check-requirements" },
  { label: "Tajikistan Requirements" }
];

export default function TajikistanRequirementsPage() {
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
      <RequirementsPostStructuredData country="Tajikistan" countrySlug="tajikistan" />
      
      {/* Breadcrumb Navigation */}
      <div className="w-full bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <BreadcrumbNavigation items={breadcrumbItems} />
        </div>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-green-600 via-white to-red-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0">
            <Image
              src="/images/country/tajikistan/tajikistan-bg.jpg"
              alt="Tajikistan eVisa requirements - beautiful Central Asian destinations and landmarks for visa travelers"
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
                Tajikistan eVisa Requirements & Application Guide
              </h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
                Complete guide to Tajikistan eVisa requirements, application process, and travel information for your Central Asian adventure
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Check Eligibility Section */}
          <div className="mb-12">
            <CheckEligibilityWithPreset 
              presetDestination="tj"
              title="Check Your Tajikistan Visa Eligibility"
              description="Select your nationality to check if you need a visa for Tajikistan"
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
                { id: 'travel-info', title: 'Travel Information', icon: MapPin },
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
                Tajikistan Overview
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">About Tajikistan</h3>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Tajikistan is a landlocked country in Central Asia, known for its stunning mountain landscapes, 
                      ancient Silk Road heritage, and rich cultural traditions. The country is dominated by the Pamir 
                      Mountains, which offer some of the most spectacular trekking and mountaineering opportunities in the world.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      The country's capital, Dushanbe, showcases a blend of Soviet-era architecture and modern development, 
                      while rural areas preserve traditional Tajik culture and hospitality. Tajikistan's strategic location 
                      along the historic Silk Road has left a legacy of diverse cultural influences and historical sites.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      Tajikistan's eVisa system was introduced to facilitate tourism and business travel, making it easier 
                      for international visitors to explore this fascinating Central Asian destination.
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <Image
                    src="/images/country/tajikistan/tajikistan-bg.jpg"
                    alt="Tajikistan Landscape"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                    <span className="text-sm font-semibold text-slate-800">🇹🇯 Tajikistan</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-r from-blue-50 to-amber-50 p-6 rounded-xl border border-blue-100">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="h-6 w-6 text-blue-600" />
                    <h4 className="font-semibold text-slate-800">Capital</h4>
                  </div>
                  <p className="text-slate-600">Dushanbe</p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                  <div className="flex items-center gap-3 mb-3">
                    <Globe className="h-6 w-6 text-blue-600" />
                    <h4 className="font-semibold text-slate-800">Language</h4>
                  </div>
                  <p className="text-slate-600">Tajik</p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
                  <div className="flex items-center gap-3 mb-3">
                    <CreditCard className="h-6 w-6 text-purple-600" />
                    <h4 className="font-semibold text-slate-800">Currency</h4>
                  </div>
                  <p className="text-slate-600">Somoni (TJS)</p>
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {tajikistanVisaTypes.map((visa, index) => (
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
                          <span className="text-sm font-bold text-blue-600">${visa.govFee}</span>
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
                      <Link href={`/apply?country=tajikistan&type=${encodeURIComponent(visa.id)}`} className="w-full">
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-amber-600 hover:from-blue-700 hover:to-amber-700 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                          Apply for Tajikistan eVisa
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
                      'Recent passport-size photograph (taken within the last 6 months)',
                      'Proof of accommodation in Tajikistan (hotel bookings or invitation letter)',
                      'Return flight tickets or onward travel itinerary',
                      'Proof of sufficient funds for the duration of stay',
                      'Travel insurance covering medical expenses'
                    ].map((requirement, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{requirement}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Additional Requirements</h3>
                  <div className="space-y-4">
                    {[
                      'Detailed travel itinerary',
                      'Proof of employment or student status',
                      'Bank statements (last 3 months)',
                      'No objection letter from employer (if applicable)',
                      'Proof of ties to home country',
                      'Business invitation letter (for business visas)'
                    ].map((requirement, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{requirement}</span>
                      </div>
                    ))}
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
                    {[
                      { type: 'Tourist Evisa Gbao Permit (Single)', fee: '$80', duration: '60 days' },
                      { type: 'Tourist Evisa Gbao Permit (Multiple)', fee: '$100', duration: '60 days' },
                      { type: 'Tourist Evisa (Single)', fee: '$60', duration: '60 days' },
                      { type: 'Tourist Evisa (Multiple)', fee: '$60', duration: '30 days' }
                    ].map((visa, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                        <div>
                          <h4 className="font-semibold text-slate-800">{visa.type}</h4>
                          <p className="text-sm text-slate-600">Duration: {visa.duration}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-lg font-bold text-blue-600">{visa.fee}</span>
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
                        <h4 className="font-semibold text-slate-800">Normal Processing</h4>
                      </div>
                      <p className="text-slate-600">5 working days</p>
                    </div>
                    
                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                      <div className="flex items-center gap-3 mb-2">
                        <AlertCircle className="h-5 w-5 text-purple-600" />
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
                      <h4 className="font-semibold text-slate-800 mb-2">Spring (Mar-May)</h4>
                      <p className="text-sm text-slate-600">Pleasant weather and blooming landscapes</p>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                      <h4 className="font-semibold text-slate-800 mb-2">Autumn (Sep-Nov)</h4>
                      <p className="text-sm text-slate-600">Mild temperatures and beautiful fall colors</p>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
                      <h4 className="font-semibold text-slate-800 mb-2">Summer (Jun-Aug)</h4>
                      <p className="text-sm text-slate-600">Hot weather, good for mountain activities</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Entry Points</h3>
                  <div className="space-y-3">
                    {[
                      'Dushanbe International Airport (DYU) - Dushanbe',
                      'Khujand International Airport (LBD) - Khujand',
                      'Kulob International Airport (TJU) - Kulob',
                      'Qurghonteppa International Airport (KQT) - Qurghonteppa',
                      'Panjakent Airport (PJK) - Panjakent',
                      'Land borders with Uzbekistan, Kyrgyzstan, Afghanistan, and China'
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

          {/* Comprehensive Tajikistan Travel Guide */}
          <section id="travel-guide" className="mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <Globe className="h-8 w-8 text-blue-600" />
                Complete Tajikistan Travel Guide & Visa Information
              </h2>
              
              <div className="prose prose-slate max-w-none">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">About Tajikistan eVisa Requirements</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Tajikistan's eVisa system was introduced to streamline the visa application process for international travelers. 
                  The Tajikistan eVisa is an electronic travel authorization that allows visitors to enter Tajikistan for tourism, 
                  business, and transit purposes. This digital system has significantly improved the overall travel experience for 
                  visitors to this Central Asian destination.
                </p>
                
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">Tajikistan eVisa Eligibility & Requirements</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Most foreign nationals require a Tajikistan eVisa to enter the territory, with the exception of citizens from some 
                  CIS countries. The eVisa system is available to travelers from eligible countries worldwide, making Tajikistan 
                  accessible to international visitors interested in Central Asian culture, mountain adventures, and historical exploration.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Who Needs a Tajikistan eVisa?</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li> International tourists visiting Tajikistan for leisure</li>
                      <li> Mountain trekkers and adventure travelers</li>
                      <li> Cultural heritage enthusiasts</li>
                      <li> Business travelers and investors</li>
                      <li> Silk Road history buffs</li>
                      <li> Family visitors and relatives</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Who is Exempt from Tajikistan eVisa?</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li> Citizens of some CIS countries</li>
                      <li> Diplomatic passport holders</li>
                      <li> Crew members on duty</li>
                      <li> Emergency medical cases</li>
                    </ul>
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">Tajikistan eVisa Application Process Explained</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  The Tajikistan eVisa application process is designed to be simple and user-friendly. Our platform guides you 
                  through each step, ensuring your application meets all requirements for approval. The entire process can 
                  be completed online from anywhere in the world, eliminating the need to visit embassies or consulates.
                </p>
                
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">Tajikistan Visa Processing Times & Fees</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Tajikistan eVisa processing times typically take 5 working days for normal processing. The government fees 
                  are transparent: GBAO permits cost $80-100, while regular tourist visas cost $60. We provide transparent 
                  pricing with no hidden fees.
                </p>
                
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">Popular Destinations in Tajikistan</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Tajikistan offers diverse attractions for every type of traveler. From the stunning Pamir Mountains to the 
                  historic Silk Road cities, from the modern capital Dushanbe to the ancient cultural sites, Tajikistan 
                  provides unforgettable experiences. The country's unique blend of Central Asian cultures, Soviet influences, 
                  and natural beauty creates a fascinating destination for travelers.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gradient-to-r from-blue-50 to-amber-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Mountain Adventures</h4>
                    <p className="text-sm text-slate-600">
                      From the Pamir Mountains to the Fann Mountains, Tajikistan offers world-class trekking, mountaineering, 
                      and outdoor adventures for nature lovers and adventure seekers.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Cultural Heritage</h4>
                    <p className="text-sm text-slate-600">
                      From ancient Silk Road sites to traditional Tajik culture, from Soviet-era architecture to modern 
                      developments, Tajikistan offers rich cultural experiences.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-800 mb-2">Historical Sites</h4>
                    <p className="text-sm text-slate-600">
                      From ancient fortresses to historic cities, from archaeological sites to cultural monuments, 
                      Tajikistan's history spans thousands of years.
                    </p>
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">Tajikistan Travel Tips & Best Practices</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  When planning your trip to Tajikistan, consider the seasonal weather patterns and regional attractions. 
                  Spring and autumn offer the most pleasant weather, while summer can be hot and winter brings snow to 
                  mountainous areas. Always carry your eVisa approval letter, passport, and other required documents when traveling. 
                  It's also recommended to have travel insurance and be aware of local customs and safety guidelines.
                </p>
                
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">Why Choose United eVisa Services for Tajikistan Visa Applications</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  United eVisa Services has been helping travelers obtain their Tajikistan visas since the eVisa system 
                  was introduced. Our expertise in the Tajikistan visa process, combined with our 98.5% approval rate and 24/7 
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
                Tajikistan Visa Processing Insights & Travel Analytics
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
                          <div className="h-full bg-blue-500 rounded-full" style={{width: '92%'}}></div>
                        </div>
                        <span className="text-sm font-semibold text-blue-600">4.6 days</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">March</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-3 bg-blue-200 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full" style={{width: '88%'}}></div>
                        </div>
                        <span className="text-sm font-semibold text-blue-600">4.4 days</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">April</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-3 bg-blue-200 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full" style={{width: '86%'}}></div>
                        </div>
                        <span className="text-sm font-semibold text-blue-600">4.3 days</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">May</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-3 bg-blue-200 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full" style={{width: '94%'}}></div>
                        </div>
                        <span className="text-sm font-semibold text-blue-600">4.7 days</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">June</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-3 bg-blue-200 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full" style={{width: '90%'}}></div>
                        </div>
                        <span className="text-sm font-semibold text-blue-600">4.5 days</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                    <p className="text-xs text-blue-800">
                      <strong>Source:</strong> Tajikistan Immigration Agency & United eVisa Services processing data
                    </p>
                  </div>
                </div>
                
                {/* Visa Type Distribution */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Visa Type Distribution</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Tourist Evisa (Single)</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-3 bg-blue-200 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full" style={{width: '40%'}}></div>
                        </div>
                        <span className="text-sm font-semibold text-blue-600">40%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Tourist Evisa (Multiple)</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-3 bg-blue-200 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full" style={{width: '30%'}}></div>
                        </div>
                        <span className="text-sm font-semibold text-blue-600">30%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">GBAO Permit (Single)</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-3 bg-blue-200 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full" style={{width: '20%'}}></div>
                        </div>
                        <span className="text-sm font-semibold text-blue-600">20%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">GBAO Permit (Multiple)</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-3 bg-blue-200 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full" style={{width: '10%'}}></div>
                        </div>
                        <span className="text-sm font-semibold text-blue-600">10%</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                    <p className="text-xs text-blue-800">
                      <strong>Source:</strong> Tajikistan Immigration Agency & United eVisa Services processing data
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Travel Seasonality Chart */}
              <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Best Time to Visit Tajikistan</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Sun className="h-6 w-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-slate-800 text-sm">Mar-May</h4>
                    <p className="text-xs text-slate-600">Spring</p>
                    <div className="mt-2">
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{width: '95%'}}></div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Cloud className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-slate-800 text-sm">Sep-Nov</h4>
                    <p className="text-xs text-slate-600">Autumn</p>
                    <div className="mt-2">
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{width: '90%'}}></div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Zap className="h-6 w-6 text-yellow-600" />
                    </div>
                    <h4 className="font-semibold text-slate-800 text-sm">Jun-Aug</h4>
                    <p className="text-xs text-slate-600">Summer</p>
                    <div className="mt-2">
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-yellow-500 rounded-full" style={{width: '75%'}}></div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Droplets className="h-6 w-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-slate-800 text-sm">Dec-Feb</h4>
                    <p className="text-xs text-slate-600">Winter</p>
                    <div className="mt-2">
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500 rounded-full" style={{width: '40%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-purple-100 rounded-lg">
                  <p className="text-xs text-purple-800">
                    <strong>Source:</strong> Tajikistan Tourism Board & Weather Bureau
                  </p>
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

          {/* Why Choose Us Section */}
          <section id="why-choose-us" className="mb-16">
            <div className="bg-gradient-to-r from-blue-50 to-amber-50 rounded-2xl border border-blue-200 p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
                Why Choose United eVisa Services for Your Tajikistan Visa?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-6 bg-white rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">Fast Processing</h3>
                  <p className="text-sm text-slate-600">5 working days normal processing time.</p>
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
                  <h3 className="font-semibold text-slate-800 mb-2">98.5% Approval Rate</h3>
                  <p className="text-sm text-slate-600">High success rate with our expert guidance and thorough application review.</p>
                </div>
                
                <div className="text-center p-6 bg-white rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">Secure & Reliable</h3>
                  <p className="text-sm text-slate-600">Bank-level security with transparent pricing and no hidden fees.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-slate-800 mb-4 text-center">Get Your Tajikistan eVisa Today</h3>
                <p className="text-slate-600 text-center mb-6">
                  Join thousands of satisfied travelers who have successfully obtained their Tajikistan visa through our platform. 
                  Our streamlined process ensures you get your visa quickly and hassle-free.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/apply?country=tajikistan">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                      Apply for Tajikistan eVisa
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
                      <span>Fast processing with 5 working days normal</span>
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
                      <span>98.5% approval rate with our expert review</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>24/7 customer support in multiple languages</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Transparent pricing with no hidden fees</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
} 