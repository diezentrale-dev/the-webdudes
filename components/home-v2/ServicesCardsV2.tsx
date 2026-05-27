"use client";

import { Smartphone, Wrench, ShieldCheck } from "lucide-react";
import { RevealBlock } from "@/components/effects/RevealBlock";

const CARDS = [
  {
    title: "Modern, mobil, mit Charakter",
    text: "Deine Seite passt zu deinem Laden. Nicht wie ein Baukasten von irgendwo. Auf dem Handy sieht sie genauso gut aus wie am Schreibtisch. Dort schauen die meisten Kunden zuerst hin.",
    icon: Smartphone,
    span: "bento-span-7 bento-row-2",
  },
  {
    title: "Wir pflegen, während du arbeitest",
    text: "Neue Bilder, geänderte Preise, ein Event ankündigen? Pro Monat ist mindestens eine Änderung drin. Schreib uns kurz, wir machen's. Innerhalb von 24 Stunden.",
    icon: Wrench,
    span: "bento-span-5",
  },
  {
    title: "DSGVO-konform. Ab 20 €/Monat.",
    text: "Impressum, Datenschutz, Cookies. Alles richtig eingebaut. 20 €/Monat, Hosting und Betreuung inklusive. Wir bleiben dabei, solange du willst.",
    icon: ShieldCheck,
    span: "bento-span-5",
  },
];

export function ServicesCardsV2() {
  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-[var(--page-max)] px-4 sm:px-6 lg:px-8">
        <RevealBlock>
          <p className="section-eyebrow">Leistungen</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-[var(--ink)] sm:text-4xl">
            Kein Baukasten. Kein Callcenter. Kein Bullshit.
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
