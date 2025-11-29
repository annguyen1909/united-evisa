import { NATIONALITIES } from '@/lib/nationalities'
import { COUNTRIES, getCountryBySlug } from '@/lib/countries'
import { generateNationalitySEO } from '@/lib/seo'
import { notFound } from 'next/navigation'
import EnhancedStructuredData from '@/app/components/EnhancedStructuredData'
import { SERVICE_FEE } from '@/lib/constants'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface PageProps {
  params: Promise<{ nationality: string; country: string }>
}

// Generate static params for popular nationality-country combinations
export async function generateStaticParams() {
  const popularNationalities = ['us', 'gb', 'ca', 'au', 'de', 'fr', 'it', 'es', 'nl', 'jp', 'kr', 'sg']
  
  const availableCountries = COUNTRIES.filter(country => country && country.slug)
  
  const combinations = []
  for (const nationality of popularNationalities) {
    const nationalityExists = NATIONALITIES.find(n => 
      n.code && n.code.toLowerCase() === nationality.toLowerCase()
    )
    
    if (nationalityExists) {
      for (const country of availableCountries) {
        // Format: nationality = "us-citizens", country = "canada"
        combinations.push({
          nationality: `${nationality}-citizens`,
          country: country.slug,
        })
      }
    }
  }
  
  return combinations
}

export async function generateMetadata({ params }: PageProps) {
  const { nationality: nationalityParam, country: countrySlug } = await params
  
  if (!nationalityParam || !countrySlug) {
    return {
      title: 'Page Not Found',
      description: 'The requested page could not be found.'
    }
  }

  // Extract nationality from 'us-citizens' -> 'us'
  const nationality = nationalityParam.replace(/-citizens$/, '')
  
  const nationalityInfo = NATIONALITIES.find(n => 
    n.code && n.code.toLowerCase() === nationality.toLowerCase()
  )
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
  const { nationality: nationalityParam, country: countrySlug } = await params
  
  if (!nationalityParam || !countrySlug) {
    notFound()
  }

  // Extract nationality from 'us-citizens' -> 'us'
  const nationality = nationalityParam.replace(/-citizens$/, '')
  
  const nationalityInfo = NATIONALITIES.find(n => 
    n.code && n.code.toLowerCase() === nationality.toLowerCase()
  )
  const country = getCountryBySlug(countrySlug)
  
  if (!nationalityInfo || !country) {
    notFound()
  }

  // Get visa types available for this nationality
  const availableVisaTypes = country.visaTypes.filter(visaType => 
    visaType.allowedNationalities.includes(nationality.toUpperCase())
  )

  // Use the first available visa type for pricing info
  const primaryVisaType = availableVisaTypes[0] || country.visaTypes[0]
  
  // Helper function to format price
  const formatPrice = (price: number) => price.toFixed(2)

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
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-6">
              {country.description}
            </p>
            {availableVisaTypes.length > 0 ? (
              <div className="inline-flex items-center px-6 py-3 bg-emerald-50 rounded-full">
                <svg className="w-5 h-5 text-emerald-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-emerald-700 font-semibold">eVisa Available for {nationalityInfo.name} Citizens</span>
              </div>
            ) : (
              <div className="inline-flex items-center px-6 py-3 bg-amber-50 rounded-full">
                <svg className="w-5 h-5 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span className="text-amber-700 font-semibold">Visa Requirements Apply - Contact for Details</span>
              </div>
            )}
          </div>

          {/* Welcome Message */}
          {country.welcomeMessage && (
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Why Visit {country.name}?</h2>
              <p className="text-slate-600 text-lg leading-relaxed">{country.welcomeMessage}</p>
            </div>
          )}

          {/* Available Visa Types */}
          {availableVisaTypes.length > 0 && (
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                Available {country.name} Visa Types for {nationalityInfo.name} Citizens
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {availableVisaTypes.map((visaType) => (
                  <div key={visaType.id} className="border-2 border-slate-200 rounded-xl p-6 hover:border-emerald-500 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">{visaType.type}</h3>
                        <p className="text-slate-600">{visaType.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-emerald-600">${formatPrice(visaType.govFee + Number(SERVICE_FEE))}</div>
                          <div className="text-sm text-slate-500">Total Cost</div>
                      </div>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm">
                        <svg className="w-4 h-4 text-emerald-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-slate-700"><strong>Entry:</strong> {visaType.entry}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <svg className="w-4 h-4 text-emerald-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-slate-700"><strong>Validity:</strong> {visaType.visaValidity}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <svg className="w-4 h-4 text-emerald-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-slate-700"><strong>Duration:</strong> {Math.floor(visaType.visaDuration / 365) > 0 ? `${Math.floor(visaType.visaDuration / 365)} year${Math.floor(visaType.visaDuration / 365) > 1 ? 's' : ''}` : `${visaType.visaDuration} days`}</span>
                      </div>
                    </div>
                    <Link href={`/apply?country=${country.slug}&nationality=${nationality}&visaType=${visaType.id}`}>
                      <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                        Apply for {visaType.type}
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quick Application Form */}
          <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl shadow-xl p-8 mb-16 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-800 text-center mb-8">
              Apply for Your {country.name} eVisa in 3 Simple Steps
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="text-3xl font-bold text-emerald-600 mb-2">1</div>
                <h3 className="font-semibold mb-2">Complete Online Form</h3>
                <p className="text-slate-600 text-sm">Fill in your personal and travel details in our secure online application form</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
                <h3 className="font-semibold mb-2">Upload Documents</h3>
                <p className="text-slate-600 text-sm">Submit your passport copy, photo, and any required supporting documents</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                <h3 className="font-semibold mb-2">Receive eVisa</h3>
                <p className="text-slate-600 text-sm">Get your approved eVisa delivered to your email within {country.processingTime?.normal || '3-5 working days'}</p>
              </div>
            </div>
                <div className="text-center">
              <Link href={`/apply?country=${country.slug}&nationality=${nationality}`}>
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-12 py-3 shadow-lg">
                  Start Your Application Now - From ${formatPrice(primaryVisaType.govFee + Number(SERVICE_FEE))}
                </Button>
              </Link>
              <p className="text-sm text-slate-600 mt-3">✓ Secure Payment ✓ 24/7 Support ✓ Money-Back Guarantee</p>
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
                    <span className="font-semibold">Normal Processing</span>
                    <span className="text-emerald-600 font-bold">{country.processingTime?.normal || '3-5 working days'}</span>
                  </div>
                  <div className="text-slate-600 text-sm">Standard processing time for most applications</div>
                </div>
                {country.processingTime?.superUrgent && (
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Rush Processing</span>
                      <span className="text-orange-600 font-bold">{country.processingTime.superUrgent}</span>
                    </div>
                    <div className="text-slate-600 text-sm">Available for urgent travel needs (additional fee applies)</div>
                  </div>
                )}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Validity Period</span>
                    <span className="text-emerald-600 font-bold">{primaryVisaType.visaValidity}</span>
                  </div>
                  <div className="text-slate-600 text-sm">{primaryVisaType.entry} option available</div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Total Cost</span>
                    <span className="text-emerald-600 font-bold">From ${formatPrice(primaryVisaType.govFee + 59.99)}</span>
                  </div>
                    <div className="text-slate-600 text-sm">Includes ${formatPrice(primaryVisaType.govFee)} government fee + ${formatPrice(Number(SERVICE_FEE))} service charge</div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Success Rate</span>
                    <span className="text-emerald-600 font-bold">99.5%</span>
                  </div>
                  <div className="text-slate-600 text-sm">Full refund guarantee if visa is rejected due to our error</div>
                </div>
              </div>
            </div>
          </div>

          {/* Country Information */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Essential {country.name} Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <div className="text-4xl mb-3">🌍</div>
                <h4 className="font-semibold text-slate-800 mb-2">Region</h4>
                <p className="text-slate-600">{country.region || 'International'}</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <div className="text-4xl mb-3">🗣️</div>
                <h4 className="font-semibold text-slate-800 mb-2">Language</h4>
                <p className="text-slate-600">{country.info.language}</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <div className="text-4xl mb-3">💰</div>
                <h4 className="font-semibold text-slate-800 mb-2">Currency</h4>
                <p className="text-slate-600">{country.info.currency}</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl md:col-span-3">
                <div className="text-4xl mb-3">☀️</div>
                <h4 className="font-semibold text-slate-800 mb-2">Climate</h4>
                <p className="text-slate-600">{country.info.climate}</p>
              </div>
            </div>
          </div>

          {/* Entry Points Information */}
          {country.portType && country.portType.length > 0 && (
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Entry Points to {country.name}
              </h3>
              <div className="space-y-6">
                {country.portType.map((port, index) => (
                  <div key={index} className="border-l-4 border-emerald-500 pl-6">
                    <h4 className="text-lg font-semibold text-slate-800 mb-3">{port.type}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {port.port.map((portName, idx) => (
                        <div key={idx} className="flex items-center text-slate-700">
                          <svg className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm">{portName}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
              Frequently Asked Questions About {country.name} eVisa for {nationalityInfo.name} Citizens
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-emerald-500 pl-6">
                <h4 className="font-semibold text-lg mb-2">Do {nationalityInfo.name} citizens need a visa to visit {country.name}?</h4>
                <p className="text-slate-600">
                  {availableVisaTypes.length > 0 
                    ? `Yes, ${nationalityInfo.name} citizens require an eVisa to enter ${country.name}. You can apply online through our secure platform with a simple 3-step process. The application typically takes ${country.processingTime?.normal || '3-5 working days'} to process.`
                    : `${nationalityInfo.name} citizens may need to check specific visa requirements for ${country.name}. Contact our support team for detailed information about your eligibility and required documents.`
                  }
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="font-semibold text-lg mb-2">How long can {nationalityInfo.name} citizens stay in {country.name}?</h4>
                <p className="text-slate-600">
                  The eVisa allows stays of {primaryVisaType.visaValidity} with {primaryVisaType.entry.toLowerCase()} options. The visa is valid for {Math.floor(primaryVisaType.visaDuration / 365) > 0 ? `${Math.floor(primaryVisaType.visaDuration / 365)} year${Math.floor(primaryVisaType.visaDuration / 365) > 1 ? 's' : ''}` : `${primaryVisaType.visaDuration} days`} from the date of issue.
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="font-semibold text-lg mb-2">What documents do I need to apply for a {country.name} eVisa?</h4>
                <p className="text-slate-600">
                  You will need a valid passport (with at least 6 months validity), a recent passport-sized photograph, proof of accommodation, return flight tickets, and travel insurance. Additional documents may be required depending on your visa type.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6">
                <h4 className="font-semibold text-lg mb-2">How much does a {country.name} eVisa cost for {nationalityInfo.name} citizens?</h4>
                  <p className="text-slate-600">
                  The total cost is ${formatPrice(primaryVisaType.govFee + Number(SERVICE_FEE))}, which includes the government visa fee of ${formatPrice(primaryVisaType.govFee)} and our service charge of ${formatPrice(Number(SERVICE_FEE))}. {country.processingTime?.superUrgent && `Rush processing is available for ${country.processingTime.superUrgent} at an additional cost.`}
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-6">
                <h4 className="font-semibold text-lg mb-2">What if my {country.name} eVisa application is rejected?</h4>
                <p className="text-slate-600">
                  We offer a 99.5% approval rate and provide a full refund guarantee if your visa application is rejected due to our error. Our expert team reviews every application before submission to ensure accuracy and completeness.
                </p>
              </div>
              <div className="border-l-4 border-emerald-500 pl-6">
                <h4 className="font-semibold text-lg mb-2">Can I extend my {country.name} eVisa?</h4>
                <p className="text-slate-600">
                  Visa extensions depend on the specific visa type and {country.name} immigration policies. Contact the local immigration office in {country.name} or reach out to our 24/7 support team for guidance on extension procedures.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl shadow-xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
              Why Choose Worldmaxxing for Your {country.name} eVisa?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">99.5% Success Rate</h4>
                <p className="text-slate-600 text-sm">Highest approval rate with money-back guarantee</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">Fast Processing</h4>
                <p className="text-slate-600 text-sm">Get your visa in {country.processingTime?.normal || '3-5 working days'}</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2v20M2 12h20" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">24/7 Expert Support</h4>
                <p className="text-slate-600 text-sm">Round-the-clock assistance from visa experts</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">Secure & Safe</h4>
                <p className="text-slate-600 text-sm">Bank-level encryption for your data</p>
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
