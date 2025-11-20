import { MetadataRoute } from 'next'
import { COUNTRIES } from '@/lib/countries'
import { NATIONALITIES } from '@/lib/nationalities'

export default function destinationSitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://worldmaxxing.com'
  const currentDate = new Date()

  // Main destination pages
  const destinationPages = COUNTRIES.map((country) => ({
    url: `${baseUrl}/destination/${country.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Visa type specific destination pages
  const visaTypePages = COUNTRIES.flatMap((country) => {
    const visaTypes = ['tourist', 'business', 'transit', 'medical', 'student']
    return visaTypes.map((type) => ({
      url: `${baseUrl}/destination/${country.slug}/${type}-visa`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))
  })

  // Nationality-specific destination pages for popular nationalities
  const popularNationalities = NATIONALITIES.filter(nat => 
    ['us', 'gb', 'ca', 'au', 'de', 'fr', 'it', 'es', 'nl', 'se', 'no', 'dk', 'ch', 'at', 'be', 'ie', 'nz', 'jp', 'kr', 'sg', 'in', 'pk', 'bd', 'lk', 'th', 'my', 'id', 'ph', 'vn']
    .includes(nat.code.toLowerCase())
  )

  const nationalityDestinationPages = popularNationalities.flatMap((nationality) => {
    return COUNTRIES.slice(0, 25).map((country) => ({ // Top 25 destinations for each nationality
      url: `${baseUrl}/visa-for-${nationality.code.toLowerCase()}-citizens/${country.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    }))
  })

  // Requirements pages for each destination
  const requirementPages = COUNTRIES.map((country) => ({
    url: `${baseUrl}/requirements-posts/${country.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  // FAQ pages for popular destinations
  const faqPages = COUNTRIES.filter(country => 
    ['kenya', 'vietnam', 'india', 'egypt', 'ethiopia', 'united-kingdom', 'canada', 'australia', 'saudi-arabia', 'qatar', 'oman', 'kuwait', 'bahrain', 'cambodia', 'laos', 'thailand', 'malaysia', 'singapore', 'indonesia', 'south-africa']
    .includes(country.slug)
  ).map((country) => ({
    url: `${baseUrl}/faq/${country.slug}-evisa-faq`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Processing time information pages
  const processingTimePages = COUNTRIES.map((country) => ({
    url: `${baseUrl}/processing-time/${country.slug}-evisa`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...destinationPages, ...visaTypePages, ...nationalityDestinationPages, ...requirementPages, ...faqPages, ...processingTimePages]
}