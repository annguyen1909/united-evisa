import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Egypt Visa Requirements & eVisa Application",
  description: "Complete Egypt visa requirements guide. Apply for Egypt eVisa online with fast processing, 24/7 support. Start your Egypt visa application today.",
  keywords: [
    "Egypt visa requirements",
    "Egypt eVisa application",
    "Egypt tourist visa",
    "Egypt business visa",
    "Egypt transit visa",
    "Egypt visa online",
    "Egypt visa processing time",
    "Egypt visa fees",
    "Egypt travel requirements",
    "Egypt visa eligibility",
    "Egypt visa documents",
    "Egypt visa application form"
  ].join(", "),
  openGraph: {
    title: "Egypt Visa Requirements & eVisa Application",
    description: "Complete Egypt visa requirements guide. Apply for Egypt eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available.",
    url: "https://unitedevisa.com/requirements-posts/egypt",
    siteName: "United eVisa Services",
    images: [
      {
        url: "/images/country/egypt/egypt-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Egypt Visa Requirements",
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Egypt Visa Requirements & eVisa Application",
    description: "Complete Egypt visa requirements guide. Apply for Egypt eVisa online with fast processing, 24/7 support.",
    images: ["/images/country/egypt/egypt-bg.jpg"],
  },
  alternates: {
    canonical: "https://unitedevisa.com/requirements-posts/egypt",
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

export default function EgyptLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
