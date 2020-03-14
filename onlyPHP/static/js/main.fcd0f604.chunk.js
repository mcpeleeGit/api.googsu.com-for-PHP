(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(37)},31:function(e,t,a){},35:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);a(26);var n=a(1),l=a.n(n),r=a(11),c=a.n(r),o=a(41),i=a(4),s=a(5),m=a(7),u=a(6),d=a(8),h=a(42),p=a(3),g=a(10),b=a(40),E=(a(31),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).toggleNavbar=a.toggleNavbar.bind(Object(g.a)(a)),a.state={collapsed:!0},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){return l.a.createElement("header",null,l.a.createElement(p.e,{className:"navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3",light:!0},l.a.createElement(p.b,null,l.a.createElement(p.f,{tag:b.a,to:"/"},l.a.createElement("img",{src:"/img/icon/googsu.png",className:"logo",alt:"logo"}),"Googsu WebApplication1"),l.a.createElement(p.g,{onClick:this.toggleNavbar,className:"mr-2"}),l.a.createElement(p.a,{className:"d-sm-inline-flex flex-sm-row-reverse",isOpen:!this.state.collapsed,navbar:!0},l.a.createElement("ul",{className:"navbar-nav flex-grow"},l.a.createElement(p.c,null,l.a.createElement(p.d,{tag:b.a,className:"text-dark",to:"/"},l.a.createElement("img",{src:"/img/icon/home.png",className:"logo-menu",alt:"Home"}),"Home")),l.a.createElement(p.c,null,l.a.createElement(p.d,{tag:b.a,className:"text-dark",to:"/counter"},l.a.createElement("img",{src:"/img/icon/counter.png",className:"logo-menu",alt:"Counter"}),"Counter")),l.a.createElement(p.c,null,l.a.createElement(p.d,{tag:b.a,className:"text-dark",to:"/fetch-data"},l.a.createElement("img",{src:"/img/icon/fetchdata.png",className:"logo-menu",alt:"Fetch data"}),"Fetch data")),l.a.createElement(p.c,null,l.a.createElement(p.d,{tag:b.a,className:"text-dark",to:"/login"},l.a.createElement("img",{src:"/img/icon/login.png",className:"logo-menu",alt:"Login"}),"Login")))))))}}]),t}(n.Component));E.displayName=E.name;var f=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(p.b,null,this.props.children))}}]),t}(n.Component);f.displayName=f.name;var v=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Hello, world!"),l.a.createElement("p",null,"Welcome to my new single-page application, built with:"),l.a.createElement("img",{src:"/img/home.jpg",alt:"home",class:"w-100 p-3"}),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.php.net/"},"PHP")," Custom RESTful API"),l.a.createElement("li",null,l.a.createElement("a",{href:"https://facebook.github.io/react/"},"React")," for client-side code"),l.a.createElement("li",null,l.a.createElement("a",{href:"https://getbootstrap.com/"},"Bootstrap")," for layout and styling")),l.a.createElement("p",null,"I will add the application with emphasis on the following contents:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("strong",null,"Client-side navigation"),". For example, click ",l.a.createElement("em",null,"Counter")," then ",l.a.createElement("em",null,"Back")," to return here."),l.a.createElement("li",null,l.a.createElement("strong",null,"PHP RESTful API"),". The PHP development environment based on Linux can be deployed at the lowest cost. The goal of the ",l.a.createElement("code",null,"PHP RESTful API")," is to make it possible to replace it with another system at any time with standard interfaces and access controls."),l.a.createElement("li",null,l.a.createElement("strong",null,"Efficient production builds"),". In production mode, development-time features are disabled, and your ",l.a.createElement("code",null,"dotnet publish")," configuration produces minified, efficiently bundled JavaScript files.")),l.a.createElement("p",null,"The ",l.a.createElement("code",null,"ClientApp")," subdirectory is a standard React application based on the ",l.a.createElement("code",null,"create-react-app")," template. If you open a command prompt in that directory, you can run ",l.a.createElement("code",null,"npm")," commands such as ",l.a.createElement("code",null,"npm test")," or ",l.a.createElement("code",null,"npm install"),"."))}}]),t}(n.Component);v.displayName=v.name;var w=a(18),y=a.n(w),N=a(21),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={forecasts:[],loading:!0},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.populateWeatherData()}},{key:"render",value:function(){var e=this.state.loading?l.a.createElement("p",null,l.a.createElement("em",null,"Loading...")):t.renderForecastsTable(this.state.forecasts);return l.a.createElement("div",null,l.a.createElement("h1",{id:"tabelLabel"},"Weather forecast"),l.a.createElement("p",null,"This component demonstrates fetching data from the server."),e)}},{key:"populateWeatherData",value:function(){var e=Object(N.a)(y.a.mark(function e(){var t,a;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/weatherforecast");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({forecasts:a,loading:!1});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}],[{key:"renderForecastsTable",value:function(e){return l.a.createElement("table",{className:"table table-striped","aria-labelledby":"tabelLabel"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Date"),l.a.createElement("th",null,"Temp. (C)"),l.a.createElement("th",null,"Temp. (F)"),l.a.createElement("th",null,"Summary"))),l.a.createElement("tbody",null,e.map(function(e){return l.a.createElement("tr",{key:e.date},l.a.createElement("td",null,e.date),l.a.createElement("td",null,e.temperatureC),l.a.createElement("td",null,e.temperatureF),l.a.createElement("td",null,e.summary))})))}}]),t}(n.Component);j.displayName=j.name;var k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={currentCount:0},a.incrementCounter=a.incrementCounter.bind(Object(g.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"incrementCounter",value:function(){this.setState({currentCount:this.state.currentCount+1})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Counter"),l.a.createElement("p",null,"This is a simple example of a React component."),l.a.createElement("img",{src:"/img/char11.jpg",alt:"home",className:"w-25 p-3"}),l.a.createElement("p",{"aria-live":"polite"},"Current count: ",l.a.createElement("strong",null,this.state.currentCount)),l.a.createElement("button",{className:"btn btn-primary",onClick:this.incrementCounter},"Increment"))}}]),t}(n.Component);k.displayName=k.name;var O=a(22),C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){console.log("email"+a.state.name),console.log("password"+a.state.email);var t={email:a.state.email,password:a.state.password};fetch("api/customer/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},data:JSON.stringify(t)}).then(function(e){return e.json()}).catch(function(e){return console.error("Error:",e)}).then(function(e){return console.log("Success:",e)})},a.state={email:"",password:""},a.handleChange=a.handleChange.bind(Object(g.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(O.a)({},e.target.name,e.target.value))}},{key:"handleClick",value:function(e){alert(e)}},{key:"bindClick",value:function(e){alert(e)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"text-center"},l.a.createElement("h1",null,"Login"),l.a.createElement("form",{className:"form-signin",onSubmit:this.handleSubmit},l.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"SNS Account sign in"),l.a.createElement("img",{className:"mb-8 sns-icon",src:"/img/snsicon/naver.PNG",alt:"Log in with NAVER",onClick:function(t){return e.handleClick("naver",t)}}),l.a.createElement("img",{className:"mb-8 sns-icon",src:"/img/snsicon/instagram.png",alt:"Log in with Instagram",onClick:this.bindClick.bind(this,"instagram")}),l.a.createElement("img",{className:"mb-8 sns-icon",src:"/img/snsicon/facebook.png",alt:"Log in with FaceBook"}),l.a.createElement("img",{className:"mb-8 sns-icon",src:"/img/snsicon/youtube.png",alt:"Log in with YouTube"}),l.a.createElement("img",{className:"mb-8 sns-icon",src:"/img/snsicon/twitter.png",alt:"Log in with Twitter"}),l.a.createElement("img",{className:"mb-8 sns-icon",src:"/img/snsicon/kakao.png",alt:"Log in with Kakao"}),l.a.createElement("img",{className:"mb-8 sns-icon",src:"/img/snsicon/google.png",alt:"Log in with Google"}),l.a.createElement("hr",null),l.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Googsu Account sign in"),l.a.createElement("label",{htmlFor:"inputEmail",className:"sr-only"},"Email address"),l.a.createElement("input",{type:"email",id:"inputEmail",className:"form-control",placeholder:"Email address",required:"required",autoFocus:"autoFocus",name:"email",onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"inputPassword",className:"sr-only"},"Password"),l.a.createElement("input",{type:"password",id:"inputPassword",className:"form-control",placeholder:"Password",required:"required",name:"password",onChange:this.handleChange}),l.a.createElement("button",{className:"btn btn-lg btn-primary btn-block",type:"submit"},"Sign in")))}}]),t}(n.Component),x=(a(35),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(f,null,l.a.createElement(h.a,{exact:!0,path:"/",component:v}),l.a.createElement(h.a,{path:"/counter",component:k}),l.a.createElement(h.a,{path:"/fetch-data",component:j}),l.a.createElement(h.a,{path:"/login",component:C}))}}]),t}(n.Component));x.displayName=x.name;var S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var T=document.getElementsByTagName("base")[0].getAttribute("href"),L=document.getElementById("root");c.a.render(l.a.createElement(o.a,{basename:T},l.a.createElement(x,null)),L),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");S?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):P(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):P(e)})}}()}},[[25,1,2]]]);
//# sourceMappingURL=main.fcd0f604.chunk.js.map