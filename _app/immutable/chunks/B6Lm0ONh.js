var Ln=Array.isArray,Qt=Array.prototype.indexOf,Mn=Array.from,Yn=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,tn=Object.getOwnPropertyDescriptors,Hn=Object.prototype,jn=Array.prototype,nn=Object.getPrototypeOf;function Bn(t){return typeof t=="function"}const Un=()=>{};function Vn(t){return t()}function rn(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,wt=4,U=8,ot=16,x=32,V=64,Z=128,N=256,z=512,p=1024,D=2048,q=4096,F=8192,L=16384,en=32768,Tt=65536,Gn=1<<17,ln=1<<19,mt=1<<20,ht=Symbol("$state"),$n=Symbol("legacy props"),Kn=Symbol("");function gt(t){return t===this.v}function sn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function At(t){return!sn(t,this.v)}function an(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function un(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function on(t){throw new Error("https://svelte.dev/e/effect_orphan")}function fn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Zn(){throw new Error("https://svelte.dev/e/hydration_failed")}function zn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Wn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Xn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function _n(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function cn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let tt=!1;function Jn(){tt=!0}const Qn=1,tr=2,nr=16,rr=1,er=2,lr=4,sr=8,ar=16,ur=1,or=2,vn="[",pn="[!",hn="]",xt={},ir=Symbol();function it(t,n){var r={f:0,v:t,reactions:null,equals:gt,rv:0,wv:0};return r}function fr(t){return Rt(it(t))}function dn(t,n=!1){var e;const r=it(t);return n||(r.equals=At),tt&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function _r(t,n=!1){return Rt(dn(t,n))}function Rt(t){return u!==null&&u.f&y&&(g===null?In([t]):g.push(t)),t}function En(t,n){return u!==null&&!R&&nt()&&u.f&(y|ot)&&(g===null||!g.includes(t))&&cn(),yn(t,n)}function yn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Gt(),Dt(t,D),nt()&&i!==null&&i.f&p&&!(i.f&(x|V))&&(A===null?On([t]):A.push(t))),n}function Dt(t,n){var r=t.reactions;if(r!==null)for(var e=nt(),l=r.length,s=0;s<l;s++){var a=r[s],o=a.f;o&D||!e&&a===i||(T(a,n),o&(p|N)&&(o&y?Dt(a,q):et(a)))}}function St(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let I=!1;function cr(t){I=t}let w;function Y(t){if(t===null)throw St(),xt;return w=t}function vr(){return Y(C(w))}function pr(t){if(I){if(C(w)!==null)throw St(),xt;w=t}}function hr(t=1){if(I){for(var n=t,r=w;n--;)r=C(r);w=r}}function dr(){for(var t=0,n=w;;){if(n.nodeType===8){var r=n.data;if(r===hn){if(t===0)return n;t-=1}else(r===vn||r===pn)&&(t+=1)}var e=C(n);n.remove(),n=e}}var dt,wn,kt,It;function Er(){if(dt===void 0){dt=window,wn=document;var t=Element.prototype,n=Node.prototype;kt=pt(n,"firstChild").get,It=pt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function lt(t=""){return document.createTextNode(t)}function st(t){return kt.call(t)}function C(t){return It.call(t)}function yr(t,n){if(!I)return st(t);var r=st(w);if(r===null)r=w.appendChild(lt());else if(n&&r.nodeType!==3){var e=lt();return r==null||r.before(e),Y(e),e}return Y(r),r}function wr(t,n){if(!I){var r=st(t);return r instanceof Comment&&r.data===""?C(r):r}return w}function Tr(t,n=1,r=!1){let e=I?w:t;for(var l;n--;)l=e,e=C(e);if(!I)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var a=lt();return e===null?l==null||l.after(a):e.before(a),Y(a),a}return Y(e),e}function mr(t){t.textContent=""}function Ot(t){var n=y|D;i===null?n|=N:i.f|=mt;var r=u!==null&&u.f&y?u:null;const e={children:null,ctx:f,deps:null,equals:gt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??i};return r!==null&&(r.children??(r.children=[])).push(e),e}function gr(t){const n=Ot(t);return n.equals=At,n}function Nt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?ft(e):O(e)}}}function Tn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function Ct(t){var n,r=i;J(Tn(t));try{Nt(t),n=Kt(t)}finally{J(r)}return n}function bt(t){var n=Ct(t),r=(k||t.f&N)&&t.deps!==null?q:p;T(t,r),t.equals(n)||(t.v=n,t.wv=Gt())}function ft(t){Nt(t),B(t,0),T(t,L),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Pt(t){i===null&&u===null&&on(),u!==null&&u.f&N&&un(),_t&&an()}function mn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function M(t,n,r,e=!0){var l=(t&V)!==0,s=i,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|D,first:null,fn:n,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,wv:0};if(r){var o=b;try{Et(!0),ct(a),a.f|=en}catch(m){throw O(a),m}finally{Et(o)}}else n!==null&&et(a);var _=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(mt|Z))===0;if(!_&&!l&&e&&(s!==null&&mn(a,s),u!==null&&u.f&y)){var c=u;(c.children??(c.children=[])).push(a)}return a}function Ar(t){const n=M(U,null,!1);return T(n,p),n.teardown=t,n}function xr(t){Pt();var n=i!==null&&(i.f&x)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:i,reaction:u})}else{var e=Ft(t);return e}}function Rr(t){return Pt(),gn(t)}function Dr(t){const n=M(V,t,!0);return(r={})=>new Promise(e=>{r.outro?Rn(n,()=>{O(n),e(void 0)}):(O(n),e(void 0))})}function Ft(t){return M(wt,t,!1)}function gn(t){return M(U,t,!0)}function Sr(t,n=[],r=Ot){const e=n.map(r);return An(()=>t(...e.map(Jt)))}function An(t,n=0){return M(U|ot|n,t,!0)}function kr(t,n=!0){return M(U|x,t,!0,n)}function qt(t){var n=t.teardown;if(n!==null){const r=_t,e=u;yt(!0),X(null);try{n.call(null)}finally{yt(r),X(e)}}}function Lt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)ft(n[r])}}function Mt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;O(r,n),r=e}}function xn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&x||O(n),n=r}}function O(t,n=!0){var r=!1;if((n||t.f&ln)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:C(e);e.remove(),e=s}r=!0}Mt(t,n&&!r),Lt(t),B(t,0),T(t,L);var a=t.transitions;if(a!==null)for(const _ of a)_.stop();qt(t);var o=t.parent;o!==null&&o.first!==null&&Yt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Yt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Rn(t,n){var r=[];Ht(t,r,!0),Dn(r,()=>{O(t),n&&n()})}function Dn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Ht(t,n,r){if(!(t.f&F)){if(t.f^=F,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&Tt)!==0||(e.f&x)!==0;Ht(e,n,s?r:!1),e=l}}}function Ir(t){jt(t,!0)}function jt(t,n){if(t.f&F){t.f^=F,t.f&p||(t.f^=p),G(t)&&(T(t,D),et(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&Tt)!==0||(r.f&x)!==0;jt(r,l?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}let W=!1,at=[];function Bt(){W=!1;const t=at.slice();at=[],rn(t)}function Or(t){W||(W=!0,queueMicrotask(Bt)),at.push(t)}function Sn(){W&&Bt()}const Ut=0,kn=1;let $=!1,K=Ut,H=!1,j=null,b=!1,_t=!1;function Et(t){b=t}function yt(t){_t=t}let S=[],P=0;let u=null,R=!1;function X(t){u=t}let i=null;function J(t){i=t}let g=null;function In(t){g=t}let h=null,E=0,A=null;function On(t){A=t}let Vt=1,Q=0,k=!1,f=null;function Gt(){return++Vt}function nt(){return!tt||f!==null&&f.l===null}function G(t){var c;var n=t.f;if(n&D)return!0;if(n&q){var r=t.deps,e=(n&N)!==0;if(r!==null){var l,s,a=(n&z)!==0,o=e&&i!==null&&!k,_=r.length;if(a||o){for(l=0;l<_;l++)s=r[l],(a||!((c=s==null?void 0:s.reactions)!=null&&c.includes(t)))&&(s.reactions??(s.reactions=[])).push(t);a&&(t.f^=z)}for(l=0;l<_;l++)if(s=r[l],G(s)&&bt(s),s.wv>t.wv)return!0}(!e||i!==null&&!k)&&T(t,p)}return!1}function Nn(t,n){for(var r=n;r!==null;){if(r.f&Z)try{r.fn(t);return}catch{r.f^=Z}r=r.parent}throw $=!1,t}function Cn(t){return(t.f&L)===0&&(t.parent===null||(t.parent.f&Z)===0)}function rt(t,n,r,e){if($){if(r===null&&($=!1),Cn(n))throw t;return}r!==null&&($=!0);{Nn(t,n);return}}function $t(t,n,r=0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var s=e[l];s.f&y?$t(s,n,r+1):n===s&&(r===0?T(s,D):s.f&p&&T(s,q),et(s))}}function Kt(t){var vt;var n=h,r=E,e=A,l=u,s=k,a=g,o=f,_=R,c=t.f;h=null,E=0,A=null,u=c&(x|V)?null:t,k=!b&&(c&N)!==0,g=null,f=t.ctx,R=!1,Q++;try{var m=(0,t.fn)(),v=t.deps;if(h!==null){var d;if(B(t,E),v!==null&&E>0)for(v.length=E+h.length,d=0;d<h.length;d++)v[E+d]=h[d];else t.deps=v=h;if(!k)for(d=E;d<v.length;d++)((vt=v[d]).reactions??(vt.reactions=[])).push(t)}else v!==null&&E<v.length&&(B(t,E),v.length=E);if(nt()&&A!==null&&!(t.f&(y|q|D)))for(d=0;d<A.length;d++)$t(A[d],t);return l!==null&&Q++,m}finally{h=n,E=r,A=e,u=l,k=s,g=a,f=o,R=_}}function bn(t,n){let r=n.reactions;if(r!==null){var e=Qt.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&y&&(h===null||!h.includes(n))&&(T(n,q),n.f&(N|z)||(n.f^=z),B(n,0))}function B(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)bn(t,r[e])}function ct(t){var n=t.f;if(!(n&L)){T(t,p);var r=i,e=f;i=t;try{n&ot?xn(t):Mt(t),Lt(t),qt(t);var l=Kt(t);t.teardown=typeof l=="function"?l:null,t.wv=Vt;var s=t.deps,a}catch(o){rt(o,t,r,e||t.ctx)}finally{i=r}}}function Zt(){if(P>1e3){P=0;try{fn()}catch(t){if(j!==null)rt(t,j,null);else throw t}}P++}function zt(t){var n=t.length;if(n!==0){Zt();var r=b;b=!0;try{for(var e=0;e<n;e++){var l=t[e];l.f&p||(l.f^=p);var s=[];Wt(l,s),Pn(s)}}finally{b=r}}}function Pn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(L|F)))try{G(e)&&(ct(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Yt(e):e.fn=null))}catch(l){rt(l,e,null,e.ctx)}}}function Fn(){if(H=!1,P>1001)return;const t=S;S=[],zt(t),H||(P=0,j=null)}function et(t){K===Ut&&(H||(H=!0,queueMicrotask(Fn))),j=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(V|x)){if(!(r&p))return;n.f^=p}}S.push(n)}function Wt(t,n){var r=t.first,e=[];t:for(;r!==null;){var l=r.f,s=(l&x)!==0,a=s&&(l&p)!==0,o=r.next;if(!a&&!(l&F))if(l&U){if(s)r.f^=p;else try{G(r)&&ct(r)}catch(v){rt(v,r,null,r.ctx)}var _=r.first;if(_!==null){r=_;continue}}else l&wt&&e.push(r);if(o===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var c=v.next;if(c!==null){r=c;continue t}v=v.parent}}r=o}for(var m=0;m<e.length;m++)_=e[m],n.push(_),Wt(_,n)}function Xt(t){var n=K,r=S;try{Zt();const l=[];K=kn,S=l,H=!1,zt(r);var e=t==null?void 0:t();return Sn(),(S.length>0||l.length>0)&&Xt(),P=0,j=null,e}finally{K=n,S=r}}async function Nr(){await Promise.resolve(),Xt()}function Jt(t){var m;var n=t.f,r=(n&y)!==0;if(r&&n&L){var e=Ct(t);return ft(t),e}if(u!==null&&!R){g!==null&&g.includes(t)&&_n();var l=u.deps;t.rv<Q&&(t.rv=Q,h===null&&l!==null&&l[E]===t?E++:h===null?h=[t]:h.push(t))}else if(r&&t.deps===null)for(var s=t,a=s.parent,o=s;a!==null;)if(a.f&y){var _=a;o=_,a=_.parent}else{var c=a;(m=c.deriveds)!=null&&m.includes(o)||(c.deriveds??(c.deriveds=[])).push(o);break}return r&&(s=t,G(s)&&bt(s)),t.v}function Cr(t){var n=R;try{return R=!0,t()}finally{R=n}}const qn=-7169;function T(t,n){t.f=t.f&qn|n}function br(t,n=1){var r=Jt(t),e=n===1?r++:r--;return En(t,r),e}function Pr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},tt&&!n&&(f.l={s:null,u:null,r1:[],r2:it(!1)})}function Fr(t){const n=f;if(n!==null){t!==void 0&&(n.x=t);const a=n.e;if(a!==null){var r=i,e=u;n.e=null;try{for(var l=0;l<a.length;l++){var s=a[l];J(s.effect),X(s.reaction),Ft(s.fn)}}finally{J(r),X(e)}}f=n.p,n.m=!0}return t||{}}function qr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ht in t)ut(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ht in r&&ut(r)}}}function ut(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{ut(t[e],n)}catch{}const r=nn(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=tn(r);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}export{x as $,Vn as A,rn as B,qr as C,Ot as D,Tt as E,lt as F,ln as G,pn as H,vn as I,C as J,st as K,Kn as L,Jn as M,tt as N,Hn as O,jn as P,it as Q,Wn as R,ht as S,pt as T,ir as U,Xn as V,Ln as W,zn as X,Gn as Y,lr as Z,At as _,kr as a,V as a0,rr as a1,er as a2,sr as a3,$n as a4,gr as a5,ar as a6,br as a7,Bn as a8,sn as a9,F as aA,yn as aB,Ht as aC,Dn as aD,O as aE,tr as aF,Qn as aG,nr as aH,Pr as aa,wr as ab,Sr as ac,Fr as ad,yr as ae,pr as af,Tr as ag,Er as ah,xt as ai,hn as aj,St as ak,Zn as al,mr as am,Mn as an,Dr as ao,ur as ap,or as aq,Ft as ar,gn as as,Or as at,Xt as au,Nr as av,fr as aw,hr as ax,wn as ay,_r as az,An as b,vr as c,w as d,cr as e,Ir as f,X as g,I as h,nn as i,J as j,tn as k,u as l,i as m,dn as n,Un as o,Rn as p,Jt as q,dr as r,Y as s,Ar as t,En as u,Yn as v,Rr as w,xr as x,f as y,Cr as z};
