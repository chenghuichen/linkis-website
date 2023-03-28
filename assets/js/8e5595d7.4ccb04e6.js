"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[18601],{3905:(e,n,o)=>{o.d(n,{Zo:()=>c,kt:()=>m});var a=o(67294);function t(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function i(e,n){if(null==e)return{};var o,a,t=function(e,n){if(null==e)return{};var o,a,t={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var l=a.createContext({}),p=function(e){var n=a.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):s(s({},n),e)),o},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var o=e.components,t=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(o),u=t,m=d["".concat(l,".").concat(u)]||d[u]||g[u]||r;return o?a.createElement(m,s(s({ref:n},c),{},{components:o})):a.createElement(m,s({ref:n},c))}));function m(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=o.length,s=new Array(r);s[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[d]="string"==typeof e?e:t,s[1]=i;for(var p=2;p<r;p++)s[p]=o[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},45434:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=o(87462),t=(o(67294),o(3905));const r={title:"Sqoop Engine",sidebar_position:9},s="Sqoop Engine usage documentation",i={unversionedId:"engine-usage/sqoop",id:"version-1.1.2/engine-usage/sqoop",title:"Sqoop Engine",description:"This article mainly introduces the configuration, deployment and use of the Sqoop engine in Linkis1.X.",source:"@site/versioned_docs/version-1.1.2/engine-usage/sqoop.md",sourceDirName:"engine-usage",slug:"/engine-usage/sqoop",permalink:"/docs/1.1.2/engine-usage/sqoop",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.1.2/engine-usage/sqoop.md",tags:[],version:"1.1.2",sidebarPosition:9,frontMatter:{title:"Sqoop Engine",sidebar_position:9},sidebar:"version-1.1.2/tutorialSidebar",previous:{title:"OpenLookEng Engine",permalink:"/docs/1.1.2/engine-usage/openlookeng"},next:{title:"pipeline engine",permalink:"/docs/1.1.2/engine-usage/pipeline"}},l={},p=[{value:"1.Sqoop engine Linkis system parameter configuration",id:"1sqoop-engine-linkis-system-parameter-configuration",level:2},{value:"2.Sqoop Engine configuration and deployment",id:"2sqoop-engine-configuration-and-deployment",level:2},{value:"2.1 Sqoop Version selection and compilation",id:"21-sqoop-version-selection-and-compilation",level:3},{value:"2.2 Sqoop engineConn deploy and load",id:"22-sqoop-engineconn-deploy-and-load",level:3},{value:"3.Sqoop Engine Usage",id:"3sqoop-engine-usage",level:2},{value:"3.1 OnceEngineConn",id:"31-onceengineconn",level:3}],c={toc:p},d="wrapper";function g(e){let{components:n,...o}=e;return(0,t.kt)(d,(0,a.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"sqoop-engine-usage-documentation"},"Sqoop Engine usage documentation"),(0,t.kt)("p",null,"This article mainly introduces the configuration, deployment and use of the Sqoop engine in Linkis1.X."),(0,t.kt)("h2",{id:"1sqoop-engine-linkis-system-parameter-configuration"},"1.Sqoop engine Linkis system parameter configuration"),(0,t.kt)("p",null,"The Sqoop engine mainly depends on the Hadoop basic environment. If the node needs to deploy the Sqoop engine, the Hadoop client environment needs to be deployed."),(0,t.kt)("p",null,"It is strongly recommended that you use the native Sqoop to execute the test task on the node before executing the Sqoop task to check whether the node environment is normal."),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",{parentName:"tr",align:null},"Environment Variable Name"),(0,t.kt)("th",{parentName:"tr",align:null},"Environment Variable Content"),(0,t.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"JAVA_HOME"),(0,t.kt)("td",{parentName:"tr",align:null},"JDK installation path"),(0,t.kt)("td",{parentName:"tr",align:null},"Required")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"HADOOP_HOME"),(0,t.kt)("td",{parentName:"tr",align:null},"Hadoop installation path"),(0,t.kt)("td",{parentName:"tr",align:null},"Required")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"HADOOP_CONF_DIR"),(0,t.kt)("td",{parentName:"tr",align:null},"Hadoop installation path"),(0,t.kt)("td",{parentName:"tr",align:null},"Required")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"SQOOP_HOME"),(0,t.kt)("td",{parentName:"tr",align:null},"Sqoop installation path"),(0,t.kt)("td",{parentName:"tr",align:null},"Not Required")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"SQOOP_CONF_DIR"),(0,t.kt)("td",{parentName:"tr",align:null},"Sqoop config path"),(0,t.kt)("td",{parentName:"tr",align:null},"Not Required")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"HCAT_HOME"),(0,t.kt)("td",{parentName:"tr",align:null},"HCAT config path"),(0,t.kt)("td",{parentName:"tr",align:null},"Not Required")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"HBASE_HOME"),(0,t.kt)("td",{parentName:"tr",align:null},"HBASE config path"),(0,t.kt)("td",{parentName:"tr",align:null},"Not Required")))),(0,t.kt)("p",null,"Table 1-1 Environment configuration list"),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",{parentName:"tr",align:null},"Linkis Parameter Name"),(0,t.kt)("th",{parentName:"tr",align:null},"Parameter Content"),(0,t.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"wds.linkis.hadoop.site.xml"),(0,t.kt)("td",{parentName:"tr",align:null},"Set sqoop to load hadoop parameter file location"),(0,t.kt)("td",{parentName:"tr",align:null},'Required\uff0cReference example\uff1a"/etc/hadoop/conf/core-site.xml;/etc/hadoop/conf/hdfs-site.xml;/etc/hadoop/conf/yarn-site.xml;/etc/hadoop/conf/mapred-site.xml"')),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"sqoop.fetch.status.interval"),(0,t.kt)("td",{parentName:"tr",align:null},"Set the interval time for obtaining sqoop execution status"),(0,t.kt)("td",{parentName:"tr",align:null},"Not required, the default value is 5s")))),(0,t.kt)("h2",{id:"2sqoop-engine-configuration-and-deployment"},"2.Sqoop Engine configuration and deployment"),(0,t.kt)("h3",{id:"21-sqoop-version-selection-and-compilation"},"2.1 Sqoop Version selection and compilation"),(0,t.kt)("p",null,"Mainstream Sqoop versions 1.4.6 and 1.4.7 supported by Linkis 1.1.2 and above, and later versions may need to modify some code and recompile"),(0,t.kt)("h3",{id:"22-sqoop-engineconn-deploy-and-load"},"2.2 Sqoop engineConn deploy and load"),(0,t.kt)("p",null,"Note: Before compiling the sqoop engine, the linkis project needs to be fully compiled"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"Compile sqoop separately:\n${linkis_code_dir}/linkis-enginepconn-lugins/engineconn-plugins/sqoop/\nmvn clean install\n")),(0,t.kt)("p",null,"The installation method is to compile the compiled engine package, located in "),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"${linkis_code_dir}/linkis-enginepconn-lugins/engineconn-plugins/sqoop/target/sqoop-engineconn.zip\n")),(0,t.kt)("p",null,"and then deploy to "),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"${LINKIS_HOME}/lib/linkis-engineplugins\n")),(0,t.kt)("p",null,"and restart linkis-engineplugin "),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"cd ${LINKIS_HOME}/sbin\nsh linkis-daemon.sh restart cg-engineplugin\n")),(0,t.kt)("p",null,"More engineplugin details can be found in the following article.",(0,t.kt)("br",{parentName:"p"}),"\n",(0,t.kt)("a",{parentName:"p",href:"https://linkis.apache.org/docs/1.1.1/deployment/engine-conn-plugin-installation"},"https://linkis.apache.org/docs/1.1.1/deployment/engine-conn-plugin-installation")),(0,t.kt)("h2",{id:"3sqoop-engine-usage"},"3.Sqoop Engine Usage"),(0,t.kt)("h3",{id:"31-onceengineconn"},"3.1 OnceEngineConn"),(0,t.kt)("p",null,"OnceEngineConn is used by calling LinkisManager's createEngineConn interface through LinkisManagerClient, and sending the code to the created Sqoop engine, and then the Sqoop engine starts to execute. This method can be called by other systems, such as Exchange. The use of Client is also very simple, first create a new maven project, or introduce the following dependencies into your project"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.linkis</groupId>\n    <artifactId>linkis-computation-client</artifactId>\n    <version>${linkis.version}</version>\n</dependency>\n")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Test Case\uff1a")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},'\npackage com.webank.wedatasphere.exchangis.job.server.log.client\n\nimport java.util.concurrent.TimeUnit\n\nimport java.util\n\nimport org.apache.linkis.computation.client.LinkisJobBuilder\nimport org.apache.linkis.computation.client.once.simple.{SimpleOnceJob, SimpleOnceJobBuilder, SubmittableSimpleOnceJob}\nimport org.apache.linkis.computation.client.operator.impl.{EngineConnLogOperator, EngineConnMetricsOperator, EngineConnProgressOperator}\nimport org.apache.linkis.computation.client.utils.LabelKeyUtils\n\nimport scala.collection.JavaConverters._\n\nobject SqoopOnceJobTest extends App {\n  LinkisJobBuilder.setDefaultServerUrl("http://127.0.0.1:9001")\n  val logPath = "C:\\\\Users\\\\resources\\\\log4j.properties"\n  System.setProperty("log4j.configurationFile", logPath)\n  val startUpMap = new util.HashMap[String, Any]\n  startUpMap.put("wds.linkis.engineconn.java.driver.memory", "1g")\n   val builder = SimpleOnceJob.builder().setCreateService("Linkis-Client")\n     .addLabel(LabelKeyUtils.ENGINE_TYPE_LABEL_KEY, "sqoop-1.4.6")\n     .addLabel(LabelKeyUtils.USER_CREATOR_LABEL_KEY, "Client")\n     .addLabel(LabelKeyUtils.ENGINE_CONN_MODE_LABEL_KEY, "once")\n     .setStartupParams(startUpMap)\n     .setMaxSubmitTime(30000)\n     .addExecuteUser("freeuser")\n  val onceJob = importJob(builder)\n  val time = System.currentTimeMillis()\n  onceJob.submit()\n  println(onceJob.getId)\n  val logOperator = onceJob.getOperator(EngineConnLogOperator.OPERATOR_NAME).asInstanceOf[EngineConnLogOperator]\n  println(onceJob.getECMServiceInstance)\n  logOperator.setFromLine(0)\n  logOperator.setECMServiceInstance(onceJob.getECMServiceInstance)\n  logOperator.setEngineConnType("sqoop")\n  logOperator.setIgnoreKeywords("[main],[SpringContextShutdownHook]")\n  var progressOperator = onceJob.getOperator(EngineConnProgressOperator.OPERATOR_NAME).asInstanceOf[EngineConnProgressOperator]\n  var metricOperator = onceJob.getOperator(EngineConnMetricsOperator.OPERATOR_NAME).asInstanceOf[EngineConnMetricsOperator]\n  var end = false\n  var rowBefore = 1\n  while (!end || rowBefore > 0){\n       if(onceJob.isCompleted) {\n         end = true\n         metricOperator = null\n       }\n      logOperator.setPageSize(100)\n      Utils.tryQuietly{\n        val logs = logOperator.apply()\n        logs.logs.asScala.foreach( log => {\n          println(log)\n        })\n        rowBefore = logs.logs.size\n    }\n    Thread.sleep(3000)\n    Option(metricOperator).foreach( operator => {\n      if (!onceJob.isCompleted){\n        println(s"Metric Monitor: ${operator.apply()}")\n        println(s"Progress: ${progressOperator.apply()}")\n      }\n    })\n  }\n  onceJob.isCompleted\n  onceJob.waitForCompleted()\n  println(onceJob.getStatus)\n  println(TimeUnit.SECONDS.convert(System.currentTimeMillis() - time, TimeUnit.MILLISECONDS) + "s")\n  System.exit(0)\n\n\n   def importJob(jobBuilder: SimpleOnceJobBuilder): SubmittableSimpleOnceJob = {\n     jobBuilder\n       .addJobContent("sqoop.env.mapreduce.job.queuename", "queue_10")\n       .addJobContent("sqoop.mode", "import")\n       .addJobContent("sqoop.args.connect", "jdbc:mysql://127.0.0.1:3306/exchangis")\n       .addJobContent("sqoop.args.username", "free")\n       .addJobContent("sqoop.args.password", "testpwd")\n       .addJobContent("sqoop.args.query", "select id as order_number, sno as time from" +\n         " exchangis where sno =1 and $CONDITIONS")\n       .addJobContent("sqoop.args.hcatalog.database", "freedb")\n       .addJobContent("sqoop.args.hcatalog.table", "zy_test")\n       .addJobContent("sqoop.args.hcatalog.partition.keys", "month")\n       .addJobContent("sqoop.args.hcatalog.partition.values", "3")\n       .addJobContent("sqoop.args.num.mappers", "1")\n       .build()\n   }\n\n   def exportJob(jobBuilder: SimpleOnceJobBuilder): SubmittableSimpleOnceJob = {\n      jobBuilder\n        .addJobContent("sqoop.env.mapreduce.job.queuename", "queue1")\n        .addJobContent("sqoop.mode", "import")\n        .addJobContent("sqoop.args.connect", "jdbc:mysql://127.0.0.1:3306/exchangis")\n        .addJobContent("sqoop.args.query", "select id as order, sno as great_time from" +\n          " exchangis_table where sno =1 and $CONDITIONS")\n        .addJobContent("sqoop.args.hcatalog.database", "hadoop")\n        .addJobContent("sqoop.args.hcatalog.table", "partition_33")\n        .addJobContent("sqoop.args.hcatalog.partition.keys", "month")\n        .addJobContent("sqoop.args.hcatalog.partition.values", "4")\n        .addJobContent("sqoop.args.num.mappers", "1")\n        .build()\n   }\n')),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Parameter Comparison table (with native parameters):**")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"sqoop.env.mapreduce.job.queuename<=>-Dmapreduce.job.queuename\nsqoop.args.connection.manager<===>--connection-manager\nsqoop.args.connection.param.file<===>--connection-param-file\nsqoop.args.driver<===>--driver\nsqoop.args.hadoop.home<===>--hadoop-home\nsqoop.args.hadoop.mapred.home<===>--hadoop-mapred-home\nsqoop.args.help<===>help\nsqoop.args.password<===>--password\nsqoop.args.password.alias<===>--password-alias\nsqoop.args.password.file<===>--password-file\nsqoop.args.relaxed.isolation<===>--relaxed-isolation\nsqoop.args.skip.dist.cache<===>--skip-dist-cache\nsqoop.args.username<===>--username\nsqoop.args.verbose<===>--verbose\nsqoop.args.append<===>--append\nsqoop.args.as.avrodatafile<===>--as-avrodatafile\nsqoop.args.as.parquetfile<===>--as-parquetfile\nsqoop.args.as.sequencefile<===>--as-sequencefile\nsqoop.args.as.textfile<===>--as-textfile\nsqoop.args.autoreset.to.one.mapper<===>--autoreset-to-one-mapper\nsqoop.args.boundary.query<===>--boundary-query\nsqoop.args.case.insensitive<===>--case-insensitive\nsqoop.args.columns<===>--columns\nsqoop.args.compression.codec<===>--compression-codec\nsqoop.args.delete.target.dir<===>--delete-target-dir\nsqoop.args.direct<===>--direct\nsqoop.args.direct.split.size<===>--direct-split-size\nsqoop.args.query<===>--query\nsqoop.args.fetch.size<===>--fetch-size\nsqoop.args.inline.lob.limit<===>--inline-lob-limit\nsqoop.args.num.mappers<===>--num-mappers\nsqoop.args.mapreduce.job.name<===>--mapreduce-job-name\nsqoop.args.merge.key<===>--merge-key\nsqoop.args.split.by<===>--split-by\nsqoop.args.table<===>--table\nsqoop.args.target.dir<===>--target-dir\nsqoop.args.validate<===>--validate\nsqoop.args.validation.failurehandler<===>--validation-failurehandler\nsqoop.args.validation.threshold<===> --validation-threshold\nsqoop.args.validator<===>--validator\nsqoop.args.warehouse.dir<===>--warehouse-dir\nsqoop.args.where<===>--where\nsqoop.args.compress<===>--compress\nsqoop.args.check.column<===>--check-column\nsqoop.args.incremental<===>--incremental\nsqoop.args.last.value<===>--last-value\nsqoop.args.enclosed.by<===>--enclosed-by\nsqoop.args.escaped.by<===>--escaped-by\nsqoop.args.fields.terminated.by<===>--fields-terminated-by\nsqoop.args.lines.terminated.by<===>--lines-terminated-by\nsqoop.args.mysql.delimiters<===>--mysql-delimiters\nsqoop.args.optionally.enclosed.by<===>--optionally-enclosed-by\nsqoop.args.input.enclosed.by<===>--input-enclosed-by\nsqoop.args.input.escaped.by<===>--input-escaped-by\nsqoop.args.input.fields.terminated.by<===>--input-fields-terminated-by\nsqoop.args.input.lines.terminated.by<===>--input-lines-terminated-by\nsqoop.args.input.optionally.enclosed.by<===>--input-optionally-enclosed-by\nsqoop.args.create.hive.table<===>--create-hive-table\nsqoop.args.hive.delims.replacement<===>--hive-delims-replacement\nsqoop.args.hive.database<===>--hive-database\nsqoop.args.hive.drop.import.delims<===>--hive-drop-import-delims\nsqoop.args.hive.home<===>--hive-home\nsqoop.args.hive.import<===>--hive-import\nsqoop.args.hive.overwrite<===>--hive-overwrite\nsqoop.args.hive.partition.value<===>--hive-partition-value\nsqoop.args.hive.table<===>--hive-table\nsqoop.args.column.family<===>--column-family\nsqoop.args.hbase.bulkload<===>--hbase-bulkload\nsqoop.args.hbase.create.table<===>--hbase-create-table\nsqoop.args.hbase.row.key<===>--hbase-row-key\nsqoop.args.hbase.table<===>--hbase-table\nsqoop.args.hcatalog.database<===>--hcatalog-database\nsqoop.args.hcatalog.home<===>--hcatalog-home\nsqoop.args.hcatalog.partition.keys<===>--hcatalog-partition-keys\nsqoop.args.hcatalog.partition.values<===>--hcatalog-partition-values\nsqoop.args.hcatalog.table<===>--hcatalog-table\nsqoop.args.hive.partition.key<===>--hive-partition-key\nsqoop.args.map.column.hive<===>--map-column-hive\nsqoop.args.create.hcatalog.table<===>--create-hcatalog-table\nsqoop.args.hcatalog.storage.stanza<===>--hcatalog-storage-stanza\nsqoop.args.accumulo.batch.size<===>--accumulo-batch-size\nsqoop.args.accumulo.column.family<===>--accumulo-column-family\nsqoop.args.accumulo.create.table<===>--accumulo-create-table\nsqoop.args.accumulo.instance<===>--accumulo-instance\nsqoop.args.accumulo.max.latency<===>--accumulo-max-latency\nsqoop.args.accumulo.password<===>--accumulo-password\nsqoop.args.accumulo.row.key<===>--accumulo-row-key\nsqoop.args.accumulo.table<===>--accumulo-table\nsqoop.args.accumulo.user<===>--accumulo-user\nsqoop.args.accumulo.visibility<===>--accumulo-visibility\nsqoop.args.accumulo.zookeepers<===>--accumulo-zookeepers\nsqoop.args.bindir<===>--bindir\nsqoop.args.class.name<===>--class-name\nsqoop.args.input.null.non.string<===>--input-null-non-string\nsqoop.args.input.null.string<===>--input-null-string\nsqoop.args.jar.file<===>--jar-file\nsqoop.args.map.column.java<===>--map-column-java\nsqoop.args.null.non.string<===>--null-non-string\nsqoop.args.null.string<===>--null-string\nsqoop.args.outdir<===>--outdir\nsqoop.args.package.name<===>--package-name\nsqoop.args.conf<===>-conf\nsqoop.args.D<===>-D\nsqoop.args.fs<===>-fs\nsqoop.args.jt<===>-jt\nsqoop.args.files<===>-files\nsqoop.args.libjars<===>-libjars\nsqoop.args.archives<===>-archives\nsqoop.args.update.key<===>--update-key\nsqoop.args.update.mode<===>--update-mode\nsqoop.args.export.dir<===>--export-dir\n")))}g.isMDXComponent=!0}}]);