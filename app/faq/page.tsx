import type { Metadata } from "next";
import FaqPageServer from "./FaqPageServer";

export const metadata: Metadata = {
  title: "FAQ | Worldmaxxing Global Services",
  description: "Get answers to common eVisa questions, requirements, and application steps.",
  alternates: {
    canonical: "https://worldmaxxing.com/faq",
    types: {
      "application/rss+xml": "https://worldmaxxing.com/faq/rss.xml",
    },
  },
};

export default function Page() {
  return <FaqPageServer />;
}
