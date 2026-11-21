// Splitword service worker: works offline, picks up new versions in the background.
const CACHE = 'splitword-v3';
const CORE = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return; // analytics and fonts go straight to the network
  e.respondWith(caches.open(CACHE).then(async c => {
    const cached = await c.match(req, { ignoreSearch: req.mode === 'navigate' });
    const fresh = fetch(req).then(res => { if (res.ok) c.put(req.mode === 'navigate' ? './' : req, res.clone()); return res; }).catch(() => cached);
    return cached || fresh; // serve instantly from cache, refresh in the background
  }));
});
