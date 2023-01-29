"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[60280],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var r=i.createContext({}),c=function(e){var n=i.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return i.createElement(r.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),g=a,m=u["".concat(r,".").concat(g)]||u[g]||p[g]||o;return t?i.createElement(m,l(l({ref:n},d),{},{components:t})):i.createElement(m,l({ref:n},d))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=u;var s={};for(var r in n)hasOwnProperty.call(n,r)&&(s[r]=n[r]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=t[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},27629:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=t(87462),a=(t(67294),t(3905));const o={title:"How To Quickly Implement A New Engine",sidebar_position:3},l=void 0,s={unversionedId:"development/new-engine-conn",id:"version-1.0.3/development/new-engine-conn",title:"How To Quickly Implement A New Engine",description:"1. Linkis new engine function code implementation",source:"@site/versioned_docs/version-1.0.3/development/new-engine-conn.md",sourceDirName:"development",slug:"/development/new-engine-conn",permalink:"/docs/1.0.3/development/new-engine-conn",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.0.3/development/new-engine-conn.md",tags:[],version:"1.0.3",sidebarPosition:3,frontMatter:{title:"How To Quickly Implement A New Engine",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Linkis Debug",permalink:"/docs/1.0.3/development/linkis-debug"},next:{title:"Linkis Console Compile",permalink:"/docs/1.0.3/development/web-build"}},r={},c=[{value:"1. Linkis new engine function code implementation",id:"1-linkis-new-engine-function-code-implementation",level:2},{value:"1.1 Create a new maven module and introduce the maven dependency of ECP",id:"11-create-a-new-maven-module-and-introduce-the-maven-dependency-of-ecp",level:3},{value:"1.2 Implement the main interface of ECP",id:"12-implement-the-main-interface-of-ecp",level:3},{value:"1.3 Implement the engine Executor executor logic",id:"13-implement-the-engine-executor-executor-logic",level:3},{value:"2. Take the JDBC engine as an example to explain the implementation steps of the new engine in detail",id:"2-take-the-jdbc-engine-as-an-example-to-explain-the-implementation-steps-of-the-new-engine-in-detail",level:2},{value:"2.1 Concurrency engine setting default startup user",id:"21-concurrency-engine-setting-default-startup-user",level:3},{value:"2.2 New engine type extension",id:"22-new-engine-type-extension",level:3},{value:"2.3 Version number settings in the JDBC engine tab",id:"23-version-number-settings-in-the-jdbc-engine-tab",level:3},{value:"2.4 Types of script files that are allowed to be opened by the script editor",id:"24-types-of-script-files-that-are-allowed-to-be-opened-by-the-script-editor",level:3},{value:"2.5 Configure JDBC script variable storage and parsing",id:"25-configure-jdbc-script-variable-storage-and-parsing",level:3},{value:"2.6 Add JDBC engine text prompts or icons to the Linkis administrator console interface engine manager",id:"26-add-jdbc-engine-text-prompts-or-icons-to-the-linkis-administrator-console-interface-engine-manager",level:3},{value:"2.7 Compile, package, install and deploy the JDBC engine",id:"27-compile-package-install-and-deploy-the-jdbc-engine",level:3},{value:"2.8 JDBC engine database configuration",id:"28-jdbc-engine-database-configuration",level:3},{value:"2.9 Added JDBC script type and icon information in DSS Scripts",id:"29-added-jdbc-script-type-and-icon-information-in-dss-scripts",level:3},{value:"2.9.1 scriptis.js",id:"291-scriptisjs",level:4},{value:"2.9.2 Script copy support",id:"292-script-copy-support",level:4},{value:"2.9.3 Logo and font color matching",id:"293-logo-and-font-color-matching",level:4},{value:"2.10 Workflow adaptation of DSS",id:"210-workflow-adaptation-of-dss",level:3},{value:"3. Chapter Summary",id:"3-chapter-summary",level:2}],d={toc:c};function p(e){let{components:n,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-linkis-new-engine-function-code-implementation"},"1. Linkis new engine function code implementation"),(0,a.kt)("p",null,"Implementing a new engine is actually implementing a new EngineConnPlugin (ECP) engine plugin. Specific steps are as follows:"),(0,a.kt)("h3",{id:"11-create-a-new-maven-module-and-introduce-the-maven-dependency-of-ecp"},"1.1 Create a new maven module and introduce the maven dependency of ECP"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"maven\u4f9d\u8d56",src:t(81736).Z,width:"1010",height:"270"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.linkis</groupId>\n    <artifactId>linkis-engineconn-plugin-core</artifactId>\n    <version>${linkis.version}</version>\n</dependency>\n\x3c!-- and some other required maven configurations --\x3e\n")),(0,a.kt)("h3",{id:"12-implement-the-main-interface-of-ecp"},"1.2 Implement the main interface of ECP"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"EngineConnPlugin\uff1a")," When starting EngineConn, first find the corresponding EngineConnPlugin class, and use this as the entry point to obtain the implementation of other core interfaces, which is the main interface that must be implemented.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"EngineConnFactory\uff1a")," Implementing the logic of how to start an engine connector and how to start an engine executor is an interface that must be implemented."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Implement the createEngineConn method: return an EngineConn object, where getEngine returns an object that encapsulates the connection information with the underlying engine, and also contains the Engine type information."),(0,a.kt)("li",{parentName:"ul"},"For engines that only support a single computing scenario, inherit SingleExecutorEngineConnFactory, implement createExecutor, and return the corresponding Executor."),(0,a.kt)("li",{parentName:"ul"},"For engines that support multi-computing scenarios, you need to inherit MultiExecutorEngineConnFactory and implement an ExecutorFactory for each computation type. EngineConnPlugin will obtain all ExecutorFactory through reflection, and return the corresponding Executor according to the actual situation."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"EngineConnResourceFactory\uff1a")," It is used to limit the resources required to start an engine. Before the engine starts, it will apply for resources from Linkis Manager based on this. Not required, GenericEngineResourceFactory can be used by default.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"EngineLaunchBuilder\uff1a")," It is used to encapsulate the necessary information that EngineConnManager can parse into startup commands. Not required, you can directly inherit JavaProcessEngineConnLaunchBuilder."))),(0,a.kt)("h3",{id:"13-implement-the-engine-executor-executor-logic"},"1.3 Implement the engine Executor executor logic"),(0,a.kt)("p",null,"Executor is an executor. As a real computing scene executor, it is an actual computing logic execution unit and an abstraction of various specific capabilities of the engine. It provides various services such as locking, accessing status, and obtaining logs. And according to the actual needs, Linkis provides the following derived Executor base classes by default. The class names and main functions are as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SensibleExecutor:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Executor has multiple states, allowing Executor to switch states"),(0,a.kt)("li",{parentName:"ul"},"After the Executor switches states, operations such as notifications are allowed"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"YarnExecutor:")," Refers to the Yarn type engine, which can obtain applicationId, applicationURL and queue."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ResourceExecutor:")," means that the engine has the ability to dynamically change resources, and provides the requestExpectedResource method, which is used to apply for a new resource from the RM every time you want to change the resource; and the resourceUpdate method, which is used each time the engine actually uses the resource When changes occur, report the resource situation to RM."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"AccessibleExecutor:")," is a very important Executor base class. If the user's Executor inherits this base class, it means that the Engine can be accessed. Here, it is necessary to distinguish between the state() of SensibleExecutor and the getEngineStatus() method of AccessibleExecutor: state() is used to obtain the engine status, and getEngineStatus() will obtain the Metric data of basic indicators such as the status, load, and concurrency of the engine."),(0,a.kt)("li",{parentName:"ul"},"At the same time, if AccessibleExecutor is inherited, the Engine process will be triggered to instantiate multiple EngineReceiver methods. EngineReceiver is used to process RPC requests from Entrance, EM and LinkisMaster, making the engine an accessible engine. If users have special RPC requirements, they can communicate with AccessibleExecutor by implementing the RPCService interface."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ExecutableExecutor:")," is a resident Executor base class. The resident Executor includes: Streaming application in the production center, steps specified to run in independent mode after being submitted to Schedulelis, business applications for business users, etc."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"StreamingExecutor:")," Streaming is a streaming application, inherited from ExecutableExecutor, and needs to have the ability to diagnose, do checkpoint, collect job information, and monitor alarms."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ComputationExecutor:")," is a commonly used interactive engine Executor, which handles interactive execution tasks and has interactive capabilities such as status query and task kill."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ConcurrentComputationExecutor:")," User concurrent engine Executor, commonly used in JDBC type engines. When executing scripts, the administrator account starts the engine instance, and all users share the engine instance.")),(0,a.kt)("h2",{id:"2-take-the-jdbc-engine-as-an-example-to-explain-the-implementation-steps-of-the-new-engine-in-detail"},"2. Take the JDBC engine as an example to explain the implementation steps of the new engine in detail"),(0,a.kt)("p",null,"This chapter takes the JDBC engine as an example to explain the implementation process of the new engine in detail, including engine code compilation, installation, database configuration, management console engine label adaptation, and the new engine script type extension in Scripts and the task node extension of the new workflow engine, etc. ."),(0,a.kt)("h3",{id:"21-concurrency-engine-setting-default-startup-user"},"2.1 Concurrency engine setting default startup user"),(0,a.kt)("p",null,"The abstract class inherited from the core class ",(0,a.kt)("inlineCode",{parentName:"p"},"JDBCEngineConnExecutor")," in the JDBC engine is ",(0,a.kt)("inlineCode",{parentName:"p"},"ConcurrentComputationExecutor"),", and the abstract class inherited from the core class ",(0,a.kt)("inlineCode",{parentName:"p"},"XXXEngineConnExecutor")," in the calculation engine is ",(0,a.kt)("inlineCode",{parentName:"p"},"ComputationExecutor"),". This leads to the biggest difference between the two: the JDBC engine instance is started by the administrator user and shared by all users to improve the utilization of machine resources; while the script of the computing engine type is submitted, an engine instance will be started under each user. , the engine instances between users are isolated from each other. This will not be elaborated here, because whether it is a concurrent engine or a computing engine, the additional modification process mentioned below should be consistent."),(0,a.kt)("p",null,"Correspondingly, if your new engine is a concurrent engine, then you need to pay attention to this class: AMConfiguration.scala, if your new engine is a computing engine, you can ignore it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'object AMConfiguration {\n  // If your engine is a multi-user concurrent engine, then this configuration item needs to be paid attention to\n  val MULTI_USER_ENGINE_TYPES = CommonVars("wds.linkis.multi.user.engine.types", "jdbc,ck,es,io_file,appconn")\n  \n    private def getDefaultMultiEngineUser(): String = {\n    // This should be to set the startup user when the concurrent engine is pulled up. The default jvmUser is the startup user of the engine service Java process.\n    val jvmUser = Utils.getJvmUser\n    s"""{jdbc:"$jvmUser", presto: "$jvmUser" es: "$jvmUser", ck:"$jvmUser", appconn:"$jvmUser", io_file:"root"}"""\n  }\n}\n')),(0,a.kt)("h3",{id:"22-new-engine-type-extension"},"2.2 New engine type extension"),(0,a.kt)("p",null,"In the class ",(0,a.kt)("inlineCode",{parentName:"p"},"JDBCEngineConnFactory")," that implements the ",(0,a.kt)("inlineCode",{parentName:"p"},"ComputationSingleExecutorEngineConnFactory")," interface, the following two methods need to be implemented:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"override protected def getEngineConnType: EngineType = EngineType.JDBC\n\noverride protected def getRunType: RunType = RunType.JDBC\n")),(0,a.kt)("p",null,"Therefore, it is necessary to add variables corresponding to JDBC in EngineType and RunType."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'// EngineType.scala is similar to the variable definition of the existing engine, adding JDBC related variables or code\nobject EngineType extends Enumeration with Logging {\n  val JDBC = Value("jdbc")\n}\n\ndef mapStringToEngineType(str: String): EngineType = str match {\n  case _ if JDBC.toString.equalsIgnoreCase(str) => JDBC\n}\n\n// RunType.scla\u4e2d\nobject RunType extends Enumeration {\n    val JDBC = Value("jdbc")\n}\n')),(0,a.kt)("h3",{id:"23-version-number-settings-in-the-jdbc-engine-tab"},"2.3 Version number settings in the JDBC engine tab"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'// Add the version configuration of JDBC in LabelCommonConfig\npublic class LabelCommonConfig {\n   public final static CommonVars<String> JDBC_ENGINE_VERSION = CommonVars.apply("wds.linkis.jdbc.engine.version", "4");\n}\n\n// Supplement the matching logic of jdbc in the init method of EngineTypeLabelCreator\n// If this step is not done, when the code is submitted to the engine, the version number will be missing from the engine tag information\npublic class EngineTypeLabelCreator {\nprivate static void init() {\n     defaultVersion.put(EngineType.JDBC().toString(), LabelCommonConfig.JDBC_ENGINE_VERSION.getValue());\n   }\n}\n')),(0,a.kt)("h3",{id:"24-types-of-script-files-that-are-allowed-to-be-opened-by-the-script-editor"},"2.4 Types of script files that are allowed to be opened by the script editor"),(0,a.kt)("p",null,"Add the script type of the jdbc engine to the fileType array in FileSource.scala. If it is not added, the script type of the JDBC engine is not allowed to be opened in the Scripts file list."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'// FileSource.scala\nobject FileSource {\n     private val fileType = Array("...", "jdbc")\n}\n')),(0,a.kt)("h3",{id:"25-configure-jdbc-script-variable-storage-and-parsing"},"2.5 Configure JDBC script variable storage and parsing"),(0,a.kt)("p",null,"If this operation is not done, the variables in the JDBC script cannot be stored and parsed normally, and the code execution will fail when ${variable} is directly used in the script!"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u53d8\u91cf\u89e3\u6790",src:t(53509).Z,width:"1507",height:"203"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'// QLScriptCompaction.scala\nclass QLScriptCompaction private extends CommonScriptCompaction{\n    override def belongTo(suffix: String): Boolean = {\n    suffix match {\n      ...\n      case "jdbc" => true\n      case _ => false\n    }\n  }\n}\n\n// QLScriptParser.scala\nclass QLScriptParser private extends CommonScriptParser {\n  override def belongTo(suffix: String): Boolean = {\n    suffix match {\n      case "jdbc" => true\n      case _ => false\n    }\n  }\n}\n\n// CustomVariableUtils.scala\u4e2d\nobject CustomVariableUtils extends Logging {\n   def replaceCustomVar(jobRequest: JobRequest, runType: String): (Boolean, String) = {\n    runType match {\n      ......\n      case "hql" | "sql" | "fql" | "jdbc" | "hive"| "psql" => codeType = SQL_TYPE\n      case _ => return (false, code)\n    }\n   }\n}\n')),(0,a.kt)("h3",{id:"26-add-jdbc-engine-text-prompts-or-icons-to-the-linkis-administrator-console-interface-engine-manager"},"2.6 Add JDBC engine text prompts or icons to the Linkis administrator console interface engine manager"),(0,a.kt)("p",null,"web/src/dss/module/resourceSimple/engine.vue"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"methods: {\n  calssifyName(params) {\n     switch (params) {\n        case 'jdbc':\n          return 'JDBC';\n        ......\n     }\n  }\n  // \u56fe\u6807\u8fc7\u6ee4\n  supportIcon(item) {\n     const supportTypes = [\n         ......\n        { rule: 'jdbc', logo: 'fi-jdbc' },\n      ];\n  }\n}\n")),(0,a.kt)("p",null,"The final effect presented to the user:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"JDBC\u7c7b\u578b\u5f15\u64ce",src:t(31864).Z,width:"2082",height:"590"})),(0,a.kt)("h3",{id:"27-compile-package-install-and-deploy-the-jdbc-engine"},"2.7 Compile, package, install and deploy the JDBC engine"),(0,a.kt)("p",null,"An example command for JDBC engine module compilation is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd /linkis-project/linkis-engineconn-plugins/engineconn-plugins/jdbc\n\nmvn clean install -DskipTests\n")),(0,a.kt)("p",null,"When compiling a complete project, the new engine will not be added to the final tar.gz archive by default. If necessary, please modify the following files:"),(0,a.kt)("p",null,"assembly-combined-package/assembly-combined/src/main/assembly/assembly.xml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!--jdbc--\x3e\n<fileSets>\n  ......\n  <fileSet>\n      <directory>\n          ../../linkis-engineconn-plugins/engineconn-plugins/jdbc/target/out/\n      </directory>\n      <outputDirectory>lib/linkis-engineconn-plugins/</outputDirectory>\n      <includes>\n          <include>**/*</include>\n      </includes>\n  </fileSet>\n</fileSets>\n")),(0,a.kt)("p",null,"Then run the compile command in the project root directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mvn clean install -DskipTests\n")),(0,a.kt)("p",null,"After successful compilation, find out.zip in the directories of assembly-combined-package/target/apache-linkis-1.x.x-incubating-bin.tar.gz and linkis-engineconn-plugins/engineconn-plugins/jdbc/target/."),(0,a.kt)("p",null,"Upload the out.zip file to the Linkis deployment node and extract it to the Linkis installation directory /lib/linkis-engineconn-plugins/:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u5f15\u64ce\u5b89\u88c5",src:t(65001).Z,width:"1420",height:"422"})),(0,a.kt)("p",null,"Don't forget to delete out.zip after decompression, so far the engine compilation and installation are completed."),(0,a.kt)("h3",{id:"28-jdbc-engine-database-configuration"},"2.8 JDBC engine database configuration"),(0,a.kt)("p",null,"Select Add Engine in the console"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u6dfb\u52a0\u5f15\u64ce",src:t(48970).Z,width:"2990",height:"642"})),(0,a.kt)("p",null,"If you want to support engine parameter configuration on the management console, you can modify the database according to the JDBC engine SQL example."),(0,a.kt)("p",null,"The JDBC engine is used here as an example. After the engine is installed, if you want to run the new engine code, you need to configure the database of the engine. Take the JDBC engine as an example, please modify it according to the situation of the new engine you implemented yourself."),(0,a.kt)("p",null,"The SQL reference is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SET @JDBC_LABEL=\"jdbc-4\";\n\nSET @JDBC_ALL=CONCAT('*-*,',@JDBC_LABEL);\nSET @JDBC_IDE=CONCAT('*-IDE,',@JDBC_LABEL);\nSET @JDBC_NODE=CONCAT('*-nodeexecution,',@JDBC_LABEL);\n\n-- JDBC\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('wds.linkis.rm.instance', '\u8303\u56f4\uff1a1-20\uff0c\u5355\u4f4d\uff1a\u4e2a', 'jdbc\u5f15\u64ce\u6700\u5927\u5e76\u53d1\u6570', '2', 'NumInterval', '[1,20]', '0', '0', '1', '\u961f\u5217\u8d44\u6e90', 'jdbc');\n\ninsert into `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('wds.linkis.jdbc.driver', '\u53d6\u503c\u8303\u56f4\uff1a\u5bf9\u5e94JDBC\u9a71\u52a8\u540d\u79f0', 'jdbc\u9a71\u52a8\u540d\u79f0','', 'None', '', '0', '0', '1', '\u6570\u636e\u6e90\u914d\u7f6e', 'jdbc');\ninsert into `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('wds.linkis.jdbc.connect.url', '\u4f8b\u5982:jdbc:hive2://127.0.0.1:10000', 'jdbc\u8fde\u63a5\u5730\u5740', 'jdbc:hive2://127.0.0.1:10000', 'None', '', '0', '0', '1', '\u6570\u636e\u6e90\u914d\u7f6e', 'jdbc');\ninsert into `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('wds.linkis.jdbc.version', '\u53d6\u503c\u8303\u56f4\uff1ajdbc3,jdbc4', 'jdbc\u7248\u672c','jdbc4', 'OFT', '[\\\"jdbc3\\\",\\\"jdbc4\\\"]', '0', '0', '1', '\u6570\u636e\u6e90\u914d\u7f6e', 'jdbc');\ninsert into `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('wds.linkis.jdbc.connect.max', '\u8303\u56f4\uff1a1-20\uff0c\u5355\u4f4d\uff1a\u4e2a', 'jdbc\u5f15\u64ce\u6700\u5927\u8fde\u63a5\u6570', '10', 'NumInterval', '[1,20]', '0', '0', '1', '\u6570\u636e\u6e90\u914d\u7f6e', 'jdbc');\n\ninsert into `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('wds.linkis.jdbc.auth.type', '\u53d6\u503c\u8303\u56f4\uff1aSIMPLE,USERNAME,KERBEROS', 'jdbc\u8ba4\u8bc1\u65b9\u5f0f', 'USERNAME', 'OFT', '[\\\"SIMPLE\\\",\\\"USERNAME\\\",\\\"KERBEROS\\\"]', '0', '0', '1', '\u7528\u6237\u914d\u7f6e', 'jdbc');\ninsert into `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('wds.linkis.jdbc.username', 'username', '\u6570\u636e\u5e93\u8fde\u63a5\u7528\u6237\u540d', '', 'None', '', '0', '0', '1', '\u7528\u6237\u914d\u7f6e', 'jdbc');\ninsert into `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('wds.linkis.jdbc.password', 'password', '\u6570\u636e\u5e93\u8fde\u63a5\u5bc6\u7801', '', 'None', '', '0', '0', '1', '\u7528\u6237\u914d\u7f6e', 'jdbc');\ninsert into `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('wds.linkis.jdbc.principal', '\u4f8b\u5982\uff1ahadoop/host@KDC.COM', '\u7528\u6237principal', '', 'None', '', '0', '0', '1', '\u7528\u6237\u914d\u7f6e', 'jdbc');\ninsert into `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('wds.linkis.jdbc.keytab.location', '\u4f8b\u5982\uff1a/data/keytab/hadoop.keytab', '\u7528\u6237keytab\u6587\u4ef6\u8def\u5f84', '', 'None', '', '0', '0', '1', '\u7528\u6237\u914d\u7f6e', 'jdbc');\ninsert into `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('wds.linkis.jdbc.proxy.user.property', '\u4f8b\u5982\uff1ahive.server2.proxy.user', '\u7528\u6237\u4ee3\u7406\u914d\u7f6e', '', 'None', '', '0', '0', '1', '\u7528\u6237\u914d\u7f6e', 'jdbc');\n\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('wds.linkis.engineconn.java.driver.cores', '\u53d6\u503c\u8303\u56f4\uff1a1-8\uff0c\u5355\u4f4d\uff1a\u4e2a', 'jdbc\u5f15\u64ce\u521d\u59cb\u5316\u6838\u5fc3\u4e2a\u6570', '1', 'NumInterval', '[1,8]', '0', '0', '1', 'jdbc\u5f15\u64ce\u8bbe\u7f6e', 'jdbc');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('wds.linkis.engineconn.java.driver.memory', '\u53d6\u503c\u8303\u56f4\uff1a1-8\uff0c\u5355\u4f4d\uff1aG', 'jdbc\u5f15\u64ce\u521d\u59cb\u5316\u5185\u5b58\u5927\u5c0f', '1g', 'Regex', '^([1-8])(G|g)$', '0', '0', '1', 'jdbc\u5f15\u64ce\u8bbe\u7f6e', 'jdbc');\n\ninsert into `linkis_cg_manager_label` (`label_key`, `label_value`, `label_feature`, `label_value_size`, `update_time`, `create_time`) VALUES ('combined_userCreator_engineType',@JDBC_ALL, 'OPTIONAL', 2, now(), now());\n\ninsert into `linkis_ps_configuration_key_engine_relation` (`config_key_id`, `engine_type_label_id`)\n    (select config.id as `config_key_id`, label.id AS `engine_type_label_id` FROM linkis_ps_configuration_config_key config INNER JOIN linkis_cg_manager_label label ON config.engine_conn_type = 'jdbc' and label_value = @JDBC_ALL);\n\ninsert into `linkis_cg_manager_label` (`label_key`, `label_value`, `label_feature`, `label_value_size`, `update_time`, `create_time`) VALUES ('combined_userCreator_engineType',@JDBC_IDE, 'OPTIONAL', 2, now(), now());\ninsert into `linkis_cg_manager_label` (`label_key`, `label_value`, `label_feature`, `label_value_size`, `update_time`, `create_time`) VALUES ('combined_userCreator_engineType',@JDBC_NODE, 'OPTIONAL', 2, now(), now());\n\n\n\nselect @label_id := id from linkis_cg_manager_label where `label_value` = @JDBC_IDE;\ninsert into linkis_ps_configuration_category (`label_id`, `level`) VALUES (@label_id, 2);\n\nselect @label_id := id from linkis_cg_manager_label where `label_value` = @JDBC_NODE;\ninsert into linkis_ps_configuration_category (`label_id`, `level`) VALUES (@label_id, 2);\n\n\n-- jdbc default configuration\ninsert into `linkis_ps_configuration_config_value` (`config_key_id`, `config_value`, `config_label_id`)\n    (select `relation`.`config_key_id` AS `config_key_id`, '' AS `config_value`, `relation`.`engine_type_label_id` AS `config_label_id` FROM linkis_ps_configuration_key_engine_relation relation INNER JOIN linkis_cg_manager_label label ON relation.engine_type_label_id = label.id AND label.label_value = @JDBC_ALL);\n")),(0,a.kt)("p",null,"If you want to reset the database configuration data of the engine, the reference files are as follows, please modify and use as needed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- Clear the initialization data of the jdbc engine\nSET @JDBC_LABEL=\"jdbc-4\";\n\nSET @JDBC_ALL=CONCAT('*-*,',@JDBC_LABEL);\nSET @JDBC_IDE=CONCAT('*-IDE,',@JDBC_LABEL);\nSET @JDBC_NODE=CONCAT('*-nodeexecution,',@JDBC_LABEL);\n\ndelete from `linkis_ps_configuration_config_value` where `config_label_id` in\n                                                           (select `relation`.`engine_type_label_id` AS `config_label_id` FROM `linkis_ps_configuration_key_engine_relation` relation INNER JOIN `linkis_cg_manager_label` label ON relation.engine_type_label_id = label.id AND label.label_value = @JDBC_ALL);\n\n\ndelete from `linkis_ps_configuration_key_engine_relation`\nwhere `engine_type_label_id` in\n      (select label.id FROM `linkis_ps_configuration_config_key` config\n          INNER JOIN `linkis_cg_manager_label` label\n              ON config.engine_conn_type = 'jdbc' and label_value = @JDBC_ALL);\n\n\ndelete from `linkis_ps_configuration_category`\nwhere `label_id` in (select id from `linkis_cg_manager_label` where `label_value` in(@JDBC_IDE, @JDBC_NODE));\n\n\ndelete from `linkis_ps_configuration_config_key` where `engine_conn_type` = 'jdbc';\n\ndelete from `linkis_cg_manager_label` where `label_value` in (@JDBC_ALL, @JDBC_IDE, @JDBC_NODE);\n\n")),(0,a.kt)("p",null,"Final effect:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"JDBC\u5f15\u64ce",src:t(62503).Z,width:"2974",height:"1022"})),(0,a.kt)("p",null,"After this configuration, when linkis-cli and Scripts submit the engine script, the tag information of the engine and the connection information of the data source can be correctly matched, and then the newly added engine can be pulled up."),(0,a.kt)("h3",{id:"29-added-jdbc-script-type-and-icon-information-in-dss-scripts"},"2.9 Added JDBC script type and icon information in DSS Scripts"),(0,a.kt)("p",null,"If you use the Scripts function of DSS, you also need to make some small changes to the front-end files of the web in the dss project. The purpose of the changes is to support creating, opening, and executing JDBC engine script types in Scripts, as well as implementing the corresponding engine. Icons, fonts, etc."),(0,a.kt)("h4",{id:"291-scriptisjs"},"2.9.1 scriptis.js"),(0,a.kt)("p",null,"web/src/common/config/scriptis.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{\n  rule: /\\.jdbc$/i,\n  lang: 'hql',\n  executable: true,\n  application: 'jdbc',\n  runType: 'jdbc',\n  ext: '.jdbc',\n  scriptType: 'jdbc',\n  abbr: 'jdbc',\n  logo: 'fi-jdbc',\n  color: '#444444',\n  isCanBeNew: true,\n  label: 'JDBC',\n  isCanBeOpen: true\n},\n")),(0,a.kt)("h4",{id:"292-script-copy-support"},"2.9.2 Script copy support"),(0,a.kt)("p",null,"web/src/apps/scriptis/module/workSidebar/workSidebar.vue"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"copyName() {\n  let typeArr = ['......', 'jdbc']\n}\n")),(0,a.kt)("h4",{id:"293-logo-and-font-color-matching"},"2.9.3 Logo and font color matching"),(0,a.kt)("p",null,"web/src/apps/scriptis/module/workbench/title.vue"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"  data() {\n    return {\n      isHover: false,\n      iconColor: {\n        'fi-jdbc': '#444444',\n      },\n    };\n  },\n")),(0,a.kt)("p",null,"web/src/apps/scriptis/module/workbench/modal.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let logoList = [\n  { rule: /\\.jdbc$/i, logo: 'fi-jdbc' },\n];\n")),(0,a.kt)("p",null,"web/src/components/tree/support.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export const supportTypes = [\n  // Probably useless here\n  { rule: /\\.jdbc$/i, logo: 'fi-jdbc' },\n]\n")),(0,a.kt)("p",null,"Engine icon display"),(0,a.kt)("p",null,"web/src/dss/module/resourceSimple/engine.vue"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"methods: {\n  calssifyName(params) {\n     switch (params) {\n        case 'jdbc':\n          return 'JDBC';\n        ......\n     }\n  }\n  // \u56fe\u6807\u8fc7\u6ee4\n  supportIcon(item) {\n     const supportTypes = [\n                ......\n        { rule: 'jdbc', logo: 'fi-jdbc' },\n      ];\n  }\n}\n")),(0,a.kt)("p",null,"web/src/dss/assets/projectIconFont/iconfont.css"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},'.fi-jdbc:before {\n  content: "\\e75e";\n}\n')),(0,a.kt)("p",null,"The control here should be:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u5f15\u64ce\u56fe\u6807",src:t(60062).Z,width:"1273",height:"216"})),(0,a.kt)("p",null,"Find an svg file of the engine icon"),(0,a.kt)("p",null,"web/src/components/svgIcon/svg/fi-jdbc.svg"),(0,a.kt)("p",null,"If the new engine needs to contribute to the community in the future, the svg icons, fonts, etc. corresponding to the new engine need to confirm the open source agreement to which they belong, or obtain their copyright license."),(0,a.kt)("h3",{id:"210-workflow-adaptation-of-dss"},"2.10 Workflow adaptation of DSS"),(0,a.kt)("p",null,"The final result:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u5de5\u4f5c\u6d41\u9002\u914d",src:t(6914).Z,width:"1498",height:"492"})),(0,a.kt)("p",null,"Save the definition data of the newly added JDBC engine in the dss_workflow_node table, refer to SQL:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- Engine task node basic information definition\ninsert into `dss_workflow_node` (`id`, `name`, `appconn_name`, `node_type`, `jump_url`, `support_jump`, `submit_to_scheduler`, `enable_copy`, `should_creation_before_node`, `icon`) values('18','jdbc','-1','linkis.jdbc.jdbc',NULL,'1','1','1','0','svg\u6587\u4ef6');\n\n-- The svg file corresponds to the new engine task node icon\n\n-- Classification and division of engine task nodes\ninsert  into `dss_workflow_node_to_group`(`node_id`,`group_id`) values (18, 2);\n\n-- Basic information (parameter attribute) binding of the engine task node\nINSERT  INTO `dss_workflow_node_to_ui`(`workflow_node_id`,`ui_id`) VALUES (18,45);\n\n-- The basic information related to the engine task node is defined in the dss_workflow_node_ui table, and then displayed in the form of a form on the right side of the above figure. You can expand other basic information for the new engine, and then it will be automatically rendered by the form on the right.\n")),(0,a.kt)("p",null,"web/src/apps/workflows/service/nodeType.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import jdbc from '../module/process/images/newIcon/jdbc.svg';\n\nconst NODETYPE = {\n  ......\n  JDBC: 'linkis.jdbc.jdbc',\n}\n\nconst ext = {\n    ......\n  [NODETYPE.JDBC]: 'jdbc',\n}\n\nconst NODEICON = {\n  [NODETYPE.JDBC]: {\n    icon: jdbc,\n    class: {'jdbc': true}\n  },\n}\n")),(0,a.kt)("p",null,"Add the icon of the new engine in the web/src/apps/workflows/module/process/images/newIcon/ directory"),(0,a.kt)("p",null,"web/src/apps/workflows/module/process/images/newIcon/jdbc"),(0,a.kt)("p",null,"Also when contributing to the community, please consider the lincese or copyright of the svg file."),(0,a.kt)("h2",{id:"3-chapter-summary"},"3. Chapter Summary"),(0,a.kt)("p",null,"The above content records the implementation process of the new engine, as well as some additional engine configurations that need to be done. At present, the expansion process of a new engine is still relatively cumbersome, and it is hoped that the expansion and installation of the new engine can be optimized in subsequent versions."))}p.isMDXComponent=!0},48970:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/add_engine_conf-7660957ea93ce9338701b0ce38501390.png"},81736:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/engine_jdbc_dependency-96557050ad1a36a30a690d02b58e31d3.png"},65001:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/engine_set_up-1e949aa8bb8170beb333ad319c942a0c.png"},62503:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/jdbc_engine_conf_detail-a1e588a0c00be10a897fb3ee8457ee41.png"},60062:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/jdbc_engine_logo-23d33140c41b61c9c347e52adbfdd92b.png"},31864:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/jdbc_engine_view-4d86f79491f610d609a0216a05ef7e2a.png"},6914:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/jdbc_job_flow-ace7f4a451f44bb76cf51096b79ffd98.png"},53509:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/variable_resolution-9721734d26cae3882a11a7188bdf62b2.png"}}]);