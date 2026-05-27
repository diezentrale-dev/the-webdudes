/** GitHub Pages legt die Site unter /repo-name ab – Pfade mit Prefix versehen. */
export function withBasePath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";
  if (!base || !path.startsWith("/")) return path;
  return `${base}${path}`;
}
