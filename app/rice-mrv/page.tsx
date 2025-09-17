import { Container } from "@/components/layouts/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/elements/icon";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CarbonNexus | Rice MRV Solution",
  description: "Generate investment-grade MRV reports for rice cultivation. Meet exporter requirements, prepare for CBAM, and unlock new revenue from the carbon markets.",
};

export default function RiceMRVPage() {
  return (
    <main className="flex flex-col min-h-screen mt-20">
      <Container>
        <div className="py-20">
          <Heading as="h1" size="72" className="mb-6 text-center">
            Rice MRV Solution
          </Heading>
          <Text className="mb-8 text-center text-xl max-w-3xl mx-auto">
            Generate investment-grade MRV reports for rice cultivation. Meet exporter requirements, prepare for CBAM, and unlock new revenue from the carbon markets.
          </Text>
          <div className="text-center">
            <Button asChild size="lg">
              <Link href="#contact">
                Contact Us for Details <Icon icon="ArrowUpRight" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}