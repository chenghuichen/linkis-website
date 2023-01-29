"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[3087],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(n),c=r,d=m["".concat(o,".").concat(c)]||m[c]||k[c]||l;return n?a.createElement(d,i(i({ref:t},s),{},{components:n})):a.createElement(d,i({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84059:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={title:"Restful Api",sidebar_position:2},i=void 0,p={unversionedId:"api/rest-api",id:"version-0.11.0/api/rest-api",title:"Restful Api",description:"Linkis \u63d0\u4f9b\u4e86\u65b9\u4fbf\u7684HTTP\u63a5\u53e3\u65b9\u4fbf\u524d\u7aef\u4e0a\u5c42\u5e94\u7528\u6216\u8005\u540e\u53f0\u901a\u8fc7Restful\u63a5\u53e3\u8fdb\u884c\u8c03\u7528",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/api/rest-api.md",sourceDirName:"api",slug:"/api/rest-api",permalink:"/zh-CN/docs/0.11.0/api/rest-api",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/api/rest-api.md",tags:[],version:"0.11.0",sidebarPosition:2,frontMatter:{title:"Restful Api",sidebar_position:2},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"\u767b\u9646 Api",permalink:"/zh-CN/docs/0.11.0/api/login-api"},next:{title:"WebSocket",permalink:"/zh-CN/docs/0.11.0/api/web-socket"}},o={},u=[{value:"1 Linkis\u63a5\u53e3\u89c4\u8303",id:"1-linkis\u63a5\u53e3\u89c4\u8303",level:2},{value:"2 HTTP\u63a5\u53e3\u6c47\u603b",id:"2-http\u63a5\u53e3\u6c47\u603b",level:2},{value:"3 \u63a5\u53e3\u8be6\u89e3",id:"3-\u63a5\u53e3\u8be6\u89e3",level:2},{value:"3.1 \u63d0\u4ea4\u6267\u884c",id:"31-\u63d0\u4ea4\u6267\u884c",level:3},{value:"3.2 \u83b7\u53d6\u72b6\u6001",id:"32-\u83b7\u53d6\u72b6\u6001",level:3},{value:"3.3 \u83b7\u53d6\u65e5\u5fd7",id:"33-\u83b7\u53d6\u65e5\u5fd7",level:3},{value:"3.4 \u83b7\u53d6\u8fdb\u5ea6",id:"34-\u83b7\u53d6\u8fdb\u5ea6",level:3},{value:"3.5 kill\u4efb\u52a1",id:"35-kill\u4efb\u52a1",level:3},{value:"3.6 \u7cfb\u7edf\u7528\u6237\u4ee3\u7406\u8bbe\u7f6e",id:"36-\u7cfb\u7edf\u7528\u6237\u4ee3\u7406\u8bbe\u7f6e",level:3}],s={toc:u};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Linkis \u63d0\u4f9b\u4e86\u65b9\u4fbf\u7684HTTP\u63a5\u53e3\u65b9\u4fbf\u524d\u7aef\u4e0a\u5c42\u5e94\u7528\u6216\u8005\u540e\u53f0\u901a\u8fc7Restful\u63a5\u53e3\u8fdb\u884c\u8c03\u7528")),(0,r.kt)("h2",{id:"1-linkis\u63a5\u53e3\u89c4\u8303"},"1 Linkis\u63a5\u53e3\u89c4\u8303"),(0,r.kt)("p",null,"Linkis\u5728\u524d\u540e\u7aef\u8fdb\u884c\u4ea4\u4e92\u7684\u65f6\u5019\uff0c\u5b9a\u4e49\u4e86\u4e00\u5957\u81ea\u5df1\u7684\u63a5\u53e3\u89c4\u8303\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u5bf9\u63a5\u53e3\u89c4\u8303\u611f\u5174\u8da3\uff0c\u8bf7\u70b9\u51fb\u8fd9\u91cc",(0,r.kt)("a",{parentName:"p",href:"/docs/1.3.1/development/development-specification/api"},"\u67e5\u770b\u63a5\u53e3\u89c4\u8303")),(0,r.kt)("h2",{id:"2-http\u63a5\u53e3\u6c47\u603b"},"2 HTTP\u63a5\u53e3\u6c47\u603b"),(0,r.kt)("p",null,"\u6211\u4eec\u63d0\u4f9b\u4ee5\u4e0b\u51e0\u4e2a\u63a5\u53e3\uff0c\u65b9\u4fbf\u7528\u6237\u5feb\u901f\u63d0\u4ea4\u6267\u884cJob\uff0c\u83b7\u53d6\u6267\u884c\u7ed3\u679c\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u63d0\u4ea4\u6267\u884c"),(0,r.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u72b6\u6001"),(0,r.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u65e5\u5fd7"),(0,r.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u8fdb\u5ea6"),(0,r.kt)("li",{parentName:"ul"},"Kill\u4efb\u52a1")),(0,r.kt)("h2",{id:"3-\u63a5\u53e3\u8be6\u89e3"},"3 \u63a5\u53e3\u8be6\u89e3"),(0,r.kt)("h3",{id:"31-\u63d0\u4ea4\u6267\u884c"},"3.1 \u63d0\u4ea4\u6267\u884c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63a5\u53e3 ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/entrance/execute"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u65b9\u5f0f ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "method":"/api/rest_j/v1/entrance/execute",\n    "params": {\n        "variable":{\n            "k1":"v1"\n        },\n        "configuration":{\n            "special":{\n                "k2":"v2"\n            },\n            "runtime":{\n                "k3":"v3"\n            },\n            "startup":{\n                "k4":"v4"\n            }\n        }\n    },\n    "executeApplicationName":"spark",\n    "executionCode":"show tables",\n    "runType":"sql",\n    "source":{\n        "scriptPath": "/home/Linkis/Linkis.sql"\n    }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u4f53data\u4e2d\u7684\u53c2\u6570\u63cf\u8ff0\u5982\u4e0b")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u5b9a\u4e49"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"executeApplicationName"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u6240\u671f\u671b\u4f7f\u7528\u7684\u5f15\u64ce\u670d\u52a1\uff0c\u5982Spark\u3001hive\u7b49"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0d\u53ef\u4e3a\u7a7a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"requestApplicationName"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u8d77\u8bf7\u6c42\u7684\u7cfb\u7edf\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u4ee5\u4e3a\u7a7a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u6307\u5b9a\u7684\u8fd0\u884c\u670d\u52a1\u7a0b\u5e8f\u7684\u53c2\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"Map"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u586b\uff0c\u91cc\u9762\u7684\u503c\u53ef\u4ee5\u4e3a\u7a7a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"executionCode"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u63d0\u4ea4\u7684\u6267\u884c\u4ee3\u7801"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0d\u53ef\u4e3a\u7a7a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"runType"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u7528\u6237\u6267\u884c\u5982spark\u670d\u52a1\u65f6\uff0c\u53ef\u4ee5\u9009\u62e9python\u3001R\u3001SQL\u7b49runType"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0d\u53ef\u4e3a\u7a7a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scriptPath"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u63d0\u4ea4\u4ee3\u7801\u811a\u672c\u7684\u5b58\u653e\u8def\u5f84"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u662fIDE\u7684\u8bdd\uff0c\u4e0eexecutionCode\u4e0d\u80fd\u540c\u65f6\u4e3a\u7a7a")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u793a\u4f8b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "method": "/api/rest_j/v1/entrance/execute",\n "status": 0,\n "message": "\u8bf7\u6c42\u6267\u884c\u6210\u529f",\n "data": {\n   "execID": "030418IDEhivelocalhost010004:10087IDE_johnnwang_21",\n   "taskID": "123"  \n }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"execID\u662f\u7528\u6237\u4efb\u52a1\u63d0\u4ea4\u5230UJES\u4e4b\u540e\uff0c\u4e3a\u8be5\u4efb\u52a1\u751f\u6210\u7684\u552f\u4e00\u6807\u8bc6\u7684\u6267\u884cID\uff0c\u4e3aString\u7c7b\u578b\uff0c\u8fd9\u4e2aID\u53ea\u5728\u4efb\u52a1\u8fd0\u884c\u65f6\u6709\u7528\uff0c\u7c7b\u4f3cPID\u7684\u6982\u5ff5\u3002ExecID\u7684\u8bbe\u8ba1\u4e3a(requestApplicationName\u957f\u5ea6)(executeAppName\u957f\u5ea61)(Instance\u957f\u5ea62)${requestApplicationName}${executeApplicationName}${entranceInstance\u4fe1\u606fip+port}${requestApplicationName}",(0,r.kt)("em",{parentName:"li"},"${umUser}"),"${index}"),(0,r.kt)("li",{parentName:"ul"},"taskID \u662f\u8868\u793a\u7528\u6237\u63d0\u4ea4task\u7684\u552f\u4e00ID\uff0c\u8fd9\u4e2aID\u7531\u6570\u636e\u5e93\u81ea\u589e\u751f\u6210\uff0c\u4e3aLong \u7c7b\u578b")),(0,r.kt)("h3",{id:"32-\u83b7\u53d6\u72b6\u6001"},"3.2 \u83b7\u53d6\u72b6\u6001"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63a5\u53e3 ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/entrance/${execID}/status"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u65b9\u5f0f ",(0,r.kt)("inlineCode",{parentName:"p"},"GET"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8fd4\u56de\u793a\u4f8b"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "method": "/api/rest_j/v1/entrance/{execID}/status",\n "status": 0,\n "message": "\u83b7\u53d6\u72b6\u6001\u6210\u529f",\n "data": {\n   "execID": "${execID}",\n   "status": "Running"\n }\n}\n')),(0,r.kt)("h3",{id:"33-\u83b7\u53d6\u65e5\u5fd7"},"3.3 \u83b7\u53d6\u65e5\u5fd7"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63a5\u53e3 ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/entrance/${execID}/log?fromLine=${fromLine}&size=${size}"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u65b9\u5f0f ",(0,r.kt)("inlineCode",{parentName:"p"},"GET"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8bf7\u6c42\u53c2\u6570fromLine\u662f\u6307\u4ece\u7b2c\u51e0\u884c\u5f00\u59cb\u83b7\u53d6\uff0csize\u662f\u6307\u8be5\u6b21\u8bf7\u6c42\u83b7\u53d6\u51e0\u884c\u65e5\u5fd7")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8fd4\u56de\u793a\u4f8b\uff0c\u5176\u4e2d\u8fd4\u56de\u7684fromLine\u9700\u8981\u4e0b\u6b21\u65e5\u5fd7\u8bf7\u6c42\u7684\u53c2\u6570"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "method": "/api/rest_j/v1/entrance/${execID}/log",\n  "status": 0,\n  "message": "\u8fd4\u56de\u65e5\u5fd7\u4fe1\u606f",\n  "data": {\n    "execID": "${execID}",\n    "log": ["error\u65e5\u5fd7","warn\u65e5\u5fd7","info\u65e5\u5fd7", "all\u65e5\u5fd7"],\n    "fromLine": 56\n  }\n}\n')),(0,r.kt)("h3",{id:"34-\u83b7\u53d6\u8fdb\u5ea6"},"3.4 \u83b7\u53d6\u8fdb\u5ea6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63a5\u53e3 ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/entrance/${execID}/progress"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u65b9\u5f0f ",(0,r.kt)("inlineCode",{parentName:"p"},"GET"),(0,r.kt)("br",null))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8fd4\u56de\u793a\u4f8b"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "method": "/api/rest_j/v1/entrance/{execID}/progress",\n  "status": 0,\n  "message": "\u8fd4\u56de\u8fdb\u5ea6\u4fe1\u606f",\n  "data": {\n    "execID": "${execID}",\n    "progress": 0.2,\n    "progressInfo": [\n        {\n            "id": "job-1",\n            "succeedTasks": 2,\n            "failedTasks": 0,\n            "runningTasks": 5,\n            "totalTasks": 10\n        },\n        {\n            "id": "job-2",\n            "succeedTasks": 5,\n            "failedTasks": 0,\n            "runningTasks": 5,\n            "totalTasks": 10\n        }\n    ]\n  }\n}\n')),(0,r.kt)("h3",{id:"35-kill\u4efb\u52a1"},"3.5 kill\u4efb\u52a1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63a5\u53e3 ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/entrance/${execID}/kill"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u65b9\u5f0f ",(0,r.kt)("inlineCode",{parentName:"p"},"GET"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8fd4\u56de\u793a\u4f8b\uff0c\u5176\u4e2d\u8fd4\u56de\u7684fromLine\u9700\u8981\u4e0b\u6b21\u65e5\u5fd7\u8bf7\u6c42\u7684\u53c2\u6570"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "method": "/api/rest_j/v1/entrance/{execID}/kill",\n "status": 0,\n "message": "OK",\n "data": {\n   "execID":"${execID}"\n  }\n}\n')),(0,r.kt)("h3",{id:"36-\u7cfb\u7edf\u7528\u6237\u4ee3\u7406\u8bbe\u7f6e"},"3.6 \u7cfb\u7edf\u7528\u6237\u4ee3\u7406\u8bbe\u7f6e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"gateway\u4ee3\u7406\u8bbe\u7f6e"),(0,r.kt)("p",{parentName:"li"},"\u5728gateway\u5b89\u88c5\u76ee\u5f55conf\u4e2d\u4fee\u6539proxy.properties\u6587\u4ef6\uff0c\u6dfb\u52a0\u5185\u5bb9\uff1a\ntoken=user1,user2"),(0,r.kt)("p",{parentName:"li"},"\u8bf4\u660e\uff1atoken\u4e3a\u7ed9\u5230\u7cfb\u7edf\u7528\u6237\u7684\u79d8\u94a5\uff0c\u53f3\u8fb9\u4e3a\u7cfb\u7edf\u7528\u6237\u53ef\u4ee5\u4ee3\u7406\u7684\u5176\u5b83\u7528\u6237\uff0c\u5982token=*\uff0c\u5219\u4e0d\u9650\u5236\u7528\u6237\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"http\u8bf7\u6c42\u4ee3\u7406\u8bbe\u7f6e"),(0,r.kt)("p",{parentName:"li"}," \u5728\u8bf7\u6c42\u7684Headers\u53c2\u6570\u4e2d\u6dfb\u52a0\u4e24\u4e2a\u53c2\u6570\u8bbe\u7f6e"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"   Proxy-User = \u4ee3\u7406\u7528\u6237xxx\n   Validation-Code = gateway\u914d\u7f6e\u7684\u7cfb\u7edftoken\n\n")))))}k.isMDXComponent=!0}}]);