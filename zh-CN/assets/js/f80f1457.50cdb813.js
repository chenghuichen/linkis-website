"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[28225],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),o=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=o(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=o(t),m=i,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return t?a.createElement(k,s(s({ref:n},c),{},{components:t})):a.createElement(k,s({ref:n},c))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:i,s[1]=l;for(var o=2;o<r;o++)s[o]=t[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},96781:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var a=t(87462),i=(t(67294),t(3905));const r={title:"Linkis 1.3.2 \u6574\u5408OceanBase",sidebar_position:3},s=void 0,l={permalink:"/zh-CN/blog/2023/03/08/linkis-integration-with-oceanbase",editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2023-03-08-linkis-integration-with-oceanbase/index.md",title:"Linkis 1.3.2 \u6574\u5408OceanBase",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728 Linkis 1.3.2 \u7248\u672c\u4e2d\uff0c\u6574\u5408 OceanBase \u6570\u636e\u5e93\u3002 OceanBase \u6570\u636e\u5e93\u517c\u5bb9 MySQL 5.7/8.0 \u7684\u7edd\u5927\u90e8\u5206\u529f\u80fd\u548c\u8bed\u6cd5\u3002\u56e0\u6b64\u53ef\u4ee5\u5c06 OceanBase \u6570\u636e\u5e93\u5f53\u6210 MySQL \u6765\u4f7f\u7528\u3002",date:"2023-03-08T00:00:00.000Z",formattedDate:"2023\u5e743\u67088\u65e5",tags:[],readingTime:1.99,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Linkis 1.3.2 \u6574\u5408OceanBase",sidebar_position:3},nextItem:{title:"\u5f15\u64ce\u7269\u6599\u7ba1\u7406",permalink:"/zh-CN/blog/2022/12/02/material-manage"}},p={authorsImageUrls:[]},o=[{value:"1. \u51c6\u5907\u5de5\u4f5c",id:"1-\u51c6\u5907\u5de5\u4f5c",level:2},{value:"1.1 \u73af\u5883\u5b89\u88c5",id:"11-\u73af\u5883\u5b89\u88c5",level:3},{value:"1.2 \u73af\u5883\u9a8c\u8bc1",id:"12-\u73af\u5883\u9a8c\u8bc1",level:3},{value:"2. Linkis\u63d0\u4ea4 OceanBase \u6570\u636e\u5e93\u4efb\u52a1",id:"2-linkis\u63d0\u4ea4-oceanbase-\u6570\u636e\u5e93\u4efb\u52a1",level:2},{value:"2.1 \u901a\u8fc7 shell \u63d0\u4ea4\u4efb\u52a1",id:"21-\u901a\u8fc7-shell-\u63d0\u4ea4\u4efb\u52a1",level:3},{value:"2.2 \u901a\u8fc7 Linkis SDK \u63d0\u4ea4\u4efb\u52a1",id:"22-\u901a\u8fc7-linkis-sdk-\u63d0\u4ea4\u4efb\u52a1",level:3},{value:"2.3 \u591a\u6570\u636e\u6e90\u652f\u6301",id:"23-\u591a\u6570\u636e\u6e90\u652f\u6301",level:3}],c={toc:o},d="wrapper";function u(e){let{components:n,...r}=e;return(0,i.kt)(d,(0,a.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Linkis")," 1.3.2 \u7248\u672c\u4e2d\uff0c\u6574\u5408 OceanBase \u6570\u636e\u5e93\u3002 OceanBase \u6570\u636e\u5e93\u517c\u5bb9 MySQL 5.7/8.0 \u7684\u7edd\u5927\u90e8\u5206\u529f\u80fd\u548c\u8bed\u6cd5\u3002\u56e0\u6b64\u53ef\u4ee5\u5c06 OceanBase \u6570\u636e\u5e93\u5f53\u6210 MySQL \u6765\u4f7f\u7528\u3002"),(0,i.kt)("h2",{id:"1-\u51c6\u5907\u5de5\u4f5c"},"1. \u51c6\u5907\u5de5\u4f5c"),(0,i.kt)("h3",{id:"11-\u73af\u5883\u5b89\u88c5"},"1.1 \u73af\u5883\u5b89\u88c5"),(0,i.kt)("p",null,"\u5b89\u88c5\u90e8\u7f72 OceanBase \u6570\u636e\u5e93\uff0c\u53c2\u770b",(0,i.kt)("a",{parentName:"p",href:"https://www.oceanbase.com/docs/community-observer-cn-10000000000901197"},"\u5feb\u901f\u4f53\u9a8cOceanBase")),(0,i.kt)("h3",{id:"12-\u73af\u5883\u9a8c\u8bc1"},"1.2 \u73af\u5883\u9a8c\u8bc1"),(0,i.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 MySQL \u547d\u4ee4\u9a8c\u8bc1 OceanBase \u6570\u636e\u5e93\u5b89\u88c5\u60c5\u51b5\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"mysql -h${ip} -P${port} -u${username} -p${password} -D${db_name}\n")),(0,i.kt)("p",null,"\u8fde\u63a5\u6210\u529f\u5982\u4e0b\u56fe\u6240\u793a\uff1a\n",(0,i.kt)("img",{src:t(22937).Z,width:"1092",height:"202"})),(0,i.kt)("h2",{id:"2-linkis\u63d0\u4ea4-oceanbase-\u6570\u636e\u5e93\u4efb\u52a1"},"2. Linkis\u63d0\u4ea4 OceanBase \u6570\u636e\u5e93\u4efb\u52a1"),(0,i.kt)("h3",{id:"21-\u901a\u8fc7-shell-\u63d0\u4ea4\u4efb\u52a1"},"2.1 \u901a\u8fc7 shell \u63d0\u4ea4\u4efb\u52a1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},' sh ./bin/linkis-cli -engineType jdbc-4 -codeType jdbc -code "show tables" -submitUser hadoop -proxyUser hadoop -runtimeMap wds.linkis.jdbc.connect.url=jdbc:mysql://${ip}:${port}/${db_name} -runtimeMap wds.linkis.jdbc.driver=com.mysql.jdbc.Driver -runtimeMap wds.linkis.jdbc.username=${username} -runtimeMap wds.linkis.jdbc.password=${password}\n')),(0,i.kt)("h3",{id:"22-\u901a\u8fc7-linkis-sdk-\u63d0\u4ea4\u4efb\u52a1"},"2.2 \u901a\u8fc7 Linkis SDK \u63d0\u4ea4\u4efb\u52a1"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Linkis")," \u63d0\u4f9b\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"Java")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"Scala")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"SDK")," \u5411 ",(0,i.kt)("inlineCode",{parentName:"p"},"Linkis")," \u670d\u52a1\u7aef\u63d0\u4ea4\u4efb\u52a1\u3002\u5177\u4f53\u53ef\u4ee5\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/user-guide/sdk-manual"},"JAVA SDK Manual"),"\u3002\u5bf9\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"OceanBase")," \u4efb\u52a1\u60a8\u53ea\u9700\u8981\u4fee\u6539 ",(0,i.kt)("inlineCode",{parentName:"p"},"Demo")," \u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"EngineConnType")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"CodeType")," \u53c2\u6570\u5373\u53ef:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Map<String, Object> labels = new HashMap<String, Object>();\nlabels.put(LabelKeyConstant.ENGINE_TYPE_KEY, "jdbc-4"); // required engineType Label\nlabels.put(LabelKeyConstant.USER_CREATOR_TYPE_KEY, "hadoop-IDE");// required execute user and creator\nlabels.put(LabelKeyConstant.CODE_TYPE_KEY, "jdbc"); // required codeType\n')),(0,i.kt)("h3",{id:"23-\u591a\u6570\u636e\u6e90\u652f\u6301"},"2.3 \u591a\u6570\u636e\u6e90\u652f\u6301"),(0,i.kt)("p",null,"\u5730\u5740\uff1a\u767b\u9646\u7ba1\u7406\u53f0--\x3e\u6570\u636e\u6e90\u7ba1\u7406"),(0,i.kt)("p",null,"\u6b65\u9aa41\uff1a\u65b0\u5efa\u6570\u636e\u6e90"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(84722).Z,width:"1907",height:"603"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(15342).Z,width:"782",height:"800"})),(0,i.kt)("p",null,"\u6b65\u9aa42\uff1a\u8fde\u63a5\u6d4b\u8bd5"),(0,i.kt)("p",null,"\u70b9\u51fb\u6d4b\u8bd5\u8fde\u63a5\u6309\u94ae\u8fdb\u884c\u6d4b\u8bd5\n",(0,i.kt)("img",{src:t(56189).Z,width:"1670",height:"331"})),(0,i.kt)("p",null,"\u6b65\u9aa43\uff1a\u53d1\u5e03\u6570\u636e\u6e90"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(7532).Z,width:"1670",height:"263"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(68463).Z,width:"800",height:"201"})),(0,i.kt)("p",null,"\u6b65\u9aa44\uff1a\u901a\u8fc7\u6307\u5b9a\u6570\u636e\u6e90\u540d\u79f0\u63d0\u4ea4 OceanBase \u4efb\u52a1"),(0,i.kt)("p",null,"\u8bf7\u6c42URL\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"http://${gateway_url}:${port}/api/rest_j/v1/entrance/submit")),(0,i.kt)("p",null,"\u8bf7\u6c42\u65b9\u5f0f\uff1aPOST"),(0,i.kt)("p",null,"\u8bf7\u6c42\u53c2\u6570\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "executionContent": {\n        "code": "show databases",\n        "runType": "jdbc"\n    },\n    "params": {\n        "variable": {},\n        "configuration": {\n            "startup": {},\n            "runtime": {\n                "wds.linkis.engine.runtime.datasource": "ob-test"\n            }\n        }\n    },\n    "labels": {\n        "engineType": "jdbc-4"\n    }\n}\n')),(0,i.kt)("p",null,"\u54cd\u5e94\u7ed3\u679c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "method": "/api/entrance/submit",\n    "status": 0,\n    "message": "OK",\n    "data": {\n        "taskID": 93,\n        "execID": "exec_id018017linkis-cg-entrance000830fb1364:9104IDE_hadoop_jdbc_0"\n    }\n}\n')),(0,i.kt)("p",null,"\u7ba1\u7406\u53f0\u67e5\u770b\u4efb\u52a1\u6267\u884c\u60c5\u51b5\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(81038).Z,width:"1899",height:"455"})))}u.isMDXComponent=!0},84722:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/ds-manage-zh-7e6a06f4bf99a16104bdad137c28662f.png"},15342:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/new-zh-98bba34d9c176383dcbf475e8d3ae0fc.png"},22937:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/ob-conn-ad13249d704982c7e8d9ffa0c47ce50a.png"},56189:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/ob-test-zh-64d4ef94aeea497a8b21b8d1b8d852a4.png"},7532:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/publish-1-zh-dee369ba7c72e7b4b53907159a0074bb.png"},68463:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/publish-2-zh-4d4d7f85f71179c80a60026c45eb93c4.png"},81038:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/show-status-zh-2379e1ed08870b9a60410c85df3e0af8.png"}}]);