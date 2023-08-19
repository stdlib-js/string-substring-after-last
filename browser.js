// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,l=r.__lookupSetter__,c=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,c){var f,a,p,b;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof c||null===c||"[object Array]"===n.call(c))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+c+"`.");if((a="value"in c)&&(u.call(t,e)||l.call(t,e)?(f=t.__proto__,t.__proto__=r,delete t[e],t[e]=c.value,t.__proto__=f):t[e]=c.value),p="get"in c,b="set"in c,a&&(p||b))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,e,c.get),b&&i&&i.call(t,e,c.set),t};function f(t,e,r){c(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function a(t){return"number"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return p&&"symbol"==typeof Symbol.toStringTag}var y=Object.prototype.toString,s=Object.prototype.hasOwnProperty,_="function"==typeof Symbol?Symbol.toStringTag:"",d=b()?function(t){var e,r,n,o,i;if(null==t)return y.call(t);r=t[_],i=_,e=null!=(o=t)&&s.call(o,i);try{t[_]=void 0}catch(e){return y.call(t)}return n=y.call(t),e?t[_]=r:delete t[_],n}:function(t){return y.call(t)},m=Number,g=m.prototype.toString,v=b();function h(t){return"object"==typeof t&&(t instanceof m||(v?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object Number]"===d(t)))}function j(t){return a(t)||h(t)}f(j,"isPrimitive",a),f(j,"isObject",h);var S=Number.POSITIVE_INFINITY,w=m.NEGATIVE_INFINITY,O=Math.floor;function T(t){return t<S&&t>w&&O(e=t)===e;var e}function I(t){return a(t)&&T(t)}function P(t){return h(t)&&T(t.valueOf())}function E(t){return I(t)||P(t)}function N(t){return"string"==typeof t}f(E,"isPrimitive",I),f(E,"isObject",P);var x=String.prototype.valueOf,A=b();function F(t){return"object"==typeof t&&(t instanceof String||(A?function(t){try{return x.call(t),!0}catch(t){return!1}}(t):"[object String]"===d(t)))}function V(t){return N(t)||F(t)}function G(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}return f(V,"isPrimitive",N),f(V,"isObject",F),function(t,e,r){var n;if(!N(t))throw new TypeError(G("1Pb3F,Ex",t));if(!N(e))throw new TypeError(G("1Pb39,Ey",e));if(arguments.length>2){if(!I(r))throw new TypeError(G("1Pb2m,L9",r));n=t.lastIndexOf(e,r)}else n=t.lastIndexOf(e);return-1===n?"":t.substring(n+e.length)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).substringAfterLast=e();
//# sourceMappingURL=browser.js.map
