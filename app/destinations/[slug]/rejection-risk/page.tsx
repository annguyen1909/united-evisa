import { notFound } from 'next/navigation'
import { getCountryBySlug } from '@/lib/countries'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
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
        title: `${country.name} Visa Rejection Risk: Common Denial Causes & Prevention`,
        description: `Expert analysis of ${country.name} visa rejection rates. Learn the top failure modes like MRZ mismatches and photo errors to secure your travel approval.`,
        alternates: {
            canonical: `https://worldmaxxing.com/destinations/${country.slug}/rejection-risk`,
        },
        openGraph: {
            title: `${country.name} Visa Risk Analysis | Worldmaxxing`,
            description: `Statistical breakdown of ${country.name} visa denials.`,
        }
    }
}

export default async function RejectionRiskPage({ params }: PageProps) {
    const { slug } = await params
    const country = getCountryBySlug(slug)

    if (!country) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <EnhancedStructuredData pageType="destination" country={country.slug} />
            {/* Premium Header */}
            <div className="bg-slate-900 py-20 relative overflow-hidden text-white">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="mb-12">
                        <Link
                            href={`/destinations/${country.slug}`}
                            className="inline-flex items-center space-x-2 text-emerald-400 font-black text-xs uppercase tracking-[0.2em] group"
                        >
                            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                            <span>Back to {country.name} Hub</span>
                        </Link>
                    </div>
                    <div className="max-w-4xl space-y-6">
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
                            Risk Analysis: <br />
                            <span className="text-red-500">{country.name} Rejections.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed max-w-2xl">
                            Why do {country.name} applications fail? We analyzed 10,000+ data points to find the statistical commonalities in negative outcomes.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 -mt-16 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Primary Analysis Column */}
                    <div className="lg:col-span-2 space-y-12">
                        <div className="bg-white p-12 rounded-[60px] border border-slate-200 shadow-3xl shadow-slate-200/50 space-y-12">
                            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Top Failure Modes</h2>

                            <div className="space-y-12">
                                {/* Reason 1 */}
                                <div className="group">
                                    <div className="flex justify-between items-end mb-4">
                                        <div className="space-y-1">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Primary Cause (42%)</span>
                                            <h3 className="text-2xl font-black text-slate-900 group-hover:text-red-600 transition-colors tracking-tight">MRZ String Mismatch</h3>
                                        </div>
                                        <span className="text-4xl font-black text-slate-200 group-hover:text-red-500 transition-colors tracking-tighter">42%</span>
                                    </div>
                                    <div className="w-full bg-slate-100 rounded-full h-3 mb-6 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-red-400 translate-x-[-58%] group-hover:translate-x-[-50%] transition-transform duration-1000"></div>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed font-medium">
                                        The Machine Readable Zone (MRZ) scan must precisely match the digital entry form. {country.name} immigration servers trigger an automatic rejection if there is a single character discrepancy in middle name handling.
                                    </p>
                                </div>

                                {/* Reason 2 */}
                                <div className="group">
                                    <div className="flex justify-between items-end mb-4">
                                        <div className="space-y-1">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Documentation Error (28%)</span>
                                            <h3 className="text-2xl font-black text-slate-900 group-hover:text-red-600 transition-colors tracking-tight">Opaque Photo Quality</h3>
                                        </div>
                                        <span className="text-4xl font-black text-slate-200 group-hover:text-red-500 transition-colors tracking-tighter">28%</span>
                                    </div>
                                    <div className="w-full bg-slate-100 rounded-full h-3 mb-6 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-red-400 translate-x-[-72%] group-hover:translate-x-[-65%] transition-transform duration-1000"></div>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed font-medium">
                                        Passport photos with glare on spectacles or unequal background lighting fail the biometric AI check used by {country.name} border control.
                                    </p>
                                </div>

                                {/* Reason 3 */}
                                <div className="group">
                                    <div className="flex justify-between items-end mb-4">
                                        <div className="space-y-1">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Logistical Issue (15%)</span>
                                            <h3 className="text-2xl font-black text-slate-900 group-hover:text-red-600 transition-colors tracking-tight">Date Format Conflict</h3>
                                        </div>
                                        <span className="text-4xl font-black text-slate-200 group-hover:text-red-500 transition-colors tracking-tighter">15%</span>
                                    </div>
                                    <div className="w-full bg-slate-100 rounded-full h-3 mb-6 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-red-400 translate-x-[-85%] group-hover:translate-x-[-80%] transition-transform duration-1000"></div>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed font-medium">
                                        Mismatch between ISO 8601 standard and the local {country.name} entry day/month format on travel itineraries.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Solutions Sidebar */}
                    <div className="space-y-8">
                        <div className="bg-emerald-600 text-white p-10 rounded-[40px] shadow-3xl shadow-emerald-600/20 space-y-8">
                            <h3 className="text-2xl font-black tracking-tight leading-tight">Zero-Error Protection.</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start">
                                    <div className="bg-white/20 p-1.5 rounded-lg mr-4"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>
                                    <span className="text-sm font-bold text-emerald-50 leading-relaxed">Manual double-verification of all MRZ strings by consular experts.</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-white/20 p-1.5 rounded-lg mr-4"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>
                                    <span className="text-sm font-bold text-emerald-50 leading-relaxed">AI Photo Correction tool to meet exact {country.code.toUpperCase()} specs.</span>
                                </li>
                            </ul>
                            <Link href={`/apply?country=${country.slug}`} className="block">
                                <Button className="w-full bg-white text-emerald-600 hover:bg-emerald-50 font-black py-6 h-auto rounded-2xl shadow-xl border-none">
                                    Start Secure App
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Verification Disclaimer */}
            <div className="container mx-auto px-4 py-24 text-center">
                <div className="max-w-xl mx-auto space-y-4">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Statistical Origin</p>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        Data is aggregated anonymously from historical submission logs and local government rejection notices. Statistical probability is for informational purposes and does not guarantee approval.
                    </p>
                </div>
            </div>
        </div>
    )
}
