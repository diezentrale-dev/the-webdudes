import localFont from "next/font/local";

/** Lokal gehostet unter /public/fonts – keine Verbindung zu Google Fonts beim Seitenaufruf */
export const fontInter = localFont({
  src: [
    { path: "../public/fonts/inter-latin-400.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/inter-latin-500.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/inter-latin-600.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/inter-latin-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const fontDisplay = localFont({
  src: [
    { path: "../public/fonts/space-grotesk-latin-500.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/space-grotesk-latin-600.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/space-grotesk-latin-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
});
