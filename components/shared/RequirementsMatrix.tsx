'use client'

import { useState, useMemo } from 'react'
import { NATIONALITIES } from '@/lib/nationalities'
import { Country } from '@/lib/countries/type'

interface RequirementsMatrixProps {
    country: Country
}

export default function RequirementsMatrix({ country }: RequirementsMatrixProps) {
    const [search, setSearch] = useState('')

    const allowedCodes = useMemo(() => {
        // Collect all allowed nationalities from all visa types
        const codes = new Set<string>()
        country.visaTypes.forEach(v => {
            v.allowedNationalities.forEach(code => codes.add(code.toUpperCase()))
        })
        return codes
    }, [country])

    const filteredNationalities = useMemo(() => {
        return NATIONALITIES.filter(n =>
            n.name.toLowerCase().includes(search.toLowerCase()) ||
            n.code.toLowerCase().includes(search.toLowerCase())
        )
    }, [search])

    return (
        <div className="space-y-8">
            {/* Search Bar */}
            <div className="max-w-md">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-11 pr-4 py-4 border-2 border-slate-200 rounded-2xl focus:ring-emerald-500 focus:border-emerald-500 text-lg transition-all"
                        placeholder="Search your nationality..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>

            {/* Results Table */}
            <div className="bg-white rounded-[32px] border border-slate-200 shadow-2xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-900 text-white">
                                <th className="px-8 py-6 text-sm font-black uppercase tracking-[0.2em]">Nationality</th>
                                <th className="px-8 py-6 text-sm font-black uppercase tracking-[0.2em]">e-Visa Status</th>
                                <th className="px-8 py-6 text-sm font-black uppercase tracking-[0.2em]">Max Stay</th>
                                <th className="px-8 py-6 text-sm font-black uppercase tracking-[0.2em]">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {filteredNationalities.slice(0, 20).map((nat) => {
                                const isAllowed = allowedCodes.has(nat.code.toUpperCase())
                                return (
                                    <tr key={nat.code} className="hover:bg-slate-50 transition-colors group">
                                        <td className="px-8 py-6">
                                            <div className="flex items-center space-x-4">
                                                <img
                                                    src={`https://flagcdn.com/w40/${nat.code.toLowerCase()}.png`}
                                                    alt=""
                                                    className="w-8 h-5 rounded shadow-sm object-cover"
                                                />
                                                <span className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">{nat.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            {isAllowed ? (
                                                <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                                                    <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                                                    <span>Eligible Online</span>
                                                </div>
                                            ) : (
                                                <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                                                    <span className="flex h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                                                    <span>Regulated Entry</span>
                                                </div>
                                            )}
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className="font-bold text-slate-600">{isAllowed ? 'Up to 90 Days' : 'Contact Support'}</span>
                                        </td>
                                        <td className="px-8 py-6">
                                            {isAllowed ? (
                                                <a
                                                    href={`/apply?country=${country.slug}&nationality=${nat.code}`}
                                                    className="text-emerald-600 font-black text-xs uppercase tracking-widest hover:underline"
                                                >
                                                    Start Application →
                                                </a>
                                            ) : (
                                                <span className="text-slate-400 font-bold text-xs uppercase tracking-widest">
                                                    Not Supported
                                                </span>
                                            )}
                                        </td>
                                    </tr>
                                )
                            })}
                            {filteredNationalities.length === 0 && (
                                <tr>
                                    <td colSpan={4} className="px-8 py-12 text-center text-slate-400 font-bold uppercase tracking-widest">
                                        No results found for "{search}"
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {filteredNationalities.length > 20 && (
                    <div className="bg-slate-50 p-6 text-center border-t border-slate-100 text-slate-400 text-xs font-bold uppercase tracking-widest">
                        Showing top 20 results. Use the search bar to narrow down.
                    </div>
                )}
            </div>
        </div>
    )
}
