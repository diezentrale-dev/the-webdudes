/** v2-Vorschau: alle internen Links bleiben unter /v2 */

export function isV2Path(pathname: string): boolean {
  return pathname === "/v2" || pathname.startsWith("/v2/");
}

export function v2Href(pathname: string, href: string): string {
  if (!isV2Path(pathname)) return href;
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

/** Feste v2-Links für Komponenten, die nur auf v2-Seiten leben */
export const V2_LINKS = {
  home: "/v2",
  leistungen: "/v2/leistungen",
  ueberUns: "/v2/ueber-uns",
  portfolio: "/v2/portfolio",
  kontakt: "/v2/kontakt",
} as const;
