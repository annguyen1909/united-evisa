import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Kazakhstan Visa Requirements & eVisa Application",
  description: "Complete Kazakhstan visa requirements guide. Apply for Kazakhstan eVisa online with fast processing, 24/7 support. Start your Kazakhstan visa application today.",
  keywords: [
    "Kazakhstan visa requirements",
    "Kazakhstan eVisa application",
    "Kazakhstan tourist visa",
    "Kazakhstan business visa",
    "Kazakhstan transit visa",
    "Kazakhstan visa online",
    "Kazakhstan visa processing time",
    "Kazakhstan visa fees",
    "Kazakhstan travel requirements",
    "Kazakhstan visa eligibility",
    "Kazakhstan visa documents",
    "Kazakhstan visa application form"
  ].join(", "),
  openGraph: {
    title: "Kazakhstan Visa Requirements & eVisa Application",
    description: "Complete Kazakhstan visa requirements guide. Apply for Kazakhstan eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available.",
    url: "https://unitedevisa.com/requirements-posts/kazakhstan",
    siteName: "United eVisa Services",
    images: [
      {
        url: "/images/country/kazakhstan/kazakhstan-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Kazakhstan Visa Requirements",
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kazakhstan Visa Requirements & eVisa Application",
    description: "Complete Kazakhstan visa requirements guide. Apply for Kazakhstan eVisa online with fast processing, 24/7 support.",
    images: ["/images/country/kazakhstan/kazakhstan-bg.jpg"],
  },
  alternates: {
    canonical: "https://unitedevisa.com/requirements-posts/kazakhstan",
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

export default function KazakhstanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
