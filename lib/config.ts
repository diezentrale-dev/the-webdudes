import { LEGAL } from "@/lib/legal-config";

/**
 * Zentraler Branding- und Site-Config.
 * Öffentliche Marke vs. juristische Einheit: `name` ist die Markenbezeichnung; `legalName` entspricht der UG.
 */
/** Calendly – inhaltlich: kurzes Google Meet */
export const BOOKING = {
  url: "https://calendly.com/kontakt-thewebdudes/kostenloses-erstgespraech",
  ctaLabel: "Kurzes Meet buchen",
} as const;

export const SITE = {
  /** Öffentlicher Markenname */
  name: "The WebDudes",
  /** Initialen im Logo-Badge / Loader (nicht „TW“ – alter Platzhalter) */
  logoInitials: "WD",
  /** Markenlogo unter /public (PNG mit Transparenz) */
  logoSrc: "/the-webdudes-logo.png",
  /** Rechtliche Hülle – u. a. für Impressum / Rechtstexte (gleicher Wortlaut wie in legal-config) */
  legalName: "Theis Business Consulting UG (haftungsbeschränkt)",
  /** Kontakt-E-Mail (siehe legal-config) */
  email: LEGAL.email,
  /** Kurz für Meta & Footer */
  description:
    "Kostenlose Demo-Webseite oder individuelles Projekt ab 99 € – WebDudes-Stil, klar erklärt, ohne verstecktes Kleingedrucktes.",
  /** Für Seitentitel und Open Graph (Kernsatz) */
  metaTitle: "Gute Arbeit verdient eine gute Webseite",
} as const;

/** Kern-Narrativ (variiert auf den Seiten, nicht wörtlich überall gleich) */
export const CORE_NARRATIVE =
  "Du kannst mit einer kostenlosen Demo starten oder direkt ein Projekt ab 99 € angehen – individuelle Webseite, nach Absprache im Angebot beziffert. Wir bleiben klar und ohne Druck.";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

/** Live-Demo-Quellen (lokal unter /public/demos) */
export const DEMO_IFRAME_SOURCES = [
  { id: "nagelstudio", label: "Nagelstudio", src: "/demos/nagelstudio/index.html" },
  { id: "pizzeria", label: "Pizzeria Mario", src: "/demos/pizzeria/index.html" },
  { id: "antalya-friseur", label: "Antalya Friseur Salon", src: "/demos/antalya-friseur/index.html" },
] as const;
