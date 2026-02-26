import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import { COUNTRIES } from '@/lib/countries'
import { getAllFaqSlugs } from '@/lib/faq'
import { getAllPosts } from '@/lib/blog'
import { getAllRequirementsPosts } from '@/lib/requirements-posts'

type ChangeFrequency =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never'

function createEntry(
  path: string,
  {
    lastModified,
    changeFrequency,
    priority,
  }: { lastModified: Date; changeFrequency: ChangeFrequency; priority: number },
): MetadataRoute.Sitemap[number] {
  const rawBaseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    'https://unitedevisa.com'

  const baseUrl = rawBaseUrl.replace(/\/+$/, '')

  return {
    url: `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`,
    lastModified,
    changeFrequency,
    priority,
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date()

  // Main Architecture Routes (Hubs)
  const destinationHubs = COUNTRIES.map((country) =>
    createEntry(`/destinations/${country.slug}`, {
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    }),
  )

  // Architecture Spokes
  const requirementSpokes = COUNTRIES.map((country) =>
    createEntry(`/destinations/${country.slug}/entry-requirements`, {
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    }),
  )

  const riskSpokes = COUNTRIES.map((country) =>
    createEntry(`/destinations/${country.slug}/rejection-risk`, {
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    }),
  )

  // How to Apply Guides (Dynamic country-based)
  // Popular countries have step-by-step guides as seen in app/how-to-apply/[slug]/page.tsx
  const popularCountrySlugs = [
    'kenya', 'vietnam', 'india', 'egypt', 'united-kingdom', 'canada', 'australia', 
    'saudi-arabia', 'qatar', 'oman', 'kuwait', 'bahrain', 'cambodia', 'laos', 
    'thailand', 'malaysia', 'singapore', 'indonesia', 'south-africa'
  ]
  
  const howToApplyPages = popularCountrySlugs.map((slug) =>
    createEntry(`/how-to-apply/${slug}-evisa-step-by-step`, {
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    }),
  )

  // Requirements Posts (Deep instructional content)
  const requirementsPosts = getAllRequirementsPosts().map((post) =>
    createEntry(`/requirements-posts/${post.slug}`, {
      lastModified: post.updatedAt ? new Date(post.updatedAt) : currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    }),
  )

  // Blog posts
  const blogPostsDirectory = path.join(process.cwd(), 'content/blog')
  const blogPosts = getAllPosts().map((post) => {
    const filePath = path.join(blogPostsDirectory, `${post.slug}.md`)
    const mtime = fs.existsSync(filePath) ? fs.statSync(filePath).mtime : null
    return createEntry(`/blog/${post.slug}`, {
      lastModified: mtime || currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    })
  })

  // Comparison Pages (High intent traffic)
  const comparisonSlugs = [
    'kenya-vs-tanzania-evisa',
    'vietnam-vs-cambodia-evisa', 
    'uae-gcc-countries-evisa',
    'east-africa-evisa-options'
  ]
  const comparisonPages = comparisonSlugs.map((slug) =>
    createEntry(`/compare/${slug}`, {
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    }),
  )

  // Static site pages
  const staticPages: MetadataRoute.Sitemap = [
    createEntry('/', {
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    }),
    createEntry('/destinations', {
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    }),
    createEntry('/about', {
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    }),
    createEntry('/apply', {
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    }),
    createEntry('/check-requirements', {
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    }),
    createEntry('/requirements-posts', {
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    }),
    createEntry('/requirements-posts/rss.xml', {
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.4,
    }),
    createEntry('/requirements-comparison', {
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    }),
    createEntry('/blog', {
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    }),
    createEntry('/blog/rss.xml', {
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.4,
    }),
    createEntry('/faq', {
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    }),
    createEntry('/faq/rss.xml', {
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.4,
    }),
    createEntry('/support', {
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    }),
    createEntry('/pricing', {
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    }),
    createEntry('/how-to-apply', {
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    }),
    createEntry('/digital-services-act', {
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    }),
    // Auth / account flows – helpful for users and indexing account UX
    createEntry('/login', {
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.2,
    }),
    createEntry('/signup', {
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.2,
    }),
    createEntry('/profile', {
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.2,
    }),
    createEntry('/list', {
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.6,
    }),
    // SMS preference / compliance pages
    createEntry('/sms-disclaimer', {
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    }),
    createEntry('/sms-preferences', {
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    }),
  ]

  // Legal and Auth (Lower priority)
  const legalPages: MetadataRoute.Sitemap = [
    createEntry('/terms', {
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    }),
    createEntry('/privacy', {
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    }),
    createEntry('/cookie-policy', {
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    }),
    createEntry('/refund-policy', {
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    }),
    createEntry('/disclaimers', {
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    }),
  ]

  // Dynamic FAQ pages from content folder
  const faqSlugs = getAllFaqSlugs()
  const faqPages = faqSlugs.map((slug) =>
    createEntry(`/faq/${slug}`, {
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    }),
  )

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