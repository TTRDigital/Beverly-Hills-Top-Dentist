import { Fragment, type ReactNode } from "react";
import Link from "next/link";

/** **bold** markers inside one run of text. */
function Bold({ text }: { text: string }) {
  const parts = text.split("**");
  return (
    <>
      {parts.map((p, i) => (i % 2 ? <strong key={i} className="font-bold">{p}</strong> : <Fragment key={i}>{p}</Fragment>))}
    </>
  );
}

/** [text](/path/) links: a site path goes through the router, an http(s) address is a plain link. */
const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;
const linkClass = "underline underline-offset-[3px] transition-colors hover:text-brand-2";

/** One paragraph string with **bold** markers and [text](/path/) links. */
export function Inline({ text }: { text: string }) {
  const out: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(LINK)) {
    const at = m.index ?? 0;
    if (at > last) out.push(<Bold key={out.length} text={text.slice(last, at)} />);
    const [, label, href] = m;
    out.push(
      /^https?:/.test(href) ? (
        <a key={out.length} href={href} className={linkClass}>
          {label}
        </a>
      ) : (
        <Link key={out.length} href={href} className={linkClass}>
          {label}
        </Link>
      ),
    );
    last = at + m[0].length;
  }
  if (last < text.length) out.push(<Bold key={out.length} text={text.slice(last)} />);
  return <>{out}</>;
}

/**
 * Paragraphs from the CMS (plain strings; **bold** and [text](/path/) links allowed).
 * A paragraph starting "## " is a heading (h2), "### " a smaller one (h3): blog posts use them for their questions.
 */
export function RichText({ paras, className = "" }: { paras?: string[]; className?: string }) {
  if (!paras?.length) return null;
  return (
    <div className={`prose-p ${className}`}>
      {paras.map((p, i) => {
        if (p.startsWith("## ")) {
          return (
            <h2 key={i} className="mb-3 mt-10 text-h2 font-semibold text-black">
              <Inline text={p.slice(3)} />
            </h2>
          );
        }
        if (p.startsWith("### ")) {
          return (
            <h3 key={i} className="mb-2 mt-8 text-h3 font-semibold text-black">
              <Inline text={p.slice(4)} />
            </h3>
          );
        }
        return (
          <p key={i}>
            <Inline text={p} />
          </p>
        );
      })}
    </div>
  );
}
