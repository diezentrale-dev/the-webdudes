"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import type { PricingModel } from "@/lib/packages";
import { RevealBlock } from "@/components/effects/RevealBlock";
import { GlowCard } from "@/components/effects/GlowCard";
import { RippleLink } from "@/components/effects/RippleButton";

export function PricingGrid({ models, columns = 2 }: { models: PricingModel[]; columns?: 2 | 3 }) {
  return (
    <div className={`grid gap-6 ${columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
      {models.map((m, i) => (
        <RevealBlock key={m.id} delay={i * 80}>
          <GlowCard
            as="article"
            className={`flex h-full flex-col p-8 [&_.glow-card__content]:flex [&_.glow-card__content]:h-full [&_.glow-card__content]:flex-col ${m.recommended ? "ring-1 ring-accent-warm/25 shadow-glow" : ""}`}
          >
            {m.recommended ? (
              <span className="mb-4 inline-flex w-fit rounded-full bg-accent-warm/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent-warm">
                Empfohlen
              </span>
            ) : null}
            <h2 className="font-display text-2xl font-semibold text-[var(--text-primary)]">{m.name}</h2>
            <p className="mt-4 font-display text-3xl font-semibold text-[var(--text-primary)]">{m.priceOnce}</p>
            {m.priceNote ? <p className="mt-1 text-sm text-[var(--text-muted)]">{m.priceNote}</p> : null}
            {m.blurb ? <p className="mt-4 text-sm text-[var(--text-muted)]">{m.blurb}</p> : null}
            <ul className="mt-6 flex-1 space-y-3 text-sm text-[var(--text-muted)]">
              {m.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-mint" aria-hidden />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            {m.ctaHref.startsWith("http") ? (
              <RippleLink href={m.ctaHref} external className="mt-8 text-center">
                {m.ctaLabel}
              </RippleLink>
            ) : (
              <Link href={m.ctaHref} className="btn-primary mt-8 text-center">
                {m.ctaLabel}
              </Link>
            )}
          </GlowCard>
        </RevealBlock>
      ))}
    </div>
  );
}
