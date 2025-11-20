import { COUNTRIES } from "@/lib/countries";
import type { Metadata } from "next";
import Link from "next/link";
import SupportSidebar from "@/components/shared/SupportSidebar";
import {
  getAllowedVisaTypes,
  normalizeVisaTypeParam,
  normalizeVisaTypeLabel,
} from "@/lib/visa-types";

type Params = { country: string; visaType: string };

function humanizeVisaType(t: string): string {
  const map: Record<string, string> = {
    tourist: "Tourist Evisa",
    business: "Business Evisa",
    transit: "Transit Evisa",
    medical: "Medical Evisa",
    ayush: "Ayush Evisa",
    conference: "Conference Evisa",
    student: "Student Evisa",
  };
  return map[t] || t.charAt(0).toUpperCase() + t.slice(1) + " Visa";
}

export async function generateStaticParams() {
  return COUNTRIES.flatMap((country) =>
    getAllowedVisaTypes(country.slug).map((type) => ({
      country: country.slug,
      visaType: `${type}-visa`,
    }))
  );
}

export async function generateMetadata(props: any): Promise<Metadata> {
  const params = (await props.params) as Params;
  const country = COUNTRIES.find((c) => c.slug === params.country);
  const baseType = normalizeVisaTypeParam(params.visaType);
  const allowed = country ? getAllowedVisaTypes(country.slug) : [];
  const visaType = allowed.includes(baseType) ? baseType : undefined;
  if (!country || !visaType) {
    return {
      title: "Visa Type Not Found",
      robots: { index: false, follow: false },
    };
  }
  const readableType = humanizeVisaType(visaType);
  const url = `https://worldmaxxing.com/destination/${country.slug}/${params.visaType}`;
  const title = `${country.name} ${readableType}: Requirements, Documents, Fees & Online Application`;
  const description = `Full guide to the ${readableType} for ${country.name}: eligibility, required documents, fees, processing times, validity rules, extensions, FAQs and secure online application.`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
  };
}

export default async function VisaTypePage(props: any) {
  const params = (await props.params) as Params;
  const country = COUNTRIES.find((c) => c.slug === params.country);
  const baseType = normalizeVisaTypeParam(params.visaType);
  const allowed = country ? getAllowedVisaTypes(country.slug) : [];
  const visaTypeKey = allowed.includes(baseType) ? baseType : undefined;

  if (!country || !visaTypeKey) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-2xl font-semibold mb-4">Visa type not found</h1>
        <p className="text-slate-600">
          This visa type page is not available. Please go back to the
          destination overview.
        </p>
      </main>
    );
  }

  const variants = country.visaTypes.filter(
    (v) => normalizeVisaTypeLabel(v.type) === visaTypeKey
  );
  if (variants.length === 0) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-2xl font-semibold mb-4">No variants available</h1>
        <p className="text-slate-600">
          We do not currently list {visaTypeKey} visa variants for{" "}
          {country.name}.
        </p>
      </main>
    );
  }

  const readableType = humanizeVisaType(visaTypeKey);
  const durations = [...new Set(variants.map((v) => v.visaDuration))].sort(
    (a, b) => a - b
  );
  const entries = [...new Set(variants.map((v) => v.entry).filter(Boolean))];
  const validities = [
    ...new Set(variants.map((v) => v.visaValidity).filter(Boolean)),
  ];
  const govFees = variants.map((v) => v.govFee);
  const minFee = Math.min(...govFees);
  const maxFee = Math.max(...govFees);
  const otherTypes = allowed.filter((t) => t !== visaTypeKey);

  const faq = [
    {
      q: `How long does a ${readableType.toLowerCase()} for ${country.name} take to process?`,
      a: country.processingTime?.normal
        ? `Standard processing is typically ${country.processingTime.normal}. Expedited options may be available depending on government system status.`
        : `Processing time varies by nationality and submission quality. Most applications finalize within several business days.`,
    },
    {
      q: `Can I extend my ${readableType.toLowerCase()} after arrival in ${country.name}?`,
      a: `Extensions depend on local immigration rules. Overstaying can result in fines or future entry restrictions. Apply only for the duration you need.`,
    },
    {
      q: `Do I need a flight ticket before applying for the ${readableType.toLowerCase()}?`,
      a:
        visaTypeKey === "transit"
          ? "Yes. A confirmed onward ticket is mandatory for transit visa assessment."
          : "A booked itinerary strengthens your application, though an issued ticket is not always mandatory prior to submission.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Destinations",
            item: "https://worldmaxxing.com/destination",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: country.name,
            item: `https://worldmaxxing.com/destination/${country.slug}`,
          },
          { "@type": "ListItem", position: 3, name: readableType },
        ],
      },
      {
        "@type": "ItemList",
        name: `${country.name} ${readableType} Variants`,
        itemListElement: variants.map((v, idx) => ({
          "@type": "Service",
          position: idx + 1,
          name: v.name,
          description:
            v.description ||
            `${v.entry} entry, ${v.visaDuration} days stay, validity ${v.visaValidity}`,
          areaServed: country.name,
          offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            price: v.govFee,
            availability: "https://schema.org/InStock",
          },
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <main className="mx-auto max-w-7xl px-6 py-10 grid lg:grid-cols-[minmax(0,1fr)_320px] gap-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="mb-6 text-sm flex flex-wrap gap-1 text-slate-600 lg:col-span-2"
      >
        <Link href="/destination" className="hover:text-emerald-700">
          Destinations
        </Link>
        <span>/</span>
        <Link
          href={`/destination/${country.slug}`}
          className="hover:text-emerald-700"
        >
          {country.name}
        </Link>
        <span>/</span>
        <span className="font-medium text-slate-800">{readableType}</span>
      </nav>
      <article className="space-y-12">
        <header className="rounded-2xl bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-400 text-white p-8 shadow-lg mb-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight flex flex-wrap items-center gap-2">
            <span>
              {country.name} {readableType}
            </span>
            <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-sm font-medium backdrop-blur">
              eVisa
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-emerald-50 text-base">
            Comprehensive guide for the {readableType.toLowerCase()} to{" "}
            {country.name}. Explore eligibility, document checklist, fee
            breakdown, processing speeds, validity rules and official best
            practices before you apply.
          </p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            <Metric label="Variants" value={variants.length.toString()} />
            <Metric label="Entries" value={entries.join(", ")} />
            <Metric label="Validity" value={validities.join(", ")} />
            <Metric
              label="Gov Fee"
              value={minFee === maxFee ? `$${minFee}` : `$${minFee}–$${maxFee}`}
            />
            {country.processingTime?.normal && (
              <Metric
                label="Processing"
                value={country.processingTime.normal}
              />
            )}
          </div>
        </header>

        {/* Inline Table of Contents (under hero) - not styled by prose */}
        <div className="not-prose mb-8">
          <nav aria-label="Section links" className="flex flex-wrap gap-3">
            {[
              "Overview",
              "Variants",
              "Eligibility",
              "Documents",
              "Application Steps",
              "Fees",
              "Validity & Extension",
              "FAQs",
              "Other Visa Types",
              "Support",
            ].map((anchor) => (
              <a
                key={anchor}
                href={`#${anchor.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                className="inline-flex items-center rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-700 hover:border-emerald-400 hover:text-emerald-700 transition"
              >
                {anchor}
              </a>
            ))}
          </nav>
        </div>

        <section id="overview" className="prose prose-slate max-w-none">
          <h2>{readableType} Overview</h2>
          <p>
            The {readableType.toLowerCase()} enables foreign nationals to enter{" "}
            {country.name} for{" "}
            {visaTypeKey === "business"
              ? "commercial meetings, negotiations, and short-term market visits"
              : visaTypeKey === "tourist"
                ? "leisure travel, cultural exploration and short visits"
                : visaTypeKey === "medical"
                  ? "approved treatment at recognized facilities"
                  : visaTypeKey === "transit"
                    ? "brief stays while en‑route to a third destination"
                    : "approved purposes"}
            . Approved eVisas are digitally issued—no physical sticker required.
            Ensure all submitted data exactly matches your passport bio page.
          </p>
          <p>
            Below you will find each available variant, required documents,
            eligibility notes, official fee ranges, typical processing speeds
            and extension considerations. This guide is periodically refreshed
            when government sources update criteria.
          </p>
        </section>

        <section
          id="variants"
          aria-labelledby="variants-heading"
          className="mb-4"
        >
          <div className="flex items-center justify-between mb-6">
            <h2
              id="variants-heading"
              className="text-2xl font-semibold tracking-tight"
            >
              Available {readableType} Variants
            </h2>
            <Link
              href={`/destination/${country.slug}`}
              className="text-sm font-medium text-emerald-700 hover:text-emerald-800"
            >
              Back to {country.name} overview →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {variants.map((v) => (
              <article
                key={v.id}
                className="group rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition overflow-hidden"
              >
                <div className="p-5 flex flex-col h-full">
                  <h3 className="font-semibold text-slate-800 group-hover:text-emerald-700 transition text-lg">
                    {v.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600 flex-1">
                    {v.description || v.entry}
                  </p>
                  <dl className="mt-4 space-y-1 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-slate-500">Entry</dt>
                      <dd className="font-medium">{v.entry || "—"}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-slate-500">Validity</dt>
                      <dd className="font-medium">{v.visaValidity}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-slate-500">Gov Fee</dt>
                      <dd className="font-medium">${v.govFee}</dd>
                    </div>
                  </dl>
                  <div className="mt-5">
                    <form
                      action={`/apply?country=${country.slug}&type=${encodeURIComponent(v.id)}`}
                      method="get"
                      className="w-full"
                    >
                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500"
                      >
                        Apply Now
                      </button>
                    </form>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="eligibility" className="prose prose-slate max-w-none">
          <h2>Eligibility Criteria</h2>
          <ul>
            <li>Passport valid at least 6 months beyond intended arrival.</li>
            <li>
              No unresolved immigration violations or prior overstays in{" "}
              {country.name}.
            </li>
            <li>
              {visaTypeKey === "business"
                ? "Purpose strictly limited to meetings, conferences, exploratory visits—no local employment."
                : visaTypeKey === "medical"
                  ? "Confirmed appointment or treatment plan at a recognized facility."
                  : visaTypeKey === "transit"
                    ? "Confirmed onward ticket within permitted layover window."
                    : "Purpose consistent with declared tourism intent—no unauthorized work."}
            </li>
            <li>Sufficient financial means to cover stay and onward travel.</li>
            <li>
              Photograph and document scans meet clarity & formatting
              guidelines.
            </li>
          </ul>
          <p className="text-xs text-slate-500">
            Edge cases (dual nationality, emergency travel) may require manual
            review.
          </p>
        </section>

        <section id="documents" className="prose prose-slate max-w-none">
          <h2>Required Documents</h2>
          <div className="grid md:grid-cols-2 gap-8 not-prose">
            <div>
              <h3 className="font-medium text-slate-800 mb-2 text-base">
                Universal
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>Passport bio page scan (colour, high resolution)</li>
                <li>Recent compliant passport-style photograph</li>
                <li>Travel itinerary (flight reservation / route outline)</li>
                <li>Accommodation proof (hotel booking or host invitation)</li>
                <li>
                  Financial support evidence (bank statement or employer letter)
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-slate-800 mb-2 text-base">
                Variant-Specific
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                {visaTypeKey === "business" && (
                  <li>Corporate invitation letter on company letterhead.</li>
                )}
                {visaTypeKey === "medical" && (
                  <li>
                    Hospital acceptance / scheduled treatment confirmation.
                  </li>
                )}
                {visaTypeKey === "transit" && (
                  <li>
                    Confirmed onward ticket & final destination visa (if
                    required).
                  </li>
                )}
                {visaTypeKey === "conference" && (
                  <li>Event registration or organizer invitation.</li>
                )}
                {visaTypeKey === "student" && (
                  <li>Enrollment letter & tuition receipt (if applicable).</li>
                )}
                {visaTypeKey === "ayush" && (
                  <li>Approved wellness / traditional treatment booking.</li>
                )}
                {![
                  "business",
                  "medical",
                  "transit",
                  "conference",
                  "student",
                  "ayush",
                ].includes(visaTypeKey) && (
                  <li>
                    Supporting documents consistent with stated visit purpose.
                  </li>
                )}
              </ul>
            </div>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Originals may be requested in rare post‑submission audits.
            Incomplete scans lead to rejection.
          </p>
        </section>

        <section
          id="application-steps"
          className="prose prose-slate max-w-none"
        >
          <h2>Application Steps</h2>
          <ol>
            <li>Choose a variant matching your travel profile.</li>
            <li>Complete the secure online form exactly as in passport.</li>
            <li>
              Upload required supporting documents (PDF/JPEG as specified).
            </li>
            <li>Settle government fee & service handling.</li>
            <li>Await processing—track status updates in your dashboard.</li>
            <li>
              Receive approved eVisa electronically and print a copy for travel.
            </li>
          </ol>
          <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 not-prose">
            <strong className="font-medium">Tip:</strong> Avoid last‑minute
            filings—submit at least 7–10 days before intended arrival to
            mitigate unforeseen system delays.
          </div>
        </section>

        <section id="fees" className="prose prose-slate max-w-none">
          <h2>Fee Breakdown</h2>
          <p>
            Government fees differ per variant and sometimes nationality. Below
            are base government fees. Service and optional fast‑track fees are
            calculated during the application flow.
          </p>
          <div className="overflow-hidden rounded-xl border border-slate-200">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th className="text-left font-semibold px-4 py-2">Variant</th>
                  <th className="text-left font-semibold px-4 py-2">Entry</th>
                  <th className="text-left font-semibold px-4 py-2">
                    Validity
                  </th>
                  <th className="text-left font-semibold px-4 py-2">
                    Gov Fee (USD)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {variants.map((v) => (
                  <tr key={v.id} className="hover:bg-slate-50">
                    <td className="px-4 py-2 font-medium text-slate-800">
                      {v.name}
                    </td>
                    <td className="px-4 py-2 text-slate-600">{v.entry}</td>
                    <td className="px-4 py-2 text-slate-600">
                      {v.visaValidity}
                    </td>
                    <td className="px-4 py-2 text-slate-800">${v.govFee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Fees subject to change without prior notice. Discrepancies are
            reconciled automatically during submission.
          </p>
        </section>

        <section
          id="validity-&-extension"
          className="prose prose-slate max-w-none"
        >
          <h2>Validity & Extension Rules</h2>
          <p>
            Each variant lists a validity period indicating how long you can use
            the eVisa to enter {country.name}. The stay duration (days permitted
            in‑country) may differ from total validity. Overstaying beyond
            permitted duration can trigger fines, future entry restrictions or
            mandatory exit orders. Extension possibilities depend on local
            immigration channels; plan adequate duration from the outset.
          </p>
          <ul>
            <li>Enter before expiry date printed on the approval notice.</li>
            <li>Single‑entry variants become void once you depart.</li>
            <li>
              Multiple‑entry variants allow repeated entries within validity
              window.
            </li>
            <li>
              Apply for a new eVisa rather than overstaying current permission.
            </li>
          </ul>
        </section>

        <section id="faqs" className="prose prose-slate max-w-none">
          <h2>Frequently Asked Questions</h2>
          <div className="space-y-6 not-prose">
            {faq.map((item) => (
              <div
                key={item.q}
                className="rounded-lg border border-slate-200 p-4 bg-white"
              >
                <h3 className="font-medium text-slate-800 mb-2 text-sm">
                  {item.q}
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {otherTypes.length > 0 && (
          <section
            id="other-visa-types"
            className="prose prose-slate max-w-none"
          >
            <h2>Other {country.name} Visa Types</h2>
            {otherTypes.map((t) => (
              <form
                key={t}
                action={`/destination/${country.slug}/${t}-visa`}
                method="get"
                className="inline-block"
              >
                <button
                  type="submit"
                  className="inline-flex items-center rounded-full border border-slate-200 px-3 py-1 text-sm font-medium text-slate-700 bg-white/0 hover:bg-emerald-50 hover:text-emerald-700 transition"
                >
                  {humanizeVisaType(t)}
                </button>
              </form>
            ))}
          </section>
        )}

        <section id="support" className="mb-16 prose prose-slate max-w-none">
          <div className="not-prose rounded-2xl border border-emerald-200 bg-emerald-50 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-xl font-semibold text-emerald-800 mb-2">
                Need personalized help?
              </h2>
              <p className="text-sm text-emerald-700 max-w-prose">
                Our visa specialists review documents, resolve edge cases, and
                guide complex itineraries. Get assistance before submitting to
                avoid costly delays.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <form
                action={`/apply?country=${country.slug}&type=${encodeURIComponent(variants[0].id)}`}
                method="get"
              >
                <button
                  type="submit"
                  className="inline-flex items-center rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-emerald-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-600"
                >
                  Start Application
                </button>
              </form>
              <form action="/support" method="get">
                <button
                  type="submit"
                  className="inline-flex items-center rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-emerald-700 border border-emerald-300 hover:bg-emerald-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-600"
                >
                  Contact Support
                </button>
              </form>
            </div>
          </div>
          <p className="mt-6 text-xs text-slate-500 max-w-prose">
            Disclaimer: Content provided here is for general guidance only and
            does not replace official government sources. Policies can change
            without notice; always verify critical details before irreversible
            bookings.
          </p>
        </section>
      </article>
      <aside className="hidden lg:flex flex-col gap-6 sticky top-24 h-max">
        <SupportSidebar />
      </aside>
    </main>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-white/10 backdrop-blur px-3 py-2">
      <div className="text-xs uppercase tracking-wide text-emerald-100 font-medium">
        {label}
      </div>
      <div
        className="mt-1 text-sm font-semibold text-white truncate"
        title={value}
      >
        {value}
      </div>
    </div>
  );
}
