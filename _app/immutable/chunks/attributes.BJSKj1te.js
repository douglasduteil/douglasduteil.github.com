import{n as t,o as a,h as p,L as v,q as c,u as g,v as d,w as y}from"./runtime.CyuEb4qf.js";function h(r,s,i,o){var _=r.__attributes??(r.__attributes={});p&&(_[s]=r.getAttribute(s),s==="src"||s==="srcset"||s==="href"&&r.nodeName==="LINK")||_[s]!==(_[s]=i)&&(s==="style"&&"__styles"in r&&(r.__styles={}),s==="loading"&&(r[v]=i),i==null?r.removeAttribute(s):typeof i!="string"&&e(r).includes(s)?r[s]=i:r.setAttribute(s,i))}function A(r,s,i){var o=d,_=y;t(null),c(null);try{e(r).includes(s)?r[s]=i:h(r,s,i)}finally{t(o),c(_)}}var n=new Map;function e(r){var s=n.get(r.nodeName);if(s)return s;n.set(r.nodeName,s=[]);for(var i,o=a(r),_=Element.prototype;_!==o;){i=g(o);for(var f in i)i[f].set&&s.push(f);o=a(o)}return s}export{A as a,h as s};
