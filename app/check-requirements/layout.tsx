import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Check Visa Requirements & Eligibility | Worldmaxxing Global Services",
  description: "Check visa requirements and eligibility for 50+ countries. Enter your nationality and destination to instantly see visa requirements, fees, and processing times. Fast, accurate visa information.",
  keywords: [
    "visa requirements checker",
    "visa eligibility",
    "visa requirements by nationality",
    "check visa requirements",
    "visa application requirements",
    "visa eligibility checker",
    "travel visa requirements",
    "visa requirements tool",
    "visa requirements database",
    "international travel requirements",
    "visa application guide",
    "visa requirements by country"
  ].join(", "),
  openGraph: {
    title: "Check Visa Requirements & Eligibility | Worldmaxxing Global Services",
    description: "Check visa requirements and eligibility for 50+ countries. Enter your nationality and destination to instantly see visa requirements, fees, and processing times.",
    url: "https://visa.worldmaxxing.com/check-requirements",
    siteName: "Worldmaxxing Global Services",
    images: [
      {
        url: "/images/hero/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Visa Requirements Checker - Worldmaxxing Global Services",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Check Visa Requirements & Eligibility | Worldmaxxing Global Services",
    description: "Check visa requirements and eligibility for 50+ countries. Fast, accurate visa information.",
    images: ["/images/hero/hero.jpg"],
  },
  alternates: {
    canonical: "https://visa.worldmaxxing.com/check-requirements",
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

export default function CheckRequirementsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 