var Cn=Array.isArray,$t=Array.prototype.indexOf,bn=Array.from,Pn=Object.defineProperty,_t=Object.getOwnPropertyDescriptor,Kt=Object.getOwnPropertyDescriptors,Fn=Object.prototype,Mn=Array.prototype,Zt=Object.getPrototypeOf;function Ln(t){return typeof t=="function"}const qn=()=>{};function Yn(t){return t()}function Et(t){for(var n=0;n<t.length;n++)t[n]()}const T=2,wt=4,W=8,st=16,D=32,q=64,H=128,y=256,U=512,v=1024,I=2048,b=4096,C=8192,X=16384,zt=32768,yt=65536,jn=1<<17,Wt=1<<19,gt=1<<20,ct=Symbol("$state"),Bn=Symbol("legacy props"),Hn=Symbol("");function Tt(t){return t===this.v}function Xt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function mt(t){return!Xt(t,this.v)}function Jt(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Qt(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function tn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function nn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Un(){throw new Error("https://svelte.dev/e/hydration_failed")}function Vn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Gn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function $n(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function rn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function en(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let J=!1;function Kn(){J=!0}const Zn=1,zn=2,Wn=16,Xn=1,Jn=2,Qn=4,tr=8,nr=16,rr=1,er=2,an="[",ln="[!",sn="]",At={},ar=Symbol();function xt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let f=null;function vt(t){f=t}function lr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},J&&!n&&(f.l={s:null,u:null,r1:[],r2:ut(!1)})}function sr(t){const n=f;if(n!==null){t!==void 0&&(n.x=t);const s=n.e;if(s!==null){var r=o,e=u;n.e=null;try{for(var a=0;a<s.length;a++){var l=s[a];K(l.effect),$(l.reaction),bt(l.fn)}}finally{K(r),$(e)}}f=n.p,n.m=!0}return t||{}}function Q(){return!J||f!==null&&f.l===null}function ut(t,n){var r={f:0,v:t,reactions:null,equals:Tt,rv:0,wv:0};return r}function ur(t){return Rt(ut(t))}function un(t,n=!1){var e;const r=ut(t);return n||(r.equals=mt),J&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function or(t,n=!1){return Rt(un(t,n))}function Rt(t){return u!==null&&!g&&u.f&T&&(A===null?mn([t]):A.push(t)),t}function on(t,n){return u!==null&&!g&&Q()&&u.f&(T|st)&&(A===null||!A.includes(t))&&en(),fn(t,n)}function fn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Bt(),Dt(t,I),Q()&&o!==null&&o.f&v&&!(o.f&(D|q))&&(R===null?An([t]):R.push(t))),n}function fr(t,n=1){var r=Gt(t),e=n===1?r++:r--;return on(t,r),e}function Dt(t,n){var r=t.reactions;if(r!==null)for(var e=Q(),a=r.length,l=0;l<a;l++){var s=r[l],i=s.f;i&I||!e&&s===o||(x(s,n),i&(v|y)&&(i&T?Dt(s,b):nt(s)))}}let O=!1;function ir(t){O=t}let m;function M(t){if(t===null)throw xt(),At;return m=t}function _r(){return M(N(m))}function cr(t){if(O){if(N(m)!==null)throw xt(),At;m=t}}function vr(t=1){if(O){for(var n=t,r=m;n--;)r=N(r);m=r}}function pr(){for(var t=0,n=m;;){if(n.nodeType===8){var r=n.data;if(r===sn){if(t===0)return n;t-=1}else(r===an||r===ln)&&(t+=1)}var e=N(n);n.remove(),n=e}}var pt,_n,cn,kt,It;function hr(){if(pt===void 0){pt=window,_n=document,cn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype;kt=_t(n,"firstChild").get,It=_t(n,"nextSibling").get,t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function rt(t=""){return document.createTextNode(t)}function et(t){return kt.call(t)}function N(t){return It.call(t)}function dr(t,n){if(!O)return et(t);var r=et(m);if(r===null)r=m.appendChild(rt());else if(n&&r.nodeType!==3){var e=rt();return r==null||r.before(e),M(e),e}return M(r),r}function Er(t,n){if(!O){var r=et(t);return r instanceof Comment&&r.data===""?N(r):r}return m}function wr(t,n=1,r=!1){let e=O?m:t;for(var a;n--;)a=e,e=N(e);if(!O)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var s=rt();return e===null?a==null||a.after(s):e.before(s),M(s),s}return M(e),e}function yr(t){t.textContent=""}function Ot(t){var n=T|I,r=u!==null&&u.f&T?u:null;return o===null||r!==null&&r.f&y?n|=y:o.f|=gt,{ctx:f,deps:null,effects:null,equals:Tt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??o}}function gr(t){const n=Ot(t);return n.equals=mt,n}function St(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)S(n[r])}}function vn(t){for(var n=t.parent;n!==null;){if(!(n.f&T))return n;n=n.parent}return null}function pn(t){var n,r=o;K(vn(t));try{St(t),n=Ut(t)}finally{K(r)}return n}function Nt(t){var n=pn(t),r=(k||t.f&y)&&t.deps!==null?b:v;x(t,r),t.equals(n)||(t.v=n,t.wv=Bt())}function Ct(t){o===null&&u===null&&tn(),u!==null&&u.f&y&&o===null&&Qt(),ot&&Jt()}function hn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function P(t,n,r,e=!0){var a=(t&q)!==0,l=o,s={ctx:f,deps:null,nodes_start:null,nodes_end:null,f:t|I,first:null,fn:n,last:null,next:null,parent:a?null:l,prev:null,teardown:null,transitions:null,wv:0};if(r)try{ft(s),s.f|=zt}catch(p){throw S(s),p}else n!==null&&nt(s);var i=r&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(gt|H))===0;if(!i&&!a&&e&&(l!==null&&hn(s,l),u!==null&&u.f&T)){var _=u;(_.effects??(_.effects=[])).push(s)}return s}function Tr(t){const n=P(W,null,!1);return x(n,v),n.teardown=t,n}function mr(t){Ct();var n=o!==null&&(o.f&D)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:u})}else{var e=bt(t);return e}}function Ar(t){return Ct(),dn(t)}function xr(t){const n=P(q,t,!0);return(r={})=>new Promise(e=>{r.outro?yn(n,()=>{S(n),e(void 0)}):(S(n),e(void 0))})}function bt(t){return P(wt,t,!1)}function dn(t){return P(W,t,!0)}function Rr(t,n=[],r=Ot){const e=n.map(r);return En(()=>t(...e.map(Gt)))}function En(t,n=0){return P(W|st|n,t,!0)}function Dr(t,n=!0){return P(W|D,t,!0,n)}function Pt(t){var n=t.teardown;if(n!==null){const r=ot,e=u;dt(!0),$(null);try{n.call(null)}finally{dt(r),$(e)}}}function Ft(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;S(r,n),r=e}}function wn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&D||S(n),n=r}}function S(t,n=!0){var r=!1;if((n||t.f&Wt)&&t.nodes_start!==null){for(var e=t.nodes_start,a=t.nodes_end;e!==null;){var l=e===a?null:N(e);e.remove(),e=l}r=!0}Ft(t,n&&!r),z(t,0),x(t,X);var s=t.transitions;if(s!==null)for(const _ of s)_.stop();Pt(t);var i=t.parent;i!==null&&i.first!==null&&Mt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Mt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function yn(t,n){var r=[];Lt(t,r,!0),gn(r,()=>{S(t),n&&n()})}function gn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var a of t)a.out(e)}else n()}function Lt(t,n,r){if(!(t.f&C)){if(t.f^=C,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&n.push(s);for(var e=t.first;e!==null;){var a=e.next,l=(e.f&yt)!==0||(e.f&D)!==0;Lt(e,n,l?r:!1),e=a}}}function kr(t){qt(t,!0)}function qt(t,n){if(t.f&C){t.f^=C,t.f&v||(t.f^=v),Y(t)&&(x(t,I),nt(t));for(var r=t.first;r!==null;){var e=r.next,a=(r.f&yt)!==0||(r.f&D)!==0;qt(r,a?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let L=[],at=[];function Yt(){var t=L;L=[],Et(t)}function Tn(){var t=at;at=[],Et(t)}function Ir(t){L.length===0&&queueMicrotask(Yt),L.push(t)}function ht(){L.length>0&&Yt(),at.length>0&&Tn()}let j=!1,V=!1,G=null,B=!1,ot=!1;function dt(t){ot=t}let F=[];let u=null,g=!1;function $(t){u=t}let o=null;function K(t){o=t}let A=null;function mn(t){A=t}let c=null,E=0,R=null;function An(t){R=t}let jt=1,Z=0,k=!1;function Bt(){return++jt}function Y(t){var h;var n=t.f;if(n&I)return!0;if(n&b){var r=t.deps,e=(n&y)!==0;if(r!==null){var a,l,s=(n&U)!==0,i=e&&o!==null&&!k,_=r.length;if(s||i){var p=t,w=p.parent;for(a=0;a<_;a++)l=r[a],(s||!((h=l==null?void 0:l.reactions)!=null&&h.includes(p)))&&(l.reactions??(l.reactions=[])).push(p);s&&(p.f^=U),i&&w!==null&&!(w.f&y)&&(p.f^=y)}for(a=0;a<_;a++)if(l=r[a],Y(l)&&Nt(l),l.wv>t.wv)return!0}(!e||o!==null&&!k)&&x(t,v)}return!1}function xn(t,n){for(var r=n;r!==null;){if(r.f&H)try{r.fn(t);return}catch{r.f^=H}r=r.parent}throw j=!1,t}function Rn(t){return(t.f&X)===0&&(t.parent===null||(t.parent.f&H)===0)}function tt(t,n,r,e){if(j){if(r===null&&(j=!1),Rn(n))throw t;return}r!==null&&(j=!0);{xn(t,n);return}}function Ht(t,n,r=!0){var e=t.reactions;if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];l.f&T?Ht(l,n,!1):n===l&&(r?x(l,I):l.f&v&&x(l,b),nt(l))}}function Ut(t){var it;var n=c,r=E,e=R,a=u,l=k,s=A,i=f,_=g,p=t.f;c=null,E=0,R=null,k=(p&y)!==0&&(g||!B||u===null),u=p&(D|q)?null:t,A=null,vt(t.ctx),g=!1,Z++;try{var w=(0,t.fn)(),h=t.deps;if(c!==null){var d;if(z(t,E),h!==null&&E>0)for(h.length=E+c.length,d=0;d<c.length;d++)h[E+d]=c[d];else t.deps=h=c;if(!k)for(d=E;d<h.length;d++)((it=h[d]).reactions??(it.reactions=[])).push(t)}else h!==null&&E<h.length&&(z(t,E),h.length=E);if(Q()&&R!==null&&!g&&h!==null&&!(t.f&(T|b|I)))for(d=0;d<R.length;d++)Ht(R[d],t);return a!==null&&Z++,w}finally{c=n,E=r,R=e,u=a,k=l,A=s,vt(i),g=_}}function Dn(t,n){let r=n.reactions;if(r!==null){var e=$t.call(r,t);if(e!==-1){var a=r.length-1;a===0?r=n.reactions=null:(r[e]=r[a],r.pop())}}r===null&&n.f&T&&(c===null||!c.includes(n))&&(x(n,b),n.f&(y|U)||(n.f^=U),St(n),z(n,0))}function z(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Dn(t,r[e])}function ft(t){var n=t.f;if(!(n&X)){x(t,v);var r=o,e=f,a=B;o=t,B=!0;try{n&st?wn(t):Ft(t),Pt(t);var l=Ut(t);t.teardown=typeof l=="function"?l:null,t.wv=jt;var s=t.deps,i}catch(_){tt(_,t,r,e||t.ctx)}finally{B=a,o=r}}}function kn(){try{nn()}catch(t){if(G!==null)tt(t,G,null);else throw t}}function Vt(){try{for(var t=0;F.length>0;){t++>1e3&&kn();var n=F,r=n.length;F=[];for(var e=0;e<r;e++){var a=n[e];a.f&v||(a.f^=v);var l=On(a);In(l)}}}finally{V=!1,G=null}}function In(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(X|C)))try{Y(e)&&(ft(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Mt(e):e.fn=null))}catch(a){tt(a,e,null,e.ctx)}}}function nt(t){V||(V=!0,queueMicrotask(Vt));for(var n=G=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(q|D)){if(!(r&v))return;n.f^=v}}F.push(n)}function On(t){var n=[],r=t.first;t:for(;r!==null;){var e=r.f,a=(e&D)!==0,l=a&&(e&v)!==0,s=r.next;if(!l&&!(e&C)){if(e&wt)n.push(r);else if(a)r.f^=v;else{var i=u;try{u=r,Y(r)&&ft(r)}catch(w){tt(w,r,null,r.ctx)}finally{u=i}}var _=r.first;if(_!==null){r=_;continue}}if(s===null){let w=r.parent;for(;w!==null;){if(t===w)break t;var p=w.next;if(p!==null){r=p;continue t}w=w.parent}}r=s}return n}function Sn(t){var n;for(ht();F.length>0;)V=!0,Vt(),ht();return n}async function Or(){await Promise.resolve(),Sn()}function Gt(t){var n=t.f,r=(n&T)!==0;if(u!==null&&!g){A!==null&&A.includes(t)&&rn();var e=u.deps;t.rv<Z&&(t.rv=Z,c===null&&e!==null&&e[E]===t?E++:c===null?c=[t]:(!k||!c.includes(t))&&c.push(t))}else if(r&&t.deps===null&&t.effects===null){var a=t,l=a.parent;l!==null&&!(l.f&y)&&(a.f^=y)}return r&&(a=t,Y(a)&&Nt(a)),t.v}function Sr(t){var n=g;try{return g=!0,t()}finally{g=n}}const Nn=-7169;function x(t,n){t.f=t.f&Nn|n}function Nr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ct in t)lt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ct in r&&lt(r)}}}function lt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{lt(t[e],n)}catch{}const r=Zt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Kt(r);for(let a in e){const l=e[a].get;if(l)try{l.call(t)}catch{}}}}}export{Vn as $,an as A,N as B,et as C,Kn as D,yt as E,lr as F,Er as G,ln as H,Rr as I,sr as J,dr as K,cr as L,wr as M,Zt as N,Kt as O,Hn as P,J as Q,Fn as R,ct as S,Mn as T,ar as U,ut as V,$n as W,_t as X,o as Y,Gn as Z,Cn as _,_r as a,jn as a0,gr as a1,Qn as a2,mt as a3,tr as a4,Bn as a5,Jn as a6,Xn as a7,nr as a8,fr as a9,fn as aA,zn as aB,Lt as aC,gn as aD,S as aE,Zn as aF,Wn as aG,Ln as aa,Xt as ab,$ as ac,K as ad,u as ae,hr as af,At as ag,sn as ah,xt as ai,Un as aj,yr as ak,bn as al,xr as am,cn as an,rr as ao,er as ap,bt as aq,dn as ar,Ir as as,Sn as at,ur as au,Or as av,vr as aw,_n as ax,or as ay,C as az,En as b,Dr as c,m as d,ir as e,kr as f,Pn as g,O as h,Gt as i,on as j,f as k,mr as l,un as m,qn as n,Et as o,yn as p,Sr as q,pr as r,M as s,Tr as t,Ar as u,Yn as v,Nr as w,Ot as x,rt as y,Wt as z};
