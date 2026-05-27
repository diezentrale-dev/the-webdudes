"use client";

import { cn } from "@/lib/cn";
import { useTilt } from "@/hooks/useTilt";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type Props = {
  children: React.ReactNode;
  className?: string;
  max?: number;
};

export function TiltCard({ children, className, max = 8 }: Props) {
  const reduced = useReducedMotion();
  const ref = useTilt<HTMLDivElement>({ max, scale: 1.015, disabled: reduced });

  return (
    <div ref={ref} className={cn("tilt-card will-change-transform", className)}>
      {children}
    </div>
  );
}
