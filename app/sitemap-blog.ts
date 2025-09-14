import { MetadataRoute } from 'next'
import { COUNTRIES } from '@/lib/countries'

export default function blogSitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://visa.worldmaxxing.com'
  const currentDate = new Date()

  // Blog posts for each country
  const blogPosts = COUNTRIES.map((country) => ({
    url: `${baseUrl}/blog/${country.slug}-evisa-complete-guide`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Visa type specific blog posts
  const visaTypeBlogPosts = COUNTRIES.flatMap((country) => {
    const visaTypes = ['tourist', 'business', 'transit']
    return visaTypes.map((type) => ({
      url: `${baseUrl}/blog/${country.slug}-${type}-visa-guide`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  })

  // How-to guides
  const howToGuides = COUNTRIES.map((country) => ({
    url: `${baseUrl}/blog/how-to-apply-${country.slug}-evisa-2024`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  }))

  // Requirements guides
  const requirementGuides = COUNTRIES.map((country) => ({
    url: `${baseUrl}/blog/${country.slug}-visa-requirements-documents`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  }))

  // Travel tips and advice
  const travelTips = COUNTRIES.slice(0, 20).map((country) => ({
    url: `${baseUrl}/blog/travel-tips-${country.slug}-first-time-visitors`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  return [...blogPosts, ...visaTypeBlogPosts, ...howToGuides, ...requirementGuides, ...travelTips]
}