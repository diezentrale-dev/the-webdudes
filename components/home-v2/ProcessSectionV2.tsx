"use client";

import { MessageCircle, Wand2, ThumbsUp } from "lucide-react";
import { RevealBlock } from "@/components/effects/RevealBlock";

const STAGES = [
  {
    n: "01",
    title: "Du meldest dich, wie's dir passt",
    text: "Anruf, WhatsApp, Mail, Sprachnachricht. Alles okay. Kein Formular, das du 20 Minuten ausfüllst. Wir melden uns persönlich zurück. Marcel oder Tiziano. Nicht \"das Support-Team\".",
    icon: MessageCircle,
  },
  {
    n: "02",
    title: "Wir bauen die Demo. Du siehst sie im Meet.",
    text: "Kein Vorgespräch, kein Konzept-PDF, kein \"wir schicken dir mal was zu\". Wir bauen und zeigen dir die fertige Seite live im kurzen Google Meet. Kostenlos. Unverbindlich.",
    icon: Wand2,
  },
  {
    n: "03",
    title: "Ja oder Nein. Danach 20 €/Monat.",
    text: "Gefällt dir die Demo, geht deine Seite ab 99 € einmalig live. Danach läuft alles über das Monatspaket: 20 €/Monat, Hosting, Updates, mindestens eine Änderung pro Monat. Wenn nicht: kein Druck, kein Nachhaken.",
    icon: ThumbsUp,
  },
];

export function ProcessSectionV2() {
  return (
    <section className="border-b border-[var(--rule)] bg-[var(--bg-white)] py-24 sm:py-28">
      <div className="mx-auto max-w-[var(--page-max)] px-4 sm:px-6 lg:px-8">
        <RevealBlock>
          <p className="section-eyebrow">Melden → Demo sehen → du entscheidest</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-[var(--ink)] sm:text-4xl">
            Drei Schritte. Kein Sales-Pitch.
          </h2>
          <p className="mt-4 max-w-xl text-[var(--ink-soft)]">
            Wir zeigen dir die fertige Demo im Meet. Erst danach entscheidest du.
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
