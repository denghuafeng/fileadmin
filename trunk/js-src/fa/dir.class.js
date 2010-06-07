
/**
 * 生成目录列表与文件列表的类
 * @param {object} 生成目录对象的类
 */
function Directory(DIR) {
	this.DIR = DIR ? DIR : window.DIR;
	this.html = [];
	this.FileList = this.FileList ? this.FileList : g('FileList');
	this.FileListContent  = this.FileListContent ? this.FileListContent : g('FileListContent');
	this.FileListTitle  = this.FileListTitle ? this.FileListTitle : g('FileListTitle');	
	this.DirList   = this.DirList ? this.DirList : g('DirList'); 
	this.InfoPanel = this.InfoPanel ? this.InfoPanel : g('InfoPanel');	
}

/**
 * @author chunping
 * @param {array} html html数组
 */
Directory.prototype.setHTML = function(html) {
	this.html = html;
}
Directory.prototype.getHTML = function() {
	return this.html;
}

/**
 * 得到文件夹列表的html
 * @param {object} _DIR 
 * @return {string}
 */
Directory.prototype.getDirListHTML = function(_DIR) {
	var DIR = _DIR ? _DIR : this.DIR;
	var html = [];
	if (DIR) {
		var folders = DIR.Folders;
		var len = folders.nameList.length;
		var i, href, name, path = '';

		var d = new dTree('tree');
		d.add(0, -1, DIR.root);
		for (i = 0; i < len; i++) {
			path = DIR.absolutePath + folders.nameList[i];
			name = folders.nameList[i];			
			//html.push('<a href="#" onclick="DirAction.getDirJSON(\''+ (path) +'\');">' + name + '</a>');
			d.add(i + 1, 0, name,'path?');
		}
		html.push(d);

   /**
   // 采用dtree替代下面的方案
		html.push('<div class="dir-root">');
		path = global.DIR_PATH + '?path=' + encodeURIComponent(DIR.root);
		html.push('<a href=""' + path + '"> ' + DIR.root + ' </a>');
		html.push('</div>');

		
		// 添加文件夹链接	
		html.push('<div class="dir-tree">');
		for (i = 0; i < len; i++) {
			html.push('<li>');
			path = DIR.absolutePath + folders.nameList[i];
			name = folders.nameList[i];
			
			html.push('<a href="#" onclick="DirAction.getDirJSON(\''+ (path) +'\');">' + name + '</a>');
			html.push("</li>");
		}
		html.push('</div>');
	*/
	}
	
	this.setHTML(html);
	return html.join('');
}

/**
 * 表格头与表格内容区分开，以将来滚动内容时使用
 * @return {string} 表格头信息
 */
Directory.prototype.getFileAndFolderTheadHTML = function() {
	return '<table class="file-table-head"><colgroup>'
         + '<col class="table-name"/>'
         + '<col class="table-size"/>'
         + '<col class="table-modified-date"/>'
         + '<col class="table-type"/>'
         + '<col class="table-blank"/>'
         + '</colgroup>'
         + '<tr><th>名称</th><th>大小</th><th>修改日期</th><th>类型</th><th>&nbsp;</th></tr></table>';	
}

/**
 * 获得文件与文件夹列表的table
 * @param {object} _DIR 传入的DIR对象
 * @return {string} 表格html
 */
Directory.prototype.getFileAndFolderListHTML = function(_DIR) {
	var DIR = _DIR ? _DIR : this.DIR;
	var html = [];
	if (DIR) {
		var filesList = DIR.FilesList;
		var filesListLen = 0;	
		var name = target = ext = '', href = '#', hrefClass = '';		
		
		/**
		 * 得到表格的colgroup，好设置列属性
		 */
		function getColgroupHTML() {
			return '<colgroup>'
                 + '<col class="table-name"/>'
                 + '<col class="table-size"/>'
                 + '<col class="table-modified-date"/>'
                 + '<col class="table-type"/>'
                 + '<col class="table-blank"/>'
                 + '</colgroup>';		
		}
		
		function getHrefClass(type) {
			return '' + getFileIconCss(type);
		}
		
		/**
		 * 得到table每行的内容
		 */
		function getFileTrHTML(obj) {
			var file = obj ? obj : null;
			if (file == null) return "";
			name = file.name;
			ext = getExt(name);
			hrefClass = getHrefClass(ext);
			var nameLink = "", type = "&nbsp;";
			if (file.type == 'folder') {
				href = global.DIR_PATH + '?path=' + encodeURIComponent(name);
				//type = file.type;
				hrefClass = getFolderIconCss();
			} else {
				href = '#';
				if (global.FIEL_WEB_ROOT_URL) {
					href = global.FIEL_WEB_ROOT_URL + DIR.relationPath + encodeURIComponent(name);				
				} 
				if (isOfficeFile(ext) != -1 && global.DOC_WEB_ROOT_URL) {
					// is office file read online
					href = global.DOC_WEB_ROOT_URL + '?file='+ DIR.absolutePath + encodeURIComponent(name);
				}
				target = '_blank';
				type   = ext;
			}			
			nameLink = ('<a href="' + href + '" class="' + hrefClass +  '" target="' + target + '">' + name + '</a>');
			
			return '<tr><td>' + nameLink +  '</td><td>' + obj.length +  '</td><td>'
			       + obj.date +  '</td><td>' + type +  '</td><td>&nbsp;</td></tr>';		
		}

		html.push('<table class="file-table-list" id="FileTableList">');
		html.push(getColgroupHTML());
		for (var file in filesList) {
			filesListLen++;
			file = filesList[file];
			html.push(getFileTrHTML(file));
		}
		html.push("</table>");
		
	}
	this.setHTML(html);
	return html.join('');
}

/**
 * 得到文件列表，本系统中被getFileAndFolderListHTML()替代
 * @param {object} _DIR
 * @return {string}
 */
Directory.prototype.getFileListHTML = function(_DIR) {
	var DIR = _DIR ? _DIR : this.DIR;
	var html = [];
	if (DIR) {
		var files = DIR.Files;
		var len = files.nameList.length;	
		var name, href, i;
		for (i = 0; i < len; i++) {
			name = files.nameList[i];
			href = global.FILE_PATH + '?path=' + encodeURIComponent(name);
			html.push('<a href="' + href + '">' + name + '</a><br/>');
		}
	}
	this.setHTML(html);
	return html.join('');
}

/**
 * 得到面板信息
 * @param {object} _DIR
 * @return {string}
 */
Directory.prototype.getInfoPanelHTML = function(_DIR) {
	var DIR = _DIR ? _DIR : this.DIR;
	var html = [];
	if (DIR) {
		var folderLen = DIR.Folders.nameList.length;
		var filesLen = DIR.Files.nameList.length;

		var len = folderLen + filesLen;	
		html.push('<dl><dt>共:  ' + len + ' 个项目</dt>');
		html.push('<dd>文件夹: ' + folderLen +  ' 个');
		html.push(' , 文件: ' + filesLen +  ' 个</dd></dl>');
		
		html.push('<dl class="hard-size"><dt>硬盘大小:  ' + DIR.hardPartition.totalSpace + ' </dt>');
		html.push('<dd>已用空间: ' + DIR.hardPartition.useableSpace +  ' ');
		html.push(' , 还剩: ' + DIR.hardPartition.freeSpace +  ' </dd></dl>');
		
	}
	this.setHTML(html);
	return html.join('');
}

Directory.prototype.setDirAndFileList = function(_DIR) {
	var DIR = _DIR ? _DIR : this.DIR;
	this.setDirList(DIR);
	//this.setFileList(DIR);
	this.setFileAndFolderList(DIR);
}

Directory.prototype.setDirList = function(_DIR) {
	this.DirList.innerHTML = this.getDirListHTML(_DIR);
}

Directory.prototype.setFileAndFolderList = function(_DIR) {
	this.FileListTitle.innerHTML = this.getFileAndFolderTheadHTML(_DIR);
	this.FileListContent.innerHTML = this.getFileAndFolderListHTML(_DIR);
}

Directory.prototype.setFileList = function(_DIR) {
	this.FileList.innerHTML = this.getFileListHTML(_DIR);
}

Directory.prototype.setInfoPanel = function(_DIR) {
	this.InfoPanel.innerHTML = this.getInfoPanelHTML(_DIR);
}
