"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[1971],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),g=i,m=d["".concat(c,".").concat(g)]||d[g]||p[g]||a;return t?r.createElement(m,o(o({ref:n},u),{},{components:t})):r.createElement(m,o({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=g;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},71131:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(87462),i=(t(67294),t(3905));const a={title:"EngineConn Metrics Reporting Feature",sidebar_position:6,tags:["Feature"]},o=void 0,s={unversionedId:"architecture/computation-governance-services/engine/engine-conn-metrics",id:"version-1.3.0/architecture/computation-governance-services/engine/engine-conn-metrics",title:"EngineConn Metrics Reporting Feature",description:"1. Functional requirements",source:"@site/versioned_docs/version-1.3.0/architecture/computation-governance-services/engine/engine-conn-metrics.md",sourceDirName:"architecture/computation-governance-services/engine",slug:"/architecture/computation-governance-services/engine/engine-conn-metrics",permalink:"/docs/1.3.0/architecture/computation-governance-services/engine/engine-conn-metrics",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.3.0/architecture/computation-governance-services/engine/engine-conn-metrics.md",tags:[{label:"Feature",permalink:"/docs/1.3.0/tags/feature"}],version:"1.3.0",sidebarPosition:6,frontMatter:{title:"EngineConn Metrics Reporting Feature",sidebar_position:6,tags:["Feature"]},sidebar:"version-1.3.0/tutorialSidebar",previous:{title:"EngineConn History Features",permalink:"/docs/1.3.0/architecture/computation-governance-services/engine/engine-conn-history"},next:{title:"Job Submission",permalink:"/docs/1.3.0/architecture/computation-governance-services/job-submission-preparation-and-execution-process"}},c={},l=[{value:"1. Functional requirements",id:"1-functional-requirements",level:2},{value:"1.1 Requirement Background",id:"11-requirement-background",level:3},{value:"1.2 Goals",id:"12-goals",level:3},{value:"2. Overall Design",id:"2-overall-design",level:2},{value:"2.1 Technical Architecture",id:"21-technical-architecture",level:3},{value:"2.2 Business Architecture",id:"22-business-architecture",level:3},{value:"3. Module Design",id:"3-module-design",level:2},{value:"Core execution flow",id:"core-execution-flow",level:3},{value:"4. Data structure",id:"4-data-structure",level:2},{value:"5. Interface Design",id:"5-interface-design",level:2},{value:"6. Non-functional design:",id:"6-non-functional-design",level:2},{value:"6.1 Security",id:"61-security",level:3},{value:"6.2 Performance",id:"62-performance",level:3},{value:"6.3 Capacity",id:"63-capacity",level:3},{value:"6.4 High Availability",id:"64-high-availability",level:3}],u={toc:l},d="wrapper";function p(e){let{components:n,...a}=e;return(0,i.kt)(d,(0,r.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-functional-requirements"},"1. Functional requirements"),(0,i.kt)("h3",{id:"11-requirement-background"},"1.1 Requirement Background"),(0,i.kt)("p",null,"The reported information lacks engine information, and the reported resources and progress interfaces are redundant, which reduces performance. It needs to be aligned for optimization and adjustment, and an extension module should be added to the reporting protocol."),(0,i.kt)("h3",{id:"12-goals"},"1.2 Goals"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added RPC protocol containing resources, progress, and additional information, supporting reporting of these information in one request"),(0,i.kt)("li",{parentName:"ul"},"Reconstruct existing resources and progress reporting links, and combine the actions of reporting related information into one request")),(0,i.kt)("h2",{id:"2-overall-design"},"2. Overall Design"),(0,i.kt)("p",null,"This requirement involves the ",(0,i.kt)("inlineCode",{parentName:"p"},"linkis-entrance, linkis-computation-orchestrator, linkis-orchestrator-ecm-plugin, linkis-computation-engineconn")," modules. Add and refactor the reporting information in the ",(0,i.kt)("inlineCode",{parentName:"p"},"computation-engineconn")," module, and parse the information and store it on the entry side."),(0,i.kt)("h3",{id:"21-technical-architecture"},"2.1 Technical Architecture"),(0,i.kt)("p",null,"The engine information reporting architecture is shown in the figure. After the user submits the task to the entry, the entry applies to the linkismanager for an engine.\nAfter applying to the engine, submit tasks to the application, and receive regular reports of tasks (resources, progress, status). Until the task is executed, the entry returns the final result when the user queries.\nFor this modification, the engine metrics information needs to be added to the entry into the database;\nCombine Resource and Progress interface information in Orchestrator, and add additional information such as metrics;\nOn the ComputationEngineConn side of the interactive engine, the reported resources and progress information are combined, and engine statistics are additionally reported."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"engineconn-mitrics-1.png",src:t(5579).Z,width:"864",height:"427"})),(0,i.kt)("h3",{id:"22-business-architecture"},"2.2 Business Architecture"),(0,i.kt)("p",null,"This feature involves the following function point modules:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"First-level module"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Second-level module"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Function point"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Entrance"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"Merge resource and progress interfaces; parse new engine metrics")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Orchestrator"),(0,i.kt)("td",{parentName:"tr",align:"left"},"orchestrator-core"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Merge resource and progress interfaces; handle TaskRunningInfo messages")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Orchestrator"),(0,i.kt)("td",{parentName:"tr",align:"left"},"orchestrator-plugin-ecm"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Resource and progress interfaces for merging monitor engine information")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Orchestrator"),(0,i.kt)("td",{parentName:"tr",align:"left"},"computation-engineconn"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Reporting interface for combining resources and progress; new reporting engine example metrics")))),(0,i.kt)("h2",{id:"3-module-design"},"3. Module Design"),(0,i.kt)("h3",{id:"core-execution-flow"},"Core execution flow"),(0,i.kt)("p",null,"-","[","input] The input is the interactive engine ",(0,i.kt)("inlineCode",{parentName:"p"},"computation-engineconn"),". When the engine executes a task, it reports the running information ",(0,i.kt)("inlineCode",{parentName:"p"},"TaskRunningInfo"),", including the original ",(0,i.kt)("inlineCode",{parentName:"p"},"TaskProgressInfo")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"TaskResourceInfo"),", and adds the engine example information and the information about the number of existing tasks of the engine."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[","Processing process] ",(0,i.kt)("inlineCode",{parentName:"li"},"orchestrator-plugin-ecm")," is responsible for monitoring the reporting information when the engine runs tasks, receiving the reporting information, and generating the ",(0,i.kt)("inlineCode",{parentName:"li"},"TaskRunningInfoEvent")," asynchronous message,\nSent to ",(0,i.kt)("inlineCode",{parentName:"li"},"OrchestratorAsyncListenerBus")," for processing. The ",(0,i.kt)("inlineCode",{parentName:"li"},"TaskRunningInfoListener")," registered to the ",(0,i.kt)("inlineCode",{parentName:"li"},"OrchestratorAsyncListener")," receives the message, triggers the ",(0,i.kt)("inlineCode",{parentName:"li"},"listener")," method, and calls back to the ",(0,i.kt)("inlineCode",{parentName:"li"},"TaskRunningInfo")," callback method of the ",(0,i.kt)("inlineCode",{parentName:"li"},"Entrance")," Job.\nThe callback method parses the resource, progress, and engine ",(0,i.kt)("inlineCode",{parentName:"li"},"metrancs")," information in ",(0,i.kt)("inlineCode",{parentName:"li"},"TaskRunningInfo")," and persists them respectively.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"engineconn-mitrics-2.png",src:t(33006).Z,width:"825",height:"390"})),(0,i.kt)("h2",{id:"4-data-structure"},"4. Data structure"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"RPC protocol TaskRunningInfo")," has been added to the requirement, no db table has been added"),(0,i.kt)("h2",{id:"5-interface-design"},"5. Interface Design"),(0,i.kt)("p",null,"No external interface"),(0,i.kt)("h2",{id:"6-non-functional-design"},"6. Non-functional design:"),(0,i.kt)("h3",{id:"61-security"},"6.1 Security"),(0,i.kt)("p",null,"RPC interface internal authentication, does not involve external security issues"),(0,i.kt)("h3",{id:"62-performance"},"6.2 Performance"),(0,i.kt)("p",null,"Combined two RPC interfaces to reduce the number of reports and improve performance"),(0,i.kt)("h3",{id:"63-capacity"},"6.3 Capacity"),(0,i.kt)("p",null,"Less metrics information, no impact"),(0,i.kt)("h3",{id:"64-high-availability"},"6.4 High Availability"),(0,i.kt)("p",null,"not involving"))}p.isMDXComponent=!0},5579:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/engineconn-mitrics-1-50742fcf8debd75e5970c4b4037594b1.png"},33006:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/engineconn-mitrics-2-14654a7fd9b237ae866099f4a7e886f4.png"}}]);