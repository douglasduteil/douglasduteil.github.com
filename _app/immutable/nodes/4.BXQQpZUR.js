import{T as fe,s as C}from"../chunks/DMs4EWp7.js";import{t as F,a as b,n as $,c as B}from"../chunks/KZ8sbrdJ.js";import"../chunks/rZYrJpKH.js";import{y as ce,b as de,s as U,h as z,C as he,a as me,i as G,a1 as ee,H as pe,r as V,e as Y,d as D,ah as ge,f as te,c as ae,p as ye,az as q,al as re,Y as W,aA as _e,m as be,V as X,_ as we,aB as Se,aC as ke,ak as Ae,aD as Te,aE as xe,aF as Ee,aG as Me,B as Ie,X as Ce,t as Fe,F as P,G as I,K as _,L as g,M as A,J,I as ne}from"../chunks/NTnnvdEZ.js";import{s as ie}from"../chunks/mSgdOYyb.js";import{i as le}from"../chunks/CHWNIlsl.js";import{l as O,p as se,s as H}from"../chunks/DygWwrzW.js";import{i as R}from"../chunks/DQkbYklU.js";import{S as ze,G as Pe}from"../chunks/TFZQTcWS.js";function j(i,e){return e}function Je(i,e,t,n){for(var o=[],v=e.length,l=0;l<v;l++)ke(e[l].e,o,!0);var s=v>0&&o.length===0&&t!==null;if(s){var c=t.parentNode;Ae(c),c.append(t),n.clear(),M(i,e[0].prev,e[v-1].next)}Te(o,()=>{for(var u=0;u<v;u++){var a=e[u];s||(n.delete(a.k),M(i,a.prev,a.next)),xe(a.e,!s)}})}function K(i,e,t,n,o,v=null){var l=i,s={flags:e,items:new Map,first:null};{var c=i;l=z?U(he(c)):c.appendChild(ce())}z&&me();var u=null,a=!1,m=ee(()=>{var r=t();return we(r)?r:r==null?[]:re(r)});de(()=>{var r=G(m),h=r.length;if(a&&h===0)return;a=h===0;let d=!1;if(z){var S=l.data===pe;S!==(h===0)&&(l=V(),U(l),Y(!1),d=!0)}if(z){for(var y=null,f,p=0;p<h;p++){if(D.nodeType===8&&D.data===ge){l=D,d=!0,Y(!1);break}var E=r[p],T=n(E,p);f=ve(D,s,y,null,E,T,p,o,e,t),s.items.set(T,f),y=f}h>0&&U(V())}z||De(r,s,l,o,e,n,t),v!==null&&(h===0?u?te(u):u=ae(()=>v(l)):u!==null&&ye(u,()=>{u=null})),d&&Y(!0),G(m)}),z&&(l=D)}function De(i,e,t,n,o,v,l){var s=i.length,c=e.items,u=e.first,a=u,m,r=null,h=[],d=[],S,y,f,p;for(p=0;p<s;p+=1){if(S=i[p],y=v(S,p),f=c.get(y),f===void 0){var E=a?a.e.nodes_start:t;r=ve(E,e,r,r===null?e.first:r.next,S,y,p,n,o,l),c.set(y,r),h=[],d=[],a=r.next;continue}if(Re(f,S,p),f.e.f&q&&te(f.e),f!==a){if(m!==void 0&&m.has(f)){if(h.length<d.length){var T=d[0],k;r=T.prev;var x=h[0],L=h[h.length-1];for(k=0;k<h.length;k+=1)Q(h[k],T,t);for(k=0;k<d.length;k+=1)m.delete(d[k]);M(e,x.prev,L.next),M(e,r,x),M(e,L,T),a=T,r=L,p-=1,h=[],d=[]}else m.delete(f),Q(f,a,t),M(e,f.prev,f.next),M(e,f,r===null?e.first:r.next),M(e,r,f),r=f;continue}for(h=[],d=[];a!==null&&a.k!==y;)a.e.f&q||(m??(m=new Set)).add(a),d.push(a),a=a.next;if(a===null)continue;f=a}h.push(f),r=f,a=f.next}if(a!==null||m!==void 0){for(var N=m===void 0?[]:re(m);a!==null;)a.e.f&q||N.push(a),a=a.next;var oe=N.length;if(oe>0){var ue=s===0?t:null;Je(e,N,ue,c)}}W.first=e.first&&e.first.e,W.last=r&&r.e}function Re(i,e,t,n){_e(i.v,e),i.i=t}function ve(i,e,t,n,o,v,l,s,c,u){var a=(c&Ee)!==0,m=(c&Me)===0,r=a?m?be(o):X(o):o,h=c&Se?X(l):l,d={i:h,v:r,k:v,a:null,e:null,prev:t,next:n};try{return d.e=ae(()=>s(i,r,h,u),z),d.e.prev=t&&t.e,d.e.next=n&&n.e,t===null?e.first=d:(t.next=d,t.e.next=d.e),n!==null&&(n.prev=d,n.e.prev=d.e),d}finally{}}function Q(i,e,t){for(var n=i.next?i.next.e.nodes_start:t,o=e?e.e.nodes_start:t,v=i.e.nodes_start;v!==n;){var l=Ie(v);o.before(v),v=l}}function M(i,e,t){e===null?i.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function w(i,e,t){var n=Ce(i,e);n&&n.set&&(i[e]=t,Fe(()=>{i[e]=null}))}const Ge=()=>({title:"Achievements",backgroundColor:"#4F8C86",watermark:fe}),ft=Object.freeze(Object.defineProperty({__proto__:null,load:Ge},Symbol.toStringTag,{value:"Module"}));var Be=F('<i><!></i> <div aria-label="event card"><h3></h3> <p></p></div>',1);function Z(i,e){const t=O(e,["children","$$slots","$$events","$$legacy"]);P(e,!1);const{type:n,title:o,body:v}=t;var l=Be(),s=I(l);C(s,"aria-label",`${n??""} event`);var c=_(s);ze(c),g(s);var u=A(s,2),a=_(u);a.textContent=o;var m=A(a,2);return m.textContent=v,g(u),b(i,l),w(e,"type",n),w(e,"title",o),w(e,"body",v),J({type:n,title:o,body:v})}var He=$('<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 36 28"><path d="M27.719 13.062l0.281 4.937c0.125 2.203-4.484 4-10 4s-10.125-1.797-10-4l0.281-4.937 8.969 2.828c0.25 0.078 0.5 0.109 0.75 0.109s0.5-0.031 0.75-0.109zM36 8c0 0.219-0.141 0.406-0.344 0.484l-17.5 5.5c-0.063 0.016-0.109 0.016-0.156 0.016s-0.094 0-0.156-0.016l-10.187-3.219c-0.891 0.703-1.516 2.422-1.641 4.531 0.594 0.344 0.984 0.969 0.984 1.703 0 0.703-0.359 1.313-0.906 1.672l0.906 6.766c0.016 0.141-0.031 0.281-0.125 0.391s-0.234 0.172-0.375 0.172h-3c-0.141 0-0.281-0.063-0.375-0.172s-0.141-0.25-0.125-0.391l0.906-6.766c-0.547-0.359-0.906-0.969-0.906-1.672 0-0.75 0.422-1.391 1.016-1.734 0.094-1.828 0.562-3.797 1.531-5.156l-5.203-1.625c-0.203-0.078-0.344-0.266-0.344-0.484s0.141-0.406 0.344-0.484l17.5-5.5c0.063-0.016 0.109-0.016 0.156-0.016s0.094 0 0.156 0.016l17.5 5.5c0.203 0.078 0.344 0.266 0.344 0.484z"></path></svg>');function Oe(i){var e=He();b(i,e)}var Le=F('<i><!></i> <div aria-label="event card"><h3></h3> <p></p></div>',1);function Ne(i,e){const t=O(e,["children","$$slots","$$events","$$legacy"]);P(e,!1);const{type:n,title:o,body:v}=t;var l=Le(),s=I(l);C(s,"aria-label",`${n??""} event`);var c=_(s);Oe(c),g(s);var u=A(s,2),a=_(u);a.textContent=o;var m=A(a,2);return m.textContent=v,g(u),b(i,l),w(e,"type",n),w(e,"title",o),w(e,"body",v),J({type:n,title:o,body:v})}var Ue=F('<i><!></i> <div aria-label="event card"><h3></h3> <p></p></div>',1);function Ye(i,e){const t=O(e,["children","$$slots","$$events","$$legacy"]);P(e,!1);const{type:n,title:o,body:v}=t;var l=Ue(),s=I(l);C(s,"aria-label",`${n??""} event`);var c=_(s);Pe(c),g(s);var u=A(s,2),a=_(u);a.textContent=o;var m=A(a,2);return m.textContent=v,g(u),b(i,l),w(e,"type",n),w(e,"title",o),w(e,"body",v),J({type:n,title:o,body:v})}var qe=$('<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 30 28"><path d="M9.266 14c-1.625 0.047-3.094 0.75-4.141 2h-2.094c-1.563 0-3.031-0.75-3.031-2.484 0-1.266-0.047-5.516 1.937-5.516 0.328 0 1.953 1.328 4.062 1.328 0.719 0 1.406-0.125 2.078-0.359-0.047 0.344-0.078 0.688-0.078 1.031 0 1.422 0.453 2.828 1.266 4zM26 23.953c0 2.531-1.672 4.047-4.172 4.047h-13.656c-2.5 0-4.172-1.516-4.172-4.047 0-3.531 0.828-8.953 5.406-8.953 0.531 0 2.469 2.172 5.594 2.172s5.063-2.172 5.594-2.172c4.578 0 5.406 5.422 5.406 8.953zM10 4c0 2.203-1.797 4-4 4s-4-1.797-4-4 1.797-4 4-4 4 1.797 4 4zM21 10c0 3.313-2.688 6-6 6s-6-2.688-6-6 2.688-6 6-6 6 2.688 6 6zM30 13.516c0 1.734-1.469 2.484-3.031 2.484h-2.094c-1.047-1.25-2.516-1.953-4.141-2 0.812-1.172 1.266-2.578 1.266-4 0-0.344-0.031-0.688-0.078-1.031 0.672 0.234 1.359 0.359 2.078 0.359 2.109 0 3.734-1.328 4.062-1.328 1.984 0 1.937 4.25 1.937 5.516zM28 4c0 2.203-1.797 4-4 4s-4-1.797-4-4 1.797-4 4-4 4 1.797 4 4z"></path></svg>');function Ve(i){var e=qe();b(i,e)}var We=F('<p><a rel="noreferrer" target="_blank"> </a></p>'),Xe=F('<i><!></i> <div aria-label="event card"><h3></h3> <p><em></em></p> <!></div>',1);function je(i,e){const t=O(e,["children","$$slots","$$events","$$legacy"]);P(e,!1);const{type:n,title:o,body:v,link:l}=t;var s=Xe(),c=I(s);C(c,"aria-label",`${n??""} event`);var u=_(c);Ve(u),g(c);var a=A(c,2),m=_(a);m.textContent=o;var r=A(m,2),h=_(r);h.textContent=v,g(r);var d=A(r,2);{var S=y=>{var f=We(),p=_(f),E=_(p,!0);g(p),g(f),ne(()=>{C(p,"href",l.href),ie(E,l.name)}),b(y,f)};R(d,y=>{l&&y(S)})}return g(a),b(i,s),w(e,"type",n),w(e,"title",o),w(e,"body",v),w(e,"link",l),J({type:n,title:o,body:v,link:l})}function Ke(i,e){P(e,!1);let t=se(e,"event",8);le();var n=B(),o=I(n);{var v=s=>{Ye(s,H(t))},l=s=>{var c=B(),u=I(c);{var a=r=>{Z(r,H(t))},m=r=>{var h=B(),d=I(h);{var S=f=>{Ne(f,H(t))},y=f=>{var p=B(),E=I(p);{var T=x=>{je(x,H(t))},k=x=>{Z(x,{get title(){return`INFO(o_0): '${t().type??""}' event here ?`},get body(){return`[TODO(@douglasduteil): add a '${t().type??""}' event.type]`}})};R(E,x=>{t().type==="talk"?x(T):x(k,!1)},!0)}b(f,p)};R(d,f=>{t().type==="study"?f(S):f(y,!1)},!0)}b(r,h)};R(u,r=>{t().type==="job"?r(a):r(m,!1)},!0)}b(s,c)};R(o,s=>{t().type==="github"?s(v):s(l,!1)})}b(i,n),J()}var Qe=F('<li aria-label="event" class="svelte-13v6i8o"><!></li>'),Ze=F('<li><time class="svelte-13v6i8o"> </time> <ul aria-label="events" class="svelte-13v6i8o"></ul></li>'),$e=F('<ul aria-label="timeline" class="svelte-13v6i8o"></ul>');function et(i,e){P(e,!1);let t=se(e,"eventsPerYear",8);le();var n=$e();K(n,5,t,j,(o,v)=>{let l=()=>G(v)[0],s=()=>G(v)[1];var c=Ze(),u=_(c),a=_(u,!0);g(u);var m=A(u,2);K(m,5,s,j,(r,h)=>{var d=Qe(),S=_(d);Ke(S,{get event(){return G(h)}}),g(d),b(r,d)}),g(m),g(c),ne((r,h)=>{C(c,"aria-labelledby",r),C(u,"datetime",h),C(u,"id",r),ie(a,l())},[()=>String(l()),()=>new Date(l(),0,1).toDateString()],ee),b(o,c)}),g(n),b(i,n),J()}const tt=[[2022,[{type:"github",body:"A open source organisation that buld widgets and directives for AngularJS",title:"Leave Angular UI"}]],[2021,[{type:"job",body:"Digital Services Incubator of the French government",title:"Leave the Fabrique numérique des Ministères"}]],[2018,[{type:"job",body:"Digital Services Incubator of the French government",title:"Join the Fabrique numérique des Ministères Sociaux as Lead Dev",link:{href:"https://github.com/SocialGouv",name:"@SocialGouv"}},{type:"job",body:"Software development company",title:"Leave SFEIR Paris"},{type:"talk",where:"Talk at the Bouffe Front",title:"How to build a cow ?",link:{href:"https://twitter.com/olegskl/status/1045011688557355009",name:"Bouffe Front @SFEIR"}}]],[2015,[{type:"job",body:"https://github.com/onedoes",title:"Co-founded OneDoes"}]],[2014,[{type:"talk",where:"Talk at the ngParis meetup",title:"Waaa Again !?",link:{href:"https://www.meetup.com/AngularJS-Paris/events/192808622/",name:"Meetup AngularJS #13 @SFEIR"}},{type:"talk",where:"Talk at the ngParis meetup",title:"Input[Range] over 9000",link:{href:"https://www.meetup.com/AngularJS-Paris/events/185603592/",name:"Meetup AngularJS #12 @BeMyAppFr"}},{type:"talk",where:"Talk at the ngParis meetup",title:"We need to make UI.Utils util again !",link:{href:"https://www.meetup.com/AngularJS-Paris/events/165733502/",name:"Meetup AngularJS #8 @SFEIR"}}]],[2013,[{type:"talk",where:"Talk at the ngParis meetup",title:"WaaaAnimation",link:{href:"https://www.meetup.com/AngularJS-Paris/events/147070122/",name:"Meetup #5 @Deezer"}},{type:"job",body:"Software development company",title:"Join SFEIR Paris"},{type:"study",body:"Master's degree in Computer Science and Human Sciences",title:"Graduated from the University of Paris 8"},{type:"github",body:"A open source organisation that buld widgets and directives for AngularJS",title:"Join Angular UI"}]]];function ct(i){et(i,{eventsPerYear:tt})}export{ct as component,ft as universal};
