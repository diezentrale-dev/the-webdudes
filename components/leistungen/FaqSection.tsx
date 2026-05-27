"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { RevealBlock } from "@/components/effects/RevealBlock";
import { StaggerGroup } from "@/components/effects/StaggerGroup";

const FAQ = [
  {
    q: "Fallen nach dem Projekt automatisch monatliche Kosten an?",
    a: "Nein. Solange ihr nichts Zusätzliches mit uns vereinbart, gibt es kein automatisches Abo. Die Demo-Webseite ist kostenlos und unverbindlich. Bei einem Projekt ab 99 € sind die einmaligen Leistungen im Angebot beschrieben – ohne versteckte Folgekosten.",
  },
  {
    q: "Wie läuft es, wenn wir eine individuelle Webseite wollen?",
    a: "Wir klären mit euch Design, Funktionen und Hosting und machen ein schriftliches Angebot. Los geht’s bei ab 99 € einmalig, der Endpreis richtet sich nach dem Umfang. Technische Einrichtung und Schaltung besprechen wir vorher – ihr müsst keine Menüs selbst durchklicken.",
  },
  {
    q: "Was ist bei der kostenlosen Demo-Webseite dabei?",
    a: "Ihr bekommt eine vollständige Demo im WebDudes-Stil: kostenlos, unverbindlich, mit Dateien zum Download für eure Unterlagen. Perfekt, um uns kennenzulernen. Ob ihr danach ein Projekt startet, entscheidet ihr ohne Druck.",
  },
  {
    q: "Später größerer Umbau – geht das?",
    a: "Ja. Dann nehmen wir uns Zeit, nennen Aufwand und Preis – ohne Bauchgefühl-Offerte.",
  },
  {
    q: "Wie schnell sehen wir was?",
    a: "Im Termin seht ihr die fertige Demo bzw. den aktuellen Stand eures Projekts – nicht nur eine leere Präsentation. Wie lange der Weg dorthin ist, sagen wir vorher.",
  },
  {
    q: "Was passiert im Calendly-Termin?",
    a: "Wir fragen, was ihr braucht, und sagen, was sinnvoll ist. Kein Unterschreiben unter Druck. Passt’s nicht, ist das okay.",
  },
  {
    q: "Und DSGVO / Rechtstexte?",
    a: "Wir sagen, was sinnvoll und nötig ist – sachlich, ohne Panik-Marketing. Rechtstexte stimmen wir mit euch ab, nicht heimlich hinter eurem Rücken.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mt-20 border-t border-white/8 pt-16">
      <RevealBlock>
        <h2 className="font-display text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">
          Häufige Fragen
        </h2>
        <p className="mt-3 max-w-2xl text-[var(--text-muted)]">
          Kurz hier, ausführlich im Gespräch – ohne Fachchinesisch.
        </p>
      </RevealBlock>

      <StaggerGroup className="mt-10 space-y-3">
        {FAQ.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q} className="glass-panel overflow-hidden">
              <button
                type="button"
                className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-[var(--text-primary)] transition-colors hover:bg-white/4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent-warm"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                {item.q}
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[var(--text-muted)] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden
                />
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              >
                <div className="overflow-hidden">
                  <p className="border-t border-white/6 px-5 pb-4 pt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </StaggerGroup>
    </section>
  );
}
