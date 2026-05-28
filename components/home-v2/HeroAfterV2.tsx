"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TrustBar } from "@/components/home/TrustBar";
import { MagneticWrap } from "@/components/effects/MagneticWrap";
import { V2_LINKS } from "@/lib/v2-routes";
import { RippleLink } from "@/components/effects/RippleButton";

/** Ersetzt den hero-after-Block unter dem ScrollStageHero mit der neuen Copy */
export function HeroAfterV2() {
  return (
    <section className="hero-after border-b border-[var(--rule)] bg-[var(--bg-paper)] px-4 pb-16 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[var(--page-max)]">
        <p className="max-w-lg text-pretty text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg">
          Du machst Nägel oder Haare. Wir machen Webseiten.{" "}
          <strong className="font-semibold text-[var(--ink)]">20 €/Monat</strong>, mindestens eine Änderung
          pro Monat inklusive. Hosting, Updates, fester Ansprechpartner. Kein Einmal-Bau-und-Tschüss.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <MagneticWrap>
            <RippleLink href={V2_LINKS.leistungen} className="btn-primary group">
              Leistungen & Kosten
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </RippleLink>
          </MagneticWrap>
          <MagneticWrap>
            <RippleLink href={V2_LINKS.portfolio} variant="secondary">
              Portfolio ansehen
            </RippleLink>
          </MagneticWrap>
        </div>
        <TrustBar />
      </div>
    </section>
  );
}
