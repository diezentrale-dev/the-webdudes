import { PRICING_MODELS_V2, PRICING_DISCLAIMER_V2 } from "@/lib/packages-v2";
import { PricingGrid } from "@/components/leistungen/PricingGrid";
import { FaqSectionV2 } from "@/components/leistungen/FaqSectionV2";
import { PageHero } from "@/components/motion/PageHero";

export const metadata = {
  title: "Leistungen & Preise",
  description:
    "Betreuung ab 20 €/Monat. Vorschau kostenlos im Meet. Webseite ab 99 € einmalig. Klare Preise, kein Kleingedrucktes.",
};

export default function LeistungenV2Page() {
  return (
    <div className="mesh-bg min-h-[50vh]">
      <PageHero eyebrow="Leistungen" title="20 €/Monat. Das ist unser Modell.">
        Keine teuren Agentur-Rechnungen. Du siehst deine Website-Vorschau kostenlos im Meet. Gefällt sie dir, geht
        deine Seite ab 99 € einmalig live. Danach halten wir alles am Laufen für 20 €/Monat. Pro Monat
        ist mindestens eine Änderung drin.
      </PageHero>

      <section className="mx-auto max-w-[var(--page-max)] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <PricingGrid models={PRICING_MODELS_V2} columns={3} />
        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-ink-700">{PRICING_DISCLAIMER_V2}</p>
        <FaqSectionV2 />
      </section>
    </div>
  );
}
