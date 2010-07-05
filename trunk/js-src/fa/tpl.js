
/**
 * 模板文件
 * 用来临时创建页面
 */

var HTMLTemplate = {
  createNewFolderHTML : '<div class="create-newfolder" id="CreateNewFolder">'
	 + '<form action="file" method="get" target="" onsubmit="return FileAction.createFolder(UPLOAD.uploadPath, this.name.value);" target="_blank">'
		+ '名称:<input type="text" size="20" name="name" id="NewFolderName"/><br/>'
		+ '<div class="tips" id="CreateNewFolerTips"></div>'
		+ '<input type="submit" value="提交" />'
		+ '&nbsp;&nbsp;<a href="javascript:FileAction.hideCreateFolder();" id="CreateNewFolderCancelButton">关闭</a>'
	 + '</form>'
	 + '</div>',

	uploadHTML : 
'<div class="upload-area" id="UploadArea">'
+ '上传路径：<span id="UploadPathTips"></span>'
+ '	<div class="fieldset flash" id="fsUploadProgress">'
+ '			<span class="legend">文件队列</span>'
+ '	</div>'
+ '		<span id="divStatus">上传了 0 个文件</span>'
+ '	<div>'
+ '		<span id="spanButtonPlaceHolder"></span>'
+ '		<input id="btnCancel" type="button" value="停止上传" onClick="swfu.cancelQueue();" disabled="disabled"  />'
+ '		&nbsp;<a href="javascript:UploadAction.hideUploadArea();">关闭</a>'
+ '	</div>'
+ '</div>'

};