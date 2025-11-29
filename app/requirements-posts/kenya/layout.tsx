import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Kenya Visa Requirements & eVisa Application",
  description: "Complete Kenya visa requirements guide. Apply for Kenya eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available. Start your Kenya visa application today.",
  keywords: [
    "Kenya visa requirements",
    "Kenya eVisa application",
    "Kenya tourist visa",
    "Kenya business visa",
    "Kenya transit visa",
    "Kenya visa online",
    "Kenya visa processing time",
    "Kenya visa fees",
    "Kenya travel requirements",
    "Kenya visa eligibility",
    "Kenya visa documents",
    "Kenya visa application form"
  ].join(", "),
  openGraph: {
    title: "Kenya Visa Requirements & eVisa Application",
    description: "Complete Kenya visa requirements guide. Apply for Kenya eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available.",
    url: "https://worldmaxxing.com/requirements-posts/kenya",
    siteName: "Worldmaxxing Global Services",
    images: [
      {
        url: "/images/country/kenya/kenya-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Kenya Visa Requirements",
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenya Visa Requirements & eVisa Application",
    description: "Complete Kenya visa requirements guide. Apply for Kenya eVisa online with fast processing, 24/7 support.",
    images: ["/images/country/kenya/kenya-bg.jpg"],
  },
  alternates: {
    canonical: "https://worldmaxxing.com/requirements-posts/kenya",
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

export default function KenyaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 