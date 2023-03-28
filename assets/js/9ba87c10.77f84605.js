"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[13597],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||s;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[c]="string"==typeof e?e:r,o[1]=a;for(var d=2;d<s;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42050:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=n(87462),r=(n(67294),n(3905));const s={title:"Session Supports Redis Shared Storage",sidebar_position:8},o=void 0,a={unversionedId:"deployment/integrated/sso-with-redis",id:"version-1.3.1/deployment/integrated/sso-with-redis",title:"Session Supports Redis Shared Storage",description:"1.Background",source:"@site/versioned_docs/version-1.3.1/deployment/integrated/sso-with-redis.md",sourceDirName:"deployment/integrated",slug:"/deployment/integrated/sso-with-redis",permalink:"/docs/latest/deployment/integrated/sso-with-redis",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.3.1/deployment/integrated/sso-with-redis.md",tags:[],version:"1.3.1",sidebarPosition:8,frontMatter:{title:"Session Supports Redis Shared Storage",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Involve Knife4j",permalink:"/docs/latest/deployment/integrated/involve-knife4j"},next:{title:"How to Use",permalink:"/docs/latest/user-guide/how-to-use"}},l={},d=[{value:"1.Background",id:"1background",level:2},{value:"2.Implementation plan",id:"2implementation-plan",level:2},{value:"3.How to use",id:"3how-to-use",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1background"},"1.Background"),(0,r.kt)("p",null,"Because the original login session does not support distributed storage, for all requests from the same user, nginx needs to forward the requests to the same gateway instance to process the requests normally.\nThe common solution is to support it by configuring ip hash load balancing on the ingress nginx.\nHowever, in the ip hash method, if there is an expansion or contraction of the server, the hash values \u200b\u200bof all client ips need to be recalculated, which will result in session loss.\nSecondly, it is easy to cause data skew problems due to uneven node distribution.\nIn order to optimize the problems existing in the ip hash method, shared storage is implemented for the session in the login state."),(0,r.kt)("h2",{id:"2implementation-plan"},"2.Implementation plan"),(0,r.kt)("p",null,"Because session information is mainly identified by ticketId, and all external entrances are gateways, only the gateway module needs to be modified.\nFor the underlying shared storage, choose the mainstream in-memory database redis. For whether to start redis session storage, it supports configuration file control.\nThe key code change is ",(0,r.kt)("inlineCode",{parentName:"p"},"userTicketIdToLastAccessTime")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.linkis.server.security.SSOUtils"),"."),(0,r.kt)("p",null,"Request process:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"User request -> nginx -> linkis-gateway -> linkis backend service")),(0,r.kt)("h2",{id:"3how-to-use"},"3.How to use"),(0,r.kt)("p",null,"An available reids environment is required, and stand-alone redis and redis sentinel modes are supported."),(0,r.kt)("p",null,"After installing and deploying Linkis, modify the configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"${LINKIS_HOME}/conf/linkis.properties")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"#Open redis cache configuration\nlinkis.session.redis.cache.enabled=true\n\n\n#single vision\nlinkis.session.redis.host=127.0.0.1\nlinkis.session.redis.port=6379\nlinkis.session.redis.password=test123\n\n# sentinel mode\nlinkis.session.redis.sentinel.master=sentinel-master-name\nlinkis.session.redis.sentinel.nodes=127.0.0.1:6381,127.0.0.1:6381,127.0.0.1:6381\nlinkis.session.redis.password=test123\n\n")),(0,r.kt)("p",null,"Just enable the gateway normally. After starting redis, for multiple gateway examples, you can use the nginx default load balancing mode when configuring on the nginx side."))}u.isMDXComponent=!0}}]);