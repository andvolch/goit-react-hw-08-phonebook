(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[2],{108:function(t,e,n){"use strict";n.r(e);var A,r=n(0),c=n.n(r),a=n(22),o=n.n(a),u=n(13),i=n(46),s=n(3),C=(n(58),n(34)),Q=n(47),j=n.n(Q),l=n(37),h=n(5),b=n(4),f=b.a.registerRequest,d=b.a.registerSuccess,p=b.a.registerError,g=b.a.logInSuccess,O=b.a.logInError,x=b.a.logoutSuccess,v=b.a.getCurrentUserRequest,y=b.a.getCurrentUserSuccess,m=b.a.getCurrentUserError,S=Object(s.d)({name:"auth",initialState:{user:{name:"",email:""},token:"",isLoading:!1,isAuth:!1,error:null,isGetCurrentUser:!1},extraReducers:(A={},Object(h.a)(A,d,(function(t,e){var n=e.payload;t.user=n.user,t.token=n.token,t.isAuth=!0,t.error=null,t.isLoading=!1})),Object(h.a)(A,f,(function(t,e){t.isLoading=!0})),Object(h.a)(A,p,(function(t,e){t.error=e.payload,t.isLoading=!1})),Object(h.a)(A,g,(function(t,e){var n=e.payload;t.user=n.user,t.token=n.token,t.isAuth=!0})),Object(h.a)(A,O,(function(t,e){t.error=e.payload})),Object(h.a)(A,x,(function(t,e){t.user={name:"",email:""},t.token="",t.isAuth=!1,t.error=null})),Object(h.a)(A,v,(function(t){t.isGetCurrentUser=!1})),Object(h.a)(A,y,(function(t,e){var n=e.payload;t.user=n,t.isAuth=!0})),Object(h.a)(A,m,(function(t){t.isGetCurrentUser=!1})),A)}).reducer,E={key:"auth",storage:j.a,whitelist:["token"]},R=Object(C.a)(E,S),I=Object(s.a)({reducer:{contacts:l.b,auth:R},devTools:!1,middleware:function(t){return t({serializableCheck:{ignoredActions:["persist/PERSIST"]}}).concat()}}),U=Object(C.b)(I),k=n(14),M=(n(86),n(21)),G=(n(87),n(2)),F=n(49),K=n.n(F),T=n(50),D=n.n(T),L=n(1),N=function(){return Object(L.jsxs)("div",{children:[" ",Object(L.jsx)(K.a,{className:D.a.loader,type:"TailSpin",color:"#3f51b5",height:80,width:80})]})},Y=n(20),Z=n.n(Y),J=function(){return Object(L.jsxs)("nav",{children:[Object(L.jsx)(u.b,{to:"/contacts",className:function(t){return t.isActive?Z.a.activeLink:Z.a.link},children:"Phonebook"}),Object(L.jsx)(u.b,{to:"/login",className:function(t){return t.isActive?Z.a.activeLink:Z.a.link},children:"Log in"}),Object(L.jsx)(u.b,{to:"/register",className:function(t){return t.isActive?Z.a.activeLink:Z.a.link},children:"Sign up"})]})},B=n(26),w=n(18),P=n(36),z=n(29),W=n.n(z);function X(){var t=Object(k.b)(),e=Object(k.c)(w.c);return Object(L.jsxs)("div",{className:W.a.container,children:[Object(L.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA6IAAAOiAGxfcQFAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAv1QTFRF////AQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQAC9p0ocAAAAP50Uk5TAAECAwQFBgcI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",alt:"avatar",width:"32",height:"32",className:W.a.avatar}),Object(L.jsxs)("span",{className:W.a.name,children:["Welcome,",e,"!"]}),Object(L.jsx)(P.b,{onClick:function(){t(Object(B.c)()),M.b.info("You logged out of your account !",{position:"top-center",autoClose:2500})}})]})}n(23);var H=n(33),q=n.n(H);function V(){var t=Object(k.c)(w.a);return Object(L.jsx)("header",{className:q.a.header,children:Object(L.jsxs)("div",{className:q.a.container,children:[Object(L.jsx)(J,{}),t&&Object(L.jsx)(X,{})]})})}function _(t){var e=t.isAuth,n=t.component;return Object(L.jsx)(L.Fragment,{children:e?Object(L.jsx)(n,{}):Object(L.jsx)(G.a,{to:"/login"})})}function $(t){var e=t.isAuth,n=t.component;return Object(L.jsx)(L.Fragment,{children:e?Object(L.jsx)(G.a,{to:"/contacts"})&&Object(L.jsx)(n,{}):Object(L.jsx)(n,{})})}var tt=n(53),et=n.n(tt);function nt(t){var e=t.children;return Object(L.jsx)("div",{className:et.a.container,children:e})}var At=Object(r.lazy)((function(){return n.e(0).then(n.bind(null,118))})),rt=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,119))})),ct=Object(r.lazy)((function(){return n.e(1).then(n.bind(null,120))})),at=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,121))})),ot=function(){var t=Object(k.b)(),e=Object(k.c)(w.b),n=Object(k.c)(w.a);return Object(r.useEffect)((function(){t(Object(B.a)())}),[t]),!e&&Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)(nt,{children:[Object(L.jsx)(V,{}),Object(L.jsx)(M.a,{}),Object(L.jsx)(r.Suspense,{fallback:Object(L.jsx)(N,{}),children:Object(L.jsxs)(G.d,{children:[Object(L.jsx)(G.b,{path:"/",element:Object(L.jsx)($,{isAuth:n,component:At})}),Object(L.jsx)(G.b,{path:"/contacts",element:Object(L.jsx)(_,{isAuth:n,component:at})}),Object(L.jsx)(G.b,{path:"/login",element:Object(L.jsx)($,{isAuth:n,component:ct})}),Object(L.jsx)(G.b,{path:"/register",element:Object(L.jsx)($,{isAuth:n,component:rt})})]})})]})})};o.a.render(Object(L.jsx)(c.a.StrictMode,{children:Object(L.jsx)(k.a,{store:I,children:Object(L.jsx)(i.a,{loading:Object(L.jsx)("h2",{children:"Wait,loading..."}),persistor:U,children:Object(L.jsx)(u.a,{children:Object(L.jsx)(ot,{})})})})}),document.getElementById("root"))},16:function(t,e,n){"use strict";n.r(e),n.d(e,"fetchContacts",(function(){return h})),n.d(e,"addContact",(function(){return b})),n.d(e,"deleteContact",(function(){return f}));var A=n(9),r=n.n(A),c=n(17),a=n(3),o=n(12),u=n.n(o);function i(){return s.apply(this,arguments)}function s(){return(s=Object(c.a)(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("/contacts");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function C(t){return Q.apply(this,arguments)}function Q(){return(Q=Object(c.a)(r.a.mark((function t(e){var n,A;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.post("/contacts",e);case 2:return n=t.sent,A=n.data,t.abrupt("return",A);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function j(t){return l.apply(this,arguments)}function l(){return(l=Object(c.a)(r.a.mark((function t(e){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.delete("/contacts/".concat(e));case 2:return t.abrupt("return",e);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}u.a.defaults.baseURL="https://connections-api.herokuapp.com";var h=Object(a.c)("contacts/fetchContacts",function(){var t=Object(c.a)(r.a.mark((function t(e,n){var A,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return A=n.rejectWithValue,t.prev=1,t.next=4,i();case 4:return c=t.sent,t.abrupt("return",c);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",A(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),b=Object(a.c)("contacts/addContact",function(){var t=Object(c.a)(r.a.mark((function t(e,n){var A,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return A=n.rejectWithValue,t.prev=1,t.next=4,C(e);case 4:return c=t.sent,t.abrupt("return",c);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",A(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),f=Object(a.c)("contacts/deleteContact",function(){var t=Object(c.a)(r.a.mark((function t(e,n){var A;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return A=n.rejectWithValue,t.prev=1,t.next=4,j(e);case 4:return t.abrupt("return",e);case 7:return t.prev=7,t.t0=t.catch(1),t.abrupt("return",A(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}())},18:function(t,e,n){"use strict";n.d(e,"a",(function(){return A})),n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return c})),n.d(e,"d",(function(){return a}));var A=function(t){return t.auth.isAuth},r=function(t){return t.auth.user.name},c=function(t){return t.auth.isGetCurrentUser},a=function(t){return t.auth.error}},20:function(t,e,n){t.exports={link:"Navigation_link__2tFAh",activeLink:"Navigation_activeLink__2iziw"}},23:function(t,e,n){},26:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return C})),n.d(e,"c",(function(){return Q}));var A=n(12),r=n.n(A),c=n(21),a=n(4);r.a.defaults.baseURL="https://connections-api.herokuapp.com";var o=function(t){r.a.defaults.headers.common.Authorization="Bearer ".concat(t)},u=function(){r.a.defaults.headers.common.Authorization=""},i=function(t){return function(e){e(a.a.registerRequest()),r.a.post("/users/signup",t).then((function(t){o(t.data.token),e(a.a.registerSuccess(t.data))})).catch((function(t){e(a.a.registerError(t.message))}))}},s=function(t){return function(e){e(a.a.logInRequest()),r.a.post("/users/login",t).then((function(t){o(t.data.token),e(a.a.logInSuccess(t.data))})).catch((function(t){e(a.a.logInError(t.message)),c.b.error(t.message)}))}},C=function(){return function(t,e){var n=e().auth.token;n&&(o(n),t(a.a.getCurrentUserRequest()),r.a.get("/users/current").then((function(e){var n=e.data;return t(a.a.getCurrentUserSuccess(n))})).catch((function(t){return a.a.getCurrentUserError(t)})))}},Q=function(){return function(t){t(a.a.logoutRequest()),r.a.post("/users/logout").then((function(){u(),t(a.a.logoutSuccess())})).catch((function(e){return t(a.a.logoutError(e))}))}}},29:function(t,e,n){t.exports={container:"UserMenu_container__DcTeQ",avatar:"UserMenu_avatar__33l5b",name:"UserMenu_name__30RhB"}},33:function(t,e,n){t.exports={header:"AppBar_header__2NgGk",container:"AppBar_container__2JtMW"}},36:function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return o}));n(107);var A=n(35),r=n(1),c=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(A.a,{as:"input",type:"submit",value:"Sign in",size:"sm"})})},a=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(A.a,{as:"input",type:"submit",value:"Add contact",size:"sm"})})},o=function(t){var e=t.onClick;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(A.a,{as:"input",type:"button",value:"Log out",size:"sm",onClick:e})})}},37:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var A,r=n(5),c=n(16),a=n(3),o=Object(a.d)({name:"phoneBook",initialState:{contacts:[],isLoading:!1,filter:""},reducers:{changeFilter:function(t,e){t.filter=e.payload}},extraReducers:(A={},Object(r.a)(A,c.fetchContacts.fulfilled,(function(t,e){t.contacts=e.payload,t.isLoading=!1,t.error=null})),Object(r.a)(A,c.fetchContacts.pending,(function(t){t.isLoading=!0,t.error=null})),Object(r.a)(A,c.fetchContacts.rejected,(function(t,e){t.isLoading=!1,t.error=e.payload})),Object(r.a)(A,c.addContact.fulfilled,(function(t,e){t.contacts.push(e.payload),t.isLoading=!1,t.error=null})),Object(r.a)(A,c.addContact.pending,(function(t){t.isLoading=!0,t.error=null})),Object(r.a)(A,c.addContact.rejected,(function(t,e){t.isLoading=!1,t.error=e.payload,console.log(e.payload)})),Object(r.a)(A,c.deleteContact.fulfilled,(function(t,e){t.contacts=t.contacts.filter((function(t){return t.id!==e.payload})),t.isLoading=!1,t.error=null})),Object(r.a)(A,c.deleteContact.pending,(function(t){t.isLoading=!0,t.error=null})),Object(r.a)(A,c.deleteContact.rejected,(function(t,e){t.isLoading=!1,t.error=e.payload})),A)});e.b=o.reducer;var u=o.actions.changeFilter},4:function(t,e,n){"use strict";var A=n(3),r={registerRequest:Object(A.b)("auth/registerRequest"),registerSuccess:Object(A.b)("auth/registerSuccess"),registerError:Object(A.b)("auth/registerError"),logInRequest:Object(A.b)("auth/logInRequest"),logInSuccess:Object(A.b)("auth/logInSuccess"),logInError:Object(A.b)("auth/logInError"),logoutRequest:Object(A.b)("auth/logoutRequest"),logoutSuccess:Object(A.b)("auth/logoutSuccess"),logoutError:Object(A.b)("auth/logoutError"),getCurrentUserRequest:Object(A.b)("auth/getCurrentUserRequest"),getCurrentUserSuccess:Object(A.b)("auth/getCurrentUserSuccess"),getCurrentUserError:Object(A.b)("auth/getCurrentUserError")};e.a=r},50:function(t,e,n){t.exports={loader:"Loader_loader__3Hqba"}},53:function(t,e,n){t.exports={container:"Container_container__2lXTJ"}},86:function(t,e,n){}},[[108,5,6]]]);
//# sourceMappingURL=main.7659a6ac.chunk.js.map