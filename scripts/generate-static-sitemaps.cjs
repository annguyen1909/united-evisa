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
    if (slugMatch) {
      countries.push({ slug: slugMatch[1], name: nameMatch ? nameMatch[1] : slugMatch[1], raw: content })
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

function getVisaTypesFromCountryRaw(raw) {
  const matches = [...raw.matchAll(/type:\s*['"]([^'\"]+)['"]/gi)].map(m=>m[1])
  return Array.from(new Set(matches.map(t=>t.toLowerCase().replace(/evisa|visa/gi,'').replace(/[^a-z]/g,''))).values())
}

function writeXml(filePath, urls) {
  const now = new Date().toISOString()
  const header = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  const body = urls.map(u=>{
    return `  <url>\n    <loc>${u}</loc>\n    <lastmod>${now}</lastmod>\n  </url>`
  }).join('\n')
  const footer = '\n</urlset>\n'
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeFileSync(filePath, header + body + footer, 'utf8')
}

const base = 'https://worldmaxxing.com'
const countries = readCountries()
const nationalities = readNationalities()

// Build blog sitemap URLs similar to app/sitemap-blog.ts
const blogUrls = []
for (const c of countries) {
  blogUrls.push(`${base}/blog/${c.slug}-evisa-complete-guide`)
  const visaTypes = getVisaTypesFromCountryRaw(c.raw)
  visaTypes.forEach(t=>{
    if (t) blogUrls.push(`${base}/blog/${c.slug}-${t}-visa-guide`)
  })
  blogUrls.push(`${base}/blog/how-to-apply-${c.slug}-evisa-2024`)
  blogUrls.push(`${base}/blog/${c.slug}-visa-requirements-documents`)
}
// travel tips subset (first 20)
for (const c of countries.slice(0,20)) blogUrls.push(`${base}/blog/travel-tips-${c.slug}-first-time-visitors`)

// Build destinations sitemap URLs similar to app/sitemap-destinations.ts
const destUrls = []
for (const c of countries) {
  destUrls.push(`${base}/destination/${c.slug}`)
  const visaTypes = getVisaTypesFromCountryRaw(c.raw)
  visaTypes.forEach(t=>{
    if (t) destUrls.push(`${base}/destination/${c.slug}/${t}-visa`)
  })
  destUrls.push(`${base}/requirements-posts/${c.slug}`)
  destUrls.push(`${base}/processing-time/${c.slug}-evisa`)
}

// nationality-specific destination pages (popular subset)
const popularNationalities = ['us','gb','ca','au','de','fr','it','es','nl','se','no','dk','ch','at','be','ie','nz','jp','kr','sg','in','pk','bd','lk','th','my','id','ph','vn']
for (const nat of popularNationalities) {
  for (const c of countries.slice(0,25)) {
    destUrls.push(`${base}/visa-for-${nat}-citizens/${c.slug}`)
  }
}

// faq pages subset
const faqList = ['kenya','vietnam','india','egypt','ethiopia','united-kingdom','canada','australia','saudi-arabia','qatar','oman','kuwait','bahrain','cambodia','laos','thailand','malaysia','singapore','indonesia','south-africa']
for (const s of faqList) destUrls.push(`${base}/faq/${s}-evisa-faq`)

// write files to public
writeXml(path.join(process.cwd(), 'public', 'sitemap-blog.xml'), Array.from(new Set(blogUrls)))
writeXml(path.join(process.cwd(), 'public', 'sitemap-destinations.xml'), Array.from(new Set(destUrls)))

console.log('Static sitemaps generated: public/sitemap-blog.xml, public/sitemap-destinations.xml')
