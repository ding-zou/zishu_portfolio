/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1.jpg",
    "revision": "2515cc7b3465afae9b5ba19c2b7c7fac"
  },
  {
    "url": "404.html",
    "revision": "b16705b10cfea0eee4ad616e540c4222"
  },
  {
    "url": "404/index.html",
    "revision": "9505d47189b68cc3cd6927c1cd183342"
  },
  {
    "url": "5e2a4920-425387d9f21c721d9aed.js"
  },
  {
    "url": "5e2a4920-425387d9f21c721d9aed.js.map",
    "revision": "da21b3766f03117f4558e596cf1d6bf6"
  },
  {
    "url": "app-135b1248a0c46b4e8052.js"
  },
  {
    "url": "app-135b1248a0c46b4e8052.js.LICENSE.txt",
    "revision": "a132a411173507cc7e308c078456c62f"
  },
  {
    "url": "app-135b1248a0c46b4e8052.js.map",
    "revision": "55e3492dbb9ec098b0b598dfa595e91e"
  },
  {
    "url": "bg-gradient.svg",
    "revision": "b8d94b3196f12e347268af0cfaac55c7"
  },
  {
    "url": "bg-image.svg",
    "revision": "687095f61058ef4e3cc8044cab37ef18"
  },
  {
    "url": "chunk-map.json",
    "revision": "d9de69f13bf344e67ad277b3af1bc4be"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-16703ee5599528db9f93.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-16703ee5599528db9f93.js.map",
    "revision": "3540b27ede5d747879836cc7284bc297"
  },
  {
    "url": "component---src-pages-404-js-cd6c54d5f8c4012ea8d7.js"
  },
  {
    "url": "component---src-pages-404-js-cd6c54d5f8c4012ea8d7.js.map",
    "revision": "86e90c565eddbc378a240b7f45352748"
  },
  {
    "url": "component---src-pages-index-js-5a7cce5d0976dda83b89.js"
  },
  {
    "url": "component---src-pages-index-js-5a7cce5d0976dda83b89.js.LICENSE.txt",
    "revision": "000d6c36287224a7ff48f88e64636454"
  },
  {
    "url": "component---src-pages-index-js-5a7cce5d0976dda83b89.js.map",
    "revision": "23a51b85ab49971b660be436f6cd2b8d"
  },
  {
    "url": "d7eeaac4-31f3d1be2885349b0feb.js"
  },
  {
    "url": "d7eeaac4-31f3d1be2885349b0feb.js.map",
    "revision": "c7849db3d1b8ad867cd27be720e39a0b"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "2b3f92c66be711092b3aad8159dc239b"
  },
  {
    "url": "favicon.ico",
    "revision": "3a318e3ceb32f2e06b497c0795ae14cb"
  },
  {
    "url": "favicon.png",
    "revision": "a8c2b1f94376a0ee09ef45d2c266da8c"
  },
  {
    "url": "framework-dac95de3c301f57a114a.js"
  },
  {
    "url": "framework-dac95de3c301f57a114a.js.LICENSE.txt",
    "revision": "2d04beb28a7e5a084e12f5839e351c08"
  },
  {
    "url": "framework-dac95de3c301f57a114a.js.map",
    "revision": "6312231c4ec3273ba942309528e92763"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "6aa69fa27c3ba0f4546169dc6e244df4"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "90515316d09404d38a9f3d5d1bffa926"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "57b810fb73989ed4000665142dac7989"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "db39cfee3b71f9e1bb829d4adb5e22d4"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "3a318e3ceb32f2e06b497c0795ae14cb"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "a8c2b1f94376a0ee09ef45d2c266da8c"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "85ea2ec37c2e6766c0a58176afb38b92"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "2d2d9f28e1e5a9b51e494c57f08f0cfd"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "images/background/background0.jpg",
    "revision": "b0b6c83c5f9cfec66c8e85d5fec6e151"
  },
  {
    "url": "images/background/background1.jpg",
    "revision": "7126ff68858b8f5c144bff21f8879611"
  },
  {
    "url": "images/background/background2.jpg",
    "revision": "5a91ac3925af3dc077f955950eac0cd3"
  },
  {
    "url": "images/background/background3.jpg",
    "revision": "a478deffd26c7b834da642df26391116"
  },
  {
    "url": "images/background/background4.jpg",
    "revision": "40ab7266a0efc77ecbcc8499f1d22c37"
  },
  {
    "url": "images/background/background5.jpg",
    "revision": "95e89140fadc2ad904cc441af8062966"
  },
  {
    "url": "images/illustration/coodo.png",
    "revision": "57e4ef55863b84d9583d4487c187f536"
  },
  {
    "url": "index.html",
    "revision": "5f5ea2f5ae35aacd40cbeefa3a8ece48"
  },
  {
    "url": "logo.png",
    "revision": "c644332bdfd58f347268a53b665a0090"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "574dcf2e5d7dff9de48124349c83043c"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "2e904a549869effdbae4422f1e3b6d7a"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "73b53c376c0c6df9ec96677d201cf94b"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "517e1f8ce5610edb94d7dea4bede4428"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "4096874e2783fb070d654a91a6d2d2eb"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "353fabaff461750be8876e6fbe6a7283"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "page-data/sq/d/1132682437.json",
    "revision": "3b44feb338da4bb3d490115ac0a29ff1"
  },
  {
    "url": "page-data/sq/d/2151593444.json",
    "revision": "10491a5b97b35cf95f4ff2f2f1b6cb51"
  },
  {
    "url": "page-data/sq/d/3649515864.json",
    "revision": "c052ff3f1ddd3e8434763787ef936e57"
  },
  {
    "url": "page-data/sq/d/63159454.json",
    "revision": "38aa315613477bb921d7b63ae52caed7"
  },
  {
    "url": "polyfill-4e4128c817a2dbbb1be6.js"
  },
  {
    "url": "polyfill-4e4128c817a2dbbb1be6.js.map",
    "revision": "d2bebb44c966a3b0a2fb442de91be9d3"
  },
  {
    "url": "static/6d91c86c0fde632ba4cd01062fd9ccfa/2a4de/gatsby-astronaut.png"
  },
  {
    "url": "static/6d91c86c0fde632ba4cd01062fd9ccfa/5db04/gatsby-astronaut.png"
  },
  {
    "url": "static/6d91c86c0fde632ba4cd01062fd9ccfa/62b1f/gatsby-astronaut.png"
  },
  {
    "url": "static/6d91c86c0fde632ba4cd01062fd9ccfa/630fb/gatsby-astronaut.png"
  },
  {
    "url": "static/6d91c86c0fde632ba4cd01062fd9ccfa/6d161/gatsby-astronaut.png"
  },
  {
    "url": "static/6d91c86c0fde632ba4cd01062fd9ccfa/ee604/gatsby-astronaut.png"
  },
  {
    "url": "styles-bc72ca78f9bad9fb1f45.js"
  },
  {
    "url": "styles-bc72ca78f9bad9fb1f45.js.map",
    "revision": "6cc9a9d90f9e4972c33af263e7cea86e"
  },
  {
    "url": "styles.b42b831aabac46709f11.css"
  },
  {
    "url": "webpack-runtime-7e1bd1a1f21a2a46d331.js"
  },
  {
    "url": "webpack-runtime-7e1bd1a1f21a2a46d331.js.map",
    "revision": "3861489dafa61504e3a5949c03bba6e9"
  },
  {
    "url": "webpack.stats.json",
    "revision": "3e69b2a93ba5eee996cf961b0152c50e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^/zishu_portfolio`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/zishu_portfolio/app-135b1248a0c46b4e8052.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/zishu_portfolio/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
