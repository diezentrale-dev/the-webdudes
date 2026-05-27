"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type Props = {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
};

export function ParallaxLayer({ children, className, speed = 0.18 }: Props) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;

    let ticking = false;

    const update = () => {
      el.style.transform = `translate3d(0, ${window.scrollY * speed}px, 0)`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [reduced, speed]);

  return (
    <div
      ref={ref}
      className={cn("parallax-layer will-change-transform", className)}
      aria-hidden={!children}
    >
      {children}
    </div>
  );
}
