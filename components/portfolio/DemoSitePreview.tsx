"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const IFRAME_WIDTH = 1440;
const IFRAME_HEIGHT = 900;

type DemoSitePreviewProps = {
  demoSrc: string;
  /** Anzeige in der Browser-Leiste */
  previewLabel: string;
  imageUrl?: string;
  imageAlt: string;
};

/**
 * Mini-Browser mit echter Demo-iframe-Vorschau (wie im schwebenden „Beispiel ansehen“-Button).
 */
export function DemoSitePreview({ demoSrc, previewLabel, imageUrl, imageAlt }: DemoSitePreviewProps) {
  const reduced = useReducedMotion();
  const viewportRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.3);

  useEffect(() => {
    if (reduced) return;
    const el = viewportRef.current;
    if (!el) return;

    const update = () => {
      const w = el.clientWidth;
      if (w > 0) setScale(w / IFRAME_WIDTH);
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [reduced]);

  if (reduced && imageUrl) {
    return (
      <div
        className="portfolio-demo-preview relative aspect-[4/3] overflow-hidden border border-[var(--rule)] shadow-[0_24px_48px_-28px_rgba(26,23,20,0.22)]"
        style={{ borderRadius: "var(--radius-md)" }}
      >
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    );
  }

  return (
    <div
      className="portfolio-demo-preview demo-browser shadow-[0_24px_48px_-28px_rgba(26,23,20,0.22)]"
      style={{ borderRadius: "var(--radius-md)" }}
    >
      <div className="demo-browser__chrome">
        <span className="demo-browser__dot demo-browser__dot--r" aria-hidden />
        <span className="demo-browser__dot demo-browser__dot--y" aria-hidden />
        <span className="demo-browser__dot demo-browser__dot--g" aria-hidden />
        <span className="demo-browser__url">{previewLabel}</span>
      </div>
      <div
        ref={viewportRef}
        className="demo-browser__viewport !aspect-[4/3] bg-[#111]"
        aria-hidden
      >
        <iframe
          src={demoSrc}
          title={imageAlt}
          width={IFRAME_WIDTH}
          height={IFRAME_HEIGHT}
          className="pointer-events-none absolute left-0 top-0 border-0 bg-[#faf7f2]"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
          loading="lazy"
          tabIndex={-1}
        />
        <div className="demo-browser__scanline" aria-hidden />
      </div>
    </div>
  );
}
