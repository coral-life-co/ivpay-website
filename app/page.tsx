import HomeHeroBlock from "@/components/blocks/home-hero-block";
import ChallengeBlock from "@/components/blocks/challenge-block";
import TechnologyBlock from "@/components/blocks/technology-block";
import SolutionsBlock from "@/components/blocks/solutions-block";
import CTABlock from "@/components/blocks/cta-block";


export default function Home() {
  return (
    <main className="flex flex-col">
      <HomeHeroBlock/>
      <ChallengeBlock/>
      <TechnologyBlock/>
      <SolutionsBlock/>
      <CTABlock/>
    </main>
  );
}