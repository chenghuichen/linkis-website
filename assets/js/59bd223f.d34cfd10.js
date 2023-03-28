"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[88104],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=o.createContext({}),c=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(a.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),p=i,m=h["".concat(a,".").concat(p)]||h[p]||d[p]||r;return n?o.createElement(m,l(l({ref:t},u),{},{components:n})):o.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=p;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[h]="string"==typeof e?e:i,l[1]=s;for(var c=2;c<r;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},66314:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(87462),i=(n(67294),n(3905));const r={title:"Asynchronous Log Live Push",sidebar_position:1},l=void 0,s={unversionedId:"architecture/commons/real-time-log-push",id:"version-0.11.0/architecture/commons/real-time-log-push",title:"Asynchronous Log Live Push",description:"Interservice Asynchronous Push Scheme",source:"@site/versioned_docs/version-0.11.0/architecture/commons/real-time-log-push.md",sourceDirName:"architecture/commons",slug:"/architecture/commons/real-time-log-push",permalink:"/docs/0.11.0/architecture/commons/real-time-log-push",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-0.11.0/architecture/commons/real-time-log-push.md",tags:[],version:"0.11.0",sidebarPosition:1,frontMatter:{title:"Asynchronous Log Live Push",sidebar_position:1},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"WebSocket Request",permalink:"/docs/0.11.0/architecture/websocket"},next:{title:"Scheduler Architecture",permalink:"/docs/0.11.0/architecture/commons/scheduler"}},a={},c=[{value:"1 Background",id:"1-background",level:2},{value:"2 Ideas",id:"2-ideas",level:2},{value:"3 Implementation",id:"3-implementation",level:2},{value:"3.1 Design implementation of Appender components",id:"31-design-implementation-of-appender-components",level:3},{value:"3.2 The design implementation of listeners",id:"32-the-design-implementation-of-listeners",level:3},{value:"3.3 Design implementation for the cache queue",id:"33-design-implementation-for-the-cache-queue",level:3},{value:"3.4 Logging collection",id:"34-logging-collection",level:3}],u={toc:c},h="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(h,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Interservice Asynchronous Push Scheme")),(0,i.kt)("h2",{id:"1-background"},"1 Background"),(0,i.kt)("p",null,"With the use of the microservice architecture, multiple microservices will be deployed on different servers, and the logs generated by each microservice will be distributed among the servers. While the ELK is able to filter the logs to be viewed by users, there is a lack of time and customization."),(0,i.kt)("p",null,"If log disks before collection logs are used, it will be difficult to classify logs according to the user's running information, first because of the excess time spent on disk, and then because of the loss of user information during the running phase after the log disk."),(0,i.kt)("h2",{id:"2-ideas"},"2 Ideas"),(0,i.kt)("p",null,"Design an Appender based on log4j2 and add to the configuration of the microservice log, then use the listener design mode and the RPC's service call to implement the log in real time."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"In-service Asynchronous Times Push Scheme",src:n(62565).Z,width:"1199",height:"673"})),(0,i.kt)("h2",{id:"3-implementation"},"3 Implementation"),(0,i.kt)("h3",{id:"31-design-implementation-of-appender-components"},"3.1 Design implementation of Appender components"),(0,i.kt)("p",null,"The current background development of the more popular log framework uses slf4j as the faculty for logic, logback or log4j2, and now the open source project will prefer log4j2 as a framework for log printing, owing to its performance advantages and open source license."),(0,i.kt)("p",null,"Appender is a target (destination) printed in log4j2 logs. Once a log event is generated during the microservice running, all the Appenders registered in the configuration will get this log event."),(0,i.kt)("p",null,"The Linkis designed Appender will cache the acquired log event in the queue after the log microservice log is generated, and we have a listener in the Appender."),(0,i.kt)("h3",{id:"32-the-design-implementation-of-listeners"},"3.2 The design implementation of listeners"),(0,i.kt)("p",null,"The listener mode is a common design mode and is a common method of implementing asynchronous callback programming."),(0,i.kt)("p",null,"The listener needs to listen for the log event queue and if the log event queue is full, the log will be removed from the queue and sent via HTTP."),(0,i.kt)("p",null,"The listener also needs to listen to the task state and after the task has completed all the execution steps in this microservice, it will be necessary to send all the logs cached in the queue to prevent the log loss."),(0,i.kt)("h3",{id:"33-design-implementation-for-the-cache-queue"},"3.3 Design implementation for the cache queue"),(0,i.kt)("p",null,"The reason for using the cache queue is that if a log event is generated it will push the microservice to receive the log because HTTP requests are too frequent, so it must be cached and the general cache queue can be designed as a blockqueue with the maximum number of caches."),(0,i.kt)("h3",{id:"34-logging-collection"},"3.4 Logging collection"),(0,i.kt)("p",null,"The log will be sent to the microservice collected by the log, which will then sort and encapsulated the log, which will be pushed to the user interface, and the log will be asynchronous and backups of a task log for each user."))}d.isMDXComponent=!0},62565:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/log_push-a9366f47e300c50f5fc1c160b1ef691e.png"}}]);