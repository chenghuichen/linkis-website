"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[14374],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),o=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=o(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,c=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=o(n),b=i,h=p["".concat(l,".").concat(b)]||p[b]||v[b]||c;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=n.length,s=new Array(c);s[0]=b;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:i,s[1]=a;for(var o=2;o<c;o++)s[o]=n[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},69829:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>v,frontMatter:()=>c,metadata:()=>a,toc:()=>o});var r=n(87462),i=(n(67294),n(3905));const c={title:"CS Listener \u67b6\u6784",sidebar_position:4},s=void 0,a={unversionedId:"architecture/feature/public-enhancement-services/context-service/context-service-listener",id:"architecture/feature/public-enhancement-services/context-service/context-service-listener",title:"CS Listener \u67b6\u6784",description:"Listener\u67b6\u6784",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/architecture/feature/public-enhancement-services/context-service/context-service-listener.md",sourceDirName:"architecture/feature/public-enhancement-services/context-service",slug:"/architecture/feature/public-enhancement-services/context-service/context-service-listener",permalink:"/zh-CN/docs/1.3.2/architecture/feature/public-enhancement-services/context-service/context-service-listener",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/architecture/feature/public-enhancement-services/context-service/context-service-listener.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"CS Listener \u67b6\u6784",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"CS HA \u67b6\u6784\u8bbe\u8ba1",permalink:"/zh-CN/docs/1.3.2/architecture/feature/public-enhancement-services/context-service/context-service-highavailable"},next:{title:"CS Persistence \u67b6\u6784",permalink:"/zh-CN/docs/1.3.2/architecture/feature/public-enhancement-services/context-service/context-service-persistence"}},l={},o=[{value:"<strong>Listener\u67b6\u6784</strong>",id:"listener\u67b6\u6784",level:2},{value:"<strong>\u5ba2\u6237\u7aef \u6ce8\u518c\u81ea\u5df1\u3001\u6ce8\u518cCSKey\u53ca\u66f4\u65b0CSKey\u8fc7\u7a0b</strong>",id:"\u5ba2\u6237\u7aef-\u6ce8\u518c\u81ea\u5df1\u6ce8\u518ccskey\u53ca\u66f4\u65b0cskey\u8fc7\u7a0b",level:3},{value:"<strong>Listener UM\u7c7b\u56fe</strong>",id:"listener-um\u7c7b\u56fe",level:3},{value:"<strong>Listener callbackengine\u65f6\u5e8f\u56fe</strong>",id:"listener-callbackengine\u65f6\u5e8f\u56fe",level:2}],u={toc:o},p="wrapper";function v(e){let{components:t,...c}=e;return(0,i.kt)(p,(0,r.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"listener\u67b6\u6784"},(0,i.kt)("strong",{parentName:"h2"},"Listener\u67b6\u6784")),(0,i.kt)("p",null,"\u5728DSS\u4e2d\uff0c\u5f53\u67d0\u4e2a\u8282\u70b9\u66f4\u6539\u4e86\u5b83\u7684\u5143\u6570\u636e\u4fe1\u606f\u540e\uff0c\u5219\u6574\u4e2a\u5de5\u4f5c\u6d41\u7684\u4e0a\u4e0b\u6587\u4fe1\u606f\u5c31\u53d1\u751f\u4e86\u6539\u53d8\uff0c\u6211\u4eec\u671f\u671b\u6240\u6709\u7684\u8282\u70b9\u90fd\u80fd\u611f\u77e5\u5230\u53d8\u5316\uff0c\u5e76\u81ea\u52a8\u8fdb\u884c\u5143\u6570\u636e\u66f4\u65b0\u3002\u6211\u4eec\u91c7\u7528\u76d1\u542c\u6a21\u5f0f\u6765\u5b9e\u73b0\uff0c\u5e76\u4f7f\u7528\u5fc3\u8df3\u673a\u5236\u8fdb\u884c\u8f6e\u8be2\uff0c\u4fdd\u6301\u4e0a\u4e0b\u6587\u4fe1\u606f\u7684\u5143\u6570\u636e\u4e00\u81f4\u6027\u3002"),(0,i.kt)("h3",{id:"\u5ba2\u6237\u7aef-\u6ce8\u518c\u81ea\u5df1\u6ce8\u518ccskey\u53ca\u66f4\u65b0cskey\u8fc7\u7a0b"},(0,i.kt)("strong",{parentName:"h3"},"\u5ba2\u6237\u7aef \u6ce8\u518c\u81ea\u5df1\u3001\u6ce8\u518cCSKey\u53ca\u66f4\u65b0CSKey\u8fc7\u7a0b")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(50390).Z,width:"1451",height:"279"})),(0,i.kt)("p",null,"\u4e3b\u8981\u8fc7\u7a0b\u5982\u4e0b\uff1a"),(0,i.kt)("p",null,"1\u3001\u6ce8\u518c\u64cd\u4f5c\uff1a\u5ba2\u6237\u7aefclient1\u3001client2\u3001client3\u3001client4\u901a\u8fc7HTPP\u8bf7\u6c42\u5206\u522b\u5411csserver\u6ce8\u518c\u81ea\u5df1\u4ee5\u53ca\u60f3\u8981\u76d1\u542c\u7684CSKey\uff0cService\u670d\u52a1\u901a\u8fc7\u5bf9\u5916\u63a5\u53e3\u83b7\u53d6\u5230callback\u5f15\u64ce\u5b9e\u4f8b\uff0c\u6ce8\u518c\u5ba2\u6237\u7aef\u53ca\u5176\u5bf9\u5e94\u7684CSKeys\u3002"),(0,i.kt)("p",null,"2\u3001\u66f4\u65b0\u64cd\u4f5c\uff1a\u5982ClientX\u8282\u70b9\u66f4\u65b0\u4e86CSKey\u5185\u5bb9\uff0cService\u670d\u52a1\u5219\u66f4\u65b0ContextCache\u7f13\u5b58\u7684CSKey\uff0cContextCache\u5c06\u66f4\u65b0\u64cd\u4f5c\u6295\u9012\u7ed9ListenerBus\uff0cListenerBus\u901a\u77e5\u5177\u4f53\u7684listener\u8fdb\u884c\u6d88\u8d39\uff08\u5373ContextKeyCallbackEngine\u53bb\u66f4\u65b0Client\u5bf9\u5e94\u7684CSKeys\uff09\uff0c\u8d85\u65f6\u672a\u6d88\u8d39\u7684\u4e8b\u4ef6\uff0c\u4f1a\u88ab\u81ea\u52a8\u79fb\u9664\u3002"),(0,i.kt)("p",null,"3\u3001\u5fc3\u8df3\u673a\u5236\uff1a"),(0,i.kt)("p",null,"\u6240\u6709Client\u901a\u8fc7\u5fc3\u8df3\u4fe1\u606f\u63a2\u6d4bContextKeyCallbackEngine\u4e2dCSKeys\u7684\u503c\u662f\u5426\u53d1\u751f\u4e86\u53d8\u5316\u3002"),(0,i.kt)("p",null,"ContextKeyCallbackEngine\u901a\u8fc7\u5fc3\u8df3\u673a\u5236\u8fd4\u56de\u66f4\u65b0\u7684CSKeys\u503c\u7ed9\u6240\u6709\u5df2\u6ce8\u518c\u7684\u5ba2\u6237\u7aef\u3002\u5982\u679c\u6709\u5ba2\u6237\u7aef\u5fc3\u8df3\u8d85\u65f6\uff0c\u5219\u79fb\u9664\u8be5\u5ba2\u6237\u7aef\u3002"),(0,i.kt)("h3",{id:"listener-um\u7c7b\u56fe"},(0,i.kt)("strong",{parentName:"h3"},"Listener UM\u7c7b\u56fe")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(86959).Z,width:"1036",height:"296"})),(0,i.kt)("p",null,"\u63a5\u53e3\uff1aListenerManager"),(0,i.kt)("p",null,"\u5bf9\u5916\uff1a\u63d0\u4f9bListenerBus\uff0c\u7528\u4e8e\u6295\u9012\u4e8b\u4ef6\u3002"),(0,i.kt)("p",null,"\u5bf9\u5185\uff1a\u63d0\u4f9b callback\u5f15\u64ce\uff0c\u8fdb\u884c\u4e8b\u4ef6\u7684\u5177\u4f53\u6ce8\u518c\u3001\u8bbf\u95ee\u3001\u66f4\u65b0\uff0c\u53ca\u5fc3\u8df3\u5904\u7406\u7b49\u903b\u8f91"),(0,i.kt)("h2",{id:"listener-callbackengine\u65f6\u5e8f\u56fe"},(0,i.kt)("strong",{parentName:"h2"},"Listener callbackengine\u65f6\u5e8f\u56fe")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(59391).Z,width:"829",height:"506"})))}v.isMDXComponent=!0},50390:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/linkis-contextservice-listener-01-d41e51ef682bb347b4a5a86b0a33b6b6.png"},86959:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/linkis-contextservice-search-02-df8a3c16218931cb0e9161035fb31d1a.png"},59391:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/linkis-contextservice-search-03-4ef57654ae4c3015fc6af457288f2b6b.png"}}]);