"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type Props = {
  children: React.ReactNode;
  className?: string;
  strength?: number;
};

export function MagneticWrap({ children, className, strength = 0.32 }: Props) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let raf = 0;

    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = (e.clientX - cx) * strength;
        const dy = (e.clientY - cy) * strength;
        const dist = Math.hypot(e.clientX - cx, e.clientY - cy);
        const maxDist = Math.max(r.width, r.height) * 1.25;
        const pull = dist < maxDist ? 1 - dist / maxDist : 0;
        el.style.transform = `translate3d(${dx * pull}px, ${dy * pull}px, 0)`;
      });
    };

    const reset = () => {
      el.style.transform = "translate3d(0, 0, 0)";
    };

    window.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", reset);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, [reduced, strength]);

  return (
    <div ref={ref} className={cn("magnetic-wrap inline-flex", className)}>
      {children}
    </div>
  );
}
