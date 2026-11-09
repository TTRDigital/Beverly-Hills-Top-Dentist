# TTR-1434 report: 42 Lead Created events vs 2 lead alerts

I cannot see Ads Manager, so this is what the code and the timeline show. Ads Manager's Event Stream (filter by source URL host and event id) settles it.

## 1. Where lead_created fired (before this PR)
- Only in `trackLead()`, called from `LpForm` (every /lp/ page) and `AppointmentForm` (the main site's appointment and area forms) after the lead API answered with an OK status. Nowhere else: not on page load, scroll, opening the form, button clicks, field focus, or a failed validation (those return before the request).
- It fired for requests the server did NOT keep: a bot (hidden field filled, sent fast) got `200 {ok:true}`, so the browser fired lead_created while no lead was saved and no alert went out. Fixed: the server now answers `delivered:false` and the browser does not fire.
- It fired on every host: the pixel loaded on previews, localhost and test builds. Every Vercel preview of every branch has the real lead API and real CRM webhooks, so a preview test submit was a real lead and a real lead_created. Fixed: the pixel script loads only on beverlyhillstopdentist.com and www; server events only when VERCEL_ENV is production; previews accept the form and send nothing.
- Duplicates: the browser guards one fire per form. The server path would dedupe by id, but without the key it never sent (consistent with the "No recent server-to-server events" warning).

## 2. Why 2 alerts is not comparable
- Lead alerts (email and text) were added on Nov 5 at 22:07 UTC (commit 8861183). lead_created has fired since Nov 3 (commit b6d0c94).
- Alerts exist only in the /lp/ lead API. The main site's appointment and area forms also fire lead_created and send no alert.
- Alerts are sent only when the alert keys are set and the request was kept. Dropped bots send none.

## 3. Likely sources of the 42 (cannot split them without Ads Manager)
1. Test and dev submits, including from previews (all branches) and localhost. Mine are listed below.
2. Bots that were dropped by the form but still fired the browser event.
3. Main-site form submits (not LP only).
4. Real leads from Nov 5 evening on, which did get alerts.

## 4. What I did that could be in the 42 (my tests, today, Nov 9)
- About 19:21 UTC, local test pages on localhost with the real OpenAI pixel script live: up to 3 lead_created and up to 4 phone_call_click (page http://localhost:3115, test name "Test Person", lead API stubbed in the browser). Whether OpenAI accepted them is unknown. source_url host in the Event Stream is localhost.
- Other localhost page loads that day sent no events (the pixel only measures when told to).
- Later runs (21:33 and after) blocked the pixel script and mocked OpenAI: nothing reached OpenAI.
- One request to bzr.openai.com with no key and an empty validate-only body (HTTP 401): no event.

## 5. Real posts from my test runs (the mistake)
Two test runs, about 21:33 to 21:40 UTC on Nov 9, ran the real lead API code with mocks. lib/ghl.ts has three real GoHighLevel webhook URLs in the code, which my mock could not replace, and the sandbox has open internet. So 8 to 10 test submits were posted to all 3 real webhooks (about 24 to 30 posts). GoHighLevel's answers were not visible.
- Each: name "Pat Sample", phone 310-555-0142 (fictitious), email Pat.Sample@Example.com or pat@example.com or none, empty comment, consent true, tags website-lead, chatgpt-ads-landing-page, lp-gum-health, and likely suspected-spam (the test filled the form in under a second), page gum-health, page_url the live gum page address (or localhost), lead_id and event_id random.
- Not reached: TTR OS and OpenAI (mocked to localhost), alert email and text (keys not set).
- Fixed: real webhooks only in production; test-only override GHL_WEBHOOKS_OVERRIDE; the test server cannot reach any non-localhost host (docs/ttr-1434/block-external-fetch.cjs), proven inside the Next server.
