import{S as nt,i as at,s as rt,a as ot,e as U,c as it,b as B,g as Z,t as T,d as Q,f as D,h as q,j as st,o as Ie,k as lt,l as ct,m as ft,n as Ee,p as z,q as ut,r as dt,u as pt,v as M,w as G,x as oe,y as H,z as K,A as de}from"./chunks/index-2e1481b4.js";import{S as et,I as J,g as ze,f as Je,a as ke,b as pe,s as X,i as We,c as he,P as Ye,d as ht,e as mt,h as _t}from"./chunks/singletons-572afc3b.js";import{_ as W}from"./chunks/preload-helper-41c905a7.js";import{R as Xe,H as Oe}from"./chunks/control-f5b05b5f.js";function gt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function wt(r){return r.split("%25").map(decodeURI).join("%25")}function yt(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const bt=["href","pathname","search","searchParams","toString","toJSON"];function vt(r,e){const n=new URL(r);for(const i of bt){let a=n[i];Object.defineProperty(n,i,{get(){return e(),a},enumerable:!0,configurable:!0})}return Et(n),n}function Et(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const kt="/__data.json";function $t(r){return r.replace(/\/$/,"")+kt}function Rt(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let i=n.length;for(;i;)e=e*33^n[--i]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const me=window.fetch;window.fetch=(r,e)=>((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"&&ae.delete(Ne(r)),me(r,e));const ae=new Map;function St(r,e){const n=Ne(r,e),i=document.querySelector(n);if(i!=null&&i.textContent){const{body:a,...p}=JSON.parse(i.textContent),t=i.getAttribute("data-ttl");return t&&ae.set(n,{body:a,init:p,ttl:1e3*Number(t)}),Promise.resolve(new Response(a,p))}return me(r,e)}function Lt(r,e,n){if(ae.size>0){const i=Ne(r,n),a=ae.get(i);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);ae.delete(i)}}return me(e,n)}function Ne(r,e){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(i+=`[data-hash="${Rt(e.body)}"]`),i}const It=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ot(r){const e=[];return{pattern:r==="/"?/^\/$/:new RegExp(`^${Pt(r).map(i=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(a)return e.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const p=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(p)return e.push({name:p[1],matcher:p[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const t=i.split(/\[(.+?)\](?!\])/);return"/"+t.map((u,d)=>{if(d%2){if(u.startsWith("x+"))return $e(String.fromCharCode(parseInt(u.slice(2),16)));if(u.startsWith("u+"))return $e(String.fromCharCode(...u.slice(2).split("-").map(A=>parseInt(A,16))));const g=It.exec(u);if(!g)throw new Error(`Invalid param: ${u}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,v,P,k,C]=g;return e.push({name:k,matcher:C,optional:!!v,rest:!!P,chained:P?d===1&&t[0]==="":!1}),P?"(.*?)":v?"([^/]*)?":"([^/]+?)"}return $e(u)}).join("")}).join("")}/?$`),params:e}}function At(r){return!/^\([^)]+\)$/.test(r)}function Pt(r){return r.slice(1).split("/").filter(At)}function Nt(r,e,n){const i={},a=r.slice(1);let p="";for(let t=0;t<e.length;t+=1){const f=e[t];let u=a[t];if(f.chained&&f.rest&&p&&(u=u?p+"/"+u:p),p="",u===void 0)f.rest&&(i[f.name]="");else{if(f.matcher&&!n[f.matcher](u)){if(f.optional&&f.chained){let d=a.indexOf(void 0,t);if(d===-1){const g=e[t+1];if(g!=null&&g.rest&&g.chained)p=u;else return}for(;d>=t;)a[d]=a[d-1],d-=1;continue}return}i[f.name]=u}}if(!p)return i}function $e(r){return r.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function jt(r,e,n,i){const a=new Set(e);return Object.entries(n).map(([f,[u,d,g]])=>{const{pattern:v,params:P}=Ot(f),k={id:f,exec:C=>{const A=v.exec(C);if(A)return Nt(A,P,i)},errors:[1,...g||[]].map(C=>r[C]),layouts:[0,...d||[]].map(t),leaf:p(u)};return k.errors.length=k.layouts.length=Math.max(k.errors.length,k.layouts.length),k});function p(f){const u=f<0;return u&&(f=~f),[u,r[f]]}function t(f){return f===void 0?f:[a.has(f),r[f]]}}function Ut(r){let e,n,i;var a=r[0][0];function p(t){return{props:{data:t[2],form:t[1]}}}return a&&(e=M(a,p(r))),{c(){e&&G(e.$$.fragment),n=U()},l(t){e&&oe(e.$$.fragment,t),n=U()},m(t,f){e&&H(e,t,f),B(t,n,f),i=!0},p(t,f){const u={};if(f&4&&(u.data=t[2]),f&2&&(u.form=t[1]),a!==(a=t[0][0])){if(e){Z();const d=e;T(d.$$.fragment,1,0,()=>{K(d,1)}),Q()}a?(e=M(a,p(t)),G(e.$$.fragment),D(e.$$.fragment,1),H(e,n.parentNode,n)):e=null}else a&&e.$set(u)},i(t){i||(e&&D(e.$$.fragment,t),i=!0)},o(t){e&&T(e.$$.fragment,t),i=!1},d(t){t&&q(n),e&&K(e,t)}}}function Tt(r){let e,n,i;var a=r[0][0];function p(t){return{props:{data:t[2],$$slots:{default:[Ct]},$$scope:{ctx:t}}}}return a&&(e=M(a,p(r))),{c(){e&&G(e.$$.fragment),n=U()},l(t){e&&oe(e.$$.fragment,t),n=U()},m(t,f){e&&H(e,t,f),B(t,n,f),i=!0},p(t,f){const u={};if(f&4&&(u.data=t[2]),f&1051&&(u.$$scope={dirty:f,ctx:t}),a!==(a=t[0][0])){if(e){Z();const d=e;T(d.$$.fragment,1,0,()=>{K(d,1)}),Q()}a?(e=M(a,p(t)),G(e.$$.fragment),D(e.$$.fragment,1),H(e,n.parentNode,n)):e=null}else a&&e.$set(u)},i(t){i||(e&&D(e.$$.fragment,t),i=!0)},o(t){e&&T(e.$$.fragment,t),i=!1},d(t){t&&q(n),e&&K(e,t)}}}function Dt(r){let e,n,i;var a=r[0][1];function p(t){return{props:{data:t[3],form:t[1]}}}return a&&(e=M(a,p(r))),{c(){e&&G(e.$$.fragment),n=U()},l(t){e&&oe(e.$$.fragment,t),n=U()},m(t,f){e&&H(e,t,f),B(t,n,f),i=!0},p(t,f){const u={};if(f&8&&(u.data=t[3]),f&2&&(u.form=t[1]),a!==(a=t[0][1])){if(e){Z();const d=e;T(d.$$.fragment,1,0,()=>{K(d,1)}),Q()}a?(e=M(a,p(t)),G(e.$$.fragment),D(e.$$.fragment,1),H(e,n.parentNode,n)):e=null}else a&&e.$set(u)},i(t){i||(e&&D(e.$$.fragment,t),i=!0)},o(t){e&&T(e.$$.fragment,t),i=!1},d(t){t&&q(n),e&&K(e,t)}}}function Vt(r){let e,n,i;var a=r[0][1];function p(t){return{props:{data:t[3],$$slots:{default:[qt]},$$scope:{ctx:t}}}}return a&&(e=M(a,p(r))),{c(){e&&G(e.$$.fragment),n=U()},l(t){e&&oe(e.$$.fragment,t),n=U()},m(t,f){e&&H(e,t,f),B(t,n,f),i=!0},p(t,f){const u={};if(f&8&&(u.data=t[3]),f&1043&&(u.$$scope={dirty:f,ctx:t}),a!==(a=t[0][1])){if(e){Z();const d=e;T(d.$$.fragment,1,0,()=>{K(d,1)}),Q()}a?(e=M(a,p(t)),G(e.$$.fragment),D(e.$$.fragment,1),H(e,n.parentNode,n)):e=null}else a&&e.$set(u)},i(t){i||(e&&D(e.$$.fragment,t),i=!0)},o(t){e&&T(e.$$.fragment,t),i=!1},d(t){t&&q(n),e&&K(e,t)}}}function qt(r){let e,n,i;var a=r[0][2];function p(t){return{props:{data:t[4],form:t[1]}}}return a&&(e=M(a,p(r))),{c(){e&&G(e.$$.fragment),n=U()},l(t){e&&oe(e.$$.fragment,t),n=U()},m(t,f){e&&H(e,t,f),B(t,n,f),i=!0},p(t,f){const u={};if(f&16&&(u.data=t[4]),f&2&&(u.form=t[1]),a!==(a=t[0][2])){if(e){Z();const d=e;T(d.$$.fragment,1,0,()=>{K(d,1)}),Q()}a?(e=M(a,p(t)),G(e.$$.fragment),D(e.$$.fragment,1),H(e,n.parentNode,n)):e=null}else a&&e.$set(u)},i(t){i||(e&&D(e.$$.fragment,t),i=!0)},o(t){e&&T(e.$$.fragment,t),i=!1},d(t){t&&q(n),e&&K(e,t)}}}function Ct(r){let e,n,i,a;const p=[Vt,Dt],t=[];function f(u,d){return u[0][2]?0:1}return e=f(r),n=t[e]=p[e](r),{c(){n.c(),i=U()},l(u){n.l(u),i=U()},m(u,d){t[e].m(u,d),B(u,i,d),a=!0},p(u,d){let g=e;e=f(u),e===g?t[e].p(u,d):(Z(),T(t[g],1,1,()=>{t[g]=null}),Q(),n=t[e],n?n.p(u,d):(n=t[e]=p[e](u),n.c()),D(n,1),n.m(i.parentNode,i))},i(u){a||(D(n),a=!0)},o(u){T(n),a=!1},d(u){t[e].d(u),u&&q(i)}}}function Ze(r){let e,n=r[6]&&Qe(r);return{c(){e=lt("div"),n&&n.c(),this.h()},l(i){e=ct(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var a=ft(e);n&&n.l(a),a.forEach(q),this.h()},h(){Ee(e,"id","svelte-announcer"),Ee(e,"aria-live","assertive"),Ee(e,"aria-atomic","true"),z(e,"position","absolute"),z(e,"left","0"),z(e,"top","0"),z(e,"clip","rect(0 0 0 0)"),z(e,"clip-path","inset(50%)"),z(e,"overflow","hidden"),z(e,"white-space","nowrap"),z(e,"width","1px"),z(e,"height","1px")},m(i,a){B(i,e,a),n&&n.m(e,null)},p(i,a){i[6]?n?n.p(i,a):(n=Qe(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&q(e),n&&n.d()}}}function Qe(r){let e;return{c(){e=ut(r[7])},l(n){e=dt(n,r[7])},m(n,i){B(n,e,i)},p(n,i){i&128&&pt(e,n[7])},d(n){n&&q(e)}}}function Ft(r){let e,n,i,a,p;const t=[Tt,Ut],f=[];function u(g,v){return g[0][1]?0:1}e=u(r),n=f[e]=t[e](r);let d=r[5]&&Ze(r);return{c(){n.c(),i=ot(),d&&d.c(),a=U()},l(g){n.l(g),i=it(g),d&&d.l(g),a=U()},m(g,v){f[e].m(g,v),B(g,i,v),d&&d.m(g,v),B(g,a,v),p=!0},p(g,[v]){let P=e;e=u(g),e===P?f[e].p(g,v):(Z(),T(f[P],1,1,()=>{f[P]=null}),Q(),n=f[e],n?n.p(g,v):(n=f[e]=t[e](g),n.c()),D(n,1),n.m(i.parentNode,i)),g[5]?d?d.p(g,v):(d=Ze(g),d.c(),d.m(a.parentNode,a)):d&&(d.d(1),d=null)},i(g){p||(D(n),p=!0)},o(g){T(n),p=!1},d(g){f[e].d(g),g&&q(i),d&&d.d(g),g&&q(a)}}}function Bt(r,e,n){let{stores:i}=e,{page:a}=e,{components:p}=e,{form:t}=e,{data_0:f=null}=e,{data_1:u=null}=e,{data_2:d=null}=e;st(i.page.notify);let g=!1,v=!1,P=null;return Ie(()=>{const k=i.page.subscribe(()=>{g&&(n(6,v=!0),n(7,P=document.title||"untitled page"))});return n(5,g=!0),k}),r.$$set=k=>{"stores"in k&&n(8,i=k.stores),"page"in k&&n(9,a=k.page),"components"in k&&n(0,p=k.components),"form"in k&&n(1,t=k.form),"data_0"in k&&n(2,f=k.data_0),"data_1"in k&&n(3,u=k.data_1),"data_2"in k&&n(4,d=k.data_2)},r.$$.update=()=>{r.$$.dirty&768&&i.page.set(a)},[p,t,f,u,d,g,v,P,i,a]}class Mt extends nt{constructor(e){super(),at(this,e,Bt,Ft,rt,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const Gt={},_e=[()=>W(()=>import("./chunks/0-7b2f21f2.js"),["./chunks/0-7b2f21f2.js","./chunks/_layout-da46b06b.js","./components/pages/_layout.svelte-7ed34e6c.js","./chunks/preload-helper-41c905a7.js","./chunks/index-2e1481b4.js","./chunks/stores-37b0f26c.js","./chunks/singletons-572afc3b.js","./chunks/rocket-0f9a48ab.js","./chunks/comment-97e7acd1.js","./chunks/trophy-2cb64f43.js","./assets/_layout-b4e940b0.css"],import.meta.url),()=>W(()=>import("./chunks/1-6d3b3045.js"),["./chunks/1-6d3b3045.js","./components/error.svelte-bbf45686.js","./chunks/index-2e1481b4.js","./chunks/stores-37b0f26c.js","./chunks/singletons-572afc3b.js"],import.meta.url),()=>W(()=>import("./chunks/2-5b6b4a53.js"),["./chunks/2-5b6b4a53.js","./components/pages/(pages)/_layout.svelte-ec23f54f.js","./chunks/index-2e1481b4.js","./chunks/stores-37b0f26c.js","./chunks/singletons-572afc3b.js","./assets/_layout-821f84a5.css"],import.meta.url),()=>W(()=>import("./chunks/3-40f2beee.js"),["./chunks/3-40f2beee.js","./chunks/_page-0b9ed94a.js","./chunks/control-f5b05b5f.js"],import.meta.url),()=>W(()=>import("./chunks/4-d16de960.js"),["./chunks/4-d16de960.js","./chunks/_page-26b8aac6.js","./chunks/trophy-2cb64f43.js","./chunks/index-2e1481b4.js","./components/pages/(pages)/achievements/_page.svelte-e85de3bb.js","./chunks/github-e875a305.js","./assets/_page-890e339e.css"],import.meta.url),()=>W(()=>import("./chunks/5-2a4ad66c.js"),["./chunks/5-2a4ad66c.js","./chunks/_page-02344e9c.js","./chunks/comment-97e7acd1.js","./chunks/index-2e1481b4.js","./components/pages/(pages)/contact/_page.svelte-542321eb.js","./assets/_page-3d0e8ef0.css"],import.meta.url),()=>W(()=>import("./chunks/6-3aad4e7d.js"),["./chunks/6-3aad4e7d.js","./chunks/_page-6eff400c.js","./chunks/rocket-0f9a48ab.js","./chunks/index-2e1481b4.js","./components/pages/(pages)/rockets/_page.svelte-62c0cd1b.js","./assets/_page-a2f904ab.css"],import.meta.url),()=>W(()=>import("./chunks/7-fb418b6d.js"),["./chunks/7-fb418b6d.js","./chunks/_page-fa5d064b.js","./components/pages/me/_page.svelte-51a4c2dc.js","./chunks/index-2e1481b4.js","./chunks/github-e875a305.js","./assets/_page-ac07bd01.css"],import.meta.url)],Ht=[],Kt={"/":[3],"/(pages)/achievements":[4,[2]],"/(pages)/contact":[5,[2]],"/me":[7],"/(pages)/rockets":[6,[2]]},zt={handleError:({error:r})=>{console.error(r)}};async function Jt(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([i,a])=>[i,await a])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Wt=-1,Yt=-2,Xt=-3,Zt=-4,Qt=-5,xt=-6;function en(r){if(typeof r=="number")return i(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,n=Array(e.length);function i(a,p=!1){if(a===Wt)return;if(a===Xt)return NaN;if(a===Zt)return 1/0;if(a===Qt)return-1/0;if(a===xt)return-0;if(p)throw new Error("Invalid input");if(a in n)return n[a];const t=e[a];if(!t||typeof t!="object")n[a]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[a]=new Date(t[1]);break;case"Set":const u=new Set;n[a]=u;for(let v=1;v<t.length;v+=1)u.add(i(t[v]));break;case"Map":const d=new Map;n[a]=d;for(let v=1;v<t.length;v+=2)d.set(i(t[v]),i(t[v+1]));break;case"RegExp":n[a]=new RegExp(t[1],t[2]);break;case"Object":n[a]=Object(t[1]);break;case"BigInt":n[a]=BigInt(t[1]);break;case"null":const g=Object.create(null);n[a]=g;for(let v=1;v<t.length;v+=2)g[t[v]]=i(t[v+1]);break}else{const f=new Array(t.length);n[a]=f;for(let u=0;u<t.length;u+=1){const d=t[u];d!==Yt&&(f[u]=i(d))}}else{const f={};n[a]=f;for(const u in t){const d=t[u];f[u]=i(d)}}return n[a]}return i(0)}const Re=jt(_e,Ht,Kt,Gt),Ae=_e[0],Pe=_e[1];Ae();Pe();let re={};try{re=JSON.parse(sessionStorage[et])}catch{}function Se(r){re[r]=he()}function tn({target:r,base:e}){var Ge;const n=document.documentElement,i=[];let a=null;const p={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,u=!1,d=!0,g=!1,v=!1,P=!1,k=!1,C,A=(Ge=history.state)==null?void 0:Ge[J];A||(A=Date.now(),history.replaceState({...history.state,[J]:A},"",location.href));const ge=re[A];ge&&(history.scrollRestoration="manual",scrollTo(ge.x,ge.y));let Y,je,ie;async function Ue(){ie=ie||Promise.resolve(),await ie,ie=null;const o=new URL(location.href),s=ce(o,!0);a=null,await De(s,o,[])}async function we(o,{noScroll:s=!1,replaceState:c=!1,keepFocus:l=!1,state:h={},invalidateAll:m=!1},_,b){return typeof o=="string"&&(o=new URL(o,ze(document))),fe({url:o,scroll:s?he():null,keepfocus:l,redirect_chain:_,details:{state:h,replaceState:c},nav_token:b,accepted:()=>{m&&(k=!0)},blocked:()=>{},type:"goto"})}async function Te(o){const s=ce(o,!1);if(!s)throw new Error(`Attempted to preload a URL that does not belong to this app: ${o}`);return a={id:s.id,promise:Ce(s).then(c=>(c.type==="loaded"&&c.state.error&&(a=null),c))},a.promise}async function se(...o){const c=Re.filter(l=>o.some(h=>l.exec(h))).map(l=>Promise.all([...l.layouts,l.leaf].map(h=>h==null?void 0:h[1]())));await Promise.all(c)}async function De(o,s,c,l,h={},m){var b,y;je=h;let _=o&&await Ce(o);if(_||(_=await Me(s,{id:null},await ne(new Error(`Not found: ${s.pathname}`),{url:s,params:{},route:{id:null}}),404)),s=(o==null?void 0:o.url)||s,je!==h)return!1;if(_.type==="redirect")if(c.length>10||c.includes(s.pathname))_=await le({status:500,error:await ne(new Error("Redirect loop"),{url:s,params:{},route:{id:null}}),url:s,route:{id:null}});else return we(new URL(_.location,s).href,{},[...c,s.pathname],h),!1;else((y=(b=_.props)==null?void 0:b.page)==null?void 0:y.status)>=400&&await X.updated.check()&&await ue(s);if(i.length=0,k=!1,g=!0,l&&l.details){const{details:w}=l,R=w.replaceState?0:1;w.state[J]=A+=R,history[w.replaceState?"replaceState":"pushState"](w.state,"",s)}if(a=null,u?(t=_.state,_.props.page&&(_.props.page.url=s),C.$set(_.props)):Ve(_),l){const{scroll:w,keepfocus:R}=l;if(R||Le(),await de(),d){const S=s.hash&&document.getElementById(s.hash.slice(1));w?scrollTo(w.x,w.y):S?S.scrollIntoView():scrollTo(0,0)}}else await de();d=!0,_.props.page&&(Y=_.props.page),m&&m(),g=!1}function Ve(o){var l;t=o.state;const s=document.querySelector("style[data-sveltekit]");s&&s.remove(),Y=o.props.page,C=new Mt({target:r,props:{...o.props,stores:X},hydrate:!0});const c={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};p.after_navigate.forEach(h=>h(c)),u=!0}async function ee({url:o,params:s,branch:c,status:l,error:h,route:m,form:_}){const b=c.filter(Boolean);let y="never";for(const L of c)(L==null?void 0:L.slash)!==void 0&&(y=L.slash);o.pathname=gt(o.pathname,y),o.search=o.search;const w={type:"loaded",state:{url:o,params:s,branch:c,error:h,route:m},props:{components:b.map(L=>L.node.component)}};_!==void 0&&(w.props.form=_);let R={},S=!Y;for(let L=0;L<b.length;L+=1){const E=b[L];R={...R,...E.data},(S||!t.branch.some(j=>j===E))&&(w.props[`data_${L}`]=R,S=S||Object.keys(E.data??{}).length>0)}return S||(S=Object.keys(Y.data).length!==Object.keys(R).length),(!t.url||o.href!==t.url.href||t.error!==h||_!==void 0||S)&&(w.props.page={error:h,params:s,route:m,status:l,url:new URL(o),form:_??null,data:S?R:Y.data}),w}async function ye({loader:o,parent:s,url:c,params:l,route:h,server_data_node:m}){var w,R,S;let _=null;const b={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},y=await o();if((w=y.universal)!=null&&w.load){let F=function(...E){for(const j of E){const{href:V}=new URL(j,c);b.dependencies.add(V)}};const L={route:{get id(){return b.route=!0,h.id}},params:new Proxy(l,{get:(E,j)=>(b.params.add(j),E[j])}),data:(m==null?void 0:m.data)??null,url:vt(c,()=>{b.url=!0}),async fetch(E,j){let V;E instanceof Request?(V=E.url,j={body:E.method==="GET"||E.method==="HEAD"?void 0:await E.blob(),cache:E.cache,credentials:E.credentials,headers:E.headers,integrity:E.integrity,keepalive:E.keepalive,method:E.method,mode:E.mode,redirect:E.redirect,referrer:E.referrer,referrerPolicy:E.referrerPolicy,signal:E.signal,...j}):V=E;const $=new URL(V,c).href;return F($),u?Lt(V,$,j):St(V,j)},setHeaders:()=>{},depends:F,parent(){return b.parent=!0,s()}};_=await y.universal.load.call(null,L)??null,_=_?await Jt(_):null}return{node:y,loader:o,server:m,universal:(R=y.universal)!=null&&R.load?{type:"data",data:_,uses:b}:null,data:_??(m==null?void 0:m.data)??null,slash:((S=y.universal)==null?void 0:S.trailingSlash)??(m==null?void 0:m.slash)}}function qe(o,s,c,l,h){if(k)return!0;if(!l)return!1;if(l.parent&&o||l.route&&s||l.url&&c)return!0;for(const m of l.params)if(h[m]!==t.params[m])return!0;for(const m of l.dependencies)if(i.some(_=>_(new URL(m))))return!0;return!1}function be(o,s){return(o==null?void 0:o.type)==="data"?{type:"data",data:o.data,uses:{dependencies:new Set(o.uses.dependencies??[]),params:new Set(o.uses.params??[]),parent:!!o.uses.parent,route:!!o.uses.route,url:!!o.uses.url},slash:o.slash}:(o==null?void 0:o.type)==="skip"?s??null:null}async function Ce({id:o,invalidating:s,url:c,params:l,route:h}){if((a==null?void 0:a.id)===o)return a.promise;const{errors:m,layouts:_,leaf:b}=h,y=[..._,b];m.forEach($=>$==null?void 0:$().catch(()=>{})),y.forEach($=>$==null?void 0:$[1]().catch(()=>{}));let w=null;const R=t.url?o!==t.url.pathname+t.url.search:!1,S=t.route?o!==t.route.id:!1,F=y.reduce(($,O,N)=>{var te;const I=t.branch[N],x=!!(O!=null&&O[0])&&((I==null?void 0:I.loader)!==O[1]||qe($.some(Boolean),S,R,(te=I.server)==null?void 0:te.uses,l));return $.push(x),$},[]);if(F.some(Boolean)){try{w=await xe(c,F)}catch($){return le({status:500,error:await ne($,{url:c,params:l,route:{id:h.id}}),url:c,route:h})}if(w.type==="redirect")return w}const L=w==null?void 0:w.nodes;let E=!1;const j=y.map(async($,O)=>{var te;if(!$)return;const N=t.branch[O],I=L==null?void 0:L[O];if((!I||I.type==="skip")&&$[1]===(N==null?void 0:N.loader)&&!qe(E,S,R,(te=N.universal)==null?void 0:te.uses,l))return N;if(E=!0,(I==null?void 0:I.type)==="error")throw I;return ye({loader:$[1],url:c,params:l,route:h,parent:async()=>{var Ke;const He={};for(let ve=0;ve<O;ve+=1)Object.assign(He,(Ke=await j[ve])==null?void 0:Ke.data);return He},server_data_node:be(I===void 0&&$[0]?{type:"skip"}:I??null,N==null?void 0:N.server)})});for(const $ of j)$.catch(()=>{});const V=[];for(let $=0;$<y.length;$+=1)if(y[$])try{V.push(await j[$])}catch(O){if(O instanceof Xe)return{type:"redirect",location:O.location};let N=500,I;L!=null&&L.includes(O)?(N=O.status??N,I=O.error):O instanceof Oe?(N=O.status,I=O.body):I=await ne(O,{params:l,url:c,route:{id:h.id}});const x=await Fe($,V,m);return x?await ee({url:c,params:l,branch:V.slice(0,x.idx).concat(x.node),status:N,error:I,route:h}):await Me(c,{id:h.id},I,N)}else V.push(void 0);return await ee({url:c,params:l,branch:V,status:200,error:null,route:h,form:s?void 0:null})}async function Fe(o,s,c){for(;o--;)if(c[o]){let l=o;for(;!s[l];)l-=1;try{return{idx:l+1,node:{node:await c[o](),loader:c[o],data:{},server:null,universal:null}}}catch{continue}}}async function le({status:o,error:s,url:c,route:l}){const h={},m=await Ae();let _=null;if(m.server)try{const w=await xe(c,[!0]);if(w.type!=="data"||w.nodes[0]&&w.nodes[0].type!=="data")throw 0;_=w.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await ue(c)}const b=await ye({loader:Ae,url:c,params:h,route:l,parent:()=>Promise.resolve({}),server_data_node:be(_)}),y={node:await Pe(),loader:Pe,universal:null,server:null,data:null};return await ee({url:c,params:h,branch:[b,y],status:o,error:s,route:null})}function ce(o,s){if(We(o,e))return;const c=wt(o.pathname.slice(e.length)||"/");for(const l of Re){const h=l.exec(c);if(h)return{id:o.pathname+o.search,invalidating:s,route:l,params:yt(h),url:o}}}function Be({url:o,type:s,intent:c,delta:l}){var b,y;let h=!1;const m={from:{params:t.params,route:{id:((b=t.route)==null?void 0:b.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((y=c==null?void 0:c.route)==null?void 0:y.id)??null},url:o},willUnload:!c,type:s};l!==void 0&&(m.delta=l);const _={...m,cancel:()=>{h=!0}};return v||p.before_navigate.forEach(w=>w(_)),h?null:m}async function fe({url:o,scroll:s,keepfocus:c,redirect_chain:l,details:h,type:m,delta:_,nav_token:b,accepted:y,blocked:w}){const R=ce(o,!1),S=Be({url:o,type:m,delta:_,intent:R});if(!S){w();return}Se(A),y(),v=!0,u&&X.navigating.set(S),await De(R,o,l,{scroll:s,keepfocus:c,details:h},b,()=>{v=!1,p.after_navigate.forEach(F=>F(S)),X.navigating.set(null)})}async function Me(o,s,c,l){return o.origin===location.origin&&o.pathname===location.pathname&&!f?await le({status:l,error:c,url:o,route:s}):await ue(o)}function ue(o){return location.href=o.href,new Promise(()=>{})}function tt(){let o;n.addEventListener("mousemove",m=>{const _=m.target;clearTimeout(o),o=setTimeout(()=>{l(_,2)},20)});function s(m){l(m.composedPath()[0],1)}n.addEventListener("mousedown",s),n.addEventListener("touchstart",s,{passive:!0});const c=new IntersectionObserver(m=>{for(const _ of m)_.isIntersecting&&(se(new URL(_.target.href).pathname),c.unobserve(_.target))},{threshold:0});function l(m,_){const b=Je(m,n);if(!b)return;const{url:y,external:w}=ke(b,e);if(w)return;const R=pe(b);R.reload||(_<=R.preload_data?Te(y):_<=R.preload_code&&se(y.pathname))}function h(){c.disconnect();for(const m of n.querySelectorAll("a")){const{url:_,external:b}=ke(m,e);if(b)continue;const y=pe(m);y.reload||(y.preload_code===Ye.viewport&&c.observe(m),y.preload_code===Ye.eager&&se(_.pathname))}}p.after_navigate.push(h),h()}return{after_navigate:o=>{Ie(()=>(p.after_navigate.push(o),()=>{const s=p.after_navigate.indexOf(o);p.after_navigate.splice(s,1)}))},before_navigate:o=>{Ie(()=>(p.before_navigate.push(o),()=>{const s=p.before_navigate.indexOf(o);p.before_navigate.splice(s,1)}))},disable_scroll_handling:()=>{(g||!u)&&(d=!1)},goto:(o,s={})=>we(o,s,[]),invalidate:o=>{if(typeof o=="function")i.push(o);else{const{href:s}=new URL(o,location.href);i.push(c=>c.href===s)}return Ue()},invalidateAll:()=>(k=!0,Ue()),preload_data:async o=>{const s=new URL(o,ze(document));await Te(s)},preload_code:se,apply_action:async o=>{if(o.type==="error"){const s=new URL(location.href),{branch:c,route:l}=t;if(!l)return;const h=await Fe(t.branch.length,c,l.errors);if(h){const m=await ee({url:s,params:t.params,branch:c.slice(0,h.idx).concat(h.node),status:o.status??500,error:o.error,route:l});t=m.state,C.$set(m.props),de().then(Le)}}else if(o.type==="redirect")we(o.location,{invalidateAll:!0},[]);else{const s={form:o.data,page:{...Y,form:o.data,status:o.status}};C.$set(s),o.type==="success"&&de().then(Le)}},_start_router:()=>{var o;history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var l;let c=!1;if(!v){const h={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};p.before_navigate.forEach(m=>m(h))}c?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Se(A);try{sessionStorage[et]=JSON.stringify(re)}catch{}}}),(o=navigator.connection)!=null&&o.saveData||tt(),n.addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const c=Je(s.composedPath()[0],n);if(!c)return;const{url:l,external:h,has:m}=ke(c,e),_=pe(c);if(!l||!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:")||m.download)return;if(h||_.reload){Be({url:l,type:"link"})||s.preventDefault(),v=!0;return}const[y,w]=l.href.split("#");if(w!==void 0&&y===location.href.split("#")[0]){P=!0,Se(A),t.url=l,X.page.set({...Y,url:l}),X.page.notify();return}fe({url:l,scroll:_.noscroll?he():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),n.addEventListener("submit",s=>{var y;if(s.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(s.target),l=s.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const m=new URL(((y=s.submitter)==null?void 0:y.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(We(m,e))return;const{noscroll:_,reload:b}=pe(s.target);b||(s.preventDefault(),s.stopPropagation(),m.search=new URLSearchParams(new FormData(s.target)).toString(),fe({url:m,scroll:_?he():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"}))}),addEventListener("popstate",s=>{var c;if((c=s.state)!=null&&c[J]){if(s.state[J]===A)return;const l=s.state[J]-A;fe({url:new URL(location.href),scroll:re[s.state[J]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{A=s.state[J]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{P&&(P=!1,history.replaceState({...history.state,[J]:++A},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&X.navigating.set(null)})},_hydrate:async({status:o=200,error:s,node_ids:c,params:l,route:h,data:m,form:_})=>{f=!0;const b=new URL(location.href);({params:l={},route:h={id:null}}=ce(b,!1)||{});let y;try{const w=c.map(async(R,S)=>{const F=m[S];return ye({loader:_e[R],url:b,params:l,route:h,parent:async()=>{const L={};for(let E=0;E<S;E+=1)Object.assign(L,(await w[E]).data);return L},server_data_node:be(F)})});y=await ee({url:b,params:l,branch:await Promise.all(w),status:o,error:s,form:_,route:Re.find(({id:R})=>R===h.id)??null})}catch(w){if(w instanceof Xe){await ue(new URL(w.location,location.href));return}y=await le({status:w instanceof Oe?w.status:500,error:await ne(w,{url:b,params:l,route:h}),url:b,route:h})}Ve(y)}}}async function xe(r,e){var p;const n=new URL(r);n.pathname=$t(r.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const i=await me(n.href),a=await i.json();if(!i.ok)throw new Error(a);return(p=a.nodes)==null||p.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=en(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),a}function ne(r,e){return r instanceof Oe?r.body:zt.handleError({error:r,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Le(){const r=document.querySelector("[autofocus]");if(r)r.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var i;(i=getSelection())==null||i.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function sn({env:r,hydrate:e,paths:n,target:i,version:a}){ht(n),_t(a);const p=tn({target:i,base:n.base});mt({client:p}),e?await p._hydrate(e):p.goto(location.href,{replaceState:!0}),p._start_router()}export{sn as start};
