// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.1.0-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";function e(e,i,n){var o;if(!s(e))throw new TypeError(t("1Pb3F,Ex",e));if(!s(i))throw new TypeError(t("1Pb39,Ey",i));if(arguments.length>2){if(!r(n))throw new TypeError(t("1Pb2m,L9",n));o=e.lastIndexOf(i,n)}else o=e.lastIndexOf(i);return-1===o?"":e.substring(o+i.length)}export{e as default};
//# sourceMappingURL=index.mjs.map
