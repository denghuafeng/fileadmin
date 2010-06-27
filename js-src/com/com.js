
/*
 * FA使用的公共函数库
 */
 
 /**
  * 得到文件名的后缀格式
  * 
  * @param {string} name 文件名
  * @return {string} ext 扩展名
  * @author jarry
  */
var getExt = function(name) {
	if (name && name.length > 0) {
		var ext;	
		var lastDotAt = name.lastIndexOf(".");
		if (lastDotAt != -1) {
			ext = name.substr(lastDotAt + 1);
		} else {
			ext = "";
		}
	}
	return ext
}	

var OFFICE_FILE_EXT = [
	'doc', 'ppt', 'xls', 'docx', 'pptx', 'xlsx'
];

var isOfficeFile = function(ext) {
	return array.indexOf(OFFICE_FILE_EXT, ext);
}

var getFolderIconCss = function() {
	return 'folder';
}

var	getFileIconCss = function(type) {
	if (type == 'folder') return 'folder';		
	switch(type) {
		// 常用文档
		case 'doc' : 
				ext = 'doc'; break;
		case 'docx' : 
				ext = 'doc'; break;
		case 'xls' : 
				ext = 'xls'; break;
		case 'xlsx' : 
				ext = 'xls'; break;
		case 'ppt' : 
				ext = 'ppt'; break;
		case 'pptx' : 
				ext = 'ppt'; break;
		case 'pdf' : 
				ext = 'pdf'; break;
		case 'txt' : 
				ext = 'txt'; break;
		
		// 可执行文件		
		case 'exe' : 
				ext = 'exe'; break;
		
		// web文件		
		case 'html' : 
				ext = 'html'; break;
		case 'htm' : 
				ext = 'html'; break;
		case 'css' : 
				ext = 'css'; break;
		case 'js' : 
				ext = 'js'; break;	
		case 'swf' : 
				ext = 'swf'; break;	
		case 'fla' : 
				ext = 'swf'; break;		

		// 压缩				
		case 'zip' : 
				ext = 'zip'; break;
		case 'rar' : 
				ext = 'rar'; break;
		case 'gz' : 
				ext = 'rar'; break;
		case 'tar' : 
				ext = 'rar'; break;
				
		// 图片		
		case 'gif' : 		
				ext = 'gif'; break;
		case 'png' : 		
				ext = 'png'; break;
		case 'jpg' : 		
				ext = 'jpg'; break;		
				
		// 音乐		
		case 'mp3' : 		
				ext = 'mp3'; break;
		case 'wma' : 		
				ext = 'mp3'; break;
		case 'wav' : 		
				ext = 'mp3'; break;
		case 'rm' : 		
				ext = 'rm'; break;									
					
		default : 
				ext = 'file';				
	}			
	return ext;			
};

/**
 * 解开后台java encode html方法，解码字符包括 & ' " < >
 * @param {String} html 传入的html字符串
 * @return {String} 解码后的字符串
 * @author jarryli@gmail.com
 */
var decodeHTML = function(html) {
	html = html.replace(/&amp;/g, "&");
	html = html.replace(/&#039;/g, "'");
	html = html.replace(/&quot;/g, "\"");
	html = html.replace(/&lt;/g, "<");
	html = html.replace(/&gt;/g, ">");
	return html;
} 

/**
 * 根据路径名是否需要增加斜杠
 * @param {String} path 路径
 * @return {String} slash 斜杠或者空字符串
 * @author jarryli@gmail.com
 */
var getSlash = function(path) {
	if (path == null ||path.length <= 0) return path;
	var last = path.substring(path.length - 1);
	//alert(path + " | " + last);
	if (last == '/' || last == '\\') {
		return '';
	}
	return '/';
}

var SPECIAL_CHAR = ['\\', '/', ':', '*', '?', '"', '<', '>', '|'];
/**
 * 校验文件名是否合法，不能含有的字符见 SPECIAL_CHAR
 * @param {String} name
 * @return {Boolean} true || false
 */
var isAvailableName = function(name) {
	if (name == null || name.length < 0) return false;
	var regexp = /[\\\/:*?\"<>|]+/g;
	//var reg = /[\\\/:*?\"<>|\']+/g; // 不允许单引号
	return !regexp.test(name);
}
/**
 * 删除最后一个斜杠或反斜杠
 * @param str {String} 
 * @return str {String}
 */
var removeLastSlash = function(str) {
	if (str == null || str.length <= 0) return str;
	var lastStr = str.substr(str.length -1);
	if (lastStr == "/") {
		str = str.substr(0, str.length -1);
	}
	
	if (lastStr == "\\") {
		str = str.substr(0, str.length -1);
	}
	 
	return str;
	
}

/**
 * 斜杠替换反斜杠
 * @param path {String}
 * @param path {String}
 *
 */ 
var replaceSlash = function(str) {
	if (str == null || str.length <= 0) return str;
	str = str.replace(/\\/g, "/");
	return str;
}

/**
 * encodeURIComponent路径，但是斜杠除外
 * @param path {String}
 * @param path {String}
 *
 */ 
var encodeURL = function(str) {
	if (str == null || str.length <= 0) return str;
	if (str.indexOf("\\") != -1) {
		str = replaceSlash(str);
	}
	
	if (str.indexOf("/") != -1) {
		var tmpArr = [];
		tmpArr = str.split("/");		

		var len = tmpArr.length;
		for (var i = 0; i < len; i++) {
			tmpArr[i] = encodeURIComponent(tmpArr[i]);
		}
		return tmpArr.join("/");
	}
	return encodeURIComponent(str);	
}

/**
 * 创建装html模板的容器，装载在页面中
 *
 */ 
var createTemplateHTMLContainer = function() {
	if (!g('TemplateHTMLContainer')) {
		var div = document.createElement('div');
		div.id = 'TemplateHTMLContainer';
		document.body.appendChild(div);
	}
}

/**
 * 创建装html模板的容器，装载在页面中
 * @param obj {HTMLDivElement}
 */ 
var getTemplateHTMLContainer = function() {
	if (g('TemplateHTMLContainer')) {
		return g('TemplateHTMLContainer');
	} else {
		createTemplateHTMLContainer();
		return g('TemplateHTMLContainer');
	}
}

/**
 * 开关遮罩层
 * @param obj {HTMLDivElement}，无obj时默认id为mask 
 * @param act {String} hide | show ，无act时，根据当前状态开关
 * 
 */ 
var toggleMask = function(obj, act) {
	var mask = (obj && typeof obj == 'object') ? obj : g('mask'); 
	if (act != null && act.lenght > 0) {
		mask.style.display = act;
	} else {
		var isHide = (mask.style.display == '' || mask.style.display == 'none');
		mask.style.display = isHide ? 'block' : 'none';
	}
}
