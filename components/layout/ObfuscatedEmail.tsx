"use client";

import { useEffect, useState } from "react";
import { CONTACT_EMAIL_B64 } from "@/lib/legal-config";

type Props = {
  className?: string;
};

/**
 * E-Mail erst nach Mount per JS zusammensetzen (leichte Obfuscation gegen einfaches Scraping).
 * mailto bleibt nach dem Laden voll nutzbar.
 */
export function ObfuscatedEmail({ className }: Props) {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    try {
      setEmail(
        typeof atob !== "undefined" ? atob(CONTACT_EMAIL_B64) : "kontakt@thewebdudes.de"
      );
    } catch {
      setEmail("kontakt@thewebdudes.de");
    }
  }, []);

  if (!email) {
    return (
      <span className={className} aria-busy="true">
        …
      </span>
    );
  }

  return (
    <a
      href={`mailto:${email}`}
      className={className}
      rel="noopener noreferrer"
    >
      {email}
    </a>
  );
}
