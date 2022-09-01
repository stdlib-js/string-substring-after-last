// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty,e=Object.prototype,n=e.toString,o=e.__defineGetter__,i=e.__defineSetter__,u=e.__lookupGetter__,a=e.__lookupSetter__;var c=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,c){var l,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof c||null===c||"[object Array]"===n.call(c))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+c+"`.");if((f="value"in c)&&(u.call(t,r)||a.call(t,r)?(l=t.__proto__,t.__proto__=e,delete t[r],t[r]=c.value,t.__proto__=l):t[r]=c.value),p="get"in c,y="set"in c,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,r,c.get),y&&i&&i.call(t,r,c.set),t};function l(t,r,e){c(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function f(t){return"number"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var s=Object.prototype.hasOwnProperty;var v="function"==typeof Symbol?Symbol.toStringTag:"";var _=y()?function(t){var r,e,n,o,i;if(null==t)return b.call(t);e=t[v],i=v,r=null!=(o=t)&&s.call(o,i);try{t[v]=void 0}catch(r){return b.call(t)}return n=b.call(t),r?t[v]=e:delete t[v],n}:function(t){return b.call(t)},g=Number,m=g.prototype.toString;var h=y();function d(t){return"object"==typeof t&&(t instanceof g||(h?function(t){try{return m.call(t),!0}catch(t){return!1}}(t):"[object Number]"===_(t)))}function j(t){return f(t)||d(t)}l(j,"isPrimitive",f),l(j,"isObject",d);var S=Number.POSITIVE_INFINITY,w=g.NEGATIVE_INFINITY,O=Math.floor;function I(t){return t<S&&t>w&&O(r=t)===r;var r}function T(t){return f(t)&&I(t)}function E(t){return d(t)&&I(t.valueOf())}function P(t){return T(t)||E(t)}function N(t){return"string"==typeof t}l(P,"isPrimitive",T),l(P,"isObject",E);var x=String.prototype.valueOf;var V=y();function A(t){return"object"==typeof t&&(t instanceof String||(V?function(t){try{return x.call(t),!0}catch(t){return!1}}(t):"[object String]"===_(t)))}function F(t){return N(t)||A(t)}function G(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}function k(t,r,e){var n;if(!N(t))throw new TypeError(G("0he3R",t));if(!N(r))throw new TypeError(G("0he3L",r));if(arguments.length>2){if(!T(e))throw new TypeError(G("0he2y",e));n=t.lastIndexOf(r,e)}else n=t.lastIndexOf(r);return-1===n?"":t.substring(n+r.length)}l(F,"isPrimitive",N),l(F,"isObject",A);export{k as default};
//# sourceMappingURL=mod.js.map
