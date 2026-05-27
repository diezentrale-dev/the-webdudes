import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** www → Apex (Canonical: https://thewebdudes.de) */
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.thewebdudes.de" }],
        destination: "https://thewebdudes.de/:path*",
        permanent: true,
      },
      /** Vercel-Standarddomain (Produktion) → kanonische Custom Domain, gleiche Inhalte/Sitemap-URL. */
      {
        source: "/:path*",
        has: [{ type: "host", value: "the-webdudes.vercel.app" }],
        destination: "https://thewebdudes.de/:path*",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "picsum.photos", pathname: "/**" },
    ],
  },
  async headers() {
    /** Nur HTML/Seiten – nicht `/_next/static` (JS/CSS-Chunks) oder `/_next/image`, vgl. Next-Doku zu Middleware/Headers. */
    const securityHeaders = [
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      {
        key: "Referrer-Policy",
        value: "strict-origin-when-cross-origin",
      },
      {
        key: "Permissions-Policy",
        value:
          "camera=(), microphone=(), geolocation=(), interest-cohort=()",
      },
    ];
    return [
      {
        source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
