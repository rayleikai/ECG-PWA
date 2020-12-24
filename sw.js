const staticCacheName = 'site-static';
const assets = [
    './index.html',
    './src/index.js',
    './src/index.css',
    'https://code.jquery.com/jquery-3.1.1.min.js', //jQuery
    'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.css', //semantic ui CSS
    'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js', //semantic ui JS
    'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css' //bootstrap CSS
]

//install service worker
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log('caching shell assets');
            cache.addAll(assets);
        })
    );
});

//activate service worker
self.addEventListener('activate', e => {
    console.log('service worker activated');
});

//fetch event
self.addEventListener('fetch', e => {
    console.log('fetch event', e);
    e.respondWith(
        caches.match(e.request).then(cacheRes => {
            return cacheRes || fetch(e.request);
        })
    )
})