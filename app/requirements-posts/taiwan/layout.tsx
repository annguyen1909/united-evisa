import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Taiwan Visa Requirements & eVisa Application",
  description: "Complete Taiwan visa requirements guide. Apply for Taiwan eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available. Start your Taiwan visa application today.",
  keywords: [
    "Taiwan visa requirements",
    "Taiwan eVisa application",
    "Taiwan tourist visa",
    "Taiwan business visa",
    "Taiwan transit visa",
    "Taiwan visa online",
    "Taiwan visa processing time",
    "Taiwan visa fees",
    "Taiwan travel requirements",
    "Taiwan visa eligibility",
    "Taiwan visa documents",
    "Taiwan visa application form"
  ].join(", "),
  openGraph: {
    title: "Taiwan Visa Requirements & eVisa Application",
    description: "Complete Taiwan visa requirements guide. Apply for Taiwan eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available.",
    url: "https://worldmaxxing.com/requirements-posts/taiwan",
    siteName: "Worldmaxxing Global Services",
    images: [
      {
        url: "/images/country/taiwan/taiwan-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Taiwan Visa Requirements",
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taiwan Visa Requirements & eVisa Application",
    description: "Complete Taiwan visa requirements guide. Apply for Taiwan eVisa online with fast processing, 24/7 support.",
    images: ["/images/country/taiwan/taiwan-bg.jpg"],
  },
  alternates: {
    canonical: "https://worldmaxxing.com/requirements-posts/taiwan",
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

export default function TaiwanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
