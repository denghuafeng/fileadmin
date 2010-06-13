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
	
	return {
		pageInit      : pageInit,            //  初始化页面
		setPageHeight : setPageHeight,       //  设置页面高度
		getDirJSON    : getDirJSON//,          //  得到dir的JSON数据
		//parseDirJSON  : parseDirJSON         //  解析dir的JSON数据，不一定要公开
	}
	
}();

//alert();
//event.on(window, "onload", setPageHeight);

UploadActoin = function () {
	var uploadPath = "";
	
	var init = function() {
	var swfu;
	window.onload = function() {
			var settings = {
				flash_url : "swf/swfupload.swf",
				upload_url: "upload.action",
				file_post_name : "uploads",
				post_params: {"path" : "${file:getRelativePath(root, path)}"},
				file_size_limit : "1024 MB",
				file_types : "*.*",
				file_types_description : "All Files",
				file_upload_limit : 100,
				file_queue_limit : 0,
				custom_settings : {
					progressTarget : "fsUploadProgress",
					cancelButtonId : "btnCancel"
				},
				debug: false,

				// Button settings
				button_image_url: "img/upload-button.png",
				button_width: "90",
				button_height: "24",
				button_placeholder_id: "spanButtonPlaceHolder",
				
				// The event handler functions are defined in handlers.js
				file_queued_handler : fileQueued,
				file_queue_error_handler : fileQueueError,
				file_dialog_complete_handler : fileDialogComplete,
				upload_start_handler : uploadStart,
				upload_progress_handler : uploadProgress,
				upload_error_handler : uploadError,
				upload_success_handler : uploadSuccess,
				upload_complete_handler : uploadComplete,
				queue_complete_handler : queueComplete	// Queue plugin event
			};

			swfu = new SWFUpload(settings);
	     };
	};
	
	return {
		init : init,
		uploadPath : uploadPath
	};
}
 
DirAction.pageInit();