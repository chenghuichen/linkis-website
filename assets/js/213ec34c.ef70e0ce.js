"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[84404],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=o.createContext({}),l=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(d.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(n),h=i,p=c["".concat(d,".").concat(h)]||c[h]||f[h]||a;return n?o.createElement(p,r(r({ref:t},u),{},{components:n})):o.createElement(p,r({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=h;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[c]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},39883:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(87462),i=(n(67294),n(3905));const a={title:"Use of UDFs",sidebar_position:2},r=void 0,s={unversionedId:"user-guide/udf",id:"version-1.1.2/user-guide/udf",title:"Use of UDFs",description:"1 Introduction to UDFs",source:"@site/versioned_docs/version-1.1.2/user-guide/udf.md",sourceDirName:"user-guide",slug:"/user-guide/udf",permalink:"/docs/1.1.2/user-guide/udf",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.1.2/user-guide/udf.md",tags:[],version:"1.1.2",sidebarPosition:2,frontMatter:{title:"Use of UDFs",sidebar_position:2},sidebar:"version-1.1.2/tutorialSidebar",previous:{title:"JAVA SDK Manual",permalink:"/docs/1.1.2/user-guide/sdk-manual"},next:{title:"Linkis-Cli Manual",permalink:"/docs/1.1.2/user-guide/linkiscli-manual"}},d={},l=[{value:"1 Introduction to UDFs",id:"1-introduction-to-udfs",level:2},{value:"2 UDF additions, deletions and modifications",id:"2-udf-additions-deletions-and-modifications",level:2},{value:"2.1 UDF added",id:"21-udf-added",level:3},{value:"2.2 UDF modification",id:"22-udf-modification",level:3},{value:"2.3 UDF deletion",id:"23-udf-deletion",level:3},{value:"3 UDF usage",id:"3-udf-usage",level:2},{value:"4 UDF sharing",id:"4-udf-sharing",level:2},{value:"5 Introduction of other functions",id:"5-introduction-of-other-functions",level:2},{value:"5.1 UDF handover",id:"51-udf-handover",level:3},{value:"5.2 UDF Expiration",id:"52-udf-expiration",level:3},{value:"5.3 UDF version list",id:"53-udf-version-list",level:3}],u={toc:l},c="wrapper";function f(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-introduction-to-udfs"},"1 Introduction to UDFs"),(0,i.kt)("p",null,"UDF: User Defined Function, user-defined function. In some scenarios, we need to use hive functions to process some data, such as count(), sum() functions are built-in. If we want to use some functions that do not come with them, we need to customize the function functions, which can be done by writing UDF."),(0,i.kt)("p",null,"The way to implement a UDF is relatively simple: just inherit the UDF class and override the evaluate method."),(0,i.kt)("p",null,"public class HelloUDF extends UDF{"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'    public String evaluate(String str){\n            try {\n                    return "Hello " + str;\n            } catch (Exception e) {\n                    // TODO: handle exception\n                    e.printStackTrace();\n                    return "ERROR";\n            }\n    }\n')),(0,i.kt)("p",null,"Several types of UDF"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"UDF function")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Requires registration to use")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Universal type of UDF function: refers to the UDF function that can be used by both Hive's hql and Spark's sql, generally compiled into a jar package"),(0,i.kt)("li",{parentName:"ul"},"Spark-type UDF function: Spark-specific UDF, you need to create the corresponding scala/python script first, and register it through scala or python function. After registration, it can also be used in sql")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Custom Function"),"\nPythonUDF and ScalaUDF can only be used in Spark engine"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"python custom function, based on functions written in python"),(0,i.kt)("li",{parentName:"ul"},"scala custom functions, functions written based on scala")),(0,i.kt)("h2",{id:"2-udf-additions-deletions-and-modifications"},"2 UDF additions, deletions and modifications"),(0,i.kt)("p",null,"Click on the linkis management console: Home >> UDF Management\n",(0,i.kt)("img",{src:n(18214).Z,width:"1268",height:"575"})),(0,i.kt)("p",null,'There are two columns "UDF management" and "function management" in the entry, among which the function management column is a general method function, such as python and scala functions, which can be used like ordinary functions in the script without registration, UDF needs It can only be used after registration.\n',(0,i.kt)("img",{src:n(33011).Z,width:"1266",height:"573"})),(0,i.kt)("h3",{id:"21-udf-added"},"2.1 UDF added"),(0,i.kt)("p",null,"Added generic UDF functions:"),(0,i.kt)("p",null,"You need to compile the corresponding Jar package and upload it to the corresponding user's workspace (if you use the dss family bucket, you can upload it through scriptis, if you use linkis alone, you need to manually upload it to the corresponding directory)"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(49735).Z,width:"468",height:"384"})),(0,i.kt)("p",null,'Click the Add UDF button, there are two types of UDFs that can be added, select the "general" type and register through the jar package. The registration format needs to write the fully qualified class name of the UDF implementation class.'),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(33061).Z,width:"468",height:"384"})),(0,i.kt)("p",null,"Added Spark-type UDF functions:"),(0,i.kt)("p",null,'If you select the "spark" type, select the defined scala or python function to register, and you can also use it in sql after registration, similar to: select hello("abc").'),(0,i.kt)("p",null,"It should be noted that after adding udf, the corresponding jar package or script content will be uploaded to bml storage. If the locally modified resource needs to be updated to take effect."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(42739).Z,width:"468",height:"384"})),(0,i.kt)("h3",{id:"22-udf-modification"},"2.2 UDF modification"),(0,i.kt)("p",null,"Click the edit button corresponding to the udf."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(72423).Z,width:"1253",height:"566"})),(0,i.kt)("p",null,"If you need to update the content of the udf, you need to edit the udf and upload it again, and generate a new version of the udf. If the content of the script has not changed, but only modified other content such as: using the format, only the information will be updated, and a new version will not be generated."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(16609).Z,width:"1253",height:"566"})),(0,i.kt)("h3",{id:"23-udf-deletion"},"2.3 UDF deletion"),(0,i.kt)("p",null,"Click the delete button of the corresponding udf, note: all versions of the udf will be deleted."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(38543).Z,width:"1257",height:"557"})),(0,i.kt)("h2",{id:"3-udf-usage"},"3 UDF usage"),(0,i.kt)("p",null,'If you want to make the UDF you created valid for use in the program, you need to load the UDF. The entrance of "load"/"unload" is: enter the UDF function on the left side of scriptis -> personal function, the created UDF is in the personal function list.'),(0,i.kt)("p",null,"Note 1: When adding a UDF, if it is not automatically unchecked on the page, it will be loaded by default."),(0,i.kt)("p",null,"Note 2: For the operation of loading/unloading udf, you need to kill the corresponding engine to start a new engine, and the operation will take effect"),(0,i.kt)("p",null,"Introduction to the non-personal functions in the list:"),(0,i.kt)("p",null,"BDAP function: functions created by bdap for users, such as desensitization functions. Note: The bdap function needs to be actively loaded before it can be used."),(0,i.kt)("p",null,"System function: The default built-in function of the system can be used in the code without the user's own loading."),(0,i.kt)("p",null,"Shared function: a function shared with you by others, you need to load it to use"),(0,i.kt)("p",null,"Expiration function: It is also a shared function, but the sharer marks it as expired, which does not affect the use for the time being"),(0,i.kt)("h2",{id:"4-udf-sharing"},"4 UDF sharing"),(0,i.kt)("p",null,"Prerequisite: The sharing function needs to be used by the user as an administrator, otherwise the front-end page will not provide an operation entry."),(0,i.kt)("p",null,"Click the share button of udf: the content box will pop up, enter the list of users you want to share (comma separated)."),(0,i.kt)("p",null,"Note: After sharing to others, others need to actively load the UDF before using it."),(0,i.kt)("p",null,'After sharing, the shared user can find it in "Shared Function", check the load and use it.'),(0,i.kt)("h2",{id:"5-introduction-of-other-functions"},"5 Introduction of other functions"),(0,i.kt)("h3",{id:"51-udf-handover"},"5.1 UDF handover"),(0,i.kt)("p",null,"For example, when the user leaves the company, it may be necessary to hand over personal udf to others. Click the Handover button, select your handover object, and click OK."),(0,i.kt)("h3",{id:"52-udf-expiration"},"5.2 UDF Expiration"),(0,i.kt)("p",null,"For a UDF shared to others, if it has been loaded by the sharing user, the udf cannot be deleted directly, but the udf can only be marked as expired. For the time being, it is only used for marking and does not affect use."),(0,i.kt)("h3",{id:"53-udf-version-list"},"5.3 UDF version list"),(0,i.kt)("p",null,'Click the "version list" button of a udf to view all versions of the udf. The following features are provided for each version:'),(0,i.kt)("p",null,"Create a new version: Copy the corresponding version to the latest version."),(0,i.kt)("p",null,"Download: Download the udf file from bml to the local."),(0,i.kt)("p",null,"View the source code: For the python/scala script type, you can directly view the source code, but the jar type is not supported."),(0,i.kt)("p",null,"Publish: The shared udf can click to publish a certain version, so that the version will take effect for the shared user. Note: Shared users use the latest version of udf released, and individual users always use the latest version."))}f.isMDXComponent=!0},18214:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/udf_01-213afa51d799fb2b606d7cd8bcbf1da4.png"},33011:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/udf_02-c19ed2ebb926d5d33dd3444e22bbcee7.png"},33061:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/udf_03-c157bf8ac43579c02bd63d6ed4d8ea25.png"},42739:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/udf_04-c157bf8ac43579c02bd63d6ed4d8ea25.png"},72423:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/udf_05-f378f9cf353295a96cfe0e514863e224.png"},16609:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/udf_06-f378f9cf353295a96cfe0e514863e224.png"},38543:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/udf_07-d112e549ddce84db6fb70c9da6ed44fa.png"},49735:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/udf_09-51edbb1e326e617c3485db02a801aa2a.png"}}]);