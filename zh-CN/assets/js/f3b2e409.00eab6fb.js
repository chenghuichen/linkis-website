"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[9283],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),s=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(a),c=r,f=u["".concat(m,".").concat(c)]||u[c]||o[c]||l;return a?n.createElement(f,i(i({ref:t},d),{},{components:a})):n.createElement(f,i({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},64802:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={title:"Mapper XML \u89c4\u8303",sidebar_position:10},i=void 0,p={unversionedId:"development/development-specification/mapper-xml",id:"version-1.3.1/development/development-specification/mapper-xml",title:"Mapper XML \u89c4\u8303",description:"Contributor\u4e3aApache Linkis\u8d21\u732e\u65b0\u7684\u6570\u636e\u8868\uff0c\u7f16\u5199Mapper XML\u65f6\u9700\u9075\u5faa\u5982\u4e0b\u89c4\u8303\u8fdb\u884c\u5f00\u53d1\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.1/development/development-specification/mapper-xml.md",sourceDirName:"development/development-specification",slug:"/development/development-specification/mapper-xml",permalink:"/zh-CN/docs/latest/development/development-specification/mapper-xml",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.1/development/development-specification/mapper-xml.md",tags:[],version:"1.3.1",sidebarPosition:10,frontMatter:{title:"Mapper XML \u89c4\u8303",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"\u5982\u4f55\u7f16\u5199\u5355\u5143\u6d4b\u8bd5\u4ee3\u7801",permalink:"/zh-CN/docs/latest/development/development-specification/how-to-write-unit-test-code"},next:{title:"\u5e93\u8868\u7ed3\u6784",permalink:"/zh-CN/docs/latest/development/table/all"}},m={},s=[{value:"1.\u57fa\u672c\u9075\u5faa\u89c4\u8303",id:"1\u57fa\u672c\u9075\u5faa\u89c4\u8303",level:2},{value:"2.\u65b9\u6cd5\u540d\u79f0\u89c4\u8303",id:"2\u65b9\u6cd5\u540d\u79f0\u89c4\u8303",level:2},{value:"3.parameterType\u89c4\u8303",id:"3parametertype\u89c4\u8303",level:2},{value:"3.1 \u57fa\u672c\u7c7b\u578b",id:"31-\u57fa\u672c\u7c7b\u578b",level:3},{value:"3.2 \u96c6\u5408\u7c7b\u578b",id:"32-\u96c6\u5408\u7c7b\u578b",level:3},{value:"3.3 Map\u7c7b\u578b",id:"33-map\u7c7b\u578b",level:3},{value:"3.4 \u5b9e\u4f53\u7c7b\u578b",id:"34-\u5b9e\u4f53\u7c7b\u578b",level:3},{value:"3.5 \u591a\u4e2a\u53c2\u6570\u7c7b\u578b",id:"35-\u591a\u4e2a\u53c2\u6570\u7c7b\u578b",level:3},{value:"4.XML\u6587\u4ef6\u7f16\u5199\u793a\u4f8b",id:"4xml\u6587\u4ef6\u7f16\u5199\u793a\u4f8b",level:2}],d={toc:s};function o(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Contributor\u4e3aApache Linkis\u8d21\u732e\u65b0\u7684\u6570\u636e\u8868\uff0c\u7f16\u5199Mapper XML\u65f6\u9700\u9075\u5faa\u5982\u4e0b\u89c4\u8303\u8fdb\u884c\u5f00\u53d1\u3002")),(0,r.kt)("h2",{id:"1\u57fa\u672c\u9075\u5faa\u89c4\u8303"},"1.\u57fa\u672c\u9075\u5faa\u89c4\u8303"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728mapper.xml\u4e2dnamespace\u7b49\u4e8ejava\u63a5\u53e3\u5730\u5740  "),(0,r.kt)("li",{parentName:"ul"},"java\u63a5\u53e3\u4e2d\u7684\u65b9\u6cd5\u540d\u548cXML\u4e2dstatement\u7684id\u4e00\u81f4  "),(0,r.kt)("li",{parentName:"ul"},"java\u63a5\u53e3\u4e2d\u7684\u65b9\u6cd5\u8f93\u5165\u53c2\u6570\u7c7b\u578b\u548cXML\u4e2dstatement\u7684parameterType\u6307\u5b9a\u7684\u7c7b\u578b\u4e00\u81f4"),(0,r.kt)("li",{parentName:"ul"},"java\u63a5\u53e3\u4e2d\u7684\u65b9\u6cd5\u8fd4\u56de\u503c\u7c7b\u578b\u548cXML\u4e2dstatement\u7684resultType\u6307\u5b9a\u7684\u7c7b\u578b\u4e00\u81f4"),(0,r.kt)("li",{parentName:"ul"},"XML\u4e2d\u6240\u6709mysql\u5173\u952e\u5b57\u7edf\u4e00\u4f7f\u7528\u5c0f\u5199"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u8fc7\u591a\u7684\u67e5\u8be2\u5b57\u6bb5\u62bd\u8c61\u51faSQL\u7247\u6bb5"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u6574\u578b\u8fd4\u56de\u503c\u7c7b\u578b\u5efa\u8bae\u4f7f\u7528Integer\uff0c\u53ef\u4ee5\u533a\u5206\u672a\u8d4b\u503c\u548c\u503c\u4e3a0\u7684\u60c5\u51b5\uff0c\u5982\u786e\u5b9a\u8fd4\u56de\u503c\u4e3a\u6570\u5b57\u53ef\u4f7f\u7528int\u3002\u5176\u5b83\u6570\u636e\u7c7b\u578b\u7c7b\u4f3c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u5360\u4f4d\u7b26\uff0c\u4f7f\u7528#{name}\uff0c\u800c\u4e0d\u8981\u4f7f\u7528${name}\u3002\u6a21\u7cca\u67e5\u8be2\u53ef\u4ee5\u4f7f\u7528CONCAT('%',#{sname},'%')"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8esql\u8bed\u53e5\u7f16\u5199\uff0c\u4e0d\u4f7f\u7528\u6ce8\u89e3\u65b9\u5f0f\uff0c\u7edf\u4e00\u5199\u5728XML\u6587\u4ef6\u4e2d")),(0,r.kt)("h2",{id:"2\u65b9\u6cd5\u540d\u79f0\u89c4\u8303"},"2.\u65b9\u6cd5\u540d\u79f0\u89c4\u8303"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u65b9\u6cd5\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u6838\u5fc3\u70b9"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5efa\u8bae"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"insert"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u65b0\u589e\u6570\u636e"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5982\u679c\u662f\u81ea\u589e\u4e3b\u952e\uff0c\u5e94\u8be5\u8fd4\u56de\u4e3b\u952eID"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"deleteById"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6839\u636e\u4e3b\u952eID\u5220\u9664\u6570\u636e"),(0,r.kt)("td",{parentName:"tr",align:"left"},"sql\u9ed8\u8ba4\u52a0limit 1\uff0c\u9632\u6b62\u591a\u5220\u6570\u636e"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6b64\u65b9\u6cd5\u4e0d\u5efa\u8bae\u6709\uff0c\u5efa\u8bae\u903b\u8f91\u5220\u9664")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"updateById"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6839\u636e\u4e3b\u952eID\u4fee\u6539\u6570\u636e"),(0,r.kt)("td",{parentName:"tr",align:"left"},"sql\u9ed8\u8ba4\u52a0limit 1\uff0c\u9632\u6b62\u591a\u4fee\u6539\u6570\u636e"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"selectById"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6839\u636e\u4e3b\u952e\u67e5\u8be2\u6570\u636e"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u67e5\u8be2\u4e00\u6761\u6570\u636e"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"selectByIdForUpdate"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6839\u636e\u4e3b\u952e\u52a0\u9501\u67e5\u8be2\u6570\u636e"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u52a0\u9501\u67e5\u8be2\u4e00\u6761\u6570\u636e\uff0c\u4e8b\u52a1\u5904\u7406\u7528"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"queryListByParam"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6839\u636e\u8f93\u5165\u6761\u4ef6\u67e5\u8be2\u6570\u636e\u5217\u8868"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u591a\u53c2\u6570\u67e5\u8be2\u5217\u8868"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"queryCountByParam"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6839\u636e\u8f93\u5165\u6761\u4ef6\u67e5\u8be2\u603b\u6570"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u591a\u53c2\u6570\u67e5\u8be2\u6570\u91cf"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h2",{id:"3parametertype\u89c4\u8303"},"3.parameterType\u89c4\u8303"),(0,r.kt)("p",null,"java\u63a5\u53e3\u4e2d\u5fc5\u987b\u5305\u542b@Param\uff0cXML\u4e2d\u53ef\u4ee5\u4e0d\u5305\u542bparameterType"),(0,r.kt)("h3",{id:"31-\u57fa\u672c\u7c7b\u578b"},"3.1 \u57fa\u672c\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// java\u63a5\u53e3\nUser selectUserById(@Param("id") Integer id);\n// XML\u6587\u4ef6\n<select id="selectUserById" resultType="userMap">\n    select id, name \n    from user\n    where id = #{id}\n</select>\n')),(0,r.kt)("h3",{id:"32-\u96c6\u5408\u7c7b\u578b"},"3.2 \u96c6\u5408\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// java\u63a5\u53e3\nList<User> userListByIds(@Param("ids") List<Integer> ids);\n// XML\u6587\u4ef6\n<select id="userListByIds" resultMap="userMap">\n    select id, name\n    from user\n    where id in\n        <foreach collection="ids" separator="," open="(" close=")" item="item">\n            #{item}\n        </foreach>\n</select>\n')),(0,r.kt)("h3",{id:"33-map\u7c7b\u578b"},"3.3 Map\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// java\u63a5\u53e3\nUser queryByParams(@Param("map") Map<String, Object> parasms);\n// XML\u6587\u4ef6\n<select id="queryByParams" resultMap="userMap">\n    select id, name\n    from user\n    where id = #{map.id} and name = #{map.name}\n</select>\n')),(0,r.kt)("h3",{id:"34-\u5b9e\u4f53\u7c7b\u578b"},"3.4 \u5b9e\u4f53\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// java\u63a5\u53e3\nUser queryByUser(@Param("user") User user);\n// XML\u6587\u4ef6\n<select id="queryByUser" resultMap="userMap">\n    select id, name\n    from user\n    where id = #{user.id} and name = #{user.name}\n</select>\n')),(0,r.kt)("h3",{id:"35-\u591a\u4e2a\u53c2\u6570\u7c7b\u578b"},"3.5 \u591a\u4e2a\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// java\u63a5\u53e3\nUser queryByIdAndName(@Param("id") Integer id, @Param("name") String name);\n// XML\u6587\u4ef6\n<select id="queryByIdAndName" resultMap="userMap">\n    select id, name\n    from user\n    where id = #{id} and name = #{name}\n</select>\n')),(0,r.kt)("h2",{id:"4xml\u6587\u4ef6\u7f16\u5199\u793a\u4f8b"},"4.XML\u6587\u4ef6\u7f16\u5199\u793a\u4f8b"),(0,r.kt)("p",null,"\u5408\u7406\u5730\u4f7f\u7528\u7a7a\u683c\u548c\u7f29\u8fdb\u6765\u589e\u5f3a\u53ef\u8bfb\u6027\uff0c\u5404\u7c7b\u578bsql\u8bed\u53e5\u793a\u4f8b\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">\n<mapper namespace="org.apache.linkins.dao.mapper.UserMapper">\n    -- \u65b0\u589e\u8bed\u53e5\n    <insert id="insert">\n        insert into user (id, name)\n        values (1, \'z3\');\n    </insert>\n\n    -- \u5220\u9664\u8bed\u53e5\n    <delete id = "deleteUserByIdAndName">\n        delete from user\n        where name = #{name}\n            and id = #{id}\n    </delete>\n\n    -- \u4fee\u6539\u8bed\u53e5\n    <update id="updateUserById">\n        update user\n        set name = #{name}\n        where id = #{id}\n    </update>\n\n    -- \u67e5\u8be2\u8bed\u53e5\n    <select id="selectUserByName" resultMap="userMap">\n        select id, name\n        from user\n        where name = \'z3\'\n    </select>\n\n    -- sql\u7247\u6bb5\n    <sql id="user">\n        id,\n        name\n    </sql>\n    -- \u5f15\u7528\n    <include refid="user"/> \n\n    -- resultMap\n    <resultMap type="Assets" id="userMap">  \n        <id property="id" column="id" />  \n        <result property="name" column="name" />\n    </resultMap>\n    -- \u5f15\u7528\n    <select id="queryListByParam" parameterType="map" resultMap="userMap">\n        do...\n    </select>\n\n    -- \u6761\u4ef6\u5224\u65ad\n    <if test="name != null and name != \'\'">  \n        name = #{name}  \n    </if>\n\n    -- \u5b50\u67e5\u8be2\n    <select id="selectUserByTeacherIdAndName" resultMap="userMap">\n        select u.id, u.name\n        from user u\n        where u.name in (\n            select t.name\n            from teacher t\n            where t.id = 1\n                and t.name = \'z3\'\n            )\n            and u.id = 2\n    </select>\n</mapper>\n')))}o.isMDXComponent=!0}}]);