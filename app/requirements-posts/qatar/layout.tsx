import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Qatar Visa Requirements & eVisa Application",
  description: "Complete Qatar visa requirements guide. Apply for Qatar eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available. Start your Qatar visa application today.",
  keywords: [
    "Qatar visa requirements",
    "Qatar eVisa application",
    "Qatar tourist visa",
    "Qatar business visa",
    "Qatar transit visa",
    "Qatar visa online",
    "Qatar visa processing time",
    "Qatar visa fees",
    "Qatar travel requirements",
    "Qatar visa eligibility",
    "Qatar visa documents",
    "Qatar visa application form"
  ].join(", "),
  openGraph: {
    title: "Qatar Visa Requirements & eVisa Application",
    description: "Complete Qatar visa requirements guide. Apply for Qatar eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available.",
    url: "https://worldmaxxing.com/requirements-posts/qatar",
    siteName: "Worldmaxxing Global Services",
    images: [
      {
        url: "/images/country/qatar/qatar-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Qatar Visa Requirements",
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qatar Visa Requirements & eVisa Application",
    description: "Complete Qatar visa requirements guide. Apply for Qatar eVisa online with fast processing, 24/7 support.",
    images: ["/images/country/qatar/qatar-bg.jpg"],
  },
  alternates: {
    canonical: "https://worldmaxxing.com/requirements-posts/qatar",
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

export default function QatarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
