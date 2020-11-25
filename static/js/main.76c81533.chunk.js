(this["webpackJsonphelen-aimee-art"]=this["webpackJsonphelen-aimee-art"]||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n,r=a(0),l=a.n(r),i=a(11),o=a.n(i),c=(a(82),a(15)),s=a(4),u=Object(s.b)((function(e){return{content:{textAlign:"left",width:function(e){return e?"75%":"100%"}},images:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},image:function(t){return{display:"block",height:t?150:75,width:t?150:75,borderRadius:"50%",margin:10,border:"5px solid",borderColor:e.colorTertiary}},ul:{display:"flex",listStyle:"none",margin:0,padding:0},li:{display:"flex",alignItems:"center",justifyContent:"center",padding:10,margin:0},a:{textDecoration:"none",color:"inherit"}}})),m=function(e){var t=e.isDesktop,a=e.setCurrentPage,n=Object(s.c)(),i=u(t,{theme:n});Object(r.useEffect)((function(){a("about")}),[a]);var o=(new Date).getFullYear()-1993;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:i.content},l.a.createElement("p",null,"My name is Helen and I am a ",o," year old Digital Artist living in Plymouth, England with my partner and my pet cat Buttons. I have been drawing for as long as I can remember. My passions are painting fantasy portraits and pet portraits."),l.a.createElement("p",null,"I did my A levels at art college and I also have a BA (Hons) degree in Game Design. I am now focussing on freelance commissioned work."),l.a.createElement("p",null,"Thank you for your interest in my art, I hope you have a great day!"),l.a.createElement("div",{className:i.images},l.a.createElement("img",{src:"/helen.jpg",alt:"Helen",className:i.image}),l.a.createElement("img",{src:"/buttons.jpg",alt:"Buttons",className:i.image}))))},d=a(62),h=a.n(d),p=Object(s.b)((function(e){return{arrow:{width:50,userSelect:"none",opacity:.25,transition:"opacity 0.2s","&:hover":{opacity:1}},imageContainer:function(e){return{width:200,height:290}},image:{width:"100%",height:"100%",objectFit:"cover"}}})),g=function(e){var t=e.images,a=e.isDesktop,n=Object(s.c)(),i=p(a,{theme:n}),o=Object(r.useState)(0),u=Object(c.a)(o,2),m=u[0],d=u[1];return l.a.createElement(h.a,{infiniteLoop:!0,activePosition:"center",disableSwipe:!1,slidesToScroll:1,showSlither:!a,firstAndLastGutter:!a,requestToChangeActive:d,activeItemIndex:m,numberOfCards:a?Math.min(t.length,3):2,gutter:10,chevronWidth:30,outsideChevron:!0,alwaysShowChevrons:!1,leftChevron:l.a.createElement("img",{className:i.arrow,src:"/arrow-left.png",alt:"left arrow"}),rightChevron:l.a.createElement("img",{className:i.arrow,src:"/arrow-right.png",alt:"right arrow"})},t.map((function(e,t){return l.a.createElement("div",{key:t,className:i.imageContainer},l.a.createElement("img",{src:e.url,className:i.image,alt:e.title}))})))},f=Object(s.b)((function(e){return{title:{alignSelf:"center"},content:function(e){return{display:"flex",justifyContent:"space-between",flexDirection:e?"row":"column"}},details:{maxWidth:485,alignSelf:"flex-start"},carousel:{padding:"0 25px",maxWidth:650}}})),b=function(e){var t=e.title,a=e.details,n=e.images,r=e.isDesktop,i=Object(s.c)(),o=f(r,{theme:i});return l.a.createElement("div",{className:o.content},l.a.createElement("div",{className:o.details},t&&l.a.createElement("h2",{className:o.title},t),a),l.a.createElement("div",{className:o.carousel},n.length>0&&l.a.createElement(g,{images:n,isDesktop:e.isDesktop})))},y=Object(s.b)((function(e){return{root:{width:"100%",display:"flex",flexDirection:"column",userSelect:"none",margin:"10px 0"},bar:function(t){var a=t.open;return{width:"100%",height:50,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",backgroundColor:e.colorPrimary,color:e.colorSecondary,padding:"0px 25px",borderTopLeftRadius:5,borderTopRightRadius:5,borderBottomLeftRadius:a?0:5,borderBottomRightRadius:a?0:5,cursor:"pointer",boxSizing:"border-box",transition:"border-radius 0s",transitionDelay:a?"0s":"0.15s"}},content:function(t){var a=t.open;return{width:"100%",padding:"".concat(a?25:0,"px 25px"),backgroundColor:e.colorPrimary,color:e.colorSecondary,maxHeight:a?700:0,transition:"max-height 0.15s, padding 0.15s",overflow:"hidden",boxSizing:"border-box",borderBottomLeftRadius:5,borderBottomRightRadius:5}},arrow:function(e){var t=e.open;return{width:25,transform:"rotate(".concat(t?180:0,"deg)"),transition:"transform 0.1s"}}}})),w=function(e){var t=e.title,a=e.children,n=e.defaultOpen,i=Object(r.useState)(n||!1),o=Object(c.a)(i,2),u=o[0],m=o[1],d=Object(s.c)(),h=y({open:u,theme:d});return l.a.createElement("div",{className:h.root},l.a.createElement("div",{className:h.bar,onClick:function(){return m(!u)}},l.a.createElement("h3",null,t),l.a.createElement("img",{className:h.arrow,src:"/down-arrow.png",alt:"down arrow"})),l.a.createElement("div",{className:h.content},a))},E=[{url:"/helen-aimee-darkshift-web.jpg",type:"halfbody"},{url:"/helen-aimee-saethyra-both.jpg",type:"halfbody"},{url:"/helen-aimee-whitemane.jpg",type:"halfbody"},{url:"/helen-aimee-akleja.jpg",type:"bust"},{url:"/helen-aimee-serana.jpg",type:"bust"},{url:"/helen-aimee-flameleaf.jpg",type:"bust"},{url:"/helen-aimee-neefia.jpg",type:"bust"},{url:"/helen-aimee-ribbon.jpg",type:"bust"},{url:"/helen-aimee-blue-and-quincy-c.jpg",type:"pet"},{url:"/helen-aimee-willow.jpg",type:"pet"},{url:"/helen-aimee-buttons.jpg",type:"pet"}],k=Object(s.b)((function(e){return{cardul:{fontSize:18},li:{marginBottom:10}}})),v=function(e){var t=e.isDesktop,a=e.setCurrentPage,n=Object(s.c)(),i=k(t,{theme:n});return Object(r.useEffect)((function(){a("commissioninfo")}),[a]),l.a.createElement(l.a.Fragment,null,l.a.createElement(w,{title:"Portrait / Bust",defaultOpen:t},l.a.createElement(b,{details:l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{className:i.cardul},"\xa374 - \xa394*"),l.a.createElement("p",{className:i.cardul},"Options:"),l.a.createElement("ul",{className:i.cardul},l.a.createElement("li",{className:i.li},"Head to bust"),l.a.createElement("li",{className:i.li},"Head to waist"),l.a.createElement("li",{className:i.li},"Head to waist (pinup/NSFW)"))),images:E.filter((function(e){return"bust"===e.type})),isDesktop:t})),l.a.createElement(w,{title:"Half-body",defaultOpen:t},l.a.createElement(b,{details:l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{className:i.cardul},"\xa3140*"),l.a.createElement("p",{className:i.cardul},"Options:"),l.a.createElement("ul",{className:i.cardul},l.a.createElement("li",{className:i.li},"Head to thigh (just above the knee)"),l.a.createElement("li",{className:i.li},"Head to thigh (pinup/NSFW)"))),images:E.filter((function(e){return"halfbody"===e.type})),isDesktop:t})),l.a.createElement("div",null,l.a.createElement("p",{style:{textAlign:"left",marginTop:0}},"*Simple backgrounds are included in the price, at this time I am not offering more complicated backgrounds.",l.a.createElement("br",null),"*Adding additional characters will increase the cost by 80%.",l.a.createElement("br",null),"*Small pets can be included but will increase the price by 30%."),l.a.createElement("h2",null,"Process"),l.a.createElement("p",null,"If you are interested in a commission, please email me with the below information (or submit this through the online form). The number of projects I take on will vary, I will email you with confirmation if I am available to take on the project."),l.a.createElement("ul",null,l.a.createElement("li",null,"Contact email address for updates and for the invoices"),l.a.createElement("li",null,"Your name and the name of your character(s)"),l.a.createElement("li",null,"Commission type"),l.a.createElement("li",null,"Physical description of your character(s), including race, age etc. (any reference pictures are appreciated)"),l.a.createElement("li",null,"Character(s) personality")),l.a.createElement("p",null,"Once we have agreed the outline, I will send you a rough sketch for approval. If you are happy with the sketch I will send a Paypal invoice for 50% of the total fee to your email. Once the invoice has been paid I will continue working on your project; I will send updates throughout the process where you can ask for minor changes. Once completed, I will send a low resolution JPEG of the final piece and if you are happy I will send the final invoice for the remaining amount. When the payment has been recieved I will send the high resolution JPEG."),l.a.createElement("h2",null,"Pinup / NSFW varients"),l.a.createElement("ul",null,l.a.createElement("li",null,"Pinup / NSFW varients are available for the portrait and half body commission options"),l.a.createElement("li",null,"These can either be nude or underwear/lingerie. However if you choose the nude version I will also include a lingerie version (this will be included within the price at no extra cost)"),l.a.createElement("li",null,"All pinup / NSFW characters must be at least 18 years old"),l.a.createElement("li",null,"Please be aware that this is a pinup option, so it will not be explicit NSFW"),l.a.createElement("li",null,"I will not be accepting explicit NSFW commissions")),l.a.createElement("h2",null,"Terms and conditions"),l.a.createElement("p",null,"I have the right to decline a commission request."),l.a.createElement("h3",null,"Copyright & Ownership"),l.a.createElement("ul",null,l.a.createElement("li",null,"I will retain copyright to the artwork. You are not permitted to change or resell the artwork"),l.a.createElement("li",null,"I have the right to use the artwork in my portfolio, social media and to sell prints"),l.a.createElement("li",null,"You have the right to use the artwork for personal use only. (Eg. prints for your wall, profile pictures and displaying online with credit)"),l.a.createElement("li",null,"I have the right to make a process video and publish it on my Youtube channel"),l.a.createElement("li",null,"You retain ownership of your original character(s) if depicted in the artwork")),l.a.createElement("h3",null,"Revisions & Payment"),l.a.createElement("ul",null,l.a.createElement("li",null,"Any major revisions must be agreed before the sketch is approved, after this stage any major adjustments will be charged. You may request up to three minor changes throughout the process, after this any minor changes may be charged."),l.a.createElement("li",null,"Payment must be made through Paypal once I send you the invoices"),l.a.createElement("li",null,"If for any reason I cannot complete your project, you will receive a refund for the full cost through Paypal"))))},j=a(133),C=a(134),x=a(135),O=Object(s.b)((function(e){return{container:{padding:"0 5px"},a:{textDecoration:"none",color:"inherit",display:"flex",alignItems:"center",justifyContent:"center",borderWidth:"1px",borderStyle:"solid",width:50,height:50,fontSize:15,margin:0,borderRadius:"50%","&:hover":{color:e.colorTertiary,borderColor:e.colorTertiary}}}})),N=function(e){var t=Object(s.c)(),a=O(t);return l.a.createElement("div",{className:a.container,title:e.title},l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:a.a},e.children?e.children:e.link.charAt(12).toUpperCase()))},S=a(71),I=Object(s.b)((function(e){return{socials:{display:"flex"},icon:{width:"100%",height:"100%",color:"red"}}})),D=function(e){return l.a.createElement(S.a,e,l.a.createElement("path",{fill:"currentColor",d:"M6,6H12L14,2H18V6L14.5,13H18V18H12L10,22H6V18L9.5,11H6V6Z"}))},P=function(e){return l.a.createElement(S.a,e,l.a.createElement("path",{fill:"currentColor",d:"M1.77,16.88L3.5,19.86C3.84,20.54 4.54,21 5.33,21H16.79L14.43,16.88H1.77M22.23,16.9C22.23,16.5 22.11,16.11 21.9,15.78L15.17,4.1C14.82,3.44 14.15,3 13.35,3H9.8L20.18,21L21.82,18.14C22.13,17.6 22.23,17.36 22.23,16.9M12.73,13.94L8.1,5.92L3.45,13.94H12.73Z"}))},L=function(e){var t=Object(s.c)(),a=I(t);return l.a.createElement("div",{className:a.socials},l.a.createElement(N,{link:"https://www.twitter.com/helenaimee1/",title:"Twitter"},l.a.createElement(j.a,null)),l.a.createElement(N,{link:"https://www.instagram.com/helen_aimee.art/",title:"Instagram"},l.a.createElement(C.a,null)),l.a.createElement(N,{link:"https://www.deviantart.com/missshazira",title:"DeviantArt"},l.a.createElement(D,null)),l.a.createElement(N,{link:"https://www.artstation.com/helen_aimee",title:"ArtStation"},l.a.createElement(P,null)),l.a.createElement(N,{link:"https://www.youtube.com/channel/UCsJn3W5RUnKKQKwHiMbiFKA",title:"YouTube"},l.a.createElement(x.a,null)))},F=Object(s.b)((function(e){return{footer:{display:"flex",width:"100%",alignItems:"center",justifyContent:"center",color:e.colorSecondary,backgroundColor:e.colorPrimary,height:80,borderTop:"3px solid",borderTopColor:e.colorTertiary}}})),H=function(e){var t=Object(s.c)(),a=F(t);return l.a.createElement("footer",{className:a.footer},l.a.createElement(L,null))},M=a(68),T=Object(s.b)((function(e){return{gallery:{display:"grid",gridTemplate:function(e){return e?"1fr / 1fr 1fr 1fr 1fr 1fr":"1fr / 1fr 1fr 1fr"},gridAutoFlow:"row",gridGap:10}}})),A=function(e){var t=e.isDesktop,a=Object(s.c)(),n=T(t,{theme:a});return l.a.createElement("div",{className:n.gallery},e.children)},B=Object(s.b)((function(e){return{overlay:function(e){return{width:"100%",height:"100%",backgroundImage:"linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0) 55%, #282c34)",position:"absolute",top:0,display:"flex",justifyContent:"flex-start",alignItems:"flex-end",transition:"opacity 0.2s",opacity:e.opacity}},overlayContent:{color:"#f2f2f2",marginLeft:10,marginBottom:10}}})),z=function(e){var t=Object(s.c)(),a=e.open?1:0,n=B({opacity:a,theme:t});return l.a.createElement("div",{className:n.overlay},l.a.createElement("div",{className:n.overlayContent},e.title))},R=Object(s.b)((function(e){return{container:function(e){return{position:"relative",width:e?218:109,height:e?300:150,cursor:"pointer"}},img:{width:"100%",height:"100%",objectFit:"cover"}}})),W=function(e){var t=e.isDesktop,a=Object(s.c)(),n=R(t,{theme:a}),i=Object(r.useState)(!1),o=Object(c.a)(i,2),u=o[0],m=o[1],d=function(){return m(!u)};return l.a.createElement("div",{className:n.container,onMouseEnter:d,onMouseLeave:d,onMouseDown:function(){return e.openModal(e.id)}},l.a.createElement("img",{src:e.url,alt:e.desc,className:n.img}),l.a.createElement(z,{title:e.title,open:u}))},G=Object(s.b)((function(e){return{modalContainer:function(e){return{width:"100%",height:"100%",position:"fixed",top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.9)",display:e.open?"block":"none",zIndex:2}},modal:{display:"flex",width:"100%",height:"100%",alignItems:"center",position:"relative",justifyContent:"center"},imgContainer:{display:"flex",alignItems:"center",justifyContent:"center"},img:{height:"85vh",position:"absolute"},arrow:{position:"absolute",width:75,userSelect:"none",opacity:.25,transition:"opacity 0.2s",backgroundColor:"black"},cross:{position:"absolute",width:35,height:35,userSelect:"none",opacity:.5,transition:"opacity 0.2s",backgroundColor:"black",right:0,top:0,borderRadius:"50%"}}})),Y=function(e){var t=e.closeModal,a=e.currentImage,n=e.currentImageId,i=e.decrementModalImage,o=e.incrementModalImage,u=e.numImages,m=e.open,d=Object(s.c)(),h=G({open:m,theme:d}),p=Object(r.useState)(!1),g=Object(c.a)(p,2),f=g[0],b=g[1],y=Object(r.useState)(!1),w=Object(c.a)(y,2),E=w[0],k=w[1];Object(r.useEffect)((function(){0===n&&b(!1),n===u&&k(!1)}),[n,u]);var v=a?a.url:"";return l.a.createElement("div",{id:"modal-container",className:h.modalContainer,onClick:function(e){return function(e){"modal"===e.target.id&&t()}(e)}},l.a.createElement("div",{id:"modal",className:h.modal},l.a.createElement("div",{className:h.imgContainer},l.a.createElement("img",{className:h.img,src:v,alt:""}),l.a.createElement("img",{className:h.arrow,style:{left:5,opacity:f?1:.25,cursor:f?"pointer":"default"},src:"/arrow-left.png",alt:"left arrow",onClick:n>0&&i,onMouseEnter:n>0&&function(){return b(!f)},onMouseLeave:n>0&&function(){return b(!f)}}),l.a.createElement("img",{className:h.arrow,style:{right:5,opacity:E?1:.25,cursor:E?"pointer":"default"},src:"/arrow-right.png",alt:"right arrow",onClick:n<u&&o,onMouseEnter:n<u&&function(){return k(!E)},onMouseLeave:n<u&&function(){return k(!E)}}),l.a.createElement("img",{src:"/cross.png",alt:"cross",className:h.cross,onClick:function(){t(),b(!1),k(!1)}}))))},J=a(136),q=a(139),K=a(137),U=a(138),V=Object(s.b)((function(e){return{container:{display:"flex",flexDirection:"column",marginBottom:8},select:{"&:before":{borderColor:e.colorSecondary},"&:after":{borderColor:e.colorSecondary}}}})),_=function(e){var t=Object(s.c)(),a=V(t),n=Object(r.useState)(""),i=Object(c.a)(n,2),o=i[0],u=i[1];return l.a.createElement("div",{className:a.container},l.a.createElement(J.a,null,l.a.createElement(q.a,{id:"select-label"},"Filter Gallery"),l.a.createElement(K.a,{labelId:"select-label",value:o,onChange:function(t){u(t.target.value),e.setFilter(t.target.value)},backgroundColor:t.colorSecondary,className:a.select},e.keywords.map((function(e,t){return l.a.createElement(U.a,{key:t,value:e},e.charAt(0).toUpperCase()+e.slice(1))})))))},Q=[{title:"Narni",desc:"",url:"/helen-aimee-narni.jpg",keywords:["all","warcraft","fantasy","gaming"]},{title:"Poppy",desc:"",url:"/helen-aimee-poppy.jpg",keywords:["all"]},{title:"Ellyra",desc:"",url:"/helen-aimee-ellyra.jpg",keywords:["all","fantasy"]},{title:"Justice",desc:"",url:"/helen-aimee-justicefinal1.jpg",keywords:["all","fantasy","gaming"]},{title:"Whitemane",desc:"",url:"/helen-aimee-whitemane.jpg",keywords:["all","warcraft","fantasy","gaming"]},{title:"Cecilia",desc:"",url:"/helen-aimee-cecilia.jpg",keywords:["sketch"]},{title:"Strawberry",desc:"",url:"/helen-aimee-strawberry.jpg",keywords:["sketch"]},{title:"Darktide",desc:"",url:"/helen-aimee-darktide.jpg",keywords:["sketch"]},{title:"Demon girl",desc:"",url:"/helen-aimee-demon-girl.jpg",keywords:["sketch"]},{title:"Saethyra portrait",desc:"",url:"/helen-aimee-sae.jpg",keywords:["all","warcraft","gaming","fantasy"]},{title:"Akleja",desc:"",url:"/helen-aimee-akleja.jpg",keywords:["all","warcraft","gaming","fantasy","commissions"]},{title:"Saethyra",desc:"",url:"/helen-aimee-saethyra.jpg",keywords:["all","warcraft","gaming","fantasy"]},{title:"Willow",desc:"",url:"/helen-aimee-willow.jpg",keywords:["all","pets"]},{title:"Buttons",desc:"",url:"/helen-aimee-buttons.jpg",keywords:["all","pets"]},{title:"Serena",desc:"",url:"/helen-aimee-serena.jpg",keywords:["all","gaming","fantasy"]},{title:"Serana",desc:"",url:"/helen-aimee-serana.jpg",keywords:["all","gaming","fantasy"]},{title:"Ribbon",desc:"",url:"/helen-aimee-ribbon.jpg",keywords:["all","warcraft","gaming","fantasy"]},{title:"Flameleaf",desc:"",url:"/helen-aimee-flameleaf.jpg",keywords:["all","warcraft","gaming","fantasy"]},{title:"Darkshift",desc:"",url:"/helen-aimee-darkshift-web.jpg",keywords:["all","warcraft","gaming","fantasy"]},{title:"Neefia",desc:"",url:"/helen-aimee-neefia.jpg",keywords:["all","warcraft","gaming","fantasy"]},{title:"Kait Diaz",desc:"",url:"/helen-aimee-kait-diaz.jpg",keywords:["all","gaming"]},{title:"Juliette",desc:"",url:"/helen-aimee-juliette.jpg",keywords:["all","gaming"]},{title:"Blue and Quincy",desc:"",url:"/helen-aimee-blue-and-quincy-c.jpg",keywords:["all","pets","commissions"]},{title:"Sorceress",desc:"",url:"/helen-aimee-sorceressrgbweb.jpg",keywords:["all","fantasy"]}],Z=Q.map((function(e){return e.keywords})),X=(n=[]).concat.apply(n,Object(M.a)(Z)).filter((function(e,t,a){return a.indexOf(e)===t})),$=Object(s.b)((function(e){return{}})),ee=function(e){var t=e.isDesktop,a=e.setCurrentPage,n=Object(s.c)(),i=($(n),Object(r.useState)(null)),o=Object(c.a)(i,2),u=o[0],m=o[1],d=Object(r.useState)(!1),h=Object(c.a)(d,2),p=h[0],g=h[1],f=Object(r.useState)("all"),b=Object(c.a)(f,2),y=b[0],w=b[1];Object(r.useEffect)((function(){a("gallery")}),[a]);var E=Q.filter((function(e){return e.keywords.includes(y)})),k=function(e){m(e),g(!0)};return l.a.createElement("div",null,l.a.createElement(_,{keywords:X,setFilter:w}),l.a.createElement(A,{isDesktop:t},E.map((function(e,a){return l.a.createElement(W,{key:a,id:a,title:e.title,desc:e.desc,url:e.url,keywords:e.keywords,openModal:k,isDesktop:t})}))),l.a.createElement(Y,{open:p,currentImageId:u,currentImage:E[u],numImages:E.length-1,closeModal:function(){m(null),g(!1)},incrementModalImage:function(){return m((function(e){return Math.min(e+1,E.length-1)}))},decrementModalImage:function(){return m((function(e){return Math.max(e-1,0)}))},isDesktop:t}))},te=a(20),ae=Object(s.b)((function(e){return{container:{padding:"0 10px"},mainLink:{textDecoration:"none",color:"inherit"},link:{color:"inherit"},title:{fontSize:36},contact:{fontSize:16,marginLeft:2}}})),ne=function(){var e=Object(s.c)(),t=ae(e);return l.a.createElement("div",{className:t.container},l.a.createElement(te.b,{to:"/",className:t.mainLink},l.a.createElement("div",{className:t.title},"Helen Aimee Art")),l.a.createElement("div",{className:t.contact},l.a.createElement("a",{href:"mailto:helen.aimee.art@gmail.com",className:t.link},"helen.aimee.art@gmail.com")))},re=Object(s.b)((function(e){return{ul:{listStyle:"none",display:"flex",alignItems:"center"},li:{fontSize:20,padding:3},link:{textDecoration:"none",color:e.colorSecondary,backgroundColor:e.colorPrimary,borderBottom:"2px solid rgba(0,0,0,0)",marginRight:20,"&:hover":{color:e.colorTertiary}},activeLink:{textDecoration:"none",color:e.colorSecondary,backgroundColor:e.colorPrimary,borderBottom:"2px solid",borderBottomColor:e.colorTertiary,marginRight:20,"&:hover":{color:e.colorTertiary}}}})),le=function(e){var t=Object(s.c)(),a=re(t);return l.a.createElement("ul",{className:a.ul},l.a.createElement(te.b,{to:"/",className:"gallery"===e.currentPage?a.activeLink:a.link},l.a.createElement("li",{className:a.li},"Gallery")),l.a.createElement(te.b,{to:"/commissioninfo",className:"commissioninfo"===e.currentPage?a.activeLink:a.link},l.a.createElement("li",{className:a.li},"Comission Info")),l.a.createElement(te.b,{to:"/about",className:"about"===e.currentPage?a.activeLink:a.link},l.a.createElement("li",{className:a.li},"About")))},ie=Object(s.b)((function(e){return{ul:{listStyle:"none",position:"absolute",left:0,top:100,backgroundColor:e.colorPrimary,zIndex:1,padding:0,margin:0,width:function(e){return e?175:0},height:"calc(100% - 180px)",transition:"width 0.2s ease"},li:{fontSize:20,padding:"15px 10px",width:175,color:e.colorSecondary,display:function(e){return e?"block":"none"},overflow:"hidden",transition:"0.2s ease",borderLeft:"5px solid rgba(0, 0, 0, 0)"},activeLi:{fontSize:20,padding:"15px 10px",width:175,color:e.colorSecondary,display:function(e){return e?"block":"none"},overflow:"hidden",transition:"0.2s ease",borderLeft:"5px solid",borderLeftColor:e.colorTertiary},link:{textDecoration:"none"},burger:{width:32,marginLeft:10}}})),oe=function(e){var t=Object(s.c)(),a=Object(r.useState)(!1),n=Object(c.a)(a,2),i=n[0],o=n[1],u=ie(i,{theme:t});return l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{src:"/Hamburger_icon.png",alt:"",onClick:function(){return o(!i)},className:u.burger}),l.a.createElement("ul",{className:u.ul},l.a.createElement(te.b,{to:"/",className:u.link,onClick:function(){return o(!1)}},l.a.createElement("li",{className:"gallery"===e.currentPage?u.activeLi:u.li},"Gallery")),l.a.createElement(te.b,{to:"/commissioninfo",className:u.link,onClick:function(){return o(!1)}},l.a.createElement("li",{className:"commissioninfo"===e.currentPage?u.activeLi:u.li},"Comission Info")),l.a.createElement(te.b,{to:"/about",className:u.link,onClick:function(){return o(!1)}},l.a.createElement("li",{className:"about"===e.currentPage?u.activeLi:u.li},"About"))))},ce=Object(s.b)((function(e){return{nav:function(t){return{display:"flex",flexDirection:t?"row":"row-reverse",justifyContent:t?"space-around":"flex-end",alignItems:"center",backgroundColor:e.colorPrimary,color:e.colorSecondary,width:"100%",height:100,borderBottom:"3px solid",borderBottomColor:e.colorTertiary}}}})),se=function(e){var t=e.isDesktop,a=Object(s.c)(),n=ce(t,{theme:a});return l.a.createElement("nav",{className:n.nav},l.a.createElement(ne,null),t?l.a.createElement(le,{currentPage:e.currentPage}):l.a.createElement(oe,{currentPage:e.currentPage}))},ue=a(14),me=Object(s.b)((function(e){return{app:{fontFamily:"Arial, Helvetica, sans-serif",display:"flex",flexDirection:"column",alignItems:"center",minHeight:"100vh",margin:0,padding:0,position:"relative",backgroundColor:e.colorSecondary,boxSizing:"border-box"},main:{display:"flex",flexDirection:"column",alignItems:"center",width:function(e){return e?"65%":"90%"},flex:1,margin:"25px 0"}}})),de=function(e){var t=e.currentPage,a=e.isDesktop,n=e.setCurrentPage,r=Object(s.c)(),i=me(a,{theme:r});return l.a.createElement(te.a,null,l.a.createElement("div",{className:i.app},l.a.createElement(se,{currentPage:t,isDesktop:a}),l.a.createElement("div",{className:i.main},l.a.createElement(ue.c,null,l.a.createElement(ue.a,{path:"/commissioninfo",render:function(){return l.a.createElement(v,{setCurrentPage:n,isDesktop:a})}}),l.a.createElement(ue.a,{path:"/about",render:function(){return l.a.createElement(m,{setCurrentPage:n,isDesktop:a})}}),l.a.createElement(ue.a,{path:"/",render:function(){return l.a.createElement(ee,{setCurrentPage:n,isDesktop:a})}}))),l.a.createElement(H,{isDesktop:a})))},he={colorPrimary:"#2D3032",colorSecondary:"#F6F6F6",colorTertiary:"#CCC0EF"};o.a.render(l.a.createElement((function(){var e=Object(r.useState)(""),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(r.useState)(window.innerWidth>800),o=Object(c.a)(i,2),u=o[0],m=o[1],d=function(){m(window.innerWidth>800)};return Object(r.useEffect)((function(){return window.addEventListener("resize",d),function(){return window.removeEventListener("resize",d)}})),l.a.createElement(s.a,{theme:he},l.a.createElement(de,{currentPage:a,setCurrentPage:n,isDesktop:u}))}),null),document.getElementById("root"))},77:function(e,t,a){e.exports=a(103)},82:function(e,t,a){}},[[77,1,2]]]);
//# sourceMappingURL=main.76c81533.chunk.js.map