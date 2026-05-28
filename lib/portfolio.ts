import { withBasePath } from "./base-path";

export function getPortfolioMetaForDemoSrc(demoSrc: string): {
  imageUrl?: string;
  imageAlt?: string;
} {
  const item = PORTFOLIO_ITEMS.find((p) => p.demoSrc === demoSrc);
  return { imageUrl: item?.imageUrl, imageAlt: item?.imageAlt };
}

export type PortfolioItem = {
  id: string;
  industry: string;
  title: string;
  /** Wenn gesetzt: echte iframe-Vorschau aus /public/demos */
  demoSrc?: string;
  /** Anzeige in der Browser-Leiste der Hero-Animation */
  previewLabel?: string;
  imageUrl: string;
  imageAlt: string;
  styleDescription: string;
};

/**
 * Drei Portfolio-Modelle (Standard · Premium · Awesome) — Hero-Scroll-Animation & Vorschau-Button.
 */
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "standard",
    industry: "Standard · Friseur",
    title: "Antalya Friseur Salon",
    demoSrc: withBasePath("/demos/antalya-friseur/index.html"),
    previewLabel: "antalya-friseur-salon.de",
    imageUrl:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1200&q=80",
    imageAlt: "Moderner Friseursalon, warmes Licht",
    styleDescription:
      "Klare Landingpage: Hero, Leistungen, Galerie und Kontakt. Ruhiges Layout, mobil nutzbar — ideal für lokale Dienstleister.",
  },
  {
    id: "premium",
    industry: "Premium · Design & Motion",
    title: "FORMA Studio",
    demoSrc: withBasePath("/demos/forma-studio/index.html"),
    previewLabel: "forma.studio",
    imageUrl:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80",
    imageAlt: "Editorial Design, abstrakte Formen und Licht",
    styleDescription:
      "Premium-Auftritt mit Scroll-Motion, Partikeln und editorialer Typografie — Wirkung statt Standard-Template.",
  },
  {
    id: "awesome",
    industry: "Awesome · Mode & Shop",
    title: "NOIRÉ",
    demoSrc: withBasePath("/demos/noire/index.html"),
    previewLabel: "noire.maison",
    imageUrl:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80",
    imageAlt: "Editorial Fashion, Couture-Silhouette",
    styleDescription:
      "Scroll-Story, horizontale Runway-Séquence, Shop mit Warenkorb und Checkout — volle Marken-Experience.",
  },
];
