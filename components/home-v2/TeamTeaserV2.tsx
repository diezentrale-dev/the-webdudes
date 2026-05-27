"use client";

import Link from "next/link";
import { V2_LINKS } from "@/lib/v2-routes";
import { Users } from "lucide-react";
import { RevealBlock } from "@/components/effects/RevealBlock";

export function TeamTeaserV2() {
  return (
    <section className="border-y border-[var(--rule)] py-24 sm:py-28">
      <div className="mx-auto flex max-w-[var(--page-max)] flex-col items-start gap-10 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <RevealBlock>
          <p className="section-eyebrow inline-flex items-center gap-2">
            <Users className="h-4 w-4" aria-hidden />
            Zwei Leute. Kein Callcenter.
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-[var(--ink)] sm:text-4xl">
            Du redest mit Marcel oder Tiziano.
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-[var(--ink-soft)]">
            Nicht mit „dem Support-Team“. Wir kommen aus Frankfurt, kennen Tresen und Terminbücher. Und reden kein Agentur-Sprech.
          </p>
        </RevealBlock>
        <RevealBlock delay={100}>
          <Link href={V2_LINKS.ueberUns} className="btn-primary shrink-0">
            Wer wir sind
          </Link>
        </RevealBlock>
      </div>
    </section>
  );
}
