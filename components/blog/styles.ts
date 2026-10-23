/* Shared class strings for the blog, built on the site's tokens: the brand greens, paper and cream, 6px buttons like the home page. */
export const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-[6px] px-6 py-3 text-[15px] font-semibold leading-none transition-[background-color,color,border-color,translate,box-shadow] duration-300 hover:-translate-y-0.5";
export const btnPrimary = `${btnBase} bg-brand text-white hover:bg-brand-2 hover:shadow-[0_12px_24px_rgb(32_71_44_/_0.22)]`;
export const btnOutline = `${btnBase} border border-ink text-ink hover:border-brand-2 hover:bg-brand-2 hover:text-white hover:shadow-[0_12px_24px_rgb(32_71_44_/_0.18)]`;
export const btnOnDark = `${btnBase} bg-white text-brand hover:bg-cream hover:shadow-[0_12px_24px_rgb(0_0_0_/_0.25)]`;
export const card = "rounded-lg bg-white shadow-[0_1px_2px_rgb(33_29_29_/_0.04),0_6px_20px_rgb(33_29_29_/_0.05)]";
export const cardLift = "transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgb(33_29_29_/_0.12)]";
export const pill = "inline-flex items-center rounded-full bg-dropdown px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand";
export const eyebrow = "text-xs font-semibold uppercase tracking-[0.12em] text-brand";
const chipBase =
  "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-[color,background-color,border-color,translate,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgb(33_29_29_/_0.08)]";
export const chip = `${chipBase} border-ink/10 bg-white text-ink hover:border-brand hover:text-brand`;
export const chipActive = `${chipBase} border-brand bg-brand text-white hover:bg-brand-2`;
