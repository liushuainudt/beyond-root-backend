(function(t){function e(e){for(var r,s,u=e[0],i=e[1],c=e[2],l=0,p=[];l<u.length;l++)s=u[l],o[s]&&p.push(o[s][0]),o[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);f&&f(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var i=n[s];0!==o[i]&&(r=!1)}r&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},a=[];function s(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"672cfd4e"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,r){n=o[t]=[e,r]});e.push(n[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=s(t),a=function(e){i.onerror=i.onload=null,clearTimeout(c);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+r+": "+a+")");s.type=r,s.request=a,n[1](s)}o[t]=void 0}};var c=setTimeout(function(){a({type:"timeout",target:i})},12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var f=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"078f":function(t,e,n){},1347:function(t,e,n){t.exports=n.p+"img/boc-logo.bebbf3ab.png"},1373:function(t,e,n){"use strict";var r=n("078f"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n    "),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("router-view")],1)},a=[],s=(n("034f"),n("2877")),u={},i=Object(s["a"])(u,o,a,!1,null,null,null),c=i.exports,l=n("8c4f"),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"BoC logo",src:n("1347"),width:"20%",height:"20%"}}),r("Cmd")],1)},p=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"RNNXgb"},[n("div",{staticClass:"SDkEP"},[n("div",{staticClass:"a4bIc"},[n("div",{staticClass:"vdLsw gsfi"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"gLFyf gsfi",attrs:{maxlength:"2048",type:"text",placeholder:"Enter the  command to run or script path",name:"message",id:"message",autocomplete:"on"},domProps:{value:t.message},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitMsg(e)},input:function(e){e.target.composing||(t.message=e.target.value)}}})])])])]),n("center",[n("input",{staticClass:"submitcss",attrs:{value:"Let's Roll","aria-label":"Let's Roll",name:"btnK",type:"button"},on:{click:t.submitMsg}})])],1)},m=[],v=n("bc3a"),h=n.n(v),b={name:"Cmd",data:function(){return{message:void 0==this.message?"":this.message}},methods:{submitMsg:function(){var t="http://localhost:955/runsh?cmd=",e=this.message,n="";t+=e;var r={title:""};h.a.post(t).then(function(t){n=t.data,n.length<1&&(n="May Run Successfully..."),alert(n,r)}).catch(function(t){alert(t.data)})}}},g=b,y=(n("1373"),Object(s["a"])(g,d,m,!1,null,"370c520f",null)),w=y.exports,_={name:"home",components:{Cmd:w}},x=_,j=Object(s["a"])(x,f,p,!1,null,"175e0669",null),k=j.exports;r["a"].use(l["a"]);var C=new l["a"]({routes:[{path:"/",name:"home",component:k},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]});r["a"].config.productionTip=!1,new r["a"]({router:C,render:function(t){return t(c)}}).$mount("#app")},"64a9":function(t,e,n){}});
//# sourceMappingURL=app.a5c6ffc6.js.map