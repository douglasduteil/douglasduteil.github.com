import{a as I,n as q,t as j}from"../chunks/disclose-version.Dc90DGw8.js";import"../chunks/legacy.DUjzh244.js";import{p as z,ax as J,t as K,a as G,P as N,c as r,r as a,D as H,s as b,av as k}from"../chunks/runtime.dm3FgdR6.js";import{i as L}from"../chunks/lifecycle.CKbpVSwS.js";import{G as Q,S as U}from"../chunks/github.BpMdQhpI.js";import{s as V}from"../chunks/render.CI_bFNKP.js";import{a as X}from"../chunks/attributes.BTzvEepU.js";import{p as s}from"../chunks/props.6LpB6DA6.js";import{o as Y,a as Z}from"../chunks/index-client.CbcMv9k_.js";const A="//1.gravatar.com/avatar/1e7cd3d5b060997af752aee10d724da1",$=()=>({title:"Me",backgoundImage:[A+"?s=1024",A,"/mini_me.jpeg"].map(e=>`url('${e}')`).join(",")}),ge=Object.freeze(Object.defineProperty({__proto__:null,load:$},Symbol.toStringTag,{value:"Module"}));var ee=q('<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 28"><path d="M12 10c0-2.203-1.797-4-4-4s-4 1.797-4 4 1.797 4 4 4 4-1.797 4-4zM16 10c0 0.953-0.109 1.937-0.516 2.797l-5.688 12.094c-0.328 0.688-1.047 1.109-1.797 1.109s-1.469-0.422-1.781-1.109l-5.703-12.094c-0.406-0.859-0.516-1.844-0.516-2.797 0-4.422 3.578-8 8-8s8 3.578 8 8z"></path></svg>');function te(e){var t=ee();I(e,t)}function re(e){if(!Array.isArray(e))throw new TypeError(`Expected an array, got ${typeof e}`);e=[...e];for(let t=e.length-1;t>0;t--){const l=Math.floor(Math.random()*(t+1));[e[t],e[l]]=[e[l],e[t]]}return e}function m(e){return m._shuffledWords.length||(m._shuffledWords=re(e)),m._shuffledWords.pop()}m._shuffledWords=[];function ae(e){return e[Math.floor(Math.random()*e.length)]}var ne=j("<dd-supa-cinematic-hacker-typer> </dd-supa-cinematic-hacker-typer>",2);function se(e,t){z(t,!1);let l=s(t,"words",24,()=>[""]),c=s(t,"delayBetweenWords",8,2e3),h=s(t,"cursorBlinkingSpeed",8,500),d=s(t,"erasingSpeed",8,50),S=s(t,"typingSpeed",8,100),n=s(t,"cursor",12,"|"),g=s(t,"orderFn",8,o=>""),_=s(t,"prefix",8,"§");const u=1,y=-1;let v="",i="",f=J(`${_()} ${i}`),p,M,T;Y(B),Z(()=>{clearTimeout(T),clearInterval(M),clearInterval(p)});async function B(){v=g()(l())||"",await F(u,S()),await R(c()),await F(y,d()),await B()}async function F(o,x){const D=o>0?v.length:0;return new Promise(O=>{p=+setInterval(E,x);function E(){const P=i.length;if(P===D)return clearInterval(p),O();i=v.slice(0,P+o),W()}})}async function R(o){const x=n();return M=+setInterval(D,h()),new Promise(O=>T=+setTimeout(()=>{clearInterval(M),n(x),W(),O()},o));function D(){n(n().length?"":x),W()}}function W(){requestAnimationFrame(function(){N(f,`${_()} ${i} ${n()}`)})}L();var w=ne();X(w,"class","svelte-15sn9bv");var C=r(w,!0);a(w),K(()=>V(C,H(f))),I(e,w),G()}const ie={randomTyperOrder:ae,shuffledTyperOrder:m};var le=j('<section class="svelte-15dyrht"><ul class="svelte-15dyrht"><li class="svelte-15dyrht"><h1 class="svelte-15dyrht">Douglas Duteil</h1></li> <li class="svelte-15dyrht"><!></li> <li class="svelte-15dyrht"><i class="svelte-15dyrht"><!></i> <div>Paris, France</div></li> <li class="svelte-15dyrht"><i class="svelte-15dyrht"><!></i> <div>OneDoes Member</div></li> <li class="svelte-15dyrht"><i class="svelte-15dyrht"><!></i> <div>Lead Developer</div></li></ul></section>');function _e(e,t){z(t,!1);const l=["===========","Contributor","Developer","Musician","Gamer","Sleeper","Jogger"];L();var c=le(),h=r(c),d=b(r(h),2),S=r(d);se(S,{words:l,prefix:"#",get orderFn(){return ie.shuffledTyperOrder}}),a(d);var n=b(d,2),g=r(n),_=r(g);te(_),a(g),k(2),a(n);var u=b(n,2),y=r(u),v=r(y);Q(v),a(y),k(2),a(u);var i=b(u,2),f=r(i),p=r(f);U(p),a(f),k(2),a(i),a(h),a(c),I(e,c),G()}export{_e as component,ge as universal};
