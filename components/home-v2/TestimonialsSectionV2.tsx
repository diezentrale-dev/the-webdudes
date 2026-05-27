"use client";

import { Quote } from "lucide-react";
import { RevealBlock } from "@/components/effects/RevealBlock";

const TESTIMONIALS = [
  {
    quote:
      "Die haben einfach mal gemacht. Ich hab denen zwei Fotos von meinem Salon geschickt. Eine Woche später hab ich die fertige Seite gesehen. Hab gedacht, das gibt's nicht.",
    name: "Mia K.",
    role: "Nagelstudio · Frankfurt-Sachsenhausen",
  },
  {
    quote:
      "20 Euro im Monat. Ich hab gedacht, da kommt irgendwann die versteckte Rechnung. Ist nie gekommen. Die haben letzten Monat einfach meine neuen Speisekarten-Fotos eingebaut. Fertig.",
    name: "Giuseppe F.",
    role: "Pizzeria · Offenbach",
  },
  {
    quote:
      "Ich hatte Angst, nach dem Gespräch nie wieder was zu hören. Das Angebot kam noch am selben Abend. Stand drauf, was es kostet. Kein Kleingedrucktes.",
    name: "Kerim A.",
    role: "Friseursalon · Frankfurt-Nordend",
  },
] as const;

export function TestimonialsSectionV2() {
  return (
    <section className="border-y border-[var(--rule)] bg-[var(--bg-paper-deep)] py-24 sm:py-28">
      <div className="mx-auto max-w-[var(--page-max)] px-4 sm:px-6 lg:px-8">
        <RevealBlock>
          <p className="section-eyebrow">Stimmen</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-[var(--ink)] sm:text-4xl">
            Kein Marketing-Sprech. Echte Reaktionen.
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
