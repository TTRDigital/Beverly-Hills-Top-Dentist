/* Line icons for the blog's visual blocks (24px grid, the stroke follows the text color). Picked by name in the post data. */
import type { ReactNode } from "react";

type P = { className?: string };
const Line = ({ className = "h-6 w-6", children }: P & { children: ReactNode }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

const ICONS: Record<string, ReactNode> = {
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.5 18.5 6v5.2c0 4.6-2.8 7.7-6.5 9.3-3.7-1.6-6.5-4.7-6.5-9.3V6L12 3.5z" />
      <path d="m9.2 12.2 2 2 3.8-4" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.2" />
    </>
  ),
  scan: (
    <>
      <path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3z" />
      <path d="M4 7.5 12 12l8-4.5M12 12v9" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3.5 8.5 4.5-8.5 4.5L3.5 8 12 3.5z" />
      <path d="m3.5 12.5 8.5 4.5 8.5-4.5M3.5 16.5 12 21l8.5-4.5" />
    </>
  ),
  tooth: (
    <path d="M7.5 3.5c-2.4 0-4 1.9-4 4.6 0 2.3.9 3.7 1.5 5.4.7 2 .9 6.9 2.6 6.9 1.6 0 1.5-4.6 2.4-5.9.4-.6 1.6-.6 2 0 .9 1.3.8 5.9 2.4 5.9 1.7 0 1.9-4.9 2.6-6.9.6-1.7 1.5-3.1 1.5-5.4 0-2.7-1.6-4.6-4-4.6-1.8 0-2.6.9-4.5.9s-2.7-.9-4.5-.9z" />
  ),
  implant: (
    <>
      <path d="M8 3.5h8l1 4.5H7l1-4.5z" />
      <path d="M9.5 8v8.5L12 21l2.5-4.5V8" />
      <path d="M9.5 11h5M9.5 14h5" />
    </>
  ),
  bridge: (
    <>
      <path d="M3 17V9.5a2.5 2.5 0 0 1 5 0V17M9.5 17V9.5a2.5 2.5 0 0 1 5 0V17M16 17V9.5a2.5 2.5 0 0 1 5 0V17" />
      <path d="M3 9.5h18M2 20h20" />
    </>
  ),
  arch: (
    <>
      <path d="M5 3.5c0 9.5 3 16 7 16s7-6.5 7-16" />
      <circle cx="7.3" cy="9" r="1" />
      <circle cx="16.7" cy="9" r="1" />
      <circle cx="9.8" cy="15" r="1" />
      <circle cx="14.2" cy="15" r="1" />
    </>
  ),
  wing: (
    <>
      <rect x="9" y="6.5" width="6" height="11" rx="2" />
      <path d="M9 9H5v6h4M15 9h4v6h-4" />
    </>
  ),
  anchor: (
    <>
      <rect x="4" y="6.5" width="6" height="11" rx="2" />
      <path d="M10 9.5h6a3 3 0 0 1 3 3v2.5a2.5 2.5 0 0 1-2.5 2.5H10" />
    </>
  ),
  smile: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8 13.5c1 1.8 2.3 2.7 4 2.7s3-.9 4-2.7M9 9.5h.01M15 9.5h.01" />
    </>
  ),
};

export const ICON_NAMES = Object.keys(ICONS);

/** One of the icons above by name; nothing when the name is unknown. */
export function BlogIcon({ name, className }: { name?: string; className?: string }) {
  const shape = name ? ICONS[name] : null;
  return shape ? <Line className={className}>{shape}</Line> : null;
}
