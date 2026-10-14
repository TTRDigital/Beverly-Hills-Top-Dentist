# Beverly Hills Dental website

Next.js 16 (App Router, static export) + Sanity Studio embedded at `/cms`, Tailwind CSS v4, hosted on **SiteGround** as plain files. Rebuild of the WordPress + Elementor site at https://beverlyhillstopdentist.com, built by TTR Digital Marketing on the same architecture as the Pineda's Roofing site.

- **Design:** the old site's look, section by section (sage header, Urbanist type, off-white and near-black bands, green accents). Sizes and spacing were measured from the live pages.
- **Content:** the old site's text, copied word for word, with the same page titles and meta descriptions. Everything is editable in `/cms`. Until Sanity has content (or a field is left empty), the site shows the built-in copy from `lib/data`, so it never breaks.
- **Form:** the appointment form posts to `/api/lead.php` (PHP on SiteGround), which forwards to a GoHighLevel inbound webhook once one is configured.

## Pages (every old URL, same path, trailing slash)

| URL | Route |
|---|---|
| `/` | `app/(site)/page.tsx`: video hero, three approach cards, office slideshow band, technology switcher, smile results carousel, four-ideas cards |
| `/about-us/`, `/before-after/`, `/appointment/`, `/thank-you/` (noindex) | singletons |
| `/services/` | services hub (treatment template) |
| `/services/<category>/` | `[category]`, 5 pages |
| `/services/<category>/<service>/` | `[category]/[service]`, 18 pages |
| `/locations/`, `/locations/mclean/` | hubs (empty on the old site; sections can be added in /cms) |
| `/locations/mclean/<slug>/` | `locations/mclean/[slug]`, 32 pages |
| `/locations/night-guards/` | `locations/[slug]` |
| `/preventive-dentistry-in-northern-virginia/`, `/dental-fillings-in-mclean-va/`, `/dental-fillings-in-mclean-va-2/`, `/dental-bridges-in-mclean-va/` | `[slug]` at the root |
| `/privacy-policy/` | new, linked from the form's consent box (text still to be supplied) |
| `/cms` | Sanity Studio |

All dynamic routes use `generateStaticParams` with `dynamicParams = false`. `/blog/<slug>/` is ready for posts written in /cms (the old site had none).

## Setup

1. **Sanity project:** `q5yxih7t`, dataset `production` (defaults in `sanity/env.ts`).
2. **CORS:** in sanity.io/manage > project q5yxih7t > API > CORS origins, add `https://beverlyhillstopdentist.com`, `https://www.beverlyhillstopdentist.com` and `http://localhost:3000`, each with "Allow credentials". Without it, /cms shows "Add CORS origin".
3. **Local env:** copy `.env.example` to `.env.local`.
4. **Load the content into Sanity (once):** create an Editor token (sanity.io/manage > API > Tokens), put it in `.env.local` as `SANITY_WRITE_TOKEN`, then `npm install && npm run seed`. It uploads 121 files (photos, icons and the hero video) and writes 105 documents. Running it again only adds missing documents; `npm run seed -- --force` overwrites the CMS with the built-in content; `npm run seed -- --dry-run` checks everything without writing. Delete or rotate the token afterwards.
5. **Run:** `npm run dev`, then http://localhost:3000 and http://localhost:3000/cms.

## Hosting on SiteGround

`npm run build` writes the whole site to `out/`: HTML pages, `_next/` scripts, `_img/` WebP photos, `video/`, `api/lead.php` (the form) and `.htaccess` (canonical host, trailing slashes, security headers + CSP, caching, 404 page, /cms deep links). Upload the **contents** of `out/` into the site's `public_html`.

Automatic deploys (`.github/workflows/deploy-siteground.yml`) build and upload over FTPS on every push to this branch or `main`, when Sanity publishes, and from Actions > "Deploy to SiteGround" > Run workflow. Only changed files are uploaded. Until the FTP secrets exist the workflow only builds (the site zip is kept as a run artifact for 14 days).

| Secret | Value |
|---|---|
| `SG_FTP_SERVER` | FTP host (Site Tools > Site > FTP Accounts > Manage > FTP credentials) |
| `SG_FTP_USERNAME` / `SG_FTP_PASSWORD` | an FTP account whose folder is the site's `public_html` |
| `GHL_WEBHOOK_URL` | the GoHighLevel inbound webhook for the appointment form; the workflow writes it to `api/lead-config.php` (never served, see `.htaccess`) |

Optional repository **variables** (not secrets): `GHL_CHAT_WIDGET_ID` (shows the GoHighLevel chat, loaded after the first interaction or 4 s), `GA_ID`, `GTM_ID`. The old site's source had no GA4 or GTM tag, so none is set.

**Publish → live:** in sanity.io/manage > API > Webhooks, add a webhook: URL `https://api.github.com/repos/TTRDigital/Beverly-Hills-Top-Dentist/dispatches`, method POST, triggers create/update/delete, projection `{"event_type": "sanity-publish"}`, headers `Authorization: Bearer <GitHub fine-grained token with Contents: read and write on this repo>` and `Accept: application/vnd.github+json`.

**Go-live:** adding the FTP secrets makes the next push upload into that `public_html`, replacing the WordPress files' `.htaccess` and front page. Point the FTP account at a staging site first, check it, then at the live site (or switch the domain's document root). Turn on Site Tools > Security > SSL Manager (Let's Encrypt) and HTTPS Enforce. `.htaccess` sends `www.` to `https://beverlyhillstopdentist.com`.

## The appointment form

Same fields as the old form (Full Name, Email Address, Phone Number, Comment) plus a consent checkbox that links to the privacy policy. Client and server validation, a hidden honeypot field plus a timing check (a request is dropped only when both say spam; one signal alone is delivered with a `suspected-spam` tag), a per-IP rate limit, UTM/gclid attribution, then a redirect to `/thank-you/`. Payload: flat JSON with `name`, `first_name`, `last_name`, `email`, `phone` (E.164), `phone_raw`, `message`, `consent`, `tags`, `spam_check`, `page_url`, `landing_page`, `referrer` and the UTM fields. **Without a webhook configured the form accepts requests but does not forward them** (the PHP error log says so).

## Editing in /cms

- **Site settings:** name, phone, address, map link, hours, social links, header button, main menu (with both dropdown levels), logos, privacy policy link.
- **Pages:** Home, About, Before & after, Appointment, Thank you, Services hub, Locations hub, McLean hub, Privacy policy.
- **Service categories / Services / Location pages:** each page is a list of sections (Banner, Text band, Photo + accordion, Intro + photo cards, Steps, Photo band, FAQ, Topics checklist + insurance logos, Icon features) that can be edited, reordered, added or removed.
- **Before & after cases** (with where each one shows), **Team**, **Reviews**, **FAQs** (shared questions an FAQ section can include), **Blog posts**.
- Paragraph fields: one box per paragraph; `**double asterisks**` make text bold.

## Development

```bash
npm run dev        # local site
npm run lint       # ESLint
npm run typecheck  # TypeScript
npm run build      # WebP copies + static export to out/
```

Builds in an environment that already sets another project's Sanity variables: `env -u NEXT_PUBLIC_SANITY_PROJECT_ID -u NEXT_PUBLIC_SANITY_DATASET npm run build`.

- `lib/data/*`: built-in content (fallbacks and seed source). `services.ts` and `locations.ts` were generated from the old Elementor markup; `images.ts` lists every photo with alt text.
- `lib/content.ts`: GROQ queries, the merge over fallbacks, and normalization of CMS sections.
- `components/sections/TreatmentSections.tsx`: the treatment template's sections.
- `SANITY_API_URL` (build time, normally unset) points the queries at another host; it was used to build the site against a local GROQ mock of the seeded dataset and confirm all 73 pages render identically from the CMS and from the built-in data.
