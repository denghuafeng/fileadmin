
/**
 * core.js
 * Copyright Young li inc. All rights reserved.
 * 
 * version: 1.1.0
 * date: 2010/5/20
 */

var youngli = youngli || {};


var string = string || {};

string.trim = function (source) {
    return String(source)
            .replace(new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+\x24)", "g"), "");
};

/**
 * 将目标字符串进行驼峰化处理
 * 
 * @param {string} source 目标字符串
 * @return {string} 驼峰化处理后的字符串
 */
string.toCamelCase = function (source) {
    return String(source).replace(/[-_]\D/g, function (match) {
                return match.charAt(1).toUpperCase();
            });
};

var toCameCase = string.toCamelCase;
var trim = string.trim;

