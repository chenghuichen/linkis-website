"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[54282],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>m});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=t.createContext({}),l=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(r),m=i,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?t.createElement(k,c(c({ref:n},u),{},{components:r})):t.createElement(k,c({ref:n},u))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=d;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=r[l];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},51690:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=r(87462),i=(r(67294),r(3905));const o={title:"Source Code Directory Structure",sidebar_position:5},c="Source Code Directory Structure",a={unversionedId:"deployment/sourcecode-hierarchical-structure",id:"version-1.0.2/deployment/sourcecode-hierarchical-structure",title:"Source Code Directory Structure",description:"Linkis source code hierarchical directory structure description, if you want to learn more about Linkis modules, please check Linkis related architecture design",source:"@site/versioned_docs/version-1.0.2/deployment/sourcecode-hierarchical-structure.md",sourceDirName:"deployment",slug:"/deployment/sourcecode-hierarchical-structure",permalink:"/docs/1.0.2/deployment/sourcecode-hierarchical-structure",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.0.2/deployment/sourcecode-hierarchical-structure.md",tags:[],version:"1.0.2",sidebarPosition:5,frontMatter:{title:"Source Code Directory Structure",sidebar_position:5},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"Installation Directory Structure",permalink:"/docs/1.0.2/deployment/installation-hierarchical-structure"},next:{title:"Linkis Console Deployment",permalink:"/docs/1.0.2/deployment/web-install"}},s={},l=[],u={toc:l};function p(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"source-code-directory-structure"},"Source Code Directory Structure"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Linkis source code hierarchical directory structure description, if you want to learn more about Linkis modules, please check ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.0.2/architecture/overview"},"Linkis related architecture design"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"|-- assembly-combined-package //Compile the module of the entire project\n|        |-- assembly-combined\n|        |-- bin\n|        |-- config\n|        |-- src\n|-- linkis-commons //Core abstraction, which contains all common modules\n|        |-- linkis-common //Common module, built-in many common tools\n|        |-- linkis-hadoop-common\n|        |-- linkis-httpclient //Java SDK top-level interface\n|        |-- linkis-message-scheduler\n|        |-- linkis-module\n|        |-- linkis-mybatis //SpringCloud's Mybatis module\n|        |-- linkis-protocol\n|        |-- linkis-rpc //RPC module, complex two-way communication based on Feign\n|        |-- linkis-scheduler //General scheduling module\n|        |-- linkis-storage\n|        |\n|-- linkis-computation-governance //computing governance service\n|        |-- linkis-client //Java SDK, users can directly access Linkis through Client\n|        |-- linkis-computation-governance-common\n|        |-- linkis-engineconn\n|        |-- linkis-engineconn-manager\n|        |-- linkis-entrance //General low-level entrance module\n|        |-- linkis-entrance-client\n|        |-- linkis-jdbc-driver\n|        |-- linkis-manager\n|\n|-- linkis-engineconn-plugins\n|        |-- engineconn-plugins\n|        |-- linkis-engineconn-plugin-framework\n|\n|-- linkis-extensions\n|        |-- linkis-io-file-client\n|-- linkis-orchestrator\n|        |-- linkis-code-orchestrator\n|        |-- linkis-computation-orchestrator\n|        |-- linkis-orchestrator-core\n|        |-- plugin\n|-- linkis-public-enhancements //Public enhancement services\n|        |-- linkis-bml // Material library\n|        |-- linkis-context-service //Unified context\n|        |-- linkis-datasource //Data source service\n|        |-- linkis-publicservice //Public Service\n|-- linkis-spring-cloud-services //Microservice governance\n|        |-- linkis-service-discovery\n|        |-- linkis-service-gateway //Gateway\n|-- db //Database information\n|\n|-- web //Management desk code of linkis\n")))}p.isMDXComponent=!0}}]);