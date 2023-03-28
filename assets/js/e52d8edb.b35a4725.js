"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[42836],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29116:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={title:"Linkis-Client Architecture",sidebar_position:3},l=void 0,o={unversionedId:"architecture/feature/computation-governance-services/linkis-cli",id:"version-1.3.1/architecture/feature/computation-governance-services/linkis-cli",title:"Linkis-Client Architecture",description:"Provide users with a lightweight client that submits tasks to Linkis for execution.",source:"@site/versioned_docs/version-1.3.1/architecture/feature/computation-governance-services/linkis-cli.md",sourceDirName:"architecture/feature/computation-governance-services",slug:"/architecture/feature/computation-governance-services/linkis-cli",permalink:"/docs/latest/architecture/feature/computation-governance-services/linkis-cli",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.3.1/architecture/feature/computation-governance-services/linkis-cli.md",tags:[],version:"1.3.1",sidebarPosition:3,frontMatter:{title:"Linkis-Client Architecture",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Entrance Architecture Design",permalink:"/docs/latest/architecture/feature/computation-governance-services/entrance"},next:{title:"Overview",permalink:"/docs/latest/architecture/feature/computation-governance-services/linkis-manager/overview"}},s={},c=[{value:"Linkis-Client architecture diagram",id:"linkis-client-architecture-diagram",level:4},{value:"Second-level module introduction",id:"second-level-module-introduction",level:4},{value:"Linkis-Computation-Client",id:"linkis-computation-client",level:5},{value:"Linkis-Cli",id:"linkis-cli",level:5}],u={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Provide users with a lightweight client that submits tasks to Linkis for execution."),(0,i.kt)("h4",{id:"linkis-client-architecture-diagram"},"Linkis-Client architecture diagram"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:n(16197).Z,width:"1723",height:"739"})),(0,i.kt)("h4",{id:"second-level-module-introduction"},"Second-level module introduction"),(0,i.kt)("h5",{id:"linkis-computation-client"},"Linkis-Computation-Client"),(0,i.kt)("p",null,"Provides an interface for users to submit execution tasks to Linkis in the form of SDK."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Core Class"),(0,i.kt)("th",{parentName:"tr",align:null},"Core Function"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Action"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the requested attributes, methods and parameters included")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Result"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the properties of the returned result, the methods and parameters included")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"UJESClient"),(0,i.kt)("td",{parentName:"tr",align:null},"Responsible for request submission, execution, status, results and related parameters acquisition")))),(0,i.kt)("h5",{id:"linkis-cli"},"Linkis-Cli"),(0,i.kt)("p",null,"Provides a way for users to submit tasks to Linkis in the form of a shell command terminal."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Core Class"),(0,i.kt)("th",{parentName:"tr",align:null},"Core Function"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Common"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the parent class and interface of the instruction template parent class, the instruction analysis entity class, and the task submission and execution links")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Core"),(0,i.kt)("td",{parentName:"tr",align:null},"Responsible for parsing input, task execution and defining output methods")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Application"),(0,i.kt)("td",{parentName:"tr",align:null},"Call linkis-computation-client to perform tasks, and pull logs and final results in real time")))))}d.isMDXComponent=!0},16197:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/linkis-client-01-1ac14b684c9af9906731ffc6bc0b9448.png"}}]);