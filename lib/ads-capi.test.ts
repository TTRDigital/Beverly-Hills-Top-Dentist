/* eslint-disable @typescript-eslint/no-explicit-any */
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { afterEach, beforeEach, describe, it } from "node:test";
import { LIVE_HOST, buildBody, sendEvent, sendLeadEvent, type CapiEvent } from "./ads-capi.ts";
import { wasKept } from "./ads-tracking.ts";
import { normName, splitName } from "./ads-normalize.ts";
import { emailText } from "./lead-alerts.ts";

const sha = (s: string) => createHash("sha256").update(s).digest("hex");
const VID = "5b1f0c1e-9d7a-4c55-8f0a-2f6a1c0e7d11";
const lead: CapiEvent = {
  eventId: "lead_abc12345", name: "lead_created", sourceUrl: "https://beverlyhillstopdentist.com/lp/gum-health-beverly-hills/", visitorId: VID, fallbackId: "abc12345-lead",
  email: "  Jane.Doe@Example.com ", phone: "(310) 555-0100", ip: "203.0.113.7", userAgent: "Mozilla/5.0 test-agent", oppref: "opp_123", gpc: false, name_hint: "Jane Doe",
};

describe("server event body", () => {
  it("hashes the visitor id, email and phone (normalized) and sends no raw personal values", () => {
    const body = buildBody(lead, 1_700_000_000_000);
    const ev = body.events[0] as Record<string, any>;
    assert.equal(ev.id, "lead_abc12345");
    assert.equal(ev.type, "lead_created");
    assert.deepEqual(ev.user.external_ids_sha256, [sha(VID)]);
    assert.deepEqual(ev.user.emails_sha256, [sha("jane.doe@example.com")]);
    assert.deepEqual(ev.user.phone_numbers_sha256, [sha("13105550100")]);
    for (const h of [...ev.user.external_ids_sha256, ...ev.user.emails_sha256, ...ev.user.phone_numbers_sha256]) assert.match(h, /^[0-9a-f]{64}$/);
    const json = JSON.stringify(body);
    for (const raw of ["Jane", "jane.doe", "Example.com", "3105550100", "555-0100", VID]) assert.ok(!json.includes(raw), `raw value leaked: ${raw}`);
    assert.equal(ev.oppref, "opp_123");
    assert.equal(ev.data.type, "customer_action");
  });
  it("a call tap is a custom phone_call_click event with the same id and the visitor id hash", () => {
    const ev = buildBody({ eventId: "call_x1y2z3w4", name: "phone_call_click", sourceUrl: "https://beverlyhillstopdentist.com/lp/x/", visitorId: VID, userAgent: "UA", gpc: false }).events[0] as Record<string, any>;
    assert.equal(ev.id, "call_x1y2z3w4");
    assert.equal(ev.type, "custom");
    assert.equal(ev.custom_event_name, "phone_call_click");
    assert.equal(ev.data.type, "custom");
    assert.deepEqual(ev.user.external_ids_sha256, [sha(VID)]);
    assert.equal(ev.user.emails_sha256, undefined);
  });
  it("falls back to the lead id when the visitor cookie is missing or malformed", () => {
    const ev = buildBody({ ...lead, visitorId: "bad id!" }).events[0] as Record<string, any>;
    assert.deepEqual(ev.user.external_ids_sha256, [sha("abc12345-lead")]);
  });
});

describe("TTR-3042: names, page and content events", () => {
  it("names are normalized as OpenAI's docs show, then hashed; the raw name never appears", () => {
    assert.equal(normName("O'Connor"), "oconnor");
    assert.equal(normName("  José "), "josé");
    assert.equal(normName("Mary-Ann"), "maryann");
    assert.deepEqual(splitName("  Jane   van der Berg "), { first: "Jane", last: "van der Berg" });
    const body = buildBody({ ...lead, firstName: "Jane", lastName: "van der Berg" });
    const ev = body.events[0] as Record<string, any>;
    assert.deepEqual(ev.user.first_names_sha256, [sha("jane")]);
    assert.deepEqual(ev.user.last_names_sha256, [sha("vanderberg")]);
    assert.ok(!/van der|Berg/i.test(JSON.stringify(body)));
  });
  it("a lead from the form carries the hashed first and last name", async () => {
    const env = { ...process.env };
    const realFetch = globalThis.fetch;
    let sent: Record<string, any> | undefined;
    globalThis.fetch = (async (_u: string, init: RequestInit) => { sent = JSON.parse(String(init.body)); return new Response("{}", { status: 200 }); }) as typeof fetch;
    process.env.OPENAI_ADS_CAPI_KEY = "k"; process.env.VERCEL_ENV = "production"; delete process.env.OPENAI_ADS_VALIDATE_ONLY;
    try {
      await sendLeadEvent({ eventId: "lead_n1", leadId: "n1-lead", name: "Jane Doe", phone: "3105550100", sourceUrl: "https://beverlyhillstopdentist.com/lp/x/", userAgent: "UA", gpc: false });
      const u = sent!.events[0].user;
      assert.deepEqual(u.first_names_sha256, [sha("jane")]);
      assert.deepEqual(u.last_names_sha256, [sha("doe")]);
      assert.ok(!JSON.stringify(sent).includes("Jane"));
    } finally { globalThis.fetch = realFetch; process.env = { ...env }; }
  });
  it("page_viewed and contents_viewed are standard events with contents data", () => {
    for (const [name, type] of [["page_viewed", "page"], ["contents_viewed", "product"]]) {
      const ev = buildBody({ eventId: "pv_abc123", name, contents: [{ id: "gum-health-beverly-hills", name: "Gum health", content_type: type }], sourceUrl: "https://beverlyhillstopdentist.com/lp/gum-health-beverly-hills/", visitorId: VID, userAgent: "UA", ip: "203.0.113.7", gpc: false }).events[0] as Record<string, any>;
      assert.equal(ev.type, name);
      assert.equal(ev.custom_event_name, undefined);
      assert.equal(ev.data.type, "contents");
      assert.equal(ev.data.contents[0].content_type, type);
      assert.equal(ev.user.ip_address, "203.0.113.7");
      assert.equal(ev.user.user_agent, "UA");
    }
  });
  it("request_appointment_click and form_started are custom events", () => {
    for (const name of ["request_appointment_click", "form_started"]) {
      const ev = buildBody({ eventId: "ra_abc123", name, sourceUrl: "https://beverlyhillstopdentist.com/lp/x/", userAgent: "UA", gpc: false }).events[0] as Record<string, any>;
      assert.equal(ev.type, "custom");
      assert.equal(ev.custom_event_name, name);
      assert.deepEqual(ev.data, { type: "custom" });
    }
  });
});

describe("when events are sent", () => {
  const env = { ...process.env };
  let calls: { url: string; body: Record<string, unknown> }[] = [];
  const realFetch = globalThis.fetch;
  beforeEach(() => {
    calls = [];
    globalThis.fetch = (async (url: string, init: RequestInit) => { calls.push({ url: String(url), body: JSON.parse(String(init.body)) }); return new Response('{"accepted":1}', { status: 200 }); }) as typeof fetch;
    delete process.env.OPENAI_ADS_VALIDATE_ONLY; delete process.env.VERCEL_ENV; delete process.env.OPENAI_ADS_CAPI_KEY;
  });
  afterEach(() => { globalThis.fetch = realFetch; process.env = { ...env }; });

  it("nothing without the key", async () => { assert.equal((await sendEvent(lead)).reason, "no key"); assert.equal(calls.length, 0); });
  it("nothing from previews or local runs", async () => {
    process.env.OPENAI_ADS_CAPI_KEY = "k"; process.env.VERCEL_ENV = "preview";
    assert.equal((await sendEvent(lead)).reason, "not production"); assert.equal(calls.length, 0);
    delete process.env.VERCEL_ENV;
    assert.equal((await sendEvent(lead)).reason, "not production"); assert.equal(calls.length, 0);
  });
  it("production sends once, to the pixel, with a bearer key", async () => {
    process.env.OPENAI_ADS_CAPI_KEY = "k"; process.env.VERCEL_ENV = "production";
    assert.equal((await sendEvent(lead)).status, "sent");
    assert.equal(calls.length, 1);
    assert.match(calls[0].url, /^https:\/\/bzr\.openai\.com\/v1\/events\?pid=/);
    assert.equal(calls[0].body.validate_only, undefined);
  });
  it("validate-only mode works off production and sets validate_only", async () => {
    process.env.OPENAI_ADS_CAPI_KEY = "k"; process.env.OPENAI_ADS_VALIDATE_ONLY = "1";
    assert.equal((await sendEvent(lead)).status, "sent");
    assert.equal(calls[0].body.validate_only, true);
  });
  it("skips Global Privacy Control and test leads", async () => {
    process.env.OPENAI_ADS_CAPI_KEY = "k"; process.env.VERCEL_ENV = "production";
    assert.equal((await sendEvent({ ...lead, gpc: true })).reason, "global privacy control");
    assert.equal((await sendLeadEvent({ eventId: "lead_zz", leadId: "zz-lead", name: "Test Person", phone: "3105550100", sourceUrl: "https://beverlyhillstopdentist.com/", userAgent: "UA", gpc: false })).reason, "test lead");
    assert.equal(calls.length, 0);
  });
});

describe("browser helpers", () => {
  it("only the real site sends ad events", () => {
    for (const h of ["beverlyhillstopdentist.com", "www.beverlyhillstopdentist.com"]) assert.ok(LIVE_HOST.test(h));
    for (const h of ["localhost", "127.0.0.1", "beverly-hills-top-dentist-git-x-ttr15.vercel.app", "beverlyhillstopdentist.com.evil.test", "evilbeverlyhillstopdentist.com"]) assert.ok(!LIVE_HOST.test(h), h);
  });
  it("a request the server dropped (delivered:false) is not a lead", () => {
    assert.equal(wasKept({ ok: true, delivered: false }), false);
    assert.equal(wasKept({ ok: true, delivered: true }), true);
    assert.equal(wasKept({ ok: true }), true); // the old PHP endpoint on the static site
    assert.equal(wasKept(null), true);
  });
});

describe("lead alert with the optional comment", () => {
  const base = { name: "Jane Doe", phone: "3105550100", email: "", page: "Gum health and gum disease treatment", pageUrl: "https://beverlyhillstopdentist.com/lp/gum-health-beverly-hills/" };
  it("no Comment line when the comment is empty", () => {
    for (const comment of ["", "   ", undefined]) assert.ok(!/Comment/.test(emailText({ ...base, comment }).text));
  });
  it("a comment still shows", () => assert.match(emailText({ ...base, comment: "Bleeding gums" }).text, /Comment:\nBleeding gums/));
});
