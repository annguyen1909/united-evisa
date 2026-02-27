import { notFound } from 'next/navigation'
import { getCountryBySlug } from '@/lib/countries'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Metadata } from 'next'
import EnhancedStructuredData from '@/app/components/EnhancedStructuredData'

interface PageProps {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    const country = getCountryBySlug(slug)

    if (!country) return { title: 'Destination Not Found' }

    const year = new Date().getFullYear()

    return {
        title: `${country.name} eVisa Application ${year}: Official Requirements & Policy Hub`,
        description: `${country.description} Apply for your ${country.name} visa online with our fast, expert-verified process. Get real-time status updates and 24/7 support.`,
        alternates: {
            canonical: `https://unitedevisa.com/destinations/${country.slug}`,
        },
        openGraph: {
            title: `${country.name} eVisa Center | United eVisa`,
            description: `Official ${country.name} travel policy and visa application requirements.`,
            url: `https://unitedevisa.com/destinations/${country.slug}`,
            images: country.imageUrl ? [country.imageUrl] : ['/images/hero/hero.webp'],
        }
    }
}

export default async function DestinationHubPage({ params }: PageProps) {
    const { slug } = await params
    const country = getCountryBySlug(slug)

    if (!country) {
        notFound()
    }

    const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    const quickFacts = [
        { label: 'Capital', value: (country.info as any)?.capital },
        { label: 'Region', value: country.region },
        { label: 'Language', value: country.info?.language },
        { label: 'Currency', value: country.info?.currency },
        { label: 'Climate', value: country.info?.climate },
    ].filter((fact) => Boolean(fact.value))

    const visaHighlights = (country.visaTypes || []).slice(0, 3).map((visa) => ({
        name: visa.name,
        duration: visa.visaDuration ? `${visa.visaDuration} days` : null,
        entry: visa.entry || null,
        processing: visa.processingTimes?.normal || null,
        validity: visa.visaValidity || null,
    }))
    const hasVisaHighlights = visaHighlights.length > 0
    const fees = (country.visaTypes || []).map((visa) => visa.govFee).filter((fee) => Number.isFinite(fee))
    const minFee = fees.length ? Math.min(...fees) : null
    const maxFee = fees.length ? Math.max(...fees) : null
    const entryTypes = Array.from(
        new Set((country.visaTypes || []).map((visa) => visa.entry).filter(Boolean))
    ) as string[]
    const allowedNationalityCount = Array.from(
        new Set((country.visaTypes || []).flatMap((visa) => visa.allowedNationalities || []))
    ).length
    const validitySamples = Array.from(
        new Set((country.visaTypes || []).map((visa) => visa.visaValidity).filter(Boolean))
    ) as string[]
    const stayDurations = (country.visaTypes || []).map((visa) => visa.visaDuration).filter(Boolean)
    const maxStay = stayDurations.length ? Math.max(...stayDurations) : null
    const sampleVisa = country.visaTypes?.[0]
    const destinationFaqs = [
        {
            question: `How long does it take to get a ${country.name} eVisa?`,
            answer: `Typical processing is ${country.processingTime?.normal || '2-5 business days'}, depending on the visa type and the authority workload.`,
        },
        {
            question: `What documents are usually required for ${country.name}?`,
            answer: `Most applicants need a valid passport, a recent photo, and supporting travel details. Requirements can vary by nationality, so check the eligibility page before you apply.`,
        },
        {
            question: `Which visa do travelers choose most often?`,
            answer: sampleVisa
                ? `${sampleVisa.name} is a common option. It offers ${sampleVisa.entry.toLowerCase()} entry with a stay of up to ${sampleVisa.visaDuration} days and validity of ${sampleVisa.visaValidity}.`
                : `The best visa depends on your stay length and entry needs.`
        },
    ]
    const ctaCopy = {
        title: `Ready to apply for your ${country.name} eVisa?`,
        subtitle: `Start your application today and get clear guidance from our team. We’ll keep you updated at every step.`,
    }

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <EnhancedStructuredData pageType="destination" country={country.slug} />
            {/* Hero Section */}
            <div className="relative min-h-[60vh] flex items-center bg-slate-900 text-white overflow-hidden">
                {/* Background */}
                {country.imageUrl && (
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={country.imageUrl}
                            alt={`${country.name} landscape`}
                            fill
                            className="object-cover opacity-40"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent"></div>
                    </div>
                )}

                <div className="relative container mx-auto px-4 py-32 z-10">
                    <div className="max-w-3xl space-y-8">
                        <div className="flex items-center space-x-4">
                            {country.code && (
                                <img
                                    src={`https://flagcdn.com/w160/${country.code.toLowerCase()}.png`}
                                    alt={`${country.name} flag`}
                                    className="w-14 h-9 rounded border border-white/30 object-cover"
                                />
                            )}
                            <div className="h-8 w-px bg-white/20"></div>
                            <span className="bg-white/10 text-white text-[11px] font-semibold px-3 py-1.5 rounded-full tracking-wide">
                                Updated guidance
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-semibold mb-6 leading-tight tracking-tight">
                            {country.name} eVisa guidance
                        </h1>

                        <p className="text-lg md:text-xl text-slate-200 mb-6 leading-relaxed font-medium max-w-2xl">
                            {country.description}
                        </p>
                        <p className="text-sm md:text-base text-slate-300/90 max-w-2xl leading-relaxed">
                            Official {country.name} eVisa requirements and policy hub for travelers.
                        </p>
                        <p className="text-sm md:text-base text-slate-300/90 max-w-2xl leading-relaxed">
                            Based in {(country.info as any)?.capital || 'the capital'}, {country.name} uses {country.info?.currency || 'its local currency'} and primarily communicates in {country.info?.language || 'the local language'}.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href={`/apply?country=${country.slug}`}>
                                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-base px-10 py-6 h-auto rounded-2xl transition-all">
                                    Start {country.name} eVisa application
                                </Button>
                            </Link>
                            <Link href={`/destinations/${country.slug}/entry-requirements`}>
                                <Button size="lg" variant="outline" className="bg-white/5 border-white/20 hover:bg-white/10 text-white hover:text-white/80 text-base px-10 py-6 h-auto rounded-2xl transition-all">
                                    Check {country.name} eVisa eligibility
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Info Strip */}
            <div className="border-b border-slate-200 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap items-center justify-between py-6 gap-8">
                        <div className="flex items-center space-x-12 text-sm font-semibold text-slate-700 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                            <div className="flex flex-col">
                                <span className="text-slate-400 text-[10px] uppercase tracking-[0.2em] mb-1">Region</span>
                                <span>{country.region || 'Global'}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-slate-400 text-[10px] uppercase tracking-[0.2em] mb-1">Currency</span>
                                <span>{country.info.currency}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-slate-400 text-[10px] uppercase tracking-[0.2em] mb-1">Language</span>
                                <span>{country.info.language}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-slate-400 text-[10px] uppercase tracking-[0.2em] mb-1">Climate</span>
                                <span>{country.info.climate}</span>
                            </div>
                        </div>
                        <div className="hidden lg:flex items-center space-x-3 text-[10px] text-slate-400 font-semibold uppercase tracking-widest">
                            <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                            <span>Updated {currentDate}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                    {/* Main Content Column */}
                    <div className="lg:col-span-2 space-y-24">

                        {/* Welcome Section */}
                        <section className="relative group">
                            <div className="absolute -left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="flex-1 space-y-6">
                                    <h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Welcome to {country.name}</h2>
                                    <p className="text-lg text-slate-600 leading-relaxed">
                                        {country.welcomeMessage}
                                    </p>
                                    <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-600">
                                        A quick review of your documents can reduce delays. Use the eligibility check to confirm requirements before applying.
                                        <Link href={`/destinations/${country.slug}/rejection-risk`} className="ml-2 text-blue-700 font-semibold hover:underline">
                                            See rejection insights
                                        </Link>
                                    </div>
                                </div>
                                {country.welcomeImgUrl && (
                                    <div className="w-full md:w-[320px] aspect-square relative rounded-3xl overflow-hidden shadow-lg shadow-slate-200 flex-shrink-0">
                                        <Image src={country.welcomeImgUrl} alt={`Travel to ${country.name}`} fill className="object-cover" />
                                    </div>
                                )}
                            </div>
                        </section>

                        {/* Quick Facts Section */}
                        {quickFacts.length > 0 && (
                            <section className="space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-semibold text-slate-900">Quick facts</h2>
                                    <p className="text-slate-600">
                                        A fast overview of {country.name} to make your trip planning easier.
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
                                    Compare {country.name} requirements with other destinations in our
                                    <Link href="/requirements-comparison" className="ml-1 text-blue-700 font-semibold hover:underline">
                                        eVisa requirements comparison
                                    </Link>
                                    .
                                </div>
                                <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-600">
                                    For document details and eligibility checks, visit the
                                    <Link href={`/requirements-posts/${country.slug}`} className="ml-1 text-blue-700 font-semibold hover:underline">
                                        {country.name} requirements page
                                    </Link>
                                    .
                                    <Link href="/requirements-posts/rss.xml" className="ml-2 text-blue-700 font-semibold hover:underline">
                                        RSS updates
                                    </Link>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {quickFacts.map((fact) => (
                                        <div
                                            key={fact.label}
                                            className="rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm"
                                        >
                                            <div className="text-xs uppercase tracking-widest text-slate-400">{fact.label}</div>
                                            <div className="text-lg font-semibold text-slate-900">{fact.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Visa Snapshot Section */}
                        {hasVisaHighlights && (
                            <section className="space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-semibold text-slate-900">Visa snapshot</h2>
                                    <p className="text-slate-600">
                                        Top visa options and timelines for {country.name} based on the latest published guidance.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    {visaHighlights.map((visa) => (
                                        <div
                                            key={visa.name}
                                            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                                        >
                                            <div className="text-lg font-semibold text-slate-900">{visa.name}</div>
                                            <div className="mt-2 flex flex-wrap gap-3 text-sm text-slate-600">
                                                {visa.duration && <span>Duration: {visa.duration}</span>}
                                                {visa.entry && <span>Entry: {visa.entry}</span>}
                                                {visa.processing && <span>Processing: {visa.processing}</span>}
                                                {visa.validity && <span>Validity: {visa.validity}</span>}
                                            </div>
                                            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                                                {visa.entry ? `${visa.entry} entry` : 'Entry'} visas are commonly issued for {visa.duration || 'short stays'} with
                                                {visa.validity ? ` a validity of ${visa.validity}` : ' standard validity'}.
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Visa Types Section */}
                        <section id="visa-types" className="space-y-12">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold text-slate-900">Available visa types</h2>
                                <p className="text-slate-600">
                                    Choose the visa that matches your stay length and entry needs.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
                                Looking for a quick comparison? See the
                                <Link href="/requirements-comparison" className="ml-1 text-blue-700 font-semibold hover:underline">
                                    eVisa requirements comparison
                                </Link>
                                .
                            </div>
                            <div className="grid grid-cols-1 gap-6">
                                {country.visaTypes.map((visa) => (
                                    <div key={visa.id} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-center gap-8">
                                        <div className="space-y-4 text-center md:text-left">
                                            <div className="inline-block bg-blue-100 text-blue-700 text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-widest">
                                                {visa.type}
                                            </div>
                                            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight">{visa.name}</h3>
                                            <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                                <div className="flex items-center text-slate-500 text-xs font-semibold uppercase tracking-widest">
                                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                                    {visa.visaDuration} Days
                                                </div>
                                                <div className="flex items-center text-slate-500 text-xs font-semibold uppercase tracking-widest">
                                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                                                    {visa.entry}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center md:items-end">
                                            <div className="text-3xl font-semibold text-slate-900">${visa.govFee}</div>
                                            <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-4">Official gov fee</div>
                                            <Link href={`/apply?country=${country.slug}&visaType=${visa.id}`}>
                                                <Button className="bg-slate-900 hover:bg-blue-600 text-white font-semibold px-8 py-5 h-auto rounded-2xl transition-all shadow-sm">
                                                    Apply for {country.name} eVisa
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Entry Requirements Section */}
                        <section className="rounded-3xl border border-slate-200 bg-white p-10">
                            <div className="space-y-3">
                                <h2 className="text-3xl font-semibold text-slate-900">Entry requirements</h2>
                                <p className="text-slate-600">
                                    Requirements vary by nationality. Use the eligibility checker for the most accurate list.
                                </p>
                            </div>
                            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
                                    Valid passport with remaining validity that meets {country.name} entry rules.
                                </div>
                                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
                                    A recent photo and supporting travel details (such as dates or itinerary).
                                </div>
                                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
                                    {allowedNationalityCount > 0
                                        ? `${allowedNationalityCount}+ nationalities are eligible for at least one visa type.`
                                        : 'Eligibility can depend on passport origin. Check the official matrix before applying.'}
                                </div>
                            </div>
                            {entryTypes.length > 0 && (
                                <div className="mt-6 text-sm text-slate-600">
                                    Common entry options: {entryTypes.join(', ')}.
                                </div>
                            )}
                            <div className="mt-6">
                                <Link href={`/destinations/${country.slug}/entry-requirements`} className="text-blue-700 font-semibold hover:underline">
                                    View eligibility requirements →
                                </Link>
                            </div>
                        </section>

                        {/* Validity & Stay Section */}
                        <section className="rounded-3xl border border-slate-200 bg-white p-10">
                            <div className="space-y-3">
                                <h2 className="text-3xl font-semibold text-slate-900">Validity and stay duration</h2>
                                <p className="text-slate-600">
                                    {validitySamples.length
                                        ? `Common validity windows include ${validitySamples.slice(0, 3).join(', ')}.`
                                        : `Validity depends on the visa type you choose.`}
                                </p>
                            </div>
                            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600">
                                {entryTypes.length > 0 && (
                                    <span className="rounded-full bg-slate-100 px-4 py-2">Entry types: {entryTypes.join(', ')}</span>
                                )}
                                {maxStay && (
                                    <span className="rounded-full bg-slate-100 px-4 py-2">Max stay up to {maxStay} days</span>
                                )}
                                {sampleVisa?.visaValidity && (
                                    <span className="rounded-full bg-slate-100 px-4 py-2">
                                        Example validity: {sampleVisa.visaValidity}
                                    </span>
                                )}
                            </div>
                        </section>

                        {/* Fees Section */}
                        <section className="rounded-3xl border border-slate-200 bg-white p-10">
                            <div className="space-y-3">
                                <h2 className="text-3xl font-semibold text-slate-900">Fees and payment</h2>
                                <p className="text-slate-600">
                                    {minFee !== null
                                        ? `Government fees typically range from $${minFee} to $${maxFee ?? minFee}, depending on visa type.`
                                        : `Fees depend on visa type and entry length.`}
                                </p>
                            </div>
                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
                                    Government fees are set by the destination and can change without notice.
                                </div>
                                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
                                    Service fees (if applicable) are shown during checkout before you submit.
                                </div>
                            </div>
                        </section>

                        {/* Processing Section */}
                        <section className="rounded-3xl border border-slate-200 bg-white p-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-3">
                                    <h2 className="text-3xl font-semibold text-slate-900">Processing timelines</h2>
                                    <p className="text-slate-600">
                                        Estimated timelines for {country.name} based on the latest guidance.
                                    </p>
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <div className="text-xs uppercase tracking-widest text-slate-400">Standard</div>
                                        <div className="text-3xl font-semibold text-slate-900">{country.processingTime?.normal || '3 days'}</div>
                                        <p className="text-sm text-slate-500">Typical review time for most applications.</p>
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase tracking-widest text-slate-400">Rush</div>
                                        <div className="text-3xl font-semibold text-slate-900">{country.processingTime?.superUrgent || '24 hours'}</div>
                                        <p className="text-sm text-slate-500">Expedited processing when available.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section className="space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold text-slate-900">Frequently asked questions</h2>
                                <p className="text-slate-600">
                                    Quick answers for common {country.name} eVisa questions.
                                </p>
                            </div>
                            <div className="space-y-4">
                                {destinationFaqs.map((faq) => (
                                    <div key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                        <div className="text-lg font-semibold text-slate-900">{faq.question}</div>
                                        <p className="mt-2 text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar Column */}
                    <aside className="space-y-12">
                        {/* Check Requirements Spoke */}
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 flex flex-col items-center text-center space-y-6">
                            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 tracking-tight">Eligibility checker</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                Requirements vary by passport. Check eligibility before you apply.
                            </p>
                            <Link href={`/destinations/${country.slug}/entry-requirements`} className="w-full">
                                <Button className="w-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-5 h-auto rounded-2xl transition-all border-none shadow-none">
                                    Check requirements
                                </Button>
                            </Link>
                        </div>

                        {/* Risk Spoke */}
                        <div className="bg-slate-900 text-white p-10 rounded-3xl flex flex-col items-center text-center space-y-6">
                            <div className="w-14 h-14 bg-red-500/20 text-red-500 rounded-2xl flex items-center justify-center">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white tracking-tight">Reduce errors</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Review the most common rejection reasons before submitting.
                            </p>
                            <Link href={`/destinations/${country.slug}/rejection-risk`} className="w-full">
                                <Button variant="outline" className="w-full border-white/20 text-slate-900 hover:bg-white hover:text-slate-900/80 font-semibold py-5 h-auto rounded-2xl transition-all">
                                    View risk tips
                                </Button>
                            </Link>
                        </div>
                        {/* Requirements comparison link */}
                        <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center space-y-4">
                            <h3 className="text-xl font-semibold text-slate-900">Compare requirements</h3>
                            <p className="text-sm text-slate-600">
                                See how {country.name} compares with Tanzania, Sri Lanka, India, Kenya, and Indonesia.
                            </p>
                            <Link href="/requirements-comparison" className="inline-block">
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-5 h-auto rounded-2xl">
                                    View comparison
                                </Button>
                            </Link>
                        </div>
                        {/* Country CTA */}
                        <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center space-y-4">
                            <h3 className="text-xl font-semibold text-slate-900">{ctaCopy.title}</h3>
                            <p className="text-sm text-slate-600">{ctaCopy.subtitle}</p>
                            <Link href={`/apply?country=${country.slug}`} className="inline-block">
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-5 h-auto rounded-2xl">
                                    Start my application
                                </Button>
                            </Link>
                        </div>
                    </aside>
                </div>
            </div>

            {/* Non-Government Disclaimer (Trust Signal) */}
            <div className="container mx-auto px-4 py-12 border-t border-slate-200 mt-24 bg-white rounded-3xl mb-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /></svg>
                        </div>
                        <div className="max-w-xl">
                            <p className="text-[11px] text-slate-500 leading-relaxed font-semibold uppercase tracking-wider">
                                Transparency Disclosure
                            </p>
                            <p className="text-xs text-slate-400 leading-relaxed">
                                United eVisa is a private entity. We are not the government of {country.name}. We provide professional review and submission services for a fee. Official government forms are available at official gov sites at base cost.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
