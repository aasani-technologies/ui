(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{232:function(e,t){e.exports=function(data,e,t,n){var o=new Blob(void 0!==n?[n,data]:[data],{type:t||"application/octet-stream"});if(void 0!==window.navigator.msSaveBlob)window.navigator.msSaveBlob(o,e);else{var r=window.URL&&window.URL.createObjectURL?window.URL.createObjectURL(o):window.webkitURL.createObjectURL(o),c=document.createElement("a");c.style.display="none",c.href=r,c.setAttribute("download",e),void 0===c.download&&c.setAttribute("target","_blank"),document.body.appendChild(c),c.click(),setTimeout((function(){document.body.removeChild(c),window.URL.revokeObjectURL(r)}),200)}}},285:function(e,t,n){"use strict";n.r(t);n(15),n(16),n(10),n(37),n(31);var o=n(8),r=n(13),c=n(53),l=n(19),d=n(20),f=n(9),v=n(7),h=n(33),y=n(232),w=n.n(y);function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(f.a)(e);if(t){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(d.a)(this,n)}}var R=function(e,t,n,desc){var o,r=arguments.length,c=r<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(c=(r<3?o(c):r>3?o(t,n,c):o(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},O=function(e){Object(l.a)(f,e);var t,n,d=m(f);function f(){var e;return Object(r.a)(this,f),(e=d.apply(this,arguments)).loadingDownload=!1,e.loadingDelete=!1,e}return Object(c.a)(f,[{key:"get",value:(n=Object(o.a)(regeneratorRuntime.mark((function e(){var t,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.loadingDownload=!0,e.prev=1,e.next=4,this.$axios.get("/users/".concat(this.$route.params.id,"/security/data"));case 4:t=e.sent,data=t.data,w()(JSON.stringify(data,null,2),"".concat(data.id,"-").concat((new Date).toISOString(),".json")),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:this.loadingDownload=!1;case 12:case"end":return e.stop()}}),e,this,[[1,9]])}))),function(){return n.apply(this,arguments)})},{key:"deleteAccount",value:(t=Object(o.a)(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.$buefy.dialog.confirm({title:"Deleting your account",message:"Are you sure you want to delete your account? This action is not reversible.",confirmText:"Yes, delete",cancelText:"No, don't delete",type:"is-danger",hasIcon:!0,trapFocus:!0,onConfirm:function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loadingDelete=!0,e.prev=1,e.next=4,t.$axios.delete("/users/".concat(t.$route.params.id));case 4:e.sent.data,t.$store.dispatch("auth/logout"),t.$router.push("/"),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(1);case 12:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}()});case 1:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})}]),f}(h.b),j=O=R([Object(h.a)({middleware:"authenticated",layout:"users"})],O),D=n(11),component=Object(D.a)(j,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{staticClass:"is-size-4 mb-4"},[e._v("Data and privacy")]),e._v(" "),n("h2",{staticClass:"is-size-5 mb-3"},[e._v("Download your data")]),e._v(" "),n("p",{staticClass:"mb-3"},[e._v("\n    You have the right to export all your data. You can download it in JSON\n    format to transfer it to other tools. This does not include an export of\n    your teams' data.\n  ")]),e._v(" "),n("b-button",{attrs:{type:"is-primary",loading:e.loadingDownload,"icon-left":"cloud-download"},on:{click:e.get}},[e._v("\n    Download your data\n  ")]),e._v(" "),n("h2",{staticClass:"is-size-5 mb-3 mt-5"},[e._v("Delete your data")]),e._v(" "),n("p",{staticClass:"mb-3"},[e._v("\n    You can delete your account and all its data permanently. If any of your\n    teams has multiple users, it won't be deleted, and any paid subscriptions\n    will remain.\n  ")]),e._v(" "),n("b-button",{attrs:{type:"is-danger",loading:e.loadingDelete,"icon-left":"delete"},on:{click:e.deleteAccount}},[e._v("\n    Delete your account\n  ")])],1)}),[],!1,null,null,null);t.default=component.exports}}]);