# TTR-579: Dentist Near Santa Monica

New city page at `/areas-we-serve/santa-monica/`. Approved to publish on Nov 10, 2026: indexable, in the sitemap and on the hub (`approved: true` in the built-in fallback and in the JSON).

- Content lives in Sanity as `areaPage-santa-monica` (id has no dots). Export: `areaPage-santa-monica.json` (made with `npm run seed -- --export-docs=docs/ttr-579/areaPage-santa-monica.json --only=areaPage-santa-monica`; no token, no network).
- Load it from the repo root: `npx sanity dataset import <(jq -c '.[]' docs/ttr-579/areaPage-santa-monica.json) production --missing`. The hero photo is written as `_sanityAsset` (file://./public/...), so import resolves and uploads it. This import step was not run here (no network).
- The same copy is also the built-in fallback in `lib/data/areas.ts`, which is how the Vercel preview shows it before Sanity has the document.
- Template additions (optional fields, hidden when empty, no change to the six live area pages): `byline`, `related`, `trustStrip`. The hub now lists only approved area pages (all six live ones are approved, so it is unchanged).
- Approved is on. If the Sanity document is imported later, it carries `approved: true` too.

## Claims the practice must confirm
1. Byline: by Dr. Nushin Shir only, General & Cosmetic Dentist, linking to /author/dr-nushin-shir/ (Kia). Body copy still names both doctors.
2. Ozone therapy, in-house CBCT 3D scanning, soft tissue lasers, holistic/biological/biomimetic care, mercury-free composite fillings.
3. Specialists work inside the practice and the practice does not refer out (which specialties, if we should name them).
4. "Patients from nearby areas visit us" (FAQ).
5. Wilshire Blvd and Santa Monica Blvd both run from Santa Monica into Beverly Hills; drivers turn onto N. Bedford Dr. (no drive time or distance is given).
6. Parking around Bedford Drive; hours Mon to Thu 8:00 to 5:30, Fri 8:00 to 1:00; insurance answer (reused from live area pages).
7. Services offered: implants (single tooth and full arch), smile makeover, Invisalign® and clear aligners, laser gum treatments, gum contouring, deep cleanings, night guards, TMJ care, sleep apnea treatment.
8. Zip codes 90401 to 90405 (Santa Monica).
9. Phone shows as 310-274-7005 (the site's format); the brief wrote 310.274.7005. Confirm the format.
10. Site-wide `areaServed` schema does not list Santa Monica (left alone to avoid touching live pages).
