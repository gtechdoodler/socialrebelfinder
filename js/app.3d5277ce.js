(function(e){function t(t){for(var n,s,c=t[0],i=t[1],u=t[2],d=0,l=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&l.push(a[s][0]),a[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);p&&p(t);while(l.length)l.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},s={app:0},a={app:0},o=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d229491":"389602a7","chunk-69ebe83e":"c6f97415","chunk-8b0c6600":"2d7a65d3"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={"chunk-69ebe83e":1,"chunk-8b0c6600":1};s[e]?t.push(s[e]):0!==s[e]&&r[e]&&t.push(s[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-2d229491":"31d6cfe0","chunk-69ebe83e":"cfdd725b","chunk-8b0c6600":"272a040d"}[e]+".css",a=i.p+n,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===n||d===a))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){u=l[c],d=u.getAttribute("data-href");if(d===n||d===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete s[e],p.parentNode.removeChild(p),r(o)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){s[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=o);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=c(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(p);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+s+")",l.name="ChunkLoadError",l.type=n,l.request=s,r[1](l)}a[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=d;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"20d0":function(e,t,r){},2207:function(e,t,r){},"42bf":function(e,t,r){"use strict";var n=r("2207"),s=r.n(n);s.a},4617:function(e,t,r){"use strict";var n=r("d6ac"),s=r.n(n);s.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("v-appcontainer",{attrs:{id:"app-container"}}),r("v-mapmodal"),r("v-messagemodal")],1)},a=[],o=(r("d3b7"),r("5530")),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{staticClass:"app-container"},[r("b-row",{attrs:{"align-h":"center"}},[r("b-col",{attrs:{lg:"8"}},[r("div",{staticClass:"app-container__header"},[r("h3",{staticClass:"app-container__title"},[e._v("Social Rebel Finder")])])])],1),r("b-row",{staticClass:"body",attrs:{"align-h":"center"}},[e.selectedAddress?e._e():r("b-col",{attrs:{lg:"8"}},[r("p",{staticClass:"app-container__explanation"},[e._v(" Inconsiderate folk, both young and old, continue to disobey the main man, Boris, and the "),r("span",{staticClass:"highlight"},[e._v("social distancing")]),e._v(" rules his government have laid out. Bring out your inner 'dirty rat' and report these flaming eediots. "),r("strong",[e._v("Where do they live?")])])]),r("b-col",{attrs:{lg:"8"}},[r("keep-alive",[e.selectedAddress?r("v-addressconfirmation"):r("v-addresssearch")],1)],1)],1)],1)},i=[],u=r("2f62"),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"address-search"},[r("b-row",{staticClass:"address-search__row-header",attrs:{"align-h":"center"}},[r("b-col",[r("b-row",[r("b-col",{attrs:{sm:"8",md:"6"}},[r("v-postcodesearchbox",{ref:"searchBox",attrs:{label:"Postcode"}})],1)],1)],1)],1),e.resultsCount?r("b-row",{staticClass:"results",attrs:{"align-h":"center"}},[r("b-col",[r("v-addresscards")],1)],1):e._e()],1)},l=[],p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-searchbox",{ref:"searchBox",staticClass:"postcode-search-box",attrs:{placeholder:"Enter Postcode",maxlength:"8",validInput:e.isValidPostcode,feedback:e.feedback,showSpinner:e.isSearching},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onInputKeyDownEnter(t)},search:e.onSearch},model:{value:e.searchInput,callback:function(t){e.searchInput=t},expression:"searchInput"}})},f=[],h=(r("ac1f"),r("841c"),r("a926")),b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"search-box"},[r("b-form-group",{attrs:{label:e.label}},[r("div",{staticClass:"search-box__flex-wrapper"},[r("b-form-input",e._g(e._b({ref:"searchInput",staticClass:"search-box__input",attrs:{type:"text",value:e.value}},"b-form-input",e.$attrs,!1),e.$listeners)),e.showSpinner?r("span",{staticClass:"spinner-border"}):r("b-icon-search",{staticClass:"search-box__search-icon",on:{click:function(t){return e.$emit("search")}}}),e.feedback?r("span",{class:["search-box__feedback",{"search-box__feedback--valid":e.validInput}]},[e._v(" "+e._s(e.feedback)+" ")]):e._e()],1)])],1)},m=[],g=(r("a9e3"),r("8226")),v=r("4797"),_={name:"SearchBox",inheritAttrs:!1,components:{"b-form-group":g["a"],"b-form-input":v["a"]},props:{label:{type:String},value:{type:[String,Number]},validInput:{type:Boolean},feedback:{type:String},showSpinner:{type:Boolean}},methods:{focus:function(){this.$refs.searchInput.focus()}}},y=_,k=(r("9832"),r("2877")),x=Object(k["a"])(y,b,m,!1,null,"71edc5a2",null),C=x.exports,w={name:"PostcodeSearchBox",components:{"v-searchbox":C},data:function(){return{searchInput:"",isValidPostcode:!1,feedback:""}},watch:{searchInput:{handler:function(e){this.isValidPostcode=Object(h["b"])(this.searchInput),this.feedback=this.isValidPostcode?"Looks good":""}}},computed:Object(o["a"])({},Object(u["c"])("address",["isSearching"])),methods:{focus:function(){this.$refs.searchBox.focus()},setFeedback:function(){this.feedback=this.isValidPostcode?"":"Invalid postcode format"},search:function(){var e=this;this.isValidPostcode?this.$store.dispatch("address/search",{postcode:this.searchInput}).catch((function(t){e.isValidPostcode=!1,e.feedback="Postcode does not exist",e.focus()})):this.focus()},onInputKeyDownEnter:function(e){e.target&&e.target.blur&&e.target.blur(),this.setFeedback(),this.search()},onSearch:function(){this.setFeedback(),this.search()}}},A=w,S=Object(k["a"])(A,p,f,!1,null,null,null),O=S.exports,j={name:"AppContainer",components:{"v-addresscards":function(){return r.e("chunk-69ebe83e").then(r.bind(null,"bb22"))},"v-postcodesearchbox":O},mounted:function(){this.$refs.searchBox.focus()},computed:Object(o["a"])({},Object(u["c"])("address",["resultsCount"]))},E=j,P=(r("4617"),Object(k["a"])(E,d,l,!1,null,null,null)),N=P.exports,I={name:"AppContainer",components:{"v-addresssearch":N,"v-addressconfirmation":function(){return r.e("chunk-8b0c6600").then(r.bind(null,"eb1b"))}},computed:Object(o["a"])({},Object(u["c"])("address",["selectedAddress"]))},M=I,T=(r("42bf"),Object(k["a"])(M,c,i,!1,null,"7167c988",null)),$=T.exports,B=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-modal",{staticClass:"message-modal",attrs:{id:"messageModal","hide-footer":""}},[r("div",{staticClass:"d-block text-center"},[e._v(e._s(e.message))]),r("div",{staticClass:"message-modal__footer"},[r("b-button",{staticClass:"message-modal__ok",attrs:{block:""},on:{click:e.onOKClick}},[e._v("OK")])],1)])},R=[],D={name:"MessageModal",data:function(){return{message:""}},methods:{show:function(e){this.message=e,this.$refs.messageModal.show()},onOKClick:function(){this.$refs.messageModal.hide(),this.message=""}}},V=D,L=(r("8343"),Object(k["a"])(V,B,R,!1,null,"41ca4666",null)),q=L.exports,F={name:"App",components:{"v-appcontainer":$,"v-mapmodal":function(){return r.e("chunk-2d229491").then(r.bind(null,"dd94"))},"v-messagemodal":q},watch:{errorMessage:function(e){var t=this;e&&this.$bvModal.msgBoxOk("An error occurred: ".concat(e)).then((function(){t.$store.dispatch("error/clear")}))}},computed:Object(o["a"])({},Object(u["c"])("error",["errorMessage"]))},G=F,K=(r("5c0b"),Object(k["a"])(G,s,a,!1,null,null,null)),H=K.exports,U=(r("f9e3"),r("2dd8"),r("498a")),J=r("dbbe"),Y=r("b1e0"),z=(r("5319"),r("96cf"),r("1da1")),W="https://api.getAddress.io/find/{0}?api-key=2hVvI_2f9UmF1zX0s9YUnA26987&expand=true",X="https://api.postcodes.io/postcodes/{0}/validate",Q={GET_ADDRESS_SEARCH:W,GET_POSTCODE_VALIDATION:X},Z=(r("7db0"),[]),ee=function(e){var t=e.status,r=e.message;Z.push({status:t,message:r})},te=function(e){return Z.find((function(t){var r=t.status;return r==e}))},re=r("bc3a"),ne=r.n(re),se=function(e,t){return ne.a.get(e)},ae={get:se},oe=function(e){return e&&e.response&&e.response.data&&e.response.data.Message?e.response.data.Message:"An error occurred"},ce=function(){var e=Object(z["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ae.get(t,r);case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e["catch"](0),n=te(e.t0.response.status),De.commit("error/log",n?n.message:oe(e.t0)),e.abrupt("return",Promise.reject(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,r){return e.apply(this,arguments)}}(),ie={get:ce},ue=(r("4160"),r("159b"),r("53ca")),de={mapEntity:function(e){var t={};return t.buildingName=e.building_name,t.buildingNumber=e.building_number,t.street=e.thoroughfare,t.locality=e.locality,t.town=e.town_or_city,t.county=e.county,t.getFullAddressString=function(){return Object(h["a"])([this.buildingNumber,this.buildingName,this.street,this.locality,this.town,this.county])},t},mapCol:function(e){var t=this;if(!e||"object"!==Object(ue["a"])(e))throw"Error in apiGetAddressMapper: Expecting not null object";if(!Array.isArray(e.addresses))throw"Error in apiGetAddressMapper: Expecting source array, but received ".concat(Object(ue["a"])(e));var r={};return r.postcode=e.postcode,r.addressCol=[],e.addresses.forEach((function(n){var s=t.mapEntity(n);r.postcode=e.postcode,s.coordinates=[e.longitude,e.latitude],r.addressCol.push(s)})),r}},le=function(){var e=Object(z["a"])(regeneratorRuntime.mark((function e(t,r){var n,s,a,o,c,i,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,s=r.postcode,a=Q.GET_POSTCODE_VALIDATION.replace("{0}",s),o=Q.GET_ADDRESS_SEARCH.replace("{0}",s),n("isSearching",!0),e.prev=5,n("requestPostcode",s),e.next=9,ie.get(a);case 9:if(c=e.sent,c.data.result){e.next=12;break}return e.abrupt("return",Promise.reject("Postcode does not exist"));case 12:return e.next=14,ie.get(o);case 14:i=e.sent,u=de.mapCol(i.data),n("mappedResults",be(u)),e.next=21;break;case 19:e.prev=19,e.t0=e["catch"](5);case 21:return e.prev=21,n("isSearching",!1),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[5,19,21,24]])})));return function(t,r){return e.apply(this,arguments)}}(),pe=function(e,t){var r=e.commit;r("selectedAddress",t)},fe=function(e){var t=e.commit;t("selectedAddress",null)},he=function(e){var t=e.commit;t("reset")},be=function(e){return e&&Array.isArray(e.addressCol)&&e.addressCol.sort((function(e,t){if(e.locality===t.locality){if(e.street===t.street){if(e.buildingNumber===t.buildingNumber)return e.buildingName===t.buildingName?0:e.buildingName<t.buildingName?-1:1;var r=parseInt(e.buildingNumber),n=parseInt(t.buildingNumber);return isNaN(r)||isNaN(n)?e.buildingNumber<t.buildingNumber?-1:1:r<n?-1:1}return e.street<t.street?-1:1}return e.locality<t.locality?-1:1})),e},me={search:le,addSelectedAddress:pe,removeSelectedAddress:fe,reset:he},ge=function(e,t){e.isSearching=t},ve=function(e,t){e.requestPostcode=t},_e=function(e,t){t&&t.addressCol&&t.addressCol.length&&(e.mappedResults=t,e.resultsCount=t.addressCol.length)},ye=function(e,t){e.selectedAddress=t},ke=function(e){e.isSearching=!1,e.requestPostcode="",e.mappedResults=null,e.resultsCount=0,e.selectedAddress=null},xe={isSearching:ge,requestPostcode:ve,mappedResults:_e,selectedAddress:ye,reset:ke},Ce={isSearching:!1,requestPostcode:"",mappedResults:null,resultsCount:0,selectedAddress:null},we={namespaced:!0,actions:me,mutations:xe,state:function(){return Ce}},Ae=function(e){var t=e.commit;t("clear")},Se={clear:Ae},Oe=function(e){e.errorMessage=""},je=function(e,t){e.errorMessage=t},Ee={clear:Oe,log:je},Pe={errorMessage:""},Ne={actions:Se,mutations:Ee,namespaced:!0,state:function(){return Pe}},Ie=function(e){return e.coordinates},Me={coordinates:Ie},Te=function(e,t){var r=t.addressString,n=t.coordinates;e.fullAddressString=r,e.coordinates=n},$e={address:Te},Be={fullAddressString:"",coordinates:[0,0]},Re={getters:Me,mutations:$e,namespaced:!0,state:function(){return Be}};ee({status:"400",message:"There was a problem with the address service."}),ee({status:"404",message:"There was a problem finding the address service."}),ee({status:"429",message:"Your allocated number of address searches has been exceeded."}),n["a"].use(u["a"]);var De=new u["a"].Store({modules:{address:we,error:Ne,mapStore:Re}}),Ve=(r("2b69"),r("1cf8")),Le=r("1dce"),qe=r.n(Le);n["a"].config.productionTip=!1,n["a"].use(U["a"]),n["a"].use(J["a"]),n["a"].use(Y["a"]),n["a"].use(Ve["a"]),n["a"].use(qe.a),new n["a"]({store:De,render:function(e){return e(H)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),s=r.n(n);s.a},8343:function(e,t,r){"use strict";var n=r("20d0"),s=r.n(n);s.a},9832:function(e,t,r){"use strict";var n=r("ce01"),s=r.n(n);s.a},"9c0c":function(e,t,r){},a926:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return o}));r("4de4"),r("a15b");var n=r("8bb3"),s=r.n(n),a=function(e){return Array.isArray(e)?e.filter(Boolean).join(", "):""},o=function(e){return null!=e&&s.a.isValid(e)}},ce01:function(e,t,r){},d6ac:function(e,t,r){}});
//# sourceMappingURL=app.3d5277ce.js.map