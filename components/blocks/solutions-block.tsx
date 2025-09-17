import { Container } from "@/components/layouts/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/elements/icon";
import { MotionTriggerWrapper } from "@/components/motion/motionTriggerWrapper";
import { MotionWrapper } from "@/components/motion/motion-wrapper";
import Link from "next/link";

export default function SolutionsBlock() {
  return (
    <section id="solutions" className="bg-blue-94 py-20">
      <MotionTriggerWrapper>
        <Container>
          <Heading
            as="h2"
            size="64"
            className="mb-10 text-center"
          >
            Targeted Solutions for Critical ASEAN Verticals
          </Heading>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <MotionWrapper>
              <Card className="flex flex-col p-5 sm:p-7.5 xl:p-10">
                <Heading as="h3" size="32" className="mb-4">
                  Sustainable Agriculture
                </Heading>
                <Text className="mb-6 flex-1">
                  Generate investment-grade MRV reports for rice cultivation. Meet exporter requirements, prepare for CBAM, and unlock new revenue from the carbon markets.
                </Text>
                <Button asChild className="mt-auto">
                  <Link href="/rice-mrv">
                    Explore Rice MRV Solution <Icon icon="ArrowUpRight" />
                  </Link>
                </Button>
              </Card>
            </MotionWrapper>
            <MotionWrapper>
              <Card className="flex flex-col p-5 sm:p-7.5 xl:p-10">
                <Heading as="h3" size="32" className="mb-4">
                  Deforestation-Free Supply Chains
                </Heading>
                <Text className="mb-6 flex-1">
                  Ensure compliance with the EU Deforestation Regulation (EUDR). Monitor your palm oil, rubber, and coffee supply chains with precision land-use intelligence.
                </Text>
                <Button variant="disabled" className="mt-auto">
                  Notify Me When Available
                </Button>
              </Card>
            </MotionWrapper>
            <MotionWrapper>
              <Card className="flex flex-col p-5 sm:p-7.5 xl:p-10">
                <Heading as="h3" size="32" className="mb-4">
                  Nature-Based Solutions & Carbon Markets
                </Heading>
                <Text className="mb-6 flex-1">
                  Accurately quantify sequestration for blue carbon projects. We provide the verifiable data needed to issue high-quality credits for mangrove restoration.
                </Text>
                <Button variant="disabled" className="mt-auto">
                  Notify Me When Available
                </Button>
              </Card>
            </MotionWrapper>
          </div>
        </Container>
      </MotionTriggerWrapper>
    </section>
  );
}