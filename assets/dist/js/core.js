"use strict";function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var s=r[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),e}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(t){var s={};function o(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=s,o.d=function(e,r,t){o.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(r,e){if(1&e&&(r=o(r)),8&e)return r;if(4&e&&"object"==_typeof(r)&&r&&r.__esModule)return r;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var s in r)o.d(t,s,function(e){return r[e]}.bind(null,s));return t},o.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(r,"a",r),r},o.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},o.p="",o(o.s=0)}([function(e,r,t){t(1),e.exports=t(2)},function(e,r){jQuery(function(e){e(".inputdatemask").mask("99/99/9999",{placeholder:"MM/DD/YYYY"}),e(".inputphonemask").mask("0599 999 99 99",{placeholder:"05__ ___ __ __"})}),window.setTimeout(function(){$(".alert").fadeTo(500,0).slideUp(500,function(){$(this).remove()})},4e3)},function(e,r){var t={tr:{LPRegisterFirstNameAlert:"EN AZ 2 KARAKTER",LPRegisterLastNameAlert:"EN AZ 2 KARAKTER",LPRegisterPhoneAlert:"HATALI TELEFON",LPRegisterEmailAlert:"HATALI E-POSTA",LPRegisterUseTermCheck:"İŞARETLE"},en:{LPRegisterFirstNameAlert:"EN AZ 2 KARAKTER",LPRegisterLastNameAlert:"EN AZ 2 KARAKTER",LPRegisterPhoneAlert:"HATALI TELEFON",LPRegisterEmailAlert:"HATALI E-POSTA",LPRegisterUseTermCheck:"İŞARETLE"}},i=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"translate",value:function(e,r){return t.hasOwnProperty(e)&&t[e].hasOwnProperty(r)?t[e][r]:""}}]),e}();window.lpregisterform=new(function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"sendLPRegisterForm",value:function(){var e=document.getElementById("inputFirstNameId").value,r=document.getElementById("inputLastNameId").value,t=document.getElementById("inputPhoneId").value,s=document.getElementById("inputEmailId").value,o=document.getElementById("termsOfUseCheck").checked;e.trim().length<2&&(this.setLPRegisterFormErrorMessages("msgFirstNameId",i.translate("tr","HomepageRegisterFirstNameAlert")),this.setLPRegisterFormErrorIcon(messageIconSelector,"error","check")),r.trim().length<2&&(this.setLPRegisterFormErrorMessages("msgLastNameId",i.translate("tr","HomepageRegisterLastNameAlert")),this.setLPRegisterFormErrorIcon(messageIconSelector,"error","check")),t.trim().length<14&&(this.setLPRegisterFormErrorMessages("msgPhoneId",i.translate("tr","HomepageRegisterPhoneAlert")),this.setLPRegisterFormErrorIcon(messageIconSelector,"error","check")),/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g.test(s)||(this.setLPRegisterFormErrorMessages("msgEmailId",i.translate("tr","HomepageRegisterEmailAlert")),this.setLPRegisterFormErrorIcon(messageIconSelector,"error","check")),o||document.getElementById("labeltermsOfUseCheck").classList.add("checkederror")}},{key:"setLPRegisterFormErrorMessages",value:function(e,r){document.getElementById(e).innerHTML=r}},{key:"setLPRegisterFormErrorInput",value:function(e){document.getElementById(e)}},{key:"setLPRegisterFormErrorIcon",value:function(e,r,t){var s=document.getElementById(e);s.classList.add(r),s.classList.remove(t)}},{key:"verifyContent",value:function(e,r,t,s){var o=document.getElementById(r),n=(document.getElementById(t),document.getElementById(s),o.value.trim());switch(e){case"inputFirstNameProcess":n.length<2?(this.setLPRegisterFormErrorMessages(t,i.translate("tr","LPRegisterFirstNameAlert")),this.setLPRegisterFormErrorIcon(s,"error","check")):(this.setLPRegisterFormErrorMessages(t,""),this.setLPRegisterFormErrorIcon(s,"check","error")),this.setLPRegisterFormErrorInput(r);break;case"inputLastNameProcess":n.length<2?(this.setLPRegisterFormErrorMessages(t,i.translate("tr","LPRegisterLastNameAlert")),this.setLPRegisterFormErrorIcon(s,"error","check")):(this.setLPRegisterFormErrorMessages(t,""),this.setLPRegisterFormErrorIcon(s,"check","error")),this.setLPRegisterFormErrorInput(r);break;case"inputPhoneProcess":n.length<14?(this.setLPRegisterFormErrorMessages(t,i.translate("tr","LPRegisterPhoneAlert")),this.setLPRegisterFormErrorIcon(s,"error","check")):(this.setLPRegisterFormErrorMessages(t,""),this.setLPRegisterFormErrorIcon(s,"check","error")),this.setLPRegisterFormErrorInput(r);break;case"inputEmailProcess":/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g.test(n)?(this.setLPRegisterFormErrorMessages(t,""),this.setLPRegisterFormErrorIcon(s,"check","error")):(this.setLPRegisterFormErrorMessages(t,i.translate("tr","LPRegisterEmailAlert")),this.setLPRegisterFormErrorIcon(s,"error","check")),this.setLPRegisterFormErrorInput(r)}}},{key:"verifyContentErrorDelete",value:function(e,r,t,s){var o=document.getElementById(r),n=(document.getElementById(t),document.getElementById(s),o.value.trim());switch(e){case"inputFirstNameProcess":0===n.length&&(this.setLPRegisterFormErrorMessages(t,i.translate("tr","LPRegisterFirstNameAlert")),this.setLPRegisterFormErrorIcon(s,"error","check"),this.setLPRegisterFormErrorInput(r));break;case"inputLastNameProcess":0===n.length&&(this.setLPRegisterFormErrorMessages(t,i.translate("tr","LPRegisterLastNameAlert")),this.setLPRegisterFormErrorIcon(s,"error","check"),this.setLPRegisterFormErrorInput(r));break;case"inputPhoneProcess":0===n.length&&(this.setLPRegisterFormErrorMessages(t,i.translate("tr","LPRegisterPhoneAlert")),this.setLPRegisterFormErrorIcon(s,"error","check"),this.setLPRegisterFormErrorInput(r));break;case"inputEmailProcess":0===n.length&&(this.setLPRegisterFormErrorMessages(t,i.translate("tr","LPRegisterEmailAlert")),this.setLPRegisterFormErrorIcon(s,"error","check"),this.setLPRegisterFormErrorInput(r))}}}]),e}())}]);
//# sourceMappingURL=core.js.map
