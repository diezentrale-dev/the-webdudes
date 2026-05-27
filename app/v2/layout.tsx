import type { ReactNode } from "react";

export default function V2Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div
        className="sticky top-[var(--header-h)] z-40 border-b border-[var(--rule)] bg-[var(--bg-paper-deep)] px-4 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--ink-soft)]"
        role="status"
      >
        Copy v2 · Vorschau · Navigation bleibt in dieser Version
      </div>
      {children}
    </>
  );
}
