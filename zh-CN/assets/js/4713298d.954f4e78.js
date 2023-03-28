"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[7977],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>x});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),s=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(o.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=s(n),k=r,x=d["".concat(o,".").concat(k)]||d[k]||m[k]||l;return n?a.createElement(x,p(p({ref:e},u),{},{components:n})):a.createElement(x,p({ref:e},u))}));function x(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,p=new Array(l);p[0]=k;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[d]="string"==typeof t?t:r,p[1]=i;for(var s=2;s<l;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},88158:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"\u5386\u53f2\u4f5c\u4e1aAPI",sidebar_position:1},p=void 0,i={unversionedId:"api/http/linkis-ps-publicservice-api/jobhistory-api",id:"version-1.3.1/api/http/linkis-ps-publicservice-api/jobhistory-api",title:"\u5386\u53f2\u4f5c\u4e1aAPI",description:"QueryRestfulApi \u7c7b",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.1/api/http/linkis-ps-publicservice-api/jobhistory-api.md",sourceDirName:"api/http/linkis-ps-publicservice-api",slug:"/api/http/linkis-ps-publicservice-api/jobhistory-api",permalink:"/zh-CN/docs/latest/api/http/linkis-ps-publicservice-api/jobhistory-api",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.1/api/http/linkis-ps-publicservice-api/jobhistory-api.md",tags:[],version:"1.3.1",sidebarPosition:1,frontMatter:{title:"\u5386\u53f2\u4f5c\u4e1aAPI",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"JDBC Driver \u6587\u6863",permalink:"/zh-CN/docs/latest/api/jdbc-api"},next:{title:"\u5143\u6570\u636e\u67e5\u8be2API",permalink:"/zh-CN/docs/latest/api/http/linkis-ps-publicservice-api/metadatamanager-api"}},o={},s=[{value:"\u5224\u65ad\u7528\u6237\u662f\u5426\u662f\u7ba1\u7406\u5458",id:"\u5224\u65ad\u7528\u6237\u662f\u5426\u662f\u7ba1\u7406\u5458",level:2},{value:"\u83b7\u53d6\u6570\u636e\u6e90\u7684\u6570\u636e\u5e93\u540d\u79f0\u5217\u8868",id:"\u83b7\u53d6\u6570\u636e\u6e90\u7684\u6570\u636e\u5e93\u540d\u79f0\u5217\u8868",level:2},{value:"\u5386\u53f2\u4efb\u52a1\u5217\u8868",id:"\u5386\u53f2\u4efb\u52a1\u5217\u8868",level:2},{value:"\u672a\u5b8c\u6210\u7684\u5386\u53f2\u4efb\u52a1\u5217\u8868",id:"\u672a\u5b8c\u6210\u7684\u5386\u53f2\u4efb\u52a1\u5217\u8868",level:2}],u={toc:s},d="wrapper";function m(t){let{components:e,...n}=t;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," QueryRestfulApi \u7c7b ")),(0,r.kt)("h2",{id:"\u5224\u65ad\u7528\u6237\u662f\u5426\u662f\u7ba1\u7406\u5458"},"\u5224\u65ad\u7528\u6237\u662f\u5426\u662f\u7ba1\u7406\u5458"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u5730\u5740"),":",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/jobhistory/governanceStationAdmin")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f"),":",(0,r.kt)("inlineCode",{parentName:"p"},"GET")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u6570\u636e\u7c7b\u578b"),":",(0,r.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u6570\u636e\u7c7b\u578b"),":",(0,r.kt)("inlineCode",{parentName:"p"},"application/json")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u63cf\u8ff0"),": \u5224\u65ad\u7528\u6237\u662f\u5426\u662f\u7ba1\u7406\u5458"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u53c2\u6570"),":\n\u65e0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u793a\u4f8b"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "method": null,\n    "status": 0,\n    "message": "OK",\n    "data": {\n        "admin": true\n    }\n}\n')),(0,r.kt)("h2",{id:"\u83b7\u53d6\u6570\u636e\u6e90\u7684\u6570\u636e\u5e93\u540d\u79f0\u5217\u8868"},"\u83b7\u53d6\u6570\u636e\u6e90\u7684\u6570\u636e\u5e93\u540d\u79f0\u5217\u8868"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u5730\u5740"),":",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/jobhistory/{id}/get")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f"),":",(0,r.kt)("inlineCode",{parentName:"p"},"GET")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u6570\u636e\u7c7b\u578b"),":",(0,r.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u6570\u636e\u7c7b\u578b"),":",(0,r.kt)("inlineCode",{parentName:"p"},"application/json")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u63cf\u8ff0"),":\u83b7\u53d6\u6570\u636e\u6e90\u7684\u6570\u636e\u5e93\u540d\u79f0\u5217\u8868"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u53c2\u6570"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u793a\u4f8b"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "method": null,\n    "status": 0,\n    "message": "OK",\n    "data": {\n        "task": {\n                "taskID": 1, \n                "instance": "xxx",\n                "execId": "exec-id-xxx",\n                "umUser": "test",\n                "engineInstance": "xxx",\n                "progress": "10%",\n                "logPath": "hdfs://xxx/xxx/xxx",\n                "resultLocation": "hdfs://xxx/xxx/xxx",\n                "status": "FAILED",\n                "createdTime": "2019-01-01 00:00:00",\n                "updatedTime": "2019-01-01 01:00:00",\n                "engineType": "spark",\n                "errorCode": 100,\n                "errDesc": "Task Failed with error code 100",\n                "executeApplicationName": "hello world",\n                "requestApplicationName": "hello world",\n                "runType": "xxx",\n                "paramJson": "{\\"xxx\\":\\"xxx\\"}",\n                "costTime": 10000,\n                "strongerExecId": "execId-xxx",\n                "sourceJson": "{\\"xxx\\":\\"xxx\\"}"\n        }\n    }\n}\n')),(0,r.kt)("h2",{id:"\u5386\u53f2\u4efb\u52a1\u5217\u8868"},"\u5386\u53f2\u4efb\u52a1\u5217\u8868"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u5730\u5740"),":",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/jobhistory/list")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f"),":",(0,r.kt)("inlineCode",{parentName:"p"},"GET")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u6570\u636e\u7c7b\u578b"),":",(0,r.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u6570\u636e\u7c7b\u578b"),":",(0,r.kt)("inlineCode",{parentName:"p"},"application/json")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u63cf\u8ff0"),":\u5386\u53f2\u4efb\u52a1\u5217\u8868"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u53c2\u6570"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"startDate"),(0,r.kt)("td",{parentName:"tr",align:null},"startDate"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Long"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endDate"),(0,r.kt)("td",{parentName:"tr",align:null},"endDate"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Long"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pageNow"),(0,r.kt)("td",{parentName:"tr",align:null},"pageNow"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pageSize"),(0,r.kt)("td",{parentName:"tr",align:null},"pageSize"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"taskID"),(0,r.kt)("td",{parentName:"tr",align:null},"taskID"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Long"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"executeApplicationName"),(0,r.kt)("td",{parentName:"tr",align:null},"executeApplicationName"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"creator"),(0,r.kt)("td",{parentName:"tr",align:null},"creator"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"proxyUser"),(0,r.kt)("td",{parentName:"tr",align:null},"proxyUser"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"isAdminView"),(0,r.kt)("td",{parentName:"tr",align:null},"isAdminView"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u793a\u4f8b"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "method": null,\n        "status": 0,\n        "message": "OK",\n        "data": {\n            "tasks": [{\n                "taskID": 1,\n                "instance": "xxx",\n                "execId": "exec-id-xxx",\n                "umUser": "test",\n                "engineInstance": "xxx",\n                "progress": "10%",\n                "logPath": "hdfs://xxx/xxx/xxx",\n                "resultLocation": "hdfs://xxx/xxx/xxx",\n                "status": "FAILED",\n                "createdTime": "2019-01-01 00:00:00",\n                "updatedTime": "2019-01-01 01:00:00",\n                "engineType": "spark",\n                "errorCode": 100,\n                "errDesc": "Task Failed with error code 100",\n                "executeApplicationName": "hello world",\n                "requestApplicationName": "hello world",\n                "runType": "xxx",\n                "paramJson": "{\\"xxx\\":\\"xxx\\"}",\n                "costTime": 10000,\n                "strongerExecId": "execId-xxx",\n                "sourceJson": "{\\"xxx\\":\\"xxx\\"}"\n            },\n            {\n                "taskID": 2,\n                "instance": "xxx",\n                "execId": "exec-id-xxx",\n                "umUser": "test",\n                "engineInstance": "xxx",\n                "progress": "10%",\n                "logPath": "hdfs://xxx/xxx/xxx",\n                "resultLocation": "hdfs://xxx/xxx/xxx",\n                "status": "FAILED",\n                "createdTime": "2019-01-01 00:00:00",\n                "updatedTime": "2019-01-01 01:00:00",\n                "engineType": "spark",\n                "errorCode": 100,\n                "errDesc": "Task Failed with error code 100",\n                "executeApplicationName": "hello world",\n                "requestApplicationName": "hello world",\n                "runType": "xxx",\n                "paramJson": "{\\"xxx\\":\\"xxx\\"}",\n                "costTime": 10000,\n                "strongerExecId": "execId-xxx",\n                "sourceJson": "{\\"xxx\\":\\"xxx\\"}"\n            }],\n            "totalPage": 1\n    }\n}\n')),(0,r.kt)("h2",{id:"\u672a\u5b8c\u6210\u7684\u5386\u53f2\u4efb\u52a1\u5217\u8868"},"\u672a\u5b8c\u6210\u7684\u5386\u53f2\u4efb\u52a1\u5217\u8868"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u5730\u5740"),":",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/jobhistory/listundone")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f"),":",(0,r.kt)("inlineCode",{parentName:"p"},"GET")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u6570\u636e\u7c7b\u578b"),":",(0,r.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u6570\u636e\u7c7b\u578b"),":",(0,r.kt)("inlineCode",{parentName:"p"},"application/json")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u63cf\u8ff0"),":\u672a\u5b8c\u6210\u7684\u5386\u53f2\u4efb\u52a1\u5217\u8868"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u53c2\u6570"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"startDate"),(0,r.kt)("td",{parentName:"tr",align:null},"startDate"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Long"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endDate"),(0,r.kt)("td",{parentName:"tr",align:null},"endDate"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Long"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pageNow"),(0,r.kt)("td",{parentName:"tr",align:null},"pageNow"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pageSize"),(0,r.kt)("td",{parentName:"tr",align:null},"pageSize"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"startTaskID"),(0,r.kt)("td",{parentName:"tr",align:null},"startTaskID"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Long"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"engineType"),(0,r.kt)("td",{parentName:"tr",align:null},"engineType"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"creator"),(0,r.kt)("td",{parentName:"tr",align:null},"creator"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u793a\u4f8b"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "method": null,\n        "status": 0,\n        "message": "OK",\n        "data": {\n            "tasks": [{\n                "taskID": 1,\n                "instance": "xxx",\n                "execId": "exec-id-xxx",\n                "umUser": "test",\n                "engineInstance": "xxx",\n                "progress": "10%",\n                "logPath": "hdfs://xxx/xxx/xxx",\n                "resultLocation": "hdfs://xxx/xxx/xxx",\n                "status": "Running",\n                "createdTime": "2019-01-01 00:00:00",\n                "updatedTime": "2019-01-01 01:00:00",\n                "engineType": "spark",\n                "errorCode": 100,\n                "errDesc": "Task Failed with error code 100",\n                "executeApplicationName": "hello world",\n                "requestApplicationName": "hello world",\n                "runType": "xxx",\n                "paramJson": "{\\"xxx\\":\\"xxx\\"}",\n                "costTime": 10000,\n                "strongerExecId": "execId-xxx",\n                "sourceJson": "{\\"xxx\\":\\"xxx\\"}"\n            },\n            {\n                "taskID": 2,\n                "instance": "xxx",\n                "execId": "exec-id-xxx",\n                "umUser": "test",\n                "engineInstance": "xxx",\n                "progress": "10%",\n                "logPath": "hdfs://xxx/xxx/xxx",\n                "resultLocation": "hdfs://xxx/xxx/xxx",\n                "status": "Running",\n                "createdTime": "2019-01-01 00:00:00",\n                "updatedTime": "2019-01-01 01:00:00",\n                "engineType": "spark",\n                "errorCode": 100,\n                "errDesc": "Task Failed with error code 100",\n                "executeApplicationName": "hello world",\n                "requestApplicationName": "hello world",\n                "runType": "xxx",\n                "paramJson": "{\\"xxx\\":\\"xxx\\"}",\n                "costTime": 10000,\n                "strongerExecId": "execId-xxx",\n                "sourceJson": "{\\"xxx\\":\\"xxx\\"}"\n            }],\n            "totalPage": 1\n    }\n}\n')))}m.isMDXComponent=!0}}]);