import{T as fe}from"../chunks/trophy.CXDJNc9O.js";import{a as S,t as C,n as te,c as O}from"../chunks/disclose-version.C7IA_BwY.js";import"../chunks/legacy.BfubTqQN.js";import{z as ce,b as de,h as z,s as Y,c as he,Z as me,am as ae,H as pe,r as X,e as q,d as J,az as N,f as re,a as ne,p as ge,m as j,aA as ye,aB as _e,al as be,aC as we,aD as Se,D as ke,ai as Te,l as Ae,aa as xe,T as K,aE as Ee,aF as Me,aG as Ie,C as Ce,ae as ze,X as Fe,G as P,I as M,M as w,N as y,O as A,K as D,J as R,w as W}from"../chunks/runtime.BAoMWKsh.js";import{s as ie}from"../chunks/render.DMrvi73B.js";import{s as I}from"../chunks/attributes.DCGUFlzy.js";import{i as le}from"../chunks/lifecycle.B9KwJ2X0.js";import{l as B,p as se,s as H}from"../chunks/props.1wirUNKG.js";import{i as G}from"../chunks/if.DmqeARJ6.js";import{S as Pe,G as De}from"../chunks/github.CqcDXmkr.js";function Z(n,e){return e}function Je(n,e,t,a){for(var o=[],l=e.length,i=0;i<l;i++)_e(e[i].e,o,!0);var s=l>0&&o.length===0&&t!==null;if(s){var c=t.parentNode;be(c),c.append(t),a.clear(),E(n,e[0].prev,e[l-1].next)}we(o,()=>{for(var v=0;v<l;v++){var m=e[v];s||(a.delete(m.k),E(n,m.prev,m.next)),Se(m.e,!s)}})}function Q(n,e,t,a,o,l=null){var i=n,s={flags:e,items:new Map,first:null};{var c=n;i=z?Y(ke(c)):c.appendChild(ce())}z&&he();var v=null,m=!1;de(()=>{var r=t(),h=me(r)?r:r==null?[]:ae(r),u=h.length;if(m&&u===0)return;m=u===0;let f=!1;if(z){var g=i.data===pe;g!==(u===0)&&(i=X(),Y(i),q(!1),f=!0)}if(z){for(var k=null,p,d=0;d<u;d++){if(J.nodeType===8&&J.data===Te){i=J,f=!0,q(!1);break}var _=h[d],F=a(_,d);p=oe(J,s,k,null,_,F,d,o,e),s.items.set(F,p),k=p}u>0&&Y(X())}if(!z){var x=Ae;Re(h,s,i,o,e,(x.f&N)!==0,a)}l!==null&&(u===0?v?re(v):v=ne(()=>l(i)):v!==null&&ge(v,()=>{v=null})),f&&q(!0),t()}),z&&(i=J)}function Re(n,e,t,a,o,l,i,s){var c=n.length,v=e.items,m=e.first,r=m,h,u=null,f=[],g=[],k,p,d,_;for(_=0;_<c;_+=1){if(k=n[_],p=i(k,_),d=v.get(p),d===void 0){var F=r?r.e.nodes_start:t;u=oe(F,e,u,u===null?e.first:u.next,k,p,_,a,o),v.set(p,u),f=[],g=[],r=u.next;continue}if(Ge(d,k,_),d.e.f&N&&re(d.e),d!==r){if(h!==void 0&&h.has(d)){if(f.length<g.length){var x=g[0],b;u=x.prev;var V=f[0],U=f[f.length-1];for(b=0;b<f.length;b+=1)$(f[b],x,t);for(b=0;b<g.length;b+=1)h.delete(g[b]);E(e,V.prev,U.next),E(e,u,V),E(e,U,x),r=x,u=U,_-=1,f=[],g=[]}else h.delete(d),$(d,r,t),E(e,d.prev,d.next),E(e,d,u===null?e.first:u.next),E(e,u,d),u=d;continue}for(f=[],g=[];r!==null&&r.k!==p;)(l||!(r.e.f&N))&&(h??(h=new Set)).add(r),g.push(r),r=r.next;if(r===null)continue;d=r}f.push(d),u=d,r=d.next}if(r!==null||h!==void 0){for(var L=h===void 0?[]:ae(h);r!==null;)(l||!(r.e.f&N))&&L.push(r),r=r.next;var ve=L.length;if(ve>0){var ue=c===0?t:null;Je(e,L,ue,v)}}j.first=e.first&&e.first.e,j.last=u&&u.e}function Ge(n,e,t,a){ye(n.v,e),n.i=t}function oe(n,e,t,a,o,l,i,s,c,v){var m=(c&Me)!==0,r=(c&Ie)===0,h=m?r?xe(o):K(o):o,u=c&Ee?K(i):i,f={i:u,v:h,k:l,a:null,e:null,prev:t,next:a};try{return f.e=ne(()=>s(n,h,u),z),f.e.prev=t&&t.e,f.e.next=a&&a.e,t===null?e.first=f:(t.next=f,t.e.next=f.e),a!==null&&(a.prev=f,a.e.prev=f.e),f}finally{}}function $(n,e,t){for(var a=n.next?n.next.e.nodes_start:t,o=e?e.e.nodes_start:t,l=n.e.nodes_start;l!==a;){var i=Ce(l);o.before(l),l=i}}function E(n,e,t){e===null?n.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function T(n,e,t){var a=Fe(n,e);a&&a.set&&(n[e]=t,ze(()=>{n[e]=null}))}const Oe=()=>({title:"Achievements",backgroundColor:"#4F8C86",watermark:fe}),dt=Object.freeze(Object.defineProperty({__proto__:null,load:Oe},Symbol.toStringTag,{value:"Module"}));var He=C('<i><!></i> <div aria-label="event card"><h3></h3> <p></p></div>',1);function ee(n,e){const t=B(e,["children","$$slots","$$events","$$legacy"]);P(e,!1);const{type:a,title:o,body:l}=t;var i=He(),s=M(i);I(s,"aria-label",`${a??""} event`);var c=w(s);Pe(c),y(s);var v=A(s,2),m=w(v);m.textContent=o;var r=A(m,2);return r.textContent=l,y(v),S(n,i),T(e,"type",a),T(e,"title",o),T(e,"body",l),D({type:a,title:o,body:l})}var Ne=te('<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 36 28"><path d="M27.719 13.062l0.281 4.937c0.125 2.203-4.484 4-10 4s-10.125-1.797-10-4l0.281-4.937 8.969 2.828c0.25 0.078 0.5 0.109 0.75 0.109s0.5-0.031 0.75-0.109zM36 8c0 0.219-0.141 0.406-0.344 0.484l-17.5 5.5c-0.063 0.016-0.109 0.016-0.156 0.016s-0.094 0-0.156-0.016l-10.187-3.219c-0.891 0.703-1.516 2.422-1.641 4.531 0.594 0.344 0.984 0.969 0.984 1.703 0 0.703-0.359 1.313-0.906 1.672l0.906 6.766c0.016 0.141-0.031 0.281-0.125 0.391s-0.234 0.172-0.375 0.172h-3c-0.141 0-0.281-0.063-0.375-0.172s-0.141-0.25-0.125-0.391l0.906-6.766c-0.547-0.359-0.906-0.969-0.906-1.672 0-0.75 0.422-1.391 1.016-1.734 0.094-1.828 0.562-3.797 1.531-5.156l-5.203-1.625c-0.203-0.078-0.344-0.266-0.344-0.484s0.141-0.406 0.344-0.484l17.5-5.5c0.063-0.016 0.109-0.016 0.156-0.016s0.094 0 0.156 0.016l17.5 5.5c0.203 0.078 0.344 0.266 0.344 0.484z"></path></svg>');function Be(n){var e=Ne();S(n,e)}var Ue=C('<i><!></i> <div aria-label="event card"><h3></h3> <p></p></div>',1);function Le(n,e){const t=B(e,["children","$$slots","$$events","$$legacy"]);P(e,!1);const{type:a,title:o,body:l}=t;var i=Ue(),s=M(i);I(s,"aria-label",`${a??""} event`);var c=w(s);Be(c),y(s);var v=A(s,2),m=w(v);m.textContent=o;var r=A(m,2);return r.textContent=l,y(v),S(n,i),T(e,"type",a),T(e,"title",o),T(e,"body",l),D({type:a,title:o,body:l})}var Ye=C('<i><!></i> <div aria-label="event card"><h3></h3> <p></p></div>',1);function qe(n,e){const t=B(e,["children","$$slots","$$events","$$legacy"]);P(e,!1);const{type:a,title:o,body:l}=t;var i=Ye(),s=M(i);I(s,"aria-label",`${a??""} event`);var c=w(s);De(c),y(s);var v=A(s,2),m=w(v);m.textContent=o;var r=A(m,2);return r.textContent=l,y(v),S(n,i),T(e,"type",a),T(e,"title",o),T(e,"body",l),D({type:a,title:o,body:l})}var We=te('<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 30 28"><path d="M9.266 14c-1.625 0.047-3.094 0.75-4.141 2h-2.094c-1.563 0-3.031-0.75-3.031-2.484 0-1.266-0.047-5.516 1.937-5.516 0.328 0 1.953 1.328 4.062 1.328 0.719 0 1.406-0.125 2.078-0.359-0.047 0.344-0.078 0.688-0.078 1.031 0 1.422 0.453 2.828 1.266 4zM26 23.953c0 2.531-1.672 4.047-4.172 4.047h-13.656c-2.5 0-4.172-1.516-4.172-4.047 0-3.531 0.828-8.953 5.406-8.953 0.531 0 2.469 2.172 5.594 2.172s5.063-2.172 5.594-2.172c4.578 0 5.406 5.422 5.406 8.953zM10 4c0 2.203-1.797 4-4 4s-4-1.797-4-4 1.797-4 4-4 4 1.797 4 4zM21 10c0 3.313-2.688 6-6 6s-6-2.688-6-6 2.688-6 6-6 6 2.688 6 6zM30 13.516c0 1.734-1.469 2.484-3.031 2.484h-2.094c-1.047-1.25-2.516-1.953-4.141-2 0.812-1.172 1.266-2.578 1.266-4 0-0.344-0.031-0.688-0.078-1.031 0.672 0.234 1.359 0.359 2.078 0.359 2.109 0 3.734-1.328 4.062-1.328 1.984 0 1.937 4.25 1.937 5.516zM28 4c0 2.203-1.797 4-4 4s-4-1.797-4-4 1.797-4 4-4 4 1.797 4 4z"></path></svg>');function Ve(n){var e=We();S(n,e)}var Xe=C('<p><a rel="noreferrer" target="_blank"> </a></p>'),je=C('<i><!></i> <div aria-label="event card"><h3></h3> <p><em></em></p> <!></div>',1);function Ke(n,e){const t=B(e,["children","$$slots","$$events","$$legacy"]);P(e,!1);const{type:a,title:o,body:l,link:i}=t;var s=je(),c=M(s);I(c,"aria-label",`${a??""} event`);var v=w(c);Ve(v),y(c);var m=A(c,2),r=w(m);r.textContent=o;var h=A(r,2),u=w(h);u.textContent=l,y(h);var f=A(h,2);{var g=k=>{var p=Xe(),d=w(p),_=w(d,!0);y(d),y(p),R(()=>{I(d,"href",i.href),ie(_,i.name)}),S(k,p)};G(f,k=>{i&&k(g)})}return y(m),S(n,s),T(e,"type",a),T(e,"title",o),T(e,"body",l),T(e,"link",i),D({type:a,title:o,body:l,link:i})}function Ze(n,e){P(e,!1);let t=se(e,"event",8);le();var a=O(),o=M(a);{var l=s=>{qe(s,H(t))},i=s=>{var c=O(),v=M(c);{var m=h=>{ee(h,H(t))},r=h=>{var u=O(),f=M(u);{var g=p=>{Le(p,H(t))},k=p=>{var d=O(),_=M(d);{var F=b=>{Ke(b,H(t))},x=b=>{ee(b,{get title(){return`INFO(o_0): '${t().type??""}' event here ?`},get body(){return`[TODO(@douglasduteil): add a '${t().type??""}' event.type]`}})};G(_,b=>{t().type==="talk"?b(F):b(x,!1)},!0)}S(p,d)};G(f,p=>{t().type==="study"?p(g):p(k,!1)},!0)}S(h,u)};G(v,h=>{t().type==="job"?h(m):h(r,!1)},!0)}S(s,c)};G(o,s=>{t().type==="github"?s(l):s(i,!1)})}S(n,a),D()}var Qe=C('<li aria-label="event" class="svelte-ir01w"><!></li>'),$e=C('<li><time class="svelte-ir01w"> </time> <ul aria-label="events" class="svelte-ir01w"></ul></li>'),et=C('<ul aria-label="timeline" class="svelte-ir01w"></ul>');function tt(n,e){P(e,!1);let t=se(e,"eventsPerYear",8);le();var a=et();Q(a,5,t,Z,(o,l)=>{let i=()=>W(l)[0],s=()=>W(l)[1];var c=$e();R(()=>I(c,"aria-labelledby",String(i())));var v=w(c);R(()=>I(v,"datetime",new Date(i(),0,1).toDateString())),R(()=>I(v,"id",String(i())));var m=w(v,!0);y(v);var r=A(v,2);Q(r,5,s,Z,(h,u)=>{var f=Qe(),g=w(f);Ze(g,{get event(){return W(u)}}),y(f),S(h,f)}),y(r),y(c),R(()=>ie(m,i())),S(o,c)}),y(a),S(n,a),D()}const at=[[2022,[{type:"github",body:"A open source organisation that buld widgets and directives for AngularJS",title:"Leave Angular UI"}]],[2021,[{type:"job",body:"Digital Services Incubator of the French government",title:"Leave the Fabrique numérique des Ministères"}]],[2018,[{type:"job",body:"Digital Services Incubator of the French government",title:"Join the Fabrique numérique des Ministères Sociaux as Lead Dev",link:{href:"https://github.com/SocialGouv",name:"@SocialGouv"}},{type:"job",body:"Software development company",title:"Leave SFEIR Paris"},{type:"talk",where:"Talk at the Bouffe Front",title:"How to build a cow ?",link:{href:"https://twitter.com/olegskl/status/1045011688557355009",name:"Bouffe Front @SFEIR"}}]],[2015,[{type:"job",body:"https://github.com/onedoes",title:"Co-founded OneDoes"}]],[2014,[{type:"talk",where:"Talk at the ngParis meetup",title:"Waaa Again !?",link:{href:"https://www.meetup.com/AngularJS-Paris/events/192808622/",name:"Meetup AngularJS #13 @SFEIR"}},{type:"talk",where:"Talk at the ngParis meetup",title:"Input[Range] over 9000",link:{href:"https://www.meetup.com/AngularJS-Paris/events/185603592/",name:"Meetup AngularJS #12 @BeMyAppFr"}},{type:"talk",where:"Talk at the ngParis meetup",title:"We need to make UI.Utils util again !",link:{href:"https://www.meetup.com/AngularJS-Paris/events/165733502/",name:"Meetup AngularJS #8 @SFEIR"}}]],[2013,[{type:"talk",where:"Talk at the ngParis meetup",title:"WaaaAnimation",link:{href:"https://www.meetup.com/AngularJS-Paris/events/147070122/",name:"Meetup #5 @Deezer"}},{type:"job",body:"Software development company",title:"Join SFEIR Paris"},{type:"study",body:"Master's degree in Computer Science and Human Sciences",title:"Graduated from the University of Paris 8"},{type:"github",body:"A open source organisation that buld widgets and directives for AngularJS",title:"Join Angular UI"}]]];function ht(n){tt(n,{eventsPerYear:at})}export{ht as component,dt as universal};
