import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Malawi Visa Requirements & eVisa Application",
  description: "Complete Malawi visa requirements guide. Apply for Malawi eVisa online with fast processing, 24/7 support. Start your Malawi visa application today.",
  keywords: [
    "Malawi visa requirements",
    "Malawi eVisa application",
    "Malawi tourist visa",
    "Malawi business visa",
    "Malawi transit visa",
    "Malawi visa online",
    "Malawi visa processing time",
    "Malawi visa fees",
    "Malawi travel requirements",
    "Malawi visa eligibility",
    "Malawi visa documents",
    "Malawi visa application form"
  ].join(", "),
  openGraph: {
    title: "Malawi Visa Requirements & eVisa Application",
    description: "Complete Malawi visa requirements guide. Apply for Malawi eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available.",
    url: "https://unitedevisa.com/requirements-posts/malawi",
    siteName: "United eVisa Services",
    images: [
      {
        url: "/images/country/malawi/malawi-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Malawi Visa Requirements",
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Malawi Visa Requirements & eVisa Application",
    description: "Complete Malawi visa requirements guide. Apply for Malawi eVisa online with fast processing, 24/7 support.",
    images: ["/images/country/malawi/malawi-bg.jpg"],
  },
  alternates: {
    canonical: "https://unitedevisa.com/requirements-posts/malawi",
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

export default function MalawiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
