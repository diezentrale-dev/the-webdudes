"use client";

import { useState } from "react";
import { ExternalLink, Sparkles, Layers, Rocket } from "lucide-react";
import type { DemoModel } from "@/lib/portfolio-models";
import { DemoSitePreview } from "@/components/portfolio/DemoSitePreview";
import { DemoModal } from "@/components/demo/DemoModal";
import { Reveal } from "@/components/motion/Reveal";
import { GlowCard } from "@/components/effects/GlowCard";
import { RippleButton } from "@/components/effects/RippleButton";
import { TiltCard } from "@/components/effects/TiltCard";

const TIER_ICONS = {
  standard: Layers,
  premium: Sparkles,
  awesome: Rocket,
} as const;

function StatusBadge({ model }: { model: DemoModel }) {
  const styles =
    model.status === "live"
      ? "border-[var(--accent)]/30 bg-[var(--accent)]/8 text-[var(--accent)]"
      : model.status === "in-progress"
        ? "border-[var(--rule)] bg-[var(--bg-paper)] text-[var(--ink-soft)]"
        : "border-dashed border-[var(--rule)] bg-[var(--bg-paper)] text-[var(--ink-soft)]";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide ${styles}`}
    >
      {model.statusLabel}
    </span>
  );
}

function ModelVisual({ model }: { model: DemoModel }) {
  if (model.status === "placeholder") {
    return (
      <div
        className="relative flex aspect-[4/3] flex-col items-center justify-center gap-3 overflow-hidden border border-dashed border-[var(--rule)] bg-[linear-gradient(145deg,var(--bg-paper)_0%,rgba(26,23,20,0.04)_100%)] p-8 text-center"
        style={{ borderRadius: "var(--radius-md)" }}
      >
        <Rocket className="h-10 w-10 text-[var(--ink-soft)]/50" strokeWidth={1.25} aria-hidden />
        <p className="font-display text-lg font-semibold text-[var(--ink)]">In Planung</p>
        <p className="max-w-xs text-sm leading-relaxed text-[var(--ink-soft)]">
          Buchungen, Reservierungen und erweiterte Flows — wir klären den Umfang im Gespräch.
        </p>
      </div>
    );
  }

  if (model.demoSrc) {
    return (
      <DemoSitePreview
        demoSrc={model.demoSrc}
        previewLabel={model.previewLabel ?? "thewebdudes.de"}
        imageUrl={model.imageUrl}
        imageAlt={model.imageAlt ?? model.title}
      />
    );
  }

  return null;
}

function ModelRow({ model, reverse, index }: { model: DemoModel; reverse: boolean; index: number }) {
  const [demoOpen, setDemoOpen] = useState(false);
  const Icon = TIER_ICONS[model.id];
  const canOpenDemo = Boolean(model.demoSrc);

  return (
    <>
      <Reveal
        delay={index * 0.08}
        className={`grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12 ${reverse ? "lg:[direction:rtl] lg:*:[direction:ltr]" : ""}`}
      >
        <TiltCard max={6} className="will-change-transform">
          <ModelVisual model={model} />
        </TiltCard>

        <GlowCard className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <p className="section-eyebrow !mb-0 !tracking-[0.2em]">{model.tierLabel}</p>
            <StatusBadge model={model} />
          </div>
          <div className="mt-4 flex items-start gap-3">
            <span
              className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--rule)] bg-[var(--bg-paper)] text-[var(--accent)]"
              aria-hidden
            >
              <Icon className="h-4 w-4" strokeWidth={1.75} />
            </span>
            <div>
              <h2 className="font-display text-2xl font-semibold text-[var(--ink)] sm:text-3xl">
                {model.title}
              </h2>
              <p className="mt-1 text-sm font-medium text-[var(--accent)]">{model.subtitle}</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-[var(--ink-soft)] sm:text-[15px]">
            {model.summary}
          </p>
          <ul className="mt-5 space-y-2 border-t border-[var(--rule)] pt-5">
            {model.features.map((feature) => (
              <li
                key={feature}
                className="flex gap-2 text-sm leading-relaxed text-[var(--ink-soft)] before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-[var(--accent)] before:content-['']"
              >
                {feature}
              </li>
            ))}
          </ul>
          {canOpenDemo ? (
            <RippleButton variant="secondary" className="mt-6" onClick={() => setDemoOpen(true)}>
              Website ansehen
              <ExternalLink className="h-4 w-4" aria-hidden />
            </RippleButton>
          ) : (
            <p className="mt-6 text-sm text-[var(--ink-soft)]">
              {model.status === "placeholder"
                ? "Buchungs- und Reservierungs-Flows planen wir mit euch im Gespräch."
                : "Vorschau folgt — kurz im Gespräch klären wir den passenden Umfang."}
            </p>
          )}
        </GlowCard>
      </Reveal>

      {canOpenDemo ? (
        <DemoModal
          open={demoOpen}
          onClose={() => setDemoOpen(false)}
          title={model.title}
          src={model.demoSrc}
          posterImageUrl={model.imageUrl}
          loadIframeImmediately
        />
      ) : null}
    </>
  );
}

export function PortfolioModelsGrid({ models }: { models: DemoModel[] }) {
  return (
    <div className="flex flex-col gap-20 sm:gap-24">
      {models.map((model, i) => (
        <ModelRow key={model.id} model={model} reverse={i % 2 === 1} index={i} />
      ))}
    </div>
  );
}
