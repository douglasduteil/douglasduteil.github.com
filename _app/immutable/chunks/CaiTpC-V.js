import{v as j,g as R,j as O,W as H,l as M,m as I,ah as b,K as P,I as Y,J as C,ai as T,e as g,s as A,c as W,d as p,aj as $,ak as q,al as B,am as F,an as J,ao as K,F as z,a as G,aa as Q,h as E,ad as U,y as X}from"./C7sE47wp.js";import{r as Z}from"./Bd6OH8nF.js";import{b as x}from"./2YfGbsh2.js";const rr=["touchstart","touchmove"];function ar(r){return rr.includes(r)}const er=new Set,D=new Set;function m(r){var N;var a=this,s=a.ownerDocument,c=r.type,i=((N=r.composedPath)==null?void 0:N.call(r))||[],e=i[0]||r.target,f=0,_=r.__root;if(_){var u=i.indexOf(_);if(u!==-1&&(a===document||a===window)){r.__root=a;return}var h=i.indexOf(a);if(h===-1)return;u<=h&&(f=u)}if(e=i[f]||r.target,e!==a){j(r,"currentTarget",{configurable:!0,get(){return e||s}});var w=M,o=I;R(null),O(null);try{for(var t,n=[];e!==null;){var d=e.assignedSlot||e.parentNode||e.host||null;try{var l=e["__"+c];if(l!==void 0&&!e.disabled)if(H(l)){var[L,...V]=l;L.apply(e,[r,...V])}else l.call(e,r)}catch(y){t?n.push(y):t=y}if(r.cancelBubble||d===a||d===null)break;e=d}if(t){for(let y of n)queueMicrotask(()=>{throw y});throw t}}finally{r.__root=a,delete r.currentTarget,R(w),O(o)}}}function ir(r,a){var s=a==null?"":typeof a=="object"?a+"":a;s!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=s,r.nodeValue=s==null?"":s+"")}function tr(r,a){return k(r,a)}function dr(r,a){b(),a.intro=a.intro??!1;const s=a.target,c=E,i=p;try{for(var e=P(s);e&&(e.nodeType!==8||e.data!==Y);)e=C(e);if(!e)throw T;g(!0),A(e),W();const f=k(r,{...a,anchor:e});if(p===null||p.nodeType!==8||p.data!==$)throw q(),T;return g(!1),f}catch(f){if(f===T)return a.recover===!1&&B(),b(),F(s),g(!1),tr(r,a);throw f}finally{g(c),A(i),Z()}}const v=new Map;function k(r,{target:a,anchor:s,props:c={},events:i,context:e,intro:f=!0}){b();var _=new Set,u=o=>{for(var t=0;t<o.length;t++){var n=o[t];if(!_.has(n)){_.add(n);var d=ar(n);a.addEventListener(n,m,{passive:d});var l=v.get(n);l===void 0?(document.addEventListener(n,m,{passive:d}),v.set(n,1)):v.set(n,l+1)}}};u(J(er)),D.add(u);var h=void 0,w=K(()=>{var o=s??a.appendChild(z());return G(()=>{if(e){Q({});var t=X;t.c=e}i&&(c.$$events=i),E&&x(o,null),h=r(o,c)||{},E&&(I.nodes_end=p),e&&U()}),()=>{var d;for(var t of _){a.removeEventListener(t,m);var n=v.get(t);--n===0?(document.removeEventListener(t,m),v.delete(t)):v.set(t,n)}D.delete(u),o!==s&&((d=o.parentNode)==null||d.removeChild(o))}});return S.set(h,w),h}let S=new WeakMap;function fr(r,a){const s=S.get(r);return s?(S.delete(r),s(a)):Promise.resolve()}export{dr as h,tr as m,ir as s,fr as u};
