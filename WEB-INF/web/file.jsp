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
<title>文件操作-FileAdmin</title>
</head>
<body>
<c:set var="root" value="e:/ut/"></c:set>
${path}
${toPath}
<hr>
<c:if test="${del == 'yes'}">
</c:if>
<c:forEach var="item" items="${MESSAGE}">
${item}<br>
</c:forEach>
</body>
</html>