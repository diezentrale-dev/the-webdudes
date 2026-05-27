"use client";

import Link from "next/link";
import { Users } from "lucide-react";
import { RevealBlock } from "@/components/effects/RevealBlock";

export function TeamTeaser() {
  return (
    <section className="border-y border-[var(--rule)] py-24 sm:py-28">
      <div className="mx-auto flex max-w-[var(--page-max)] flex-col items-start gap-10 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <RevealBlock>
          <p className="section-eyebrow inline-flex items-center gap-2">
            <Users className="h-4 w-4" aria-hidden />
            Kein PowerPoint-Team
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-[var(--ink)] sm:text-4xl">
            Wer das macht
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-[var(--ink-soft)]">
            Tresen, Terminbuch, Werkstatt: uns ist klar, wie euer Alltag aussieht. Wir sprechen und
            schreiben so – ohne Agentur-Sprech.
          </p>
        </RevealBlock>
        <RevealBlock delay={100}>
          <Link href="/ueber-uns" className="btn-primary shrink-0">
            Uns kennenlernen
          </Link>
        </RevealBlock>
      </div>
    </section>
  );
}
