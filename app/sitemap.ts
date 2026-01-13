import { MetadataRoute } from 'next'
import { COUNTRIES } from '@/lib/countries'
import { getAllowedVisaTypes } from '@/lib/visa-types'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://worldmaxxing.com'
  const currentDate = new Date()

  // Main Architecture Routes
  const destinationHubs = COUNTRIES.map((country) => ({
    url: `${baseUrl}/destinations/${country.slug}`,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: 1.0,
  }))

  const requirementSpokes = COUNTRIES.map((country) => ({
    url: `${baseUrl}/destinations/${country.slug}/entry-requirements`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const riskSpokes = COUNTRIES.map((country) => ({
    url: `${baseUrl}/destinations/${country.slug}/rejection-risk`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Static site pages
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
      priority: 0.9,
    },
    {
      url: `${baseUrl}/check-requirements`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
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
  ]

  // Legal and Auth (Lower priority)
  const legalPages = [
    { url: `${baseUrl}/terms`, lastModified: currentDate, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${baseUrl}/privacy`, lastModified: currentDate, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${baseUrl}/login`, lastModified: currentDate, changeFrequency: 'yearly' as const, priority: 0.5 },
    { url: `${baseUrl}/signup`, lastModified: currentDate, changeFrequency: 'yearly' as const, priority: 0.5 },
  ]

  // Legacy/Utility FAQ pages
  const faqPages = COUNTRIES.filter(country => 
    ['india', 'vietnam', 'kenya', 'egypt', 'saudi-arabia', 'turkey', 'cambodia', 'sri-lanka']
    .includes(country.slug)
  ).map((country) => ({
    url: `${baseUrl}/faq/${country.slug}-evisa-faq`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    ...staticPages, 
    ...destinationHubs, 
    ...requirementSpokes, 
    ...riskSpokes, 
    ...faqPages,
    ...legalPages
  ]
}