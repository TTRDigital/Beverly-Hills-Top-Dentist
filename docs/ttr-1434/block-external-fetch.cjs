/* eslint-disable @typescript-eslint/no-require-imports */
/*
 * Test safety (TTR-1434): loaded into the local test server with NODE_OPTIONS=--require. Any fetch to a host other than localhost is refused
 * and logged, so a test run can never reach a real CRM, TTR OS or OpenAI, whatever the code or its env says.
 */
const realFetch = globalThis.fetch;
globalThis.fetch = async (input, init) => {
  const url = typeof input === 'string' ? input : input.url || String(input);
  let host = ''; try { host = new URL(url).hostname; } catch {}
  if (host !== 'localhost' && host !== '127.0.0.1') {
    try { require('fs').appendFileSync(process.env.BLOCKED_LOG || '/tmp/blocked.log', `BLOCKED ${url.slice(0, 120)}\n`); } catch {}
    throw new TypeError('external requests are blocked in this test run: ' + host);
  }
  return realFetch(input, init);
};
