import { notFound } from 'next/navigation'
import { getCountryBySlug } from '@/lib/countries'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import RequirementsMatrix from '@/components/shared/RequirementsMatrix'
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
        title: `${country.name} Visa Entry Requirements: Official Nationality Matrix`,
        description: `Check ${country.name} visa eligibility and entry requirements for all nationalities. Interactive matrix with real-time status updates and max stay information.`,
        alternates: {
            canonical: `https://worldmaxxing.com/destinations/${country.slug}/entry-requirements`,
        },
        openGraph: {
            title: `${country.name} Visa Requirements | Worldmaxxing`,
            description: `Verify your ${country.name} visa eligibility instantly.`,
        }
    }
}

export default async function EntryRequirementsPage({ params }: PageProps) {
    const { slug } = await params
    const country = getCountryBySlug(slug)

    if (!country) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <EnhancedStructuredData pageType="destination" country={country.slug} />
            {/* Premium Header */}
            <div className="bg-slate-900 py-20 relative overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
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
                    <div className="max-w-4xl space-y-6 text-white">
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
                            {country.name} <br />
                            <span className="text-emerald-500">Eligibility Matrix.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed max-w-2xl">
                            Real-time verification of visa requirements based on your passport origin and the latest {country.name} immigration protocols.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 -mt-16 relative z-20">
                <RequirementsMatrix country={country} />

                {/* Information Gain Section */}
                <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-16 rounded-[60px] border border-slate-200 shadow-3xl shadow-slate-200/50">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-black text-slate-900 tracking-tight">How the Matrix Works</h2>
                        <p className="text-slate-600 leading-relaxed font-medium">
                            Our eligibility engine is cross-referenced with the <strong>ICAO Public Key Directory</strong> and direct feeds from {country.name}'s Ministry of Foreign Affairs.
                        </p>
                        <div className="space-y-4 pt-4">
                            <div className="flex items-start space-x-4">
                                <div className="bg-emerald-100 p-2 rounded-xl text-emerald-600">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <div className="text-sm">
                                    <span className="font-black text-slate-900 block">Biometric Passport Support</span>
                                    <span className="text-slate-500 font-bold">Automatic validation for e-passports.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-900 p-10 rounded-[40px] text-white">
                        <h3 className="text-xl font-black mb-4">Visa Exemptions</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Some nationalities are exempt for short stays (under 15-30 days). If your nationality is marked "Regulated Entry", you may still qualify for a traditional embassy visa. Contact our logistics desk for full entity review.
                        </p>
                        <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700 font-black py-6 h-auto rounded-2xl">
                            <Link href="/support">Request Expert Consultation</Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Premium Footer Disclaimer */}
            <div className="container mx-auto px-4 py-12 text-center text-slate-400 text-xs font-bold uppercase tracking-widest border-t border-slate-200 mt-24">
                © {new Date().getFullYear()} Worldmaxxing Global Services • Policy Feed v4.2.1
            </div>
        </div>
    )
}
