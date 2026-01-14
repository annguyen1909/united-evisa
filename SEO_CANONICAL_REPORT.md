# SEO Canonical / Indexing Coverage Report

Generated: 2026-01-14

## Summary (from code scan)

- Total pages (`app/**/page.*`): 79
- Pages with a canonical in the same file: 23
- Pages with `robots.index=false` in the same file: 3
- Client pages (`"use client"`): 55
- Likely indexable pages (excluding `/apply*`, `/list`, `/profile`, `/login`, `/signup`): 66
- Likely indexable pages missing canonical (in-page): 47

Important: many pages use a `layout.tsx` to provide metadata (canonical/robots). A follow-up scan that considers parent layouts shows:

- Public pages missing an effective canonical (page or any parent layout): **0**
- Private/transactional/auth pages missing an effective noindex (page or any parent layout): **0**

## Notes about your project

- `/check-requirements`, `/support`, `/pricing` are **client pages**, so canonical metadata must be provided by an enclosing `layout.tsx` (recommended), or via `generateMetadata` in a server component wrapper.
- Many `/requirements-posts/*` pages appear to be client pages. In your repo there are also per-country layouts under `app/requirements-posts/<country>/layout.tsx` that likely provide canonicals.

## Content freshness note

- A sweep removed hardcoded `2024` from common on-page headings in `app/requirements-posts/**/page.tsx` (e.g., “Application Guide 2024”, “Processing Time Trends (2024)”).
- Citation years like “Source: … (2024)” were intentionally left as-is.

## Likely-indexable pages flagged as missing canonical (in their page file)

- `/check-requirements` — app/check-requirements/page.tsx (client; canonical in layout)
- `/faq` — app/faq/page.tsx
- `/pricing` — app/pricing/page.tsx (client; canonical in layout)
- `/support` — app/support/page.tsx (client; canonical in layout)
- `/requirements-posts/<country>` — many country pages are client pages; canonicals are provided by per-country layouts.

## Private/transactional pages that should stay noindex

These should be blocked from indexing (robots meta and/or `X-Robots-Tag`):

- `/apply/(payment|confirmation|status|summary|chargeback|refunded|documents|passengers)`
- `/list`
- `/profile`

Enforced via a combination of metadata (layouts/pages), middleware `X-Robots-Tag`, and `public/robots.txt`.
