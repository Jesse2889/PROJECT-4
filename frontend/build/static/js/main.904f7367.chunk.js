(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{42:function(e,a,t){e.exports=t(75)},47:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(24),c=t.n(s),l=(t(47),t(3)),i=t(4),o=t(8),m=t(7),u=t(9),h=t(1),d=t(15),p=(t(48),function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={navbarOpen:!1},t.toggleNavbar=function(){t.setState({navbarOpen:!t.state.navbarOpen})},t.handleLogout=function(){t.props.history.push("/")},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&this.setState({navbarOpen:!1})}},{key:"render",value:function(){var e=this.state.navbarOpen;return r.a.createElement("nav",{className:"navbar is-black"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(h.b,{className:"navbar-item is-white",to:"/"},"Home "),r.a.createElement("a",{className:"navbar-burger is-black ".concat(e?"is-active":""),onClick:this.toggleNavbar},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))),r.a.createElement("div",{className:"navbar-menu ".concat(e?"is-active":"")},r.a.createElement("div",{className:"navbar-end"},r.a.createElement(h.b,{className:"navbar-item",to:"/trainers"},"Trainers"),r.a.createElement(h.b,{className:"navbar-item",to:"/register"},"Register"),r.a.createElement(h.b,{className:"navbar-item",to:"/login"},"Login"),r.a.createElement("a",{onClick:this.handleLogout,className:"navbar-item"},"Logout")))))}}]),a}(r.a.Component)),b=Object(d.f)(p),E=function(){return r.a.createElement("section",{className:"hero is-fullheight-with-navbar is-black"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"main-title"}," "),r.a.createElement(h.b,{to:"/trainers"},r.a.createElement("button",{className:"button is-black is-medium is-rounded"},"BROWSE FOOTWEAR")))))},v=t(10),f=t.n(v),N=t(13),g=t(14),k=t.n(g),O=function(e){var a=e.name,t=e.image,n=e.price,s=e.id;return r.a.createElement("div",{className:"column is-one-quarter-desktop is-one-third-tablet is-half-mobile"},r.a.createElement(h.b,{to:"/trainers/".concat(s)},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h4",{className:"card-header-title"},a)),r.a.createElement("div",{className:"card-image"},r.a.createElement("figure",{className:"image"},r.a.createElement("img",{src:t,alt:a}))),r.a.createElement("div",{className:"card-content"},r.a.createElement("h5",{className:"title is-6"},n)))))},w=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={trainers:[],showtrainers:[]},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(N.a)(f.a.mark((function e(){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("/api/trainers");case 3:a=e.sent,this.setState({trainers:a.data}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),this.props.history.push("/error");case 11:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.trainers.length?(console.log(this.state.trainers),r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Jeepers Sneakers "),r.a.createElement("div",{className:"columns is-mobile is-multiline"},this.state.trainers.map((function(e){return r.a.createElement(O,Object.assign({key:e.id},e))})))))):null}}]),a}(r.a.Component),y=t(39),j=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={trainer:{}},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(N.a)(f.a.mark((function e(){var a,t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.id,e.prev=1,e.next=4,k.a.get("/api/trainers/".concat(a));case 4:t=e.sent,this.setState({trainer:t.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),this.props.history.push("/error");case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns is-mobile is-multiline"},this.state.trainer&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main-title-wrapper"},r.a.createElement("h1",{className:"title car-header"},this.state.trainer.name)),r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-half"},r.a.createElement("figure",{className:"image"},r.a.createElement(y.a,{img:!0,src:this.state.trainer.image,alt:this.state.trainer.name}))),r.a.createElement("div",{className:"column is-half card-text"},r.a.createElement("h4",{className:"title is-4"},"Price"),r.a.createElement("p",null,this.state.trainer.price),r.a.createElement("h4",{className:"title is-4"},"Description"),r.a.createElement("p",null,this.state.trainer.description),r.a.createElement("hr",null),r.a.createElement(h.b,{to:"/trainers"},r.a.createElement("button",{className:"button is-black is-medium is-rounded"},"Back")),r.a.createElement("hr",null),r.a.createElement(h.b,{to:"/checkout"},r.a.createElement("button",{className:"button is-black is-medium is-rounded"},"Buy")))))))))}}]),a}(r.a.Component),C=function(){return r.a.createElement("section",{className:"background"},r.a.createElement("div",{className:"container container-err"},r.a.createElement("h1",{className:"header has-text-centered"}," Checkout Under Refurbishment!"),r.a.createElement("div",{className:"checkout"},r.a.createElement(h.b,{to:"/"},r.a.createElement("button",{className:"button is-centered is-black is-medium is-rounded"},"HOME")))))},x=t(17),S=t(19),P=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={data:{username:"",email:"",password:"",passwordConfirmation:""},errors:{}},t.handleChange=function(e){var a=e.target,n=a.name,r=a.value,s=Object(S.a)({},t.state.data,Object(x.a)({},n,r)),c=Object(S.a)({},t.state.errors,Object(x.a)({},n,""));t.setState({data:s,errors:c})},t.handleSubmit=function(){var e=Object(N.a)(f.a.mark((function e(a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,k.a.post("/api/register",t.state.data);case 4:t.props.history.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),t.setState({errors:e.t0.response.data.errors});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(a){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:""},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"column is-half is-offset-one-quarter card"},r.a.createElement("h2",{className:"title"},"Register"),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Username"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input ".concat(this.state.errors.username," ? : 'is-danger' : '' "),name:"username",placeholder:"Username",onChange:this.handleChange})),this.state.errors.username&&r.a.createElement("small",{className:"help is-danger"},this.state.errors.username)),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Email"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input ".concat(this.state.errors.email," ? : 'is-danger' : '' "),name:"email",placeholder:"Email",onChange:this.handleChange})),this.state.errors.email&&r.a.createElement("small",{className:"help is-danger"},this.state.errors.email)),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Password"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input ".concat(this.state.errors.password," ? : 'is-danger' : '' "),name:"password",type:"password",placeholder:"Password",onChange:this.handleChange})),this.state.errors.password&&r.a.createElement("small",{className:"help is-danger"},this.state.errors.password)),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Password Confirmation"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input ".concat(this.state.errors.passwordConfirmation," ? : 'is-danger' : '' "),name:"passwordConfirmation",type:"password",placeholder:"Password Confirmation",onChange:this.handleChange})),this.state.errors.passwordConfirmation&&r.a.createElement("small",{className:"help is-danger"},this.state.errors.passwordConfirmation)),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement(h.b,{to:"/*"},r.a.createElement("button",{type:"submit",className:"button is-black is-fullwidth"},"Register"))))))))}}]),a}(r.a.Component),F=function(){function e(){Object(l.a)(this,e)}return Object(i.a)(e,null,[{key:"setToken",value:function(e){localStorage.setItem("token",e)}},{key:"getToken",value:function(){return localStorage.getItem("token")}},{key:"logout",value:function(){localStorage.removeItem("token")}},{key:"getPayload",value:function(){var e=this.getToken();if(!e)return!1;var a=e.split(".");return!(a.length<3)&&JSON.parse(atob(a[1]))}},{key:"isAuthenticated",value:function(){var e=this.getPayload();return!!e&&Math.round(Date.now()/1e3)<e.exp}}]),e}(),A=t(41),D=function(e){A.notify.show(e,"custom",3e3,{background:"#FFFFF0"})},R=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={data:{email:"",password:""},error:""},t.handleChange=function(e){var a=e.target,n=a.name,r=a.value,s=Object(S.a)({},t.state.data,Object(x.a)({},n,r));t.setState({data:s,error:""})},t.handleSubmit=function(){var e=Object(N.a)(f.a.mark((function e(a){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,k.a.post("/api/login",t.state.data);case 4:n=e.sent,F.setToken(n.data.token),D(n.data.message),t.props.history.push("/trainers"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t.setState({error:"Incorrect Credentials"});case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(a){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"column is-half is-offset-one-quarter card"},r.a.createElement("h2",{className:"title"},"Login"),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Email"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input ".concat(this.state.error," ? : 'is-danger' : '' "),name:"email",placeholder:"Email",onChange:this.handleChange}))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Password"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input ".concat(this.state.error," ? : 'is-danger' : '' "),type:"password",name:"password",placeholder:"Password",onChange:this.handleChange})),this.state.error&&r.a.createElement("small",{className:"help is-danger"},this.state.error)),r.a.createElement(h.b,{to:"/*"},r.a.createElement("button",{type:"submit",className:"button is-black is-fullwidth"},"Login"))))))}}]),a}(r.a.Component),L=function(){return r.a.createElement("section",{className:"background"},r.a.createElement("div",{className:"container container-err"},r.a.createElement("h1",{className:"header has-text-centered"}," Under Refurbishment!"),r.a.createElement("div",{className:"checkout"},r.a.createElement(h.b,{to:"/"},r.a.createElement("button",{className:"button is-centered is-black is-medium is-rounded"},"HOME")))))},T=(t(74),function(e){function a(){return Object(l.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("main",null,r.a.createElement(b,null),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:E}),r.a.createElement(d.a,{path:"/trainers/:id",component:j}),r.a.createElement(d.a,{path:"/trainers/",component:w}),r.a.createElement(d.a,{exact:!0,path:"/checkout",component:C}),r.a.createElement(d.a,{exact:!0,path:"/register",component:P}),r.a.createElement(d.a,{exact:!0,path:"/login",component:R}),r.a.createElement(d.a,{exact:!0,path:"/*",component:L}))))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.904f7367.chunk.js.map