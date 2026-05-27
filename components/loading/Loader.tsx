"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap, registerGsap } from "@/lib/gsap";
import { SITE } from "@/lib/config";

const STORAGE_KEY = "the-webdudes-loader";

export function Loader() {
  const [reducedMotion, setReducedMotion] = useState(true);
  const [visible, setVisible] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      /* optional */
    }
    if (reducedMotion) {
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* optional */
      }
      return;
    }
    setVisible(true);
  }, [reducedMotion]);

  useLayoutEffect(() => {
    if (!visible || reducedMotion) return;
    registerGsap();

    const logo = logoRef.current;
    const label = labelRef.current;
    const overlay = overlayRef.current;
    if (!logo || !label || !overlay) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          window.setTimeout(() => {
            setVisible(false);
            try {
              sessionStorage.setItem(STORAGE_KEY, "1");
            } catch {
              /* optional */
            }
          }, 450);
        },
      });

      gsap.set(logo, { scale: 0.82, opacity: 0, rotate: -6 });
      gsap.set(label, { opacity: 0, y: 10 });

      tl.to(logo, { scale: 1, opacity: 1, rotate: 0, duration: 0.55 })
        .to(label, { opacity: 1, y: 0, duration: 0.35 }, "-=0.2")
        .to(logo, { scale: 1.04, duration: 0.25, ease: "power2.inOut" })
        .to(logo, { scale: 1, duration: 0.25, ease: "power2.inOut" })
        .to({}, { duration: 0.2 })
        .to(overlay, { opacity: 0, duration: 0.45, ease: "power2.inOut" });
    });

    return () => ctx.revert();
  }, [visible, reducedMotion]);

  if (!visible) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--bg-paper)]"
      aria-hidden
    >
      <div className="flex flex-col items-center gap-4">
        <div ref={logoRef} className="editorial-card flex h-28 w-28 items-center justify-center p-4">
          <Image
            src={SITE.logoSrc}
            alt=""
            width={370}
            height={357}
            className="h-full w-full object-contain"
            sizes="112px"
            priority
            unoptimized
          />
        </div>
        <p
          ref={labelRef}
          className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-[var(--ink-soft)]"
        >
          {SITE.name}
        </p>
      </div>
    </div>
  );
}
