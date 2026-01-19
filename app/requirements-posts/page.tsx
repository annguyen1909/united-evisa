import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { COUNTRIES } from '@/lib/countries'
import { getAllRequirementsPosts } from '@/lib/requirements-posts'

export const metadata: Metadata = {
  title: 'Visa Requirements by Country | Worldmaxxing Global Services',
  description: 'Browse visa requirements and documents by destination. Explore country-specific eVisa requirements, processing times, and application guidance.',
  alternates: {
    canonical: 'https://worldmaxxing.com/requirements-posts',
    types: {
      'application/rss+xml': 'https://worldmaxxing.com/requirements-posts/rss.xml',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RequirementsIndexPage() {
  const posts = getAllRequirementsPosts()
  const recentPosts = posts
    .filter((post) => post.updatedAt)
    .sort((a, b) => {
      const aDate = a.updatedAt ? new Date(a.updatedAt).getTime() : 0
      const bDate = b.updatedAt ? new Date(b.updatedAt).getTime() : 0
      return bDate - aDate
    })
    .slice(0, 6)

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-3">
            Visa Requirements by Country
          </h1>
          <p className="text-slate-600 text-lg max-w-3xl">
            Select a destination to review required documents, eligibility, and processing timelines.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        {recentPosts.length > 0 && (
          <div className="mb-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4 mb-4">
              <h2 className="text-xl font-semibold text-slate-900">Recently updated requirements</h2>
              <Link
                href="/requirements-posts/rss.xml"
                className="text-sm font-medium text-emerald-700 hover:text-emerald-800"
              >
                RSS feed
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {recentPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/requirements-posts/${post.slug}`}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 hover:border-emerald-200 hover:bg-white transition-colors"
                >
                  <p className="text-sm font-semibold text-slate-900">{post.country}</p>
                  <p className="text-xs text-slate-500 mt-1">
                    Updated {post.updatedAt ? new Date(post.updatedAt).toLocaleDateString('en-US') : 'recently'}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COUNTRIES.map((country) => (
            <Link
              key={country.slug}
              href={`/requirements-posts/${country.slug}`}
              className="group rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-40 w-full overflow-hidden rounded-t-xl bg-slate-100">
                {country.imageUrl ? (
                  <Image
                    src={country.imageUrl}
                    alt={`${country.name} visa requirements`}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform"
                  />
                ) : (
                  <div className="h-full w-full bg-slate-100" />
                )}
              </div>
              <div className="p-5">
                <h2 className="text-lg font-semibold text-slate-900 mb-1">
                  {country.name}
                </h2>
                <p className="text-sm text-slate-600 line-clamp-2">
                  {country.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
