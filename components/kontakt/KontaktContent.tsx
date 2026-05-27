"use client";

import { Calendar, Mail, Phone } from "lucide-react";
import { PageHero } from "@/components/motion/PageHero";
import { RevealBlock } from "@/components/effects/RevealBlock";
import { GlowCard } from "@/components/effects/GlowCard";
import { RippleLink } from "@/components/effects/RippleButton";
import { ObfuscatedEmail } from "@/components/layout/ObfuscatedEmail";
import { BOOKING } from "@/lib/config";
import { LEGAL, phoneTelHref } from "@/lib/legal-config";

export function KontaktContent() {
  return (
    <>
      <PageHero eyebrow="Kontakt" title="Schreibt oder bucht">
        <p>
          <strong className="text-[var(--text-primary)]">Mail, Telefon</strong> oder{" "}
          <strong className="text-[var(--text-primary)]">kurzes Google Meet</strong> (Kalender). Wir
          sagen euch offen, wenn’s ein Akquise-Termin ist. Kein Show, kein muss. „Nein“ ist in
          Ordnung.
        </p>
      </PageHero>

      <section className="mx-auto max-w-[var(--page-max)] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <RevealBlock>
          <GlowCard id="erstgespraech" className="scroll-mt-28 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <Calendar className="mt-0.5 h-6 w-6 shrink-0 text-accent-warm" aria-hidden />
              <div>
                <h2 className="font-display text-xl font-semibold text-[var(--text-primary)] sm:text-2xl">
                  Kurzes Google Meet
                </h2>
                <p className="mt-2 max-w-2xl text-pretty text-sm leading-relaxed text-[var(--text-muted)] sm:text-[15px]">
                  Slot wählen – Calendly. Oder: E-Mail, Telefon, fertig.
                </p>
                <RippleLink href={BOOKING.url} external className="mt-6">
                  {BOOKING.ctaLabel}
                </RippleLink>
              </div>
            </div>
          </GlowCard>

          <div className="mt-10 space-y-4">
            <p className="section-eyebrow !tracking-[0.2em]">Direkt erreichen</p>
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <div className="glass-panel inline-flex items-center gap-3 px-5 py-4">
                <Mail className="h-5 w-5 text-accent-mint" aria-hidden />
                <ObfuscatedEmail className="link-subtle text-base font-semibold !text-[var(--text-primary)] underline-offset-4 hover:underline" />
              </div>
              <div className="glass-panel inline-flex items-center gap-3 px-5 py-4">
                <Phone className="h-5 w-5 text-accent-mint" aria-hidden />
                <a
                  href={phoneTelHref(LEGAL.phone)}
                  className="link-subtle text-base font-semibold !text-[var(--text-primary)] underline-offset-4 hover:underline"
                >
                  {LEGAL.phone}
                </a>
              </div>
            </div>
          </div>
        </RevealBlock>
      </section>
    </>
  );
}
