"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/** Subtiler Live-Akzent: animierte Punkte + Pfad – Teal/Blue Palette */
export function CollaborativePresence() {
  const reduced = useReducedMotion();

  return (
    <div
      className="pointer-events-none absolute right-4 top-16 hidden md:block lg:right-10 lg:top-20"
      aria-hidden
    >
      <div className="relative h-28 w-40 rounded-3xl border border-accent/10 bg-white/50 shadow-soft backdrop-blur-sm">
        <motion.div
          className="absolute left-3 top-3 h-2 w-2 rounded-full bg-accent/80"
          animate={
            reduced
              ? {}
              : {
                  x: [0, 18, 6, 22],
                  y: [0, 10, 24, 14],
                  opacity: [0.5, 1, 0.7, 1],
                }
          }
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-4 right-5 h-2 w-2 rounded-full bg-ocean/70"
          animate={
            reduced
              ? {}
              : {
                  x: [0, -12, -4, -16],
                  y: [0, -8, -18, -6],
                  opacity: [0.4, 0.9, 0.6, 0.9],
                }
          }
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        />
        <svg
          className="absolute inset-0 h-full w-full text-ocean/30"
          viewBox="0 0 160 112"
          fill="none"
        >
          <motion.path
            d="M20 80 Q 50 40 90 60 T 140 30"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: reduced ? 1 : 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: reduced ? 0 : 2.4, ease: "easeInOut" }}
          />
        </svg>
      </div>
    </div>
  );
}
