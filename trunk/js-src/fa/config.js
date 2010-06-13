
/**
 * 文件管理配置文件
 * 合并js时config.js放置最前面
 */
var global = {
	DIR_ROOT  : "",
	DIR_PATH  : "dir",
	FILE_PATH : "file",
	
	// 如果有web访问地址
	FIEL_WEB_ROOT_URL : "http://127.0.0.1/ut/tmp/",
	// office文件可以在线阅读的地址
	DOC_WEB_ROOT_URL :  "http://127.0.0.1/ut/servlet/ReadWordLocal",
	
	FA_LOGIN_URL : "login"
	

}
// 定义JSON对象
var DIR = DIR || {};