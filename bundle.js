!function(){"use strict";function t(t){if(!(t>=1))throw new Error;this._size=t,this._call=this._error=null,this._tasks=[],this._data=[],this._waiting=this._active=this._ended=this._start=0}function n(t){if(!t._start)try{e(t)}catch(n){t._tasks[t._ended+t._active-1]&&o(t,n)}}function e(t){for(;t._start=t._waiting&&t._active<t._size;){var n=t._ended+t._active,e=t._tasks[n],o=e.length-1,i=e[o];e[o]=r(t,n),--t._waiting,++t._active,e=i.apply(null,e),t._tasks[n]&&(t._tasks[n]=e||N)}}function r(t,e){return function(r,a){t._tasks[e]&&(--t._active,++t._ended,t._tasks[e]=null,null==t._error&&(null!=r?o(t,r):(t._data[e]=a,t._waiting?n(t):i(t))))}}function o(t,n){var e,r=t._tasks.length;for(t._error=n,t._data=void 0,t._waiting=NaN;--r>=0;)if((e=t._tasks[r])&&(t._tasks[r]=null,e.abort))try{e.abort()}catch(t){}t._active=NaN,i(t)}function i(t){!t._active&&t._call&&t._call(t._error,t._data)}function a(n){return new t(arguments.length?+n:1/0)}function u(){}function c(t,n){var e=new u;if(t instanceof u)t.each(function(t,n){e.set(n,t)});else if(Array.isArray(t)){var r,o=-1,i=t.length;if(null==n)for(;++o<i;)e.set(o,t[o]);else for(;++o<i;)e.set(n(r=t[o],o,t),r)}else if(t)for(var a in t)e.set(a,t[a]);return e}function s(){for(var t,n=0,e=arguments.length,r={};n<e;++n){if(!(t=arguments[n]+"")||t in r)throw new Error("illegal type: "+t);r[t]=[]}return new l(r)}function l(t){this._=t}function f(t,n){return t.trim().split(/^|\s+/).map(function(t){var e="",r=t.indexOf(".");if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}})}function h(t,n){for(var e,r=0,o=t.length;r<o;++r)if((e=t[r]).name===n)return e.value}function d(t,n,e){for(var r=0,o=t.length;r<o;++r)if(t[r].name===n){t[r]=H,t=t.slice(0,r).concat(t.slice(r+1));break}return null!=e&&t.push({name:n,value:e}),t}function p(t,n){function e(t){var n,e=f.status;if(!e&&v(f)||e>=200&&e<300||304===e){if(i)try{n=i.call(r,f)}catch(t){return void u.call("error",r,t)}else n=f;u.call("load",r,n)}else u.call("error",r,t)}var r,o,i,a,u=s("beforesend","progress","load","error"),l=c(),f=new XMLHttpRequest,h=null,d=null,p=0;if("undefined"==typeof XDomainRequest||"withCredentials"in f||!/^(http(s)?:)?\/\//.test(t)||(f=new XDomainRequest),"onload"in f?f.onload=f.onerror=f.ontimeout=e:f.onreadystatechange=function(t){f.readyState>3&&e(t)},f.onprogress=function(t){u.call("progress",r,t)},r={header:function(t,n){return t=(t+"").toLowerCase(),arguments.length<2?l.get(t):(null==n?l.remove(t):l.set(t,n+""),r)},mimeType:function(t){return arguments.length?(o=null==t?null:t+"",r):o},responseType:function(t){return arguments.length?(a=t,r):a},timeout:function(t){return arguments.length?(p=+t,r):p},user:function(t){return arguments.length<1?h:(h=null==t?null:t+"",r)},password:function(t){return arguments.length<1?d:(d=null==t?null:t+"",r)},response:function(t){return i=t,r},get:function(t,n){return r.send("GET",t,n)},post:function(t,n){return r.send("POST",t,n)},send:function(n,e,i){return f.open(n,t,!0,h,d),null==o||l.has("accept")||l.set("accept",o+",*/*"),f.setRequestHeader&&l.each(function(t,n){f.setRequestHeader(n,t)}),null!=o&&f.overrideMimeType&&f.overrideMimeType(o),null!=a&&(f.responseType=a),p>0&&(f.timeout=p),null==i&&"function"==typeof e&&(i=e,e=null),null!=i&&1===i.length&&(i=g(i)),null!=i&&r.on("error",i).on("load",function(t){i(null,t)}),u.call("beforesend",r,f),f.send(null==e?null:e),r},abort:function(){return f.abort(),r},on:function(){var t=u.on.apply(u,arguments);return t===u?r:t}},null!=n){if("function"!=typeof n)throw new Error("invalid callback: "+n);return r.get(n)}return r}function g(t){return function(n,e){t(null==n?e:null)}}function v(t){var n=t.responseType;return n&&"text"!==n?t.response:t.responseText}function m(t,n){return function(e,r){var o=p(e).mimeType(t).response(n);if(null!=r){if("function"!=typeof r)throw new Error("invalid callback: "+r);return o.get(r)}return o}}function w(t){return new Function("d","return {"+t.map(function(t,n){return JSON.stringify(t)+": d["+n+"]"}).join(",")+"}")}function y(t,n){var e=w(t);return function(r,o){return n(e(r),o,t)}}function _(t){var n=Object.create(null),e=[];return t.forEach(function(t){for(var r in t)r in n||e.push(n[r]=r)}),e}function I(t){function n(t,n){var r,o,i=e(t,function(t,e){return r?r(t,e-1):(o=t,void(r=n?y(t,n):w(t)))});return i.columns=o,i}function e(t,n){function e(){if(l>=s)return a;if(o)return o=!1,i;var n,e=l;if(34===t.charCodeAt(e)){for(var r=e;r++<s;)if(34===t.charCodeAt(r)){if(34!==t.charCodeAt(r+1))break;++r}return l=r+2,n=t.charCodeAt(r+1),13===n?(o=!0,10===t.charCodeAt(r+2)&&++l):10===n&&(o=!0),t.slice(e+1,r).replace(/""/g,'"')}for(;l<s;){var u=1;if(n=t.charCodeAt(l++),10===n)o=!0;else if(13===n)o=!0,10===t.charCodeAt(l)&&(++l,++u);else if(n!==c)continue;return t.slice(e,l-u)}return t.slice(e)}for(var r,o,i={},a={},u=[],s=t.length,l=0,f=0;(r=e())!==a;){for(var h=[];r!==i&&r!==a;)h.push(r),r=e();n&&null==(h=n(h,f++))||u.push(h)}return u}function r(n,e){return null==e&&(e=_(n)),[e.map(a).join(t)].concat(n.map(function(n){return e.map(function(t){return a(n[t])}).join(t)})).join("\n")}function o(t){return t.map(i).join("\n")}function i(n){return n.map(a).join(t)}function a(t){return null==t?"":u.test(t+="")?'"'+t.replace(/\"/g,'""')+'"':t}var u=new RegExp('["'+t+"\n]"),c=t.charCodeAt(0);return{parse:n,parseRows:e,format:r,formatRows:o}}function E(t){t=t||{};for(var n=z+(t.type||G),e=t.date,r=t.blocks||(t.zoom?K[t.zoom-1]:K[0]),o=r+"d",i=[e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()].map(function(t){return T(t,2)}).join(""),a=e.getUTCFullYear(),u=T(e.getUTCMonth()+1,2),c=T(e.getUTCDate(),2),s=[n,o,$,a,u,c,i].join("/"),l=[],f=0;f<r;f++)for(var h=0;h<r;h++){var d=h+"_"+f+".png",p=s+"_"+d;l.push({name:d,url:k(p),x:h,y:f})}return{tiles:l,blocks:r,date:e}}function b(t){if("string"==typeof t){var n=t.match(/(\d{4})-(\d{2})-(\d{2})\s(\d{2}):(\d{2}):(\d{2})Z/);return n[2]-=1,new Date(Date.UTC.apply(this,n.slice(1)))}return t}function k(t){var n=432e3;return"https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?url="+t+"&container=focus&refresh="+n}function T(t,n){for(var e=t+"";e.length<n;)e="0"+e;return e}function C(t,n){q("https://himawari-8.appspot.com/latest"+(t===J?"?infrared=true":""),function(t,e){if(t)throw t;var r=e.date;n(b(r+"Z"))})}function S(t){q("http://epic.gsfc.nasa.gov/api/images.php",function(n,e){if(n)throw n;if(0!==e.length){var r=e[e.length-1];r.date=b(r.date+"Z"),t(r)}})}function x(){for(var t=document.getElementById("output").clientHeight*window.devicePixelRatio,n=t/$,e=0;e<K.length;e++){var r=K[e];if(r>n)return r}return console.log(t),K[K.length-1]}function A(t){var n=Math.floor((new Date-t)/1e3),e=Math.floor(n/31536e3);return e>1?e+" years":(e=Math.floor(n/2592e3),e>1?e+" months":(e=Math.floor(n/86400),e>1?e+" days":(e=Math.floor(n/3600),e>1?e+" hours":(e=Math.floor(n/60),e>1?e+" minutes":Math.floor(n)+" seconds"))))}function L(t){document.getElementById("time").innerHTML='<abbr title="'+t+'">'+A(t)+"</abbr> ago"}function j(t){switch(t){case Y:document.body.classList.add("dscovr"),document.body.classList.remove("himawari");break;default:document.body.classList.remove("dscovr"),document.body.classList.add("himawari")}}function D(t,n){L(t),it=t,j(n),at=n}function M(t,n){function e(t,n){var e=new Image;e.setAttribute("crossOrigin","anonymous"),e.onload=function(){c.drawImage(e,t.x*$,t.y*$,$,$),n()},e.src=t.url}if(!it||t.getTime()!==it.getTime()||at!==n){var r=!localStorage.getItem(et);r&&D(t,n);var o=E({date:t,blocks:x(),type:n}),i=o.blocks*$,u=r?document.getElementById("output"):document.createElement("canvas"),c=u.getContext("2d");c.canvas.width=i,c.canvas.height=i;var s=a();o.tiles.forEach(function(t){s.defer(e,t)}),s.awaitAll(function(e){if(e)throw e;if(!r){var o=document.getElementById("output"),a=o.getContext("2d");a.canvas.width=i,a.canvas.height=i,a.drawImage(u,0,0)}D(t,n);var c=u.toDataURL("image/jpeg",V);localStorage.setItem(nt,c),localStorage.setItem(et,t),localStorage.setItem(rt,n)})}}function R(t){if(!it||t.date.getTime()!==it.getTime()||at!==Y){var n=!localStorage.getItem(et);n&&D(t.date,Y);var e=n?document.getElementById("output"):document.createElement("canvas"),r=e.getContext("2d");r.canvas.width=Q,r.canvas.height=Q;var o=new Image;o.setAttribute("crossOrigin","anonymous"),o.onload=function(){if(r.drawImage(o,0,0),!n){var i=document.getElementById("output"),a=i.getContext("2d");a.canvas.width=Q,a.canvas.height=Q,a.drawImage(e,0,0)}D(t.date,Y);var u=e.toDataURL("image/jpeg",V);localStorage.setItem(nt,u),localStorage.setItem(et,t.date),localStorage.setItem(rt,Y)},o.src=k(F+t.image+".png")}}function O(){function t(t){C(t,function(n){M(n,t)})}function n(){S(function(t){R(t)})}navigator.onLine&&(ot?chrome.storage.sync.get({imageType:G},function(e){switch(e.imageType){case Y:n();break;case J:case G:default:t(e.imageType)}}):t(G))}function U(){var t=document.getElementById("output"),n=t.getContext("2d"),e=new Date(localStorage.getItem(et)),r=new Image;r.onload=function(){n.canvas.width=r.width,n.canvas.height=r.height,n.drawImage(r,0,0),D(e,localStorage.getItem(rt))},r.src=localStorage.getItem(nt)}var B=[].slice,N={};t.prototype=a.prototype={constructor:t,defer:function(t){if("function"!=typeof t||this._call)throw new Error;if(null!=this._error)return this;var e=B.call(arguments,1);return e.push(t),++this._waiting,this._tasks.push(e),n(this),this},abort:function(){return null==this._error&&o(this,new Error("abort")),this},await:function(t){if("function"!=typeof t||this._call)throw new Error;return this._call=function(n,e){t.apply(null,[n].concat(e))},i(this),this},awaitAll:function(t){if("function"!=typeof t||this._call)throw new Error;return this._call=t,i(this),this}};var P="$";u.prototype=c.prototype={constructor:u,has:function(t){return P+t in this},get:function(t){return this[P+t]},set:function(t,n){return this[P+t]=n,this},remove:function(t){var n=P+t;return n in this&&delete this[n]},clear:function(){for(var t in this)t[0]===P&&delete this[t]},keys:function(){var t=[];for(var n in this)n[0]===P&&t.push(n.slice(1));return t},values:function(){var t=[];for(var n in this)n[0]===P&&t.push(this[n]);return t},entries:function(){var t=[];for(var n in this)n[0]===P&&t.push({key:n.slice(1),value:this[n]});return t},size:function(){var t=0;for(var n in this)n[0]===P&&++t;return t},empty:function(){for(var t in this)if(t[0]===P)return!1;return!0},each:function(t){for(var n in this)n[0]===P&&t(this[n],n.slice(1),this)}};var H=(c.prototype,{value:function(){}});l.prototype=s.prototype={constructor:l,on:function(t,n){var e,r=this._,o=f(t+"",r),i=-1,a=o.length;{if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n);for(;++i<a;)if(e=(t=o[i]).type)r[e]=d(r[e],t.name,n);else if(null==n)for(e in r)r[e]=d(r[e],t.name,null);return this}for(;++i<a;)if((e=(t=o[i]).type)&&(e=h(r[e],t.name)))return e}},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new l(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,r,o=new Array(e),i=0;i<e;++i)o[i]=arguments[i+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(r=this._[t],i=0,e=r.length;i<e;++i)r[i].value.apply(n,o)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],o=0,i=r.length;o<i;++o)r[o].value.apply(n,e)}};var q=m("application/json",function(t){return JSON.parse(t.responseText)}),z=(I(","),I("\t"),"http://himawari8-dl.nict.go.jp/himawari8/img/"),F="http://epic.gsfc.nasa.gov/epic-archive/natural/png/",X="http://himawari8.nict.go.jp/",Z="http://epic.gsfc.nasa.gov/",J="INFRARED_FULL",G="D531106",Y="EPIC",$=550,K=[1,4,8,16,20],Q=2048,V=.9,W=6e4,tt=1e4,nt="imageData",et="cachedDate",rt="cachedImageType",ot=window.chrome&&chrome.app.getDetails(),it=null,at=null;window.setInterval(O,W),window.addEventListener("online",O),localStorage.getItem(et)&&U(),O(),window.setInterval(function(){it&&L(it)},tt),ot&&(document.body.classList.add("extension"),document.getElementById("go-to-options").addEventListener("click",function(){chrome.runtime.openOptionsPage()})),document.getElementById("explore").addEventListener("click",function(){window.open(at===Y?Z:X,"_self")})}();
//# sourceMappingURL=bundle.js.map
