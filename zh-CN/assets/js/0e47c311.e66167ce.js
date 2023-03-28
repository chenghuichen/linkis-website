"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[70120],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var i=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,l=function(e,n){if(null==e)return{};var t,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=i.createContext({}),s=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=s(e.components);return i.createElement(o.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},k=i.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=s(t),k=l,m=u["".concat(o,".").concat(k)]||u[k]||d[k]||a;return t?i.createElement(m,p(p({ref:n},c),{},{components:t})):i.createElement(m,p({ref:n},c))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,p=new Array(a);p[0]=k;var r={};for(var o in n)hasOwnProperty.call(n,o)&&(r[o]=n[o]);r.originalType=e,r[u]="string"==typeof e?e:l,p[1]=r;for(var s=2;s<a;s++)p[s]=t[s];return i.createElement.apply(null,p)}return i.createElement.apply(null,t)}k.displayName="MDXCreateElement"},22878:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>s});var i=t(87462),l=(t(67294),t(3905));const a={title:"Pipeline \u5f15\u64ce",sidebar_position:10},p=void 0,r={unversionedId:"engine-usage/pipeline",id:"version-1.2.0/engine-usage/pipeline",title:"Pipeline \u5f15\u64ce",description:"Pipeline\u7684\u4e3b\u8981\u7528\u6765\u6587\u4ef6\u7684\u5bfc\u5165\u548c\u5bfc\u51fa,\u672c\u6587\u4e3b\u8981\u4ecb\u7ecdpipeline(>=1.1.0\u7248\u672c\u652f\u6301)\u5f15\u64ce\u7684\u914d\u7f6e\u3001\u90e8\u7f72\u548c\u4f7f\u7528\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2.0/engine-usage/pipeline.md",sourceDirName:"engine-usage",slug:"/engine-usage/pipeline",permalink:"/zh-CN/docs/1.2.0/engine-usage/pipeline",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2.0/engine-usage/pipeline.md",tags:[],version:"1.2.0",sidebarPosition:10,frontMatter:{title:"Pipeline \u5f15\u64ce",sidebar_position:10},sidebar:"version-1.2.0/tutorialSidebar",previous:{title:"Sqoop \u5f15\u64ce",permalink:"/zh-CN/docs/1.2.0/engine-usage/sqoop"},next:{title:"ElasticSearch \u5f15\u64ce",permalink:"/zh-CN/docs/1.2.0/engine-usage/elasticsearch"}},o={},s=[{value:"1. \u914d\u7f6e\u548c\u90e8\u7f72",id:"1-\u914d\u7f6e\u548c\u90e8\u7f72",level:2},{value:"1.1 \u5f15\u64ce\u5305\u7684\u83b7\u53d6",id:"11-\u5f15\u64ce\u5305\u7684\u83b7\u53d6",level:3},{value:"\u65b9\u5f0f1",id:"\u65b9\u5f0f1",level:4},{value:"\u65b9\u5f0f2 \u624b\u52a8\u7f16\u8bd1\u83b7\u53d6",id:"\u65b9\u5f0f2-\u624b\u52a8\u7f16\u8bd1\u83b7\u53d6",level:4},{value:"1.2 \u7269\u6599\u7684\u90e8\u7f72\u548c\u52a0\u8f7d",id:"12-\u7269\u6599\u7684\u90e8\u7f72\u548c\u52a0\u8f7d",level:3},{value:"1.3 \u5f15\u64ce\u7684\u6807\u7b7e(\u53ef\u9009)",id:"13-\u5f15\u64ce\u7684\u6807\u7b7e\u53ef\u9009",level:3},{value:"2. \u5f15\u64ce\u7684\u4f7f\u7528",id:"2-\u5f15\u64ce\u7684\u4f7f\u7528",level:2},{value:"2.1 \u901a\u8fc7Linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4",id:"21-\u901a\u8fc7linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4",level:3},{value:"2.2 \u901a\u8fc7 Scriptis \u4f7f\u7528",id:"22-\u901a\u8fc7-scriptis-\u4f7f\u7528",level:3},{value:"2.2.1 \u7f16\u5199\u811a\u672c",id:"221-\u7f16\u5199\u811a\u672c",level:4},{value:"\u8bed\u6cd5\u4e3a\uff1afrom path to path",id:"\u8bed\u6cd5\u4e3afrom-path-to-path",level:5},{value:"2.2.2 \u7ed3\u679c",id:"222-\u7ed3\u679c",level:4}],c={toc:s},u="wrapper";function d(e){let{components:n,...a}=e;return(0,l.kt)(u,(0,i.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Pipeline\u7684\u4e3b\u8981\u7528\u6765\u6587\u4ef6\u7684\u5bfc\u5165\u548c\u5bfc\u51fa,\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd",(0,l.kt)("inlineCode",{parentName:"p"},"pipeline"),"(>=1.1.0\u7248\u672c\u652f\u6301)\u5f15\u64ce\u7684\u914d\u7f6e\u3001\u90e8\u7f72\u548c\u4f7f\u7528\u3002")),(0,l.kt)("h2",{id:"1-\u914d\u7f6e\u548c\u90e8\u7f72"},"1. \u914d\u7f6e\u548c\u90e8\u7f72"),(0,l.kt)("h3",{id:"11-\u5f15\u64ce\u5305\u7684\u83b7\u53d6"},"1.1 \u5f15\u64ce\u5305\u7684\u83b7\u53d6"),(0,l.kt)("p",null,"\u56e0\u4e3a\u53d1\u5e03\u7684\u5b89\u88c5\u90e8\u7f72\u5305\u4e2d\u9ed8\u8ba4\u5b89\u88c5\u5305\u4e2d\u6ca1\u6709pipeline\u5f15\u64ce\uff0c\u56e0\u6b64\u9700\u8981\u83b7\u53d6\u5bf9\u5e94\u5f15\u64ce\u7684jar\u5305\u6587\u4ef6 "),(0,l.kt)("h4",{id:"\u65b9\u5f0f1"},"\u65b9\u5f0f1"),(0,l.kt)("p",null,"\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"p",href:"https://linkis.apache.org/zh-CN/blog/2022/04/15/how-to-download-engineconn-plugin"},"\u975e\u9ed8\u8ba4\u5f15\u64ce\u7269\u6599\u5305")," \u4e0b\u8f7d"),(0,l.kt)("h4",{id:"\u65b9\u5f0f2-\u624b\u52a8\u7f16\u8bd1\u83b7\u53d6"},"\u65b9\u5f0f2 \u624b\u52a8\u7f16\u8bd1\u83b7\u53d6"),(0,l.kt)("p",null,"\u6ce8\u610f: \u7f16\u8bd1",(0,l.kt)("inlineCode",{parentName:"p"},"pipeline"),"\u5f15\u64ce\u4e4b\u524d\u9700\u8981\u8fdb\u884clinkis\u9879\u76ee\u5168\u91cf\u7f16\u8bd1  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd  ${linkis_code_dir} \nmvn -N  install #\u9996\u6b21\u9700\u8981\u8fdb\u884clinkis\u9879\u76ee\u5168\u91cf\u7f16\u8bd1\n\ncd linkis-enginepconn-pugins/engineconn-plugins/pipeline/\nmvn clean install\n")),(0,l.kt)("p",null,"\u7f16\u8bd1\u51fa\u6765\u7684\u5f15\u64ce\u5305,\u4f4d\u4e8e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"${linkis_code_dir}/linkis-engineconn-plugins/pipeline/target/out/pipeline\n")),(0,l.kt)("h3",{id:"12-\u7269\u6599\u7684\u90e8\u7f72\u548c\u52a0\u8f7d"},"1.2 \u7269\u6599\u7684\u90e8\u7f72\u548c\u52a0\u8f7d"),(0,l.kt)("p",null,"\u5c06 \u6b65\u9aa4 1.1\u83b7\u53d6\u5230\u7684\u5f15\u64ce\u7269\u6599\u5305\uff0c\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u7684\u5f15\u64ce\u76ee\u5f55\u4e0b",(0,l.kt)("inlineCode",{parentName:"p"},"${LINKIS_HOME}/lib/linkis-engineplugins")),(0,l.kt)("p",null,"\u5e76\u91cd\u542flinkis-engineplugin\u8fdb\u884c\u5f15\u64ce\u5237\u65b0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd ${LINKIS_HOME}/sbin\nsh linkis-daemon.sh restart cg-engineplugin\n")),(0,l.kt)("p",null,"\u68c0\u67e5\u5f15\u64ce\u662f\u5426\u5237\u65b0\u6210\u529f\uff1a\u53ef\u4ee5\u67e5\u770b\u6570\u636e\u5e93\u4e2d\u7684linkis_engine_conn_plugin_bml_resources\u8fd9\u5f20\u8868\u7684last_update_time\u662f\u5426\u4e3a\u89e6\u53d1\u5237\u65b0\u7684\u65f6\u95f4\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"#\u767b\u9646\u5230linkis\u7684\u6570\u636e\u5e93 \nselect *  from linkis_cg_engine_conn_plugin_bml_resources\n")),(0,l.kt)("h3",{id:"13-\u5f15\u64ce\u7684\u6807\u7b7e\u53ef\u9009"},"1.3 \u5f15\u64ce\u7684\u6807\u7b7e(\u53ef\u9009)"),(0,l.kt)("p",null,"\u901a\u8fc7\u6807\u7b7e\u6765\u8fdb\u884c\u7684\uff0c\u6240\u4ee5\u9700\u8981\u5728\u6211\u4eec\u6570\u636e\u5e93\u4e2d\u63d2\u5165\u6570\u636e\uff0c\u63d2\u5165\u7684\u65b9\u5f0f\u5982\u4e0b\u6587\u6240\u793a"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../deployment/engine-conn-plugin-installation"},"EngineConnPlugin\u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5")," "),(0,l.kt)("h2",{id:"2-\u5f15\u64ce\u7684\u4f7f\u7528"},"2. \u5f15\u64ce\u7684\u4f7f\u7528"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u56e0\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"pipeline"),"\u5f15\u64ce\u4e3b\u8981\u7528\u6765\u5bfc\u5165\u5bfc\u51fa\u6587\u4ef6\u4e3a\u4e3b\uff0c\u73b0\u5728\u6211\u4eec\u5047\u8bbe\u4eceA\u5411B\u5bfc\u5165\u6587\u4ef6\u6700\u4e3a\u4ecb\u7ecd\u6848\u4f8b")),(0,l.kt)("h3",{id:"21-\u901a\u8fc7linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4"},"2.1 \u901a\u8fc7Linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4"),(0,l.kt)("p",null,"\u901a\u8fc7linkis-cli\u7684\u65b9\u5f0f\u63d0\u4ea4\u4efb\u52a1\uff0c\u9700\u8981\u6307\u5b9a\u5bf9\u5e94\u7684EngineConn\u548cCodeType\u6807\u7b7e\u7c7b\u578b\uff0cpipeline\u7684\u4f7f\u7528\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u610f ",(0,l.kt)("inlineCode",{parentName:"li"},"engineType pipeline-1")," \u5f15\u64ce\u7248\u672c\u8bbe\u7f6e\u662f\u6709\u524d\u7f00\u7684  \u5982 ",(0,l.kt)("inlineCode",{parentName:"li"},"pipeline")," \u7248\u672c\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"v1")," \u5219\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"pipeline-1"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'sh bin/linkis-cli -submitUser  hadoop  -engineType pipeline-1  -codeType pipeline  -code "from hdfs:///000/000/000/A.dolphin  to file:///000/000/000/B.csv"\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"from hdfs:///000/000/000/A.dolphin  to file:///000/000/000/B.csv")," \u8be5\u5185\u5bb9 2.3 \u6709\u89e3\u91ca"),(0,l.kt)("p",null,"\u5177\u4f53\u4f7f\u7528\u53ef\u4ee5\u53c2\u8003\uff1a ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.2.0/user-guide/linkiscli-manual"},"Linkis CLI Manual"),"."),(0,l.kt)("h3",{id:"22-\u901a\u8fc7-scriptis-\u4f7f\u7528"},"2.2 \u901a\u8fc7 Scriptis \u4f7f\u7528"),(0,l.kt)("p",null,"\u5de5\u4f5c\u7a7a\u95f4\u6a21\u5757\u53f3\u952e\u9009\u62e9\u65b0\u5efa\u4e00\u4e2a\u7c7b\u578b\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"storage"),"\u7684\u811a\u672c"),(0,l.kt)("p",null,(0,l.kt)("img",{src:t(29401).Z,width:"808",height:"837"})),(0,l.kt)("h4",{id:"221-\u7f16\u5199\u811a\u672c"},"2.2.1 \u7f16\u5199\u811a\u672c"),(0,l.kt)("h5",{id:"\u8bed\u6cd5\u4e3afrom-path-to-path"},"\u8bed\u6cd5\u4e3a\uff1afrom path to path"),(0,l.kt)("p",null,"\u6587\u4ef6\u62f7\u8d1d\u89c4\u5219\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"dolphin"),"\u540e\u7f00\u7c7b\u578b\u6587\u4ef6\u5c5e\u4e8e\u7ed3\u679c\u96c6\u6587\u4ef6\u53ef\u8f6c\u6362\u6210",(0,l.kt)("inlineCode",{parentName:"p"},".csv"),"\u7c7b\u578b\u53ca",(0,l.kt)("inlineCode",{parentName:"p"},".xlsx"),"\u7c7b\u578b\u6587\u4ef6,\u5176\u4ed6\u7c7b\u578b\u53ea\u80fd\u4eceA\u5730\u5740\u62f7\u8d1d\u5230B\u5730\u5740\uff0c\u7b80\u79f0\u642c\u8fd0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"#dolphin \u7c7b\u578b\nfrom hdfs:///000/000/000/A.dolphin to file:///000/000/000/B.csv\nfrom hdfs:///000/000/000/A.dolphin to file:///000/000/000/B.xlsx\n\n#\u5176\u4ed6\u7c7b\u578b\nfrom hdfs:///000/000/000/A.txt to file:///000/000/000/B.txt\n")),(0,l.kt)("p",null,"\u6587\u4ef6A\u5bfc\u51fa\u4e3a\u6587\u4ef6B"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"from hdfs:///000/000/000/A.csv to file:///000/000/000/B.csv\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"from path to path")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"hdfs:///000/000/000/A.csv"),"\uff1a \u8f93\u5165\u6587\u4ef6\u8def\u5f84\u53ca\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"file:///000/000/000/B.csv"),"\uff1a \u8f93\u51fa\u6587\u4ef6\u8def\u5f84\u53ca\u6587\u4ef6")),(0,l.kt)("p",null,"\u6587\u4ef6B\u5bfc\u51fa\u4e3a\u6587\u4ef6A"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"from hdfs:///000/000/000/B.csv to file:///000/000/000/A.CSV\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"hdfs:///000/000/000/B.csv"),"\uff1a \u8f93\u5165\u6587\u4ef6\u8def\u5f84\u53ca\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"file:///000/000/000/A.CSV"),"\uff1a \u8f93\u51fa\u6587\u4ef6\u8def\u5f84\u53ca\u6587\u4ef6")),(0,l.kt)("p",null,(0,l.kt)("img",{src:t(87667).Z,width:"1436",height:"395"})),(0,l.kt)("p",null,"\u6ce8\u610f\uff1a\u8bed\u6cd5\u672b\u7aef\u4e0d\u80fd\u5e26\u5206\u53f7(;),\u5426\u5219\u8bed\u6cd5\u9519\u8bef\u3002"),(0,l.kt)("h4",{id:"222-\u7ed3\u679c"},"2.2.2 \u7ed3\u679c"),(0,l.kt)("p",null,"\u8fdb\u5ea6 "),(0,l.kt)("p",null,(0,l.kt)("img",{src:t(2852).Z,width:"1672",height:"269"})),(0,l.kt)("p",null,"\u5386\u53f2\u8bb0\u5f55"),(0,l.kt)("p",null,(0,l.kt)("img",{src:t(77650).Z,width:"1754",height:"173"})))}d.isMDXComponent=!0},77650:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/historical_information-d99bbfb4230732cea0dbb96a34ac990a.png"},2852:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/job_state-fb7240b087736c48def704b2a683b873.png"},29401:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/new_pipeline_script-3a37e4c0883855702a289b87ded7cd90.png"},87667:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/to_write-6b49f070a804d94e1882f6d11c41508c.png"}}]);