import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Vietnam Visa Requirements & eVisa Application",
  description: "Complete Vietnam visa requirements guide. Apply for Vietnam eVisa online with fast processing, 24/7 support. Start your Vietnam visa application today.",
  keywords: [
    "Vietnam visa requirements",
    "Vietnam eVisa application",
    "Vietnam tourist visa",
    "Vietnam business visa",
    "Vietnam transit visa",
    "Vietnam visa online",
    "Vietnam visa processing time",
    "Vietnam visa fees",
    "Vietnam travel requirements",
    "Vietnam visa eligibility",
    "Vietnam visa documents",
    "Vietnam visa application form"
  ].join(", "),
  openGraph: {
    title: "Vietnam Visa Requirements & eVisa Application",
    description: "Complete Vietnam visa requirements guide. Apply for Vietnam eVisa online with fast processing, 24/7 support. Tourist, business, and transit visas available.",
    url: "https://worldmaxxing.com/requirements-posts/vietnam",
    siteName: "Worldmaxxing Global Services",
    images: [
      {
        url: "/images/country/vietnam/vietnam-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Vietnam Visa Requirements",
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vietnam Visa Requirements & eVisa Application",
    description: "Complete Vietnam visa requirements guide. Apply for Vietnam eVisa online with fast processing, 24/7 support.",
    images: [
      {
        url: "/images/country/vietnam/vietnam-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Vietnam Visa Requirements",
      }
    ],
  },
};

export default function VietnamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 