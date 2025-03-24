self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("pwa-cache-v1").then(function (cache) {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "./service-worker.js",
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
        "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js",
        "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css",
      ]);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
