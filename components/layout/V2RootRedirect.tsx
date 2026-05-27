"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/** GitHub Pages: Startseite → /v2 wie lokal */
export function V2RootRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/v2");
  }, [router]);

  return null;
}
