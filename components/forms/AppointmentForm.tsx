"use client";

import { useRouter } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ATTRIBUTION_STORAGE_KEY, attributionKeys } from "@/lib/lead-options";

type Field = "full_name" | "email" | "phone" | "comment";
type Values = Record<Field, string>;
type Errors = Partial<Record<Field | "consent", string>>;

/* Same fields as the old site's form. Client checks; public/api/lead.php checks the same on the server. */
const validators: Record<Field, (v: string) => string | undefined> = {
  full_name: (v) => (v.trim().length < 2 ? "Please enter your full name." : undefined),
  email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? undefined : "Please enter a valid email address."),
  // The old form accepted digits and phone characters only.
  phone: (v) =>
    !/^[0-9()#&+*\-=. ]+$/.test(v.trim()) ? "Only numbers and phone characters (#, -, *, etc) are accepted." : v.replace(/\D/g, "").length < 10 ? "Please enter a phone number with area code." : undefined,
  comment: (v) => (v.length > 3000 ? "Please keep your comment under 3,000 characters." : undefined),
};

const empty: Values = { full_name: "", email: "", phone: "", comment: "" };
const LABELS: Record<Field, string> = { full_name: "Full Name", email: "Email Address", phone: "Phone Number", comment: "Comment" };

/**
 * Appointment request form (Full Name, Email Address, Phone Number, Comment),
 * posted to /api/lead.php. Spam is filtered with a hidden field and a timing
 * check. On success the visitor lands on /thank-you/.
 */
export function AppointmentForm({ buttonLabel, businessName, phone, phoneHref, privacyUrl }: { buttonLabel: string; businessName: string; phone: string; phoneHref: string; privacyUrl: string }) {
  const router = useRouter();
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const startedAt = useRef<number>(0);
  const [values, setValues] = useState<Values>(empty);
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [summary, setSummary] = useState("");

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const required: Field[] = ["full_name", "email", "phone"];

  const setField = (f: Field, v: string) => {
    setValues((s) => ({ ...s, [f]: v }));
    if (touched[f]) setErrors((e) => ({ ...e, [f]: validators[f](v) }));
  };
  const blur = (f: Field) => {
    setTouched((t) => ({ ...t, [f]: true }));
    setErrors((e) => ({ ...e, [f]: validators[f](values[f]) }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    const next: Errors = {};
    for (const f of [...required, "comment"] as Field[]) {
      const msg = validators[f](values[f]);
      if (msg) next[f] = msg;
    }
    if (!consent) next.consent = "Please agree so we can contact you.";
    setErrors(next);
    setTouched({ full_name: true, email: true, phone: true, comment: true });
    const bad = (Object.keys(next) as (Field | "consent")[]).filter((k) => next[k]);
    if (bad.length) {
      setSummary(`Please fix ${bad.length === 1 ? "1 field" : `${bad.length} fields`} below.`);
      formRef.current?.querySelector<HTMLElement>(`#${CSS.escape(`${uid}-${bad[0]}`)}`)?.focus();
      return;
    }
    setSummary("");
    setStatus("sending");

    let attribution: Record<string, string> = {};
    try {
      attribution = JSON.parse(sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY) ?? "{}");
    } catch {
      /* storage unavailable */
    }
    const honeypot = (formRef.current?.elements.namedItem("website_url") as HTMLInputElement | null)?.value ?? "";

    try {
      const res = await fetch("/api/lead.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          consent: true,
          website_url: honeypot,
          elapsed_ms: Date.now() - startedAt.current,
          page_url: window.location.href,
          landing_page: attribution.landing_page ?? "",
          referrer: attribution.referrer ?? document.referrer,
          ...Object.fromEntries(attributionKeys.map((k) => [k, attribution[k] ?? ""])),
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      const w = window as unknown as { gtag?: (...args: unknown[]) => void; dataLayer?: unknown[] };
      w.gtag?.("event", "generate_lead", { form: "appointment" });
      w.dataLayer?.push({ event: "generate_lead", form: "appointment" });
      router.push("/thank-you/");
    } catch {
      setStatus("error");
    }
  };

  const inputCls = (f: Field) =>
    `block w-full rounded-[3px] border bg-paper px-4 text-[15px] text-night outline-none transition-[border-color,box-shadow] focus:border-brand-2 focus:shadow-[0_0_0_3px_rgb(49_121_75/0.35)] ${
      errors[f] ? "border-[#ff9b9b]" : "border-line"
    } ${f === "comment" ? "min-h-[170px] py-2.5" : "min-h-[47px] py-2"}`;

  const err = (f: Field | "consent") =>
    errors[f] ? (
      <p id={`${uid}-${f}-err`} className="mt-1.5 text-sm text-[#ffb3b3]">
        {errors[f]}
      </p>
    ) : null;

  const aria = (f: Field) => ({
    id: `${uid}-${f}`,
    name: f,
    "aria-invalid": errors[f] ? true : undefined,
    "aria-describedby": errors[f] ? `${uid}-${f}-err` : undefined,
    "aria-required": required.includes(f) || undefined,
    onBlur: () => blur(f),
  });

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate aria-label="Request an appointment" className="text-white">
      <p role="alert" aria-live="assertive" className={summary ? "mb-4 text-sm font-semibold text-[#ffb3b3]" : "sr-only"}>
        {summary}
      </p>
      <div className="space-y-[14px]">
        {(["full_name", "email", "phone"] as const).map((f) => (
          <div key={f}>
            <label htmlFor={`${uid}-${f}`} className="mb-2 block text-[15px] font-semibold">
              {LABELS[f]}
              <span className="sr-only"> (required)</span>
            </label>
            <input
              {...aria(f)}
              type={f === "email" ? "email" : f === "phone" ? "tel" : "text"}
              autoComplete={f === "full_name" ? "name" : f === "email" ? "email" : "tel"}
              inputMode={f === "phone" ? "tel" : f === "email" ? "email" : undefined}
              value={values[f]}
              onChange={(e) => setField(f, e.target.value)}
              className={inputCls(f)}
            />
            {err(f)}
          </div>
        ))}
        <div>
          <label htmlFor={`${uid}-comment`} className="mb-2 block text-[15px] font-semibold">
            {LABELS.comment}
          </label>
          <textarea {...aria("comment")} rows={3} value={values.comment} onChange={(e) => setField("comment", e.target.value)} className={inputCls("comment")} />
          {err("comment")}
        </div>

        <div>
          <label htmlFor={`${uid}-consent`} className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-white/85">
            <input
              id={`${uid}-consent`}
              type="checkbox"
              checked={consent}
              onChange={(e) => {
                setConsent(e.target.checked);
                if (e.target.checked) setErrors((er) => ({ ...er, consent: undefined }));
              }}
              aria-invalid={errors.consent ? true : undefined}
              aria-describedby={errors.consent ? `${uid}-consent-err` : undefined}
              className="mt-0.5 h-[18px] w-[18px] shrink-0 accent-[#31794b]"
            />
            <span>
              I agree to be contacted by {businessName} by phone, text or email about my appointment request, and I have read the{" "}
              <a href={privacyUrl} className="font-semibold underline underline-offset-2 hover:text-white">
                Privacy Policy
              </a>
              . Message and data rates may apply. Reply STOP to opt out.
            </span>
          </label>
          {err("consent")}
        </div>
      </div>

      {/* Honeypot: hidden from people, tempting to bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${uid}-website_url`}>Leave this field empty</label>
        <input id={`${uid}-website_url`} name="website_url" type="text" tabIndex={-1} autoComplete="off" data-1p-ignore data-lpignore="true" />
      </div>

      {status === "error" ? (
        <p role="alert" className="mt-4 text-sm text-[#ffb3b3]">
          Something went wrong sending your request. Please try again, or call us at{" "}
          <a href={phoneHref} className="font-semibold underline">
            {phone}
          </a>
          .
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-[14px] block w-full rounded-[3px] bg-brand p-[15px] text-[15px] font-semibold uppercase leading-none tracking-[2px] text-paper transition-colors hover:bg-brand-2 hover:text-white disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : buttonLabel}
      </button>
    </form>
  );
}
