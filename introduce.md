# 一个服务端Web资源管理器，替代FTP的管理方案 #

---

## 介绍： ##
  * 一个基于Java与JS的开源Web文件管理系统，可以方便的管理自己服务器上的文件。
  * 通过Ajax提升交互体验，文件数据通过JSON格式传输。

## 系统架构 ##
```
 *	后台基于Java，采用Struts2架构，前端利用JavaScript绘制，通过Ajax传输数据
-----------------------------------------------
 *	前后端MVC模型
 *     	          | V * HTML/CSS，	样式与表现分离
 *     	前端 - | C * JS behavior/JS action， 每个页面都有唯一JS对象调用JS类库、组件、功能处理事件与展现逻辑
 *     	           | M * JS类库、组件，页面功能
----------------------------------------------
 *                 | V * JSP模板/HTML/CSS/JS Control层
 *       后端 - | C * Struts2 action，拦截请求，调用Java Bean处理与展现相关的业务逻辑
 *                 | M * Java Bean，各种Java对象，封装接口
-----------------------------------------------
 *                  | V * JSP模板/HTML/CSS/JS Control层
 *     前后端 - | C * Struts2 action，JS action与类库
 *                  | M * Java Bean，各种Java对象，封装接口
-----------------------------------------------
 *     根据情况适当把业务逻辑交由JS处理，减少Action负担。
```

## 基本功能列表 ##
  * 支持目录文件浏览
  * 多文件上传
  * 下载
  * 文件名修改
  * 文件删除、移动


## 更多功能列表 ##
  * 文本、文档与图片查看
  * 排序
  * 列表查看
  * 拖拽操作
  * 图片icon

## 开发运行环境版本 ##
  * jdk 1.6.x
  * tomcat 6.0.18
  * Struts 2.1.8
  * eclipse 3.4.x
  * JSTL 2
  * EL

## 兼容系统与浏览器 ##
  * windows
  * linux
  * IE6 +
  * Firefox 3 +
  * Chrome


> 请SVN获得代码后查看readme文件夹。

## 联系我 ##
  * gtalk: jarryli@gmail.com
  * MSN: jiarry@hotmail.com
  * website:http://jiarry.blogchina.com