"use client";

import { useEffect, useState } from "react";
import type { CookieConsentLevel } from "@/lib/cookie-consent";
import {
  COOKIE_CONSENT_CHANGE_EVENT,
  readStoredConsent,
} from "@/lib/cookie-consent";

/**
 * Aktuelle Cookie-Auswahl (nach Mount). Für später: Analytics nur bei consent === "all".
 */
export function useCookieConsent(): CookieConsentLevel | null {
  const [consent, setConsent] = useState<CookieConsentLevel | null>(null);

  useEffect(() => {
    setConsent(readStoredConsent());
    const sync = () => setConsent(readStoredConsent());
    window.addEventListener("storage", sync);
    window.addEventListener(COOKIE_CONSENT_CHANGE_EVENT, sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener(COOKIE_CONSENT_CHANGE_EVENT, sync);
    };
  }, []);

  return consent;
}
