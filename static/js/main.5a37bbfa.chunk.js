(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,r){t.exports=r(38)},20:function(t,e,r){},38:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),o=r(12),i=r(2),c=(r(20),function(t){var e=t.label,r=t.value,n=t.onChange;return a.a.createElement("div",null,a.a.createElement("label",null,e),a.a.createElement("input",{className:"input",value:r,onChange:function(t){return n(t.target.value)}}))}),l=[{label:"Afrikaans",value:"af"},{label:"Arabic",value:"ar"},{label:"French",value:"fr"},{label:"Hindi",value:"hi"},{label:"Japanese",value:"ja"},{label:"Portuguese",value:"pt"},{label:"English",value:"en"},{label:"Simplified Chinese",value:"zh-CN"},{label:"Spanish",value:"es"},{label:"Swahili",value:"sw"},{label:"Thai",value:"th"}],u=function(t){var e=t.language,r=t.onLanguageChange;void 0===e&&(e="en");var o=l.find(function(t){return t.value===e});if(!o)throw new Error("Unknown language code '".concat(e,"'"));var c=Object(n.useState)(!1),u=Object(i.a)(c,2),s=u[0],f=u[1];return a.a.createElement("div",null,a.a.createElement("label",{className:"label"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u044f\u0437\u044b\u043a"),a.a.createElement("div",{className:"dropdown ".concat(s&&"is-active")},a.a.createElement("div",{className:"dropdown-trigger"},a.a.createElement("button",{className:"button",onClick:function(){return f(!s)}},a.a.createElement("span",null,o.label),a.a.createElement("span",{className:"icon is-small"},a.a.createElement("i",{className:"fas fa-angle-down"})))),a.a.createElement("div",{className:"dropdown-menu"},a.a.createElement("div",{className:"dropdown-content"},l.map(function(t){var e=t.label,n=t.value;return a.a.createElement("a",{key:Math.random(),href:"#",onClick:function(){return t=n,f(!1),void r(t);var t},className:"dropdown-item"},e)})))))},s=r(13),f=r(14),h=r.n(f);function v(){v=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(_){l=function(t,e,r){return t[e]=r}}function u(t,e,r,a){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),c=new N(a||[]);return n(i,"_invoke",{value:x(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=u;var f={};function h(){}function p(){}function d(){}var m={};l(m,o,function(){return this});var y=Object.getPrototypeOf,g=y&&y(y(k([])));g&&g!==e&&r.call(g,o)&&(m=g);var b=d.prototype=h.prototype=Object.create(m);function w(t){["next","throw","return"].forEach(function(e){l(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var a;n(this,"_invoke",{value:function(n,o){function i(){return new e(function(a,i){!function n(a,o,i,c){var l=s(t[a],t,o);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(f).then(function(t){u.value=t,i(u)},function(t){return n("throw",t,i,c)})}c(l.arg)}(n,o,a,i)})}return a=a?a.then(i,i):i()}})}function x(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return S()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=s(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,f;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function k(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=d,n(b,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=l(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,l(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(E.prototype),l(E.prototype,i,function(){return this}),t.AsyncIterator=E,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new E(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},w(b),l(b,c,"Generator"),l(b,o,function(){return this}),l(b,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var p=function(){var t=Object(s.a)(v().mark(function t(e,r){var n,a,o;return v().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return"https://dictionary.yandex.net/api/v1/dicservice.json",n="".concat("https://dictionary.yandex.net/api/v1/dicservice.json","/lookup?key=dict.1.1.20230331T133954Z.68920df599e7b628.d385dc3ea37a4914b968577b2188a8982bbbc577&lang=ru-").concat(r,"&text=").concat(e),t.prev=2,t.next=5,h.a.post(n);case 5:return a=t.sent,o=a.data,t.abrupt("return",o.def[0].tr[0].text);case 10:t.prev=10,t.t0=t.catch(2);case 12:case"end":return t.stop()}},t,null,[[2,10]])}));return function(e,r){return t.apply(this,arguments)}}(),d=function(t){var e=t.language,r=t.text,o=Object(n.useState)(""),c=Object(i.a)(o,2),l=c[0],u=c[1];return Object(n.useEffect)(function(){r&&p(r,e).then(u)},[r,e]),a.a.createElement("div",null,a.a.createElement("label",{className:"label"},"Output"),a.a.createElement("h1",{className:"title"},l))};function m(){var t=Object(n.useState)("en"),e=Object(i.a)(t,2),r=e[0],o=e[1],l=Object(n.useState)("\u0420\u0435\u0430\u043a\u0446\u0438\u044f"),s=Object(i.a)(l,2),f=s[0],h=s[1];return a.a.createElement("div",null,a.a.createElement(c,{label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0440\u0443\u0441\u0441\u043a\u0438\u0435 \u0441\u043b\u043e\u0432\u0430",onChange:h,value:f}),a.a.createElement(u,{language:r,onLanguageChange:o}),a.a.createElement("hr",null),a.a.createElement(d,{text:f,language:r}))}Object(o.render)(a.a.createElement(m,null),document.querySelector("#root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5a37bbfa.chunk.js.map