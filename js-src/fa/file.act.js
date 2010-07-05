
FileAction = (function() {	
	
	var fileClass = new File();
	var tableList = g('FileTableList');
	var filePath  = global.FILE_PATH;
//	var creatNewFolderLink = g('CreateNewFolderLink');

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
//		eval(responseText);
//		FILE 作为传递过来的JSON数据，可以根据这个数据insertBefore到table的某行中
//		这样可以减少一次请求，有时间再升级

		var FILE = {
			newFolder : {
				name : 'lichunping',
				length : '10',
				date : '20100506',
				type : '文件夹'
			}
		}
		
		fileClass.insertRow(FILE.newFolder);
		hideCreateFolder();
	}
	
	return {
		init : init,
		createFolder : createFolder,
		setCreateFolderHTML : setCreateFolderHTML,
		hideCreateFolder : hideCreateFolder,
		getFolderJSON : getFolderJSON,
		parseFolderJSON : parseFolderJSON
	}
})();

FileAction.init();