import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";

import LazyMotionWrapper from "@/components/motion/lazyMotionWrapper";
import { Header } from "@/components/globals/header";
import { Footer } from "@/components/globals/footer";
import { Toaster } from "@/components/ui/sonner";

import Gleap from 'gleap';
import { GleapInit } from "@/components/globals/gleap";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  metadataBase: new URL('https://carbonnexus.io/'),
  title: "CarbonNexus | The Intelligence Layer for ASEAN's Green Economy",
  description: "CarbonNexus provides verifiable data for climate finance, compliance, and resilience—powered by our proprietary Klimata™ Intelligence Engine. Targeted solutions for sustainable agriculture, deforestation-free supply chains, and nature-based solutions.",
  openGraph: {
    title: "CarbonNexus | The Intelligence Layer for ASEAN's Green Economy",
    description:
      "CarbonNexus provides verifiable data for climate finance, compliance, and resilience—powered by our proprietary Klimata™ Intelligence Engine. Targeted solutions for sustainable agriculture, deforestation-free supply chains, and nature-based solutions.",
    type: "website",
    url: "https://carbonnexus.io/",
    siteName: "CarbonNexus"
  },
};

const nohemi = localFont({
  display: "swap",
  variable: "--font-nohemi",
  src: [
    {
      path: "../fonts/Nohemi-Light.woff2",
      style: "normal",
    },
    {
      path: "../fonts/Nohemi-Light.ttf",
      style: "normal",
    },
    {
      path: "../fonts/Nohemi-Light.otf",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LazyMotionWrapper>



      <html lang="en" className={`${nohemi.variable}`}>
        <body className="relative">
          <ClerkProvider>   <Header />
            {children}
            <SpeedInsights />
            <Footer />
            <Toaster />
            <GleapInit /></ClerkProvider>
        </body>
      </html>
    </LazyMotionWrapper>
  );
}
