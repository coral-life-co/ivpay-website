import { Container } from "@/components/layouts/container";
import { MotionTriggerWrapper } from "@/components/motion/motionTriggerWrapper";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Text } from "@/components/ui/text";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/elements/icon";
import { MotionWrapper } from "../motion/motion-wrapper";

import { cn } from "@/lib/utils";

const CTABlock: React.FC<React.HTMLAttributes<HTMLElement>> = ({className}) => {
  return (
    <section
      id="POS-hero-block"
      className={cn("bg-soft-gradient-reverse pb-0 pt-20", className)}
    >
      <MotionTriggerWrapper>
        <Container>
          <div className="relative py-20 flex aspect-11/10 flex-col justify-center">
            <Card
              aria-hidden
              className="pointer-events-none absolute inset-0 z-0 gradient-mask-b-0"
            />
            <Heading
              as="h2"
              size="64"
              className="z-10 mb-6 text-center"
            >
              Become a Leader in the Green Economy
            </Heading>
            <Text className="z-10 mb-10 text-center text-lg max-w-3xl mx-auto">
              Whether you are looking to de-risk your operations or seize the opportunities of the new climate economy, our team is ready to be your intelligence partner. Contact us to discuss your specific needs.
            </Text>
            <Button
              size="xl"
              asChild
              className="z-10 mx-auto max-w-min whitespace-nowrap"
            >
              <Link href="#contact">
                Schedule a Consultation <Icon icon="ArrowUpRight" />
              </Link>
            </Button>
          </div>
        </Container>
      </MotionTriggerWrapper>
    </section>
  );
}

export { CTABlock }