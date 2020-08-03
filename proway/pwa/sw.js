var cacheName = 'hello-pwa';
var fileToCache = [
    '/',
    '/index.html',
    '/css/style.css',
    '/js/main.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e){
    e.waitUntil(
        caches.open(cacheName).then(function(cache){
            return cache.addAll(fileToCache);
        })
    );
});


/* Serve cached content when offiline */
self.addEventListener('fetch', function(e){
    e.respondWith(
        caches.match(e.request).then(function(response){
            return response || fetch(e.request);
        })  
    );
});