(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{231:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(83);var o=r(106);function c(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},271:function(t,e,r){"use strict";r.r(e);r(15),r(16),r(10),r(37);var n=r(231),o=(r(31),r(8)),c=r(13),l=r(53),f=r(19),d=r(20),h=r(9),y=r(7),v=r(33);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(h.a)(t);if(e){var o=Object(h.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(d.a)(this,r)}}var w=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(y.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},_=function(t){Object(f.a)(h,t);var e,r,d=m(h);function h(){var t;return Object(c.a)(this,h),(t=d.apply(this,arguments)).loading=!1,t.users={data:[]},t}return Object(l.a)(h,[{key:"created",value:(r=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.get());case 1:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},{key:"get",value:(e=Object(o.a)(regeneratorRuntime.mark((function t(){var e,r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,t.prev=1,t.next=4,this.$axios.get("/admin/users?take=10&orderBy=id:desc".concat(this.users.data.length?"&after=".concat(this.users.data[this.users.data.length-1].id):""));case 4:r=t.sent,data=r.data,(e=this.users.data).push.apply(e,Object(n.a)(data.data||[])),this.users.hasMore=data.hasMore,this.users=data,t.next=13;break;case 11:t.prev=11,t.t0=t.catch(1);case 13:this.loading=!1;case 14:case"end":return t.stop()}}),t,this,[[1,11]])}))),function(){return e.apply(this,arguments)})}]),h}(v.b),j=_=w([Object(v.a)({middleware:"authenticated",layout:"admin"})],_),O=r(11),component=Object(O.a)(j,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",{staticClass:"is-size-4 mb-4"},[t._v("Users")]),t._v(" "),r("b-table",{attrs:{loading:t.loading,data:t.users.data,"default-sort-direction":"asc","sort-icon":"arrow-up","sort-icon-size":"is-small"}},[r("b-table-column",{attrs:{sortable:"",field:"name",label:"Name"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n      "+t._s(e.row.name)+"\n    ")]}}])}),t._v(" "),r("b-table-column",{attrs:{sortable:"",field:"countryCode",label:"Country"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.countryCode))]}}])}),t._v(" "),r("b-table-column",{attrs:{sortable:"",field:"createdAt",label:"Created"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n      "+t._s(new Date(e.row.createdAt).toLocaleDateString())+"\n    ")]}}])}),t._v(" "),r("b-table-column",{attrs:{"cell-class":"has-text-right"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b-button",{attrs:{type:"is-primary",tag:"nuxt-link",to:"/users/"+e.row.id}},[t._v("Go to user")])]}}])})],1),t._v(" "),r("div",{staticClass:"has-text-centered"},[t.users.hasMore?r("b-button",{attrs:{"icon-right":"arrow-down",loading:t.loading},on:{click:t.get}},[t._v("Load more users")]):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);