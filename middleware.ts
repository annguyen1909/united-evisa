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

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}
