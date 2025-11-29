import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Saudi Arabia Visa Requirements & eVisa Application",
  description: "Complete Saudi Arabia visa requirements guide. Apply for Saudi Arabia eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available. Start your Saudi Arabia visa application today.",
  keywords: [
    "Saudi Arabia visa requirements",
    "Saudi Arabia eVisa application",
    "Saudi Arabia tourist visa",
    "Saudi Arabia business visa",
    "Saudi Arabia transit visa",
    "Saudi Arabia visa online",
    "Saudi Arabia visa processing time",
    "Saudi Arabia visa fees",
    "Saudi Arabia travel requirements",
    "Saudi Arabia visa eligibility",
    "Saudi Arabia visa documents",
    "Saudi Arabia visa application form"
  ].join(", "),
  openGraph: {
    title: "Saudi Arabia Visa Requirements & eVisa Application",
    description: "Complete Saudi Arabia visa requirements guide. Apply for Saudi Arabia eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available.",
    url: "https://worldmaxxing.com/requirements-posts/saudi-arabia",
    siteName: "Worldmaxxing Global Services",
    images: [
      {
        url: "/images/country/saudi-arabia/saudi-arabia-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Saudi Arabia Visa Requirements",
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saudi Arabia Visa Requirements & eVisa Application",
    description: "Complete Saudi Arabia visa requirements guide. Apply for Saudi Arabia eVisa online with fast processing, 24/7 support.",
    images: ["/images/country/saudi-arabia/saudi-arabia-bg.jpg"],
  },
  alternates: {
    canonical: "https://worldmaxxing.com/requirements-posts/saudi-arabia",
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

export default function SaudiArabiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
