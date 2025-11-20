import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Armenia Visa Requirements & eVisa Application | Worldmaxxing Global Services",
  description: "Complete Armenia visa requirements guide. Apply for Armenia eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available. Start your Armenia visa application today.",
  keywords: [
    "Armenia visa requirements",
    "Armenia eVisa application",
    "Armenia tourist visa",
    "Armenia business visa",
    "Armenia transit visa",
    "Armenia visa online",
    "Armenia visa processing time",
    "Armenia visa fees",
    "Armenia travel requirements",
    "Armenia visa eligibility",
    "Armenia visa documents",
    "Armenia visa application form"
  ].join(", "),
  openGraph: {
    title: "Armenia Visa Requirements & eVisa Application | Worldmaxxing Global Services",
    description: "Complete Armenia visa requirements guide. Apply for Armenia eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available.",
    url: "https://worldmaxxing.com/requirements-posts/armenia",
    siteName: "Worldmaxxing Global Services",
    images: [
      {
        url: "/images/country/armenia/armenia-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Armenia Visa Requirements - Worldmaxxing Global Services",
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Armenia Visa Requirements & eVisa Application | Worldmaxxing Global Services",
    description: "Complete Armenia visa requirements guide. Apply for Armenia eVisa online with fast processing, 24/7 support.",
    images: ["/images/country/armenia/armenia-bg.jpg"],
  },
  alternates: {
    canonical: "https://worldmaxxing.com/requirements-posts/armenia",
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

export default function ArmeniaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
