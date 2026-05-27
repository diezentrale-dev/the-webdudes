"use client";

import { Search, Wand2, Rocket } from "lucide-react";
import { RevealBlock } from "@/components/effects/RevealBlock";

const STAGES = [
  {
    n: "01",
    title: "Erstkontakt",
    text: "Oft fehlt eine Webseite, die zu eurem Betrieb passt – oder es gibt keine, die auffindbar ist. Wir melden uns, sagen offen, was wir tun, und fragen, ob’s für euch stimmig ist. Kein Umschweifen.",
    icon: Search,
  },
  {
    n: "02",
    title: "Im kurzen Meet",
    text: "Zuerst bauen wir, dann zeigen wir: Im kurzen Google Meet seht ihr die Demo-Webseite. Kostenlos, unverbindlich. Kein Verkaufs-Show.",
    icon: Wand2,
  },
  {
    n: "03",
    title: "Ihr entscheidet",
    text: "Die Demo bleibt kostenlos. Für eine individuelle Live-Webseite reden wir über ein Projekt ab 99 € – angepasst an euren Laden. Oder ihr behaltet nur die Demo: ohne Zwang.",
    icon: Rocket,
  },
];

export function ProcessSection() {
  return (
    <section className="border-b border-[var(--rule)] bg-[var(--bg-white)] py-24 sm:py-28">
      <div className="mx-auto max-w-[var(--page-max)] px-4 sm:px-6 lg:px-8">
        <RevealBlock>
          <p className="section-eyebrow">Kontakt → Meet → ihr entscheidet</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-[var(--ink)] sm:text-4xl">
            Drei Schritte, ohne Mysterium
          </h2>
          <p className="mt-4 max-w-xl text-[var(--ink-soft)]">
            Erstkontakt, dann seht ihr im Meet die fertige Seite. Alles weitere ist freiwillig.
          </p>
        </RevealBlock>

        <div className="process-timeline mt-16 max-w-3xl">
          {STAGES.map((s, i) => (
            <RevealBlock key={s.n} as="article" className="process-step" delay={i * 80}>
              <article className="editorial-card p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-display text-5xl leading-none text-[var(--accent)]/90">{s.n}</span>
                  <s.icon className="h-8 w-8 text-[var(--forest)]" strokeWidth={1.25} aria-hidden />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-[var(--ink)] sm:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)] sm:text-base">{s.text}</p>
              </article>
            </RevealBlock>
          ))}
        </div>
      </div>
    </section>
  );
}
