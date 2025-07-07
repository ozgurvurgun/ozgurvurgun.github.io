const staticNoteCalc = "uni-note-calc-v1";
const assets = [
  "https://ozgurvurgun.github.io/pwa-s/adu-note-calculator/",
  "https://ozgurvurgun.github.io/pwa-s/adu-note-calculator/index.html",
  "https://ozgurvurgun.github.io/pwa-s/adu-note-calculator/images/pwa-images/logoadu.png",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticNoteCalc).then((cache) => {
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
