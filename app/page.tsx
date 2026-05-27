import { ScrollStageHero } from "@/components/signature/ScrollStageHero";
import { MarqueeBand } from "@/components/signature/MarqueeBand";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ServicesCards } from "@/components/home/ServicesCards";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { PackageTeaser } from "@/components/home/PackageTeaser";
import { TeamTeaser } from "@/components/home/TeamTeaser";
import { FinalCta } from "@/components/home/FinalCta";
import { HomeV2Content } from "@/components/home-v2/HomeV2Content";
import V2Layout from "./v2/layout";

export default function HomePage() {
  if (process.env.NEXT_PUBLIC_V2_ONLY === "true") {
    return (
      <V2Layout>
        <HomeV2Content />
      </V2Layout>
    );
  }

  return (
    <>
      <ScrollStageHero />
      <MarqueeBand />
      <ProcessSection />
      <ServicesCards />
      <TestimonialsSection />
      <PackageTeaser />
      <TeamTeaser />
      <FinalCta />
    </>
  );
}
