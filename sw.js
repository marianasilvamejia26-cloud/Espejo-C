const CACHE_NAME = 'espejo-c-v1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(['./espejo-c-prototipo.html']))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});

// ---- Aquí llegan las notificaciones push reales (enviadas desde un servidor o
// desde un servicio como OneSignal / Firebase Cloud Messaging) ----
self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : {
    title: '¡Hora de tu registro! 🪞',
    body: '¿Qué aprendiste esta semana? Tómate 2 minutos para reflejarlo en Espejo C.'
  };
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: 'icon-192.png',
      badge: 'icon-192.png'
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('./espejo-c-prototipo.html')
  );
});
