"use client";

import { useEffect, useMemo, useState } from "react";
import { Sparkles } from "lucide-react";
import { DEMO_IFRAME_SOURCES, SITE } from "@/lib/config";
import { getPortfolioMetaForDemoSrc } from "@/lib/portfolio";
import { DemoModal } from "@/components/demo/DemoModal";
import { RippleButton } from "@/components/effects/RippleButton";

export function PreviewButton() {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const [pick, setPick] = useState<(typeof DEMO_IFRAME_SOURCES)[number]>(DEMO_IFRAME_SOURCES[0]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const key = "wd-demo-idx";
      const stored = sessionStorage.getItem(key);
      if (stored !== null) {
        const i = Number(stored) % DEMO_IFRAME_SOURCES.length;
        setPick(DEMO_IFRAME_SOURCES[i]!);
        return;
      }
      const i = Math.floor(Math.random() * DEMO_IFRAME_SOURCES.length);
      sessionStorage.setItem(key, String(i));
      setPick(DEMO_IFRAME_SOURCES[i]!);
    } catch {
      setPick(DEMO_IFRAME_SOURCES[0]!);
    }
  }, []);

  const posterMeta = useMemo(() => getPortfolioMetaForDemoSrc(pick.src), [pick.src]);

  return (
    <>
      <div className="pointer-events-none fixed bottom-0 right-0 z-40 p-3 sm:p-6">
        <div
          className="pointer-events-auto relative inline-flex flex-col items-end"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div
            className={`mb-2 hidden max-w-[220px] overflow-hidden rounded-2xl border border-white/10 glass-panel shadow-lift transition-[opacity,transform] duration-300 sm:block ${hover ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}
            style={{ pointerEvents: "none" }}
          >
            <p className="px-3 py-2 text-[11px] leading-snug text-[var(--text-muted)]">
              <span className="font-semibold text-[var(--text-primary)]">{SITE.name}</span> · Demo aus dem
              Portfolio – so kann’s aussehen, wenn die Webseite steht.
            </p>
            <div className="relative h-24 w-full overflow-hidden border-t border-white/8 bg-[var(--bg-deep)]">
              <iframe
                title="Mini-Vorschau"
                src={pick.src}
                className="pointer-events-none h-[520px] w-[130%] origin-top-left scale-[0.2]"
                loading="lazy"
                tabIndex={-1}
              />
            </div>
          </div>

          <RippleButton variant="secondary" className="!px-3 !py-2.5 sm:!px-4 sm:!py-3" onClick={() => setOpen(true)}>
            <Sparkles className="h-4 w-4 text-accent-warm" aria-hidden />
            <span className="hidden sm:inline">Beispiel ansehen</span>
            <span className="sm:hidden">Demo</span>
          </RippleButton>
        </div>
      </div>

      <DemoModal
        open={open}
        onClose={() => setOpen(false)}
        title={pick.label}
        src={pick.src}
        posterImageUrl={posterMeta.imageUrl}
        imageAlt={posterMeta.imageAlt}
        loadIframeImmediately
      />
    </>
  );
}
