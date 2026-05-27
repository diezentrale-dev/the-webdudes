/** GitHub Pages: nur die /v2-Vorschau wie lokal, nicht die alte Site */

export function isV2PreviewMode(): boolean {
  return process.env.NEXT_PUBLIC_V2_ONLY === "true";
}

export function isV2Path(pathname: string): boolean {
  if (isV2PreviewMode()) return true;
  return pathname === "/v2" || pathname.startsWith("/v2/");
}

export function v2Href(_pathname: string, href: string): string {
  if (!isV2Path(_pathname)) return href;
  if (href.startsWith("/v2")) return href;

  switch (href) {
    case "/":
      return "/v2";
    case "/leistungen":
      return "/v2/leistungen";
    case "/ueber-uns":
      return "/v2/ueber-uns";
    case "/portfolio":
      return "/v2/portfolio";
    case "/kontakt":
      return "/v2/kontakt";
    default:
      return href;
  }
}

export const V2_LINKS = {
  home: "/v2",
  leistungen: "/v2/leistungen",
  ueberUns: "/v2/ueber-uns",
  portfolio: "/v2/portfolio",
  kontakt: "/v2/kontakt",
} as const;
