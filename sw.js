const CACHE_NAME = 'alani-care-v1';
const ASSETS = ['/', '/index.html', '/manifest.json'];

// Install: cache core assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: serve from cache, fall back to network
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});

// Push notifications (from a push server)
self.addEventListener('push', e => {
  const data = e.data ? e.data.json() : {};
  const title = data.title || "Alani's Care";
  const options = {
    body: data.body || "You have an upcoming appointment for Alani.",
    icon: '/icons/icon-192.png',
    badge: '/icons/icon-192.png',
    tag: data.tag || 'alani-appt',
    data: { url: data.url || '/' },
    actions: [
      { action: 'open', title: 'View appointment' },
      { action: 'dismiss', title: 'Dismiss' }
    ]
  };
  e.waitUntil(self.registration.showNotification(title, options));
});

// Notification click
self.addEventListener('notificationclick', e => {
  e.notification.close();
  if (e.action === 'dismiss') return;
  e.waitUntil(
    clients.matchAll({ type: 'window' }).then(list => {
      const existing = list.find(c => c.url.includes(self.location.origin));
      if (existing) return existing.focus();
      return clients.openWindow('/');
    })
  );
});
