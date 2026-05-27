"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { RevealBlock } from "@/components/effects/RevealBlock";
import { V2_LINKS } from "@/lib/v2-routes";

export function FinalCtaV2() {
  return (
    <section className="border-t border-[var(--rule)] bg-[var(--ink)] py-28 text-[var(--bg-paper)] sm:py-32">
      <div className="mx-auto max-w-[var(--page-max)] px-4 sm:px-6 lg:px-8">
        <RevealBlock>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.65rem]">
              Was verlierst du gerade, weil deine Seite nicht funktioniert?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-[var(--bg-paper)]/75">
              Sandra sucht gerade ein Nagelstudio. Sie klickt auf deine Seite. Kein Buchungslink.
              Lädt zu langsam. Sie geht zur nächsten. Das passiert heute.
            </p>
            <div className="mt-10 flex justify-center">
              <Link
                href={V2_LINKS.kontakt}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-sm bg-[var(--bg-paper)] px-8 py-3 text-sm font-semibold text-[var(--ink)] transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Demo-Termin buchen
              </Link>
            </div>
            <p className="mt-6 text-sm text-[var(--bg-paper)]/40">
              Kein Druck. „Nein danke“ ist ein vollwertiges Gesprächsende.
            </p>
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}
