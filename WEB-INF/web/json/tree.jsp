<?xml version="1.0" encoding="UTF-8" ?>
<%@ page language="java" contentType="text/xml; charset=utf-8" pageEncoding="utf-8"%>
<%@ include file="../common/taglibs.jsp" %>

<c:if test="${id == null || id == 0}" >
<tree id='0'>
<item child='1' id='1' text='${root}'  select='' open='1' im0='base.gif' im1='base.gif'  im2='base.gif'></item>
</tree>
</c:if>
<c:if test="${id != null && id != 0}" >
	<c:set var="count" value="0"/>
	<tree id='${id}'>
		<c:forEach var="name" items="${foldersName}">		
			<c:set var="count" value="${count+1}"/>
			<item child='1' id='${id}_${count}' text='${name}'>
			</item>
		</c:forEach>
	</tree>
</c:if>
