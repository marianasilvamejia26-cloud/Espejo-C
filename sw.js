const CACHE_NAME = 'espejo-c-v3';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(['./index.html']))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)))
    )
  );
  self.clients.claim();
});

// Red primero, para que siempre se vea la versión más reciente que subiste a
// GitHub; si no hay internet, usa la última copia guardada como respaldo.
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request))
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
    clients.openWindow('./index.html')
  );
});
