var C=Object.defineProperty;var T=(e,t,n)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var p=(e,t,n)=>T(e,typeof t!="symbol"?t+"":t,n);import{r as h,n as y,h as b,i as j,j as A,k as B,l as N,m as D,p as H,q as v,v as I,w as L,x as P}from"./scheduler.CKLdxKqA.js";let $=!1;function q(){$=!0}function M(){$=!1}function O(e,t,n,i){for(;e<t;){const r=e+(t-e>>1);n(r)<=i?e=r+1:t=r}return e}function R(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const s=[];for(let l=0;l<t.length;l++){const o=t[l];o.claim_order!==void 0&&s.push(o)}t=s}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let r=0;for(let s=0;s<t.length;s++){const l=t[s].claim_order,o=(r>0&&t[n[r]].claim_order<=l?r+1:O(1,r,d=>t[n[d]].claim_order,l))-1;i[s]=n[o]+1;const u=o+1;n[u]=s,r=Math.max(u,r)}const c=[],a=[];let f=t.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(c.push(t[s-1]);f>=s;f--)a.push(t[f]);f--}for(;f>=0;f--)a.push(t[f]);c.reverse(),a.sort((s,l)=>s.claim_order-l.claim_order);for(let s=0,l=0;s<a.length;s++){for(;l<c.length&&a[s].claim_order>=c[l].claim_order;)l++;const o=l<c.length?c[l]:null;e.insertBefore(a[s],o)}}function z(e,t){if($){for(R(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function ne(e,t,n){$&&!n?z(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function U(e){e.parentNode&&e.parentNode.removeChild(e)}function ie(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function V(e){return document.createElement(e)}function W(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function x(e){return document.createTextNode(e)}function re(){return x(" ")}function se(){return x("")}function F(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function le(e,t,n){const i=t.toLowerCase();i in e?e[i]=typeof e[i]=="boolean"&&n===""?!0:n:t in e?e[t]=typeof e[t]=="boolean"&&n===""?!0:n:F(e,t,n)}function ae(e){return e.dataset.svelteH}function G(e){return Array.from(e.childNodes)}function J(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function E(e,t,n,i,r=!1){J(e);const c=(()=>{for(let a=e.claim_info.last_index;a<e.length;a++){const f=e[a];if(t(f)){const s=n(f);return s===void 0?e.splice(a,1):e[a]=s,r||(e.claim_info.last_index=a),f}}for(let a=e.claim_info.last_index-1;a>=0;a--){const f=e[a];if(t(f)){const s=n(f);return s===void 0?e.splice(a,1):e[a]=s,r?s===void 0&&e.claim_info.last_index--:e.claim_info.last_index=a,f}}return i()})();return c.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,c}function S(e,t,n,i){return E(e,r=>r.nodeName===t,r=>{const c=[];for(let a=0;a<r.attributes.length;a++){const f=r.attributes[a];n[f.name]||c.push(f.name)}c.forEach(a=>r.removeAttribute(a))},()=>i(t))}function ce(e,t,n){return S(e,t,n,V)}function fe(e,t,n){return S(e,t,n,W)}function K(e,t){return E(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>x(t),!0)}function ue(e){return K(e," ")}function oe(e,t){t=""+t,e.data!==t&&(e.data=t)}function _e(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,"")}function de(e,t,n){e.classList.toggle(t,!!n)}function me(e,t){const n=[];let i=0;for(const r of t.childNodes)if(r.nodeType===8){const c=r.textContent.trim();c===`HEAD_${e}_END`?(i-=1,n.push(r)):c===`HEAD_${e}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function he(e,t){return new e(t)}const m=new Set;let _;function $e(){_={r:0,c:[],p:_}}function pe(){_.r||h(_.c),_=_.p}function Q(e,t){e&&e.i&&(m.delete(e),e.i(t))}function ye(e,t,n,i){if(e&&e.o){if(m.has(e))return;m.add(e),_.c.push(()=>{m.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function xe(e){e&&e.c()}function ge(e,t){e&&e.l(t)}function X(e,t,n){const{fragment:i,after_update:r}=e.$$;i&&i.m(t,n),N(()=>{const c=e.$$.on_mount.map(I).filter(A);e.$$.on_destroy?e.$$.on_destroy.push(...c):h(c),e.$$.on_mount=[]}),r.forEach(N)}function Y(e,t){const n=e.$$;n.fragment!==null&&(D(n.after_update),h(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Z(e,t){e.$$.dirty[0]===-1&&(L.push(e),P(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function we(e,t,n,i,r,c,a=null,f=[-1]){const s=H;v(e);const l=e.$$={fragment:null,ctx:[],props:c,update:y,not_equal:r,bound:b(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:b(),dirty:f,skip_bound:!1,root:t.target||s.$$.root};a&&a(l.root);let o=!1;if(l.ctx=n?n(e,t.props||{},(u,d,...g)=>{const w=g.length?g[0]:d;return l.ctx&&r(l.ctx[u],l.ctx[u]=w)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](w),o&&Z(e,u)),d}):[],l.update(),o=!0,h(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){q();const u=G(t.target);l.fragment&&l.fragment.l(u),u.forEach(U)}else l.fragment&&l.fragment.c();t.intro&&Q(e.$$.fragment),X(e,t.target,t.anchor),M(),j()}v(s)}class be{constructor(){p(this,"$$");p(this,"$$set")}$destroy(){Y(this,1),this.$destroy=y}$on(t,n){if(!A(n))return y;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!B(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const k="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(k);export{ae as A,de as B,me as C,le as D,ie as E,be as S,G as a,K as b,ce as c,U as d,V as e,ue as f,ne as g,z as h,we as i,oe as j,W as k,fe as l,F as m,he as n,xe as o,ge as p,X as q,ye as r,re as s,x as t,pe as u,Q as v,Y as w,$e as x,se as y,_e as z};
