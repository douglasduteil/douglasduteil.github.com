(self.webpackChunkdouglasduteil_github_com=self.webpackChunkdouglasduteil_github_com||[]).push([[269],{168:t=>{t.exports={"@global":{section:{"@media (max-width: 767px)":{marginBottom:"50px - 20px"},"@media (min-width: 768px)":{paddingRight:"15px * 2",justifyContent:"center"}}},ul:{padding:"0",listStyle:"none",position:"relative",display:"table",width:"100%",zIndex:"0",color:"black",margin:"0 auto 30px","&:after":{content:"''",display:"block",position:"absolute",zIndex:"-1",left:"33px",top:"0",bottom:"-30px",width:"10px",marginLeft:"-5px",backgroundColor:"rgba(0, 0, 0, 0.3)"}},"event-list":{listStyle:"none",padding:"0",margin:"0"},event:{position:"relative","@media (min-width: 992px)":{margin:"auto",width:"768px"}},icon:{width:"40px",height:"40px",speak:"none",position:"absolute",color:"#fff",borderRadius:"50%",backgroundColor:"#4f8c86",padding:"4px",boxShadow:"0 0 0 4px #fff",left:"34px",top:"-4px",margin:"0 0 0 -25px",display:"flex",alignItems:"center",justifyContent:"center","@global svg":{width:"24px",height:"24px"},"@media (max-width: 767px)":{fontSize:"1.4em"}},body:{position:"relative",margin:"5px 0 30px 93px",backgroundColor:"white",padding:"1rem 2rem","@global a":{color:"#333"},"> h3":{margin:"0 0 5px"},"&:after":{content:"' '",right:"100%",height:"0",width:"0",position:"absolute",border:"solid transparent",pointerEvents:"none",borderRightColor:"#fff",borderWidth:"20px",top:"0"}},year:{display:"block",margin:"113.33333px 0 1em",paddingLeft:"48px",fontSize:"50px",fontWeight:"bold",color:"rgba(0, 0, 0, 0.6)"}}},832:t=>{t.exports={"@global":{"@media (min-width: 768px)":{main:{paddingLeft:"70px"}}},title:{position:"fixed",top:"0",left:"0",right:"0",zIndex:"100",transform:"translateZ(0)",willChange:"transform",textAlign:"center",margin:"0",padding:"1rem 0","@media (min-width: 768px)":{left:"70px"}},section:{flex:"1",display:"flex",padding:"20px",marginBottom:"50px","@media (min-width: 768px)":{marginBottom:"0",paddingBottom:"0"}},watermark:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",zIndex:"0",opacity:"0.1",display:"flex",alignItems:"center",justifyContent:"center",userSelect:"none",pointerEvents:"none","@global svg":{width:"170px",height:"170px"}}}},269:(t,e,i)=>{"use strict";i.r(e),i.d(e,{backgoundColor:()=>m,default:()=>h});var a=i(44),o=i(672),n=i(311),l=i(168),r=i.n(l);const s=JSON.parse('[["2018",[{"type":"talk","where":"Talk at the Bouffe Front","title":"How to build a cow ?","link":{"href":"https://twitter.com/olegskl/status/1045011688557355009","name":"Bouffe Front @SFEIR"}}]],["2014",[{"type":"talk","where":"Talk at the ngParis meetup","title":"Waaa Again !?","link":{"href":"https://www.meetup.com/AngularJS-Paris/events/192808622/","name":"Meetup AngularJS #13 @SFEIR"}},{"type":"talk","where":"Talk at the ngParis meetup","title":"Input[Range] over 9000","link":{"href":"https://www.meetup.com/AngularJS-Paris/events/185603592/","name":"Meetup AngularJS #12 @BeMyAppFr"}},{"type":"talk","where":"Talk at the ngParis meetup","title":"We need to make UI.Utils util again !","link":{"href":"https://www.meetup.com/AngularJS-Paris/events/165733502/","name":"Meetup AngularJS #8 @SFEIR"}}]],["2013",[{"type":"talk","where":"Talk at the ngParis meetup","title":"WaaaAnimation","link":{"href":"https://www.meetup.com/AngularJS-Paris/events/147070122/","name":"Meetup #5 @Deezer"}},{"type":"job","body":"Software development company","title":"Join SFEIR Paris"},{"type":"study","body":"MSc Human-Compute","title":"Graduated from Paris 8"},{"type":"github","body":"A open source organisation that buld widgets and directives for AngularJS","title":"Join Angular UI"}]]]'),p=a.Z.createStyleSheet(r()),{classes:d}=p,g={},m="#4F8C86",h=({hyper:{wire:t}},e,i)=>{return(0,o.Z)(t)({title:"Achievements",bgColor:m,watermark:(0,n.CW)(t,g),children:t(g,":achivement")`
    <article>${(a=t,t=>a()`
    <ul class=${d.ul}>
    ${t.map((([t,e])=>a()`
        <li>
          ${function(t){return e=>t()`<time class=${d.year} datetime="${new Date(e)}">${e}</time>`}(a)(t)}

          <ul class=${d["event-list"]}>
          ${e.map((t=>a()`
              <li class=${d.event}>${c[t.type](a)(t)}</li>
            `))}
          </ul>
        </li>
      `))}
    </ul>`)(s)}</article>

    <style>${{html:p.toString()}}</style>
  `});var a},c={job:t=>e=>t()`
    <i class=${d.icon}>${(0,n.zD)(t,e)}</i>
    <div class=${d.body}>

      <h3>${e.title}</h3>
      <p>${e.body}</p>
    </div>
    `,study:t=>e=>t()`
    <i class=${d.icon}>${(0,n.pI)(t,e)}</i>
    <div class=${d.body}>

      <h3>${e.title}</h3>
      <p>${e.body}</p>
    </div>
    `,github:t=>e=>t()`
    <i class=${d.icon}>${(0,n.fZ)(t,e)}</i>
    <div class=${d.body}>

      <h3>${e.title}</h3>
      <p>${e.body}</p>
    </div>
    `,talk:t=>e=>t()`
    <i class=${d.icon}>${(0,n.jn)(t,e)}</i>
    <div class=${d.body}>
      <h3>${e.where}</h3>
      <p><em>"${e.title}"</em></p>
      <p>
        <a
          href="${e.link.href}"
          rel="noreferrer"
          target="_blank"
        >
          ${e.link.name}
        </a>
      </p>
    </div>
      `}},672:(t,e,i)=>{"use strict";i.d(e,{Z:()=>p});var a=i(44),o=i(832),n=i.n(o);const l=a.Z.createStyleSheet(n());l.addRules({section:{backgroundColor:t=>t.bgColor},title:{backgroundColor:t=>t.bgColor}});const{classes:r}=l,s={},p=t=>({title:e,children:i,bgColor:a,watermark:o})=>(l.update({bgColor:a}),t(s,":page-layout")`
    <div class=${r.watermark}>${o}</div>
    <h1 class=${r.title}>${e}</h1>
    <section class=${r.section}>${i}</section>
    <style>${{html:l.toString()}}</style>
  `)}}]);