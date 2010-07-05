<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ include file="common/taglibs.jsp" %>
<jsp:include page="common/header.jsp" flush="true" ></jsp:include>
<body>
<div class="page" id="Page">
<div class="mask" id="mask">&nbsp;</div>
	<div class="hd">
	<div class="logo">
		<a href="./" title="FileAdmin Logo"> </a>
	</div>
	<div class="hd-panel">
		 <div id="ControlPanel" class="control-panel">操作区域： <a href="#" id="UploadFileLink">上传文件</a>
		| <a href="#" id="CreateNewFolderLink">新建文件夹</a> | 开发中……还剩 改名、删除、复制等，后台已经完成，差前端展现

		 </div>
	</div>
		<div class="user-bar">你好，<strong>${sessionScope.userName}</strong> | <a href="logout">退出</a></div>
	</div>
	<div class="main">
		<div class="dir-list" id="DirList"></div>
		<div class="file-list" id="FileList">
			<div class="file-list-title" id="FileListTitle">&nbsp;</div>
			<div class="file-list-content" id="FileListContent">The file list table is loading</div>
		</div>
	<div class="line-bar">&nbsp;</div>
	<div class="info-panel" id="InfoPanel">The info area is loading</div>
	</div> 
<script type="text/javascript" src="js/fa.js"></script>
<jsp:include page="common/footer.jsp" flush="true"></jsp:include>
</div>
</body>
</html>
