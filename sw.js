
// Change this to your repository name
var GHPATH = '/pwa1';

// Choose a different app prefix name
var APP_PREFIX = 'pwa1_';

// The version of the cache. Every time you change any of the files
// you need to change this version (version_01, version_02…). 
// If you don't change the version, the service worker will give your
// users the old files!
var VERSION = 'version_00';

// The files to make available for offline use. make sure to add 
// others to this list
var URLS = [    
  `${GHPATH}/`,
  `${GHPATH}/index.html`,
  `${GHPATH}/css/styles.css`,
  `${GHPATH}/js/app.js`
]


self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
});

self.addEventListener("fetch", (e) => {
  console.log("[Service Worker] Fetch");

});

self.addEventListener("activate", (e) => {
  console.log("[Service Worker] Active");

});
