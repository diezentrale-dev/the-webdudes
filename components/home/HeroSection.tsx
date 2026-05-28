"use client";

import { ArrowRight, PlayCircle } from "lucide-react";
import { OrganicBlob } from "@/components/effects/OrganicBlob";
import { RippleLink } from "@/components/effects/RippleButton";
import { GlowCard } from "@/components/effects/GlowCard";
import { RevealBlock } from "@/components/effects/RevealBlock";
import { TrustBar } from "@/components/home/TrustBar";
import { useTilt } from "@/hooks/useTilt";

export function HeroSection() {
  const tiltRef = useTilt<HTMLDivElement>({ max: 8, scale: 1.01 });

  return (
    <section className="relative min-h-[min(100vh,920px)] overflow-hidden mesh-bg">
      <OrganicBlob className="absolute -left-24 top-20 h-80 w-80 opacity-70" tone="warm" />
      <OrganicBlob className="absolute -right-16 bottom-10 h-72 w-72 opacity-60" tone="mint" />

      <div className="relative z-10 mx-auto grid max-w-[var(--page-max)] gap-12 px-4 pb-24 pt-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10 lg:px-8 lg:pt-16">
        <div>
          <RevealBlock>
            <p className="section-eyebrow">Frankfurt · Lokale Betriebe · Web & Design</p>
          </RevealBlock>

          <RevealBlock delay={60}>
            <h1 className="mt-5 font-display text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-tight text-[var(--text-primary)]">
              Gute Arbeit verdient eine gute Webseite.{" "}
              <span className="bg-gradient-to-r from-accent-warm to-accent-mint bg-clip-text text-transparent">
                Wir schenken sie. Kostenlos.
              </span>
            </h1>
          </RevealBlock>

          <RevealBlock delay={120}>
            <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-[var(--text-muted)]">
              Friseur, Gastro, Handwerk, Kosmetik, Fachgeschäft: Oft seid ihr online kaum zu finden – oder
              eure Seite passt nicht mehr zu dem, was ihr täglich leistet. Wir bauen euch die Webseite
              fertig, zeigen sie im kurzen Google Meet, und schenken sie. Kein Kleingedrucktes.
            </p>
          </RevealBlock>

          <RevealBlock delay={180}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <RippleLink href="/leistungen">
                Leistungen & Kosten
                <ArrowRight className="h-4 w-4" aria-hidden />
              </RippleLink>
              <RippleLink href="/portfolio" variant="secondary">
                <PlayCircle className="h-4 w-4 text-accent-mint" aria-hidden />
                Portfolio ansehen
              </RippleLink>
            </div>
          </RevealBlock>

          <RevealBlock delay={240}>
            <TrustBar />
          </RevealBlock>
        </div>

        <RevealBlock delay={100} className="hidden lg:block">
          <div ref={tiltRef} className="tilt-card transition-transform duration-300 will-change-transform">
            <GlowCard className="p-8 lg:p-10">
              <p className="section-eyebrow">So startet ihr</p>
              <p className="mt-4 font-display text-3xl font-semibold leading-tight text-[var(--text-primary)]">
                Vorschau zuerst.
                <br />
                Entscheidung danach.
              </p>
              <ul className="mt-8 space-y-4 text-sm text-[var(--text-muted)]">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-warm" />
                  Wir bauen die Seite, bevor ihr zahlt
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-mint" />
                  Im Meet seht ihr das Ergebnis – live
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-warm" />
                  Projekt ab 99 € nur, wenn ihr wollt
                </li>
              </ul>
              <div className="mt-10 grid grid-cols-3 gap-3 border-t border-white/8 pt-8">
                {[
                  { v: "0 €", l: "Vorschau" },
                  { v: "99 €", l: "Projekt ab" },
                  { v: "3", l: "Schritte" },
                ].map((m) => (
                  <div key={m.l} className="text-center">
                    <p className="font-display text-2xl font-semibold tabular-nums text-accent-warm">{m.v}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-wider text-[var(--text-muted)]">{m.l}</p>
                  </div>
                ))}
              </div>
            </GlowCard>
          </div>
        </RevealBlock>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2" aria-hidden>
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
          <span className="scroll-hint-dot h-2 w-1 rounded-full bg-accent-warm/80" />
        </div>
      </div>
    </section>
  );
}
