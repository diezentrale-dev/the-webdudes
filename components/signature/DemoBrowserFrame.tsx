"use client";

import Image from "next/image";
import { cn } from "@/lib/cn";

export type DemoSlide = {
  label: string;
  imageUrl: string;
  imageAlt: string;
  demoSrc?: string;
};

type Props = {
  slides: DemoSlide[];
  activeIndex: number;
  /** GSAP steuert Opacity — keine CSS-Transitions */
  scrub?: boolean;
  className?: string;
};

/** Browser chrome — echte Demo-iframes oder Poster-Bilder, scroll-gesteuert. */
export function DemoBrowserFrame({ slides, activeIndex, scrub = false, className }: Props) {
  return (
    <div className={cn("demo-browser", className)}>
      <div className="demo-browser__chrome">
        <span className="demo-browser__dot demo-browser__dot--r" />
        <span className="demo-browser__dot demo-browser__dot--y" />
        <span className="demo-browser__dot demo-browser__dot--g" />
        <span className="demo-browser__url">
          {slides[activeIndex]?.label ?? "thewebdudes.de/demo"}
        </span>
      </div>
      <div className={cn("demo-browser__viewport", scrub && "demo-browser__viewport--scrub")}>
        {slides.map((slide, i) => (
          <div
            key={slide.label}
            className={cn(
              "demo-browser__slide",
              !scrub && i === activeIndex && "demo-browser__slide--active"
            )}
          >
            <div className="demo-browser__slide-inner">
              {slide.demoSrc ? (
                <iframe
                  src={slide.demoSrc}
                  title={slide.imageAlt}
                  className="demo-browser__iframe"
                  loading={i === 0 ? "eager" : "lazy"}
                  tabIndex={-1}
                />
              ) : (
                <Image
                  src={slide.imageUrl}
                  alt={slide.imageAlt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 90vw, 560px"
                  priority={i === 0}
                />
              )}
            </div>
          </div>
        ))}
        <div className="demo-browser__scanline" aria-hidden />
      </div>
    </div>
  );
}
