import { withBasePath } from "./base-path";

export type DemoModelTier = "standard" | "premium" | "awesome";

export type DemoModelStatus = "live" | "in-progress" | "placeholder";

export type DemoModel = {
  id: DemoModelTier;
  tierLabel: string;
  title: string;
  subtitle: string;
  summary: string;
  features: string[];
  status: DemoModelStatus;
  statusLabel: string;
  demoSrc?: string;
  imageUrl?: string;
  imageAlt?: string;
  previewLabel?: string;
};

/**
 * Drei WebDudes-Modelle für die Portfolio-Unterseite.
 * Hero-Animation und Vorschau-Button nutzen dieselben Demos über PORTFOLIO_ITEMS in lib/portfolio.ts.
 */
export const DEMO_MODELS: DemoModel[] = [
  {
    id: "standard",
    tierLabel: "Standard",
    title: "Klare Landingpage",
    subtitle: "Schnell verständlich, schnell online",
    summary:
      "Eine fokussierte Startseite für deinen Betrieb: wer ihr seid, was ihr anbietet, wie man euch erreicht. Klar strukturiert, mobil nutzbar, ohne Spielereien — damit Besucherinnen in Sekunden verstehen, warum sie bei euch landen sollten.",
    features: [
      "Hero, Leistungen, Galerie oder Team, Kontakt & Anfahrt",
      "Saubere Typografie und ruhiges Layout",
      "Ideal für Friseur, Gastro, Handwerk und lokale Dienstleister",
    ],
    status: "live",
    statusLabel: "Vorschau verfügbar",
    demoSrc: withBasePath("/demos/antalya-friseur/index.html"),
    previewLabel: "antalya-friseur-salon.de",
    imageUrl:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1200&q=80",
    imageAlt: "Vorschau: Antalya Friseur Salon",
  },
  {
    id: "premium",
    tierLabel: "Premium",
    title: "Landingpage mit Wirkung",
    subtitle: "Design-Agentur · Motion · Präsenz",
    summary:
      "Alles aus dem Standard-Modell — plus hochwertige Animationen, interaktive Hintergründe und ein editorialer Auftritt. Ideal für Agenturen, Studios und Marken, die online nicht nur informieren, sondern Eindruck hinterlassen wollen.",
    features: [
      "Interaktive Partikel, Scroll-Motion und Premium-Typografie",
      "Editorial Portfolio, Prozess und Vertrauenselemente",
      "Kontakt mit Bestätigungs-Flow und E-Mail-Vorschau",
    ],
    status: "live",
    statusLabel: "Vorschau verfügbar",
    demoSrc: withBasePath("/demos/forma-studio/index.html"),
    previewLabel: "forma.studio",
    imageUrl:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80",
    imageAlt: "Vorschau: FORMA Studio",
  },
  {
    id: "awesome",
    tierLabel: "Awesome",
    title: "Editorial-Marke mit Shop",
    subtitle: "Scroll-Story · Drop · Checkout",
    summary:
      "Premium-Look für Mode und Lifestyle: Scroll-Expansion-Hero, horizontale Runway-Séquence, kippendes Drop-Grid und vollständiger Shop-Flow mit Warenkorb und mehrstufiger Kasse — als durchgängige Marken-Experience.",
    features: [
      "Scroll-Expansion-Hero und horizontale Runway-Séquence (GSAP)",
      "Tilted Drop-Grid mit acht Produktdetailseiten",
      "Warenkorb und mehrstufige Kasse",
    ],
    status: "live",
    statusLabel: "Vorschau verfügbar",
    demoSrc: withBasePath("/demos/noire/index.html"),
    previewLabel: "noire.maison",
    imageUrl:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80",
    imageAlt: "Vorschau: NOIRÉ",
  },
];
