import { ScrollStageHero } from "@/components/signature/ScrollStageHero";
import { MarqueeBand } from "@/components/signature/MarqueeBand";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ServicesCards } from "@/components/home/ServicesCards";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { PackageTeaser } from "@/components/home/PackageTeaser";
import { TeamTeaser } from "@/components/home/TeamTeaser";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
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
