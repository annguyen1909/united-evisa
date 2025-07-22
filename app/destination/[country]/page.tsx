
import { getCountryBySlug } from '@/lib/countries';
import { notFound } from 'next/navigation';
import CountryPageClient from '@/components/shared/CountryPageClient';
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { country: countrySlug } = await params;
  const country = getCountryBySlug(countrySlug);

  if (!country) {
    return {
      title: 'Country Not Found | Worldmaxxing Global Services',
      description: 'The requested country page could not be found.',
    };
  }

  return {
    title: `${country.name} Visa Requirements | Worldmaxxing Global Services`,
    description: `Apply for ${country.name} visa with Worldmaxxing Global Services. Fast processing, 24/7 support, and guaranteed approval.`,
    keywords: `${country.name}, visa requirements, eVisa, travel, Worldmaxxing Global Services`,
    alternates: {
      canonical: `https://visa.worldmaxxing.com/destination/${countrySlug}`,
    },
    openGraph: {
      title: `${country.name} Visa Requirements | Worldmaxxing Global Services`,
      description: `Apply for ${country.name} visa with Worldmaxxing Global Services. Fast processing, 24/7 support, and guaranteed approval.`,
      url: `https://visa.worldmaxxing.com/destination/${countrySlug}`,
      siteName: 'Worldmaxxing Global Services',
      images: [
        {
          url: `/images/country/${countrySlug}/${countrySlug}-bg.jpg`,
          width: 1200,
          height: 630,
          alt: `${country.name} Visa Requirements - Worldmaxxing Global Services`,
        }
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${country.name} Visa Requirements | Worldmaxxing Global Services`,
      description: `Apply for ${country.name} visa with Worldmaxxing Global Services. Fast processing, 24/7 support, and guaranteed approval.`,
      images: [`/images/country/${countrySlug}/${countrySlug}-bg.jpg`],
    },
  };
}

export default async function CountryPage({ params }: PageProps) {
    const { country: countrySlug } = await params;
    const country = getCountryBySlug(countrySlug);

    if (!country) {
        notFound();
    }

    return <CountryPageClient country={country} />;
}

