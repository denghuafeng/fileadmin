
/**
 * 文件管理配置文件
 * 合并js时config.js放置最前面
 */
var global = {
	// 根目录
	DIR_ROOT  : "",
	// 目录操作的url
	DIR_PATH  : "dir",
	// 文件操作的url
	FILE_PATH : "file",
	// 上传操作的url
	UPLOAD_PATH : "upload",
	
	// 如果有web访问地址，可以提供在线打开地址的功能
	FIEL_WEB_ROOT_URL : "http://127.0.0.1/ut/tmp/",
	// office文件可以在线阅读的地址
	DOC_WEB_ROOT_URL :  "http://127.0.0.1/ut/servlet/ReadWordLocal",
	// 登录指向的URL
	FA_LOGIN_URL : "login",
	
	// 是否打开文件夹和文件时重定向链接
	// 默认给出的是utf-8链接，如果WEB地址是gbk的，需要重新定向
	OPEN_FILE_REDIRECT : false
	

}