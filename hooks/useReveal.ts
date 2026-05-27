"use client";

import { useEffect, useRef } from "react";

type RevealOptions = IntersectionObserverInit & {
  /** Klasse bei Sichtbarkeit (default: is-visible) */
  visibleClass?: string;
};

export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: RevealOptions = {}
) {
  const ref = useRef<T>(null);
  const { visibleClass = "is-visible", ...ioOptions } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.classList.add(visibleClass);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(visibleClass);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px", ...ioOptions }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [visibleClass, ioOptions.root, ioOptions.rootMargin, ioOptions.threshold]);

  return ref;
}
