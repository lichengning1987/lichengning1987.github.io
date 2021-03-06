if(!window.jq||typeof jq!=="function"){var jq=function(f){function x(a,c,b){var d=h.createDocumentFragment();if(b){for(b=a.length-1;b>=0;b--)d.insertBefore(a[b],d.firstChild);c.insertBefore(d,c.firstChild)}else{for(b=0;b<a.length;b++)d.appendChild(a[b]);c.appendChild(d)}}function u(a){return a in v?v[a]:v[a]=RegExp("(^|\\s)"+a+"(\\s|$)")}function p(a){for(var c=0;c<a.length;c++)a.indexOf(a[c])!=c&&(a.splice(c,1),c--);return a}function y(a,c){var b=[];if(a==g)return b;for(;a;a=a.nextSibling)a.nodeType==
1&&a!==c&&b.push(a);return b}function z(a,c){try{return c.querySelectorAll(a)}catch(b){return[]}}function q(a,c){if(a){if(a.nodeType)return c[c.length++]=a;for(var b=0,d=a.length;b<d;b++)c[c.length++]=a[b]}}function o(){}function A(a,c){a.os={};a.os.webkit=c.match(/WebKit\/([\d.]+)/)?!0:!1;a.os.android=c.match(/(Android)\s+([\d.]+)/)||c.match(/Silk-Accelerated/)?!0:!1;a.os.androidICS=a.os.android&&c.match(/(Android)\s4/)?!0:!1;a.os.ipad=c.match(/(iPad).*OS\s([\d_]+)/)?!0:!1;a.os.iphone=!a.os.ipad&&
c.match(/(iPhone\sOS)\s([\d_]+)/)?!0:!1;a.os.webos=c.match(/(webOS|hpwOS)[\s\/]([\d.]+)/)?!0:!1;a.os.touchpad=a.os.webos&&c.match(/TouchPad/)?!0:!1;a.os.ios=a.os.ipad||a.os.iphone;a.os.playbook=c.match(/PlayBook/)?!0:!1;a.os.blackberry=a.os.playbook||c.match(/BlackBerry/)?!0:!1;a.os.blackberry10=a.os.blackberry&&c.match(/Safari\/536/)?!0:!1;a.os.chrome=c.match(/Chrome/)?!0:!1;a.os.opera=c.match(/Opera/)?!0:!1;a.os.fennec=c.match(/fennec/i)?!0:c.match(/Firefox/)?!0:!1;a.os.ie=c.match(/MSIE 10.0/i)?
!0:!1;a.os.ieTouch=a.os.ie&&c.toLowerCase().match(/touch/i)?!0:!1;a.os.supportsTouch=f.DocumentTouch&&h instanceof f.DocumentTouch||"ontouchstart"in f;a.feat={};var b=h.documentElement.getElementsByTagName("head")[0];a.feat.nativeTouchScroll=typeof b.style["-webkit-overflow-scrolling"]!=="undefined"||a.os.ieTouch;a.feat.cssPrefix=a.os.webkit?"Webkit":a.os.fennec?"Moz":a.os.ie?"ms":a.os.opera?"O":"";a.feat.cssTransformStart=!a.os.opera?"3d(":"(";a.feat.cssTransformEnd=!a.os.opera?",0)":")";if(a.os.android&&
!a.os.webkit)a.os.android=!1}function r(a){return a._jqmid||(a._jqmid=K++)}function L(a,c,b,d){c=B(c);if(c.ns)var e=RegExp("(?:^| )"+c.ns.replace(" "," .* ?")+"(?: |$)");return(i[r(a)]||[]).filter(function(a){return a&&(!c.e||a.e==c.e)&&(!c.ns||e.test(a.ns))&&(!b||a.fn==b||typeof a.fn==="function"&&typeof b==="function"&&""+a.fn===""+b)&&(!d||a.sel==d)})}function B(a){a=(""+a).split(".");return{e:a[0],ns:a.slice(1).sort().join(" ")}}function C(a,c,b){e.isObject(a)?e.each(a,b):a.split(/\s/).forEach(function(a){b(a,
c)})}function s(a,c,b,d,g){var f=r(a),h=i[f]||(i[f]=[]);C(c,b,function(b,c){var f=g&&g(c,b),k=f||c,i=function(b){var c=k.apply(a,[b].concat(b.data));c===!1&&b.preventDefault();return c},f=e.extend(B(b),{fn:c,proxy:i,sel:d,del:f,i:h.length});h.push(f);a.addEventListener(f.e,i,!1)})}function t(a,c,b,d){var e=r(a);C(c||"",b,function(b,c){L(a,b,c,d).forEach(function(b){delete i[e][b.i];a.removeEventListener(b.e,b.proxy,!1)})})}function M(a){var c=e.extend({originalEvent:a},a);e.each(N,function(b,d){c[b]=
function(){this[d]=O;return a[b].apply(a,arguments)};c[d]=P});return c}function D(a,c){if(c&&a.dispatchEvent){var b=e.Event("destroy",{bubbles:!1});a.dispatchEvent(b)}if((b=r(a))&&i[b]){for(var d in i[b])a.removeEventListener(i[b][d].e,i[b][d].proxy,!1);delete i[b]}}function E(a,c){if(a){var b=a.childNodes;if(b&&b.length>0)for(var d in b)E(b[d],c);D(a,c)}}var g,h=f.document,m=[],F=m.slice,v=[],Q=1,R=/^\s*<(\w+)[^>]*>/,j={},n={},l=function(a,c){this.length=0;if(a)if(a instanceof l&&c==g)return a;else if(e.isFunction(a))return e(h).ready(a);
else if(e.isArray(a)&&a.length!=g){for(var b=0;b<a.length;b++)this[this.length++]=a[b];return this}else if(e.isObject(a)&&e.isObject(c)){if(a.length==g)a.parentNode==c&&(this[this.length++]=a);else for(b=0;b<a.length;b++)a[b].parentNode==c&&(this[this.length++]=a[b]);return this}else if(e.isObject(a)&&c==g)return this[this.length++]=a,this;else if(c!==g){if(c instanceof l)return c.find(a)}else c=h;else return this;return this.selector(a,c)},e=function(a,c){return new l(a,c)};e.is$=function(a){return a instanceof
l};e.map=function(a,c){var b,d=[],f;if(e.isArray(a))for(f=0;f<a.length;f++)b=c(a[f],f),b!==g&&d.push(b);else if(e.isObject(a))for(f in a)a.hasOwnProperty(f)&&(b=c(a[f],f),b!==g&&d.push(b));return e([d])};e.each=function(a,c){var b;if(e.isArray(a))for(b=0;b<a.length;b++){if(c(b,a[b])===!1)break}else if(e.isObject(a))for(b in a)if(a.hasOwnProperty(b)&&c(b,a[b])===!1)break;return a};e.extend=function(a){a==g&&(a=this);if(arguments.length===1){for(var c in a)this[c]=a[c];return this}else F.call(arguments,
1).forEach(function(b){for(var c in b)a[c]=b[c]});return a};e.isArray=function(a){return a instanceof Array&&a.push!=g};e.isFunction=function(a){return typeof a==="function"};e.isObject=function(a){return typeof a==="object"};e.fn=l.prototype={constructor:l,forEach:m.forEach,reduce:m.reduce,push:m.push,indexOf:m.indexOf,concat:m.concat,selector:function(a,c){a=a.trim();if(a[0]==="#"&&a.indexOf(" ")===-1&&a.indexOf(">")===-1)c==h?q(c.getElementById(a.replace("#","")),this):q(z(a,c),this);else if(a[0]===
"<"&&a[a.length-1]===">"){var b=h.createElement("div");b.innerHTML=a.trim();q(b.childNodes,this)}else q(z(a,c),this);return this},oldElement:g,slice:m.slice,setupOld:function(a){if(a==g)return e();a.oldElement=this;return a},map:function(a){return e.map(this,function(c,b){return a.call(c,b,c)})},each:function(a){this.forEach(function(c,b){a.call(c,b,c)});return this},ready:function(a){h.readyState==="complete"||h.readyState==="loaded"||!e.os.ie&&h.readyState==="interactive"?a():h.addEventListener("DOMContentLoaded",
a,!1);return this},find:function(a){if(this.length===0)return g;for(var c=[],b,d=0;d<this.length;d++){b=e(a,this[d]);for(var f=0;f<b.length;f++)c.push(b[f])}return e(p(c))},html:function(a,c){if(this.length===0)return g;if(a===g)return this[0].innerHTML;for(var b=0;b<this.length;b++)c!==!1&&e.cleanUpContent(this[b],!1,!0),this[b].innerHTML=a;return this},text:function(a){if(this.length===0)return g;if(a===g)return this[0].textContent;for(var c=0;c<this.length;c++)this[c].textContent=a;return this},
css:function(a,c,b){b=b!=g?b:this[0];if(this.length===0)return g;if(c==g&&typeof a==="string")return f.getComputedStyle(b),b.style[a]?b.style[a]:f.getComputedStyle(b)[a];for(b=0;b<this.length;b++)if(e.isObject(a))for(var d in a)this[b].style[d]=a[d];else this[b].style[a]=c;return this},vendorCss:function(a,c,b){return this.css(e.feat.cssPrefix+a,c,b)},empty:function(){for(var a=0;a<this.length;a++)e.cleanUpContent(this[a],!1,!0),this[a].innerHTML="";return this},hide:function(){if(this.length===0)return this;
for(var a=0;a<this.length;a++)if(this.css("display",null,this[a])!="none")this[a].setAttribute("jqmOldStyle",this.css("display",null,this[a])),this[a].style.display="none";return this},show:function(){if(this.length===0)return this;for(var a=0;a<this.length;a++)if(this.css("display",null,this[a])=="none")this[a].style.display=this[a].getAttribute("jqmOldStyle")?this[a].getAttribute("jqmOldStyle"):"block",this[a].removeAttribute("jqmOldStyle");return this},toggle:function(a){for(var c=a===!0?!0:!1,
b=0;b<this.length;b++)f.getComputedStyle(this[b]).display!=="none"||a!==g&&c===!1?(this[b].setAttribute("jqmOldStyle",this[b].style.display),this[b].style.display="none"):(this[b].style.display=this[b].getAttribute("jqmOldStyle")!=g?this[b].getAttribute("jqmOldStyle"):"block",this[b].removeAttribute("jqmOldStyle"));return this},val:function(a){if(this.length===0)return a===g?g:this;if(a==g)return this[0].value;for(var c=0;c<this.length;c++)this[c].value=a;return this},attr:function(a,c){if(this.length===
0)return c===g?g:this;if(c===g&&!e.isObject(a))return this[0].jqmCacheId&&j[this[0].jqmCacheId][a]?this[0].jqmCacheId&&j[this[0].jqmCacheId][a]:this[0].getAttribute(a);for(var b=0;b<this.length;b++)if(e.isObject(a))for(var d in a)e(this[b]).attr(d,a[d]);else if(e.isArray(c)||e.isObject(c)||e.isFunction(c)){if(!this[b].jqmCacheId)this[b].jqmCacheId=e.uuid();j[this[b].jqmCacheId]||(j[this[b].jqmCacheId]={});j[this[b].jqmCacheId][a]=c}else c==null&&c!==g?(this[b].removeAttribute(a),this[b].jqmCacheId&&
j[this[b].jqmCacheId][a]&&delete j[this[b].jqmCacheId][a]):this[b].setAttribute(a,c);return this},removeAttr:function(a){for(var c=this,b=0;b<this.length;b++)a.split(/\s+/g).forEach(function(d){c[b].removeAttribute(d);c[b].jqmCacheId&&j[c[b].jqmCacheId][a]&&delete j[c[b].jqmCacheId][a]});return this},prop:function(a,c){if(this.length===0)return c===g?g:this;if(c===g&&!e.isObject(a)){var b;return this[0].jqmCacheId&&n[this[0].jqmCacheId][a]?this[0].jqmCacheId&&n[this[0].jqmCacheId][a]:!(b=this[0][a])&&
a in this[0]?this[0][a]:b}for(b=0;b<this.length;b++)if(e.isObject(a))for(var d in a)e(this[b]).prop(d,a[d]);else if(e.isArray(c)||e.isObject(c)||e.isFunction(c)){if(!this[b].jqmCacheId)this[b].jqmCacheId=e.uuid();n[this[b].jqmCacheId]||(n[this[b].jqmCacheId]={});n[this[b].jqmCacheId][a]=c}else c==null&&c!==g?e(this[b]).removeProp(a):this[b][a]=c;return this},removeProp:function(a){for(var c=this,b=0;b<this.length;b++)a.split(/\s+/g).forEach(function(d){c[b][d]&&delete c[b][d];c[b].jqmCacheId&&n[c[b].jqmCacheId][a]&&
delete n[c[b].jqmCacheId][a]});return this},remove:function(a){a=e(this).filter(a);if(a==g)return this;for(var c=0;c<a.length;c++)e.cleanUpContent(a[c],!0,!0),a[c].parentNode.removeChild(a[c]);return this},addClass:function(a){for(var c=0;c<this.length;c++){var b=this[c].className,d=[],e=this;a.split(/\s+/g).forEach(function(a){e.hasClass(a,e[c])||d.push(a)});this[c].className+=(b?" ":"")+d.join(" ");this[c].className=this[c].className.trim()}return this},removeClass:function(a){for(var c=0;c<this.length;c++){if(a==
g){this[c].className="";break}var b=this[c].className;a.split(/\s+/g).forEach(function(a){b=b.replace(u(a)," ")});this[c].className=b.length>0?b.trim():""}return this},replaceClass:function(a,c){for(var b=0;b<this.length;b++)if(a==g)this[b].className=c;else{var d=this[b].className;a.split(/\s+/g).concat(c.split(/\s+/g)).forEach(function(a){d=d.replace(u(a)," ")});d=d.trim();this[b].className=d.length>0?(d+" "+c).trim():c}return this},hasClass:function(a,c){if(this.length===0)return!1;c||(c=this[0]);
return u(a).test(c.className)},append:function(a,c){if(a&&a.length!=g&&a.length===0)return this;if(e.isArray(a)||e.isObject(a))a=e(a);var b;for(b=0;b<this.length;b++)if(a.length&&typeof a!="string")a=e(a),x(a,this[b],c);else{var d=R.test(a)?e(a):g;if(d==g||d.length==0)d=h.createTextNode(a);d.nodeName!=g&&d.nodeName.toLowerCase()=="script"&&(!d.type||d.type.toLowerCase()==="text/javascript")?f.eval(d.innerHTML):d instanceof l?x(d,this[b],c):c!=g?this[b].insertBefore(d,this[b].firstChild):this[b].appendChild(d)}return this},
appendTo:function(a){e(a).append(this)},prependTo:function(a){e(a).append(this,!0)},prepend:function(a){return this.append(a,1)},insertBefore:function(a,c){if(this.length==0)return this;a=e(a).get(0);if(!a||a.length==0)return this;for(var b=0;b<this.length;b++)c?a.parentNode.insertBefore(this[b],a.nextSibling):a.parentNode.insertBefore(this[b],a);return this},insertAfter:function(a){this.insertBefore(a,!0)},get:function(a){a=a==g?0:a;a<0&&(a+=this.length);return this[a]?this[a]:g},offset:function(){if(this.length===
0)return g;if(this[0]==f)return{left:0,top:0,right:0,bottom:0,width:f.innerWidth,height:f.innerHeight};else var a=this[0].getBoundingClientRect();return{left:a.left+f.pageXOffset,top:a.top+f.pageYOffset,right:a.right+f.pageXOffset,bottom:a.bottom+f.pageYOffset,width:a.right-a.left,height:a.bottom-a.top}},height:function(){return this.offset().height},width:function(){return this.offset().width},parent:function(a){if(this.length==0)return g;for(var c=[],b=0;b<this.length;b++)this[b].parentNode&&c.push(this[b].parentNode);
return this.setupOld(e(p(c)).filter(a))},children:function(a){if(this.length==0)return g;for(var c=[],b=0;b<this.length;b++)c=c.concat(y(this[b].firstChild));return this.setupOld(e(c).filter(a))},siblings:function(a){if(this.length==0)return g;for(var c=[],b=0;b<this.length;b++)this[b].parentNode&&(c=c.concat(y(this[b].parentNode.firstChild,this[b])));return this.setupOld(e(c).filter(a))},closest:function(a,c){if(this.length==0)return g;var b=this[0],d=e(a,c);if(d.length==0)return e();for(;b&&d.indexOf(b)==
-1;)b=b!==c&&b!==h&&b.parentNode;return e(b)},filter:function(a){if(this.length==0)return g;if(a==g)return this;for(var c=[],b=0;b<this.length;b++){var d=this[b];d.parentNode&&e(a,d.parentNode).indexOf(d)>=0&&c.push(d)}return this.setupOld(e(p(c)))},not:function(a){if(this.length==0)return g;for(var c=[],b=0;b<this.length;b++){var d=this[b];d.parentNode&&e(a,d.parentNode).indexOf(d)==-1&&c.push(d)}return this.setupOld(e(p(c)))},data:function(a,c){return this.attr("data-"+a,c)},end:function(){return this.oldElement!=
g?this.oldElement:e()},clone:function(a){a=a===!1?!1:!0;if(this.length==0)return g;for(var c=[],b=0;b<this.length;b++)c.push(this[b].cloneNode(a));return e(c)},size:function(){return this.length},serialize:function(){if(this.length==0)return"";for(var a=[],c=0;c<this.length;c++)this.slice.call(this[c].elements).forEach(function(b){var c=b.getAttribute("type");if(b.nodeName.toLowerCase()!="fieldset"&&!b.disabled&&c!="submit"&&c!="reset"&&c!="button"&&(c!="radio"&&c!="checkbox"||b.checked)&&b.getAttribute("name"))if(b.type==
"select-multiple")for(c=0;c<b.options.length;c++)b.options[c].selected&&a.push(b.getAttribute("name")+"="+encodeURIComponent(b.options[c].value));else a.push(b.getAttribute("name")+"="+encodeURIComponent(b.value))});return a.join("&")},eq:function(a){return e(this.get(a))},index:function(a){return a?this.indexOf(e(a)[0]):this.parent().children().indexOf(this[0])},is:function(a){return!!a&&this.filter(a).length>0}};var G={type:"GET",beforeSend:o,success:o,error:o,complete:o,context:g,timeout:0,crossDomain:null};
e.jsonP=function(a){var c="jsonp_callback"+ ++Q,b="",d=h.createElement("script");f[c]=function(g){clearTimeout(b);e(d).remove();delete f[c];a.success.call(void 0,g)};d.src=a.url.replace(/=\?/,"="+c);if(a.error)d.onerror=function(){clearTimeout(b);a.error.call(void 0,"","error")};e("head").append(d);a.timeout>0&&(b=setTimeout(function(){a.error.call(void 0,"","timeout")},a.timeout));return{}};e.ajax=function(a){var c;try{var b=a||{},d;for(d in G)typeof b[d]=="undefined"&&(b[d]=G[d]);if(!b.url)b.url=
f.location;if(!b.contentType)b.contentType="application/x-www-form-urlencoded";if(!b.headers)b.headers={};if(!("async"in b)||b.async!==!1)b.async=!0;if(b.dataType)switch(b.dataType){case "script":b.dataType="text/javascript, application/javascript";break;case "json":b.dataType="application/json";break;case "xml":b.dataType="application/xml, text/xml";break;case "html":b.dataType="text/html";break;case "text":b.dataType="text/plain";break;default:b.dataType="text/html";break;case "jsonp":return e.jsonP(a)}else b.dataType=
"text/html";if(e.isObject(b.data))b.data=e.param(b.data);b.type.toLowerCase()==="get"&&b.data&&(b.url+=b.url.indexOf("?")===-1?"?"+b.data:"&"+b.data);if(/=\?/.test(b.url))return e.jsonP(b);if(b.crossDomain===null)b.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(b.url)&&RegExp.$2!=f.location.host;if(!b.crossDomain)b.headers=e.extend({"X-Requested-With":"XMLHttpRequest"},b.headers);var g,k=b.context,h=/^([\w-]+:)\/\//.test(b.url)?RegExp.$1:f.location.protocol;c=new f.XMLHttpRequest;c.onreadystatechange=
function(){var a=b.dataType;if(c.readyState===4){clearTimeout(g);var d,f=!1;if(c.status>=200&&c.status<300||c.status===0&&h=="file:"){if(a==="application/json"&&!/^\s*$/.test(c.responseText))try{d=JSON.parse(c.responseText)}catch(i){f=i}else a==="application/xml, text/xml"?d=c.responseXML:a=="text/html"?(d=c.responseText,e.parseJS(d)):d=c.responseText;c.status===0&&d.length===0&&(f=!0);f?b.error.call(k,c,"parsererror",f):b.success.call(k,d,"success",c)}else f=!0,b.error.call(k,c,"error");b.complete.call(k,
c,f?"error":"success")}};c.open(b.type,b.url,b.async);if(b.withCredentials)c.withCredentials=!0;if(b.contentType)b.headers["Content-Type"]=b.contentType;for(var i in b.headers)c.setRequestHeader(i,b.headers[i]);if(b.beforeSend.call(k,c,b)===!1)return c.abort(),!1;b.timeout>0&&(g=setTimeout(function(){c.onreadystatechange=o;c.abort();b.error.call(k,c,"timeout")},b.timeout));c.send(b.data)}catch(j){console.log(j)}return c};e.get=function(a,c){return this.ajax({url:a,success:c})};e.post=function(a,c,
b,d){typeof c==="function"&&(b=c,c={});d===g&&(d="html");return this.ajax({url:a,type:"POST",data:c,dataType:d,success:b})};e.getJSON=function(a,c,b){typeof c==="function"&&(b=c,c={});return this.ajax({url:a,data:c,success:b,dataType:"json"})};e.param=function(a,c){var b=[];if(a instanceof l)a.each(function(){b.push((c?c+"[]":this.id)+"="+encodeURIComponent(this.value))});else for(var d in a){var f=c?c+"["+d+"]":d,g=a[d];b.push(e.isObject(g)?e.param(g,f):f+"="+encodeURIComponent(g))}return b.join("&")};
e.parseJSON=function(a){return JSON.parse(a)};e.parseXML=function(a){return(new DOMParser).parseFromString(a,"text/xml")};A(e,navigator.userAgent);e.__detectUA=A;if(typeof String.prototype.trim!=="function")String.prototype.trim=function(){this.replace(/(\r\n|\n|\r)/gm,"").replace(/^\s+|\s+$/,"");return this};e.uuid=function(){var a=function(){return((1+Math.random())*65536|0).toString(16).substring(1)};return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()};e.getCssMatrix=function(a){if(a==g)return f.WebKitCSSMatrix||
f.MSCSSMatrix||{a:0,b:0,c:0,d:0,e:0,f:0};try{if(f.WebKitCSSMatrix)return new WebKitCSSMatrix(f.getComputedStyle(a).webkitTransform);else if(f.MSCSSMatrix)return new MSCSSMatrix(f.getComputedStyle(a).transform);else{var c=f.getComputedStyle(a)[e.feat.cssPrefix+"Transform"].replace(/[^0-9\-.,]/g,"").split(",");return{a:+c[0],b:+c[1],c:+c[2],d:+c[3],e:+c[4],f:+c[5]}}}catch(b){return{a:0,b:0,c:0,d:0,e:0,f:0}}};var i={},K=1;e.event={add:s,remove:t};e.fn.bind=function(a,c){for(var b=0;b<this.length;b++)s(this[b],
a,c);return this};e.fn.unbind=function(a,c){for(var b=0;b<this.length;b++)t(this[b],a,c);return this};e.fn.one=function(a,c){return this.each(function(b,d){s(this,a,c,null,function(a,b){return function(){var c=a.apply(d,arguments);t(d,b,a);return c}})})};var O=function(){return!0},P=function(){return!1},N={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};e.fn.delegate=function(a,c,b){for(var d=0;d<this.length;d++){var f=
this[d];s(f,c,b,a,function(b){return function(c){var d,g=e(c.target).closest(a,f).get(0);if(g)return d=e.extend(M(c),{currentTarget:g,liveFired:f}),b.apply(g,[d].concat([].slice.call(arguments,1)))}})}return this};e.fn.undelegate=function(a,c,b){for(var d=0;d<this.length;d++)t(this[d],c,b,a);return this};e.fn.on=function(a,c,b){return c===g||e.isFunction(c)?this.bind(a,c):this.delegate(c,a,b)};e.fn.off=function(a,c,b){return c===g||e.isFunction(c)?this.unbind(a,c):this.undelegate(c,a,b)};e.fn.trigger=
function(a,c,b){typeof a=="string"&&(a=e.Event(a,b));a.data=c;for(c=0;c<this.length;c++)this[c].dispatchEvent(a);return this};e.Event=function(a,c){var b=h.createEvent("Events"),d=!0;if(c)for(var e in c)e=="bubbles"?d=!!c[e]:b[e]=c[e];b.initEvent(a,d,!0,null,null,null,null,null,null,null,null,null,null,null,null);return b};e.bind=function(a,c,b){if(!a.__events)a.__events={};e.isArray(c)||(c=[c]);for(var d=0;d<c.length;d++)a.__events[c[d]]||(a.__events[c[d]]=[]),a.__events[c[d]].push(b)};e.trigger=
function(a,c,b){var d=!0;if(!a.__events)return d;e.isArray(c)||(c=[c]);e.isArray(b)||(b=[]);for(var f=0;f<c.length;f++)if(a.__events[c[f]])for(var g=a.__events[c[f]],h=0;h<g.length;h++)e.isFunction(g[h])&&g[h].apply(a,b)===!1&&(d=!1);return d};e.unbind=function(a,c,b){if(!a.__events)return ret;e.isArray(c)||(c=[c]);for(var d=0;d<c.length;d++)if(a.__events[c[d]])for(var f=a.__events[c[d]],h=0;h<f.length;h++)if(b==g&&delete f[h],f[h]==b){f.splice(h,1);break}};e.proxy=function(a,c,b){return function(){if(b)return a.apply(c,
b);return a.apply(c,arguments)}};var S=function(a,c){for(var b=0;b<a.length;b++)E(a[b],c)};e.cleanUpContent=function(a,c,b){if(a){var d=a.childNodes;d&&d.length>0&&e.asap(S,{},[F.apply(d,[0]),b]);c&&D(a,b)}};var w=[],H=[],I=[];e.asap=function(a,c,b){if(!e.isFunction(a))throw"$.asap - argument is not a valid function";w.push(a);H.push(c?c:{});I.push(b?b:[]);f.postMessage("jqm-asap","*")};f.addEventListener("message",function(a){a.source==f&&a.data=="jqm-asap"&&(a.stopPropagation(),w.length>0&&w.shift().apply(H.shift(),
I.shift()))},!0);var J={};e.parseJS=function(a){if(a){if(typeof a=="string"){var c=h.createElement("div");c.innerHTML=a;a=c}a=a.getElementsByTagName("script");for(c=0;c<a.length;c++)if(a[c].src.length>0&&!J[a[c].src]){var b=h.createElement("script");b.type=a[c].type;b.src=a[c].src;h.getElementsByTagName("head")[0].appendChild(b);J[a[c].src]=1}else f.eval(a[c].innerHTML)}};["click","keydown","keyup","keypress","submit","load","resize","change","select","error"].forEach(function(a){e.fn[a]=function(){return callback?
this.bind(a,callback):this.trigger(a)}});return e}(window);"$"in window||(window.$=jq);if(!window.numOnly)window.numOnly=function(f){if(f===void 0||f==="")return 0;if(isNaN(parseFloat(f)))if(f.replace)f=f.replace(/[^0-9.-]/,"");else return 0;return parseFloat(f)}};//jq.carousel.js
(function (window, $) {

    $.fn.carousel = function (options) {
        $.fn.carousel.defaults = {
            //是否竖直方向滚动
            isVertical: false,
            //滑动阈值
            swipThreshold: 70,
            //是否自动轮播
            isAutoPlay: true,
            //轮播inter
            autoPlayInter: 10000,
            //轮播回调函数
            slideCallback: null,
            //是否显示title
            isShowTitle: true,
            //是否显示spinner
            isShowSpinner: true,
            //是否显示pager
            isShowPager: true
        };

        //每个元素执行
        return this.each(function () {
            var opts = $.extend({}, $.fn.carousel.defaults, options);

            //配置项
            var isVertical = opts.isVertical,
                swipThreshold = opts.swipThreshold,
                isAutoPlay = opts.isAutoPlay,
                autoPlayInter = opts.autoPlayInter,
                slideCallback = opts.slideCallback,
                isShowTitle = opts.isShowTitle,
                isShowSpinner = opts.isShowSpinner,
                isShowPager = opts.isShowPager;

            //变量
            var $this = $(this),
                me = this,
                $wrap, $items, itemCount, $spinner,
                $title, $pagers;

            //初始化函数
            function init() {
                $this.addClass('jq-carousel').html('<div class="jq-carousel-wrap">' + $this.html() + '</div>' + (isShowTitle ? '<div class="jq-carousel-title"></div>' : ''));
                //spinner
                isShowSpinner && $this.prepend($spinner = $('<div class="spinnerbox"><div class="spinner"><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b></div></div>'));

                $wrap = $this.find('.jq-carousel-wrap');
                $items = $wrap.children('*');

                console.log($items);
                //如显示spinner
                isShowSpinner && $items.addClass('unvisible');
                itemCount = $items.length;

                isVertical && $this.addClass('vertical');
                $title = $this.find('.jq-carousel-title');

                //pager
                var html = '';
                if (isShowPager) {
                    html += '<div class="jq-carousel-pager">';
                    for (var i = 0, len = itemCount; i < len; i++) {
                        html += '<span></span>';
                    }
                    html += '</div>';
                }
                $pagers = $this.append(html).find('.jq-carousel-pager span');

                //初始化事件
                initEvent();
            }

            //初始化事件函数
            function initEvent() {
                var width, height, inter, index = 0,
                    startX, startY,
                    swipSpan;

                //设置尺寸函数
                function setSize() {
                    width = $this.width();
                    height = $this.height();

                    $items.css({
                        //width: width + 'px',
                         height: height + 'px'
                    });

                    //水平方向滚动
                    if (!isVertical) {
                        $wrap[0].style.width = width * itemCount + 'px';
                    }
                        //竖直方向滚动
                    else {
                        //$wrap[0].style.width = width + 'px';
                    }
                }

                //设置inter函数
                function setInter() {
                    isAutoPlay && (inter = setInterval(function () {
                        ++index === itemCount && (index = 0);
                        slide();
                    }, autoPlayInter));
                }

                //移动到函数
                function slide(swipSpan) {
                    var translate = -index * (isVertical ? height : width),
                        transform;

                    if (typeof swipSpan === 'number') {
                        //起点
                        if (index === 0 && swipSpan > 0) {
                            swipSpan /= 2;
                        }
                        //终点
                        if (index === itemCount - 1 && swipSpan < 0) {
                            swipSpan /= 2;
                        }
                        translate += swipSpan;
                    }
                    else {
                        //滚动回调函数
                        $.isFunction(slideCallback) && slideCallback(index);
                        //加载图片
                        isShowSpinner && loadImg(index);
                        //title
                        var title = $items.eq(index).attr('data-title');
                        $title.removeClass('visible');
                        title && setTimeout(function () {
                            $title.addClass('visible').html(title);
                        }, 200);
                        //pager状态
                        $pagers.removeClass('selected').eq(index).addClass('selected');
                    }

                    transform = 'translate3d(' + (isVertical ? '0,' + translate + 'px,0' : translate + 'px,0,0') + ')';
                    $wrap.css({
                        '-webkit-transform': transform,
                        'transform': transform
                    });
                }


                //初始化
                //设置尺寸
                setSize();

                //暴露slideToIndex方法
                me.slideToIndex = function (i) {
                    index = i;
                    slide();
                };

                //加载图片函数
                var isLoad = {};
                function loadImg(i) {
                    if (isLoad[i]) {
                        i === index && toggleSpinner(false);
                        return;
                    }

                    var itemEl = $items[i],
                        imgEl = itemEl.tagName.toLowerCase() === 'img' ? itemEl : itemEl.querySelector('img'),
                        src = imgEl.src;

                    //未赋值src
                    if (!src) {
                        //加载完成
                        imgEl.onload = function () {
                            toggleSpinner(false);
                            isLoad[i] = true;
                        };
                        //加载出错
                        imgEl.onerror = function (e) {
                            imgEl.removeAttribute('src');
                            //重新加载
                            loadImg(i);
                        };
                        imgEl.src = imgEl.getAttribute('data-src');
                    }

                    //加载当前图片
                    if (i === index) {
                        //未加载
                        !isLoad[i] && toggleSpinner(true);

                        //加载下一张
                        i < itemCount - 1 && loadImg(i + 1);
                    }
                }

                //切换显示spinner函数
                function toggleSpinner(isShow) {
                    isShow ? $this.addClass('loading') : $this.removeClass('loading');
                }
                //显露spinner方法
                me.toggleSpinner = toggleSpinner;


                //触摸开始事件
                $this.on('touchstart', function (evt) {
                    var touch = evt.targetTouches[0];
                    //记录触摸开始位置
                    startX = touch.pageX;
                    startY = touch.pageY;
                    //重置swipSpan
                    swipSpan = 0;
                    //取消动画
                    $wrap.removeClass('transform');
                    //取消自动轮播
                    isAutoPlay && clearInterval(inter);
                });

                //触摸移动事件
                $this.on('touchmove', function (evt) {
                    var touch = evt.targetTouches[0],
                        swipSpanX = touch.pageX - startX,
                        swipSpanY = touch.pageY - startY;

                    //上下
                    if (isVertical) {
                        if (Math.abs(swipSpanY) > Math.abs(swipSpanX)) {
                            evt.preventDefault();
                            evt.stopPropagation();
                            slide(swipSpan = swipSpanY);
                        }
                    }
                        //左右
                    else {
                        if (Math.abs(swipSpanX) > Math.abs(swipSpanY)) {
                            evt.preventDefault();
                            evt.stopPropagation();
                            slide(swipSpan = swipSpanX);
                        }
                    }
                });

                //触摸结束事件
                $this.on('touchend', function (evt) {
                    //向右,下
                    if (swipSpan > swipThreshold) {
                        --index < 0 && (index = 0);
                    }
                    //向左,上
                    if (swipSpan < -swipThreshold) {
                        ++index === itemCount && (index = itemCount - 1);
                    }

                    //加上动画
                    $wrap.addClass('transform');

                    //滚动
                    swipSpan !== 0 && slide();

                    //自动轮播
                    setInter();
                }).trigger('touchend');

                //window的resize事件
                window.addEventListener('resize', function () {
                    setSize();
                    slide(0);
                }, false);

            }


            //初始化
            init();

        });

    };

})(this, jq);