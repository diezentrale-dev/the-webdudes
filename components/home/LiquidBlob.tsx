"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/cn";

export function LiquidBlob({
  className,
  tone = "teal",
}: {
  className?: string;
  tone?: "teal" | "blue";
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "pointer-events-none absolute blur-3xl filter",
        tone === "teal"
          ? "bg-gradient-to-br from-accent/25 via-cream-200/50 to-transparent"
          : "bg-gradient-to-br from-ocean/20 via-cream-100/40 to-transparent",
        className
      )}
      animate={
        reduced
          ? {}
          : {
              scale: [1, 1.08, 1],
              rotate: [0, 5, -3, 0],
            }
      }
      transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden
    />
  );
}
