const CACHE_NAME = 'cache-v3.25';
const MAX_AGE = 60 * 60 * 1000;          // 1 hour
const HOME_URL = '/index.html';
const STAMP_HEADER = 'sw-cached-at';

// Precached on install. Core files are required, icons are best-effort.
const CORE_URLS = [
  '/',
  '/index.html',
  '/index.js?v=3.25',
  '/gamesdata.js?v=3.25',
  '/manifest.json',
];
const ICON_URLS = [
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
];

/* helpers  */

// Cache key: "/" and "/index.html" share one entry; everything else uses its own URL
function keyFor(request) {
  const url = new URL(request.url);
  if (url.pathname === '/' || url.pathname === HOME_URL) return HOME_URL;
  return request;
}

// Store a copy of the response with a timestamp header so we can expire it after 1 hour
async function putInCache(key, response) {
  // Only full, same-origin, successful responses can be cached (not 206 / opaque / errors)
  if (!response || response.status !== 200 || response.type !== 'basic') return;
  const headers = new Headers(response.headers);
  headers.set(STAMP_HEADER, String(Date.now()));
  const stamped = new Response(await response.clone().blob(), {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
  const cache = await caches.open(CACHE_NAME);
  await cache.put(key, stamped);
}

function isFresh(response) {
  const ts = Number(response.headers.get(STAMP_HEADER));
  return ts > 0 && Date.now() - ts < MAX_AGE;
}

// Always bypass the browser HTTP cache so we truly get the latest file
async function fetchAndCache(request, key) {
  const response = await fetch(request, { cache: 'no-store' });
  await putInCache(key, response);
  return response;
}

/*  strategies  */

// HTML / navigation: network first, cache only when offline
async function networkFirst(request) {
  const key = keyFor(request);
  try {
    return await fetchAndCache(request, key);
  } catch (err) {
    return (await caches.match(key)) || (await caches.match(HOME_URL)) || Response.error();
  }
}

// Other files: use cache if younger than 1 hour, otherwise refetch (stale copy only if offline)
async function freshOrNetwork(request) {
  const key = keyFor(request);
  const cached = await caches.match(key);
  if (cached && isFresh(cached)) return cached;
  try {
    return await fetchAndCache(request, key);
  } catch (err) {
    return cached || Response.error();
  }
}

// Re-download everything in the precache list (used by hourly background refresh)
async function refreshPrecache() {
  const all = [...CORE_URLS, ...ICON_URLS];
  await Promise.all(
    all.map(url =>
      fetchAndCache(new Request(url), keyFor(new Request(url, { method: 'GET' }))).catch(() => {})
    )
  );
}

/*  lifecycle  */

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil((async () => {
    try {
      await Promise.all(CORE_URLS.map(url => fetchAndCache(new Request(url), keyFor(new Request(url)))));
      console.log('Cache successfully initialized');
    } catch (error) {
      console.log('Cache initialization failed:', error);
    }
    // Icons must never break installation
    await Promise.all(
      ICON_URLS.map(url => fetchAndCache(new Request(url), new Request(url)).catch(() => {}))
    );
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(names => Promise.all(names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  if (request.headers.has('range')) return;                       // let the browser handle media ranges
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;                // ignore third-party requests
  if (url.pathname === '/sw.js') return;                          // never cache the worker itself
  if (url.pathname.startsWith('/seraph/')) return;                // game files are large: let the browser/CDN cache them, not this worker

  const isHtml = request.mode === 'navigate' ||
                 url.pathname === '/' ||
                 url.pathname.endsWith('.html');

  event.respondWith(isHtml ? networkFirst(request) : freshOrNetwork(request));
});

/*  hourly background refresh (installed PWAs on Chromium) */

self.addEventListener('periodicsync', event => {
  if (event.tag === 'hourly-refresh') event.waitUntil(refreshPrecache());
});

// Page can also ask for a refresh: reg.active.postMessage('refresh')
self.addEventListener('message', event => {
  if (event.data === 'refresh') event.waitUntil(refreshPrecache());
});
