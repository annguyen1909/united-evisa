import type { Metadata } from "next";
import FaqPageServer from "./FaqPageServer";

export const metadata: Metadata = {
  title: "FAQ | United eVisa Services",
  description: "Get answers to common eVisa questions, requirements, and application steps.",
  alternates: {
    canonical: "https://unitedevisa.com/faq",
    types: {
      "application/rss+xml": "https://unitedevisa.com/faq/rss.xml",
    },
  },
};

export default function Page() {
  return <FaqPageServer />;
}
