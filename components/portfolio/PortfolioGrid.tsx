"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { PortfolioItem } from "@/lib/portfolio";
import { DemoModal } from "@/components/demo/DemoModal";
import { Reveal } from "@/components/motion/Reveal";
import { GlowCard } from "@/components/effects/GlowCard";
import { RippleButton } from "@/components/effects/RippleButton";
import { TiltCard } from "@/components/effects/TiltCard";

function PortfolioItemRow({ item, reverse, index }: { item: PortfolioItem; reverse: boolean; index: number }) {
  const [active, setActive] = useState<PortfolioItem | null>(null);

  return (
    <>
      <Reveal
        delay={index * 0.08}
        className={`grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12 ${reverse ? "lg:[direction:rtl] lg:*:[direction:ltr]" : ""}`}
      >
        <TiltCard max={6} className="will-change-transform">
          <div className="relative aspect-[4/3] overflow-hidden border border-[var(--rule)] shadow-[0_24px_48px_-28px_rgba(26,23,20,0.22)]" style={{ borderRadius: "var(--radius-md)" }}>
            <Image
              src={item.imageUrl}
              alt={item.imageAlt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </TiltCard>

        <GlowCard className="p-6 sm:p-8">
          <p className="section-eyebrow !tracking-[0.2em]">{item.industry}</p>
          <h2 className="mt-3 font-display text-2xl font-semibold text-[var(--ink)] sm:text-3xl">
            {item.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--ink-soft)] sm:text-[15px]">
            {item.styleDescription}
          </p>
          <RippleButton variant="secondary" className="mt-6" onClick={() => setActive(item)}>
            Live-Demo öffnen
            <ExternalLink className="h-4 w-4" aria-hidden />
          </RippleButton>
        </GlowCard>
      </Reveal>

      <DemoModal
        open={active !== null}
        onClose={() => setActive(null)}
        title={active?.title ?? ""}
        src={active?.demoSrc}
        posterImageUrl={active?.demoSrc ? active.imageUrl : undefined}
        imageUrl={active && !active.demoSrc ? active.imageUrl : undefined}
        imageAlt={active?.imageAlt}
        footnote="Referenz: Stil und Layout. Eine individuelle Webseite mit echten Inhalten planen wir als Projekt ab 99 € – immer vorher im Angebot besprochen."
        loadIframeImmediately
      />
    </>
  );
}

export function PortfolioGrid({ items }: { items: PortfolioItem[] }) {
  return (
    <div className="flex flex-col gap-20 sm:gap-24">
      {items.map((item, i) => (
        <PortfolioItemRow key={item.id} item={item} reverse={i % 2 === 1} index={i} />
      ))}
    </div>
  );
}
