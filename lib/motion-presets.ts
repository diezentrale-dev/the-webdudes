/** Shared Motion / Framer presets – variants, springs, viewport */

import type { Variants } from "framer-motion";

export const easeOut = [0.22, 1, 0.36, 1] as const;

export const springSnappy = {
  type: "spring" as const,
  stiffness: 400,
  damping: 25,
};

export const springGentle = {
  type: "spring" as const,
  stiffness: 260,
  damping: 28,
};

export const springBouncy = {
  type: "spring" as const,
  stiffness: 320,
  damping: 22,
};

export const reveal = {
  duration: 0.45,
  ease: easeOut,
};

export const revealSlow = {
  duration: 0.55,
  ease: easeOut,
};

export const viewportOnce = {
  once: true,
  margin: "-80px" as const,
};

export const viewportTight = {
  once: true,
  margin: "-40px" as const,
};

export const hoverLift = {
  y: -4,
  transition: springSnappy,
};

export const hoverScale = {
  scale: 1.02,
  transition: springSnappy,
};

export const tapScale = {
  scale: 0.98,
  transition: springSnappy,
};

export const staggerDelay = (index: number, reduced: boolean, step = 0.08) =>
  reduced ? 0 : index * step;

/** Stagger container – Framer Motion Skill pattern */
export const staggerContainer = (
  reduced: boolean,
  stagger = 0.09,
  delay = 0.05
): Variants =>
  reduced
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      };

export const staggerItem = (reduced: boolean): Variants =>
  reduced
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 22 },
        show: {
          opacity: 1,
          y: 0,
          transition: springGentle,
        },
      };

export const fadeUpItem = (reduced: boolean): Variants =>
  reduced
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 28 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: easeOut },
        },
      };

export const pageVariants = (reduced: boolean) =>
  reduced
    ? {
        initial: { opacity: 1 },
        animate: { opacity: 1 },
        exit: { opacity: 1 },
      }
    : {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.38, ease: easeOut } },
        exit: { opacity: 0, y: -10, transition: { duration: 0.28, ease: easeOut } },
      };

export const modalBackdrop = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.25 },
};

export const modalPanel = {
  initial: { opacity: 0, y: 48, scale: 0.96 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { ...springGentle, duration: 0.45 } },
  exit: { opacity: 0, y: 28, scale: 0.98, transition: { duration: 0.28, ease: easeOut } },
};

export const drawLine = (reduced: boolean) =>
  reduced
    ? { width: "100%" }
    : {
        initial: { width: "0%" },
        whileInView: { width: "100%" },
        viewport: viewportOnce,
        transition: { duration: 0.7, ease: easeOut },
      };
