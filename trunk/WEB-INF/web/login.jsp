<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ include file="common/taglibs.jsp" %>
<jsp:include page="common/header.jsp" flush="true" ></jsp:include>
<body style="background:#fcfdff">
<div class="page">
	<div class="hd">
	<div class="logo"><a href="#"> </a></div>
	</div>
	<div class="main">
	<div class="login-form">
	<br/>
	<div class="login-tit">FileAdmin 文件管理系统，请使用<strong>utftp</strong>用户名密码登录</div><br/>
	<form acion="./login.action" method="post">
	<c:set var="validateCodeURL" value="validateCode"/>
		用户名：<input name="userName" size="10" type="text" /><br/>
		密&nbsp;&nbsp;&nbsp;&nbsp;码：<input name="passWord" size="10" type="password" /><br/>
		验证码：<input type="text" name="validateCode" size="6" maxlength="4"><img src="${validateCodeURL}?d=${random}" style="cursor:pointer;vertical-align:middle" title="点击刷新" align="middle" onclick="this.src+='?d='+new Date();"><br/>
		<font class="validate-tips">输入验证码，不区分大小写。</font><br>
		<br/><button type="submit"> 登 录 </button>
	<div class="login-tips">
	<c:if test="${userName == '' || passWord == ''}">
		<li>请输入用户名和密码</li>
	</c:if>
	<c:if test="${validateCode == ''}">
		<li>请输入验证码</li>
	</c:if>
	<c:if test="${message == 'loginFailed' && userName != '' && passWord != '' && validateCode != ''}">
		<li>用户名、密码或验证码错误，请重新输入</li>
	</c:if>	
	</div>
	</form>
	</div>
	</div> 
<jsp:include page="common/footer.jsp" flush="true"></jsp:include>
</div>
</body>
</html>