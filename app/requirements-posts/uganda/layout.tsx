import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Uganda Visa Requirements & eVisa Application | Worldmaxxing Global Services",
  description: "Complete Uganda visa requirements guide. Apply for Uganda eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available. Start your Uganda visa application today.",
  keywords: [
    "Uganda visa requirements",
    "Uganda eVisa application",
    "Uganda tourist visa",
    "Uganda business visa",
    "Uganda transit visa",
    "Uganda visa online",
    "Uganda visa processing time",
    "Uganda visa fees",
    "Uganda travel requirements",
    "Uganda visa eligibility",
    "Uganda visa documents",
    "Uganda visa application form"
  ].join(", "),
  openGraph: {
    title: "Uganda Visa Requirements & eVisa Application | Worldmaxxing Global Services",
    description: "Complete Uganda visa requirements guide. Apply for Uganda eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available.",
    url: "https://visa.worldmaxxing.com/requirements-posts/uganda",
    siteName: "Worldmaxxing Global Services",
    images: [
      {
        url: "/images/country/uganda/uganda-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Uganda Visa Requirements - Worldmaxxing Global Services",
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uganda Visa Requirements & eVisa Application | Worldmaxxing Global Services",
    description: "Complete Uganda visa requirements guide. Apply for Uganda eVisa online with fast processing, 24/7 support.",
    images: ["/images/country/uganda/uganda-bg.jpg"],
  },
  alternates: {
    canonical: "https://visa.worldmaxxing.com/requirements-posts/uganda",
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

export default function UgandaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
