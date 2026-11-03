"use client";

import { useId, useRef, useState } from "react";
import { ATTRIBUTION_STORAGE_KEY } from "@/lib/lead-options";
import { PRACTICE } from "@/lib/lp-pages";

type Errors = Partial<Record<"full_name" | "phone" | "email" | "consent" | "form", string>>;
const URL_KEYS = ["campaign", "ad_group", "ad_id", "oppref", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"] as const;

/**
 * Short request form for the ChatGPT Ads landing pages. Name and phone are required, email is optional, and there is no field for
 * symptoms or medical history. The lead_created ad event goes out once, only after the server accepted the request, and carries no
 * form data. Campaign details travel as hidden fields in the internal lead record.
 */
export function LpForm({ pageKey, title, button, note, id }: { pageKey: string; title: string; button: string; note: string; id?: string }) {
  const uid = useId();
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const startedAt = useRef(0);
  const leadSent = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "").trim();
    const next: Errors = {};
    if (v("full_name").length < 2) next.full_name = "Please enter your full name.";
    if (!/^[0-9()#&+*\-=. ]+$/.test(v("phone")) || v("phone").replace(/\D/g, "").length < 10) next.phone = "Please enter a phone number with area code.";
    if (v("email") && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v("email"))) next.email = "Please enter a valid email address or leave it empty.";
    if (f.get("consent") !== "on") next.consent = "Please agree so we can contact you.";
    setErrors(next);
    const bad = Object.keys(next)[0];
    if (bad) {
      formRef.current?.querySelector<HTMLElement>(`#${CSS.escape(`${uid}-${bad}`)}`)?.focus();
      return;
    }
    setStatus("sending");

    let stored: Record<string, string> = {};
    try {
      stored = JSON.parse(sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY) ?? "{}");
    } catch {
      /* storage unavailable */
    }
    const params = new URLSearchParams(window.location.search);
    const hidden: Record<string, string> = {};
    for (const k of URL_KEYS) hidden[k] = (params.get(k) || stored[k] || "").slice(0, 300);

    try {
      const res = await fetch("/api/lp-lead/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: v("full_name"), phone: v("phone"), email: v("email"), consent: true, page_key: pageKey,
          website_url: v("website_url"), elapsed_ms: Date.now() - startedAt.current,
          page_url: window.location.href.slice(0, 1000), landing_page: (stored.landing_page || window.location.href).slice(0, 1000), referrer: (stored.referrer || document.referrer).slice(0, 1000),
          ...hidden,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      const w = window as unknown as { gtag?: (...a: unknown[]) => void; dataLayer?: unknown[]; oaiq?: (...a: unknown[]) => void };
      w.gtag?.("event", "generate_lead", { form: "landing_page", page: pageKey });
      w.dataLayer?.push({ event: "generate_lead", form: "landing_page", page: pageKey });
      if (!leadSent.current) {
        leadSent.current = true;
        w.oaiq?.("measure", "lead_created", { type: "customer_action" });
      }
      setStatus("sent");
    } catch {
      setStatus("idle");
      setErrors({ form: `We could not send your request. Please call us at ${PRACTICE.phone}.` });
    }
  };

  if (status === "sent") {
    return (
      <div id={id} role="status" className="rounded-[6px] bg-white p-6 text-body shadow-menu">
        <p className="text-h3 font-bold text-ink">Thank you. We received your request.</p>
        <p className="mt-2">Our team will contact you about availability. Your appointment is not confirmed yet.</p>
        <a href={PRACTICE.tel} data-track="click_to_call" data-track-page={pageKey} className="mt-4 inline-flex min-h-[47px] items-center justify-center rounded-[3px] bg-brand px-6 font-bold text-white hover:bg-brand-2">
          Call {PRACTICE.phone}
        </a>
      </div>
    );
  }

  const input = (bad?: string) =>
    `block w-full min-h-[47px] rounded-[3px] border bg-white px-4 py-2 text-[16px] text-ink outline-none transition-[border-color,box-shadow] focus:border-brand-2 focus:shadow-[0_0_0_3px_rgb(49_121_75/0.35)] ${bad ? "border-[#b42318]" : "border-line"}`;
  const err = (k: keyof Errors) => (errors[k] ? <p id={`${uid}-${k}-err`} role="alert" className="mt-1 text-sm font-medium text-[#b42318]">{errors[k]}</p> : null);

  return (
    <form id={id} ref={formRef} onSubmit={onSubmit} onFocus={() => { if (!startedAt.current) startedAt.current = Date.now(); }} noValidate className="rounded-[6px] bg-white p-5 text-body shadow-menu sm:p-6">
      <h2 className="text-h3 font-bold text-ink">{title}</h2>
      <div className="mt-4 space-y-3.5">
        <div>
          <label htmlFor={`${uid}-full_name`} className="mb-1 block text-[15px] font-semibold text-ink">Full name <span aria-hidden="true">*</span></label>
          <input id={`${uid}-full_name`} name="full_name" autoComplete="name" required aria-required="true" aria-invalid={!!errors.full_name || undefined} aria-describedby={errors.full_name ? `${uid}-full_name-err` : undefined} className={input(errors.full_name)} />
          {err("full_name")}
        </div>
        <div>
          <label htmlFor={`${uid}-phone`} className="mb-1 block text-[15px] font-semibold text-ink">Phone <span aria-hidden="true">*</span></label>
          <input id={`${uid}-phone`} name="phone" type="tel" inputMode="tel" autoComplete="tel" required aria-required="true" aria-invalid={!!errors.phone || undefined} aria-describedby={errors.phone ? `${uid}-phone-err` : undefined} className={input(errors.phone)} />
          {err("phone")}
        </div>
        <div>
          <label htmlFor={`${uid}-email`} className="mb-1 block text-[15px] font-semibold text-ink">Email <span className="font-normal text-body">(optional)</span></label>
          <input id={`${uid}-email`} name="email" type="email" inputMode="email" autoComplete="email" aria-invalid={!!errors.email || undefined} aria-describedby={errors.email ? `${uid}-email-err` : undefined} className={input(errors.email)} />
          {err("email")}
        </div>
        <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
          <label>Leave this empty<input name="website_url" tabIndex={-1} autoComplete="off" /></label>
        </div>
        <div>
          <label className="flex items-start gap-3 text-[14px] leading-snug">
            <input id={`${uid}-consent`} name="consent" type="checkbox" aria-invalid={!!errors.consent || undefined} aria-describedby={errors.consent ? `${uid}-consent-err` : undefined} className="mt-0.5 h-5 w-5 shrink-0 accent-[#20472c]" />
            <span>I agree to be contacted by {PRACTICE.name} about my request, by phone, text or email. See the <a href="/privacy-policy/" className="font-semibold text-brand underline">privacy policy</a>.</span>
          </label>
          {err("consent")}
        </div>
      </div>
      {errors.form ? <p role="alert" className="mt-3 text-sm font-medium text-[#b42318]">{errors.form}</p> : null}
      <button type="submit" disabled={status === "sending"} className="mt-5 inline-flex min-h-[50px] w-full items-center justify-center rounded-[3px] bg-brand px-6 text-[16px] font-bold text-white transition-colors hover:bg-brand-2 disabled:cursor-wait disabled:opacity-70">
        {status === "sending" ? "Sending..." : button}
      </button>
      <p className="mt-3 text-[13px] leading-snug text-body">{note}</p>
    </form>
  );
}
