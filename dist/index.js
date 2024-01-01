"use strict";var g=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=g(function(f,a){
var m=require('@stdlib/assert-is-integer/dist').isPrimitive,u=require('@stdlib/assert-is-string/dist').isPrimitive,n=require('@stdlib/error-tools-fmtprodmsg/dist');function l(r,e,t){var i;if(!u(r))throw new TypeError(n('1Pb3F',r));if(!u(e))throw new TypeError(n('1Pb39',e));if(arguments.length>2){if(!m(t))throw new TypeError(n('1Pb2m',t));i=r.lastIndexOf(e,t)}else i=r.lastIndexOf(e);return i===-1?"":r.substring(i+e.length)}a.exports=l
});var v=s();module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
