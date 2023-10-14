// const staticDevCoffee = "dev-coffee-site-v1";
// const assets = [
//   "https://ozgurvurgun.github.io/",
//   "https://ozgurvurgun.github.io/index.html",
//   "https://ozgurvurgun.github.io/css/style.css",
//   "https://ozgurvurgun.github.io/js/app.js",
//   "https://ozgurvurgun.github.io/js/notification.js",
//   "https://ozgurvurgun.github.io/images/1667593744391.jpg",
//   "https://ozgurvurgun.github.io/images/icons/icon-72x72.png",
//   "https://ozgurvurgun.github.io/images/icons/icon-96x96.png",
//   "https://ozgurvurgun.github.io/images/icons/icon-128x128.png",
//   "https://ozgurvurgun.github.io/images/icons/icon-144x144.png",
// ];

// self.addEventListener("install", (installEvent) => {
//   installEvent.waitUntil(
//     caches.open(staticDevCoffee).then((cache) => {
//       cache.addAll(assets);
//     })
//   );
// });

// self.addEventListener("fetch", (fetchEvent) => {
//   fetchEvent.respondWith(
//     caches.match(fetchEvent.request).then((res) => {
//       return res || fetch(fetchEvent.request);
//     })
//   );
// });
