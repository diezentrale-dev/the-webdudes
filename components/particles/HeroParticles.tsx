"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";
import type { ISourceOptions } from "@tsparticles/engine";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type HeroParticlesProps = {
  className?: string;
  id?: string;
};

/** Dezente Teal/Blue-Partikel – Repulse bei Hover */
export function HeroParticles({ className, id = "tsparticles" }: HeroParticlesProps) {
  const reduced = useReducedMotion();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (reduced) return;
    let cancelled = false;
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      if (!cancelled) setReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, [reduced]);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false, zIndex: 0 },
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      detectRetina: true,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          repulse: {
            distance: 80,
            duration: 0.35,
            speed: 0.5,
          },
        },
      },
      particles: {
        color: { value: ["#0F766E", "#0369A1", "#14B8A6"] },
        number: { value: 48, density: { enable: true, width: 1200, height: 1200 } },
        opacity: {
          value: { min: 0.06, max: 0.18 },
        },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3.5 } },
        move: {
          enable: true,
          speed: 0.4,
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "out" },
        },
        links: { enable: false },
      },
    }),
    []
  );

  if (reduced || !ready) {
    return <div className={className} aria-hidden />;
  }

  return <Particles id={id} className={className} options={options} />;
}
