
import { getCountryBySlug, COUNTRIES } from '@/lib/countries';
import { notFound } from 'next/navigation';
import CountryPageClient from '@/components/shared/CountryPageClient';
import CountryStructuredData from '@/components/shared/CountryStructuredData';
import EnhancedStructuredData from '@/app/components/EnhancedStructuredData';
import PageSEO from '@/components/shared/PageSEO';
import InternalLinks from '@/components/shared/InternalLinks';
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ country: string }>;
}

// Generate static params for all countries - Critical for SEO and performance
export async function generateStaticParams() {
  return COUNTRIES.map((country) => ({
    country: country.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { country: countrySlug } = await params;
  const country = getCountryBySlug(countrySlug);

  if (!country) {
    return {
      title: 'Country Not Found',
      description: 'The requested country page could not be found.',
    };
  }

  const title = `${country.name} eVisa Requirements & Application`;
  const description = `Apply for ${country.name} eVisa online. Fast processing (${country.processingTime?.normal || '24-72 hours'}), 24/7 support, expert assistance. Get your ${country.name} visa quickly and securely.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://worldmaxxing.com/destination/${countrySlug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://worldmaxxing.com/destination/${countrySlug}`,
      siteName: 'Worldmaxxing Global Services',
      images: [
        {
          url: `/images/country/${countrySlug}/${countrySlug}-bg.jpg`,
          width: 1200,
          height: 630,
          alt: `${country.name} eVisa Requirements and Application Process`,
        }
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`/images/country/${countrySlug}/${countrySlug}-bg.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function CountryPage({ params }: PageProps) {
    const { country: countrySlug } = await params;
    const country = getCountryBySlug(countrySlug);

    if (!country) {
        notFound();
    }

    return (
        <>
            <PageSEO 
                pageType="destination" 
                countryName={country.name} 
                countrySlug={countrySlug}
            />
            <EnhancedStructuredData 
                pageType="destination" 
                country={country.slug}
            />
            <CountryPageClient country={country} />
            <div className="w-full">
                <InternalLinks currentCountry={country.name} />
            </div>
        </>
    );
}

