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
  /** Wenn gesetzt: echte iframe-Demo aus /public */
  demoSrc?: string;
  imageUrl: string;
  imageAlt: string;
  /** UI/Stil der Demo – unabhängig vom fiktiven Markennamen */
  styleDescription: string;
};

/**
 * Drei echte lokale Demos unter /public/demos/… (keine Platzhalter-Kacheln).
 */
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "nagelstudio",
    industry: "Beauty · Nagelstudio",
    title: "Anna's Nagelstudio",
    demoSrc: withBasePath("/demos/nagelstudio/index.html"),
    imageUrl:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&q=80",
    imageAlt: "Stilvolle Hände mit Nageldesign, warmes Licht",
    styleDescription:
      "Weiche Creme- und Rosétöne, viel Luft und abgerundete Flächen. Klarer Fokus auf Bilder und Services – wirkt ruhig, hochwertig und vertrauensvoll.",
  },
  {
    id: "pizzeria-mario",
    industry: "Gastronomie · Pizzeria",
    title: "Pizzeria Mario",
    demoSrc: withBasePath("/demos/pizzeria/index.html"),
    imageUrl:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&q=80",
    imageAlt: "Frische Pizza aus dem Ofen",
    styleDescription:
      "Warme, appetitanregende Farben und kräftige Kontraste. Struktur für Speisekarte und Bestellhinweise – schnell erfassbar, einladend, „gastro-tauglich“.",
  },
  {
    id: "antalya-friseur",
    industry: "Friseur · Salon",
    title: "Antalya Friseur Salon",
    demoSrc: withBasePath("/demos/antalya-friseur/index.html"),
    imageUrl:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1200&q=80",
    imageAlt: "Moderner Friseursalon, warmes Licht",
    styleDescription:
      "Klare Raster, moderne Typo und wechselnde Bild-Sections. Seriös und nahbar zugleich – gut für Team, Galerie und Preise auf einen Blick.",
  },
];
