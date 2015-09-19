## 基本功能列表 ##

---

> - 支持目录文件浏览
> - 多文件上传
> - 下载
> - 文件名修改
> - 文件删除、移动

## 更多功能列表 ##

---

> - 文本、文档与图片查看
> - 排序
> - 列表查看
> - 拖拽操作
> - 图片icon


## 开发运行环境版本 ##

---

  1. jdk 1.6.x
> 2. tomcat 6.0.18
> 3. Struts 2.1.8
> 4. eclipse 3.4.x


## 目录结构 ##

---

> + build    编译文件夹
> > - contactfile.xml  合并js与css
> > - copyfile.xml     copy 目录与文件
> > - compress.xml     压缩js与css



> + css      css文件夹，统一压缩后
> > - module1.css
> > - default.css

> + css-src  css源文件

> + error   出错文件夹
> + help    帮助指南文件夹
> + img     图片文件夹
> + js      JS文件夹
> + js-src  JS源码文件夹
> + readme  配置说明与开发手册
> + src     Java源码文件夹，与WEB-INF/src相同，选一个
> + swf     flash文件
> + tools   一些辅助工具文件夹



> + WEB-INF 编译后程序文件夹
> > + classes  Java运行程序
> > + lib      用户的Jar包
> > + src      Java源码
> > + web      Struts映射指向页面，外部不可访问
> > web.xml    项目配置文件
    * tld      JSTL 配置函数
    * properties Java配置文件




> + work    Web Server 工作路径，一般在Tomcat里配置，本处work无用


> .classpath Java编译路径文件，供eclipse使用
> .#webclasspath Java用户项目编译包，供eclipse使用
> .tomcatplugin  Tomcat补丁文件，供eclipse使用


> upload.jsp 上传测试文件


## 要上线的文件夹列表 ##

---

> + css

> + error

> + help

> + img

> + js

> + swf

> + WEB-INF

> (WEB-INF/src不上线)


## 不需要上线的文件夹列表 ##

---

> - build

> - css-src

> - js-src

> - readme

> - src

> - tools

> - WEB-INF/src/

> 以及相关编译路径文件

## 使用前请详细阅读readme ##