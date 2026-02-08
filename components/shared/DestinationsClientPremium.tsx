'use client'

import { useState, useMemo } from 'react'
import { Country } from '@/lib/countries/type'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface DestinationsClientPremiumProps {
    initialCountries: Country[]
}

export default function DestinationsClientPremium({ initialCountries }: DestinationsClientPremiumProps) {
    const [searchQuery, setSearchQuery] = useState('')

    const filteredCountries = useMemo(() => {
        if (!searchQuery) return initialCountries
        return initialCountries.filter(c =>
            c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (c.region && c.region.toLowerCase().includes(searchQuery.toLowerCase()))
        )
    }, [searchQuery, initialCountries])

    const regions = Array.from(new Set(filteredCountries.map(c => c.region || 'Global')))

    return (
        <div className="space-y-24">
            {/* Search Bar - Lifted from the page but made functional */}
            <div className="max-w-2xl mx-auto w-full group relative -mt-32 z-30">
                <div className="relative flex items-center bg-white rounded-2xl shadow-2xl p-2 border-2 border-transparent focus-within:border-blue-500 transition-all duration-300">
                    <div className="pl-4 text-slate-400 group-focus-within:text-blue-500">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Where are you traveling to?"
                        className="w-full bg-transparent border-none focus:ring-0 text-slate-800 py-3 px-4 text-lg font-medium placeholder:text-slate-400"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-8 py-6 h-auto transition-all shadow-lg active:scale-95">
                        Discover
                    </Button>
                </div>

                {searchQuery && (
                    <div className="absolute top-full left-0 right-0 mt-4 bg-white/10 backdrop-blur-md rounded-xl p-2 text-white text-xs font-bold uppercase tracking-widest text-center">
                        Found {filteredCountries.length} results for "{searchQuery}"
                    </div>
                )}
            </div>

            <div className="container mx-auto px-4 py-12">
                {regions.length > 0 ? (
                    regions.map(region => (
                        <section key={region} className="mb-24 animate-fade-in-up">
                            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                                <div className="space-y-2">
                                    <h2 className="text-4xl font-black text-slate-900 tracking-tight">{region}</h2>
                                    <p className="text-slate-500 font-medium tracking-tight">Explore the best destinations in {region}</p>
                                </div>
                                <div className="h-1 w-24 bg-blue-500 rounded-full"></div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                {filteredCountries.filter(c => (c.region || 'Global') === region).map(country => (
                                    <Link
                                        key={country.slug}
                                        href={`/destinations/${country.slug}`}
                                        className="group relative bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-3xl transition-all duration-500 hover:-translate-y-2"
                                    >
                                        <div className="relative h-64 overflow-hidden">
                                            {country.imageUrl ? (
                                                <Image
                                                    src={country.imageUrl}
                                                    alt={country.name}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                                />
                                            ) : (
                                                <div className="absolute inset-0 bg-slate-100 flex items-center justify-center text-slate-300">
                                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                                </div>
                                            )}
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent p-6 flex flex-col justify-end">
                                                <div className="flex items-center space-x-3 mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                                    <img
                                                        src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`}
                                                        alt=""
                                                        className="w-8 h-5 rounded shadow-lg object-cover border border-white/20"
                                                    />
                                                    <h3 className="text-white font-black text-xl tracking-tight leading-none">{country.name}</h3>
                                                </div>
                                                <div className="text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                                    View Requirements →
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    ))
                ) : (
                    <div className="text-center py-24 space-y-6">
                        <div className="text-6xl text-slate-200 font-black">404</div>
                        <h3 className="text-2xl font-bold text-slate-800">No destinations found matching your query</h3>
                        <p className="text-slate-500">Try searching for a different country or region.</p>
                        <Button
                            variant="outline"
                            onClick={() => setSearchQuery('')}
                            className="rounded-xl border-slate-200"
                        >
                            Clear Search
                        </Button>
                    </div>
                )}
            </div>
        </div>
    )
}
