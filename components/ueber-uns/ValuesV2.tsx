"use client";

import { HeartHandshake, MessageCircle, Wrench, ShieldCheck } from "lucide-react";
import { RevealBlock } from "@/components/effects/RevealBlock";
import { GlowCard } from "@/components/effects/GlowCard";
import { StaggerGroup } from "@/components/effects/StaggerGroup";

const VALUES = [
  {
    title: "20 €/Monat, alles drin",
    text: "Hosting, Updates, DSGVO, Ansprechpartner. Mindestens eine Änderung pro Monat inklusive. Kein Einmal-Bau-und-Tschüss.",
    icon: Wrench,
  },
  {
    title: "Vorschau im Meet, kostenlos",
    text: "Wir zeigen dir die fertige Seite live. Nicht per Mail, nicht als Download. Erst schauen, dann entscheiden. Nein ist okay.",
    icon: HeartHandshake,
  },
  {
    title: "Marcel oder Tiziano",
    text: "Du redest mit echten Leuten aus Frankfurt. Kein Callcenter, kein Ticket-Wirrwarr. Antwort in 24 Stunden.",
    icon: MessageCircle,
  },
  {
    title: "DSGVO ohne Panik",
    text: "Impressum, Datenschutz, Cookies. Alles sauber. Kein Angst-Verkauf, nur Klartext.",
    icon: ShieldCheck,
  },
];

export function ValuesV2() {
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
