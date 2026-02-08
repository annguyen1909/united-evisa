import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Gabon Visa Requirements & eVisa Application",
  description: "Complete Gabon visa requirements guide. Apply for Gabon eVisa online with fast processing, 24/7 support. Start your Gabon visa application today.",
  keywords: [
    "Gabon visa requirements",
    "Gabon eVisa application",
    "Gabon tourist visa",
    "Gabon business visa",
    "Gabon transit visa",
    "Gabon visa online",
    "Gabon visa processing time",
    "Gabon visa fees",
    "Gabon travel requirements",
    "Gabon visa eligibility",
    "Gabon visa documents",
    "Gabon visa application form"
  ].join(", "),
  openGraph: {
    title: "Gabon Visa Requirements & eVisa Application",
    description: "Complete Gabon visa requirements guide. Apply for Gabon eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available.",
    url: "https://unitedevisa.com/requirements-posts/gabon",
    siteName: "United eVisa Services",
    images: [
      {
        url: "/images/country/gabon/gabon-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Gabon Visa Requirements",
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabon Visa Requirements & eVisa Application",
    description: "Complete Gabon visa requirements guide. Apply for Gabon eVisa online with fast processing, 24/7 support.",
    images: ["/images/country/gabon/gabon-bg.jpg"],
  },
  alternates: {
    canonical: "https://unitedevisa.com/requirements-posts/gabon",
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

export default function GabonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
