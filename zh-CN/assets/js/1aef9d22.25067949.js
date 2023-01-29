"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[58797],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=i,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(g,a(a({ref:t},u),{},{components:r})):n.createElement(g,a({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1335:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const o={title:"\u5fae\u670d\u52a1\u7ba1\u7406",sidebar_position:6},a=void 0,c={unversionedId:"user-guide/control-panel/microservice-management",id:"version-1.3.1/user-guide/control-panel/microservice-management",title:"\u5fae\u670d\u52a1\u7ba1\u7406",description:"Linkis \u662f\u57fa\u4e8e Spring Cloud \u6784\u5efa\u7684\u5206\u5e03\u5f0f\u5fae\u670d\u52a1\u7cfb\u7edf\u3002\u6ce8\u518c\u4e2d\u5fc3\u670d\u52a1\u4f7f\u7528\u7684\u662f Eureka\u3002\u5fae\u670d\u52a1\u7ba1\u7406\u754c\u9762\u4ec5\u5bf9\u7ba1\u7406\u5458\u53ef\u89c1\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.1/user-guide/control-panel/microservice-management.md",sourceDirName:"user-guide/control-panel",slug:"/user-guide/control-panel/microservice-management",permalink:"/zh-CN/docs/latest/user-guide/control-panel/microservice-management",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.1/user-guide/control-panel/microservice-management.md",tags:[],version:"1.3.1",sidebarPosition:6,frontMatter:{title:"\u5fae\u670d\u52a1\u7ba1\u7406",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u9650\u5236\u53c2\u6570\u8c03\u6574",permalink:"/zh-CN/docs/latest/user-guide/control-panel/resource-limit"},next:{title:"\u6570\u636e\u6e90\u7ba1\u7406",permalink:"/zh-CN/docs/latest/user-guide/control-panel/datasource-management"}},s={},l=[{value:"1. \u670d\u52a1\u67e5\u770b",id:"1-\u670d\u52a1\u67e5\u770b",level:2},{value:"2. \u6ce8\u518c\u4e2d\u5fc3",id:"2-\u6ce8\u518c\u4e2d\u5fc3",level:2}],u={toc:l};function p(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Linkis \u662f\u57fa\u4e8e Spring Cloud \u6784\u5efa\u7684\u5206\u5e03\u5f0f\u5fae\u670d\u52a1\u7cfb\u7edf\u3002\u6ce8\u518c\u4e2d\u5fc3\u670d\u52a1\u4f7f\u7528\u7684\u662f Eureka\u3002\u5fae\u670d\u52a1\u7ba1\u7406\u754c\u9762\u4ec5\u5bf9\u7ba1\u7406\u5458\u53ef\u89c1\u3002"),(0,i.kt)("h2",{id:"1-\u670d\u52a1\u67e5\u770b"},"1. \u670d\u52a1\u67e5\u770b"),(0,i.kt)("p",null,"\u5fae\u670d\u52a1\u7ba1\u7406\u754c\u9762\u53ef\u4ee5\u67e5\u770b Linkis \u4e0b\u7684\u6240\u6709\u5fae\u670d\u52a1\u4fe1\u606f\uff0c\u53ef\u4ee5\u901a\u8fc7\u5b9e\u4f8b\u540d\u79f0\uff0c\u5f15\u64ce\u7c7b\u578b\u5173\u952e\u5b57\u8fc7\u6ee4\u670d\u52a1\u3002\u5e76\u4e14\u53ef\u4ee5\u901a\u8fc7\u7f16\u8f91\u6309\u94ae\u7ba1\u7406\u670d\u52a1\u4e0b\u7684\u6807\u7b7e\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(28357).Z,width:"1903",height:"416"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(47733).Z,width:"520",height:"262"})),(0,i.kt)("h2",{id:"2-\u6ce8\u518c\u4e2d\u5fc3"},"2. \u6ce8\u518c\u4e2d\u5fc3"),(0,i.kt)("p",null,"Linkis \u81ea\u8eab\u7684\u5fae\u670d\u52a1\u53ef\u4ee5\u70b9\u51fbEureka\u6ce8\u518c\u4e2d\u5fc3\u67e5\u770b\uff0c\u4e0e Linkis \u5173\u8054\u7684\u5fae\u670d\u52a1\u4f1a\u76f4\u63a5\u5728\u8be5\u754c\u9762\u5217\u51fa\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(74562).Z,width:"1894",height:"459"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(33334).Z,width:"1905",height:"805"})))}p.isMDXComponent=!0},74562:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/eureka-btn-f23fe6bd6597dc9f74539afe0d8c8bb1.png"},33334:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/eureka-e540802861c23cc8f2cd15f336723d57.png"},28357:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/microservice-list-ca12797e0d2e4f973ab8cab4264ef227.png"},47733:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ms-edit-1703066082ae7d6fca7e6532513ea636.png"}}]);