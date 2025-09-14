import { MetadataRoute } from 'next'
import { COUNTRIES } from '@/lib/countries'
import { NATIONALITIES } from '@/lib/nationalities'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://visa.worldmaxxing.com'
  const currentDate = new Date()

  // Static pages with their priorities and change frequencies
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/apply`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/check-requirements`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/destination`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/support`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/login`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/signup`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/profile`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/disclaimers`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/refund-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/digital-services-act`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]

  // Generate country requirement pages - High SEO priority
  const countryPages = COUNTRIES.map((country) => ({
    url: `${baseUrl}/requirements-posts/${country.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  // Generate destination pages - High priority for SEO
  const destinationPages = COUNTRIES.map((country) => ({
    url: `${baseUrl}/destination/${country.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Generate blog pages - SEO optimized
  const blogPages = COUNTRIES.map((country) => ({
    url: `${baseUrl}/blog/${country.slug}-evisa-complete-guide`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Generate FAQ pages for better SEO coverage
  const faqPages = COUNTRIES.filter(country => 
    ['armenia', 'egypt', 'ethiopia', 'india', 'kenya', 'malaysia', 'new-zealand', 'pakistan', 'qatar', 'south-africa', 'sri-lanka', 'united-kingdom', 'vietnam']
    .includes(country.slug)
  ).map((country) => ({
    url: `${baseUrl}/faq/${country.slug}-evisa-faq`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Generate visa type specific pages for more indexable content
  const visaTypePages = COUNTRIES.flatMap((country) => {
    const visaTypes = ['tourist', 'business', 'transit', 'medical']
    return visaTypes.map((type) => ({
      url: `${baseUrl}/destination/${country.slug}/${type}-visa`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))
  })

  // Generate nationality-specific landing pages for better targeting
  const popularNationalities = NATIONALITIES.filter(nat => 
    ['us', 'gb', 'ca', 'au', 'de', 'fr', 'it', 'es', 'nl', 'se', 'no', 'dk', 'ch', 'at', 'be', 'ie', 'nz', 'jp', 'kr', 'sg']
    .includes(nat.code.toLowerCase())
  )

  const nationalityPages = popularNationalities.flatMap((nationality) => {
    return COUNTRIES.slice(0, 20).map((country) => ({ // Limit to top 20 destinations
      url: `${baseUrl}/visa-for-${nationality.code.toLowerCase()}-citizens/${country.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    }))
  })

  // Generate step-by-step guide pages
  const guidePages = COUNTRIES.slice(0, 30).map((country) => ({
    url: `${baseUrl}/how-to-apply/${country.slug}-evisa-step-by-step`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Generate comparison pages for similar destinations
  const comparisonPages = [
    {
      url: `${baseUrl}/compare/kenya-vs-tanzania-evisa`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/compare/vietnam-vs-cambodia-evisa`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/compare/uae-gcc-countries-evisa`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/compare/east-africa-evisa-options`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  return [...staticPages, ...countryPages, ...destinationPages, ...blogPages, ...faqPages, ...visaTypePages, ...nationalityPages, ...guidePages, ...comparisonPages]
}