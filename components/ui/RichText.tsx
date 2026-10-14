import { Fragment } from "react";

/** One paragraph string with **bold** markers. */
export function Inline({ text }: { text: string }) {
  const parts = text.split("**");
  return (
    <>
      {parts.map((p, i) => (i % 2 ? <strong key={i} className="font-bold">{p}</strong> : <Fragment key={i}>{p}</Fragment>))}
    </>
  );
}

/** Paragraphs from the CMS (plain strings; **bold** allowed). */
export function RichText({ paras, className = "" }: { paras?: string[]; className?: string }) {
  if (!paras?.length) return null;
  return (
    <div className={`prose-p ${className}`}>
      {paras.map((p, i) => (
        <p key={i}>
          <Inline text={p} />
        </p>
      ))}
    </div>
  );
}
