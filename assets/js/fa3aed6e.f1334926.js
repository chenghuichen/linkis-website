"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[21639],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),s=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(m.Provider,{value:e},t.children)},u="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,m=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=s(n),c=r,g=u["".concat(m,".").concat(c)]||u[c]||p[c]||i;return n?a.createElement(g,l(l({ref:e},d),{},{components:n})):a.createElement(g,l({ref:e},d))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o[u]="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},58558:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"User Permission Description of Management Console",sidebar_position:10},l=void 0,o={unversionedId:"user-guide/control-panel/permission-instructions-console",id:"user-guide/control-panel/permission-instructions-console",title:"User Permission Description of Management Console",description:"1. Role Type",source:"@site/docs/user-guide/control-panel/permission-instructions-console.md",sourceDirName:"user-guide/control-panel",slug:"/user-guide/control-panel/permission-instructions-console",permalink:"/docs/1.3.2/user-guide/control-panel/permission-instructions-console",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/docs/user-guide/control-panel/permission-instructions-console.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"User Permission Description of Management Console",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"UDF Function",permalink:"/docs/1.3.2/user-guide/control-panel/udf-function"},next:{title:"Overview",permalink:"/docs/1.3.2/engine-usage/overview"}},m={},s=[{value:"1. Role Type",id:"1-role-type",level:2},{value:"2. Description of function role permission chart",id:"2-description-of-function-role-permission-chart",level:2},{value:"3. Functional authority distinction",id:"3-functional-authority-distinction",level:2},{value:"3.1 Global History",id:"31-global-history",level:3},{value:"3.2 Resource Management",id:"32-resource-management",level:3},{value:"3.3 Parameter configuration",id:"33-parameter-configuration",level:3},{value:"3.4 Global variables",id:"34-global-variables",level:3},{value:"3.5 ECM Management (Admin)",id:"35-ecm-management-admin",level:3},{value:"3.6 Microservice Management (Admin)",id:"36-microservice-management-admin",level:3},{value:"3.7 Data Source Management",id:"37-data-source-management",level:3},{value:"3.7.1 Data source management",id:"371-data-source-management",level:4},{value:"3.7.2 Data source environment management (Admin)",id:"372-data-source-environment-management-admin",level:4},{value:"3.7.3 Data source type (Admin)",id:"373-data-source-type-admin",level:4},{value:"3.8 UDF Management",id:"38-udf-management",level:3},{value:"3.8.1 UDF management",id:"381-udf-management",level:4},{value:"3.8.2 Function Management",id:"382-function-management",level:4},{value:"3.9 Basic data management (Admin)",id:"39-basic-data-management-admin",level:3},{value:"3.9.1 Tenant label management",id:"391-tenant-label-management",level:4},{value:"3.9.2 Whitelist Management",id:"392-whitelist-management",level:4},{value:"3.10 Code Retrieval",id:"310-code-retrieval",level:3}],d={toc:s},u="wrapper";function p(t){let{components:e,...i}=t;return(0,r.kt)(u,(0,a.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-role-type"},"1. Role Type"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Administrator (Admin): able to view all menu entries, the administrator role has the highest authority, including historical administrator authority"),(0,r.kt)("li",{parentName:"ul"},"History Admin (historyAdmin): In addition to the tasks submitted by yourself, you can also view other historical tasks"),(0,r.kt)("li",{parentName:"ul"},"general user: View the task information submitted by yourself")),(0,r.kt)("h2",{id:"2-description-of-function-role-permission-chart"},"2. Description of function role permission chart"),(0,r.kt)("p",null,"The permissions that different roles have in the function"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Function Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Administrator (Admin)"),(0,r.kt)("th",{parentName:"tr",align:null},"History Administrator (historyAdmin)"),(0,r.kt)("th",{parentName:"tr",align:null},"Ordinary User"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Administrator View (Global History)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Search Bar (Resource Management)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Parameter configuration"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Global variables"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ECM Management"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Microservice Management"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data Source Management"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data source environment management"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data source type"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UDF Management"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Function Management"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tenant Tag Management"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Whitelist Management"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Code Retrieval (Admin View)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Code search (other functions)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a")))),(0,r.kt)("h2",{id:"3-functional-authority-distinction"},"3. Functional authority distinction"),(0,r.kt)("h3",{id:"31-global-history"},"3.1 Global History"),(0,r.kt)("p",null,"The administrator view can only be viewed by historical administrators or administrators"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(10787).Z,width:"1630",height:"192"})),(0,r.kt)("h3",{id:"32-resource-management"},"3.2 Resource Management"),(0,r.kt)("p",null,"The search bar is only visible to administrators"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(58987).Z,width:"1920",height:"328"})),(0,r.kt)("h3",{id:"33-parameter-configuration"},"3.3 Parameter configuration"),(0,r.kt)("p",null,"Only admins can edit apps"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(90853).Z,width:"1712",height:"236"})),(0,r.kt)("h3",{id:"34-global-variables"},"3.4 Global variables"),(0,r.kt)("p",null,"all editable"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(42717).Z,width:"1920",height:"292"})),(0,r.kt)("h3",{id:"35-ecm-management-admin"},"3.5 ECM Management (Admin)"),(0,r.kt)("p",null,"Only administrators have permission"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5836).Z,width:"1891",height:"588"})),(0,r.kt)("h3",{id:"36-microservice-management-admin"},"3.6 Microservice Management (Admin)"),(0,r.kt)("p",null,"Only administrators have permission"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(29439).Z,width:"1905",height:"508"})),(0,r.kt)("h3",{id:"37-data-source-management"},"3.7 Data Source Management"),(0,r.kt)("h4",{id:"371-data-source-management"},"3.7.1 Data source management"),(0,r.kt)("p",null,"have authority"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(72819).Z,width:"1915",height:"620"})),(0,r.kt)("h4",{id:"372-data-source-environment-management-admin"},"3.7.2 Data source environment management (Admin)"),(0,r.kt)("p",null,"Only administrators have permission"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(23843).Z,width:"1917",height:"650"})),(0,r.kt)("h4",{id:"373-data-source-type-admin"},"3.7.3 Data source type (Admin)"),(0,r.kt)("p",null,"Only administrators have permission"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(93982).Z,width:"1919",height:"681"})),(0,r.kt)("h3",{id:"38-udf-management"},"3.8 UDF Management"),(0,r.kt)("h4",{id:"381-udf-management"},"3.8.1 UDF management"),(0,r.kt)("p",null,"have authority"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(92480).Z,width:"1920",height:"569"})),(0,r.kt)("h4",{id:"382-function-management"},"3.8.2 Function Management"),(0,r.kt)("p",null,"have authority"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(26909).Z,width:"1920",height:"606"})),(0,r.kt)("h3",{id:"39-basic-data-management-admin"},"3.9 Basic data management (Admin)"),(0,r.kt)("h4",{id:"391-tenant-label-management"},"3.9.1 Tenant label management"),(0,r.kt)("p",null,"Only administrators have permission"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(96728).Z,width:"1920",height:"690"})),(0,r.kt)("h4",{id:"392-whitelist-management"},"3.9.2 Whitelist Management"),(0,r.kt)("p",null,"Only administrators have permission"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(74996).Z,width:"1912",height:"751"})),(0,r.kt)("h3",{id:"310-code-retrieval"},"3.10 Code Retrieval"),(0,r.kt)("p",null,"The administrator view can only be viewed by administrators"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(63781).Z,width:"1689",height:"422"})))}p.isMDXComponent=!0},74996:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/bmdgl-img-b64111a39baf6e7f6b19104562e9c428.png"},63781:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/dmjs-img-b704f513ba24044e5e0768815ae49a91.png"},5836:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/ecmgl-img-2f3dfd3c1ca28ebfe394ba6dbff6c374.png"},26909:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/fun-img-ca868dc8fb89f6625c33f598359c13ce.png"},90853:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/glybj-img-48d9ab2b665054e96eaff7209286f98f.png"},23843:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/hj-img-0cc37e8fc84aa508deed8ef12513c2ab.png"},42717:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/jksy-img-befe76a97bde8d4b21a2dae99698ce4d.png"},93982:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/pzx-img-73f76a22069475c60a388cbe8d5d6f21.png"},10787:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/qhgly-img-267a6df49ef1e9460f9c8935e982d0cb.png"},72819:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/sou-img-a6d2a1ec6ad46fb663934e0b0f9fd32b.png"},58987:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/sslkj-img-5230afa4d65b40c9892b040b0dee85ee.png"},92480:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/udfgl-img-7d7f945b5172c54300c21cf189c65601.png"},29439:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/wfwgl-img-8ad80609d6e03f6e33eb993b89acd705.png"},96728:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/zhbj-img-5b78e38e3d14b088ccf2004f7713e3c5.png"}}]);