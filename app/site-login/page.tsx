"use client";

import { FormEvent, Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SITE } from "@/lib/config";

function SiteLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/site-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        setError("Falsches Passwort. Bitte nochmal versuchen.");
        return;
      }

      const from = searchParams.get("from") || "/v2";
      router.replace(from);
      router.refresh();
    } catch {
      setError("Login fehlgeschlagen. Bitte Seite neu laden.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto flex min-h-[calc(100vh-var(--header-h)-8rem)] max-w-md flex-col justify-center px-4 py-16">
      <div className="editorial-card p-8 sm:p-10">
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
          <button type="submit" className="btn-primary w-full" disabled={loading}>
            {loading ? "Wird geprüft…" : "Zugang öffnen"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function SiteLoginPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto flex min-h-[calc(100vh-var(--header-h)-8rem)] max-w-md items-center justify-center px-4 py-16">
          <p className="text-sm text-[var(--ink-soft)]">Login wird geladen…</p>
        </div>
      }
    >
      <SiteLoginForm />
    </Suspense>
  );
}
