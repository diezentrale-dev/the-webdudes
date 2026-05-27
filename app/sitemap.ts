import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = (
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ).replace(/\/$/, "");

  const paths = [
    "",
    "/leistungen",
    "/portfolio",
    "/ueber-uns",
    "/kontakt",
    "/impressum",
    "/datenschutz",
    "/agb",
  ];

  return paths.map((path) => ({
    url: path === "" ? `${base}/` : `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}
