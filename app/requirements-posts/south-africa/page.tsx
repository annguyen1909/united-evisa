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

const southAfricaVisaTypes = [
  {
    id: "south-africa-tourist-single-90-days",
    name: 'Tourist Evisa (Single Entry for 90 days)',
    type: 'Tourist Evisa',
    description: 'Single Entry for 90 days',
    entry: 'Single Entry',
    visaDuration: 30,
    visaValidity: '60 days',
    govFee: 66,
    processingTime: '3 working days',
    features: ['Safari tours', 'Cultural experiences', 'City exploration', 'Beach visits']
  },
  {
    id: "south-africa-business-single-90-days",
    name: 'Business Evisa (Single Entry for 90 days)',
    type: 'Business Evisa',
    description: 'Single Entry for 90 days',
    entry: 'Single Entry',
    visaDuration: 30,
    visaValidity: '60 days',
    govFee: 66,
    processingTime: '3 working days',
    features: ['Business meetings', 'Conferences', 'Trade shows', 'Corporate visits']
  }
];

const faqs = [
  {
    question: "Do I need a visa to visit South Africa?",
    answer: "Most foreign nationals require a visa to enter South Africa. The South Africa eVisa system allows travelers from eligible countries to apply online before their trip. The eVisa is mandatory for tourism and business purposes. Citizens of some countries may be exempt from visa requirements for short stays."
  },
  {
    question: "How long does it take to process a South Africa eVisa?",
    answer: "Processing time for South Africa eVisas typically takes 3 working days for normal processing and 1 working day for super urgent processing. We recommend applying at least 1 week before your intended travel date to avoid any delays. Our platform has a 98% approval rate, and we provide 24/7 support throughout the application process."
  },
  {
    question: "What documents do I need for a South Africa eVisa?",
    answer: "You'll need a valid passport with at least 6 months validity beyond your intended stay, a recent passport-size photo, proof of accommodation in South Africa, return flight tickets, and sufficient funds for your stay. All documents should be clear, legible, and in English."
  },
  {
    question: "Can I extend my South Africa visa?",
    answer: "Yes, you can extend your South Africa visa while in the country. You'll need to visit the Department of Home Affairs in major cities. Extensions are typically granted for valid reasons such as medical treatment, business needs, or tourism. There are fees associated with visa extensions, and the process can take several weeks."
  },
  {
    question: "Is it safe to travel to South Africa?",
    answer: "South Africa is generally safe for tourists, especially in popular tourist areas like Cape Town, Johannesburg, and Kruger National Park. However, it's important to stay informed about current travel advisories and take standard safety precautions like not walking alone at night. Most tourist destinations have good security measures in place."
  },
  {
    question: "What is the best time to visit South Africa?",
    answer: "The best time to visit South Africa depends on what you want to see. For wildlife viewing, the dry season (May-September) is ideal. For beach holidays, the summer months (November-March) are perfect. The shoulder seasons (March-May and September-November) offer pleasant weather and fewer crowds."
  }
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Check Visa Requirements", href: "/check-requirements" },
  { label: "South Africa Requirements" }
];

export default function SouthAfricaRequirementsPage() {
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
      <RequirementsPostStructuredData country="South Africa" countrySlug="south-africa" />
      
      {/* Breadcrumb Navigation */}
      <div className="w-full bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <BreadcrumbNavigation items={breadcrumbItems} />
        </div>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-green-600 via-yellow-400 to-red-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0">
            <Image
              src="/images/country/south-africa/south-africa-bg.jpg"
              alt="South Africa eVisa requirements - beautiful Southern African destinations and landmarks for visa travelers"
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
                South Africa eVisa Requirements & Application Guide
              </h1>
              <p className="text-xl text-yellow-100 max-w-3xl mx-auto leading-relaxed">
                Complete guide to South Africa eVisa requirements, application process, and travel information for your Southern African adventure
              </p>
            </div>
          </div>
        </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Check Eligibility Section */}
        <div className="mb-12">
          <CheckEligibilityWithPreset 
            presetDestination="za"
            title="Check Your South Africa Visa Eligibility"
            description="Select your nationality to check if you need a visa for South Africa"
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
              South Africa Overview
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">About South Africa</h3>
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-600 leading-relaxed mb-4">
                    South Africa, located at the southern tip of the African continent, is a country of remarkable diversity 
                    and natural beauty. From the iconic Table Mountain in Cape Town to the vast savannas of Kruger National Park, 
                    South Africa offers unparalleled experiences for every type of traveler.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    The country is known for its rich cultural heritage, stunning landscapes, and world-class wildlife viewing. 
                    Johannesburg, the economic hub, offers urban experiences and historical sites, while the Western Cape provides 
                    wine regions, beaches, and mountain adventures. South Africa's visa system has been modernized with the 
                    introduction of the eVisa program, making it easier for international travelers to obtain their travel authorization.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    South Africa's eVisa system streamlines the application process, allowing travelers to apply online before 
                    their journey and receive their travel authorization electronically.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <Image
                  src="/images/country/south-africa/south-africa-bg.jpg"
                  alt="South Africa Landscape"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                  <span className="text-sm font-semibold text-slate-800">🇿🇦 South Africa</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-100">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="h-6 w-6 text-emerald-600" />
                  <h4 className="font-semibold text-slate-800">Capital</h4>
                </div>
                <p className="text-slate-600">Pretoria (Administrative)</p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="h-6 w-6 text-blue-600" />
                  <h4 className="font-semibold text-slate-800">Language</h4>
                </div>
                <p className="text-slate-600">English, Afrikaans, Zulu, Xhosa</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
                <div className="flex items-center gap-3 mb-3">
                  <CreditCard className="h-6 w-6 text-purple-600" />
                  <h4 className="font-semibold text-slate-800">Currency</h4>
                </div>
                <p className="text-slate-600">South African Rand (ZAR)</p>
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {southAfricaVisaTypes.map((visa, index) => (
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
                    <Link href={`/apply?country=south-africa&type=${encodeURIComponent(visa.id)}`} className="w-full">
                      <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                        Apply for South Africa eVisa
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
              Visa Requirements
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Required Documents</h3>
                <div className="space-y-4">
                  {[
                    'Valid passport with at least 6 months validity beyond intended stay',
                    'Recent passport-size photograph (taken within the last 6 months)',
                    'Proof of accommodation in South Africa (hotel bookings or invitation letter)',
                    'Return flight tickets or onward travel itinerary',
                    'Proof of sufficient funds for the duration of stay',
                    'Yellow fever vaccination certificate (if traveling from endemic areas)'
                  ].map((requirement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Additional Requirements</h3>
                <div className="space-y-4">
                  {[
                    'Travel insurance covering medical expenses',
                    'Detailed travel itinerary',
                    'Proof of employment or student status',
                    'Bank statements (last 3 months)',
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
                  {[
                    { type: 'Tourist Evisa (Single Entry)', fee: '$66', duration: '90 days' },
                    { type: 'Business Evisa (Single Entry)', fee: '$66', duration: '90 days' }
                  ].map((visa, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-slate-800">{visa.type}</h4>
                        <p className="text-sm text-slate-600">Duration: {visa.duration}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold text-emerald-600">{visa.fee}</span>
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
                      <h4 className="font-semibold text-slate-800">Processing Time</h4>
                    </div>
                    <p className="text-slate-600">3 working days</p>
                  </div>
                  
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <div className="flex items-center gap-3 mb-2">
                      <AlertCircle className="h-5 w-5 text-orange-600" />
                      <h4 className="font-semibold text-slate-800">Important Note</h4>
                    </div>
                    <p className="text-slate-600">Apply at least 1 week before travel to avoid delays</p>
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
                    <h4 className="font-semibold text-slate-800 mb-2">Wildlife Viewing (May-September)</h4>
                    <p className="text-sm text-slate-600">Dry season ideal for safari experiences and wildlife viewing</p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                    <h4 className="font-semibold text-slate-800 mb-2">Beach Holidays (November-March)</h4>
                    <p className="text-sm text-slate-600">Summer months perfect for coastal destinations</p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
                    <h4 className="font-semibold text-slate-800 mb-2">Shoulder Seasons (March-May, September-November)</h4>
                    <p className="text-sm text-slate-600">Pleasant weather with fewer crowds</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Entry Points</h3>
                <div className="space-y-3">
                  {[
                    'O.R. Tambo International Airport (Johannesburg)',
                    'Cape Town International Airport',
                    'King Shaka International Airport (Durban)',
                    'Land borders with neighboring countries'
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

        {/* Comprehensive South Africa Travel Guide */}
        <section id="travel-guide" className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <Globe className="h-8 w-8 text-emerald-600" />
              Complete South Africa Travel Guide & Visa Information
            </h2>
            
            <div className="prose prose-slate max-w-none">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">About South Africa eVisa Requirements</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                South Africa introduced its eVisa system to streamline the visa application process for international travelers. 
                The South Africa eVisa is an electronic travel authorization that allows visitors to enter South Africa for tourism 
                and business purposes. This digital system has significantly improved the overall travel experience for millions 
                of visitors to South Africa each year.
              </p>
              
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">South Africa eVisa Eligibility & Requirements</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Most foreign nationals require a South Africa eVisa to enter the country, with the exception of citizens from 
                some countries who may be exempt for short stays. The eVisa system is available to travelers from eligible 
                countries, making South Africa one of the most accessible destinations for international visitors interested 
                in African culture, wildlife, and adventure.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h4 className="font-semibold text-emerald-800 mb-2">Who Needs a South Africa eVisa?</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li> International tourists visiting South Africa for leisure</li>
                    <li> Business travelers attending meetings and conferences</li>
                    <li> Wildlife enthusiasts visiting national parks</li>
                    <li> Cultural and historical tourism</li>
                    <li> Adventure and outdoor activities</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Who is Exempt from South Africa eVisa?</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li> Citizens of some countries for short stays</li>
                    <li> Diplomatic passport holders</li>
                    <li> Crew members on duty</li>
                    <li> Emergency medical cases</li>
                  </ul>
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">South Africa eVisa Application Process Explained</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                The South Africa eVisa application process is designed to be simple and user-friendly. Our platform guides you 
                through each step, ensuring your application meets all requirements for approval. The entire process can 
                be completed online from anywhere in the world, eliminating the need to visit embassies or consulates.
              </p>
              
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">South Africa Visa Processing Times & Fees</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                South Africa eVisa processing times typically take 3 working days for normal processing, making it one of the 
                fastest visa processing systems in Africa. The government fees are transparent: both Tourist and Business ETAs 
                cost $66 for 90-day stays. Unlike many other visa services, we do not charge additional urgent processing fees, 
                ensuring you get the best value for your money.
              </p>
              
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Popular Destinations in South Africa</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                South Africa offers diverse attractions for every type of traveler. From the iconic Table Mountain in Cape Town 
                to the vast savannas of Kruger National Park, South Africa provides unforgettable experiences. Johannesburg, 
                the economic hub, offers urban experiences and historical sites, while the Western Cape provides wine regions, 
                beaches, and mountain adventures.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-4">
                  <h4 className="font-semibold text-emerald-800 mb-2">Natural Wonders</h4>
                  <p className="text-sm text-slate-600">
                    Kruger National Park features stunning wildlife, Table Mountain offers breathtaking views, and the 
                    Garden Route provides coastal beauty and adventure activities.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Cultural Experiences</h4>
                  <p className="text-sm text-slate-600">
                    Cape Town offers museums, markets, and cultural experiences, while Johannesburg showcases 
                    the country's history and urban culture.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Adventure Activities</h4>
                  <p className="text-sm text-slate-600">
                    From shark cage diving to wine tours, South Africa offers world-class adventure 
                    and outdoor experiences for every traveler.
                  </p>
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">South Africa Travel Tips & Best Practices</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                When planning your trip to South Africa, consider the weather patterns and seasonal attractions. The dry season 
                (May-September) is ideal for wildlife viewing, while the summer months (November-March) are perfect for beach 
                holidays. Always carry your eVisa approval letter, passport, and other required documents when traveling. 
                It's also recommended to have travel insurance and be aware of local customs and safety guidelines.
              </p>
              
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Why Choose Worldmaxxing Global Services for South Africa Visa Applications</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Worldmaxxing Global Services has been helping travelers obtain their South Africa visas since the eVisa system 
                was introduced. Our expertise in the South African visa process, combined with our 98% approval rate and 24/7 
                customer support, makes us the preferred choice for thousands of travelers each year. We provide transparent 
                pricing with no hidden fees, ensuring you get the best value for your visa application.
              </p>
            </div>
          </div>
        </section>

        {/* Travel Data & Analytics Section */}
        <section id="analytics" className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <BarChart3 className="h-8 w-8 text-emerald-600" />
              South Africa Visa Processing Insights & Travel Analytics
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
                        <div className="h-full bg-emerald-500 rounded-full" style={{width: '90%'}}></div>
                      </div>
                      <span className="text-sm font-semibold text-emerald-600">2.7 days</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">February</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-3 bg-emerald-200 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{width: '95%'}}></div>
                      </div>
                      <span className="text-sm font-semibold text-emerald-600">2.5 days</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">March</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-3 bg-emerald-200 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{width: '88%'}}></div>
                      </div>
                      <span className="text-sm font-semibold text-emerald-600">2.9 days</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">April</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-3 bg-emerald-200 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{width: '92%'}}></div>
                      </div>
                      <span className="text-sm font-semibold text-emerald-600">2.6 days</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">May</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-3 bg-emerald-200 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{width: '85%'}}></div>
                      </div>
                      <span className="text-sm font-semibold text-emerald-600">3.1 days</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">June</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-3 bg-emerald-200 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{width: '87%'}}></div>
                      </div>
                      <span className="text-sm font-semibold text-emerald-600">3.0 days</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-emerald-100 rounded-lg">
                  <p className="text-xs text-emerald-800">
                    <strong>Source:</strong> South Africa Immigration Department & Worldmaxxing Global Services processing data
                  </p>
                </div>
              </div>
              
              {/* Visa Type Distribution */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Visa Type Distribution</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Tourist Evisa</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-3 bg-blue-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{width: '70%'}}></div>
                      </div>
                      <span className="text-sm font-semibold text-blue-600">70%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Business Evisa</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-3 bg-blue-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{width: '30%'}}></div>
                      </div>
                      <span className="text-sm font-semibold text-blue-600">30%</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                  <p className="text-xs text-blue-800">
                    <strong>Source:</strong> <a href="https://south-africa-immigration.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-900">south-africa-immigration.com</a> (2024)
                  </p>
                </div>
              </div>
            </div>
            
            {/* Travel Seasonality Chart */}
            <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Best Time to Visit South Africa</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Sun className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-slate-800 text-sm">May-Sep</h4>
                  <p className="text-xs text-slate-600">Wildlife Season</p>
                  <div className="mt-2">
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Zap className="h-6 w-6 text-red-600" />
                  </div>
                  <h4 className="font-semibold text-slate-800 text-sm">Nov-Mar</h4>
                  <p className="text-xs text-slate-600">Beach Season</p>
                  <div className="mt-2">
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Cloud className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-slate-800 text-sm">Mar-May</h4>
                  <p className="text-xs text-slate-600">Shoulder Season</p>
                  <div className="mt-2">
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Droplets className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h4 className="font-semibold text-slate-800 text-sm">Sep-Nov</h4>
                  <p className="text-xs text-slate-600">Spring Season</p>
                  <div className="mt-2">
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500 rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-purple-100 rounded-lg">
                <p className="text-xs text-purple-800">
                  <strong>Source:</strong> South Africa Meteorological Department & Tourism Board
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-choose-us" className="mb-16">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200 p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
              Why Choose Worldmaxxing Global Services for Your South Africa Visa?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">No Urgent Fees</h3>
                <p className="text-sm text-slate-600">We believe in transparent pricing. No hidden costs or urgent processing fees.</p>
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
                <h3 className="font-semibold text-slate-800 mb-2">98% Approval Rate</h3>
                <p className="text-sm text-slate-600">High success rate with our expert guidance and thorough application review.</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Secure & Fast</h3>
                <p className="text-sm text-slate-600">Bank-level security with 3-day processing for most applications.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-slate-800 mb-4 text-center">Get Your South Africa eVisa Today</h3>
              <p className="text-slate-600 text-center mb-6">
                Join thousands of satisfied travelers who have successfully obtained their South Africa visa through our platform. 
                Our streamlined process ensures you get your visa quickly and hassle-free.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/apply?country=south-africa">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Apply for South Africa eVisa
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
                    <span>98% approval rate with our expert review</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>24/7 customer support in multiple languages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>Fast processing with 3-day turnaround</span>
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
    </>
  );
}