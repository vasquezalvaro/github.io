var cacheName = 'match-pwa';
var filesToCache = [
  '/',
  '/index.html',
  '/main.js',
  '/js/match-copia2.js',
  '/sounds/beep1.mp3',
  '/sounds/ganador.mp3',
  
  '/img/bg.jpg',
  '/images/grupoR0.png',
  '/images/grupoR.png',
  '/images/grupoG.png',
  '/images/grupoV.png',
  '/images/grupoJ.png',
  '/images/alegre2.gif',

  '/jqtouch/jqtouch.css',
  '/jqtouch/jqtouch.js',
  '/jqtouch/jquery-1.7.1.min.js',
  '/jqtouch/jquery-ui-1.10.4.js',
  '/css/match.css'
];


/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
