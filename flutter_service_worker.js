'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1aaf7a0ab4528e6a296214e2f8a586ea",
".git/config": "c02b1dcf45399d26499fd8a8677f8a19",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "0a3adea76c92b7ce9eed637811ef85f3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c5aa74713b72dd101cd2cee7919d61f7",
".git/logs/refs/heads/main": "ad369666a43f034c94addb3effbd916b",
".git/logs/refs/remotes/origin/main": "44785ae8369b1554f3cfe6ba015d1f49",
".git/objects/01/8fdbb00703306de525bb5862ec0d6d05e8c7af": "d77c4bce01523b0143c459ad47926679",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/18/8783977354c1f5f6c4ed5ffc614b3fd46e503a": "6733b2da8c25124a6c5c781a083d8747",
".git/objects/1d/90d5df15addd343fca125b4bf0dcf269745543": "2ef59161d202fd2e5843f0f50d7d8cb8",
".git/objects/1f/272862ade3b0e29256e69d40256d062c468792": "3cef4471a92c4fcfaaaa2166c178277e",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/22/ced8bb7956f0d83de8d26eb66577519ac63c88": "f6fc5f4efef4e73b5b6ff1c479523804",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/37/6a48bbe2a1f95ab2dd3866022bbe1a2157622c": "5016117ff7ba94f5edef1f9f86bbfbc8",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/c73ce2f71e906af93cd29c54bf3b4856dc787b": "8b67bcc72405d948d08e5713197eeb2e",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/41/56cdf4c52e87887e617e38cf1b47a473d67fd7": "a8a9ba93a29d2e4c7b0258eb54fb9ba5",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/696d6a8a67f7faab05584a6c86c591a4213e1c": "9fe7d613ebf4c698b285554d7efaf18a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/56/feddb0c5675f3d696a17a14d6caf12d198d34f": "3c0f4f5cecd6ce9fe2a30edd378e5f10",
".git/objects/68/6f1c261f189b2cf524385d18f2d41e461affc1": "6c963fa53302ae5f74bbe558222be41c",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/d82c6ab93078e477fb4f66488cb52050017960": "c136959a9abe96c5241e4d14907fdfa9",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/3945c016b2373138bf2c9b0e067196cb600be6": "4f2537b2bb69aee8cfe7ce4421e16226",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/aa3dd9d7e8a233ca80fea4defdaee4eb29f658": "4e89c985bb9a7f3d188c10e20a3de450",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/95/5f8086c67dc8b919aaad032bd30bcdd07775e0": "cb64b64f1f807ad79af051bd9854e2d2",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/a2/1d52fe30b839a89a7071ef58a0ca1310734684": "93fad5a258f29cb0d6b44fa47e744047",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/db3e75a0b60d488cc780740e14a8a0348a6401": "e4c462263652cbde5d13da086e19ca3a",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ca/cc79262d40c450bf8c739a5586ef2aa482c107": "40c29ee2bab1b9111ee39d9a6c736f13",
".git/objects/cb/4bc294ebfbd69c0a67d1c53f005d68e9d5764c": "88a40f182acdbde137cfdb6c7d878702",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/df/fd14b3ec98f0c13304339301d58c5be043f34d": "2bdf689425be05575b857de558a1e73c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fa/3b0b542c034256d7d2e2bc64faf428fe0338b9": "cb64de2933484d02f2e33e9206e598b6",
".git/refs/heads/main": "88583b5f8200e258b75a522c0adb15d9",
".git/refs/remotes/origin/main": "88583b5f8200e258b75a522c0adb15d9",
"assets/AssetManifest.bin": "a2b19c0df8dfa2f73bd51d9ff76c30a5",
"assets/AssetManifest.bin.json": "50059375c617d24f09b2ead66a473986",
"assets/AssetManifest.json": "1b0da464cef519fce268c90c09ccd4f9",
"assets/assets/font/Metropolis-Bold.otf": "dea4998b081c6c1133a3b5b08ff2218c",
"assets/assets/font/Metropolis-ExtraBold.otf": "d7eaa8ab58ec03f16c8d08389711f553",
"assets/assets/font/Metropolis-Medium.otf": "f4bca87fd0d19e61c27dc96299c75f8c",
"assets/assets/font/Metropolis-Regular.otf": "f7b5e589f88206b4bd5cb1408c5362e6",
"assets/assets/font/Metropolis-SemiBold.otf": "2556a4f74e2c523893e6928d6e300f1c",
"assets/assets/img/add.png": "30050b9e7d1342d3e70710a01c90276e",
"assets/assets/img/app.png": "f305703f92319bdcc7429f7aae49e062",
"assets/assets/img/AppIcon.png": "f305703f92319bdcc7429f7aae49e062",
"assets/assets/img/app_logo.png": "ca4a8e8ec1034ef42b835a37ccb58a54",
"assets/assets/img/btn_back.png": "d5d051d62d275e26c5d8e9623a945bb7",
"assets/assets/img/btn_next.png": "50dda2a8413e43d80bb202c7740dce0a",
"assets/assets/img/cash.png": "1f953031db18576610af7e8b09b4b361",
"assets/assets/img/check.png": "8eedeb57cb76dd63a10eaef427bc2c16",
"assets/assets/img/dropdown.png": "f0cd9937947a5be83d9e3690b6f9694c",
"assets/assets/img/facebook_logo.png": "38202a021ac69951688cb61c6b669cc1",
"assets/assets/img/favorites_btn.png": "b6cce0c82b80619b432f7baf08f5e2c7",
"assets/assets/img/favorites_btn_2.png": "18038c4ef8cef8aeff5dc345f2e8d850",
"assets/assets/img/fav_icon.png": "9330377d64d94e291bb4e5343a385f46",
"assets/assets/img/google_logo.png": "adf58f1117060bc2ee5f7e676b57e2e3",
"assets/assets/img/image.png": "b11ff6cbbdd5ed890a5df698c93a0022",
"assets/assets/img/item_2.png": "87cb7a81906bff21669c7cc498708936",
"assets/assets/img/location-pin.png": "edde02cc535c74f423497db7368316b2",
"assets/assets/img/map_pin.png": "6f2dde54c401296d3b836230b5b06eb5",
"assets/assets/img/menu_1.png": "34ffb6b9bd0c4d16eabe91d0b0abb4c3",
"assets/assets/img/menu_2.png": "e456f6b030f23adf92540cf5b5bd6161",
"assets/assets/img/menu_3.png": "d3f186bd5704103fc7ca8db74cd9a687",
"assets/assets/img/menu_4.png": "0c4d6d79e88aed0ad4f11fab0bc3a63c",
"assets/assets/img/more_inbox.png": "95abf30ae25ac6b0682b6d23ea71885f",
"assets/assets/img/more_info.png": "4e0179efe80f77cb061e2702390561d6",
"assets/assets/img/more_my_order.png": "47aa32d5cdcfe6ad4dccdb1cbf571b17",
"assets/assets/img/more_notification.png": "84a4acaf149d46beb62fc6c4b210c02a",
"assets/assets/img/more_payment.png": "a7ee42cfee46384d3c753fa68e98d288",
"assets/assets/img/on_boarding_2.png": "5ed08e841fd3a2cac39aeea92f23a51f",
"assets/assets/img/on_boarding_3.png": "60b14f09f936fdc6ca5f44c05b29252c",
"assets/assets/img/paypal.png": "b6d2295455327bf89aaa6105fa928db6",
"assets/assets/img/quickrun.jpeg": "6fcc53f0f2cdc8cdcfd641fdaec1b9df",
"assets/assets/img/rate.png": "e04aec629a857f3b0faf5e70f5b0f614",
"assets/assets/img/search.png": "6c5c30445169b17a6145fe20433c9175",
"assets/assets/img/shopping_add.png": "a25c987e9914a2ec862085b8b5797b33",
"assets/assets/img/shopping_cart.png": "71f26b74b0c34dc1deb2a08480f65a64",
"assets/assets/img/splash_bg.png": "212076bd598ba266747bc232c72063a8",
"assets/assets/img/tab_home.png": "13017c54f3129efff3e1e78a57061ffa",
"assets/assets/img/tab_menu.png": "4341761a3a5ca774f1f0459cbdea8789",
"assets/assets/img/tab_more.png": "acd25cfece38c9e1b42c57e6fa5b04e0",
"assets/assets/img/tab_offer.png": "90ff0160e579a241e3110bd2e64863a5",
"assets/assets/img/tab_order.png": "90ff0160e579a241e3110bd2e64863a5",
"assets/assets/img/tab_profile.png": "f81546c894288017a0a79c06a8e4ed04",
"assets/assets/img/visa_icon.png": "b14f44ca7530d28165d68c62e25ac110",
"assets/FontManifest.json": "eb38a8cb5d0f0c5acfbb632278ac6630",
"assets/fonts/MaterialIcons-Regular.otf": "3ca01651389b75a78d2864c2be4fc0a1",
"assets/NOTICES": "07b3dfcf4ea6c3870cdd92cabd4d0169",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "795c3b63e5e40d786737b1314721e89b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ddfcb533c5c3badc23f5311506a4b7a5",
"/": "ddfcb533c5c3badc23f5311506a4b7a5",
"main.dart.js": "ef11959862e1271fb6794116d87ede18",
"manifest.json": "c7cf728c9af2091f6b99eff454696ae6",
"version.json": "b5ca3808dd9a1baa96fd2359d08117b7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
