let cacheName = 'weatherPWA-0.0.1',
  filesToCache = [];

self.addEventListener('install', (e) => {
  console.log('[ServiceWorker] Install');

  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log('[ServiceWorker] Caching app shell');

      return cache.addAll(filesToCache);
    })
  );
});