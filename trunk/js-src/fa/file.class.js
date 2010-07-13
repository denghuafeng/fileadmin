
/**
 * 文件夹、文件编辑操作类
 * @param 
 */
function File() {
	this.path = '';
	this.relationPath = '';
	this.absolutePath = '';
}

File.prototype = {
	
	createFolder : function(name) {
		FileAction.getFolderJSON(this.path, name);
	},
	
	insertRow : function(folder) {
		if (hasError()) return false; 
//		alert(this._getFolderTr(folder));
// 		需要改为动态dom操作，而非动态请求数据
//		FILE 作为传递过来的JSON数据，可以根据这个数据insertBefore到table的某行中
//		这样可以减少一次请求，有时间再升级
		DirAction.getDirJSON(decodeHTML(UPLOAD.uploadPath));
	},
	
	/**
	 * @param {Object} folder 文件夹对象
	 */
	_getFolderTr : function(folder) {
		var tr = "", target = '_blank', href = '';
		var relationPath = this.relationPath || DIR.relationPath;
		var hrefClass = getFolderIconCss();
		if (global.FIEL_WEB_ROOT_URL) {
			href = global.FIEL_WEB_ROOT_URL + encodeURIComponent(decodeHTML(relationPath)) + getSlash(relationPath) + encodeURIComponent(decodeHTML(folder.name));
		} 
		nameLink = ('<a href="' + href + '" class="' + hrefClass +  '" target="' + target + '">' + folder.name + '</a>');
		tr += '<tr><td>' + nameLink +  '</td><td>' + folder.length +  '</td><td>'
		       + folder.date +  '</td><td>' + folder.type +  '</td><td>&nbsp;</td></tr>';	
		       
	   return(tr);
	}
	
}