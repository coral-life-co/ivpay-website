import { Container } from "@/components/layouts/container";
import { Button } from "@/components/ui/button";
import { HeroLayout } from "@/components/layouts/hero-layout";
import { MotionTriggerWrapper } from "@/components/motion/motionTriggerWrapper";
import { Icon } from "@/components/elements/icon";
import Link from "next/link";

export default function HomeHeroBlock() {
  return (
    <section
      id="home-hero-block"
      className="bg-gradient-to-b from-transparent to-blue-94"
    >
      <MotionTriggerWrapper>
        <HeroLayout
          heading={
            <>
              The Intelligence Layer
              <br />
              for ASEAN's Green Economy
            </>
          }
          heroImage={{ src: "/hero-pos.png", alt: "CarbonNexus Intelligence Platform" }}
          action={
            <>
              <Button asChild size="lg" variant="default">
                <Link href="#solutions">
                  Explore Our Solutions <Icon icon="ArrowUpRight" />
                </Link>
              </Button>
            </>
          }
          text={
            <>
              CarbonNexus provides verifiable data for climate finance, compliance, and resilience—powered by our proprietary Klimata™ Intelligence Engine.
            </>
          }
        />
      </MotionTriggerWrapper>
    </section>
  );
}
