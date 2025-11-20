import { COUNTRIES, getCountryBySlug } from '@/lib/countries'
import { generateCountrySEO } from '@/lib/seo'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle, Clock, FileText, CreditCard, Download, ArrowRight } from 'lucide-react'

interface PageProps {
  params: Promise<{ slug: string }>
}

// Generate static params for popular countries
export async function generateStaticParams() {
  const popularCountries = COUNTRIES.filter(country => 
    ['kenya', 'vietnam', 'india', 'egypt', 'united-kingdom', 'canada', 'australia', 'saudi-arabia', 'qatar', 'oman', 'kuwait', 'bahrain', 'cambodia', 'laos', 'thailand', 'malaysia', 'singapore', 'indonesia', 'south-africa'].includes(country.slug)
  )
  
  return popularCountries.map((country) => ({
    slug: `${country.slug}-evisa-step-by-step`,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const countrySlug = slug.replace('-evisa-step-by-step', '')
  const country = getCountryBySlug(countrySlug)
  
  if (!country) {
    return {
      title: 'Guide Not Found',
      description: 'The requested guide could not be found.'
    }
  }

  return {
    title: `How to Apply for ${country.name} eVisa - Step by Step Guide 2024`,
    description: `Complete step-by-step guide on how to apply for ${country.name} eVisa. Learn the application process, required documents, and get approved quickly.`,
    alternates: {
      canonical: `https://worldmaxxing.com/how-to-apply/${slug}`,
    },
    keywords: [
      `how to apply ${country.name} visa`,
      `${country.name} eVisa application`,
      'step by step guide',
      'visa application process',
      `${country.name} visa requirements`,
      'online visa application'
    ].join(', '),
    openGraph: {
      title: `How to Apply for ${country.name} eVisa - Step by Step Guide`,
      description: `Complete step-by-step guide on how to apply for ${country.name} eVisa. Learn the application process and get approved quickly.`,
      url: `https://worldmaxxing.com/how-to-apply/${slug}`,
      images: [
        {
          url: `/images/guides/${countrySlug}-application-guide.jpg`,
          width: 1200,
          height: 630,
          alt: `${country.name} eVisa Application Guide`
        }
      ]
    }
  }
}

export default async function HowToApplyPage({ params }: PageProps) {
  const { slug } = await params
  const countrySlug = slug.replace('-evisa-step-by-step', '')
  const country = getCountryBySlug(countrySlug)
  
  if (!country) {
    notFound()
  }

  const steps = [
    {
      number: 1,
      title: "Check Eligibility",
      description: "Verify that your nationality is eligible for eVisa and your travel purpose is allowed",
      icon: <CheckCircle className="w-6 h-6" />,
      details: [
        "Confirm your passport is valid for at least 6 months",
        "Check if your nationality is eligible for eVisa",
        "Ensure your travel purpose matches visa categories",
        "Verify you have sufficient funds for your stay"
      ]
    },
    {
      number: 2,
      title: "Gather Documents",
      description: "Collect all required documents and ensure they meet specifications",
      icon: <FileText className="w-6 h-6" />,
      details: [
        "Valid passport with at least 2 blank pages",
        "Recent passport-style photograph",
        "Travel itinerary and accommodation bookings",
        "Bank statements or proof of funds",
        "Additional documents based on visa type"
      ]
    },
    {
      number: 3,
      title: "Complete Application",
      description: "Fill out the online application form with accurate information",
      icon: <FileText className="w-6 h-6" />,
      details: [
        "Access the official eVisa application portal",
        "Fill out personal and travel information",
        "Upload required documents and photographs",
        "Review all information for accuracy",
        "Save your application reference number"
      ]
    },
    {
      number: 4,
      title: "Make Payment",
      description: "Pay the visa fee using secure online payment methods",
      icon: <CreditCard className="w-6 h-6" />,
      details: [
        "Choose your preferred payment method",
        "Pay government fees and service charges",
        "Keep payment confirmation for records",
        "Note that fees are non-refundable",
        "Receive payment confirmation email"
      ]
    },
    {
      number: 5,
      title: "Track Application",
      description: "Monitor your application status and respond to any requests",
      icon: <Clock className="w-6 h-6" />,
      details: [
        "Use reference number to track status",
        "Check email for updates and requests",
        "Respond promptly to any additional requirements",
        "Processing typically takes 24-72 hours",
        "Contact support if you have concerns"
      ]
    },
    {
      number: 6,
      title: "Receive eVisa",
      description: "Download and print your approved eVisa for travel",
      icon: <Download className="w-6 h-6" />,
      details: [
        "Receive approval notification via email",
        "Download your eVisa document",
        "Print a physical copy for travel",
        "Save digital copy on your mobile device",
        "Verify all details are correct before traveling"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <img 
              src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`} 
              alt={`${country.name} flag`}
              className="w-16 h-12 rounded-lg shadow-lg mr-4"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
              How to Apply for {country.name} eVisa
            </h1>
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Follow this comprehensive step-by-step guide to successfully apply for your {country.name} eVisa. 
            Our proven process has helped thousands of travelers get approved quickly and efficiently.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-emerald-600 mb-2">24-72h</div>
            <div className="text-slate-600">Processing Time</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">99.5%</div>
            <div className="text-slate-600">Success Rate</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">6</div>
            <div className="text-slate-600">Easy Steps</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-slate-600">Support</div>
          </div>
        </div>

        {/* Step-by-Step Guide */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
            6 Simple Steps to Get Your {country.name} eVisa
          </h2>
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-emerald-600">{step.number}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className="text-emerald-600 mr-3">{step.icon}</div>
                      <h3 className="text-2xl font-bold text-slate-800">{step.title}</h3>
                    </div>
                    <p className="text-slate-600 mb-6">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements Summary */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">
            {country.name} eVisa Requirements Summary
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4 text-slate-800">Essential Documents</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Valid passport (6+ months)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Passport-style photograph</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Travel itinerary</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Proof of accommodation</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-slate-800">Processing Information</h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Processing Time:</span>
                  <span className="font-semibold">24-72 hours</span>
                </li>
                <li className="flex justify-between">
                  <span>Validity Period:</span>
                  <span className="font-semibold">90 days</span>
                </li>
                <li className="flex justify-between">
                  <span>Stay Duration:</span>
                  <span className="font-semibold">Up to 30 days</span>
                </li>
                <li className="flex justify-between">
                  <span>Total Cost:</span>
                  <span className="font-semibold text-emerald-600">From $49.99</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pro Tips */}
        <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Pro Tips for Success</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Apply Early</h4>
                  <p className="text-slate-600 text-sm">Submit your application at least 1 week before travel to allow for processing time.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Double-Check Information</h4>
                  <p className="text-slate-600 text-sm">Ensure all personal and travel details match your passport exactly.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">High-Quality Photos</h4>
                  <p className="text-slate-600 text-sm">Use recent, clear photos that meet official passport photo requirements.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Keep Records</h4>
                  <p className="text-slate-600 text-sm">Save all confirmation emails and reference numbers for tracking.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Ready to Apply for Your {country.name} eVisa?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Follow our step-by-step process and get your visa approved quickly with expert assistance.
          </p>
          <div className="space-x-4">
            <Link href={`/apply?destination=${country.slug}`}>
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-3">
                Start Application Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href={`/requirements-posts/${country.slug}`}>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                View Full Requirements
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}