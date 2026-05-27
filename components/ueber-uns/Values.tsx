"use client";

import { HeartHandshake, MessageCircle, Zap, ShieldCheck } from "lucide-react";
import { RevealBlock } from "@/components/effects/RevealBlock";
import { GlowCard } from "@/components/effects/GlowCard";
import { StaggerGroup } from "@/components/effects/StaggerGroup";

const VALUES = [
  {
    title: "Demo bleibt kostenlos",
    text: "Die Demo-Webseite ist unverbindlich. Was ihr danach bucht – oder nicht – entscheidet ihr.",
    icon: HeartHandshake,
  },
  {
    title: "Erreichbar",
    text: "Wenn was klemmt, schreibt ihr – wir antworten. Kein Ticket-Wirrwarr.",
    icon: MessageCircle,
  },
  {
    title: "Im Termin: fertige Seite",
    text: "Kein „Konzept“-Monolog. Ihr seht, was gebaut ist.",
    icon: Zap,
  },
  {
    title: "Recht: sachlich, nicht schaurig",
    text: "Technik sauber, Texte mit euch abgestimmt. DSGVO ohne Angst-Verkauf.",
    icon: ShieldCheck,
  },
];

export function Values() {
  return (
    <div className="mt-20 border-t border-white/8 pt-16">
      <RevealBlock>
        <h2 className="font-display text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">
          Wofür wir stehen
        </h2>
      </RevealBlock>
      <StaggerGroup className="mt-10 grid w-full gap-5 sm:grid-cols-2">
        {VALUES.map((v) => (
          <GlowCard key={v.title} className="p-6 text-left">
            <v.icon className="h-8 w-8 text-accent-warm" strokeWidth={1.25} aria-hidden />
            <h3 className="mt-4 font-display text-lg font-semibold text-[var(--text-primary)]">{v.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{v.text}</p>
          </GlowCard>
        ))}
      </StaggerGroup>
    </div>
  );
}
