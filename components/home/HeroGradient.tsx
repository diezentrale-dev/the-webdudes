"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/** Animierte Teal/Blue-Gradient-Orbs im Hero – GPU-only (transform + opacity) */
export function HeroGradient() {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-ocean/10 blur-3xl" />
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-accent/25 via-accent-soft/15 to-transparent blur-3xl"
        animate={{ x: [0, 30, -10, 0], y: [0, -20, 15, 0], scale: [1, 1.08, 0.96, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-gradient-to-bl from-ocean/20 via-ocean-light/10 to-transparent blur-3xl"
        animate={{ x: [0, -25, 10, 0], y: [0, 25, -10, 0], scale: [1, 0.94, 1.06, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-cream-200/40 blur-3xl"
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
    </div>
  );
}
