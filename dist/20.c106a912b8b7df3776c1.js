/*! For license information please see 20.c106a912b8b7df3776c1.js.LICENSE.txt */
(self.webpackChunkrm_frontend=self.webpackChunkrm_frontend||[]).push([[20],{748:function(e,t,r){var n=r(749);function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in e)if(Object.prototype.hasOwnProperty.call(e,f)){var u=i?Object.getOwnPropertyDescriptor(e,f):null;u&&(u.get||u.set)?Object.defineProperty(r,f,u):r[f]=e[f]}return r.default=e,t&&t.set(e,r),r}},749:function(e){function t(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(r)}e.exports=t},752:function(e,t,r){"use strict";var n=r(676);Object.defineProperty(t,"__esModule",{value:!0}),t.Linkify=t.StyledLink=t.default=t.Text=t.addTextStyles=void 0;var o=n(r(719)),i=n(r(720)),f=n(r(352)),u=n(r(660)),a=n(r(753)),l=r(704),c=r(711),s=n(r(713)),p=function(e){return(0,u.default)(e).withConfig({displayName:"Text",componentId:"sc-1u1rfza-0"})([""," "," "," "," "," "," ",""],l.textStyle,l.fontSize,l.fontWeight,l.letterSpacing,l.fontFamily,(0,l.style)({prop:"textTransform"}),(0,l.style)({prop:"textDecoration"}))};t.addTextStyles=p;var d=(0,c.addBasicStyles)(p(s.default.span));t.Text=d,d.defaultProps={textStyle:"regular",blacklist:c.Box.defaultProps.blacklist};var y=d;t.default=y;var h=(0,u.default)(d).attrs((function(e){return{color:e.isActive?"tomato":e.color}})).withConfig({displayName:"Text__StyledLink",componentId:"sc-1u1rfza-1"})(["text-decoration:",";transition:0.1s color;cursor:pointer;&:hover,&:active{color:",";}&[disabled]{pointer-events:none;opacity:0.4;}"],(function(e){return e.isUnderlined?"underline":"none"}),(0,l.themeGet)("colors.tomato"));t.StyledLink=h,h.defaultProps={as:"a",color:"black",blacklist:d.defaultProps.blacklist.concat(["isActive","isUnderlined"])};t.Linkify=function(e){var t=e.children,r=(0,i.default)(e,["children"]);return f.default.createElement(a.default,{renderer:function(e){return f.default.createElement(h,(0,o.default)({href:e.href},r),e.children)}},t)}},751:function(e,t,r){"use strict";var n=r(748);Object.defineProperty(t,"__esModule",{value:!0});var o={};Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i.default}});var i=n(r(752));Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(o,e)||e in t&&t[e]===i[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}}))}))},753:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}var i=r(352),f=r(754),u=r(755),a=/^\w+:/i,l="http",c=function(e){return"l"+e},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l;return u.test(e)?"mailto:"+e:a.test(e)?e:t+"://"+e},p="() [] {} <> ¿? ¡! «» “” ** __ ~~ \"\" '' ``".split(" "),d=/(\s+|[.,;:]\s|[.,;:]$)/,y=t.split=function(e){var t=[];return e.split(d).forEach((function(e){if(e.length<3||/[a-zA-Z0-9]/.test(e[0]))t.push(e);else{for(var r=0,n=e.length,o=[],i=[];n>2*(1+r);){var f=e[r],u=e[n-r-1],a=void 0;for(a=0;a<p.length;a++)if(f===p[a][0]&&u===p[a][1]){o.push(p[a][0]),i.push(p[a][1]),r++;break}if(a>=p.length)break}r?t.push(o.join(""),e.substr(r,n-2*r),i.reverse().join("")):t.push(e)}})),t},h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.renderer,n=void 0===r?"a":r,u=t.protocol,a=o(t,["renderer","protocol"]),l=[],p=y(e),d=[],h=0,b=function(){d.length&&l.push(i.createElement("span",{key:c(h++)},d.join(""))),d=[]};return p.forEach((function(e){e&&(f.test(e)?(b(),a.href=s(e,u),a.key=c(h++),l.push(i.createElement(n,a,e))):d.push(e))})),b(),l};t.linkifier=h;var b=["a","button"],v=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.keyIndex=0,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"linkify",value:function(e,t,r){var n=this;return"string"==typeof e?h(e,r):Array.isArray(e)?e.map((function(e){return n.linkify(e,t,r)})):e&&t.indexOf(e.type)>=0?e:i.isValidElement(e)?i.cloneElement(e,{key:c(++this.keyIndex)},this.linkify(e.props.children,t,r)):e}},{key:"render",value:function(){var e=this.props,t=e.children,r=e.ignore,n=void 0===r?[]:r,f=o(e,["children","ignore"]);if(0===i.Children.count(t))return null;var u=this.linkify(i.Children.toArray(t),n,f);return 1===u.length&&i.isValidElement(u[0])?u[0]:u}}]),t}(i.Component);v.defaultProps={ignore:b},v.DEFAULT_IGNORED=b,t.default=v},755:function(e){"use strict";e.exports=new RegExp("^([a-z\\u00a1-\\uffff0-9\\-\\.\\+])+@([a-z\\u00a1-\\uffff0-9\\-\\.])+$","i")},754:function(e){"use strict";e.exports=new RegExp("^(?:(?:https?|ftp):/+)?(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))\\.?)(?::\\d{2,5})?(?:[/?#]\\S*)?$","i")}}]);