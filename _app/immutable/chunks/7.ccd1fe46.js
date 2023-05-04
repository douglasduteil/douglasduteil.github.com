import{S as te,i as ne,s as re,C as _e,D as ge,m as o,h as i,n as c,b as se,E as s,F as C,k as f,q as z,l as h,r as V,U as ve,u as ye,o as pe,V as we,a as F,y as J,c as L,z as Y,A as Q,g as X,d as Z,B as $}from"./index.0838f4bf.js";import{G as Ee,S as xe}from"./github.f0bb0338.js";const me="//1.gravatar.com/avatar/1e7cd3d5b060997af752aee10d724da1",Ie=()=>({title:"Me",backgoundImage:[me+"?s=1024",me,"/mini_me.jpeg"].map(n=>`url('${n}')`).join(",")}),Re=Object.freeze(Object.defineProperty({__proto__:null,load:Ie},Symbol.toStringTag,{value:"Module"}));function Se(n){let e,t;return{c(){e=_e("svg"),t=_e("path"),this.h()},l(a){e=ge(a,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0});var l=o(e);t=ge(l,"path",{d:!0}),o(t).forEach(i),l.forEach(i),this.h()},h(){c(t,"d","M12 10c0-2.203-1.797-4-4-4s-4 1.797-4 4 1.797 4 4 4 4-1.797 4-4zM16 10c0 0.953-0.109 1.937-0.516 2.797l-5.688 12.094c-0.328 0.688-1.047 1.109-1.797 1.109s-1.469-0.422-1.781-1.109l-5.703-12.094c-0.406-0.859-0.516-1.844-0.516-2.797 0-4.422 3.578-8 8-8s8 3.578 8 8z"),c(e,"xmlns","http://www.w3.org/2000/svg"),c(e,"width","18"),c(e,"height","18"),c(e,"viewBox","0 0 16 28")},m(a,l){se(a,e,l),s(e,t)},p:C,i:C,o:C,d(a){a&&i(e)}}}class De extends te{constructor(e){super(),ne(this,e,null,Se,re,{})}}function be(n){if(!Array.isArray(n))throw new TypeError(`Expected an array, got ${typeof n}`);n=[...n];for(let e=n.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[n[e],n[t]]=[n[t],n[e]]}return n}function q(n){return q._shuffledWords.length||(q._shuffledWords=be(n)),q._shuffledWords.pop()}q._shuffledWords=[];function Be(n){return n[Math.floor(Math.random()*n.length)]}function Me(n){let e,t;return{c(){e=f("dd-supa-cinematic-hacker-typer"),t=z(n[0]),this.h()},l(a){e=h(a,"DD-SUPA-CINEMATIC-HACKER-TYPER",{class:!0});var l=o(e);t=V(l,n[0]),l.forEach(i),this.h()},h(){ve(e,"class","svelte-15sn9bv")},m(a,l){se(a,e,l),s(e,t)},p(a,[l]){l&1&&ye(t,a[0])},i:C,o:C,d(a){a&&i(e)}}}const We=1;function Te(n,e,t){let{words:a=[""]}=e,{delayBetweenWords:l=2e3}=e,{cursorBlinkingSpeed:W=500}=e,{erasingSpeed:T=50}=e,{typingSpeed:y=100}=e,{cursor:d="|"}=e,{orderFn:k=r=>""}=e,{prefix:_="§"}=e;const D=-1;let m="",b="",B=`${_} ${b}`,O,A,v;pe(x),we(()=>{clearTimeout(v),clearInterval(A),clearInterval(O)});async function x(){m=k(a)||"",await p(We,y),await R(l),await p(D,T),await x()}async function p(r,M){const g=r>0?m.length:0;return new Promise(w=>{O=+setInterval(S,M);function S(){const P=b.length;if(P===g)return clearInterval(O),w();b=m.slice(0,P+r),I()}})}async function R(r){const M=d;return A=+setInterval(g,W),new Promise(w=>v=+setTimeout(()=>{clearInterval(A),t(1,d=M),I(),w()},r));function g(){t(1,d=d.length?"":M),I()}}function I(){requestAnimationFrame(function(){t(0,B=`${_} ${b} ${d}`)})}return n.$$set=r=>{"words"in r&&t(2,a=r.words),"delayBetweenWords"in r&&t(3,l=r.delayBetweenWords),"cursorBlinkingSpeed"in r&&t(4,W=r.cursorBlinkingSpeed),"erasingSpeed"in r&&t(5,T=r.erasingSpeed),"typingSpeed"in r&&t(6,y=r.typingSpeed),"cursor"in r&&t(1,d=r.cursor),"orderFn"in r&&t(7,k=r.orderFn),"prefix"in r&&t(8,_=r.prefix)},[B,d,a,l,W,T,y,k,_]}class ke extends te{constructor(e){super(),ne(this,e,Te,Me,re,{words:2,delayBetweenWords:3,cursorBlinkingSpeed:4,erasingSpeed:5,typingSpeed:6,cursor:1,orderFn:7,prefix:8})}}const Oe={randomTyperOrder:Be,shuffledTyperOrder:q};function Ae(n){let e,t,a,l,W,T,y,d,k,_,D,m,b,B,O,A,v,x,p,R,I,r,M,g,w,S,P,j,ee,G;return d=new ke({props:{words:n[0],prefix:"#",orderFn:Oe.shuffledTyperOrder}}),m=new De({}),p=new Ee({}),S=new xe({}),{c(){e=f("section"),t=f("ul"),a=f("li"),l=f("h1"),W=z("Douglas Duteil"),T=F(),y=f("li"),J(d.$$.fragment),k=F(),_=f("li"),D=f("i"),J(m.$$.fragment),b=F(),B=f("div"),O=z("Paris, France"),A=F(),v=f("li"),x=f("i"),J(p.$$.fragment),R=F(),I=f("div"),r=z("OneDoes Member"),M=F(),g=f("li"),w=f("i"),J(S.$$.fragment),P=F(),j=f("div"),ee=z("Lead Developer"),this.h()},l(u){e=h(u,"SECTION",{class:!0});var N=o(e);t=h(N,"UL",{class:!0});var E=o(t);a=h(E,"LI",{class:!0});var ae=o(a);l=h(ae,"H1",{class:!0});var le=o(l);W=V(le,"Douglas Duteil"),le.forEach(i),ae.forEach(i),T=L(E),y=h(E,"LI",{class:!0});var ie=o(y);Y(d.$$.fragment,ie),ie.forEach(i),k=L(E),_=h(E,"LI",{class:!0});var U=o(_);D=h(U,"I",{class:!0});var oe=o(D);Y(m.$$.fragment,oe),oe.forEach(i),b=L(U),B=h(U,"DIV",{});var ce=o(B);O=V(ce,"Paris, France"),ce.forEach(i),U.forEach(i),A=L(E),v=h(E,"LI",{class:!0});var H=o(v);x=h(H,"I",{class:!0});var de=o(x);Y(p.$$.fragment,de),de.forEach(i),R=L(H),I=h(H,"DIV",{});var ue=o(I);r=V(ue,"OneDoes Member"),ue.forEach(i),H.forEach(i),M=L(E),g=h(E,"LI",{class:!0});var K=o(g);w=h(K,"I",{class:!0});var fe=o(w);Y(S.$$.fragment,fe),fe.forEach(i),P=L(K),j=h(K,"DIV",{});var he=o(j);ee=V(he,"Lead Developer"),he.forEach(i),K.forEach(i),E.forEach(i),N.forEach(i),this.h()},h(){c(l,"class","svelte-15dyrht"),c(a,"class","svelte-15dyrht"),c(y,"class","svelte-15dyrht"),c(D,"class","svelte-15dyrht"),c(_,"class","svelte-15dyrht"),c(x,"class","svelte-15dyrht"),c(v,"class","svelte-15dyrht"),c(w,"class","svelte-15dyrht"),c(g,"class","svelte-15dyrht"),c(t,"class","svelte-15dyrht"),c(e,"class","svelte-15dyrht")},m(u,N){se(u,e,N),s(e,t),s(t,a),s(a,l),s(l,W),s(t,T),s(t,y),Q(d,y,null),s(t,k),s(t,_),s(_,D),Q(m,D,null),s(_,b),s(_,B),s(B,O),s(t,A),s(t,v),s(v,x),Q(p,x,null),s(v,R),s(v,I),s(I,r),s(t,M),s(t,g),s(g,w),Q(S,w,null),s(g,P),s(g,j),s(j,ee),G=!0},p:C,i(u){G||(X(d.$$.fragment,u),X(m.$$.fragment,u),X(p.$$.fragment,u),X(S.$$.fragment,u),G=!0)},o(u){Z(d.$$.fragment,u),Z(m.$$.fragment,u),Z(p.$$.fragment,u),Z(S.$$.fragment,u),G=!1},d(u){u&&i(e),$(d),$(m),$(p),$(S)}}}function Fe(n){return[["===========","Contributor","Developer","Musician","Gamer","Sleeper","Jogger"]]}class Le extends te{constructor(e){super(),ne(this,e,Fe,Ae,re,{})}}const je=Le;export{je as component,Re as universal};
