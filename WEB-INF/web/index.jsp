<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ include file="common/taglibs.jsp" %>
<jsp:include page="common/header.jsp" flush="true" ></jsp:include>
<body>

<div class="page" id="Page">
	<div class="hd">
	<div class="logo"><a href="./"> </a></div>
	<div class="hd-panel">
	 <div id="ControlPanel" class="control-panel">操作区域</div>
	</div>
	 <div class="user-bar">你好，<strong>${sessionScope.userName}</strong> | <a href="logout">退出</a></div>
	</div>
	<div class="main">
	<div class="dir-list-container">
		<div class="dir-list" id="DirList">dir-list</div>
	</div>

	<div class="file-list" id="FileList">
		<div class="file-list-title" id="FileListTitle">title</div>
		<div class="file-list-content" id="FileListContent"> content</div>
	</div>
	<div class="line-bar">&nbsp;</div>
	<div class="info-panel" id="InfoPanel">info-panel</div>
	</div> 
<script type="text/javascript" src="js/fa.js"></script>
<jsp:include page="common/footer.jsp" flush="true"></jsp:include>
</div>
</body>
</html>