"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PRICING_MODELS_V2, PRICING_DISCLAIMER_V2 } from "@/lib/packages-v2";
import { V2_LINKS } from "@/lib/v2-routes";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { FlipCard } from "@/components/effects/FlipCard";
import { TiltCard } from "@/components/effects/TiltCard";

export function PackageTeaserV2() {
  return (
    <section className="bg-[var(--bg-white)] py-24 sm:py-28">
      <div className="mx-auto max-w-[var(--page-max)] px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-eyebrow">Preise</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-[var(--ink)] sm:text-4xl">
              20 €/Monat. Nicht teure Einmalprojekte.
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-[var(--ink-soft)]">
              Vorschau kostenlos im Meet. Seite ab 99 € einmalig. Danach Betreuung mit mindestens einer Änderung pro Monat.
            </p>
          </div>
          <Link href={V2_LINKS.leistungen} className="btn-secondary shrink-0 self-start">
            Alle Modelle ansehen
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {PRICING_MODELS_V2.map((p) => (
            <StaggerItem key={p.id} className="min-h-[320px]">
              <TiltCard className="h-full min-h-[320px]">
                <FlipCard
                  className="h-full min-h-[320px]"
                  front={
                    <div className="flex h-full flex-col justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-soft)]">
                          {p.name}
                          {p.recommended ? (
                            <span className="ml-2 bg-[var(--accent)]/10 px-2 py-0.5 text-[10px] text-[var(--accent)]">
                              beliebt
                            </span>
                          ) : null}
                        </p>
                        <p className="mt-6 font-display text-4xl font-semibold tabular-nums text-[var(--ink)]">
                          {p.priceOnce}
                        </p>
                        {p.priceNote ? <p className="mt-1 text-xs text-[var(--ink-soft)]">{p.priceNote}</p> : null}
                        <p className="mt-4 text-sm text-[var(--ink-soft)]">{p.blurb}</p>
                      </div>
                      <p className="mt-8 text-xs text-[var(--forest)]">Tippen für Details →</p>
                    </div>
                  }
                  back={
                    <div className="flex h-full flex-col">
                      <p className="font-display text-lg font-semibold text-[var(--ink)]">Enthalten</p>
                      <ul className="mt-4 flex-1 space-y-2.5 text-sm text-[var(--ink-soft)]">
                        {p.features.map((f) => (
                          <li key={f} className="flex gap-2">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--forest)]" aria-hidden />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <Link href={p.ctaHref} className="btn-primary mt-6 text-center text-sm">
                        {p.ctaLabel}
                      </Link>
                    </div>
                  }
                />
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>

        <p className="mt-8 text-xs text-[var(--ink-soft)]">{PRICING_DISCLAIMER_V2}</p>
      </div>
    </section>
  );
}
