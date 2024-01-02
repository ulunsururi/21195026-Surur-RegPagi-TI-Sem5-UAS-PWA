const CACHE_NAME = 'firstpwa-v1.0';
const urlsToCache = [
  "/",
  "/nav.html",
  "/index.html",
  "/pages/home.html",
  "/pages/about.html",
  "/pages/blog.html",
  "/pages/contact.html",
  "/css/materialize.min.css",
  "/css/style.css",
  "/js/materialize.min.js",
  "/js/nav.js",
  "/manifest.json",
  "/js/sw-register.js",
  // IMAGES:
  "/img/icons/appstore.png",
  "/img/icons/logo.png",
  "/img/icons/playstore.png",
  "/img/1.jpg",
  "/img/2.png",
  "/img/3.png",
  "/img/4.png",
  "/img/5.png",
  "/img/6.png",
  "/img/7.png",
  "/img/contact.jpg",
  "/img/dicoding.png",
  "/img/fcc-logo.png",
  "/img/desaingrafis.jpg",
  "/img/desainweb.jfif",
  "/img/ulun.png",
  "/img/subben-art.jpg",
  "/img/youtube.jpg",
  // Fonts:
  "https://fonts.googleapis.com/icon?family=Material+Icons",
  "https://use.fontawesome.com/releases/v5.15.1/css/all.css"
];
 
self.addEventListener("install", event => {
  event.waitUntil(
      caches.open(CACHE_NAME).then(function (cache) {
          return cache.addAll(urlsToCache);
      })
  );
});

//menggunakan file yang ada di cache
self.addEventListener("fetch", function(event) {
    event.respondWith(
      caches
        .match(event.request, { cacheName: CACHE_NAME })
        .then(response => {
          if (response) {
            console.log("ServiceWorker: Gunakan aset dari cache: ", response.url);
            return response;
          }
   
          console.log(
            "ServiceWorker: Memuat aset dari server: ",
            event.request.url
          );
          return fetch(event.request);
        })
    );
});
  
// menghapus cache lama
self.addEventListener("activate", function(event) {
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (cacheName !== CACHE_NAME) {
              console.log("ServiceWorker: cache " + cacheName + " dihapus");
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
});