/**
 * FileAdmin
 * Copyright 2010 Youngli Inc. All rights reserved.
 * 
 * path: js-src/fa/action.js
 * author: lichunping/jarry
 * version: 0.9
 * date: 2010/06/15
 */

/**
 * action静态类，用来初始化各种页面与调用js类库
 * 内部方法部分对外公开
 * 给Action用的一些常用函数
 * author: lichunping/jarry
 * 
 */
var UploadActoin = UploadActoin || {};
var DirAction   = DirAction || {};
var FileAction   = FileAction || {};
var UploadAction = UploadAction || {};
var HelpAction   = HelpAction   || {};
var ErrorMessage = ErrorMessage || {};
var MESSAGE = MESSAGE || {};
// 定义JSON对象
var DIR = DIR || {};
var FILE = FILE || {};
var UPLOAD = UPLOAD || {};
	UPLOAD.uploadPath = UPLOAD.uploadPath || '';
var Tree = Tree || {};
var SWFUP = SWFUP || {};

/**
 * action文件的出错信息处理
 * 主要用在无权限访问页面时
 */
function hasError() {
 	
 	this.showTips = function(ErrorMessage) {
 		var str = [];
 		var len = 0;
 		for (var item in ErrorMessage) {
 			str.push(ErrorMessage[item] + '\r\n');
 			len ++;
 		}
 		
 		if (len > 0) {
			alert(str.join(''));
			//delete ErrorMessage;
			ErrorMessage = {};
			gotoUrl();
			return true;
 		}
 		// 错误提示小于0，表示空，可返回true
 		return false;
 	}
 	
 	this.gotoUrl = function() {
 		window.location.replace(global.FA_LOGIN_URL);
 	}
 
 	return showTips(ErrorMessage);

 }
