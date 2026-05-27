import type { Metadata } from "next";
import "./globals.css";
import { fontInter, fontDisplay } from "./fonts";
import { SITE } from "@/lib/config";
import { Loader } from "@/components/loading/Loader";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { PreviewButton } from "@/components/layout/PreviewButton";
import { CookieBanner } from "@/components/cookies/CookieBanner";
import { FilmGrain } from "@/components/signature/FilmGrain";

/** Verhindert kaputte `metadataBase`, wenn `NEXT_PUBLIC_SITE_URL` ungültig oder leer ist (kann sonst Asset-/Meta-Probleme auslösen). */
function metadataBaseUrl(): URL {
  const fallback = "http://localhost:3000";
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return new URL(fallback);
  try {
    return new URL(raw.replace(/\/$/, ""));
  } catch {
    return new URL(fallback);
  }
}

export const metadata: Metadata = {
  metadataBase: metadataBaseUrl(),
  title: {
    default: `${SITE.name} · ${SITE.metaTitle}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: SITE.name,
    title: `${SITE.name} · ${SITE.metaTitle}`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} · ${SITE.metaTitle}`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${fontInter.variable} ${fontDisplay.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Zum Inhalt springen
        </a>
        <Loader />
        <Header />
        <main id="main-content" className="min-h-[50vh] pt-[var(--header-h)]">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <CookieBanner />
        <PreviewButton />
        <FilmGrain />
        {/*
          Optional: Analytics (Paket des Hosting-Anbieters) – nur nach DSGVO-konformer Einwilligung
          und Auftragsverarbeitung mit dem Anbieter aktivieren.
        */}
      </body>
    </html>
  );
}
