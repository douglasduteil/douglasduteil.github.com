import{T as ce}from"../chunks/D9ebm0um.js";import{a as S,t as C,n as ee,c as G}from"../chunks/BZa-WXVS.js";import"../chunks/CZs92u6-.js";import{F as de,b as he,h as F,s as L,c as me,K as ge,q as H,H as pe,r as j,e as Y,d as D,aj as _e,aA as B,f as te,a as ae,p as ye,an as re,m as V,aB as be,aC as we,am as Se,aD as ke,aE as Te,a5 as ne,W as Ae,l as xe,n as Ee,Q as K,aF as Me,aG as Ie,aH as Ce,J as Fe,t as Pe,T as ze,aa as z,ab as M,ae as w,af as _,ag as A,ad as J,ac as ie}from"../chunks/B6Lm0ONh.js";import{s as le}from"../chunks/C-bFC117.js";import{s as I}from"../chunks/DPNyiErU.js";import{i as se}from"../chunks/VEJomi24.js";import{l as N,p as oe,s as O}from"../chunks/DZp-aQjw.js";import{i as R}from"../chunks/fb5ZHOpG.js";import{S as Je,G as De}from"../chunks/BQsLOUf2.js";function Q(r,e){return e}function Re(r,e,t,a){for(var u=[],l=e.length,i=0;i<l;i++)we(e[i].e,u,!0);var s=l>0&&u.length===0&&t!==null;if(s){var d=t.parentNode;Se(d),d.append(t),a.clear(),E(r,e[0].prev,e[l-1].next)}ke(u,()=>{for(var f=0;f<l;f++){var m=e[f];s||(a.delete(m.k),E(r,m.prev,m.next)),Te(m.e,!s)}})}function X(r,e,t,a,u,l=null){var i=r,s={flags:e,items:new Map,first:null};{var d=r;i=F?L(ge(d)):d.appendChild(de())}F&&me();var f=null,m=!1,n=ne(()=>{var o=t();return Ae(o)?o:o==null?[]:re(o)});he(()=>{var o=H(n),v=o.length;if(m&&v===0)return;m=v===0;let c=!1;if(F){var p=i.data===pe;p!==(v===0)&&(i=j(),L(i),Y(!1),c=!0)}if(F){for(var k=null,g,h=0;h<v;h++){if(D.nodeType===8&&D.data===_e){i=D,c=!0,Y(!1);break}var y=o[h],P=a(y,h);g=ve(D,s,k,null,y,P,h,u,e),s.items.set(P,g),k=g}v>0&&L(j())}if(!F){var x=xe;He(o,s,i,u,e,(x.f&B)!==0,a)}l!==null&&(v===0?f?te(f):f=ae(()=>l(i)):f!==null&&ye(f,()=>{f=null})),c&&Y(!0),H(n)}),F&&(i=D)}function He(r,e,t,a,u,l,i,s){var d=r.length,f=e.items,m=e.first,n=m,o,v=null,c=[],p=[],k,g,h,y;for(y=0;y<d;y+=1){if(k=r[y],g=i(k,y),h=f.get(g),h===void 0){var P=n?n.e.nodes_start:t;v=ve(P,e,v,v===null?e.first:v.next,k,g,y,a,u),f.set(g,v),c=[],p=[],n=v.next;continue}if(Ge(h,k,y),h.e.f&B&&te(h.e),h!==n){if(o!==void 0&&o.has(h)){if(c.length<p.length){var x=p[0],b;v=x.prev;var W=c[0],U=c[c.length-1];for(b=0;b<c.length;b+=1)Z(c[b],x,t);for(b=0;b<p.length;b+=1)o.delete(p[b]);E(e,W.prev,U.next),E(e,v,W),E(e,U,x),n=x,v=U,y-=1,c=[],p=[]}else o.delete(h),Z(h,n,t),E(e,h.prev,h.next),E(e,h,v===null?e.first:v.next),E(e,v,h),v=h;continue}for(c=[],p=[];n!==null&&n.k!==g;)(l||!(n.e.f&B))&&(o??(o=new Set)).add(n),p.push(n),n=n.next;if(n===null)continue;h=n}c.push(h),v=h,n=h.next}if(n!==null||o!==void 0){for(var q=o===void 0?[]:re(o);n!==null;)(l||!(n.e.f&B))&&q.push(n),n=n.next;var ue=q.length;if(ue>0){var fe=d===0?t:null;Re(e,q,fe,f)}}V.first=e.first&&e.first.e,V.last=v&&v.e}function Ge(r,e,t,a){be(r.v,e),r.i=t}function ve(r,e,t,a,u,l,i,s,d,f){var m=(d&Ie)!==0,n=(d&Ce)===0,o=m?n?Ee(u):K(u):u,v=d&Me?K(i):i,c={i:v,v:o,k:l,a:null,e:null,prev:t,next:a};try{return c.e=ae(()=>s(r,o,v),F),c.e.prev=t&&t.e,c.e.next=a&&a.e,t===null?e.first=c:(t.next=c,t.e.next=c.e),a!==null&&(a.prev=c,a.e.prev=c.e),c}finally{}}function Z(r,e,t){for(var a=r.next?r.next.e.nodes_start:t,u=e?e.e.nodes_start:t,l=r.e.nodes_start;l!==a;){var i=Fe(l);u.before(l),l=i}}function E(r,e,t){e===null?r.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function T(r,e,t){var a=ze(r,e);a&&a.set&&(r[e]=t,Pe(()=>{r[e]=null}))}const Oe=()=>({title:"Achievements",backgroundColor:"#4F8C86",watermark:ce}),ht=Object.freeze(Object.defineProperty({__proto__:null,load:Oe},Symbol.toStringTag,{value:"Module"}));var Be=C('<i><!></i> <div aria-label="event card"><h3></h3> <p></p></div>',1);function $(r,e){const t=N(e,["children","$$slots","$$events","$$legacy"]);z(e,!1);const{type:a,title:u,body:l}=t;var i=Be(),s=M(i);I(s,"aria-label",`${a??""} event`);var d=w(s);Je(d),_(s);var f=A(s,2),m=w(f);m.textContent=u;var n=A(m,2);return n.textContent=l,_(f),S(r,i),T(e,"type",a),T(e,"title",u),T(e,"body",l),J({type:a,title:u,body:l})}var Ne=ee('<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 36 28"><path d="M27.719 13.062l0.281 4.937c0.125 2.203-4.484 4-10 4s-10.125-1.797-10-4l0.281-4.937 8.969 2.828c0.25 0.078 0.5 0.109 0.75 0.109s0.5-0.031 0.75-0.109zM36 8c0 0.219-0.141 0.406-0.344 0.484l-17.5 5.5c-0.063 0.016-0.109 0.016-0.156 0.016s-0.094 0-0.156-0.016l-10.187-3.219c-0.891 0.703-1.516 2.422-1.641 4.531 0.594 0.344 0.984 0.969 0.984 1.703 0 0.703-0.359 1.313-0.906 1.672l0.906 6.766c0.016 0.141-0.031 0.281-0.125 0.391s-0.234 0.172-0.375 0.172h-3c-0.141 0-0.281-0.063-0.375-0.172s-0.141-0.25-0.125-0.391l0.906-6.766c-0.547-0.359-0.906-0.969-0.906-1.672 0-0.75 0.422-1.391 1.016-1.734 0.094-1.828 0.562-3.797 1.531-5.156l-5.203-1.625c-0.203-0.078-0.344-0.266-0.344-0.484s0.141-0.406 0.344-0.484l17.5-5.5c0.063-0.016 0.109-0.016 0.156-0.016s0.094 0 0.156 0.016l17.5 5.5c0.203 0.078 0.344 0.266 0.344 0.484z"></path></svg>');function Ue(r){var e=Ne();S(r,e)}var qe=C('<i><!></i> <div aria-label="event card"><h3></h3> <p></p></div>',1);function Le(r,e){const t=N(e,["children","$$slots","$$events","$$legacy"]);z(e,!1);const{type:a,title:u,body:l}=t;var i=qe(),s=M(i);I(s,"aria-label",`${a??""} event`);var d=w(s);Ue(d),_(s);var f=A(s,2),m=w(f);m.textContent=u;var n=A(m,2);return n.textContent=l,_(f),S(r,i),T(e,"type",a),T(e,"title",u),T(e,"body",l),J({type:a,title:u,body:l})}var Ye=C('<i><!></i> <div aria-label="event card"><h3></h3> <p></p></div>',1);function We(r,e){const t=N(e,["children","$$slots","$$events","$$legacy"]);z(e,!1);const{type:a,title:u,body:l}=t;var i=Ye(),s=M(i);I(s,"aria-label",`${a??""} event`);var d=w(s);De(d),_(s);var f=A(s,2),m=w(f);m.textContent=u;var n=A(m,2);return n.textContent=l,_(f),S(r,i),T(e,"type",a),T(e,"title",u),T(e,"body",l),J({type:a,title:u,body:l})}var je=ee('<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 30 28"><path d="M9.266 14c-1.625 0.047-3.094 0.75-4.141 2h-2.094c-1.563 0-3.031-0.75-3.031-2.484 0-1.266-0.047-5.516 1.937-5.516 0.328 0 1.953 1.328 4.062 1.328 0.719 0 1.406-0.125 2.078-0.359-0.047 0.344-0.078 0.688-0.078 1.031 0 1.422 0.453 2.828 1.266 4zM26 23.953c0 2.531-1.672 4.047-4.172 4.047h-13.656c-2.5 0-4.172-1.516-4.172-4.047 0-3.531 0.828-8.953 5.406-8.953 0.531 0 2.469 2.172 5.594 2.172s5.063-2.172 5.594-2.172c4.578 0 5.406 5.422 5.406 8.953zM10 4c0 2.203-1.797 4-4 4s-4-1.797-4-4 1.797-4 4-4 4 1.797 4 4zM21 10c0 3.313-2.688 6-6 6s-6-2.688-6-6 2.688-6 6-6 6 2.688 6 6zM30 13.516c0 1.734-1.469 2.484-3.031 2.484h-2.094c-1.047-1.25-2.516-1.953-4.141-2 0.812-1.172 1.266-2.578 1.266-4 0-0.344-0.031-0.688-0.078-1.031 0.672 0.234 1.359 0.359 2.078 0.359 2.109 0 3.734-1.328 4.062-1.328 1.984 0 1.937 4.25 1.937 5.516zM28 4c0 2.203-1.797 4-4 4s-4-1.797-4-4 1.797-4 4-4 4 1.797 4 4z"></path></svg>');function Ve(r){var e=je();S(r,e)}var Ke=C('<p><a rel="noreferrer" target="_blank"> </a></p>'),Qe=C('<i><!></i> <div aria-label="event card"><h3></h3> <p><em></em></p> <!></div>',1);function Xe(r,e){const t=N(e,["children","$$slots","$$events","$$legacy"]);z(e,!1);const{type:a,title:u,body:l,link:i}=t;var s=Qe(),d=M(s);I(d,"aria-label",`${a??""} event`);var f=w(d);Ve(f),_(d);var m=A(d,2),n=w(m);n.textContent=u;var o=A(n,2),v=w(o);v.textContent=l,_(o);var c=A(o,2);{var p=k=>{var g=Ke(),h=w(g),y=w(h,!0);_(h),_(g),ie(()=>{I(h,"href",i.href),le(y,i.name)}),S(k,g)};R(c,k=>{i&&k(p)})}return _(m),S(r,s),T(e,"type",a),T(e,"title",u),T(e,"body",l),T(e,"link",i),J({type:a,title:u,body:l,link:i})}function Ze(r,e){z(e,!1);let t=oe(e,"event",8);se();var a=G(),u=M(a);{var l=s=>{We(s,O(t))},i=s=>{var d=G(),f=M(d);{var m=o=>{$(o,O(t))},n=o=>{var v=G(),c=M(v);{var p=g=>{Le(g,O(t))},k=g=>{var h=G(),y=M(h);{var P=b=>{Xe(b,O(t))},x=b=>{$(b,{get title(){return`INFO(o_0): '${t().type??""}' event here ?`},get body(){return`[TODO(@douglasduteil): add a '${t().type??""}' event.type]`}})};R(y,b=>{t().type==="talk"?b(P):b(x,!1)},!0)}S(g,h)};R(c,g=>{t().type==="study"?g(p):g(k,!1)},!0)}S(o,v)};R(f,o=>{t().type==="job"?o(m):o(n,!1)},!0)}S(s,d)};R(u,s=>{t().type==="github"?s(l):s(i,!1)})}S(r,a),J()}var $e=C('<li aria-label="event" class="svelte-ir01w"><!></li>'),et=C('<li><time class="svelte-ir01w"> </time> <ul aria-label="events" class="svelte-ir01w"></ul></li>'),tt=C('<ul aria-label="timeline" class="svelte-ir01w"></ul>');function at(r,e){z(e,!1);let t=oe(e,"eventsPerYear",8);se();var a=tt();X(a,5,t,Q,(u,l)=>{let i=()=>H(l)[0],s=()=>H(l)[1];var d=et(),f=w(d),m=w(f,!0);_(f);var n=A(f,2);X(n,5,s,Q,(o,v)=>{var c=$e(),p=w(c);Ze(p,{get event(){return H(v)}}),_(c),S(o,c)}),_(n),_(d),ie((o,v)=>{I(d,"aria-labelledby",o),I(f,"datetime",v),I(f,"id",o),le(m,i())},[()=>String(i()),()=>new Date(i(),0,1).toDateString()],ne),S(u,d)}),_(a),S(r,a),J()}const rt=[[2022,[{type:"github",body:"A open source organisation that buld widgets and directives for AngularJS",title:"Leave Angular UI"}]],[2021,[{type:"job",body:"Digital Services Incubator of the French government",title:"Leave the Fabrique numérique des Ministères"}]],[2018,[{type:"job",body:"Digital Services Incubator of the French government",title:"Join the Fabrique numérique des Ministères Sociaux as Lead Dev",link:{href:"https://github.com/SocialGouv",name:"@SocialGouv"}},{type:"job",body:"Software development company",title:"Leave SFEIR Paris"},{type:"talk",where:"Talk at the Bouffe Front",title:"How to build a cow ?",link:{href:"https://twitter.com/olegskl/status/1045011688557355009",name:"Bouffe Front @SFEIR"}}]],[2015,[{type:"job",body:"https://github.com/onedoes",title:"Co-founded OneDoes"}]],[2014,[{type:"talk",where:"Talk at the ngParis meetup",title:"Waaa Again !?",link:{href:"https://www.meetup.com/AngularJS-Paris/events/192808622/",name:"Meetup AngularJS #13 @SFEIR"}},{type:"talk",where:"Talk at the ngParis meetup",title:"Input[Range] over 9000",link:{href:"https://www.meetup.com/AngularJS-Paris/events/185603592/",name:"Meetup AngularJS #12 @BeMyAppFr"}},{type:"talk",where:"Talk at the ngParis meetup",title:"We need to make UI.Utils util again !",link:{href:"https://www.meetup.com/AngularJS-Paris/events/165733502/",name:"Meetup AngularJS #8 @SFEIR"}}]],[2013,[{type:"talk",where:"Talk at the ngParis meetup",title:"WaaaAnimation",link:{href:"https://www.meetup.com/AngularJS-Paris/events/147070122/",name:"Meetup #5 @Deezer"}},{type:"job",body:"Software development company",title:"Join SFEIR Paris"},{type:"study",body:"Master's degree in Computer Science and Human Sciences",title:"Graduated from the University of Paris 8"},{type:"github",body:"A open source organisation that buld widgets and directives for AngularJS",title:"Join Angular UI"}]]];function mt(r){at(r,{eventsPerYear:rt})}export{mt as component,ht as universal};
