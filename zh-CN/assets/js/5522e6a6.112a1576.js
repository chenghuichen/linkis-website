"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[24430],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=o(n),k=l,d=c["".concat(p,".").concat(k)]||c[k]||g[k]||i;return n?a.createElement(d,r(r({ref:t},u),{},{components:n})):a.createElement(d,r({ref:t},u))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var o=2;o<i;o++)r[o]=n[o];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},42004:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var a=n(87462),l=(n(67294),n(3905));const i={title:"\u603b\u89c8",sidebar_position:0},r=void 0,s={unversionedId:"tuning-and-troubleshooting/overview",id:"version-1.3.1/tuning-and-troubleshooting/overview",title:"\u603b\u89c8",description:"\u8c03\u4f18\u6392\u969c",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.1/tuning-and-troubleshooting/overview.md",sourceDirName:"tuning-and-troubleshooting",slug:"/tuning-and-troubleshooting/overview",permalink:"/zh-CN/docs/latest/tuning-and-troubleshooting/overview",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.1/tuning-and-troubleshooting/overview.md",tags:[],version:"1.3.1",sidebarPosition:0,frontMatter:{title:"\u603b\u89c8",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"UDF \u8868\u7ed3\u6784",permalink:"/zh-CN/docs/latest/development/table/udf-table"},next:{title:"\u53c2\u6570\u5217\u8868",permalink:"/zh-CN/docs/latest/tuning-and-troubleshooting/configuration"}},p={},o=[{value:"\u8c03\u4f18\u6392\u969c",id:"\u8c03\u4f18\u6392\u969c",level:2},{value:"1. \u793e\u533aIssue\u641c\u7d22\u5173\u952e\u8bcd",id:"1-\u793e\u533aissue\u641c\u7d22\u5173\u952e\u8bcd",level:2},{value:"2. \u5e38\u89c1Q&amp;A\u95ee\u9898\u96c6",id:"2-\u5e38\u89c1qa\u95ee\u9898\u96c6",level:2},{value:"3. \u5982\u4f55\u5b9a\u4f4d\u9519\u8bef",id:"3-\u5982\u4f55\u5b9a\u4f4d\u9519\u8bef",level:2},{value:"3.1 \u7f16\u8bd1\u9636\u6bb5\u5f02\u5e38\u6392\u67e5",id:"31-\u7f16\u8bd1\u9636\u6bb5\u5f02\u5e38\u6392\u67e5",level:3},{value:"3.2 \u5b89\u88c5\u9636\u6bb5\u5f02\u5e38\u6392\u67e5",id:"32-\u5b89\u88c5\u9636\u6bb5\u5f02\u5e38\u6392\u67e5",level:3},{value:"3.3 \u542f\u52a8\u5fae\u670d\u52a1\u9636\u6bb5\u5f02\u5e38\u6392\u67e5",id:"33-\u542f\u52a8\u5fae\u670d\u52a1\u9636\u6bb5\u5f02\u5e38\u6392\u67e5",level:3},{value:"3.4 \u8fd0\u884c\u9636\u6bb5",id:"34-\u8fd0\u884c\u9636\u6bb5",level:3},{value:"3.4.1 \u63a5\u53e3\u5f02\u5e38\u6392\u67e5",id:"341-\u63a5\u53e3\u5f02\u5e38\u6392\u67e5",level:4},{value:"3.4.2 \u6267\u884c\u5f15\u64ce\u4efb\u52a1\u7684\u5f02\u5e38\u6392\u67e5",id:"342-\u6267\u884c\u5f15\u64ce\u4efb\u52a1\u7684\u5f02\u5e38\u6392\u67e5",level:4},{value:"4. \u95ee\u9898\u53cd\u9988",id:"4-\u95ee\u9898\u53cd\u9988",level:3},{value:"5. \u5b9a\u4f4d\u6e90\u7801\u8fdc\u7a0bdebug",id:"5-\u5b9a\u4f4d\u6e90\u7801\u8fdc\u7a0bdebug",level:3}],u={toc:o};function g(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u8c03\u4f18\u6392\u969c"},"\u8c03\u4f18\u6392\u969c"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5efa\u8bae\u7684\u6392\u67e5\u57fa\u672c\u4f18\u5148\u7ea7\u53ef\u4ee5\u6309\u7167\uff1a",(0,l.kt)("strong",{parentName:"p"},"\u793e\u533aissue\u4e13\u680f\u641c\u7d22\u5173\u952e\u8bcd\u2014",">","\u5728\u793e\u533a\u67e5\u9605\u300aQ\\&A\u95ee\u9898\u603b\u7ed3\u300b\u6587\u6863\u2014",">","\u5b9a\u4f4d\u7cfb\u7edf\u65e5\u5fd7\u2014",">","\u793e\u533a\u7528\u6237\u7fa4\u54a8\u8be2\u4ea4\u6d41\u2014",">","\u5b9a\u4f4d\u6e90\u7801\u8fdc\u7a0bdebug"))),(0,l.kt)("h2",{id:"1-\u793e\u533aissue\u641c\u7d22\u5173\u952e\u8bcd"},"1. \u793e\u533aIssue\u641c\u7d22\u5173\u952e\u8bcd"),(0,l.kt)("p",null,"\u5728",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/linkis/issues"},"issue\u4e13\u680f"),", filter\u8fc7\u6ee4\u5668\u4e2d\u641c\u7d22\u5173\u952e\u8bcd\u3002\u5982\uff1a\nfilter:",(0,l.kt)("inlineCode",{parentName:"p"},"is:issue spark3"),"\n",(0,l.kt)("img",{src:n(47744).Z,width:"1684",height:"554"})),(0,l.kt)("h2",{id:"2-\u5e38\u89c1qa\u95ee\u9898\u96c6"},"2. \u5e38\u89c1Q&A\u95ee\u9898\u96c6"),(0,l.kt)("p",null,"\u5c06issue\u4e2d\u5e38\u89c1\u7684\u95ee\u9898\u4ee5\u53ca\u89e3\u51b3\u65b9\u6848\u6574\u7406\u6210\u6587\u6863\uff0c\u653e\u5728\u4e86\u5b98\u7f51\u9875\u9762\u300a ",(0,l.kt)("a",{parentName:"p",href:"/faq/main"},"\u5e38\u89c1\u95ee\u9898")," \u300b"),(0,l.kt)("h2",{id:"3-\u5982\u4f55\u5b9a\u4f4d\u9519\u8bef"},"3. \u5982\u4f55\u5b9a\u4f4d\u9519\u8bef"),(0,l.kt)("h3",{id:"31-\u7f16\u8bd1\u9636\u6bb5\u5f02\u5e38\u6392\u67e5"},"3.1 \u7f16\u8bd1\u9636\u6bb5\u5f02\u5e38\u6392\u67e5"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u662f\u81ea\u884c\u7f16\u8bd1")),(0,l.kt)("p",null,"\u901a\u5e38\u4f1a\u51fa\u73b0\u7684\u95ee\u9898:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7f16\u8bd1\u524d\uff0c\u672a\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"li"},"mvn -N install"),", \u5bfc\u81f4linkis\u81ea\u8eab\u4f9d\u8d56\u6ca1\u6cd5\u83b7\u53d6"),(0,l.kt)("li",{parentName:"ul"},"\u5347\u7ea7\u90e8\u5206\u4f9d\u8d56\u7ec4\u4ef6\u540e\uff0c\u5bfc\u81f4\u51fd\u6570\u62a5\u9519  \u5982\u4f7f\u7528spark3 ")),(0,l.kt)("p",null,"\u5b9a\u4f4d\u5f02\u5e38\u7684\u624b\u6bb5:\n\u53ef\u4ee5\u5728mvn \u8fd0\u884c\u547d\u4ee4\u540e\u9762\u52a0\u4e0a -e \u53c2\u6570 \u5982",(0,l.kt)("inlineCode",{parentName:"p"},"mvn clean install -e")),(0,l.kt)("h3",{id:"32-\u5b89\u88c5\u9636\u6bb5\u5f02\u5e38\u6392\u67e5"},"3.2 \u5b89\u88c5\u9636\u6bb5\u5f02\u5e38\u6392\u67e5"),(0,l.kt)("p",null,"\u5982\u679c\u51fa\u73b0\u62a5\u9519\uff0c\u53c8\u4e0d\u6e05\u695a\u5177\u4f53\u662f\u6267\u884c\u4ec0\u4e48\u547d\u4ee4\u62a5\u9519\uff0c\u53ef\u4ee5\u52a0 -x \u53c2\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"sh -x bin/install.sh"),"\uff0c\u5c06shell\u811a\u672c\u6267\u884c\u8fc7\u7a0b\u65e5\u5fd7\u6253\u5370\u51fa\u6765\uff0c\u65b9\u4fbf\u5b9a\u4f4d\u95ee\u9898"),(0,l.kt)("h3",{id:"33-\u542f\u52a8\u5fae\u670d\u52a1\u9636\u6bb5\u5f02\u5e38\u6392\u67e5"},"3.3 \u542f\u52a8\u5fae\u670d\u52a1\u9636\u6bb5\u5f02\u5e38\u6392\u67e5"),(0,l.kt)("p",null,"\u6240\u6709\u5fae\u670d\u52a1\u7684\u65e5\u5fd7\u6587\u4ef6\u7edf\u4e00\u653e\u5165\u4e86logs\u76ee\u5f55\uff0c\u65e5\u5fd7\u76ee\u5f55\u5c42\u7ea7\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"\u251c\u2500\u2500\xa0logs \u65e5\u5fd7\u76ee\u5f55\n\u2502   \u251c\u2500\u2500 linkis-cg-engineconnmanager-gc.log\n\u2502   \u251c\u2500\u2500 linkis-cg-engineconnmanager.log\n\u2502   \u251c\u2500\u2500 linkis-cg-engineconnmanager.out\n\u2502   \u251c\u2500\u2500 linkis-cg-engineplugin-gc.log\n\u2502   \u251c\u2500\u2500 linkis-cg-engineplugin.log\n\u2502   \u251c\u2500\u2500 linkis-cg-engineplugin.out\n\u2502   \u251c\u2500\u2500 linkis-cg-entrance-gc.log\n\u2502   \u251c\u2500\u2500 linkis-cg-entrance.log\n\u2502   \u251c\u2500\u2500 linkis-cg-entrance.out\n\u2502   \u251c\u2500\u2500 linkis-cg-linkismanager-gc.log\n\u2502   \u251c\u2500\u2500 linkis-cg-linkismanager.log\n\u2502   \u251c\u2500\u2500 linkis-cg-linkismanager.out\n\u2502   \u251c\u2500\u2500 linkis-cli\n\u2502   \u2502\xa0\xa0 \u251c\u2500\u2500 linkis-client.hadoop.log.20220409162400037523664\n\u2502   \u2502\xa0\xa0 \u251c\u2500\u2500 linkis-client.hadoop.log.20220409162524417944443\n\u2502   \u251c\u2500\u2500 linkis-mg-eureka-gc.log\n\u2502   \u251c\u2500\u2500 linkis-mg-eureka.log\n\u2502   \u251c\u2500\u2500 linkis-mg-eureka.out\n\u2502   \u251c\u2500\u2500 linkis-mg-gateway-gc.log\n\u2502   \u251c\u2500\u2500 linkis-mg-gateway.log\n\u2502   \u251c\u2500\u2500 linkis-mg-gateway.out\n\u2502   \u251c\u2500\u2500 linkis-ps-cs-gc.log\n\u2502   \u251c\u2500\u2500 linkis-ps-cs.log\n\u2502   \u251c\u2500\u2500 linkis-ps-cs.out\n\u2502   \u251c\u2500\u2500 linkis-ps-data-source-manager-gc.log\n\u2502   \u251c\u2500\u2500 linkis-ps-data-source-manager.log\n\u2502   \u251c\u2500\u2500 linkis-ps-data-source-manager.out\n\u2502   \u251c\u2500\u2500 linkis-ps-metadatamanager-gc.log\n\u2502   \u251c\u2500\u2500 linkis-ps-metadatamanager.log\n\u2502   \u251c\u2500\u2500 linkis-ps-metadatamanager.out\n\u2502   \u251c\u2500\u2500 linkis-ps-publicservice-gc.log\n\u2502   \u251c\u2500\u2500 linkis-ps-publicservice.log\n\u2502   \u2514\u2500\u2500 linkis-ps-publicservice.out\n")),(0,l.kt)("p",null,"\u5305\u542b\u8ba1\u7b97\u6cbb\u7406\u3001\u516c\u5171\u589e\u5f3a\u3001\u5fae\u670d\u52a1\u7ba1\u7406\u4e09\u5927\u5fae\u670d\u52a1\u6a21\u5757\u3002\u6bcf\u4e2a\u5fae\u670d\u52a1\u4e0b\u5305\u542b",(0,l.kt)("inlineCode",{parentName:"p"},"linkis-xxx-gc.log"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"linkis-xxx.log"),"\u3001`",(0,l.kt)("inlineCode",{parentName:"p"},"linkis-xxx.out"),"\u4e09\u4e2a\u65e5\u5fd7\u3002\n\u5206\u522b\u5bf9\u5e94\u670d\u52a1\u7684GC\u65e5\u5fd7\u3001\u670d\u52a1\u65e5\u5fd7\u3001\u670d\u52a1\u7684System.out\u65e5\u5fd7\u3002"),(0,l.kt)("p",null,"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u542f\u52a8\u67d0\u4e2a\u5fae\u670d\u52a1\u51fa\u9519\u65f6\uff0c\u53ef\u4ee5\u5728log\u76ee\u5f55\u67e5\u770b\u5bf9\u5e94\u670d\u52a1 \u67e5\u770b\u8be6\u7ec6\u65e5\u5fd7\u6392\u67e5\u95ee\u9898"),(0,l.kt)("p",null,"\u4f46\u56e0\u4e3a\u670d\u52a1\u4e4b\u95f4\u662f\u5b58\u5728\u76f8\u4e92\u8c03\u7528\uff0clinkis\u7684\u5fae\u670d\u52a1\u6bd4\u8f83\u591a\uff0c\u82e5\u5bf9\u7cfb\u7edf\u4e0d\u719f\u6089\uff0c\u6709\u65f6\u5019\u65e0\u6cd5\u5b9a\u4f4d\u5230\u5177\u4f53\u54ea\u4e2a\u6a21\u5757\u51fa\u73b0\u4e86\u5f02\u5e38\uff0c\u53ef\u4ee5\u901a\u8fc7\u5168\u5c40\u65e5\u5fd7\u641c\u7d22\u65b9\u5f0f\uff0c\u62c9\u53d6\u5173\u952e\u5f02\u5e38\u4fe1\u606f\uff0c\u8fdb\u884c\u6392\u67e5 "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"tail -f log/* |grep -5n exception(\u6216\u5219tail -f log/* |grep -5n ERROR)  \nless log/* |grep -5n exception(\u6216\u5219less log/* |grep -5n ERROR)  \n")),(0,l.kt)("h3",{id:"34-\u8fd0\u884c\u9636\u6bb5"},"3.4 \u8fd0\u884c\u9636\u6bb5"),(0,l.kt)("h4",{id:"341-\u63a5\u53e3\u5f02\u5e38\u6392\u67e5"},"3.4.1 \u63a5\u53e3\u5f02\u5e38\u6392\u67e5"),(0,l.kt)("p",null,"\u5982\u679c\u67d0\u4e2a\u63a5\u53e3\u8bf7\u6c42\u62a5\u9519\uff0c\u53ef\u4ee5\u6839\u636e\u63a5\u53e3\u7684\u8fd4\u56de\u52a0\u8fc7\u4e2d\u5b9a\u4f4d\u51fa\u73b0\u95ee\u9898\u7684\u5fae\u670d\u52a1\uff0c\n\u4e00\u822c\u60c5\u51b5\u4e0b\u53ef\u4ee5",(0,l.kt)("strong",{parentName:"p"},"\u6839\u636eURL\u89c4\u8303\u8fdb\u884c\u5b9a\u4f4d\uff0c"),"Linkis\u63a5\u53e3\u4e2d\u7684URL\u90fd\u9075\u5faa\u7740\u4e00\u5b9a\u7684\u8bbe\u8ba1\u89c4\u8303\uff0c\n\u5373",(0,l.kt)("strong",{parentName:"p"},"/api/rest_j/v1/{applicationName}/.+\u7684\u683c\u5f0f"),"\uff0c\u901a\u8fc7applicationName\u53ef\u4ee5\u5b9a\u4f4d\u5e94\u7528\u540d\uff0c\u90e8\u5206\u5e94\u7528\u672c\u8eab\u662f\u4e00\u4e2a\u5fae\u670d\u52a1\uff0c\n\u8fd9\u65f6\u5019\u5e94\u7528\u540d\u548c\u5fae\u670d\u52a1\u540d\u76f8\u540c\uff0c\u90e8\u5206\u5e94\u7528\u5f52\u5c5e\u4e8e\u67d0\u4e2a\u5fae\u670d\u52a1\uff0c\u6b64\u65f6\u5e94\u8be5\u901a\u8fc7\u5e94\u7528\u540d\u67e5\u627e\u5f52\u5c5e\u7684\u5fae\u670d\u52a1\uff0c\n\u53bb\u5bf9\u5e94\u7684\u5fae\u670d\u52a1\u4e0b\u67e5\u770blog\u65e5\u5fd7\uff0c\u4e0b\u9762\u7ed9\u51fa\u5fae\u670d\u52a1\u548c\u5e94\u7528\u540d\u7684\u5bf9\u5e94\u5173\u7cfb\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u8bf7\u6c42\u8def\u5f84\u4e2d\u7684ApplicationName")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u670d\u52a1\u7684\u63d0\u4f9b\u65b9")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/api/rest_j/v1/linkisManager/*"),(0,l.kt)("td",{parentName:"tr",align:null},"linkis-cg-linkismanager")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/api/rest_j/v1/entrance/*"),(0,l.kt)("td",{parentName:"tr",align:null},"linkis-cg-entrance")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/api/rest_j/v1/bml/*"),(0,l.kt)("td",{parentName:"tr",align:null},"linkis-ps-publicservice")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/api/rest_j/v1/configuration/*"),(0,l.kt)("td",{parentName:"tr",align:null},"linkis-ps-publicservice")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/api/rest_j/v1/jobhistory/*"),(0,l.kt)("td",{parentName:"tr",align:null},"linkis-ps-publicservice")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/api/rest_j/v1/filesystem/*"),(0,l.kt)("td",{parentName:"tr",align:null},"linkis-ps-publicservice")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/api/rest_j/v1/variable/*"),(0,l.kt)("td",{parentName:"tr",align:null},"linkis-ps-publicservice")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/api/rest_j/v1/microservice/*"),(0,l.kt)("td",{parentName:"tr",align:null},"linkis-ps-publicservice")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/api/rest_j/v1/errorcode/*"),(0,l.kt)("td",{parentName:"tr",align:null},"linkis-ps-publicservice")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/api/rest_j/v1/udf/*"),(0,l.kt)("td",{parentName:"tr",align:null},"linkis-ps-publicservice")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/api/rest_j/v1/datasource/*"),(0,l.kt)("td",{parentName:"tr",align:null},"linkis-ps-publicservice")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/api/rest_j/v1/metadatamanager/*"),(0,l.kt)("td",{parentName:"tr",align:null},"linkis-ps-metadatamanager")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/api/rest_j/v1/data-source-manager/*"),(0,l.kt)("td",{parentName:"tr",align:null},"linkis-ps-data-source-manager")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/api/rest_j/v1/engineplugin/*"),(0,l.kt)("td",{parentName:"tr",align:null},"linkis-engineconn-plugin")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/api/rest_j/v1/contextservice/*(\u6682\u672a\u4f7f\u7528\u5230)"),(0,l.kt)("td",{parentName:"tr",align:null},"linkis-ps-cs")))),(0,l.kt)("p",null,"\u5bf9\u4e8e\u8bf7\u6c42\u5f02\u5e38\u7684\u5b9a\u4f4d\uff0c\u53ef\u4ee5\u6839\u636e\u4e0a\u8868\u7684\u5bf9\u5e94\u5173\u7cfb\uff0c\u53bb\u5bf9\u5e94\u7684\u670d\u52a1\u65e5\u5fd7\u4e2d\u8fdb\u884c\u67e5\u770b"),(0,l.kt)("h4",{id:"342-\u6267\u884c\u5f15\u64ce\u4efb\u52a1\u7684\u5f02\u5e38\u6392\u67e5"},"3.4.2 \u6267\u884c\u5f15\u64ce\u4efb\u52a1\u7684\u5f02\u5e38\u6392\u67e5"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," step1:\u627e\u5230EngineConn\u7684\u542f\u52a8\u90e8\u7f72\u76ee\u5f55 "),"  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65b9\u5f0f1\uff1a\u5982\u679c\u6267\u884c\u65e5\u5fd7\u4e2d\u6709\u663e\u793a\uff0c\u53ef\u4ee5\u5728\u7ba1\u7406\u53f0\u4e0a\u67e5\u770b\u5230 \u5982\u4e0b\u56fe:",(0,l.kt)("br",{parentName:"li"}),(0,l.kt)("img",{alt:"engine-log",src:n(57187).Z,width:"1889",height:"731"})),(0,l.kt)("li",{parentName:"ul"},"\u65b9\u5f0f2:\u5982\u679c\u65b9\u5f0f1\u4e2d\u6ca1\u6709\u627e\u5230\uff0c\u53ef\u4ee5\u901a\u8fc7\u627e\u5230",(0,l.kt)("inlineCode",{parentName:"li"},"conf/linkis-cg-engineconnmanager.properties"),"\u914d\u7f6e\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"wds.linkis.engineconn.root.dir"),"\u7684\u53c2\u6570\uff0c\u8be5\u503c\u5c31\u662f\u5f15\u64ce\u542f\u52a8\u90e8\u7f72\u7684\u76ee\u5f55\uff0c\u5b50\u76ee\u5f55\u6309\u6267\u884c\u5f15\u64ce\u7684\u7528\u6237\u8fdb\u884c\u4e86\u9694\u79bb")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"# \u5982\u679c\u4e0d\u6e05\u695ataskid\uff0c\u53ef\u4ee5\u6309\u65f6\u95f4\u6392\u5e8f\u540e\u8fdb\u884c\u9009\u62e9 ll -rt /appcom/tmp/${\u6267\u884c\u7684\u7528\u6237}/${\u65e5\u671f}/${\u5f15\u64ce}/  \ncd /appcom/tmp/${\u6267\u884c\u7684\u7528\u6237}/${\u65e5\u671f}/${\u5f15\u64ce}/${taskId}  \n\u4f8b\u5982\u4e00\u4e2aSpark \u5f15\u64ce\u7684\u542f\u52a8\u76ee\u5f55\u5982\u4e0b:\n/appcom/tmp/hadoop/20210824/spark/6a09d5fb-81dd-41af-a58b-9cb5d5d81b5a\n")),(0,l.kt)("p",null,"\u76ee\u5f55\u5927\u4f53\u5982\u4e0b "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"conf -> /appcom/tmp/engineConnPublickDir/6a09d5fb-81dd-41af-a58b-9cb5d5d81b5a/v000002/conf #\u5f15\u64ce\u7684\u914d\u7f6e\u6587\u4ef6  \nengineConnExec.sh #\u751f\u6210\u7684\u5f15\u64ce\u7684\u542f\u52a8\u811a\u672c  \nlib -> /appcom/tmp/engineConnPublickDir/45bf0e6b-0fa5-47da-9532-c2a9f3ec764d/v000003/lib #\u5f15\u64ce\u4f9d\u8d56\u7684\u5305  \nlogs #\u5f15\u64ce\u542f\u52a8\u6267\u884c\u7684\u76f8\u5173\u65e5\u5fd7  \n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," step2\uff1a\u67e5\u770b\u5f15\u64ce\u7684\u65e5\u5fd7 ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"less logs/stdout  \nless logs/stderr\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," step3\uff1a\u5c1d\u8bd5\u624b\u52a8\u6267\u884c\u811a\u672c(\u5982\u679c\u9700\u8981) "),(0,l.kt)("br",{parentName:"p"}),"\n","\u53ef\u4ee5\u901a\u8fc7\u5c1d\u8bd5\u624b\u52a8\u6267\u884c\u811a\u672c\uff0c\u8fdb\u884c\u8c03\u8bd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sh -x engineConnExec.sh  \n")),(0,l.kt)("h3",{id:"4-\u95ee\u9898\u53cd\u9988"},"4. \u95ee\u9898\u53cd\u9988"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u6309\u4e0a\u8ff0\u6392\u67e5\u65b9\u5f0f\u6392\u67e5\u540e\uff0c\u4ecd\u7136\u6ca1\u89e3\u51b3\u7684\u95ee\u9898\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,l.kt)("a",{parentName:"p",href:"/community/how-to-ask-for-help"},"\u9700\u6c42\u5e2e\u52a9"),"\u6307\u5f15\u65b9\u5f0f\u8fdb\u884c\u53cd\u9988\u548c\u9700\u6c42\u5e2e\u52a9 "),(0,l.kt)("h3",{id:"5-\u5b9a\u4f4d\u6e90\u7801\u8fdc\u7a0bdebug"},"5. \u5b9a\u4f4d\u6e90\u7801\u8fdc\u7a0bdebug"),(0,l.kt)("p",null,"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u5bf9\u6e90\u7801\u8fdc\u7a0bdebug\u662f\u5b9a\u4f4d\u95ee\u9898\u6700\u6709\u6548\u7684\u65b9\u5f0f\uff0c\u4f46\u76f8\u5bf9\u67e5\u9605\u6587\u6863\u6765\u8bf4\uff0c\u9700\u8981\u7528\u6237\u5bf9\u6e90\u7801\u7ed3\u6784\u6709\u4e00\u5b9a\u7684\u4e86\u89e3\uff0c\n\u8fd9\u91cc\u5efa\u8bae\u60a8\u5728\u8fdc\u7a0bdebug\u524d\u67e5\u9605\u300a ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/latest/development/directory-structure"},"Linkis\u6e90\u7801\u5c42\u7ea7\u7ed3\u6784\u8be6\u89e3")," \u300b,\u5bf9\u9879\u76ee\u7684\u6e90\u7801\u7ed3\u6784\u8fdb\u884c\u521d\u6b65\u7684\u4e86\u89e3\uff0c\n\u6709\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u7684\u719f\u6089\u4e4b\u540e\uff0c\u53ef\u4ee5\u53c2\u8003\u300a ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/latest/development/debug"},"\u5982\u4f55DebugLinkis")," \u300b\u4e00\u6587 \u8c03\u8bd5\u5bf9\u5e94\u5fae\u670d\u52a1\u4e0b\u7684\u4ee3\u7801\u3002"))}g.isMDXComponent=!0},57187:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/engine-log-ea301d1f5c9da11de32fdb8408b14b56.png"},47744:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/issue-searching-keywords-d83de993d1052bd9700a15e29a64fdf6.png"}}]);