"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[68623],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},p="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,i=e.originalType,a=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(r),d=c,m=p["".concat(a,".").concat(d)]||p[d]||v[d]||i;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var i=r.length,s=new Array(i);s[0]=d;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o[p]="string"==typeof e?e:c,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},98243:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>v,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(87462),c=(r(67294),r(3905));const i={title:"CS Persistence Architecture",sidebar_position:5},s=void 0,o={unversionedId:"architecture/public-enhancement-services/context-service/context-service-persistence",id:"version-1.1.2/architecture/public-enhancement-services/context-service/context-service-persistence",title:"CS Persistence Architecture",description:"CSPersistence Architecture",source:"@site/versioned_docs/version-1.1.2/architecture/public-enhancement-services/context-service/context-service-persistence.md",sourceDirName:"architecture/public-enhancement-services/context-service",slug:"/architecture/public-enhancement-services/context-service/context-service-persistence",permalink:"/docs/1.1.2/architecture/public-enhancement-services/context-service/context-service-persistence",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.1.2/architecture/public-enhancement-services/context-service/context-service-persistence.md",tags:[],version:"1.1.2",sidebarPosition:5,frontMatter:{title:"CS Persistence Architecture",sidebar_position:5},sidebar:"version-1.1.2/tutorialSidebar",previous:{title:"CS Listener Architecture",permalink:"/docs/1.1.2/architecture/public-enhancement-services/context-service/context-service-listener"},next:{title:"CS Search Architecture",permalink:"/docs/1.1.2/architecture/public-enhancement-services/context-service/context-service-search"}},a={},l=[{value:"<strong>CSPersistence Architecture</strong>",id:"cspersistence-architecture",level:2},{value:"Persistence UML diagram",id:"persistence-uml-diagram",level:3}],u={toc:l},p="wrapper";function v(e){let{components:t,...i}=e;return(0,c.kt)(p,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"cspersistence-architecture"},(0,c.kt)("strong",{parentName:"h2"},"CSPersistence Architecture")),(0,c.kt)("h3",{id:"persistence-uml-diagram"},"Persistence UML diagram"),(0,c.kt)("p",null,(0,c.kt)("img",{src:r(55064).Z,width:"3613",height:"2258"})),(0,c.kt)("p",null,"The Persistence module mainly defines ContextService persistence related operations. The entities mainly include CSID, ContextKeyValue, CSResource, and CSTable."))}v.isMDXComponent=!0},55064:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/linkis-contextservice-persistence-01-6579373adbc5e0e9c67b534b4a2d88c7.png"}}]);