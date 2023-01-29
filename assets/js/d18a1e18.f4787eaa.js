"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[76237],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83965:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"API Specification",sidebar_position:4},o=void 0,l={unversionedId:"development/development-specification/api",id:"development/development-specification/api",title:"API Specification",description:"When Contributor contributes new RESTful interfaces to Linkis, it is required to follow the following interface specifications for interface development.",source:"@site/docs/development/development-specification/api.md",sourceDirName:"development/development-specification",slug:"/development/development-specification/api",permalink:"/docs/1.3.2/development/development-specification/api",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/docs/development/development-specification/api.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"API Specification",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Exception Catch Specification",permalink:"/docs/1.3.2/development/development-specification/exception-catch"},next:{title:"Concurrent Specification",permalink:"/docs/1.3.2/development/development-specification/concurrent"}},s={},p=[{value:"1. HTTP or WebSocket ?",id:"1-http-or-websocket-",level:2},{value:"2. URL specification",id:"2-url-specification",level:2},{value:"3. Interface request format",id:"3-interface-request-format",level:2},{value:"4. Interface response format",id:"4-interface-response-format",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When Contributor contributes new RESTful interfaces to Linkis, it is required to follow the following interface specifications for interface development.")),(0,r.kt)("h2",{id:"1-http-or-websocket-"},"1. HTTP or WebSocket ?"),(0,r.kt)("p",null,"Linkis currently provides two interfaces: HTTP and WebSocket."),(0,r.kt)("p",null,"WebSocket advantages over HTTP:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Less stress on the server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"More timely information push")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Interactivity is more friendly"))),(0,r.kt)("p",null,"Correspondingly, WebSocket has the following disadvantages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The WebSocket may be disconnected while using")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Higher technical requirements on the front end")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It is generally required to have a front-end degradation handling mechanism"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"We generally strongly recommend that Contributor provide the interface using WebSocket as little as possible if not necessary;")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"If you think it is necessary to use WebSocket and are willing to contribute the developed functions to Linkis, we suggest you communicate with us before the development, thank you!")),(0,r.kt)("h2",{id:"2-url-specification"},"2. URL specification"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\n/api/rest_j/v1/{applicationName}/.+\n\n/api/rest_s/v1/{applicationName}/.+\n\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Convention")," :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"rest_j indicates that the interface complies with the Jersey specification")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"REST_S indicates that the interface complies with the SpringMVC REST specification")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"v1 is the version number of the service. ",(0,r.kt)("strong",{parentName:"p"}," version number will be updated with the Linkis version "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"{applicationName} is the name of the micro-service"))),(0,r.kt)("h2",{id:"3-interface-request-format"},"3. Interface request format"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n\n"method":"/api/rest_j/v1/entrance/execute",\n\n"data":{},\n\n"WebsocketTag" : "37 fcbd8b762d465a0c870684a0261c6e" / / WebSocket requests require this parameter, HTTP requests can ignore\n\n}\n\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Convention")," :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"method: The requested RESTful API URL.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"data: The specific data requested.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"WebSocketTag: The unique identity of a WebSocket request. This parameter is also returned by the back end for the front end to identify."))),(0,r.kt)("h2",{id:"4-interface-response-format"},"4. Interface response format"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{" method ":"/API/rest_j/v1 / project/create ", "status" : 0, "message" : "creating success!" ,"data":{}}\n\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Convention")," :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"method: Returns the requested RESTful API URL, mainly for the WebSocket mode.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"status: Returns status information, where: -1 means not login, 0 means success, 1 means error, 2 means failed validation, and 3 means no access to the interface.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"data: Returns the specific data.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"message: Returns a prompt message for the request. If status is not 0, message will return an error message, where data may have a stack trace field, and return the specific stack information."))),(0,r.kt)("p",null,"In addition: Different status cause different HTTP status code, under normal circumstances:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When status is 0, the HTTP status code is 200")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When the status is -1, the HTTP status code is 401")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When status is 1, the HTTP status code is 400")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When status is 2, the HTTP status code is 412")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When status is 3, the HTTP status code is 403"))))}u.isMDXComponent=!0}}]);