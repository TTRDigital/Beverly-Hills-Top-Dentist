/*
 * Shared by the browser and the server (no Node imports). Ad events (the ChatGPT Ads pixel and the server Conversions API) are only sent
 * from the real site; Vercel previews, localhost and test builds never send them (TTR-1434).
 */
/** The real site's hosts. */
export const LIVE_HOST = /^(www\.)?beverlyhillstopdentist\.com$/i;
/** The first-party visitor id cookie: a random id set on the first visit; only its SHA-256 goes to OpenAI, on every event. */
export const VISITOR_COOKIE = "bh_vid";
/** What a valid id looks like (a UUID, or any 16 to 64 letters, digits, dashes and underscores). */
export const VISITOR_ID_RE = /^[A-Za-z0-9_-]{16,64}$/;
/*
 * OpenAI's ad click reference (TTR-3042 follow-up, Nov 23): ChatGPT adds ?oppref=... to every ad click. The page keeps it in this
 * first-party cookie for 30 days (OpenAI's click window), so every event, on this page and on the next ones, carries it even when
 * OpenAI's own script (cookie __oppref) has not loaded yet. Only values that look like a reference are kept.
 */
export const OPPREF_COOKIE = "bh_oppref";
export const OPPREF_RE = /^[A-Za-z0-9._~:+/=-]{1,300}$/;
