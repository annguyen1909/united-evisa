
import { getCountryBySlug } from '@/lib/countries';
import { notFound } from 'next/navigation';
import CountryPageClient from '@/components/shared/CountryPageClient';


export default async function CountryPage({ params }: { params: Promise<{ country: string }> }) {
    const { country: countrySlug } = await params;
    const country = getCountryBySlug(countrySlug);

    if (!country) {
        notFound();
    }

    return <CountryPageClient country={country} />;
}

