(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0361bcc4"],{"313b":function(t,e,n){"use strict";var o=n("5fd3"),i=n.n(o);i.a},"5fd3":function(t,e,n){},eb1b:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"address-confirmation"},[n("b-row",[n("b-col",{staticClass:"address-confirmation__taskbar"},[n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.mapModal",modifiers:{mapModal:!0}}],staticClass:"address-confirmation__icon-button",attrs:{variant:"outline-secondary"},on:{click:t.onShowOnMapClick}},[n("b-icon-geo-alt"),n("span",[t._v("Map")])],1),n("b-button",{staticClass:"address-confirmation__icon-button",attrs:{variant:"outline-secondary"},on:{click:t.onChangeAddressClick}},[n("b-icon-search"),n("span",[t._v("Change Address")])],1)],1)],1),n("b-row",[n("b-col",[n("v-formrowinput",{attrs:{label:"Building Name"},model:{value:t.buildingName,callback:function(e){t.buildingName=e},expression:"buildingName"}}),n("v-formrowinput",{attrs:{label:"Building Number"},model:{value:t.buildingNumber,callback:function(e){t.buildingNumber=e},expression:"buildingNumber"}}),n("v-formrowinput",{attrs:{label:"Street"},model:{value:t.street,callback:function(e){t.street=e},expression:"street"}}),n("v-formrowinput",{attrs:{label:"Locality"},model:{value:t.locality,callback:function(e){t.locality=e},expression:"locality"}}),n("v-formrowinput",{attrs:{label:"Town"},model:{value:t.town,callback:function(e){t.town=e},expression:"town"}}),n("v-formrowinput",{attrs:{label:"County"},model:{value:t.county,callback:function(e){t.county=e},expression:"county"}}),n("b-row",{attrs:{"align-h":"center"}},[n("b-col",[n("div",{staticClass:"address-confirmation__footer-tasks"},[n("b-button",{staticClass:"address-confirmation__icon-button",on:{click:t.onReportThemClick}},[t._v("Report Them")])],1)])],1)],1)],1)],1)},i=[],s=n("5530"),a=(n("a926"),n("1947")),r=n("8226"),l=n("4797"),c=function(t,e){var n=e._c;return n("b-row",{attrs:{"align-h":"center"}},[n("b-col",[n("b-form-group",{attrs:{label:e.props.label}},[n("b-form-input",e._g(e._b({staticClass:"input",attrs:{value:e.props.value}},"b-form-input",e.props.$attrs,!1),e.props.$listeners))],1)],1)],1)},u=[],d=(n("a9e3"),{inheritAttrs:!1,components:{"b-form-group":r["a"],"b-form-input":l["a"]},props:{label:{type:String,required:!0},value:{type:[Number,String]}}}),b=d,m=n("2877"),p=Object(m["a"])(b,c,u,!0,null,null,null),f=p.exports,h=n("2f62"),g={name:"AddressConfirmation",components:{"b-button":a["a"],"b-form-group":r["a"],"b-form-input":l["a"],"v-formrowinput":f},data:function(){return{buildingName:"",buildingNumber:"",street:"",locality:"",town:"",county:"",coordinates:null}},computed:Object(s["a"])({},Object(h["c"])("address",["selectedAddress"])),watch:{selectedAddress:{handler:function(t){if(t){this.buildingName=t.buildingName,this.buildingNumber=t.buildingNumber,this.street=t.street,this.locality=t.locality,this.town=t.town,this.county=t.county;var e=t.coordinates;Array.isArray(e)&&2===e.length&&(this.coordinates=e)}else this.reset()},immediate:!0}},methods:{reset:function(){this.buildingName="",this.buildingNumber="",this.street="",this.locality="",this.town="",this.county=""},onChangeAddressClick:function(){this.$store.dispatch("address/removeSelectedAddress")},onShowOnMapClick:function(){this.selectedAddress&&this.$store.commit("mapStore/address",{addressString:this.selectedAddress.getFullAddressString(),coordinates:this.coordinates})},onReportThemClick:function(){var t=this;this.$bvModal.msgBoxOk("Thank you. They are busted!").then((function(e){t.$store.dispatch("address/reset")}))}}},v=g,w=(n("313b"),Object(m["a"])(v,o,i,!1,null,"41b2b83a",null));e["default"]=w.exports}}]);
//# sourceMappingURL=chunk-0361bcc4.ec03786c.js.map