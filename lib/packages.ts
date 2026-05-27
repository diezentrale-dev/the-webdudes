/**
 * Zwei Preismodelle (Leistungsseite & Teaser).
 * CTAs führen zur Kontaktsektion mit Kalendly-Buchung.
 */
export const PRICING_CTA_HREF = "/kontakt#erstgespraech" as const;

export type PricingModel = {
  id: string;
  name: string;
  priceOnce: string;
  /** Optional dargestellt unter dem Preis (kleinerer Text) */
  priceNote?: string;
  /** Kurz unterhalb von Preis / Hinweis – kann leer sein */
  blurb?: string;
  features: string[];
  recommended?: boolean;
  ctaLabel: string;
  ctaHref: string;
};

export const PRICING_MODELS: PricingModel[] = [
  {
    id: "demo",
    name: "Free Demo-Webseite",
    priceOnce: "0 €",
    priceNote: "kostenlos",
    blurb: "So lernt ihr unsere Arbeit ohne Risiko kennen.",
    features: [
      "Vollständige Demo-Webseite im WebDudes-Stil",
      "Komplett kostenlos und unverbindlich",
      "Perfekt, um unsere Arbeit kennenzulernen",
      "Inklusive Datei-Download für eure Unterlagen",
    ],
    ctaLabel: "Jetzt kostenlose Demo anfordern",
    ctaHref: PRICING_CTA_HREF,
  },
  {
    id: "individual",
    name: "Individuelle Webseite",
    priceOnce: "ab 99 €",
    priceNote: "einmalig, individuell",
    blurb: "Nach dem Gespräch bekommt ihr ein klares Angebot – angepasst an euren Laden.",
    features: [
      "Maßgeschneiderte Webseite für euer Unternehmen",
      "Anpassungen in Design, Funktionen und Hosting nach euren Wünschen",
      "Flexibler Preis, abgestimmt auf eure Bedürfnisse und euer Budget",
      "Persönliche Beratung, um die perfekte Lösung zu finden",
    ],
    recommended: true,
    ctaLabel: "Jetzt Webseiten-Projekt starten",
    ctaHref: PRICING_CTA_HREF,
  },
];

export const PRICING_DISCLAIMER =
  "Die Demo-Webseite ist kostenlos und unverbindlich. Bei einem individuellen Projekt ist der genannte Betrag ein Startpreis – der finale Preis steht im schriftlichen Angebot, bevor ihr zahlt. Änderungen über das Vereinbarte hinaus klären wir vorher.";
