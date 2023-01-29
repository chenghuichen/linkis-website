"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[28175],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,h=m["".concat(c,".").concat(u)]||m[u]||k[u]||i;return n?r.createElement(h,o(o({ref:t},s),{},{components:n})):r.createElement(h,o({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"CS Search \u67b6\u6784",sidebar_position:6},o=void 0,l={unversionedId:"architecture/public-enhancement-services/context-service/context-service-search",id:"version-1.1.2/architecture/public-enhancement-services/context-service/context-service-search",title:"CS Search \u67b6\u6784",description:"CSSearch\u67b6\u6784",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.2/architecture/public-enhancement-services/context-service/context-service-search.md",sourceDirName:"architecture/public-enhancement-services/context-service",slug:"/architecture/public-enhancement-services/context-service/context-service-search",permalink:"/zh-CN/docs/1.1.2/architecture/public-enhancement-services/context-service/context-service-search",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.2/architecture/public-enhancement-services/context-service/context-service-search.md",tags:[],version:"1.1.2",sidebarPosition:6,frontMatter:{title:"CS Search \u67b6\u6784",sidebar_position:6},sidebar:"version-1.1.2/tutorialSidebar",previous:{title:"CS Persistence \u67b6\u6784",permalink:"/zh-CN/docs/1.1.2/architecture/public-enhancement-services/context-service/context-service-persistence"},next:{title:"DataSource Manager Server \u67b6\u6784",permalink:"/zh-CN/docs/1.1.2/architecture/public-enhancement-services/datasource-manager"}},c={},p=[{value:"<strong>CSSearch\u67b6\u6784</strong>",id:"cssearch\u67b6\u6784",level:2},{value:"<strong>\u603b\u4f53\u67b6\u6784</strong>",id:"\u603b\u4f53\u67b6\u6784",level:3},{value:"<strong>\u67e5\u8be2\u6761\u4ef6\u5b9a\u4e49\uff08ContextSearchCondition\uff09</strong>",id:"\u67e5\u8be2\u6761\u4ef6\u5b9a\u4e49contextsearchcondition",level:3},{value:"<strong>\u67e5\u8be2\u6761\u4ef6\u7684\u6784\u5efa</strong>",id:"\u67e5\u8be2\u6761\u4ef6\u7684\u6784\u5efa",level:3},{value:"<strong>\u67e5\u8be2\u6761\u4ef6\u7684\u6267\u884c</strong>",id:"\u67e5\u8be2\u6761\u4ef6\u7684\u6267\u884c",level:3},{value:"<strong>\u67e5\u8be2\u5165\u53e3ContextSearch</strong>",id:"\u67e5\u8be2\u5165\u53e3contextsearch",level:3},{value:"<strong>\u67e5\u8be2\u4f18\u5316</strong>",id:"\u67e5\u8be2\u4f18\u5316",level:3}],s={toc:p};function k(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"cssearch\u67b6\u6784"},(0,a.kt)("strong",{parentName:"h2"},"CSSearch\u67b6\u6784")),(0,a.kt)("h3",{id:"\u603b\u4f53\u67b6\u6784"},(0,a.kt)("strong",{parentName:"h3"},"\u603b\u4f53\u67b6\u6784")),(0,a.kt)("p",null,"\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(89626).Z,width:"795",height:"406"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"ContextSearch\uff1a\u67e5\u8be2\u5165\u53e3\uff0c\u63a5\u53d7Map\u5f62\u5f0f\u5b9a\u4e49\u7684\u67e5\u8be2\u6761\u4ef6\uff0c\u6839\u636e\u6761\u4ef6\u8fd4\u56de\u76f8\u5e94\u7684\u7ed3\u679c\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6784\u5efa\u6a21\u5757\uff1a\u6bcf\u4e2a\u6761\u4ef6\u7c7b\u578b\u5bf9\u5e94\u4e00\u4e2aParser\uff0c\u8d1f\u8d23\u5c06Map\u5f62\u5f0f\u7684\u6761\u4ef6\u8f6c\u6362\u6210Condition\u5bf9\u8c61\uff0c\u5177\u4f53\u901a\u8fc7\u8c03\u7528ConditionBuilder\u7684\u903b\u8f91\u5b9e\u73b0\u3002\u5177\u6709\u590d\u6742\u903b\u8f91\u5173\u7cfb\u7684Condition\u4f1a\u901a\u8fc7ConditionOptimizer\u8fdb\u884c\u57fa\u4e8e\u4ee3\u4ef7\u7684\u7b97\u6cd5\u4f18\u5316\u67e5\u8be2\u65b9\u6848\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6267\u884c\u6a21\u5757\uff1a\u4eceCache\u4e2d\uff0c\u7b5b\u9009\u51fa\u4e0e\u6761\u4ef6\u5339\u914d\u7684\u7ed3\u679c\u3002\u6839\u636e\u67e5\u8be2\u76ee\u6807\u7684\u4e0d\u540c\uff0c\u5206\u4e3aRuler\u3001Fetcher\u548cMatch\u800c\u4e09\u79cd\u6267\u884c\u6a21\u5f0f\uff0c\u5177\u4f53\u903b\u8f91\u5728\u540e\u6587\u63cf\u8ff0\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u8bc4\u4f30\u6a21\u5757\uff1a\u8d1f\u8d23\u6761\u4ef6\u6267\u884c\u4ee3\u4ef7\u7684\u8ba1\u7b97\u548c\u5386\u53f2\u6267\u884c\u72b6\u51b5\u7684\u7edf\u8ba1\u3002"))),(0,a.kt)("h3",{id:"\u67e5\u8be2\u6761\u4ef6\u5b9a\u4e49contextsearchcondition"},(0,a.kt)("strong",{parentName:"h3"},"\u67e5\u8be2\u6761\u4ef6\u5b9a\u4e49\uff08ContextSearchCondition\uff09")),(0,a.kt)("p",null,"\u4e00\u4e2a\u67e5\u8be2\u6761\u4ef6\uff0c\u89c4\u5b9a\u4e86\u8be5\u5982\u4f55\u4ece\u4e00\u4e2aContextKeyValue\u96c6\u5408\u4e2d\uff0c\u7b5b\u9009\u51fa\u7b26\u5408\u6761\u4ef6\u7684\u90a3\u4e00\u90e8\u5206\u3002\u67e5\u8be2\u6761\u4ef6\u53ef\u4ee5\u901a\u8fc7\u903b\u8f91\u8fd0\u7b97\u6784\u6210\u66f4\u52a0\u590d\u6742\u7684\u67e5\u8be2\u6761\u4ef6\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u652f\u6301ContextType\u3001ContextScope\u3001KeyWord\u7684\u5339\u914d"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5206\u522b\u5bf9\u5e94\u4e00\u4e2aCondition\u7c7b\u578b")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728Cache\u4e2d\uff0c\u8fd9\u4e9b\u90fd\u5e94\u8be5\u6709\u76f8\u5e94\u7684\u7d22\u5f15")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u652f\u6301\u5bf9key\u7684contains/regex\u5339\u914d\u6a21\u5f0f"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"ContainsContextSearchCondition\uff1a\u5305\u542b\u67d0\u4e2a\u5b57\u7b26\u4e32")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"RegexContextSearchCondition\uff1a\u5339\u914d\u67d0\u4e2a\u6b63\u5219\u8868\u8fbe\u5f0f")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u652f\u6301or\u3001and\u548cnot\u7684\u903b\u8f91\u8fd0\u7b97"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u4e00\u5143\u8fd0\u7b97UnaryContextSearchCondition\uff1a")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"  \u652f\u6301\u5355\u4e2a\u53c2\u6570\u7684\u903b\u8f91\u8fd0\u7b97\uff0c\u6bd4\u5982NotContextSearchCondition")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4e8c\u5143\u8fd0\u7b97BinaryContextSearchCondition\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"  \u652f\u6301\u4e24\u4e2a\u53c2\u6570\u7684\u903b\u8f91\u8fd0\u7b97\uff0c\u5206\u522b\u5b9a\u4e49\u4e3aLeftCondition\u548cRightCondition\uff0c\u6bd4\u5982OrContextSearchCondition\u548cAndContextSearchCondition")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6bcf\u4e2a\u903b\u8f91\u8fd0\u7b97\u5747\u5bf9\u5e94\u4e00\u4e2a\u4e0a\u8ff0\u5b50\u7c7b\u7684\u5b9e\u73b0\u7c7b")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u8be5\u90e8\u5206\u7684UML\u7c7b\u56fe\u5982\u4e0b\uff1a"))),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(86959).Z,width:"1036",height:"296"})),(0,a.kt)("h3",{id:"\u67e5\u8be2\u6761\u4ef6\u7684\u6784\u5efa"},(0,a.kt)("strong",{parentName:"h3"},"\u67e5\u8be2\u6761\u4ef6\u7684\u6784\u5efa")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u652f\u6301\u901a\u8fc7ContextSearchConditionBuilder\u6784\u5efa\uff1a\u6784\u5efa\u65f6\uff0c\u5982\u679c\u540c\u65f6\u58f0\u660e\u591a\u9879ContextType\u3001ContextScope\u3001KeyWord\u3001contains/regex\u7684\u5339\u914d\uff0c\u81ea\u52a8\u4ee5And\u903b\u8f91\u8fd0\u7b97\u8fde\u63a5")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u652f\u6301Condition\u4e4b\u95f4\u8fdb\u884c\u903b\u8f91\u8fd0\u7b97\uff0c\u8fd4\u56de\u65b0\u7684Condition\uff1aAnd\uff0cOr\u548cNot\uff08\u8003\u8651condition1.or(condition2)\u7684\u5f62\u5f0f\uff0c\u8981\u6c42Condition\u9876\u5c42\u63a5\u53e3\u5b9a\u4e49\u903b\u8f91\u8fd0\u7b97\u65b9\u6cd5\uff09")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u652f\u6301\u901a\u8fc7\u6bcf\u4e2a\u5e95\u5c42\u5b9e\u73b0\u7c7b\u5bf9\u5e94\u7684ContextSearchParser\u4eceMap\u6784\u5efa"))),(0,a.kt)("h3",{id:"\u67e5\u8be2\u6761\u4ef6\u7684\u6267\u884c"},(0,a.kt)("strong",{parentName:"h3"},"\u67e5\u8be2\u6761\u4ef6\u7684\u6267\u884c")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u67e5\u8be2\u6761\u4ef6\u7684\u4e09\u79cd\u4f5c\u7528\u65b9\u5f0f\uff1a"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Ruler\uff1a\u4ece\u4e00\u4e2aArray\u4e2d\u7b5b\u9009\u51fa\u7b26\u5408\u6761\u4ef6\u7684ContextKeyValue\u5b50Array")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Matcher\uff1a\u5224\u65ad\u5355\u4e2aContextKeyValue\u662f\u5426\u7b26\u5408\u6761\u4ef6")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Fetcher\uff1a\u4eceContextCache\u91cc\u7b5b\u9009\u51fa\u7b26\u5408\u6761\u4ef6\u7684ContextKeyValue\u7684Array")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6bcf\u4e2a\u5e95\u5c42\u7684Condition\u90fd\u6709\u5bf9\u5e94\u7684Execution\uff0c\u8d1f\u8d23\u7ef4\u62a4\u76f8\u5e94\u7684Ruler\u3001Matcher\u3001Fetcher\u3002"))),(0,a.kt)("h3",{id:"\u67e5\u8be2\u5165\u53e3contextsearch"},(0,a.kt)("strong",{parentName:"h3"},"\u67e5\u8be2\u5165\u53e3ContextSearch")),(0,a.kt)("p",null,"\u63d0\u4f9bsearch\u63a5\u53e3\uff0c\u63a5\u6536Map\u4f5c\u4e3a\u53c2\u6570\uff0c\u4eceCache\u4e2d\u7b5b\u9009\u51fa\u5bf9\u5e94\u7684\u6570\u636e\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u901a\u8fc7Parser\uff0c\u5c06Map\u5f62\u5f0f\u7684\u6761\u4ef6\u8f6c\u6362\u4e3aCondition\u5bf9\u8c61")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u901a\u8fc7Optimizer\uff0c\u83b7\u53d6\u4ee3\u4ef7\u4fe1\u606f\uff0c\u5e76\u6839\u636e\u4ee3\u4ef7\u4fe1\u606f\u786e\u5b9a\u67e5\u8be2\u7684\u5148\u540e\u987a\u5e8f")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u901a\u8fc7\u5bf9\u5e94\u7684Execution\uff0c\u6267\u884c\u76f8\u5e94\u7684Ruler/Fetcher/Matcher\u903b\u8f91\u540e\uff0c\u5f97\u5230\u641c\u7d22\u7ed3\u679c"))),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(59391).Z,width:"829",height:"506"})),(0,a.kt)("h3",{id:"\u67e5\u8be2\u4f18\u5316"},(0,a.kt)("strong",{parentName:"h3"},"\u67e5\u8be2\u4f18\u5316")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"OptimizedContextSearchCondition\u7ef4\u62a4\u6761\u4ef6\u7684Cost\u548cStatistics\u4fe1\u606f\uff1a"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Cost\u4fe1\u606f\uff1a\u7531CostCalculator\u8d1f\u8d23\u5224\u65ad\u67d0\u4e2aCondition\u662f\u5426\u80fd\u591f\u8ba1\u7b97\u51faCost\uff0c\u5982\u679c\u53ef\u4ee5\u8ba1\u7b97\uff0c\u5219\u8fd4\u56de\u5bf9\u5e94\u7684Cost\u5bf9\u8c61")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Statistics\u4fe1\u606f\uff1a\u5f00\u59cb/\u7ed3\u675f/\u6267\u884c\u65f6\u95f4\u3001\u8f93\u5165\u884c\u6570\u3001\u8f93\u51fa\u884c\u6570")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5b9e\u73b0\u4e00\u4e2aCostContextSearchOptimizer\uff0c\u5176optimize\u65b9\u6cd5\u4ee5Condition\u7684\u4ee3\u4ef7\u4e3a\u4f9d\u636e\uff0c\u5bf9Condition\u8fdb\u884c\u8c03\u4f18\uff0c\u8f6c\u6362\u4e3a\u4e00\u4e2aOptimizedContextSearchCondition\u5bf9\u8c61\u3002\u5177\u4f53\u903b\u8f91\u63cf\u8ff0\u5982\u4e0b\uff1a"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u5c06\u4e00\u4e2a\u590d\u6742\u7684Condition\uff0c\u6839\u636e\u903b\u8f91\u8fd0\u7b97\u7684\u7ec4\u5408\uff0c\u62c6\u89e3\u6210\u4e00\u4e2a\u6811\u5f62\u7ed3\u6784\uff0c\u6bcf\u4e2a\u53f6\u5b50\u8282\u70b9\u5747\u4e3a\u4e00\u4e2a\u6700\u57fa\u672c\u7684\u7b80\u5355Condition\uff1b\u6bcf\u4e2a\u975e\u53f6\u5b50\u8282\u70b9\u5747\u4e3a\u4e00\u4e2a\u903b\u8f91\u8fd0\u7b97\u3002")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"  \u5982\u4e0b\u56fe\u6240\u793a\u7684\u6811A\uff0c\u5c31\u662f\u4e00\u4e2a\u7531ABCDE\u8fd9\u4e94\u4e2a\u7b80\u5355\u6761\u4ef6\uff0c\u901a\u8fc7\u5404\u79cd\u903b\u8f91\u8fd0\u7b97\u7ec4\u5408\u6210\u7684\u4e00\u4e2a\u590d\u6742\u6761\u4ef6\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(42243).Z,width:"656",height:"442"})),(0,a.kt)("center",null,"\uff08\u6811A\uff09"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8fd9\u4e9bCondition\u7684\u6267\u884c\uff0c\u4e8b\u5b9e\u4e0a\u5c31\u662f\u6df1\u5ea6\u4f18\u5148\u3001\u4ece\u5de6\u5230\u53f3\u904d\u5386\u8fd9\u4e2a\u6811\u3002\u800c\u4e14\u6839\u636e\u903b\u8f91\u8fd0\u7b97\u7684\u4ea4\u6362\u89c4\u5f8b\uff0cCondition\u6811\u4e2d\u4e00\u4e2a\u8282\u70b9\u7684\u5b50\u8282\u70b9\u7684\u5de6\u53f3\u987a\u5e8f\u53ef\u4ee5\u4e92\u6362\uff0c\u56e0\u6b64\u53ef\u4ee5\u7a77\u4e3e\u51fa\u6240\u6709\u53ef\u80fd\u7684\u6267\u884c\u987a\u5e8f\u4e0b\u7684\u6240\u6709\u53ef\u80fd\u7684\u6811\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"  \u5982\u4e0b\u56fe\u6240\u793a\u7684\u6811B\uff0c\u5c31\u662f\u4e0a\u8ff0\u6811A\u7684\u53e6\u4e00\u4e2a\u53ef\u80fd\u7684\u987a\u5e8f\uff0c\u4e0e\u6811A\u7684\u6267\u884c\u7ed3\u679c\u5b8c\u5168\u4e00\u81f4\uff0c\u53ea\u662f\u5404\u90e8\u5206\u7684\u6267\u884c\u987a\u5e8f\u6709\u6240\u8c03\u6574\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(71769).Z,width:"681",height:"446"})),(0,a.kt)("center",null,"\uff08\u6811B\uff09"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9488\u5bf9\u6bcf\u4e00\u4e2a\u6811\uff0c\u4ece\u53f6\u5b50\u8282\u70b9\u5f00\u59cb\u8ba1\u7b97\u4ee3\u4ef7\uff0c\u5f52\u96c6\u5230\u6839\u8282\u70b9\uff0c\u5373\u4e3a\u8be5\u6811\u7684\u6700\u7ec8\u4ee3\u4ef7\uff0c\u6700\u7ec8\u5f97\u51fa\u4ee3\u4ef7\u6700\u5c0f\u7684\u90a3\u4e2a\u6811\uff0c\u4f5c\u4e3a\u6700\u4f18\u6267\u884c\u987a\u5e8f\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"  \u8ba1\u7b97\u8282\u70b9\u4ee3\u4ef7\u7684\u89c4\u5219\u5982\u4e0b\uff1a")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u9488\u5bf9\u53f6\u5b50\u8282\u70b9\uff0c\u6bcf\u4e2a\u8282\u70b9\u6709\u4e24\u4e2a\u5c5e\u6027\uff1a\u4ee3\u4ef7\uff08Cost\uff09\u548c\u6743\u91cd\uff08Weight\uff09\u3002Cost\u5373\u4e3aCostCalculator\u8ba1\u7b97\u51fa\u7684\u4ee3\u4ef7\uff0cWeight\u662f\u6839\u636e\u8282\u70b9\u6267\u884c\u5148\u540e\u987a\u5e8f\u7684\u4e0d\u540c\u8d4b\u4e88\u7684\uff0c\u5f53\u524d\u9ed8\u8ba4\u5de6\u8fb9\u4e3a1\uff0c\u53f3\u8fb9\u4e3a0.5\uff0c\u540e\u7eed\u770b\u5982\u4f55\u8c03\u6574\uff08\u8d4b\u4e88\u6743\u91cd\u7684\u539f\u56e0\u662f\uff0c\u5de6\u8fb9\u7684\u6761\u4ef6\u5728\u4e00\u4e9b\u60c5\u51b5\u4e0b\u5df2\u7ecf\u53ef\u4ee5\u76f4\u63a5\u51b3\u5b9a\u6574\u4e2a\u7ec4\u5408\u903b\u8f91\u7684\u5339\u914d\u4e0e\u5426\uff0c\u6240\u4ee5\u53f3\u8fb9\u7684\u6761\u4ef6\u5e76\u975e\u6240\u6709\u60c5\u51b5\u4e0b\u90fd\u8981\u6267\u884c\uff0c\u5b9e\u9645\u5f00\u9500\u5c31\u9700\u8981\u51cf\u5c11\u4e00\u5b9a\u7684\u6bd4\u4f8b\uff09")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u9488\u5bf9\u975e\u53f6\u5b50\u8282\u70b9\uff0cCost=\u6240\u6709\u5b50\u8282\u70b9\u7684Cost\xd7Weight\u7684\u603b\u548c\uff1bWeight\u7684\u8d4b\u4e88\u903b\u8f91\u4e0e\u53f6\u5b50\u8282\u70b9\u4e00\u81f4\u3002"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"  \u4ee5\u6811A\u548c\u6811B\u4e3a\u4f8b\u5b50\uff0c\u5206\u522b\u8ba1\u7b97\u51fa\u8fd9\u4e24\u4e2a\u6811\u7684\u4ee3\u4ef7\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u8282\u70b9\u4e2d\u7684\u6570\u5b57\u4e3aCost","|","Weight\uff0c\u5047\u8bbeABCDE\u8fd95\u4e2a\u7b80\u5355\u6761\u4ef6\u7684Cost\u4e3a10\u3001100\u300150\u300110\u548c100\u3002\u7531\u6b64\u53ef\u4ee5\u5f97\u51fa\uff0c\u6811B\u7684\u4ee3\u4ef7\u5c0f\u4e8e\u6811A\uff0c\u4e3a\u66f4\u4f18\u65b9\u6848\u3002")),(0,a.kt)("center",{class:"half"},(0,a.kt)("img",{src:"/Images-zh/Architecture/Public_Enhancement_Service/ContextService/linkis-contextservice-search-06.png",width:"300"})," ",(0,a.kt)("img",{src:"/Images-zh/Architecture/Public_Enhancement_Service/ContextService/linkis-contextservice-search-07.png",width:"300"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u7528CostCalculator\u8861\u91cf\u7b80\u5355\u6761\u4ef6\u7684Cost\u7684\u601d\u8def\uff1a"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4f5c\u7528\u5728\u7d22\u5f15\u4e0a\u7684\u6761\u4ef6\uff1a\u6839\u636e\u7d22\u5f15\u503c\u7684\u5206\u5e03\u6765\u786e\u5b9a\u4ee3\u4ef7\u3002\u6bd4\u5982\u5f53\u6761\u4ef6A\u4eceCache\u4e2dget\u51fa\u6765\u7684Array\u957f\u5ea6\u662f100\uff0c\u6761\u4ef6B\u4e3a200\uff0c\u90a3\u4e48\u6761\u4ef6A\u7684\u4ee3\u4ef7\u5c0f\u4e8eB\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u9700\u8981\u904d\u5386\u7684\u6761\u4ef6\uff1a"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6839\u636e\u6761\u4ef6\u672c\u8eab\u5339\u914d\u6a21\u5f0f\u7ed9\u51fa\u4e00\u4e2a\u521d\u59cbCost\uff1a\u5982Regex\u4e3a100\uff0cContains\u4e3a10\u7b49\uff08\u5177\u4f53\u6570\u503c\u7b49\u5b9e\u73b0\u65f6\u6839\u636e\u60c5\u51b5\u8c03\u6574\uff09")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6839\u636e\u5386\u53f2\u67e5\u8be2\u7684\u6548\u7387\uff0c\u5728\u521d\u59cbCost\u7684\u57fa\u7840\u4e0a\u8fdb\u884c\u4e0d\u65ad\u8c03\u6574\u540e\uff0c\u5f97\u5230\u5b9e\u65f6\u7684Cost\u3002\u5355\u4f4d\u65f6\u95f4\u541e\u5410\u91cf"))))))))}k.isMDXComponent=!0},89626:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/linkis-contextservice-search-01-0b5b2358fe3f3337ee2ff00d258a9b53.png"},86959:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/linkis-contextservice-search-02-df8a3c16218931cb0e9161035fb31d1a.png"},59391:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/linkis-contextservice-search-03-4ef57654ae4c3015fc6af457288f2b6b.png"},42243:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/linkis-contextservice-search-04-56a888dbb72f9dc3ac464f9caf88d6f7.png"},71769:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/linkis-contextservice-search-05-aaf617814ecac7b890ef11722e27ed63.png"}}]);