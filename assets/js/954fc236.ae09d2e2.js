"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[70462],{3905:(e,n,i)=>{i.d(n,{Zo:()=>p,kt:()=>m});var t=i(67294);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function o(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function a(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?o(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function l(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=t.createContext({}),c=function(e){var n=t.useContext(s),i=n;return e&&(i="function"==typeof e?e(n):a(a({},n),e)),i},p=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var i=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(i),u=r,m=g["".concat(s,".").concat(u)]||g[u]||d[u]||o;return i?t.createElement(m,a(a({ref:n},p),{},{components:i})):t.createElement(m,a({ref:n},p))}));function m(e,n){var i=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[g]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=i[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,i)}u.displayName="MDXCreateElement"},39650:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=i(87462),r=(i(67294),i(3905));const o={title:"Install EngineConnPlugin Engine",sidebar_position:5},a=void 0,l={unversionedId:"deployment/engine-conn-plugin-installation",id:"version-0.11.0/deployment/engine-conn-plugin-installation",title:"Install EngineConnPlugin Engine",description:"This article mainly introduces the standalone Linkis engine plug-in, mainly from the aspects of compilation, installation, etc.",source:"@site/versioned_docs/version-0.11.0/deployment/engine-conn-plugin-installation.md",sourceDirName:"deployment",slug:"/deployment/engine-conn-plugin-installation",permalink:"/docs/0.11.0/deployment/engine-conn-plugin-installation",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-0.11.0/deployment/engine-conn-plugin-installation.md",tags:[],version:"0.11.0",sidebarPosition:5,frontMatter:{title:"Install EngineConnPlugin Engine",sidebar_position:5},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"Production Deployment Reference Guide",permalink:"/docs/0.11.0/deployment/production-deployment -guide"},next:{title:"Source Code Directory Structure",permalink:"/docs/0.11.0/deployment/sourcecode-hierarchical-structure"}},s={},c=[{value:"1 Compilation and packaging of engine plug-ins",id:"1-compilation-and-packaging-of-engine-plug-ins",level:2},{value:"2 Engine installation",id:"2-engine-installation",level:2},{value:"2.1 Plug-in package installation",id:"21-plug-in-package-installation",level:3},{value:"2.2 Management console configuration modification",id:"22-management-console-configuration-modification",level:3},{value:"2.3 Engine refresh",id:"23-engine-refresh",level:3}],p={toc:c},g="wrapper";function d(e){let{components:n,...i}=e;return(0,r.kt)(g,(0,t.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This article mainly introduces the standalone Linkis engine plug-in, mainly from the aspects of compilation, installation, etc.")),(0,r.kt)("h2",{id:"1-compilation-and-packaging-of-engine-plug-ins"},"1 Compilation and packaging of engine plug-ins"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","After linkis1.0, the engine is managed by the engine management service, and the engine plug-in supports real-time effect. In order to facilitate the engine management service to be loaded into the corresponding engine plug-in through tags, it needs to be packaged according to the following directory structure (hive is used as an example):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hive: engine home directory, must be the name of the engine\n    \u2514\u2500\u2500 dist # Dependency and configuration required for engine startup, different versions of the engine need to be in this directory to prevent the corresponding version directory\n      \u2514\u2500\u2500 v1.2.1 #Must start with v and add engine version number 1.2.1\n           \u2514\u2500\u2500 conf # Configuration file directory required by the engine\n           \u2514\u2500\u2500 lib # Dependency package required by engine plug-in\n    \u2514\u2500\u2500 plugin #Engine plug-in directory, this directory is used for the startup command and resource application of the engine management service package engine\n      \u2514\u2500\u2500 1.2.1 # Engine version\n        \u2514\u2500\u2500 linkis-engineplugin-hive-1.0.0-RC1.jar #Engine module package (only need to place a separate engine package)\n")),(0,r.kt)("p",null,"If you are a new engine, you can refer to hive's assembly configuration method, source code directory: ",(0,r.kt)("inlineCode",{parentName:"p"},"linkis-engineconn-plugins/engineconn-plugins/hive/src/main/assembly/distribution.xml")),(0,r.kt)("h2",{id:"2-engine-installation"},"2 Engine installation"),(0,r.kt)("h3",{id:"21-plug-in-package-installation"},"2.1 Plug-in package installation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First, you need to confirm the home directory of the engine dist directory configuration: wds.linkis.engineconn.home (LinkisInstall/conf/linkis.properties), this parameter is used by the engine manager service to read the configuration and dependent directories required for engine startup , If the parameter (wds.linkis.engineconn.dist.load.enable=true) is set for the engine manager service, it will read the engine in this directory and store it in the material library."),(0,r.kt)("li",{parentName:"ol"},"In addition, you need to confirm the engine plug-in loading parameter: wds.linkis.engineconn.plugin.loader.store.path, this directory is the engine manager service for reflective reading of the engine module package."),(0,r.kt)("li",{parentName:"ol"},"If the two parameters wds.linkis.engineconn.home and wds.linkis.engineconn.plugin.loader.store.path are specified as the same directory, you can directly unzip the directory output by the engine to this directory, such as placing Go to the /appcom/Install/LinkisInstall/lib/linkis-engineconn-plugins directory:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/appcom/Install/LinkisInstall/lib/linkis-engineconn-plugins:\nhive\n dist\n plugin\nspark\n dist\n plugin\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"If the directory is not the same directory, you need to place the dist and plugin directories separately, as shown in the following example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"##dist Directory\n/appcom/Install/LinkisInstall/lib/linkis-engineconn-plugins/dist:\nhive\n dist\n \nspark\n dist\n \n##plugin directory\n/appcom/Install/LinkisInstall/lib/linkis-engineconn-plugins/dist:\nhive\n plugin\nspark\n plugin\n")),(0,r.kt)("h3",{id:"22-management-console-configuration-modification"},"2.2 Management console configuration modification"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Management console Configuration configuration modification (optional)")),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","After 1.0, the configuration of the management console is managed according to the engine label. If the new engine has configuration parameters, you need to insert the corresponding configuration parameters in the Configuration, and you need to insert the parameters in the three tables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"linkis_configuration_config_key: insert the key and default values \u200b\u200bof the configuration parameters of the engine\nlinkis-manager_label: Insert engine label such as hive-1.2.1\nlinkis_configuration_category: Insert the catalog relationship of the engine\nlinkis_configuration_config_value: Insert the configuration that the engine needs to display\n")),(0,r.kt)("p",null,"If it is an existing engine and a new version is added, you can modify the version of the corresponding engine in the linkis_configuration_dml.sql file for execution"),(0,r.kt)("h3",{id:"23-engine-refresh"},"2.3 Engine refresh"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The engine supports real-time refresh. After the engine is placed in the corresponding directory, Linkis1.0 provides a method to load the engine without shutting down the server. You can request it through the restful interface. The request interface is ",(0,r.kt)("a",{parentName:"li",href:"http://ip:port/api/rest_j/v1/rpc/receiveAndReply"},"http://ip:port/api/rest_j /v1/rpc/receiveAndReply"),', the request method is POST, and the request body is {"method":"/enginePlugin/engineConn/refreshAll"}.'),(0,r.kt)("li",{parentName:"ol"},"Restart to refresh: The engine catalog can be forced to refresh by restarting")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"### cd to the sbin directory, restart linkis-engineconn-plugin-server\n\ncd /Linkis1.0.0/sbin\n\n## Execute linkis-daemon script\n\nsh linkis-daemon.sh restart linkis-engine-plugin-server\n")))}d.isMDXComponent=!0}}]);