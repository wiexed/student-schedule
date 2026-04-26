const CACHE = "schedule-v3"; // Меняй версию здесь для обновления у всех
const ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./manifest.json"
];

// Установка: сохраняем файлы в кэш
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

// Активация: удаляем СТАРЫЕ версии кэша
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => {
        if (key !== CACHE) return caches.delete(key);
      })
    )).then(() => self.clients.claim())
  );
});

// Запрос: сначала кэш, если нет — сеть
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((cache) => cache.put(event.request, copy));
        return res;
      });
    })
  );
});