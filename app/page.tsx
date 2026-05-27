import { ScrollStageHero } from "@/components/signature/ScrollStageHero";
import { MarqueeBand } from "@/components/signature/MarqueeBand";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ServicesCards } from "@/components/home/ServicesCards";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { PackageTeaser } from "@/components/home/PackageTeaser";
import { TeamTeaser } from "@/components/home/TeamTeaser";
import { FinalCta } from "@/components/home/FinalCta";
import { V2RootRedirect } from "@/components/layout/V2RootRedirect";

export default function HomePage() {
  if (process.env.NEXT_PUBLIC_V2_ONLY === "true") {
    return <V2RootRedirect />;
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
