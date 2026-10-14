import Link from "next/link";
import type { Link as LinkT } from "@/lib/types";

/** The old site's underlined text links ("Learn more", "Schedule your consultation"). */
export function TextLink({ link, className = "" }: { link?: LinkT; className?: string }) {
  if (!link?.href || !link.label) return null;
  const external = /^https?:/.test(link.href);
  return external ? (
    <a href={link.href} className={`text-cta ${className}`}>
      {link.label}
    </a>
  ) : (
    <Link href={link.href} className={`text-cta ${className}`}>
      {link.label}
    </Link>
  );
}
