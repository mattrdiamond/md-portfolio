!function(t){function e(e){for(var i,r,a=e[0],c=e[1],l=e[2],u=0,h=[];u<a.length;u++)r=a[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&h.push(s[r][0]),s[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);for(d&&d(e);h.length;)h.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,a=1;a<n.length;a++){var c=n[a];0!==s[c]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},s={0:0},o=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var d=c;o.push([62,1]),n()}({29:function(t,e,n){},62:function(t,e,n){"use strict";n.r(e);n(29);var i=document.getElementById("nav-button"),s=document.getElementById("nav-overlay"),o=document.querySelectorAll(".nav-bar a"),r=document.querySelector(".nav-background"),a=document.querySelector(".header-arrow"),c=document.querySelectorAll(".slide-up"),l=document.getElementById("home"),d=document.getElementById("landing-text"),u=document.getElementById("header-attributes"),h=JSON.parse(u.getAttribute("data-words")),f=u.getAttribute("data-wait"),m=document.getElementById("mission-statement"),g=document.getElementById("mission-title");function p(){i.classList.toggle("active"),s.classList.toggle("visible")}i.addEventListener("click",p,!1);n(10),n(27);function v(t){!function(t){t.preventDefault();var e=t.currentTarget.getAttribute("href"),n="#about"!==e?document.querySelector(e).offsetTop-70:document.querySelector(e).offsetTop-35,i=window.pageYOffset,s=n-i,o=1e3,r=null;window.requestAnimationFrame((function t(e){r||(r=e);var n,a,c,l=e-r;window.scrollTo(0,(n=l,a=i,c=s,(n/=o/2)<1?c/2*n*n*n+a:c/2*((n-=2)*n*n+2)+a)),l<o&&window.requestAnimationFrame(t)}))}(t),setTimeout((function(){}),800),i.classList.contains("active")&&p()}o.forEach((function(t){return t.addEventListener("click",v)})),a.addEventListener("click",v);var w=new IntersectionObserver((function(t,e){t.forEach((function(t){if(t.isIntersecting){var n=t.target,i=n.getElementsByClassName("slide-img")[0];i.getAttribute("data-src")&&!i.src&&function(t,e){t.src=t.dataset.src,t.srcset=t.dataset.srcset,t.onload=function(){e.classList.contains("active")?t.classList.add("loaded"):t.classList.add("visible")}}(i,n),t.intersectionRatio>.5&&(n.classList.add("active"),n.parentElement.classList.contains("work-item")&&n.classList.add("overflow"),e.unobserve(n))}}))}),{threshold:[0,1],rootMargin:"0px 0px 75px 0px"});window.addEventListener("load",(function(){c.forEach((function(t){w.observe(t)}))}));n(58);function y(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var b,x=function(){function t(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3e3,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:250;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.txtElement=e,this.words=n,this.txt="",this.wordIndex=0,this.wait=parseInt(i,10),this.speed=s,this.cursor=e.nextElementSibling,this.isDeleting=!1,this.isAnimating=!1,this.timeoutVal}var e,n,i;return e=t,(n=[{key:"type",value:function(){var t=this,e=this.wordIndex%this.words.length,n=this.words[e];this.isAnimating=!0,this.isDeleting?this.txt=n.substring(0,this.txt.length-1):(this.cursor.style.visibility="visible",this.txt=n.substring(0,this.txt.length+1)),this.txtElement.innerHTML='<span class="txt">'.concat(this.txt,"</span>");var i=this.speed;if(this.isDeleting&&(i/=2),1===this.words.length&&this.txt===n)return this.isAnimating=!1,void clearTimeout(this.timeoutVal);this.isDeleting||this.txt!==n?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.wordIndex++,i=2*this.speed):(i=this.wait,this.isDeleting=!0),this.timeoutVal=setTimeout((function(){return t.type()}),i)}},{key:"resetAnimation",value:function(){this.wordIndex=0,this.txt=this.words[0],this.isDeleting=!1}},{key:"stopAnimation",value:function(){this.isAnimating=!1,this.cursor.style.visibility="hidden",clearTimeout(this.timeoutVal)}}])&&y(e.prototype,n),i&&y(e,i),t}(),E=new x(u,h,f,250),L=70/window.innerHeight,I=new IntersectionObserver((function(t,e){var n=t[0].intersectionRatio,i=window.pageYOffset<=b?"up":"down";switch(!0){case n<=L&&"down"===i:return r.classList.remove("hidden"),void(b=l.offsetHeight);case n<=.8&&"down"===i:E.isAnimating&&E.stopAnimation(),d.classList.add("out");break;case n>=.3&&"up"===i:case n>.8:d.classList.remove("out"),E.isAnimating||(E.resetAnimation(),E.type())}r.classList.add("hidden"),b=window.pageYOffset}),{threshold:[L,.8]});window.addEventListener("load",(function(){d.classList.add("loaded"),I.observe(l)}));n(61);document.getElementById("year").innerHTML=(new Date).getFullYear();var O=new x(g,["Mission Statement"],3e3,130),A=window.innerWidth<901?"170px":"130px",S={threshold:[0,1],rootMargin:"0px 0px ".concat(A," 0px")},T=new IntersectionObserver((function(t,e){var n=t[0],i=n.target.getElementsByClassName("mission-large")[0];n.isIntersecting&&(i.src||function(t){t.src=t.dataset.missionSrc,t.srcset=t.dataset.missionSrcset;var e=m.getElementsByClassName("placeholder")[0];t.onload=function(){e.classList.add("hidden")}}(i),1===n.intersectionRatio&&(O.type(),e.disconnect()))}),S);window.addEventListener("load",(function(){T.observe(m)})),window.onload=function(){document.getElementById("load-screen").classList.add("loaded")}}});
//# sourceMappingURL=app.375d67c0.js.map