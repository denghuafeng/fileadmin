
var HTMLTemplate = {
 

 createNewFolderHTML : '<div class="create-newfolder" id="CreateNewFolder">'
	 + '<form action="file" method="get" target="" onsubmit="return FileAction.createFolder(UPLOAD.uploadPath, this.name.value);" target="_blank">'
		+ '名称:<input type="text" size="20" name="name" /><br/>'
		+ '<input type="submit" value="提交" />'
		+ '&nbsp;&nbsp;<a href="javascript:FileAction.cancelCreateFolder();" id="CreateNewFolderCancelButton">取消</a>'
	 + '</form>'
	 + '</div>'



};