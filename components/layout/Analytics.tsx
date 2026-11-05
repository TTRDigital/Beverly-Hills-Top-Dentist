// The practice's GA4 web stream, so Vercel builds carry it without an env var ("off" turns it off).
const GA_ID = process.env.NEXT_PUBLIC_GA_ID === "off" ? "" : process.env.NEXT_PUBLIC_GA_ID || "G-L51SGD6QHT";
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
// TTR OS website tracker (visits by source and form leads; no personal data). The site key is public.
const TTR_SITE_KEY = process.env.NEXT_PUBLIC_TTR_SITE_KEY === "off" ? "" : process.env.NEXT_PUBLIC_TTR_SITE_KEY || "upT3tdzrNNsUUjhtnbz_Nw";

/*
 * Clicks on elements with data-track="event_name" (click_to_call, book_appointment)
 * are sent as events, with data-track-page as a "page" parameter so each area page
 * can be reported on its own. Sent to GA4 when it is set up, otherwise to the
 * Tag Manager dataLayer.
 */
const TRACK_CLICKS = `document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('[data-track]');if(!a)return;var n=a.getAttribute('data-track'),p={link_url:a.href||''},pg=a.getAttribute('data-track-page');if(pg)p.page=pg;if(window.gtag)window.gtag('event',n,p);else(window.dataLayer=window.dataLayer||[]).push(Object.assign({event:n},p))});`;

/*
 * Phone calls (TTR-1186): the first tap on any tel: link in a page view is one conversion. GA4 and the dataLayer get phone_call_click
 * (page and where on the page), and the ChatGPT Ads pixel gets a custom event of the same name with a unique event_id (OpenAI has no
 * standard call event; the matching conversion is created in Ads Manager). No number or personal data is sent. Global Privacy Control
 * switches the ad event off through the pixel's consent.
 */
const TRACK_CALLS = `(function(){var fired=false;document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href^="tel:"]');if(!a||fired)return;fired=true;var loc=a.getAttribute('data-track-page')||'';var id='call_'+Date.now().toString(36)+Math.random().toString(36).slice(2,8);var p={page:location.pathname,link_location:loc};if(window.gtag)window.gtag('event','phone_call_click',p);(window.dataLayer=window.dataLayer||[]).push({event:'phone_call_click',page:location.pathname,link_location:loc});if(window.oaiq)window.oaiq('measure','custom',{type:'custom'},{custom_event_name:'phone_call_click',event_id:id})},true)})();`;

/*
 * Google's scripts load after the visitor's first touch, scroll or key press, or after 10 seconds, so they never compete
 * with the first paint (Lighthouse Oct 22: the tag blocked the page for 1.4 s on phones). Events sent before that queue
 * in dataLayer and go out once the tag is in. Nothing loads when the ids are empty.
 */
const GOOGLE_LOADER = `(function(){window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}if(!window.gtag)window.gtag=gtag;${GA_ID ? `gtag('js',new Date());gtag('config','${GA_ID}');` : ""}var done=false;function load(){if(done)return;done=true;${GA_ID ? `var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id=${GA_ID}';document.head.appendChild(s);` : ""}${GTM_ID ? `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');` : ""}}['pointerdown','keydown','scroll','touchstart'].forEach(function(e){addEventListener(e,load,{once:true,passive:true})});setTimeout(load,10000);})();`;

/*
 * ChatGPT Ads measurement pixel (TTR-1157; handoff of Nov 3, 2026). The pixel id is public. The small oaiq queue exists at once so a
 * lead event is never lost. On the main site the SDK loads on the same first touch, scroll, key press or 10 seconds as Google's tag, so it
 * never competes with the first paint. On the /lp/ ad landing pages it loads right away (Nov 5, 2026, ChatGPT ads action plan phase 1),
 * so the ad click reference is read before a quick call or exit; the script is async and does not block the page. Where the browser
 * sends Global Privacy Control, measurement stays off (consent false). Events: lead_created (lib/ads-tracking.ts) and phone_call_click
 * (TRACK_CALLS above). Set NEXT_PUBLIC_CHATGPT_PIXEL=off to turn it off.
 */
const CHATGPT_PIXEL = process.env.NEXT_PUBLIC_CHATGPT_PIXEL === "off" ? "" : process.env.NEXT_PUBLIC_CHATGPT_PIXEL || "3Son8DJqAvAi4ET8SZPsD5";
const chatgptLoader = (now: boolean) => `(function(w,d){if(w.oaiq)return;var q=function(){q.q.push(arguments)};q.q=[];w.oaiq=q;if(navigator.globalPrivacyControl)q("consent",false);q("init",{pixelId:"${CHATGPT_PIXEL}"});var done=false;function load(){if(done)return;done=true;var j=d.createElement("script");j.async=true;j.src="https://bzrcdn.openai.com/sdk/oaiq.min.js";var f=d.getElementsByTagName("script")[0];f.parentNode.insertBefore(j,f)}${now ? "load()" : `["pointerdown","keydown","scroll","touchstart"].forEach(function(e){addEventListener(e,load,{once:true,passive:true})});setTimeout(load,10000)`}})(window,document);`;

/**
 * Google Analytics 4 and/or Tag Manager, the ChatGPT Ads pixel, plus the TTR OS tracker. Nothing loads when the ids are empty.
 * pixelNow loads the ChatGPT Ads SDK at once instead of on first interaction (the /lp/ ad landing pages).
 */
export function Analytics({ pixelNow = false }: { pixelNow?: boolean }) {
  return (
    <>
      {TTR_SITE_KEY ? <script async src="https://ttr-portal.vercel.app/api/site/script" data-site={TTR_SITE_KEY} /> : null}
      {GA_ID || GTM_ID ? <script dangerouslySetInnerHTML={{ __html: GOOGLE_LOADER + TRACK_CLICKS }} /> : null}
      {CHATGPT_PIXEL ? <script dangerouslySetInnerHTML={{ __html: chatgptLoader(pixelNow) + TRACK_CALLS }} /> : null}
    </>
  );
}
