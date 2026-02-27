import { Metadata } from 'next'
import Link from 'next/link'
import { COUNTRIES } from '@/lib/countries'
import EnhancedStructuredData from '@/app/components/EnhancedStructuredData'

const focusSlugs = ['tanzania', 'sri-lanka', 'india', 'kenya', 'indonesia']

const getFocusCountries = () =>
  COUNTRIES.filter((country) => focusSlugs.includes(country.slug))

export const metadata: Metadata = {
  title: 'eVisa Requirements Comparison – Tanzania, Sri Lanka, India, Kenya, Indonesia',
  description:
    'Compare eVisa requirements, processing times, and entry rules for Tanzania, Sri Lanka, India, Kenya, and Indonesia. Clear, neutral guidance for international travelers.',
  alternates: {
    canonical: 'https://unitedevisa.com/requirements-comparison',
  },
  openGraph: {
    title: 'eVisa Requirements Comparison – Tanzania, Sri Lanka, India, Kenya, Indonesia',
    description:
      'Side‑by‑side eVisa requirements comparison for five popular destinations. Check eligibility, documents, and processing timelines.',
    url: 'https://unitedevisa.com/requirements-comparison',
    images: [
      {
        url: '/images/hero/hero.webp',
        width: 1200,
        height: 630,
        alt: 'eVisa requirements comparison',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'eVisa Requirements Comparison – Tanzania, Sri Lanka, India, Kenya, Indonesia',
    description:
      'Compare eVisa requirements, processing times, and entry rules for Tanzania, Sri Lanka, India, Kenya, and Indonesia.',
    images: ['/images/hero/hero.webp'],
  },
}

export default function RequirementsComparisonPage() {
  const countries = getFocusCountries()
  const comparisonCountries = countries.map((c) => c.name)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/40 via-white to-white">
      <EnhancedStructuredData
        pageType="comparison"
        title={metadata.title as string}
        description={metadata.description as string}
        comparisonCountries={comparisonCountries}
      />

      <div className="border-b border-blue-100 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <p className="text-xs uppercase tracking-[0.2em] text-blue-400 mb-3">
            eVisa Requirements Comparison
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-4">
            Tanzania, Sri Lanka, India, Kenya &amp; Indonesia
          </h1>
          <p className="text-slate-600 text-lg max-w-3xl">
            This comparison summarizes common eVisa requirements, processing timelines, and entry rules.
            Requirements can change, and final decisions are made by immigration authorities.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
            <span className="rounded-full bg-blue-50 px-4 py-2">Passport validity</span>
            <span className="rounded-full bg-blue-50 px-4 py-2">Photo rules</span>
            <span className="rounded-full bg-blue-50 px-4 py-2">Processing time</span>
            <span className="rounded-full bg-blue-50 px-4 py-2">Entry type</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-10">
        <section className="rounded-3xl border border-blue-100 bg-white p-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Quick comparison table
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-slate-600">
                <tr className="border-b border-slate-200">
                  <th className="py-3 pr-4">Destination</th>
                  <th className="py-3 pr-4">Processing time</th>
                  <th className="py-3 pr-4">Entry types</th>
                  <th className="py-3 pr-4">Typical stay</th>
                  <th className="py-3">Requirements link</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                {countries.map((country) => {
                  const entryTypes = Array.from(
                    new Set(country.visaTypes.map((v) => v.entry).filter(Boolean))
                  )
                  const durations = country.visaTypes.map((v) => v.visaDuration).filter(Boolean)
                  const maxStay = durations.length ? Math.max(...durations) : null
                  return (
                    <tr key={country.slug} className="border-b border-slate-100">
                      <td className="py-3 pr-4 font-semibold">{country.name}</td>
                      <td className="py-3 pr-4">{country.processingTime?.normal || 'Varies'}</td>
                      <td className="py-3 pr-4">
                        {entryTypes.length ? entryTypes.join(', ') : 'Varies'}
                      </td>
                      <td className="py-3 pr-4">{maxStay ? `${maxStay} days` : 'Varies'}</td>
                      <td className="py-3">
                        <Link
                          className="text-blue-700 font-semibold hover:underline"
                          href={`/destinations/${country.slug}/entry-requirements`}
                        >
                          Check {country.name} requirements →
                        </Link>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {countries.map((country) => (
            <div key={country.slug} className="rounded-3xl border border-blue-100 bg-white p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {country.name} eVisa overview
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {country.description}
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>Typical processing: {country.processingTime?.normal || 'Varies'}</li>
                <li>Entry types: {country.visaTypes.length ? country.visaTypes[0].entry : 'Varies'}</li>
                <li>Common duration: {country.visaTypes.length ? `${country.visaTypes[0].visaDuration} days` : 'Varies'}</li>
              </ul>
              <div className="mt-4">
                <Link
                  className="text-blue-700 font-semibold hover:underline"
                  href={`/destinations/${country.slug}`}
                >
                  Visit {country.name} hub →
                </Link>
              </div>
            </div>
          ))}
        </section>

        <section className="rounded-3xl border border-blue-100 bg-white p-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">
            Common requirements across destinations
          </h2>
          <p className="text-slate-600 text-sm mb-4">
            These items are commonly required, but exact rules vary by nationality and visa type.
          </p>
          <ul className="list-disc pl-5 text-sm text-slate-600 space-y-2">
            <li>Valid passport with sufficient remaining validity</li>
            <li>Recent passport‑style photo</li>
            <li>Travel details such as intended dates or itinerary</li>
            <li>Supporting documents if requested by the authority</li>
          </ul>
          <p className="text-xs text-slate-500 mt-4">
            Requirements may change. Final decisions are made by immigration authorities.
          </p>
        </section>

        <section className="rounded-3xl border border-blue-100 bg-white p-8 text-center">
          <h2 className="text-2xl font-semibold text-slate-900 mb-2">
            Not sure which visa applies to your nationality?
          </h2>
          <p className="text-sm text-slate-600 mb-5">
            Use the eligibility checker to confirm the visa options for your passport.
          </p>
          <Link
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-amber-500 px-6 py-3 text-white font-semibold hover:from-blue-700 hover:to-amber-600"
            href="/check-requirements"
          >
            Check visa eligibility
          </Link>
        </section>
      </div>
    </div>
  )
}
