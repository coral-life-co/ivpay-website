import { Container } from "@/components/layouts/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { MotionTriggerWrapper } from "@/components/motion/motionTriggerWrapper";
import { MotionWrapper } from "@/components/motion/motion-wrapper";

export default function TechnologyBlock() {
  return (
    <section id="technology" className="py-20">
      <MotionTriggerWrapper>
        <Container>
          <Heading
            as="h2"
            size="64"
            className="mb-10 text-center"
          >
            The Klimata™ Intelligence Engine: From Raw Satellite Data to Financial-Grade Truth
          </Heading>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <MotionWrapper>
              <Card className="flex flex-col p-5 sm:p-7.5 xl:p-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-background text-xl font-bold">
                  1
                </div>
                <Heading as="h3" size="32" className="mb-3">
                  Ingest
                </Heading>
                <Text>
                  We process petabytes of multi-source data from the world's most reliable sources, including the European Space Agency's Sentinel satellites.
                </Text>
              </Card>
            </MotionWrapper>
            <MotionWrapper>
              <Card className="flex flex-col p-5 sm:p-7.5 xl:p-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-background text-xl font-bold">
                  2
                </div>
                <Heading as="h3" size="32" className="mb-3">
                  Analyze
                </Heading>
                <Text>
                  Our proprietary AI and scientifically-validated models translate raw pixels into precise, auditable metrics—from carbon flux to land-use change.
                </Text>
              </Card>
            </MotionWrapper>
            <MotionWrapper>
              <Card className="flex flex-col p-5 sm:p-7.5 xl:p-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-background text-xl font-bold">
                  3
                </div>
                <Heading as="h3" size="32" className="mb-3">
                  Deliver
                </Heading>
                <Text>
                  The engine delivers verifiable insights and reports through our specialized CarbonNexus solutions, giving you the clarity needed for decisive action.
                </Text>
              </Card>
            </MotionWrapper>
          </div>
        </Container>
      </MotionTriggerWrapper>
    </section>
  );
}