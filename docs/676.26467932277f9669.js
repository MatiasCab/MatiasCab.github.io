(self.webpackChunkPortfolioML=self.webpackChunkPortfolioML||[]).push([[676],{2120:(V,g,a)=>{"use strict";a.d(g,{t:()=>c});var r=a(8645),e=a(9468);let c=(()=>{class l{constructor(){this.navSection=1,this.eventSubject=new r.x}emitEvent(o){this.navSection=o,this.eventSubject.next(o)}getEvent(){return this.eventSubject.asObservable()}static#t=this.\u0275fac=function(p){return new(p||l)};static#e=this.\u0275prov=e.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})()},9402:function(V){V.exports=function(g){function a(e){if(r[e])return r[e].exports;var c=r[e]={exports:{},id:e,loaded:!1};return g[e].call(c.exports,c,c.exports,a),c.loaded=!0,c.exports}var r={};return a.m=g,a.c=r,a.p="dist/",a(0)}([function(g,a,r){"use strict";function e(i){return i&&i.__esModule?i:{default:i}}var c=Object.assign||function(i){for(var x=1;x<arguments.length;x++){var A=arguments[x];for(var q in A)Object.prototype.hasOwnProperty.call(A,q)&&(i[q]=A[q])}return i},w=(e(r(1)),r(6)),o=e(w),u=e(r(7)),s=e(r(8)),j=e(r(9)),Y=e(r(10)),R=e(r(11)),B=e(r(14)),M=[],F=!1,v={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},z=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(F=!0),F)return M=(0,R.default)(M,v),(0,Y.default)(M,v.once),M},D=function(){M=(0,B.default)(),z()};g.exports={init:function(i){v=c(v,i),M=(0,B.default)();var x=document.all&&!window.atob;return function(i){return!0===i||"mobile"===i&&j.default.mobile()||"phone"===i&&j.default.phone()||"tablet"===i&&j.default.tablet()||"function"==typeof i&&!0===i()}(v.disable)||x?void M.forEach(function(i,x){i.node.removeAttribute("data-aos"),i.node.removeAttribute("data-aos-easing"),i.node.removeAttribute("data-aos-duration"),i.node.removeAttribute("data-aos-delay")}):(v.disableMutationObserver||s.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),v.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",v.easing),document.querySelector("body").setAttribute("data-aos-duration",v.duration),document.querySelector("body").setAttribute("data-aos-delay",v.delay),"DOMContentLoaded"===v.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?z(!0):"load"===v.startEvent?window.addEventListener(v.startEvent,function(){z(!0)}):document.addEventListener(v.startEvent,function(){z(!0)}),window.addEventListener("resize",(0,u.default)(z,v.debounceDelay,!0)),window.addEventListener("orientationchange",(0,u.default)(z,v.debounceDelay,!0)),window.addEventListener("scroll",(0,o.default)(function(){(0,Y.default)(M,v.once)},v.throttleDelay)),v.disableMutationObserver||s.default.ready("[data-aos]",D),M)},refresh:z,refreshHard:D}},function(g,a){},,,,,function(g,a){(function(r){"use strict";function e(t,d,i){function x(m){var O=E,$=T;return E=T=void 0,H=m,k=t.apply($,O)}function C(m){var O=m-S;return void 0===S||O>=d||O<0||N&&m-H>=L}function I(){var m=n();return C(m)?J(m):void(h=setTimeout(I,function q(m){var X=d-(m-S);return N?D(X,L-(m-H)):X}(m)))}function J(m){return h=void 0,y&&E?x(m):(E=T=void 0,k)}function P(){var m=n(),O=C(m);if(E=arguments,T=this,S=m,O){if(void 0===h)return function A(m){return H=m,h=setTimeout(I,d),W?x(m):k}(S);if(N)return h=setTimeout(I,d),x(S)}return void 0===h&&(h=setTimeout(I,d)),k}var E,T,L,k,h,S,H=0,W=!1,N=!1,y=!0;if("function"!=typeof t)throw new TypeError(f);return d=p(d)||0,l(i)&&(W=!!i.leading,L=(N="maxWait"in i)?z(p(i.maxWait)||0,d):L,y="trailing"in i?!!i.trailing:y),P.cancel=function Q(){void 0!==h&&clearTimeout(h),H=0,E=S=T=h=void 0},P.flush=function G(){return void 0===h?k:J(n())},P}function l(t){var d=typeof t>"u"?"undefined":u(t);return!!t&&("object"==d||"function"==d)}function o(t){return"symbol"==(typeof t>"u"?"undefined":u(t))||function w(t){return!!t&&"object"==(typeof t>"u"?"undefined":u(t))}(t)&&v.call(t)==b}function p(t){if("number"==typeof t)return t;if(o(t))return s;if(l(t)){var d="function"==typeof t.valueOf?t.valueOf():t;t=l(d)?d+"":d}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(j,"");var i=Y.test(t);return i||K.test(t)?R(t.slice(2),i?2:8):_.test(t)?s:+t}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f="Expected a function",s=NaN,b="[object Symbol]",j=/^\s+|\s+$/g,_=/^[-+]0x[0-9a-f]+$/i,Y=/^0b[01]+$/i,K=/^0o[0-7]+$/i,R=parseInt,U="object"==(typeof r>"u"?"undefined":u(r))&&r&&r.Object===Object&&r,B="object"==(typeof self>"u"?"undefined":u(self))&&self&&self.Object===Object&&self,M=U||B||Function("return this")(),v=Object.prototype.toString,z=Math.max,D=Math.min,n=function(){return M.Date.now()};g.exports=function c(t,d,i){var x=!0,A=!0;if("function"!=typeof t)throw new TypeError(f);return l(i)&&(x="leading"in i?!!i.leading:x,A="trailing"in i?!!i.trailing:A),e(t,d,{leading:x,maxWait:d,trailing:A})}}).call(a,function(){return this}())},function(g,a){(function(r){"use strict";function c(n){var t=typeof n>"u"?"undefined":p(n);return!!n&&("object"==t||"function"==t)}function w(n){return"symbol"==(typeof n>"u"?"undefined":p(n))||function l(n){return!!n&&"object"==(typeof n>"u"?"undefined":p(n))}(n)&&F.call(n)==s}function o(n){if("number"==typeof n)return n;if(w(n))return f;if(c(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=c(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(b,"");var d=_.test(n);return d||Y.test(n)?K(n.slice(2),d?2:8):j.test(n)?f:+n}var p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},u="Expected a function",f=NaN,s="[object Symbol]",b=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,_=/^0b[01]+$/i,Y=/^0o[0-7]+$/i,K=parseInt,R="object"==(typeof r>"u"?"undefined":p(r))&&r&&r.Object===Object&&r,U="object"==(typeof self>"u"?"undefined":p(self))&&self&&self.Object===Object&&self,B=R||U||Function("return this")(),F=Object.prototype.toString,v=Math.max,z=Math.min,D=function(){return B.Date.now()};g.exports=function e(n,t,d){function i(y){var m=P,O=E;return P=E=void 0,S=y,L=n.apply(O,m)}function q(y){var m=y-h;return void 0===h||m>=t||m<0||W&&y-S>=T}function C(){var y=D();return q(y)?I(y):void(k=setTimeout(C,function A(y){var $=t-(y-h);return W?z($,T-(y-S)):$}(y)))}function I(y){return k=void 0,N&&P?i(y):(P=E=void 0,L)}function G(){var y=D(),m=q(y);if(P=arguments,E=this,h=y,m){if(void 0===k)return function x(y){return S=y,k=setTimeout(C,t),H?i(y):L}(h);if(W)return k=setTimeout(C,t),i(h)}return void 0===k&&(k=setTimeout(C,t)),L}var P,E,T,L,k,h,S=0,H=!1,W=!1,N=!0;if("function"!=typeof n)throw new TypeError(u);return t=o(t)||0,c(d)&&(H=!!d.leading,T=(W="maxWait"in d)?v(o(d.maxWait)||0,t):T,N="trailing"in d?!!d.trailing:N),G.cancel=function J(){void 0!==k&&clearTimeout(k),S=0,P=h=E=k=void 0},G.flush=function Q(){return void 0===k?L:I(D())},G}}).call(a,function(){return this}())},function(g,a){"use strict";function r(p){var u=void 0,f=void 0;for(u=0;u<p.length;u+=1)if((f=p[u]).dataset&&f.dataset.aos||f.children&&r(f.children))return!0;return!1}function e(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function w(p){p&&p.forEach(function(u){var f=Array.prototype.slice.call(u.addedNodes),s=Array.prototype.slice.call(u.removedNodes);if(r(f.concat(s)))return o()})}Object.defineProperty(a,"__esModule",{value:!0});var o=function(){};a.default={isSupported:function c(){return!!e()},ready:function l(p,u){var f=window.document,b=new(e())(w);o=u,b.observe(f.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}}},function(g,a){"use strict";function e(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(a,"__esModule",{value:!0});var c=function(){function f(s,b){for(var j=0;j<b.length;j++){var _=b[j];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(s,_.key,_)}}return function(s,b,j){return b&&f(s.prototype,b),j&&f(s,j),s}}(),l=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,w=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,o=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,p=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=function(){function f(){!function r(f,s){if(!(f instanceof s))throw new TypeError("Cannot call a class as a function")}(this,f)}return c(f,[{key:"phone",value:function(){var s=e();return!(!l.test(s)&&!w.test(s.substr(0,4)))}},{key:"mobile",value:function(){var s=e();return!(!o.test(s)&&!p.test(s.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),f}();a.default=new u},function(g,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0});a.default=function(c,l){var w=window.pageYOffset,o=window.innerHeight;c.forEach(function(p,u){!function(c,l,w){var o=c.node.getAttribute("data-aos-once");l>c.position?c.node.classList.add("aos-animate"):typeof o<"u"&&("false"===o||!w&&"true"!==o)&&c.node.classList.remove("aos-animate")}(p,o+w,l)})}},function(g,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=function e(o){return o&&o.__esModule?o:{default:o}}(r(12));a.default=function(o,p){return o.forEach(function(u,f){u.node.classList.add("aos-init"),u.position=(0,l.default)(u.node,p.offset)}),o}},function(g,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=function e(o){return o&&o.__esModule?o:{default:o}}(r(13));a.default=function(o,p){var u=0,f=0,s=window.innerHeight,b={offset:o.getAttribute("data-aos-offset"),anchor:o.getAttribute("data-aos-anchor"),anchorPlacement:o.getAttribute("data-aos-anchor-placement")};switch(b.offset&&!isNaN(b.offset)&&(f=parseInt(b.offset)),b.anchor&&document.querySelectorAll(b.anchor)&&(o=document.querySelectorAll(b.anchor)[0]),u=(0,l.default)(o).top,b.anchorPlacement){case"top-bottom":break;case"center-bottom":u+=o.offsetHeight/2;break;case"bottom-bottom":u+=o.offsetHeight;break;case"top-center":u+=s/2;break;case"bottom-center":u+=s/2+o.offsetHeight;break;case"center-center":u+=s/2+o.offsetHeight/2;break;case"top-top":u+=s;break;case"bottom-top":u+=o.offsetHeight+s;break;case"center-top":u+=o.offsetHeight/2+s}return b.anchorPlacement||b.offset||isNaN(p)||(f=p),u+f}},function(g,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){for(var c=0,l=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)c+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),l+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:l,left:c}}},function(g,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(c){return{node:c}})}}])}}]);