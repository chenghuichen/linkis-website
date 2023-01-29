"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[21065],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},29242:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={title:"Introduction",sidebar_position:0},o="Introduction",l={unversionedId:"introduction",id:"version-1.0.2/introduction",title:"Introduction",description:"Linkis builds a layer of computation middleware between upper applications and underlying engines. By using standard interfaces such as REST/WS/JDBC provided by Linkis, the upper applications can easily access the underlying engines such as MySQL/Spark/Hive/Presto/Flink, etc., and achieve the intercommunication of user resources like unified variables, scripts, UDFs, functions and resource files at the same time.",source:"@site/versioned_docs/version-1.0.2/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/docs/1.0.2/introduction",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.0.2/introduction.md",tags:[],version:"1.0.2",sidebarPosition:0,frontMatter:{title:"Introduction",sidebar_position:0},sidebar:"version-1.0.2/tutorialSidebar",next:{title:"Quick Deployment",permalink:"/docs/1.0.2/deployment/quick-deploy"}},s={},p=[],c={toc:p};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null," Linkis builds a layer of computation middleware between upper applications and underlying engines. By using standard interfaces such as REST/WS/JDBC provided by Linkis, the upper applications can easily access the underlying engines such as MySQL/Spark/Hive/Presto/Flink, etc., and achieve the intercommunication of user resources like unified variables, scripts, UDFs, functions and resource files at the same time."),(0,r.kt)("p",null,"As a computation middleware, Linkis provides powerful connectivity, reuse, orchestration, expansion, and governance capabilities. By decoupling the application layer and the engine layer, it simplifies the complex network call relationship, and thus reduces the overall complexity and saves the development and maintenance costs as well."),(0,r.kt)("p",null,"Since the first release of Linkis in 2019, it has accumulated more than ",(0,r.kt)("strong",{parentName:"p"},"700")," trial companies and ",(0,r.kt)("strong",{parentName:"p"},"1000+")," sandbox trial users, which involving diverse industries, from finance, banking, tele-communication, to manufactory, internet companies and so on. Lots of companies have already used Linkis as a unified entrance for the underlying computation and storage engines of the big data platform."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/11496700/84615498-c3030200-aefb-11ea-9b16-7e4058bf6026.png",alt:"linkis-intro-01"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/11496700/84615483-bb435d80-aefb-11ea-81b5-67f62b156628.png",alt:"linkis-intro-03"})),(0,r.kt)("h1",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Support for diverse underlying computation storage engines"),".",(0,r.kt)("br",{parentName:"p"}),"\n","Currently supported computation/storage engines: Spark, Hive, Python, Presto, ElasticSearch, MLSQL, TiSpark, JDBC, Shell, etc;",(0,r.kt)("br",{parentName:"p"}),"\n","Computation/storage engines to be supported: Flink, Impala, etc;",(0,r.kt)("br",{parentName:"p"}),"\n","Supported scripting languages: SparkSQL, HiveQL, Python, Shell, Pyspark, R, Scala and JDBC, etc.  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Powerful task/request governance capabilities"),". With services such as Orchestrator, Label Manager and customized Spring Cloud Gateway, Linkis is able to provide multi-level labels based, cross-cluster/cross-IDC fine-grained routing, load balance, multi-tenancy, traffic control, resource control, and orchestration strategies like dual-active, active-standby, etc.  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Support full stack computation/storage engine"),". As a computation middleware, it will receive, execute and manage tasks and requests for various computation storage engines, including batch tasks, interactive query tasks, real-time streaming tasks and storage tasks;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Resource management capabilities"),".  ResourceManager is not only capable of managing resources for Yarn and Linkis EngineManger as in Linkis 0.X, but also able to provide label-based multi-level resource allocation and recycling, allowing itself to have powerful resource management capabilities across multiple Yarn clusters and multiple computation resource types;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Unified Context Service"),". Generate Context ID for each task/request,  associate and manage user and system resource files (JAR, ZIP, Properties, etc.), result set, parameter variable, function, etc., across user, system, and computing engine. Set in one place, automatic reference everywhere;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Unified materials"),". System and user-level unified material management, which can be shared and transferred across users and systems."))),(0,r.kt)("h1",{id:"supported-engine-types"},"Supported engine types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Engine")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Supported Version")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Linkis 0.X version requirement")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Linkis 1.X version requirement")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Flink"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.12.2"),(0,r.kt)("td",{parentName:"tr",align:"left"},">","=dev-0.12.0, PR #703 not merged yet."),(0,r.kt)("td",{parentName:"tr",align:"left"},">=1.0.2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Flink EngineConn. Supports FlinkSQL code, and also supports Flink Jar to Linkis Manager to start a new Yarn application.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Impala"),(0,r.kt)("td",{parentName:"tr",align:"left"},">",'=3.2.0, CDH >=6.3.0"'),(0,r.kt)("td",{parentName:"tr",align:"left"},">","=dev-0.12.0, PR #703 not merged yet."),(0,r.kt)("td",{parentName:"tr",align:"left"},"ongoing"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Impala EngineConn. Supports Impala SQL.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Presto"),(0,r.kt)("td",{parentName:"tr",align:"left"},">","= 0.180"),(0,r.kt)("td",{parentName:"tr",align:"left"},">","=0.11.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ongoing"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Presto EngineConn. Supports Presto SQL.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ElasticSearch"),(0,r.kt)("td",{parentName:"tr",align:"left"},">","=6.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},">","=0.11.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ongoing"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ElasticSearch EngineConn. Supports SQL and DSL code.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Shell"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Bash >=2.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},">","=0.9.3"),(0,r.kt)("td",{parentName:"tr",align:"left"},">","=1.0.0_rc1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Shell EngineConn. Supports shell code.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"MLSQL"),(0,r.kt)("td",{parentName:"tr",align:"left"},">","=1.1.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},">","=0.9.1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ongoing"),(0,r.kt)("td",{parentName:"tr",align:"left"},"MLSQL EngineConn. Supports MLSQL code.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"JDBC"),(0,r.kt)("td",{parentName:"tr",align:"left"},"MySQL >=5.0, Hive >=1.2.1"),(0,r.kt)("td",{parentName:"tr",align:"left"},">","=0.9.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},">","=1.0.0_rc1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"JDBC EngineConn. Supports MySQL and HiveQL code.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Spark"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Apache 2.0.0~2.4.7, CDH >=5.4.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},">","=0.5.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},">","=1.0.0_rc1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Spark EngineConn. Supports SQL, Scala, Pyspark and R code.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Hive"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Apache >=1.0.0, CDH >=5.4.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},">","=0.5.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},">","=1.0.0_rc1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Hive EngineConn. Supports HiveQL code.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Hadoop"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Apache >=2.6.0, CDH >=5.4.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},">","=0.5.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ongoing"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Hadoop EngineConn. Supports Hadoop MR/YARN application.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Python"),(0,r.kt)("td",{parentName:"tr",align:"left"},">","=2.6"),(0,r.kt)("td",{parentName:"tr",align:"left"},">","=0.5.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},">","=1.0.0_rc1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Python EngineConn. Supports python code.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TiSpark"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.1"),(0,r.kt)("td",{parentName:"tr",align:"left"},">","=0.5.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ongoing"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TiSpark EngineConn. Support querying TiDB data by SparkSQL.")))),(0,r.kt)("h1",{id:"download"},"Download"),(0,r.kt)("p",null,"Please go to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/linkis/releases"},"Linkis releases page")," to download a compiled distribution or a source code package of Linkis."),(0,r.kt)("h1",{id:"compile-and-deploy"},"Compile and deploy"),(0,r.kt)("p",null,"Please follow ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.0.2/development/linkis-compile-and-package"},"Compile Guide")," to compile Linkis from source code.",(0,r.kt)("br",{parentName:"p"}),"\n","Please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.0.2/deployment/quick-deploy"},"Deployment_Documents")," to do the deployment. "),(0,r.kt)("h1",{id:"examples-and-guidance"},"Examples and Guidance"),(0,r.kt)("p",null,"You can find examples and guidance for how to use and manage Linkis in ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.0.2/user-guide/overview"},"User_Manual"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.0.2/engine-usage/overview"},"engine-usage_Documents")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.0.2/api/overview"},"API_Documents"),"."),(0,r.kt)("h1",{id:"documentation"},"Documentation"),(0,r.kt)("p",null,"The documentation of linkis is in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/linkis-website"},"Linkis-WebSite")),(0,r.kt)("h1",{id:"architecture"},"Architecture"),(0,r.kt)("p",null,"Linkis services could be divided into three categories: computation governance services, public enhancement services and microservice governance services.  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The computation governance services, support the 3 major stages of processing a task/request: submission -> preparation -> execution;  "),(0,r.kt)("li",{parentName:"ul"},"The public enhancement services, including the material library service, context service, and data source service;  "),(0,r.kt)("li",{parentName:"ul"},"The microservice governance services, including Spring Cloud Gateway, Eureka and Open Feign.")),(0,r.kt)("p",null,"Below is the Linkis architecture diagram. You can find more detailed architecture docs in ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.0.2/architecture/overview"},"Architecture"),".\n",(0,r.kt)("img",{alt:"architecture",src:a(28338).Z,width:"1920",height:"1471"})),(0,r.kt)("p",null,"Based on Linkis the computation middleware, we've built a lot of applications and tools on top of it in the big data platform suite ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WeBankFinTech/WeDataSphere"},"WeDataSphere"),". Below are the currently available open-source projects."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"wedatasphere_stack_Linkis",src:a(23164).Z,width:"1920",height:"769"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/WeBankFinTech/DataSphereStudio"},(0,r.kt)("strong",{parentName:"a"},"DataSphere Studio")," - Data Application Integration& Development Framework"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/WeBankFinTech/Scriptis"},(0,r.kt)("strong",{parentName:"a"},"Scriptis")," - Data Development IDE Tool"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/WeBankFinTech/Visualis"},(0,r.kt)("strong",{parentName:"a"},"Visualis")," - Data Visualization Tool"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/WeBankFinTech/Schedulis"},(0,r.kt)("strong",{parentName:"a"},"Schedulis")," - Workflow Task Scheduling Tool"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/WeBankFinTech/Qualitis"},(0,r.kt)("strong",{parentName:"a"},"Qualitis")," - Data Quality Tool"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/WeBankFinTech/prophecis"},(0,r.kt)("strong",{parentName:"a"},"MLLabis")," - Machine Learning Notebook IDE")))),(0,r.kt)("p",null,"More projects upcoming, please stay tuned."),(0,r.kt)("h1",{id:"contributing"},"Contributing"),(0,r.kt)("p",null,"Contributions are always welcomed, we need more contributors to build Linkis together. either code, or doc, or other supports that could help the community.",(0,r.kt)("br",{parentName:"p"}),"\n","For code and documentation contributions, please follow the ",(0,r.kt)("a",{parentName:"p",href:"/community/how-to-contribute"},"contribution guide"),"."),(0,r.kt)("h1",{id:"contact-us"},"Contact Us"),(0,r.kt)("p",null,"Any questions or suggestions please kindly submit an issue.",(0,r.kt)("br",{parentName:"p"}),"\n","You can scan the QR code below to join our WeChat group to get more immediate response."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"introduction05",src:a(72587).Z,width:"382",height:"388"})),(0,r.kt)("p",null,"Meetup videos on ",(0,r.kt)("a",{parentName:"p",href:"https://space.bilibili.com/598542776?from=search&seid=14344213924133040656"},"Bilibili"),"."),(0,r.kt)("h1",{id:"who-is-using-linkis"},"Who is Using Linkis"),(0,r.kt)("p",null,"We opened ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/linkis/issues/23"},"an issue")," for users to feedback and record who is using Linkis.",(0,r.kt)("br",{parentName:"p"}),"\n","Since the first release of Linkis in 2019, it has accumulated more than ",(0,r.kt)("strong",{parentName:"p"},"700")," trial companies and ",(0,r.kt)("strong",{parentName:"p"},"1000+")," sandbox trial users, which involving diverse industries, from finance, banking, tele-communication, to manufactory, internet companies and so on."))}d.isMDXComponent=!0},28338:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Linkis_1.0_architecture-e91c8fbabb890c6beaf4317cf22f5151.png"},72587:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/wedatasphere_contact_01-b7ba004b71d7e1b84b37d9b057b2ee55.png"},23164:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/wedatasphere_stack_Linkis-7f1308b2505ad1cdabf5e39ed185a804.png"}}]);