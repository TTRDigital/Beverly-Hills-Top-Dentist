# TTR-983: Night Guards for Culver City Patients

Page: `/blog/night-guards-culver-city/` (post template: byline, related page card, BlogPosting + FAQPage + BreadcrumbList).
Built-in copy: `lib/data/posts-night-guards-culver-city.ts`. Sanity document: `post-night-guards-culver-city.json` (seed export, no token, no network, no photos).

Load into Sanity: run the "Load content into Sanity" workflow with only=`post-night-guards-culver-city` (uploads the photos and writes the document), or import the JSON and add the photos in /cms.
Regenerate the JSON: `npm run seed -- --only=post-night-guards-culver-city --export-docs=docs/ttr-983/post-night-guards-culver-city.json`

Code changes besides the page: `getPosts` now keeps built-in posts that are not yet in /cms (before, loading one post into Sanity would hide the others); the seed script now writes a post's photos, blocks and call-to-action.
