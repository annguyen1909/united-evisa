import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Rwanda Visa Requirements & eVisa Application | Worldmaxxing Global Services",
  description: "Complete Rwanda visa requirements guide. Apply for Rwanda eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available. Start your Rwanda visa application today.",
  keywords: [
    "Rwanda visa requirements",
    "Rwanda eVisa application",
    "Rwanda tourist visa",
    "Rwanda business visa",
    "Rwanda transit visa",
    "Rwanda visa online",
    "Rwanda visa processing time",
    "Rwanda visa fees",
    "Rwanda travel requirements",
    "Rwanda visa eligibility",
    "Rwanda visa documents",
    "Rwanda visa application form"
  ].join(", "),
  openGraph: {
    title: "Rwanda Visa Requirements & eVisa Application | Worldmaxxing Global Services",
    description: "Complete Rwanda visa requirements guide. Apply for Rwanda eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available.",
    url: "https://worldmaxxing.com/requirements-posts/rwanda",
    siteName: "Worldmaxxing Global Services",
    images: [
      {
        url: "/images/country/rwanda/rwanda-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Rwanda Visa Requirements - Worldmaxxing Global Services",
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rwanda Visa Requirements & eVisa Application | Worldmaxxing Global Services",
    description: "Complete Rwanda visa requirements guide. Apply for Rwanda eVisa online with fast processing, 24/7 support.",
    images: ["/images/country/rwanda/rwanda-bg.jpg"],
  },
  alternates: {
    canonical: "https://worldmaxxing.com/requirements-posts/rwanda",
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

export default function RwandaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
