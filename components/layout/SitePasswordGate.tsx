"use client";

import { FormEvent, useEffect, useState } from "react";
import { SITE } from "@/lib/config";

const STORAGE_KEY = "wd-site-access";

function isUnlocked(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function SiteLoginForm({ onSuccess }: { onSuccess: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const expected = process.env.NEXT_PUBLIC_SITE_PASSWORD?.trim() ?? "";

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (password === expected) {
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* ignore */
      }
      onSuccess();
      return;
    }
    setError("Falsches Passwort. Bitte nochmal versuchen.");
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--bg-paper)] px-4">
      <div className="editorial-card w-full max-w-md p-8 sm:p-10">
        <p className="section-eyebrow">Geschützter Bereich</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-[var(--ink)]">{SITE.name}</h1>
        <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          Diese Vorschau ist passwortgeschützt. Gib das Passwort ein, um die Seite zu sehen.
        </p>
        <form className="mt-8 space-y-4" onSubmit={onSubmit}>
          <label className="block text-sm font-medium text-[var(--ink)]" htmlFor="site-password">
            Passwort
          </label>
          <input
            id="site-password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-sm border border-[var(--rule)] bg-[var(--bg-white)] px-4 py-3 text-sm text-[var(--ink)] outline-none transition-[border-color] focus:border-[var(--accent)]"
            required
          />
          {error ? <p className="text-sm text-[var(--accent)]">{error}</p> : null}
          <button type="submit" className="btn-primary w-full">
            Zugang öffnen
          </button>
        </form>
      </div>
    </div>
  );
}

export function SitePasswordGate({ children }: { children: React.ReactNode }) {
  const enabled = Boolean(process.env.NEXT_PUBLIC_SITE_PASSWORD?.trim());
  const [ready, setReady] = useState(!enabled);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    setUnlocked(isUnlocked());
    setReady(true);
  }, [enabled]);

  if (!enabled) return children;
  if (!ready) return null;
  if (!unlocked) return <SiteLoginForm onSuccess={() => setUnlocked(true)} />;

  return children;
}
