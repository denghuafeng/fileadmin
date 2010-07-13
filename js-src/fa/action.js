
/**
 * action静态类，用来初始化各种页面与调用js类库
 * 内部方法部分对外公开
 * 
 */
 /**
  * 给Action用的一些常用函数
  */
var UploadActoin = UploadActoin || {};
var DirAction   = DirAction || {};
var FileAction   = FileAction || {};
var UploadAction = UploadAction || {};
var ErrorMessage = ErrorMessage || {};
var MESSAGE = MESSAGE || {};
// 定义JSON对象
var DIR = DIR || {};
var FILE = FILE || {};
var UPLOAD = UPLOAD || {};
var Tree = Tree || {};
var SWFUP = SWFUP || {};

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
