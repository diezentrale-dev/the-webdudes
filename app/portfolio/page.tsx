import { DEMO_MODELS } from "@/lib/portfolio-models";
import { PortfolioModelsGrid } from "@/components/portfolio/PortfolioModelsGrid";
import { PageHero } from "@/components/motion/PageHero";

export const metadata = {
  title: "Portfolio · Unsere drei Modelle",
  description:
    "Standard, Premium und Awesome: drei Stufen für eure Webseite — von der klaren Landingpage bis zu Buchung und Reservierung.",
};

export default function PortfolioPage() {
  return (
    <div className="mesh-bg min-h-[50vh]">
      <PageHero eyebrow="Portfolio" title="Drei Modelle. Ein Ziel: eure perfekte Seite.">
        <p>
          Nicht jeder Betrieb braucht dasselbe. Deshalb zeigen wir drei klar getrennte Stufen — von
          der schlanken Landingpage bis zur Seite mit Buchung und Online-Reservierung.
        </p>
        <p className="mt-4">
          <strong className="font-medium text-[var(--ink)]">Standard</strong> ist eine fokussierte
          Landingpage. <strong className="font-medium text-[var(--ink)]">Premium</strong> bringt
          Wirkung, Effekte und smarte Formulare.{" "}
          <strong className="font-medium text-[var(--ink)]">Awesome</strong> ergänzt alles um echte
          Geschäftsfunktionen wie Termine und Reservierungen.
        </p>
      </PageHero>

      <section className="mx-auto max-w-[var(--page-max)] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <PortfolioModelsGrid models={DEMO_MODELS} />
      </section>
    </div>
  );
}
