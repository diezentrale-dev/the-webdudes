import { TeamMemberCard } from "@/components/ueber-uns/TeamMemberCard";
import { ValuesV2 } from "@/components/ueber-uns/ValuesV2";
import { PageHero } from "@/components/motion/PageHero";

export const metadata = {
  title: "Über uns",
  description:
    "The WebDudes aus Frankfurt: Webseiten für lokale Betriebe, ab 20 €/Monat mit Betreuung. Marcel und Tiziano, kein Callcenter.",
};

export default function UeberUnsV2Page() {
  return (
    <div className="relative mesh-bg min-h-[50vh]">
      <PageHero eyebrow="Über uns" title="Du machst Nägel. Wir machen Webseiten.">
        <p>
          Ketten und Plattformen sind laut. Der Friseur mit der ruhigen Hand, das Nagelstudio um die
          Ecke, die Pizzeria, die jeder kennt: Oft seid ihr online leiser, als ihr&apos;s verdient. Wir
          bauen die Seite, die zu eurem Laden passt. Danach läuft alles über 20 €/Monat Betreuung.
        </p>
        <p className="mt-4">
          Kein Einmal-Bau-und-Tschüss. Keine teuren Agentur-Rechnungen. Kein Baukasten, den du
          selbst pflegen musst. Du redest mit Marcel oder Tiziano. Aus Frankfurt.
        </p>
      </PageHero>

      <section className="mx-auto max-w-[var(--page-max)] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="font-display text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">Team</h2>
        <p className="mt-3 max-w-4xl text-pretty text-[var(--text-muted)]">
          Keine Stock-Fotos, nur Initialen. Wer dahinter sitzt, triffst du im Termin.
        </p>
        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2">
          <TeamMemberCard
            initials="MT"
            name="Marcel Theis"
            role="Geschäftsführung"
            bio="Marcel treibt den Laden, redet mit dir und sorgt dafür, dass alles bis zum Livegang läuft."
            accent="teal"
            portfolioUrl="https://marceltheis.com/"
            loopVariant={1}
            layout="stacked"
          />
          <TeamMemberCard
            initials="TR"
            name="Tiziano Reichl"
            role="Technische Umsetzung"
            bio="Tiziano sorgt dafür, dass alles technisch sauber und schnell läuft. Damit du dich ums Wesentliche kümmern kannst."
            accent="blue"
            portfolioUrl="https://tcr-galaxy-portfolio.vercel.app/"
            loopVariant={2}
            layout="stacked"
          />
        </div>
        <ValuesV2 />
      </section>
    </div>
  );
}
