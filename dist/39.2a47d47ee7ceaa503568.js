(self.webpackChunkrm_frontend=self.webpackChunkrm_frontend||[]).push([[39],{1051:function(e,t,n){"use strict";n.d(t,{oc:function(){return C},O$:function(){return k}});var r=n(660),a=n(352),o=n.n(a),i=n(312),l=n(704),c=n(793),u=n(1052),s=n.n(u),f=n(340),d=n(308),m=n(1054),h=n(674),p=n(1055),g=n(350),v=n(711),y=n(751),x=n.n(y),b=n(677),w=n(813);function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var k,C=o().createContext({}),S=(0,r.default)(x()).withConfig({displayName:"Header___StyledText"})(["text-decoration:none;&:hover{color:",";}.text-on-dark &{color:#fff;&:hover,&.active{color:",";}}.white-theme.scrolled &{color:#000 !important;&:hover,&.active{color:"," !important;}}"],(function(e){return e._css}),(function(e){return e._css2}),(function(e){return e._css3})),F=function(e){var t=e.label,n=e.url,r=e.active,a=e.last;return o().createElement(v.Box,{mr:a?void 0:16,display:"inline-block"},o().createElement(S,{as:"a",href:n,fontFamily:"Graphik",fontWeight:400,fontSize:16,lineHeight:"24px",letterSpacing:"-0.1px",color:r?"tomato":"#000",onClick:function(e){window.location.href.replace(/\/$/,"")===n.replace(/\/$/,"")&&(e.preventDefault(),(0,i.Z)("html").animate({scrollTop:0},300))},_css:(0,l.themeGet)("colors.tomato"),_css2:(0,l.themeGet)("colors.tomato"),_css3:(0,l.themeGet)("colors.tomato")},t))},B=(0,r.default)(v.Box).withConfig({displayName:"Header___StyledBox"})(["display:inline-flex;outline:none;text-decoration:none;&:hover{color:#fff;background-color:",";}"],(function(e){return e._css4})),z=function(e){var t=e.label,n=e.url,r=e.onClick;return o().createElement(B,{as:"a",onClick:r,bg:"rgba(244, 244, 244, 0.96)",borderRadius:200,href:n,width:100,height:40,textAlign:"center",color:"#000",alignItems:"center",justifyContent:"center",_css4:(0,l.themeGet)("colors.tomato")},o().createElement(x(),{fontFamily:"Graphik",fontSize:16,fontWeight:400,letterSpacing:"-0.1px"},t))},A=[64,96,128,192,256],j=function(e,t){var n=e.split(".").pop(),r=function(e){var t=2*e;return A.reduce((function(e,n){return t<=n&&t>e?n:e}),A[0])}(t);return e&&r?e.replace(".".concat(n),"_".concat(r,".").concat(n)):""},I=E(b.breakpoints,1)[0];!function(e){e.features="features",e.pricing="pricing",e.explore="explore",e.examples="examples",e.learn="learn",e.templates="templates"}(k||(k={}));var Z=(0,r.default)(v.Flex).withConfig({displayName:"Header___StyledFlex"})(["cursor:default;"]),L=(0,r.default)(v.Box).withConfig({displayName:"Header___StyledBox2"})(["text-decoration:none;"]),$=(0,r.default)(v.Box).withConfig({displayName:"Header___StyledBox3"})(["font-size:0;"]);t.ZP=function(e){var t=e.activeLink,n=d.ZP.readymag_host,r=d.ZP.readymag_auth_host,i=(0,a.useContext)(h.BackboneContext).model,l=(0,a.useContext)(C).model,u=i?i.activeLink:t,y=s()({bindTo:document&&document.getElementById("rm-header-mobile-portal")}).Portal,b=E((0,a.useState)(!1),2),_=b[0],S=b[1],B=E((0,a.useState)(""),2),A=B[0],O=B[1],H=E((0,a.useState)(""),2),M=H[0],P=H[1];(0,a.useEffect)((function(){f.default.loadLoggedUser((function(e){e&&Object.keys(e).length&&(S(!0),O(e.name),e.pic&&P(j(e.pic,48)))}))}),[]);return o().createElement(o().Fragment,null,o().createElement(c.default,{query:"(min-width: ".concat(I,")")},(function(e){var t=l?l.isDesktop:e,a=t?40:48;return o().createElement(v.Box,{position:"fixed",width:"100%",zIndex:99999},o().createElement(Z,{height:"100%",width:"100%",alignItems:"center",justifyContent:"space-between",p:t?16:"6px 6px"},_?o().createElement(v.Box,{height:a,width:t?"100%":"auto",display:"inline-block"},o().createElement(L,{as:"a",href:r,borderRadius:"50%",bg:"lightGray",alignItems:"center",justifyContent:"center","aria-label":"Profile",height:a,width:a,display:"flex"},M?o().createElement(v.Cover,{height:a,width:a,backgroundImage:"url('".concat(M,"')"),borderRadius:"50%",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}):o().createElement(x(),{fontWeight:400,fontSize:16,lineHeight:1.25,letterSpacing:"-0.04px",fontFamily:"Graphik",textTransform:"uppercase"},function(){if(!A)return"";var e=E(A.split(" "),2),t=e[0],n=e[1];return n?t[0]+n[0]:t[0]}()),o().createElement(w.default,null,"Your profile page"))):o().createElement(v.Box,{height:a,width:"100%"},o().createElement(v.Box,{as:"a",href:n,height:a,display:"inline-block"},o().createElement(m.Z,{size:a,activeLink:!!u}),o().createElement(w.default,null,"Readymag"))),t&&o().createElement(o().Fragment,null,o().createElement(v.Box,{textAlign:"center",width:"100%"},o().createElement(F,{label:"Features",url:"".concat(n,"/features"),active:u===k.features}),o().createElement(F,{label:"Pricing",url:"".concat(n,"/pricing"),active:u===k.pricing}),o().createElement(F,{label:"Examples",url:"".concat(n,"/examples"),active:u===k.explore||u===k.examples}),o().createElement(F,{label:"Learn",url:"".concat(n,"/learn"),active:u===k.learn,last:!0})),o().createElement($,{textAlign:"right",width:"100%"},_?o().createElement(z,{label:"Log out",url:"".concat(r,"/logout")}):o().createElement(o().Fragment,null,o().createElement(z,{label:"Join",url:(0,g._)("authorization.newFlow")?"".concat(n,"/auth/join"):"".concat(n,"/join"),onClick:function(e){e.preventDefault(),f.default.saveJoinData(),f.default.createJoinButtonClickedCookie();var t=e.currentTarget;window.location.href=t.href}}),o().createElement(z,{label:"Log in",url:(0,g._)("authorization.newFlow")?"".concat(n,"/auth/login"):"".concat(n,"/login")}))))))})),o().createElement(y,null,o().createElement(p.Z,{activeLink:u,isAuthorized:_})))}},1055:function(e,t,n){"use strict";var r=n(660),a=n(352),o=n.n(a),i=n(793),l=n(1051),c=n(308),u=n(704),s=n(350),f=n(677),d=n(751),m=n.n(d),h=n(801),p=n(711),g=n(340);function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var x=v(f.breakpoints,1)[0],b=c.ZP.readymag_host,w=c.ZP.readymag_auth_host,E=(0,r.default)(p.Box).withConfig({displayName:"HeaderMobile___StyledBox"})(["display:block;text-decoration:none;pointer-events:",";"],(function(e){return e._css})),_=(0,r.default)(m()).withConfig({displayName:"HeaderMobile___StyledText"})(["&:hover{color:",";}"],(function(e){return e._css2})),k=function(e){var t=e.label,n=e.url,r=e.active,a=e.onClick;return o().createElement(E,{as:"a",onClick:a,mb:40,href:n,_css:r?"none":"all"},o().createElement(_,{lineHeight:"1",letterSpacing:"-2.4px",fontFamily:"Graphik",fontWeight:400,fontSize:32,color:r?"tomato":"#000",_css2:(0,u.themeGet)("colors.tomato")},t))},C=(0,r.default)(p.Box).withConfig({displayName:"HeaderMobile___StyledBox2"})([".constructor:not(.preview) &{display:none !important;}"]),S=(0,r.default)(p.Flex).withConfig({displayName:"HeaderMobile___StyledFlex"})(["transform:translateX(",");transition:transform 0.3s ease-in-out;overflow:scroll;-webkit-overflow-scrolling:touch;"],(function(e){return e._css3}));t.Z=function(e){var t=e.activeLink,n=e.isAuthorized,r=v((0,a.useState)(!1),2),c=r[0],u=r[1];return o().createElement(i.default,{query:"(min-width: ".concat(x,")")},(function(e){return e?o().createElement(o().Fragment,null):o().createElement(C,null,o().createElement(p.Box,{position:"fixed",top:"0",right:"0",m:"6px 6px",zIndex:99999999},o().createElement(p.Box,{as:"button",width:48,height:48,bg:"#fff",borderRadius:"50%",border:"none",p:"0",display:"inline-block",onClick:function(){return u(!c)}},o().createElement(p.Flex,{justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},o().createElement(h.Z,null)))),o().createElement(S,{alignItems:"center",width:"100vw",height:"100vh",position:"fixed",zIndex:9999999,top:"0",left:"0",bg:"#fff",_css3:c?"0":"100%"},o().createElement(p.Box,{width:"100%",p:"68px 20px"},o().createElement(k,{label:"Features",url:"".concat(b,"/features"),active:t===l.O$.features}),o().createElement(k,{label:"Pricing",url:"".concat(b,"/pricing"),active:t===l.O$.pricing}),o().createElement(k,{label:"Examples",url:"".concat(b,"/examples"),active:t===l.O$.examples||t===l.O$.explore}),o().createElement(k,{label:"Learn",url:"".concat(b,"/learn"),active:t===l.O$.learn}),o().createElement(k,{label:"Templates",url:"".concat(b,"/templates"),active:t===l.O$.templates}),n?o().createElement(k,{label:"Log out",url:"".concat(w,"/logout")}):o().createElement(k,{label:"Join or Log in",url:(0,s._)("authorization.newFlow")?"".concat(b,"/auth/join"):"".concat(b,"/join"),onClick:function(e){e.preventDefault(),g.default.saveJoinData(),g.default.createJoinButtonClickedCookie();var t=e.currentTarget;window.location.href=t.href}}))))}))}},1054:function(e,t,n){"use strict";var r=n(352),a=n.n(r);t.Z=function(e){var t=e.activeLink,n=e.size;return a().createElement("svg",{width:"80",height:"80",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 80 80",preserveAspectRatio:"xMidYMid meet",style:{height:"".concat(n,"px"),width:"".concat(n,"px")}},a().createElement("g",{fill:"none",fillRule:"evenodd"},a().createElement("circle",{fill:t?"#000000":"#ec520b",fillRule:"nonzero",cx:"40",cy:"40",r:"40"}),a().createElement("path",{d:"M57.746 59.179v-6.216c0-1.24-.678-1.863-1.801-1.863-1.334 0-2.433.99-2.48 2.191v5.88h-2.254v-6.215c0-1.24-.678-1.864-1.801-1.864-1.334 0-2.433.99-2.48 2.191v5.88h-2.254v-9.717h2.028l.226.827.11.101.108-.101c.453-.624 1.576-1.037 2.48-1.037 1.622 0 2.792.64 3.385 1.653l.561-.624c.562-.624 1.692-1.037 2.59-1.037 2.48 0 3.836 1.45 3.836 3.517v6.418h-2.254v.016zM23.442 28.913h-.414v6.707h-2.215V20h5.381c2.418 0 4.539 1.606 4.539 4.383 0 2.674-2.262 4.382-4.68 4.382l4.976 6.418v.43h-2.526l-5.061-6.7zm2.877-2.214c1.217 0 2.332-.85 2.332-2.23s-1.115-2.23-2.332-2.23h-3.244v4.46h3.244z",stroke:"#FFF",strokeWidth:".2",fill:"#FFF"}),a().createElement("path",{d:"M20.116 58.672l38.23-38.23 1.213 1.211-38.23 38.23-1.213-1.211z",stroke:"#FFF",strokeWidth:".6",fill:"#FFF"})))}},1050:function(e,t,n){"use strict";n.d(t,{Z:function(){return r.ZP}});var r=n(1051)},1049:function(e,t,n){"use strict";n.r(t);var r=n(336),a=n.n(r),o=n(312),i=n(600),l=n.n(i),c=n(1012),u=n(1050),s=n(674),f=c.Z.extend({ignoreScale:!0,render:function(){this.makeBox("widget-rm-header"),this.$header=(0,o.Z)("<div>").appendTo(this.$el).get(0);var e=new(a().Model)({activeLink:this.activeLink});return(0,s.renderReact)({component:u.Z,domElement:this.$header,model:e}),this.rendered=!0,this.widgetIsLoaded(),this},destroy:function(){return l().unmountComponentAtNode(this.$header),c.Z.prototype.destroy.apply(this,arguments)}});t.default=f}}]);