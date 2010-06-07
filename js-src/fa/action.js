/**
 * action静态类，用来初始化各种页面与调用js类库
 * 内部方法部分对外公开
 * 
 */
 var DirAction = function() {
	/**
	 * 设置页面高度
	 */
	 
	var dirClass = new Directory();
	var page     = g('Page');

	var DIR      = dirClass.DIR; // 与directory类相同
	var dirPath  = global.DIR_PATH;
	//var FileList = dirClass.FileList; 
	var FileListContent = dirClass.FileListContent; 
	var DirList = dirClass.DirList;
	var FileList = dirClass.FileList;
	 
	var setPageHeight = function() {
		var h = document.body.offsetHeight ;
		h = h > 200 ? h : 200;
		var height = h - 180;
		dom.setStyle(FileListContent, "height", height);
		dom.setStyle(DirList, "height", height + 23);
	}

	/**
	 * 初始化函数
	 */
	var pageInit = function() {
		dirClass.setDirAndFileList();
		dirClass.setInfoPanel();		
		setPageHeight();
		event.on(window, "onresize", DirAction.setPageHeight);
	}
	
	var getDirJSON = function(path) {
		var url = dirPath + '?path=' + encodeURIComponent(path);
		xhr = ajax.get(url, parseDirJSON);
	}

	/**
	 * Ajax的回调函数
	 */
	var parseDirJSON = function(xhr, responseText) {
		eval(responseText);
		//dirClass.setDirAndFileList(DIR);
		dirClass.setFileAndFolderList(DIR);
		dirClass.setInfoPanel(DIR);
	}
	
	return {
		pageInit      : pageInit,            //  初始化页面
		setPageHeight : setPageHeight,       //  设置页面高度
		getDirJSON    : getDirJSON//,          //  得到dir的JSON数据
		//parseDirJSON  : parseDirJSON         //  解析dir的JSON数据，不一定要公开
	}
	
}();
DirAction.pageInit();
//alert();
//event.on(window, "onload", setPageHeight);
