var qn=Array.isArray,Xt=Array.prototype.indexOf,Ln=Array.from,Mn=Object.defineProperty,vt=Object.getOwnPropertyDescriptor,Jt=Object.getOwnPropertyDescriptors,Yn=Object.prototype,jn=Array.prototype,Qt=Object.getPrototypeOf;function Hn(t){return typeof t=="function"}const Bn=()=>{};function Un(t){return t()}function tn(t){for(var n=0;n<t.length;n++)t[n]()}const w=2,wt=4,H=8,ot=16,D=32,B=64,$=128,E=256,K=512,h=1024,k=2048,q=4096,F=8192,Q=16384,nn=32768,Tt=65536,Vn=1<<17,rn=1<<19,mt=1<<20,pt=Symbol("$state"),Gn=Symbol("legacy props"),$n=Symbol("");function gt(t){return t===this.v}function en(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function At(t){return!en(t,this.v)}function ln(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function an(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function sn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function un(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Kn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Zn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function zn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Wn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function on(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function fn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let tt=!1;function Xn(){tt=!0}const Jn=1,Qn=2,tr=16,nr=1,rr=2,er=4,lr=8,ar=16,sr=1,ur=2,_n="[",cn="[!",vn="]",xt={},or=Symbol();function Rt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let c=null;function ht(t){c=t}function fr(t,n=!1,r){c={p:c,c:null,e:null,m:!1,s:t,x:null,l:null},tt&&!n&&(c.l={s:null,u:null,r1:[],r2:ft(!1)})}function ir(t){const n=c;if(n!==null){t!==void 0&&(n.x=t);const s=n.e;if(s!==null){var r=f,e=u;n.e=null;try{for(var l=0;l<s.length;l++){var a=s[l];W(a.effect),z(a.reaction),Pt(a.fn)}}finally{W(r),z(e)}}c=n.p,n.m=!0}return t||{}}function nt(){return!tt||c!==null&&c.l===null}function ft(t,n){var r={f:0,v:t,reactions:null,equals:gt,rv:0,wv:0};return r}function _r(t){return Dt(ft(t))}function pn(t,n=!1){var e;const r=ft(t);return n||(r.equals=At),tt&&c!==null&&c.l!==null&&((e=c.l).s??(e.s=[])).push(r),r}function cr(t,n=!1){return Dt(pn(t,n))}function Dt(t){return u!==null&&!R&&u.f&w&&(m===null?kn([t]):m.push(t)),t}function hn(t,n){return u!==null&&!R&&nt()&&u.f&(w|ot)&&(m===null||!m.includes(t))&&fn(),dn(t,n)}function dn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Ut(),St(t,k),nt()&&f!==null&&f.f&h&&!(f.f&(D|B))&&(x===null?In([t]):x.push(t))),n}function vr(t,n=1){var r=Wt(t),e=n===1?r++:r--;return hn(t,r),e}function St(t,n){var r=t.reactions;if(r!==null)for(var e=nt(),l=r.length,a=0;a<l;a++){var s=r[a],i=s.f;i&k||!e&&s===f||(g(s,n),i&(h|E)&&(i&w?St(s,q):et(s)))}}let O=!1;function pr(t){O=t}let T;function M(t){if(t===null)throw Rt(),xt;return T=t}function hr(){return M(C(T))}function dr(t){if(O){if(C(T)!==null)throw Rt(),xt;T=t}}function Er(t=1){if(O){for(var n=t,r=T;n--;)r=C(r);T=r}}function yr(){for(var t=0,n=T;;){if(n.nodeType===8){var r=n.data;if(r===vn){if(t===0)return n;t-=1}else(r===_n||r===cn)&&(t+=1)}var e=C(n);n.remove(),n=e}}var dt,En,kt,It;function wr(){if(dt===void 0){dt=window,En=document;var t=Element.prototype,n=Node.prototype;kt=vt(n,"firstChild").get,It=vt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function lt(t=""){return document.createTextNode(t)}function at(t){return kt.call(t)}function C(t){return It.call(t)}function Tr(t,n){if(!O)return at(t);var r=at(T);if(r===null)r=T.appendChild(lt());else if(n&&r.nodeType!==3){var e=lt();return r==null||r.before(e),M(e),e}return M(r),r}function mr(t,n){if(!O){var r=at(t);return r instanceof Comment&&r.data===""?C(r):r}return T}function gr(t,n=1,r=!1){let e=O?T:t;for(var l;n--;)l=e,e=C(e);if(!O)return e;var a=e==null?void 0:e.nodeType;if(r&&a!==3){var s=lt();return e===null?l==null||l.after(s):e.before(s),M(s),s}return M(e),e}function Ar(t){t.textContent=""}function Ot(t){var n=w|k,r=u!==null&&u.f&w?u:null;return f===null||r!==null&&r.f&E?n|=E:f.f|=mt,{ctx:c,deps:null,effects:null,equals:gt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??f}}function xr(t){const n=Ot(t);return n.equals=At,n}function Nt(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)N(n[r])}}function yn(t){for(var n=t.parent;n!==null;){if(!(n.f&w))return n;n=n.parent}return null}function wn(t){var n,r=f;W(yn(t));try{Nt(t),n=Gt(t)}finally{W(r)}return n}function Ct(t){var n=wn(t),r=(S||t.f&E)&&t.deps!==null?q:h;g(t,r),t.equals(n)||(t.v=n,t.wv=Ut())}function bt(t){f===null&&u===null&&sn(),u!==null&&u.f&E&&f===null&&an(),it&&ln()}function Tn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function L(t,n,r,e=!0){var l=(t&B)!==0,a=f,s={ctx:c,deps:null,nodes_start:null,nodes_end:null,f:t|k,first:null,fn:n,last:null,next:null,parent:l?null:a,prev:null,teardown:null,transitions:null,wv:0};if(r){var i=b;try{Et(!0),_t(s),s.f|=nn}catch(A){throw N(s),A}finally{Et(i)}}else n!==null&&et(s);var y=r&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(mt|$))===0;if(!y&&!l&&e&&(a!==null&&Tn(s,a),u!==null&&u.f&w)){var _=u;(_.effects??(_.effects=[])).push(s)}return s}function Rr(t){const n=L(H,null,!1);return g(n,h),n.teardown=t,n}function Dr(t){bt();var n=f!==null&&(f.f&D)!==0&&c!==null&&!c.m;if(n){var r=c;(r.e??(r.e=[])).push({fn:t,effect:f,reaction:u})}else{var e=Pt(t);return e}}function Sr(t){return bt(),mn(t)}function kr(t){const n=L(B,t,!0);return(r={})=>new Promise(e=>{r.outro?xn(n,()=>{N(n),e(void 0)}):(N(n),e(void 0))})}function Pt(t){return L(wt,t,!1)}function mn(t){return L(H,t,!0)}function Ir(t,n=[],r=Ot){const e=n.map(r);return gn(()=>t(...e.map(Wt)))}function gn(t,n=0){return L(H|ot|n,t,!0)}function Or(t,n=!0){return L(H|D,t,!0,n)}function Ft(t){var n=t.teardown;if(n!==null){const r=it,e=u;yt(!0),z(null);try{n.call(null)}finally{yt(r),z(e)}}}function qt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;N(r,n),r=e}}function An(t){for(var n=t.first;n!==null;){var r=n.next;n.f&D||N(n),n=r}}function N(t,n=!0){var r=!1;if((n||t.f&rn)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var a=e===l?null:C(e);e.remove(),e=a}r=!0}qt(t,n&&!r),J(t,0),g(t,Q);var s=t.transitions;if(s!==null)for(const y of s)y.stop();Ft(t);var i=t.parent;i!==null&&i.first!==null&&Lt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Lt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function xn(t,n){var r=[];Mt(t,r,!0),Rn(r,()=>{N(t),n&&n()})}function Rn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Mt(t,n,r){if(!(t.f&F)){if(t.f^=F,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&n.push(s);for(var e=t.first;e!==null;){var l=e.next,a=(e.f&Tt)!==0||(e.f&D)!==0;Mt(e,n,a?r:!1),e=l}}}function Nr(t){Yt(t,!0)}function Yt(t,n){if(t.f&F){t.f^=F,t.f&h||(t.f^=h),U(t)&&(g(t,k),et(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&Tt)!==0||(r.f&D)!==0;Yt(r,l?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}let Z=!1,st=[];function jt(){Z=!1;const t=st.slice();st=[],tn(t)}function Cr(t){Z||(Z=!0,queueMicrotask(jt)),st.push(t)}function Dn(){Z&&jt()}const Ht=0,Sn=1;let V=!1,G=Ht,Y=!1,j=null,b=!1,it=!1;function Et(t){b=t}function yt(t){it=t}let I=[],P=0;let u=null,R=!1;function z(t){u=t}let f=null;function W(t){f=t}let m=null;function kn(t){m=t}let p=null,d=0,x=null;function In(t){x=t}let Bt=1,X=0,S=!1;function Ut(){return++Bt}function U(t){var v;var n=t.f;if(n&k)return!0;if(n&q){var r=t.deps,e=(n&E)!==0;if(r!==null){var l,a,s=(n&K)!==0,i=e&&f!==null&&!S,y=r.length;if(s||i){var _=t,A=_.parent;for(l=0;l<y;l++)a=r[l],(s||!((v=a==null?void 0:a.reactions)!=null&&v.includes(_)))&&(a.reactions??(a.reactions=[])).push(_);s&&(_.f^=K),i&&A!==null&&!(A.f&E)&&(_.f^=E)}for(l=0;l<y;l++)if(a=r[l],U(a)&&Ct(a),a.wv>t.wv)return!0}(!e||f!==null&&!S)&&g(t,h)}return!1}function On(t,n){for(var r=n;r!==null;){if(r.f&$)try{r.fn(t);return}catch{r.f^=$}r=r.parent}throw V=!1,t}function Nn(t){return(t.f&Q)===0&&(t.parent===null||(t.parent.f&$)===0)}function rt(t,n,r,e){if(V){if(r===null&&(V=!1),Nn(n))throw t;return}r!==null&&(V=!0);{On(t,n);return}}function Vt(t,n,r=0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];a.f&w?Vt(a,n,r+1):n===a&&(r===0?g(a,k):a.f&h&&g(a,q),et(a))}}function Gt(t){var ct;var n=p,r=d,e=x,l=u,a=S,s=m,i=c,y=R,_=t.f;p=null,d=0,x=null,u=_&(D|B)?null:t,S=(_&E)!==0&&(!b||l===null||y),m=null,ht(t.ctx),R=!1,X++;try{var A=(0,t.fn)(),v=t.deps;if(p!==null){var o;if(J(t,d),v!==null&&d>0)for(v.length=d+p.length,o=0;o<p.length;o++)v[d+o]=p[o];else t.deps=v=p;if(!S)for(o=d;o<v.length;o++)((ct=v[o]).reactions??(ct.reactions=[])).push(t)}else v!==null&&d<v.length&&(J(t,d),v.length=d);if(nt()&&x!==null&&!(t.f&(w|q|k)))for(o=0;o<x.length;o++)Vt(x[o],t);return l!==null&&X++,A}finally{p=n,d=r,x=e,u=l,S=a,m=s,ht(i),R=y}}function Cn(t,n){let r=n.reactions;if(r!==null){var e=Xt.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&w&&(p===null||!p.includes(n))&&(g(n,q),n.f&(E|K)||(n.f^=K),Nt(n),J(n,0))}function J(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Cn(t,r[e])}function _t(t){var n=t.f;if(!(n&Q)){g(t,h);var r=f,e=c;f=t;try{n&ot?An(t):qt(t),Ft(t);var l=Gt(t);t.teardown=typeof l=="function"?l:null,t.wv=Bt;var a=t.deps,s}catch(i){rt(i,t,r,e||t.ctx)}finally{f=r}}}function $t(){if(P>1e3){P=0;try{un()}catch(t){if(j!==null)rt(t,j,null);else throw t}}P++}function Kt(t){var n=t.length;if(n!==0){$t();var r=b;b=!0;try{for(var e=0;e<n;e++){var l=t[e];l.f&h||(l.f^=h);var a=[];Zt(l,a),bn(a)}}finally{b=r}}}function bn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(Q|F)))try{U(e)&&(_t(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Lt(e):e.fn=null))}catch(l){rt(l,e,null,e.ctx)}}}function Pn(){if(Y=!1,P>1001)return;const t=I;I=[],Kt(t),Y||(P=0,j=null)}function et(t){G===Ht&&(Y||(Y=!0,queueMicrotask(Pn))),j=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(B|D)){if(!(r&h))return;n.f^=h}}I.push(n)}function Zt(t,n){var r=t.first,e=[];t:for(;r!==null;){var l=r.f,a=(l&D)!==0,s=a&&(l&h)!==0,i=r.next;if(!s&&!(l&F))if(l&H){if(a)r.f^=h;else{var y=u;try{u=r,U(r)&&_t(r)}catch(o){rt(o,r,null,r.ctx)}finally{u=y}}var _=r.first;if(_!==null){r=_;continue}}else l&wt&&e.push(r);if(i===null){let o=r.parent;for(;o!==null;){if(t===o)break t;var A=o.next;if(A!==null){r=A;continue t}o=o.parent}}r=i}for(var v=0;v<e.length;v++)_=e[v],n.push(_),Zt(_,n)}function zt(t){var n=G,r=I;try{$t();const l=[];G=Sn,I=l,Y=!1,Kt(r);var e=t==null?void 0:t();return Dn(),(I.length>0||l.length>0)&&zt(),P=0,j=null,e}finally{G=n,I=r}}async function br(){await Promise.resolve(),zt()}function Wt(t){var n=t.f,r=(n&w)!==0;if(u!==null&&!R){m!==null&&m.includes(t)&&on();var e=u.deps;t.rv<X&&(t.rv=X,p===null&&e!==null&&e[d]===t?d++:p===null?p=[t]:(!S||!p.includes(t))&&p.push(t))}else if(r&&t.deps===null&&t.effects===null){var l=t,a=l.parent;a!==null&&!(a.f&E)&&(l.f^=E)}return r&&(l=t,U(l)&&Ct(l)),t.v}function Pr(t){var n=R;try{return R=!0,t()}finally{R=n}}const Fn=-7169;function g(t,n){t.f=t.f&Fn|n}function Fr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(pt in t)ut(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&pt in r&&ut(r)}}}function ut(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{ut(t[e],n)}catch{}const r=Qt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Jt(r);for(let l in e){const a=e[l].get;if(a)try{a.call(t)}catch{}}}}}export{At as $,Pr as A,Un as B,Fr as C,Ot as D,Tt as E,lt as F,rn as G,cn as H,_n as I,C as J,at as K,$n as L,Xn as M,tt as N,Yn as O,jn as P,ft as Q,Wn as R,pt as S,vt as T,or as U,zn as V,qn as W,Zn as X,Vn as Y,xr as Z,er as _,hr as a,lr as a0,Gn as a1,rr as a2,nr as a3,ar as a4,vr as a5,Hn as a6,en as a7,fr as a8,mr as a9,Qn as aA,Mt as aB,Rn as aC,N as aD,Jn as aE,tr as aF,Ir as aa,ir as ab,Tr as ac,dr as ad,gr as ae,wr as af,xt as ag,vn as ah,Rt as ai,Kn as aj,Ar as ak,Ln as al,kr as am,sr as an,ur as ao,Pt as ap,mn as aq,Cr as ar,zt as as,_r as at,br as au,Er as av,En as aw,cr as ax,F as ay,dn as az,gn as b,Or as c,T as d,pr as e,Nr as f,z as g,O as h,W as i,u as j,f as k,Qt as l,Jt as m,Mn as n,Bn as o,xn as p,pn as q,yr as r,M as s,Rr as t,Wt as u,hn as v,c as w,Sr as x,Dr as y,tn as z};
