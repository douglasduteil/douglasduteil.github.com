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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.0.0/workbox-sw.js");

importScripts(
  "precache-manifest.0cc1024b4b829b53f8d06e55756c1505.js"
);

workbox.core.skipWaiting();
workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/https:\/\/google-analytics\.com\/analytics.js/, new workbox.strategies.CacheFirst({ "cacheName":"google-analytics-cache", plugins: [] }), 'GET');
workbox.routing.registerRoute(/https:\/\/ajax\.googleapis\.com.*/, new workbox.strategies.CacheFirst({ "cacheName":"google-ajax-cache", plugins: [] }), 'GET');
workbox.routing.registerRoute(/https:\/\/fonts\.(googleapis|gstatic)\.com.*/, new workbox.strategies.CacheFirst({ "cacheName":"google-font-cache", plugins: [] }), 'GET');
