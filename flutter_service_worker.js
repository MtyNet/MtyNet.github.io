'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0b38f6eb71f565381ac2b896b4778102",
"assets/AssetManifest.bin.json": "634ea1394de7515240e7453ec081edbc",
"assets/AssetManifest.json": "725c24dcecbee2555356b220d2082fb1",
"assets/assets/fonts/Poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/images/logo/Logo.png": "01eb6773b7fe19ed75295b033f2c5f2b",
"assets/assets/images/logo/Logo.svg": "6c9850e66110e0921a08b0beac7f1e7b",
"assets/assets/images/logo/Logo_m.png": "08e6b8e1f5d03f8274bd2eacebb2771a",
"assets/assets/images/logo/Logo_m.svg": "8b5c5684dcb66e67cab4dbd69858913a",
"assets/assets/images/logo/m.svg": "a81b0d393ba4e606de46931e3b8535b2",
"assets/assets/images/svg/1.svg": "7e4a9ed41f742946dfd35d13c24ada78",
"assets/assets/images/svg/10.svg": "d90caed893e5e97118953dfe09a0e686",
"assets/assets/images/svg/12.svg": "0b3fe820326d2403fc593a39abf957ce",
"assets/assets/images/svg/13.svg": "d6bf3945e845c6ce0af7a9fbb30a631f",
"assets/assets/images/svg/14.svg": "29a47eb5bad72e5e7d406dea61652cc1",
"assets/assets/images/svg/15.svg": "66a11df4f88a08643652ba483c176864",
"assets/assets/images/svg/16.svg": "ff0e753344eb9bc4feb18be98357c6cd",
"assets/assets/images/svg/17.svg": "48d3dbcdacb1c20b21c14893b17d0abb",
"assets/assets/images/svg/18.svg": "a1669b9a564fc2c0505123afbaa62689",
"assets/assets/images/svg/19.svg": "39aca9db3eae0fcb12293b255a2de380",
"assets/assets/images/svg/2.svg": "2cd6015aa3f3889a3a74b1a0692f3ed4",
"assets/assets/images/svg/20.svg": "6ab725992d222e11803a4c850a9d56cd",
"assets/assets/images/svg/21.svg": "6ca94b892f652f903e449f8c398c10b7",
"assets/assets/images/svg/22.svg": "fb87cd6d506ebfb8ef59436ca436f6ed",
"assets/assets/images/svg/24.svg": "50cca7433d76794b0ae6601a89c3f67f",
"assets/assets/images/svg/25.svg": "244fddee256f4dd33dffcd3f71026c56",
"assets/assets/images/svg/26.svg": "b0aa5bebb2df001cad7f780fc797e920",
"assets/assets/images/svg/3.svg": "5ce6edeedd92e779a1792e24e631ad3c",
"assets/assets/images/svg/4.svg": "781d4787f3e852fb1589a52c0ad32d1e",
"assets/assets/images/svg/5.svg": "ab52fc02c0f101826afff976fc64919f",
"assets/assets/images/svg/6.svg": "162e1c93dc90dc108dd8527e3b21443c",
"assets/assets/images/svg/7.svg": "b9c7d55a0459f59f1cbca42a9946a9cb",
"assets/assets/images/svg/8.svg": "b076772094aa80169c7a6199624ce6f7",
"assets/assets/images/svg/9.svg": "88373faba8ecec38de020dae8e02f5a2",
"assets/assets/profile/1.jpg": "d719a45ac13bc980ab70c5568f532650",
"assets/assets/profile/2.jpg": "fcf802d2b5ff2f7994c8303a2c9a6272",
"assets/assets/profile/3.jpg": "11b50509b46f90af42ece4e7fc4a37ff",
"assets/assets/profile/4.jpg": "d25a5273c831def7e68709708571a141",
"assets/FontManifest.json": "6e89f5fcb8a346a1751636164db5d810",
"assets/fonts/MaterialIcons-Regular.otf": "8ad128823b384d3370b020f5b3b442a0",
"assets/NOTICES": "7b89c12cac7922a745ea7cc28b411991",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7c36d7595f3af06f8bb22fb0be38c7c",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "89883e763749bfc832ad46c02524cc1b",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ddcbafb60d7a327efdb1dacb49b0f52b",
"icons/Icon-512.png": "915e827c5eb5a7b1805835ac03fe813a",
"icons/Icon-maskable-192.png": "ddcbafb60d7a327efdb1dacb49b0f52b",
"icons/Icon-maskable-512.png": "915e827c5eb5a7b1805835ac03fe813a",
"index.html": "93f0659ecd8b084c68bc5496a2aada97",
"/": "93f0659ecd8b084c68bc5496a2aada97",
"main.dart.js": "e286d5f55871845b79da874c49d06f61",
"manifest.json": "74abda24b22ae3160d98a8dce1dc111e",
"version.json": "14f35ca75969cdf5175ba0aea5f8b81d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
