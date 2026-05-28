"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { RevealBlock } from "@/components/effects/RevealBlock";
import { StaggerGroup } from "@/components/effects/StaggerGroup";

const FAQ = [
  {
    q: "Was kostet das Monatspaket wirklich?",
    a: "20 € pro Monat. Hosting, Updates, DSGVO und ein fester Ansprechpartner. Pro Monat ist mindestens eine Änderung drin, manchmal auch zwei, je nach Umfang. Kein Kleingedrucktes.",
  },
  {
    q: "Muss ich das Abo abschließen?",
    a: "Wenn deine Seite live geht, läuft sie über das Monatspaket. Das ist unser Modell. Du startest mit einer kostenlosen Vorschau im Meet. Gefällt sie dir, geht die Seite ab 99 € einmalig online. Danach 20 €/Monat. Ohne Mindestlaufzeit.",
  },
  {
    q: "Was ist bei der kostenlosen Vorschau dabei?",
    a: "Wir bauen eine fertige Website-Vorschau für deinen Betrieb und zeigen sie dir im kurzen Google Meet. Nicht per Mail, nicht als Download. Du siehst echte Arbeit, keine Slides. Unverbindlich.",
  },
  {
    q: "Wie schnell kommen Änderungen online?",
    a: "Schreib uns kurz: neues Bild, geänderte Öffnungszeiten, Event ankündigen. Pro Monat ist mindestens eine Änderung inklusive. Wir melden uns innerhalb von 24 Stunden.",
  },
  {
    q: "Ich hab schon eine Webseite. Geht nur Betreuung?",
    a: "Nur wenn wir die Seite gebaut haben. Das Nur-Betreuung-Paket für 20 €/Monat gilt ausschließlich für Webseiten von uns. Dann halten wir alles am Laufen: Texte, Bilder, Hosting, Updates.",
  },
  {
    q: "Und DSGVO / Rechtstexte?",
    a: "Impressum, Datenschutz, Cookies: alles richtig eingebaut. Keine Abmahnangst, kein Panik-Marketing. Texte stimmen wir mit dir ab.",
  },
];

export function FaqSectionV2() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mt-20 border-t border-white/8 pt-16">
      <RevealBlock>
        <h2 className="font-display text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">
          Häufige Fragen
        </h2>
        <p className="mt-3 max-w-2xl text-[var(--text-muted)]">
          Kurz hier, ausführlich im Gespräch. Ohne Fachchinesisch.
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
