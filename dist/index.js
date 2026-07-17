"use strict";var g=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(i){throw (e=0, i)}};};var s=g(function(f,a){
var m=require('@stdlib/assert-is-integer/dist').isPrimitive,u=require('@stdlib/assert-is-string/dist').isPrimitive,n=require('@stdlib/error-tools-fmtprodmsg/dist');function l(r,e,i){var t;if(!u(r))throw new TypeError(n('1Pb3F',r));if(!u(e))throw new TypeError(n('1Pb39',e));if(arguments.length>2){if(!m(i))throw new TypeError(n('1Pb2m',i));t=r.lastIndexOf(e,i)}else t=r.lastIndexOf(e);return t===-1?"":r.substring(t+e.length)}a.exports=l
});var v=s();module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
