(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{110:function(e,t,a){e.exports=a(192)},115:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){},125:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){},164:function(e,t,a){},166:function(e,t,a){},183:function(e,t,a){},184:function(e,t,a){},192:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(32),l=a.n(r),i=(a(115),a(6)),o=a(21),s=a(15),m=(a(116),a(117),a(118),Object(n.createContext)()),u=function(e){var t=e.reducer,a=e.initialState,r=e.children;return c.a.createElement(m.Provider,{value:Object(n.useReducer)(t,a)},r)},d=function(){return Object(n.useContext)(m)};var p=function(e){var t=e.image,a=e.price,n=e.id,r=e.rating,l=e.title,o=e.hideButton,s=d(),m=Object(i.a)(s,2),u=(m[0].basket,m[1]);return c.a.createElement("div",{className:"checkProduct"},c.a.createElement("img",{className:"checkProduct__image",src:t,alt:""}),c.a.createElement("div",{className:"checkProduct__info"},c.a.createElement("p",{className:"checkProduct__title"},l),c.a.createElement("p",{className:"checkoutProduct__price"},c.a.createElement("small",null,"$"),c.a.createElement("strong",null,a)),c.a.createElement("div",{className:"checoutProduct__rating"},Array(r).fill().map((function(e,t){return c.a.createElement("p",null,"\u2b50")}))),!o&&c.a.createElement("button",{onClick:function(){u({type:"REMOVE_FROM_BASKET",id:n})}},"Remove From Basket")))},E=(a(119),a(34)),_=a.n(E),g=a(61),h=a(28),v=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return console.log("Amount----\x3e ".concat(e," Item----\x3e ").concat(t.price)),parseFloat(t.price)+e}),0)},f=function(e,t){switch(t.type){case"ADD_TO_BASKET":return Object(h.a)(Object(h.a)({},e),{},{basket:[].concat(Object(g.a)(e.basket),[t.item])});case"EMPTY_BASKET":return Object(h.a)(Object(h.a)({},e),{},{basket:[]});case"REMOVE_FROM_BASKET":var a=e.basket.findIndex((function(e){return e.id==t.id}));console.log(a);var n=Object(g.a)(e.basket);return a>=0?n.splice(a,1):console.warn("Prodcut Does Not exist"),Object(h.a)(Object(h.a)({},e),{},{basket:n});case"SET_USER":return Object(h.a)(Object(h.a)({},e),{},{user:t.user});default:return e}};var b=function(){var e=Object(s.f)(),t=d(),a=Object(i.a)(t,2),n=a[0],r=n.basket,l=n.user;return a[1],c.a.createElement("div",{className:"subtotal"},c.a.createElement(_.a,{renderText:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Subtotal (",null===r||void 0===r?void 0:r.length," items): ",c.a.createElement("strong",null,"".concat(e))),c.a.createElement("small",{className:"subtotal__gift"},c.a.createElement("input",{type:"checkbox"}),"This order contains a gift"))},decimalScale:2,value:v(r),displayType:"text",thousandSeparator:!0,prefix:"$"}),c.a.createElement("button",{disabled:!v(r)>0||!l,className:(!v(r)>0||!l)&&"disabledBtn",onClick:function(t){return e.push("/payment")}},"Proceed To Checkout"),!l&&c.a.createElement("p",{className:"subtotal__SignIn"}," * Please Sign In to Purchase"))};var N=function(){var e=d(),t=Object(i.a)(e,2),a=t[0],n=a.basket,r=a.user;return t[1],c.a.createElement("div",{className:"checkout"},c.a.createElement("div",{className:"checkout__left"},c.a.createElement("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492688_.jpg",alt:""}),c.a.createElement("div",null,c.a.createElement("h5",null,r?c.a.createElement("p",null,"Hello, ",null===r||void 0===r?void 0:r.email):c.a.createElement("p",null,'""')),c.a.createElement("h2",{className:"checkout__title"},"Your Cart"),n.map((function(e){return c.a.createElement(p,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),c.a.createElement("div",{className:"checkout__right"},c.a.createElement(b,null)))},O=(a(125),a(102)),y=a.n(O),S=a(103),j=a.n(S),C=a(58),k=a.n(C),T=k.a.initializeApp({apiKey:"AIzaSyAA09iIZUwNTvX2RT-clKQUqp_sP-L60ZM",authDomain:"clone-b82b7.firebaseapp.com",databaseURL:"https://clone-b82b7.firebaseio.com",projectId:"clone-b82b7",storageBucket:"clone-b82b7.appspot.com",messagingSenderId:"852122882098",appId:"1:852122882098:web:887bd1772f232051ed6c2b",measurementId:"G-ZQ9BGL4LSN"}).firestore(),w=k.a.auth();var A=function(){var e=d(),t=Object(i.a)(e,2),a=t[0],n=a.basket,r=a.user;return t[1],c.a.createElement("div",{className:"header"},c.a.createElement(o.b,{to:"/"},c.a.createElement("img",{className:"header__logo",src:"https://pngimg.com/uploads/amazon/amazon_PNG25.png",alt:""})),c.a.createElement("div",{className:"header__search"},c.a.createElement("input",{className:"header__searchInput",type:"text"}),c.a.createElement(y.a,{className:"header__searchIcon"})),c.a.createElement("div",{className:"header__nav"},c.a.createElement(o.b,{to:!r&&"/login"},c.a.createElement("div",{onClick:function(){r&&w.signOut()},className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Hello ",r?null===r||void 0===r?void 0:r.email:"Guest"),c.a.createElement("span",{className:"header__optionLineTwo"},r?"Sign Out":"Sign In"))),c.a.createElement(o.b,{to:"/orders"},c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Returns"),c.a.createElement("span",{className:"header__optionLineTwo"},"& Orders"))),c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Your"),c.a.createElement("span",{className:"header__optionLineTwo"},"Prime")),c.a.createElement(o.b,{to:"/checkout"},c.a.createElement("div",{className:"header__optionBasket"},c.a.createElement(j.a,null),c.a.createElement("span",{className:"header__optionLineTwo header__basketCount"},null===n||void 0===n?void 0:n.length)))))},B=(a(137),a(138),a(39)),I=a.n(B);var x=function(e){var t=e.id,a=e.title,n=e.price,r=e.rating,l=e.image,o=d(),s=Object(i.a)(o,2),m=(s[0].basket,s[1]);return c.a.createElement("div",{className:"product"},c.a.createElement("div",{className:"product__info"},c.a.createElement("p",null,a),c.a.createElement("p",{className:"product__price"},c.a.createElement("small",null,"$"),c.a.createElement("strong",null,n)),c.a.createElement("div",{className:"product__rating"},Array(r).fill().map((function(e,t){return c.a.createElement("p",null,"\u2b50")})))),c.a.createElement("img",{src:l,alt:""}),c.a.createElement("button",{onClick:function(){B.store.addNotification({title:"Added Item To Cart",message:"".concat(a," has been added to cart"),touchSlidingExit:{swipe:{duration:400,timingFunction:"ease-out",delay:0},fade:{duration:400,timingFunction:"ease-out",delay:0}},type:"warning",insert:"top",container:"top-right",animationIn:["animated","fadeIn"],animationOut:["animated","fadeOut"],dismiss:{duration:2500,onScreen:!0,showIcon:!0,pauseOnHover:!0}}),m({type:"ADD_TO_BASKET",item:{id:t,title:a,price:n,image:l,rating:r}})}},"Add To Cart"))},P=a(35),L=(a(140),a(46));var M=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1];return c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"home__container"},c.a.createElement(P.a,null,c.a.createElement(P.a.Item,null,c.a.createElement("img",{src:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_TallHero_NonPrime_v2_en_US_1x._CB403670067_.jpg",alt:"",className:"home__image"})),c.a.createElement(P.a.Item,null,c.a.createElement("img",{src:"https://images-na.ssl-images-amazon.com/images/G/15/kindle/journeys/MDUxZTAzODMt/MDUxZTAzODMt-OTgxYTFjNDEt-w1500._CB418673226_.jpg",alt:"",className:"home__image"})),c.a.createElement(P.a.Item,null,c.a.createElement("div",{onMouseEnter:function(){a.play()},onMouseLeave:function(){a.pause()},className:"home__vid"},c.a.createElement(L.Player,{ref:function(e){r(e)}},c.a.createElement("source",{src:"https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2020/Movie/Borat2/Borat2_H1_AnimHero_ONLY_1500x300_002._CB417567560_.mp4",type:"video/mp4"}),c.a.createElement(L.BigPlayButton,{position:"center"}),c.a.createElement(L.ControlBar,{disableCompletely:!0,autoHide:!1})))),c.a.createElement(P.a.Item,null,c.a.createElement("img",{src:"https://images-na.ssl-images-amazon.com/images/G/15/credit/img20/CBCC/ACQ/Holiday/HOL20_CACBCC_Desktop_Hero_Cookies_1x._CB418812422_.jpg",alt:"",className:"home__image"}))),c.a.createElement("div",{className:"home__row"},c.a.createElement(x,{id:1,title:"The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses ",price:12.95,image:"https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg",rating:4}),c.a.createElement(x,{id:2,title:"Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling, with Alexa voice control - Black",price:"299.00",image:"https://images-na.ssl-images-amazon.com/images/I/71zE-yGwzHL._AC_SL1500_.jpg",rating:5})),c.a.createElement("div",{className:"home__row"},c.a.createElement(x,{id:3,title:"Apple Watch Series 3 (GPS, 38mm) - Space Gray",price:"97.00",image:"https://images-na.ssl-images-amazon.com/images/I/61iqvrkk3nL._AC_SL1500_.jpg",rating:4}),c.a.createElement(x,{id:4,title:"\r Hiware 200-Piece Parchment Paper Baking Sheets 12 x 16 Inch ",price:"14.55",image:"https://images-na.ssl-images-amazon.com/images/I/71Li6GWCAxL._AC_SL1500_.jpg",rating:5}),c.a.createElement(x,{id:5,title:"Good to Great: Why Some Companies Make the Leap and Others Don't",price:"14.55",image:"https://images-na.ssl-images-amazon.com/images/I/913d0uqSoPL.jpg",rating:5})),c.a.createElement("div",{className:"home__row"},c.a.createElement(x,{id:6,title:'Sceptre 24" Curved 75Hz Gaming LED Monitor Full HD 1080P HDMI VGA Speakers, VESA Wall Mount Ready Metal Black 2019 (C248W-1920RN)',price:"150.00",image:"https://images-na.ssl-images-amazon.com/images/I/81WkYQXLbKL._AC_SL1500_.jpg",rating:5}))))};a(164);var z=function(){var e=Object(s.f)(),t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],l=a[1],m=Object(n.useState)(""),u=Object(i.a)(m,2),d=u[0],p=u[1];return c.a.createElement("div",{className:"login"},c.a.createElement(o.b,{to:"/"},c.a.createElement("img",{src:"https://www.marketplace.org/wp-content/uploads/2019/07/Amazondotcom.png",alt:"",className:"login__logo"})),c.a.createElement("div",{className:"login__container"},c.a.createElement("h1",null,"Sign-In"),c.a.createElement("form",{action:""},c.a.createElement("h5",null,"E-Mail"),c.a.createElement("input",{onChange:function(e){l(e.target.value)},value:r,type:"text"}),c.a.createElement("h5",null,"Password"),c.a.createElement("input",{onChange:function(e){p(e.target.value)},value:d,type:"password"}),c.a.createElement("button",{type:"submit",onClick:function(t){t.preventDefault(),w.signInWithEmailAndPassword(r,d).then((function(t){t&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__signInButton"},"Sign-In")),c.a.createElement("p",null,"By continuing, you agree to AmazonClone's Conditions of Use and Privacy Notice. Notice."),c.a.createElement("button",{onClick:function(t){t.preventDefault(),w.createUserWithEmailAndPassword(r,d).then((function(t){console.log(t),t&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton"},"Create an Amazon Account")))},D=a(40),H=a.n(D),R=a(60),G=(a(166),a(105)),U=a.n(G).a.create({baseURL:"https://us-central1-clone-b82b7.cloudfunctions.net/api"}),W=a(33);var F=function(){var e=Object(s.f)(),t=d(),a=Object(i.a)(t,2),r=a[0],l=r.basket,m=r.user,u=a[1],E=Object(n.useState)(null),g=Object(i.a)(E,2),h=g[0],f=g[1],b=Object(n.useState)(!1),N=Object(i.a)(b,2),O=N[0],y=N[1],S=Object(n.useState)(!1),j=Object(i.a)(S,2),C=j[0],k=j[1],w=Object(n.useState)(null),A=Object(i.a)(w,2),B=A[0],I=A[1],x=Object(n.useState)(!0),P=Object(i.a)(x,2),L=P[0],M=P[1];Object(n.useEffect)((function(){(function(){var e=Object(R.a)(H.a.mark((function e(){var t;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U({method:"post",url:"/payments/create?total=".concat(100*v(l))});case 2:t=e.sent,M(t.data.clientSecret);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l]),console.log("Client Secret",L);var z=Object(W.useStripe)(),D=Object(W.useElements)(),G=function(){var t=Object(R.a)(H.a.mark((function t(a){return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),I(!0),t.next=4,z.confirmCardPayment(L,{payment_method:{card:D.getElement(W.CardElement)}}).then((function(t){var a=t.paymentIntent;T.collection("users").doc(null===m||void 0===m?void 0:m.uid).collection("orders").doc(a.id).set({basket:l,amount:a.amount,created:a.created}),k(!0),f(!1),I(!1),u({type:"EMPTY_BASKET"}),e.replace("/orders")}));case 4:t.sent;case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return c.a.createElement("div",{className:"payment"},c.a.createElement("div",{className:"payment__container"},c.a.createElement("h1",null,"Checkout (",c.a.createElement(o.b,{to:"/checkout"},null===l||void 0===l?void 0:l.length," Items"),")"),c.a.createElement("div",{className:"payment__section"},c.a.createElement("div",{className:"payment__sectionTitle"},c.a.createElement("h3",null,"Delivery Address")),c.a.createElement("div",{className:"payment__address"},c.a.createElement("p",null,null===m||void 0===m?void 0:m.email),c.a.createElement("p",null,"12 Brechin Crescent"),c.a.createElement("p",null,"Ottawa, ON"))),c.a.createElement("div",{className:"payment__section"},c.a.createElement("div",{className:"payment__sectionTitle"},c.a.createElement("h3",null,"Review Items And Delivery")),c.a.createElement("div",{className:"payment__items"},l.map((function(e){return c.a.createElement(p,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),c.a.createElement("div",{className:"payment__section"},c.a.createElement("div",{className:"payment__sectionTitle"},c.a.createElement("h3",null,"Payment Method")),c.a.createElement("div",{className:"payment__details"},c.a.createElement("form",{onSubmit:G},c.a.createElement(W.CardElement,{onChange:function(e){y(e.empty),f(e.error?e.error.message:"")}}),c.a.createElement("div",{className:"payment__priceContainer"},c.a.createElement(_.a,{renderText:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Subtotal (",null===l||void 0===l?void 0:l.length," items):"," ",c.a.createElement("strong",null,"".concat(e))),c.a.createElement("small",{className:"subtotal__gift"},c.a.createElement("input",{type:"checkbox"}),"This order contains a gift"))},decimalScale:2,value:v(l),displayType:"text",thousandSeparator:!0,prefix:"$"}),c.a.createElement("button",{className:(B||O||C||v(l)<=0)&&"disabledBtn",disabled:B||O||C||v(l)<=0},c.a.createElement("span",null,B?c.a.createElement("p",null,"Processing"):"Pay Now"))),h&&c.a.createElement("div",null,h))))))},Y=a(106),K=(a(183),a(184),a(107)),Q=a.n(K);var V=function(e){var t,a=e.order;return c.a.createElement("div",{className:"order"},c.a.createElement("h2",null,"Order"),c.a.createElement("p",null,Q.a.unix(a.data.created).format("MMMM Do YYYY, h:mma")),c.a.createElement("p",{className:"order__id"},c.a.createElement("small",null,a.id)),null===(t=a.data.basket)||void 0===t?void 0:t.map((function(e){return c.a.createElement(p,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating,hideButton:!0})})),c.a.createElement(_.a,{renderText:function(e){return c.a.createElement("div",{className:"order__total"},c.a.createElement("p",null,"Order Total: ",c.a.createElement("strong",null,"".concat(e))))},decimalScale:2,value:a.data.amount/100,displayType:"text",thousandSeparator:!0,prefix:"$"}))};var Z=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],l=d(),o=Object(i.a)(l,2),s=o[0],m=(s.basket,s.user);return o[1],Object(n.useEffect)((function(){m?T.collection("users").doc(null===m||void 0===m?void 0:m.uid).collection("orders").orderBy("created","desc").onSnapshot((function(e){return r(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})):r([])}),[m]),console.log("Order",a),c.a.createElement("div",{className:"orders"},c.a.createElement("h1",null,"Orders"),c.a.createElement("div",{className:"orders__order"},a.map((function(e){return c.a.createElement(V,{order:e})}))))},$=(a(186),a(187),a(108)),q=a.n($),X=Object(Y.a)("pk_test_51Hfu4TCNNnqjVekon2yWUQEPCp69NhLRYmKfnqp47QTIoSh715DsHBXtPZ54QvOtOsAJSLXScstS3SVgWMdlo8Tc00dNxbhBXo");var J=function(){var e=d(),t=Object(i.a)(e,2),a=(t[0],t[1]);return Object(n.useEffect)((function(){w.onAuthStateChanged((function(e){console.log("User ",e),a(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),c.a.createElement(o.a,null,c.a.createElement("div",{className:"app"},c.a.createElement(q.a,null,c.a.createElement("title",null,"Rayyan-- Amazon Clone"),c.a.createElement("meta",{name:"description",content:"My Cover Letter Fro Shopify"}),c.a.createElement("meta",{property:"og:image",content:"https://digital.com/wp-content/uploads/shopify-logo-new.png"})),c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/login"},c.a.createElement(z,null)),c.a.createElement(s.a,{path:"/checkout"},c.a.createElement(A,null),c.a.createElement(N,null)),c.a.createElement(s.a,{path:"/orders"},c.a.createElement(A,null),c.a.createElement(Z,null)),c.a.createElement(s.a,{path:"/payment"},c.a.createElement(A,null),c.a.createElement(I.a,{className:"addToCartNotification"}),c.a.createElement(W.Elements,{stripe:X},c.a.createElement(F,null))),c.a.createElement(s.a,{path:"/"},c.a.createElement(A,null),c.a.createElement(I.a,{className:"addToCartNotification"}),c.a.createElement(M,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u,{initialState:{basket:[],user:null},reducer:f},c.a.createElement(J,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[110,1,2]]]);
//# sourceMappingURL=main.94785437.chunk.js.map