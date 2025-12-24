const fs = require('fs')
const path = require('path')

function readCountries() {
  const dir = path.join(process.cwd(), 'lib', 'countries')
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'))
  const countries = []
  for (const file of files) {
    const content = fs.readFileSync(path.join(dir, file), 'utf8')
    const slugMatch = content.match(/slug:\s*['"]([a-z0-9-]+)['"]/i)
    const nameMatch = content.match(/name:\s*['"]([^'"]+)['"]/i)
    const codeMatch = content.match(/code:\s*['"]([a-zA-Z0-9]+)['"]/i)
    const visaTypesMatches = [...content.matchAll(/type:\s*['"]([^'"]+)['"]/gi)].map(m=>m[1])
    if (slugMatch) {
      countries.push({ slug: slugMatch[1], name: nameMatch ? nameMatch[1] : slugMatch[1], code: codeMatch ? codeMatch[1] : '', visaTypes: visaTypesMatches })
    }
  }
  return countries
}

function readNationalities() {
  const file = path.join(process.cwd(), 'lib', 'nationalities.ts')
  const content = fs.readFileSync(file, 'utf8')
  const matches = [...content.matchAll(/\{\s*name:\s*"([^"]+)",\s*code:\s*"([A-Z]{2})"\s*\}/g)]
  return matches.map(m=>({ name: m[1], code: m[2].toLowerCase() }))
}

function normalizeVisaTypeLabel(label) {
  return label.toLowerCase().replace(/evisa/g,'').replace(/visa/g,'').replace(/[^a-z]/g,'')
}

function fileExists(p) { return fs.existsSync(path.join(process.cwd(), p)) }

const countries = readCountries()
const nationalities = readNationalities()

const base = process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || 'https://worldmaxxing.com'
const report = []

// static pages from sitemap.ts (reduced)
const staticPages = ['','apply','check-requirements','pricing','destination','blog','faq','support','login','signup','profile','terms','privacy','legal','disclaimers','refund-policy','cookie-policy','digital-services-act']
staticPages.forEach(p => report.push({ url: `${base}/${p}`.replace(/\/$/,''), exists: true, reason: 'static' }))

// country requirement pages
for (const c of countries) {
  const url = `${base}/requirements-posts/${c.slug}`
  const exists = fileExists(`app/requirements-posts/${c.slug}/page.tsx`) || fileExists(`app/requirements-posts/${c.slug}/layout.tsx`) || fileExists(`content/requirements-posts/${c.slug}/index.md`)
  report.push({ url, exists, check: `app/requirements-posts/${c.slug}/page.tsx or layout.tsx or content/requirements-posts/${c.slug}/index.md` })
}

// destination pages
for (const c of countries) {
  const url = `${base}/destination/${c.slug}`
  // dynamic route exists if app/destination/[country]/page.tsx exists
  const exists = fileExists('app/destination/[country]/page.tsx') || fileExists(`app/destination/${c.slug}/page.tsx`)
  report.push({ url, exists, check: 'app/destination/[country]/page.tsx (dynamic) or per-country page' })
}

// blog pages
for (const c of countries) {
  const slug = `${c.slug}-evisa-complete-guide`
  const url = `${base}/blog/${slug}`
  const exists = fileExists(`content/blog/${slug}.md`) || fileExists(`content/blog/${slug}.mdx`)
  report.push({ url, exists, check: `content/blog/${slug}.md` })
}

// faq pages (subset used in sitemap.ts)
const faqList = ['armenia','egypt','ethiopia','india','kenya','malaysia','new-zealand','pakistan','qatar','south-africa','sri-lanka','united-kingdom','vietnam']
for (const s of faqList) {
  const url = `${base}/faq/${s}-evisa-faq`
  const dir = `content/faq/${s}-evisa-faq`
  const exists = fileExists(dir) && fs.readdirSync(path.join(process.cwd(),dir)).some(f=>f.endsWith('.md')||f.endsWith('.mdx'))
  report.push({ url, exists, check: dir })
}

// visa type pages: destination/<slug>/<type>-visa
for (const c of countries) {
  const types = Array.from(new Set((c.visaTypes||[]).map(normalizeVisaTypeLabel).filter(Boolean)))
  for (const t of types) {
    const url = `${base}/destination/${c.slug}/${t}-visa`
    // dynamic exists if app/destination/[country]/[visaType]/page.tsx (we rely on dynamic route)
    const exists = fileExists('app/destination/[country]/[visaType]/page.tsx') || fileExists('app/destination/[country]/[visaType].tsx') || fileExists('app/destination/[country]/[visaType]/index.tsx')
    report.push({ url, exists, check: 'dynamic destination visaType route' })
  }
}

// nationality pages (popular list from sitemap.ts)
const popularNatCodes = ['us','gb','ca','au','de','fr','it','es','nl','se','no','dk','ch','at','be','ie','nz','jp','kr','sg']
for (const nat of popularNatCodes) {
  for (const c of countries) {
    const url = `${base}/visa-for/${nat}-citizens/${c.slug}`
    const exists = fileExists('app/visa-for-[nationality]-citizens/page.tsx') || fileExists('app/visa-for-[nationality]-citizens/[country]/page.tsx')
    report.push({ url, exists, check: 'dynamic visa-for route' })
  }
}

// guide pages (first 30 countries)
for (const c of countries.slice(0,30)) {
  const url = `${base}/how-to-apply/${c.slug}-evisa-step-by-step`
  const exists = fileExists('app/how-to-apply/[slug]/page.tsx')
  report.push({ url, exists, check: 'dynamic how-to-apply route' })
}

// comparison pages
const comparison = ['/compare/kenya-vs-tanzania-evisa','/compare/vietnam-vs-cambodia-evisa','/compare/uae-gcc-countries-evisa','/compare/east-africa-evisa-options']
for (const p of comparison) report.push({ url: base + p, exists: fileExists('app/compare/[slug]/page.tsx'), check: 'compare dynamic route' })

// Now produce a missing-only report file
const missing = report.filter(r=>!r.exists)
const out = { total: report.length, missing: missing.length, missingItems: missing }
const outPath = path.join(process.cwd(), 'tmp_sitemap_parity.json')
fs.writeFileSync(outPath, JSON.stringify(out, null, 2), 'utf8')
console.log(`Scan complete. URLs checked: ${report.length}. Missing: ${missing.length}. Report: ${outPath}`)
