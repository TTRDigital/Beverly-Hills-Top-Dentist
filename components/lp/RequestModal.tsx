"use client";

import { useEffect, useRef } from "react";
import { LpForm } from "@/components/lp/LpForm";

/** The request form as a pop-up. Any RequestButton opens it (also the #request link). Native dialog: focus stays inside, Esc closes. */
export function RequestModal({ pageKey, title, button, note }: { pageKey: string; title: string; button: string; note: string }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const open = () => { if (ref.current && !ref.current.open) ref.current.showModal(); };
    window.addEventListener("lp-open", open);
    if (window.location.hash === "#request") open();
    const onHash = () => window.location.hash === "#request" && open();
    window.addEventListener("hashchange", onHash);
    return () => { window.removeEventListener("lp-open", open); window.removeEventListener("hashchange", onHash); };
  }, []);
  const close = () => { ref.current?.close(); if (window.location.hash === "#request") history.replaceState(null, "", window.location.pathname + window.location.search); };
  return (
    <dialog
      ref={ref}
      aria-label={title}
      onClick={(e) => { if (e.target === ref.current) close(); }}
      onCancel={(e) => { e.preventDefault(); close(); }}
      className="m-auto w-[min(94vw,460px)] max-h-[92vh] overflow-visible border-0 bg-transparent p-0 backdrop:bg-black/60 backdrop:backdrop-blur-[2px]"
    >
      <div className="relative max-h-[92vh] overflow-y-auto rounded-[8px]">
        <button type="button" onClick={close} aria-label="Close" className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full text-[22px] leading-none text-body hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-brand-2">
          <span aria-hidden="true">×</span>
        </button>
        <LpForm pageKey={pageKey} title={title} button={button} note={note} />
      </div>
    </dialog>
  );
}

/** A button that opens the request pop-up. */
export function RequestButton({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event("lp-open"))}>
      {children}
    </button>
  );
}
