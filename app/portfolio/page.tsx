import { PORTFOLIO_ITEMS } from "@/lib/portfolio";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { PageHero } from "@/components/motion/PageHero";

export const metadata = {
  title: "Portfolio & Live-Demos",
  description:
    "Drei echte Referenz-Demos – Beispiel-Inhalte, Stil von The WebDudes. Demo kostenlos für euch, null Verpflichtung.",
};

export default function PortfolioPage() {
  return (
    <div className="mesh-bg min-h-[50vh]">
      <PageHero eyebrow="Portfolio" title="Seht was wir für euch bauen können">
        <p>
          Drei echte Referenz-Demos, die unsere Arbeit zeigen. Die Inhalte sind Beispiele, keine
          Live-Kunden – aber der Stil ist echt WebDudes.
        </p>
        <p className="mt-4">Die Demo ist kostenlos für euch. Null Verpflichtung.</p>
      </PageHero>

      <section className="mx-auto max-w-[var(--page-max)] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <PortfolioGrid items={PORTFOLIO_ITEMS} />
      </section>
    </div>
  );
}
