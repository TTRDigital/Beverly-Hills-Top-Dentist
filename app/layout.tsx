import type { Metadata, Viewport } from "next";
import { Urbanist } from "next/font/google";
import { siteUrl } from "@/lib/site";

/*
 * Root layout is intentionally bare: the website's styles and chrome live
 * in app/(site)/layout.tsx so the embedded Sanity Studio at /cms loads
 * without them.
 */

const urbanist = Urbanist({ subsets: ["latin"], display: "swap", variable: "--font-urbanist", weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Beverly Hills Dental", template: "%s - Beverly Hills Dental" },
  applicationName: "Beverly Hills Dental",
  formatDetection: { telephone: false, address: false, email: false },
  icons: {
    icon: [
      { url: "/images/brand/site-icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/brand/site-icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/images/brand/site-icon-180.png",
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#edf2ed" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US" className={urbanist.variable} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
