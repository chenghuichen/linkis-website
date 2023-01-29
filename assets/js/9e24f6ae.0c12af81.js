"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[73504],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(t),g=a,k=c["".concat(s,".").concat(g)]||c[g]||u[g]||l;return t?i.createElement(k,r(r({ref:n},d),{},{components:t})):i.createElement(k,r({ref:n},d))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var p=2;p<l;p++)r[p]=t[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},60715:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var i=t(87462),a=(t(67294),t(3905));const l={title:"Presto Engine",sidebar_position:11},r=void 0,o={unversionedId:"engine-usage/presto",id:"engine-usage/presto",title:"Presto Engine",description:"This article mainly introduces the installation, usage and configuration of the Presto engine plugin in Linkis .",source:"@site/docs/engine-usage/presto.md",sourceDirName:"engine-usage",slug:"/engine-usage/presto",permalink:"/docs/1.3.2/engine-usage/presto",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/docs/engine-usage/presto.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Presto Engine",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"ElasticSearch Engine",permalink:"/docs/1.3.2/engine-usage/elasticsearch"},next:{title:"Trino Engine",permalink:"/docs/1.3.2/engine-usage/trino"}},s={},p=[{value:"1. Preliminary work",id:"1-preliminary-work",level:2},{value:"1.1 Engine installation",id:"11-engine-installation",level:3},{value:"1.2 Service Authentication",id:"12-service-authentication",level:3},{value:"2. Engine plugin deployment",id:"2-engine-plugin-deployment",level:2},{value:"2.1 Engine plugin preparation (choose one) non-default engine",id:"21-engine-plugin-preparation-choose-one-non-default-engine",level:3},{value:"2.2 Upload and load engine plugins",id:"22-upload-and-load-engine-plugins",level:3},{value:"2.3 Engine refresh",id:"23-engine-refresh",level:3},{value:"2.3.1 Restart and refresh",id:"231-restart-and-refresh",level:4},{value:"2.3.2 Check if the engine is refreshed successfully",id:"232-check-if-the-engine-is-refreshed-successfully",level:3},{value:"3 The use of the engine",id:"3-the-use-of-the-engine",level:2},{value:"3.1 Submit tasks through <code>Linkis-cli</code>",id:"31-submit-tasks-through-linkis-cli",level:3},{value:"4.1 Default Configuration Description",id:"41-default-configuration-description",level:3},{value:"4.2 Configuration modification",id:"42-configuration-modification",level:3},{value:"4.2.1 Management console configuration",id:"421-management-console-configuration",level:4},{value:"4.2.2 Task interface configuration",id:"422-task-interface-configuration",level:4},{value:"4.2.3 File Configuration",id:"423-file-configuration",level:4},{value:"4.3 Engine related data sheet",id:"43-engine-related-data-sheet",level:3}],d={toc:p};function u(e){let{components:n,...l}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This article mainly introduces the installation, usage and configuration of the Presto engine plugin in ",(0,a.kt)("inlineCode",{parentName:"p"},"Linkis")," ."),(0,a.kt)("h2",{id:"1-preliminary-work"},"1. Preliminary work"),(0,a.kt)("h3",{id:"11-engine-installation"},"1.1 Engine installation"),(0,a.kt)("p",null,"If you want to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Presto")," engine on your ",(0,a.kt)("inlineCode",{parentName:"p"},"Linkis")," service, you need to install the ",(0,a.kt)("inlineCode",{parentName:"p"},"Presto")," service and make sure the service is available."),(0,a.kt)("h3",{id:"12-service-authentication"},"1.2 Service Authentication"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# prepare presto-cli\nwget https://repo1.maven.org/maven2/com/facebook/presto/presto-cli/0.234/presto-cli-0.234-executable.jar\nmv presto-cli-0.234-executable.jar presto-cli\nchmod + x presto-cli\n\n# execute task\n./presto-cli --server localhost:8082 --execute \'show tables from system.jdbc\'\n\n# Get the following output to indicate that the service is available\n"attributes"\n"catalogs"\n"columns"\n"procedure_columns"\n"procedures"\n"pseudo_columns"\n"schemas"\n"super_tables"\n"super_types"\n"table_types"\n"tables"\n"types"\n"udts"\n')),(0,a.kt)("h2",{id:"2-engine-plugin-deployment"},"2. Engine plugin deployment"),(0,a.kt)("h3",{id:"21-engine-plugin-preparation-choose-one-non-default-engine"},"2.1 Engine plugin preparation (choose one) ",(0,a.kt)("a",{parentName:"h3",href:"/docs/1.3.2/engine-usage/overview"},"non-default engine")),(0,a.kt)("p",null,"Method 1: Download the engine plug-in package directly"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://linkis.apache.org/zh-CN/blog/2022/04/15/how-to-download-engineconn-plugin"},"Linkis Engine Plugin Download")),(0,a.kt)("p",null,"Method 2: Compile the engine plug-in separately (maven environment is required)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# compile\ncd ${linkis_code_dir}/linkis-engineconn-plugins/presto/\nmvn clean install\n# The compiled engine plug-in package is located in the following directory\n${linkis_code_dir}/linkis-engineconn-plugins/presto/target/out/\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/1.3.2/deployment/install-engineconn"},"EngineConnPlugin Engine Plugin Installation")),(0,a.kt)("h3",{id:"22-upload-and-load-engine-plugins"},"2.2 Upload and load engine plugins"),(0,a.kt)("p",null,"Upload the engine package in 2.1 to the engine directory of the server"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"${LINKIS_HOME}/lib/linkis-engineplugins\n")),(0,a.kt)("p",null,"The directory structure after uploading is as follows"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"linkis-engineconn-plugins/\n\u251c\u2500\u2500 soon\n\u2502   \u251c\u2500\u2500 dist\n\u2502 \u2502 \u2514\u2500\u2500 v0.234\n\u2502   \u2502       \u251c\u2500\u2500 conf\n\u2502 \u2502 \u2514\u2500\u2500 lib\n\u2502   \u2514\u2500\u2500 plugin\n\u2502 \u2514\u2500\u2500 0.234\n")),(0,a.kt)("h3",{id:"23-engine-refresh"},"2.3 Engine refresh"),(0,a.kt)("h4",{id:"231-restart-and-refresh"},"2.3.1 Restart and refresh"),(0,a.kt)("p",null,"Refresh the engine by restarting the ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis-cg-linkismanager")," service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd ${LINKIS_HOME}/sbin\nsh linkis-daemon.sh restart cg-linkismanager\n")),(0,a.kt)("h3",{id:"232-check-if-the-engine-is-refreshed-successfully"},"2.3.2 Check if the engine is refreshed successfully"),(0,a.kt)("p",null,"You can check whether the ",(0,a.kt)("inlineCode",{parentName:"p"},"last_update_time")," of the ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis_engine_conn_plugin_bml_resources")," table in the database is the time to trigger the refresh."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"#Login to the `linkis` database\nselect * from linkis_cg_engine_conn_plugin_bml_resources;\n")),(0,a.kt)("h2",{id:"3-the-use-of-the-engine"},"3 The use of the engine"),(0,a.kt)("h3",{id:"31-submit-tasks-through-linkis-cli"},"3.1 Submit tasks through ",(0,a.kt)("inlineCode",{parentName:"h3"},"Linkis-cli")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"}," sh ./bin/linkis-cli -engineType presto-0.234 \\\n -codeType psql -code 'show tables;' \\\n -submitUser hadoop -proxyUser hadoop\n")),(0,a.kt)("p",null,"If the management console, task interface, and configuration file are not configured (see 4.2 for the configuration method), they can be configured through the ",(0,a.kt)("inlineCode",{parentName:"p"},"-runtimeMap")," attribute in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Linkis-cli")," client"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sh ./bin/linkis-cli -engineType presto-0.234 \\\n-codeType  tsql -code 'show tables;'  \\\n-runtimeMap wds.linkis.presto.url=http://127.0.0.1:8080 \\\n-runtimeMap wds.linkis.presto.catalog=hive \\\n-runtimeMap wds.linkis.presto.schema=default \\\n-runtimeMap wds.linkis.presto.catalog=hive \\\n-submitUser hadoop -proxyUser hadoop\n")),(0,a.kt)("p",null,"More ",(0,a.kt)("inlineCode",{parentName:"p"},"Linkis-Cli")," command parameter reference: ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.3.2/user-guide/linkiscli-manual"},"Linkis-Cli usage")),(0,a.kt)("p",null,"INSERT INTO ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis_ps_configuration_config_key")," (",(0,a.kt)("inlineCode",{parentName:"p"},"key"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"description"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"default_value"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"validate_type"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"validate_range"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"engine_conn_type"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"is_hidden"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"is_advanced"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"level"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"treeName"),") VALUES ('wds.linkis.presto.url', 'Presto \u96c6\u7fa4\u8fde\u63a5', 'presto\u8fde\u63a5\u5730\u5740', '",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:8080'"},"http://127.0.0.1:8080'"),", 'None', NULL, @PRESTO_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis_ps_configuration_config_key")," (",(0,a.kt)("inlineCode",{parentName:"p"},"key"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"description"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"default_value"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"validate_type"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"validate_range"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"engine_conn_type"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"is_hidden"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"is_advanced"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"level"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"treeName"),") VALUES ('wds.linkis.presto.catalog', '\u67e5\u8be2\u7684 Catalog ', 'presto\u8fde\u63a5\u7684catalog', 'hive', 'None', NULL, @PRESTO_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis_ps_configuration_config_key")," (",(0,a.kt)("inlineCode",{parentName:"p"},"key"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"description"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"default_value"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"validate_type"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"validate_range"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"engine_conn_type"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"is_hidden"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"is_advanced"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"level"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"treeName"),") VALUES ('wds.linkis.presto.schema', '\u67e5\u8be2\u7684 Schema ', '\u6570\u636e\u5e93\u8fde\u63a5schema', '', 'None', NULL, @PRESTO_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis_ps_configuration_config_key")," (",(0,a.kt)("inlineCode",{parentName:"p"},"key"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"description"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"default_value"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"validate_type"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"validate_range"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"engine_conn_type"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"is_hidden"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"is_advanced"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"level"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"treeName"),") VALUES ('wds.linkis.presto.source', '\u67e5\u8be2\u4f7f\u7528\u7684 source ', '\u6570\u636e\u5e93\u8fde\u63a5source', '', 'None', NULL, @PRESTO_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');"),(0,a.kt)("h3",{id:"41-default-configuration-description"},"4.1 Default Configuration Description"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Configuration"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wds.linkis.presto.url"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"http://127.0.0.1:8080"},"http://127.0.0.1:8080")),(0,a.kt)("td",{parentName:"tr",align:null},"Presto Cluster Connection"),(0,a.kt)("td",{parentName:"tr",align:null},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wds.linkis.presto.username"),(0,a.kt)("td",{parentName:"tr",align:null},"default"),(0,a.kt)("td",{parentName:"tr",align:null},"Presto cluster username"),(0,a.kt)("td",{parentName:"tr",align:null},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wds.linkis.presto.password"),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},"Presto cluster password"),(0,a.kt)("td",{parentName:"tr",align:null},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wds.linkis.presto.catalog"),(0,a.kt)("td",{parentName:"tr",align:null},"system"),(0,a.kt)("td",{parentName:"tr",align:null},"Query Catalog"),(0,a.kt)("td",{parentName:"tr",align:null},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wds.linkis.presto.schema"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"Schema to query"),(0,a.kt)("td",{parentName:"tr",align:null},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wds.linkis.presto.source"),(0,a.kt)("td",{parentName:"tr",align:null},"global"),(0,a.kt)("td",{parentName:"tr",align:null},"source used for query"),(0,a.kt)("td",{parentName:"tr",align:null},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"presto.session.query_max_total_memory"),(0,a.kt)("td",{parentName:"tr",align:null},"8GB"),(0,a.kt)("td",{parentName:"tr",align:null},"query uses maximum memory"),(0,a.kt)("td",{parentName:"tr",align:null},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wds.linkis.presto.http.connectTimeout"),(0,a.kt)("td",{parentName:"tr",align:null},"60"),(0,a.kt)("td",{parentName:"tr",align:null},"Presto client connect timeout (unit: second)"),(0,a.kt)("td",{parentName:"tr",align:null},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wds.linkis.presto.http.readTimeout"),(0,a.kt)("td",{parentName:"tr",align:null},"60"),(0,a.kt)("td",{parentName:"tr",align:null},"Presto client read timeout (unit: seconds)"),(0,a.kt)("td",{parentName:"tr",align:null},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wds.linkis.engineconn.concurrent.limit"),(0,a.kt)("td",{parentName:"tr",align:null},"100"),(0,a.kt)("td",{parentName:"tr",align:null},"The maximum number of concurrent Presto engines"),(0,a.kt)("td",{parentName:"tr",align:null},"false")))),(0,a.kt)("h3",{id:"42-configuration-modification"},"4.2 Configuration modification"),(0,a.kt)("p",null,"If the default parameters are not satisfied, there are the following ways to configure some basic parameters"),(0,a.kt)("h4",{id:"421-management-console-configuration"},"4.2.1 Management console configuration"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(22880).Z,width:"1257",height:"571"})),(0,a.kt)("p",null,"Note: After modifying the configuration under the ",(0,a.kt)("inlineCode",{parentName:"p"},"IDE")," tag, you need to specify ",(0,a.kt)("inlineCode",{parentName:"p"},"-creator IDE")," to take effect (other tags are similar), such as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sh ./bin/linkis-cli -creator IDE \\\n-engineType presto-0.234 -codeType tsql \\\n-code 'show tables;' \\\n-submitUser hadoop -proxyUser hadoop\n")),(0,a.kt)("h4",{id:"422-task-interface-configuration"},"4.2.2 Task interface configuration"),(0,a.kt)("p",null,"Submit the task interface, configure it through the parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"params.configuration.runtime")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'Example of http request parameters\n{\n    "executionContent": {"code": "show teblas;", "runType":  "psql"},\n    "params": {\n                    "variable": {},\n                    "configuration": {\n                            "runtime": {\n                                "wds.linkis.presto.url":"http://127.0.0.1:9090",\n                                "wds.linkis.presto.catalog ":"hive",\n                                "wds.linkis.presto.schema ":"default",\n                                "wds.linkis.presto.source ":""\n                                }\n                            }\n                    },\n    "source":  {"scriptPath": "file:///mnt/bdp/hadoop/1.sql"},\n    "labels": {\n        "engineType": "presto-0.234",\n        "userCreator": "hadoop-IDE"\n    }\n}\n')),(0,a.kt)("h4",{id:"423-file-configuration"},"4.2.3 File Configuration"),(0,a.kt)("p",null,"Configure by modifying the ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis-engineconn.properties")," file in the directory ",(0,a.kt)("inlineCode",{parentName:"p"},"install path/lib/linkis-engineconn-plugins/presto/dist/v0.234/conf/"),", as shown below:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(25465).Z,width:"1583",height:"622"})),(0,a.kt)("h3",{id:"43-engine-related-data-sheet"},"4.3 Engine related data sheet"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Linkis")," is managed through the engine tag, and the data table information involved is shown below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"linkis_ps_configuration_config_key: key and default values \u200b\u200bof configuration parameters inserted into the engine\nlinkis_cg_manager_label: Insert engine label such as: presto-0.234\nlinkis_ps_configuration_category: The directory association relationship of the insertion engine\nlinkis_ps_configuration_config_value: Insert the configuration that the engine needs to display\nlinkis_ps_configuration_key_engine_relation: The relationship between the configuration item and the engine\n")),(0,a.kt)("p",null,"The initial data related to the engine in the table is as follows"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- set variable\nSET @PRESTO_LABEL=\"presto-0.234\";\nSET @PRESTO_ALL=CONCAT('*-*,',@PRESTO_LABEL);\nSET @PRESTO_IDE=CONCAT('*-IDE,',@PRESTO_LABEL);\nSET @PRESTO_NAME=\"presto\";\n\n-- engine label\ninsert into `linkis_cg_manager_label` (`label_key`, `label_value`, `label_feature`, `label_value_size`, `update_time`, `create_time`) VALUES ('combined_userCreator_engineType',@PRESTO_ALL, 'OPTIONAL', 2, now(), now());\ninsert into `linkis_cg_manager_label` (`label_key`, `label_value`, `label_feature`, `label_value_size`, `update_time`, `create_time`) VALUES ('combined_userCreator_engineType',@PRESTO_IDE, 'OPTIONAL', 2, now(), now());\n\nselect @label_id := id from `linkis_cg_manager_label` where `label_value` = @PRESTO_IDE;\ninsert into `linkis_ps_configuration_category` (`label_id`, `level`) VALUES (@label_id, 2);\n\n-- configuration key\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('wds.linkis.presto.url', 'Presto cluster connection', 'presto connection address', 'http://127.0.0.1:8080', 'None', NULL, @PRESTO_NAME, 0, 0, 1 , 'data source conf');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('wds.linkis.presto.catalog', 'Query's Catalog', 'presto-connected catalog', 'hive', 'None', NULL, @PRESTO_NAME, 0, 0, 1, 'Datasource configuration') ;\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('wds.linkis.presto.schema', 'Query Schema', 'Database connection schema', '', 'None', NULL, @PRESTO_NAME, 0, 0, 1, 'data source conf');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('wds.linkis.presto.source', 'source for query', 'database connection source', '', 'None', NULL, @PRESTO_NAME, 0, 0, 1, 'data source conf');\n\n-- key engine relation\ninsert into `linkis_ps_configuration_key_engine_relation` (`config_key_id`, `engine_type_label_id`)\n(select config.id as `config_key_id`, label.id AS `engine_type_label_id` FROM linkis_ps_configuration_config_key config\nINNER JOIN linkis_cg_manager_label label ON config.engine_conn_type = @PRESTO_NAME and label_value = @PRESTO_ALL);\n\n-- engine default configuration\ninsert into `linkis_ps_configuration_config_value` (`config_key_id`, `config_value`, `config_label_id`)\n(select `relation`.`config_key_id` AS `config_key_id`, '' AS `config_value`, `relation`.`engine_type_label_id` AS `config_label_id` FROM linkis_ps_configuration_key_engine_relation relation\nINNER JOIN linkis_cg_manager_label label ON relation.engine_type_label_id = label.id AND label.label_value = @PRESTO_ALL);\n")))}u.isMDXComponent=!0},22880:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/presto-console-2b8db95be14da36ef82e0274de0be34d.png"},25465:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/presto-file-2850a37e5c3fbe2d3b8d244e0751be26.png"}}]);