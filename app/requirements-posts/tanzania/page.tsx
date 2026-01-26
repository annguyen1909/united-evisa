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

const tanzaniaVisaTypes = [
  {
    id: "tanzania-tourist-single-90-days",
    name: 'Tourist Evisa (Single Entry for 90 days)',
    type: 'Tourist Evisa',
    description: 'Single Entry for 90 days',
    entry: 'Single Entry',
    visaDuration: 90,
    visaValidity: '60 days',
    govFee: 95,
    processingTime: '15 working days',
    features: ['Safari tours', 'Beach holidays', 'Cultural visits', 'Wildlife photography']
  },
  {
    id: "tanzania-business-single-90-days", 
    name: 'Business Evisa (Single Entry for 90 days)',
    type: 'Business Evisa',
    description: 'Single Entry for 90 days',
    entry: 'Single Entry',
    visaDuration: 90,
    visaValidity: '60 days',
    govFee: 95,
    processingTime: '15 working days',
    features: ['Business meetings', 'Trade activities', 'Commercial visits', 'Investment opportunities']
  }
];

const faqs = [
  {
    question: "Do I need a visa to visit Tanzania?",
    answer: "Most foreign nationals require a visa to enter Tanzania. The eVisa system allows eligible travelers to apply online before their trip. Check your eligibility on our platform."
  },
  {
    question: "How long does it take to process a Tanzania eVisa?",
    answer: "Processing time for Tanzania eVisas is typically 15 working days. Apply at least 3 weeks before your travel date to avoid delays."
  },
  {
    question: "What documents do I need for a Tanzania eVisa?",
    answer: "You will need a valid passport (at least 6 months validity), recent passport-size photo, proof of accommodation, return flight tickets, and sufficient funds. Additional documents may be required."
  },
  {
    question: "Can I extend my Tanzania visa?",
    answer: "Visa extensions are possible in Tanzania for valid reasons. Visit the local immigration office for more information about extension procedures."
  },
  {
    question: "Is Tanzania safe for tourists?",
    answer: "Tanzania is generally safe for tourists. Exercise standard precautions and respect local customs and traditions, especially in remote areas."
  },
  {
    question: "What is the best time to visit Tanzania?",
    answer: "The best time to visit Tanzania depends on what you want to see. For wildlife viewing, the dry seasons (January-March and July-October) are ideal. The wildebeest migration typically occurs from July to October. For beach holidays, Zanzibar is pleasant year-round, though April-May and November are the rainy seasons."
  }
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Check Visa Requirements", href: "/check-requirements" },
  { label: "Tanzania Requirements" }
];

export default function TanzaniaRequirementsPage() {
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
      <RequirementsPostStructuredData country="Tanzania" countrySlug="tanzania" />
      
      {/* Breadcrumb Navigation */}
      <div className="w-full bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <BreadcrumbNavigation items={breadcrumbItems} />
        </div>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0">
            <Image
              src="/images/country/tanzania/tanzania-bg.jpg"
              alt="Tanzania Wildlife"
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
                Tanzania Visa <span className="text-emerald-200">Requirements</span>
              </h1>
              <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                Complete guide to Tanzania eVisa requirements, application process, and travel information for your East African safari adventure
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Check Eligibility Section */}
          <div className="mb-12">
            <CheckEligibilityWithPreset 
              presetDestination="tz"
              title="Check Your Tanzania Visa Eligibility"
              description="Select your nationality to check if you need a visa for Tanzania"
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
                { id: 'faq', title: 'FAQ', icon: Users },
                { id: 'analytics', title: 'Processing Insights', icon: BarChart3 },
                { id: 'resources', title: 'Travel Resources', icon: ExternalLink }
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
                Tanzania Overview
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">About Tanzania</h3>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Tanzania, located in East Africa, is renowned for its stunning wildlife, incredible landscapes, and rich culture. From the majestic Mount Kilimanjaro to the pristine Serengeti National Park, Tanzania offers unforgettable experiences for nature lovers and adventure travelers.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      The country is home to some of Africa's most spectacular wildlife, including the Great Migration, Big Five animals, and diverse ecosystems. Visitors can explore the Ngorongoro Crater, relax on Zanzibar's beautiful beaches, and experience traditional Tanzanian culture.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      The Tanzania eVisa system makes it easy for international visitors to obtain travel authorization online before arrival, streamlining the process for tourism and business travel.
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <Image
                    src="/images/country/tanzania/tanzania-bg.jpg"
                    alt="Tanzania Wildlife"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                    <span className="text-sm font-semibold text-slate-800">🇹🇿 Tanzania</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-100">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="h-6 w-6 text-emerald-600" />
                    <h4 className="font-semibold text-slate-800">Capital</h4>
                  </div>
                  <p className="text-slate-600">Dodoma</p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                  <div className="flex items-center gap-3 mb-3">
                    <Globe className="h-6 w-6 text-blue-600" />
                    <h4 className="font-semibold text-slate-800">Language</h4>
                  </div>
                  <p className="text-slate-600">Swahili, English</p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
                  <div className="flex items-center gap-3 mb-3">
                    <CreditCard className="h-6 w-6 text-purple-600" />
                    <h4 className="font-semibold text-slate-800">Currency</h4>
                  </div>
                  <p className="text-slate-600">Tanzanian Shilling (TZS)</p>
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
                {tanzaniaVisaTypes.map((visa, index) => (
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
                          <span className="text-sm font-bold text-emerald-600">${visa.govFee} USD</span>
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
                      <Link href={`/apply?country=tanzania&type=${encodeURIComponent(visa.id)}`} className="w-full">
                        <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                          Apply for Tanzania eVisa
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
                      'Recent passport-size photograph',
                      'Proof of accommodation in Tanzania',
                      'Return flight tickets or onward travel itinerary',
                      'Proof of sufficient funds for the duration of stay',
                      'Yellow fever vaccination certificate (required from endemic areas)'
                    ].map((requirement, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
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
                      <h4 className="font-semibold text-green-800 mb-2">Travel Information</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Tanzania has a tropical climate</li>
                        <li>• Swahili and English are official languages</li>
                        <li>• Check current travel advisories</li>
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
                    {tanzaniaVisaTypes.map((visa, index) => (
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
                      <p className="text-slate-600">15 working days</p>
                    </div>
                    
                    <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                      <div className="flex items-center gap-3 mb-2">
                        <AlertCircle className="h-5 w-5 text-orange-600" />
                        <h4 className="font-semibold text-slate-800">Important Note</h4>
                      </div>
                      <p className="text-slate-600">Apply at least 3 weeks before travel to avoid delays</p>
                    </div>
                  </div>
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

          {/* Travel Data & Analytics Section */}
          <section id="analytics" className="mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <BarChart3 className="h-8 w-8 text-emerald-600" />
                Tanzania Visa Processing Insights & Travel Analytics
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
                          <div className="h-full bg-emerald-500 rounded-full" style={{width: '85%'}}></div>
                        </div>
                        <span className="text-sm font-semibold text-emerald-600">12.8 days</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">February</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-3 bg-emerald-200 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500 rounded-full" style={{width: '88%'}}></div>
                        </div>
                        <span className="text-sm font-semibold text-emerald-600">13.2 days</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">March</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-3 bg-emerald-200 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500 rounded-full" style={{width: '90%'}}></div>
                        </div>
                        <span className="text-sm font-semibold text-emerald-600">13.5 days</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">April</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-3 bg-emerald-200 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500 rounded-full" style={{width: '82%'}}></div>
                        </div>
                        <span className="text-sm font-semibold text-emerald-600">12.3 days</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">May</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-3 bg-emerald-200 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500 rounded-full" style={{width: '86%'}}></div>
                        </div>
                        <span className="text-sm font-semibold text-emerald-600">12.9 days</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">June</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-3 bg-emerald-200 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500 rounded-full" style={{width: '89%'}}></div>
                        </div>
                        <span className="text-sm font-semibold text-emerald-600">13.4 days</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-emerald-100 rounded-lg">
                    <p className="text-xs text-emerald-800">
                      <strong>Source:</strong> <a href="https://tanzaniaimmigration.com" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-900 underline">tanzaniaimmigration.com</a> and worldmaxxing processing data
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
                          <div className="h-full bg-blue-500 rounded-full" style={{width: '78%'}}></div>
                        </div>
                        <span className="text-sm font-semibold text-blue-600">78%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Business Evisa</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-3 bg-blue-200 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full" style={{width: '20%'}}></div>
                        </div>
                        <span className="text-sm font-semibold text-blue-600">20%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Transit</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-3 bg-blue-200 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full" style={{width: '2%'}}></div>
                        </div>
                        <span className="text-sm font-semibold text-blue-600">2%</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                    <p className="text-xs text-blue-800">
                      <strong>Source:</strong> <a href="https://tanzaniaimmigration.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 underline">tanzaniaimmigration.com</a> and worldmaxxing processing data
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Travel Seasonality Chart */}
              <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Best Time to Visit Tanzania</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Sun className="h-6 w-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-slate-800 text-sm">Jun-Oct</h4>
                    <p className="text-xs text-slate-600">Dry Season</p>
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
                    <h4 className="font-semibold text-slate-800 text-sm">Mar-May</h4>
                    <p className="text-xs text-slate-600">Long Rains</p>
                    <div className="mt-2">
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{width: '60%'}}></div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Zap className="h-6 w-6 text-yellow-600" />
                    </div>
                    <h4 className="font-semibold text-slate-800 text-sm">Jan-Feb</h4>
                    <p className="text-xs text-slate-600">Short Dry</p>
                    <div className="mt-2">
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-yellow-500 rounded-full" style={{width: '88%'}}></div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Droplets className="h-6 w-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-slate-800 text-sm">Nov-Dec</h4>
                    <p className="text-xs text-slate-600">Short Rains</p>
                    <div className="mt-2">
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500 rounded-full" style={{width: '75%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-purple-100 rounded-lg">
                  <p className="text-xs text-purple-800">
                    <strong>Source:</strong> Tanzania Meteorological Agency & Tourism Board
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Additional Resources Section */}
          <section id="resources" className="mb-16">
            <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl border border-slate-200 p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <Globe className="h-8 w-8 text-emerald-600" />
                Additional Tanzania Travel Resources
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="font-semibold text-slate-800 mb-3">Official Immigration Information</h3>
                  <p className="text-sm text-slate-600 mb-4">
                    Get the latest updates on Tanzania visa policies, entry requirements, and immigration procedures directly from official sources.
                  </p>
                  <a href="https://tanzaniaimmigration.com" target="_blank" rel="noopener noreferrer" 
                     className="text-emerald-600 hover:text-emerald-700 font-medium text-sm underline">
                    Visit tanzaniaimmigration.com →
                  </a>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="font-semibold text-slate-800 mb-3">Regional Visa Information</h3>
                  <p className="text-sm text-slate-600 mb-4">
                    Planning to visit multiple countries? Check visa requirements for neighboring South Asian and East African destinations.
                  </p>
                  <div className="space-y-2">
                    <a href="https://srilanka-immigration.com" target="_blank" rel="noopener noreferrer" 
                       className="block text-blue-600 hover:text-blue-700 font-medium text-sm underline">
                      Sri Lanka Immigration Info →
                    </a>
                    <a href="https://india-immigration.com" target="_blank" rel="noopener noreferrer" 
                       className="block text-purple-600 hover:text-purple-700 font-medium text-sm underline">
                      India Immigration Info →
                    </a>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="font-semibold text-slate-800 mb-3">Travel Planning Tools</h3>
                  <p className="text-sm text-slate-600 mb-4">
                    Use our comprehensive visa checker and application platform for seamless travel planning across multiple destinations.
                  </p>
                  <Link href="/check-requirements" 
                        className="text-emerald-600 hover:text-emerald-700 font-medium text-sm underline">
                    Check All Countries →
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
} 