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