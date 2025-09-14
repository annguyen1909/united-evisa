import { NATIONALITIES } from '@/lib/nationalities'
import { COUNTRIES, getCountryBySlug } from '@/lib/countries'
import { generateNationalitySEO } from '@/lib/seo'
import { notFound } from 'next/navigation'
import EnhancedStructuredData from '@/app/components/EnhancedStructuredData'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface PageProps {
  params: Promise<{ nationality: string; country: string }>
}

// Generate static params for popular nationality-country combinations
export async function generateStaticParams() {
  const popularNationalities = ['us', 'gb', 'ca', 'au', 'de', 'fr', 'it', 'es', 'nl', 'jp', 'kr', 'sg']
  const popularCountries = COUNTRIES.slice(0, 15) // Top 15 destinations
  
  const combinations = []
  for (const nationality of popularNationalities) {
    for (const country of popularCountries) {
      combinations.push({
        nationality: nationality,
        country: country.slug,
      })
    }
  }
  
  return combinations
}

export async function generateMetadata({ params }: PageProps) {
  const { nationality, country: countrySlug } = await params
  const nationalityInfo = NATIONALITIES.find(n => n.code.toLowerCase() === nationality.toLowerCase())
  const country = getCountryBySlug(countrySlug)
  
  if (!nationalityInfo || !country) {
    return {
      title: 'Page Not Found',
      description: 'The requested page could not be found.'
    }
  }

  return generateNationalitySEO(nationality, country)
}

export default async function NationalityCountryPage({ params }: PageProps) {
  const { nationality, country: countrySlug } = await params
  const nationalityInfo = NATIONALITIES.find(n => n.code.toLowerCase() === nationality.toLowerCase())
  const country = getCountryBySlug(countrySlug)
  
  if (!nationalityInfo || !country) {
    notFound()
  }

  return (
    <>
      <EnhancedStructuredData 
        pageType="destination" 
        country={country.slug}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6 space-x-4">
              <img 
                src={`https://flagcdn.com/${nationality}.svg`} 
                alt={`${nationalityInfo.name} flag`}
                className="w-16 h-12 rounded-lg shadow-lg"
              />
              <div className="text-4xl font-bold text-slate-400">→</div>
              <img 
                src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`} 
                alt={`${country.name} flag`}
                className="w-16 h-12 rounded-lg shadow-lg"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              {country.name} eVisa for {nationalityInfo.name} Citizens
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Fast and secure {country.name} eVisa application for {nationalityInfo.name} citizens. 
              Get your visa approved in 24-72 hours with our expert assistance.
            </p>
          </div>

          {/* Quick Application Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-800 text-center mb-8">
              Apply for Your {country.name} eVisa Now
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-emerald-50 rounded-xl">
                <div className="text-2xl font-bold text-emerald-600 mb-2">Step 1</div>
                <h3 className="font-semibold mb-2">Fill Application</h3>
                <p className="text-slate-600 text-sm">Complete the online form with your travel details</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-2xl font-bold text-blue-600 mb-2">Step 2</div>
                <h3 className="font-semibold mb-2">Upload Documents</h3>
                <p className="text-slate-600 text-sm">Submit required documents and passport photo</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <div className="text-2xl font-bold text-purple-600 mb-2">Step 3</div>
                <h3 className="font-semibold mb-2">Receive eVisa</h3>
                <p className="text-slate-600 text-sm">Get your approved visa via email in 24-72 hours</p>
              </div>
            </div>
            <div className="text-center">
              <Link href={`/apply?country=${country.slug}&nationality=${nationality}`}>
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-12 py-3">
                  Start Application - From $49.99
                </Button>
              </Link>
            </div>
          </div>

          {/* Visa Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Requirements */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                {country.name} eVisa Requirements for {nationalityInfo.name} Citizens
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Valid Passport</div>
                    <div className="text-slate-600 text-sm">Passport valid for at least 6 months from travel date</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Passport Photo</div>
                    <div className="text-slate-600 text-sm">Recent passport-style photograph</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Travel Itinerary</div>
                    <div className="text-slate-600 text-sm">Flight bookings and accommodation details</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Supporting Documents</div>
                    <div className="text-slate-600 text-sm">Bank statements, employment letter (if required)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Processing Info */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Processing Information
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Processing Time</span>
                    <span className="text-emerald-600 font-bold">24-72 hours</span>
                  </div>
                  <div className="text-slate-600 text-sm">Rush processing available for urgent applications</div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Validity Period</span>
                    <span className="text-emerald-600 font-bold">90 days</span>
                  </div>
                  <div className="text-slate-600 text-sm">Multiple entry visa valid for tourism and business</div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Total Cost</span>
                    <span className="text-emerald-600 font-bold">From $49.99</span>
                  </div>
                  <div className="text-slate-600 text-sm">Includes government fees and service charges</div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Success Rate</span>
                    <span className="text-emerald-600 font-bold">99.5%</span>
                  </div>
                  <div className="text-slate-600 text-sm">Full refund guarantee if visa is rejected</div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
              Frequently Asked Questions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-2">Do {nationalityInfo.name} citizens need a visa for {country.name}?</h4>
                <p className="text-slate-600 text-sm">Yes, {nationalityInfo.name} citizens require an eVisa to enter {country.name}. You can apply online through our secure platform.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">How long can {nationalityInfo.name} citizens stay in {country.name}?</h4>
                <p className="text-slate-600 text-sm">The eVisa typically allows stays up to 30-90 days depending on the visa type and purpose of visit.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Is the {country.name} eVisa multiple entry?</h4>
                <p className="text-slate-600 text-sm">Yes, most {country.name} eVisas allow multiple entries within the validity period.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">What if my {country.name} visa application is rejected?</h4>
                <p className="text-slate-600 text-sm">We offer a full refund guarantee if your visa application is rejected due to our error.</p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Ready to Visit {country.name}?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Join thousands of {nationalityInfo.name} travelers who trust Worldmaxxing for their {country.name} visa.
            </p>
            <div className="space-x-4">
              <Link href={`/apply?country=${country.slug}&nationality=${nationality}`}>
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-3">
                  Apply Now
                </Button>
              </Link>
              <Link href={`/requirements-posts/${country.slug}`}>
                <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                  View Requirements
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}