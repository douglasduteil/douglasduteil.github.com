import{a8 as H,n as R,q as O,T as M,v as Y,w as D,a9 as b,aa as j,ab as q,ac as C,ad as T,l as g,k,e as P,i as v,ae as $,af as z,ag as B,ah as W,ai as F,aj as G,ak as J,d as K,p as Q,h as E,a as U,z as X}from"./runtime.CYk5z9yU.js";import{r as Z}from"./store.BG2xIVQ1.js";import{b as x}from"./disclose-version.SJI8_uvq.js";const aa=new Set,A=new Set;function m(a){var N;var r=this,s=r.ownerDocument,_=a.type,o=((N=a.composedPath)==null?void 0:N.call(a))||[],e=o[0]||a.target,d=0,h=a.__root;if(h){var u=o.indexOf(h);if(u!==-1&&(r===document||r===window)){a.__root=r;return}var l=o.indexOf(r);if(l===-1)return;u<=l&&(d=u)}if(e=o[d]||a.target,e!==r){H(a,"currentTarget",{configurable:!0,get(){return e||s}});var w=Y,i=D;R(null),O(null);try{for(var t,n=[];e!==null;){var f=e.assignedSlot||e.parentNode||e.host||null;try{var c=e["__"+_];if(c!==void 0&&!e.disabled)if(M(c)){var[L,...V]=c;L.apply(e,[a,...V])}else c.call(e,a)}catch(y){t?n.push(y):t=y}if(a.cancelBubble||f===r||f===null)break;e=f}if(t){for(let y of n)queueMicrotask(()=>{throw y});throw t}}finally{a.__root=r,delete a.currentTarget,R(w),O(i)}}}const ra=["touchstart","touchmove"];function ea(a){return ra.includes(a)}function oa(a,r){var s=r==null?"":typeof r=="object"?r+"":r;s!==(a.__t??(a.__t=a.nodeValue))&&(a.__t=s,a.nodeValue=s==null?"":s+"")}function ta(a,r){return I(a,r)}function fa(a,r){b(),r.intro=r.intro??!1;const s=r.target,_=E,o=v;try{for(var e=j(s);e&&(e.nodeType!==8||e.data!==q);)e=C(e);if(!e)throw T;g(!0),k(e),P();const d=I(a,{...r,anchor:e});if(v===null||v.nodeType!==8||v.data!==$)throw z(),T;return g(!1),d}catch(d){if(d===T)return r.recover===!1&&B(),b(),W(s),g(!1),ta(a,r);throw d}finally{g(_),k(o),Z()}}const p=new Map;function I(a,{target:r,anchor:s,props:_={},events:o,context:e,intro:d=!0}){b();var h=new Set,u=i=>{for(var t=0;t<i.length;t++){var n=i[t];if(!h.has(n)){h.add(n);var f=ea(n);r.addEventListener(n,m,{passive:f});var c=p.get(n);c===void 0?(document.addEventListener(n,m,{passive:f}),p.set(n,1)):p.set(n,c+1)}}};u(F(aa)),A.add(u);var l=void 0,w=G(()=>{var i=s??r.appendChild(J());return K(()=>{if(e){Q({});var t=X;t.c=e}o&&(_.$$events=o),E&&x(i,null),l=a(i,_)||{},E&&(D.nodes_end=v),e&&U()}),()=>{var f;for(var t of h){r.removeEventListener(t,m);var n=p.get(t);--n===0?(document.removeEventListener(t,m),p.delete(t)):p.set(t,n)}A.delete(u),S.delete(l),i!==s&&((f=i.parentNode)==null||f.removeChild(i))}});return S.set(l,w),l}let S=new WeakMap;function da(a){const r=S.get(a);r&&r()}export{fa as h,ta as m,oa as s,da as u};
