"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BOOKING, NAV_LINKS, SITE } from "@/lib/config";
import { v2Href } from "@/lib/v2-routes";
import { LEGAL, phoneTelHref } from "@/lib/legal-config";
import { RevealBlock } from "@/components/effects/RevealBlock";

export function Footer() {
  const pathname = usePathname();
  const tagline = pathname.startsWith("/v2")
    ? "Betreuung ab 20 €/Monat. Demo kostenlos im Meet. Kein Kauderwelsch, kein Druck."
    : "Demo-Webseite kostenlos – Projekt ab 99 €. Kein Kauderwelsch, kein Druck.";

  return (
    <footer className="border-t border-[var(--rule)] bg-[var(--bg-white)]">
      <div className="mx-auto max-w-[var(--page-max)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <RevealBlock>
            <p className="font-display text-2xl font-semibold text-[var(--ink)]">{SITE.name}</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--ink-soft)]">
              {tagline}
            </p>
          </RevealBlock>

          <RevealBlock delay={60}>
            <p className="section-eyebrow !tracking-[0.2em]">Navigation</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={v2Href(pathname, l.href)} className="link-subtle">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </RevealBlock>

          <RevealBlock delay={120}>
            <p className="section-eyebrow !tracking-[0.2em]">Rechtliches</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/impressum" className="link-subtle">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="link-subtle">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/agb" className="link-subtle">
                  AGB
                </Link>
              </li>
              <li>
                <Link href={v2Href(pathname, "/kontakt")} className="link-subtle">
                  Kontakt
                </Link>
              </li>
            </ul>
          </RevealBlock>
        </div>

        <RevealBlock className="mt-12 border-t border-[var(--rule)] pt-8" delay={80}>
          <div className="flex flex-col gap-3 text-sm text-[var(--ink-soft)] sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8">
            <p className="font-medium text-[var(--ink)]">Kontakt</p>
            <a href={`mailto:${LEGAL.email}`} className="link-subtle">
              {LEGAL.email}
            </a>
            <a href={phoneTelHref(LEGAL.phone)} className="link-subtle">
              {LEGAL.phone}
            </a>
            <a href={BOOKING.url} target="_blank" rel="noopener noreferrer" className="link-subtle font-semibold !text-[var(--accent)]">
              {BOOKING.ctaLabel} →
            </a>
          </div>
          <p className="mt-8 text-xs text-[var(--ink-soft)]">
            © {new Date().getFullYear()} {SITE.name}
          </p>
          <p className="mt-2 text-xs text-[var(--ink-soft)]">Ein Angebot der {LEGAL.company}</p>
        </RevealBlock>
      </div>
    </footer>
  );
}
