import { ScrollStageHero } from "@/components/signature/ScrollStageHero";
import { MarqueeBandV2 } from "@/components/home-v2/MarqueeBandV2";
import { ProcessSectionV2 } from "@/components/home-v2/ProcessSectionV2";
import { ServicesCardsV2 } from "@/components/home-v2/ServicesCardsV2";
import { TestimonialsSectionV2 } from "@/components/home-v2/TestimonialsSectionV2";
import { PackageTeaserV2 } from "@/components/home-v2/PackageTeaserV2";
import { TeamTeaserV2 } from "@/components/home-v2/TeamTeaserV2";
import { FinalCtaV2 } from "@/components/home-v2/FinalCtaV2";
import { V2_LINKS } from "@/lib/v2-routes";

export function HomeV2Content() {
  return (
    <>
      <ScrollStageHero
        headlineLines={[
          ["Deine", "Webseite."],
          ["Endlich", "fertig."],
          ["Für immer", "betreut."],
        ]}
        eyebrow="Frankfurt · ab 20 €/Monat"
        sidenote="Wir bauen deine Demo und zeigen sie dir im Meet. Kostenlos. Nicht per Mail, nicht als Download."
        afterText="Du machst Nägel, Haare oder Pizzen. Wir machen Webseiten und bleiben danach dabei. 20 €/Monat, eine Änderung inklusive. Kein Einmal-Bau-und-Tschüss."
        ctaPrimary="Demo im Meet sehen"
        ctaSecondary="Was kostet das?"
        ctaPrimaryHref={V2_LINKS.leistungen}
        ctaSecondaryHref={V2_LINKS.portfolio}
      />
      <MarqueeBandV2 />
      <ProcessSectionV2 />
      <ServicesCardsV2 />
      <TestimonialsSectionV2 />
      <PackageTeaserV2 />
      <TeamTeaserV2 />
      <FinalCtaV2 />
    </>
  );
}
