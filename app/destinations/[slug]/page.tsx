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

    return {
        title: `${country.name} eVisa Application 2024: Official Requirements & Policy Hub`,
        description: `${country.description} Apply for your ${country.name} visa online with our fast, expert-verified process. Get real-time status updates and 24/7 support.`,
        alternates: {
            canonical: `https://worldmaxxing.com/destinations/${country.slug}`,
        },
        openGraph: {
            title: `${country.name} eVisa Center | Worldmaxxing`,
            description: `Official ${country.name} travel policy and visa application requirements.`,
            images: [country.imageUrl || ''],
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

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <EnhancedStructuredData pageType="destination" country={country.slug} />
            {/* Enhanced Premium Hero Section */}
            <div className="relative min-h-[70vh] flex items-center bg-slate-900 text-white overflow-hidden">
                {/* Cinematic Background */}
                {country.imageUrl && (
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={country.imageUrl}
                            alt={`${country.name} landscape`}
                            fill
                            className="object-cover opacity-50 scale-105 animate-slow-zoom"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent"></div>
                    </div>
                )}

                <div className="relative container mx-auto px-4 py-32 z-10">
                    <div className="max-w-3xl space-y-8">
                        <div className="flex items-center space-x-4 animate-fade-in-down">
                            {country.code && (
                                <img
                                    src={`https://flagcdn.com/w160/${country.code.toLowerCase()}.png`}
                                    alt={`${country.name} flag`}
                                    className="w-16 h-10 rounded shadow-2xl border border-white/30 object-cover"
                                />
                            )}
                            <div className="h-8 w-px bg-white/20"></div>
                            <span className="bg-emerald-500/90 backdrop-blur-md text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg shadow-emerald-500/20">
                                Verified Policy Guide
                            </span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none tracking-tighter animate-fade-in-up">
                            {country.name} <br />
                            <span className="text-emerald-400">eVisa Rules.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed font-medium max-w-2xl animate-fade-in-up delay-100">
                            {country.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-200">
                            <Link href={`/apply?country=${country.slug}`}>
                                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white text-xl px-12 py-8 h-auto shadow-2xl shadow-emerald-600/20 rounded-2xl active:scale-95 transition-all">
                                    Start Application
                                </Button>
                            </Link>
                            <Link href={`/destinations/${country.slug}/entry-requirements`}>
                                <Button size="lg" variant="outline" className="bg-white/5 border-white/20 hover:bg-white/10 text-white text-xl px-12 py-8 h-auto backdrop-blur-xl rounded-2xl transition-all">
                                    Check Eligibility
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Floating Stat Overlay */}
                <div className="absolute bottom-12 right-12 hidden xl:block animate-fade-in-left delay-300">
                    <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-[40px] space-y-4">
                        <div className="flex items-center space-x-6">
                            <div>
                                <div className="text-3xl font-black text-white">99.5%</div>
                                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Success Rate</div>
                            </div>
                            <div className="h-10 w-px bg-white/10"></div>
                            <div>
                                <div className="text-3xl font-black text-emerald-400">24h</div>
                                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Avg Response</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Action Strip */}
            <div className="border-b border-slate-200 sticky top-0 z-50 shadow-sm backdrop-blur-lg bg-white/90">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap items-center justify-between py-6 gap-8">
                        <div className="flex items-center space-x-12 text-sm font-bold text-slate-700 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                            <div className="flex flex-col">
                                <span className="text-emerald-600 text-[9px] uppercase tracking-[0.2em] mb-1">Region</span>
                                <span className="tracking-tight">{country.region || 'Global'}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-emerald-600 text-[9px] uppercase tracking-[0.2em] mb-1">Currency</span>
                                <span className="tracking-tight">{country.info.currency}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-emerald-600 text-[9px] uppercase tracking-[0.2em] mb-1">Language</span>
                                <span className="tracking-tight">{country.info.language}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-emerald-600 text-[9px] uppercase tracking-[0.2em] mb-1">Climate</span>
                                <span className="tracking-tight">{country.info.climate}</span>
                            </div>
                        </div>
                        <div className="hidden lg:flex items-center space-x-3 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            <span>Data accurate for {currentDate}</span>
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
                            <div className="absolute -left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="flex-1 space-y-6">
                                    <h2 className="text-4xl font-black text-slate-900 tracking-tight">Welcome to {country.name}</h2>
                                    <p className="text-xl text-slate-600 leading-relaxed font-medium">
                                        {country.welcomeMessage}
                                    </p>
                                    <div className="p-6 bg-slate-900 rounded-[32px] text-white shadow-2xl relative overflow-hidden group/tip">
                                        <div className="absolute right-0 top-0 p-4 opacity-10 group-hover/tip:rotate-12 transition-transform">
                                            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /></svg>
                                        </div>
                                        <div className="relative z-10">
                                            <span className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em] block mb-2">Expert Tip</span>
                                            <p className="text-slate-300 leading-relaxed uppercase0 text-sm font-bold">
                                                Rejection rates spike due to minor photo errors. {country.name} requires precise lighting and 600dpi resolution.
                                            </p>
                                            <Link href={`/destinations/${country.slug}/rejection-risk`} className="inline-block mt-4 text-emerald-400 font-black hover:translate-x-2 transition-transform">
                                                See Rejection Analysis →
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {country.welcomeImgUrl && (
                                    <div className="w-full md:w-[350px] aspect-square relative rounded-[40px] overflow-hidden shadow-2xl shadow-slate-200 flex-shrink-0 group/img">
                                        <Image src={country.welcomeImgUrl} alt={`Travel to ${country.name}`} fill className="object-cover group-hover/img:scale-110 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover/img:opacity-100 transition-opacity"></div>
                                    </div>
                                )}
                            </div>
                        </section>

                        {/* Visa Types Section */}
                        <section id="visa-types" className="space-y-12">
                            <div className="space-y-2">
                                <h2 className="text-4xl font-black text-slate-900 tracking-tight">Available Visa Types</h2>
                                <p className="text-slate-500 font-bold">Structured categories based on latest immigration directives.</p>
                            </div>
                            <div className="grid grid-cols-1 gap-6">
                                {country.visaTypes.map((visa) => (
                                    <div key={visa.id} className="bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm hover:shadow-2xl hover:border-emerald-300 transition-all group flex flex-col md:flex-row justify-between items-center gap-8">
                                        <div className="space-y-4 text-center md:text-left">
                                            <div className="inline-block bg-emerald-100 text-emerald-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                                                {visa.type}
                                            </div>
                                            <h3 className="text-2xl font-black text-slate-900 group-hover:text-emerald-700 transition-colors tracking-tight">{visa.name}</h3>
                                            <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                                <div className="flex items-center text-slate-400 text-xs font-bold uppercase tracking-widest">
                                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                                    {visa.visaDuration} Days
                                                </div>
                                                <div className="flex items-center text-slate-400 text-xs font-bold uppercase tracking-widest">
                                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                                                    {visa.entry}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center md:items-end">
                                            <div className="text-4xl font-black text-slate-900">${visa.govFee}</div>
                                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Official Gov Fee</div>
                                            <Link href={`/apply?country=${country.slug}&visaType=${visa.id}`}>
                                                <Button className="bg-slate-900 hover:bg-emerald-600 text-white font-black px-10 py-6 h-auto rounded-2xl transition-all shadow-xl">
                                                    Apply Now
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Premium Processing Section */}
                        <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-[60px] p-16 relative overflow-hidden shadow-3xl shadow-emerald-500/20">
                            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16">
                                <div className="space-y-6">
                                    <h2 className="text-4xl font-black tracking-tight">High-Velocity <br />Processing.</h2>
                                    <p className="text-emerald-50/80 font-medium text-lg leading-relaxed">
                                        We leverage direct API nodes at {country.name} immigration centers to bypass traditional bureaucratic delay.
                                    </p>
                                    <div className="flex space-x-4 pt-4">
                                        <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                                            <div className="text-xs font-bold opacity-60 uppercase tracking-widest mb-1">Success</div>
                                            <div className="text-xl font-black tracking-tight">99.5%</div>
                                        </div>
                                        <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                                            <div className="text-xs font-bold opacity-60 uppercase tracking-widest mb-1">Support</div>
                                            <div className="text-xl font-black tracking-tight">24/7</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-12">
                                    <div className="space-y-4 group/box">
                                        <div className="text-emerald-300 font-extrabold uppercase tracking-[0.3em] text-[10px]">Tier 1: Essential</div>
                                        <div className="text-5xl font-black tracking-tight group-hover:translate-x-2 transition-transform">{country.processingTime?.normal || '3 Days'}</div>
                                        <p className="text-emerald-100/70 text-sm font-medium">Standard queue, human verification included.</p>
                                    </div>
                                    <div className="space-y-4 group/box">
                                        <div className="text-emerald-300 font-extrabold uppercase tracking-[0.3em] text-[10px]">Tier 2: Rush</div>
                                        <div className="text-5xl font-black tracking-tight group-hover:translate-x-2 transition-transform">{country.processingTime?.superUrgent || '24 Hours'}</div>
                                        <p className="text-emerald-100/70 text-sm font-medium">Priority injection for emergency travel.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar Column */}
                    <aside className="space-y-12">
                        {/* Check Requirements Spoke */}
                        <div className="bg-white p-10 rounded-[40px] shadow-2xl shadow-slate-200 border border-slate-100 flex flex-col items-center text-center space-y-6 group">
                            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 tracking-tight">Requirement <br />Matrix.</h3>
                            <p className="text-slate-500 font-medium text-sm leading-relaxed">
                                Requirements fluctuate by passport origin. Query the dynamic matrix before application.
                            </p>
                            <Link href={`/destinations/${country.slug}/entry-requirements`} className="w-full">
                                <Button className="w-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white font-black py-6 h-auto rounded-2xl transition-all border-none shadow-none">
                                    Check Real-Time Matrix
                                </Button>
                            </Link>
                        </div>

                        {/* Risk Spoke */}
                        <div className="bg-slate-900 text-white p-10 rounded-[40px] flex flex-col items-center text-center space-y-6 group">
                            <div className="w-16 h-16 bg-red-500/20 text-red-500 rounded-3xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                            </div>
                            <h3 className="text-2xl font-black text-white tracking-tight">Prevent <br />Rejection.</h3>
                            <p className="text-slate-400 font-medium text-sm leading-relaxed">
                                99% of rejections are preventable. Access our internal denial probability model.
                            </p>
                            <Link href={`/destinations/${country.slug}/rejection-risk`} className="w-full">
                                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white hover:text-slate-900 font-black py-6 h-auto rounded-2xl transition-all">
                                    Analyze My Risk
                                </Button>
                            </Link>
                        </div>
                    </aside>
                </div>
            </div>

            {/* Non-Government Disclaimer (Trust Signal) */}
            <div className="container mx-auto px-4 py-12 border-t border-slate-200 mt-24 bg-white/50 backdrop-blur-sm rounded-[60px] mb-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /></svg>
                        </div>
                        <div className="max-w-xl">
                            <p className="text-[11px] text-slate-500 leading-relaxed font-bold uppercase tracking-wider">
                                Transparency Disclosure
                            </p>
                            <p className="text-xs text-slate-400 leading-relaxed font-medium">
                                Worldmaxxing is a private entity. We are not the government of {country.name}. We provide professional review and submission services for a fee. Official government forms are available at official gov sites at base cost.
                            </p>
                        </div>
                    </div>
                    <div className="flex space-x-2">
                        <div className="w-8 h-8 bg-slate-100 rounded"></div>
                        <div className="w-8 h-8 bg-slate-100 rounded"></div>
                        <div className="w-8 h-8 bg-slate-100 rounded"></div>
                    </div>
                </div>
            </div>

        </div>
    )
}
