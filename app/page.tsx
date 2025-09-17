import HomeHeroBlock from "@/components/blocks/home-hero-block";
import ChallengeBlock from "@/components/blocks/challenge-block";
import TechnologyBlock from "@/components/blocks/technology-block";
import SolutionsBlock from "@/components/blocks/solutions-block";
import { CTABlock } from "@/components/blocks/cta-block";
import OurProductsBlock from "@/components/blocks/home-our-products-block";
import EasySafeFastBlock from "@/components/blocks/home-easy-safe-fast-block";
import CoinsListBlock from "@/components/blocks/home-coins-list-block";
import TogetherWithUsBlock from "@/components/blocks/home-together-with-us-block";


export default function Home() {
  return (
    <main className="flex flex-col">
      <HomeHeroBlock/>
      <ChallengeBlock/>
      <TechnologyBlock/>
      <SolutionsBlock/>
            <OurProductsBlock/>
      <EasySafeFastBlock/>
      {/*
      <ReapTheBenfitsBlock/>
       */}
      <CoinsListBlock/>
      <TogetherWithUsBlock/>
      <CTABlock/>
    </main>
  );
}