"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[98842],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=l(r),p=i,g=m["".concat(u,".").concat(p)]||m[p]||d[p]||o;return r?n.createElement(g,s(s({ref:t},c),{},{components:r})):n.createElement(g,s({ref:t},c))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[m]="string"==typeof e?e:i,s[1]=a;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9785:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const o={title:"Limit Parameter Adjustment",sidebar_position:5},s=void 0,a={unversionedId:"user-guide/control-panel/resource-limit",id:"version-1.3.1/user-guide/control-panel/resource-limit",title:"Limit Parameter Adjustment",description:"This article describes how to adjust parameters when resources such as memory and CPU are insufficient.",source:"@site/versioned_docs/version-1.3.1/user-guide/control-panel/resource-limit.md",sourceDirName:"user-guide/control-panel",slug:"/user-guide/control-panel/resource-limit",permalink:"/docs/latest/user-guide/control-panel/resource-limit",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.3.1/user-guide/control-panel/resource-limit.md",tags:[],version:"1.3.1",sidebarPosition:5,frontMatter:{title:"Limit Parameter Adjustment",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"ECM Management",permalink:"/docs/latest/user-guide/control-panel/ecm-management"},next:{title:"Microservice Management",permalink:"/docs/latest/user-guide/control-panel/microservice-management"}},u={},l=[{value:"1. Insufficient queue resources",id:"1-insufficient-queue-resources",level:2},{value:"2. The number of queue instances exceeds the limit",id:"2-the-number-of-queue-instances-exceeds-the-limit",level:2},{value:"3. Global driver memory usage limit",id:"3-global-driver-memory-usage-limit",level:2},{value:"4. Exceeded the upper limit of the CPU number of the global driver",id:"4-exceeded-the-upper-limit-of-the-cpu-number-of-the-global-driver",level:2},{value:"5. Exceeded the upper limit of the engine&#39;s maximum concurrent number",id:"5-exceeded-the-upper-limit-of-the-engines-maximum-concurrent-number",level:2}],c={toc:l},m="wrapper";function d(e){let{components:t,...o}=e;return(0,i.kt)(m,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This article describes how to adjust parameters when resources such as memory and CPU are insufficient."),(0,i.kt)("h2",{id:"1-insufficient-queue-resources"},"1. Insufficient queue resources"),(0,i.kt)("p",null,"An error is reported during task execution: error code 12001, the error message queue has insufficient CPU resources, you can adjust the number of Spark executors"),(0,i.kt)("p",null,"Click on the management console--parameter configuration--IDE--Spark--display advanced settings--woker engine resource settings (2)--adjust the concurrent number of executors\n",(0,i.kt)("img",{src:r(11950).Z,width:"1262",height:"700"})),(0,i.kt)("p",null,"Or set the global setting to adjust the upper limit of queue resource usage."),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(49451).Z,width:"1255",height:"571"})),(0,i.kt)("h2",{id:"2-the-number-of-queue-instances-exceeds-the-limit"},"2. The number of queue instances exceeds the limit"),(0,i.kt)("p",null,"An error is reported during task execution: error code 12003, the number of error message queue instances exceeds the limit"),(0,i.kt)("p",null,"Click Management Console--Parameter Configuration--Global Settings--Queue Resources--Maximum Number of Yarn Queue Instances ","[wds.linkis.rm.yarnqueue.instance.max]"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(5207).Z,width:"1262",height:"700"})),(0,i.kt)("h2",{id:"3-global-driver-memory-usage-limit"},"3. Global driver memory usage limit"),(0,i.kt)("p",null,"An error is reported during task execution: error code 12004, error message upper limit of global driver memory usage, lower driver memory can be set"),(0,i.kt)("p",null,"Click Management Console--Parameter Configuration--Global Settings--Queue Resources--Maximum Number of Yarn Queue Memory \u961f\u5217\u5185\u5b58\u4f7f\u7528\u4e0a\u9650","[wds.linkis.rm.yarnqueue.memory.max]"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(65731).Z,width:"1257",height:"572"})),(0,i.kt)("h2",{id:"4-exceeded-the-upper-limit-of-the-cpu-number-of-the-global-driver"},"4. Exceeded the upper limit of the CPU number of the global driver"),(0,i.kt)("p",null,"An error is reported during task execution: error code 12005, the error message exceeds the upper limit of the number of CPUs in the global drive, and idle engines can be cleaned up"),(0,i.kt)("p",null,"Click Management Console - Parameter Configuration - Global Settings - Queue Resources - Upper Limit of The Number of Engine Cores","[wds.linkis.rm.client.core.max]"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(96913).Z,width:"1258",height:"588"})),(0,i.kt)("p",null,"Or solve it by cleaning idle engines."),(0,i.kt)("h2",{id:"5-exceeded-the-upper-limit-of-the-engines-maximum-concurrent-number"},"5. Exceeded the upper limit of the engine's maximum concurrent number"),(0,i.kt)("p",null,"An error is reported during task execution: error code 12006, the error message exceeds the maximum concurrency limit of the engine, and idle engines can be cleaned up"),(0,i.kt)("p",null,"Click Management Console--Parameter Configuration--Global Settings--Queue Resources--Maximum concurrent number of each engine globally ","[wds.linkis.rm.instance]"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(4216).Z,width:"1256",height:"583"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Spark engine"),"\n",(0,i.kt)("img",{src:r(97456).Z,width:"1262",height:"700"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Hive engine")),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(62714).Z,width:"1262",height:"700"})),(0,i.kt)("p",null,"Other engine settings are similar to Spark and Hive engines."))}d.isMDXComponent=!0},65731:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/engine-memory-15ad0d7efae9a2c39b93b7092adcca0d.png"},4216:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/global-con-b0d05531d3e705bc0d071d07070ab2c7.png"},96913:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/global-core-1cbda4da6e4ea0a2206da055b517e61a.png"},49451:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/global-limit-007f57d50b8cec1fd766af5c5ff1e168.png"},62714:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/hive-con-048643d5814d7eb6e416bc710c47417f.png"},97456:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/spark-con-048643d5814d7eb6e416bc710c47417f.png"},11950:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/spark-resource-048643d5814d7eb6e416bc710c47417f.png"},5207:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/yarn-instance-048643d5814d7eb6e416bc710c47417f.png"}}]);