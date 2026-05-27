"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion-presets";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/cn";

type StaggerProps = HTMLMotionProps<"div"> & {
  stagger?: number;
  delay?: number;
};

export function Stagger({
  children,
  className,
  stagger = 0.09,
  delay = 0.05,
  ...props
}: StaggerProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      variants={staggerContainer(reduced, stagger, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  ...props
}: HTMLMotionProps<"div">) {
  const reduced = useReducedMotion();

  return (
    <motion.div className={cn(className)} variants={staggerItem(reduced)} {...props}>
      {children}
    </motion.div>
  );
}
