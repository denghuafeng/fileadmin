/*
 * 本文件仅作开发调试时用，这个文件与ant的合并脚本里对应
 * 当有新的需要include进来的文件时增加
 * 同时合并ant脚本也增加相应的文件
 *
 * 此文件主要是当执行ant文件合并压缩后，恢复到开发时的状态
 */
 (
 function() {
	var Contact_JS_List = [
		'./js-src/fa/tpl.js',

		'./js-src/fa/config.js',
		'./js-src/com/com.js',
		'./js-src/fa/action.js',
		'./js-src/fa/dir.class.js',
		'./js-src/fa/dir.act.js',
		'./js-src/fa/file.class.js',
		'./js-src/fa/file.act.js'

	];

	for (var i = 0; i < Contact_JS_List.length; i++) {
		document.write('<script src="' + Contact_JS_List[i] + '"></script>');
	}
 }
)();
