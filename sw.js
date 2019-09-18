var cacheName = 'match-pwa';
var filesToCache = [
  '/',
  '/index.html',
  '/main.js',
  '/js/match-copia2.js',
  '/sounds/beep1.mp3',
  '/sounds/ganador.mp3',
  '/sounds/soundR1.mp3',
  '/sounds/soundR2.mp3',
  '/sounds/soundR3.mp3',
  '/sounds/soundR4.mp3',
  '/sounds/soundR5.mp3',
  '/sounds/soundR6.mp3',
  '/sounds/soundR7.mp3',
  '/sounds/soundR8.mp3',
  '/sounds/soundR9.mp3',
  '/sounds/soundR10.mp3',
  '/sounds/soundR11.mp3',
  '/sounds/soundR12.mp3',
  '/img/bg.jpg',
  '/images/arrowleft.png',
  '/images/grupoR0.png',
  '/images/grupoR.png',
  '/images/grupoG.png',
  '/images/grupoV.png',
  '/images/grupoJ.png',
  '/images/alegre2.gif',
  '/images/audio1.png',
  '/images/audio2.png',
  '/images/cat1.png',
  '/images/cat2.png',
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
