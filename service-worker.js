const o=location.pathname.split("/").slice(0,-1).join("/"),re=[o+"/_app/immutable/entry/app.B8QNjb2i.js",o+"/_app/immutable/nodes/0.DuwYwIHZ.js",o+"/_app/immutable/assets/0.5Uu3hI6w.css",o+"/_app/immutable/nodes/1.vmkj2qKg.js",o+"/_app/immutable/nodes/2.CF2g-QFi.js",o+"/_app/immutable/assets/2.3r30GKaa.css",o+"/_app/immutable/nodes/3.CkmcjegE.js",o+"/_app/immutable/nodes/4.CNEbo5-j.js",o+"/_app/immutable/assets/4.GnNRRT6F.css",o+"/_app/immutable/nodes/5.CUzj2nLT.js",o+"/_app/immutable/assets/5.BJbx0u7m.css",o+"/_app/immutable/nodes/6.BVa_Ohd5.js",o+"/_app/immutable/assets/6.GYWo1f5r.css",o+"/_app/immutable/nodes/7.Db0J7l3n.js",o+"/_app/immutable/assets/7.DwQbqeS4.css",o+"/_app/immutable/chunks/comment.WyxSy2-3.js",o+"/_app/immutable/chunks/control.CYgJF_JY.js",o+"/_app/immutable/chunks/entry.BuYpbDaH.js",o+"/_app/immutable/chunks/github.BAC6fC3F.js",o+"/_app/immutable/chunks/index.UtbJEboa.js",o+"/_app/immutable/chunks/preload-helper.T-GT2vH5.js",o+"/_app/immutable/chunks/rocket.hyKGTl72.js",o+"/_app/immutable/chunks/scheduler.CKLdxKqA.js",o+"/_app/immutable/chunks/stores.BxG-CJZp.js",o+"/_app/immutable/chunks/trophy.DFWZtQfH.js",o+"/_app/immutable/entry/start.CIJbn9ZG.js",o+"/_app/immutable/chunks/stalker.BzkQ6l-A.js"],ie=[o+"/favicon.ico",o+"/icons/apple-touch-icon-114x114.png",o+"/icons/apple-touch-icon-120x120.png",o+"/icons/apple-touch-icon-144x144.png",o+"/icons/apple-touch-icon-152x152.png",o+"/icons/apple-touch-icon-57x57.png",o+"/icons/apple-touch-icon-60x60.png",o+"/icons/apple-touch-icon-72x72.png",o+"/icons/apple-touch-icon-76x76.png",o+"/icons/apple-touch-icon-precomposed.png",o+"/icons/apple-touch-icon.png",o+"/icons/browserconfig.xml",o+"/icons/favicon-160x160.png",o+"/icons/favicon-16x16.png",o+"/icons/favicon-196x196.png",o+"/icons/favicon-32x32.png",o+"/icons/favicon-96x96.png",o+"/icons/favicon.ico",o+"/icons/icon-128x128.png",o+"/icons/icon-144x144.png",o+"/icons/icon-152x152.png",o+"/icons/icon-192x192.png",o+"/icons/icon-384x384.png",o+"/icons/icon-512x512.png",o+"/icons/icon-72x72.png",o+"/icons/icon-96x96.png",o+"/icons/mstile-144x144.png",o+"/icons/mstile-150x150.png",o+"/icons/mstile-310x150.png",o+"/icons/mstile-310x310.png",o+"/icons/mstile-70x70.png",o+"/manifest.json",o+"/mini_me.jpeg"],oe=[o+"/",o+"/achievements",o+"/contact",o+"/me",o+"/rockets"],$="1725485756666";try{self["workbox:core:7.0.0"]&&_()}catch{}const ce=(n,...e)=>{let t=n;return e.length>0&&(t+=` :: ${JSON.stringify(e)}`),t},le=ce;class u extends Error{constructor(e,t){const s=le(e,t);super(s),this.name=e,this.details=t}}const he=new Set,m={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:typeof registration<"u"?registration.scope:""},N=n=>[m.prefix,n,m.suffix].filter(e=>e&&e.length>0).join("-"),ue=n=>{for(const e of Object.keys(m))n(e)},k={updateDetails:n=>{ue(e=>{typeof n[e]=="string"&&(m[e]=n[e])})},getGoogleAnalyticsName:n=>n||N(m.googleAnalytics),getPrecacheName:n=>n||N(m.precache),getPrefix:()=>m.prefix,getRuntimeName:n=>n||N(m.runtime),getSuffix:()=>m.suffix};function B(n,e){const t=new URL(n);for(const s of e)t.searchParams.delete(s);return t.href}async function de(n,e,t,s){const a=B(e.url,t);if(e.url===a)return n.match(e,s);const i=Object.assign(Object.assign({},s),{ignoreSearch:!0}),r=await n.keys(e,i);for(const c of r){const l=B(c.url,t);if(a===l)return n.match(c,s)}}let b;function fe(){if(b===void 0){const n=new Response("");if("body"in n)try{new Response(n.body),b=!0}catch{b=!1}b=!1}return b}class pe{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}async function me(){for(const n of he)await n()}const ye=n=>new URL(String(n),location.href).href.replace(new RegExp(`^${location.origin}`),"");function z(n){return new Promise(e=>setTimeout(e,n))}function F(n,e){const t=e();return n.waitUntil(t),t}async function ge(n,e){let t=null;if(n.url&&(t=new URL(n.url).origin),t!==self.location.origin)throw new u("cross-origin-copy-response",{origin:t});const s=n.clone(),i={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},r=fe()?s.body:await s.blob();return new Response(r,i)}function we(){self.addEventListener("activate",()=>self.clients.claim())}try{self["workbox:precaching:7.0.0"]&&_()}catch{}const _e="__WB_REVISION__";function be(n){if(!n)throw new u("add-to-cache-list-unexpected-type",{entry:n});if(typeof n=="string"){const i=new URL(n,location.href);return{cacheKey:i.href,url:i.href}}const{revision:e,url:t}=n;if(!t)throw new u("add-to-cache-list-unexpected-type",{entry:n});if(!e){const i=new URL(t,location.href);return{cacheKey:i.href,url:i.href}}const s=new URL(t,location.href),a=new URL(t,location.href);return s.searchParams.set(_e,e),{cacheKey:s.href,url:a.href}}class Re{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if(e.type==="install"&&t&&t.originalRequest&&t.originalRequest instanceof Request){const a=t.originalRequest.url;s?this.notUpdatedURLs.push(a):this.updatedURLs.push(a)}return s}}}class Ce{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:t,params:s})=>{const a=(s==null?void 0:s.cacheKey)||this._precacheController.getCacheKeyForURL(t.url);return a?new Request(a,{headers:t.headers}):t},this._precacheController=e}}try{self["workbox:strategies:7.0.0"]&&_()}catch{}function T(n){return typeof n=="string"?new Request(n):n}class Ee{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new pe,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const s of this._plugins)this._pluginStateMap.set(s,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let s=T(e);if(s.mode==="navigate"&&t instanceof FetchEvent&&t.preloadResponse){const r=await t.preloadResponse;if(r)return r}const a=this.hasCallback("fetchDidFail")?s.clone():null;try{for(const r of this.iterateCallbacks("requestWillFetch"))s=await r({request:s.clone(),event:t})}catch(r){if(r instanceof Error)throw new u("plugin-error-request-will-fetch",{thrownErrorMessage:r.message})}const i=s.clone();try{let r;r=await fetch(s,s.mode==="navigate"?void 0:this._strategy.fetchOptions);for(const c of this.iterateCallbacks("fetchDidSucceed"))r=await c({event:t,request:i,response:r});return r}catch(r){throw a&&await this.runCallbacks("fetchDidFail",{error:r,event:t,originalRequest:a.clone(),request:i.clone()}),r}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=T(e);let s;const{cacheName:a,matchOptions:i}=this._strategy,r=await this.getCacheKey(t,"read"),c=Object.assign(Object.assign({},i),{cacheName:a});s=await caches.match(r,c);for(const l of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await l({cacheName:a,matchOptions:i,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(e,t){const s=T(e);await z(0);const a=await this.getCacheKey(s,"write");if(!t)throw new u("cache-put-with-no-response",{url:ye(a.url)});const i=await this._ensureResponseSafeToCache(t);if(!i)return!1;const{cacheName:r,matchOptions:c}=this._strategy,l=await self.caches.open(r),h=this.hasCallback("cacheDidUpdate"),w=h?await de(l,a.clone(),["__WB_REVISION__"],c):null;try{await l.put(a,h?i.clone():i)}catch(f){if(f instanceof Error)throw f.name==="QuotaExceededError"&&await me(),f}for(const f of this.iterateCallbacks("cacheDidUpdate"))await f({cacheName:r,oldResponse:w,newResponse:i.clone(),request:a,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const i of this.iterateCallbacks("cacheKeyWillBeUsed"))a=T(await i({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if(typeof t[e]=="function"){const s=this._pluginStateMap.get(t);yield i=>{const r=Object.assign(Object.assign({},i),{state:s});return t[e](r)}}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const a of this.iterateCallbacks("cacheWillUpdate"))if(t=await a({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&t.status!==200&&(t=void 0),t}}class D{constructor(e={}){this.cacheName=k.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s=typeof e.request=="string"?new Request(e.request):e.request,a="params"in e?e.params:void 0,i=new Ee(this,{event:t,request:s,params:a}),r=this._getResponse(i,s,t),c=this._awaitComplete(r,i,s,t);return[r,c]}async _getResponse(e,t,s){await e.runCallbacks("handlerWillStart",{event:s,request:t});let a;try{if(a=await this._handle(t,e),!a||a.type==="error")throw new u("no-response",{url:t.url})}catch(i){if(i instanceof Error){for(const r of e.iterateCallbacks("handlerDidError"))if(a=await r({error:i,event:s,request:t}),a)break}if(!a)throw i}for(const i of e.iterateCallbacks("handlerWillRespond"))a=await i({event:s,request:t,response:a});return a}async _awaitComplete(e,t,s,a){let i,r;try{i=await e}catch{}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:i}),await t.doneWaiting()}catch(c){c instanceof Error&&(r=c)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:i,error:r}),t.destroy(),r)throw r}}class y extends D{constructor(e={}){e.cacheName=k.getPrecacheName(e.cacheName),super(e),this._fallbackToNetwork=e.fallbackToNetwork!==!1,this.plugins.push(y.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&t.event.type==="install"?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;const a=t.params||{};if(this._fallbackToNetwork){const i=a.integrity,r=e.integrity,c=!r||r===i;s=await t.fetch(new Request(e,{integrity:e.mode!=="no-cors"?r||i:void 0})),i&&c&&e.mode!=="no-cors"&&(this._useDefaultCacheabilityPluginIfNeeded(),await t.cachePut(e,s.clone()))}else throw new u("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return s}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const s=await t.fetch(e);if(!await t.cachePut(e,s.clone()))throw new u("bad-precaching-response",{url:e.url,status:s.status});return s}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==y.copyRedirectedCacheableResponsesPlugin&&(a===y.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);t===0?this.plugins.push(y.defaultPrecacheCacheabilityPlugin):t>1&&e!==null&&this.plugins.splice(e,1)}}y.defaultPrecacheCacheabilityPlugin={async cacheWillUpdate({response:n}){return!n||n.status>=400?null:n}};y.copyRedirectedCacheableResponsesPlugin={async cacheWillUpdate({response:n}){return n.redirected?await ge(n):n}};class ke{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new y({cacheName:k.getPrecacheName(e),plugins:[...t,new Ce({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const s of e){typeof s=="string"?t.push(s):s&&s.revision===void 0&&t.push(s.url);const{cacheKey:a,url:i}=be(s),r=typeof s!="string"&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(i)&&this._urlsToCacheKeys.get(i)!==a)throw new u("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(i),secondEntry:a});if(typeof s!="string"&&s.integrity){if(this._cacheKeysToIntegrities.has(a)&&this._cacheKeysToIntegrities.get(a)!==s.integrity)throw new u("add-to-cache-list-conflicting-integrities",{url:i});this._cacheKeysToIntegrities.set(a,s.integrity)}if(this._urlsToCacheKeys.set(i,a),this._urlsToCacheModes.set(i,r),t.length>0){const c=`Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(c)}}}install(e){return F(e,async()=>{const t=new Re;this.strategy.plugins.push(t);for(const[i,r]of this._urlsToCacheKeys){const c=this._cacheKeysToIntegrities.get(r),l=this._urlsToCacheModes.get(i),h=new Request(i,{integrity:c,cache:l,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:r},request:h,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}})}activate(e){return F(e,async()=>{const t=await self.caches.open(this.strategy.cacheName),s=await t.keys(),a=new Set(this._urlsToCacheKeys.values()),i=[];for(const r of s)a.has(r.url)||(await t.delete(r),i.push(r.url));return{deletedURLs:i}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s)return(await self.caches.open(this.strategy.cacheName)).match(s)}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new u("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params=Object.assign({cacheKey:t},s.params),this.strategy.handle(s))}}let v;const Y=()=>(v||(v=new ke),v);try{self["workbox:routing:7.0.0"]&&_()}catch{}const X="GET",x=n=>n&&typeof n=="object"?n:{handle:n};class d{constructor(e,t,s=X){this.handler=x(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=x(e)}}class Te extends d{constructor(e,t,s){const a=({url:i})=>{const r=e.exec(i.href);if(r&&!(i.origin!==location.origin&&r.index!==0))return r.slice(1)};super(a,t,s)}}class Z{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&e.data.type==="CACHE_URLS"){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map(a=>{typeof a=="string"&&(a=[a]);const i=new Request(...a);return this.handleRequest({request:i,event:e})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const a=s.origin===location.origin,{params:i,route:r}=this.findMatchingRoute({event:t,request:e,sameOrigin:a,url:s});let c=r&&r.handler;const l=e.method;if(!c&&this._defaultHandlerMap.has(l)&&(c=this._defaultHandlerMap.get(l)),!c)return;let h;try{h=c.handle({url:s,request:e,event:t,params:i})}catch(f){h=Promise.reject(f)}const w=r&&r.catchHandler;return h instanceof Promise&&(this._catchHandler||w)&&(h=h.catch(async f=>{if(w)try{return await w.handle({url:s,request:e,event:t,params:i})}catch(M){M instanceof Error&&(f=M)}if(this._catchHandler)return this._catchHandler.handle({url:s,request:e,event:t});throw f})),h}findMatchingRoute({url:e,sameOrigin:t,request:s,event:a}){const i=this._routes.get(s.method)||[];for(const r of i){let c;const l=r.match({url:e,sameOrigin:t,request:s,event:a});if(l)return c=l,(Array.isArray(c)&&c.length===0||l.constructor===Object&&Object.keys(l).length===0||typeof l=="boolean")&&(c=void 0),{route:r,params:c}}return{}}setDefaultHandler(e,t=X){this._defaultHandlerMap.set(t,x(e))}setCatchHandler(e){this._catchHandler=x(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new u("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(t>-1)this._routes.get(e.method).splice(t,1);else throw new u("unregister-route-route-not-registered")}}let R;const xe=()=>(R||(R=new Z,R.addFetchListener(),R.addCacheListener()),R);function P(n,e,t){let s;if(typeof n=="string"){const i=new URL(n,location.href),r=({url:c})=>c.href===i.href;s=new d(r,e,t)}else if(n instanceof RegExp)s=new Te(n,e,t);else if(typeof n=="function")s=new d(n,e,t);else if(n instanceof d)s=n;else throw new u("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});return xe().registerRoute(s),s}function De(n,e=[]){for(const t of[...n.searchParams.keys()])e.some(s=>s.test(t))&&n.searchParams.delete(t);return n}function*Pe(n,{ignoreURLParametersMatching:e=[/^utm_/,/^fbclid$/],directoryIndex:t="index.html",cleanURLs:s=!0,urlManipulation:a}={}){const i=new URL(n,location.href);i.hash="",yield i.href;const r=De(i,e);if(yield r.href,t&&r.pathname.endsWith("/")){const c=new URL(r.href);c.pathname+=t,yield c.href}if(s){const c=new URL(r.href);c.pathname+=".html",yield c.href}if(a){const c=a({url:i});for(const l of c)yield l.href}}class Ne extends d{constructor(e,t){const s=({request:a})=>{const i=e.getURLsToCacheKeys();for(const r of Pe(a.url,t)){const c=i.get(r);if(c){const l=e.getIntegrityForCacheKey(c);return{cacheKey:c,integrity:l}}}};super(s,e.strategy)}}function ve(n){const e=Y(),t=new Ne(e,n);P(t)}const Se="-precache-",Ie=async(n,e=Se)=>{const s=(await self.caches.keys()).filter(a=>a.includes(e)&&a.includes(self.registration.scope)&&a!==n);return await Promise.all(s.map(a=>self.caches.delete(a))),s};function Le(){self.addEventListener("activate",n=>{const e=k.getPrecacheName();n.waitUntil(Ie(e).then(t=>{}))})}function qe(n){Y().precache(n)}function Ue(n,e){qe(n),ve(e)}class je extends d{constructor(e,{allowlist:t=[/./],denylist:s=[]}={}){super(a=>this._match(a),e),this._allowlist=t,this._denylist=s}_match({url:e,request:t}){if(t&&t.mode!=="navigate")return!1;const s=e.pathname+e.search;for(const a of this._denylist)if(a.test(s))return!1;return!!this._allowlist.some(a=>a.test(s))}}const ee={cacheWillUpdate:async({response:n})=>n.status===200||n.status===0?n:null};class A extends D{constructor(e={}){super(e),this.plugins.some(t=>"cacheWillUpdate"in t)||this.plugins.unshift(ee),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,t){const s=[],a=[];let i;if(this._networkTimeoutSeconds){const{id:l,promise:h}=this._getTimeoutPromise({request:e,logs:s,handler:t});i=l,a.push(h)}const r=this._getNetworkPromise({timeoutId:i,request:e,logs:s,handler:t});a.push(r);const c=await t.waitUntil((async()=>await t.waitUntil(Promise.race(a))||await r)());if(!c)throw new u("no-response",{url:e.url});return c}_getTimeoutPromise({request:e,logs:t,handler:s}){let a;return{promise:new Promise(r=>{a=setTimeout(async()=>{r(await s.cacheMatch(e))},this._networkTimeoutSeconds*1e3)}),id:a}}async _getNetworkPromise({timeoutId:e,request:t,logs:s,handler:a}){let i,r;try{r=await a.fetchAndCachePut(t)}catch(c){c instanceof Error&&(i=c)}return e&&clearTimeout(e),(i||!r)&&(r=await a.cacheMatch(t)),r}}class Ae extends D{constructor(e={}){super(e),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,t){let s,a;try{const i=[t.fetch(e)];if(this._networkTimeoutSeconds){const r=z(this._networkTimeoutSeconds*1e3);i.push(r)}if(a=await Promise.race(i),!a)throw new Error(`Timed out the network response after ${this._networkTimeoutSeconds} seconds.`)}catch(i){i instanceof Error&&(s=i)}if(!a)throw new u("no-response",{url:e.url,error:s});return a}}class O extends D{constructor(e={}){super(e),this.plugins.some(t=>"cacheWillUpdate"in t)||this.plugins.unshift(ee)}async _handle(e,t){const s=t.fetchAndCachePut(e).catch(()=>{});t.waitUntil(s);let a=await t.cacheMatch(e),i;if(!a)try{a=await s}catch(r){r instanceof Error&&(i=r)}if(!a)throw new u("no-response",{url:e.url,error:i});return a}}const Oe=(n,e)=>e.some(t=>n instanceof t);let W,H;function Ke(){return W||(W=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Me(){return H||(H=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const te=new WeakMap,U=new WeakMap,se=new WeakMap,S=new WeakMap,K=new WeakMap;function Be(n){const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("success",i),n.removeEventListener("error",r)},i=()=>{t(g(n.result)),a()},r=()=>{s(n.error),a()};n.addEventListener("success",i),n.addEventListener("error",r)});return e.then(t=>{t instanceof IDBCursor&&te.set(t,n)}).catch(()=>{}),K.set(e,n),e}function Fe(n){if(U.has(n))return;const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",r),n.removeEventListener("abort",r)},i=()=>{t(),a()},r=()=>{s(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",i),n.addEventListener("error",r),n.addEventListener("abort",r)});U.set(n,e)}let j={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return U.get(n);if(e==="objectStoreNames")return n.objectStoreNames||se.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return g(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function We(n){j=n(j)}function He(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(I(this),e,...t);return se.set(s,e.sort?e.sort():[e]),g(s)}:Me().includes(n)?function(...e){return n.apply(I(this),e),g(te.get(this))}:function(...e){return g(n.apply(I(this),e))}}function Ge(n){return typeof n=="function"?He(n):(n instanceof IDBTransaction&&Fe(n),Oe(n,Ke())?new Proxy(n,j):n)}function g(n){if(n instanceof IDBRequest)return Be(n);if(S.has(n))return S.get(n);const e=Ge(n);return e!==n&&(S.set(n,e),K.set(e,n)),e}const I=n=>K.get(n);function Qe(n,e,{blocked:t,upgrade:s,blocking:a,terminated:i}={}){const r=indexedDB.open(n,e),c=g(r);return s&&r.addEventListener("upgradeneeded",l=>{s(g(r.result),l.oldVersion,l.newVersion,g(r.transaction),l)}),t&&r.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),a&&l.addEventListener("versionchange",h=>a(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const Je=["get","getKey","getAll","getAllKeys","count"],Ve=["put","add","delete","clear"],L=new Map;function G(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(L.get(e))return L.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=Ve.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||Je.includes(t)))return;const i=async function(r,...c){const l=this.transaction(r,a?"readwrite":"readonly");let h=l.store;return s&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),a&&l.done]))[0]};return L.set(e,i),i}We(n=>({...n,get:(e,t,s)=>G(e,t)||n.get(e,t,s),has:(e,t)=>!!G(e,t)||n.has(e,t)}));try{self["workbox:background-sync:7.0.0"]&&_()}catch{}const Q=3,$e="workbox-background-sync",p="requests",C="queueName";class ze{constructor(){this._db=null}async addEntry(e){const s=(await this.getDb()).transaction(p,"readwrite",{durability:"relaxed"});await s.store.add(e),await s.done}async getFirstEntryId(){const t=await(await this.getDb()).transaction(p).store.openCursor();return t==null?void 0:t.value.id}async getAllEntriesByQueueName(e){const s=await(await this.getDb()).getAllFromIndex(p,C,IDBKeyRange.only(e));return s||new Array}async getEntryCountByQueueName(e){return(await this.getDb()).countFromIndex(p,C,IDBKeyRange.only(e))}async deleteEntry(e){await(await this.getDb()).delete(p,e)}async getFirstEntryByQueueName(e){return await this.getEndEntryFromIndex(IDBKeyRange.only(e),"next")}async getLastEntryByQueueName(e){return await this.getEndEntryFromIndex(IDBKeyRange.only(e),"prev")}async getEndEntryFromIndex(e,t){const a=await(await this.getDb()).transaction(p).store.index(C).openCursor(e,t);return a==null?void 0:a.value}async getDb(){return this._db||(this._db=await Qe($e,Q,{upgrade:this._upgradeDb})),this._db}_upgradeDb(e,t){t>0&&t<Q&&e.objectStoreNames.contains(p)&&e.deleteObjectStore(p),e.createObjectStore(p,{autoIncrement:!0,keyPath:"id"}).createIndex(C,C,{unique:!1})}}class Ye{constructor(e){this._queueName=e,this._queueDb=new ze}async pushEntry(e){delete e.id,e.queueName=this._queueName,await this._queueDb.addEntry(e)}async unshiftEntry(e){const t=await this._queueDb.getFirstEntryId();t?e.id=t-1:delete e.id,e.queueName=this._queueName,await this._queueDb.addEntry(e)}async popEntry(){return this._removeEntry(await this._queueDb.getLastEntryByQueueName(this._queueName))}async shiftEntry(){return this._removeEntry(await this._queueDb.getFirstEntryByQueueName(this._queueName))}async getAll(){return await this._queueDb.getAllEntriesByQueueName(this._queueName)}async size(){return await this._queueDb.getEntryCountByQueueName(this._queueName)}async deleteEntry(e){await this._queueDb.deleteEntry(e)}async _removeEntry(e){return e&&await this.deleteEntry(e.id),e}}const Xe=["method","referrer","referrerPolicy","mode","credentials","cache","redirect","integrity","keepalive"];class E{static async fromRequest(e){const t={url:e.url,headers:{}};e.method!=="GET"&&(t.body=await e.clone().arrayBuffer());for(const[s,a]of e.headers.entries())t.headers[s]=a;for(const s of Xe)e[s]!==void 0&&(t[s]=e[s]);return new E(t)}constructor(e){e.mode==="navigate"&&(e.mode="same-origin"),this._requestData=e}toObject(){const e=Object.assign({},this._requestData);return e.headers=Object.assign({},this._requestData.headers),e.body&&(e.body=e.body.slice(0)),e}toRequest(){return new Request(this._requestData.url,this._requestData)}clone(){return new E(this.toObject())}}const J="workbox-background-sync",Ze=60*24*7,q=new Set,V=n=>{const e={request:new E(n.requestData).toRequest(),timestamp:n.timestamp};return n.metadata&&(e.metadata=n.metadata),e};class et{constructor(e,{forceSyncFallback:t,onSync:s,maxRetentionTime:a}={}){if(this._syncInProgress=!1,this._requestsAddedDuringSync=!1,q.has(e))throw new u("duplicate-queue-name",{name:e});q.add(e),this._name=e,this._onSync=s||this.replayRequests,this._maxRetentionTime=a||Ze,this._forceSyncFallback=!!t,this._queueStore=new Ye(this._name),this._addSyncListener()}get name(){return this._name}async pushRequest(e){await this._addRequest(e,"push")}async unshiftRequest(e){await this._addRequest(e,"unshift")}async popRequest(){return this._removeRequest("pop")}async shiftRequest(){return this._removeRequest("shift")}async getAll(){const e=await this._queueStore.getAll(),t=Date.now(),s=[];for(const a of e){const i=this._maxRetentionTime*60*1e3;t-a.timestamp>i?await this._queueStore.deleteEntry(a.id):s.push(V(a))}return s}async size(){return await this._queueStore.size()}async _addRequest({request:e,metadata:t,timestamp:s=Date.now()},a){const r={requestData:(await E.fromRequest(e.clone())).toObject(),timestamp:s};switch(t&&(r.metadata=t),a){case"push":await this._queueStore.pushEntry(r);break;case"unshift":await this._queueStore.unshiftEntry(r);break}this._syncInProgress?this._requestsAddedDuringSync=!0:await this.registerSync()}async _removeRequest(e){const t=Date.now();let s;switch(e){case"pop":s=await this._queueStore.popEntry();break;case"shift":s=await this._queueStore.shiftEntry();break}if(s){const a=this._maxRetentionTime*60*1e3;return t-s.timestamp>a?this._removeRequest(e):V(s)}else return}async replayRequests(){let e;for(;e=await this.shiftRequest();)try{await fetch(e.request.clone())}catch{throw await this.unshiftRequest(e),new u("queue-replay-failed",{name:this._name})}}async registerSync(){if("sync"in self.registration&&!this._forceSyncFallback)try{await self.registration.sync.register(`${J}:${this._name}`)}catch{}}_addSyncListener(){"sync"in self.registration&&!this._forceSyncFallback?self.addEventListener("sync",e=>{if(e.tag===`${J}:${this._name}`){const t=async()=>{this._syncInProgress=!0;let s;try{await this._onSync({queue:this})}catch(a){if(a instanceof Error)throw s=a,s}finally{this._requestsAddedDuringSync&&!(s&&!e.lastChance)&&await this.registerSync(),this._syncInProgress=!1,this._requestsAddedDuringSync=!1}};e.waitUntil(t())}}):this._onSync({queue:this})}static get _queueNames(){return q}}class tt{constructor(e,t){this.fetchDidFail=async({request:s})=>{await this._queue.pushRequest({request:s})},this._queue=new et(e,t)}}try{self["workbox:google-analytics:7.0.0"]&&_()}catch{}const st="workbox-google-analytics",nt=60*48,ne="www.google-analytics.com",ae="www.googletagmanager.com",at="/analytics.js",rt="/gtag/js",it="/gtm.js",ot=/^\/(\w+\/)?collect/,ct=n=>async({queue:e})=>{let t;for(;t=await e.shiftRequest();){const{request:s,timestamp:a}=t,i=new URL(s.url);try{const r=s.method==="POST"?new URLSearchParams(await s.clone().text()):i.searchParams,c=a-(Number(r.get("qt"))||0),l=Date.now()-c;if(r.set("qt",String(l)),n.parameterOverrides)for(const h of Object.keys(n.parameterOverrides)){const w=n.parameterOverrides[h];r.set(h,w)}typeof n.hitFilter=="function"&&n.hitFilter.call(null,r),await fetch(new Request(i.origin+i.pathname,{body:r.toString(),method:"POST",mode:"cors",credentials:"omit",headers:{"Content-Type":"text/plain"}}))}catch(r){throw await e.unshiftRequest(t),r}}},lt=n=>{const e=({url:s})=>s.hostname===ne&&ot.test(s.pathname),t=new Ae({plugins:[n]});return[new d(e,t,"GET"),new d(e,t,"POST")]},ht=n=>{const e=({url:s})=>s.hostname===ne&&s.pathname===at,t=new A({cacheName:n});return new d(e,t,"GET")},ut=n=>{const e=({url:s})=>s.hostname===ae&&s.pathname===rt,t=new A({cacheName:n});return new d(e,t,"GET")},dt=n=>{const e=({url:s})=>s.hostname===ae&&s.pathname===it,t=new A({cacheName:n});return new d(e,t,"GET")},ft=(n={})=>{const e=k.getGoogleAnalyticsName(n.cacheName),t=new tt(st,{maxRetentionTime:nt,onSync:ct(n)}),s=[dt(e),ht(e),ut(e),...lt(t)],a=new Z;for(const i of s)a.registerRoute(i);a.addFetchListener()};self.addEventListener("message",n=>{n.data.type==="SKIP_WAITING"&&self.skipWaiting()});we();Ue([...re,...ie,...oe].map(n=>({url:n,revision:$})));ft();P(new d(({request:{url:n}})=>/^https?:\/\/ajax\.googleapis\.com\//.test(n)||/^https?:\/\/fonts\.googleapis\.com\//.test(n)||/^https?:\/\/fonts\.gstatic\.com\//.test(n),new O({cacheName:"workbox-google-cache"})));P(new d(({request:n})=>n.destination==="image"&&/^https?:\/\/1\.gravatar\.com\//.test(n.url),new O({cacheName:"workbox-gravatar-cache"})));P(new je(new O({cacheName:$})));Le();
