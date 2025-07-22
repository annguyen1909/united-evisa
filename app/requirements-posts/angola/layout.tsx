import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Angola Visa Requirements & eVisa Application | Worldmaxxing Global Services",
  description: "Complete Angola visa requirements guide. Apply for Angola eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available. Start your Angola visa application today.",
  keywords: [
    "Angola visa requirements",
    "Angola eVisa application",
    "Angola tourist visa",
    "Angola business visa",
    "Angola transit visa",
    "Angola visa online",
    "Angola visa processing time",
    "Angola visa fees",
    "Angola travel requirements",
    "Angola visa eligibility",
    "Angola visa documents",
    "Angola visa application form"
  ].join(", "),
  openGraph: {
    title: "Angola Visa Requirements & eVisa Application | Worldmaxxing Global Services",
    description: "Complete Angola visa requirements guide. Apply for Angola eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available.",
    url: "https://visa.worldmaxxing.com/requirements-posts/angola",
    siteName: "Worldmaxxing Global Services",
    images: [
      {
        url: "/images/country/angola/angola-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Angola Visa Requirements - Worldmaxxing Global Services",
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Angola Visa Requirements & eVisa Application | Worldmaxxing Global Services",
    description: "Complete Angola visa requirements guide. Apply for Angola eVisa online with fast processing, 24/7 support.",
    images: ["/images/country/angola/angola-bg.jpg"],
  },
  alternates: {
    canonical: "https://visa.worldmaxxing.com/requirements-posts/angola",
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

export default function AngolaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
