import { Metadata } from "next";
import Hero from "./components/Hero";
import TopDestinations from "./components/TopDestinations";
import AllVisaTypes from "./components/AllVisaTypes";
import VisaSteps from "./components/VisaSteps";
import CustomerSupport from "./components/CustomerSupport";
import FeeGuarantee from "./components/FeeGuarantee";
import News from "./components/News";

export const metadata: Metadata = {
  title: "Fast & Secure eVisa Applications | Worldmaxxing Global Services",
  description: "Apply for eVisas to 50+ countries including Kenya, Canada, Vietnam, Australia, UK, Saudi Arabia, and more. Fast processing, 24/7 support, and guaranteed approval. Start your visa application today!",
  keywords: [
    "eVisa application",
    "online visa",
    "fast visa processing",
    "Kenya eVisa",
    "Canada eVisa", 
    "Vietnam eVisa",
    "Australia eVisa",
    "UK eVisa",
    "Saudi Arabia eVisa",
    "Qatar eVisa",
    "Oman eVisa",
    "visa assistance",
    "travel documents",
    "international travel",
    "business visa",
    "tourist visa",
    "visa requirements",
    "visa application help"
  ].join(", "),
  openGraph: {
    title: "Fast & Secure eVisa Applications | Worldmaxxing Global Services",
    description: "Apply for eVisas to 50+ countries. Fast processing, 24/7 support, guaranteed approval. Start your visa application today!",
    url: "https://visa.worldmaxxing.com",
    siteName: "Worldmaxxing Global Services",
    images: [
      {
        url: "/images/hero/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Worldmaxxing Global Services - eVisa Application Platform",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fast & Secure eVisa Applications | Worldmaxxing Global Services",
    description: "Apply for eVisas to 50+ countries. Fast processing, 24/7 support, guaranteed approval.",
    images: ["/images/hero/hero.jpg"],
  },
  alternates: {
    canonical: "https://visa.worldmaxxing.com",
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

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center bg-white">
      {/* Hero section with full width */}
      <Hero />
      {/* Main content sections with consistent spacing */}
      <div className="w-full pb-8 bg-white">
        <TopDestinations />
      </div>
      <div className="w-full bg-white">
        <AllVisaTypes />
      </div>
      <div className="w-full pb-8 bg-white">
        <VisaSteps />
      </div>
      <div className="w-full pb-8 bg-white">
        <CustomerSupport />
      </div>
      <div className="w-full pb-8 bg-white">
        <News />
      </div>
      <div className="w-full pb-8 bg-white">
        <FeeGuarantee />
      </div>
    </main>
  );
}
