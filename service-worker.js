const c=location.pathname.split("/").slice(0,-1).join("/"),re=[c+"/_app/immutable/entry/app.WER_evAP.js",c+"/_app/immutable/nodes/0.C2dGvnze.js",c+"/_app/immutable/assets/0.Csj6We-L.css",c+"/_app/immutable/nodes/1.C_lrgrTw.js",c+"/_app/immutable/nodes/2.B73GlQws.js",c+"/_app/immutable/assets/2.CVEEU6Ve.css",c+"/_app/immutable/nodes/3.Bo0z2p97.js",c+"/_app/immutable/nodes/4.CLJRj8Q0.js",c+"/_app/immutable/assets/4.F-RyaYQG.css",c+"/_app/immutable/nodes/5.C_U5ULb3.js",c+"/_app/immutable/assets/5.PbGU-YKH.css",c+"/_app/immutable/nodes/6.DtJr9IkG.js",c+"/_app/immutable/assets/6.DsQloFjp.css",c+"/_app/immutable/nodes/7.CTiZ5quC.js",c+"/_app/immutable/assets/7.C9NOBRDw.css",c+"/_app/immutable/chunks/AVCrhE3I.js",c+"/_app/immutable/chunks/B6Lm0ONh.js",c+"/_app/immutable/chunks/BQsLOUf2.js",c+"/_app/immutable/chunks/BZa-WXVS.js",c+"/_app/immutable/chunks/Bk7Zs2We.js",c+"/_app/immutable/chunks/Bur8RKXN.js",c+"/_app/immutable/chunks/Byu5b_2x.js",c+"/_app/immutable/chunks/C-bFC117.js",c+"/_app/immutable/chunks/C1FmrZbK.js",c+"/_app/immutable/chunks/CYgJF_JY.js",c+"/_app/immutable/chunks/CZs92u6-.js",c+"/_app/immutable/chunks/CaAv83IY.js",c+"/_app/immutable/chunks/CyFTrD3X.js",c+"/_app/immutable/chunks/D9ebm0um.js",c+"/_app/immutable/chunks/DPNyiErU.js",c+"/_app/immutable/chunks/DWtzsjkA.js",c+"/_app/immutable/chunks/DZp-aQjw.js",c+"/_app/immutable/chunks/VEJomi24.js",c+"/_app/immutable/chunks/fb5ZHOpG.js",c+"/_app/immutable/chunks/q7RTs0MN.js",c+"/_app/immutable/chunks/u3w9I6LA.js",c+"/_app/immutable/entry/start.CFusqnQb.js",c+"/_app/immutable/chunks/BzkQ6l-A.js"],ie=[c+"/favicon.ico",c+"/icons/apple-touch-icon-114x114.png",c+"/icons/apple-touch-icon-120x120.png",c+"/icons/apple-touch-icon-144x144.png",c+"/icons/apple-touch-icon-152x152.png",c+"/icons/apple-touch-icon-57x57.png",c+"/icons/apple-touch-icon-60x60.png",c+"/icons/apple-touch-icon-72x72.png",c+"/icons/apple-touch-icon-76x76.png",c+"/icons/apple-touch-icon-precomposed.png",c+"/icons/apple-touch-icon.png",c+"/icons/browserconfig.xml",c+"/icons/favicon-160x160.png",c+"/icons/favicon-16x16.png",c+"/icons/favicon-196x196.png",c+"/icons/favicon-32x32.png",c+"/icons/favicon-96x96.png",c+"/icons/favicon.ico",c+"/icons/icon-128x128.png",c+"/icons/icon-144x144.png",c+"/icons/icon-152x152.png",c+"/icons/icon-192x192.png",c+"/icons/icon-384x384.png",c+"/icons/icon-512x512.png",c+"/icons/icon-72x72.png",c+"/icons/icon-96x96.png",c+"/icons/mstile-144x144.png",c+"/icons/mstile-150x150.png",c+"/icons/mstile-310x150.png",c+"/icons/mstile-310x310.png",c+"/icons/mstile-70x70.png",c+"/manifest.json",c+"/mini_me.jpeg"],ce=[c+"/",c+"/achievements",c+"/contact",c+"/me",c+"/rockets"],$="1737496483245";try{self["workbox:core:7.2.0"]&&_()}catch{}const oe=(n,...e)=>{let t=n;return e.length>0&&(t+=` :: ${JSON.stringify(e)}`),t},ue=oe;class h extends Error{constructor(e,t){const s=ue(e,t);super(s),this.name=e,this.details=t}}const le=new Set,m={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:typeof registration<"u"?registration.scope:""},N=n=>[m.prefix,n,m.suffix].filter(e=>e&&e.length>0).join("-"),he=n=>{for(const e of Object.keys(m))n(e)},k={updateDetails:n=>{he(e=>{typeof n[e]=="string"&&(m[e]=n[e])})},getGoogleAnalyticsName:n=>n||N(m.googleAnalytics),getPrecacheName:n=>n||N(m.precache),getPrefix:()=>m.prefix,getRuntimeName:n=>n||N(m.runtime),getSuffix:()=>m.suffix};function B(n,e){const t=new URL(n);for(const s of e)t.searchParams.delete(s);return t.href}async function de(n,e,t,s){const a=B(e.url,t);if(e.url===a)return n.match(e,s);const i=Object.assign(Object.assign({},s),{ignoreSearch:!0}),r=await n.keys(e,i);for(const o of r){const u=B(o.url,t);if(a===u)return n.match(o,s)}}let b;function fe(){if(b===void 0){const n=new Response("");if("body"in n)try{new Response(n.body),b=!0}catch{b=!1}b=!1}return b}class pe{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}async function me(){for(const n of le)await n()}const ye=n=>new URL(String(n),location.href).href.replace(new RegExp(`^${location.origin}`),"");function z(n){return new Promise(e=>setTimeout(e,n))}function F(n,e){const t=e();return n.waitUntil(t),t}async function ge(n,e){let t=null;if(n.url&&(t=new URL(n.url).origin),t!==self.location.origin)throw new h("cross-origin-copy-response",{origin:t});const s=n.clone(),i={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},r=fe()?s.body:await s.blob();return new Response(r,i)}function we(){self.addEventListener("activate",()=>self.clients.claim())}try{self["workbox:precaching:7.2.0"]&&_()}catch{}const _e="__WB_REVISION__";function be(n){if(!n)throw new h("add-to-cache-list-unexpected-type",{entry:n});if(typeof n=="string"){const i=new URL(n,location.href);return{cacheKey:i.href,url:i.href}}const{revision:e,url:t}=n;if(!t)throw new h("add-to-cache-list-unexpected-type",{entry:n});if(!e){const i=new URL(t,location.href);return{cacheKey:i.href,url:i.href}}const s=new URL(t,location.href),a=new URL(t,location.href);return s.searchParams.set(_e,e),{cacheKey:s.href,url:a.href}}class Re{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if(e.type==="install"&&t&&t.originalRequest&&t.originalRequest instanceof Request){const a=t.originalRequest.url;s?this.notUpdatedURLs.push(a):this.updatedURLs.push(a)}return s}}}class Ce{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:t,params:s})=>{const a=(s==null?void 0:s.cacheKey)||this._precacheController.getCacheKeyForURL(t.url);return a?new Request(a,{headers:t.headers}):t},this._precacheController=e}}try{self["workbox:strategies:7.2.0"]&&_()}catch{}function T(n){return typeof n=="string"?new Request(n):n}class Ee{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new pe,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const s of this._plugins)this._pluginStateMap.set(s,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let s=T(e);if(s.mode==="navigate"&&t instanceof FetchEvent&&t.preloadResponse){const r=await t.preloadResponse;if(r)return r}const a=this.hasCallback("fetchDidFail")?s.clone():null;try{for(const r of this.iterateCallbacks("requestWillFetch"))s=await r({request:s.clone(),event:t})}catch(r){if(r instanceof Error)throw new h("plugin-error-request-will-fetch",{thrownErrorMessage:r.message})}const i=s.clone();try{let r;r=await fetch(s,s.mode==="navigate"?void 0:this._strategy.fetchOptions);for(const o of this.iterateCallbacks("fetchDidSucceed"))r=await o({event:t,request:i,response:r});return r}catch(r){throw a&&await this.runCallbacks("fetchDidFail",{error:r,event:t,originalRequest:a.clone(),request:i.clone()}),r}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=T(e);let s;const{cacheName:a,matchOptions:i}=this._strategy,r=await this.getCacheKey(t,"read"),o=Object.assign(Object.assign({},i),{cacheName:a});s=await caches.match(r,o);for(const u of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await u({cacheName:a,matchOptions:i,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(e,t){const s=T(e);await z(0);const a=await this.getCacheKey(s,"write");if(!t)throw new h("cache-put-with-no-response",{url:ye(a.url)});const i=await this._ensureResponseSafeToCache(t);if(!i)return!1;const{cacheName:r,matchOptions:o}=this._strategy,u=await self.caches.open(r),l=this.hasCallback("cacheDidUpdate"),w=l?await de(u,a.clone(),["__WB_REVISION__"],o):null;try{await u.put(a,l?i.clone():i)}catch(f){if(f instanceof Error)throw f.name==="QuotaExceededError"&&await me(),f}for(const f of this.iterateCallbacks("cacheDidUpdate"))await f({cacheName:r,oldResponse:w,newResponse:i.clone(),request:a,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const i of this.iterateCallbacks("cacheKeyWillBeUsed"))a=T(await i({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if(typeof t[e]=="function"){const s=this._pluginStateMap.get(t);yield i=>{const r=Object.assign(Object.assign({},i),{state:s});return t[e](r)}}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const a of this.iterateCallbacks("cacheWillUpdate"))if(t=await a({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&t.status!==200&&(t=void 0),t}}class D{constructor(e={}){this.cacheName=k.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s=typeof e.request=="string"?new Request(e.request):e.request,a="params"in e?e.params:void 0,i=new Ee(this,{event:t,request:s,params:a}),r=this._getResponse(i,s,t),o=this._awaitComplete(r,i,s,t);return[r,o]}async _getResponse(e,t,s){await e.runCallbacks("handlerWillStart",{event:s,request:t});let a;try{if(a=await this._handle(t,e),!a||a.type==="error")throw new h("no-response",{url:t.url})}catch(i){if(i instanceof Error){for(const r of e.iterateCallbacks("handlerDidError"))if(a=await r({error:i,event:s,request:t}),a)break}if(!a)throw i}for(const i of e.iterateCallbacks("handlerWillRespond"))a=await i({event:s,request:t,response:a});return a}async _awaitComplete(e,t,s,a){let i,r;try{i=await e}catch{}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:i}),await t.doneWaiting()}catch(o){o instanceof Error&&(r=o)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:i,error:r}),t.destroy(),r)throw r}}class y extends D{constructor(e={}){e.cacheName=k.getPrecacheName(e.cacheName),super(e),this._fallbackToNetwork=e.fallbackToNetwork!==!1,this.plugins.push(y.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&t.event.type==="install"?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;const a=t.params||{};if(this._fallbackToNetwork){const i=a.integrity,r=e.integrity,o=!r||r===i;s=await t.fetch(new Request(e,{integrity:e.mode!=="no-cors"?r||i:void 0})),i&&o&&e.mode!=="no-cors"&&(this._useDefaultCacheabilityPluginIfNeeded(),await t.cachePut(e,s.clone()))}else throw new h("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return s}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const s=await t.fetch(e);if(!await t.cachePut(e,s.clone()))throw new h("bad-precaching-response",{url:e.url,status:s.status});return s}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==y.copyRedirectedCacheableResponsesPlugin&&(a===y.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);t===0?this.plugins.push(y.defaultPrecacheCacheabilityPlugin):t>1&&e!==null&&this.plugins.splice(e,1)}}y.defaultPrecacheCacheabilityPlugin={async cacheWillUpdate({response:n}){return!n||n.status>=400?null:n}};y.copyRedirectedCacheableResponsesPlugin={async cacheWillUpdate({response:n}){return n.redirected?await ge(n):n}};class ke{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new y({cacheName:k.getPrecacheName(e),plugins:[...t,new Ce({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const s of e){typeof s=="string"?t.push(s):s&&s.revision===void 0&&t.push(s.url);const{cacheKey:a,url:i}=be(s),r=typeof s!="string"&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(i)&&this._urlsToCacheKeys.get(i)!==a)throw new h("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(i),secondEntry:a});if(typeof s!="string"&&s.integrity){if(this._cacheKeysToIntegrities.has(a)&&this._cacheKeysToIntegrities.get(a)!==s.integrity)throw new h("add-to-cache-list-conflicting-integrities",{url:i});this._cacheKeysToIntegrities.set(a,s.integrity)}if(this._urlsToCacheKeys.set(i,a),this._urlsToCacheModes.set(i,r),t.length>0){const o=`Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(o)}}}install(e){return F(e,async()=>{const t=new Re;this.strategy.plugins.push(t);for(const[i,r]of this._urlsToCacheKeys){const o=this._cacheKeysToIntegrities.get(r),u=this._urlsToCacheModes.get(i),l=new Request(i,{integrity:o,cache:u,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:r},request:l,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}})}activate(e){return F(e,async()=>{const t=await self.caches.open(this.strategy.cacheName),s=await t.keys(),a=new Set(this._urlsToCacheKeys.values()),i=[];for(const r of s)a.has(r.url)||(await t.delete(r),i.push(r.url));return{deletedURLs:i}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s)return(await self.caches.open(this.strategy.cacheName)).match(s)}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new h("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params=Object.assign({cacheKey:t},s.params),this.strategy.handle(s))}}let L;const X=()=>(L||(L=new ke),L);try{self["workbox:routing:7.2.0"]&&_()}catch{}const Y="GET",x=n=>n&&typeof n=="object"?n:{handle:n};class d{constructor(e,t,s=Y){this.handler=x(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=x(e)}}class Te extends d{constructor(e,t,s){const a=({url:i})=>{const r=e.exec(i.href);if(r&&!(i.origin!==location.origin&&r.index!==0))return r.slice(1)};super(a,t,s)}}class Z{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&e.data.type==="CACHE_URLS"){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map(a=>{typeof a=="string"&&(a=[a]);const i=new Request(...a);return this.handleRequest({request:i,event:e})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const a=s.origin===location.origin,{params:i,route:r}=this.findMatchingRoute({event:t,request:e,sameOrigin:a,url:s});let o=r&&r.handler;const u=e.method;if(!o&&this._defaultHandlerMap.has(u)&&(o=this._defaultHandlerMap.get(u)),!o)return;let l;try{l=o.handle({url:s,request:e,event:t,params:i})}catch(f){l=Promise.reject(f)}const w=r&&r.catchHandler;return l instanceof Promise&&(this._catchHandler||w)&&(l=l.catch(async f=>{if(w)try{return await w.handle({url:s,request:e,event:t,params:i})}catch(M){M instanceof Error&&(f=M)}if(this._catchHandler)return this._catchHandler.handle({url:s,request:e,event:t});throw f})),l}findMatchingRoute({url:e,sameOrigin:t,request:s,event:a}){const i=this._routes.get(s.method)||[];for(const r of i){let o;const u=r.match({url:e,sameOrigin:t,request:s,event:a});if(u)return o=u,(Array.isArray(o)&&o.length===0||u.constructor===Object&&Object.keys(u).length===0||typeof u=="boolean")&&(o=void 0),{route:r,params:o}}return{}}setDefaultHandler(e,t=Y){this._defaultHandlerMap.set(t,x(e))}setCatchHandler(e){this._catchHandler=x(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new h("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(t>-1)this._routes.get(e.method).splice(t,1);else throw new h("unregister-route-route-not-registered")}}let R;const xe=()=>(R||(R=new Z,R.addFetchListener(),R.addCacheListener()),R);function P(n,e,t){let s;if(typeof n=="string"){const i=new URL(n,location.href),r=({url:o})=>o.href===i.href;s=new d(r,e,t)}else if(n instanceof RegExp)s=new Te(n,e,t);else if(typeof n=="function")s=new d(n,e,t);else if(n instanceof d)s=n;else throw new h("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});return xe().registerRoute(s),s}function De(n,e=[]){for(const t of[...n.searchParams.keys()])e.some(s=>s.test(t))&&n.searchParams.delete(t);return n}function*Pe(n,{ignoreURLParametersMatching:e=[/^utm_/,/^fbclid$/],directoryIndex:t="index.html",cleanURLs:s=!0,urlManipulation:a}={}){const i=new URL(n,location.href);i.hash="",yield i.href;const r=De(i,e);if(yield r.href,t&&r.pathname.endsWith("/")){const o=new URL(r.href);o.pathname+=t,yield o.href}if(s){const o=new URL(r.href);o.pathname+=".html",yield o.href}if(a){const o=a({url:i});for(const u of o)yield u.href}}class Ne extends d{constructor(e,t){const s=({request:a})=>{const i=e.getURLsToCacheKeys();for(const r of Pe(a.url,t)){const o=i.get(r);if(o){const u=e.getIntegrityForCacheKey(o);return{cacheKey:o,integrity:u}}}};super(s,e.strategy)}}function Le(n){const e=X(),t=new Ne(e,n);P(t)}const Ie="-precache-",Se=async(n,e=Ie)=>{const s=(await self.caches.keys()).filter(a=>a.includes(e)&&a.includes(self.registration.scope)&&a!==n);return await Promise.all(s.map(a=>self.caches.delete(a))),s};function qe(){self.addEventListener("activate",n=>{const e=k.getPrecacheName();n.waitUntil(Se(e).then(t=>{}))})}function Ue(n){X().precache(n)}function je(n,e){Ue(n),Le(e)}class ve extends d{constructor(e,{allowlist:t=[/./],denylist:s=[]}={}){super(a=>this._match(a),e),this._allowlist=t,this._denylist=s}_match({url:e,request:t}){if(t&&t.mode!=="navigate")return!1;const s=e.pathname+e.search;for(const a of this._denylist)if(a.test(s))return!1;return!!this._allowlist.some(a=>a.test(s))}}const ee={cacheWillUpdate:async({response:n})=>n.status===200||n.status===0?n:null};class A extends D{constructor(e={}){super(e),this.plugins.some(t=>"cacheWillUpdate"in t)||this.plugins.unshift(ee),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,t){const s=[],a=[];let i;if(this._networkTimeoutSeconds){const{id:u,promise:l}=this._getTimeoutPromise({request:e,logs:s,handler:t});i=u,a.push(l)}const r=this._getNetworkPromise({timeoutId:i,request:e,logs:s,handler:t});a.push(r);const o=await t.waitUntil((async()=>await t.waitUntil(Promise.race(a))||await r)());if(!o)throw new h("no-response",{url:e.url});return o}_getTimeoutPromise({request:e,logs:t,handler:s}){let a;return{promise:new Promise(r=>{a=setTimeout(async()=>{r(await s.cacheMatch(e))},this._networkTimeoutSeconds*1e3)}),id:a}}async _getNetworkPromise({timeoutId:e,request:t,logs:s,handler:a}){let i,r;try{r=await a.fetchAndCachePut(t)}catch(o){o instanceof Error&&(i=o)}return e&&clearTimeout(e),(i||!r)&&(r=await a.cacheMatch(t)),r}}class Ae extends D{constructor(e={}){super(e),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,t){let s,a;try{const i=[t.fetch(e)];if(this._networkTimeoutSeconds){const r=z(this._networkTimeoutSeconds*1e3);i.push(r)}if(a=await Promise.race(i),!a)throw new Error(`Timed out the network response after ${this._networkTimeoutSeconds} seconds.`)}catch(i){i instanceof Error&&(s=i)}if(!a)throw new h("no-response",{url:e.url,error:s});return a}}class O extends D{constructor(e={}){super(e),this.plugins.some(t=>"cacheWillUpdate"in t)||this.plugins.unshift(ee)}async _handle(e,t){const s=t.fetchAndCachePut(e).catch(()=>{});t.waitUntil(s);let a=await t.cacheMatch(e),i;if(!a)try{a=await s}catch(r){r instanceof Error&&(i=r)}if(!a)throw new h("no-response",{url:e.url,error:i});return a}}const Oe=(n,e)=>e.some(t=>n instanceof t);let W,H;function Ke(){return W||(W=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Me(){return H||(H=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const te=new WeakMap,j=new WeakMap,se=new WeakMap,I=new WeakMap,K=new WeakMap;function Be(n){const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("success",i),n.removeEventListener("error",r)},i=()=>{t(g(n.result)),a()},r=()=>{s(n.error),a()};n.addEventListener("success",i),n.addEventListener("error",r)});return e.then(t=>{t instanceof IDBCursor&&te.set(t,n)}).catch(()=>{}),K.set(e,n),e}function Fe(n){if(j.has(n))return;const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",r),n.removeEventListener("abort",r)},i=()=>{t(),a()},r=()=>{s(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",i),n.addEventListener("error",r),n.addEventListener("abort",r)});j.set(n,e)}let v={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return j.get(n);if(e==="objectStoreNames")return n.objectStoreNames||se.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return g(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function We(n){v=n(v)}function He(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(S(this),e,...t);return se.set(s,e.sort?e.sort():[e]),g(s)}:Me().includes(n)?function(...e){return n.apply(S(this),e),g(te.get(this))}:function(...e){return g(n.apply(S(this),e))}}function Ge(n){return typeof n=="function"?He(n):(n instanceof IDBTransaction&&Fe(n),Oe(n,Ke())?new Proxy(n,v):n)}function g(n){if(n instanceof IDBRequest)return Be(n);if(I.has(n))return I.get(n);const e=Ge(n);return e!==n&&(I.set(n,e),K.set(e,n)),e}const S=n=>K.get(n);function Qe(n,e,{blocked:t,upgrade:s,blocking:a,terminated:i}={}){const r=indexedDB.open(n,e),o=g(r);return s&&r.addEventListener("upgradeneeded",u=>{s(g(r.result),u.oldVersion,u.newVersion,g(r.transaction),u)}),t&&r.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),o.then(u=>{i&&u.addEventListener("close",()=>i()),a&&u.addEventListener("versionchange",l=>a(l.oldVersion,l.newVersion,l))}).catch(()=>{}),o}const Ve=["get","getKey","getAll","getAllKeys","count"],Je=["put","add","delete","clear"],q=new Map;function G(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(q.get(e))return q.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=Je.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||Ve.includes(t)))return;const i=async function(r,...o){const u=this.transaction(r,a?"readwrite":"readonly");let l=u.store;return s&&(l=l.index(o.shift())),(await Promise.all([l[t](...o),a&&u.done]))[0]};return q.set(e,i),i}We(n=>({...n,get:(e,t,s)=>G(e,t)||n.get(e,t,s),has:(e,t)=>!!G(e,t)||n.has(e,t)}));try{self["workbox:background-sync:7.2.0"]&&_()}catch{}const Q=3,$e="workbox-background-sync",p="requests",C="queueName";class ze{constructor(){this._db=null}async addEntry(e){const s=(await this.getDb()).transaction(p,"readwrite",{durability:"relaxed"});await s.store.add(e),await s.done}async getFirstEntryId(){const t=await(await this.getDb()).transaction(p).store.openCursor();return t==null?void 0:t.value.id}async getAllEntriesByQueueName(e){const s=await(await this.getDb()).getAllFromIndex(p,C,IDBKeyRange.only(e));return s||new Array}async getEntryCountByQueueName(e){return(await this.getDb()).countFromIndex(p,C,IDBKeyRange.only(e))}async deleteEntry(e){await(await this.getDb()).delete(p,e)}async getFirstEntryByQueueName(e){return await this.getEndEntryFromIndex(IDBKeyRange.only(e),"next")}async getLastEntryByQueueName(e){return await this.getEndEntryFromIndex(IDBKeyRange.only(e),"prev")}async getEndEntryFromIndex(e,t){const a=await(await this.getDb()).transaction(p).store.index(C).openCursor(e,t);return a==null?void 0:a.value}async getDb(){return this._db||(this._db=await Qe($e,Q,{upgrade:this._upgradeDb})),this._db}_upgradeDb(e,t){t>0&&t<Q&&e.objectStoreNames.contains(p)&&e.deleteObjectStore(p),e.createObjectStore(p,{autoIncrement:!0,keyPath:"id"}).createIndex(C,C,{unique:!1})}}class Xe{constructor(e){this._queueName=e,this._queueDb=new ze}async pushEntry(e){delete e.id,e.queueName=this._queueName,await this._queueDb.addEntry(e)}async unshiftEntry(e){const t=await this._queueDb.getFirstEntryId();t?e.id=t-1:delete e.id,e.queueName=this._queueName,await this._queueDb.addEntry(e)}async popEntry(){return this._removeEntry(await this._queueDb.getLastEntryByQueueName(this._queueName))}async shiftEntry(){return this._removeEntry(await this._queueDb.getFirstEntryByQueueName(this._queueName))}async getAll(){return await this._queueDb.getAllEntriesByQueueName(this._queueName)}async size(){return await this._queueDb.getEntryCountByQueueName(this._queueName)}async deleteEntry(e){await this._queueDb.deleteEntry(e)}async _removeEntry(e){return e&&await this.deleteEntry(e.id),e}}const Ye=["method","referrer","referrerPolicy","mode","credentials","cache","redirect","integrity","keepalive"];class E{static async fromRequest(e){const t={url:e.url,headers:{}};e.method!=="GET"&&(t.body=await e.clone().arrayBuffer());for(const[s,a]of e.headers.entries())t.headers[s]=a;for(const s of Ye)e[s]!==void 0&&(t[s]=e[s]);return new E(t)}constructor(e){e.mode==="navigate"&&(e.mode="same-origin"),this._requestData=e}toObject(){const e=Object.assign({},this._requestData);return e.headers=Object.assign({},this._requestData.headers),e.body&&(e.body=e.body.slice(0)),e}toRequest(){return new Request(this._requestData.url,this._requestData)}clone(){return new E(this.toObject())}}const V="workbox-background-sync",Ze=60*24*7,U=new Set,J=n=>{const e={request:new E(n.requestData).toRequest(),timestamp:n.timestamp};return n.metadata&&(e.metadata=n.metadata),e};class et{constructor(e,{forceSyncFallback:t,onSync:s,maxRetentionTime:a}={}){if(this._syncInProgress=!1,this._requestsAddedDuringSync=!1,U.has(e))throw new h("duplicate-queue-name",{name:e});U.add(e),this._name=e,this._onSync=s||this.replayRequests,this._maxRetentionTime=a||Ze,this._forceSyncFallback=!!t,this._queueStore=new Xe(this._name),this._addSyncListener()}get name(){return this._name}async pushRequest(e){await this._addRequest(e,"push")}async unshiftRequest(e){await this._addRequest(e,"unshift")}async popRequest(){return this._removeRequest("pop")}async shiftRequest(){return this._removeRequest("shift")}async getAll(){const e=await this._queueStore.getAll(),t=Date.now(),s=[];for(const a of e){const i=this._maxRetentionTime*60*1e3;t-a.timestamp>i?await this._queueStore.deleteEntry(a.id):s.push(J(a))}return s}async size(){return await this._queueStore.size()}async _addRequest({request:e,metadata:t,timestamp:s=Date.now()},a){const r={requestData:(await E.fromRequest(e.clone())).toObject(),timestamp:s};switch(t&&(r.metadata=t),a){case"push":await this._queueStore.pushEntry(r);break;case"unshift":await this._queueStore.unshiftEntry(r);break}this._syncInProgress?this._requestsAddedDuringSync=!0:await this.registerSync()}async _removeRequest(e){const t=Date.now();let s;switch(e){case"pop":s=await this._queueStore.popEntry();break;case"shift":s=await this._queueStore.shiftEntry();break}if(s){const a=this._maxRetentionTime*60*1e3;return t-s.timestamp>a?this._removeRequest(e):J(s)}else return}async replayRequests(){let e;for(;e=await this.shiftRequest();)try{await fetch(e.request.clone())}catch{throw await this.unshiftRequest(e),new h("queue-replay-failed",{name:this._name})}}async registerSync(){if("sync"in self.registration&&!this._forceSyncFallback)try{await self.registration.sync.register(`${V}:${this._name}`)}catch{}}_addSyncListener(){"sync"in self.registration&&!this._forceSyncFallback?self.addEventListener("sync",e=>{if(e.tag===`${V}:${this._name}`){const t=async()=>{this._syncInProgress=!0;let s;try{await this._onSync({queue:this})}catch(a){if(a instanceof Error)throw s=a,s}finally{this._requestsAddedDuringSync&&!(s&&!e.lastChance)&&await this.registerSync(),this._syncInProgress=!1,this._requestsAddedDuringSync=!1}};e.waitUntil(t())}}):this._onSync({queue:this})}static get _queueNames(){return U}}class tt{constructor(e,t){this.fetchDidFail=async({request:s})=>{await this._queue.pushRequest({request:s})},this._queue=new et(e,t)}}try{self["workbox:google-analytics:7.2.0"]&&_()}catch{}const st="workbox-google-analytics",nt=60*48,ne="www.google-analytics.com",ae="www.googletagmanager.com",at="/analytics.js",rt="/gtag/js",it="/gtm.js",ct=/^\/(\w+\/)?collect/,ot=n=>async({queue:e})=>{let t;for(;t=await e.shiftRequest();){const{request:s,timestamp:a}=t,i=new URL(s.url);try{const r=s.method==="POST"?new URLSearchParams(await s.clone().text()):i.searchParams,o=a-(Number(r.get("qt"))||0),u=Date.now()-o;if(r.set("qt",String(u)),n.parameterOverrides)for(const l of Object.keys(n.parameterOverrides)){const w=n.parameterOverrides[l];r.set(l,w)}typeof n.hitFilter=="function"&&n.hitFilter.call(null,r),await fetch(new Request(i.origin+i.pathname,{body:r.toString(),method:"POST",mode:"cors",credentials:"omit",headers:{"Content-Type":"text/plain"}}))}catch(r){throw await e.unshiftRequest(t),r}}},ut=n=>{const e=({url:s})=>s.hostname===ne&&ct.test(s.pathname),t=new Ae({plugins:[n]});return[new d(e,t,"GET"),new d(e,t,"POST")]},lt=n=>{const e=({url:s})=>s.hostname===ne&&s.pathname===at,t=new A({cacheName:n});return new d(e,t,"GET")},ht=n=>{const e=({url:s})=>s.hostname===ae&&s.pathname===rt,t=new A({cacheName:n});return new d(e,t,"GET")},dt=n=>{const e=({url:s})=>s.hostname===ae&&s.pathname===it,t=new A({cacheName:n});return new d(e,t,"GET")},ft=(n={})=>{const e=k.getGoogleAnalyticsName(n.cacheName),t=new tt(st,{maxRetentionTime:nt,onSync:ot(n)}),s=[dt(e),lt(e),ht(e),...ut(t)],a=new Z;for(const i of s)a.registerRoute(i);a.addFetchListener()};self.addEventListener("message",n=>{n.data.type==="SKIP_WAITING"&&self.skipWaiting()});we();je([...re,...ie,...ce].map(n=>({url:n,revision:$})));ft();P(new d(({request:{url:n}})=>/^https?:\/\/ajax\.googleapis\.com\//.test(n)||/^https?:\/\/fonts\.googleapis\.com\//.test(n)||/^https?:\/\/fonts\.gstatic\.com\//.test(n),new O({cacheName:"workbox-google-cache"})));P(new d(({request:n})=>n.destination==="image"&&/^https?:\/\/1\.gravatar\.com\//.test(n.url),new O({cacheName:"workbox-gravatar-cache"})));P(new ve(new O({cacheName:$})));qe();
