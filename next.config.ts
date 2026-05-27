import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") || "";

const nextConfig: NextConfig = {
  ...(isGithubPages
    ? {
        output: "export" as const,
        basePath: basePath || undefined,
        assetPrefix: basePath ? `${basePath}/` : undefined,
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
  /** www → Apex (nur bei Server-Deploy, nicht GitHub Pages) */
  ...(!isGithubPages
    ? {
        async redirects() {
          return [
            {
              source: "/:path*",
              has: [{ type: "host", value: "www.thewebdudes.de" }],
              destination: "https://thewebdudes.de/:path*",
              permanent: true,
            },
            {
              source: "/:path*",
              has: [{ type: "host", value: "the-webdudes.vercel.app" }],
              destination: "https://thewebdudes.de/:path*",
              permanent: true,
            },
          ];
        },
      }
    : {}),
  images: {
    unoptimized: isGithubPages,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "picsum.photos", pathname: "/**" },
    ],
  },
  ...(!isGithubPages
    ? {
        async headers() {
          const securityHeaders = [
            { key: "X-Frame-Options", value: "SAMEORIGIN" },
            { key: "X-Content-Type-Options", value: "nosniff" },
            {
              key: "Referrer-Policy",
              value: "strict-origin-when-cross-origin",
            },
            {
              key: "Permissions-Policy",
              value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
            },
          ];
          return [
            {
              source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
              headers: securityHeaders,
            },
          ];
        },
      }
    : {}),
};

export default nextConfig;
