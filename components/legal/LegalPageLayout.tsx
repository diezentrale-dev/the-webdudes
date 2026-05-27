import type { ReactNode } from "react";

/** Ruhiges, gut lesbares Layout für Impressum, Datenschutz, AGB – ohne Animationen. */
export function LegalPageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mesh-bg min-h-[50vh]">
      <div className="mx-auto max-w-[var(--page-max)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="legal-prose glass-panel mx-auto max-w-3xl p-8 text-left text-[var(--text-muted)] sm:p-10 [&_a]:text-accent-mint [&_a]:underline [&_a]:underline-offset-2 [&_a]:hover:text-accent-warm [&_h2]:mt-10 [&_h2]:scroll-mt-24 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-[var(--text-primary)] [&_h2]:first:mt-0 [&_h3]:mt-6 [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-[var(--text-primary)] [&_li]:mt-1 [&_ol]:mt-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:mt-4 [&_p]:leading-relaxed [&_p]:first:mt-0 [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:pl-5">
          {children}
        </div>
      </div>
    </div>
  );
}
