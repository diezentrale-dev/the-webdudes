"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/** Subtle scroll hint in hero – infinite bounce, disabled with reduced motion */
export function ScrollIndicator() {
  const reduced = useReducedMotion();
  if (reduced) return null;

  return (
    <motion.div
      className="pointer-events-none absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-ink-700/60"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.6 }}
      aria-hidden
    >
      <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">
        Scroll
      </span>
      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-5 w-5" strokeWidth={1.75} />
      </motion.div>
    </motion.div>
  );
}
