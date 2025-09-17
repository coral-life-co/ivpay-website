import PrivacyBlock from "@/components/blocks/privacy-block";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CarbonNexus | Privacy Policy",
  description:
    "Privacy Policy for CarbonNexus - The Intelligence Layer for ASEAN's Green Economy",
    openGraph: {
      title: "CarbonNexus | Privacy Policy",
      description:
        "Privacy Policy for CarbonNexus - The Intelligence Layer for ASEAN's Green Economy",
      type: "website",
      url: "https://carbonnexus.io/privacy",
    },
    twitter: {
      card: "summary_large_image",
    },
  };

export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col mt-20">
      <PrivacyBlock />
    </main>
  );
}
