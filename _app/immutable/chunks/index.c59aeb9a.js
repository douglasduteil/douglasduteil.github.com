function $(){}function z(t,e){for(const n in e)t[n]=e[n];return t}function D(t){return t()}function M(){return Object.create(null)}function g(t){t.forEach(D)}function O(t){return typeof t=="function"}function at(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function F(t){return Object.keys(t).length===0}function R(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ft(t,e,n){t.$$.on_destroy.push(R(e,n))}function dt(t,e,n,i){if(t){const r=q(t,e,n,i);return t[0](r)}}function q(t,e,n,i){return t[1]&&i?z(n.ctx.slice(),t[1](i(e))):n.ctx}function _t(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],c=Math.max(e.dirty.length,r.length);for(let l=0;l<c;l+=1)u[l]=e.dirty[l]|r[l];return u}return e.dirty|r}return e.dirty}function ht(t,e,n,i,r,u){if(r){const c=q(e,n,i,u);t.p(c,r)}}function mt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function pt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function yt(t){return t??""}const G=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in G;let w=!1;function I(){w=!0}function J(){w=!1}function K(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let s=0;s<e.length;s++){const f=e[s];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const s=e[o].claim_order,f=(r>0&&e[n[r]].claim_order<=s?r+1:K(1,r,b=>e[n[b]].claim_order,s))-1;i[o]=n[f]+1;const a=f+1;n[a]=o,r=Math.max(a,r)}const u=[],c=[];let l=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(u.push(e[o-1]);l>=o;l--)c.push(e[l]);l--}for(;l>=0;l--)c.push(e[l]);u.reverse(),c.sort((o,s)=>o.claim_order-s.claim_order);for(let o=0,s=0;o<c.length;o++){for(;s<u.length&&c[o].claim_order>=u[s].claim_order;)s++;const f=s<u.length?u[s]:null;t.insertBefore(c[o],f)}}function U(t,e){if(w){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function gt(t,e,n){w&&!n?U(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function bt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function v(t){return document.createTextNode(t)}function xt(){return v(" ")}function $t(){return v("")}function Z(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function wt(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:Z(t,e,n)}function tt(t){return Array.from(t.childNodes)}function et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function B(t,e,n,i,r=!1){et(t);const u=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const l=t[c];if(e(l)){const o=n(l);return o===void 0?t.splice(c,1):t[c]=o,r||(t.claim_info.last_index=c),l}}for(let c=t.claim_info.last_index-1;c>=0;c--){const l=t[c];if(e(l)){const o=n(l);return o===void 0?t.splice(c,1):t[c]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,l}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function H(t,e,n,i){return B(t,r=>r.nodeName===e,r=>{const u=[];for(let c=0;c<r.attributes.length;c++){const l=r.attributes[c];n[l.name]||u.push(l.name)}u.forEach(c=>r.removeAttribute(c))},()=>i(e))}function Et(t,e,n){return H(t,e,n,X)}function Nt(t,e,n){return H(t,e,n,Y)}function nt(t,e){return B(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>v(e),!0)}function kt(t){return nt(t," ")}function vt(t,e){e=""+e,t.data!==e&&(t.data=e)}function St(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function At(t,e,n){t.classList[n?"add":"remove"](e)}function jt(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const u=r.textContent.trim();u===`HEAD_${t}_END`?(i-=1,n.push(r)):u===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function Mt(t,e){return new t(e)}let y;function p(t){y=t}function S(){if(!y)throw new Error("Function called outside component initialization");return y}function Tt(t){S().$$.on_mount.push(t)}function Ct(t){S().$$.after_update.push(t)}function Dt(t){S().$$.on_destroy.push(t)}const h=[],T=[];let m=[];const C=[],P=Promise.resolve();let N=!1;function L(){N||(N=!0,P.then(W))}function Ot(){return L(),P}function k(t){m.push(t)}const E=new Set;let _=0;function W(){if(_!==0)return;const t=y;do{try{for(;_<h.length;){const e=h[_];_++,p(e),it(e.$$)}}catch(e){throw h.length=0,_=0,e}for(p(null),h.length=0,_=0;T.length;)T.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];E.has(n)||(E.add(n),n())}m.length=0}while(h.length);for(;C.length;)C.pop()();N=!1,E.clear(),p(t)}function it(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}function rt(t){const e=[],n=[];m.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),m=e}const x=new Set;let d;function qt(){d={r:0,c:[],p:d}}function Bt(){d.r||g(d.c),d=d.p}function ot(t,e){t&&t.i&&(x.delete(t),t.i(e))}function Ht(t,e,n,i){if(t&&t.o){if(x.has(t))return;x.add(t),d.c.push(()=>{x.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Pt(t,e){const n={},i={},r={$$scope:1};let u=t.length;for(;u--;){const c=t[u],l=e[u];if(l){for(const o in c)o in l||(i[o]=1);for(const o in l)r[o]||(n[o]=l[o],r[o]=1);t[u]=l}else for(const o in c)r[o]=1}for(const c in i)c in n||(n[c]=void 0);return n}function Lt(t){return typeof t=="object"&&t!==null?t:{}}const ct=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...ct];function Wt(t){t&&t.c()}function zt(t,e){t&&t.l(e)}function lt(t,e,n,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),i||k(()=>{const c=t.$$.on_mount.map(D).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...c):g(c),t.$$.on_mount=[]}),u.forEach(k)}function st(t,e){const n=t.$$;n.fragment!==null&&(rt(n.after_update),g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ut(t,e){t.$$.dirty[0]===-1&&(h.push(t),L(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ft(t,e,n,i,r,u,c,l=[-1]){const o=y;p(t);const s=t.$$={fragment:null,ctx:[],props:u,update:$,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:M(),dirty:l,skip_bound:!1,root:e.target||o.$$.root};c&&c(s.root);let f=!1;if(s.ctx=n?n(t,e.props||{},(a,b,...A)=>{const j=A.length?A[0]:b;return s.ctx&&r(s.ctx[a],s.ctx[a]=j)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](j),f&&ut(t,a)),b}):[],s.update(),f=!0,g(s.before_update),s.fragment=i?i(s.ctx):!1,e.target){if(e.hydrate){I();const a=tt(e.target);s.fragment&&s.fragment.l(a),a.forEach(V)}else s.fragment&&s.fragment.c();e.intro&&ot(t.$$.fragment),lt(t,e.target,e.anchor,e.customElement),J(),W()}p(o)}class Rt{$destroy(){st(this,1),this.$destroy=$}$on(e,n){if(!O(n))return $;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!F(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{lt as A,st as B,Y as C,Nt as D,U as E,$ as F,At as G,ft as H,dt as I,jt as J,ht as K,mt as L,_t as M,yt as N,z as O,pt as P,Pt as Q,Lt as R,Rt as S,bt as T,wt as U,Dt as V,xt as a,gt as b,kt as c,Ht as d,$t as e,Bt as f,ot as g,V as h,Ft as i,Ct as j,X as k,Et as l,tt as m,Z as n,Tt as o,St as p,v as q,nt as r,at as s,Ot as t,vt as u,qt as v,T as w,Mt as x,Wt as y,zt as z};
