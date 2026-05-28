"use client";

import { MapPin, Palette, BadgeEuro } from "lucide-react";
import { RevealBlock } from "@/components/effects/RevealBlock";

const CARDS = [
  {
    title: "Wie im Laden, nur online",
    text: "Kontakt, Weg, Zeiten, Vertrauen – das, was eure Kundinnen wirklich brauchen. Mobil nutzbar, verständlich, ohne sinnlosen Technik-Schnickschnack.",
    icon: MapPin,
    span: "bento-span-7 bento-row-2",
  },
  {
    title: "Euer Betrieb, kein Baukasten-Look",
    text: "Farben, Texte, Bilder: die Seite soll zu eurem Laden passen, nicht zu einem generischen Layout.",
    icon: Palette,
    span: "bento-span-5",
  },
  {
    title: "Kosten: Vorschau gratis, Projekt ab 99 €",
    text: "Die Website-Vorschau ist bei uns kostenlos und unverbindlich. Für eine individuelle Seite — Design, Funktionen und Hosting nach Absprache — startet ihr bei ab 99 € einmalig; den genauen Betrag seht ihr im Angebot, bevor ihr zahlt.",
    icon: BadgeEuro,
    span: "bento-span-5",
  },
];

export function ServicesCards() {
  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-[var(--page-max)] px-4 sm:px-6 lg:px-8">
        <RevealBlock>
          <p className="section-eyebrow">Leistungen</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-[var(--ink)] sm:text-4xl">
            Was wir für euch tun
          </h2>
        </RevealBlock>

        <div className="bento-grid mt-14">
          {CARDS.map((c, i) => (
            <RevealBlock key={c.title} delay={i * 70} className={c.span}>
              <article className="editorial-card flex h-full flex-col p-7 sm:p-8">
                <c.icon className="h-9 w-9 text-[var(--accent)]" strokeWidth={1.25} aria-hidden />
                <h3 className="mt-6 font-display text-xl font-semibold text-[var(--ink)]">{c.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--ink-soft)]">{c.text}</p>
              </article>
            </RevealBlock>
          ))}
        </div>
      </div>
    </section>
  );
}
