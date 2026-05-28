"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { PORTFOLIO_ITEMS } from "@/lib/portfolio";
import { DemoBrowserFrame } from "@/components/signature/DemoBrowserFrame";
import { TrustBar } from "@/components/home/TrustBar";
import { MagneticWrap } from "@/components/effects/MagneticWrap";
import { RippleLink } from "@/components/effects/RippleButton";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const SLIDES = PORTFOLIO_ITEMS.map((p) => ({
  label: p.previewLabel ?? p.title,
  imageUrl: p.imageUrl,
  imageAlt: p.imageAlt,
  demoSrc: p.demoSrc,
}));

const HEADLINE_LINES_DEFAULT = [
  ["Gute", "Arbeit"],
  ["verdient", "eine"],
  ["gute", "Webseite."],
];

type Props = {
  headlineLines?: string[][];
  eyebrow?: string;
  sidenote?: string;
  afterText?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  ctaPrimaryHref?: string;
  ctaSecondaryHref?: string;
};

/** Scroll-Strecke pro Demo (vh) — wie Video-Scrub: Seite bleibt oben, bis alles durch ist */
const SCROLL_SPEED = 0.5; // 50 % weniger Scroll bis die Animation durch ist
const SCROLL_VH_PER_SLIDE = 120 * SCROLL_SPEED;
const SCROLL_VH_OUTRO = 40 * SCROLL_SPEED;

function headerOffset(): number {
  if (typeof window === "undefined") return 76;
  const v = getComputedStyle(document.documentElement).getPropertyValue("--header-h").trim();
  if (v.endsWith("rem")) return parseFloat(v) * 16;
  if (v.endsWith("px")) return parseFloat(v);
  return 76;
}

/** 0 = erste Demo, 1 = alle Demos + Outro durchgescrollt — dann erst nächste Sektion */
function getScrollProgress(wrap: HTMLElement): number {
  const header = headerOffset();
  const rect = wrap.getBoundingClientRect();
  const stickyH = window.innerHeight - header;
  const scrollable = wrap.offsetHeight - stickyH;
  if (scrollable <= 1) return 0;
  const scrolled = header - rect.top;
  return Math.min(1, Math.max(0, scrolled / scrollable));
}

export function ScrollStageHero({
  headlineLines = HEADLINE_LINES_DEFAULT,
  eyebrow = "Frankfurt · Web & Design",
  sidenote = "Wir bauen zuerst — ihr seht im Meet die fertige Vorschau. Kostenlos. Unverbindlich.",
  afterText = "Friseur, Gastro, Handwerk, Kosmetik, Fachgeschäft: Oft seid ihr online kaum zu finden. Wir bauen euch die Webseite fertig — und schenken sie.",
  ctaPrimary = "Leistungen & Kosten",
  ctaSecondary = "Portfolio ansehen",
  ctaPrimaryHref = "/leistungen",
  ctaSecondaryHref = "/portfolio",
}: Props = {}) {
  const reduced = useReducedMotion();
  const wrapRef = useRef<HTMLElement>(null);
  const browserRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sidenoteRef = useRef<HTMLParagraphElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [useStickyScroll, setUseStickyScroll] = useState(false);

  useLayoutEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)").matches;
    setUseStickyScroll(desktop && !reduced);
  }, [reduced]);

  useLayoutEffect(() => {
    if (reduced) return;

    const wrap = wrapRef.current;
    const browser = browserRef.current;
    if (!wrap || !browser) return;

    const desktop = window.matchMedia("(min-width: 1024px)").matches;
    if (!desktop) return;

    const slideCount = SLIDES.length;
    const scrollTrackVh = slideCount * SCROLL_VH_PER_SLIDE + SCROLL_VH_OUTRO;
    wrap.style.setProperty(
      "--hero-scroll-height",
      `calc((100vh - var(--header-h)) + ${scrollTrackVh}vh)`
    );

    const slideEls = browser.querySelectorAll<HTMLElement>(".demo-browser__slide");
    const demoSpan = slideCount / (slideCount + SCROLL_VH_OUTRO / SCROLL_VH_PER_SLIDE);
    const seg = demoSpan / slideCount;
    /** Max. Neigung — hier Demo wechseln, bevor das Fenster wieder nach vorne kommt */
    const tiltPeak = 0.2;
    const tiltSettle = 0.58;
    const fade = seg * 0.1;

    gsap.set(browser, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      y: 0,
      transformPerspective: 1200,
    });
    gsap.set(slideEls, { opacity: 0, scale: 1.03 });
    if (slideEls[0]) gsap.set(slideEls[0], { opacity: 1, scale: 1 });
    if (sidenoteRef.current) gsap.set(sidenoteRef.current, { opacity: 0, y: 16 });
    if (scrollHintRef.current) gsap.set(scrollHintRef.current, { opacity: 1 });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true });

      for (let i = 0; i < slideCount; i++) {
        const start = i * seg;
        const peak = start + seg * tiltPeak;
        const settle = start + seg * tiltSettle;
        const dir = i % 2 === 0 ? -1 : 1;
        tl.to(
          browser,
          {
            rotateX: 18,
            rotateY: dir * 22,
            scale: 0.86,
            y: "5%",
            ease: "none",
            duration: seg * 0.2,
          },
          start
        )
          .to(
            browser,
            {
              rotateX: 6,
              rotateY: dir * -10,
              scale: 0.92,
              y: "2%",
              ease: "none",
              duration: seg * 0.18,
            },
            peak
          )
          .to(
            browser,
            {
              rotateX: 0,
              rotateY: 0,
              scale: 1,
              y: "0%",
              ease: "none",
              duration: seg * 0.2,
            },
            settle
          );
      }

      for (let i = 0; i < slideCount - 1; i++) {
        const switchAt = i * seg + seg * tiltPeak;
        tl.to(
          slideEls[i],
          { opacity: 0, scale: 1.06, ease: "none", duration: fade },
          switchAt - fade * 0.5
        ).to(
          slideEls[i + 1],
          { opacity: 1, scale: 1, ease: "none", duration: fade },
          switchAt - fade * 0.5
        );
      }

      lineRefs.current.forEach((line, i) => {
        if (!line) return;
        const dir = i % 2 === 0 ? -1 : 1;
        tl.to(
          line,
          { x: dir * (48 + i * 16), opacity: 0.4, ease: "none", duration: demoSpan * 0.45 },
          0
        );
      });

      if (scrollHintRef.current) {
        tl.to(scrollHintRef.current, { opacity: 0, ease: "none", duration: 0.04 }, 0.04);
      }

      if (sidenoteRef.current) {
        tl.to(
          sidenoteRef.current,
          { opacity: 1, y: 0, ease: "none", duration: 0.08 },
          demoSpan + 0.02
        );
      }

      let ticking = false;
      let lastProgress = -1;

      const update = () => {
        ticking = false;
        const progress = getScrollProgress(wrap);
        if (Math.abs(progress - lastProgress) < 0.0004) return;
        lastProgress = progress;

        tl.progress(progress);

        let idx = 0;
        for (let i = 0; i < slideCount - 1; i++) {
          if (progress >= i * seg + seg * tiltPeak - fade * 0.5) idx = i + 1;
        }
        setActiveSlide(idx);
      };

      const onScroll = () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(update);
        }
      };

      update();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll, { passive: true });

      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      };
    }, wrap);

    return () => {
      ctx.revert();
      wrap.style.removeProperty("--hero-scroll-height");
    };
  }, [reduced]);

  if (reduced) {
    return (
      <>
        <section className="editorial-hero-static border-b border-[var(--rule)] px-4 pb-16 pt-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[var(--page-max)]">
            <p className="section-eyebrow">Frankfurt · Lokale Betriebe</p>
            <h1 className="mt-4 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[0.95] tracking-tight text-[var(--ink)]">
              Gute Arbeit verdient eine gute Webseite.
              <span className="block text-[var(--accent)]">Wir schenken sie. Kostenlos.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--ink-soft)]">
              Friseur, Gastro, Handwerk, Kosmetik, Fachgeschäft: Wir bauen euch die Webseite fertig,
              zeigen sie im kurzen Google Meet, und schenken sie. Kein Kleingedrucktes.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href={ctaPrimaryHref} className="btn-primary">
                {ctaPrimary}
              </Link>
              <Link href={ctaSecondaryHref} className="btn-secondary">
                {ctaSecondary}
              </Link>
            </div>
            <TrustBar />
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section
        ref={wrapRef}
        className={
          useStickyScroll
            ? "hero-scroll-stage hero-scroll-stage--scrub"
            : "hero-scroll-stage hero-scroll-stage--static"
        }
      >
        <div className="hero-scroll-pin">
          <div className="hero-scroll-grid mx-auto max-w-[var(--page-max)] px-4 sm:px-6 lg:px-8">
            <div className="hero-headline-col">
              <p className="section-eyebrow mb-4 sm:mb-6">{eyebrow}</p>
              {headlineLines.map((pair, i) => (
                <div
                  key={i}
                  ref={(el) => {
                    lineRefs.current[i] = el;
                  }}
                  className="hero-headline-row"
                >
                  {pair.map((word) => (
                    <span key={word} className="hero-headline-word">
                      {word}
                    </span>
                  ))}
                </div>
              ))}
              <div className="hero-headline-cta mt-8 hidden flex-wrap gap-3 lg:flex">
                <MagneticWrap>
                  <RippleLink href={ctaPrimaryHref} className="btn-primary group text-sm">
                    {ctaPrimary}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </RippleLink>
                </MagneticWrap>
                <MagneticWrap>
                  <RippleLink href={ctaSecondaryHref} variant="secondary" className="text-sm">
                    {ctaSecondary}
                  </RippleLink>
                </MagneticWrap>
              </div>
            </div>

            <div className="hero-browser-col">
              <div ref={browserRef} className="hero-browser-wrap">
                <DemoBrowserFrame slides={SLIDES} activeIndex={activeSlide} scrub={useStickyScroll} />
                <p className="hero-browser-caption">
                  Vorschau · {SLIDES[activeSlide]?.label}
                </p>
              </div>
            </div>
          </div>

          <p ref={sidenoteRef} className="hero-sidenote mx-auto max-w-md px-4 text-center sm:px-6">
            <span className="hero-sidenote-label">Sidenote</span>
            {sidenote}
          </p>

          <div ref={scrollHintRef} className="hero-scroll-hint">
            <span>keep scrolling</span>
            <span className="hero-scroll-hint-line" />
          </div>
        </div>
      </section>

      <section className="hero-after border-b border-[var(--rule)] bg-[var(--bg-paper)] px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[var(--page-max)]">
          <p className="max-w-lg text-pretty text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg">
            {afterText}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <MagneticWrap>
              <RippleLink href={ctaPrimaryHref} className="btn-primary group">
                {ctaPrimary}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </RippleLink>
            </MagneticWrap>
            <MagneticWrap>
              <RippleLink href={ctaSecondaryHref} variant="secondary">
                {ctaSecondary}
              </RippleLink>
            </MagneticWrap>
          </div>
          <TrustBar />
        </div>
      </section>
    </>
  );
}
