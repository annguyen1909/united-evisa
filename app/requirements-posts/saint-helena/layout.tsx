import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Saint Helena Visa Requirements & eVisa Application | Worldmaxxing Global Services",
  description: "Complete Saint Helena visa requirements guide. Apply for Saint Helena eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available. Start your Saint Helena visa application today.",
  keywords: [
    "Saint Helena visa requirements",
    "Saint Helena eVisa application",
    "Saint Helena tourist visa",
    "Saint Helena business visa",
    "Saint Helena transit visa",
    "Saint Helena visa online",
    "Saint Helena visa processing time",
    "Saint Helena visa fees",
    "Saint Helena travel requirements",
    "Saint Helena visa eligibility",
    "Saint Helena visa documents",
    "Saint Helena visa application form"
  ].join(", "),
  openGraph: {
    title: "Saint Helena Visa Requirements & eVisa Application | Worldmaxxing Global Services",
    description: "Complete Saint Helena visa requirements guide. Apply for Saint Helena eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available.",
    url: "https://visa.worldmaxxing.com/requirements-posts/saint-helena",
    siteName: "Worldmaxxing Global Services",
    images: [
      {
        url: "/images/country/saint-helena/saint-helena-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Saint Helena Visa Requirements - Worldmaxxing Global Services",
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saint Helena Visa Requirements & eVisa Application | Worldmaxxing Global Services",
    description: "Complete Saint Helena visa requirements guide. Apply for Saint Helena eVisa online with fast processing, 24/7 support.",
    images: ["/images/country/saint-helena/saint-helena-bg.jpg"],
  },
  alternates: {
    canonical: "https://visa.worldmaxxing.com/requirements-posts/saint-helena",
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

export default function SaintHelenaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
