import{S as T,K as Y,M as Z,N as w,O as $,P as h,U as v,Q as O,D as b,w as L,R as G,o as V,T as z,V as H,W as J,X as F,Y as Q,A as q,Z as W,_ as X,q as B,$ as k,J as ee,a0 as re,a1 as ne,G as M,a2 as te,a3 as ie,a4 as se,a5 as U,a6 as E}from"./runtime.dm3FgdR6.js";import{c as fe}from"./store.DjnXWQRA.js";function R(e,r=null,f){if(typeof e!="object"||e===null||T in e)return e;const a=V(e);if(a!==Y&&a!==Z)return e;var i=new Map,c=z(e),m=w(0);c&&i.set("length",w(e.length));var P;return new Proxy(e,{defineProperty(l,n,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&$();var s=i.get(n);return s===void 0?(s=w(t.value),i.set(n,s)):h(s,R(t.value,P)),!0},deleteProperty(l,n){var t=i.get(n);if(t===void 0)n in l&&i.set(n,w(v));else{if(c&&typeof n=="string"){var s=i.get("length"),u=Number(n);Number.isInteger(u)&&u<s.v&&h(s,u)}h(t,v),j(m)}return!0},get(l,n,t){var _;if(n===T)return e;var s=i.get(n),u=n in l;if(s===void 0&&(!u||(_=O(l,n))!=null&&_.writable)&&(s=w(R(u?l[n]:v,P)),i.set(n,s)),s!==void 0){var o=b(s);return o===v?void 0:o}return Reflect.get(l,n,t)},getOwnPropertyDescriptor(l,n){var t=Reflect.getOwnPropertyDescriptor(l,n);if(t&&"value"in t){var s=i.get(n);s&&(t.value=b(s))}else if(t===void 0){var u=i.get(n),o=u==null?void 0:u.v;if(u!==void 0&&o!==v)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return t},has(l,n){var o;if(n===T)return!0;var t=i.get(n),s=t!==void 0&&t.v!==v||Reflect.has(l,n);if(t!==void 0||L!==null&&(!s||(o=O(l,n))!=null&&o.writable)){t===void 0&&(t=w(s?R(l[n],P):v),i.set(n,t));var u=b(t);if(u===v)return!1}return s},set(l,n,t,s){var x;var u=i.get(n),o=n in l;if(c&&n==="length")for(var _=t;_<u.v;_+=1){var p=i.get(_+"");p!==void 0?h(p,v):_ in l&&(p=w(v),i.set(_+"",p))}u===void 0?(!o||(x=O(l,n))!=null&&x.writable)&&(u=w(void 0),h(u,R(t,P)),i.set(n,u)):(o=u.v!==v,h(u,R(t,P)));var y=Reflect.getOwnPropertyDescriptor(l,n);if(y!=null&&y.set&&y.set.call(s,t),!o){if(c&&typeof n=="string"){var D=i.get("length"),g=Number(n);Number.isInteger(g)&&g>=D.v&&h(D,g+1)}j(m)}return!0},ownKeys(l){b(m);var n=Reflect.ownKeys(l).filter(u=>{var o=i.get(u);return o===void 0||o.v!==v});for(var[t,s]of i)s.v!==v&&!(t in l)&&n.push(t);return n},setPrototypeOf(){G()}})}function j(e,r=1){h(e,e.v+r)}const ae={get(e,r){if(!e.exclude.includes(r))return b(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,f){return r in e.special||(e.special[r]=le({get[r](){return e.props[r]}},r,F)),e.special[r](f),U(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),U(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function ce(e,r){return new Proxy({props:e,exclude:r,special:{},version:w(0)},ae)}const ue={get(e,r){let f=e.props.length;for(;f--;){let a=e.props[f];if(E(a)&&(a=a()),typeof a=="object"&&a!==null&&r in a)return a[r]}},set(e,r,f){let a=e.props.length;for(;a--;){let i=e.props[a];E(i)&&(i=i());const c=O(i,r);if(c&&c.set)return c.set(f),!0}return!1},getOwnPropertyDescriptor(e,r){let f=e.props.length;for(;f--;){let a=e.props[f];if(E(a)&&(a=a()),typeof a=="object"&&a!==null&&r in a){const i=O(a,r);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,r){for(let f of e.props)if(E(f)&&(f=f()),f!=null&&r in f)return!0;return!1},ownKeys(e){const r=[];for(let f of e.props){E(f)&&(f=f());for(const a in f)r.includes(a)||r.push(a)}return r}};function ve(...e){return new Proxy({props:e},ue)}function C(e){for(var r=L,f=L;r!==null&&!(r.f&(W|X));)r=r.parent;try{return B(r),e()}finally{B(f)}}function le(e,r,f,a){var K;var i=(f&k)!==0,c=!ee||(f&re)!==0,m=(f&ne)!==0,P=(f&ie)!==0,l=!1,n;m?[n,l]=fe(()=>e[r]):n=e[r];var t=(K=O(e,r))==null?void 0:K.set,s=a,u=!0,o=!1,_=()=>(o=!0,u&&(u=!1,P?s=q(a):s=a),s);n===void 0&&a!==void 0&&(t&&c&&H(),n=_(),t&&t(n));var p;if(c)p=()=>{var d=e[r];return d===void 0?_():(u=!0,o=!1,d)};else{var y=C(()=>(i?M:te)(()=>e[r]));y.f|=J,p=()=>{var d=b(y);return d!==void 0&&(s=void 0),d===void 0?s:d}}if(!(f&F))return p;if(t){var D=e.$$legacy;return function(d,I){return arguments.length>0?((!c||!I||D||l)&&t(I?p():d),d):p()}}var g=!1,x=!1,N=se(n),S=C(()=>M(()=>{var d=p(),I=b(N);return g?(g=!1,x=!0,I):(x=!1,N.v=d)}));return i||(S.equals=Q),function(d,I){if(arguments.length>0){const A=I?b(S):c&&m?R(d):d;return S.equals(A)||(g=!0,h(N,A),o&&s!==void 0&&(s=A),q(()=>b(S))),d}return b(S)}}export{R as a,ce as l,le as p,ve as s};
