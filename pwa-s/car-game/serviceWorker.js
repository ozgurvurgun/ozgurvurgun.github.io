const staticMonsterTruck = "monster-truck-game-site-v1";
const assets = [
  "https://ozgurvurgun.github.io/pwa-s/car-game/",
  "https://ozgurvurgun.github.io/pwa-s/car-game/index.html",
  "https://ozgurvurgun.github.io/pwa-s/car-game/game.js",
  "https://ozgurvurgun.github.io/pwa-s/car-game/images/game-images/left.png",
  "https://ozgurvurgun.github.io/pwa-s/car-game/images/game-images/restart.png",
  "https://ozgurvurgun.github.io/pwa-s/car-game/images/game-images/right.png",
  "https://ozgurvurgun.github.io/pwa-s/car-game/images/game-images/speed.png",
  "https://ozgurvurgun.github.io/pwa-s/car-game/images/game-images/truck.png",
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
