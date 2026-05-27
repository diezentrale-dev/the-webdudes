"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { RevealBlock } from "@/components/effects/RevealBlock";

export function FinalCta() {
  return (
    <section className="border-t border-[var(--rule)] bg-[var(--ink)] py-28 text-[var(--bg-paper)] sm:py-32">
      <div className="mx-auto max-w-[var(--page-max)] px-4 sm:px-6 lg:px-8">
        <RevealBlock>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.65rem]">
              Passt eure Webseite zu eurer Arbeit?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-[var(--bg-paper)]/75">
              Schreibt uns. Wir melden uns persönlich – kein Druck, kein Tricksen. „Nein danke“ ist ein
              voll gültiges Ende.
            </p>
            <div className="mt-10 flex justify-center">
              <Link
                href="/kontakt"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-sm bg-[var(--bg-paper)] px-8 py-3 text-sm font-semibold text-[var(--ink)] transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Kurz Hallo sagen
              </Link>
            </div>
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}
