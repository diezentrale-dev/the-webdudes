"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type Props = {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
};

export function FlipCard({ front, back, className }: Props) {
  const reduced = useReducedMotion();
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={cn("flip-scene h-full", flipped && "is-flipped", className)}
      onClick={() => !reduced && setFlipped((v) => !v)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          if (!reduced) setFlipped((v) => !v);
        }
      }}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
    >
      <div className="flip-card h-full">
        <div className="flip-face flip-front glass-panel h-full">{front}</div>
        <div className="flip-face flip-back glass-panel h-full">{back}</div>
      </div>
    </div>
  );
}
