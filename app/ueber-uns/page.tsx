import { CORE_NARRATIVE } from "@/lib/config";
import { TeamMemberCard } from "@/components/ueber-uns/TeamMemberCard";
import { Values } from "@/components/ueber-uns/Values";
import { PageHero } from "@/components/motion/PageHero";

export const metadata = {
  title: "Über uns",
  description:
    "Kleine Betriebe, eine Webseite, die zu euch passt – geschenkt, in normalem Deutsch erklärt, ohne Fachjargon-Aufguss.",
};

export default function UeberUnsPage() {
  return (
    <div className="relative mesh-bg min-h-[50vh]">
      <PageHero eyebrow="Über uns" title="Läden wie euer sichtbar online">
        <p>
          Ketten und Plattformen sind laut. Der Friseur mit der ruhigen Hand, der Koch vom Markt, der
          Handwerker, der am Telefon ehrlich sagt, wann er Zeit hat: Oft seid ihr leiser online, als
          ihr’s verdient. Wir wollen, dass euer Betrieb im Netz genauso rüberkommt wie im Laden: klar,
          mit Gesicht, ohne Glanzfolie.
        </p>
        <p className="mt-4">{CORE_NARRATIVE}</p>
      </PageHero>

      <section className="mx-auto max-w-[var(--page-max)] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="font-display text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">Team</h2>
        <p className="mt-3 max-w-4xl text-pretty text-[var(--text-muted)]">
          Keine Stock-Fotos, nur Initialen. Wer dahinter sitzt, trefft ihr im Termin.
        </p>
        <div className="mx-auto mt-12 grid w-full grid-cols-1 gap-8 text-left sm:grid-cols-2">
          <TeamMemberCard
            initials="MT"
            name="Marcel Theis"
            role="Geschäftsführung"
            bio="Marcel treibt den Laden, redet mit euch und sorgt dafür, dass alles bis zum Livegang läuft."
            accent="teal"
            portfolioUrl="https://marceltheis.com/"
            loopVariant={1}
          />
          <TeamMemberCard
            initials="TR"
            name="Tiziano Reichl"
            role="Technische Umsetzung"
            bio="Tiziano sorgt dafür, dass alles technisch sauber und schnell läuft – damit ihr euch ums Wesentliche kümmern könnt."
            accent="blue"
            portfolioUrl="https://tcr-galaxy-portfolio.vercel.app/"
            loopVariant={2}
          />
          <div className="flex w-full justify-center sm:col-span-2">
            <div className="w-full sm:max-w-[calc(50%-1rem)]">
              <TeamMemberCard
                initials="NM"
                name="Niklas Mirau"
                role="Verwaltung & Back-Office"
                bio="Niklas hält Abläufe, Organisation und den administrativen Teil im Griff – damit im Hintergrund alles passt und ihr euch auf die Arbeit mit Kundinnen und Kunden konzentrieren könnt."
                accent="green"
                loopVariant={3}
              />
            </div>
          </div>
        </div>
        <Values />
      </section>
    </div>
  );
}
