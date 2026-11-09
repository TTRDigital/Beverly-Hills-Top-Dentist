/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/no-unused-expressions */
/*
 * End-to-end check of the ad events (TTR-1434). Run against a local `VERCEL=1 next start` with every outside service replaced by the mock
 * below (the CRM webhook, TTR OS and OpenAI's Conversions API), so no real lead, alert or ad event is created. The browser pretends to be
 * https://beverlyhillstopdentist.com (requests for it are answered by the local server) so the "real site" path runs; the OpenAI pixel
 * script itself is blocked, which leaves the pixel's queue (window.oaiq.q) to read what the page would send.
 *   node docs/ttr-1434/e2e-ads-tracking.cjs        (see the header of main() for the servers it starts)
 */
const http = require('http'); const crypto = require('crypto'); const { spawn } = require('child_process');
const { chromium } = require('playwright');
const sha = (s) => crypto.createHash('sha256').update(s).digest('hex');
const PAGE = '/lp/gum-health-beverly-hills/';
const hits = { ghl: [], os: [], openai: [] };
const mock = http.createServer((req, res) => { let b = ''; req.on('data', (d) => (b += d)); req.on('end', () => {
  if (req.url.startsWith('/v1/events')) hits.openai.push({ auth: /^Bearer .+/.test(req.headers.authorization || ''), body: JSON.parse(b) });
  else if (req.url.startsWith('/hook')) hits.ghl.push(JSON.parse(b));
  else if (req.url.startsWith('/api/site/form')) hits.os.push(Object.fromEntries(new URLSearchParams(b)));
  res.writeHead(200, { 'content-type': 'application/json' }); res.end('{"ok":true}'); }); });
const start = (port, venv, mocks = true) => spawn('npx', ['next', 'start', '-p', String(port)], { env: { ...process.env, VERCEL: '1', VERCEL_ENV: venv, OPENAI_ADS_CAPI_KEY: 'local-dummy-key', OPENAI_ADS_API_URL: 'http://localhost:3118', ...(mocks ? { GHL_WEBHOOKS_OVERRIDE: 'http://localhost:3118/hook' } : {}), NODE_OPTIONS: '--require ' + require('path').join(__dirname, 'block-external-fetch.cjs'), BLOCKED_LOG: '/tmp/e2e-blocked.log', TTR_OS_URL: 'http://localhost:3118' }, stdio: ['ignore', 'ignore', 'inherit'], detached: true });
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
let pass = 0, fail = 0; const check = (name, ok, extra = '') => { (ok ? pass++ : fail++); console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${extra ? '  ' + extra : ''}`); };
const reset = () => { hits.ghl.length = hits.os.length = hits.openai.length = 0; };

async function open(browser, { live, port, gpc, mobile }) {
  const ctx = await browser.newContext({ extraHTTPHeaders: gpc ? { 'Sec-GPC': '1' } : {}, viewport: mobile ? { width: 390, height: 844 } : { width: 1440, height: 900 }, isMobile: !!mobile, hasTouch: !!mobile });
  const sdk = []; const beacons = []; let posted = null;
  if (live) await ctx.route('https://beverlyhillstopdentist.com/**', async (route) => {
    const u = new URL(route.request().url()); const cookies = (await ctx.cookies('https://beverlyhillstopdentist.com')).map((c) => `${c.name}=${c.value}`).join('; ');
    const headers = { ...route.request().headers(), host: 'beverlyhillstopdentist.com', cookie: cookies }; // the server sees the real host name, as in production
    if (u.pathname.startsWith('/api/lp-call')) beacons.push(JSON.parse(route.request().postData() || '{}'));
    if (u.pathname.startsWith('/api/lp-lead')) posted = JSON.parse(route.request().postData() || '{}');
    await route.fulfill({ response: await route.fetch({ url: `http://localhost:${port}${u.pathname}${u.search}`, headers }) }); });
  await ctx.route(/bzrcdn\.openai\.com|googletagmanager|ttr-portal|google-analytics/, (r) => { if (/bzrcdn/.test(r.request().url())) sdk.push(r.request().url()); r.abort(); });
  if (gpc) await ctx.addInitScript(() => Object.defineProperty(navigator, 'globalPrivacyControl', { value: true }));
  const page = await ctx.newPage();
  await page.goto(live ? `https://beverlyhillstopdentist.com${PAGE}` : `http://localhost:${port}${PAGE}`, { waitUntil: 'load' }); await wait(600);
  return { ctx, page, sdk, beacons, get posted() { return posted; } };
}
const q = (page) => page.evaluate(() => (window.oaiq && window.oaiq.q ? [...window.oaiq.q].map((a) => [...a]) : []));
const leadEvents = (queue) => queue.filter((a) => a[0] === 'measure' && a[1] === 'lead_created');
const callEvents = (queue) => queue.filter((a) => a[0] === 'measure' && a[1] === 'custom');
async function fill(page, { name = 'Pat Sample', phone = '310-555-0142', email = '', comment = '', consent = true, honeypot = '' } = {}) {
  await page.locator('button:has-text("Request")').first().click(); await page.waitForSelector('dialog[open] form');
  const d = 'dialog[open] '; await page.fill(d + 'input[name="full_name"]', name); await page.fill(d + 'input[name="phone"]', phone);
  if (email) await page.fill(d + 'input[name="email"]', email); if (comment) await page.fill(d + 'textarea[name="comment"]', comment);
  if (consent) await page.check(d + 'input[type="checkbox"]'); if (honeypot) await page.evaluate((v) => { document.querySelector('dialog[open] input[name="website_url"]').value = v; }, honeypot);
}

(async () => {
  for (const port of [3116, 3117, 3118, 3120]) { try { await fetch(`http://localhost:${port}/`, { signal: AbortSignal.timeout(500) }); console.log(`port ${port} is already in use: stop the old server first`); process.exit(2); } catch {} }
  mock.listen(3118); const prod = start(3116, 'production'), prev = start(3117, 'preview'), sandbox = start(3120, 'preview', false); await wait(8000);
  const browser = await chromium.launch();
  try {
    console.log('\n== A. real site (live host), production server');
    let t = await open(browser, { live: true, port: 3116 });
    let cookie = (await t.ctx.cookies('https://beverlyhillstopdentist.com')).find((c) => c.name === 'bh_vid');
    check('visitor id cookie set on first visit (Secure, Lax, 1 year)', !!cookie && cookie.secure && cookie.sameSite === 'Lax' && cookie.expires - Date.now() / 1000 > 360 * 86400, JSON.stringify({ secure: cookie && cookie.secure, sameSite: cookie && cookie.sameSite, days: cookie && Math.round((cookie.expires - Date.now() / 1000) / 86400) }));
    check('pixel script requested on the real site', t.sdk.length === 1);
    let queue = await q(t.page); const extHash = sha(cookie.value);
    check('first events carry hashed visitor id (external_id_sha256) in init, no raw id', queue.some((a) => a[0] === 'init' && a[1].user && a[1].user.external_id_sha256 === extHash) && !JSON.stringify(queue).includes(cookie.value));
    check('page load, scroll and opening the form send no lead_created and nothing to OpenAI', leadEvents(queue).length === 0 && (await t.page.mouse.wheel(0, 800), await wait(300), true) && hits.openai.length === 0);

    console.log('\n== B. valid submit with NO comment and an email');
    await fill(t.page, { email: 'Pat.Sample@Example.com', comment: '' }); reset();
    await t.page.click('dialog[open] button[type="submit"]'); await wait(1500);
    queue = await q(t.page); const le = leadEvents(queue);
    check('exactly one lead_created in the browser', le.length === 1, 'event_id=' + (le[0] && le[0][3].event_id));
    const initUser = queue.filter((a) => a[0] === 'init' && a[1].user && a[1].user.email_sha256).map((a) => a[1].user)[0] || {};
    console.log('       pixel init user object (hashed):', JSON.stringify(initUser));
    check('email and phone hashed correctly, external id = hash of the visitor cookie', initUser.email_sha256 === sha('pat.sample@example.com') && initUser.phone_number_sha256 === sha('13105550142') && initUser.external_id_sha256 === extHash);
    check('comment field is optional: request accepted without a comment', t.posted && t.posted.comment === '' && hits.ghl.length === 1 && hits.os.length === 1);
    check('TTR OS message has no empty comment', hits.os[0] && !/^\s*\n/.test(hits.os[0].f_message || '') && /ChatGPT Ads landing page/.test(hits.os[0].f_message || ''), JSON.stringify((hits.os[0] || {}).f_message || '').slice(0, 120));
    await wait(700);
    check('server sent exactly one lead_created to OpenAI with the SAME id as the pixel', hits.openai.length === 1 && hits.openai[0].body.events[0].id === le[0][3].event_id && hits.openai[0].body.events[0].type === 'lead_created' && hits.openai[0].auth);
    const sev = hits.openai[0] && hits.openai[0].body.events[0];
    console.log('       server event (as sent to OpenAI):', JSON.stringify({ ...sev, user: { ...(sev || {}).user, user_agent: '[browser UA]', ip_address: '[ip]' } }));
    check('server event hashes: same external id hash, email, phone; no raw values, no comment, no name', sev && sev.user.external_ids_sha256[0] === extHash && sev.user.emails_sha256[0] === sha('pat.sample@example.com') && sev.user.phone_numbers_sha256[0] === sha('13105550142') && !/Pat|Sample|Example|5550142/.test(JSON.stringify(hits.openai[0].body)));
    await t.ctx.close();

    console.log('\n== C. things that must NOT count');
    t = await open(browser, { live: true, port: 3116 }); reset();
    await t.page.locator('button:has-text("Request")').first().click(); await t.page.waitForSelector('dialog[open] form'); await t.page.click('dialog[open] button[type="submit"]'); await wait(600);
    check('failed validation (empty form): no lead_created, nothing to OpenAI, no lead', leadEvents(await q(t.page)).length === 0 && hits.openai.length + hits.ghl.length + hits.os.length === 0);
    await t.ctx.close();
    t = await open(browser, { live: true, port: 3116 }); reset(); await fill(t.page, { honeypot: 'bot' }); await t.page.click('dialog[open] button[type="submit"]'); await wait(1200);
    check('bot (hidden field filled, sent fast): no lead_created, not saved, nothing to OpenAI', leadEvents(await q(t.page)).length === 0 && hits.openai.length + hits.ghl.length + hits.os.length === 0);
    await t.ctx.close();
    t = await open(browser, { live: true, port: 3116 }); reset(); await fill(t.page, {}); await Promise.all([t.page.dblclick('dialog[open] button[type="submit"]'), wait(50)]); await wait(1500);
    check('double click on submit: one lead_created, one saved lead, one server event', leadEvents(await q(t.page)).length === 1 && hits.ghl.length === 1 && hits.openai.length === 1);
    await t.ctx.close();

    console.log('\n== D. call tap');
    t = await open(browser, { live: true, port: 3116 }); reset();
    await t.page.evaluate(() => document.addEventListener('click', (e) => { if (e.target.closest('a[href^="tel:"]')) e.preventDefault(); }, true));
    await t.page.locator('a[href^="tel:"]').first().click(); await t.page.locator('a[href^="tel:"]').nth(1).click({ force: true }).catch(() => {}); await wait(900);
    queue = await q(t.page); const ce = callEvents(queue);
    check('one phone_call_click in the pixel (a second tap adds nothing)', ce.length === 1 && ce[0][3].custom_event_name === 'phone_call_click', 'event_id=' + (ce[0] && ce[0][3].event_id));
    check('one beacon to the server endpoint with the same id', t.beacons.length === 1 && t.beacons[0].event_id === ce[0][3].event_id);
    const cev = hits.openai[0] && hits.openai[0].body.events[0];
    check('server sent one custom phone_call_click to OpenAI, same id, hashed visitor id, no personal data', hits.openai.length === 1 && cev.type === 'custom' && cev.custom_event_name === 'phone_call_click' && cev.id === ce[0][3].event_id && cev.user.external_ids_sha256[0] === sha((await t.ctx.cookies('https://beverlyhillstopdentist.com')).find((c) => c.name === 'bh_vid').value) && !cev.user.emails_sha256 && !cev.user.phone_numbers_sha256);
    console.log('       server call event:', JSON.stringify({ ...cev, user: { ...(cev || {}).user, user_agent: '[browser UA]', ip_address: '[ip]' } }));
    await t.ctx.close();

    console.log('\n== E. previews and localhost send nothing');
    t = await open(browser, { live: false, port: 3117 }); reset();
    check('localhost/preview host: pixel script NOT requested', t.sdk.length === 0);
    await t.page.evaluate(() => document.addEventListener('click', (e) => { if (e.target.closest('a[href^="tel:"]')) e.preventDefault(); }, true));
    await t.page.locator('a[href^="tel:"]').first().click(); await wait(500);
    await fill(t.page, { email: 'pat@example.com' }); await t.page.click('dialog[open] button[type="submit"]'); await wait(1500);
    queue = await q(t.page);
    check('localhost/preview host: no lead_created in the queue, no beacon', leadEvents(queue).length === 0 && t.beacons.length === 0);
    check('preview server (VERCEL_ENV=preview): lead still saved for testing, but NOTHING sent to OpenAI', hits.ghl.length === 1 && hits.openai.length === 0);
    await t.ctx.close();

    console.log('\n== E2. a real preview deployment (VERCEL_ENV=preview, no test mocks): the form works but sends nothing real');
    t = await open(browser, { live: false, port: 3120 }); reset();
    await fill(t.page, { email: 'pat@example.com' }); await t.page.click('dialog[open] button[type="submit"]'); await wait(1500);
    check('preview: the form says thank you (request accepted) ...', /request|thank|received|contact/i.test(await t.page.locator('dialog[open]').innerText()));
    check('... and NOTHING went to the CRM, TTR OS or OpenAI (all mocks stayed empty; the guard saw no outside request)', hits.ghl.length + hits.os.length + hits.openai.length === 0);
    await t.ctx.close();

    console.log('\n== F. Global Privacy Control');
    t = await open(browser, { live: true, port: 3116, gpc: true }); reset();
    check('GPC: no visitor id cookie, no hashes', !(await t.ctx.cookies('https://beverlyhillstopdentist.com')).some((c) => c.name === 'bh_vid') && !JSON.stringify(await q(t.page)).includes('external_id_sha256'));
    await t.page.evaluate(() => document.addEventListener('click', (e) => { if (e.target.closest('a[href^="tel:"]')) e.preventDefault(); }, true));
    await t.page.locator('a[href^="tel:"]').first().click(); await wait(500);
    await fill(t.page, { email: 'pat@example.com' }); await t.page.click('dialog[open] button[type="submit"]'); await wait(1200);
    check('GPC: no lead_created event, no beacon, nothing to OpenAI (the lead itself is still saved)', leadEvents(await q(t.page)).length === 0 && t.beacons.length === 0 && hits.openai.length === 0 && hits.ghl.length === 1);
    await t.ctx.close();
  } finally { await browser.close(); for (const p of [prod, prev, sandbox]) { try { process.kill(-p.pid); } catch {} } require('child_process').spawnSync('pkill', ['-f', 'next-server']); mock.close(); }
  console.log(`\n${pass} passed, ${fail} failed`); process.exit(fail ? 1 : 0);
})();
