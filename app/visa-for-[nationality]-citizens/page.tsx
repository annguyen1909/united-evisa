import { NATIONALITIES } from '@/lib/nationalities'
import { COUNTRIES } from '@/lib/countries'
import { generateNationalitySEO } from '@/lib/seo'
import { notFound } from 'next/navigation'
import EnhancedStructuredData from '@/app/components/EnhancedStructuredData'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface PageProps {
  params: Promise<{ nationality: string }>
}

// Generate static params for popular nationalities
export async function generateStaticParams() {
  const popularNationalities = ['us', 'gb', 'ca', 'au', 'de', 'fr', 'it', 'es', 'nl', 'se', 'no', 'dk', 'ch', 'at', 'be', 'ie', 'nz', 'jp', 'kr', 'sg']
  
  // Filter to only include nationalities that actually exist in our NATIONALITIES array
  const validNationalities = popularNationalities.filter(nationality => {
    return NATIONALITIES.find(n => 
      n.code && n.code.toLowerCase() === nationality.toLowerCase()
    )
  })
  
  return validNationalities.map((nationality) => ({
    nationality: nationality,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { nationality } = await params
  
  // Add null check
  if (!nationality) {
    return {
      title: 'Nationality Not Found',
      description: 'The requested nationality page could not be found.'
    }
  }
  
  const nationalityInfo = NATIONALITIES.find(n => 
    n.code && n.code.toLowerCase() === nationality.toLowerCase()
  )
  
  if (!nationalityInfo) {
    return {
      title: 'Nationality Not Found',
      description: 'The requested nationality page could not be found.'
    }
  }

  return {
    title: `eVisa Applications for ${nationalityInfo.name} Citizens | Worldmaxxing`,
    description: `${nationalityInfo.name} citizens can apply for eVisas to 50+ countries. Fast processing, expert support, and guaranteed approval. Check visa requirements and apply online.`,
    alternates: {
      canonical: `https://visa.worldmaxxing.com/visa-for-${nationality}-citizens`,
    },
    keywords: [
      `${nationalityInfo.name} visa applications`,
      `${nationalityInfo.name} eVisa`,
      `visa for ${nationalityInfo.name} citizens`,
      'online visa application',
      'fast visa processing',
      'travel visa'
    ].join(', '),
    openGraph: {
      title: `eVisa Applications for ${nationalityInfo.name} Citizens`,
      description: `${nationalityInfo.name} citizens can apply for eVisas to 50+ countries. Fast processing, expert support, and guaranteed approval.`,
      url: `https://visa.worldmaxxing.com/visa-for-${nationality}-citizens`,
      images: [
        {
          url: `/images/nationality/${nationality}-visa-services.jpg`,
          width: 1200,
          height: 630,
          alt: `${nationalityInfo.name} eVisa Services`
        }
      ]
    }
  }
}

export default async function NationalityPage({ params }: PageProps) {
  const { nationality } = await params
  
  // Add null check
  if (!nationality) {
    notFound()
  }
  
  const nationalityInfo = NATIONALITIES.find(n => 
    n.code && n.code.toLowerCase() === nationality.toLowerCase()
  )
  
  if (!nationalityInfo) {
    notFound()
  }

  // Get popular destinations for this nationality
  const popularDestinations = COUNTRIES.slice(0, 20) // Top 20 destinations

  return (
    <>
      <EnhancedStructuredData 
        pageType="destination" 
        country={nationality}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <img 
                src={`https://flagcdn.com/${nationality}.svg`} 
                alt={`${nationalityInfo.name} flag`}
                className="w-16 h-12 rounded-lg shadow-lg mr-4"
              />
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
                eVisa Services for {nationalityInfo.name} Citizens
              </h1>
            </div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              As a {nationalityInfo.name} citizen, you can apply for eVisas to 50+ countries with fast processing, 
              expert support, and guaranteed approval. Choose your destination below to get started.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-emerald-600 mb-2">50+</div>
              <div className="text-slate-600">Countries Available</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">24-72h</div>
              <div className="text-slate-600">Processing Time</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">99.5%</div>
              <div className="text-slate-600">Approval Rate</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-slate-600">Expert Support</div>
            </div>
          </div>

          {/* Popular Destinations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
              Popular Destinations for {nationalityInfo.name} Citizens
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {popularDestinations.map((country) => (
                <div key={country.slug} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300 relative">
                    <img 
                      src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`}
                      alt={`${country.name} flag`}
                      className="absolute top-4 right-4 w-12 h-8 rounded shadow-lg"
                    />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl font-bold text-white">{country.name}</h3>
                      <p className="text-white/80">eVisa Available</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Processing Time:</span>
                        <span className="font-semibold">24-72 hours</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Validity:</span>
                        <span className="font-semibold">90 days</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Price from:</span>
                        <span className="font-semibold text-emerald-600">$49.99</span>
                      </div>
                    </div>
                    <Link href={`/visa-for-${nationality}-citizens/${country.slug}`}>
                      <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                        Apply for {country.name} eVisa
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">
              Why {nationalityInfo.name} Citizens Choose Worldmaxxing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Guaranteed Approval</h3>
                <p className="text-slate-600">99.5% approval rate with full refund guarantee if your visa is rejected.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Processing</h3>
                <p className="text-slate-600">Most visas processed within 24-72 hours with rush options available.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2v20M2 12h20" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-slate-600">Expert visa consultants available around the clock to assist you.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Ready to Apply for Your eVisa?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Join thousands of {nationalityInfo.name} citizens who trust Worldmaxxing for their visa needs.
            </p>
            <Link href="/check-requirements">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-3">
                Check Visa Requirements
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}