!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("node-fetch"),require("http-status")):"function"==typeof define&&define.amd?define(["node-fetch","http-status"],e):"object"==typeof exports?exports["wstrade-api"]=e(require("node-fetch"),require("http-status")):t["wstrade-api"]=e(t._,t._)}(global,(function(t,e){return(()=>{var r={228:t=>{t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},646:(t,e,r)=>{var n=r(228);t.exports=function(t){if(Array.isArray(t))return n(t)}},926:t=>{function e(t,e,r,n,a,s,o){try{var u=t[s](o),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,a)}t.exports=function(t){return function(){var r=this,n=arguments;return new Promise((function(a,s){var o=t.apply(r,n);function u(t){e(o,a,s,u,c,"next",t)}function c(t){e(o,a,s,u,c,"throw",t)}u(void 0)}))}}},575:t=>{t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},913:t=>{function e(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}},713:t=>{t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},860:t=>{t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},206:t=>{t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:(t,e,r)=>{var n=r(646),a=r(860),s=r(379),o=r(206);t.exports=function(t){return n(t)||a(t)||s(t)||o()}},379:(t,e,r)=>{var n=r(228);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},757:(t,e,r)=>{t.exports=r(666)},391:(t,e,r)=>{"use strict";r.d(e,{Z:()=>i});var n=r(757),a=r.n(n),s=r(926),o=r.n(s),u=r(726),c=r(714);const i={all:(x=o()(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.X)(u.Z.ACCOUNT_IDS,{});case 2:return e=t.sent,t.abrupt("return",{tfsa:e.find((function(t){return t.startsWith("tfsa")})),rrsp:e.find((function(t){return t.startsWith("rrsp")})),crypto:e.find((function(t){return t.startsWith("non-registered-crypto")})),personal:e.find((function(t){return t.startsWith("non-registered")&&!t.startsWith("non-registered-crypto")}))});case 4:case"end":return t.stop()}}),t)}))),function(){return x.apply(this,arguments)}),data:(v=o()(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.X)(u.Z.LIST_ACCOUNT,{}));case 1:case"end":return t.stop()}}),t)}))),function(){return v.apply(this,arguments)}),me:(y=o()(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.X)(u.Z.ME,{}));case 1:case"end":return t.stop()}}),t)}))),function(){return y.apply(this,arguments)}),person:(m=o()(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.X)(u.Z.PERSON,{}));case 1:case"end":return t.stop()}}),t)}))),function(){return m.apply(this,arguments)}),history:(d=o()(a().mark((function t(e,r){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.X)(u.Z.HISTORY_ACCOUNT,{interval:e,accountId:r}));case 1:case"end":return t.stop()}}),t)}))),function(t,e){return d.apply(this,arguments)}),activities:(h=o()(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.X)(u.Z.ACTIVITIES,{}));case 1:case"end":return t.stop()}}),t)}))),function(){return h.apply(this,arguments)}),getBankAccounts:(l=o()(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.X)(u.Z.BANK_ACCOUNTS,{}));case 1:case"end":return t.stop()}}),t)}))),function(){return l.apply(this,arguments)}),deposits:(f=o()(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.X)(u.Z.DEPOSITS,{}));case 1:case"end":return t.stop()}}),t)}))),function(){return f.apply(this,arguments)}),positions:(p=o()(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.X)(u.Z.POSITIONS,{accountId:e}));case 1:case"end":return t.stop()}}),t)}))),function(t){return p.apply(this,arguments)})};var p,f,l,h,d,m,y,v,x},726:(t,e,r)=>{"use strict";r.d(e,{p:()=>T,Z:()=>Z});var n,a,s,o,u,c,i,p,f,l,h,d,m,y,v,x,w=r(319),b=r.n(w),g=r(757),k=r.n(g),E=r(926),_=r.n(E),S=r(657),O=r(826),T=20,I={onFailure:(a=_()(k().mark((function t(e){return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e.status,t.t1=e.statusText,t.next=4,e.json();case 4:return t.t2=t.sent,t.abrupt("return",{status:t.t0,reason:t.t1,body:t.t2});case 6:case"end":return t.stop()}}),t)}))),function(t){return a.apply(this,arguments)}),onSuccess:(n=_()(k().mark((function t(e){return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.response.json();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),function(t){return n.apply(this,arguments)})};const Z={LOGIN:{method:"POST",url:"https://trade-service.wealthsimple.com/auth/login",onSuccess:(x=_()(k().mark((function t(e){return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0={access:e.response.headers.get("x-access-token"),refresh:e.response.headers.get("x-refresh-token"),expires:parseInt(e.response.headers.get("x-access-token-expires"))},t.next=3,e.response.json();case 3:return t.t1=t.sent,t.abrupt("return",{tokens:t.t0,accountInfo:t.t1});case 5:case"end":return t.stop()}}),t)}))),function(t){return x.apply(this,arguments)}),onFailure:I.onFailure},REFRESH:{method:"POST",url:"https://trade-service.wealthsimple.com/auth/refresh",onSuccess:(v=_()(k().mark((function t(e){return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{tokens:{access:e.response.headers.get("x-access-token"),refresh:e.response.headers.get("x-refresh-token"),expires:parseInt(e.response.headers.get("x-access-token-expires"))}});case 1:case"end":return t.stop()}}),t)}))),function(t){return v.apply(this,arguments)}),onFailure:I.onFailure},ACCOUNT_IDS:{method:"GET",url:"https://trade-service.wealthsimple.com/account/list",onSuccess:(y=_()(k().mark((function t(e){var r;return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.response.json();case 2:return r=t.sent,t.abrupt("return",r.results.map((function(t){return t.id})));case 4:case"end":return t.stop()}}),t)}))),function(t){return y.apply(this,arguments)}),onFailure:I.onFailure},LIST_ACCOUNT:{method:"GET",url:"https://trade-service.wealthsimple.com/account/list",onSuccess:(m=_()(k().mark((function t(e){var r;return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.response.json();case 2:return r=t.sent,t.abrupt("return",r.results);case 4:case"end":return t.stop()}}),t)}))),function(t){return m.apply(this,arguments)}),onFailure:I.onFailure},ME:{method:"GET",url:"https://trade-service.wealthsimple.com/me",onSuccess:I.onSuccess,onFailure:I.onFailure},PERSON:{method:"GET",url:"https://trade-service.wealthsimple.com/person",onSuccess:I.onSuccess,onFailure:I.onFailure},HISTORY_ACCOUNT:{method:"GET",url:"https://trade-service.wealthsimple.com/account/history/{0}?account_id={1}",parameters:{0:"interval",1:"accountId"},onSuccess:I.onSuccess,onFailure:I.onFailure},ACTIVITIES:{method:"GET",url:"https://trade-service.wealthsimple.com/account/activities",onSuccess:(d=_()(k().mark((function t(e){var r;return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.response.json();case 2:return r=t.sent,t.abrupt("return",r.results);case 4:case"end":return t.stop()}}),t)}))),function(t){return d.apply(this,arguments)}),onFailure:I.onFailure},DEPOSITS:{method:"GET",url:"https://trade-service.wealthsimple.com/deposits",onSuccess:(h=_()(k().mark((function t(e){var r;return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.response.json();case 2:return r=t.sent,t.abrupt("return",r.results);case 4:case"end":return t.stop()}}),t)}))),function(t){return h.apply(this,arguments)}),onFailure:I.onFailure},BANK_ACCOUNTS:{method:"GET",url:"https://trade-service.wealthsimple.com/bank-accounts",onSuccess:(l=_()(k().mark((function t(e){var r;return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.response.json();case 2:return r=t.sent,t.abrupt("return",r.results);case 4:case"end":return t.stop()}}),t)}))),function(t){return l.apply(this,arguments)}),onFailure:I.onFailure},EXCHANGE_RATES:{method:"GET",url:"https://trade-service.wealthsimple.com/forex",onSuccess:I.onSuccess,onFailure:I.onFailure},SECURITY:{method:"GET",url:"https://trade-service.wealthsimple.com/securities?query={0}",parameters:{0:"ticker"},onSuccess:(f=_()(k().mark((function t(e){var r;return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.response.json();case 2:if(0!==(r=t.sent).results.length){t.next=5;break}return t.abrupt("return",Promise.reject({reason:"Security does not exist"}));case 5:return t.abrupt("return",r.results);case 6:case"end":return t.stop()}}),t)}))),function(t){return f.apply(this,arguments)}),onFailure:I.onFailure},EXTENSIVE_SECURITY_DETAILS:{method:"GET",url:"https://trade-service.wealthsimple.com/securities/{0}",parameters:{0:"id"},onSuccess:(p=_()(k().mark((function t(e){return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.response.json();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),function(t){return p.apply(this,arguments)}),onFailure:I.onFailure},POSITIONS:{method:"GET",url:"https://trade-service.wealthsimple.com/account/positions?account_id={0}",parameters:{0:"accountId"},onSuccess:(i=_()(k().mark((function t(e){var r;return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.response.json();case 2:return r=t.sent,t.abrupt("return",r.results);case 4:case"end":return t.stop()}}),t)}))),function(t){return i.apply(this,arguments)}),onFailure:I.onFailure},ORDERS_BY_PAGE:{method:"GET",url:"https://trade-service.wealthsimple.com/orders?offset={0}&account_id={1}",parameters:{0:"offset",1:"accountId"},onSuccess:(c=_()(k().mark((function t(e){var r;return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.response.json();case 2:return r=t.sent,t.abrupt("return",{total:r.total,orders:r.results});case 4:case"end":return t.stop()}}),t)}))),function(t){return c.apply(this,arguments)}),onFailure:I.onFailure},ALL_ORDERS:{method:"GET",url:"https://trade-service.wealthsimple.com/orders?account_id={0}",parameters:{0:"accountId"},onSuccess:(u=_()(k().mark((function t(e){var r,n,a,s,o;return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.response.json();case 2:if(r=t.sent,n=Math.ceil(r.total/T),a=r.results,!(n>1)){t.next=15;break}s=2;case 7:if(!(s<=n)){t.next=15;break}return t.next=10,O.Z.page(e.arguments.accountId,s);case 10:o=t.sent,a.push.apply(a,b()(o.orders));case 12:s++,t.next=7;break;case 15:return t.abrupt("return",{total:a.length,orders:a});case 16:case"end":return t.stop()}}),t)}))),function(t){return u.apply(this,arguments)}),onFailure:I.onFailure},FILTERED_ORDERS:{method:"GET",url:"https://trade-service.wealthsimple.com/orders?account_id={0}",parameters:{0:"accountId"},onSuccess:(o=_()(k().mark((function t(e){var r,n,a,s,o,u;return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.response.json();case 2:if(r=t.sent,n=Math.ceil(r.total/T),a=function(t){var r=e.arguments.ticker;if(r){var n=new S.Z({symbol:t.symbol,id:t.security_id});if(!r.weakEquals(n))return!1}return t.status===e.arguments.status},s=r.results.filter(a),!(n>1)){t.next=16;break}o=2;case 8:if(!(o<=n)){t.next=16;break}return t.next=11,O.Z.page(e.arguments.accountId,o);case 11:u=t.sent,s.push.apply(s,b()(u.orders.filter(a)));case 13:o++,t.next=8;break;case 16:return t.abrupt("return",{total:s.length,orders:s});case 17:case"end":return t.stop()}}),t)}))),function(t){return o.apply(this,arguments)}),onFailure:I.onFailure},CANCEL_ORDER:{method:"DELETE",url:"https://trade-service.wealthsimple.com/orders/{0}",parameters:{0:"orderId"},onSuccess:(s=_()(k().mark((function t(e){return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e.arguments.orderId,t.next=3,e.response.json();case 3:return t.t1=t.sent,t.abrupt("return",{order:t.t0,response:t.t1});case 5:case"end":return t.stop()}}),t)}))),function(t){return s.apply(this,arguments)}),onFailure:I.onFailure},PLACE_ORDER:{method:"POST",url:"https://trade-service.wealthsimple.com/orders",onSuccess:I.onSuccess,onFailure:I.onFailure}}},464:(t,e,r)=>{"use strict";r.d(e,{Z:()=>i});var n=r(757),a=r.n(n),s=r(926),o=r.n(s),u=r(714),c=r(726);const i={tokens:null,otp:null,on:function(t,e){this[t]=e},login:(f=o()(a().mark((function t(e,r){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=null,"function"!=typeof this.otp){t.next=4;break}return t.next=4,(0,u.X)(c.Z.LOGIN,{email:e,password:r}).catch((function(){}));case 4:if(t.prev=4,t.t0=u.X,t.t1=c.Z.LOGIN,t.t2=e,t.t3=r,"function"!=typeof this.otp){t.next=15;break}return t.next=12,this.otp();case 12:t.t4=t.sent,t.next=16;break;case 15:t.t4=this.otp;case 16:return t.t5=t.t4,t.t6={email:t.t2,password:t.t3,otp:t.t5},t.next=20,(0,t.t0)(t.t1,t.t6);case 20:n=t.sent,t.next=28;break;case 23:if(t.prev=23,t.t7=t.catch(4),this.otp){t.next=27;break}return t.abrupt("return",Promise.reject("OTP not provided!"));case 27:throw t.t7;case 28:this.tokens=n.tokens;case 29:case"end":return t.stop()}}),t,this,[[4,23]])}))),function(t,e){return f.apply(this,arguments)}),refresh:(p=o()(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.tokens.access=null,t.next=3,(0,u.X)(c.Z.REFRESH,{refresh_token:this.tokens.refresh});case 3:e=t.sent,this.tokens=e.tokens;case 5:case"end":return t.stop()}}),t,this)}))),function(){return p.apply(this,arguments)})};var p,f},500:(t,e,r)=>{"use strict";r.d(e,{Z:()=>a,p:()=>s});var n=[];function a(t){if(null!=t&&t.startsWith("no_")){var e=t.substring(t.indexOf("_")+1);s(e)||n.push(e)}else s(t)&&n.splice(n.indexOf(t),1)}var s=function(t){return n.includes(t)}},657:(t,e,r)=>{"use strict";r.d(e,{Z:()=>c});var n=r(575),a=r.n(n),s=r(913),o=r.n(s),u=["NASDAQ","NYSE","TSX","TSX-V","NEO"];const c=function(){function t(e){if(a()(this,t),this.symbol=null,this.exchange=null,this.id=null,"string"==typeof e){var r=e.split(":");this.symbol=r[0],this.exchange=r[1]}else{if(!e.hasOwnProperty("symbol")&&!e.hasOwnProperty("id"))throw new Error("Invalid ticker '".concat(e,"'"));this.symbol=e.symbol,this.exchange=e.exchange,this.id=e.id}if(this.exchange&&!u.includes(this.exchange))throw new Error("Invalid exchange '".concat(this.exchange,"'!"))}return o()(t,[{key:"format",value:function(){return this.id?this.id:"".concat(this.symbol).concat(this.exchange?":".concat(this.exchange):"")}},{key:"weakEquals",value:function(t){return this.id===t.id||this.symbol===t.symbol}}]),t}()},610:(t,e,r)=>{"use strict";r.d(e,{Z:()=>p});var n=r(757),a=r.n(n),s=r(926),o=r.n(s),u=r(726),c=r(714),i=r(657);const p={exchangeRates:(l=o()(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.X)(u.Z.EXCHANGE_RATES,{}));case 1:case"end":return t.stop()}}),t)}))),function(){return l.apply(this,arguments)}),getSecurity:(f=o()(a().mark((function t(e,r){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=new i.Z(e)).id){t.next=3;break}return t.abrupt("return",(0,c.X)(u.Z.EXTENSIVE_SECURITY_DETAILS,{id:e.id}));case 3:return t.next=5,(0,c.X)(u.Z.SECURITY,{ticker:e.symbol});case 5:if(n=(n=t.sent).filter((function(t){return t.stock.symbol===e.symbol})),e.exchange&&("NEO"===e.exchange&&(e.exchange="AEQUITAS NEO EXCHANGE"),n=n.filter((function(t){return t.stock.primary_exchange===e.exchange}))),!(n.length>1)){t.next=12;break}return t.abrupt("return",Promise.reject({reason:"Multiple securities matched query."}));case 12:if(0!==n.length){t.next=14;break}return t.abrupt("return",Promise.reject({reason:"No securities matched query."}));case 14:if(!r){t.next=16;break}return t.abrupt("return",(0,c.X)(u.Z.EXTENSIVE_SECURITY_DETAILS,{id:n[0].id}));case 16:return t.abrupt("return",n[0]);case 17:case"end":return t.stop()}}),t)}))),function(t,e){return f.apply(this,arguments)})};var f,l},568:(t,e,r)=>{"use strict";r.d(e,{Z:()=>o});var n=r(319),a=r.n(n),s=new(r(545).Headers);const o={add:function(t,e){return s.append(t,e)},remove:function(t){return s.delete(t)},clear:function(){return a()(s).forEach((function(t){return s.delete(t[0])}))},values:function(){return a()(s)}}},352:(t,e,r)=>{var n=r(464).Z,a=r(568).Z,s=r(391).Z,o=r(826).Z,u=r(610).Z,c=r(889).Z,i=r(500).Z;t.exports={auth:n,headers:a,accounts:s,orders:o,quotes:c,data:u,config:i}},714:(t,e,r)=>{"use strict";r.d(e,{X:()=>y});var n=r(319),a=r.n(n),s=r(757),o=r.n(s),u=r(926),c=r.n(u),i=r(545),p=r.n(i),f=r(457),l=r.n(f),h=r(568),d=r(464),m=r(500);function y(t,e){return v.apply(this,arguments)}function v(){return(v=c()(o().mark((function t(e,r){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g(e,r);case 3:if(n=t.sent,![l().OK,l().CREATED].includes(n.status)){t.next=8;break}return t.abrupt("return",e.onSuccess({arguments:r,response:n}));case 8:return t.t0=Promise,t.next=11,e.onFailure(n);case 11:return t.t1=t.sent,t.abrupt("return",t.t0.reject.call(t.t0,t.t1));case 13:t.next=18;break;case 15:throw t.prev=15,t.t2=t.catch(0),t.t2;case 18:case"end":return t.stop()}}),t,null,[[0,15]])})))).apply(this,arguments)}function x(t,e){e=Object.assign({},e);var r=t.url;if(t.parameters)for(var n=0;n<Object.keys(t.parameters).length;n++){if(null===e[t.parameters[n]]||void 0===e[t.parameters[n]])throw new Error("URL Path parameter missing");r=r.replace("{".concat(n,"}"),e[t.parameters[n]]),delete e[t.parameters[n]]}return["GET","HEAD"].includes(t.method)?{url:r,payload:void 0}:{url:r,payload:JSON.stringify(e)}}function w(){return b.apply(this,arguments)}function b(){return(b=c()(o().mark((function t(){var e,r,n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==(e=d.Z.tokens)&&void 0!==e&&e.access){t.next=2;break}return t.abrupt("return",!1);case 2:if(!(0,m.p)("implicit_token_refresh")){t.next=4;break}return t.abrupt("return",!0);case 4:if(!(parseInt(Date.now()/1e3)>=(null===(r=d.Z.tokens)||void 0===r?void 0:r.expires))){t.next=18;break}if(null===(n=d.Z.tokens)||void 0===n||!n.refresh){t.next=17;break}return t.prev=7,t.next=10,d.Z.refresh();case 10:t.next=15;break;case 12:return t.prev=12,t.t0=t.catch(7),t.abrupt("return",Promise.reject("Unable to refresh expired token: ".concat(t.t0)));case 15:t.next=18;break;case 17:return t.abrupt("return",Promise.reject("Access token expired"));case 18:return t.abrupt("return",!0);case 19:case"end":return t.stop()}}),t,null,[[7,12]])})))).apply(this,arguments)}function g(t,e){return k.apply(this,arguments)}function k(){return(k=c()(o().mark((function t(e,r){var n,s,u,c;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new(p().Headers)).append("Content-Type","application/json"),t.next=4,w();case 4:if(!t.sent){t.next=6;break}n.append("Authorization",d.Z.tokens.access);case 6:return h.Z.values().forEach((function(t){return n.append.apply(n,a()(t))})),s=x(e,r),u=s.url,c=s.payload,t.abrupt("return",p()(u,{body:c,method:e.method,headers:n}));case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},826:(t,e,r)=>{"use strict";r.d(e,{Z:()=>R});var n=r(713),a=r.n(n),s=r(757),o=r.n(s),u=r(926),c=r.n(u),i=r(726),p=r(714),f=r(657),l=function(){var t=c()(o().mark((function t(e,r,n){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,p.X)(i.Z.FILTERED_ORDERS,{accountId:e,ticker:r?new f.Z(r):void 0,status:n}));case 1:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}();const h={page:(x=c()(o().mark((function t(e,r){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,p.X)(i.Z.ORDERS_BY_PAGE,{offset:(r-1)*i.p,accountId:e}));case 1:case"end":return t.stop()}}),t)}))),function(t,e){return x.apply(this,arguments)}),all:(v=c()(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,p.X)(i.Z.ALL_ORDERS,{offset:0,accountId:e}));case 1:case"end":return t.stop()}}),t)}))),function(t){return v.apply(this,arguments)}),pending:(y=c()(o().mark((function t(e,r){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",l(e,r,"submitted"));case 1:case"end":return t.stop()}}),t)}))),function(t,e){return y.apply(this,arguments)}),filled:(m=c()(o().mark((function t(e,r){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",l(e,r,"posted"));case 1:case"end":return t.stop()}}),t)}))),function(t,e){return m.apply(this,arguments)}),cancelled:(d=c()(o().mark((function t(e,r){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",l(e,r,"cancelled"));case 1:case"end":return t.stop()}}),t)}))),function(t,e){return d.apply(this,arguments)})};var d,m,y,v,x,w=r(610),b=r(889),g=function(t){return["TSX","TSX-V"].includes(t)};const k={cancel:(j=c()(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,p.X)(i.Z.CANCEL_ORDER,{orderId:e}));case 1:case"end":return t.stop()}}),t)}))),function(t){return j.apply(this,arguments)}),cancelPending:(Z=c()(o().mark((function t(e){var r,n=this;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.pending(e);case 2:return r=t.sent,t.abrupt("return",Promise.all(r.orders.map(function(){var t=c()(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.cancel(e.order_id);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())));case 4:case"end":return t.stop()}}),t)}))),function(t){return Z.apply(this,arguments)}),marketBuy:(I=c()(o().mark((function t(e,r,n){var a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.Z.getSecurity(r,!0);case 2:return a=t.sent,t.t0=p.X,t.t1=i.Z.PLACE_ORDER,t.t2=a.id,t.next=8,b.Z.get(r);case 8:return t.t3=t.sent,t.t4=n,t.t5=e,t.t6={security_id:t.t2,limit_price:t.t3,quantity:t.t4,order_type:"buy_quantity",order_sub_type:"market",time_in_force:"day",account_id:t.t5},t.abrupt("return",(0,t.t0)(t.t1,t.t6));case 13:case"end":return t.stop()}}),t)}))),function(t,e,r){return I.apply(this,arguments)}),limitBuy:(T=c()(o().mark((function t(e,r,n,a){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=p.X,t.t1=i.Z.PLACE_ORDER,t.next=4,w.Z.getSecurity(r);case 4:return t.t2=t.sent.id,t.t3=n,t.t4=a,t.t5=e,t.t6={security_id:t.t2,limit_price:t.t3,quantity:t.t4,order_type:"buy_quantity",order_sub_type:"limit",time_in_force:"day",account_id:t.t5},t.abrupt("return",(0,t.t0)(t.t1,t.t6));case 10:case"end":return t.stop()}}),t)}))),function(t,e,r,n){return T.apply(this,arguments)}),stopLimitBuy:(O=c()(o().mark((function t(e,r,n,a,s){var u;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.Z.getSecurity(r);case 2:if(u=t.sent,!g(u.stock.primary_exchange)||n===a){t.next=5;break}return t.abrupt("return",Promise.reject({reason:"TSX/TSX-V securities must have an equivalent stop and limit price."}));case 5:return t.abrupt("return",(0,p.X)(i.Z.PLACE_ORDER,{security_id:u.id,stop_price:n,limit_price:a,quantity:s,order_type:"buy_quantity",order_sub_type:"stop_limit",time_in_force:"day",account_id:e}));case 6:case"end":return t.stop()}}),t)}))),function(t,e,r,n,a){return O.apply(this,arguments)}),marketSell:(S=c()(o().mark((function t(e,r,n){var a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.Z.getSecurity(r,!0);case 2:return a=t.sent,t.t0=p.X,t.t1=i.Z.PLACE_ORDER,t.t2=a.id,t.next=8,b.Z.get(r);case 8:return t.t3=t.sent,t.t4=n,t.t5=e,t.t6={security_id:t.t2,market_value:t.t3,quantity:t.t4,order_type:"sell_quantity",order_sub_type:"market",time_in_force:"day",account_id:t.t5},t.abrupt("return",(0,t.t0)(t.t1,t.t6));case 13:case"end":return t.stop()}}),t)}))),function(t,e,r){return S.apply(this,arguments)}),limitSell:(_=c()(o().mark((function t(e,r,n,a){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=p.X,t.t1=i.Z.PLACE_ORDER,t.next=4,w.Z.getSecurity(r);case 4:return t.t2=t.sent.id,t.t3=n,t.t4=a,t.t5=e,t.t6={security_id:t.t2,limit_price:t.t3,quantity:t.t4,order_type:"sell_quantity",order_sub_type:"limit",time_in_force:"day",account_id:t.t5},t.abrupt("return",(0,t.t0)(t.t1,t.t6));case 10:case"end":return t.stop()}}),t)}))),function(t,e,r,n){return _.apply(this,arguments)}),stopLimitSell:(E=c()(o().mark((function t(e,r,n,a,s){var u;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.Z.getSecurity(r);case 2:if(u=t.sent,!g(u.stock.primary_exchange)||n===a){t.next=5;break}return t.abrupt("return",Promise.reject({reason:"TSX/TSX-V securities must have an equivalent stop and limit price."}));case 5:return t.abrupt("return",(0,p.X)(i.Z.PLACE_ORDER,{security_id:u.id,stop_price:n,limit_price:a,quantity:s,order_type:"sell_quantity",order_sub_type:"stop_limit",time_in_force:"day",account_id:e}));case 6:case"end":return t.stop()}}),t)}))),function(t,e,r,n,a){return E.apply(this,arguments)})};var E,_,S,O,T,I,Z,j;function L(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function P(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?L(Object(r),!0).forEach((function(e){a()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}const R=P(P({},h),k)},889:(t,e,r)=>{"use strict";r.d(e,{Z:()=>i});var n,a=r(757),s=r.n(a),o=r(926),u=r.n(o),c=r(610);const i={defaultProvider:{quote:(n=u()(s().mark((function t(e){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.getSecurity(e,!0);case 2:return r=t.sent,t.abrupt("return",r.quote.amount);case 4:case"end":return t.stop()}}),t)}))),function(t){return n.apply(this,arguments)})},providers:{},use:function(t,e){if("function"!=typeof e.quote)throw new Error("Invalid quote provider for ".concat(t,"!"));this.providers[t]=e},get:(p=u()(s().mark((function t(e){var r,n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=null,!e.exchange){t.next=5;break}r=e.exchange,t.next=10;break;case 5:if(!(Object.keys(this.providers).length>0)){t.next=10;break}return t.next=8,c.Z.getSecurity(e,!1);case 8:n=t.sent,r=n.stock.primary_exchange;case 10:if(!this.providers.hasOwnProperty(r)){t.next=14;break}return t.abrupt("return",this.providers[r].quote(e));case 14:return t.abrupt("return",this.defaultProvider.quote(e));case 15:case"end":return t.stop()}}),t,this)}))),function(t){return p.apply(this,arguments)})};var p},666:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function c(t,e,r,n){var a=e&&e.prototype instanceof m?e:m,s=Object.create(a.prototype),o=new T(n||[]);return s._invoke=function(t,e,r){var n=p;return function(a,s){if(n===l)throw new Error("Generator is already running");if(n===h){if("throw"===a)throw s;return Z()}for(r.method=a,r.arg=s;;){var o=r.delegate;if(o){var u=_(o,r);if(u){if(u===d)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=l;var c=i(t,e,r);if("normal"===c.type){if(n=r.done?h:f,c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=h,r.method="throw",r.arg=c.arg)}}}(t,r,o),s}function i(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var p="suspendedStart",f="suspendedYield",l="executing",h="completed",d={};function m(){}function y(){}function v(){}var x={};x[s]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(I([])));b&&b!==r&&n.call(b,s)&&(x=b);var g=v.prototype=m.prototype=Object.create(x);function k(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function E(t,e){function r(a,s,o,u){var c=i(t[a],t,s);if("throw"!==c.type){var p=c.arg,f=p.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,o,u)}),(function(t){r("throw",t,o,u)})):e.resolve(f).then((function(t){p.value=t,o(p)}),(function(t){return r("throw",t,o,u)}))}u(c.arg)}var a;this._invoke=function(t,n){function s(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(s,s):s()}}function _(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,_(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var a=i(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,d;var s=a.arg;return s?s.done?(r[t.resultName]=s.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):s:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function I(t){if(t){var r=t[s];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}return{next:Z}}function Z(){return{value:e,done:!0}}return y.prototype=g.constructor=v,v.constructor=y,v[u]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},k(E.prototype),E.prototype[o]=function(){return this},t.AsyncIterator=E,t.async=function(e,r,n,a,s){void 0===s&&(s=Promise);var o=new E(c(e,r,n,a),s);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},k(g),g[u]="Generator",g[s]=function(){return this},g.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=I,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return u.type="throw",u.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var s=this.tryEntries.length-1;s>=0;--s){var o=this.tryEntries[s],u=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),i=n.call(o,"finallyLoc");if(c&&i){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var s=a;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=e&&e<=s.finallyLoc&&(s=null);var o=s?s.completion:{};return o.type=t,o.arg=e,s?(this.method="next",this.next=s.finallyLoc,d):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:I(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}},457:t=>{"use strict";t.exports=e},545:e=>{"use strict";e.exports=t}},n={};function a(t){if(n[t])return n[t].exports;var e=n[t]={exports:{}};return r[t](e,e.exports,a),e.exports}return a.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return a.d(e,{a:e}),e},a.d=(t,e)=>{for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a(352)})()}));