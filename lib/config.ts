import { LEGAL } from "@/lib/legal-config";
import { withBasePath } from "@/lib/base-path";

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
  logoSrc: withBasePath("/the-webdudes-logo.png"),
  /** Rechtliche Hülle – u. a. für Impressum / Rechtstexte (gleicher Wortlaut wie in legal-config) */
  legalName: "Theis Business Consulting UG (haftungsbeschränkt)",
  /** Kontakt-E-Mail (siehe legal-config) */
  email: LEGAL.email,
  /** Kurz für Meta & Footer */
  description:
    "Kostenlose Website-Vorschau im Meet oder individuelles Projekt ab 99 € – WebDudes-Stil, klar erklärt, ohne verstecktes Kleingedrucktes.",
  /** Für Seitentitel und Open Graph (Kernsatz) */
  metaTitle: "Gute Arbeit verdient eine gute Webseite",
} as const;

/** Kern-Narrativ (variiert auf den Seiten, nicht wörtlich überall gleich) */
export const CORE_NARRATIVE =
  "Du kannst mit einer kostenlosen Vorschau im Meet starten oder direkt ein Projekt ab 99 € angehen – individuelle Webseite, nach Absprache im Angebot beziffert. Wir bleiben klar und ohne Druck.";

/** Kundenstimmen-Sektion — auf true setzen, sobald echte Rezensionen vorliegen */
export const SHOW_TESTIMONIALS = false;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

/** Portfolio-Vorschau-Quellen (lokal unter /public/demos) */
export const DEMO_IFRAME_SOURCES = [
  {
    id: "standard",
    label: "Antalya Friseur Salon",
    src: withBasePath("/demos/antalya-friseur/index.html"),
  },
  {
    id: "premium",
    label: "FORMA Studio",
    src: withBasePath("/demos/forma-studio/index.html"),
  },
  {
    id: "awesome",
    label: "NOIRÉ",
    src: withBasePath("/demos/noire/index.html"),
  },
] as const;
