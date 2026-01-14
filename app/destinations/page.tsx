import { Metadata } from 'next'
import { COUNTRIES } from '@/lib/countries'
import Image from 'next/image'
import DestinationsClientPremium from '@/components/shared/DestinationsClientPremium'

export const metadata: Metadata = {
    title: 'Destinations | eVisa Requirements by Country | Worldmaxxing',
    description: 'Browse eVisa destinations and view entry requirements, eligibility, and processing information for travelers worldwide.',
    alternates: {
        canonical: 'https://worldmaxxing.com/destinations',
    },
}

export default function DestinationsPage() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            {/* Premium Hero Section */}
            <div className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-white overflow-hidden bg-emerald-950">
                {/* Background Image Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/global_travel_hero_bg.jpg"
                        alt="World Travel background"
                        fill
                        className="object-cover opacity-40 scale-105 animate-slow-zoom"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-emerald-950/40 to-slate-50"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center space-y-8 pb-16">
                    <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm font-semibold tracking-wide animate-fade-in-down">
                        <span className="flex h-2 w-2 rounded-full bg-emerald-400"></span>
                        <span>Trusted by 500,000+ Travelers Worldwide</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] animate-fade-in-up">
                        Global Travel <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Simplified.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100 font-medium">
                        Unlock 45+ destinations with our expert-verified eVisa application system.
                        Fast, secure, and fully compliant with international travel regulations.
                    </p>
                </div>
            </div>

            {/* Functional Client Component for Search and Grid */}
            <DestinationsClientPremium initialCountries={COUNTRIES} />

            {/* Modern Trust Banner */}
            <div className="bg-slate-900 text-white py-24 border-t border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
                        <div className="space-y-4">
                            <div className="text-5xl font-black text-emerald-400 tracking-tighter">5,000+</div>
                            <div className="text-lg font-bold text-slate-200 uppercase tracking-widest">Reviews Analyzed</div>
                            <p className="text-slate-400 text-sm font-medium">Every application is cross-referenced with local immigration laws.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-5xl font-black text-emerald-400 tracking-tighter">24/7</div>
                            <div className="text-lg font-bold text-slate-200 uppercase tracking-widest">Expert Support</div>
                            <p className="text-slate-400 text-sm font-medium">Real human specialists standing by for emergency consultations.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-5xl font-black text-emerald-400 tracking-tighter">Instant</div>
                            <div className="text-lg font-bold text-slate-200 uppercase tracking-widest">Logic Modeling</div>
                            <p className="text-slate-400 text-sm font-medium">Dynamic eligibility tools trained on 100+ nationality variants.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
