(this["webpackJsonphelen-aimee-art"]=this["webpackJsonphelen-aimee-art"]||[]).push([[0],{38:function(e,t,n){e.exports=n(64)},43:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a,l=n(0),r=n.n(l),i=n(27),o=n.n(i),c=(n(43),n(4)),s=n(1),m=n(28),u=n.n(m),d={arrow:{width:50,userSelect:"none",opacity:.25,transition:"opacity 0.2s"},imageContainer:{width:200,height:290},image:{width:"100%",height:"100%",objectFit:"cover"}},g=function(e){var t=Object(l.useState)(0),n=Object(s.a)(t,2),a=n[0],i=n[1],o=e.images,m=Object(l.useState)(.25),g=Object(s.a)(m,2),f=g[0],p=g[1],y=Object(l.useState)(.25),h=Object(s.a)(y,2),b=h[0],E=h[1],v=function(){p((function(e){return.25===e?1:.25}))},w=function(){E((function(e){return.25===e?1:.25}))};return r.a.createElement(u.a,{infiniteLoop:!0,activePosition:"center",disableSwipe:!1,slidesToScroll:1,showSlither:!1,firstAndLastGutter:!1,requestToChangeActive:i,activeItemIndex:a,numberOfCards:Math.min(o.length,3),gutter:10,chevronWidth:30,outsideChevron:!0,alwaysShowChevrons:!1,leftChevron:r.a.createElement("img",{style:Object(c.a)({},d.arrow,{opacity:f}),src:"/arrow-left.png",alt:"left arrow",onMouseEnter:v,onMouseLeave:v}),rightChevron:r.a.createElement("img",{style:Object(c.a)({},d.arrow,{opacity:b}),src:"/arrow-right.png",alt:"right arrow",onMouseEnter:w,onMouseLeave:w})},o.map((function(e,t){return r.a.createElement("div",{key:t,style:d.imageContainer},r.a.createElement("img",{src:e.url,style:d.image,alt:e.title}))})))},f={title:{alignSelf:"center"},content:{display:"flex",justifyContent:"space-between"},details:{maxWidth:485},carousel:{padding:"0 25px",maxWidth:650}},p=function(e){var t=e.title,n=e.details,a=e.images;return r.a.createElement("div",{style:f.content},r.a.createElement("div",{style:f.details},t&&r.a.createElement("h2",{style:f.title},t),n),r.a.createElement("div",{style:f.carousel},a.length>0&&r.a.createElement(g,{images:a})))},y=function(e){var t=e.title,n=e.children,a=e.defaultOpen,i=Object(l.useState)(a||!1),o=Object(s.a)(i,2),c=o[0],m=o[1],u=function(e,t){return{root:{width:"100%",display:"flex",flexDirection:"column",userSelect:"none",margin:"10px 0"},bar:{width:"100%",height:50,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",backgroundColor:"#1F2833",color:"#F2F2F2",padding:"0px 25px",borderTopLeftRadius:5,borderTopRightRadius:5,borderBottomLeftRadius:t?0:5,borderBottomRightRadius:t?0:5,cursor:"pointer",boxSizing:"border-box",transition:"border-radius 0s",transitionDelay:t?"0s":"0.15s"},content:{width:"100%",padding:"".concat(t?25:0,"px 25px"),backgroundColor:"#1F2833",color:"#F2F2F2",maxHeight:t?350:0,transition:"max-height 0.15s, padding 0.15s",overflow:"hidden",boxSizing:"border-box",borderBottomLeftRadius:5,borderBottomRightRadius:5},arrow:{width:25,transform:"rotate(".concat(t?180:0,"deg)"),transition:"transform 0.1s"}}}(0,c);return r.a.createElement("div",{style:u.root},r.a.createElement("div",{style:u.bar,onClick:function(){return m(!c)}},r.a.createElement("h3",null,t),r.a.createElement("img",{style:u.arrow,src:"/down-arrow.png",alt:"down arrow"})),r.a.createElement("div",{style:u.content},n))},h=[{url:"/helen-aimee-darkshift-web.jpg",type:"halfbody"},{url:"/new-images-coming-soon.jpg",type:"halfbody"},{url:"/new-images-coming-soon.jpg",type:"halfbody"},{url:"/helen-aimee-serana.jpg",type:"bust"},{url:"/helen-aimee-flameleaf.jpg",type:"bust"},{url:"/helen-aimee-neefia.jpg",type:"bust"},{url:"/helen-aimee-ribbon.jpg",type:"bust"},{url:"/helen-aimee-blue-and-quincy-c.jpg",type:"pet"},{url:"/new-images-coming-soon.jpg",type:"pet"},{url:"/new-images-coming-soon.jpg",type:"pet"}],b={ul:{fontSize:18},li:{marginBottom:10}},E=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{marginTop:0}},"Commission Info"),r.a.createElement(y,{title:"Portrait / Bust",defaultOpen:!0},r.a.createElement(p,{details:r.a.createElement("ul",{style:b.ul},r.a.createElement("li",{style:b.li},"Details go here"),r.a.createElement("li",{style:b.li},"Some more details go here..."),r.a.createElement("li",{style:b.li},"Price: $75-$100")),images:h.filter((function(e){return"bust"===e.type}))})),r.a.createElement(y,{title:"Half-body",defaultOpen:!0},r.a.createElement(p,{details:r.a.createElement("ul",{style:b.ul},r.a.createElement("li",{style:b.li},"Details go here"),r.a.createElement("li",{style:b.li},"Some more details go here..."),r.a.createElement("li",{style:b.li},"Price: $150")),images:h.filter((function(e){return"halfbody"===e.type}))})),r.a.createElement(y,{title:"Pet",defaultOpen:!0},r.a.createElement(p,{details:r.a.createElement("ul",{style:b.ul},r.a.createElement("li",{style:b.li},"Details go here"),r.a.createElement("li",{style:b.li},"Some more details go here..."),r.a.createElement("li",{style:b.li},"Price: Depends on complexity")),images:h.filter((function(e){return"pet"===e.type}))})))},v=n(32),w=n.n(v),j={card:{display:"flex",flexDirection:"column",backgroundColor:"#1F2833",color:"#f2f2f2",borderRadius:5,padding:20},content:{}},x=function(e){var t=e.children;return r.a.createElement("div",{style:j.card},r.a.createElement("div",{style:j.content},t))},C={clickAway:{position:"absolute",display:"flex",width:"100vw",height:"100vh",alignItems:"center",justifyContent:"center",top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)"},title:{margin:0,marginBottom:5},content:{margin:0},dialog:{display:"flex",flexDirection:"column",backgroundColor:"#1F2833",color:"#f2f2f2",borderRadius:5,padding:20},actions:{}},k=function(e){var t=e.open,n=e.onClose,a=e.title,l=e.content,i=e.actions;return r.a.createElement("div",{style:Object(c.a)({},C.clickAway,{display:!0===t?"flex":"none"}),onClick:n},r.a.createElement("div",{style:C.dialog},a&&r.a.createElement("h3",{style:C.title},a),r.a.createElement("p",{style:C.content},l),r.a.createElement("div",{style:C.actions},i)))},O={form:{display:"flex",flexDirection:"column",width:500},input:{marginBottom:10,padding:10,borderRadius:5},button:{width:75,padding:10,alignSelf:"flex-end"}},S=function(){var e=Object(l.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(l.useState)(""),o=Object(s.a)(i,2),m=o[0],u=o[1],d=Object(l.useState)(""),g=Object(s.a)(d,2),f=g[0],p=g[1],y=Object(l.useState)(""),h=Object(s.a)(y,2),b=h[0],E=h[1],v=Object(l.useState)(!1),j=Object(s.a)(v,2),C=j[0],S=j[1],I=function(){a(""),u(""),p(""),E("")};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{marginTop:0}},"Contact"),r.a.createElement(x,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),w.a.sendForm("gmail","contact_form",e.target,"user_RNW5pFEn3BiHTgbZe0dlG").then((function(e){console.log(e),I(),S(!0)}),(function(e){console.error(e)}))},style:O.form},r.a.createElement("input",{type:"text",name:"name",value:n,onChange:function(e){return a(e.target.value)},placeholder:"Enter your name",style:O.input,autoComplete:"off",required:!0}),r.a.createElement("input",{type:"text",name:"email",value:m,onChange:function(e){return u(e.target.value)},placeholder:"Enter your Email address",style:O.input,autoComplete:"off",required:!0}),r.a.createElement("select",{name:"subject",value:f,onChange:function(e){return p(e.target.value)},style:O.input,required:!0},r.a.createElement("option",{value:"",disabled:!0},"Choose a subject"),r.a.createElement("option",{value:"question"},"Question"),r.a.createElement("option",{value:"comment"},"Comment"),r.a.createElement("option",{value:"commission_request"},"Commission Request"),r.a.createElement("option",{value:"other"},"Other")),r.a.createElement("textarea",{name:"message",value:b,onChange:function(e){return E(e.target.value)},placeholder:"Enter your message",rows:"8",maxLength:"480",style:Object(c.a)({},O.input,{resize:"none"}),autoComplete:"off",required:!0}),r.a.createElement("input",{type:"submit",value:"Submit",style:O.button}))),r.a.createElement(k,{content:"Message Sent!",open:C,onClose:function(){return S(!1)}}),r.a.createElement("hr",null))},I={footer:{display:"flex",width:"100%",alignItems:"center",justifyContent:"center",color:"#f2f2f2",backgroundColor:"#1F2833"},ul:{display:"flex",listStyle:"none",width:"25%",justifyContent:"space-around"},a:{textDecoration:"none",color:"inherit"}},F=function(){return r.a.createElement("footer",{style:I.footer},r.a.createElement("ul",{style:I.ul},r.a.createElement("a",{href:"https://www.instagram.com/helen_aimee.art/",target:"_blank",style:I.a},r.a.createElement("li",null,"Instagram")),r.a.createElement("a",{href:"https://www.deviantart.com/missshazira",target:"_blank",style:I.a},r.a.createElement("li",null,"DeviantArt")),r.a.createElement("a",{href:"https://www.artstation.com/helen_aimee",target:"_blank",style:I.a},r.a.createElement("li",null,"Artstation"))))},M=n(35),D={overlay:{width:"100%",height:"100%",backgroundImage:"linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0) 55%, #282c34)",position:"absolute",top:0,display:"flex",justifyContent:"flex-start",alignItems:"flex-end",transition:"opacity 0.2s"},overlayContent:{color:"#f2f2f2",marginLeft:10,marginBottom:10}},R=function(e){var t=e.open?1:0;return r.a.createElement("div",{style:Object(c.a)({},D.overlay,{opacity:t})},r.a.createElement("div",{style:D.overlayContent},e.title))},B={container:{position:"relative",width:218,height:300,cursor:"pointer"},img:{width:"100%",height:"100%",objectFit:"cover"}},z=function(e){var t=Object(l.useState)(!1),n=Object(s.a)(t,2),a=n[0],i=n[1],o=function(){return i(!a)};return r.a.createElement("div",{style:B.container,onMouseEnter:o,onMouseLeave:o,onMouseDown:function(){return e.openModal(e.id)}},r.a.createElement("img",{src:e.url,alt:e.desc,style:B.img}),r.a.createElement(R,{title:e.title,open:a}))},L={modalContainer:{width:"100vw",height:"100vh",position:"absolute",top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)"},modal:{display:"flex",width:"100vw",height:"100vh",alignItems:"center",justifyContent:"center"},imgContainer:{display:"flex",position:"relative",alignItems:"center",justifyContent:"center"},img:{height:"85vh"},arrow:{position:"absolute",width:50,cursor:"pointer",userSelect:"none",opacity:.25,transition:"opacity 0.2s"}},A=function(e){var t=Object(l.useState)(.25),n=Object(s.a)(t,2),a=n[0],i=n[1],o=Object(l.useState)(.25),m=Object(s.a)(o,2),u=m[0],d=m[1],g=function(){i((function(e){return.25===e?1:.25}))},f=function(){d((function(e){return.25===e?1:.25}))},p=e.currentImage?e.currentImage.url:"";return r.a.createElement("div",{id:"modal-container",style:Object(c.a)({},L.modalContainer,{display:e.open?"block":"none"}),onClick:function(t){return function(t){"modal"===t.target.id&&(e.closeModal(),i(.25),d(.25))}(t)}},r.a.createElement("div",{id:"modal",style:L.modal},r.a.createElement("div",{style:L.imgContainer},r.a.createElement("img",{style:L.img,src:p,alt:""}),e.currentImageId>0&&r.a.createElement("img",{style:Object(c.a)({},L.arrow,{left:0,opacity:a}),src:"/arrow-left.png",alt:"left arrow",onClick:e.decrementModalImage,onMouseEnter:g,onMouseLeave:g}),e.currentImageId<e.numImages&&r.a.createElement("img",{style:Object(c.a)({},L.arrow,{right:0,opacity:u}),src:"/arrow-right.png",alt:"right arrow",onClick:e.incrementModalImage,onMouseEnter:f,onMouseLeave:f}))))},q={select:{backgroundColor:"#282c34",color:"#f2f2f2",border:"1px solid #f2f2f2",borderRadius:5,padding:5,fontSize:"inherit"}},T=function(e){var t=Object(l.useState)(""),n=Object(s.a)(t,2),a=n[0],i=n[1];return r.a.createElement("div",null,r.a.createElement("select",{id:"keywords",style:q.select,placeholder:"Filter Gallery",value:a,onChange:function(t){i(t.target.value),e.setFilter(t.target.value)}},r.a.createElement("option",{value:"",disabled:!0},"Filter Gallery"),e.keywords.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e.charAt(0).toUpperCase()+e.slice(1))}))))},_=[{title:"Serana",desc:"",url:"/helen-aimee-serana.jpg",keywords:["all","skyrim","gaming","fantasy"]},{title:"Ribbon",desc:"",url:"/helen-aimee-ribbon.jpg",keywords:["all","warcraft","gaming","fantasy"]},{title:"Flameleaf",desc:"",url:"/helen-aimee-flameleaf.jpg",keywords:["all","warcraft","gaming","fantasy"]},{title:"Darkshift",desc:"",url:"/helen-aimee-darkshift-web.jpg",keywords:["all","warcraft","gaming","fantasy"]},{title:"Neefia",desc:"",url:"/helen-aimee-neefia.jpg",keywords:["all","warcraft","gaming","fantasy"]},{title:"Kait Diaz",desc:"",url:"/helen-aimee-kait-diaz.jpg",keywords:["all","gaming"]},{title:"Juliette",desc:"",url:"/helen-aimee-juliette.jpg",keywords:["all","gaming"]},{title:"Blue and Quincy",desc:"",url:"/helen-aimee-blue-and-quincy-c.jpg",keywords:["all","pets","commissions"]},{title:"Sorceress",desc:"",url:"/helen-aimee-sorceressrgbweb.jpg",keywords:["all","fantasy"]}],G=_.map((function(e){return e.keywords})),H=(a=["all"]).concat.apply(a,Object(M.a)(G)).filter((function(e,t,n){return n.indexOf(e)===t})),P={galleryContainer:{display:"flex",flexDirection:"column"},gallery:{display:"grid",gridTemplate:"1fr / 1fr 1fr 1fr 1fr 1fr",gridAutoFlow:"row",gridGap:10},filterContainer:{alignSelf:"flex-end",marginBottom:5}},W=function(){var e=Object(l.useState)(null),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(l.useState)(!1),o=Object(s.a)(i,2),c=o[0],m=o[1],u=Object(l.useState)("all"),d=Object(s.a)(u,2),g=d[0],f=d[1],p=_.filter((function(e){return e.keywords.includes(g)})),y=function(e){a(e),m(!0)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{marginTop:0}},"Gallery"),r.a.createElement("div",{style:P.galleryContainer},r.a.createElement("div",{style:P.filterContainer},r.a.createElement(T,{keywords:H,setFilter:f})),r.a.createElement("div",{style:P.gallery},p.map((function(e,t){return r.a.createElement(z,{key:t,id:t,title:e.title,desc:e.desc,url:e.url,keywords:e.keywords,openModal:y})})),r.a.createElement(A,{open:c,currentImageId:n,currentImage:p[n],numImages:p.length-1,closeModal:function(){a(null),m(!1)},incrementModalImage:function(){return a((function(e){return Math.min(e+1,p.length-1)}))},decrementModalImage:function(){return a((function(e){return Math.max(e-1,0)}))}}))))},J=n(9),$={logo:{flex:1,textAlign:"left"},img:{margin:"0 20px",borderRadius:"50%",width:100},link:{textDecoration:"none",color:"inherit",display:"flex",alignItems:"center"},contact:{fontSize:16,marginLeft:2},h1:{marginBottom:0,fontSize:36}},N=function(){return r.a.createElement("div",{styles:$.logo},r.a.createElement(J.b,{to:"/",style:$.link},r.a.createElement("img",{src:"/helen.jpg",alt:"Helen",style:$.img}),r.a.createElement("div",null,r.a.createElement("h1",{style:$.h1},"Helen Aimee Art"),r.a.createElement("span",{style:$.contact},"helen.aimee.art@gmail.com"))))},Q={ul:{listStyle:"none",display:"flex",alignItems:"center",justifyContent:"flex-end",flex:3,padding:0},li:{fontSize:20,marginRight:30},link:{textDecoration:"none",color:"#f2f2f2"}},K=function(){return r.a.createElement("ul",{style:Q.ul},r.a.createElement("li",{style:Q.li},r.a.createElement(J.b,{to:"/",style:Q.link},"Gallery")),r.a.createElement("li",{style:Q.li},r.a.createElement(J.b,{to:"/commissioninfo",style:Q.link},"Comission Info")),r.a.createElement("li",{style:Q.li},r.a.createElement(J.b,{to:"/contact",style:Q.link},"Contact")))},U={nav:{padding:"20px 0",display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"#1F2833",color:"#f2f2f2",width:"100%"},navContent:{display:"flex",width:"65%"}},Z=function(){return r.a.createElement("nav",{style:U.nav},r.a.createElement("div",{style:U.navContent},r.a.createElement(N,null),r.a.createElement(K,null)))},V=n(10),X={app:{fontFamily:"Arial, Helvetica, sans-serif",display:"flex",flexDirection:"column",alignItems:"center",minHeight:"100vh",margin:0,padding:0,position:"relative",backgroundColor:"#F2F2F2",backgroundSize:"56.57px 56.57px",boxSizing:"border-box"},main:{display:"flex",flexDirection:"column",alignItems:"center",width:"65%",flex:1,margin:"20px 0"}};o.a.render(r.a.createElement((function(){return r.a.createElement(J.a,null,r.a.createElement("div",{style:X.app},r.a.createElement(Z,null),r.a.createElement("div",{style:X.main},r.a.createElement(V.c,null,r.a.createElement(V.a,{path:"/commissioninfo",render:function(){return r.a.createElement(E,null)}}),r.a.createElement(V.a,{path:"/contact",render:function(){return r.a.createElement(S,null)}}),r.a.createElement(V.a,{path:"/",render:function(){return r.a.createElement(W,null)}}))),r.a.createElement(F,null)))}),null),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.edff51ec.chunk.js.map