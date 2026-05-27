"use client";

import { useEffect, useRef } from "react";

type TiltOptions = {
  max?: number;
  scale?: number;
  disabled?: boolean;
};

export function useTilt<T extends HTMLElement = HTMLDivElement>({
  max = 10,
  scale = 1.02,
  disabled = false,
}: TiltOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (disabled) return;
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || coarse) return;

    let raf = 0;

    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(900px) rotateY(${x * max}deg) rotateX(${-y * max}deg) scale(${scale})`;
      });
    };

    const reset = () => {
      el.style.transform = "perspective(900px) rotateX(0) rotateY(0) scale(1)";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", reset);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, [disabled, max, scale]);

  return ref;
}
