import { CTABlock } from "@/components/blocks/cta-block";
import GetInTouchBlock from "@/components/blocks/get-in-touch-block";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CarbonNexus | Contact Us",
  description:
    "Learn about CarbonNexus, a leading crypto payment system for retail, e-commerce, and vending machines. With active merchants across 10+ countries, we're on a mission to make instant crypto transactions easy and accessible for everyone",
    openGraph: {
      title: "CarbonNexus | Contact Us",
      description:
        "Learn about CarbonNexus, a leading crypto payment system for retail, e-commerce, and vending machines. With active merchants across 10+ countries, we're on a mission to make instant crypto transactions easy and accessible for everyone",
      type: "website",
      url: "https://carbonnexus.io/contact",
    },
    twitter: {
      card: 'summary_large_image',
    },
  };

export default function ContactPage() {
  return (
    <main className="flex flex-col mt-20">
      <GetInTouchBlock />
    </main>
  );
}
