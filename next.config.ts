import type { NextConfig } from "next";

/*
 * Static export for SiteGround (Apache) hosting: `npm run build` writes plain
 * HTML/CSS/JS to `out/`, which goes into public_html.
 *
 * What a static host has no Node server for lives elsewhere:
 * - redirects, security headers (CSP) and caching: public/.htaccess
 * - the appointment form: public/api/lead.php (PHP, forwards to GoHighLevel)
 * - images: WebP copies made before the build by scripts/optimize-images.mjs,
 *   picked by lib/image-loader.ts
 * - CMS updates: rebuild and upload (.github/workflows/deploy-siteground.yml),
 *   started by a push, a Sanity webhook or the "Run workflow" button
 */
/*
 * Vercel (VERCEL is set during Vercel builds) serves the live site since Oct 22, 2026 and runs it as a normal Next.js app,
 * because Vercel has no PHP: the appointment form posts to app/api/lead/route.vercel.ts there (files named *.vercel.ts
 * only exist in Vercel builds). Redirects and headers for Vercel are in vercel.json. The static export stays for SiteGround.
 */
const onVercel = !!process.env.VERCEL;


/*
 * Content-Security-Policy for Vercel builds. It was in vercel.json; it is built here so the TTR OS editing bar's new address
 * (portal.ttrdigitalmarketing.com) can be allowed on Vercel PREVIEW builds only. The production policy is the same text as before.
 */
const CSP = "default-src 'self'; script-src 'self' 'unsafe-inline' https://bzrcdn.openai.com https://www.googletagmanager.com https://*.googletagmanager.com https://ttr-portal.vercel.app https://*.leadconnectorhq.com https://*.msgsndr.com https://challenges.cloudflare.com; style-src 'self' 'unsafe-inline' https://*.leadconnectorhq.com https://*.msgsndr.com https://fonts.googleapis.com https://fonts.bunny.net; img-src 'self' data: blob: https:; font-src 'self' data: https://*.leadconnectorhq.com https://*.msgsndr.com https://fonts.gstatic.com https://fonts.bunny.net; connect-src 'self' https://*.openai.com https://ttr-portal.vercel.app https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.leadconnectorhq.com https://*.msgsndr.com wss://*.leadconnectorhq.com https://*.googleapis.com https://challenges.cloudflare.com; frame-src 'self' https://www.googletagmanager.com https://www.google.com https://*.leadconnectorhq.com https://*.msgsndr.com https://challenges.cloudflare.com; media-src 'self' blob: https://cdn.sanity.io; worker-src 'self' blob:; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'; upgrade-insecure-requests";
const isPreview = process.env.VERCEL_ENV === "preview";
const PORTAL = "https://ttr-portal.vercel.app";
const csp = isPreview ? CSP.split(PORTAL).join(`${PORTAL} https://portal.ttrdigitalmarketing.com`) : CSP;

const nextConfig: NextConfig = {
  output: onVercel ? undefined : "export",
  pageExtensions: onVercel ? ["vercel.ts", "tsx", "ts"] : ["tsx", "ts"],
  env: { NEXT_PUBLIC_LEAD_ENDPOINT: onVercel ? "/api/lead/" : "/api/lead.php" },
  // /about-us/ -> about-us/index.html, which Apache serves as is
  // (and matches the old WordPress URLs).
  // The 404 page for unmatched addresses is app/global-not-found.tsx, so the site menu stays out of every other page's HTML.
  experimental: { globalNotFound: true },
  trailingSlash: true,
  poweredByHeader: false,
  headers: async () => (onVercel ? [{ source: "/((?!cms).*)", headers: [{ key: "Content-Security-Policy", value: csp }] }] : []),
  images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
    // Keep in sync with WIDTHS in scripts/optimize-images.mjs.
    deviceSizes: [640, 828, 1200, 1920],
    imageSizes: [96, 256, 384],
    qualities: [75],
  },
};

export default nextConfig;
