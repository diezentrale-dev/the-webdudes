import type { PricingModel } from "./packages";
import { V2_LINKS } from "./v2-routes";

export const PRICING_CTA_HREF_V2 = `${V2_LINKS.kontakt}#erstgespraech` as const;

export const PRICING_MODELS_V2: PricingModel[] = [
  {
    id: "preview",
    name: "Vorschau ansehen",
    priceOnce: "0 €",
    priceNote: "kostenlos im Kurz-Meet",
    blurb: "Wir bauen deine Website-Vorschau und zeigen sie dir live. Nicht per Mail, nicht als Download. Du schaust, du entscheidest.",
    features: [
      "Fertige Vorschau-Webseite für deinen Betrieb",
      "Im kurzen Google Meet gezeigt, nicht als Slides",
      "Kein Versand, kein PDF, kein Link per Mail",
      "Unverbindlich. \"Nein\" ist okay.",
    ],
    ctaLabel: "Termin buchen",
    ctaHref: PRICING_CTA_HREF_V2,
  },
  {
    id: "website",
    name: "Webseite + Betreuung",
    priceOnce: "ab 99 €",
    priceNote: "einmalig · danach 20 €/Monat",
    blurb: "Deine Seite geht live. Danach läuft alles über das Monatspaket. Hosting, Updates und Änderungen. Das ist unser Modell.",
    features: [
      "Individuelle Webseite, fairer Einstiegspreis",
      "20 €/Monat: Hosting, DSGVO, fester Ansprechpartner",
      "1 Änderung pro Monat inklusive, ggf. eine 2.",
      "Antwort innerhalb von 24 Stunden",
      "Marcel oder Tiziano. Kein \"Support-Team\".",
    ],
    recommended: true,
    ctaLabel: "Mit Betreuung starten",
    ctaHref: PRICING_CTA_HREF_V2,
  },
  {
    id: "maintenance",
    name: "Nur Betreuung",
    priceOnce: "20 €",
    priceNote: "pro Monat · nur für unsere Webseiten",
    blurb: "Du hast schon eine Webseite von uns. Wir halten sie am Leben. Genau dafür sind wir da.",
    features: [
      "Nur für Webseiten, die wir gebaut haben",
      "1 Änderung pro Monat inklusive, ggf. eine 2.",
      "Hosting, Updates, DSGVO inklusive",
      "Texte, Bilder, Preise. Wir passen an.",
      "Kein Vertrag mit Mindestlaufzeit",
    ],
    ctaLabel: "Betreuung buchen",
    ctaHref: PRICING_CTA_HREF_V2,
  },
];

export const PRICING_DISCLAIMER_V2 =
  "Die Vorschau zeigen wir dir kostenlos im Meet. Wir schicken dir nichts zu. Der Einstieg für deine echte Seite liegt bei 99 €. Unser Fokus ist die Betreuung für 20 €/Monat. Das Nur-Betreuung-Paket gilt nur für Webseiten von uns. Ohne Mindestlaufzeit.";
