/*
 * FileAdmin
 * Copyright 2010 Youngli Inc. All rights reserved.
 * 
 * path: action.js
 * author: lichunping/jarry
 * version: 0.9
 * date: 2010/06/15
 */

/**
 * 文件Action
 * 提供文件改名、复制、删除，鼠标移动事件等功能
 *
 */
FileAction = (function() {	
	
	var fileClass = new File();
	var tableList = g('FileTableList');
	var filePath  = global.FILE_PATH;
	
	var tableListTr = null;
	var tableListTrIndex = null;
	
	var isEditing = false;

	var init = function () {
		event.on(g('CreateNewFolderLink'), "onclick", FileAction.setCreateFolderHTML);
		event.on(g('FileListContent'), "onscroll", function() {
			hideFileEditBar();
			hideRenameArea();
		});		
		event.on(g('FileListContent'), "onmouseout", FileAction.outFileListContent);	
	}
	
	var outFileListContent = function(event) {
		var x, y;
		if(!document.all) {
      		x = event.clientX; y = event.clientY;
     	} else {
        	x = event.x; y = event.y;
	  	}
	  	if (!isInFileTableList(x, y)) {
	  		hideFileEditBar();
	  		hideRenameArea();
	  	}
	}
	
	var isInFileTableList = function(x, y) {
		if (!x || !y || x <= 0 || y <= 0) return false;
		var top = dom.getPosition(g('FileTableList')).top;
		var left = dom.getPosition(g('FileTableList')).left;
		var width = g('FileTableList').offsetWidth;
		// var height = g('FileTableList').offsetHeight;
		var bottom = dom.getPosition(g('InfoPanel')).top;
		var right = left + width;	
		if ( (x < left || x > right) || 
			 (y < top || y > bottom) 	
			) {
			return false;
		} else {
			return true;
		}
	}
	
	var hideCreateFolder = function() {
		g('CreateNewFolder').style.display = 'none';
		toggleMask();
	}
	var setCreateFolderHTML = function () {

		if (!g('CreateNewFolder')) {	
			try {
				var html = HTMLTemplate.createNewFolderHTML;
				var container = getTemplateHTMLContainer();
				var div = document.createElement('div');
				div.innerHTML = html;
				container.appendChild(div);
				// can not add the below event for chrome
				// event.on(g('CreateNewFolderCancelButton'), 'onclick', FileAction.hideCreateFolder);
				var left = dom.getPosition(this).left;
				var top = dom.getPosition(this).top;
				g('CreateNewFolder').style.left = left + 'px';
				g('CreateNewFolder').style.top = top + 20 + 'px';
			} catch (ex) {
				alert(ex.toString());
			}
		}
		var isHide = (g('CreateNewFolder').style.display == '' || g('CreateNewFolder').style.display == 'none');
		g('CreateNewFolder').style.display = isHide ? 'block' : 'none';
		g('NewFolderName').focus();
		if (g('NewFolderName').value== "" )setTips(null, '');
		toggleMask();
	}
	
	var setTips = function(id, str) {
		var obj = g(id) || g('CreateNewFolerTips');
		obj.innerHTML = str;
		g('NewFolderName').focus();
	}
	
	/**
	 * 给文件列表的每行添加事件
	 */
	var initTableListRowEvent = function() {
		var tableList = g('FileTableList');
		var len = tableList.rows.length;
		
		// 采用DHTML，而不用DOM操作方式
		for (var i = 0; i < len; i++) {
			var obj = {};
			obj.tr = tableList.rows[i];
			obj.trIndex = i;
			// event.on后挂载事件在ie和ff下有效，但在chrome下无效
//			if (browser.firefox || browser.ie) {
//				event.on(tableList.rows[i], 'onmouseover', FileAction.setTrOver, obj);
//				event.on(tableList.rows[i], 'onmouseout', FileAction.setTrOut);
// 			} else {
//				tableList.rows[i].onmouseover = function() {
//					FileAction.setTrOver(this);
//				};
//				tableList.rows[i].onmouseout = function() {
//					FileAction.setTrOut(this);
//				};
// 			}
 			// 兼容全部浏览器的挂载方式
			tableList.rows[i].onmouseover = function() {
				FileAction.setTrOver(this);
			};//			
			tableList.rows[i].onmouseout = function() {
				FileAction.setTrOut(this);
			};
		}
	}
	
	/**
	 * 表格tr对象鼠标移上的事件，显示编辑bar
	 * @param {object} obj DOM Element || MouseEvent
	 * 			适用两种不同传值方式，ie、ff或者chrome可以传值不一样
	 */
	var setTrOver = function(obj) {
		if (isEditing) return;
		// this.tr 当event.on方式挂载事件，加载参数对象时可用
		var trObj = (typeof (obj.tagName) == 'string') ? obj : this.tr;
		dom.addClass(trObj, 'tr-over');
		var trIndex = this.trIndex;
		setFileEditHTML(trObj, trIndex);
	}
	
	/**
	 * 创建编辑文件的相关链接
	 */
	var setFileEditHTML = function(trObj, trIndex) {
		FileAction.tableListTr = trObj;
		FileAction.tableListTrIndex = trIndex;
		try {
			if (!g('FileEditBar')) {
				var html = HTMLTemplate.editHTML;
				var div = document.createElement('div');
				div.id = 'FileEditBar';
				div.innerHTML = html;
				document.body.appendChild(div);
				div.className = 'file-edit-bar';
			}
			
		// 设置编辑区的事件
		g('FileEditBar').onmouseover = function() {
			dom.addClass(trObj, 'tr-over');
			showFileEditBar();
		}
		g('FileEditBar').onmouseout = function() {
			dom.removeClass(trObj, 'tr-over');
			hideFileEditBar();
		}
		var left = dom.getPosition(trObj).left;
		var top = dom.getPosition(trObj).top;
		g('FileEditBar').style.left = left + 200 + 'px';  // 留出显示文件名的宽度
		g('FileEditBar').style.top = top + 3 + 'px';      
		showFileEditBar();
		} catch (ex) {
				alert(ex.toString());
		}
	}

	/**
	 * 表格tr对象鼠标移上的事件，显示编辑bar
	 * @param {object} obj DOM Element || MouseEvent
	 * 			适用两种不同传值方式，ie、ff或者chrome可以传值不一样
	 */	
	var setTrOut = function(obj) {
		if (isEditing) return;
		// 根据传入的DOM则直接等于该DOM，否则可能是事件挂载传入
		var trObj = (typeof (obj.tagName) == 'string') ? obj : this;
		dom.removeClass(trObj, 'tr-over');
		// hideFileEditBar();
	}
	
	var setRenameArea = function(trObj) {
		try {
			if (!g('FileRenameArea') || null == g('FileRenameArea')) {

				var html = HTMLTemplate.renameHTML;
				var div = document.createElement('div');
				div.id = 'FileRenameArea';
				div.innerHTML = html;
				div.className = 'file-rename-area';
				document.body.appendChild(div);
			}		

			if (g('FileRenameArea') && trObj.cells[0]) {
				g('FileRenameArea').style.left = dom.getPosition(g('FileEditBar')).left - 175 + 'px';
				g('FileRenameArea').style.top = dom.getPosition(g('FileEditBar')).top - 4 + 'px';
				g('FileRenameArea').style.width = trObj.offsetWidth - 35 + 'px';
//				event.on(g('FileRenameArea'), 'onmouseout', function() {
//						hideRenameArea();
//				}); 
				if (g('Rename') != null) {
					g('Rename').value = decodeHTML(trObj.cells[0].firstChild.innerHTML); 
					// 增加回车事件，效果不好
//					event.on(g('Rename'), 'onkeyup', 
//						function(e) {
//							if (browser.ie) {
//								var code = e.charCode || e.keyCode;
//							} else {
//								 var code = e.keyCode;
//							}
//							if (code == 13) {
//								renameFile(trObj, this.value);
//							}
//						});
				}
			showRenameArea();
			}
		} catch (ex) {
				alert(ex.toString());
		}
	}

	/**
	 * 重命名文件(夹)
	 * @param {object} trObj 一个tr DOM对象
	 * @param {string} newName 新名称
	 * 
	 */
	var renameFile = function(trObj, newName) {
		if (typeof trObj != 'object' || newName == null){ 
			return ;
		}
		if(trim(newName).length == '') {
			alert('请输入名称');
			return ;
		}
		if(!isAvailableName(newName)) {
			alert('名字不能含有:' + SPECIAL_CHAR.join(', ') + ' 字符');
			return ;
		}		
		var nameTd = trObj.cells[0];
		var name = '';		
		if (!nameTd || !nameTd.firstChild) {
			return ;
		}
		name = nameTd.firstChild.innerHTML;
		if (name != newName) {
			try {
				var type   = trObj.cells[3].innerHTML;
				var path = (UPLOAD.uploadPath + decodeHTML(name));
				var url = global.FILE_PATH + '!rename.action?path=' + encodeURIComponent(path) + '&name=' + encodeURIComponent(newName);
				var xhr = ajax.get(url, parseRenameJSON);
			} catch (ex) {
				alert(ex.toString());
			}
	 	}
		hideRenameArea();
	}
	
	var parseRenameJSON = function(xhr, responseText) {
		eval(responseText);
		if (MESSAGE['1'] == 'RENAME_RESULT=success') {
			DirAction.getDirJSON(decodeHTML(UPLOAD.uploadPath));
		} else {
			getReNameError(MESSAGE);
		}
	}
	
	var showFileEditBar = function() {
		if (g('FileEditBar')) {
			g('FileEditBar').style.display = '';
		}
	}
	
	var showRenameArea = function() {
		if (g('FileRenameArea')) 
			g('FileRenameArea').style.display = '';

		isEditing = true;
	}
	
	var hideFileEditBar = function() {
		if (g('FileEditBar')) 
			g('FileEditBar').style.display = 'none';
	}
	
	var hideRenameArea = function() {
		if (g('FileRenameArea')) 
			g('FileRenameArea').style.display = 'none';
			
		isEditing = false;
	}

	/**
	 * 复制文件(夹)
	 * @param {object} trObj 一个tr DOM对象
	 * @param {number} trIndex tr所属位置
	 * 
	 */
	var copyFile = function(trObj, trIndex) {
		if (typeof trObj != 'object') { 
			return;
		}
		try {
			var nameTd = trObj.cells[0];
			var name = '';		
			if (!nameTd || !nameTd.firstChild) {
				return;
			}
			name = nameTd.firstChild.innerHTML;
			var path = (UPLOAD.uploadPath + decodeHTML(name));
			var url = global.FILE_PATH + '!copy.action?path=' + encodeURIComponent(path);
			var xhr = ajax.get(url, parseCopyJSON);
		} catch (ex) {
				alert(ex.toString());
		}
		hideFileEditBar();
	}
	
	var parseCopyJSON = function(xhr, responseText) {
		eval(responseText);
		if (MESSAGE['2'] == 'COPY_RESULT=success') {
			DirAction.getDirJSON(decodeHTML(UPLOAD.uploadPath));
		} else {
			getCopyFileError(MESSAGE);
		}

	}

	/**
	 * 删除文件(夹)
	 * @param {object} trObj 一个tr DOM对象
	 * @param {number} trIndex tr所属位置
	 * 
	 */
	var deleteFile = function(trObj, trIndex) {
		if (typeof trObj != 'object'){ 
			return;
		}
		try {
			var nameTd = trObj.cells[0];
			var name = '';		
			if (!nameTd || !nameTd.firstChild) {
				return;
			}
			name = nameTd.firstChild.innerHTML;
			var type   = trObj.cells[3].innerHTML;
			var path = (UPLOAD.uploadPath + decodeHTML(name));
			var info = type == 'folder' ? '您确定要删除 ' + name + ' 文件夹吗？\r\n其全部子文件夹和文件将一同被删除。': 
							'您确定要删除 ' + name + ' 文件吗？';		
			if(confirm(info)) {
				var url = global.FILE_PATH + '!delete.action?path=' + encodeURIComponent(path);
				var xhr = ajax.get(url, parseDeleteJSON);	
			}
		} catch (ex) {
				alert(ex.toString());
		}
		hideFileEditBar();
	} 
	
	var parseDeleteJSON = function(xhr, responseText) {
		eval(responseText);
		if (MESSAGE) {
			if (MESSAGE['1'] == 'DELETE_RESULT=success') {
//				直接deleteRow方式，减少一次请求		
//				FileAction.initTableListRowEvent();
//				g('FileTableList').deleteRow(FileAction.tableListTrIndex);				
				DirAction.getDirJSON(decodeHTML(UPLOAD.uploadPath));				
			} else {
				getDeleteFileError(MESSAGE);
			}			
		}
	}
		
	var createFolder = function(path, name) {
		if(name == null || trim(name).length == '') {
			setTips(null, '请输入文件夹名称');
			return false;
		}		
		if(!isAvailableName(name)) {
			setTips(null, '名字不能含有:' + SPECIAL_CHAR.join(', ') + ' 字符');
			return false;
		}

		getFolderJSON(path, name);
		return false;
	}
	
	var getFolderJSON = function(path, name) {
		try {
			var path = path + getSlash(path);
				path = decodeHTML(path); 
			var url = filePath + '?mkdir=yes&path=' + encodeURIComponent(path) + '&name=' + encodeURIComponent(name);
			var xhr = ajax.get(url, parseFolderJSON);
		} catch(ex) {
			alert(ex.toString());	
		}
	}
	
	var parseFolderJSON = function(xhr, responseText) {
//		FILE 作为传递过来的JSON数据，可以根据这个数据insertBefore到table的某行中
//		这样可以减少一次请求，有时间再升级

//		var FILE = {
//			newFolder : {
//				name : 'lichunping',
//				length : '10',
//				date : '20100506',
//				type : '文件夹'
//			}
//		}
		eval(responseText);
		if (MESSAGE) {
			if (MESSAGE['1'] == 'MKDIR_RESULT=failed') {
				getCreateNewFolderError(MESSAGE);
				return;
			}			
		}

//		重新加载一边table list，或者根据返回的json插入一行
		fileClass.insertRow(FILE.newFolder);
		hideCreateFolder();
	}
	
	var getReNameError = function(message) {
			alert('重命名失败。可能没有权限或者已存在同名文件(夹)。谢谢！');
	}
	
	var getCopyFileError = function(message) {
			alert('复制失败。可能没有权限或者文件(夹)不存在。谢谢！');
	}
	
	var getDeleteFileError = function(message) {
			alert('删除失败。可能没有权限或者文件(夹)不存在。谢谢！');
	}
	
	var getCreateNewFolderError = function(message) {
			alert('新建文件夹失败。请检查是否重名或者没有权限。谢谢！');
	}
	
	return {
		init : init,
		outFileListContent : outFileListContent,
		createFolder : createFolder,
		setCreateFolderHTML : setCreateFolderHTML,
		hideCreateFolder : hideCreateFolder,
		getFolderJSON : getFolderJSON,
		parseFolderJSON : parseFolderJSON,
		parseDeleteJSON : parseDeleteJSON,
		parseRenameJSON : parseRenameJSON,
		initTableListRowEvent :　initTableListRowEvent,
		setTrOver : setTrOver,
		setTrOut : setTrOut,
		renameFile : renameFile,
		copyFile : copyFile,
		deleteFile : deleteFile,
		tableListTr : tableListTr,
		tableListTrIndex : tableListTrIndex,
		setRenameArea : setRenameArea,
		hideRenameArea  : hideRenameArea,
		isEditing       : isEditing
	}
})();

FileAction.init();