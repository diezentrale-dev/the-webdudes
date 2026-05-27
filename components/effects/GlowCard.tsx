"use client";

import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useRef, useEffect } from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "button";
};

export function GlowCard({ children, className, as: Tag = "div", ...rest }: Props) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced) return;
    const card = ref.current;
    if (!card) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    };

    card.addEventListener("mousemove", onMove);
    return () => card.removeEventListener("mousemove", onMove);
  }, [reduced]);

  return (
    <Tag
      // @ts-expect-error polymorphic ref for div | article | button
      ref={ref}
      className={cn("glow-card glass-panel", className)}
      {...rest}
    >
      <span className="glow-card__shine" aria-hidden />
      <div className="glow-card__content relative z-[1]">{children}</div>
    </Tag>
  );
}
