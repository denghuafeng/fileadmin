
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

var DIR = DIR || {};
var FILE = FILE || {};
var UPLOAD = UPLOAD || {};
var Tree = Tree || {};

function hasError() {
 	
 	this.showTips = function(ErrorMessage) {
 		var str = [];
 		for (var item in ErrorMessage) {
 			str.push(ErrorMessage[item] + '\r\n');
 		}
		alert(str.join(''));
		ErrorMessage = null;
		delete ErrorMessage;
		gotoUrl();
 	}
 	
 	this.gotoUrl = function() {
 		window.location.replace(global.FA_LOGIN_URL);
 	}
 	
 	if ('undefined' != typeof ErrorMessage) {
 		if (ErrorMessage != null) {
 			showTips(ErrorMessage);
			return true;
 		}
 	}
 	return false;
 }
