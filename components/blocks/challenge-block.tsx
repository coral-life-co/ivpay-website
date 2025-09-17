import { Container } from "@/components/layouts/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/elements/icon";
import { MotionTriggerWrapper } from "@/components/motion/motionTriggerWrapper";
import { MotionWrapper } from "@/components/motion/motion-wrapper";

export default function ChallengeBlock() {
  return (
    <section id="challenge-block" className="bg-blue-94 py-20">
      <MotionTriggerWrapper>
        <Container>
          <Heading
            as="h2"
            size="64"
            className="mb-10 text-center"
          >
            Navigating the New Climate Economy
          </Heading>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <MotionWrapper>
              <Card className="flex flex-col p-5 sm:p-7.5 xl:p-10">
                <div className="mb-4 flex aspect-square w-12 items-center justify-center rounded-lg border border-background/50 bg-accent text-background shadow-xl shadow-accent/30 sm:w-16">
                  <Icon icon="Settings" className="h-8 w-8" />
                </div>
                <Heading as="h3" size="32" className="mb-3">
                  Regulatory Pressure
                </Heading>
                <Text>
                  International standards like CBAM and EUDR are creating complex new compliance hurdles.
                </Text>
              </Card>
            </MotionWrapper>
            <MotionWrapper>
              <Card className="flex flex-col p-5 sm:p-7.5 xl:p-10">
                <div className="mb-4 flex aspect-square w-12 items-center justify-center rounded-lg border border-background/50 bg-accent text-background shadow-xl shadow-accent/30 sm:w-16">
                  <Icon icon="CreditCard" className="h-8 w-8" />
                </div>
                <Heading as="h3" size="32" className="mb-3">
                  Financial Demands
                </Heading>
                <Text>
                  Access to capital is increasingly tied to verifiable environmental performance.
                </Text>
              </Card>
            </MotionWrapper>
            <MotionWrapper>
              <Card className="flex flex-col p-5 sm:p-7.5 xl:p-10">
                <div className="mb-4 flex aspect-square w-12 items-center justify-center rounded-lg border border-background/50 bg-accent text-background shadow-xl shadow-accent/30 sm:w-16">
                  <Icon icon="Cloud" className="h-8 w-8" />
                </div>
                <Heading as="h3" size="32" className="mb-3">
                  Operational Threats
                </Heading>
                <Text>
                  Extreme weather events are disrupting supply chains and impacting yields.
                </Text>
              </Card>
            </MotionWrapper>
          </div>
        </Container>
      </MotionTriggerWrapper>
    </section>
  );
}