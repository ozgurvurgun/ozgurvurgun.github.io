const staticDevCoffee = "dev-coffee-site-v1";
const assets = [
  "https://ozgurvurgun.github.io/pwa-example/",
  "https://ozgurvurgun.github.io/pwa-example/index.html",
  "https://ozgurvurgun.github.io/pwa-example/css/style.css",
  "https://ozgurvurgun.github.io/pwa-example/js/app.js",
  "https://ozgurvurgun.github.io/pwa-example/images/1667593744391.jpg",
  "https://ozgurvurgun.github.io/pwa-example/images/icons/icon-72x72.png",
  "https://ozgurvurgun.github.io/pwa-example/images/icons/icon-96x96.png",
  "https://ozgurvurgun.github.io/pwa-example/images/icons/icon-128x128.png",
  "https://ozgurvurgun.github.io/pwa-example/images/icons/icon-144x144.png",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then((cache) => {
      cache.addAll(assets);
    })
  );
});
