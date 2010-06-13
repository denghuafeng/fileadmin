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
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>文件上传-FileAdmin</title>
</head>
<body>
目录：${path}<br/>
<c:set var="root" value="${root}"></c:set>
${uploadFile}<br>
${uploadFileContentType}

<hr>

<c:forEach var="item" items="${uploadsFileName}">
${item}<br>
</c:forEach>

<hr>

<c:forEach var="item" items="${param}">
${item.key} = ${item.value}<br>
</c:forEach>

<hr>

<c:forEach var="item" items="${MESSAGE}">
${item}<br>
</c:forEach>
</body>
</html>