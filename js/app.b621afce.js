(function(e){function n(n){for(var r,c,u=n[0],i=n[1],d=n[2],f=0,h=[];f<u.length;f++)c=u[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&h.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(n);while(h.length)h.shift()();return a.push.apply(a,d||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,c=1;c<t.length;c++){var u=t[c];0!==o[u]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},c={app:0},o={app:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-1c538104":"3c4b6c94","chunk-02e7f7bc":"94676ac4","chunk-4c97df42":"4194f057","chunk-55b48fca":"de2bd461","chunk-7ea123ed":"f55d1e5a","chunk-8d25a730":"016b07f4","chunk-8dae415c":"83288044","chunk-2d21eb0e":"5376a3c7","chunk-eb7f4338":"c2d5788c"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-02e7f7bc":1,"chunk-4c97df42":1,"chunk-55b48fca":1,"chunk-7ea123ed":1,"chunk-8d25a730":1,"chunk-8dae415c":1,"chunk-eb7f4338":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-1c538104":"31d6cfe0","chunk-02e7f7bc":"42c73a95","chunk-4c97df42":"42910f36","chunk-55b48fca":"500505a7","chunk-7ea123ed":"7b6df71d","chunk-8d25a730":"7b6df71d","chunk-8dae415c":"8780d3d4","chunk-2d21eb0e":"31d6cfe0","chunk-eb7f4338":"5a7c7685"}[e]+".css",o=i.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var d=a[u],f=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(f===r||f===o))return n()}var h=document.getElementsByTagName("style");for(u=0;u<h.length;u++){d=h[u],f=d.getAttribute("data-href");if(f===r||f===o)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var r=n&&n.target&&n.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete c[e],l.parentNode.removeChild(l),t(a)},l.href=o;var s=document.getElementsByTagName("head")[0];s.appendChild(l)})).then((function(){c[e]=0})));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(n,t){r=o[e]=[n,t]}));n.push(r[2]=a);var d,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(e);var h=new Error;d=function(n){f.onerror=f.onload=null,clearTimeout(l);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;h.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",h.name="ChunkLoadError",h.type=r,h.request=c,t[1](h)}o[e]=void 0}};var l=setTimeout((function(){d({type:"timeout",target:f})}),12e4);f.onerror=f.onload=d,document.head.appendChild(f)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="https://chcms.xinxinqushi.com/static/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],f=d.push.bind(d);d.push=n,d=d.slice();for(var h=0;h<d.length;h++)n(d[h]);var l=f;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},4364:function(e,n,t){"use strict";t("d7b0")},"56d7":function(e,n,t){"use strict";t.r(n);t("ac1e");var r=t("543e"),c=t("2b0e"),o=function(){var e=this,n=e._self._c;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],u=(t("4364"),t("2877")),i={},d=Object(u["a"])(i,o,a,!1,null,null,null),f=d.exports,h=t("8c4f");c["a"].use(h["a"]);const l=[{path:"/previewinfo/:id",name:"previewinfo",component:()=>Promise.all([t.e("chunk-1c538104"),t.e("chunk-55b48fca"),t.e("chunk-7ea123ed")]).then(t.bind(null,"b407"))},{path:"/information/:id",name:"information",component:()=>Promise.all([t.e("chunk-1c538104"),t.e("chunk-55b48fca"),t.e("chunk-8d25a730")]).then(t.bind(null,"5798"))},{path:"/information_auth",name:"information_auth",component:()=>Promise.all([t.e("chunk-1c538104"),t.e("chunk-55b48fca"),t.e("chunk-8dae415c")]).then(t.bind(null,"f22d"))},{path:"/share",name:"share",component:()=>Promise.all([t.e("chunk-1c538104"),t.e("chunk-02e7f7bc")]).then(t.bind(null,"fbd8"))},{path:"/MP_verify_M5tymWobGkxEzmur.txt",name:"MP_txt",component:()=>t.e("chunk-2d21eb0e").then(t.t.bind(null,"d749",7))},{path:"/news",name:"news",component:()=>Promise.all([t.e("chunk-1c538104"),t.e("chunk-4c97df42")]).then(t.bind(null,"a2f9"))},{path:"/pdf-viewer",name:"pdf-viewer",component:()=>t.e("chunk-eb7f4338").then(t.bind(null,"0fd8"))}],s=new h["a"]({mode:"hash",routes:l});var p=s;t("499a");p.beforeEach((e,n,t)=>{let r=window.location.href,c=r.indexOf("#"),o=r.indexOf("?");if(r.includes("state=STATE")&&o<c&&o>0){let e=r.split("#"),n=e[0].split("?"),t=`${n[0]}#${e[1]}&${n[1]}`;window.location.href=t}t()}),c["a"].config.productionTip=!1,c["a"].use(r["a"]),new c["a"]({router:p,render:e=>e(f),mounted(){document.dispatchEvent(new Event("render-event"))}}).$mount("#app")},d7b0:function(e,n,t){}});