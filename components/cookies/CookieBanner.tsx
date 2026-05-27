"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";
import {
  COOKIE_CONSENT_STORAGE_KEY,
  writeStoredConsent,
  type CookieConsentLevel,
} from "@/lib/cookie-consent";

export function CookieBanner() {
  const [show, setShow] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    try {
      const existing = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
      if (!existing) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  useEffect(() => {
    if (!show) return;
    const t = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(t);
  }, [show]);

  function choose(level: CookieConsentLevel) {
    writeStoredConsent(level);
    setEntered(false);
    window.setTimeout(() => setShow(false), 280);
  }

  if (!show) return null;

  return (
    <div
      role="region"
      aria-label="Cookie-Einstellungen"
      aria-live="polite"
      className={`pointer-events-none fixed inset-x-0 bottom-0 z-[80] flex justify-center p-4 transition-opacity duration-300 sm:p-6 ${entered ? "opacity-100" : "opacity-0"}`}
    >
      <div className="glass-panel pointer-events-auto w-full max-w-3xl px-4 py-4 shadow-glow sm:px-6 sm:py-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-4">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-warm/15 text-accent-warm"
            aria-hidden
          >
            <Cookie className="h-5 w-5" strokeWidth={1.5} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-display text-base font-semibold text-[var(--text-primary)]">
              Cookies &amp; Privatsphäre
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
              Wir nutzen technisch notwendige Cookies, damit die Seite funktioniert. Optional
              können wir später statistische Auswertungen einsetzen – aktuell läuft{" "}
              <strong className="text-[var(--text-primary)]">kein</strong> Tracking von Drittanbietern.
              Du entscheidest, ob nur das Nötige oder auch zukünftige Erweiterungen erlaubt sind.
            </p>
            <p className="mt-2 text-xs text-[var(--text-muted)]">
              Details:{" "}
              <Link href="/datenschutz" className="font-medium text-accent-mint underline underline-offset-2">
                Datenschutzerklärung
              </Link>
            </p>
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-2 sm:mt-4 sm:flex-row sm:flex-wrap sm:justify-end sm:gap-3">
          <button
            type="button"
            onClick={() => choose("essential")}
            className="btn-secondary order-2 w-full sm:order-1 sm:w-auto sm:min-w-[11rem]"
          >
            Nur notwendige
          </button>
          <button
            type="button"
            onClick={() => choose("all")}
            className="btn-primary order-1 w-full sm:order-2 sm:w-auto sm:min-w-[11rem]"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
