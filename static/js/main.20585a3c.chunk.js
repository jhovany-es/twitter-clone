(this["webpackJsonptwitter-clone"]=this["webpackJsonptwitter-clone"]||[]).push([[0],{61:function(e,t,a){e.exports=a(89)},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},74:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),l=a.n(c),o=(a(66),a(67),a(40)),i=a.n(o);a(68);var s=function(e){var t=e.active,a=e.text,n=e.Icon;return r.a.createElement("div",{className:"sidebarOption ".concat(t&&"sidebarOption--active")},r.a.createElement(n,null),r.a.createElement("h2",null,a))},m=a(45),u=a.n(m),d=a(32),p=a.n(d),f=a(46),E=a.n(f),v=a(47),h=a.n(v),g=a(48),_=a.n(g),b=a(49),w=a.n(b),N=a(50),x=a.n(N),I=a(51),k=a.n(I),j=a(102);var y=function(){return r.a.createElement("div",{className:"sidebar"},r.a.createElement(i.a,{className:"sidebar__twitterIcon"}),r.a.createElement(s,{active:!0,Icon:u.a,text:"Home"}),r.a.createElement(s,{Icon:p.a,text:"Explore"}),r.a.createElement(s,{Icon:E.a,text:"Notifications"}),r.a.createElement(s,{Icon:h.a,text:"Messages"}),r.a.createElement(s,{Icon:_.a,text:"Bookmarks"}),r.a.createElement(s,{Icon:w.a,text:"Lists"}),r.a.createElement(s,{Icon:x.a,text:"Profile"}),r.a.createElement(s,{Icon:k.a,text:"More"}),r.a.createElement(j.a,{variant:"outlined",className:"sidebar__tweet",fullWidth:!0},"Tweet"))},S=a(29),O=(a(74),a(103)),z=a(52),B=a.n(z).a.initializeApp({apiKey:"AIzaSyCw-li0IscS2rJr68dSjoJL3KM3eFq5PfE",authDomain:"twitter-clone-1faac.firebaseapp.com",databaseURL:"https://twitter-clone-1faac.firebaseio.com",projectId:"twitter-clone-1faac",storageBucket:"twitter-clone-1faac.appspot.com",messagingSenderId:"316208638057",appId:"1:316208638057:web:75a37bf24fab32ff145af8",measurementId:"G-HGFP2LDXP9"}).firestore();var L=function(){var e=Object(n.useState)(""),t=Object(S.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(S.a)(l,2),i=o[0],s=o[1];return r.a.createElement("div",{className:"tweetBox"},r.a.createElement("form",null,r.a.createElement("div",{className:"tweetBox__input"},r.a.createElement(O.a,{src:"https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"}),r.a.createElement("input",{onChange:function(e){return c(e.target.value)},value:a,placeholder:"What's happening?",type:"text"})),r.a.createElement("input",{value:i,onChange:function(e){return s(e.target.value)},className:"tweetBox__imageInput",placeholder:"Optional: Enter image URL",type:"text"}),r.a.createElement(j.a,{onClick:function(e){e.preventDefault(),B.collection("posts").add({displayName:"Rafeh Qazi",username:"cleverqazi",verified:!0,text:a,image:i,avatar:"https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"}),c(""),s("")},type:"submit",className:"tweetBox__tweetButton"},"Tweet")))},R=(a(85),a(53)),C=a.n(R),T=a(54),J=a.n(T),W=a(55),q=a.n(W),D=a(56),F=a.n(D),K=a(57),M=a.n(K),P=Object(n.forwardRef)((function(e,t){var a=e.displayName,n=e.username,c=e.verified,l=e.text,o=e.image,i=e.avatar;return r.a.createElement("div",{className:"post",ref:t},r.a.createElement("div",{className:"post__avatar"},r.a.createElement(O.a,{src:i})),r.a.createElement("div",{className:"post__body"},r.a.createElement("div",{className:"post__header"},r.a.createElement("div",{className:"post__headerText"},r.a.createElement("h3",null,a," ",r.a.createElement("span",{className:"post__headerSpecial"},c&&r.a.createElement(C.a,{className:"post__badge"})," @",n))),r.a.createElement("div",{className:"post__headerDescription"},r.a.createElement("p",null,l))),r.a.createElement("img",{src:o,alt:""}),r.a.createElement("div",{className:"post__footer"},r.a.createElement(J.a,{fontSize:"small"}),r.a.createElement(q.a,{fontSize:"small"}),r.a.createElement(F.a,{fontSize:"small"}),r.a.createElement(M.a,{fontSize:"small"}))))})),H=(a(86),a(58));var X=function(){var e=Object(n.useState)([]),t=Object(S.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){B.collection("posts").onSnapshot((function(e){return c(e.docs.map((function(e){return e.data()})))}))}),[]),r.a.createElement("div",{className:"feed"},r.a.createElement("div",{className:"feed__header"},r.a.createElement("h2",null,"Home")),r.a.createElement(L,null),r.a.createElement(H.a,null,a.map((function(e){return r.a.createElement(P,{key:e.text,displayName:e.displayName,username:e.username,verified:e.verified,text:e.text,avatar:e.avatar,image:e.image})}))))},A=(a(87),a(33));var G=function(){return r.a.createElement("div",{className:"widgets"},r.a.createElement("div",{className:"widgets__input"},r.a.createElement(p.a,{className:"widgets__searchIcon"}),r.a.createElement("input",{placeholder:"Search Twitter",type:"text"})),r.a.createElement("div",{className:"widgets__widgetContainer"},r.a.createElement("h2",null,"What's happening"),r.a.createElement(A.c,{tweetId:"858551177860055040"}),r.a.createElement(A.b,{sourceType:"profile",screenName:"cleverqazi",options:{height:400}}),r.a.createElement(A.a,{url:"https://facebook.com/cleverprogrammer",options:{text:"#reactjs is awesome",via:"cleverqazi"}})))};a(88);var U=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(y,null),r.a.createElement(X,null),r.a.createElement(G,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[61,1,2]]]);
//# sourceMappingURL=main.20585a3c.chunk.js.map