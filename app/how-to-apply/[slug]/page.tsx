import { COUNTRIES, getCountryBySlug } from '@/lib/countries'
import { generateCountrySEO } from '@/lib/seo'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Clock, FileText, CreditCard, Download, ArrowRight, ShieldCheck, Info } from 'lucide-react'
import EnhancedStructuredData from '@/app/components/EnhancedStructuredData'

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
    title: `How to Apply for ${country.name} eVisa | Step by Step Guide 2024`,
    description: `Complete step-by-step guide on how to apply for ${country.name} eVisa. Learn the application process, required documents, and get approved quickly.`,
    alternates: {
      canonical: `https://unitedevisa.com/how-to-apply/${slug}`,
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
      title: `How to Apply for ${country.name} eVisa - Official Step by Step Guide`,
      description: `Official step-by-step guide on how to apply for ${country.name} eVisa. Learn the exact application process and get approved quickly.`,
      url: `https://unitedevisa.com/how-to-apply/${slug}`,
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
    <>
      <EnhancedStructuredData
        pageType="guide"
        country={country.slug}
        title={`How to Apply for ${country.name} eVisa`}
        description={`Official step-by-step guide for ${country.name} visa application`}
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex flex-col items-center justify-center mb-6">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`}
                  alt={`${country.name} flag`}
                  className="w-16 h-12 rounded-lg shadow-lg"
                />
                <Badge variant="outline" className="bg-white/50 border-blue-200 text-blue-700">Official Guide 2024</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
                How to Apply for {country.name} eVisa
              </h1>
            </div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Follow this comprehensive step-by-step guide to successfully apply for your {country.name} eVisa.
              Our proven process has helped thousands of travelers get approved quickly and efficiently.
            </p>
          </div>

          {/* Hub Cross-Link (Spoke to Hub) */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-blue-900 rounded-[32px] p-8 text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute right-0 top-0 p-8 opacity-10 group-hover:rotate-12 transition-transform">
                <ShieldCheck className="w-24 h-24" />
              </div>
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] block mb-2">Expert Resource</span>
                  <h3 className="text-2xl font-bold mb-2">Need More Details?</h3>
                  <p className="text-blue-100">
                    Visit our comprehensive <strong>{country.name} Destination Hub</strong> for full entry requirements, rejection risk analysis, and local travel tips.
                  </p>
                </div>
                <Link href={`/destinations/${country.slug}`}>
                  <Button className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all h-auto">
                    Visit {country.name} Hub
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-white">
              <div className="text-3xl font-bold text-blue-600 mb-2">24-72h</div>
              <div className="text-slate-600 text-sm uppercase font-bold tracking-wider">Processing Time</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-white">
              <div className="text-3xl font-bold text-blue-600 mb-2">99.5%</div>
              <div className="text-slate-600 text-sm uppercase font-bold tracking-wider">Success Rate</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-white">
              <div className="text-3xl font-bold text-purple-600 mb-2">6</div>
              <div className="text-slate-600 text-sm uppercase font-bold tracking-wider">Easy Steps</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-white">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-slate-600 text-sm uppercase font-bold tracking-wider">Support</div>
            </div>
          </div>

          {/* Step-by-Step Guide */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
              6 Simple Steps to Get Your {country.name} eVisa
            </h2>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row items-center border-l-8 border-blue-500">
                    <div className="flex-shrink-0 p-8">
                      <div className="w-20 h-20 bg-blue-50 rounded-2/3 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors duration-500">
                        <span className="text-3xl font-bold">{step.number}</span>
                      </div>
                    </div>
                    <div className="flex-1 p-8">
                      <div className="flex items-center mb-4">
                        <div className="text-blue-600 mr-4 p-2 bg-blue-50 rounded-lg">{step.icon}</div>
                        <h3 className="text-2xl font-bold text-slate-800">{step.title}</h3>
                      </div>
                      <p className="text-slate-600 mb-6 font-medium">{step.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                            <span className="text-slate-700 text-sm font-bold">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements Summary */}
          <div className="bg-white rounded-3xl shadow-xl p-10 mb-16 border border-slate-100">
            <div className="flex items-center gap-3 mb-8">
              <Info className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-slate-800">
                {country.name} eVisa Requirements Summary
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-slate-50 p-6 rounded-2xl">
                <h4 className="font-black text-slate-800 mb-6 uppercase tracking-widest text-xs">Essential Documents</h4>
                <div className="space-y-4">
                  {[
                    "Valid passport (6+ months remaining)",
                    "Color passport-style photograph",
                    "Return flight or onward travel itinerary",
                    "Proof of accommodation for entire stay"
                  ].map((doc, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span className="text-slate-700 font-bold text-sm">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-900 p-8 rounded-2xl text-white">
                <h4 className="font-black text-blue-400 mb-6 uppercase tracking-widest text-xs">Processing Information</h4>
                <div className="space-y-4">
                  {[
                    { label: "Processing Time", value: "24-72 hours" },
                    { label: "Validity Period", value: "90 days" },
                    { label: "Stay Duration", value: "Up to 30 days" },
                    { label: "Total Cost", value: "From $59.99", highlight: true }
                  ].map((info, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="text-slate-400 text-sm font-bold">{info.label}</span>
                      <span className={`font-black ${info.highlight ? 'text-blue-400' : 'text-white'}`}>{info.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-slate-50 rounded-[48px] p-16 border border-slate-200">
            <h2 className="text-4xl font-black text-slate-900 mb-6">
              Get Your {country.name} eVisa Today
            </h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Skip the embassy queues. Our expert team ensures your application is perfect before submission.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href={`/apply?destination=${country.slug}`}>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-12 py-8 rounded-2xl font-black h-auto shadow-2xl shadow-blue-200">
                  Start Application
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </Link>
              <Link href={`/requirements-posts/${country.slug}`}>
                <Button size="lg" variant="outline" className="bg-white text-slate-900 border-slate-200 text-lg px-12 py-8 rounded-2xl font-black h-auto hover:bg-slate-50 transition-all">
                  Full Requirements
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}