import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

// Domain-level 301 from old subdomain to new apex domain.
export function middleware(req: NextRequest) {
  const host = req.headers.get('host') || ''

  if (host === 'visa.worldmaxxing.com') {
    const url = req.nextUrl.clone()
    url.host = 'worldmaxxing.com'
    // Preserve protocol and path/query automatically; use 308 to be explicit permanent redirect.
    return NextResponse.redirect(url, 308)
  }

  // Redirect /visa-for-{nationality}-citizens/{country} to /visa-for/{nationality}-citizens/{country}
  const path = req.nextUrl.pathname
  const visaForMatch = path.match(/^\/visa-for-([a-z]{2})-citizens\/([a-z-]+)$/)
  if (visaForMatch) {
    const nationality = visaForMatch[1]
    const country = visaForMatch[2]
    const url = req.nextUrl.clone()
    url.pathname = `/visa-for/${nationality}-citizens/${country}`
    return NextResponse.redirect(url, 308)
  }

  // Normalize /requirements-posts/:slug to lowercase to avoid 404s for capitalized slugs
  const reqPostsMatch = path.match(/^\/requirements-posts\/(.+)$/)
  if (reqPostsMatch) {
    const slug = reqPostsMatch[1]
    const normalized = slug.toLowerCase()
    if (slug !== normalized) {
      const url = req.nextUrl.clone()
      url.pathname = `/requirements-posts/${normalized}`
      return NextResponse.redirect(url, 308)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}
