const staticAssets=[

 './',

'./index.html',

 './css/style.css',
  './js/EazyDrummer.class.js',
  './js/GuitarPro.class.js',
  './js/drummap.class.js',
 './js/app.js',

'./manifest.json',

'./images/icon144.png',

'./images/icon.png'

];

////////////////////////////////////////////////////////////////////////

// Installation du Service Worker 

//(événement produit automatiquemet lors de l'inscription dans index.js)

////////////////////////////////////////////////////////////////////////

self.addEventListener('install', async event=>{

console.log("SW installé !");

// Sauvegarde en cache perso des éléments importants du site

 const cache = await caches.open('cacheRadio');

 cache.addAll(staticAssets); 

});

///////////////////////////////////////////////

// Comportement du SW pour chaque requete http

///////////////////////////////////////////////

self.addEventListener('fetch', event => {

const req = event.request;

 const url = new URL(req.url);

console.log('url:',req.url, 1, url.pathname);

if(url.origin === location.origin){ 

// Ressources internes au site : cache d'abord

 event.respondWith(cacheFirst(req));

 } else {

//Ressource externe au site : reseau d'abord

 event.respondWith(newtorkFirst(req));

 }

});

/////////////////////////////////////////////////////

// Recherche dans TOUS les caches, sinon fetch reseau

/////////////////////////////////////////////////////

async function cacheFirst(req){ 

 const cachedResponse = await caches.match(req);

console.log('url:',req.url,2);

console.log("Dans un des caches :", cachedResponse);

 return cachedResponse || fetch(req);

}

////////////////////////////////////////////////////////////////

// Recherche sur le réseau et enregistre dans le cache dynamique

////////////////////////////////////////////////////////////////

async function newtorkFirst(req){ 

 const cache = await caches.open('dynamic-cache');

console.log(3);

 try {

 const res = await fetch(req);

console.log("Réseau OK, Mis en cache dynamique : ", res);

 cache.put(req, res.clone());

 return res;

 } catch (error) { // Pas de réseau, on puise dans le cache dynamique

let rep = await cache.match(req);

console.log("Hors réseau, Essai dans cache dynamique :", req.url, " reponse:", rep);

 return rep;

 }

}
