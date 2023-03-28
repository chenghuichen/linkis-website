"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[91863],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>p});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(t),g=i,p=u["".concat(l,".").concat(g)]||u[g]||d[g]||r;return t?a.createElement(p,o(o({ref:n},m),{},{components:t})):a.createElement(p,o({ref:n},m))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},25250:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=t(87462),i=(t(67294),t(3905));const r={title:"ECM Management",sidebar_position:5},o=void 0,s={unversionedId:"user-guide/control-panel/ecm-management",id:"version-1.3.1/user-guide/control-panel/ecm-management",title:"ECM Management",description:"The ECM management interface is only visible to Linkis Computing Management Console administrators. This page is used to manage ECM and all engines. On this interface, you can view the status information of the ECM, modify the ECM label information, modify the ECM status information, and query all engine information under each ECM.",source:"@site/versioned_docs/version-1.3.1/user-guide/control-panel/ecm-management.md",sourceDirName:"user-guide/control-panel",slug:"/user-guide/control-panel/ecm-management",permalink:"/docs/latest/user-guide/control-panel/ecm-management",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.3.1/user-guide/control-panel/ecm-management.md",tags:[],version:"1.3.1",sidebarPosition:5,frontMatter:{title:"ECM Management",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Spark Engine Parameter Adjustment",permalink:"/docs/latest/user-guide/control-panel/spark-param"},next:{title:"Limit Parameter Adjustment",permalink:"/docs/latest/user-guide/control-panel/resource-limit"}},l={},c=[{value:"1. Instance view",id:"1-instance-view",level:2},{value:"2. Tag management",id:"2-tag-management",level:2},{value:"3. Engine information under ECM",id:"3-engine-information-under-ecm",level:2}],m={toc:c},u="wrapper";function d(e){let{components:n,...r}=e;return(0,i.kt)(u,(0,a.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ECM management interface is only visible to Linkis Computing Management Console administrators. This page is used to manage ECM and all engines. On this interface, you can view the status information of the ECM, modify the ECM label information, modify the ECM status information, and query all engine information under each ECM."),(0,i.kt)("h2",{id:"1-instance-view"},"1. Instance view"),(0,i.kt)("p",null,"An ECM instance is an ECM service. Users can start multiple ECM services according to requirements to improve request processing efficiency. On this page, you can view ECM instance information, including name, label, and resource information. In addition, ECM instances can be filtered through keywords such as instance name, status, and creator."),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(81106).Z,width:"1260",height:"523"})),(0,i.kt)("h2",{id:"2-tag-management"},"2. Tag management"),(0,i.kt)("p",null,"The ECM service filters and processes requests based on tags. Each service contains default labels and user-defined labels. Only the request carrying the label information of the ECM service will be processed by the current service. Click the Edit button to edit the label information of the ECM (only user-defined labels are allowed), and modify the status of the ECM."),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(98222).Z,width:"520",height:"399"})),(0,i.kt)("p",null,"The most commonly used is the tenant label tenant, through which users can isolate tenant requests."),(0,i.kt)("h2",{id:"3-engine-information-under-ecm"},"3. Engine information under ECM"),(0,i.kt)("p",null,"Click the instance name of an ECM to view all engine information under the ECM. And manage the engine, including stopping the engine, adding or deleting user-defined tags, viewing engine logs, and other operations."),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(11685).Z,width:"1263",height:"468"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(50496).Z,width:"1263",height:"468"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(63632).Z,width:"520",height:"506"})),(0,i.kt)("p",null,"Similarly, after tagging the engine under the ECM instance, you can control the specific engine that processes the request in a finer granularity."))}d.isMDXComponent=!0},11685:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/ecm-btn-45a39d4701040616dc6e99337ef3918e.png"},63632:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/ecm-engine-label-875b14a7ddc573101aff1a559b5c0443.png"},50496:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/ecm-engine-45a39d4701040616dc6e99337ef3918e.png"},81106:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/ecm-management-14df8b56a2a04191aa72552945986ba2.png"},98222:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/edit-label-495211531caf48595515012c945f1d21.png"}}]);