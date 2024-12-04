var Nt=Array.isArray,Ct=Array.from,bt=Object.defineProperty,cn=Object.getOwnPropertyDescriptor,Zn=Object.getOwnPropertyDescriptors,Ft=Object.prototype,Pt=Array.prototype,zn=Object.getPrototypeOf;function qt(n){return typeof n=="function"}const Lt=()=>{};function Mt(n){return n()}function Wn(n){for(var t=0;t<n.length;t++)n[t]()}const y=2,En=4,H=8,sn=16,m=32,z=64,nn=128,D=256,G=512,h=1024,x=2048,j=4096,C=8192,b=16384,Xn=32768,yn=65536,Yt=1<<17,Jn=1<<19,wn=1<<20,vn=Symbol("$state"),Ht=Symbol("legacy props"),jt=Symbol("");function Tn(n){return n===this.v}function Qn(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function mn(n){return!Qn(n,this.v)}function nt(n){throw new Error("effect_in_teardown")}function tt(){throw new Error("effect_in_unowned_derived")}function rt(n){throw new Error("effect_orphan")}function et(){throw new Error("effect_update_depth_exceeded")}function Bt(){throw new Error("hydration_failed")}function Ut(n){throw new Error("props_invalid_value")}function Vt(){throw new Error("state_descriptors_fixed")}function Gt(){throw new Error("state_prototype_fixed")}function lt(){throw new Error("state_unsafe_local_read")}function st(){throw new Error("state_unsafe_mutation")}let W=!1;function $t(){W=!0}function an(n){return{f:0,v:n,reactions:null,equals:Tn,version:0}}function Kt(n){return An(an(n))}function at(n,t=!1){var e;const r=an(n);return t||(r.equals=mn),W&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function Zt(n,t=!1){return An(at(n,t))}function An(n){return o!==null&&o.f&y&&(T===null?At([n]):T.push(n)),n}function ut(n,t){return o!==null&&fn()&&o.f&(y|sn)&&(T===null||!T.includes(n))&&st(),ot(n,t)}function ot(n,t){return n.equals(t)||(n.v=t,n.version=Bn(),gn(n,x),fn()&&u!==null&&u.f&h&&!(u.f&m)&&(v!==null&&v.includes(n)?(A(u,x),Q(u)):g===null?gt([n]):g.push(n))),t}function gn(n,t){var r=n.reactions;if(r!==null)for(var e=fn(),l=r.length,s=0;s<l;s++){var a=r[s],i=a.f;i&x||!e&&a===u||(A(a,t),i&(h|D)&&(i&y?gn(a,j):Q(a)))}}function xn(n){console.warn("hydration_mismatch")}const zt=1,Wt=2,Xt=16,Jt=1,Qt=2,nr=4,tr=8,rr=16,er=1,lr=2,it="[",ft="[!",_t="]",Rn={},sr=Symbol();let S=!1;function ar(n){S=n}let w;function q(n){if(n===null)throw xn(),Rn;return w=n}function ur(){return q(O(w))}function or(n){if(S){if(O(w)!==null)throw xn(),Rn;w=n}}function ir(n=1){if(S){for(var t=n,r=w;t--;)r=O(r);w=r}}function fr(){for(var n=0,t=w;;){if(t.nodeType===8){var r=t.data;if(r===_t){if(n===0)return t;n-=1}else(r===it||r===ft)&&(n+=1)}var e=O(t);t.remove(),t=e}}var pn,ct,Sn,Dn;function _r(){if(pn===void 0){pn=window,ct=document;var n=Element.prototype,t=Node.prototype;Sn=cn(t,"firstChild").get,Dn=cn(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function tn(n=""){return document.createTextNode(n)}function rn(n){return Sn.call(n)}function O(n){return Dn.call(n)}function cr(n,t){if(!S)return rn(n);var r=rn(w);if(r===null)r=w.appendChild(tn());else if(t&&r.nodeType!==3){var e=tn();return r==null||r.before(e),q(e),e}return q(r),r}function vr(n,t){if(!S){var r=rn(n);return r instanceof Comment&&r.data===""?O(r):r}return w}function pr(n,t=1,r=!1){let e=S?w:n;for(var l;t--;)l=e,e=O(e);if(!S)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var a=tn();return e===null?l==null||l.after(a):e.before(a),q(a),a}return q(e),e}function hr(n){n.textContent=""}function vt(n){var t=y|x;u===null?t|=D:u.f|=wn;var r=o!==null&&o.f&y?o:null;const e={children:null,ctx:f,deps:null,equals:Tn,f:t,fn:n,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function dr(n){const t=vt(n);return t.equals=mn,t}function On(n){var t=n.children;if(t!==null){n.children=null;for(var r=0;r<t.length;r+=1){var e=t[r];e.f&y?un(e):P(e)}}}function pt(n){for(var t=n.parent;t!==null;){if(!(t.f&y))return t;t=t.parent}return null}function In(n){var t,r=u;Z(pt(n));try{On(n),t=Un(n)}finally{Z(r)}return t}function kn(n){var t=In(n),r=(I||n.f&D)&&n.deps!==null?j:h;A(n,r),n.equals(t)||(n.v=t,n.version=Bn())}function un(n){On(n),Y(n,0),A(n,b),n.v=n.children=n.deps=n.ctx=n.reactions=null}function Nn(n){u===null&&o===null&&rt(),o!==null&&o.f&D&&tt(),on&&nt()}function ht(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function F(n,t,r,e=!0){var l=(n&z)!==0,s=u,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|x,first:null,fn:t,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,version:0};if(r){var i=k;try{hn(!0),J(a),a.f|=Xn}catch(_){throw P(a),_}finally{hn(i)}}else t!==null&&Q(a);var p=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&wn)===0;if(!p&&!l&&e&&(s!==null&&ht(a,s),o!==null&&o.f&y)){var d=o;(d.children??(d.children=[])).push(a)}return a}function Er(n){const t=F(H,null,!1);return A(t,h),t.teardown=n,t}function yr(n){Nn();var t=u!==null&&(u.f&m)!==0&&f!==null&&!f.m;if(t){var r=f;(r.e??(r.e=[])).push({fn:n,effect:u,reaction:o})}else{var e=Cn(n);return e}}function wr(n){return Nn(),dt(n)}function Tr(n){const t=F(z,n,!0);return()=>{P(t)}}function Cn(n){return F(En,n,!1)}function dt(n){return F(H,n,!0)}function mr(n){return Et(n)}function Et(n,t=0){return F(H|sn|t,n,!0)}function Ar(n,t=!0){return F(H|m,n,!0,t)}function bn(n){var t=n.teardown;if(t!==null){const r=on,e=o;dn(!0),K(null);try{t.call(null)}finally{dn(r),K(e)}}}function Fn(n){var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)un(t[r])}}function Pn(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;P(r,t),r=e}}function yt(n){for(var t=n.first;t!==null;){var r=t.next;t.f&m||P(t),t=r}}function P(n,t=!0){var r=!1;if((t||n.f&Jn)&&n.nodes_start!==null){for(var e=n.nodes_start,l=n.nodes_end;e!==null;){var s=e===l?null:O(e);e.remove(),e=s}r=!0}Pn(n,t&&!r),Fn(n),Y(n,0),A(n,b);var a=n.transitions;if(a!==null)for(const p of a)p.stop();bn(n);var i=n.parent;i!==null&&i.first!==null&&qn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=null}function qn(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function gr(n,t){var r=[];Ln(n,r,!0),wt(r,()=>{P(n),t&&t()})}function wt(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var l of n)l.out(e)}else t()}function Ln(n,t,r){if(!(n.f&C)){if(n.f^=C,n.transitions!==null)for(const a of n.transitions)(a.is_global||r)&&t.push(a);for(var e=n.first;e!==null;){var l=e.next,s=(e.f&yn)!==0||(e.f&m)!==0;Ln(e,t,s?r:!1),e=l}}}function xr(n){Mn(n,!0)}function Mn(n,t){if(n.f&C){B(n)&&J(n),n.f^=C;for(var r=n.first;r!==null;){var e=r.next,l=(r.f&yn)!==0||(r.f&m)!==0;Mn(r,l?t:!1),r=e}if(n.transitions!==null)for(const s of n.transitions)(s.is_global||t)&&s.in()}}let $=!1,en=[];function Yn(){$=!1;const n=en.slice();en=[],Wn(n)}function Rr(n){$||($=!0,queueMicrotask(Yn)),en.push(n)}function Tt(){$&&Yn()}const Hn=0,mt=1;let U=!1,V=Hn,L=!1,M=null,k=!1,on=!1;function hn(n){k=n}function dn(n){on=n}let R=[],N=0;let o=null;function K(n){o=n}let u=null;function Z(n){u=n}let T=null;function At(n){T=n}let v=null,E=0,g=null;function gt(n){g=n}let jn=0,I=!1,f=null;function Bn(){return++jn}function fn(){return!W||f!==null&&f.l===null}function B(n){var a,i;var t=n.f;if(t&x)return!0;if(t&j){var r=n.deps,e=(t&D)!==0;if(r!==null){var l;if(t&G){for(l=0;l<r.length;l++)((a=r[l]).reactions??(a.reactions=[])).push(n);n.f^=G}for(l=0;l<r.length;l++){var s=r[l];if(B(s)&&kn(s),e&&u!==null&&!I&&!((i=s==null?void 0:s.reactions)!=null&&i.includes(n))&&(s.reactions??(s.reactions=[])).push(n),s.version>n.version)return!0}}e||A(n,h)}return!1}function xt(n,t){for(var r=t;r!==null;){if(r.f&nn)try{r.fn(n);return}catch{r.f^=nn}r=r.parent}throw U=!1,n}function Rt(n){return(n.f&b)===0&&(n.parent===null||(n.parent.f&nn)===0)}function X(n,t,r,e){if(U){if(r===null&&(U=!1),Rt(t))throw n;return}r!==null&&(U=!0);{xt(n,t);return}}function Un(n){var _n;var t=v,r=E,e=g,l=o,s=I,a=T,i=f,p=n.f;v=null,E=0,g=null,o=p&(m|z)?null:n,I=!k&&(p&D)!==0,T=null,f=n.ctx;try{var d=(0,n.fn)(),_=n.deps;if(v!==null){var c;if(Y(n,E),_!==null&&E>0)for(_.length=E+v.length,c=0;c<v.length;c++)_[E+c]=v[c];else n.deps=_=v;if(!I)for(c=E;c<_.length;c++)((_n=_[c]).reactions??(_n.reactions=[])).push(n)}else _!==null&&E<_.length&&(Y(n,E),_.length=E);return d}finally{v=t,E=r,g=e,o=l,I=s,T=a,f=i}}function St(n,t){let r=t.reactions;if(r!==null){var e=r.indexOf(n);if(e!==-1){var l=r.length-1;l===0?r=t.reactions=null:(r[e]=r[l],r.pop())}}r===null&&t.f&y&&(v===null||!v.includes(t))&&(A(t,j),t.f&(D|G)||(t.f^=G),Y(t,0))}function Y(n,t){var r=n.deps;if(r!==null)for(var e=t;e<r.length;e++)St(n,r[e])}function J(n){var t=n.f;if(!(t&b)){A(n,h);var r=u,e=f;u=n;try{t&sn?yt(n):Pn(n),Fn(n),bn(n);var l=Un(n);n.teardown=typeof l=="function"?l:null,n.version=jn}catch(s){X(s,n,r,e||n.ctx)}finally{u=r}}}function Vn(){if(N>1e3){N=0;try{et()}catch(n){if(M!==null)X(n,M,null);else throw n}}N++}function Gn(n){var t=n.length;if(t!==0){Vn();var r=k;k=!0;try{for(var e=0;e<t;e++){var l=n[e];l.f&h||(l.f^=h);var s=[];$n(l,s),Dt(s)}}finally{k=r}}}function Dt(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];if(!(e.f&(b|C)))try{B(e)&&(J(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?qn(e):e.fn=null))}catch(l){X(l,e,null,e.ctx)}}}function Ot(){if(L=!1,N>1001)return;const n=R;R=[],Gn(n),L||(N=0,M=null)}function Q(n){V===Hn&&(L||(L=!0,queueMicrotask(Ot))),M=n;for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&(z|m)){if(!(r&h))return;t.f^=h}}R.push(t)}function $n(n,t){var r=n.first,e=[];n:for(;r!==null;){var l=r.f,s=(l&m)!==0,a=s&&(l&h)!==0,i=r.next;if(!a&&!(l&C))if(l&H){if(s)r.f^=h;else try{B(r)&&J(r)}catch(c){X(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else l&En&&e.push(r);if(i===null){let c=r.parent;for(;c!==null;){if(n===c)break n;var d=c.next;if(d!==null){r=d;continue n}c=c.parent}}r=i}for(var _=0;_<e.length;_++)p=e[_],t.push(p),$n(p,t)}function Kn(n){var t=V,r=R;try{Vn();const l=[];V=mt,R=l,L=!1,Gn(r);var e=n==null?void 0:n();return Tt(),(R.length>0||l.length>0)&&Kn(),N=0,M=null,e}finally{V=t,R=r}}async function Sr(){await Promise.resolve(),Kn()}function It(n){var _;var t=n.f,r=(t&y)!==0;if(r&&t&b){var e=In(n);return un(n),e}if(o!==null){T!==null&&T.includes(n)&&lt();var l=o.deps;v===null&&l!==null&&l[E]===n?E++:v===null?v=[n]:v.push(n),g!==null&&u!==null&&u.f&h&&!(u.f&m)&&g.includes(n)&&(A(u,x),Q(u))}else if(r&&n.deps===null)for(var s=n,a=s.parent,i=s;a!==null;)if(a.f&y){var p=a;i=p,a=p.parent}else{var d=a;(_=d.deriveds)!=null&&_.includes(i)||(d.deriveds??(d.deriveds=[])).push(i);break}return r&&(s=n,B(s)&&kn(s)),n.v}function Dr(n){const t=o;try{return o=null,n()}finally{o=t}}const kt=~(x|j|h);function A(n,t){n.f=n.f&kt|t}function Or(n,t=1){var r=It(n),e=t===1?r++:r--;return ut(n,r),e}function Ir(n,t=!1,r){f={p:f,c:null,e:null,m:!1,s:n,x:null,l:null},W&&!t&&(f.l={s:null,u:null,r1:[],r2:an(!1)})}function kr(n){const t=f;if(t!==null){n!==void 0&&(t.x=n);const a=t.e;if(a!==null){var r=u,e=o;t.e=null;try{for(var l=0;l<a.length;l++){var s=a[l];Z(s.effect),K(s.reaction),Cn(s.fn)}}finally{Z(r),K(e)}}f=t.p,t.m=!0}return n||{}}function Nr(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(vn in n)ln(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&vn in r&&ln(r)}}}function ln(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let e in n)try{ln(n[e],t)}catch{}const r=zn(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Zn(r);for(let l in e){const s=e[l].get;if(s)try{s.call(n)}catch{}}}}}export{Jt as $,Dr as A,Mt as B,Wn as C,It as D,yn as E,Nr as F,vt as G,ft as H,$t as I,W as J,Ft as K,jt as L,Pt as M,an as N,Vt as O,ut as P,cn as Q,Gt as R,vn as S,Nt as T,sr as U,Ut as V,Yt as W,nr as X,mn as Y,m as Z,z as _,kr as a,Qt as a0,tr as a1,Ht as a2,dr as a3,rr as a4,at as a5,Or as a6,qt as a7,bt as a8,_r as a9,ot as aA,Ln as aB,wt as aC,P as aD,Wt as aE,zt as aF,Xt as aG,Qn as aH,rn as aa,it as ab,O as ac,Rn as ad,_t as ae,xn as af,Bt as ag,hr as ah,Ct as ai,Tr as aj,tn as ak,Jn as al,Lt as am,Er as an,er as ao,lr as ap,Cn as aq,dt as ar,Rr as as,Kn as at,Sr as au,Kt as av,ir as aw,ct as ax,Zt as ay,C as az,Et as b,cr as c,Ar as d,ur as e,vr as f,gr as g,S as h,w as i,fr as j,q as k,ar as l,xr as m,K as n,zn as o,Ir as p,Z as q,or as r,pr as s,mr as t,Zn as u,o as v,u as w,wr as x,yr as y,f as z};
