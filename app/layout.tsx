import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import TopBanner from "./components/TopBanner";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Providers } from "./providers";
import ContactWidget from "../components/ui/ContactWidget";

// Primary fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "United eVisa | Your Trusted Global Visa Assistant",
  description: "Get fast and reliable eVisa services for over 190 countries. Apply online, track your application, and receive your visa in record time.",
  keywords: "evisa, online visa, electronic visa, travel visa, visa application, visa service",
  authors: [{ name: "United eVisa" }],
  creator: "United eVisa",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://unitedevisa.com",
    siteName: "United eVisa",
    title: "United eVisa | Your Trusted Global Visa Assistant",
    description: "Fast, reliable, and trusted eVisa services worldwide",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "United eVisa"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "United eVisa | Your Trusted Global Visa Assistant",
    description: "Fast, reliable, and trusted eVisa services worldwide",
    images: ["/images/twitter-image.jpg"]
  },
  robots: "index, follow"
};

// Move viewport to its own export
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${geistSans.variable} ${inter.variable} ${geistMono.variable} font-sans antialiased bg-white text-slate-900`}
        style={{ position: 'relative', zIndex: 0 }}
      >
        <Providers>
          <TopBanner />
          <Navbar />
          {children}
          <Footer />
          <ContactWidget />
        </Providers>
      </body>
    </html>
  );
}