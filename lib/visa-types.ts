// Central mapping of allowed visa types per country slug.
// Extend or adjust as real product data evolves.
import { COUNTRIES } from './countries'

// Raw country visaTypes[].type values are varied ("Tourist Evisa", "Business Visa", etc.)
// Normalize by stripping "evisa", "visa", spaces and non-letters, then lowercasing.
export function normalizeVisaTypeLabel(label: string): string {
  return label
    .toLowerCase()
    .replace(/evisa/g, '')
    .replace(/visa/g, '')
    .replace(/[^a-z]/g, '')
}

// Derive allowed types directly from country data instead of a hard-coded map.
// Returns unique normalized types (e.g. tourist, business, transit, medical, ayush, conference, student).
export function getAllowedVisaTypes(countrySlug: string): ReadonlyArray<string> {
  const country = COUNTRIES.find(c => c.slug === countrySlug)
  if (!country || !Array.isArray(country.visaTypes)) return []
  const set = new Set<string>()
  country.visaTypes.forEach(v => {
    if (v.type) {
      const norm = normalizeVisaTypeLabel(v.type)
      if (norm) set.add(norm)
    }
  })
  return Array.from(set)
}

export function normalizeVisaTypeParam(raw: string): string {
  return raw.replace(/-visa$/i, '').replace(/-evisa$/i, '').toLowerCase()
}

export function isVisaTypeAllowed(countrySlug: string, rawParam: string): boolean {
  const base = normalizeVisaTypeParam(rawParam)
  return getAllowedVisaTypes(countrySlug).includes(base)
}