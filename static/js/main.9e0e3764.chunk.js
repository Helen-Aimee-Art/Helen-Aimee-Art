(this["webpackJsonphelen-aimee-art"]=this["webpackJsonphelen-aimee-art"]||[]).push([[0],{37:function(e,t,a){e.exports=a(61)},42:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n,l=a(0),r=a.n(l),i=a(27),o=a.n(i),c=(a(42),{card:{display:"flex",flexDirection:"column",backgroundColor:"#282c34",color:"#f2f2f2",borderRadius:5,padding:20},content:{}}),s=function(e){var t=e.children;return r.a.createElement("div",{style:c.card},r.a.createElement("div",{style:c.content},t))},m=a(8),u=a(3),f=a(28),d=a.n(f),g={arrow:{width:50,userSelect:"none",opacity:.25,transition:"opacity 0.2s"},imageContainer:{width:200,height:290},image:{width:"100%",height:"100%",objectFit:"cover"}},y=function(e){var t=Object(l.useState)(0),a=Object(u.a)(t,2),n=a[0],i=a[1],o=e.images,c=Object(l.useState)(.25),s=Object(u.a)(c,2),f=s[0],y=s[1],p=Object(l.useState)(.25),h=Object(u.a)(p,2),E=h[0],b=h[1],w=function(){y((function(e){return.25===e?1:.25}))},v=function(){b((function(e){return.25===e?1:.25}))};return r.a.createElement(d.a,{infiniteLoop:!0,activePosition:"center",disableSwipe:!1,slidesToScroll:1,showSlither:!1,firstAndLastGutter:!1,requestToChangeActive:i,activeItemIndex:n,numberOfCards:Math.min(o.length,3),gutter:10,chevronWidth:30,outsideChevron:!0,alwaysShowChevrons:!1,leftChevron:r.a.createElement("img",{style:Object(m.a)({},g.arrow,{opacity:f}),src:"/arrow-left.png",alt:"left arrow",onMouseEnter:w,onMouseLeave:w}),rightChevron:r.a.createElement("img",{style:Object(m.a)({},g.arrow,{opacity:E}),src:"/arrow-right.png",alt:"right arrow",onMouseEnter:v,onMouseLeave:v})},o.map((function(e,t){return r.a.createElement("div",{key:t,style:g.imageContainer},r.a.createElement("img",{src:e.url,style:g.image}))})))},p={container:{marginBottom:20},title:{alignSelf:"center"},content:{display:"flex",width:"100%"},details:{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start",maxWidth:250},carousel:{padding:"0 30px",maxWidth:650,margin:"0 auto"}},h=function(e){var t=e.title,a=e.details,n=e.images;return r.a.createElement("div",{style:p.container},r.a.createElement(s,null,r.a.createElement("div",{style:p.content},r.a.createElement("div",{style:p.details},r.a.createElement("h2",{style:p.title},t),a),r.a.createElement("div",{style:p.carousel},n.length>0&&r.a.createElement(y,{images:n})))))},E=[{url:"/helen-aimee-darkshift-web.jpg",type:"halfbody"},{url:"/new-images-coming-soon.jpg",type:"halfbody"},{url:"/new-images-coming-soon.jpg",type:"halfbody"},{url:"/helen-aimee-neefia.jpg",type:"bust"},{url:"/helen-aimee-kait-diaz.jpg",type:"bust"},{url:"/new-images-coming-soon.jpg",type:"bust"},{url:"/helen-aimee-blue-and-quincy-c.jpg",type:"pet"},{url:"/new-images-coming-soon.jpg",type:"pet"},{url:"/new-images-coming-soon.jpg",type:"pet"}],b={ul:{fontSize:18,display:"flex",flexDirection:"column",padding:0,marginLeft:20},li:{marginBottom:10}},w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{marginTop:0}},"Commission Info"),r.a.createElement(h,{title:"Portrait / Bust",details:r.a.createElement("ul",{style:b.ul},r.a.createElement("li",{style:b.li},"Details go here"),r.a.createElement("li",{style:b.li},"Some more details..."),r.a.createElement("li",{style:b.li},"Price: $60-$100")),images:E.filter((function(e){return"bust"===e.type}))}),r.a.createElement(h,{title:"Half-body",details:r.a.createElement("ul",{style:b.ul},r.a.createElement("li",{style:b.li},"Details go here"),r.a.createElement("li",{style:b.li},"Some more details..."),r.a.createElement("li",{style:b.li},"Price: $150")),images:E.filter((function(e){return"halfbody"===e.type}))}),r.a.createElement(h,{title:"Pet",details:r.a.createElement("ul",{style:b.ul},r.a.createElement("li",{style:b.li},"Details go here"),r.a.createElement("li",{style:b.li},"Some more details..."),r.a.createElement("li",{style:b.li},"Price: Depends on complexity")),images:E.filter((function(e){return"pet"===e.type}))}))},v={footer:{display:"flex",width:"100%",alignItems:"center",justifyContent:"center",color:"#f2f2f2",backgroundColor:"#282c34"},ul:{display:"flex",listStyle:"none",width:"25%",justifyContent:"space-around"},a:{textDecoration:"none",color:"inherit"}},j=function(){return r.a.createElement("footer",{style:v.footer},r.a.createElement("ul",{style:v.ul},r.a.createElement("a",{href:"https://www.instagram.com/helen_aimee.art/",target:"_blank",style:v.a},r.a.createElement("li",null,"Instagram")),r.a.createElement("a",{href:"https://www.deviantart.com/missshazira",target:"_blank",style:v.a},r.a.createElement("li",null,"DeviantArt")),r.a.createElement("a",{href:"https://www.artstation.com/helen_aimee",target:"_blank",style:v.a},r.a.createElement("li",null,"Artstation"))))},x=a(34),k={overlay:{width:"100%",height:"100%",backgroundImage:"linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0) 55%, #282c34)",position:"absolute",top:0,display:"flex",justifyContent:"flex-start",alignItems:"flex-end",transition:"opacity 0.2s"},overlayContent:{color:"#f2f2f2",marginLeft:10,marginBottom:10}},C=function(e){var t=e.open?1:0;return r.a.createElement("div",{style:Object(m.a)({},k.overlay,{opacity:t})},r.a.createElement("div",{style:k.overlayContent},e.title))},I={container:{position:"relative",width:218,height:300,cursor:"pointer"},img:{width:"100%",height:"100%",objectFit:"cover"}},S=function(e){var t=Object(l.useState)(!1),a=Object(u.a)(t,2),n=a[0],i=a[1],o=function(){return i(!n)};return r.a.createElement("div",{style:I.container,onMouseEnter:o,onMouseLeave:o,onMouseDown:function(){return e.openModal(e.id)}},r.a.createElement("img",{src:e.url,alt:e.desc,style:I.img}),r.a.createElement(C,{title:e.title,open:n}))},O={modalContainer:{width:"100vw",height:"100vh",position:"absolute",top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)"},modal:{display:"flex",width:"100vw",height:"100vh",alignItems:"center",justifyContent:"center"},imgContainer:{display:"flex",position:"relative",alignItems:"center",justifyContent:"center"},img:{height:"85vh"},arrow:{position:"absolute",width:50,cursor:"pointer",userSelect:"none",opacity:.25,transition:"opacity 0.2s"}},M=function(e){var t=Object(l.useState)(.25),a=Object(u.a)(t,2),n=a[0],i=a[1],o=Object(l.useState)(.25),c=Object(u.a)(o,2),s=c[0],f=c[1],d=function(){i((function(e){return.25===e?1:.25}))},g=function(){f((function(e){return.25===e?1:.25}))},y=e.currentImage?e.currentImage.url:"";return r.a.createElement("div",{id:"modal-container",style:Object(m.a)({},O.modalContainer,{display:e.open?"block":"none"}),onClick:function(t){return function(t){"modal"===t.target.id&&(e.closeModal(),i(.25),f(.25))}(t)}},r.a.createElement("div",{id:"modal",style:O.modal},r.a.createElement("div",{style:O.imgContainer},r.a.createElement("img",{style:O.img,src:y,alt:""}),e.currentImageId>0&&r.a.createElement("img",{style:Object(m.a)({},O.arrow,{left:0,opacity:n}),src:"/arrow-left.png",alt:"left arrow",onClick:e.decrementModalImage,onMouseEnter:d,onMouseLeave:d}),e.currentImageId<e.numImages&&r.a.createElement("img",{style:Object(m.a)({},O.arrow,{right:0,opacity:s}),src:"/arrow-right.png",alt:"right arrow",onClick:e.incrementModalImage,onMouseEnter:g,onMouseLeave:g}))))},D={select:{backgroundColor:"#282c34",color:"#f2f2f2",border:"1px solid #f2f2f2",borderRadius:5,padding:5,fontSize:"inherit"}},z=function(e){var t=Object(l.useState)(""),a=Object(u.a)(t,2),n=a[0],i=a[1];return r.a.createElement("div",null,r.a.createElement("select",{id:"keywords",style:D.select,placeholder:"Filter Gallery",value:n,onChange:function(t){i(t.target.value),e.setFilter(t.target.value)}},r.a.createElement("option",{value:"",disabled:!0},"Filter Gallery"),e.keywords.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e.charAt(0).toUpperCase()+e.slice(1))}))))},A=[{title:"Darkshift",desc:"",url:"/helen-aimee-darkshift-web.jpg",keywords:["all","warcraft","gaming","fantasy"]},{title:"Neefia",desc:"",url:"/helen-aimee-neefia.jpg",keywords:["all","warcraft","gaming","fantasy"]},{title:"Kait Diaz",desc:"",url:"/helen-aimee-kait-diaz.jpg",keywords:["all","gaming"]},{title:"Juliette",desc:"",url:"/helen-aimee-juliette.jpg",keywords:["all","gaming"]},{title:"Blue and Quincy",desc:"",url:"/helen-aimee-blue-and-quincy-c.jpg",keywords:["all","pets","commissions"]},{title:"Sorceress",desc:"",url:"/helen-aimee-sorceressrgbweb.jpg",keywords:["all","fantasy"]}],F=A.map((function(e){return e.keywords})),L=(n=["all"]).concat.apply(n,Object(x.a)(F)).filter((function(e,t,a){return a.indexOf(e)===t})),B={galleryContainer:{display:"flex",flexDirection:"column"},gallery:{display:"grid",gridTemplate:"1fr / 1fr 1fr 1fr 1fr 1fr",gridAutoFlow:"row",gridGap:10},filterContainer:{alignSelf:"flex-end",marginBottom:5}},G=function(){var e=Object(l.useState)(null),t=Object(u.a)(e,2),a=t[0],n=t[1],i=Object(l.useState)(!1),o=Object(u.a)(i,2),c=o[0],s=o[1],m=Object(l.useState)("all"),f=Object(u.a)(m,2),d=f[0],g=f[1],y=A.filter((function(e){return e.keywords.includes(d)})),p=function(e){n(e),s(!0)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{marginTop:0}},"Gallery"),r.a.createElement("div",{style:B.galleryContainer},r.a.createElement("div",{style:B.filterContainer},r.a.createElement(z,{keywords:L,setFilter:g})),r.a.createElement("div",{style:B.gallery},y.map((function(e,t){return r.a.createElement(S,{key:t,id:t,title:e.title,desc:e.desc,url:e.url,keywords:e.keywords,openModal:p})})),r.a.createElement(M,{open:c,currentImageId:a,currentImage:y[a],numImages:y.length-1,closeModal:function(){n(null),s(!1)},incrementModalImage:function(){return n((function(e){return Math.min(e+1,y.length-1)}))},decrementModalImage:function(){return n((function(e){return Math.max(e-1,0)}))}}))))},P=a(10),H={logo:{flex:1,textAlign:"left"},img:{margin:"0 20px",borderRadius:"50%",width:100},link:{textDecoration:"none",color:"inherit",display:"flex",alignItems:"center"},contact:{fontSize:16,marginLeft:2},h1:{marginBottom:0,fontSize:36}},T=function(){return r.a.createElement("div",{styles:H.logo},r.a.createElement(P.b,{to:"/",style:H.link},r.a.createElement("img",{src:"/helen.jpg",alt:"Helen",style:H.img}),r.a.createElement("div",null,r.a.createElement("h1",{style:H.h1},"Helen Aimee Art"),r.a.createElement("span",{style:H.contact},"example@example.com"))))},_={ul:{listStyle:"none",display:"flex",alignItems:"center",justifyContent:"flex-end",flex:3,padding:0},li:{fontSize:20,marginRight:30},link:{textDecoration:"none",color:"#f2f2f2"}},R=function(){return r.a.createElement("ul",{style:_.ul},r.a.createElement("li",{style:_.li},r.a.createElement(P.b,{to:"/",style:_.link},"Gallery")),r.a.createElement("li",{style:_.li},r.a.createElement(P.b,{to:"/commissioninfo",style:_.link},"Comission Info")))},q={nav:{padding:"20px 0",display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"#282c34",color:"#f2f2f2",width:"100%"},navContent:{display:"flex",width:"65%"}},J=function(){return r.a.createElement("nav",{style:q.nav},r.a.createElement("div",{style:q.navContent},r.a.createElement(T,null),r.a.createElement(R,null)))},W=a(9),$={app:{fontFamily:"Arial, Helvetica, sans-serif",display:"flex",flexDirection:"column",alignItems:"center",minHeight:"100vh",margin:0,padding:0,position:"relative",backgroundImage:"linear-gradient(45deg, #ffffff 25%, #fafafa 25%, #fafafa 50%, #ffffff 50%, #ffffff 75%, #fafafa 75%, #fafafa 100%)",backgroundSize:"56.57px 56.57px"},main:{display:"flex",flexDirection:"column",alignItems:"center",width:"65%",flex:1,margin:"20px 0"}};o.a.render(r.a.createElement((function(){return r.a.createElement(P.a,null,r.a.createElement("div",{style:$.app},r.a.createElement(J,null),r.a.createElement("div",{style:$.main},r.a.createElement(W.c,null,r.a.createElement(W.a,{path:"/commissioninfo",render:function(){return r.a.createElement(w,null)}}),r.a.createElement(W.a,{path:"/",render:function(){return r.a.createElement(G,null)}}))),r.a.createElement(j,null)))}),null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.9e0e3764.chunk.js.map