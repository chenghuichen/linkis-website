"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[57833],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),l=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),h=a,u=m["".concat(p,".").concat(h)]||m[h]||d[h]||o;return n?i.createElement(u,r(r({ref:t},c),{},{components:n})):i.createElement(u,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96262:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=n(87462),a=(n(67294),n(3905));const o={title:"Installation and deployment of tool scriptis",sidebar_position:10},r=void 0,s={unversionedId:"deployment/linkis-scriptis-install",id:"version-1.1.2/deployment/linkis-scriptis-install",title:"Installation and deployment of tool scriptis",description:"1. introduce",source:"@site/versioned_docs/version-1.1.2/deployment/linkis-scriptis-install.md",sourceDirName:"deployment",slug:"/deployment/linkis-scriptis-install",permalink:"/docs/1.1.2/deployment/linkis-scriptis-install",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.1.2/deployment/linkis-scriptis-install.md",tags:[],version:"1.1.2",sidebarPosition:10,frontMatter:{title:"Installation and deployment of tool scriptis",sidebar_position:10},sidebar:"version-1.1.2/tutorialSidebar",previous:{title:"Deploy Linkis without HDFS",permalink:"/docs/1.1.2/deployment/deploy-linkis-without-hdfs"},next:{title:"Overview",permalink:"/docs/1.1.2/user-guide/overview"}},p={},l=[{value:"1. introduce",id:"1-introduce",level:2}],c={toc:l};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-introduce"},"1. introduce"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"On linkis1.0 and DSS 1.1 After X, scriptpis can be deployed separately to integrate with linkis. Using the interactive analysis function of scriptis, you can write SQL, pyspark, hiveql and other scripts online on the web page, submit them to linkis for execution, and support UDF, functions, resource control, user-defined variables and other features. This article will introduce how to deploy the web component scriptis separately, and use linkis through such a web page as scriptis.")),(0,a.kt)("admonition",{title:"be careful",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Premise: the linkis service (back-end and management console services) has been successfully installed and can be used normally. See ","[rapid deployment of linkis]"," (deployment/quick-deploy) for the deployment process of linkis\nExample description:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"The address of the linkis gateway service is 127.0.0.1 and the port is 9001"),(0,a.kt)("li",{parentName:"ul"},"The management console nginx of linkis is deployed on port 8080 of 127.0.0.1\n:::")),(0,a.kt)("h2",{parentName:"admonition",id:"2-compilation-process"},"2. Compilation process"),(0,a.kt)("h3",{parentName:"admonition",id:"21-install-node-js"},"2.1 Install node js"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"     Set node JS download and install. Download address: http://nodejs.cn/download/ (it is recommended to use the latest stable version) this step is only required for the first use\n")),(0,a.kt)("h3",{parentName:"admonition",id:"21-install-learn"},"2.1 install learn"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"   #The computer opens the CMD terminal tool and enters the command for global installation\n   npm install lerna -g\n")),(0,a.kt)("p",{parentName:"admonition"},"Wait until the installation is completed. The installation of liarn only needs to be performed when it is used for the first time"),(0,a.kt)("h3",{parentName:"admonition",id:"22-get-scripts-code"},"2.2 Get scripts code"),(0,a.kt)("blockquote",{parentName:"admonition"},(0,a.kt)("p",{parentName:"blockquote"},"Scriptis is a pure front-end project, which is integrated into the DSS web code component as a component. We only need to compile the DSS web project with a separate scripts module")),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"#Before downloading the official version of DSS 1.1.0 through GIT and releasing it, it is recommended to use the dev-1.1.4 branch of this branch to compile the scripts component\ngit clone  -b dev-1.1.4 https://github.com/WeDataSphere/DataSphereStudio\n# Or download the zip package directly and unzip it\nhttps://codeload.github.com/WeDataSphere/DataSphereStudio/zip/refs/heads/dev-1.1.4\n\n#Enter web directory\ncd DataSphereStudio/web \n\n#Add dependency note: learn needs to be installed in lerna bootstrap instead of NPM install. This step needs to be performed only for the first time\nlerna bootstrap\n")),(0,a.kt)("h3",{parentName:"admonition",id:"23-local-operation-project"},"2.3 Local operation project"),(0,a.kt)("blockquote",{parentName:"admonition"},(0,a.kt)("p",{parentName:"blockquote"},"If you do not want to run the view locally, you can skip this step")),(0,a.kt)("h4",{parentName:"admonition",id:"231-configure-the-linkis-gateway-service-address-configuration"},"2.3.1 Configure the linkis gateway service address configuration"),(0,a.kt)("p",{parentName:"admonition"},"If the service is started locally, you need to configure the back-end linkis gateway service address in the code, which is in the ",(0,a.kt)("inlineCode",{parentName:"p"},". Under the web/packages/dss/ directory Env")," file,\nConfiguration is not required when packaging deployment"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"// Backend linkis gatway service address\nVUE_APP_HOST=http://127.0.0.1:9001\nVUE_APP_MN_CONFIG_PREFIX=http://127.0.0.1:9001/api/rest_j/v1\n")),(0,a.kt)("h4",{parentName:"admonition",id:"232-running-scripts-module"},"2.3.2 Running scripts module"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"cd DataSphereStudio/web \n# Run scripts component \nnpm run serve --module=scriptis\n")),(0,a.kt)("p",{parentName:"admonition"},"Open the browser and link",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080"),"(the default port for the local request is 8080) to access the application scripts, because it will request the remote linkis gatway service interface, which will have a cross domain problem. To solve the cross domain problem for the Chrome browser, please refer to ","[solve the chrome cross domain problem]","\uff08 ",(0,a.kt)("a",{parentName:"p",href:"https://www.jianshu.com/p/56b1e01e6b6a"},"https://www.jianshu.com/p/56b1e01e6b6a")," )"),(0,a.kt)("h2",{parentName:"admonition",id:"3-packaging--deployment-scriptis"},"3. Packaging ","&"," Deployment scriptis"),(0,a.kt)("h3",{parentName:"admonition",id:"31--pack"},"3.1  pack"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"#Specify scripts module\ncd DataSphereStudio/web \n\n#After the instruction is successfully executed, a folder named 'dist' will appear in the web directory, which is the component resource code of packaged scripts. We need to deploy this front-end resource to the nginx server where linkis web is located\nnpm run build --module=scriptis \n")),(0,a.kt)("h3",{parentName:"admonition",id:"32-deploy"},"3.2 deploy"),(0,a.kt)("p",{parentName:"admonition"},"Upload the static resources compiled in 3.1 to the server where the linkis management console is located, and store them in ",(0,a.kt)("inlineCode",{parentName:"p"},"/data/install/scripts-web/dist/"),",\nAdd the static resource access rules of scripts to the nginx server configuration for installing the linkis management console. The nginx configuration deployed by the linkis management console is generally located in ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/nginx/conf.d/linkis conf")),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0}," location /scriptis { \n     alias      /data/Install/scriptis-web/dist/ ;\n     index     index.html ;\n}\n")),(0,a.kt)("p",{parentName:"admonition"},"sudo vim ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/nginx/conf.d/linkis.conf")),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"server {\n            listen       8080;# Access port\n            server_name  localhost;\n            #charset koi8-r;\n            #access_log  /var/log/nginx/host.access.log  main;\n\n            location / {\n             root    /appcom/Install/linkis-web/dist/; # Static file directory\n             index   index.html;\n            }\n\n           location /scriptis {  #The resources of scripts are prefixed with scripts to distinguish them from the linkis management console\n             alias        /data/Install/scriptis-web/dist/  ;  #Nginx scripts static file storage path (customizable)\n             index     index.html ;\n            }\n\n        .......\n\nlocation /api {\n            proxy_pass http://127.0.0.1:9001; #Address of gatway\n            proxy_set_header Host $host;\n            proxy_set_header X-Real-IP $remote_addr;\n            proxy_set_header x_real_ipP $remote_addr;\n            proxy_set_header remote_addr $remote_addr;\n            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n            proxy_http_version 1.1;\n            proxy_connect_timeout 4s;\n            proxy_read_timeout 600s;\n            proxy_send_timeout 12s;\n            proxy_set_header Upgrade $http_upgrade;\n            proxy_set_header Connection upgrade;\n            }\n\n            #error_page  404              /404.html;\n            # redirect server error pages to the static page /50x.html\n            #\n            error_page   500 502 503 504  /50x.html;\n            location = /50x.html {\n            root   /usr/share/nginx/html;\n            }\n        }\n\n")),(0,a.kt)("p",{parentName:"admonition"},"After modifying the configuration, reload the nginx configuration"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"sudo nginx -s reload\n")),(0,a.kt)("p",{parentName:"admonition"},"Note the difference between root and alias in nginx"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"The result of root processing is: root path + location path"),(0,a.kt)("li",{parentName:"ul"},"The result of alias processing is to replace the location path with the alias path"),(0,a.kt)("li",{parentName:"ul"},"Alias is the definition of a directory alias, and root is the definition of the top-level directory")),(0,a.kt)("h2",{parentName:"admonition",id:"4-scriptis-use-steps"},"4. scriptis Use steps"),(0,a.kt)("h3",{parentName:"admonition",id:"41-log-in-to-the-linkis-management-console-normally"},"4.1 Log in to the linkis management console normally"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"#http://127.0.0.1:8080/#/\nhttp://nginxIp:port/#/\n")),(0,a.kt)("p",{parentName:"admonition"},"Because scripts requires login verification, you need to log in first to get the cookie."),(0,a.kt)("h3",{parentName:"admonition",id:"42-visit-the-scripts-page-after-successful-login"},"4.2 Visit the scripts page after successful login"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"#http://127.0.0.1:8080/scriptis/\nhttp://nginxIp:port/scriptis/\n")),(0,a.kt)("p",{parentName:"admonition"},"Nginxip:nginx server IP, port:linkis management console nginx configuration start port number, ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts")," is the location address configured for the static file nginx of the requested scripts project (customizable)"),(0,a.kt)("h3",{parentName:"admonition",id:"43-use-scriptis"},"4.3 use scriptis"),(0,a.kt)("p",{parentName:"admonition"},"Take creating an SQL query task as an example."),(0,a.kt)("p",{parentName:"admonition"},"step1 New script"),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("img",{alt:"design sketch",src:n(12674).Z,width:"1915",height:"694"})),(0,a.kt)("p",{parentName:"admonition"},"step2 Enter the statement to query"),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("img",{alt:"design sketch",src:n(21989).Z,width:"1918",height:"604"})),(0,a.kt)("p",{parentName:"admonition"},"step3 function"),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("img",{alt:"design sketch",src:n(42968).Z,width:"1716",height:"317"})),(0,a.kt)("p",{parentName:"admonition"},"shep4 View results"),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("img",{alt:"design sketch",src:n(49015).Z,width:"1920",height:"812"}))))}d.isMDXComponent=!0},49015:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/design_sketch-5a7e1807d1f587129e33b863c1da1418.png"},12674:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/new_script-f73ee84fe932d7d4cc43c40408405722.png"},42968:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/running_results-b181b4b3a60bc22c7a1bfc72356b165b.png"},21989:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/test_statement-0ed452eb88b6c3f9a9bb89fe06901c3b.png"}}]);