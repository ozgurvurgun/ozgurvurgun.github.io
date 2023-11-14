const staticMonsterTruck = "monster-truck-game-site-v1";
const assets = [
  "/",
  "/index.html",
  "/game.js",
  "/images/game-images/left.png",
  "/images/game-images/restart.png",
  "/images/game-images/right.png",
  "/images/game-images/speed.png",
  "/images/game-images/truck.png",
];

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
