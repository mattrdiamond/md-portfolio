!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=63)}([function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e(30))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(1);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(3),o=e(16),i=e(10);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(11),o=e(13);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(0),o=e(5);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n,e){"use strict";var r=e(29),o=e(25);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,n,e){var r=e(3),o=e(31),i=e(10),c=e(6),u=e(14),s=e(2),a=e(15),f=Object.getOwnPropertyDescriptor;n.f=r?f:function(t,n){if(t=c(t),n=u(n,!0),a)try{return f(t,n)}catch(t){}if(s(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(1),o=e(12),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(4);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(3),o=e(1),i=e(32);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(3),o=e(15),i=e(17),c=e(14),u=Object.defineProperty;n.f=r?u:function(t,n,e){if(i(t),n=c(n,!0),i(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(4);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){var r=e(19),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,n,e){var r=e(0),o=e(7),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,e){var r=e(37),o=e(19);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n){t.exports={}},function(t,n,e){var r=e(24),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){"use strict";var r=e(49).forEach,o=e(57),i=e(58),c=o("forEach"),u=i("forEach");t.exports=c&&u?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,n,e){var r=e(1);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,n,e){var r=e(0),o=e(59),i=e(25),c=e(5);for(var u in o){var s=r[u],a=s&&s.prototype;if(a&&a.forEach!==i)try{c(a,"forEach",i)}catch(t){a.forEach=i}}},function(t,n,e){},function(t,n,e){var r=e(0),o=e(9).f,i=e(5),c=e(33),u=e(7),s=e(38),a=e(48);t.exports=function(t,n){var e,f,l,d,p,v=t.target,h=t.global,y=t.stat;if(e=h?r:y?r[v]||u(v,{}):(r[v]||{}).prototype)for(f in n){if(d=n[f],l=t.noTargetGet?(p=o(e,f))&&p.value:e[f],!a(h?f:v+(y?".":"#")+f,t.forced)&&void 0!==l){if(typeof d==typeof l)continue;s(d,l)}(t.sham||l&&l.sham)&&i(d,"sham",!0),c(e,f,d,t)}}},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(0),o=e(4),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n,e){var r=e(0),o=e(5),i=e(2),c=e(7),u=e(18),s=e(34),a=s.get,f=s.enforce,l=String(String).split("String");(t.exports=function(t,n,e,u){var s=!!u&&!!u.unsafe,a=!!u&&!!u.enumerable,d=!!u&&!!u.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),f(e).source=l.join("string"==typeof n?n:"")),t!==r?(s?!d&&t[n]&&(a=!0):delete t[n],a?t[n]=e:o(t,n,e)):a?t[n]=e:c(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&a(this).source||u(this)}))},function(t,n,e){var r,o,i,c=e(35),u=e(0),s=e(4),a=e(5),f=e(2),l=e(36),d=e(22),p=u.WeakMap;if(c){var v=new p,h=v.get,y=v.has,g=v.set;r=function(t,n){return g.call(v,t,n),n},o=function(t){return h.call(v,t)||{}},i=function(t){return y.call(v,t)}}else{var m=l("state");d[m]=!0,r=function(t,n){return a(t,m,n),n},o=function(t){return f(t,m)?t[m]:{}},i=function(t){return f(t,m)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!s(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n,e){var r=e(0),o=e(18),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,e){var r=e(20),o=e(21),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){t.exports=!1},function(t,n,e){var r=e(2),o=e(39),i=e(9),c=e(16);t.exports=function(t,n){for(var e=o(n),u=c.f,s=i.f,a=0;a<e.length;a++){var f=e[a];r(t,f)||u(t,f,s(n,f))}}},function(t,n,e){var r=e(40),o=e(42),i=e(47),c=e(17);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(c(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(41),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){var r=e(0);t.exports=r},function(t,n,e){var r=e(43),o=e(46).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(2),o=e(6),i=e(44).indexOf,c=e(22);t.exports=function(t,n){var e,u=o(t),s=0,a=[];for(e in u)!r(c,e)&&r(u,e)&&a.push(e);for(;n.length>s;)r(u,e=n[s++])&&(~i(a,e)||a.push(e));return a}},function(t,n,e){var r=e(6),o=e(23),i=e(45),c=function(t){return function(n,e,c){var u,s=r(n),a=o(s.length),f=i(c,a);if(t&&e!=e){for(;a>f;)if((u=s[f++])!=u)return!0}else for(;a>f;f++)if((t||f in s)&&s[f]===e)return t||f||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,n,e){var r=e(24),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(1),o=/#|\.prototype\./,i=function(t,n){var e=u[c(t)];return e==a||e!=s&&("function"==typeof n?r(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},s=i.NATIVE="N",a=i.POLYFILL="P";t.exports=i},function(t,n,e){var r=e(50),o=e(11),i=e(52),c=e(23),u=e(53),s=[].push,a=function(t){var n=1==t,e=2==t,a=3==t,f=4==t,l=6==t,d=5==t||l;return function(p,v,h,y){for(var g,m,x=i(p),w=o(x),b=r(v,h,3),S=c(w.length),L=0,E=y||u,O=n?E(p,S):e?E(p,0):void 0;S>L;L++)if((d||L in w)&&(m=b(g=w[L],L,x),t))if(n)O[L]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return L;case 2:s.call(O,g)}else if(f)return!1;return l?-1:a||f?f:O}};t.exports={forEach:a(0),map:a(1),filter:a(2),some:a(3),every:a(4),find:a(5),findIndex:a(6)}},function(t,n,e){var r=e(51);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,e){var r=e(13);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(4),o=e(54),i=e(55)("species");t.exports=function(t,n){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},function(t,n,e){var r=e(12);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(0),o=e(20),i=e(2),c=e(21),u=e(26),s=e(56),a=o("wks"),f=r.Symbol,l=s?f:f&&f.withoutSetter||c;t.exports=function(t){return i(a,t)||(u&&i(f,t)?a[t]=f[t]:a[t]=l("Symbol."+t)),a[t]}},function(t,n,e){var r=e(26);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,e){"use strict";var r=e(1);t.exports=function(t,n){var e=[][t];return!!e&&r((function(){e.call(null,n||function(){throw 1},1)}))}},function(t,n,e){var r=e(3),o=e(1),i=e(2),c=Object.defineProperty,u={},s=function(t){throw t};t.exports=function(t,n){if(i(u,t))return u[t];n||(n={});var e=[][t],a=!!i(n,"ACCESSORS")&&n.ACCESSORS,f=i(n,0)?n[0]:s,l=i(n,1)?n[1]:void 0;return u[t]=!!e&&!o((function(){if(a&&!r)return!0;var t={length:-1};a?c(t,1,{enumerable:!0,get:s}):t[1]=1,e.call(t,f,l)}))}},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n){document.getElementById("year").innerHTML=(new Date).getFullYear()},function(t,n){window.onload=function(){document.getElementById("load-screen").classList.add("loaded")}},function(t,n){!function(){if(window.innerWidth<=450){var t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(t,"px"))}}()},function(t,n,e){"use strict";e.r(n);e(28);var r=document.getElementById("nav-button"),o=document.getElementById("nav-overlay"),i=document.querySelectorAll(".nav-bar a"),c=document.querySelector(".nav-background"),u=document.querySelector(".header-arrow"),s=document.querySelectorAll(".slide-up"),a=document.getElementById("home"),f=document.getElementById("landing-text"),l=document.getElementById("header-attributes"),d=JSON.parse(l.getAttribute("data-words")),p=l.getAttribute("data-wait"),v=document.getElementById("mission-statement"),h=document.getElementById("mission-title");function y(){r.classList.toggle("active"),o.classList.toggle("visible")}r.addEventListener("click",y,!1);e(8),e(27);function g(t){!function(t){t.preventDefault();var n=t.currentTarget.getAttribute("href"),e="#about"!==n?document.querySelector(n).offsetTop-70:document.querySelector(n).offsetTop-35,r=window.pageYOffset,o=e-r,i=null;window.requestAnimationFrame((function t(n){i||(i=n);var e,c,u,s=n-i;window.scrollTo(0,(e=s,c=r,u=o,(e/=1e3/2)<1?u/2*e*e*e+c:u/2*((e-=2)*e*e+2)+c)),s<1e3&&window.requestAnimationFrame(t)}))}(t),setTimeout((function(){}),800),r.classList.contains("active")&&y()}i.forEach((function(t){return t.addEventListener("click",g)})),u.addEventListener("click",g);var m=new IntersectionObserver((function(t,n){t.forEach((function(t){if(t.isIntersecting){var e=t.target,r=e.getElementsByClassName("slide-img")[0];r.getAttribute("data-src")&&!r.src&&function(t,n){t.src=t.dataset.src,t.srcset=t.dataset.srcset,t.onload=function(){n.classList.contains("active")?t.classList.add("loaded"):t.classList.add("visible")}}(r,e),t.intersectionRatio>.5&&(e.classList.add("active"),e.parentElement.classList.contains("work-item")&&e.classList.add("overflow"),n.unobserve(e))}}))}),{threshold:[0,.875],rootMargin:"0px 0px 75px 0px"});function x(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function w(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}window.addEventListener("load",(function(){s.forEach((function(t){m.observe(t)}))}));var b,S=function(){function t(n,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3e3,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:250;x(this,t),this.txtElement=n,this.words=e,this.txt="",this.wordIndex=0,this.wait=parseInt(r,10),this.speed=o,this.cursor=n.nextElementSibling,this.isDeleting=!1,this.isAnimating=!1,this.timeoutVal}var n,e,r;return n=t,(e=[{key:"type",value:function(){var t=this,n=this.wordIndex%this.words.length,e=this.words[n];this.isAnimating=!0,this.isDeleting?this.txt=e.substring(0,this.txt.length-1):(this.cursor.style.visibility="visible",this.txt=e.substring(0,this.txt.length+1)),this.txtElement.innerHTML='<span class="txt">'.concat(this.txt,"</span>");var r=this.speed;if(this.isDeleting&&(r/=2),1===this.words.length&&this.txt===e)return this.isAnimating=!1,void clearTimeout(this.timeoutVal);this.isDeleting||this.txt!==e?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.wordIndex++,r=2*this.speed):(r=this.wait,this.isDeleting=!0),this.timeoutVal=setTimeout((function(){return t.type()}),r)}},{key:"resetAnimation",value:function(){this.wordIndex=0,this.txt=this.words[0],this.isDeleting=!1}},{key:"stopAnimation",value:function(){this.isAnimating=!1,this.cursor.style.visibility="hidden",clearTimeout(this.timeoutVal)}}])&&w(n.prototype,e),r&&w(n,r),t}(),L=new S(l,d,p,250),E=70/window.innerHeight,O=new IntersectionObserver((function(t,n){var e=t[0].intersectionRatio,r=window.pageYOffset<=b?"up":"down";switch(!0){case e<=E&&"down"===r:return c.classList.remove("hidden"),void(b=a.offsetHeight);case e<=.8&&"down"===r:L.isAnimating&&L.stopAnimation(),f.classList.add("out");break;case e>=.3&&"up"===r:case e>.8:f.classList.remove("out"),L.isAnimating||(L.resetAnimation(),L.type())}c.classList.add("hidden"),b=window.pageYOffset}),{threshold:[E,.8]});window.addEventListener("load",(function(){f.classList.add("loaded"),O.observe(a)}));e(60);var T=new S(h,["Mission Statement"],3e3,130),j=window.innerWidth<901?"170px":"130px",A={threshold:[0,1],rootMargin:"0px 0px ".concat(j," 0px")},M=new IntersectionObserver((function(t,n){var e=t[0],r=e.target.getElementsByClassName("mission-large")[0];e.isIntersecting&&(r.src||function(t){t.src=t.dataset.missionSrc,t.srcset=t.dataset.missionSrcset;var n=v.getElementsByClassName("placeholder")[0];t.onload=function(){n.classList.add("hidden")}}(r),1===e.intersectionRatio&&(T.type(),n.disconnect()))}),A);window.addEventListener("load",(function(){M.observe(v)}));e(61),e(62)}]);
//# sourceMappingURL=app.db0046b2.js.map