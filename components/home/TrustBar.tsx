"use client";

import { Shield, BadgeCheck, Sparkles } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const TRUST_ITEMS = [
  { icon: Shield, label: "Klar & ohne Druck" },
  { icon: BadgeCheck, label: "Angebot vor Zahlung" },
  { icon: Sparkles, label: "Vorschau kostenlos" },
] as const;

export function TrustBar() {
  return (
    <div className="mt-10 border-t border-[var(--rule)] pt-8">
      <Stagger className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8" stagger={0.07}>
        {TRUST_ITEMS.map(({ icon: Icon, label }) => (
          <StaggerItem key={label}>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--ink-soft)]">
              <Icon className="h-4 w-4 shrink-0 text-[var(--forest)]" strokeWidth={1.75} aria-hidden />
              {label}
            </span>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}
