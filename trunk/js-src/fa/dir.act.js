 
DirAction = function() {
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
		dom.setStyle(DirList, "height", height + 41);
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
	 
	// 点击文件夹，load相应目录树 
	var openFolder = function(path) {
		var s = '';
		try {
			for (var item in Tree) {
				s += (item + ' : ' + Tree[item] + ' | ');
			}
		} catch(e) {
			alert(e);
		}
		alert(s + '\r\n------\r\n' + path);
	}
	
	return {
		pageInit      : pageInit,            //  初始化页面
		setPageHeight : setPageHeight,       //  设置页面高度
		getDirJSON    : getDirJSON,          //  得到dir的JSON数据
		openFolder    : openFolder
		//parseDirJSON  : parseDirJSON         //  解析dir的JSON数据，不一定要公开
	}
	
}();
 
DirAction.pageInit();