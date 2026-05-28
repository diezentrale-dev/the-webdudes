import { PRICING_MODELS, PRICING_DISCLAIMER } from "@/lib/packages";
import { PricingGrid } from "@/components/leistungen/PricingGrid";
import { FaqSection } from "@/components/leistungen/FaqSection";
import { PageHero } from "@/components/motion/PageHero";

export const metadata = {
  title: "Leistungen & Preise",
  description:
    "Zwei Modelle: kostenlose Website-Vorschau oder individuelles Projekt ab 99 € einmalig – klar erklärt, ohne verstecktes Kleingedrucktes.",
};

export default function LeistungenPage() {
  return (
    <div className="mesh-bg min-h-[50vh]">
      <PageHero eyebrow="Leistungen" title="Zwei Wege zu deiner neuen Webseite">
        Du startest mit einer kostenlosen Vorschau im Meet oder gehst direkt ins Projekt – individuelle Webseite
        ab 99 €. Beides ist vorher klar erklärt, ohne Druck und ohne Kleingedrucktes.
      </PageHero>

      <section className="mx-auto max-w-[var(--page-max)] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <PricingGrid models={PRICING_MODELS} />
        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-ink-700">{PRICING_DISCLAIMER}</p>
        <FaqSection />
      </section>
    </div>
  );
}
