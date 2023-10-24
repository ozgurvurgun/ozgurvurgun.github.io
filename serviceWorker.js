const staticDevCoffee = "dev-qr-menu-site-v2";
const assets = [
  "/",
  "/index.html",
  "/main.js",
  "/apis/Noodles.json",
  "/apis/Sushis.json",
  "/apis/Tavuklar.json",
  "/images/sopung-restaurant/categories/noodles.jpg",
  "/images/sopung-restaurant/categories/sushis.jpg",
  "/images/sopung-restaurant/categories/tavuklar.jpg",
  "/images/sopung-restaurant/products/sebzeli-noodle.jpg",
  "/images/sopung-restaurant/products/somon-sushi.jpg",
  "/images/sopung-restaurant/products/soyali-tavuk.jpg",
  "/images/sopung-restaurant/products/tatli-eksi-noodle.jpg",
  "/images/sopung-restaurant/products/noodles.jpg",
  "/images/logo.png",
  "/styles/style.css"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});