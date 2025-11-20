import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Indonesia Visa Requirements & eVisa Application | Worldmaxxing Global Services",
  description: "Complete Indonesia visa requirements guide. Apply for Indonesia eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available. Start your Indonesia visa application today.",
  keywords: [
    "Indonesia visa requirements",
    "Indonesia eVisa application",
    "Indonesia tourist visa",
    "Indonesia business visa",
    "Indonesia transit visa",
    "Indonesia visa online",
    "Indonesia visa processing time",
    "Indonesia visa fees",
    "Indonesia travel requirements",
    "Indonesia visa eligibility",
    "Indonesia visa documents",
    "Indonesia visa application form"
  ].join(", "),
  openGraph: {
    title: "Indonesia Visa Requirements & eVisa Application | Worldmaxxing Global Services",
    description: "Complete Indonesia visa requirements guide. Apply for Indonesia eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available.",
    url: "https://worldmaxxing.com/requirements-posts/indonesia",
    siteName: "Worldmaxxing Global Services",
    images: [
      {
        url: "/images/country/indonesia/indonesia-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Indonesia Visa Requirements - Worldmaxxing Global Services",
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indonesia Visa Requirements & eVisa Application | Worldmaxxing Global Services",
    description: "Complete Indonesia visa requirements guide. Apply for Indonesia eVisa online with fast processing, 24/7 support.",
    images: ["/images/country/indonesia/indonesia-bg.jpg"],
  },
  alternates: {
    canonical: "https://worldmaxxing.com/requirements-posts/indonesia",
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

export default function IndonesiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
