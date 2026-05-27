/** Wert in localStorage – für optionale Analyse-Tools nur bei "all" laden */
export type CookieConsentLevel = "essential" | "all";

export const COOKIE_CONSENT_STORAGE_KEY = "the-webdudes-cookie-consent";

export function readStoredConsent(): CookieConsentLevel | null {
  if (typeof window === "undefined") return null;
  try {
    const v = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (v === "essential" || v === "all") return v;
  } catch {
    /* private mode */
  }
  return null;
}

export const COOKIE_CONSENT_CHANGE_EVENT = "the-webdudes-cookie-consent-change";

export function writeStoredConsent(level: CookieConsentLevel) {
  try {
    localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, level);
  } catch {
    /* ignore */
  }
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_CHANGE_EVENT, { detail: level }));
  }
}
