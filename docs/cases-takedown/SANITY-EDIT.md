# Matching Sanity edit (do later, with the CMS key)

The site already hides these in code (lib/content.ts, OWN_CASE_FILES), so this edit only makes Sanity match. Project q5yxih7t, dataset production.

## 1. Delete these 27 beforeAfterCase documents (other practices' or untraced cases)

- `beforeAfterCase-gallery-1` (case-01.jpg)
- `beforeAfterCase-gallery-2` (case-02.jpg)
- `beforeAfterCase-gallery-4` (case-03.jpg)
- `beforeAfterCase-gallery-5` (case-04.jpg)
- `beforeAfterCase-gallery-3` (case-05.jpg)
- `beforeAfterCase-gallery-6` (case-06.jpg)
- `beforeAfterCase-gallery-7` (case-07.jpg)
- `beforeAfterCase-gallery-21` (case-08-b.jpg)
- `beforeAfterCase-gallery-8` (case-08-b.jpg)
- `beforeAfterCase-gallery-9` (case-09.jpg)
- `beforeAfterCase-gallery-10` (case-10.jpg)
- `beforeAfterCase-gallery-11` (case-11.jpg)
- `beforeAfterCase-gallery-12` (case-12.jpg)
- `beforeAfterCase-gallery-13` (case-13.jpg)
- `beforeAfterCase-gallery-14` (case-15.jpg)
- `beforeAfterCase-gallery-15` (case-16.jpg)
- `beforeAfterCase-gallery-16` (case-17.jpg)
- `beforeAfterCase-gallery-17` (case-18.jpg)
- `beforeAfterCase-gallery-18` (case-19.jpg)
- `beforeAfterCase-gallery-19` (case-20.jpg)
- `beforeAfterCase-gallery-20` (case-21.jpg)
- `beforeAfterCase-gallery-mobile-1` (smile-1.webp)
- `beforeAfterCase-gallery-mobile-2` (smile-2.webp)
- `beforeAfterCase-gallery-mobile-3` (smile-3.webp)
- `beforeAfterCase-gallery-mobile-4` (smile-4.webp)
- `beforeAfterCase-gallery-mobile-5` (smile-5.webp)
- `beforeAfterCase-gallery-mobile-6` (smile-6.webp)

## 2. Show the 3 own cases everywhere

Set `groups` to `["results", "gallery", "galleryMobile"]` on:

- `beforeAfterCase-result-1` (smile-result-1.jpg, now ['results'])
- `beforeAfterCase-result-2` (smile-result-2.jpg, now ['results'])
- `beforeAfterCase-result-3` (smile-result-3.jpg, now ['results'])

## 3. Then delete the unused image assets

In /cms > Media (or with the API), delete the uploaded files named case-*.jpg and smile-1..6.webp once nothing references them.

## Adding a case later

Upload it with the patient's written consent, then add its file name to OWN_CASE_FILES in lib/content.ts.
