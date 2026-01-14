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

const omanVisaTypes = [
  {
    id: "oman-tourist",
    name: 'Tourist eVisa (Single Entry for 30 days)',
    type: 'Tourist eVisa',
    description: 'Single Entry for 30 days',
    entry: 'Single Entry',
    visaDuration: 30,
    visaValidity: '60 days',
    govFee: 82,
    processingTime: '3 working days',
    features: ['Desert adventures', 'Cultural visits', 'Historic forts', 'Coastal exploration']
  }
];

const faqs = [
  {
    question: "Do I need a visa to visit Oman?",
    answer: "Most foreign nationals require a visa to enter Oman. Citizens of GCC countries (Saudi Arabia, UAE, Bahrain, Kuwait, Qatar) can enter without a visa. The Oman eVisa system allows travelers from eligible countries to apply online before their trip for tourism purposes."
  },
  {
    question: "How long does it take to process an Oman eVisa?",
    answer: "Processing time for Oman eVisas is typically 3 working days. We recommend applying at least 1 week before your intended travel date to avoid any delays. Our platform provides 24/7 support throughout the application process."
  },
  {
    question: "What documents do I need for an Oman eVisa?",
    answer: "You'll need a valid passport with at least 6 months validity beyond your intended stay, a recent passport-size photo, proof of accommodation in Oman, return flight tickets, and sufficient funds for your stay. All documents should be clear, legible, and in English or Arabic."
  },
  {
    question: "Can I extend my Oman visa?",
    answer: "Oman tourist eVisas are typically non-extendable. If you need to stay longer, you would need to exit Oman and apply for a new visa. For business or other purposes, you may need to apply for a different visa type through the Oman embassy."
  },
  {
    question: "Is it safe to travel to Oman?",
    answer: "Oman is generally safe for tourists. The country has a low crime rate and good security measures in place. However, it's important to respect local customs and laws, dress modestly, and be aware of cultural sensitivities. Most tourist areas are well-policed and secure."
  },
  {
    question: "What is the best time to visit Oman?",
    answer: "The best time to visit Oman is during the cooler months from October to April. Summers (May to September) are extremely hot with temperatures often exceeding 40°C. Spring (March to May) and autumn (October to November) offer pleasant weather for outdoor activities."
  },
  {
    question: "How much does an Oman eVisa cost?",
    answer: "Oman eVisa fees are set by the government at $82 for tourist visas. We do not charge additional urgent processing fees, ensuring transparent pricing. Payment can be made securely online using credit cards or bank transfers."
  },
  {
    question: "Can I apply for an Oman eVisa if I have a criminal record?",
    answer: "Individuals with criminal records may face additional scrutiny during the Oman eVisa application process. It's important to be honest about your background and provide any required documentation. Some convictions may result in visa denial."
  },
  {
    question: "What happens if my Oman eVisa application is denied?",
    answer: "If your Oman eVisa application is denied, you will receive a notification explaining the reason. Common reasons include incomplete documentation, insufficient funds, or security concerns. You can reapply after addressing the issues, or contact our support team for guidance."
  },
  {
    question: "What should I do if I lose my Oman eVisa approval letter?",
    answer: "If you lose your Oman eVisa approval letter, you can download it again from our platform or contact our support team. It's recommended to carry both digital and printed copies of your eVisa approval when traveling. The approval letter is required for entry into Oman."
  }
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Check Visa Requirements", href: "/check-requirements" },
  { label: "Oman Requirements" }
];

export default function OmanRequirementsPage() {
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
      <RequirementsPostStructuredData country="Oman" countrySlug="oman" />
      
      {/* Breadcrumb Navigation */}
      <div className="w-full bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <BreadcrumbNavigation items={breadcrumbItems} />
        </div>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-red-600 via-white to-green-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0">
            <Image
              src="/images/country/oman/oman-bg.jpg"
              alt="Oman eVisa requirements - beautiful Middle Eastern destinations and landmarks for visa travelers"
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
                Oman eVisa Requirements & Application Guide
              </h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
                Complete guide to Oman eVisa requirements, application process, and travel information for your Middle Eastern adventure
              </p>
            </div>
          </div>
        </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Check Eligibility Section */}
        <div className="mb-12">
          <CheckEligibilityWithPreset 
            presetDestination="om"
            title="Check Your Oman Visa Eligibility"
            description="Select your nationality to check if you need a visa for Oman"
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
              Oman Overview
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">About Oman</h3>
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Oman, located on the southeastern coast of the Arabian Peninsula, is a country of stunning contrasts 
                    featuring vast deserts, rugged mountains, and pristine coastline. From the historic forts of Muscat 
                    to the dramatic Wahiba Sands, Oman offers visitors a glimpse into authentic Arabian culture and tradition.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    The country is known for its warm hospitality, rich cultural heritage, and breathtaking natural landscapes. 
                    Muscat, the capital, combines modern development with traditional architecture, while the interior regions 
                    offer opportunities for desert adventures and cultural experiences.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Oman's visa system has been modernized with the introduction of the eVisa program, making it easier for 
                    international travelers to obtain their travel authorization online before arrival.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <Image
                  src="/images/country/oman/oman-bg.jpg"
                  alt="Oman Desert Landscape"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                  <span className="text-sm font-semibold text-slate-800">🇴🇲 Oman</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-100">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="h-6 w-6 text-emerald-600" />
                  <h4 className="font-semibold text-slate-800">Capital</h4>
                </div>
                <p className="text-slate-600">Muscat</p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="h-6 w-6 text-blue-600" />
                  <h4 className="font-semibold text-slate-800">Language</h4>
                </div>
                <p className="text-slate-600">Arabic & English</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
                <div className="flex items-center gap-3 mb-3">
                  <CreditCard className="h-6 w-6 text-purple-600" />
                  <h4 className="font-semibold text-slate-800">Currency</h4>
                </div>
                <p className="text-slate-600">Omani Rial (OMR)</p>
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
              {omanVisaTypes.map((visa, index) => (
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
                    <Link href={`/apply?country=oman&type=${encodeURIComponent(visa.id)}`} className="w-full">
                      <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                        Apply Now
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
                    'Proof of accommodation in Oman (hotel bookings or invitation letter)',
                    'Return flight tickets or onward travel itinerary',
                    'Proof of sufficient funds for the duration of stay',
                    'Travel insurance covering the entire stay period'
                  ].map((requirement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Important Cultural Notes</h3>
                <div className="space-y-4">
                  {[
                    'Dress modestly and respect local customs and traditions',
                    'Avoid public displays of affection',
                    'Do not consume alcohol in public places',
                    'Respect prayer times and religious practices',
                    'Carry identification documents at all times'
                  ].map((requirement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Info className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
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
                    { type: 'Tourist eVisa', fee: '$82', duration: '30 days' }
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

        {/* Why Choose Us Section */}
        <section id="why-choose-us" className="mb-16">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200 p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
              Why Choose Worldmaxxing Global Services for Your Oman Visa?
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
                <h3 className="font-semibold text-slate-800 mb-2">High Success Rate</h3>
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
              <h3 className="text-xl font-semibold text-slate-800 mb-4 text-center">Get Your Oman eVisa Today</h3>
              <p className="text-slate-600 text-center mb-6">
                Join thousands of satisfied travelers who have successfully obtained their Oman visa through our platform. 
                Our streamlined process ensures you get your visa quickly and hassle-free.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/apply?country=oman">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Apply Now
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



        {/* Comprehensive Oman Travel Guide */}
        <section id="travel-guide" className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <Globe className="h-8 w-8 text-emerald-600" />
              Complete Oman Travel Guide & Visa Information
            </h2>
            
            <div className="prose prose-slate max-w-none">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">About Oman eVisa Requirements</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Oman's eVisa system was introduced to streamline the visa application process for international travelers. 
                The Oman eVisa is an electronic travel authorization that allows visitors to enter Oman for tourism, 
                business, and other purposes. This digital system has significantly improved the overall travel experience for 
                millions of visitors to Oman each year.
              </p>
              
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Oman eVisa Eligibility & Requirements</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Most foreign nationals require an Oman eVisa to enter the territory, with the exception of citizens from some 
                visa-waiver countries. The eVisa system is available to travelers from eligible countries worldwide, making Oman 
                one of the most accessible destinations for international visitors interested in ancient history, stunning landscapes, 
                and authentic Arabian culture.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h4 className="font-semibold text-emerald-800 mb-2">Who Needs an Oman eVisa?</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li> International tourists visiting Oman for leisure</li>
                    <li> Business travelers and investors</li>
                    <li> Students and educational visitors</li>
                    <li> Family visitors and relatives</li>
                    <li> Cultural and heritage enthusiasts</li>
                    <li> Transit passengers</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Who is Exempt from Oman eVisa?</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li> Omani citizens and permanent residents</li>
                    <li> GCC citizens</li>
                    <li> Citizens of visa-waiver countries</li>
                    <li> Diplomatic passport holders</li>
                  </ul>
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Oman eVisa Application Process Explained</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                The Oman eVisa application process is designed to be simple and user-friendly. Our platform guides you 
                through each step, ensuring your application meets all requirements for approval. The entire process can 
                be completed online from anywhere in the world, eliminating the need to visit embassies or consulates.
              </p>
              
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Oman Visa Processing Times & Fees</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Oman eVisa processing times typically take 3 working days for normal processing. The government fees 
                are transparent: Tourist eVisa costs $20, while Business eVisa costs $30. We provide transparent pricing 
                with no hidden fees.
              </p>
              
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Popular Destinations in Oman</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Oman offers diverse attractions for every type of traveler. From the historic forts and castles to the 
                stunning desert landscapes, from the pristine beaches to the majestic mountains, Oman provides unforgettable 
                experiences. The country's unique blend of ancient traditions and natural beauty creates a 
                fascinating destination for travelers.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-4">
                  <h4 className="font-semibold text-emerald-800 mb-2">Historic Forts & Castles</h4>
                  <p className="text-sm text-slate-600">
                    From Nizwa Fort to Bahla Fort, from Jabrin Castle to Al Jalali Fort, Oman offers 
                    impressive historic sites and architectural marvels that showcase the country's rich heritage.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Natural Landscapes</h4>
                  <p className="text-sm text-slate-600">
                    From the Wahiba Sands desert to the Hajar Mountains, from the fjords of Musandam to the 
                    beaches of Salalah, Oman offers stunning natural environments and outdoor adventures.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Cultural Heritage</h4>
                  <p className="text-sm text-slate-600">
                    From traditional souks to ancient villages, from mosques to cultural centers, Oman offers 
                    rich cultural experiences and insights into authentic Arabian traditions.
                  </p>
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Oman Travel Tips & Best Practices</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                When planning your trip to Oman, consider the desert climate and cultural customs. The best 
                time to visit is during the cooler months (October to April). Always carry your eVisa approval letter, 
                passport, and other required documents when traveling. It's also recommended to have comprehensive travel 
                insurance and be aware of local customs and safety guidelines.
              </p>
              
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Why Choose Worldmaxxing Global Services for Oman Visa Applications</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Worldmaxxing Global Services has been helping travelers obtain their Oman visas since the eVisa system 
                was introduced. Our expertise in the Oman visa process, combined with our 98% approval rate and 24/7 
                customer support, makes us the preferred choice for thousands of travelers each year. We provide 
                transparent pricing with no hidden fees, ensuring you get the best value for your visa application.
              </p>
            </div>
          </div>
        </section>

        {/* Analytics Section */}
        <section id="analytics" className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <BarChart3 className="h-8 w-8 text-emerald-600" />
              Oman Visa Processing Insights
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
                      <span className="text-sm font-semibold text-emerald-600">2.8 days</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">February</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-3 bg-emerald-200 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{width: '85%'}}></div>
                      </div>
                      <span className="text-sm font-semibold text-emerald-600">3.1 days</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">March</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-3 bg-emerald-200 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{width: '95%'}}></div>
                      </div>
                      <span className="text-sm font-semibold text-emerald-600">2.5 days</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-emerald-100 rounded-lg">
                  <p className="text-xs text-emerald-800">
                    <strong>Source:</strong> Oman Immigration Department & Worldmaxxing Global Services processing data
                  </p>
                </div>
              </div>
              {/* Only show Visa Type Distribution if more than one visa type */}
              {/* {omanVisaTypes.length > 1 && (
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                ...Visa Type Distribution code...
              </div>
              )} */}
            </div>
            {/* Best Time to Visit Oman Analytics Box */}
            <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Best Time to Visit Oman</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Sun className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-slate-800 text-sm">Oct-Apr</h4>
                  <p className="text-xs text-slate-600">Pleasant weather, ideal for outdoor activities and sightseeing</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Cloud className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h4 className="font-semibold text-slate-800 text-sm">May-Jun</h4>
                  <p className="text-xs text-slate-600">Warming up, some wind and dust storms possible</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Zap className="h-6 w-6 text-red-600" />
                  </div>
                  <h4 className="font-semibold text-slate-800 text-sm">Jul-Sep</h4>
                  <p className="text-xs text-slate-600">Extremely hot (often 40°C+), avoid outdoor activities</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Droplets className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-slate-800 text-sm">Mar-May</h4>
                  <p className="text-xs text-slate-600">Spring season, pleasant temperatures for exploration</p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-purple-100 rounded-lg">
                <p className="text-xs text-purple-800">
                  <strong>Source:</strong> Oman Meteorological Department & Worldmaxxing Global Services travel data
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
              
              <div className="text-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Live Chat</h3>
                <p className="text-sm text-slate-600 mb-3">Instant chat with our visa experts</p>
                <span className="text-purple-600 font-semibold">Available 24/7</span>
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