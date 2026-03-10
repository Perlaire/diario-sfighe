var C='dsf-v2';
self.addEventListener('install',function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(['./',  './index.html','./manifest.json']);}));self.skipWaiting();});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==C;}).map(function(x){return caches.delete(x);}));}));self.clients.claim();});
self.addEventListener('fetch',function(e){e.respondWith(caches.match(e.request).then(function(r){return r||fetch(e.request);}));});
