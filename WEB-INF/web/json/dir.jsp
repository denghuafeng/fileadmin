<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ include file="../common/taglibs.jsp" %>
var DIR = DIR || {};
DIR.listLength = ${listLength};
DIR.root = '${root}';
DIR.path = '${char:encodeCovert(path, "iso-8859-1", "utf-8")}';
DIR.absolutePath  = '<s:property value="absolutePath"/>';
DIR.relationPath = '${file:getRelativePath(root, path)}${name}';
DIR.Folders = {
	<c:set var="count" value="0"/>
	nameList : [
	<c:forEach var="name" items="${foldersName}">'<c:out value="${name}"/>'<c:set var="count" value="${count+1}"/><c:if test="${count != foldersLength}" >,</c:if>
	</c:forEach>]
};

DIR.Files = {
	nameList : [
	<c:set var="count" value="0"/>
	<c:forEach var="name" items="${filesName}">'<c:out value="${name}"/>'<c:set var="count" value="${count+1}"/><c:if test="${count != filesLength}" >,</c:if>
	</c:forEach>]
};

DIR.FilesList = {
	<c:set var="count" value="0"/>	
	<c:forEach var="item" items="${fileListMap}">
		<c:set var="count" value="${count+1}"/>
		'<c:out value="${item.name}"/>' : {			<%--
			<c:forEach var="propsName" items="${propertiesName}">
				"${propsName}" : ${item.propsName}
			</c:forEach>
			--%>
			'${propertiesName[0]}' : '${item.name}',
			'${propertiesName[1]}' : '${item.type}',
			'${propertiesName[2]}' : '${item.ext}',
			'${propertiesName[3]}' : '${item.date}',
			'${propertiesName[4]}' : '${item.length} KB',
			'${propertiesName[5]}' : '${item.readonly}',
			'${propertiesName[6]}' : '${item.hidden}'
		}<c:if test="${count != fileListMapLength}" >,</c:if>
		
	</c:forEach>
};

DIR.hardPartition = {
			'${propertiesName[7]}' : '${fileListMap[0].totalSpace} GB',
			'${propertiesName[8]}' : '${fileListMap[0].freeSpace} GB',
			'${propertiesName[9]}' : '${fileListMap[0].useableSpace} GB'
};