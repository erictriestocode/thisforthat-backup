(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,a){e.exports=a(84)},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},68:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(32),c=a.n(l),s=a(13),i=a(33),o=a.n(i)()(),m=(a(45),a(1)),u=a(2),h=a(4),d=a(3),E=a(5),g=a(12),p=(a(46),a(47),a(7)),f=a.n(p),v=a(18),b=a.n(v),N=(a(68),a(34)),y=a.n(N),w=(a(69),function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=document.querySelector(".sidenav");y.a.Sidenav.init(e,{edge:"left",inDuration:250})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper z-depth-3"},"               ",r.a.createElement("a",{href:"/home",className:"center brand-logo"},"ThisforThat"),r.a.createElement("a",{href:"#","data-target":"mobile-demo",className:"sidenav-trigger"},r.a.createElement("i",{className:"material-icons"},"menu")),r.a.createElement("ul",{className:"left hide-on-med-and-down"},r.a.createElement("li",null,r.a.createElement("a",null,"Token Bank:")),r.a.createElement("li",null,r.a.createElement("a",{className:"secondarytxt1"},"+ ")),r.a.createElement("li",null,r.a.createElement("a",{className:"secondarytxt2"},"- "))),r.a.createElement("ul",{className:"right hide-on-med-and-down"},r.a.createElement("li",null),r.a.createElement("li",null,r.a.createElement("a",{href:"/transaction"},"Transactions")),r.a.createElement("li",null,r.a.createElement("a",{href:"/profile"},r.a.createElement("i",{className:"fas fa-user-circle fa-lg"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"/api/logout"},"Logout"))))),r.a.createElement("ul",{className:"sidenav",id:"mobile-demo"},r.a.createElement("li",null,r.a.createElement("a",{href:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{href:"/transaction"},"Transactions")),r.a.createElement("li",null,r.a.createElement("a",{href:"/profile"},r.a.createElement("i",{className:"fas fa-user-circle fa-lg"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"/api/logout"},"Logout")),r.a.createElement("li",null,r.a.createElement("a",null,"Token Bank:"),r.a.createElement("li",null,r.a.createElement("a",{className:"secondarytxt1"}," + ")),r.a.createElement("li",null,r.a.createElement("a",{className:"secondarytxt1"}," - "))))),r.a.createElement("a",{href:"#","data-target":"slide-out",className:"sidenav-trigger"})))}}]),t}(n.Component)),_=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={data:[]},a.Usertransction=function(){f.a.get("/api/findalltran").then(function(e){console.log("Home Usertrans: ",e),a.setState({data:e.data})}).catch(function(e){console.log(e)})},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.Usertransction()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement("div",{className:"container"},r.a.createElement(g.b,{to:"/transaction"},r.a.createElement("a",{href:"/transaction",id:"addbutton",className:"btn-floating btn-large waves-effect waves-light blue"},r.a.createElement("i",{class:"material-icons"},"add"))),r.a.createElement("div",{className:"timeline"},this.state.data.map(function(e){return r.a.createElement("div",{className:"timeline-event",key:e.id},r.a.createElement("div",{className:"card timeline-content"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title activator grey-text text-darken-4"},e.User_Name_Providing_service," paid ",e.User_Name_requesting_service,"  ",e.Tokens_Transaction_amount," tokens",r.a.createElement("i",{className:"material-icons right"},"more_vert"))),r.a.createElement("div",{className:"card-reveal"},r.a.createElement("span",{className:"card-title grey-text text-darken-4"},"Payment for: ",e.Transaction_Desc,r.a.createElement("i",{className:"material-icons right"},"close")),r.a.createElement("p",null,"Sent at: ",b()(e.createdAt).format("dddd, MMMM Do YYYY, h:mm a")))))}))))}}]),t}(n.Component),j=a(14),O=(a(78),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleTextChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(j.a)({},n,r))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.email,r=t.password;f.a.post("/api/login",{email:n,password:r}).then(function(e){200===e.status&&a.props.history.push("/home")}).catch(function(e){})},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"signin-container"},r.a.createElement("div",{class:"z-depth-1 grey lighten-4 row"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"text",name:"email",onChange:this.handleTextChange}),r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",name:"password",onChange:this.handleTextChange}),r.a.createElement("button",{type:"submit",className:"btn-large waves-effect waves- blue darken-4"},"Sign In")))))}}]),t}(n.Component)),k=(a(79),function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{class:"hide-on-small-only"},r.a.createElement("div",{className:"row center"},r.a.createElement("img",{class:"image",src:"https://github.com/ShelbyMarks/thisforthatlogo/blob/master/logo-2-min.jpg?raw=true",alt:""}),r.a.createElement("img",{class:"image",src:"https://github.com/ShelbyMarks/thisforthatlogo/blob/master/logo-2-min.jpg?raw=true",alt:"",width:"120",height:"200"}),r.a.createElement("img",{class:"image",src:"https://github.com/ShelbyMarks/thisforthatlogo/blob/master/logo-2-min.jpg?raw=true",alt:"",width:"120",height:"200"}))),r.a.createElement("br",null),r.a.createElement("h1",{className:"header center orange-text"},"...Time is your commodity "),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row center"},r.a.createElement("div",{className:"col s4 m12"},r.a.createElement(g.b,{to:"/registration"},r.a.createElement("a",{href:"/registration",id:"button",className:"btn-large waves-effect waves- orange darken-1 hoverable"},"Register")),r.a.createElement(g.b,{to:"/signinform"},r.a.createElement("a",{href:"/signinform",id:"button",className:"btn-large waves-effect waves- blue darken-4 hoverable"},"Sign In")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m4"},r.a.createElement("div",{className:"icon-block"},r.a.createElement("h2",{className:"center light-blue-text"},r.a.createElement("i",{className:"material-icons"},"lightbulb_outline")),r.a.createElement("h5",{className:"center"},"Learn"),r.a.createElement("p",{className:"light"},"Develop & finetune desired skills by trading your time with other users"))),r.a.createElement("div",{className:"col s12 m4"},r.a.createElement("div",{className:"icon-block"},r.a.createElement("h2",{className:"center light-blue-text"},r.a.createElement("i",{className:"material-icons"},"group")),r.a.createElement("h5",{className:"center"},"Grow"),r.a.createElement("p",{className:"light"},"Grow your network & meet new talented friends"))),r.a.createElement("div",{className:"col s12 m4"},r.a.createElement("div",{className:"icon-block"},r.a.createElement("h2",{className:"center light-blue-text"},r.a.createElement("i",{className:"material-icons",color:"orange"},"swap_vertical_circle")),r.a.createElement("h5",{className:"center"},"Trade"),r.a.createElement("p",{className:"light"},"Learn the art of trading & capitalize on your desirable skill-sets ")))),r.a.createElement("br",null),r.a.createElement("br",null)),"// ")}}]),t}(n.Component)),T=a(16),x=r.a.createContext(),U=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(h.a)(this,Object(d.a)(t).call(this))).state={isAuth:!1},e.login=e.login.bind(Object(T.a)(e)),e.logout=e.logout.bind(Object(T.a)(e)),e}return Object(E.a)(t,e),Object(u.a)(t,[{key:"login",value:function(){var e=this;setTimeout(function(){return e.setState({isAuth:!0})},1e3)}},{key:"logout",value:function(){this.setState({isAuth:!1})}},{key:"render",value:function(){return r.a.createElement(x.Provider,{value:{isAuth:this.state.isAuth,login:this.login,logout:this.logout}},this.props.children)}}]),t}(r.a.Component),C=(x.Consumer,a(80),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={data:[]},a.Usertransction=function(){f.a.get("/api/findalltransUser").then(function(e){console.log("Home Usertrans: ",e),a.setState({data:e.data})}).catch(function(e){console.log(e)})},a.UserRequesting=function(){return f.a.get("/api/findalltransUser").then(function(e){console.log("username sending : ",e.data[0].User_Name_requesting_service)})},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.Usertransction(),this.UserRequesting()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"timeline"},this.state.data.map(function(e){return r.a.createElement("div",{className:"timeline-event",key:e.id},r.a.createElement("div",{className:"card timeline-content"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title activator grey-text text-darken-4"},"Transaction Amount: ",e.Tokens_Transaction_amount,r.a.createElement("i",{className:"material-icons right"},"more_vert"))),r.a.createElement("div",{className:"card-reveal"},r.a.createElement("span",{className:"card-title grey-text text-darken-4"},"Payment for: ",e.Transaction_Desc,r.a.createElement("i",{className:"material-icons right"},"close")),r.a.createElement("p",null,"From: ",e.User_Name_Providing_service),r.a.createElement("p",null,"Sent to: ",e.User_Name_requesting_service),r.a.createElement("p",null,"Sent at: ",b()(e.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")))))}))))}}]),t}(n.Component)),S=(a(81),function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement("form",{id:"register"},r.a.createElement("div",{class:"card-panel blue darken-4"},r.a.createElement("span",{class:"grey-text text-lighten-2",id:"appName"},r.a.createElement("h1",null,"Something we can help with?")))),r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},r.a.createElement("form",{class:"col s12"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"input-field col s12"},r.a.createElement("i",{class:"material-icons prefix"}),r.a.createElement("textarea",{id:"textarea1",class:"materialize-textarea"}),r.a.createElement("label",{for:"textarea1"}))))))))}}]),t}(n.Component)),q=(a(82),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",email:"",password:"",showError:"",loginError:"",registerError:""},a.handleTextChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(j.a)({},n,r))},a.handleSubmit=function(e){e.preventDefault()},a.registerUser=function(e){console.log("Registration Process Started!"),e.preventDefault();var t=a.state,n=t.username,r=t.password,l=t.email;""===n||""===r||""===l?a.setState({showError:!0,loginError:!1,registerError:!0}):(console.log("Starting API Call!"),f.a.post("/api/register",{email:l,username:n,password:r}).then(function(e){201===e.status&&a.props.history.push("/signinform")}).catch(function(e){console.log(e)}))},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"card-panel white light-2"},r.a.createElement("div",{id:"top"},r.a.createElement("div",{className:"card-panel blue darken-4"},r.a.createElement("span",{className:"grey-text text-lighten-2",id:"appName"},r.a.createElement("h1",null,"Register")),r.a.createElement("span",{className:"grey-text text-lighten-2"},r.a.createElement("p",{className:"create-account"}," Please fill in this form to create an account. ")))),r.a.createElement("div",{className:"container signin"},r.a.createElement("p",null,r.a.createElement("a",{href:"/signinform"},"Already have an account? Login")),r.a.createElement("form",{id:"RecruitForm",onSubmit:this.registerUser},r.a.createElement("input",{className:"form-group",type:"text",name:"username",placeholder:"User Name",onChange:this.handleTextChange}),r.a.createElement("input",{className:"form-group",type:"text",name:"email",placeholder:" Email",onChange:this.handleTextChange}),r.a.createElement("select",{className:"form-group",type:"text",name:"position",onChange:this.handleTextChange}),r.a.createElement("input",{className:"form-group",type:"password",name:"password",placeholder:"Password",onChange:this.handleTextChange}),r.a.createElement("br",null),r.a.createElement("div",{className:"container termsConditions"},r.a.createElement("p",null,"The content and functionality of this website is designed for law-abiding citizens with the intent to simplify and quantify law-abiding activities."),r.a.createElement("p",null,"ThisforThat does not condone the use of its\u2019 proprietary app for transactions based in coercion or manipulation; any criminals in use of app for malice intent will be removed from the community. ThisforThat encourages users to follow the golden rule, \u201cdo onto others as you would have them do onto you\u201d and is a strong ally to abuse victims."),r.a.createElement("p",null,"By clicking the \u2018Register\u2019 button above, you designate that you will not host, harbor or pursue criminal activities via ThisforThat and will be an ally to those who are bullied. "),r.a.createElement("p",null),r.a.createElement("p",null)),r.a.createElement("div",{className:"container buttons"},r.a.createElement("input",{type:"submit",value:"Register",className:"btn-large waves-effect waves-light green"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{href:"https://www.stopbullying.gov/",id:"button",className:"btn-large waves-effect waves-light red"},"I prefer to stay a bully"),r.a.createElement("p",null))))))}}]),t}(n.Component)),D=(a(83),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={Transaction_Desc:"",Tokens_Transaction_amount:"",User_Name_requesting_service:"",User_Name_Providing_service:"",UserId:"",showError:""},a.handleTextChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(j.a)({},n,r))},a.handleSubmit=function(e){e.preventDefault()},a.UserRequesting=function(){return f.a.get("/api/findalltransUser").then(function(e){a.setState({User_Name_requesting_service:e.data[0].User_Name_requesting_service,UserId:e.data[0].UserId}),console.log("username sending : ",e.data[0].User_Name_requesting_service),console.log("username sending : ",e.data[0].UserId)})},a.transactionReq=function(e){console.log("here"),e.preventDefault();var t=a.state,n=t.Transaction_Desc,r=t.Tokens_Transaction_amount,l=t.User_Name_requesting_service,c=t.User_Name_Providing_service,s=t.UserId;""===n||""===r||""===c?a.setState({showError:!0,loginError:!1,registerError:!0}):f.a.post("http://localhost:5000/api/sendTransRequest",{Transaction_Desc:n,Tokens_Transaction_amount:r,User_Name_requesting_service:l,User_Name_Providing_service:c,UserId:s}).then(function(e){201===e.status&&a.props.history.push("/home")}).catch(function(e){console.log(e)})},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.UserRequesting()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement("div",{className:"form-container"},r.a.createElement("form",{id:"TransactionForm",onSubmit:this.transactionReq},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-8 col-sm-offset-2"},r.a.createElement("p",{className:"cool-font"},"Transaction"),r.a.createElement("input",{className:"form-control",type:"text",name:"Transaction_Desc",placeholder:"Write a description for your trasnaction",onChange:this.handleTextChange}),r.a.createElement("br",null),r.a.createElement("p",{className:"cool-font"},"Tokens (Each Token equals 15 Minutes)"),r.a.createElement("input",{className:"form-control",rows:"3",name:"Tokens_Transaction_amount",placeholder:"Transaction amount",onChange:this.handleTextChange}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",{className:"cool-font"},"Send time to..."),r.a.createElement("input",{className:"form-control",rows:"3",Name:"User_Name_Providing_service",placeholder:"Username of the user you want to send time to",onChange:this.handleTextChange}),r.a.createElement("br",null),r.a.createElement("button",{id:"transreques-submit",className:"btn btn-lg pull-right",href:"profile.html"},"Submit!"))))))}}]),t}(n.Component)),M=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g.a,null,r.a.createElement(U,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:k}),r.a.createElement(s.a,{path:"/signinform",component:O}),r.a.createElement(s.a,{path:"/home",component:_}),r.a.createElement(s.a,{path:"/help",component:S}),r.a.createElement(s.a,{path:"/registration",component:q}),r.a.createElement(s.a,{path:"/transaction",component:D}),r.a.createElement(s.a,{path:"/profile",component:C})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(s.b,{history:o},r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,1,2]]]);
//# sourceMappingURL=main.f0916d9e.chunk.js.map