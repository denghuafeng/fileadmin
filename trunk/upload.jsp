<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<% 
request.setCharacterEncoding("utf-8");
response.setCharacterEncoding("utf-8");
%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="x" uri="http://java.sun.com/jsp/jstl/xml" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="sql" uri="http://java.sun.com/jsp/jstl/sql" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="char" uri="http://fileadmin.youngli.com/character" %>
<%@ taglib prefix="file" uri="http://fileadmin.youngli.com/filePath" %>
<!doctype html>
<html>
<head>
<title>SWFUpload Demos - Simple Demo</title>
<link href="css/fa.css" rel="stylesheet" type="text/css" />
</head>
<body>
<h3>可以上传文件，界面有待调整</h3>
<p>
<%

String path = "";
if (request.getParameter("path") != null) {
    String decode = java.net.URLDecoder.decode(request.getParameter("path"));
	path = new String(decode.getBytes("ISO-8859-1"),"utf-8");
} else {
	path = "/home/work/www/";
}
%>
${path}
<s:property value="path"/>
<c:set var="path" value=""></c:set>
上传目录：<%=path%></p>
|| <%=java.net.URLEncoder.encode(path)%>
<center>
<script type="text/javascript" src="js/core.js"></script>
<!--
<script type="text/javascript" src="js-src/util/upload/swfupload.js"></script>
<script type="text/javascript" src="js-src/util/upload/swfupload.queue.js"></script>
<script type="text/javascript" src="js-src/util/upload/fileprogress.js"></script>
<script type="text/javascript" src="js-src/util/upload/handlers.js"></script>-->
<script type="text/javascript">
		var swfu;

		window.onload = function() {
			var settings = {
				flash_url : "swf/swfupload.swf",
				upload_url: "upload.action",
				file_post_name : "uploads",
				post_params: {"path" : "<%=path%>/"},
				file_size_limit : "1024 MB",
				file_types : "*.*",
				file_types_description : "All Files",
				file_upload_limit : 100,
				file_queue_limit : 0,
				custom_settings : {
					progressTarget : "fsUploadProgress",
					cancelButtonId : "btnCancel"
				},
				debug: false,

				// Button settings
				button_image_url: "img/upload-button.png",
				button_width: "90",
				button_height: "24",
				button_placeholder_id: "spanButtonPlaceHolder",
				
				// The event handler functions are defined in handlers.js
				file_queued_handler : fileQueued,
				file_queue_error_handler : fileQueueError,
				file_dialog_complete_handler : fileDialogComplete,
				upload_start_handler : uploadStart,
				upload_progress_handler : uploadProgress,
				upload_error_handler : uploadError,
				upload_success_handler : uploadSuccess,
				upload_complete_handler : uploadComplete,
				queue_complete_handler : queueComplete	// Queue plugin event
			};

			swfu = new SWFUpload(settings);
	     };
	</script>
	<h2>Simple Demo</h2>


			<div class="fieldset flash" id="fsUploadProgress">
			<span class="legend">Upload Queue</span>
			</div>
		<span id="divStatus">0 Files Uploaded</span>
			<div>
				<span id="spanButtonPlaceHolder"></span>
				<input id="btnCancel" type="button" value="Cancel All Uploads" onclick="swfu.cancelQueue();" disabled="disabled" style="margin-left: 2px; font-size: 8pt; height: 29px;" />
			</div>
</center>
<hr/>
<pre>
${message};
${header["user-agent"]}
<s:property value="message"/>
<c:out value="${message}"/>
<hr>
pageContext取得其他有关用户要求或页面的详细信息。
${pageContext.request.queryString} 取得请求的参数字符串
${pageContext.request.requestURL} 取得请求的URL，但不包括请求之参数字符串
${pageContext.request.contextPath} 服务的web application 的名称
${pageContext.request.method} 取得HTTP 的方法(GET、POST)
${pageContext.request.protocol} 取得使用的协议(HTTP/1.1、HTTP/1.0)
${pageContext.request.remoteUser} 取得用户名称
${pageContext.request.remoteAddr } 取得用户的IP 地址
${pageContext.session.new} 判断session 是否为新的
${pageContext.session.id} 取得session 的ID
${pageContext.servletContext.serverInfo} 取得主机端的服务信息
<hr>
</pre>
<a href="dir?path=<%=path%>">显示${path}盘目录</a>
<form action="dir" method="get">
<input name="path" value="<%=path%>"/>
<input type="submit"/>
</form>
</body>
</html>
