const staticMonsterTruck = "monster-truck-game-site-v1";
const assets = ["/", "/index.html", "/images/pwa-images/logoadu.png"];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticMonsterTruck).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
