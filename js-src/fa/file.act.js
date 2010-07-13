
FileAction = (function() {	
	
	var fileClass = new File();
	var tableList = g('FileTableList');
	var filePath  = global.FILE_PATH;
	
	var tableListTr = null;
	var tableListTrIndex = null;

	var init = function () {
		event.on(g('CreateNewFolderLink'), "onclick", FileAction.setCreateFolderHTML);
	}
	var hideCreateFolder = function() {
		g('CreateNewFolder').style.display = 'none';
		toggleMask();
	}
	var setCreateFolderHTML = function () {
		//var createDiv = g('CreateNewFolder') || new Object();
		if (!g('CreateNewFolder')) {	
			try {
				var html = HTMLTemplate.createNewFolderHTML;
				var container = getTemplateHTMLContainer();
				var div = document.createElement('div');
				div.innerHTML = html;
				container.appendChild(div);
				// can not add the below event for chrome
				//event.on(g('CreateNewFolderCancelButton'), 'onclick', FileAction.hideCreateFolder);
				var left = dom.getPosition(this).left;
				var top = dom.getPosition(this).top;
				g('CreateNewFolder').style.left = left + 'px';
				g('CreateNewFolder').style.top = top + 22 + 'px';
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
		//var len = tableList.getElementsByTagName("tr").length;
		var len = tableList.rows.length;
		
		// 采用DHTML，而不用DOM操作方式
		for (var i = 0; i < len; i++) {
			var obj = {};
			obj.tr = tableList.rows[i];
			obj.trIndex = i;
			event.on(tableList.rows[i], 'onmouseover', FileAction.setTrOver, obj);
			event.on(tableList.rows[i], 'onmouseout', FileAction.setTrOut);	
//			Event.add(tableList.rows[i], 'mouseover', function() {
//				alert(this)
//				alert(tableList.rows[i].innerHTML);
//			});
//			alert(tableList.rows[i].innerHTML);	
		}
	}
	
	var setTrOver = function() {
		if (g('FileEditBar') && g('FileEditBar').style.display != 'none') {
			return;
		}
		var trObj = this.tr;
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
		if (!g('FileEditBar')) {
			try {
				var html = HTMLTemplate.editHTML;
				var div = document.createElement('div');
				div.id = 'FileEditBar';
				div.innerHTML = html;
				document.body.appendChild(div);	
				div.className = 'file-edit-bar';
			} catch (ex) {
				alert(ex.toString());
			}
		}
		// 设置编辑区的事件, 用事件挂载方式有问题
		g('FileEditBar').onmouseover = function() {
			dom.addClass(trObj, 'tr-over');
//			g('FileEditBar').className = 'tr-over';
			dom.setStyle(g('FileEditBar'), 'display', '');
		}
		g('FileEditBar').onmouseout = function() {
			dom.removeClass(trObj, 'tr-over');
			dom.setStyle(g('FileEditBar'), 'display', 'none');
//			g('FileEditBar').style.display = 'none';
		}
		var left = dom.getPosition(trObj).left;
		var top = dom.getPosition(trObj).top;
		g('FileEditBar').style.left = left + 200 + 'px';  // 留出显示文件名的宽度
		g('FileEditBar').style.top = top + 3 + 'px';      
		dom.setStyle(g('FileEditBar'), 'display', '');
	}
	
	var setTrOut = function(event) {
//		if (!document.all) { 
//			x = event.clientX; y = event.clientY; 
//		} else { 
//			x = event.x; y = event.y;
//		}
//
//		var width = this.offsetWidth;
//		var height = this.offsetHeight;
//		var left = dom.getPosition(this).left;
//		var top  = dom.getPosition(this).top;
//		g('InfoPanel').innerHTML = (
//			' | width = ' + width + 
//			' | height = ' + height + 
//			' | left = ' + left +
//			' | top = ' + top +
//			' | even.x = ' + x +
//			' | event.y = ' + y
//		)
//		if ( (x < left || x > (left + width))
//			|| (y < top || y > (top + height)) ) {
////		判断是否还在编辑区域内，执行移出事件，直接添加事件时
//// 		当鼠标移到编辑区域就会执行了
//			dom.removeClass(this, 'tr-over');
//			//g('FileEditBar').style.display = 'none';
//			g('InfoPanel').innerHTML = 'on edit bar';
//		}
		dom.removeClass(this, 'tr-over');
		dom.setStyle(g('FileEditBar'), 'display', 'none');
		hideFileRenameArea();
	}
	
	var setRenameArea = function(trObj) {
		if (!g('FileRenameArea') || null == g('FileRenameArea')) {
			try {
				var html = HTMLTemplate.renameHTML;
				var div = document.createElement('div');
				div.id = 'FileRenameArea';
				div.innerHTML = html;
				g('FileEditBar').appendChild(div);	
				div.className = 'file-rename-area';
			} catch (ex) {
				alert(ex.toString());
			}
		}
		
//		var left = dom.getPosition(trObj).left;
//		var top = dom.getPosition(trObj).top;
		if (g('FileRenameArea') && trObj.cells[0]) {
			g('FileRenameArea').style.left = -175 + 'px';
			g('FileRenameArea').style.top = -2 + 'px';
			g('FileRenameArea').style.width = (trObj.cells[0].offsetWidth - 15) + 'px';
			if (g('Rename') != null) {
				g('Rename').value = decodeHTML(trObj.cells[0].firstChild.innerHTML); 
//				g('Rename').onkeydown = function(e) {
//					if (browser.ie) {
//						var code = event.charCode || event.keyCode;
//					} else {
//						 var code = e.keyCode;
//					}
//					alert(code);
//				}
				//g('Rename').focus();g('Rename').select();
				
				event.on(g('Rename'), 'onkeyup', function(e) {
					if (browser.ie) {
						var code = e.charCode || e.keyCode;
					} else {
						 var code = e.keyCode;
					}// 如果是回车执行更名事件
					if (code == 13) {
						renameFile(trObj, this.value);
					}
				});
			}
			
			dom.setStyle(g('FileRenameArea'), 'display', '');
		}
	}
	
	var renameFile = function(trObj, newName) {
		if (typeof trObj != 'object' || newName == null){ 
			return;
		}
		if(trim(newName).length == '') {
			alert('请输入名称');
			return;
		}
		if(!isAvailableName(newName)) {
			alert('名字不能含有:' + SPECIAL_CHAR.join(', ') + ' 字符');
			return;
		}
		
		var nameTd = trObj.cells[0];
//		var newName = newName || '改名测试';
		var name = '';		
		if (!nameTd || !nameTd.firstChild) {
			return;
		}
		name = nameTd.firstChild.innerHTML;
		if (name == newName) {
//			没改变
			return;
		}
		
		try {			
			var type   = trObj.cells[3].innerHTML;
	//		if (type != '' && type != 'folder') {
	//			newName = newName + '.'+ type;
	//		}
			var path = (UPLOAD.uploadPath + decodeHTML(name));
	//		var path = (UPLOAD.uploadPath + (name));
			var url = global.FILE_PATH + '!rename.action?path=' + encodeURIComponent(path) + '&name=' + encodeURIComponent(newName);
			xhr = ajax.get(url, parseRenameJSON);
			hideRenameArea();
			hideFileRenameArea();
	//		g('FileEditBar').removeChild(g('FileRenameArea'));
		} catch (ex) {
			alert(ex.toString());
		}
	}
	
	var parseRenameJSON = function(xhr, responseText) {
		eval(responseText);
		if (MESSAGE['1'] == 'RENAME_RESULT=success') {
			DirAction.getDirJSON(decodeHTML(UPLOAD.uploadPath));
		} else {
			getReNameError(MESSAGE);
		}
	}
	
	var hideFileRenameArea = function() {
		if (g('FileRenameArea')) {
			dom.setStyle(g('FileRenameArea'), 'display', 'none');
		}
	}
	
	var hideRenameArea = function() {
		if (g('FileRenameArea')) 
			g('FileRenameArea').style.display = 'none';
	}
	
	var copyFile = function(trObj, trIndex, newName) {
		if (typeof trObj != 'object'){ 
			return;
		}
		var nameTd = trObj.cells[0];
		var name = '';		
		if (!nameTd || !nameTd.firstChild) {
			return;
		}
		name = nameTd.firstChild.innerHTML;
		var path = (UPLOAD.uploadPath + decodeHTML(name));
		var url = global.FILE_PATH + '!copy.action?path=' + encodeURIComponent(path);
		xhr = ajax.get(url, parseCopyJSON);
	}
	
	var parseCopyJSON = function(xhr, responseText) {
		eval(responseText);
		if (MESSAGE['2'] == 'COPY_RESULT=success') {
			DirAction.getDirJSON(decodeHTML(UPLOAD.uploadPath));
		} else {
			getCopyFileError(MESSAGE);
		}

	}
	
	var deleteFile = function(trObj, trIndex, newName) {
		if (typeof trObj != 'object'){ 
			return;
		}
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
			xhr = ajax.get(url, parseDeleteJSON);	
		}
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
		//fileClass.createFolder();
		//alert(path + getSlash(path) + name);
		getFolderJSON(path, name);
		return false;
	}
	
	var getFolderJSON = function(path, name) {
		var path = path + getSlash(path);
			path = decodeHTML(path); 
		var url = filePath + '?mkdir=yes&path=' + encodeURIComponent(path) + '&name=' + encodeURIComponent(name);
		xhr = ajax.get(url, parseFolderJSON);
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
		hideRenameArea  : hideRenameArea
	}
})();

FileAction.init();