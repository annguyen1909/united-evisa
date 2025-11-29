import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Pakistan Visa Requirements & eVisa Application",
  description: "Complete Pakistan visa requirements guide. Apply for Pakistan eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available. Start your Pakistan visa application today.",
  keywords: [
    "Pakistan visa requirements",
    "Pakistan eVisa application",
    "Pakistan tourist visa",
    "Pakistan business visa",
    "Pakistan transit visa",
    "Pakistan visa online",
    "Pakistan visa processing time",
    "Pakistan visa fees",
    "Pakistan travel requirements",
    "Pakistan visa eligibility",
    "Pakistan visa documents",
    "Pakistan visa application form"
  ].join(", "),
  openGraph: {
    title: "Pakistan Visa Requirements & eVisa Application",
    description: "Complete Pakistan visa requirements guide. Apply for Pakistan eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available.",
    url: "https://worldmaxxing.com/requirements-posts/pakistan",
    siteName: "Worldmaxxing Global Services",
    images: [
      {
        url: "/images/country/pakistan/pakistan-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Pakistan Visa Requirements",
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pakistan Visa Requirements & eVisa Application",
    description: "Complete Pakistan visa requirements guide. Apply for Pakistan eVisa online with fast processing, 24/7 support.",
    images: ["/images/country/pakistan/pakistan-bg.jpg"],
  },
  alternates: {
    canonical: "https://worldmaxxing.com/requirements-posts/pakistan",
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

export default function PakistanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
