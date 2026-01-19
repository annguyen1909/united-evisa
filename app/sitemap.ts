import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import { COUNTRIES } from '@/lib/countries'
import { getAllFaqSlugs } from '@/lib/faq'
import { getAllPosts } from '@/lib/blog'
import { getAllRequirementsPosts } from '@/lib/requirements-posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://worldmaxxing.com'
  const currentDate = new Date()

  // Main Architecture Routes (Hubs)
  const destinationHubs = COUNTRIES.map((country) => ({
    url: `${baseUrl}/destinations/${country.slug}`,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: 1.0,
  }))

  // Architecture Spokes
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

  // How to Apply Guides (Dynamic country-based)
  // Popular countries have step-by-step guides as seen in app/how-to-apply/[slug]/page.tsx
  const popularCountrySlugs = [
    'kenya', 'vietnam', 'india', 'egypt', 'united-kingdom', 'canada', 'australia', 
    'saudi-arabia', 'qatar', 'oman', 'kuwait', 'bahrain', 'cambodia', 'laos', 
    'thailand', 'malaysia', 'singapore', 'indonesia', 'south-africa'
  ]
  
  const howToApplyPages = popularCountrySlugs.map((slug) => ({
    url: `${baseUrl}/how-to-apply/${slug}-evisa-step-by-step`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Requirements Posts (Deep instructional content)
  const requirementsPosts = getAllRequirementsPosts().map((post) => ({
    url: `${baseUrl}/requirements-posts/${post.slug}`,
    lastModified: post.updatedAt ? new Date(post.updatedAt) : currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Blog posts
  const blogPostsDirectory = path.join(process.cwd(), 'content/blog')
  const blogPosts = getAllPosts().map((post) => {
    const filePath = path.join(blogPostsDirectory, `${post.slug}.md`)
    const mtime = fs.existsSync(filePath) ? fs.statSync(filePath).mtime : null
    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: mtime || currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }
  })

  // Comparison Pages (High intent traffic)
  const comparisonSlugs = [
    'kenya-vs-tanzania-evisa',
    'vietnam-vs-cambodia-evisa', 
    'uae-gcc-countries-evisa',
    'east-africa-evisa-options'
  ]
  const comparisonPages = comparisonSlugs.map((slug) => ({
    url: `${baseUrl}/compare/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
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
      url: `${baseUrl}/destinations`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
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
      url: `${baseUrl}/requirements-posts`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/requirements-posts/rss.xml`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.4,
    },
    {
      url: `${baseUrl}/requirements-comparison`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/rss.xml`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.4,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq/rss.xml`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.4,
    },
    {
      url: `${baseUrl}/support`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/how-to-apply`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/digital-services-act`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]

  // Legal and Auth (Lower priority)
  const legalPages = [
    { url: `${baseUrl}/terms`, lastModified: currentDate, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${baseUrl}/privacy`, lastModified: currentDate, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${baseUrl}/cookie-policy`, lastModified: currentDate, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${baseUrl}/refund-policy`, lastModified: currentDate, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${baseUrl}/disclaimers`, lastModified: currentDate, changeFrequency: 'yearly' as const, priority: 0.3 },
  ]

  // Dynamic FAQ pages from content folder
  const faqSlugs = getAllFaqSlugs()
  const faqPages = faqSlugs.map((slug) => ({
    url: `${baseUrl}/faq/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    ...staticPages, 
    ...destinationHubs, 
    ...requirementSpokes, 
    ...riskSpokes, 
    ...howToApplyPages,
    ...blogPosts,
    ...requirementsPosts,
    ...comparisonPages,
    ...faqPages,
    ...legalPages
  ]
}