const CACHE_NAME = "schedule-v4"; // Увеличивай число при обновлении!
const ASSETS = ["./", "./index.html", "./style.css", "./app.js", "./manifest.json"];

self.addEventListener("install", (e) => {
    e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS)));
});

self.addEventListener("activate", (e) => {
    e.waitUntil(caches.keys().then((keys) => Promise.all(
        keys.map((k) => k !== CACHE_NAME && caches.delete(k))
    )));
});

self.addEventListener("fetch", (e) => {
    e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});