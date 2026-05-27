"use client";

import { Reveal } from "@/components/motion/Reveal";
import { OrganicBlob } from "@/components/effects/OrganicBlob";
import { ParallaxLayer } from "@/components/effects/ParallaxLayer";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
};

export function PageHero({ eyebrow, title, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--rule)] bg-[var(--bg-paper)] py-20 sm:py-24">
      <ParallaxLayer speed={0.12} className="absolute -right-16 -top-20 h-80 w-80 sm:-right-24">
        <OrganicBlob className="inset-0 h-full w-full opacity-50" tone="warm" />
      </ParallaxLayer>
      <ParallaxLayer speed={0.08} className="absolute -bottom-24 -left-16 h-64 w-64">
        <OrganicBlob className="inset-0 h-full w-full opacity-40" tone="mint" />
      </ParallaxLayer>

      <div className="relative mx-auto max-w-[var(--page-max)] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="section-eyebrow">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.06} y={32} blur>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold tracking-tight text-[var(--ink)] sm:text-5xl">
            {title}
          </h1>
        </Reveal>
        {children ? (
          <Reveal delay={0.12}>
            <div className="mt-6 max-w-4xl text-pretty text-lg leading-relaxed text-[var(--ink-soft)]">
              {children}
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
