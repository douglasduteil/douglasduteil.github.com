var Pn=Array.isArray,Zt=Array.prototype.indexOf,Fn=Array.from,qn=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,zt=Object.getOwnPropertyDescriptors,Ln=Object.prototype,Mn=Array.prototype,Wt=Object.getPrototypeOf;function Yn(t){return typeof t=="function"}const Hn=()=>{};function jn(t){return t()}function Xt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,Et=4,H=8,at=16,m=32,W=64,nt=128,O=256,G=512,d=1024,x=2048,j=4096,b=8192,P=16384,Jt=32768,yt=65536,Bn=1<<17,Qt=1<<19,wt=1<<20,vt=Symbol("$state"),Un=Symbol("legacy props"),Vn=Symbol("");function Tt(t){return t===this.v}function tn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function mt(t){return!tn(t,this.v)}function nn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function rn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function en(t){throw new Error("https://svelte.dev/e/effect_orphan")}function ln(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Gn(){throw new Error("https://svelte.dev/e/hydration_failed")}function $n(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Kn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Zn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function sn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function an(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let X=!1;function zn(){X=!0}const Wn=1,Xn=2,Jn=16,Qn=1,tr=2,nr=4,rr=8,er=16,lr=1,sr=2,un="[",on="[!",fn="]",At={},ar=Symbol();function ut(t,n){var r={f:0,v:t,reactions:null,equals:Tt,rv:0,wv:0};return r}function ur(t){return gt(ut(t))}function _n(t,n=!1){var e;const r=ut(t);return n||(r.equals=mt),X&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function or(t,n=!1){return gt(_n(t,n))}function gt(t){return o!==null&&o.f&y&&(T===null?Rn([t]):T.push(t)),t}function cn(t,n){return o!==null&&ft()&&o.f&(y|at)&&(T===null||!T.includes(t))&&an(),vn(t,n)}function vn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Bt(),xt(t,x),ft()&&u!==null&&u.f&d&&!(u.f&m)&&(h!==null&&h.includes(t)?(A(u,x),tt(u)):g===null?Dn([t]):g.push(t))),n}function xt(t,n){var r=t.reactions;if(r!==null)for(var e=ft(),l=r.length,s=0;s<l;s++){var a=r[s],i=a.f;i&x||!e&&a===u||(A(a,n),i&(d|O)&&(i&y?xt(a,j):tt(a)))}}function Rt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let S=!1;function ir(t){S=t}let w;function q(t){if(t===null)throw Rt(),At;return w=t}function fr(){return q(k(w))}function _r(t){if(S){if(k(w)!==null)throw Rt(),At;w=t}}function cr(t=1){if(S){for(var n=t,r=w;n--;)r=k(r);w=r}}function vr(){for(var t=0,n=w;;){if(n.nodeType===8){var r=n.data;if(r===fn){if(t===0)return n;t-=1}else(r===un||r===on)&&(t+=1)}var e=k(n);n.remove(),n=e}}var pt,pn,Dt,St;function pr(){if(pt===void 0){pt=window,pn=document;var t=Element.prototype,n=Node.prototype;Dt=ct(n,"firstChild").get,St=ct(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function rt(t=""){return document.createTextNode(t)}function et(t){return Dt.call(t)}function k(t){return St.call(t)}function hr(t,n){if(!S)return et(t);var r=et(w);if(r===null)r=w.appendChild(rt());else if(n&&r.nodeType!==3){var e=rt();return r==null||r.before(e),q(e),e}return q(r),r}function dr(t,n){if(!S){var r=et(t);return r instanceof Comment&&r.data===""?k(r):r}return w}function Er(t,n=1,r=!1){let e=S?w:t;for(var l;n--;)l=e,e=k(e);if(!S)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var a=rt();return e===null?l==null||l.after(a):e.before(a),q(a),a}return q(e),e}function yr(t){t.textContent=""}function hn(t){var n=y|x;u===null?n|=O:u.f|=wt;var r=o!==null&&o.f&y?o:null;const e={children:null,ctx:f,deps:null,equals:Tt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function wr(t){const n=hn(t);return n.equals=mt,n}function It(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?ot(e):I(e)}}}function dn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function Ot(t){var n,r=u;Z(dn(t));try{It(t),n=Ut(t)}finally{Z(r)}return n}function kt(t){var n=Ot(t),r=(D||t.f&O)&&t.deps!==null?j:d;A(t,r),t.equals(n)||(t.v=n,t.wv=Bt())}function ot(t){It(t),Y(t,0),A(t,P),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Nt(t){u===null&&o===null&&en(),o!==null&&o.f&O&&rn(),it&&nn()}function En(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function F(t,n,r,e=!0){var l=(t&W)!==0,s=u,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|x,first:null,fn:n,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,wv:0};if(r){var i=N;try{ht(!0),Q(a),a.f|=Jt}catch(c){throw I(a),c}finally{ht(i)}}else n!==null&&tt(a);var _=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&wt)===0;if(!_&&!l&&e&&(s!==null&&En(a,s),o!==null&&o.f&y)){var p=o;(p.children??(p.children=[])).push(a)}return a}function Tr(t){const n=F(H,null,!1);return A(n,d),n.teardown=t,n}function mr(t){Nt();var n=u!==null&&(u.f&m)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=Ct(t);return e}}function Ar(t){return Nt(),yn(t)}function gr(t){const n=F(W,t,!0);return(r={})=>new Promise(e=>{r.outro?mn(n,()=>{I(n),e(void 0)}):(I(n),e(void 0))})}function Ct(t){return F(Et,t,!1)}function yn(t){return F(H,t,!0)}function xr(t){return wn(t)}function wn(t,n=0){return F(H|at|n,t,!0)}function Rr(t,n=!0){return F(H|m,t,!0,n)}function bt(t){var n=t.teardown;if(n!==null){const r=it,e=o;dt(!0),K(null);try{n.call(null)}finally{dt(r),K(e)}}}function Pt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)ot(n[r])}}function Ft(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;I(r,n),r=e}}function Tn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&m||I(n),n=r}}function I(t,n=!0){var r=!1;if((n||t.f&Qt)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:k(e);e.remove(),e=s}r=!0}Ft(t,n&&!r),Pt(t),Y(t,0),A(t,P);var a=t.transitions;if(a!==null)for(const _ of a)_.stop();bt(t);var i=t.parent;i!==null&&i.first!==null&&qt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function qt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function mn(t,n){var r=[];Lt(t,r,!0),An(r,()=>{I(t),n&&n()})}function An(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Lt(t,n,r){if(!(t.f&b)){if(t.f^=b,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&yt)!==0||(e.f&m)!==0;Lt(e,n,s?r:!1),e=l}}}function Dr(t){Mt(t,!0)}function Mt(t,n){if(t.f&b){B(t)&&Q(t),t.f^=b;for(var r=t.first;r!==null;){var e=r.next,l=(r.f&yt)!==0||(r.f&m)!==0;Mt(r,l?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}let $=!1,lt=[];function Yt(){$=!1;const t=lt.slice();lt=[],Xt(t)}function Sr(t){$||($=!0,queueMicrotask(Yt)),lt.push(t)}function gn(){$&&Yt()}const Ht=0,xn=1;let U=!1,V=Ht,L=!1,M=null,N=!1,it=!1;function ht(t){N=t}function dt(t){it=t}let R=[],C=0;let o=null;function K(t){o=t}let u=null;function Z(t){u=t}let T=null;function Rn(t){T=t}let h=null,E=0,g=null;function Dn(t){g=t}let jt=1,z=0,D=!1,f=null;function Bt(){return++jt}function ft(){return!X||f!==null&&f.l===null}function B(t){var p;var n=t.f;if(n&x)return!0;if(n&j){var r=t.deps,e=(n&O)!==0;if(r!==null){var l,s,a=(n&G)!==0,i=e&&u!==null&&!D,_=r.length;if(a||i){for(l=0;l<_;l++)s=r[l],(a||!((p=s==null?void 0:s.reactions)!=null&&p.includes(t)))&&(s.reactions??(s.reactions=[])).push(t);a&&(t.f^=G)}for(l=0;l<_;l++)if(s=r[l],B(s)&&kt(s),s.wv>t.wv)return!0}(!e||u!==null&&!D)&&A(t,d)}return!1}function Sn(t,n){for(var r=n;r!==null;){if(r.f&nt)try{r.fn(t);return}catch{r.f^=nt}r=r.parent}throw U=!1,t}function In(t){return(t.f&P)===0&&(t.parent===null||(t.parent.f&nt)===0)}function J(t,n,r,e){if(U){if(r===null&&(U=!1),In(n))throw t;return}r!==null&&(U=!0);{Sn(t,n);return}}function Ut(t){var _t;var n=h,r=E,e=g,l=o,s=D,a=T,i=f,_=t.f;h=null,E=0,g=null,o=_&(m|W)?null:t,D=!N&&(_&O)!==0,T=null,f=t.ctx,z++;try{var p=(0,t.fn)(),c=t.deps;if(h!==null){var v;if(Y(t,E),c!==null&&E>0)for(c.length=E+h.length,v=0;v<h.length;v++)c[E+v]=h[v];else t.deps=c=h;if(!D)for(v=E;v<c.length;v++)((_t=c[v]).reactions??(_t.reactions=[])).push(t)}else c!==null&&E<c.length&&(Y(t,E),c.length=E);return l!==null&&z++,p}finally{h=n,E=r,g=e,o=l,D=s,T=a,f=i}}function On(t,n){let r=n.reactions;if(r!==null){var e=Zt.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&y&&(h===null||!h.includes(n))&&(A(n,j),n.f&(O|G)||(n.f^=G),Y(n,0))}function Y(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)On(t,r[e])}function Q(t){var n=t.f;if(!(n&P)){A(t,d);var r=u,e=f;u=t;try{n&at?Tn(t):Ft(t),Pt(t),bt(t);var l=Ut(t);t.teardown=typeof l=="function"?l:null,t.wv=jt;var s=t.deps,a}catch(i){J(i,t,r,e||t.ctx)}finally{u=r}}}function Vt(){if(C>1e3){C=0;try{ln()}catch(t){if(M!==null)J(t,M,null);else throw t}}C++}function Gt(t){var n=t.length;if(n!==0){Vt();var r=N;N=!0;try{for(var e=0;e<n;e++){var l=t[e];l.f&d||(l.f^=d);var s=[];$t(l,s),kn(s)}}finally{N=r}}}function kn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(P|b)))try{B(e)&&(Q(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?qt(e):e.fn=null))}catch(l){J(l,e,null,e.ctx)}}}function Nn(){if(L=!1,C>1001)return;const t=R;R=[],Gt(t),L||(C=0,M=null)}function tt(t){V===Ht&&(L||(L=!0,queueMicrotask(Nn))),M=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(W|m)){if(!(r&d))return;n.f^=d}}R.push(n)}function $t(t,n){var r=t.first,e=[];t:for(;r!==null;){var l=r.f,s=(l&m)!==0,a=s&&(l&d)!==0,i=r.next;if(!a&&!(l&b))if(l&H){if(s)r.f^=d;else try{B(r)&&Q(r)}catch(v){J(v,r,null,r.ctx)}var _=r.first;if(_!==null){r=_;continue}}else l&Et&&e.push(r);if(i===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var p=v.next;if(p!==null){r=p;continue t}v=v.parent}}r=i}for(var c=0;c<e.length;c++)_=e[c],n.push(_),$t(_,n)}function Kt(t){var n=V,r=R;try{Vt();const l=[];V=xn,R=l,L=!1,Gt(r);var e=t==null?void 0:t();return gn(),(R.length>0||l.length>0)&&Kt(),C=0,M=null,e}finally{V=n,R=r}}async function Ir(){await Promise.resolve(),Kt()}function Cn(t){var c;var n=t.f,r=(n&y)!==0;if(r&&n&P){var e=Ot(t);return ot(t),e}if(o!==null){T!==null&&T.includes(t)&&sn();var l=o.deps;t.rv<z&&(t.rv=z,h===null&&l!==null&&l[E]===t?E++:h===null?h=[t]:h.push(t),g!==null&&u!==null&&u.f&d&&!(u.f&m)&&g.includes(t)&&(A(u,x),tt(u)))}else if(r&&t.deps===null)for(var s=t,a=s.parent,i=s;a!==null;)if(a.f&y){var _=a;i=_,a=_.parent}else{var p=a;(c=p.deriveds)!=null&&c.includes(i)||(p.deriveds??(p.deriveds=[])).push(i);break}return r&&(s=t,B(s)&&kt(s)),t.v}function Or(t){const n=o;try{return o=null,t()}finally{o=n}}const bn=~(x|j|d);function A(t,n){t.f=t.f&bn|n}function kr(t,n=1){var r=Cn(t),e=n===1?r++:r--;return cn(t,r),e}function Nr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},X&&!n&&(f.l={s:null,u:null,r1:[],r2:ut(!1)})}function Cr(t){const n=f;if(n!==null){t!==void 0&&(n.x=t);const a=n.e;if(a!==null){var r=u,e=o;n.e=null;try{for(var l=0;l<a.length;l++){var s=a[l];Z(s.effect),K(s.reaction),Ct(s.fn)}}finally{Z(r),K(e)}}f=n.p,n.m=!0}return t||{}}function br(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(vt in t)st(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&vt in r&&st(r)}}}function st(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{st(t[e],n)}catch{}const r=Wt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=zt(r);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}export{rr as $,Qt as A,un as B,k as C,et as D,yt as E,zn as F,X as G,on as H,Ln as I,Mn as J,ut as K,Vn as L,Kn as M,cn as N,ct as O,Zn as P,Pn as Q,$n as R,vt as S,Bn as T,ar as U,nr as V,mt as W,m as X,W as Y,Qn as Z,tr as _,Rr as a,Un as a0,wr as a1,er as a2,_n as a3,kr as a4,Yn as a5,Hn as a6,Tr as a7,Nr as a8,dr as a9,vn as aA,Lt as aB,An as aC,I as aD,Xn as aE,Wn as aF,Jn as aG,tn as aH,xr as aa,Cr as ab,hr as ac,_r as ad,Er as ae,qn as af,pr as ag,At as ah,fn as ai,Rt as aj,Gn as ak,yr as al,Fn as am,gr as an,lr as ao,sr as ap,Ct as aq,yn as ar,Sr as as,Kt as at,Ir as au,ur as av,cr as aw,pn as ax,or as ay,b as az,wn as b,fr as c,w as d,ir as e,Dr as f,K as g,S as h,Wt as i,Z as j,zt as k,o as l,u as m,mr as n,f as o,mn as p,Or as q,vr as r,q as s,jn as t,Ar as u,Xt as v,Cn as w,br as x,hn as y,rt as z};
