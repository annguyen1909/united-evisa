import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "India Visa Requirements & eVisa Application",
  description: "Complete India visa requirements guide. Apply for India eVisa online with fast processing, 24/7 support. Start your India visa application today.",
  keywords: [
    "India visa requirements",
    "India eVisa application",
    "India tourist visa",
    "India business visa",
    "India transit visa",
    "India visa online",
    "India visa processing time",
    "India visa fees",
    "India travel requirements",
    "India visa eligibility",
    "India visa documents",
    "India visa application form"
  ].join(", "),
  openGraph: {
    title: "India Visa Requirements & eVisa Application",
    description: "Complete India visa requirements guide. Apply for India eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available.",
    url: "https://unitedevisa.com/requirements-posts/india",
    siteName: "United eVisa Services",
    images: [
      {
        url: "/images/country/india/india-bg.jpg",
        width: 1200,
        height: 630,
        alt: "India Visa Requirements",
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "India Visa Requirements & eVisa Application",
    description: "Complete India visa requirements guide. Apply for India eVisa online with fast processing, 24/7 support.",
    images: ["/images/country/india/india-bg.jpg"],
  },
  alternates: {
    canonical: "https://unitedevisa.com/requirements-posts/india",
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

export default function IndiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
