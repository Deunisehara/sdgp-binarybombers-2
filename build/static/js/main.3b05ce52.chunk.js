(this["webpackJsonpsdgp-binarybombers"]=this["webpackJsonpsdgp-binarybombers"]||[]).push([[0],{47:function(e,s,c){},48:function(e,s,c){},49:function(e,s,c){},58:function(e,s,c){},59:function(e,s,c){},60:function(e,s,c){},64:function(e,s,c){},65:function(e,s,c){},66:function(e,s,c){},84:function(e,s,c){"use strict";c.r(s);var t=c(4),a=c.n(t),n=c(36),i=c.n(n),r=(c(47),c(48),c(17)),j=c(8),l=(c(49),c(2));var d=function(){return Object(l.jsxs)("nav",{className:"header",children:[Object(l.jsx)(r.b,{to:"/",children:Object(l.jsx)("img",{className:"header__logo",src:"21.png",alt:"logo"})}),Object(l.jsx)("div",{className:"header__nav"}),Object(l.jsx)("div",{className:"header__nav",children:Object(l.jsx)(r.b,{className:"header__link",children:Object(l.jsxs)("div",{className:"header__option",children:[Object(l.jsx)("span",{className:"header__optionLineOne",children:" Hello ! "}),Object(l.jsx)("span",{className:"header__optionLineTwo",children:" Sign In "})]})})})]})},o=c(27),b=c(15),m=c(38),h=c(39),p=c(42),x=c(41);c(58),c(59);var u=function(){return Object(l.jsx)("nav",{className:"footer",children:Object(l.jsx)("div",{className:"footer__nav",children:Object(l.jsx)("span",{className:"footer__optionLineTwo",children:" Copyright \xa92021.Binary Bombers. All Rights Reserved  "})})})},O=function(e){Object(p.a)(c,e);var s=Object(x.a)(c);function c(e){var t;return Object(m.a)(this,c),(t=s.call(this,e)).state={courses:[]},t.mySubmitHandler=function(e){e.preventDefault(),console.log("Rasika = Hello"+t.state.customerId),window.fetch("http://localhost:9900/binary-bomber-service/customer?customerId="+t.state.customerId,{method:"GET",headers:{Accept:"application/json"}}).then((function(e){if(console.log("Rasika -------- "+JSON.stringify(e,null,2)),console.log("testt"),-1===e.status)alert(e.message);else{var s=e.data;console.log("Rasika --"+e.data),this.setState({customers:e.data});var c=s;Object.entries(c).forEach((function(e){var s=Object(b.a)(e,2),c=(s[0],s[1]);console.log(c)}))}})).catch((function(e){}))},t.myChangeHandler=function(e){var s=e.target.name,c=e.target.value;t.setState(Object(o.a)({},s,c))},t.mySubmitHandler2=function(e){e.preventDefault(),window.fetch("http://localhost:9901/binary-bomber-service/customer2?packages="+t.state.packageId,{method:"GET",headers:{Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){var s=this;if(-1===e.status)alert(e.message);else{var c=e.data;this.customers=e.data;var t=c;Object.entries(t).forEach((function(e){var c=Object(b.a)(e,2),t=(c[0],c[1]);console.log(t);var a=s.state.data;return s.render(a)}))}})).catch((function(e){}))},t.myChangeHandler2=function(e){var s=e.target.name,c=e.target.value;t.setState(Object(o.a)({},s,c))},t.state={customerId:"customerId",packageId:"packageId",customers:[]},t}return Object(h.a)(c,[{key:"render",value:function(){return console.log("Rasika Customers"+this.state.customers),Object(l.jsxs)("div",{class:"customer",children:[Object(l.jsx)("h1",{className:"customer__title",children:"CUSTOMER"}),Object(l.jsxs)("div",{className:"customer__middle",children:[Object(l.jsxs)("div",{class:"customer__cusInfo",children:[Object(l.jsx)("h5",{children:"Customer ID"}),Object(l.jsxs)("form",{onSubmit:this.mySubmitHandler,children:[Object(l.jsx)("input",{type:"text",className:"customer__customerId",name:"customerId",placeholder:"Enter the customer Id",onChange:this.myChangeHandler}),Object(l.jsx)("button",{type:"submit",children:"hello"})]}),this.state.customers.map((function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:e.id},e.id),Object(l.jsx)("p",{children:"Rasika - Test --------------------------"})]})})),Object(l.jsx)("h4",{children:"Next Best Offer"}),Object(l.jsx)("input",{type:"text",className:"customer__customerId",name:"nbo"})]}),Object(l.jsx)("div",{className:"customer__presentPackages",children:Object(l.jsxs)("div",{className:"packagesLi",children:[Object(l.jsxs)("div",{className:"p1",children:[Object(l.jsx)("h5",{children:"Present Packages"}),Object(l.jsx)("input",{type:"text",className:"customer__packages"})]}),Object(l.jsx)("div",{className:"p1",children:Object(l.jsx)("input",{type:"text",className:"customer__packages"})}),Object(l.jsx)("div",{className:"p1",children:Object(l.jsx)("input",{type:"text",className:"customer__packages"})}),Object(l.jsx)("div",{className:"p1",children:Object(l.jsx)("input",{type:"text",className:"customer__packages"})}),Object(l.jsx)("div",{className:"p1",children:Object(l.jsx)("input",{type:"text",className:"customer__packages"})}),Object(l.jsx)("div",{className:"p1",children:Object(l.jsx)("input",{type:"text",className:"customer__packages"})}),Object(l.jsx)("div",{className:"p1",children:Object(l.jsx)("input",{type:"text",className:"customer__packages"})}),Object(l.jsx)("div",{className:"p1",children:Object(l.jsx)("input",{type:"text",className:"customer__packages"})})]})}),Object(l.jsx)("img",{className:"customer__image",src:"23.gif",alt:""})]}),Object(l.jsx)(u,{})]})}}]),c}(t.Component),g=(c(60),c(21)),_=(g.a.initializeApp({apiKey:"AIzaSyBxx8KR5HyGxCRDsRufzBURglAYBbBkys0",authDomain:"login-binarybombers.firebaseapp.com",projectId:"login-binarybombers",storageBucket:"login-binarybombers.appspot.com",messagingSenderId:"775557985757",appId:"1:775557985757:web:390ee01bf0df357f5eb234"}),g.a.firestore(),g.a.auth());var N=function(){var e=Object(j.f)(),s=Object(t.useState)(""),c=Object(b.a)(s,2),a=c[0],n=c[1],i=Object(t.useState)(""),r=Object(b.a)(i,2),d=r[0],o=r[1];return Object(l.jsx)("div",{className:"login",children:Object(l.jsxs)("div",{className:"login__container",children:[Object(l.jsx)("h1",{children:"Sign In"}),Object(l.jsxs)("form",{children:[Object(l.jsx)("h5",{children:"E-mail"}),Object(l.jsx)("input",{type:"text",value:a,onChange:function(e){return n(e.target.value)}}),Object(l.jsx)("h5",{children:"Password"}),Object(l.jsx)("input",{type:"password",value:d,onChange:function(e){return o(e.target.value)}}),Object(l.jsx)("button",{type:"submit",onClick:function(s){s.preventDefault(),_.signInWithEmailAndPassword(a,d).then((function(s){e.push("/search")})).catch((function(e){return alert(e.message)}))},className:"login__signInButton",children:"Sign in"}),Object(l.jsx)("button",{onClick:function(s){s.preventDefault(),_.createUserWithEmailAndPassword(a,d).then((function(s){console.log(s),s&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton",children:"Create Account"}),Object(l.jsx)("input",{type:"hidden",name:"new"})]})]})})};c(64);var v=function(){return Object(l.jsxs)("div",{className:"package",children:[Object(l.jsx)("h1",{className:"package__title",children:"PACKAGE"}),Object(l.jsxs)("div",{className:"package__middle",children:[Object(l.jsx)("div",{className:"package__presentPackages",children:Object(l.jsxs)("div",{className:"packagesLi",children:[Object(l.jsxs)("div",{className:"p1",children:[Object(l.jsx)("h5",{children:"Customer ID"}),Object(l.jsx)("input",{type:"text",className:"package__packages"})]}),Object(l.jsx)("div",{className:"p1",children:Object(l.jsx)("input",{type:"text",className:"package__packages"})}),Object(l.jsx)("div",{className:"p1",children:Object(l.jsx)("input",{type:"text",className:"package__packages"})}),Object(l.jsx)("div",{className:"p1",children:Object(l.jsx)("input",{type:"text",className:"package__packages"})}),Object(l.jsx)("div",{className:"p1",children:Object(l.jsx)("input",{type:"text",className:"package__packages"})}),Object(l.jsx)("div",{className:"p1",children:Object(l.jsx)("input",{type:"text",className:"package__packages"})}),Object(l.jsx)("div",{className:"p1",children:Object(l.jsx)("input",{type:"text",className:"package__packages"})}),Object(l.jsx)("div",{className:"p1",children:Object(l.jsx)("input",{type:"text",className:"package__packages"})})]})}),Object(l.jsxs)("div",{class:"package__cusInfo",children:[Object(l.jsx)("h5",{children:"Package ID"}),Object(l.jsx)("input",{type:"text",className:"package__customerId",name:"custId"}),Object(l.jsx)("h5",{children:"Package Name"}),Object(l.jsx)("input",{type:"text",className:"package__customerId",name:"custId"})]})]}),Object(l.jsx)(u,{})]})};c(65);var k=function(){return Object(l.jsxs)("div",{className:"nbo",children:[Object(l.jsx)("h1",{className:"package__title",children:"NEXT BEST OFFER"}),Object(l.jsxs)("div",{className:"package__middle",children:[Object(l.jsx)("div",{className:"package__presentPackages",children:Object(l.jsxs)("div",{className:"packagesLi",children:[Object(l.jsxs)("div",{className:"p1",children:[Object(l.jsx)("h5",{children:"Recommended Customers"}),Object(l.jsx)("input",{type:"text",className:"package__packages"})]}),Object(l.jsx)("div",{className:"p1",children:Object(l.jsx)("input",{type:"text",className:"package__packages"})}),Object(l.jsx)("div",{className:"p1",children:Object(l.jsx)("input",{type:"text",className:"package__packages"})}),Object(l.jsx)("div",{className:"p1",children:Object(l.jsx)("input",{type:"text",className:"package__packages"})}),Object(l.jsx)("div",{className:"p1",children:Object(l.jsx)("input",{type:"text",className:"package__packages"})}),Object(l.jsx)("div",{className:"p1",children:Object(l.jsx)("input",{type:"text",className:"package__packages"})}),Object(l.jsx)("div",{className:"p1",children:Object(l.jsx)("input",{type:"text",className:"package__packages"})}),Object(l.jsx)("div",{className:"p1",children:Object(l.jsx)("input",{type:"text",className:"package__packages"})})]})}),Object(l.jsxs)("div",{class:"package__cusInfo",children:[Object(l.jsx)("h5",{children:"Package ID"}),Object(l.jsx)("input",{type:"text",className:"package__customerId",name:"custId"}),Object(l.jsx)("h5",{children:"Package Name"}),Object(l.jsx)("input",{type:"text",className:"package__customerId",name:"custId"})]})]}),Object(l.jsx)(u,{})]})};c(66);var f=function(){var e=j.f;return Object(l.jsxs)("div",{className:"searchPage",children:[Object(l.jsxs)("div",{className:"searchPage__box",children:[Object(l.jsx)("div",{className:"searchPage__box1",children:Object(l.jsxs)("form",{children:[Object(l.jsxs)("div",{className:"searchPage__imageBox",children:[Object(l.jsx)("strong",{children:"Search By Customer"}),Object(l.jsx)("img",{className:"searchPage__images",src:"2.gif",alt:"Search By Customer"})]}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{className:"search__Button",onClick:function(){e.push("/customer")},children:"Select"})]})}),Object(l.jsx)("div",{className:"searchPage__box2",children:Object(l.jsxs)("form",{children:[Object(l.jsx)("strong",{children:"Search By Package"}),Object(l.jsx)("div",{className:"searchPage__imageBox",children:Object(l.jsx)("img",{className:"searchPage__images",src:"1.gif",alt:"Search By Package"})}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{className:"search__Button",children:"Select"})]})}),Object(l.jsx)("div",{className:"searchPage__box3",children:Object(l.jsxs)("form",{children:[Object(l.jsx)("strong",{children:"Search By N.B.O"}),Object(l.jsx)("div",{className:"searchPage__imageBox",children:Object(l.jsx)("img",{className:"searchPage__images",src:"3.gif",alt:"Search By NBO"})}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{className:"search__Button",children:"Select"})]})})]}),Object(l.jsx)(u,{})]})},y=c(40),I=c.n(y);var S=function(){var e="http://localhost:9900/binary-bomber-service/customer?customerId="+this.state.customerId,s=Object(t.useState)(null),c=Object(b.a)(s,2),a=c[0],n=c[1];if(Object(t.useEffect)((function(){I.a.get(e).then((function(e){n(e.data)}))}),[e]),a)return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:" CUSTOMER "}),Object(l.jsx)("h2",{children:"customer.id"})]})};var B=function(){return Object(l.jsx)(r.a,{children:Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(d,{}),Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{path:"/search",children:Object(l.jsx)(f,{})}),Object(l.jsx)(j.a,{path:"/customer/",children:Object(l.jsx)(O,{})}),Object(l.jsx)(j.a,{path:"/package",children:Object(l.jsx)(v,{})}),Object(l.jsx)(j.a,{path:"/sample",children:Object(l.jsx)(S,{})}),Object(l.jsx)(j.a,{path:"/nbo",children:Object(l.jsx)(k,{})}),Object(l.jsx)(j.a,{path:"/",children:Object(l.jsx)(N,{})})]})]})})};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(B,{})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.3b05ce52.chunk.js.map