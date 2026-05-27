"use client";

import { ExternalLink } from "lucide-react";
import { RevealBlock } from "@/components/effects/RevealBlock";
import { GlowCard } from "@/components/effects/GlowCard";
import { cn } from "@/lib/cn";

type Props = {
  initials: string;
  name: string;
  role: string;
  bio: string;
  accent: "teal" | "blue" | "green";
  portfolioUrl?: string;
  loopVariant: 1 | 2 | 3;
  /** Gleich hohe Karten nebeneinander */
  layout?: "row" | "stacked";
};

const ACCENT_RING: Record<Props["accent"], string> = {
  teal: "from-accent-mint/40 to-accent-warm/30",
  blue: "from-accent-warm/40 to-accent-mint/20",
  green: "from-accent-mint/30 to-accent-warm/25",
};

export function TeamMemberCard({
  initials,
  name,
  role,
  bio,
  accent,
  portfolioUrl,
  loopVariant,
  layout = "row",
}: Props) {
  void loopVariant;

  if (layout === "stacked") {
    return (
      <RevealBlock as="article" className="h-full">
        <GlowCard className="h-full [&_.glow-card__content]:flex [&_.glow-card__content]:h-full [&_.glow-card__content]:flex-col">
          <div className="flex flex-1 flex-col p-8">
            <div
              className={cn(
                "flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br p-[2px]",
                ACCENT_RING[accent]
              )}
            >
              <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-[var(--bg-deep)]">
                <span className="font-display text-2xl font-semibold text-[var(--text-primary)]">{initials}</span>
              </div>
            </div>
            <h2 className="mt-6 font-display text-2xl font-semibold text-[var(--text-primary)]">{name}</h2>
            <p className="mt-1 text-sm font-medium text-accent-warm">{role}</p>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">{bio}</p>
            {portfolioUrl ? (
              <a
                href={portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-subtle mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold !text-accent-mint"
              >
                Portfolio ansehen
                <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            ) : (
              <span className="mt-auto block h-5 pt-6" aria-hidden />
            )}
          </div>
        </GlowCard>
      </RevealBlock>
    );
  }

  return (
    <RevealBlock as="article" className="h-full">
      <GlowCard className="flex h-full flex-col p-8">
        <div className="flex flex-1 flex-col gap-6 sm:flex-row sm:items-start">
          <div
            className={cn(
              "flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br p-[2px]",
              ACCENT_RING[accent]
            )}
          >
            <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-[var(--bg-deep)]">
              <span className="font-display text-2xl font-semibold text-[var(--text-primary)]">{initials}</span>
            </div>
          </div>
          <div className="flex flex-1 flex-col">
            <h2 className="font-display text-2xl font-semibold text-[var(--text-primary)]">{name}</h2>
            <p className="mt-1 text-sm font-medium text-accent-warm">{role}</p>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">{bio}</p>
            {portfolioUrl ? (
              <a
                href={portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-subtle mt-6 inline-flex items-center gap-2 text-sm font-semibold !text-accent-mint"
              >
                Portfolio ansehen
                <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            ) : (
              <span className="mt-6 block h-5" aria-hidden />
            )}
          </div>
        </div>
      </GlowCard>
    </RevealBlock>
  );
}
