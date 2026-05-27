"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { reveal, viewportOnce } from "@/lib/motion-presets";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/cn";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  x?: number;
  y?: number;
  blur?: boolean;
};

/** Scroll-triggered fade-up with optional blur settle */
export function Reveal({
  children,
  className,
  delay = 0,
  x = 0,
  y = 24,
  blur = false,
  ...props
}: RevealProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={reduced ? false : { opacity: 0, x, y, filter: blur ? "blur(6px)" : "blur(0px)" }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
      viewport={viewportOnce}
      transition={{ ...reveal, delay: reduced ? 0 : delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
