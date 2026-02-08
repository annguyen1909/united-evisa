import { Metadata } from "next";
import Hero from "./components/Hero";
import TopDestinations from "./components/TopDestinations";
import AllVisaTypes from "./components/AllVisaTypes";
import VisaSteps from "./components/VisaSteps";
import CustomerSupport from "./components/CustomerSupport";
import FeeGuarantee from "./components/FeeGuarantee";
import RecentBlogPosts from "./components/RecentBlogPosts";
import RecentRequirements from "./components/RecentRequirements";
import PageSEO from "../components/shared/PageSEO";
import InternalLinks from "../components/shared/InternalLinks";

export const metadata: Metadata = {
  title: "United eVisa Services | Visa to Travel in Minutes",
  description: "Apply for eVisas with United eVisa Services. Get expert guidance, real-time updates, and clear requirements for top destinations worldwide.",
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
    title: "United eVisa Services | Visa to Travel in Minutes",
    description: "Apply online with expert support and real-time updates. Clear eVisa requirements for popular destinations.",
    url: "https://unitedevisa.com",
    siteName: "United eVisa Services",
    images: [
      {
        url: "/images/hero/hero.jpg",
        width: 1200,
        height: 630,
        alt: "eVisa Application Platform",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "United eVisa Services | Visa to Travel in Minutes",
    description: "Apply online with expert support and real-time updates for eVisa requirements.",
    images: ["/images/hero/hero.jpg"],
  },
  alternates: {
    canonical: "https://unitedevisa.com",
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
      <PageSEO pageType="homepage" />
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
      <RecentRequirements />
      <RecentBlogPosts />
      <div className="w-full pb-8 bg-white">
        <FeeGuarantee />
      </div>
      <div className="w-full pb-8 bg-white">
        <InternalLinks />
      </div>
    </main>
  );
}
