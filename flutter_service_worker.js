'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8ba672d93697971031015181d7008c3",
".git/config": "81b7e7a098107136efa8af623af7d1a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "79798a97fd4ec61ece99b9e92b5d152f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "808d037254849e725280453b888ab6dc",
".git/logs/refs/heads/master": "808d037254849e725280453b888ab6dc",
".git/objects/01/b9dcd27b28c9829cffcd1f99d73d3dc6b43d1a": "33552dc013e9f2a91d48a6561d1ccf94",
".git/objects/03/a509cc37f80c51a1a595310349e2cf585086f5": "84f3586fbb4c7f44bc362e7bca504797",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/215b7d63df3abe6d202fd48847bf9584f5fab8": "b862e3983cf33d6abb8c79e41ecdce4b",
".git/objects/07/324bb0e269d1c08cf9af845a5164321f39b362": "a0a80110534ae4b05123aa53676a75e0",
".git/objects/08/3b08bf871c570e2e569993370aafc85d8f9014": "6c1ea4399d10be259fce5e454910acd7",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/16/16cac7e47d8dbc42da06bff8341c55cdb6667e": "74ea63fd0c27f3d378e5719d98c6073f",
".git/objects/18/01917896aeb1f49be215ff46d0666509adb6f5": "29f9445dfe0b45c2c3cede54491c7d9e",
".git/objects/18/2e948fca6617b866c8b4f7861d3bc77abf9bae": "5da0be6feac142f9c707ceb5f6fa7df2",
".git/objects/1c/aa15d8f7a55ad2939ce1d6c79f74d6ddcca0d2": "269dcc8fb13c81adf2d005c2cfa9b48b",
".git/objects/1d/cb353465ff151b253139803d4894944d127fff": "2b7f25aac0a81aad2ab19b40bf6e598f",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/a8ff9c26a6c20dcb938c2d3abf688a2e2ba620": "bf2250f66d443007dfd4459f0f219345",
".git/objects/21/1de66af2cb1beb25fba73a5a92f3a50024372c": "c26f0db8f28817b9ace8e328ad00e792",
".git/objects/22/2b4207aef9538b85e1a4194c251904d7436b73": "da673b30fce714464d559bcced5cff62",
".git/objects/23/d1b2135d6aef1417e77627cff6f39c7c73723e": "e0577c21f5c55f6b2f2fd1d0b81a3dac",
".git/objects/28/64a95e7274adfa177571c0fd59146d4c3a1b37": "4ec4103be7018951d6eb547a269d0471",
".git/objects/2b/723a59db4637910a8a4b63b10215f2a882e12a": "4b65eba65375f2d2d530e78f2370e6d5",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/30/475420820e3a4bff1a381a91e060339aa24f79": "740984eaec225cb0dfc61fb0e1895cad",
".git/objects/38/95a466070a01a5d0038e7b44f55816676fd1df": "e5de0a2a15f8483f423378277c20c53c",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/41/ae036ceee1e04cc63b45b4be12daee281b6d54": "297df37c10c019cd708d0aaac40ac525",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/44/d1514404dd24f24e352d89754fd705c7677489": "9371fe47050a6855ae8a86a71fe37eed",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/54/2759b687c8d3c5ade12f013f60c75e67ad5b66": "6a67454dc7ebc1ca1bde7b93f86807b6",
".git/objects/60/8497983133e701b2f66f684e8546a05c9b6233": "ae6ef0ca190cc74df7755644e9c2ee6d",
".git/objects/61/46c9b42cad4544456e46b0d976656a32dea9a5": "18487820667314381697bc05190c989f",
".git/objects/62/32e60c7ac741f09dd02fef857ffdbe4bb4eeed": "e512ea581768fbe9b6edbb741621a17f",
".git/objects/63/e30d566f6e89f69222529e90c87aff52e024c5": "4982258026e147ff29a5da7e4d115eb3",
".git/objects/73/6ca54bfed454b8030b6386a6e7f4db28e43ad1": "0d337f5177f84dde46ebc89b2b19c6ec",
".git/objects/77/afa8a736fd9f37d12b9d625257246cfa19b4b4": "1ba78a6be7b0ab117e043c6a741071e7",
".git/objects/7b/2dc0f1aee19c405828612b0d569d1a787340ad": "5cc30aec2bf1fa5b3eeb7d74e85d61e1",
".git/objects/80/e706a239ede1f49e353ef8d1fefdcfa8254b74": "5151e2154696f7fdee11e6c543eabaa7",
".git/objects/82/e6f220f3251c9868bf2430a4c91bc487ab8b06": "53c244092a896aa9c33fb31842baa1bf",
".git/objects/87/a3bf7f5fb68e4cdaaaf76012052e3083dc6ed5": "fd51d12447063ebb354794eccc204f54",
".git/objects/8a/5caa0b440930ce78cba032f19e16bf74ae852f": "b4b1151b262bb031d94e66ed82db5a25",
".git/objects/8b/275c5c8ef8d5f2c7484fe9dafd745a5ad5377c": "3f6c3e3a5c4b72cff78618ca160860d5",
".git/objects/8e/b36f1c96078c6d7ff71793c4bba25364ca4183": "70fa458087a63282fe4047562602db4b",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/97/10a02fef79feb77dd343097a647fe17dd39796": "afb6775c6abc7fa021550ced7e03d5c0",
".git/objects/99/64eb0cadc8398307496edd105876c0495decdc": "2fbdfaa850a9c4c0a4989443966647c1",
".git/objects/9a/308eb84b5a7284481057d6645bab6c9336a2fa": "dbb227a729b8d8d0885ac84223d6a506",
".git/objects/9e/a5e7cd80e7bbdbca07cff0e5a9c9740cf8f54f": "f8e210741dc47af5ecc8e5f39383e318",
".git/objects/a4/6b06dbae827f3f51db55d9e6871aef1f6090a3": "11ec56e0020f999843c23dc24f230a25",
".git/objects/a5/1865943c69164f83514b54064f0ff6ab900fb0": "185cc803a24f10ce259f7b300d25b257",
".git/objects/a8/2c6798d388e05652a22cfab4225627e8c11865": "bf3f1314e0b4e8e5e37e7fdd80d13280",
".git/objects/ae/6a8ae098a029b0cf9394fc02c1a5bbc0769000": "0e8f8aa82285ec8d05df319e2271e255",
".git/objects/b0/27eef138150bd2d77d4ca8fe8a6e2565d4f911": "8384a7f4b29ad100415d2eccd25c192f",
".git/objects/b0/7bbae816f6df4c08f3d663388838a4ed1662ad": "b6c2e7f654979a7a61e17f1d7018645a",
".git/objects/b4/ee3ba44311ef44b0b659c702c826211cab8bef": "cb44f854e3b7b43261e717cfb3be9489",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/45de2107ec0ebe257b62d2428230a49a6ae826": "a2f33c625746706599c919bf1e613562",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/bd/6b6685ee76fbc2e6165c327a0cc6030061ef9b": "656d7e32cd30596751450c697edd752f",
".git/objects/c1/dc791d2af5a0b19f9d74a9f1ffdafddd2d2c52": "1e3df894e26141364ed6962f5b489525",
".git/objects/c5/850b2dcab37630cfe3329f7521ad6c8d9a0353": "1af05b54523a943a6dc2ff4a58a23124",
".git/objects/c5/db2f4cb0d9437c73408ed138a36075ded0d3a1": "a9775feaac05d9113239121c2d20f8be",
".git/objects/c5/ec888d034b62cfc699453b97e948cc1596c22d": "1a36ba159bd84d561ef84d3019c8e854",
".git/objects/cd/8d08339d8cb07440acc4d6bcf22a9fe6c119fa": "b18462ac1260bc821c3faa01f4af6ae0",
".git/objects/dc/42824b39b7c5170f94ac8b1da801ed6e94e8ed": "9923f5ab428a1599cbf742181aaa5480",
".git/objects/dd/651223b95c94ee91ba8f15238f3af9d1940eee": "39d1ef930ba784be573bc38c5ebe38f5",
".git/objects/e2/bcdd53d06f0d2f8060691042c4ebf916745cf3": "9295409893e3f3c9ad123fa1f6b24a14",
".git/objects/e3/fa5921dc066e022d74749ae2f56bfa327813bd": "987d59e4b88240c2503e3fe9297cd51d",
".git/objects/ea/94431fb9b319c03629fa983eb04809b0b6f57a": "1d16254f778ce0a6b8d9b9ae531a6ced",
".git/objects/eb/721d404d03df4adc80f37b17caa63d14aaa2c9": "a1ea526cf96d35b0b7e49ad5f6ad1c30",
".git/objects/ee/bf0437638c2579ee3cd8f61461821ae3945dc4": "d2df56a054e274ee0b6350cd202b3eab",
".git/objects/f4/4af8bd533e2536c862b0bfc2f1fcec5421b340": "935396142af464f2443721eb27b0b68e",
".git/objects/f9/6ebff8de96b7262d357b7caf6e37ed2cb2e656": "d8defa21316a1cf9ac9f824ab87706cc",
".git/objects/fb/d6845cfcf4befb36f57075c83c72a960322435": "ca9d2557f01f9c01c21445ddfa3ae2e2",
".git/objects/fe/5a0e338404ea420ca8564784af0920c53751d7": "e80a4f4fa6ce6e0964991067fc3a1aed",
".git/refs/heads/master": "3fc54ee94380e5e350ebdca5cee2e23a",
"assets/AssetManifest.bin": "29e72560658f4c3e49400e1840c5de54",
"assets/AssetManifest.bin.json": "c7fc5188cfa0b0d0bd74a11d970efe5d",
"assets/AssetManifest.json": "f08082944eee9a590dee8b8cfcc2524f",
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
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "5ac7b1937fd2912bb54e80b4907cf840",
"assets/NOTICES": "681e29822bc5f868030ea1101c7eb0be",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7c36d7595f3af06f8bb22fb0be38c7c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "89883e763749bfc832ad46c02524cc1b",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ddcbafb60d7a327efdb1dacb49b0f52b",
"icons/Icon-512.png": "915e827c5eb5a7b1805835ac03fe813a",
"icons/Icon-maskable-192.png": "ddcbafb60d7a327efdb1dacb49b0f52b",
"icons/Icon-maskable-512.png": "915e827c5eb5a7b1805835ac03fe813a",
"index.html": "04916701bd0131c9fd31352bd2fc28de",
"/": "04916701bd0131c9fd31352bd2fc28de",
"main.dart.js": "f23c725dfc2fb549299724fbcd4d3464",
"manifest.json": "fee7f9242adef5a4cbde85fcd85453cb",
"version.json": "14f35ca75969cdf5175ba0aea5f8b81d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
