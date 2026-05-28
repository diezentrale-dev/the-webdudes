"use client";

import { Quote } from "lucide-react";
import { SHOW_TESTIMONIALS } from "@/lib/config";
import { RevealBlock } from "@/components/effects/RevealBlock";

const TESTIMONIALS = [
  {
    quote:
      "Endlich eine Seite, die aussieht wie unser Laden – nicht wie ein Baukasten von 2015.",
    name: "Inhaberin",
    role: "Nagelstudio · Frankfurt",
  },
  {
    quote:
      "Die Vorschau war wirklich kostenlos. Im Meet haben wir die fertige Seite gesehen, nicht nur Slides.",
    name: "Betreiber",
    role: "Pizzeria · Umgebung",
  },
  {
    quote:
      "Kein Druck nach dem Termin. Angebot war klar, bevor irgendwas unterschrieben wurde.",
    name: "Inhaber",
    role: "Friseursalon · Rhein-Main",
  },
] as const;

export function TestimonialsSection() {
  if (!SHOW_TESTIMONIALS) return null;

  return (
    <section className="border-y border-[var(--rule)] bg-[var(--bg-paper-deep)] py-24 sm:py-28">
      <div className="mx-auto max-w-[var(--page-max)] px-4 sm:px-6 lg:px-8">
        <RevealBlock>
          <p className="section-eyebrow">Stimmen</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-[var(--ink)] sm:text-4xl">
            Was Betriebe sagen – ehrlich, ohne Marketing-Sprech
          </h2>
        </RevealBlock>

        <RevealBlock delay={80} className="mt-12">
          <div className="snap-strip pb-2 lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible">
            {TESTIMONIALS.map((t) => (
              <blockquote key={t.role} className="editorial-card flex h-full flex-col p-7 lg:!flex-none">
                <Quote className="h-7 w-7 text-[var(--accent)]/40" strokeWidth={1.25} aria-hidden />
                <p className="mt-5 flex-1 text-sm leading-relaxed text-[var(--ink-soft)] italic">
                  {`„${t.quote}"`}
                </p>
                <footer className="mt-6 border-t border-[var(--rule)] pt-4">
                  <cite className="not-italic">
                    <span className="block text-sm font-semibold text-[var(--ink)]">{t.name}</span>
                    <span className="mt-0.5 block text-xs text-[var(--ink-soft)]">{t.role}</span>
                  </cite>
                </footer>
              </blockquote>
            ))}
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}
