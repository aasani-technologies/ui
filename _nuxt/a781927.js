(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{236:function(t,e,n){var content=n(245);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("70653554",content,!0,{sourceMap:!1})},244:function(t,e,n){"use strict";n(236)},245:function(t,e,n){(e=n(38)(!1)).push([t.i,".otp input.input{font-size:200%;letter-spacing:1rem;font-family:monospace}",""]),t.exports=e},272:function(t,e,n){"use strict";n.r(e);n(15),n(16),n(10),n(37),n(61),n(31);var r=n(8),o=n(13),c=n(53),l=n(19),f=n(20),d=n(9),h=n(7),v=n(33);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var y=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},x=function(t){Object(l.a)(f,t);var e,n=m(f);function f(){var t;return Object(o.a)(this,f),(t=n.apply(this,arguments)).code="",t.loading=!1,t}return Object(c.a)(f,[{key:"login",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,r,data,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.loading){t.next=2;break}return t.abrupt("return");case 2:return this.loading=!0,t.prev=3,t.next=6,this.$axios.post("/auth/2fa",{token:this.$store.state.auth.tokens.twoFactorToken,code:this.code});case 6:return r=t.sent,data=r.data,t.next=10,this.$store.dispatch("auth/loginWithTokens",data);case 10:if(t.sent,o=this.$store.state.auth.user.memberships,null===(e=null==o?void 0:o.data)||void 0===e?void 0:e.length){t.next=14;break}return t.abrupt("return",this.$router.replace("/onboarding/user"));case 14:this.$router.replace("/teams/".concat(null===(n=null==o?void 0:o.data[0])||void 0===n?void 0:n.groupId)),t.next=19;break;case 17:t.prev=17,t.t0=t.catch(3);case 19:this.loading=!1,this.code="";case 21:case"end":return t.stop()}}),t,this,[[3,17]])}))),function(){return e.apply(this,arguments)})}]),f}(v.b),k=x=y([Object(v.a)({middleware:"unauthenticated",layout:"auth"})],x),w=(n(244),n(11)),component=Object(w.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"title is-4"},[t._v("Two factor authentication")]),t._v(" "),n("p",[t._v("\n    Enter the one-time password from your authenticator app. If you don't have\n    access to it, you can use a backup code instead.\n  ")]),t._v(" "),n("form",{on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[n("b-field",{attrs:{label:"One-time password"}},[n("b-input",{staticClass:"otp",attrs:{type:"text",inputmode:"numeric",pattern:"[0-9]*",minlength:"6",maxlength:"6",placeholder:"••••••",autofocus:"",required:""},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}})],1),t._v(" "),n("b-button",{attrs:{type:"is-primary","native-type":"submit",loading:t.loading}},[t._v("Login to your account")]),t._v(" "),n("b-button",{attrs:{tag:"nuxt-link",to:"/"}},[t._v("Cancel")])],1)])}),[],!1,null,null,null);e.default=component.exports}}]);