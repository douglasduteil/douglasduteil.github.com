if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return c[e]||(i=new Promise((async i=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]}))},i=(i,c)=>{Promise.all(i.map(e)).then((e=>c(1===e.length?e[0]:e)))},c={require:Promise.resolve(i)};self.define=(i,n,o)=>{c[i]||(c[i]=Promise.resolve().then((()=>{let c={};const a={uri:location.origin+i.slice(1)};return Promise.all(n.map((i=>{switch(i){case"exports":return c;case"module":return a;default:return e(i)}}))).then((e=>{const i=o(...e);return c.default||(c.default=i),c}))})))}}define("./service-worker.js",["./workbox-21410b98"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"269.js",revision:"d0519f7f39525aa335c58ac38ce20150"},{url:"338.js",revision:"747ffed1a69793674ee34147e0669749"},{url:"54.js",revision:"8b8d4fd3ed461deb94423f1961a382e3"},{url:"805.js",revision:"24761fdba5391a5e9b1a5f41f907186b"},{url:"824.js",revision:"c93fa52fd713c14bcc599f865b116971"},{url:"831.js",revision:"0b811ddda9c1ccfa818093b3172a9b47"},{url:"achievements.html",revision:"74bf416f3aed16c87d555a9730c564c3"},{url:"contact.html",revision:"9bbede2beba57d2ff1c0aeb85134bd3c"},{url:"icons/apple-touch-icon-114x114.png",revision:"1ab95bd500422863e46a8a2c803718c5"},{url:"icons/apple-touch-icon-120x120.png",revision:"bfdb900142801af384836d64ec3e1192"},{url:"icons/apple-touch-icon-144x144.png",revision:"38d3098b8ebf5be088c1d2b147197a22"},{url:"icons/apple-touch-icon-152x152.png",revision:"41eeb7151f72ef76278c28c4459ea4bf"},{url:"icons/apple-touch-icon-57x57.png",revision:"4645fea58f6d6b2fb2abafc269537009"},{url:"icons/apple-touch-icon-60x60.png",revision:"e4c0d86beae37c30cf7245120d3be3e5"},{url:"icons/apple-touch-icon-72x72.png",revision:"e49d2460a294d3fc701d8f82f04c29e9"},{url:"icons/apple-touch-icon-76x76.png",revision:"9e392a62e138e803efa0663828f92056"},{url:"icons/apple-touch-icon-precomposed.png",revision:"4ca576c3f1ebedc18c160c81d6ed6073"},{url:"icons/apple-touch-icon.png",revision:"41eeb7151f72ef76278c28c4459ea4bf"},{url:"icons/browserconfig.xml",revision:"db3a3d8da415cd6b63519f60386292be"},{url:"icons/favicon-160x160.png",revision:"7b489aa708f9f297493945a1f40bec42"},{url:"icons/favicon-16x16.png",revision:"ff92810eed5a5da34ec30344c72901e4"},{url:"icons/favicon-196x196.png",revision:"5a9674b958aa58671d4024256118fb5c"},{url:"icons/favicon-32x32.png",revision:"165014d0267a83a3248355654c3ace8c"},{url:"icons/favicon-96x96.png",revision:"3ade000373d875e48ca9a59ed40efc38"},{url:"icons/favicon.ico",revision:"e158b17383f176dd370e09431676b4c0"},{url:"icons/icon-128x128.png",revision:"d8fa058096d7f5d4a245054ddb615e96"},{url:"icons/icon-144x144.png",revision:"772c70912f02d5b5a206cf0c07a89998"},{url:"icons/icon-152x152.png",revision:"d0c71f4a220b549e55cd8cddb5c23a92"},{url:"icons/icon-192x192.png",revision:"496343a27c84b86a3340c7abf8b6e69e"},{url:"icons/icon-384x384.png",revision:"3c38e4aacdf5463505fc493b62539e4d"},{url:"icons/icon-512x512.png",revision:"bbdd5eba45e966499ad88ba2c9908429"},{url:"icons/icon-72x72.png",revision:"0af6fe5d37bd3e263e275399503b6f03"},{url:"icons/icon-96x96.png",revision:"f3cbef970c15279adc8a813fb3888372"},{url:"icons/mstile-144x144.png",revision:"0fafa2c56a454bae274ca8ddf4579c30"},{url:"icons/mstile-150x150.png",revision:"e6bc948fb93140aa1ff068c11ef7a428"},{url:"icons/mstile-310x150.png",revision:"26c87e16b9360d6d9be27330db6a243c"},{url:"icons/mstile-310x310.png",revision:"e93024f72e03fc3bc414e9c003d9ea07"},{url:"icons/mstile-70x70.png",revision:"81f5712b6d6c1295a7104945cbd6e2e2"},{url:"index.html",revision:"abfd61202ef2a115cb4667c8f8c91afb"},{url:"main.js",revision:"e7de3356c22006bd199c43ad9d18edef"},{url:"main.js.LICENSE.txt",revision:"0d42834e70f1639df599eb22c61f5575"},{url:"manifest.json",revision:"3967afe6d55f9e13ff97eb54b06eacab"},{url:"me.html",revision:"abfd61202ef2a115cb4667c8f8c91afb"},{url:"rockets.html",revision:"7b8e8a9c49710732f3e19d3fe13a18e6"},{url:"sitemap.xml",revision:"d158f9f8dfcb680f705e48e058355578"},{url:"sitemap.xml.gz",revision:"8f04d7eaf87ec80db92bea02ad053999"}],{}),e.registerRoute(/https:\/\/google-analytics\.com\/analytics.js/,new e.CacheFirst({cacheName:"google-analytics-cache",plugins:[]}),"GET"),e.registerRoute(/https:\/\/ajax\.googleapis\.com.*/,new e.CacheFirst({cacheName:"google-ajax-cache",plugins:[]}),"GET"),e.registerRoute(/https:\/\/fonts\.(googleapis|gstatic)\.com.*/,new e.CacheFirst({cacheName:"google-font-cache",plugins:[]}),"GET")}));
