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
  Droplets,
  TrendingUp
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const australiaVisaTypes = [
  {
    id: 'australia-tourist-evisa-multiple-1-year',
    name: 'Tourist Evisa (Multiple Entries for 1 year)',
    type: 'Tourist Evisa',
    description: 'Perfect for tourists planning multiple visits to Australia within a year. Allows entry for up to 60 days per visit.',
    entry: 'Multiple Entries',
    visaDuration: 365,
    visaValidity: '60 days per entry',
    govFee: 150,
    processingTime: '7 working days',
    features: ['Tourism', 'Sightseeing', 'Family visits', 'Holiday travel']
  },
  {
    id: 'australia-business-evisa-multiple-1-year',
    name: 'Business Evisa (Multiple Entries for 1 year)',
    type: 'Business Evisa',
    description: 'Ideal for business travelers attending meetings, conferences, or conducting business activities in Australia.',
    entry: 'Multiple Entries',
    visaDuration: 365,
    visaValidity: '60 days per entry',
    govFee: 150,
    processingTime: '7 working days',
    features: ['Business meetings', 'Conferences', 'Trade shows', 'Business negotiations']
  }
];

const faqs = [
  {
    question: "How long can I stay in Australia with an eVisa?",
    answer: "Each entry allows you to stay for up to 60 days. You can enter multiple times within the visa validity period."
  },
  {
    question: "Can I work in Australia with a tourist eVisa?",
    answer: "No, tourist eVisas do not permit work. For employment, you need a different visa category."
  },
  {
    question: "What documents do I need for my Australia eVisa application?",
    answer: "You'll need a valid passport, recent photo, travel itinerary, proof of funds, and accommodation details."
  },
  {
    question: "How far in advance should I apply for my Australia eVisa?",
    answer: "We recommend applying at least 2 weeks before your intended travel date to allow for processing time."
  },
  {
    question: "Can I extend my stay in Australia?",
    answer: "eVisa stays cannot be extended. you must leave Australia before your 60-day period expires."
  },
  {
    question: "What if my Australia eVisa application is rejected?",
    answer: "If rejected, you can reapply addressing the issues mentioned in the rejection notice, or contact our support team for assistance."
  }
];

export default function AustraliaRequirementsPage() {
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
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <Image
            src="/images/country/australia/australia-bg.jpg"
            alt="Australia Landscape"
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
              Australia Visa <span className="text-blue-200">Requirements</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Complete guide to Australia eVisa requirements, application process, and travel information for your Down Under adventure
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
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
              Australia Overview
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">About Australia</h3>
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Australia, the world's largest island and smallest continent, is renowned for its diverse landscapes, 
                    unique wildlife, and vibrant cities. From the iconic Sydney Opera House to the vast Outback, 
                    Australia offers experiences for every type of traveler.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    The country is home to the Great Barrier Reef, Uluru, and stunning coastlines, making it a perfect 
                    destination for nature lovers, adventure seekers, and urban explorers. Canberra, the capital city, 
                    serves as the political center, while Sydney and Melbourne are major cultural and business hubs.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Australia's visa system has been modernized with the eVisa program, making it easier for international 
                    travelers to obtain their travel authorization online before arrival.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <Image
                  src="/images/country/australia/australia-bg.jpg"
                  alt="Australia Sydney Opera House"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                  <span className="text-sm font-semibold text-slate-800">🇦🇺 Australia</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <h4 className="font-semibold text-slate-800">Capital</h4>
                </div>
                <p className="text-slate-600">Canberra</p>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="h-6 w-6 text-green-600" />
                  <h4 className="font-semibold text-slate-800">Language</h4>
                </div>
                <p className="text-slate-600">English</p>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-100">
                <div className="flex items-center gap-3 mb-3">
                  <CreditCard className="h-6 w-6 text-yellow-600" />
                  <h4 className="font-semibold text-slate-800">Currency</h4>
                </div>
                <p className="text-slate-600">Australian Dollar (AUD)</p>
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
              {australiaVisaTypes.map((visa, index) => (
                <Card key={index} className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/90 backdrop-blur-sm">
                  <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-green-500" />
                  <CardHeader className="pt-6 pb-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl shadow-lg bg-gradient-to-r from-blue-500 to-green-500 text-white">
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
                    <Link href={`/apply?country=australia&type=${encodeURIComponent(visa.id)}`} className="w-full">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300">
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
                    'Proof of accommodation in Australia (hotel bookings or invitation letter)',
                    'Return flight tickets or onward travel itinerary',
                    'Proof of sufficient funds for the duration of stay (minimum AUD 5,000)',
                    'Travel insurance covering your entire stay in Australia',
                    'Detailed travel itinerary including planned activities and destinations'
                  ].map((requirement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Additional Requirements for Business Visa</h3>
                <div className="space-y-4">
                  {[
                    'Invitation letter from Australian business partner or organization',
                    'Business registration documents (if applicable)',
                    'Letter from employer stating purpose of visit and business activities',
                    'Conference registration (if attending business events)',
                    'Proof of business meetings or activities scheduled in Australia',
                    'Company letterhead and business contact details'
                  ].map((requirement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Info className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
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
              <FileText className="h-8 w-8 text-blue-600" />
              Application Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: 1,
                  title: 'Complete Application',
                  description: 'Fill out the online application form with your personal and travel details',
                  icon: FileText
                },
                {
                  step: 2,
                  title: 'Upload Documents',
                  description: 'Upload required documents including passport, photo, and supporting materials',
                  icon: CheckCircle
                },
                {
                  step: 3,
                  title: 'Payment',
                  description: 'Pay the government fee and processing fee securely online',
                  icon: CreditCard
                },
                {
                  step: 4,
                  title: 'Receive eVisa',
                  description: 'Get your approved eVisa via email within 7 working days',
                  icon: Shield
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm">{step.description}</p>
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
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Government Fees</h3>
                <div className="space-y-4">
                  {australiaVisaTypes.map((visa, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-slate-800">{visa.name}</h4>
                        <p className="text-sm text-slate-600">{visa.visaValidity}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">${visa.govFee}</div>
                        <div className="text-sm text-slate-600">USD</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Processing Times</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <h4 className="font-semibold text-slate-800">Standard Processing</h4>
                    </div>
                    <p className="text-slate-600">7 working days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Travel Information Section */}
        <section id="travel" className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <Globe className="h-8 w-8 text-blue-600" />
              Travel Information
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Best Time to Visit</h3>
                <p className="text-slate-600 mb-4">
                  Australia's climate varies significantly across regions. The best time to visit depends on your destination:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Sydney & Melbourne</h4>
                      <p className="text-sm text-slate-600">September to November and March to May (spring and autumn)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Great Barrier Reef</h4>
                      <p className="text-sm text-slate-600">June to October (dry season with excellent visibility)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Uluru & Outback</h4>
                      <p className="text-sm text-slate-600">May to September (cooler temperatures)</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Entry Points</h3>
                <p className="text-slate-600 mb-4">
                  Australia has major international airports in all major cities:
                </p>
                <div className="space-y-3">
                  {[
                    'Sydney Airport (SYD) - New South Wales',
                    'Melbourne Airport (MEL) - Victoria',
                    'Brisbane Airport (BNE) - Queensland',
                    'Perth Airport (PER) - Western Australia',
                    'Adelaide Airport (ADL) - South Australia',
                    'Darwin Airport (DRW) - Northern Territory'
                  ].map((airport, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <MapPin className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{airport}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Australia Travel Guide */}
        <section id="travel-guide" className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <Globe className="h-8 w-8 text-emerald-600" />
              Complete Australia Travel Guide & Visa Information
            </h2>
            
            <div className="prose prose-slate max-w-none">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">About Australia eVisa Requirements</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Australia's eVisa system was introduced to streamline the visa application process for international travelers. 
                The Australia eVisa is an electronic travel authorization that allows visitors to enter Australia for tourism, 
                business, and other purposes. This digital system has significantly improved the overall travel experience for 
                millions of visitors to Australia each year.
              </p>
              
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Australia eVisa Eligibility & Requirements</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Most foreign nationals require an Australia eVisa to enter the territory, with the exception of citizens from some 
                visa-waiver countries. The eVisa system is available to travelers from eligible countries worldwide, making Australia 
                one of the most accessible destinations for international visitors interested in diverse landscapes, unique wildlife, 
                and vibrant cities.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h4 className="font-semibold text-emerald-800 mb-2">Who Needs an Australia eVisa?</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li> International tourists visiting Australia for leisure</li>
                    <li> Business travelers and investors</li>
                    <li> Students and educational visitors</li>
                    <li> Family visitors and relatives</li>
                    <li> Working holiday makers</li>
                    <li> Transit passengers</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Who is Exempt from Australia eVisa?</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li> Australian citizens and permanent residents</li>
                    <li> New Zealand citizens</li>
                    <li> Citizens of visa-waiver countries</li>
                    <li> Diplomatic passport holders</li>
                  </ul>
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Australia eVisa Application Process Explained</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                The Australia eVisa application process is designed to be simple and user-friendly. Our platform guides you 
                through each step, ensuring your application meets all requirements for approval. The entire process can 
                be completed online from anywhere in the world, eliminating the need to visit embassies or consulates.
              </p>
              
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Australia Visa Processing Times & Fees</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Australia eVisa processing times typically take 5 working days for normal processing. The government fees 
                are transparent: Tourist eVisa costs $20, while Business eVisa costs $30. We provide transparent pricing 
                with no hidden fees.
              </p>
              
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Popular Destinations in Australia</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Australia offers diverse attractions for every type of traveler. From the iconic Sydney Opera House to the 
                Great Barrier Reef, from the vast Outback to pristine beaches, Australia provides unforgettable experiences. 
                The country's unique blend of indigenous culture, modern cities, and natural wonders creates a fascinating 
                destination for travelers.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-4">
                  <h4 className="font-semibold text-emerald-800 mb-2">Natural Wonders</h4>
                  <p className="text-sm text-slate-600">
                    From the Great Barrier Reef to Uluru, from the Blue Mountains to the Twelve Apostles, Australia offers 
                    breathtaking natural landscapes and unique wildlife experiences for nature lovers.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Urban Experiences</h4>
                  <p className="text-sm text-slate-600">
                    From Sydney's harbor to Melbourne's laneways, from Brisbane's riverside to Perth's beaches, Australia's 
                    cities offer vibrant culture, world-class dining, and modern attractions.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Cultural Heritage</h4>
                  <p className="text-sm text-slate-600">
                    From Aboriginal culture to modern Australian society, from indigenous art to contemporary galleries, 
                    Australia offers rich cultural experiences and historical insights.
                  </p>
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Australia Travel Tips & Best Practices</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                When planning your trip to Australia, consider the vast size of the country and varying climates. The best 
                time to visit depends on your destination and activities. Always carry your eVisa approval letter, passport, 
                and other required documents when traveling. It's also recommended to have comprehensive travel insurance 
                and be aware of local customs and safety guidelines.
              </p>
              
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Why Choose Worldmaxxing Global Services for Australia Visa Applications</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Worldmaxxing Global Services has been helping travelers obtain their Australia visas since the eVisa system 
                was introduced. Our expertise in the Australia visa process, combined with our 98% approval rate and 24/7 
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
              Australia Visa Processing Insights & Travel Analytics
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Processing Time Trends */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Processing Time Trends (2024)</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">January</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-3 bg-blue-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{width: '85%'}}></div>
                      </div>
                      <span className="text-sm font-semibold text-blue-600">5.1 days</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">February</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-3 bg-blue-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{width: '78%'}}></div>
                      </div>
                      <span className="text-sm font-semibold text-blue-600">5.3 days</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">March</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-3 bg-blue-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{width: '92%'}}></div>
                      </div>
                      <span className="text-sm font-semibold text-blue-600">4.9 days</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">April</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-3 bg-blue-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{width: '88%'}}></div>
                      </div>
                      <span className="text-sm font-semibold text-blue-600">5.0 days</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">May</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-3 bg-blue-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{width: '95%'}}></div>
                      </div>
                      <span className="text-sm font-semibold text-blue-600">4.8 days</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">June</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-3 bg-blue-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{width: '90%'}}></div>
                      </div>
                      <span className="text-sm font-semibold text-blue-600">5.0 days</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                  <p className="text-xs text-blue-800">
                    <strong>Source:</strong> Australian Department of Home Affairs & Worldmaxxing Global Services processing data
                  </p>
                </div>
              </div>
              
              {/* Visa Type Distribution */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Visa Type Distribution</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Tourist Evisa</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-3 bg-green-200 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{width: '65%'}}></div>
                      </div>
                      <span className="text-sm font-semibold text-green-600">65%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Business Evisa</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-3 bg-green-200 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{width: '35%'}}></div>
                      </div>
                      <span className="text-sm font-semibold text-green-600">35%</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-green-100 rounded-lg">
                  <p className="text-xs text-green-800">
                    <strong>Source:</strong> <a href="https://homeaffairs.gov.au" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-900">homeaffairs.gov.au</a> (2024)
                  </p>
                </div>
              </div>
            </div>
            
            {/* Travel Seasonality Chart */}
            <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Best Time to Visit Australia</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Sun className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-slate-800 text-sm">Sep-Nov</h4>
                  <p className="text-xs text-slate-600">Spring</p>
                  <div className="mt-2">
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Cloud className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h4 className="font-semibold text-slate-800 text-sm">Dec-Feb</h4>
                  <p className="text-xs text-slate-600">Summer</p>
                  <div className="mt-2">
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Zap className="h-6 w-6 text-red-600" />
                  </div>
                  <h4 className="font-semibold text-slate-800 text-sm">Mar-May</h4>
                  <p className="text-xs text-slate-600">Autumn</p>
                  <div className="mt-2">
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Droplets className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-slate-800 text-sm">Jun-Aug</h4>
                  <p className="text-xs text-slate-600">Winter</p>
                  <div className="mt-2">
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{width: '70%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-purple-100 rounded-lg">
                <p className="text-xs text-purple-800">
                  <strong>Source:</strong> Australian Bureau of Meteorology & Tourism Australia
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-choose" className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <Shield className="h-8 w-8 text-blue-600" />
              Why Choose Worldmaxxing Global Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Zap,
                  title: 'Fast Processing',
                  description: '94% approval rate with average processing time of 5.2 days'
                },
                {
                  icon: Shield,
                  title: 'Secure & Reliable',
                  description: 'Bank-level security with 256-bit SSL encryption for all applications'
                },
                {
                  icon: Users,
                  title: 'Expert Support',
                  description: '24/7 customer support team with Australia visa expertise'
                },
                {
                  icon: CheckCircle,
                  title: '100% Online',
                  description: 'Complete your application entirely online - no office visits required'
                },
                {
                  icon: TrendingUp,
                  title: 'High Success Rate',
                  description: 'Proven track record with thousands of successful Australia visa applications'
                },
                {
                  icon: Globe,
                  title: 'Global Service',
                  description: 'Serving travelers from over 80 countries with Australia visa applications'
                }
              ].map((feature, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl border border-blue-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm">{feature.description}</p>
                </div>
              ))}
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
              <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">24/7 Phone Support</h3>
                <p className="text-sm text-slate-600 mb-3">Call us anytime for immediate assistance</p>
                <a href="tel:+13232864541" className="text-blue-600 font-semibold hover:text-blue-700">
                  +1 323 286 4541
                </a>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Email Support</h3>
                <p className="text-sm text-slate-600 mb-3">Get detailed responses within hours</p>
                <a href="mailto:visa@worldmaxxing.com" className="text-green-600 font-semibold hover:text-green-700">
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
            
            <div className="mt-8 p-6 bg-slate-50 rounded-xl">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Why Travelers Choose Worldmaxxing Global Services</h3>
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
                    <span>Fast processing with 5-7 day turnaround</span>
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
  );
} 