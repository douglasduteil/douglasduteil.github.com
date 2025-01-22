var Ye=e=>{throw TypeError(e)};var Nt=(e,t,n)=>t.has(e)||Ye("Cannot "+n);var A=(e,t,n)=>(Nt(e,t,"read from private field"),n?n.call(e):t.get(e)),P=(e,t,n)=>t.has(e)?Ye("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n);import{aw as C,q as O,u as N,av as jt}from"./B6Lm0ONh.js";import{w as Ce}from"./DWtzsjkA.js";import{H as ve,S as Oe,R as Ne}from"./CYgJF_JY.js";import{o as ze}from"./Byu5b_2x.js";new URL("sveltekit-internal://");function $t(e,t){return e==="/"||t==="ignore"?e:t==="never"?e.endsWith("/")?e.slice(0,-1):e:t==="always"&&!e.endsWith("/")?e+"/":e}function Dt(e){return e.split("%25").map(decodeURI).join("%25")}function Ft(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}function Re({href:e}){return e.split("#")[0]}function Vt(e,t,n,r=!1){const a=new URL(e);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(i,o){if(o==="get"||o==="getAll"||o==="has")return f=>(n(f),i[o](f));t();const c=Reflect.get(i,o);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const s=["href","pathname","search","toString","toJSON"];r&&s.push("hash");for(const i of s)Object.defineProperty(a,i,{get(){return t(),e[i]},enumerable:!0,configurable:!0});return a}const Bt="/__data.json",qt=".html__data.json";function Gt(e){return e.endsWith(".html")?e.replace(/\.html$/,qt):e.replace(/\/$/,"")+Bt}function Mt(...e){let t=5381;for(const n of e)if(typeof n=="string"){let r=n.length;for(;r;)t=t*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)t=t*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(t>>>0).toString(36)}function Ht(e){const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n.buffer}const Kt=window.fetch;window.fetch=(e,t)=>((e instanceof Request?e.method:(t==null?void 0:t.method)||"GET")!=="GET"&&K.delete(je(e)),Kt(e,t));const K=new Map;function Wt(e,t){const n=je(e,t),r=document.querySelector(n);if(r!=null&&r.textContent){let{body:a,...s}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&K.set(n,{body:a,init:s,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=Ht(a)),Promise.resolve(new Response(a,s))}return window.fetch(e,t)}function Yt(e,t,n){if(K.size>0){const r=je(e,n),a=K.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);K.delete(r)}}return window.fetch(t,n)}function je(e,t){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(t!=null&&t.headers||t!=null&&t.body){const a=[];t.headers&&a.push([...new Headers(t.headers)].join(",")),t.body&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&a.push(t.body),r+=`[data-hash="${Mt(...a)}"]`}return r}const zt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Jt(e){const t=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Zt(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return t.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(s)return t.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return Ie(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return Ie(String.fromCharCode(...c.slice(2).split("-").map(l=>parseInt(l,16))));const h=zt.exec(c),[,u,y,d,m]=h;return t.push({name:d,matcher:m,optional:!!u,rest:!!y,chained:y?f===1&&i[0]==="":!1}),y?"(.*?)":u?"([^/]*)?":"([^/]+?)"}return Ie(c)}).join("")}).join("")}/?$`),params:t}}function Xt(e){return!/^\([^)]+\)$/.test(e)}function Zt(e){return e.slice(1).split("/").filter(Xt)}function Qt(e,t,n){const r={},a=e.slice(1),s=a.filter(o=>o!==void 0);let i=0;for(let o=0;o<t.length;o+=1){const c=t[o];let f=a[o-i];if(c.chained&&c.rest&&i&&(f=a.slice(o-i,o+1).filter(h=>h).join("/"),i=0),f===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](f)){r[c.name]=f;const h=t[o+1],u=a[o+1];h&&!h.rest&&h.optional&&u&&c.chained&&(i=0),!h&&!u&&Object.keys(r).length===s.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function Ie(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function en({nodes:e,server_loads:t,dictionary:n,matchers:r}){const a=new Set(t);return Object.entries(n).map(([o,[c,f,h]])=>{const{pattern:u,params:y}=Jt(o),d={id:o,exec:m=>{const l=u.exec(m);if(l)return Qt(l,y,r)},errors:[1,...h||[]].map(m=>e[m]),layouts:[0,...f||[]].map(i),leaf:s(c)};return d.errors.length=d.layouts.length=Math.max(d.errors.length,d.layouts.length),d});function s(o){const c=o<0;return c&&(o=~o),[c,e[o]]}function i(o){return o===void 0?o:[a.has(o),e[o]]}}function ft(e,t=JSON.parse){try{return t(sessionStorage[e])}catch{}}function Je(e,t,n=JSON.stringify){const r=n(t);try{sessionStorage[e]=r}catch{}}var ot;const x=((ot=globalThis.__sveltekit_xjun5n)==null?void 0:ot.base)??"";var st;const tn=((st=globalThis.__sveltekit_xjun5n)==null?void 0:st.assets)??x,nn="1737508768383",ut="sveltekit:snapshot",dt="sveltekit:scroll",ht="sveltekit:states",rn="sveltekit:pageurl",B="sveltekit:history",z="sveltekit:navigation",fe={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},le=location.origin;function pt(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const n=document.getElementsByTagName("base");t=n.length?n[0].href:document.URL}return new URL(e,t)}function $e(){return{x:pageXOffset,y:pageYOffset}}function V(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const Xe={...fe,"":fe.hover};function gt(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function mt(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=gt(e)}}function Te(e,t,n){let r;try{if(r=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI),n&&r.hash.match(/^#[^/]/)){const o=location.hash.split("#")[1]||"/";r.hash=`#${o}${r.hash}`}}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,s=!r||!!a||be(r,t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(r==null?void 0:r.origin)===le&&e.hasAttribute("download");return{url:r,external:s,target:a,download:i}}function ue(e){let t=null,n=null,r=null,a=null,s=null,i=null,o=e;for(;o&&o!==document.documentElement;)r===null&&(r=V(o,"preload-code")),a===null&&(a=V(o,"preload-data")),t===null&&(t=V(o,"keepfocus")),n===null&&(n=V(o,"noscroll")),s===null&&(s=V(o,"reload")),i===null&&(i=V(o,"replacestate")),o=gt(o);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Xe[r??"off"],preload_data:Xe[a??"off"],keepfocus:c(t),noscroll:c(n),reload:c(s),replace_state:c(i)}}function Ze(e){const t=Ce(e);let n=!0;function r(){n=!0,t.update(i=>i)}function a(i){n=!1,t.set(i)}function s(i){let o;return t.subscribe(c=>{(o===void 0||n&&c!==o)&&i(o=c)})}return{notify:r,set:a,subscribe:s}}const yt={v:()=>{}};function an(){const{set:e,subscribe:t}=Ce(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${tn}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==nn;return i&&(e(!0),yt.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:t,check:r}}function be(e,t,n){return e.origin!==le||!e.pathname.startsWith(t)?!0:n?!(e.pathname===t+"/"||e.pathname===t+"/index.html"||e.protocol==="file:"&&e.pathname.replace(/\/[^/]+\.html?$/,"")===t):!1}function Qe(e){const t=sn(e),n=new ArrayBuffer(t.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,t.charCodeAt(a));return n}const on="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function sn(e){e.length%4===0&&(e=e.replace(/==?$/,""));let t="",n=0,r=0;for(let a=0;a<e.length;a++)n<<=6,n|=on.indexOf(e[a]),r+=6,r===24&&(t+=String.fromCharCode((n&16711680)>>16),t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,t+=String.fromCharCode(n)):r===18&&(n>>=2,t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255)),t}const cn=-1,ln=-2,fn=-3,un=-4,dn=-5,hn=-6;function pn(e,t){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,r=Array(n.length);function a(s,i=!1){if(s===cn)return;if(s===fn)return NaN;if(s===un)return 1/0;if(s===dn)return-1/0;if(s===hn)return-0;if(i)throw new Error("Invalid input");if(s in r)return r[s];const o=n[s];if(!o||typeof o!="object")r[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const c=o[0],f=t==null?void 0:t[c];if(f)return r[s]=f(a(o[1]));switch(c){case"Date":r[s]=new Date(o[1]);break;case"Set":const h=new Set;r[s]=h;for(let d=1;d<o.length;d+=1)h.add(a(o[d]));break;case"Map":const u=new Map;r[s]=u;for(let d=1;d<o.length;d+=2)u.set(a(o[d]),a(o[d+1]));break;case"RegExp":r[s]=new RegExp(o[1],o[2]);break;case"Object":r[s]=Object(o[1]);break;case"BigInt":r[s]=BigInt(o[1]);break;case"null":const y=Object.create(null);r[s]=y;for(let d=1;d<o.length;d+=2)y[o[d]]=a(o[d+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const d=globalThis[c],m=o[1],l=Qe(m),g=new d(l);r[s]=g;break}case"ArrayBuffer":{const d=o[1],m=Qe(d);r[s]=m;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(o.length);r[s]=c;for(let f=0;f<o.length;f+=1){const h=o[f];h!==ln&&(c[f]=a(h))}}else{const c={};r[s]=c;for(const f in o){const h=o[f];c[f]=a(h)}}return r[s]}return a(0)}const wt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...wt];const gn=new Set([...wt]);[...gn];function mn(e){return e.filter(t=>t!=null)}const yn="x-sveltekit-invalidated",wn="x-sveltekit-trailing-slash";function de(e){return e instanceof ve||e instanceof Oe?e.status:500}function _n(e){return e instanceof Oe?e.text:"Internal Error"}let U,J,Ue;const vn=ze.toString().includes("$$")||/function \w+\(\) \{\}/.test(ze.toString());var Q,ee,te,ne,re,ae,oe,se,it,ie,ct,ce,lt;vn?(U={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},J={current:null},Ue={current:!1}):(U=new(it=class{constructor(){P(this,Q,C({}));P(this,ee,C(null));P(this,te,C(null));P(this,ne,C({}));P(this,re,C({id:null}));P(this,ae,C({}));P(this,oe,C(-1));P(this,se,C(new URL("https://example.com")))}get data(){return O(A(this,Q))}set data(t){N(A(this,Q),t)}get form(){return O(A(this,ee))}set form(t){N(A(this,ee),t)}get error(){return O(A(this,te))}set error(t){N(A(this,te),t)}get params(){return O(A(this,ne))}set params(t){N(A(this,ne),t)}get route(){return O(A(this,re))}set route(t){N(A(this,re),t)}get state(){return O(A(this,ae))}set state(t){N(A(this,ae),t)}get status(){return O(A(this,oe))}set status(t){N(A(this,oe),t)}get url(){return O(A(this,se))}set url(t){N(A(this,se),t)}},Q=new WeakMap,ee=new WeakMap,te=new WeakMap,ne=new WeakMap,re=new WeakMap,ae=new WeakMap,oe=new WeakMap,se=new WeakMap,it),J=new(ct=class{constructor(){P(this,ie,C(null))}get current(){return O(A(this,ie))}set current(t){N(A(this,ie),t)}},ie=new WeakMap,ct),Ue=new(lt=class{constructor(){P(this,ce,C(!1))}get current(){return O(A(this,ce))}set current(t){N(A(this,ce),t)}},ce=new WeakMap,lt),yt.v=()=>Ue.current=!0);function bn(e){Object.assign(U,e)}const An=new Set(["icon","shortcut icon","apple-touch-icon"]),F=ft(dt)??{},X=ft(ut)??{},$={url:Ze({}),page:Ze({}),navigating:Ce(null),updated:an()};function De(e){F[e]=$e()}function kn(e,t){let n=e+1;for(;F[n];)delete F[n],n+=1;for(n=t+1;X[n];)delete X[n],n+=1}function G(e){return location.href=e.href,new Promise(()=>{})}async function _t(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(x||"/");e&&await e.update()}}function et(){}let Ae,xe,he,j,Pe,k;const pe=[],ge=[];let L=null;const vt=new Set,Sn=new Set,W=new Set;let _={branch:[],error:null,url:null},Fe=!1,me=!1,tt=!0,Z=!1,M=!1,bt=!1,Ve=!1,At,I,T,ye;const Y=new Set;async function Gn(e,t,n){var a,s,i,o;document.URL!==location.href&&(location.href=location.href),k=e,await((s=(a=e.hooks).init)==null?void 0:s.call(a)),Ae=en(e),j=document.documentElement,Pe=t,xe=e.nodes[0],he=e.nodes[1],xe(),he(),I=(i=history.state)==null?void 0:i[B],T=(o=history.state)==null?void 0:o[z],I||(I=T=Date.now(),history.replaceState({...history.state,[B]:I,[z]:T},""));const r=F[I];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await Cn(Pe,n):Tn(k.hash?Ot(new URL(location.href)):location.href,{replaceState:!0}),Pn()}function En(){pe.length=0,Ve=!1}function kt(e){ge.some(t=>t==null?void 0:t.snapshot)&&(X[e]=ge.map(t=>{var n;return(n=t==null?void 0:t.snapshot)==null?void 0:n.capture()}))}function St(e){var t;(t=X[e])==null||t.forEach((n,r)=>{var a,s;(s=(a=ge[r])==null?void 0:a.snapshot)==null||s.restore(n)})}function nt(){De(I),Je(dt,F),kt(T),Je(ut,X)}async function Be(e,t,n,r){return H({type:"goto",url:pt(e),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,state:t.state,redirect_count:n,nav_token:r,accept:()=>{t.invalidateAll&&(Ve=!0),t.invalidate&&t.invalidate.forEach(xn)}})}async function Rn(e){if(e.id!==(L==null?void 0:L.id)){const t={};Y.add(t),L={id:e.id,token:t,promise:Rt({...e,preload:t}).then(n=>(Y.delete(t),n.type==="loaded"&&n.state.error&&(L=null),n))}}return L.promise}async function Le(e){const t=It(e);if(!t)return;const n=Ae.find(r=>r.exec(Ut(t)));n&&await Promise.all([...n.layouts,n.leaf].map(r=>r==null?void 0:r[1]()))}function Et(e,t,n){var s;_=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(U,e.props.page),At=new k.root({target:t,props:{...e.props,stores:$,components:ge},hydrate:n,sync:!1}),St(T);const a={from:null,to:{params:_.params,route:{id:((s=_.route)==null?void 0:s.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};W.forEach(i=>i(a)),me=!0}function we({url:e,params:t,branch:n,status:r,error:a,route:s,form:i}){let o="never";if(x&&(e.pathname===x||e.pathname===x+"/"))o="always";else for(const d of n)(d==null?void 0:d.slash)!==void 0&&(o=d.slash);e.pathname=$t(e.pathname,o),e.search=e.search;const c={type:"loaded",state:{url:e,params:t,branch:n,error:a,route:s},props:{constructors:mn(n).map(d=>d.node.component),page:He(U)}};i!==void 0&&(c.props.form=i);let f={},h=!U,u=0;for(let d=0;d<Math.max(n.length,_.branch.length);d+=1){const m=n[d],l=_.branch[d];(m==null?void 0:m.data)!==(l==null?void 0:l.data)&&(h=!0),m&&(f={...f,...m.data},h&&(c.props[`data_${u}`]=f),u+=1)}return(!_.url||e.href!==_.url.href||_.error!==a||i!==void 0&&i!==U.form||h)&&(c.props.page={error:a,params:t,route:{id:(s==null?void 0:s.id)??null},state:{},status:r,url:new URL(e),form:i??null,data:h?f:U.data}),c}async function qe({loader:e,parent:t,url:n,params:r,route:a,server_data_node:s}){var h,u,y;let i=null,o=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await e();if((h=f.universal)!=null&&h.load){let d=function(...l){for(const g of l){const{href:w}=new URL(g,n);c.dependencies.add(w)}};const m={route:new Proxy(a,{get:(l,g)=>(o&&(c.route=!0),l[g])}),params:new Proxy(r,{get:(l,g)=>(o&&c.params.add(g),l[g])}),data:(s==null?void 0:s.data)??null,url:Vt(n,()=>{o&&(c.url=!0)},l=>{o&&c.search_params.add(l)},k.hash),async fetch(l,g){let w;l instanceof Request?(w=l.url,g={body:l.method==="GET"||l.method==="HEAD"?void 0:await l.blob(),cache:l.cache,credentials:l.credentials,headers:[...l.headers].length?l.headers:void 0,integrity:l.integrity,keepalive:l.keepalive,method:l.method,mode:l.mode,redirect:l.redirect,referrer:l.referrer,referrerPolicy:l.referrerPolicy,signal:l.signal,...g}):w=l;const R=new URL(w,n);return o&&d(R.href),R.origin===n.origin&&(w=R.href.slice(n.origin.length)),me?Yt(w,R.href,g):Wt(w,g)},setHeaders:()=>{},depends:d,parent(){return o&&(c.parent=!0),t()},untrack(l){o=!1;try{return l()}finally{o=!0}}};i=await f.universal.load.call(null,m)??null}return{node:f,loader:e,server:s,universal:(u=f.universal)!=null&&u.load?{type:"data",data:i,uses:c}:null,data:i??(s==null?void 0:s.data)??null,slash:((y=f.universal)==null?void 0:y.trailingSlash)??(s==null?void 0:s.slash)}}function rt(e,t,n,r,a,s){if(Ve)return!0;if(!a)return!1;if(a.parent&&e||a.route&&t||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(s[i]!==_.params[i])return!0;for(const i of a.dependencies)if(pe.some(o=>o(new URL(i))))return!0;return!1}function Ge(e,t){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?t??null:null}function In(e,t){if(!e)return new Set(t.searchParams.keys());const n=new Set([...e.searchParams.keys(),...t.searchParams.keys()]);for(const r of n){const a=e.searchParams.getAll(r),s=t.searchParams.getAll(r);a.every(i=>s.includes(i))&&s.every(i=>a.includes(i))&&n.delete(r)}return n}function at({error:e,url:t,route:n,params:r}){return{type:"loaded",state:{error:e,url:t,route:n,params:r,branch:[]},props:{page:He(U),constructors:[]}}}async function Rt({id:e,invalidating:t,url:n,params:r,route:a,preload:s}){if((L==null?void 0:L.id)===e)return Y.delete(L.token),L.promise;const{errors:i,layouts:o,leaf:c}=a,f=[...o,c];i.forEach(p=>p==null?void 0:p().catch(()=>{})),f.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let h=null;const u=_.url?e!==_e(_.url):!1,y=_.route?a.id!==_.route.id:!1,d=In(_.url,n);let m=!1;const l=f.map((p,v)=>{var D;const S=_.branch[v],E=!!(p!=null&&p[0])&&((S==null?void 0:S.loader)!==p[1]||rt(m,y,u,d,(D=S.server)==null?void 0:D.uses,r));return E&&(m=!0),E});if(l.some(Boolean)){try{h=await xt(n,l)}catch(p){const v=await q(p,{url:n,params:r,route:{id:e}});return Y.has(s)?at({error:v,url:n,params:r,route:a}):ke({status:de(p),error:v,url:n,route:a})}if(h.type==="redirect")return h}const g=h==null?void 0:h.nodes;let w=!1;const R=f.map(async(p,v)=>{var Se;if(!p)return;const S=_.branch[v],E=g==null?void 0:g[v];if((!E||E.type==="skip")&&p[1]===(S==null?void 0:S.loader)&&!rt(w,y,u,d,(Se=S.universal)==null?void 0:Se.uses,r))return S;if(w=!0,(E==null?void 0:E.type)==="error")throw E;return qe({loader:p[1],url:n,params:r,route:a,parent:async()=>{var We;const Ke={};for(let Ee=0;Ee<v;Ee+=1)Object.assign(Ke,(We=await R[Ee])==null?void 0:We.data);return Ke},server_data_node:Ge(E===void 0&&p[0]?{type:"skip"}:E??null,p[0]?S==null?void 0:S.server:void 0)})});for(const p of R)p.catch(()=>{});const b=[];for(let p=0;p<f.length;p+=1)if(f[p])try{b.push(await R[p])}catch(v){if(v instanceof Ne)return{type:"redirect",location:v.location};if(Y.has(s))return at({error:await q(v,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let S=de(v),E;if(g!=null&&g.includes(v))S=v.status??S,E=v.error;else if(v instanceof ve)E=v.body;else{if(await $.updated.check())return await _t(),await G(n);E=await q(v,{params:r,url:n,route:{id:a.id}})}const D=await Un(p,b,i);return D?we({url:n,params:r,branch:b.slice(0,D.idx).concat(D.node),status:S,error:E,route:a}):await Tt(n,{id:a.id},E,S)}else b.push(void 0);return we({url:n,params:r,branch:b,status:200,error:null,route:a,form:t?void 0:null})}async function Un(e,t,n){for(;e--;)if(n[e]){let r=e;for(;!t[r];)r-=1;try{return{idx:r+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function ke({status:e,error:t,url:n,route:r}){const a={};let s=null;if(k.server_loads[0]===0)try{const o=await xt(n,[!0]);if(o.type!=="data"||o.nodes[0]&&o.nodes[0].type!=="data")throw 0;s=o.nodes[0]??null}catch{(n.origin!==le||n.pathname!==location.pathname||Fe)&&await G(n)}try{const o=await qe({loader:xe,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Ge(s)}),c={node:await he(),loader:he,universal:null,server:null,data:null};return we({url:n,params:a,branch:[o,c],status:e,error:t,route:null})}catch(o){if(o instanceof Ne)return Be(new URL(o.location,location.href),{},0);throw o}}function It(e){let t;try{if(t=k.hooks.reroute({url:new URL(e)})??e,typeof t=="string"){const n=new URL(e);k.hash?n.hash=t:n.pathname=t,t=n}}catch{return}return t}function Me(e,t){if(!e||be(e,x,k.hash))return;const n=It(e);if(!n)return;const r=Ut(n);for(const a of Ae){const s=a.exec(r);if(s)return{id:_e(e),invalidating:t,route:a,params:Ft(s),url:e}}}function Ut(e){return Dt(k.hash?e.hash.replace(/^#/,"").replace(/[?#].+/,""):e.pathname.slice(x.length))||"/"}function _e(e){return(k.hash?e.hash.replace(/^#/,""):e.pathname)+e.search}function Lt({url:e,type:t,intent:n,delta:r}){let a=!1;const s=Ct(_,n,e,t);r!==void 0&&(s.navigation.delta=r);const i={...s.navigation,cancel:()=>{a=!0,s.reject(new Error("navigation cancelled"))}};return Z||vt.forEach(o=>o(i)),a?null:s}async function H({type:e,url:t,popped:n,keepfocus:r,noscroll:a,replace_state:s,state:i={},redirect_count:o=0,nav_token:c={},accept:f=et,block:h=et}){const u=Me(t,!1),y=Lt({url:t,type:e,delta:n==null?void 0:n.delta,intent:u});if(!y){h();return}const d=I,m=T;f(),Z=!0,me&&$.navigating.set(J.current=y.navigation),ye=c;let l=u&&await Rt(u);if(!l){if(be(t,x,k.hash))return await G(t);l=await Tt(t,{id:null},await q(new Oe(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=(u==null?void 0:u.url)||t,ye!==c)return y.reject(new Error("navigation aborted")),!1;if(l.type==="redirect")if(o>=20)l=await ke({status:500,error:await q(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return Be(new URL(l.location,t).href,{},o+1,c),!1;else l.props.page.status>=400&&await $.updated.check()&&(await _t(),await G(t));if(En(),De(d),kt(m),l.props.page.url.pathname!==t.pathname&&(t.pathname=l.props.page.url.pathname),i=n?n.state:i,!n){const b=s?0:1,p={[B]:I+=b,[z]:T+=b,[ht]:i};(s?history.replaceState:history.pushState).call(history,p,"",t),s||kn(I,T)}if(L=null,l.props.page.state=i,me){_=l.state,l.props.page&&(l.props.page.url=t);const b=(await Promise.all(Array.from(Sn,p=>p(y.navigation)))).filter(p=>typeof p=="function");if(b.length>0){let p=function(){b.forEach(v=>{W.delete(v)})};b.push(p),b.forEach(v=>{W.add(v)})}At.$set(l.props),bn(l.props.page),bt=!0}else Et(l,Pe,!1);const{activeElement:g}=document;await jt();const w=n?n.scroll:a?$e():null;if(tt){const b=t.hash&&document.getElementById(decodeURIComponent(k.hash?t.hash.split("#")[2]??"":t.hash.slice(1)));w?scrollTo(w.x,w.y):b?b.scrollIntoView():scrollTo(0,0)}const R=document.activeElement!==g&&document.activeElement!==document.body;!r&&!R&&On(),tt=!0,l.props.page&&Object.assign(U,l.props.page),Z=!1,e==="popstate"&&St(T),y.fulfil(void 0),W.forEach(b=>b(y.navigation)),$.navigating.set(J.current=null)}async function Tt(e,t,n,r){return e.origin===le&&e.pathname===location.pathname&&!Fe?await ke({status:r,error:n,url:e,route:t}):await G(e)}function Ln(){let e;j.addEventListener("mousemove",s=>{const i=s.target;clearTimeout(e),e=setTimeout(()=>{r(i,2)},20)});function t(s){s.defaultPrevented||r(s.composedPath()[0],1)}j.addEventListener("mousedown",t),j.addEventListener("touchstart",t,{passive:!0});const n=new IntersectionObserver(s=>{for(const i of s)i.isIntersecting&&(Le(new URL(i.target.href)),n.unobserve(i.target))},{threshold:0});function r(s,i){const o=mt(s,j);if(!o)return;const{url:c,external:f,download:h}=Te(o,x,k.hash);if(f||h)return;const u=ue(o),y=c&&_e(_.url)===_e(c);if(!u.reload&&!y)if(i<=u.preload_data){const d=Me(c,!1);d&&Rn(d)}else i<=u.preload_code&&Le(c)}function a(){n.disconnect();for(const s of j.querySelectorAll("a")){const{url:i,external:o,download:c}=Te(s,x,k.hash);if(o||c)continue;const f=ue(s);f.reload||(f.preload_code===fe.viewport&&n.observe(s),f.preload_code===fe.eager&&Le(i))}}W.add(a),a()}function q(e,t){if(e instanceof ve)return e.body;const n=de(e),r=_n(e);return k.hooks.handleError({error:e,event:t,status:n,message:r})??{message:r}}function Tn(e,t={}){return e=new URL(pt(e)),e.origin!==le?Promise.reject(new Error("goto: invalid URL")):Be(e,t,0)}function xn(e){if(typeof e=="function")pe.push(e);else{const{href:t}=new URL(e,location.href);pe.push(n=>n.href===t)}}function Pn(){var t;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let r=!1;if(nt(),!Z){const a=Ct(_,void 0,null,"leave"),s={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};vt.forEach(i=>i(s))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&nt()}),(t=navigator.connection)!=null&&t.saveData||Ln(),j.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=mt(n.composedPath()[0],j);if(!r)return;const{url:a,external:s,target:i,download:o}=Te(r,x,k.hash);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=ue(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||o)return;const[h,u]=(k.hash?a.hash.replace(/^#/,""):a.href).split("#"),y=h===Re(location);if(s||c.reload&&(!y||!u)){Lt({url:a,type:"link"})?Z=!0:n.preventDefault();return}if(u!==void 0&&y){const[,d]=_.url.href.split("#");if(d===u){if(n.preventDefault(),u===""||u==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const m=r.ownerDocument.getElementById(decodeURIComponent(u));m&&(m.scrollIntoView(),m.focus())}return}if(M=!0,De(I),e(a),!c.replace_state)return;M=!1}n.preventDefault(),await new Promise(d=>{requestAnimationFrame(()=>{setTimeout(d,0)}),setTimeout(d,100)}),H({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),j.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const o=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(be(o,x,!1))return;const c=n.target,f=ue(c);if(f.reload)return;n.preventDefault(),n.stopPropagation();const h=new FormData(c),u=a==null?void 0:a.getAttribute("name");u&&h.append(u,(a==null?void 0:a.getAttribute("value"))??""),o.search=new URLSearchParams(h).toString(),H({type:"form",url:o,keepfocus:f.keepfocus,noscroll:f.noscroll,replace_state:f.replace_state??o.href===location.href})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[B]){const a=n.state[B];if(ye={},a===I)return;const s=F[a],i=n.state[ht]??{},o=new URL(n.state[rn]??location.href),c=n.state[z],f=_.url?Re(location)===Re(_.url):!1;if(c===T&&(bt||f)){i!==U.state&&(U.state=i),e(o),F[I]=$e(),s&&scrollTo(s.x,s.y),I=a;return}const u=a-I;await H({type:"popstate",url:o,popped:{state:i,scroll:s,delta:u},accept:()=>{I=a,T=c},block:()=>{history.go(-u)},nav_token:ye})}else if(!M){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{M?(M=!1,history.replaceState({...history.state,[B]:++I,[z]:T},"",location.href)):k.hash&&_.url.hash===location.hash&&H({type:"goto",url:Ot(_.url)})});for(const n of document.querySelectorAll("link"))An.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&$.navigating.set(J.current=null)});function e(n){_.url=U.url=n,$.page.set(He(U)),$.page.notify()}}async function Cn(e,{status:t=200,error:n,node_ids:r,params:a,route:s,data:i,form:o}){Fe=!0;const c=new URL(location.href);({params:a={},route:s={id:null}}=Me(c,!1)||{});let f,h=!0;try{const u=r.map(async(m,l)=>{const g=i[l];return g!=null&&g.uses&&(g.uses=Pt(g.uses)),qe({loader:k.nodes[m],url:c,params:a,route:s,parent:async()=>{const w={};for(let R=0;R<l;R+=1)Object.assign(w,(await u[R]).data);return w},server_data_node:Ge(g)})}),y=await Promise.all(u),d=Ae.find(({id:m})=>m===s.id);if(d){const m=d.layouts;for(let l=0;l<m.length;l++)m[l]||y.splice(l,0,void 0)}f=we({url:c,params:a,branch:y,status:t,error:n,form:o,route:d??null})}catch(u){if(u instanceof Ne){await G(new URL(u.location,location.href));return}f=await ke({status:de(u),error:await q(u,{url:c,params:a,route:s}),url:c,route:s}),e.textContent="",h=!1}f.props.page&&(f.props.page.state={}),Et(f,e,h)}async function xt(e,t){var s;const n=new URL(e);n.pathname=Gt(e.pathname),e.pathname.endsWith("/")&&n.searchParams.append(wn,"1"),n.searchParams.append(yn,t.map(i=>i?"1":"0").join(""));const r=window.fetch,a=await r(n.href,{});if(!a.ok){let i;throw(s=a.headers.get("content-type"))!=null&&s.includes("application/json")?i=await a.json():a.status===404?i="Not Found":a.status===500&&(i="Internal Error"),new ve(a.status,i)}return new Promise(async i=>{var y;const o=new Map,c=a.body.getReader(),f=new TextDecoder;function h(d){return pn(d,{...k.decoders,Promise:m=>new Promise((l,g)=>{o.set(m,{fulfil:l,reject:g})})})}let u="";for(;;){const{done:d,value:m}=await c.read();if(d&&!u)break;for(u+=!m&&u?`
`:f.decode(m,{stream:!0});;){const l=u.indexOf(`
`);if(l===-1)break;const g=JSON.parse(u.slice(0,l));if(u=u.slice(l+1),g.type==="redirect")return i(g);if(g.type==="data")(y=g.nodes)==null||y.forEach(w=>{(w==null?void 0:w.type)==="data"&&(w.uses=Pt(w.uses),w.data=h(w.data))}),i(g);else if(g.type==="chunk"){const{id:w,data:R,error:b}=g,p=o.get(w);o.delete(w),b?p.reject(h(b)):p.fulfil(h(R))}}}})}function Pt(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function On(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const t=document.body,n=t.getAttribute("tabindex");t.tabIndex=-1,t.focus({preventScroll:!0,focusVisible:!1}),n!==null?t.setAttribute("tabindex",n):t.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let s=0;s<r.rangeCount;s+=1)a.push(r.getRangeAt(s));setTimeout(()=>{if(r.rangeCount===a.length){for(let s=0;s<r.rangeCount;s+=1){const i=a[s],o=r.getRangeAt(s);if(i.commonAncestorContainer!==o.commonAncestorContainer||i.startContainer!==o.startContainer||i.endContainer!==o.endContainer||i.startOffset!==o.startOffset||i.endOffset!==o.endOffset)return}r.removeAllRanges()}})}}}function Ct(e,t,n,r){var c,f;let a,s;const i=new Promise((h,u)=>{a=h,s=u});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:n&&{params:(t==null?void 0:t.params)??null,route:{id:((f=t==null?void 0:t.route)==null?void 0:f.id)??null},url:n},willUnload:!t,type:r,complete:i},fulfil:a,reject:s}}function He(e){return{data:e.data,error:e.error,form:e.form,params:e.params,route:e.route,state:e.state,status:e.status,url:e.url}}function Ot(e){const t=new URL(e);return t.hash=decodeURIComponent(e.hash),t}export{Gn as a,x as b,U as p,$ as s,Ue as u};
