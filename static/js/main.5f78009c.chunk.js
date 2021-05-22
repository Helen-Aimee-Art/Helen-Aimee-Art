(this["webpackJsonphelen-aimee-art"]=this["webpackJsonphelen-aimee-art"]||[]).push([[0],{66:function(e,t,a){e.exports=a(91)},71:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n,l=a(0),r=a.n(l),i=a(11),o=a.n(i),c=(a(71),a(72),a(15)),s=a(3),m=Object(s.b)((function(e){return{content:{textAlign:"left",width:function(e){return e?"75%":"100%"}},list:{listStyle:"none"},listItem:{padding:0,margin:"10px 0",display:"flex",alignItems:"center"},image:{width:50,height:"auto",marginRight:10},clipImage:{width:40,height:"auto",marginRight:10,padding:5}}})),u=function(e){var t=e.isDesktop,a=e.setCurrentPage,n=Object(s.c)(),i=m(t,{theme:n});Object(l.useEffect)((function(){a("about")}),[a]);var o=new Date,c=new Date(1993,2,9),u=o.getFullYear()-c.getFullYear();return(o.getMonth()<c.getMonth()||o.getMonth()===c.getMonth()&&o.getDate()<c.getDate())&&u--,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:i.content},r.a.createElement("h2",{style:{marginTop:0}},"About me"),r.a.createElement("p",null,"My name is Helen and I am a ",u," year old Digital Artist living in Plymouth, England with my partner and my pet cat Buttons. I have been drawing for as long as I can remember. My passions are painting fantasy portraits and pet portraits."),r.a.createElement("p",null,"I did my A levels at art college and I also have a BA (Hons) degree in Game Design. I am now focussing on freelance commissioned work."),r.a.createElement("p",null,"Thank you for your interest in my art, I hope you have a great day!"),r.a.createElement("h2",null,"Tools and Proficiencies"),r.a.createElement("ul",{className:i.list},r.a.createElement("li",{className:i.listItem},r.a.createElement("img",{src:"/photoshop.png",alt:"Photoshop icon",className:i.image}),r.a.createElement("span",null,"Adobe Photoshop")),r.a.createElement("li",{className:i.listItem},r.a.createElement("img",{src:"/clipstudio.png",alt:"Clip Studio Paint Pro icon",className:i.clipImage}),r.a.createElement("span",null,"Clip Studio Paint Pro")),r.a.createElement("li",{className:i.listItem},r.a.createElement("img",{src:"/wacom.png",alt:"Wacom icon",className:i.image}),r.a.createElement("span",null,"Wacom Cintiq 27QHD")),r.a.createElement("li",{className:i.listItem},r.a.createElement("img",{src:"/microsoft.png",alt:"Microsoft icon",className:i.image}),r.a.createElement("span",null,"Microsoft Surface Pro 7")))))},d=a(56),p=a.n(d),g=Object(s.b)((function(e){return{container:function(e){return{display:"flex",flexDirection:e?"row":"column"}},details:{flex:1},carousel:{width:"100%",flex:2},slide:{display:"flex",alignItems:"center",justifyContent:"center"},imageContainer:{margin:"0 20px",width:"100%",height:"100%"},image:{width:"100%",height:"100%",maxWidth:250,userDrag:"none",objectFit:"cover"}}})),h={superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:5},desktop:{breakpoint:{max:3e3,min:1224},items:3},tablet:{breakpoint:{max:1224,min:664},items:2},mobile:{breakpoint:{max:664,min:0},items:1}},f=function(e){var t=e.details,a=e.images,n=e.isDesktop,l=Object(s.c)(),i=g(n,{theme:l}),o=r.a.createElement(p.a,{responsive:h,infinite:!0,draggable:!0,itemClass:i.slide,containerClass:i.carousel},a.map((function(e,t){return r.a.createElement("div",{className:i.imageContainer,key:t},r.a.createElement("img",{className:i.image,src:e.url,alt:""}))})));return r.a.createElement("div",{className:i.container},t?r.a.createElement("div",{className:i.details},t):null,a.length>0&&o)},y=Object(s.b)((function(e){return{button:{backgroundColor:e.colorTertiary,boxShadow:"0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",color:"rgba(0, 0, 0, 0.87)",padding:"6px 16px",minWidth:64,boxSizing:"border-box",fontWeight:600,lineHeight:1.75,fontSize:"0.875rem",letterSpacing:"0.02857em",borderRadius:4,textTransform:"uppercase",border:0,cursor:"pointer",display:"inline-flex",outline:0,position:"relative",alignItems:"center",userSelect:"none",verticalAlign:"middle",justifyContent:"center",textDecoration:"none",textAlign:"center",margin:8,fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',"&:hover":{opacity:.8},"&:active":{opacity:.5}}}})),b=function(e){var t=e.label,a=e.click,n=Object(s.c)(),l=y(n);return r.a.createElement("button",{className:l.button,onClick:a},t)},E=Object(s.b)((function(e){return{title:{margin:0,marginBottom:5},content:{margin:0},dialog:{display:"flex",flexDirection:"column",backgroundColor:e.colorPrimary,color:e.colorSecondary,borderRadius:5,padding:20},actions:{display:"flex",flexDirection:"row",justifyContent:"flex-end"}}})),w=function(e){var t=Object(s.c)(),a=E(t);return r.a.createElement("div",{className:a.dialog},e.title&&r.a.createElement("h3",{className:a.title},e.title),r.a.createElement("div",{className:a.content},e.children),r.a.createElement("div",{className:a.actions},e.actions))},k=Object(s.b)((function(e){return{modalContainer:function(e){return{width:"100%",height:"100%",position:"fixed",top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.9)",display:e.open?"block":"none",zIndex:1e7}},modal:{display:"flex",width:"100%",height:"100%",alignItems:"center",position:"relative",justifyContent:"center"}}})),v=function(e){var t=e.closeModal,a=e.open,n=e.children,l=Object(s.c)(),i=k({open:a,theme:l});return r.a.createElement("div",{id:"modal-container",className:i.modalContainer,onClick:function(e){return function(e){"modal"===e.target.id&&t()}(e)}},r.a.createElement("div",{id:"modal",className:i.modal},n))},j=Object(s.b)((function(e){return{root:{width:"100%",display:"flex",flexDirection:"column",userSelect:"none",margin:"10px 0"},bar:function(t){var a=t.open;return{width:"100%",height:50,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",backgroundColor:e.colorPrimary,color:e.colorSecondary,padding:"0px 25px",borderTopLeftRadius:5,borderTopRightRadius:5,borderBottomLeftRadius:a?0:5,borderBottomRightRadius:a?0:5,cursor:"pointer",boxSizing:"border-box",transition:"border-radius 0s",transitionDelay:a?"0s":"0.15s"}},content:function(t){var a=t.open;return{width:"100%",padding:"".concat(a?25:0,"px 25px"),backgroundColor:e.colorPrimary,color:e.colorSecondary,maxHeight:a?1200:0,transition:"max-height 0.15s, padding 0.15s",overflow:"hidden",boxSizing:"border-box",borderBottomLeftRadius:5,borderBottomRightRadius:5}},arrow:function(e){var t=e.open;return{width:25,transform:"rotate(".concat(t?180:0,"deg)"),transition:"transform 0.1s"}}}})),x=function(e){var t=e.title,a=e.children,n=e.defaultOpen,i=e.locked,o=e.lockedTitle,m=e.lockedMessage,u=Object(l.useState)(n||!1),d=Object(c.a)(u,2),p=d[0],g=d[1],h=Object(l.useState)(!1),f=Object(c.a)(h,2),y=f[0],E=f[1],k=Object(s.c)(),x=j({open:p,theme:k});return r.a.createElement(r.a.Fragment,null,i&&r.a.createElement(v,{open:y,closeModal:function(){return E(!1)}},r.a.createElement(w,{title:o,actions:r.a.createElement(b,{label:"OK",click:function(){sessionStorage.setItem("over18","true"),E(!1),g(!0)}})},r.a.createElement("p",null,m))),r.a.createElement("div",{className:x.root},r.a.createElement("div",{className:x.bar,onClick:function(){i?sessionStorage.getItem("over18")?g(!p):E(!0):g(!p)}},r.a.createElement("h3",null,t),r.a.createElement("img",{className:x.arrow,src:"/down-arrow.png",alt:"down arrow"})),r.a.createElement("div",{className:x.content},a)))},N=[{url:"/helen-aimee-adoptable-01.jpg",type:"adopted"},{url:"/helen-aimee-adoptable-02.jpg",type:"forsale"},{url:"/helen-aimee-adoptable-03.jpg",type:"forsale"},{url:"/helen-aimee-ribbon.jpg",type:"forsale"}],O=Object(s.b)((function(e){return{cardul:{fontSize:18,listStyleType:"none"},li:{marginBottom:10,"&:before":{content:"'\u2661'",color:e.colorTertiary,fontWeight:"bold",display:"inline-block",width:"1em",marginLeft:"-1em"}},link:{color:"inherit","&:hover":{color:e.colorTertiary}}}})),C=function(e){var t=e.isDesktop,a=e.setCurrentPage,n=Object(s.c)(),i=O(t,{theme:n});Object(l.useEffect)((function(){a("adoptables")}),[a]);var o=N.filter((function(e){return"forsale"===e.type})),c=N.filter((function(e){return"adopted"===e.type}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{title:"Adoptables for sale",defaultOpen:o.length>0},r.a.createElement(f,{details:o.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:i.cardul},r.a.createElement("li",{className:i.li},"Prices vary per design"),r.a.createElement("li",{className:i.li},"Please purchase through ",r.a.createElement("a",{href:"https://ko-fi.com/helenaimeeart",target:"_blank",rel:"noopener noreferrer",className:i.link},"Ko-fi")))):r.a.createElement("p",{className:i.li},"More adoptables coming soon!"),images:o,isDesktop:t})),r.a.createElement(x,{title:"Sold adoptables",defaultOpen:!1},r.a.createElement(f,{images:c,isDesktop:t})),r.a.createElement("div",null,r.a.createElement("h2",null,"Adoptable Terms and Conditions"),r.a.createElement("ul",null,r.a.createElement("li",null,"I will retain copyright to the artwork and may use it for my portfolio or promotional purposes"),r.a.createElement("li",null,"Adoptable purchases are to be paid in full up front, I will send an invoice through PayPal"),r.a.createElement("li",null,"You may not resell the design, but you can gift it. If you do gift the design, please advise me of the new owner so I can note who is allowed to use the design"),r.a.createElement("li",null,"Once paid I will email you a full resolution signed and non-signed version of the design"),r.a.createElement("li",null,"Adoptables cannot be refunded")),r.a.createElement("h2",null,"Usage"),r.a.createElement("ul",null,r.a.createElement("li",null,"Once the adoptable has been purchased the character belongs to you, you can make any changes to the design but please do not alter the original file"),r.a.createElement("li",null,"Adoptables may not be used for any hateful, racist, homophobic, transphobic or any illegal or offensive material"),r.a.createElement("li",null,"Please continue to credit me for the design/original art when used. Please credit to my Twitter @HelenAimee1 or through to my website"))))},I=[{url:"/helen-aimee-mikamika-estelle.jpg",type:"halfbody"},{url:"/helen-aimee-panam.jpg",type:"halfbody"},{url:"/helen-aimee-isla.jpg",type:"halfbody"},{url:"/helen-aimee-sirree.jpg",type:"halfbody"},{url:"/helen-aimee-darkshift-web.jpg",type:"halfbody"},{url:"/helen-aimee-saethyra.jpg",type:"halfbody"},{url:"/helen-aimee-whitemane.jpg",type:"halfbody"},{url:"/helen-aimee-rinh.jpg",type:"bust"},{url:"/helen-aimee-vapni.jpg",type:"bust"},{url:"/helen-aimee-akleja.jpg",type:"bust"},{url:"/helen-aimee-serana.jpg",type:"bust"},{url:"/helen-aimee-flameleaf.jpg",type:"bust"},{url:"/helen-aimee-lumystra.jpg",type:"bust"},{url:"/helen-aimee-aetor.jpg",type:"bust"},{url:"/helen-aimee-daesal.jpg",type:"sketch"},{url:"/helen-aimee-strawberry.jpg",type:"sketch"},{url:"/helen-aimee-darktide.jpg",type:"sketch"},{url:"/helen-aimee-cecilia.jpg",type:"sketch"},{url:"/helen-aimee-mikamika-nsfw.jpg",type:"nsfw"},{url:"/helen-aimee-lumystra-nsfw.jpg",type:"nsfw"},{url:"/helen-aimee-saethyra-nsfw.jpg",type:"nsfw"},{url:"/helen-aimee-panam-nsfw.jpg",type:"nsfw"}],S=Object(s.b)((function(e){return{cardul:{fontSize:18,listStyleType:"none"},li:{marginBottom:10,"&:before":{content:"'\u2661'",color:e.colorTertiary,fontWeight:"bold",display:"inline-block",width:"1em",marginLeft:"-1em"}},commissionStatus:{textAlign:"left",width:"100%"}}})),D=function(e){var t=e.isDesktop,a=e.setCurrentPage,n=Object(s.c)(),i=S(t,{theme:n});return Object(l.useEffect)((function(){a("commissioninfo")}),[a]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:i.commissionStatus},"Commissions status: ",r.a.createElement("span",null,"Opens 23rd May")),r.a.createElement(x,{title:"Portrait / Bust",defaultOpen:t},r.a.createElement(f,{details:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:i.cardul},"\xa394*"),r.a.createElement("p",{className:i.cardul},"Options:"),r.a.createElement("ul",{className:i.cardul},r.a.createElement("li",{className:i.li},"Head to waist")),r.a.createElement("p",{className:i.cardul},"Details:"),r.a.createElement("ul",{className:i.cardul},r.a.createElement("li",{className:i.li},"2250px x 3300px"),r.a.createElement("li",{className:i.li},"300dpi resolution"))),images:I.filter((function(e){return"bust"===e.type})),isDesktop:t})),r.a.createElement(x,{title:"Half-body",defaultOpen:t},r.a.createElement(f,{details:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:i.cardul},"\xa3140*"),r.a.createElement("p",{className:i.cardul},"Options:"),r.a.createElement("ul",{className:i.cardul},r.a.createElement("li",{className:i.li},"Head to thigh (just above the knee)")),r.a.createElement("p",{className:i.cardul},"Details:"),r.a.createElement("ul",{className:i.cardul},r.a.createElement("li",{className:i.li},"3400px x 4900px"),r.a.createElement("li",{className:i.li},"300dpi resolution"))),images:I.filter((function(e){return"halfbody"===e.type})),isDesktop:t})),r.a.createElement(x,{title:"Sketch",defaultOpen:t},r.a.createElement(f,{details:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:i.cardul},"\xa330*"),r.a.createElement("p",{className:i.cardul},"Options:"),r.a.createElement("ul",{className:i.cardul},r.a.createElement("li",{className:i.li},"Head to bust")),r.a.createElement("p",{className:i.cardul},"Details:"),r.a.createElement("ul",{className:i.cardul},r.a.createElement("li",{className:i.li},"3300px x 2550px"),r.a.createElement("li",{className:i.li},"300dpi resolution"))),images:I.filter((function(e){return"sketch"===e.type})),isDesktop:t})),r.a.createElement(x,{title:"Pinup / NSFW",defaultOpen:!1,locked:!0,lockedTitle:"NSFW content",lockedMessage:"By clicking OK you are confirming that you are 18 years or older."},r.a.createElement(f,{details:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:i.cardul},"\xa394 - \xa3140*"),r.a.createElement("p",{className:i.cardul},"Options:"),r.a.createElement("ul",{className:i.cardul},r.a.createElement("li",{className:i.li},"Head to waist"),r.a.createElement("li",{className:i.li},"Head to thigh")),r.a.createElement("p",{className:i.cardul},"Details:"),r.a.createElement("ul",{className:i.cardul},r.a.createElement("li",{className:i.li},"2250px x 3300px (Head to waist)"),r.a.createElement("li",{className:i.li},"3400px x 4900px (Head to thigh)"),r.a.createElement("li",{className:i.li},"300dpi resolution"))),images:I.filter((function(e){return"nsfw"===e.type})),isDesktop:t})),r.a.createElement("div",null,r.a.createElement("p",{style:{textAlign:"left",marginTop:0}},"*Simple backgrounds are included in the price, at this time I am not offering more complicated backgrounds.",r.a.createElement("br",null),"*Adding additional characters will increase the cost by 80%.",r.a.createElement("br",null),"*Small pets can be included but will increase the price by 30%.",r.a.createElement("br",null),"*Complicated weapons or armour will increase the price. The exact amount will vary depending on the addition."),r.a.createElement("h2",null,"Process"),r.a.createElement("p",null,"If you are interested in a commission, please email me with the information below. The number of projects I take on will vary, I will email you with confirmation if I am available to take on the project."),r.a.createElement("ul",null,r.a.createElement("li",null,"Contact email address for updates and for the invoices"),r.a.createElement("li",null,"Your name and the name of your character(s)"),r.a.createElement("li",null,"Commission type"),r.a.createElement("li",null,"Physical description of your character(s), including race, age etc. (any reference pictures are appreciated)"),r.a.createElement("li",null,"Character(s) personality")),r.a.createElement("p",null,"Once we have agreed the outline, I will send you a rough sketch for approval. If you are happy with the sketch I will send a Paypal invoice for 50% of the total fee to your email. Once the invoice has been paid I will continue working on your project; I will send updates throughout the process where you can ask for minor changes. Once completed, I will send a low resolution JPEG of the final piece and if you are happy I will send the final invoice for the remaining amount. When the payment has been recieved I will send the high resolution JPEG."),r.a.createElement("h2",null,"Pinup / NSFW varients"),r.a.createElement("ul",null,r.a.createElement("li",null,"Pinup / NSFW varients are available for the portrait and half body commission options"),r.a.createElement("li",null,"These can either be nude or underwear/lingerie. However if you choose the nude version I will also include a lingerie version (this will be included within the price at no extra cost)"),r.a.createElement("li",null,"All pinup / NSFW characters must be at least 18 years old"),r.a.createElement("li",null,"Please be aware that this is a pinup option, so it will not be explicit NSFW"),r.a.createElement("li",null,"I will not be accepting explicit NSFW commissions")),r.a.createElement("h2",null,"Terms and conditions"),r.a.createElement("p",null,"I have the right to decline a commission request."),r.a.createElement("p",null,"I will draw:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Personal, original characters"),r.a.createElement("li",null,"Original characters based in games such as World of Warcraft, ESO, etc."),r.a.createElement("li",null,"Existing lore characters"),r.a.createElement("li",null,"Nudity and sexual themes")),r.a.createElement("p",null,"I will not draw:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Real people"),r.a.createElement("li",null,"Explicit content"),r.a.createElement("li",null,"Anything that portrays illegal activity"),r.a.createElement("li",null,"Characters under the age of 18"),r.a.createElement("li",null,"Furries"),r.a.createElement("li",null,"Excessive violence or gore"),r.a.createElement("li",null,"Fetishes"),r.a.createElement("li",null,"Extreme body proportions"),r.a.createElement("li",null,"Standalone evironments")),r.a.createElement("h3",null,"Copyright & Ownership"),r.a.createElement("ul",null,r.a.createElement("li",null,"I will retain copyright to the artwork. You are not permitted to change or resell the artwork"),r.a.createElement("li",null,"I have the right to use the artwork in my portfolio, social media and to sell prints"),r.a.createElement("li",null,"You have the right to use the artwork for personal use only. (Eg. prints for your wall, profile pictures and displaying online with credit)"),r.a.createElement("li",null,"I have the right to make a process video and publish it on my Youtube channel"),r.a.createElement("li",null,"You retain ownership of your original character(s) if depicted in the artwork"),r.a.createElement("li",null,"My work cannot be used for NFTs or any crypto art, commissioned or otherwise")),r.a.createElement("h3",null,"Revisions & Payment"),r.a.createElement("ul",null,r.a.createElement("li",null,"Any major revisions must be agreed before the sketch is approved, after this stage any major adjustments will be charged. You may request up to three minor changes throughout the process, after this any minor changes may be charged"),r.a.createElement("li",null,"Payment must be made through Paypal once I send you the invoices"),r.a.createElement("li",null,"If for any reason I cannot complete your project, you will receive a refund for the full cost through Paypal"))))},P=a(121),F=a(122),A=a(123),L=Object(s.b)((function(e){return{container:{padding:"0 5px"},a:{textDecoration:"none",color:"inherit",display:"flex",alignItems:"center",justifyContent:"center",borderWidth:"1px",borderStyle:"solid",width:50,height:50,fontSize:15,margin:0,borderRadius:"50%","&:hover":{color:e.colorTertiary,borderColor:e.colorTertiary}}}})),M=function(e){var t=Object(s.c)(),a=L(t);return r.a.createElement("div",{className:a.container,title:e.title},r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:a.a},e.children?e.children:e.link.charAt(12).toUpperCase()))},T=a(60),H=Object(s.b)((function(e){return{socials:{display:"flex"},icon:{width:"100%",height:"100%",color:"red"}}})),z=function(e){return r.a.createElement(T.a,e,r.a.createElement("path",{fill:"currentColor",d:"M6,6H12L14,2H18V6L14.5,13H18V18H12L10,22H6V18L9.5,11H6V6Z"}))},R=function(e){return r.a.createElement(T.a,e,r.a.createElement("path",{fill:"currentColor",d:"M1.77,16.88L3.5,19.86C3.84,20.54 4.54,21 5.33,21H16.79L14.43,16.88H1.77M22.23,16.9C22.23,16.5 22.11,16.11 21.9,15.78L15.17,4.1C14.82,3.44 14.15,3 13.35,3H9.8L20.18,21L21.82,18.14C22.13,17.6 22.23,17.36 22.23,16.9M12.73,13.94L8.1,5.92L3.45,13.94H12.73Z"}))},W=function(e){return r.a.createElement(T.a,e,r.a.createElement("path",{fill:"currentColor",d:"M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734c4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09c-.443-.441-3.368-3.049-4.034-3.954c-.709-.965-1.041-2.7-.091-3.71c.951-1.01 3.005-1.086 4.363.407c0 0 1.565-1.782 3.468-.963c1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z"}))},B=function(e){var t=Object(s.c)(),a=H(t);return r.a.createElement("div",{className:a.socials},r.a.createElement(M,{link:"https://www.twitter.com/helenaimee1/",title:"Twitter"},r.a.createElement(P.a,null)),r.a.createElement(M,{link:"https://www.instagram.com/helen_aimee.art/",title:"Instagram"},r.a.createElement(F.a,null)),r.a.createElement(M,{link:"https://www.deviantart.com/missshazira",title:"DeviantArt"},r.a.createElement(z,null)),r.a.createElement(M,{link:"https://www.artstation.com/helen_aimee",title:"ArtStation"},r.a.createElement(R,null)),r.a.createElement(M,{link:"https://www.youtube.com/channel/UCsJn3W5RUnKKQKwHiMbiFKA",title:"YouTube"},r.a.createElement(A.a,null)),r.a.createElement(M,{link:"https://ko-fi.com/helenaimeeart",title:"Ko-fi"},r.a.createElement(W,null)))},Y=Object(s.b)((function(e){return{footer:{display:"flex",flexDirection:"column",width:"100%",alignItems:"center",justifyContent:"center",color:e.colorSecondary,backgroundColor:e.colorPrimary,height:100,borderTop:"3px solid",borderTopColor:e.colorTertiary},copyright:{fontSize:12,fontWeight:"bold","&>p":{margin:0,paddingTop:15}}}})),K=function(e){var t=Object(s.c)(),a=Y(t);return r.a.createElement("footer",{className:a.footer},r.a.createElement(B,null),r.a.createElement("div",{className:a.copyright},r.a.createElement("p",null,"\xa9 ".concat((new Date).getFullYear()," Helen Aimee Art. All rights reserved."))))},V=a(59),G=Object(s.b)((function(e){return{gallery:{display:"grid",gridTemplate:function(e){return e?"1fr / 1fr 1fr 1fr 1fr 1fr":"1fr / 1fr 1fr 1fr"},gridAutoFlow:"row",gridGap:10}}})),J=function(e){var t=e.isDesktop,a=Object(s.c)(),n=G(t,{theme:a});return r.a.createElement("div",{className:n.gallery},e.children)},U=Object(s.b)((function(e){return{overlay:function(e){return{width:"100%",height:"100%",backgroundImage:"linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0) 55%, #282c34)",position:"absolute",top:0,display:"flex",justifyContent:"flex-start",alignItems:"flex-end",transition:"opacity 0.25s",opacity:e.opacity}},overlayContent:{color:"#f2f2f2",marginLeft:10,marginBottom:10}}})),_=function(e){var t=Object(s.c)(),a=e.open?1:0,n=U({opacity:a,theme:t});return r.a.createElement("div",{className:n.overlay},r.a.createElement("div",{className:n.overlayContent},e.title))},q=Object(s.b)((function(e){return{container:{display:"flex",alignItems:"center",justifyContent:"center",position:"relative",cursor:"pointer",border:"2px solid rgba(0,0,0,0)",transition:"border-color 0.25s","&:hover":{borderColor:e.colorTertiary}},img:{width:"100%",height:"100%",objectFit:"cover"}}})),Q=function(e){var t=e.isDesktop,a=Object(s.c)(),n=q(t,{theme:a}),i=Object(l.useState)(!1),o=Object(c.a)(i,2),m=o[0],u=o[1],d=function(){return u(!m)};return r.a.createElement("div",{className:n.container,onMouseEnter:d,onMouseLeave:d,onMouseDown:function(){return e.openModal(e.id)}},r.a.createElement("img",{src:e.url,alt:e.desc,className:n.img}),r.a.createElement(_,{title:e.title,open:m}))},X=Object(s.b)((function(e){return{imgContainer:{display:"flex",alignItems:"center",justifyContent:"center"},img:{height:"85vh",position:"absolute"},arrow:{position:"absolute",width:75,userSelect:"none",opacity:.25,transition:"opacity 0.2s",backgroundColor:"black"},cross:{position:"absolute",width:35,height:35,userSelect:"none",opacity:.5,transition:"opacity 0.2s",backgroundColor:"black",right:0,top:0,borderRadius:"50%",cursor:"pointer","&:hover":{opacity:1}}}})),Z=function(e){var t=e.closeModal,a=e.currentImage,n=e.currentImageId,i=e.decrementImage,o=e.incrementImage,m=e.numImages,u=Object(s.c)(),d=X(u),p=Object(l.useState)(!1),g=Object(c.a)(p,2),h=g[0],f=g[1],y=Object(l.useState)(!1),b=Object(c.a)(y,2),E=b[0],w=b[1];Object(l.useEffect)((function(){0===n&&f(!1),n===m&&w(!1)}),[n,m]);var k=a?a.url:"";return r.a.createElement("div",{className:d.imgContainer},r.a.createElement("img",{className:d.img,src:k,alt:""}),r.a.createElement("img",{className:d.arrow,style:{left:5,opacity:h?1:.25,cursor:h?"pointer":"default"},src:"/arrow-left.png",alt:"left arrow",onClick:n>0?i:void 0,onMouseEnter:n>0?function(){return f(!h)}:void 0,onMouseLeave:n>0?function(){return f(!h)}:void 0}),r.a.createElement("img",{className:d.arrow,style:{right:5,opacity:E?1:.25,cursor:E?"pointer":"default"},src:"/arrow-right.png",alt:"right arrow",onClick:n<m?o:void 0,onMouseEnter:n<m?function(){return w(!E)}:void 0,onMouseLeave:n<m?function(){return w(!E)}:void 0}),r.a.createElement("img",{src:"/cross.png",alt:"cross",className:d.cross,onClick:function(){t(),f(!1),w(!1)}}))},$=a(124),ee=a(127),te=a(125),ae=a(126),ne=Object(s.b)((function(e){return{container:{display:"flex",flexDirection:"column",marginBottom:8},select:{"&:before":{borderColor:e.colorSecondary},"&:after":{borderColor:e.colorSecondary}}}})),le=function(e){var t=Object(s.c)(),a=ne(t),n=Object(l.useState)(""),i=Object(c.a)(n,2),o=i[0],m=i[1];return r.a.createElement("div",{className:a.container},r.a.createElement($.a,null,r.a.createElement(ee.a,{id:"select-label"},"Filter Gallery"),r.a.createElement(te.a,{labelId:"select-label",value:o,onChange:function(t){m(t.target.value),e.setFilter(t.target.value)},className:a.select,MenuProps:{anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},getContentAnchorEl:null}},e.keywords.map((function(e,t){return r.a.createElement(ae.a,{key:t,value:e},e.charAt(0).toUpperCase()+e.slice(1))})))))},re=[{title:"Shazeira",desc:"",url:"/helen-aimee-shazeira.jpg",keywords:["all","fantasy","gaming","warcraft"]},{title:"Bella",desc:"",url:"/helen-aimee-bella.jpg",keywords:["all","fantasy","gaming","warcraft"]},{title:"Forgiven",desc:"",url:"/helen-aimee-forgiven.jpg",keywords:["all","fantasy","gaming","FFXIV"]},{title:"Frost wyrm",desc:"",url:"/helen-aimee-adoptable-02.jpg",keywords:["all","fantasy","gaming","warcraft"]},{title:"Allura",desc:"",url:"/helen-aimee-allura.jpg",keywords:["sketch"]},{title:"Akleja",desc:"",url:"/helen-aimee-akleja-sketch.jpg",keywords:["sketch"]},{title:"Rayn",desc:"",url:"/helen-aimee-rayn.jpg",keywords:["sketch"]},{title:"Rinh",desc:"",url:"/helen-aimee-rinh.jpg",keywords:["all","fantasy","gaming","FFXIV"]},{title:"Amirie",desc:"",url:"/helen-aimee-amirie.jpg",keywords:["all","fantasy","gaming","warcraft"]},{title:"Daesal",desc:"",url:"/helen-aimee-daesal.jpg",keywords:["commissions","sketch"]},{title:"MikaMika and Estelle",desc:"",url:"/helen-aimee-mikamika-estelle.jpg",keywords:["all","fantasy","gaming","FFXIV","commissions"]},{title:"Panam",desc:"",url:"/helen-aimee-panam.jpg",keywords:["all","fantasy","gaming","cyberpunk","commissions"]},{title:"Vapni",desc:"",url:"/helen-aimee-vapni.jpg",keywords:["all","starwars","fantasy","gaming","commissions"]},{title:"Isla",desc:"",url:"/helen-aimee-isla.jpg",keywords:["all","warcraft","fantasy","gaming","commissions"]},{title:"Sirree",desc:"",url:"/helen-aimee-sirree.jpg",keywords:["all","warcraft","fantasy","gaming","commissions"]},{title:"Lumystra",desc:"",url:"/helen-aimee-lumystra.jpg",keywords:["all","warcraft","fantasy","gaming"]},{title:"Aetor",desc:"",url:"/helen-aimee-aetor.jpg",keywords:["all","warcraft","fantasy","gaming"]},{title:"Narni",desc:"",url:"/helen-aimee-narni.jpg",keywords:["all","warcraft","fantasy","gaming"]},{title:"Poppy",desc:"",url:"/helen-aimee-poppy.jpg",keywords:["all"]},{title:"Ellyra",desc:"",url:"/helen-aimee-ellyra.jpg",keywords:["all","fantasy"]},{title:"Justice",desc:"",url:"/helen-aimee-justicefinal1.jpg",keywords:["all","fantasy","gaming","commissions"]},{title:"Whitemane",desc:"",url:"/helen-aimee-whitemane.jpg",keywords:["all","warcraft","fantasy","gaming"]},{title:"Cecilia",desc:"",url:"/helen-aimee-cecilia.jpg",keywords:["sketch"]},{title:"Strawberry",desc:"",url:"/helen-aimee-strawberry.jpg",keywords:["sketch"]},{title:"Darktide",desc:"",url:"/helen-aimee-darktide.jpg",keywords:["sketch"]},{title:"Demon girl",desc:"",url:"/helen-aimee-demon-girl.jpg",keywords:["sketch"]},{title:"Saethyra portrait",desc:"",url:"/helen-aimee-sae.jpg",keywords:["all","warcraft","gaming","fantasy"]},{title:"Akleja",desc:"",url:"/helen-aimee-akleja.jpg",keywords:["all","warcraft","gaming","fantasy","commissions"]},{title:"Saethyra",desc:"",url:"/helen-aimee-saethyra.jpg",keywords:["all","warcraft","gaming","fantasy"]},{title:"Willow",desc:"",url:"/helen-aimee-willow.jpg",keywords:["all","pets"]},{title:"Buttons",desc:"",url:"/helen-aimee-buttons.jpg",keywords:["all","pets"]},{title:"Serena",desc:"",url:"/helen-aimee-serena.jpg",keywords:["all","gaming","fantasy"]},{title:"Serana",desc:"",url:"/helen-aimee-serana.jpg",keywords:["all","gaming","fantasy"]},{title:"Ribbon",desc:"",url:"/helen-aimee-ribbon.jpg",keywords:["all","warcraft","gaming","fantasy"]},{title:"Flameleaf",desc:"",url:"/helen-aimee-flameleaf.jpg",keywords:["all","warcraft","gaming","fantasy"]},{title:"Darkshift",desc:"",url:"/helen-aimee-darkshift-web.jpg",keywords:["all","warcraft","gaming","fantasy"]},{title:"Neefia",desc:"",url:"/helen-aimee-neefia.jpg",keywords:["all","warcraft","gaming","fantasy"]},{title:"Kait Diaz",desc:"",url:"/helen-aimee-kait-diaz.jpg",keywords:["all","gaming"]},{title:"Juliette",desc:"",url:"/helen-aimee-juliette.jpg",keywords:["all","gaming"]},{title:"Blue and Quincy",desc:"",url:"/helen-aimee-blue-and-quincy-c.jpg",keywords:["all","pets","commissions"]},{title:"Sorceress",desc:"",url:"/helen-aimee-sorceressrgbweb.jpg",keywords:["all","fantasy"]}],ie=re.map((function(e){return e.keywords})),oe=(n=[]).concat.apply(n,Object(V.a)(ie)).filter((function(e,t,a){return a.indexOf(e)===t&&"all"!==e}));oe.unshift("all");var ce=function(e){var t=e.isDesktop,a=e.setCurrentPage,n=Object(l.useState)(null),i=Object(c.a)(n,2),o=i[0],s=i[1],m=Object(l.useState)(!1),u=Object(c.a)(m,2),d=u[0],p=u[1],g=Object(l.useState)("all"),h=Object(c.a)(g,2),f=h[0],y=h[1];Object(l.useEffect)((function(){a("gallery")}),[a]);var b=re.filter((function(e){return e.keywords.includes(f)})),E=function(e){s(e),p(!0)},w=function(){s(null),p(!1)};return r.a.createElement("div",null,r.a.createElement(le,{keywords:oe,setFilter:y}),r.a.createElement(J,{isDesktop:t},b.map((function(e,a){return r.a.createElement(Q,{key:a,id:a,title:e.title,desc:e.desc,url:e.url,keywords:e.keywords,openModal:E,isDesktop:t})}))),r.a.createElement(v,{open:d,closeModal:w,isDesktop:t},r.a.createElement(Z,{currentImageId:o,currentImage:b[o],numImages:b.length-1,incrementImage:function(e){e.preventDefault(),s((function(e){return Math.min(e+1,b.length-1)}))},decrementImage:function(e){e.preventDefault(),s((function(e){return Math.max(e-1,0)}))},isDesktop:t,closeModal:w})))},se=a(19),me=Object(s.b)((function(e){return{container:{padding:"0 10px"},mainLink:{textDecoration:"none",color:"inherit"},link:{color:"inherit"},title:{fontSize:36},contact:{fontSize:16,marginLeft:2}}})),ue=function(){var e=Object(s.c)(),t=me(e);return r.a.createElement("div",{className:t.container},r.a.createElement(se.b,{to:"/",className:t.mainLink},r.a.createElement("div",{className:t.title},"Helen Aimee Art")),r.a.createElement("div",{className:t.contact},r.a.createElement("a",{href:"mailto:helen.aimee.art@gmail.com",className:t.link},"helen.aimee.art@gmail.com")))},de=Object(s.b)((function(e){return{ul:{listStyle:"none",display:"flex",alignItems:"center"},li:{fontSize:20,padding:3},link:{textDecoration:"none",color:e.colorSecondary,backgroundColor:e.colorPrimary,borderBottom:"2px solid rgba(0,0,0,0)",marginRight:20,"&:hover":{color:e.colorTertiary}},activeLink:{textDecoration:"none",color:e.colorSecondary,backgroundColor:e.colorPrimary,borderBottom:"2px solid",borderBottomColor:e.colorTertiary,marginRight:20,"&:hover":{color:e.colorTertiary}}}})),pe=function(e){var t=Object(s.c)(),a=de(t);return r.a.createElement("ul",{className:a.ul},r.a.createElement(se.b,{to:"/",className:"gallery"===e.currentPage?a.activeLink:a.link},r.a.createElement("li",{className:a.li},"Gallery")),r.a.createElement(se.b,{to:"/commissioninfo",className:"commissioninfo"===e.currentPage?a.activeLink:a.link},r.a.createElement("li",{className:a.li},"Commission Info")),r.a.createElement(se.b,{to:"/adoptables",className:"adoptables"===e.currentPage?a.activeLink:a.link},r.a.createElement("li",{className:a.li},"Adoptables")),r.a.createElement(se.b,{to:"/about",className:"about"===e.currentPage?a.activeLink:a.link},r.a.createElement("li",{className:a.li},"About")))},ge=Object(s.b)((function(e){return{ul:{listStyle:"none",position:"absolute",right:0,top:100,backgroundColor:e.colorPrimary,zIndex:1,padding:0,margin:0,width:function(e){return e?175:0},height:"calc(100% - 200px)",transition:"width 0.25s ease"},li:{fontSize:20,padding:"15px 10px",width:150,color:e.colorSecondary,display:function(e){return e?"block":"none"},overflow:"hidden",transition:"0.2s ease",borderLeft:"5px solid rgba(0, 0, 0, 0)"},activeLi:{fontSize:20,padding:"15px 10px",width:150,color:e.colorSecondary,display:function(e){return e?"block":"none"},overflow:"hidden",transition:"0.2s ease",borderLeft:"5px solid",borderLeftColor:e.colorTertiary},link:{textDecoration:"none"},burger:{width:32,marginRight:10}}})),he=function(e){var t=Object(s.c)(),a=Object(l.useState)(!1),n=Object(c.a)(a,2),i=n[0],o=n[1],m=ge(i,{theme:t});return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:"/Hamburger_icon.png",alt:"",onClick:function(){return o(!i)},className:m.burger}),r.a.createElement("ul",{className:m.ul},r.a.createElement(se.b,{to:"/",className:m.link,onClick:function(){return o(!1)}},r.a.createElement("li",{className:"gallery"===e.currentPage?m.activeLi:m.li},"Gallery")),r.a.createElement(se.b,{to:"/commissioninfo",className:m.link,onClick:function(){return o(!1)}},r.a.createElement("li",{className:"commissioninfo"===e.currentPage?m.activeLi:m.li},"Commission Info")),r.a.createElement(se.b,{to:"/adoptables",className:m.link,onClick:function(){return o(!1)}},r.a.createElement("li",{className:"adoptables"===e.currentPage?m.activeLi:m.li},"Adoptables")),r.a.createElement(se.b,{to:"/about",className:m.link,onClick:function(){return o(!1)}},r.a.createElement("li",{className:"about"===e.currentPage?m.activeLi:m.li},"About"))))},fe=Object(s.b)((function(e){return{nav:function(t){return{display:"flex",flexDirection:"row",justifyContent:t?"space-around":"space-between",alignItems:"center",backgroundColor:e.colorPrimary,color:e.colorSecondary,width:"100%",height:100,borderBottom:"3px solid",borderBottomColor:e.colorTertiary}}}})),ye=function(e){var t=e.isDesktop,a=Object(s.c)(),n=fe(t,{theme:a});return r.a.createElement("nav",{className:n.nav},r.a.createElement(ue,null),t?r.a.createElement(pe,{currentPage:e.currentPage}):r.a.createElement(he,{currentPage:e.currentPage}))},be=a(14),Ee=Object(s.b)((function(e){return{app:{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',display:"flex",flexDirection:"column",alignItems:"center",minHeight:"100vh",margin:0,padding:0,position:"relative",backgroundColor:e.colorSecondary,boxSizing:"border-box"},main:{display:"flex",flexDirection:"column",alignItems:"center",width:function(e){return e?"65%":"90%"},flex:1,margin:"25px 0"}}})),we=function(e){var t=e.currentPage,a=e.isDesktop,n=e.setCurrentPage,l=Object(s.c)(),i=Ee(a,{theme:l});return r.a.createElement(se.a,null,r.a.createElement("div",{className:i.app},r.a.createElement(ye,{currentPage:t,isDesktop:a}),r.a.createElement("div",{className:i.main},r.a.createElement(be.c,null,r.a.createElement(be.a,{path:"/commissioninfo",render:function(){return r.a.createElement(D,{setCurrentPage:n,isDesktop:a})}}),r.a.createElement(be.a,{path:"/about",render:function(){return r.a.createElement(u,{setCurrentPage:n,isDesktop:a})}}),r.a.createElement(be.a,{path:"/adoptables",render:function(){return r.a.createElement(C,{setCurrentPage:n,isDesktop:a})}}),r.a.createElement(be.a,{path:"/",render:function(){return r.a.createElement(ce,{setCurrentPage:n,isDesktop:a})}}))),r.a.createElement(K,{isDesktop:a})))},ke={colorPrimary:"#2D3032",colorSecondary:"#F6F6F6",colorTertiary:"#CCC0EF"};o.a.render(r.a.createElement((function(){var e=Object(l.useState)(""),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(l.useState)(window.innerWidth>800),o=Object(c.a)(i,2),m=o[0],u=o[1],d=function(){u(window.innerWidth>800)};return Object(l.useEffect)((function(){return window.addEventListener("resize",d),function(){return window.removeEventListener("resize",d)}})),r.a.createElement(s.a,{theme:ke},r.a.createElement(we,{currentPage:a,setCurrentPage:n,isDesktop:m}))}),null),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.5f78009c.chunk.js.map