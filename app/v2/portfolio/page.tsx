import { PORTFOLIO_ITEMS } from "@/lib/portfolio";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { PageHero } from "@/components/motion/PageHero";

export const metadata = {
  title: "Portfolio & Live-Demos",
  description:
    "Drei echte Referenz-Demos im WebDudes-Stil. Kostenlose Demo für deinen Betrieb, unverbindlich.",
};

export default function PortfolioV2Page() {
  return (
    <div className="mesh-bg min-h-[50vh]">
      <PageHero eyebrow="Portfolio" title="So kann deine Seite aussehen">
        <p>
          Drei echte Referenz-Demos, die unsere Arbeit zeigen. Beispiel-Inhalte, echter Stil. Kein
          Baukasten-Look.
        </p>
        <p className="mt-4">Demo kostenlos. Du entscheidest danach. Kein Druck.</p>
      </PageHero>

      <section className="mx-auto max-w-[var(--page-max)] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <PortfolioGrid items={PORTFOLIO_ITEMS} />
      </section>
    </div>
  );
}
