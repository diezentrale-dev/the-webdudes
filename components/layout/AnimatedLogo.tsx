"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SITE } from "@/lib/config";
import { hoverScale, tapScale } from "@/lib/motion-presets";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/** Markenlogo (nur das runde Emblem) mit sanfter Loop-Animation für den Header. */
export function AnimatedLogo() {
  const reduced = useReducedMotion();

  return (
    <motion.div whileHover={reduced ? {} : hoverScale} whileTap={reduced ? {} : tapScale}>
      <Link
        href="/"
        className="group inline-flex items-center gap-3 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        aria-label={`${SITE.name} – Startseite`}
      >
        <motion.span
          className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-transparent sm:h-16 sm:w-16"
          animate={
            reduced
              ? {}
              : {
                  rotate: [0, 2, -1, 0],
                  scale: [1, 1.02, 1],
                }
          }
          transition={{
            duration: 6,
            repeat: reduced ? 0 : Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src={SITE.logoSrc}
            alt=""
            width={370}
            height={357}
            className="h-full w-full object-contain object-center"
            priority
            sizes="64px"
            unoptimized
          />
        </motion.span>
        <span className="font-display text-base font-semibold tracking-tight text-ink-900 transition-colors duration-200 group-hover:text-accent-deep sm:text-lg">
          {SITE.name}
        </span>
      </Link>
    </motion.div>
  );
}
