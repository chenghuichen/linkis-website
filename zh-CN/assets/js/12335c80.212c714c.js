"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[75616],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),k=i,d=m["".concat(o,".").concat(k)]||m[k]||u[k]||a;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:i,l[1]=c;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58029:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={title:"RPC \u6a21\u5757",sidebar_position:2},l=void 0,c={unversionedId:"architecture/commons/rpc",id:"version-1.3.0/architecture/commons/rpc",title:"RPC \u6a21\u5757",description:"\u57fa\u4e8eFeign\u7684\u5fae\u670d\u52a1\u4e4b\u95f4HTTP\u63a5\u53e3\u8c03\u7528\uff0c\u53ea\u80fd\u6ee1\u8db3\u7b80\u5355\u7684A\u5fae\u670d\u52a1\u5b9e\u4f8b\u6839\u636e\u7b80\u5355\u7684\u89c4\u5219\u968f\u673a\u8bbf\u95eeB\u5fae\u670d\u52a1\u4e4b\u4e2d\u7684\u67d0\u4e2a\u670d\u52a1\u5b9e\u4f8b\uff0c\u800c\u8fd9\u4e2aB\u5fae\u670d\u52a1\u5b9e\u4f8b\u5982\u679c\u60f3\u5f02\u6b65\u56de\u4f20\u4fe1\u606f\u7ed9\u8c03\u7528\u65b9\uff0c\u662f\u6839\u672c\u65e0\u6cd5\u5b9e\u73b0\u7684\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.0/architecture/commons/rpc.md",sourceDirName:"architecture/commons",slug:"/architecture/commons/rpc",permalink:"/zh-CN/docs/1.3.0/architecture/commons/rpc",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.0/architecture/commons/rpc.md",tags:[],version:"1.3.0",sidebarPosition:2,frontMatter:{title:"RPC \u6a21\u5757",sidebar_position:2},sidebar:"version-1.3.0/tutorialSidebar",previous:{title:"\u81ea\u5b9a\u4e49\u53d8\u91cf\u8bbe\u8ba1",permalink:"/zh-CN/docs/1.3.0/architecture/commons/variable"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/1.3.0/architecture/computation-governance-services/overview"}},o={},p=[{value:"1. \u7b80\u4ecb",id:"1-\u7b80\u4ecb",level:2},{value:"1.1 \u67b6\u6784\u8bbe\u8ba1\u56fe",id:"11-\u67b6\u6784\u8bbe\u8ba1\u56fe",level:3},{value:"1.2 \u6a21\u5757\u8bf4\u660e",id:"12-\u6a21\u5757\u8bf4\u660e",level:3},{value:"2. \u5b9e\u73b0",id:"2-\u5b9e\u73b0",level:2},{value:"2.1 \u53d1\u9001\u7aef",id:"21-\u53d1\u9001\u7aef",level:3},{value:"2.2 \u63a5\u6536\u7aef",id:"22-\u63a5\u6536\u7aef",level:3}],s={toc:p};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u57fa\u4e8eFeign\u7684\u5fae\u670d\u52a1\u4e4b\u95f4HTTP\u63a5\u53e3\u8c03\u7528\uff0c\u53ea\u80fd\u6ee1\u8db3\u7b80\u5355\u7684A\u5fae\u670d\u52a1\u5b9e\u4f8b\u6839\u636e\u7b80\u5355\u7684\u89c4\u5219\u968f\u673a\u8bbf\u95eeB\u5fae\u670d\u52a1\u4e4b\u4e2d\u7684\u67d0\u4e2a\u670d\u52a1\u5b9e\u4f8b\uff0c\u800c\u8fd9\u4e2aB\u5fae\u670d\u52a1\u5b9e\u4f8b\u5982\u679c\u60f3\u5f02\u6b65\u56de\u4f20\u4fe1\u606f\u7ed9\u8c03\u7528\u65b9\uff0c\u662f\u6839\u672c\u65e0\u6cd5\u5b9e\u73b0\u7684\u3002\n\u540c\u65f6\uff0c\u7531\u4e8eFeign\u53ea\u652f\u6301\u7b80\u5355\u7684\u670d\u52a1\u9009\u53d6\u89c4\u5219\uff0c\u65e0\u6cd5\u505a\u5230\u5c06\u8bf7\u6c42\u8f6c\u53d1\u7ed9\u6307\u5b9a\u7684\u5fae\u670d\u52a1\u5b9e\u4f8b\uff0c\u65e0\u6cd5\u505a\u5230\u5c06\u4e00\u4e2a\u8bf7\u6c42\u5e7f\u64ad\u7ed9\u63a5\u6536\u65b9\u5fae\u670d\u52a1\u7684\u6240\u6709\u5b9e\u4f8b\u3002\nLinkis RPC\u662f\u57fa\u4e8eSpring Cloud + Feign\u5b9e\u73b0\u7684\u4e00\u5957\u5fae\u670d\u52a1\u95f4\u7684\u5f02\u6b65\u8bf7\u6c42\u548c\u5e7f\u64ad\u901a\u4fe1\u670d\u52a1\uff0c\u53ef\u4ee5\u72ec\u7acb\u4e8eLinkis\u800c\u4f7f\u7528\u3002"),(0,i.kt)("h2",{id:"1-\u7b80\u4ecb"},"1. \u7b80\u4ecb"),(0,i.kt)("p",null,"Linkis RPC\u4f5c\u4e3a\u5e95\u5c42\u7684\u901a\u4fe1\u65b9\u6848\uff0c\u5c06\u63d0\u4f9bSDK\u96c6\u6210\u5230\u6709\u9700\u8981\u7684\u5fae\u670d\u52a1\u4e4b\u4e2d\u3002\n\u4e00\u4e2a\u5fae\u670d\u52a1\u65e2\u53ef\u4ee5\u4f5c\u4e3a\u8bf7\u6c42\u8c03\u7528\u65b9\uff0c\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u8bf7\u6c42\u63a5\u6536\u65b9\u3002"),(0,i.kt)("p",null,"\u4f5c\u4e3a\u8bf7\u6c42\u8c03\u7528\u65b9\u65f6\uff0c\u5c06\u901a\u8fc7Sender\u8bf7\u6c42\u76ee\u6807\u63a5\u6536\u65b9\u5fae\u670d\u52a1\u7684Receiver\uff0c\u4f5c\u4e3a\u8bf7\u6c42\u63a5\u6536\u65b9\u65f6\uff0c\u5c06\u63d0\u4f9bReceiver\u7528\u6765\u5904\u7406\u8bf7\u6c42\u63a5\u6536\u65b9Sender\u53d1\u9001\u8fc7\u6765\u7684\u8bf7\u6c42\uff0c\u4ee5\u4fbf\u5b8c\u6210\u540c\u6b65\u54cd\u5e94\u6216\u5f02\u6b65\u54cd\u5e94\u3002\n",(0,i.kt)("img",{src:n(11140).Z,width:"914",height:"492"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"org.apache.linkis.rpc.Sender \norg.apache.linkis.rpc.Receiver\n")),(0,i.kt)("h3",{id:"11-\u67b6\u6784\u8bbe\u8ba1\u56fe"},"1.1 \u67b6\u6784\u8bbe\u8ba1\u56fe"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Linkis RPC\u67b6\u6784\u56fe",src:n(44729).Z,width:"692",height:"546"})),(0,i.kt)("h3",{id:"12-\u6a21\u5757\u8bf4\u660e"},"1.2 \u6a21\u5757\u8bf4\u660e"),(0,i.kt)("p",null,"\u4e3b\u8981\u6a21\u5757\u7684\u529f\u80fd\u4ecb\u7ecd\u5982\u4e0b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Eureka\uff1a\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\uff0c\u7528\u6237\u7ba1\u7406\u670d\u52a1\uff0c\u670d\u52a1\u53d1\u73b0\u3002"),(0,i.kt)("li",{parentName:"ul"},"Sender\u53d1\u9001\u5668\uff1a\u670d\u52a1\u8bf7\u6c42\u63a5\u53e3\uff0c\u53d1\u9001\u7aef\u4f7f\u7528Sender\u5411\u63a5\u6536\u7aef\u8bf7\u6c42\u670d\u52a1\u3002"),(0,i.kt)("li",{parentName:"ul"},"Receiver\u63a5\u6536\u5668\uff1a\u670d\u52a1\u8bf7\u6c42\u63a5\u6536\u76f8\u5e94\u63a5\u53e3\uff0c\u63a5\u6536\u7aef\u901a\u8fc7\u8be5\u63a5\u53e3\u54cd\u5e94\u670d\u52a1\u3002"),(0,i.kt)("li",{parentName:"ul"},"Interceptor\u62e6\u622a\u5668\uff1aSender\u53d1\u9001\u5668\u4f1a\u5c06\u4f7f\u7528\u8005\u7684\u8bf7\u6c42\u4f20\u9012\u7ed9\u62e6\u622a\u5668\u3002\u62e6\u622a\u5668\u62e6\u622a\u8bf7\u6c42\uff0c\u5bf9\u8bf7\u6c42\u505a\u989d\u5916\u7684\u529f\u80fd\u6027\u5904\u7406\uff0c\u5206\u522b\u662f\u5e7f\u64ad\u62e6\u622a\u5668\u7528\u4e8e\u5bf9\u8bf7\u6c42\u5e7f\u64ad\u64cd\u4f5c\u3001\u91cd\u8bd5\u62e6\u622a\u5668\u7528\u4e8e\u5bf9\u5931\u8d25\u8bf7\u6c42\u91cd\u8bd5\u5904\u7406\u3001\u7f13\u5b58\u62e6\u622a\u5668\u7528\u4e8e\u7b80\u5355\u4e0d\u53d8\u7684\u8bf7\u6c42\u8bfb\u53d6\u7f13\u5b58\u5904\u7406\u3001\u548c\u63d0\u4f9b\u9ed8\u8ba4\u5b9e\u73b0\u7684\u9ed8\u8ba4\u62e6\u622a\u5668\u3002"),(0,i.kt)("li",{parentName:"ul"},"Decoder\uff0cEncoder\uff1a\u7528\u4e8e\u8bf7\u6c42\u7684\u7f16\u7801\u548c\u89e3\u7801\u3002"),(0,i.kt)("li",{parentName:"ul"},"Feign\uff1a\u662f\u4e00\u4e2ahttp\u8bf7\u6c42\u8c03\u7528\u7684\u8f7b\u91cf\u7ea7\u6846\u67b6\uff0c\u58f0\u660e\u5f0fWebService\u5ba2\u6237\u7aef\u7a0b\u5e8f\uff0c\u7528\u4e8eLinkis-RPC\u5e95\u5c42\u901a\u4fe1\u3002"),(0,i.kt)("li",{parentName:"ul"},"Listener\uff1a\u76d1\u542c\u6a21\u5757\uff0c\u4e3b\u8981\u7528\u4e8e\u76d1\u542c\u5e7f\u64ad\u8bf7\u6c42\u3002")),(0,i.kt)("h2",{id:"2-\u5b9e\u73b0"},"2. \u5b9e\u73b0"),(0,i.kt)("p",null,"\u57fa\u4e8e\u8bf7\u6c42\u8c03\u7528\u65b9\u7684Sender\u4f53\u7cfb\u548c\u8bf7\u6c42\u63a5\u6536\u65b9\u7684Receiver\u4f53\u7cfb\uff0c\u6784\u6210\u4e86Linkis RPC\u7684\u5168\u90e8\u67b6\u6784\u3002\n",(0,i.kt)("img",{src:n(11140).Z,width:"914",height:"492"})),(0,i.kt)("h3",{id:"21-\u53d1\u9001\u7aef"},"2.1 \u53d1\u9001\u7aef"),(0,i.kt)("p",null,"Linkis RPC\u4f5c\u4e3a\u5e95\u5c42\u7684\u901a\u4fe1\u5c42\uff0c\u53d1\u9001\u7aef\u65e0\u9700\u8c03\u7528\u8005\u5199\u4efb\u4f55\u7684\u5b9e\u9645\u4ee3\u7801\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8c03\u7528\u8005\u901a\u8fc7\u8c03\u7528Linkis RPC\u63d0\u4f9b\u7684SDK\uff0c\u901a\u8fc7\u5fae\u670d\u52a1\u540d\uff08Service Name\uff09\u6216\u6307\u5b9a\u5fae\u670d\u52a1\u5b9e\u4f8b\uff08\u5fae\u670d\u52a1\u540d+\u5fae\u670d\u52a1\u5b9e\u4f8b\u7684IP\u548c\u7aef\u53e3\uff09\uff0c\u83b7\u53d6\u4e00\u4e2aSender\u53d1\u9001\u5668\u3002")),(0,i.kt)("p",null,"Sender\u63d0\u4f9b\u7684\u53ef\u4f7f\u7528\u65b9\u6cd5\uff0c\u89c1\u5982\u4e0b\u4f2a\u4ee3\u7801\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"abstract class Sender {\n    Object ask(Object message);\n    Object ask(Object message, Duration timeout);\n    void send(Object message);\n    void deliver(Object message);\n}\n\n\u5176\u4e2d:\n1. ask\u65b9\u6cd5\u4e3a\u540c\u6b65\u8bf7\u6c42\u54cd\u5e94\u65b9\u6cd5\uff0c\u8981\u6c42\u63a5\u6536\u7aef\u5fc5\u987b\u540c\u6b65\u8fd4\u56de\u54cd\u5e94\uff1b\n2. send\u65b9\u6cd5\u4e3a\u540c\u6b65\u8bf7\u6c42\u65b9\u6cd5\uff0c\u53ea\u8d1f\u8d23\u540c\u6b65\u5c06\u8bf7\u6c42\u53d1\u9001\u7ed9\u63a5\u6536\u7aef\uff0c\u4e0d\u8981\u6c42\u63a5\u6536\u7aef\u7ed9\u51fa\u7b54\u590d\uff1b\n3. deliver\u5219\u4e3a\u5f02\u6b65\u8bf7\u6c42\u65b9\u6cd5\uff0c\u53ea\u8981\u53d1\u9001\u7aef\u7684\u8fdb\u7a0b\u4e0d\u5f02\u5e38\u9000\u51fa\uff0c\u5728\u7a0d\u540e\u4f1a\u901a\u8fc7\u5176\u5b83\u7ebf\u7a0b\u5c06\u8bf7\u6c42\u53d1\u9001\u7ed9\u63a5\u6536\u7aef\u3002\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8c03\u7528\u8005\u4f5c\u4e3a\u53d1\u9001\u7aef\uff0c\u901a\u8fc7Sender\u53d1\u9001\u5668\u63d0\u4f9b\u7684\u8bf7\u6c42\u65b9\u6cd5\uff0c\u53d1\u9001\u8bf7\u6c42\u7ed9\u63a5\u6536\u7aef\u3002"),(0,i.kt)("li",{parentName:"ul"},"Sender\u53d1\u9001\u5668\u4f1a\u5c06\u8c03\u7528\u8005\u7684\u8bf7\u6c42\u4f20\u9012\u7ed9\u62e6\u622a\u5668\uff0c\u8fdb\u884c\u4e00\u7cfb\u5217\u53d1\u9001\u524d\u7684\u903b\u8f91\u5904\u7406\u3002")),(0,i.kt)("p",null,"\u62e6\u622a\u5668\u62e6\u622a\u8bf7\u6c42\uff0c\u5f00\u59cb\u5bf9\u8bf7\u6c42\u505a\u989d\u5916\u7684\u529f\u80fd\u6027\u5904\u7406\uff1a"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5e7f\u64ad\u62e6\u622a\u5668")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"org.apache.linkis.rpc.interceptor.common.BroadcastRPCInterceptor\n")),(0,i.kt)("p",null,"\u5e7f\u64ad\u62e6\u622a\u5668\u53ea\u5bf9\u9700\u8981\u8fdb\u884c\u5e7f\u64ad\u7684\u8bf7\u6c42\u751f\u6548\u3002\n\u5e7f\u64ad\u62e6\u622a\u5668\u4f1a\u63d0\u4f9b\u7279\u6b8a\u7684\u5e7f\u64ad\u63a5\u53e3\uff0c\u5982\u679c\u672c\u6b21\u8bf7\u6c42\u5b9e\u73b0\u4e86\u8be5\u5e7f\u64ad\u63a5\u53e3\uff0c\u4e14\u8be5\u8bf7\u6c42\u4e0d\u662f\u6b63\u5728\u5e7f\u64ad\u4e2d\uff0c\u5e7f\u64ad\u62e6\u622a\u5668\u5219\u8ba4\u4e3a\u672c\u6b21\u8bf7\u6c42\u9700\u8981\u8fdb\u884c\u5e7f\u64ad\uff0c\u8fd9\u65f6\u4f1a\u89e6\u53d1\u5e7f\u64ad\u64cd\u4f5c\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u91cd\u8bd5\u62e6\u622a\u5668")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"org.apache.linkis.rpc.interceptor.common.RetryableRPCInterceptor\n")),(0,i.kt)("p",null,"\u91cd\u8bd5\u62e6\u622a\u5668\u4f1a\u5bf9\u63a5\u4e0b\u6765\u7684\u6240\u6709\u6b65\u9aa4\u63d0\u4f9b\u91cd\u8bd5\u529f\u80fd\u3002\n\u5982\u679c\u63a5\u6536\u7aef\u8981\u6c42\u91cd\u8bd5\uff0c\u6216\u8005\u53d1\u9001\u8bf7\u6c42\u65f6\u51fa\u73b0\u4e86ConnectException\uff08\u8fde\u63a5\u5f02\u5e38\uff09\uff0c\u6216\u8005\u8c03\u7528\u8005\u6307\u5b9a\u67d0\u4e9b\u5f02\u5e38\u9700\u8981\u91cd\u8bd5\uff0c\u8fd9\u65f6\u91cd\u8bd5\u62e6\u622a\u5668\u4f1a\u81ea\u52a8\u8fdb\u884c\u91cd\u8bd5\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7f13\u5b58\u62e6\u622a\u5668")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"org.apache.linkis.rpc.interceptor.common.CacheableRPCInterceptor\n")),(0,i.kt)("p",null,"\u7f13\u5b58\u62e6\u622a\u5668\u662f\u9488\u5bf9\u4e00\u4e9b\u54cd\u5e94\u5185\u5bb9\u4e0d\u5927\u53ef\u80fd\u7ecf\u5e38\u53d8\u52a8\u7684\u540c\u6b65\u8bf7\u6c42\u800c\u8bbe\u5b9a\u7684\u3002\n\u7f13\u5b58\u62e6\u622a\u5668\u4e5f\u4f1a\u63d0\u4f9b\u7279\u6b8a\u7684\u7f13\u5b58\u63a5\u53e3\uff0c\u5982\u679c\u672c\u6b21\u8bf7\u6c42\u5b9e\u73b0\u4e86\u7f13\u5b58\u63a5\u53e3\uff0c\u4f1a\u9996\u5148\u5728\u7f13\u5b58\u62e6\u622a\u5668\u4e2d\u5bfb\u627e\u7f13\u5b58\uff0c\u4e0d\u5b58\u5728\u7f13\u5b58\u624d\u4f1a\u7ee7\u7eed\u8bf7\u6c42\uff0c\u5e76\u5728\u62ff\u5230\u54cd\u5e94\u540e\uff0c\u5148\u5c06\u54cd\u5e94\u7f13\u5b58\u8d77\u6765\uff0c\u518d\u5c06\u54cd\u5e94\u8fd4\u56de\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u516c\u5171\u9ed8\u8ba4\u62e6\u622a\u5668")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"org.apache.linkis.rpc.interceptor.common.CommonRPCInterceptor\n")),(0,i.kt)("p",null,"\u516c\u5171\u9ed8\u8ba4\u62e6\u622a\u5668\u7528\u4e8e\u8c03\u7528\u63a5\u4e0b\u6765\u7684\u5904\u7406\u6b65\u9aa4\uff08\u793a\u4f8b\u53c2\u8003:org.apache.linkis.rpc.BaseRPCSender#ask\uff09 "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u7f16\u7801\u5668\u4f1a\u5148\u5c06\u7528\u6237\u8bf7\u6c42\u7684\u6570\u636e\uff08\u5b9e\u4f53Bean\uff09\u8f6c\u6362\u6210\u5e8f\u5217\u5316\u7684JSON\u5b57\u7b26\u4e32\uff0c\u7136\u540e\u4f20\u9012\u7ed9Feign\u5ba2\u6237\u7aef\u751f\u6210\u5668\u3002"),(0,i.kt)("li",{parentName:"ul"},"Feign\u5ba2\u6237\u7aef\u751f\u6210\u5668\uff0c\u751f\u6210\u53ef\u8bbf\u95ee\u63a5\u6536\u7aefRestful\u8bf7\u6c42\u63a5\u6536\u5668\u7684Feign\u5ba2\u6237\u7aef\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u751f\u6210\u7684Feign\u5ba2\u6237\u7aef\uff0c\u4f1a\u8c03\u7528Eureka\u5ba2\u6237\u7aef\uff0c\u83b7\u53d6\u6240\u6709\u5fae\u670d\u52a1\u5217\u8868\uff0c\u901a\u8fc7\u670d\u52a1\u9009\u62e9\u5668\uff0c\u5982\u679c\u8c03\u7528\u8005\u6307\u5b9a\u5fae\u670d\u52a1\u540d\uff0c\u5219\u901a\u8fc7Feign\u7684\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\uff0c\n\u9009\u62e9\u4e00\u4e2a\u5408\u9002\u7684\u63a5\u6536\u65b9\u5fae\u670d\u52a1\u5b9e\u4f8b\u8fdb\u884c\u8bf7\u6c42\u8f6c\u53d1\uff0c\u5426\u5219\u670d\u52a1\u9009\u62e9\u5668\u4f1a\u91cd\u5199Spring Cloud Feign\u7684FeignLoadBalancer\uff08Feign\u8d1f\u8f7d\u5747\u8861\u5668\uff09\uff0c\n\u5728\u521b\u5efaLoadBalancerCommand\u65f6\uff0c\u8bf7\u6c42\u8c03\u7528\u8005\u6307\u5b9a\u7684\u5fae\u670d\u52a1\u5b9e\u4f8b\uff08\u5fae\u670d\u52a1\u540d+\u5fae\u670d\u52a1\u5b9e\u4f8baddress\uff09\u3002\n\u8c03\u7528Feign\u5ba2\u6237\u7aef\uff0c\u5f00\u59cb\u8bf7\u6c42\u63a5\u6536\u7aef\u7684Restful\u8bf7\u6c42\u63a5\u6536\u5668\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u81ea\u5b9a\u4e49\u62e6\u622a\u5668")),(0,i.kt)("p",null,"\u8c03\u7528\u8005\u4e5f\u53ef\u4ee5\u81ea\u5df1\u5b9e\u73b0\u81ea\u5b9a\u4e49\u62e6\u622a\u5668(\u5728linkis-commons/linkis-rpc/src/main/scala/org/apache/linkis/rpc/interceptor/common\u4e0b\u5b9e\u73b0RPCInterceptor\u63a5\u53e3\uff0c\u5e76\u901a\u8fc7@Component\u6ce8\u5165)\uff0c\u7528\u4e8e\u5b9e\u73b0\u4e00\u4e9b\u7279\u5b9a\u7684\u529f\u80fd\u3002"),(0,i.kt)("h3",{id:"22-\u63a5\u6536\u7aef"},"2.2 \u63a5\u6536\u7aef"),(0,i.kt)("p",null,"\u63a5\u6536\u7aef\u9700\u8981\u8c03\u7528\u8005",(0,i.kt)("strong",{parentName:"p"},"\u5b9e\u73b0Receiver\u63a5\u53e3"),"\uff0c\u7528\u4e8e\u5904\u7406\u771f\u6b63\u7684\u4e1a\u52a1\u903b\u8f91\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"RPCReceiveRestful\u8bf7\u6c42\u63a5\u6536\u5668\u4f5c\u4e3aLinkis RPC\u5185\u5d4c\u7684HTTP\u8bf7\u6c42Web Service\u670d\u52a1\uff0c\u8d1f\u8d23\u63a5\u6536\u53d1\u9001\u7aef\u7684\u8bf7\u6c42"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li",start:2},(0,i.kt)("li",{parentName:"ol"},"RPCReceiveRestful\u8bf7\u6c42\u63a5\u6536\u5668\u63a5\u6536\u5230\u8bf7\u6c42\u540e\uff0c\u5148\u8c03\u7528\u8bf7\u6c42\u89e3\u7801\u5668\u5bf9\u8bf7\u6c42\u8fdb\u884c\u89e3\u7801\uff0c\u89e3\u6790\u51fa\u5b9e\u9645\u7684\u8bf7\u6c42\u4fe1\u606f\u548c\u53d1\u9001\u7aef\u5fae\u670d\u52a1\u4fe1\u606f\uff08\u5fae\u670d\u52a1\u540d+\u5fae\u670d\u52a1\u5b9e\u4f8b\u7684IP\u548c\u7aef\u53e3\uff09\uff0c\u5982\u679c\u89e3\u6790\u5931\u8d25\uff0c\u4f1a\u76f4\u63a5\u54cd\u5e94\u89e3\u6790\u8bf7\u6c42\u5931\u8d25\u3002"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li",start:3},(0,i.kt)("li",{parentName:"ol"},"\u5c06\u89e3\u6790\u540e\u7684\u8bf7\u6c42\u4fe1\u606f\u548c\u53d1\u9001\u7aef\u5fae\u670d\u52a1\u4fe1\u606f\u653e\u5165\u8bf7\u6c42\u6d88\u606f\u961f\u5217\uff1b"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li",start:4},(0,i.kt)("li",{parentName:"ol"},"\u8bf7\u6c42\u6d88\u8d39\u5668\u4f1a\u6d88\u8d39\u8bf7\u6c42\u6d88\u606f\u961f\u5217\u91cc\uff0c\u5df2\u7ecf\u89e3\u7801\u7684\u53d1\u9001\u7aef\u8bf7\u6c42\u3002"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li",start:5},(0,i.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u8c03\u7528Receiver\u7ba1\u7406\u5668\u83b7\u53d6\u4e00\u4e2a\u5408\u9002\u7684Receiver\uff1b\u540c\u65f6\u901a\u8fc7\u53d1\u9001\u7aef\u5fae\u670d\u52a1\u4fe1\u606f\uff0c\u4f7f\u7528Sender\u751f\u6210\u5668\u751f\u6210\u4e00\u4e2a\u6307\u5411\u53d1\u9001\u7aef\u7684Sender\u3002 \u7136\u540e\u8bf7\u6c42\u6d88\u8d39\u5668\u5c06\u5b9e\u9645\u7684\u8bf7\u6c42\u4fe1\u606f\u548c\u751f\u6210\u7684\u53d1\u9001\u7aefSender\uff0c\u4f20\u7ed9Receiver\u8fdb\u884c\u5904\u7406\u3002"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li",start:6},(0,i.kt)("li",{parentName:"ol"},"Receiver\u4f5c\u4e3a\u7528\u6237\u8bf7\u6c42\u7684\u5b9e\u9645\u5904\u7406\u5355\u5143\uff0c\u8981\u6c42\u8c03\u7528\u8005\u5fc5\u987b\u5b9e\u73b0Receiver\u63a5\u53e3\uff0c\u5b8c\u6210\u5bf9\u8c03\u7528\u7aef\u8bf7\u6c42\u7684\u5b9e\u9645\u5904\u7406\u903b\u8f91\u3002")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Receiver\u7684\u4f2a\u4ee3\u7801\u5982\u4e0b\uff1a\npublic interface Receiver {\n    void receive(Object message, Sender sender);\n    Object receiveAndReply(Object message, Sender sender);\n    Object receiveAndReply(Object message, Duration duration, Sender sender);\n}\n")),(0,i.kt)("p",null,"Receiver\u63d0\u4f9b\u4e86\u5904\u7406\u540c\u6b65\u8bf7\u6c42\u548c\u5f02\u6b65\u8bf7\u6c42\u7684\u65b9\u6cd5\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u672c\u6b21\u8bf7\u6c42\u662f\u5f02\u6b65\u8bf7\u6c42\uff0c\u5219\u8c03\u7528Receiver\u7684receive\u65b9\u6cd5\uff0c\u7531\u4e0a\u5c42\u4e1a\u52a1\u51b3\u5b9a\u662f\u5426\u9700\u8981\u901a\u8fc7\u53d1\u9001\u7aef\u7684Sender\u56de\u4f20\u54cd\u5e94\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u672c\u6b21\u8bf7\u6c42\u662f\u540c\u6b65\u8bf7\u6c42\uff0c\u5219\u8c03\u7528 Receiver\u7684receiveAndReply\u65b9\u6cd5\uff0c\u5c06\u8fd4\u56de\u503c\u4f5c\u4e3a\u54cd\u5e94\u7ed3\u679c\uff0c\u56de\u4f20\u53d1\u9001\u7aef\u3002")))}u.isMDXComponent=!0},44729:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/linkis-rpc-6f940d04ce7c039d0e8ca787d3bed98c.png"},11140:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/RPC-01-140fa51c0efdc3cd71c9fb47dcafd4b1.png"}}]);