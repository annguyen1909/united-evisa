import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Uzbekistan Visa Requirements & eVisa Application",
  description: "Complete Uzbekistan visa requirements guide. Apply for Uzbekistan eVisa online with fast processing, 24/7 support. Start your Uzbekistan visa application today.",
  keywords: [
    "Uzbekistan visa requirements",
    "Uzbekistan eVisa application",
    "Uzbekistan tourist visa",
    "Uzbekistan business visa",
    "Uzbekistan transit visa",
    "Uzbekistan visa online",
    "Uzbekistan visa processing time",
    "Uzbekistan visa fees",
    "Uzbekistan travel requirements",
    "Uzbekistan visa eligibility",
    "Uzbekistan visa documents",
    "Uzbekistan visa application form"
  ].join(", "),
  openGraph: {
    title: "Uzbekistan Visa Requirements & eVisa Application",
    description: "Complete Uzbekistan visa requirements guide. Apply for Uzbekistan eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available.",
    url: "https://unitedevisa.com/requirements-posts/uzbekistan",
    siteName: "United eVisa Services",
    images: [
      {
        url: "/images/country/uzbekistan/uzbekistan-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Uzbekistan Visa Requirements",
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uzbekistan Visa Requirements & eVisa Application",
    description: "Complete Uzbekistan visa requirements guide. Apply for Uzbekistan eVisa online with fast processing, 24/7 support.",
    images: ["/images/country/uzbekistan/uzbekistan-bg.jpg"],
  },
  alternates: {
    canonical: "https://unitedevisa.com/requirements-posts/uzbekistan",
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

export default function UzbekistanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
