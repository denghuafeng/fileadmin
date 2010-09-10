
/*
 * 
 * Copyright 2009 Young li Inc. All rights reserved.
 * 
 * author: jarryli
 * version: 1.0.0
 * date: 2010/5/02
 */


/**
 * 声明Youngli对象
 */
 
var Youngli  = Youngli || { version : '1-0-1', date : '2010-7-10' }; 
Youngli.guid = '$YOUNGLI$';
﻿/*
 * Copyright 2009 Young li Inc. All rights reserved.
 * 
 * path: string.js
 * author: erik
 * version: 1.1.0
 * date: 2009/12/16
 */

///import Youngli.string;

Youngli.string = Youngli.string || {};

Youngli.string.trim = function (source) {
    return String(source)
            .replace(new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+\x24)", "g"), "");
};

/**
 * 将目标字符串进行驼峰化处理
 * 
 * @param {string} source 目标字符串
 * @return {string} 驼峰化处理后的字符串
 */
Youngli.string.toCamelCase = function (source) {
    return String(source).replace(/[-_]\D/g, function (match) {
                return match.charAt(1).toUpperCase();
            });
};

/**
 * 声明快捷方式
 */
var toCameCase = Youngli.string.toCamelCase;
var trim = Youngli.string.trim;
var string = Youngli.string;

﻿
/*
 * 
 * Copyright 2009 Young li Inc. All rights reserved.
 * 
 * path: browser.js
 * author: allstar, erik
 * version: 1.1.0
 * date: 2009/12/02
 */


/**
 * 声明browser包
 */
Youngli.browser = Youngli.browser || {};

/*
 * 
 * Copyright 2009 Young li Inc. All rights reserved.
 * 
 * path: browser/chrome.js
 * author: allstar
 * version: 1.1.0
 * date: 2009/11/24
 */

///import Youngli.browser;

/**
 * 判断是否为safari浏览器
 */
if (/chrome\/(\d+\.\d)/i.test(navigator.userAgent)) {
    Youngli.browser.chrome = parseFloat(RegExp['\x241']);
}
/*
 * 
 * Copyright 2009 Young li Inc. All rights reserved.
 * 
 * path: browser/firefox.js
 * author: allstar
 * version: 1.1.0
 * date: 2009/11/23
 */

///import Youngli.browser;

/**
 * 判断是否为firefox浏览器
 */
if (/firefox\/(\d+\.\d)/i.test(navigator.userAgent)) {
    Youngli.browser.firefox = parseFloat(RegExp['\x241']);
}
/*
 * 
 * Copyright 2009 Young li Inc. All rights reserved.
 * 
 * path: browser/ie.js
 * author: allstar
 * version: 1.1.0
 * date: 2009/11/23
 */

///import Youngli.browser;

/**
 * 判断是否为ie浏览器
 */
if (/msie (\d+\.\d)/i.test(navigator.userAgent)) {
    ie = Youngli.browser.ie = parseFloat(RegExp['\x241']);
}

/*
 * 
 * Copyright 2009 Young li Inc. All rights reserved.
 * 
 * path: browser/isGecko.js
 * author: allstar
 * version: 1.1.0
 * date: 2009/11/23
 */

///import Youngli.browser;

/**
 * 判断是否为isGecko
 */
Youngli.browser.isGecko = /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent);
/*
 * 
 * Copyright 2009 Young li Inc. All rights reserved.
 * 
 * path: browser/isStrict.js
 * author: allstar
 * version: 1.1.0
 * date: 2009/11/23
 */

///import Youngli.browser;

/**
 * 判断是否为标准模式
 */
Youngli.browser.isStrict = document.compatMode == "CSS1Compat";
/*
 * 
 * Copyright 2009 Young li Inc. All rights reserved.
 * 
 * path: browser/isWebkit.js
 * author: allstar
 * version: 1.1.0
 * date: 2009/11/23
 */

///import Youngli.browser;

/**
 * 判断是否为isWebkit
 */
Youngli.browser.isWebkit = /webkit/i.test(navigator.userAgent);
/*
 * 
 * Copyright 2009 Young li Inc. All rights reserved.
 * 
 * path: browser/maxthon.js
 * author: allstar
 * version: 1.1.0
 * date: 2009/11/23
 */

///import Youngli.browser;

/**
 * 判断是否为maxthon浏览器
 */
try {
    if (/(\d+\.\d)/.test(external.max_version)) {
        Youngli.browser.maxthon = parseFloat(RegExp['\x241']);
    }
} catch (e) {}
/*
 * 
 * Copyright 2009 Young li Inc. All rights reserved.
 * 
 * path: browser/opera.js
 * author: allstar
 * version: 1.1.0
 * date: 2009/11/23
 */

///import Youngli.browser;

/**
 * 判断是否为opera浏览器
 */
if (/opera\/(\d+\.\d)/i.test(navigator.userAgent)) {
    Youngli.browser.opera = parseFloat(RegExp['\x241']);
}
/*
 * 
 * Copyright 2009 Young li Inc. All rights reserved.
 * 
 * path: browser/safari.js
 * author: allstar
 * version: 1.1.0
 * date: 2009/11/23
 */

///import Youngli.browser;

/**
 * 判断是否为safari浏览器
 */
if ((/(\d+\.\d)(\.\d)?\s+safari/i.test(navigator.userAgent) && !/chrome/i.test(navigator.userAgent))) {
    Youngli.browser.safari = parseFloat(RegExp['\x241']);
}
 
var browser = Youngli.browser || {};
﻿
/**
 * 声明dom包
 */

Youngli.dom = Youngli.dom || {};

Youngli.dom.g = function (id) {
    if ('string' == typeof id || id instanceof String) {
        return document.getElementById(id);
    } else if (id && id.nodeName && (id.nodeType == 1 || id.nodeType == 9)) {
        return id;
    }
    return null;
};

var g = Youngli.dom.g;

/**
 * 添加目标元素的className
 * 使用者应保证提供的className合法性，不应包含不合法字符
 * className合法字符参考：http://www.w3.org/TR/CSS2/syndata.html
 * 
 * @param {HTMLElement|string} element   目标元素或目标元素的id
 * @param {string}             className 要添加的class。允许同时添加多个class，中间使用空白符分隔
 * @return {string} 被操作的DOM元素
 */
Youngli.dom.addClass = function (element, className) {
    element = g(element);

    var classes = trim(className).split(/\s+/), 
        len = classes.length;
    className = element.className.split(/\s+/).join(" ");

    while (len--) {
        (new RegExp("(^| )" + classes[len] + "( |\x24)")).test(className)
            && classes.splice(len, 1);
    }

    element.className = trim(className + ' ' + classes.join(" "));
    return element;
};

/**
 * 获取目标元素的直接子元素列表
 * 
 * @param {HTMLElement|String} element 目标元素或目标元素的id
 * @return {Array} DOM元素列表
 */
Youngli.dom.children = function (element) {
    element = g(element);

    for (var children = [], tmpEl = element.firstChild; tmpEl; tmpEl = tmpEl.nextSibling) {
        if (tmpEl.nodeType == 1) {
            children.push(tmpEl);
        }
    }
    
    return children;    
};

/**
 * 获取目标元素所属的document对象
 *
 * @param {HTMLElement|string} element 目标元素或目标元素的id
 * @return {HTMLDocument} element所属的document对象
 */
Youngli.dom.getDocument = function (element) {
    element = Youngli.dom.g(element);
    return element.nodeType == 9 ? element : element.ownerDocument || element.document;
};

/*
 * 获取目标元素元素相对于整个文档左上角的位置
 *
 * @param {HTMLElement|string} element 目标元素或目标元素的id
 * @return {Object} 
 *   {
 *       left:xx,//{integer} 页面距离页面左上角的水平偏移量
 *       top:xx //{integer} 页面距离页面坐上角的垂直偏移量
 *   }
 */
Youngli.dom.getPosition = function (element) {
    var doc = Youngli.dom.getDocument(element);
       // browser = browser;

    element = Youngli.dom.g(element);

    // Gecko browsers normally use getBoxObjectFor to calculate the position.
    // When invoked for an element with an implicit absolute position though it
    // can be off by one. Therefor the recursive implementation is used in those
    // (relatively rare) cases.
    var BUGGY_GECKO_BOX_OBJECT = browser.isGecko > 0 && 
                                 doc.getBoxObjectFor &&
                                 Youngli.dom.getStyle(element, 'position') == 'absolute' &&
                                 (element.style.top === '' || element.style.left === '');

    // NOTE(arv): If element is hidden (display none or disconnected or any the
    // ancestors are hidden) we get (0,0) by default but we still do the
    // accumulation of scroll position.

    var pos = {"left":0,"top":0};

    var viewportElement = (browser.ie && !browser.isStrict) ? doc.body : doc.documentElement;
    
    if(element == viewportElement){
        // viewport is always at 0,0 as that defined the coordinate system for this
        // function - this avoids special case checks in the code below
        return pos;
    }

    var parent = null;
    var box;

    if(element.getBoundingClientRect){ // IE and Gecko 1.9+
        box = element.getBoundingClientRect();

        pos.left = Math.floor(box.left) + Math.max(doc.documentElement.scrollLeft, doc.body.scrollLeft);
        pos.top  = Math.floor(box.top)  + Math.max(doc.documentElement.scrollTop,  doc.body.scrollTop);
	        
        // IE adds the HTML element's border, by default it is medium which is 2px
        // IE 6 and 7 quirks mode the border width is overwritable by the following css html { border: 0; }
        // IE 7 standards mode, the border is always 2px
        // This border/offset is typically represented by the clientLeft and clientTop properties
        // However, in IE6 and 7 quirks mode the clientLeft and clientTop properties are not updated when overwriting it via CSS
        // Therefore this method will be off by 2px in IE while in quirksmode
        pos.left -= doc.documentElement.clientLeft;
        pos.top  -= doc.documentElement.clientTop;

        if(browser.ie && !browser.isStrict){
            pos.left -= 2;
            pos.top  -= 2;
        }
    } else if (doc.getBoxObjectFor && !BUGGY_GECKO_BOX_OBJECT/* && !goog.style.BUGGY_CAMINO_*/){ // gecko
        // Gecko ignores the scroll values for ancestors, up to 1.9.  See:
        // https://bugzilla.mozilla.org/show_bug.cgi?id=328881 and
        // https://bugzilla.mozilla.org/show_bug.cgi?id=330619

        box = doc.getBoxObjectFor(element);
        var vpBox = doc.getBoxObjectFor(viewportElement);
        pos.left = box.screenX - vpBox.screenX;
        pos.top  = box.screenY - vpBox.screenY;
    } else { // safari/opera
        parent = element;

        do {
            pos.left += parent.offsetLeft;
            pos.top  += parent.offsetTop;
      
            // In Safari when hit a position fixed element the rest of the offsets
            // are not correct.
            if (browser.isWebkit > 0 && Youngli.dom.getStyle(parent, 'position') == 'fixed') {
                pos.left += doc.body.scrollLeft;
                pos.top  += doc.body.scrollTop;
                break;
            }
            
            parent = parent.offsetParent;
        } while (parent && parent != element);

        // opera & (safari absolute) incorrectly account for body offsetTop
        if(browser.opera > 0 || (browser.isWebkit > 0 && Youngli.dom.getStyle(element, 'position') == 'absolute')){
            pos.top  -= doc.body.offsetTop;
        }

        // accumulate the scroll positions for everything but the body element
        parent = element.offsetParent;
        while (parent && parent != doc.body) {
            pos.left -= parent.scrollLeft;
            // see https://bugs.opera.com/show_bug.cgi?id=249965
            if (!b.opera || parent.tagName != 'TR') {
                pos.top -= parent.scrollTop;
            }
            parent = parent.offsetParent;
        }
    }

    return pos;
};

/**
 * 提供给setStyle与getStyle使用
 */
Youngli.dom._styleFilter = Youngli.dom._styleFilter || [];

/**
 * 提供给setStyle与getStyle使用
 */
Youngli.dom._styleFilter[Youngli.dom._styleFilter.length] = {
    set: function (key, value) {
        if (value.constructor == Number 
            && !/zIndex|fontWeight|opacity|zoom|lineHeight/i.test(key)){
            value = value + "px";
        }

        return value;
    }
};

/**
 * 提供给setStyle与getStyle使用
 */
Youngli.dom._styleFixer = Youngli.dom._styleFixer || {};

/**
 * 提供给setStyle与getStyle使用
 */
Youngli.dom._styleFixer.display = browser.ie && browser.ie < 7 ? {
    set: function (element, value) {
        element = element.style;
        if (value == 'inline-block') {
            element.display = 'inline';
            element.zoom = 1;
        } else {
            element.display = value;
        }
    }
} : browser.firefox && browser.firefox < 3 ? {
    set: function (element, value) {
        element.style.display = value == 'inline-block' ? '-moz-inline-box' : value;
    }
} : null;


/**
 * 提供给setStyle与getStyle使用
 */
Youngli.dom._styleFixer["float"] = browser.ie ? "styleFloat" : "cssFloat";

/**
 * 提供给setStyle与getStyle使用
 */
Youngli.dom._styleFixer.opacity = browser.ie ? {
    get: function (element) {
        var filter = element.style.filter;
        filter && filter.indexOf("opacity=") >= 0 ? (parseFloat(filter.match(/opacity=([^)]*)/)[1]) / 100) + "" : "1";
    },

    set: function (element, value) {
        var style = element.style;
        // 只能Quirks Mode下面生效??
        style.filter = (style.filter || "").replace(/alpha\([^\)]*\)/gi, "") + (value == 1 ? "" : "alpha(opacity=" + value * 100 + ")");
        // IE filters only apply to elements with "layout."
        style.zoom = 1;
    }
} : null;


/**
 * 提供给setStyle与getStyle使用，在做textOverflow时会向element对象中添加,_Overflow, _HTML两个属性保存原始的innerHTML信息
 */
Youngli.dom._styleFixer.textOverflow = (function () {
    var fontSizeCache = {};

    function pop(list) {
        var o = list.length;
        if (o > 0) {
            o = list[o - 1];
            list.length--;
        } else {
            o = null;
        }
        return o;
    }

    function setText(element, text) {
        element[browser.firefox ? "textContent" : "innerText"] = text;
    }

    function count(element, width, ellipsis) {
        /* 计算cache的名称 */
        var o = browser.ie ? element.currentStyle || element.style : getComputedStyle(element, null),
            fontWeight = o.fontWeight,
            cacheName =
                "font-family:" + o.fontFamily + ";font-size:" + o.fontSize
                + ";word-spacing:" + o.wordSpacing + ";font-weight:" + ((parseInt(fontWeight) || 0) == 401 ? 700 : fontWeight)
                + ";font-style:" + o.fontStyle + ";font-variant:" + o.fontVariant,
            cache = fontSizeCache[cacheName];

        if (!cache) {
            o = element.appendChild(document.createElement("div"));

            o.style.cssText = "float:left;" + cacheName;
            cache = fontSizeCache[cacheName] = [];

            /* 计算ASCII字符的宽度cache */
            for (i = 0; i < 256; i++) {
                i == 32 ? (o.innerHTML = "&nbsp;") : setText(o, String.fromCharCode(i));
                cache[i] = o.offsetWidth;
            }

            /* 计算非ASCII字符的宽度、字符间距、省略号的宽度 */
            setText(o, "一");
            cache[256] = o.offsetWidth;
            setText(o, "一一");
            cache[257] = o.offsetWidth - cache[256] * 2;
            cache[258] = cache[".".charCodeAt(0)] * 3 + cache[257] * 3;

            element.removeChild(o);
        }

        for (
            /* wordWidth是每个字符或子节点计算之前的宽度序列 */
            var node = element.firstChild, charWidth = cache[256], wordSpacing = cache[257], ellipsisWidth = cache[258],
                wordWidth = [], ellipsis = ellipsis ? ellipsisWidth : 0;
            node;
            node = node.nextSibling
        ) {
            if (width < ellipsis) {
                element.removeChild(node);
            }
            else if (node.nodeType == 3) {
                for (var i = 0, text = node.nodeValue, length = text.length; i < length; i++) {
                    o = text.charCodeAt(i);
                    /* 计算增加字符后剩余的长度 */
                    wordWidth[wordWidth.length] = [width, node, i];
                    width -= (i ? wordSpacing : 0) + (o < 256 ? cache[o] : charWidth);
                    if (width < ellipsis) {
                        break;
                    }
                }
            }
            else {
                o = node.tagName;
                if (o == "IMG" || o == "TABLE") {
                    /* 特殊元素直接删除 */
                    o = node;
                    node = node.previousSibling;
                    element.removeChild(o);
                }
                else {
                    wordWidth[wordWidth.length] = [width, node];
                    width -= node.offsetWidth;
                }
            }
        }

        if (width < ellipsis) {
            /* 过滤直到能得到大于省略号宽度的位置 */
            while (o = pop(wordWidth)) {
                width = o[0];
                node = o[1];
                o = o[2];
                if (node.nodeType == 3) {
                    if (width >= ellipsisWidth) {
                        node.nodeValue = node.nodeValue.substring(0, o) + "...";
                        return true;
                    }
                    else if (!o) {
                        element.removeChild(node);
                    }
                }
                else if (count(node, width, true)) {
                    return true;
                }
                else {
                    element.removeChild(node);
                }
            }

            /* 能显示的宽度小于省略号的宽度，直接不显示 */
            element.innerHTML = "";
        }
    }

    return {
		get: function (element, style) {
            var browser = browser;
			return (browser.opera ? style.OTextOverflow : browser.firefox ? element._Overflow: style.textOverflow) || "clip";
		},

		set: function (element, value) {
            var browser = browser;
			if (element.tagName == "TD" || element.tagName == "TH" || browser.firefox) {
				element._HTML && (element.innerHTML = element._HTML);

				if (value == "ellipsis") {
					element._HTML = element.innerHTML;
					var o = document.createElement("div"), width = element.appendChild(o).offsetWidth;
					element.removeChild(o);
					count(element, width);
				}
				else {
					element._HTML = "";
				}
			}

			o = element.style;
			browser.opera ? (o.OTextOverflow = value) : browser.firefox ? (element._Overflow = value) : (o.textOverflow = value);
		}
    };
})();

///import Youngli.dom._styleFilter;

/**
 * 为获取和设置样式的过滤器
 * @private
 */
Youngli.dom._styleFilter.filter = function (key, value, method) {
    for (var i = 0, filters = Youngli.dom._styleFilter, filter; filter = filters[i]; i++) {
        if (filter = filter[method]) {
            value = filter(key, value);
        }
    }

    return value;
};

/*
 * 
 *  Copyright 2009 Young li Inc. All rights reserved.
 * 
 * path: dom/getStyle.js
 * author: allstar
 * version: 1.1.0
 * date: 2009/11/18
 */

///import Youngli.dom.g;
///import Youngli.dom._styleFixer;
///import Youngli.dom._styleFilter.filter;
///import Youngli.string.toCamelCase;

/**
 * 获取DOM元素的样式值
 * 
 * @param {HTMLElement|string} element 目标元素或目标元素的id
 * @param {string}             key     要获取的样式名
 * @return {string} 要获取的样式值
 */
Youngli.dom.getStyle = function (element, key) {
   var dom = Youngli.dom;

    element = dom.g(element);
    key = Youngli.string.toCamelCase(key);

    var value = element.style[key];
    
    // 在取不到值的时候，用fixer进行修正
    if (!value) {
        var fixer = dom._styleFixer[key],
        	/* 在IE下，Element没有在文档树上时，没有currentStyle属性 */
    	    style = element.currentStyle || (browser.ie ? element.style : getComputedStyle(element, null));
            
        if ('string' == typeof fixer) {
            value = style[fixer];
        } else if (fixer && fixer.get) {
            value = fixer.get(element, style);
        } else {
            value = style[key];
        }
    }
    
    /* 检查结果过滤器 */
    if (fixer = dom._styleFilter) {
        value = fixer.filter(key, value, 'get');
    }

    return value;
};

/**
 * 从DOM树上移除目标元素
 * 
 * @param {Element|String} element 必需，目标元素或目标元素的id
 * @return {Element} 被操作的DOM元素
 */
Youngli.dom.remove = function (element) {
    element = Youngli.dom.g(element);

    if ("HTML BODY HEAD".indexOf(element.nodeName) == -1) {
        if (browser.ie) {
            var tmpEl = document.createElement('DIV');
            tmpEl.appendChild(element);
            tmpEl.innerHTML = '';
        } else {
            (tmpEl = element.parentNode) && tmpEl.removeChild(element);
        }
    }
};

/**
 * 移除目标元素的className
 * 使用者应保证提供的className合法性，不应包含不合法字符
 * className合法字符参考：http://www.w3.org/TR/CSS2/syndata.html
 * 
 * @param {HTMLElement|string} element   目标元素或目标元素的id
 * @param {string}             className 要移除的class，允许同时移除多个class，中间使用空白符分隔
 * @return {HTMLElement} 被操作的DOM元素
 */
Youngli.dom.removeClass = function (element, className) {
    element = Youngli.dom.g(element);
    var trim = string.trim;

    element.className =
        trim(element.className.split(/\s+/).join("  ")
                .replace(
                    new RegExp("(^| )(" 
                        + trim(className).split(/\s+/).join("|") 
                        + ")( |\x24)", "g"), 
                    " ")
                .replace(/\s+/g, ' '));

    return element;
};

/**
 * 设置DOM元素的样式值
 * 
 * @param {HTMLElement|string}  element 目标元素或目标元素的id
 * @param {string}              key     要设置的样式名
 * @param {string}              value   要设置的样式值
 * @return {HTMLElement} 被操作的DOM元素
 */
Youngli.dom.setStyle = function (element, key, value) {
    var dom = Youngli.dom;
    var fixer;
    
    // 放弃了对firefox 0.9的opacity的支持
    element = dom.g(element);
    key = string.toCamelCase(key);

    if (fixer = dom._styleFilter) {
        value = fixer.filter(key, value, 'set');
    }

    fixer = dom._styleFixer[key];
    (fixer && fixer.set) ? fixer.set(element, value) : (element.style[fixer || key] = value);

    return element;
};

/**
 * 批量设置DOM元素的样式值
 * 
 * @param {HTMLElement|string} element 目标元素或目标元素的id
 * @param {Object}             styles  要设置的样式集合
 * @return {HTMLElement} 被操作的DOM元素
 */
Youngli.dom.setStyles = function (element, styles) {
    element = Youngli.dom.g(element);

    for (var key in styles) {
        Youngli.dom.setStyle(element, key, styles[key]);
    }

    return element;
};

var dom = Youngli.dom || {};﻿
/*
 * 
 * Copyright 2009 Young li Inc. All rights reserved.
 * 
 * author: allstar, erik
 * version: 1.1.0
 * date: 2009/12/02
 */

///import Youngli.ajax;
///import Youngli.ajax.request;

/**
 * 将一个表单用ajax方式提交
 * 
 * @param {HTMLFormElement} form             需要提交的表单元素
 * @param {Object}          options optional 发送请求的选项参数
 * @config {boolean}  async      是否是异步请求。默认是异步请求
 * @config {string}   username   用户名
 * @config {string}   password   密码
 * @config {Object}   headers    要设置的request headers
 * @config {Function} replacer   对参数值特殊处理的函数
 * @config {Function} onsuccess  请求成功之后调用的函数。传递的参数是xhr对象
 * @config {Function} onfailure  请求失败之后调用的函数。传递的参数是xhr对象
 * @config {Function} onstatus   请求成功之后调用的函数。传递的参数是xhr对象和状态码
 * @config {Function} on状态码    如事件是on404时，如果返回码是404，调用这个函数
 * @return {XMLHttpRequest} 发送请求的xhr对象
 */

Youngli.ajax = Youngli.ajax || {};

Youngli.ajax.form = function (form, options) {
    options = options || {};
    var elements    = form.elements,
        len         = elements.length,
        method      = form.getAttribute('method'),
        url         = form.getAttribute('action'),
        replacer    = options.replacer || function (value, name) {
            return value;
        },
        sendOptions = {},
        data = [],
        i, item, itemType, itemName, itemValue, 
        opts, oi, oLen, oItem;
        
    /**
     * 向缓冲区添加参数数据
     * @private
     */
    function addData(name, value) {
        data.push(name + '=' + value);
    }
    
    // 复制发送参数选项对象
    for (i in options) {
        if (options.hasOwnProperty(i)) {
            sendOptions[i] = options[i];
        }
    }
    
    for (i = 0; i < len; i++) {
        item = elements[i];
        itemName = item.name;
        
        // 处理：可用并包含表单name的表单项
        if (!item.disabled && itemName) {
            itemType = item.type;
            itemValue = item.value;
        
            switch (itemType) {
            // radio和checkbox被选中时，拼装queryString数据
            case 'radio':
            case 'checkbox':
                if (!item.checked) {
                    break;
                }
                
            // 默认类型，拼装queryString数据
            case 'textarea':
            case 'text':
            case 'password':
            case 'hidden':
            case 'select-one':
                addData(itemName, replacer(itemValue, itemName));
                break;
                
            // 多行选中select，拼装所有选中的数据
            case 'select-multiple':
                opts = item.options;
                oLen = opts.length;
                for (oi = 0; oi < oLen; oi++) {
                    oItem = opts[oi];
                    if (oItem.selected) {
                        addData(itemName, replacer(oItem.value, itemName));
                    }
                }
                break;
            }
        }
    }
    
    // 完善发送请求的参数选项
    sendOptions.data = data.join('&');
    sendOptions.method = form.getAttribute('method') || 'POST';
    
    // 发送请求
    return Youngli.ajax.request(url, sendOptions);
};
/*
 * 
 * Copyright 2009 Young li Inc. All rights reserved.
 * 
 * author: allstar, erik
 * version: 1.1.0
 * date: 2009/12/02
 */

///import Youngli.ajax;
///import Youngli.ajax.request;

/**
 * 发送get请求的简单外观接口
 * 
 * @param {string}   url                需要发送请求的地址
 * @param {Function} onsuccess optional 请求成功之后调用的函数
 * @return {XMLHttpRequest} 发送请求的xhr对象
 */
Youngli.ajax.get = function (url, onsuccess) {
    return Youngli.ajax.request(url, {'onsuccess': onsuccess});
};
/*
 * 
 * Copyright 2009 Young li Inc. All rights reserved.
 * 
 * author: allstar, erik
 * version: 1.1.0
 * date: 2009/12/02
 */

///import Youngli.ajax;
///import Youngli.ajax.request;

/**
 * 发送post请求的简单外观接口
 * 
 * @param {string}   url                需要发送请求的地址
 * @param {string}   data               需要发送的数据
 * @param {Function} onsuccess optional 请求成功之后调用的函数。传递的参数是xhr对象
 * @return {XMLHttpRequest} 发送请求的xhr对象
 */
Youngli.ajax.post = function (url, data, onsuccess) {
    return Youngli.ajax.request(
        url, 
        {
            'onsuccess': onsuccess,
            'method': 'POST',
            'data': data
        }
    );
};
/*
 * 
 * Copyright 2009 Young li Inc. All rights reserved.
 * 
 * author: allstar, erik
 * version: 1.1.0
 * date: 2009/12/02
 */

///import Youngli.ajax;

/**
 * 使用XMLHttpRequest对象发送请求
 * 
 * @param {String} url              需要发送请求的地址
 * @param {Object} options optional 发送请求的其他可选参数
 * @config {boolean}  async      是否是异步请求。默认是异步请求
 * @config {string}   data       需要发送的数据。如果是GET请求的话，不需要这个属性
 * @config {string}   username   用户名
 * @config {string}   password   密码
 * @config {string}   method     请求的类型，默认是GET
 * @config {Object}   headers    要设置的request headers
 * @config {Function} onsuccess  请求成功之后调用的函数。传递的参数是xhr对象
 * @config {Function} onfailure  请求失败之后调用的函数。传递的参数是xhr对象
 * @config {Function} onstatus   请求成功之后调用的函数。传递的参数是xhr对象和状态码
 * @config {Function} on状态码    如事件是on404时，如果返回码是404，调用这个函数
 * @return {XMLHttpRequest} 发送请求的xhr对象
 */
Youngli.ajax.request = function (url, options) {
    /**
     * readyState发生变更时调用
     * 
     * @ignore
     */
    function stateChangeHandler() {
        if (xhr.readyState == 4) {
            try {
                var stat = xhr.status;
            } catch (ex) {
                // 在请求时，如果网络中断，Firefox会无法取得status
                fire('failure');
                return;
            }
            
            fire(stat);
            
            // http://www.never-online.net/blog/article.asp?id=261
            // case 12002: // Server timeout      
            // case 12029: // dropped connections
            // case 12030: // dropped connections
            // case 12031: // dropped connections
            // case 12152: // closed by server
            // case 13030: // status and statusText are unavailable
            
            // IE error sometimes returns 1223 when it 
            // should be 204, so treat it as success
            if ((stat >= 200 && stat < 300)
                || stat == 304
                || stat == 1223) {
                fire('success');
            } else {
                fire('failure');
            }
            
            /*
             * NOTE: Testing discovered that for some bizarre reason, on Mozilla, the
             * JavaScript <code>XmlHttpRequest.onreadystatechange</code> handler
             * function maybe still be called after it is deleted. The theory is that the
             * callback is cached somewhere. Setting it to null or an empty function does
             * seem to work properly, though.
             * 
             * On IE, there are two problems: Setting onreadystatechange to null (as
             * opposed to an empty function) sometimes throws an exception. With
             * particular (rare) versions of jscript.dll, setting onreadystatechange from
             * within onreadystatechange causes a crash. Setting it from within a timeout
             * fixes this bug (see issue 1610).
             * 
             * End result: *always* set onreadystatechange to an empty function (never to
             * null). Never set onreadystatechange from within onreadystatechange (always
             * in a setTimeout()).
             */
            window.setTimeout(
                function() {
                    // 避免内存泄露
                    xhr.onreadystatechange = new Function();
                    if (async) {
                        xhr = null;
                    }
                }, 0);
        }
    }
    
    /**
     * 获取XMLHttpRequest对象
     * 
     * @ignore
     * @return {XMLHttpRequest} XMLHttpRequest对象
     */
    function getXHR() {
        if (window.ActiveXObject) {
            try {
                return new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                try {
                    return new ActiveXObject("Microsoft.XMLHTTP");
                } catch (e) {}
            }
        }
        if (window.XMLHttpRequest) {
            return new XMLHttpRequest();
        }
    }
    
    /**
     * 触发事件
     * 
     * @ignore
     * @param {String} type 事件类型
     */
    function fire(type) {
        type = 'on' + type;
        var handler = eventHandlers[type],
            globelHandler = Youngli.ajax[type];
        
        // 不对事件类型进行验证
        if (handler) {
            if (type != 'onsuccess') {
                handler(xhr);
            } else {
                handler(xhr, xhr.responseText);
            }
        } else if (globelHandler) {
            //onsuccess不支持全局事件
            if (type == 'onsuccess') {
                return;
            }
            globelHandler(xhr);
        }
    }
    
    
    options = options || {};
    var data        = options.data || "",
        async       = !(options.async === false),
        username    = options.username || "",
        password    = options.password || "",
        method      = (options.method || "GET").toUpperCase(),
        headers     = options.headers || {},
        eventHandlers = {},
        key, xhr;
    
    for (key in options) {
        // 将options参数中的事件参数复制到eventHandlers对象中
        // 这里复制所有options的成员，eventHandlers有冗余
        // 但是不会产生任何影响，并且代码紧凑
        eventHandlers[key] = options[key];
    }
    
    headers['X-Request-By'] = 'ajax';
    
    
    try {
        xhr = getXHR();
        
        if (method == 'GET') {
            url += (url.indexOf('?') >= 0 ? '&' : '?');
            if (data) {
                url += data + '&';
                data = null;
            }
            url += 'b' + (new Date()).getTime() + '=1';
        }
        
        if (username) {
            xhr.open(method, url, async, username, password);
        } else {
            xhr.open(method, url, async);
        }
        
        if (async) {
            xhr.onreadystatechange = stateChangeHandler;
        }
        
        // 在open之后再进行http请求头设定
        if (method == 'POST') {
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        }
        
        for (key in headers) {
            if (headers.hasOwnProperty(key)) {
                xhr.setRequestHeader(key, headers[key]);
            }
        }
        
        fire('beforerequest');
        xhr.send(data);
        
        if (!async) {
            stateChangeHandler();
        }
    } catch (ex) {
        fire('failure');
    }
    
    return xhr;
};

var ajax = Youngli.ajax;/* 
 * Copyright 2009 Young li Inc. All rights reserved.
 * 
 * path: event.js
 * author: erik
 * version: 1.1.0
 * date: 2009/12/16
 */

///import Youngli.event;

/**
 * 事件监听对象
 */
Youngli.event = Youngli.event || {};
Youngli.event._listeners = Youngli.event._listeners || [];

/**
 * 为目标元素添加事件监听器
 * 
 * @param {HTMLElement|string|window} element  目标元素或目标元素id
 * @param {string}                    type     事件类型
 * @param {Function}                  listener 事件监听器
 * @return {HTMLElement} 目标元素
 */

//Youngli.event.on = function (element, type, listener) {
Youngli.event.on = function (element, type, listener, args) {
    type = type.replace(/^on/i, '');
    if ('string' == typeof element) {
        element = g(element);
    }

//    var fn = function (ev) {
//        // 这里不支持EventArgument
//        // 原因是跨frame的时间挂载
//        listener.call(element, ev);
//    };
	
	// 挂载参数 modified by jarry
	if (typeof args != 'undefined') {
		var fn = function(ev) {
			listener.call(args, ev);
		};
	} else {
	    var fn = function (ev) {
	      listener.call(element, ev);
	  };
	}
    
    lis = Youngli.event._listeners;
    
    // 将监听器存储到数组中
    lis[lis.length] = [element, type, listener, fn];
    
    // 事件监听器挂载
    if (element.addEventListener) {
        element.addEventListener(type, fn, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + type, fn);
    } 
    
    return element;
};


/*
 * Copyright 2009 Young li Inc. All rights reserved.
 * 
 * path: event/_unload.js
 * author: erik
 * version: 1.1.0
 * date: 2009/12/16
 */

///import Youngli.event;

/**
 * 卸载所有事件监听器
 * @private
 */
Youngli.event._unload = function () {
    var lis = Youngli.event._listeners,
        len = lis.length,
        standard = !!window.removeEventListener,
        item, el;
        
    while (len--) {
        item = lis[len];
        el = item[0];
        if (el.removeEventListener) {
            el.removeEventListener(item[1], item[3], false);
        } else if (el.detachEvent){
            el.detachEvent('on' + item[1], item[3]);
        }
    }
    
    if (standard) {
        window.removeEventListener('unload', Youngli.event._unload, false);
    } else {
        window.detachEvent('onunload', Youngli.event._unload);
    }
};

/*
 * Copyright 2009 Youngli Inc. All rights reserved.
 * 
 * path: event/un.js
 * author: erik
 * version: 1.1.0
 * date: 2009/12/16
 */


/**
 * 为目标元素移除事件监听器
 * 
 * @param {HTMLElement|string|window} element  目标元素或目标元素id
 * @param {string}                    type     事件类型
 * @param {Function}                  listener 事件监听器
 * @return {HTMLElement} 目标元素
 */
Youngli.event.un = function (element, type, listener) {
    if ('string' == typeof element) {
        element = dom.g(element);
    }
    type = type.replace(/^on/i, '');
    
    var lis = Youngli.event._listeners, 
        len = lis.length,
        isRemoveAll = !listener,
        item;
    
    while (len--) {
        item = lis[len];
        
        // listener存在时，移除element的所有以listener监听的type类型事件
        // listener不存在时，移除element的所有type类型事件
        if (item[1] === type
            && item[0] === element
            && (isRemoveAll || item[2] === listener)) {
            if (element.removeEventListener) {
                element.removeEventListener(type, item[3], false);
            } else if (element.detachEvent) {
                element.detachEvent('on' + type, item[3]);
            }
            lis.splice(len, 1);
        }
    }
    
    return element;
};



// 在页面卸载的时候，将所有事件监听器移除
if (window.attachEvent) {
    window.attachEvent('onunload', Youngli.event._unload);
} else {
    window.addEventListener('unload', Youngli.event._unload, false);
}


/**
 * 停止事件的传播
 * 
 * @param {Event} event 事件对象
 */
Youngli.event.stopPropagation = function (event) {
   if (event.stopPropagation) {
       event.stopPropagation();
   } else {
       event.cancelBubble = true;
   }
};



/**
 * 阻止事件的默认行为
 * 
 * @param {Event} event 事件对象
 */
Youngli.event.preventDefault = function (event) {
   if (event.preventDefault) {
       event.preventDefault();
   } else {
       event.returnValue = false;
   }
};

/**
 * 停止事件
 * 
 * @param {Event} event 事件对象
 */
Youngli.event.stop = function (event) {
    var e = Youngli.event;
    e.stopPropagation(event);
    e.preventDefault(event);
};


/**
 * 获取事件的触发元素
 * 
 * @param {Event} event 事件对象
 * @return {HTMLElement} 事件的触发元素
 */
Youngli.event.getTarget = function (event) {
    return event.target || event.srcElement;
};


/**
 * 声明快捷方式
 */
Youngli.on = Youngli.event.on;
Youngli.un = Youngli.event.un;

/**
 * 
 * 事件包装类
 * @public
 * @param {event} event EventArgument
 */
function Event(event) {
   event = event || window.event;
   this.target = event.target || event.srcElement;
//   _extend(this, event);
   this.keyCode = event.which ? event.which : event.keyCode;
   this.rightClick = (event.which == 3) || (event.button == 2);
}

/**
 * 
 * 为页面元素添加事件监听器
 * @param {HTMLElement} element 页面元素
 * @param {String} eventType 监听的事件类型
 * @param {Function} listener 监听器
 */
Event.add = function (element, eventType, listener) {
   if (window.addEventListener) {
       element.addEventListener(eventType, listener, false);
   } else {
       element.attachEvent('on' + eventType, listener);
   }
};

/**
 * 为页面元素移除事件监听器
 * @param {HTMLElement} element 页面元素
 * @param {String} eventType 监听的事件类型
 * @param {Function} listener 监听器
 */
Event.remove = function (element, eventType, listener) {
   if (window.removeEventListener) {
       element.removeEventListener(eventType, listener, false);
   } else {
       element.detachEvent('on' + eventType, listener);
   }
};
﻿
/*
 * Tangram
 * Copyright 2009 Youngli Inc. All rights reserved.
 * 
 * path: array.js
 * author: erik
 * version: 1.1.0
 * date: 2009/12/02
 */


/**
 * 声明Youngli.array包
 */
Youngli.array = Youngli.array || {};
/*
 * Tangram
 * Copyright 2009 Youngli Inc. All rights reserved.
 * 
 * path: array/each.js
 * author: erik
 * version: 1.1.0
 * date: 2009/12/02
 */

///import Youngli.array;

/**
 * 遍历数组中所有元素
 * 
 * @param {Array}    source   需要遍历的数组
 * @param {Function} iterator 对每个数组元素进行调用的函数
 * @return {Array} 遍历的数组
 */
Youngli.array.each = function (source, iterator) {
    var returnValue, item, i, len = source.length;
    
    if ('function' == typeof iterator) {
        for (i = 0; i < len; i++) {
            item = source[i];
            returnValue = iterator.call(source, item, i);
    
            if (returnValue === false) {
                break;
            }
        }
    }
    return source;
};

// 声明快捷方法
var each = Youngli.array.each;
/*
 * Tangram
 * Copyright 2009 Youngli Inc. All rights reserved.
 * 
 * path: array/filter.js
 * author: erik
 * version: 1.1.0
 * date: 2009/12/02
 */

///import Youngli.array;

/**
 * 从数组中筛选符合条件的元素
 * 
 * @param {Array}    source   需要筛选的数组
 * @param {Function} iterator 对每个数组元素进行筛选的函数
 * @return {Array} 符合条件的数组项集合
 */
Youngli.array.filter = function (source, iterator) {
    var result = [],
        resultIndex = 0,
        len = source.length,
        item,
        i;
    
    if ('function' == typeof iterator) {
        for (i = 0; i < len; i++) {
            item = source[i];
            if (true === iterator.call(source, item, i)) {
                // resultIndex用于优化对result.length的多次读取
                result[resultIndex++] = item;
            }
        }
    }
    
    return result;
};
/*
 * Tangram
 * Copyright 2009 Youngli Inc. All rights reserved.
 * 
 * path: array/find.js
 * author: erik
 * version: 1.1.0
 * date: 2009/12/02
 */

///import Youngli.array;

/**
 * 从数组中寻找符合条件的第一个数组元素
 * 
 * @param {Array}    source   需要查找的数组
 * @param {Function} iterator 对每个数组元素进行查找的函数
 * @return {Any|null} 符合条件的第一个数组元素，找不到时返回null
 */
Youngli.array.find = function (source, iterator) {
    var item, i, len = source.length;
    
    if ('function' == typeof iterator) {
        for (i = 0; i < len; i++) {
            item = source[i];
            if (true === iterator.call(source, item, i)) {
                return item;
            }
        }
    }
    
    return null;
};
/*
 * Tangram
 * Copyright 2009 Youngli Inc. All rights reserved.
 * 
 * path: array/indexOf.js
 * author: erik
 * version: 1.1.0
 * date: 2009/12/02
 */

///import Youngli.array;

/**
 * 查询数组中指定元素的索引位置
 * 
 * @param {Array}        source             需要查询的数组
 * @param {Any|Function} condition          查询项或查询函数
 * @param {number}       position optional  查询的起始位索引位置
 * @return {number} 指定元素的索引位置
 */
Youngli.array.indexOf = function (source, condition, position) {
    var len = source.length,
        iterator = condition;
        
    // 参考ecma262的String.prototype.indexOf实现
    // 为undefined时归0，否则进行ToInteger(参见ecma262 3rd 9.4)
    position = Number(position) || 0;
    position = position < 0 ? Math.ceil(position) : Math.floor(position); 
    position = Math.min(Math.max(position, 0), len);
    
    if ('function' != typeof condition) {
        iterator = function (item) {
            return condition === item;
        };
    }
    
    for ( ; position < len; position++) {
        if (true === iterator.call(source, source[position], position)) {
            return position;
        }
    }
    
    return -1;
};
/*
 * Tangram
 * Copyright 2009 Youngli Inc. All rights reserved.
 * 
 * path: array/lastIndexOf.js
 * author: erik
 * version: 1.1.0
 * date: 2009/11/14
 */

///import Youngli.array;

/**
 * 从后往前，查询数组中指定元素的索引位置
 * 
 * @param {Array}        source    需要查询的数组
 * @param {Any|Function} condition 查询项或查询函数
 * @return {number} 指定元素的索引位置
 */
Youngli.array.lastIndexOf = function (source, condition) {
    var len = source.length,
        iterator = condition;
    
    if ('function' != typeof condition) {
        iterator = function (item) {
            return condition === item;
        };
    }
    
    while (len--) {
        if (true === iterator.call(source, source[len], len)) {
            return len;
        }
    }
    
    return -1;
};
/*
 * Tangram
 * Copyright 2009 Youngli Inc. All rights reserved.
 * 
 * path: array/remove.js
 * author: erik
 * version: 1.1.0
 * date: 2009/11/30
 */

///import Youngli.array;

/**
 * 移除数组中的项
 * 
 * @param {Array}        source    需要移除项的数组
 * @param {Any|Function} condition 要移除的项或移除匹配函数
 */
Youngli.array.remove = function (source, condition) {
    var len = source.length,
        iterator = condition;
    
    if ('function' != typeof condition) {
        iterator = function (item) {
            return condition === item;
        };
    }
    
    while (len--) {
        if (true === iterator.call(source, source[len], len)) {
            source.splice(len, 1);
        }
    }
};
/*
 * Tangram
 * Copyright 2009 Youngli Inc. All rights reserved.
 * 
 * path: array/removeAt.js
 * author: erik
 * version: 1.1.0
 * date: 2009/11/30
 */

///import Youngli.array;

/**
 * 移除数组中的项
 * 
 * @param {Array}  source 需要移除项的数组
 * @param {number} index  要移除项的索引位置
 * @return {Any} 被移除的数组项
 */
Youngli.array.removeAt = function (source, index) {
    return source.splice(index, 1)[0];
};
/*
 * Tangram
 * Copyright 2009 Youngli Inc. All rights reserved.
 * 
 * path: array/unique.js
 * author: allstar, erik
 * version: 1.1.0
 * date: 2009/12/02
 */

///import Youngli.array;

/**
 * 过滤数组中的相同项
 * 
 * @param {Array}    source             需要过滤相同项的数组
 * @param {Function} compareFn optional 比较2个数组项是否相同的函数
 * @return {Array} 过滤后的新数组
 */
Youngli.array.unique = function (source, compareFn) {
    var len = source.length,
        result = source.slice(0),
        i, datum;
        
    if ('function' != typeof compareFn) {
        compareFn = function (item1, item2) {
            return item1 === item2;
        };
    }
    
    // 从后往前双重循环比较
    // 如果两个元素相同，删除后一个
    while (--len > 0) {
        datum = result[len];
        i = len - 1;
        while (i--) {
            if (compareFn(datum, result[i])) {
                result.splice(len, 1);
                break;
            }
        }
    }

    return result;
};

var array = Youngli.array;﻿/**
 * 声明Youngli.page包
 */
Youngli.page = Youngli.page || {};

/**
 * 获取页面高度
 * 
 * @return {number} 页面高度
 */
Youngli.page.getHeight = function () {
    var doc = document,
        body = doc.body,
        html = doc.documentElement,
        client = doc.compatMode == 'BackCompat' ? body : doc.documentElement;

    return Math.max(html.scrollHeight, body.scrollHeight, client.clientHeight);
};
/*
 * Copyright 2009 Youngli Inc. All rights reserved.
 * 
 * path: youngli/page/loadCssFile.js
 * author: allstar
 * version: 1.1.0
 * date: 2009/11/20
 */



/**
 * 动态在页面上加载一个外部css文件
 * 
 * @param {String} path css文件路径
 */
Youngli.page.loadCssFile = function (path) {
    var element = document.createElement("link");
    
    element.setAttribute("rel", "stylesheet");
    element.setAttribute("type", "text/css");
    element.setAttribute("href", path);

    document.getElementsByTagName("head")[0].appendChild(element);        
};
/*
 * 
 * Copyright 2009 Youngli Inc. All rights reserved.
 * 
 * path: youngli/page/getScrollLeft.js
 * author: erik
 * version: 1.1.0
 * date: 2009/11/17
 */



/**
 * 获取横向滚动量
 * 
 * @return {number} 横向滚动量
 */
Youngli.page.getScrollLeft = function () {
    var d = document;
    return d.documentElement.scrollLeft || d.body.scrollLeft;
};
/*
 * 
 * Copyright 2009 Youngli Inc. All rights reserved.
 * 
 * path: youngli/page/getViewWidth.js
 * author: allstar
 * version: 1.1.0
 * date: 2009/11/20
 */



/**
 * 获取页面视觉区域宽度
 * 
 * @return {number} 页面视觉区域宽度
 */
Youngli.page.getViewWidth = function () {
    var doc = document,
        client = doc.compatMode == 'BackCompat' ? doc.body : doc.documentElement;

    return client.clientWidth;
};
/*
 * 
 * Copyright 2009 Youngli Inc. All rights reserved.
 * 
 * path: youngli/page/loadJsFile.js
 * author: allstar
 * version: 1.1.0
 * date: 2009/11/20
 */



/**
 * 动态在页面上加载一个外部js文件
 * 
 * @param {String} path js文件路径
 */
Youngli.page.loadJsFile = function (path) {
    var element = document.createElement('script');

    element.setAttribute('type', 'text/javascript');
    element.setAttribute('src', path);
    element.setAttribute('defer', 'defer');

    document.getElementsByTagName("head")[0].appendChild(element);    
};/*
 * 
 * Copyright 2009 Youngli Inc. All rights reserved.
 * 
 * path: youngli/page/getWidth.js
 * author: allstar, erik
 * version: 1.1.0
 * date: 2009/12/03
 */



/**
 * 获取页面宽度
 * 
 * @return {number} 页面宽度
 */
Youngli.page.getWidth = function () {
    var doc = document,
        body = doc.body,
        html = doc.documentElement,
        client = doc.compatMode == 'BackCompat' ? body : doc.documentElement;

    return Math.max(html.scrollWidth, body.scrollWidth, client.clientWidth);
};
/*
 * 
 * Copyright 2009 Youngli Inc. All rights reserved.
 * 
 * path: youngli/page/getScrollTop.js
 * author: erik
 * version: 1.1.0
 * date: 2009/11/17
 */



/**
 * 获取纵向滚动量
 * 
 * @return {number} 纵向滚动量
 */
Youngli.page.getScrollTop = function () {
    var d = document;
    return d.documentElement.scrollTop || d.body.scrollTop;
};
/*
 * 
 * Copyright 2009 Youngli Inc. All rights reserved.
 * 
 * path: youngli/page/getViewHeight.js
 * author: allstar
 * version: 1.1.0
 * date: 2009/11/20
 */



/**
 * 获取页面视觉区域高度
 * 
 * @return {number} 页面视觉区域高度
 */
Youngli.page.getViewHeight = function () {
    var doc = document,
        client = doc.compatMode == 'BackCompat' ? doc.body : doc.documentElement;

    return client.clientHeight;
};

// 声明快捷方式
var page = Youngli.page;/*
 * Copyright 2009 Youngli Inc. All rights reserved.
 * 
 * path: youngli/cookie.js
 * author: erik
 * version: 1.1.0
 * date: 2009/12/02
 */


/**
 * 声明Youngli.cookie包
 */
Youngli.cookie = Youngli.cookie || {};

/**
 * 验证字符串是否合法的cookie键名
 * 
 * @param {string} source 需要遍历的数组
 * @return {boolean} 是否合法的cookie键名
 */
Youngli.cookie._isValidKey = function (key) {
    // http://www.w3.org/Protocols/rfc2109/rfc2109
    // Syntax:  General
    // The two state management headers, Set-Cookie and Cookie, have common
    // syntactic properties involving attribute-value pairs.  The following
    // grammar uses the notation, and tokens DIGIT (decimal digits) and
    // token (informally, a sequence of non-special, non-white space
    // characters) from the HTTP/1.1 specification [RFC 2068] to describe
    // their syntax.
    // av-pairs   = av-pair *(";" av-pair)
    // av-pair    = attr ["=" value] ; optional value
    // attr       = token
    // value      = word
    // word       = token | quoted-string
    
    // http://www.ietf.org/rfc/rfc2068.txt
    // token      = 1*<any CHAR except CTLs or tspecials>
    // CHAR       = <any US-ASCII character (octets 0 - 127)>
    // CTL        = <any US-ASCII control character
    //              (octets 0 - 31) and DEL (127)>
    // tspecials  = "(" | ")" | "<" | ">" | "@"
    //              | "," | ";" | ":" | "\" | <">
    //              | "/" | "[" | "]" | "?" | "="
    //              | "{" | "}" | SP | HT
    // SP         = <US-ASCII SP, space (32)>
    // HT         = <US-ASCII HT, horizontal-tab (9)>
        
    return (new RegExp("^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+\x24")).test(key);
};

/**
 * 设置cookie的值，不对值进行编码
 * 
 * @param {string} key              需要获取Cookie的键名
 * @param {string} value            需要设置的Cookie值
 * @param {Object} options optional 设置Cookie的其他可选参数
 * @config {string}         path    cookie路径
 * @config {Date|number}    expires cookie过期时间. 如果类型是数字的话, 单位是毫秒
 * @config {string}         domain  cookie域名
 * @config {string}         secure  cookie是否安全传输
 */
Youngli.cookie.setRaw = function (key, value, options) {
    if (!Youngli.cookie._isValidKey(key)) {
        return;
    }
    
    options = options || {};
    //options.path = options.path || "/"; // meizz 20100402 设定一个初始值，方便后续的操作
    //berg 20100409 去掉，因为用户希望默认的path是当前路径，这样和浏览器对cookie的定义也是一致的
    
    // 计算cookie过期时间
    var expires = options.expires;
    if ('number' == typeof options.expires) {
        expires = new Date();
        expires.setTime(expires.getTime() + options.expires);
    }
    
    document.cookie =
        key + "=" + value
        + (options.path ? "; path=" + options.path : "")
        + (expires ? "; expires=" + expires.toGMTString() : "")
        + (options.domain ? "; domain=" + options.domain : "")
        + (options.secure ? "; secure" : ''); 
};

/*
 * Copyright 2009 Youngli Inc. All rights reserved.
 * 
 * path: youngli/cookie/getRaw.js
 * author: erik
 * version: 1.1.0
 * date: 2009/11/15
 */


/**
 * 获取cookie的值，不对值进行解码
 * 
 * @param {string} key 需要获取Cookie的键名
 * @return {string|null} 获取的Cookie值
 */
Youngli.cookie.getRaw = function (key) {
    if (Youngli.cookie._isValidKey(key)) {
        var reg = new RegExp("(^| )" + key + "=([^;]*)(;|\x24)"),
            result = reg.exec(document.cookie);
            
        if (result) {
            return result[2] || null;
        }
    }

    return null;
};


/*
 * Copyright 2009 Youngli Inc. All rights reserved.
 * 
 * path: youngli/cookie/get.js
 * author: erik
 * version: 1.1.0
 * date: 2009/11/15
 */


/**
 * 获取cookie的值，并进行decodeURIComponent解码
 * 
 * @param {string} key 需要获取Cookie的键名
 * @return {string|null} 获取的Cookie值
 */
Youngli.cookie.get = function (key) {
    var value = Youngli.cookie.getRaw(key);
    if ('string' == typeof value) {
        value = decodeURIComponent(value);
        return value;
    }
    return null;
};

/*
 * Copyright 2009 Youngli Inc. All rights reserved.
 * 
 * path: youngli/cookie/set.js
 * author: erik
 * version: 1.1.0
 * date: 2009/11/15
 */

/**
 * 设置cookie的值，并进行encodeURIComponent编码
 * 
 * @param {string} key              需要获取Cookie的键名
 * @param {string} value            需要设置的Cookie值
 * @param {Object} options optional 设置Cookie的其他可选参数
 * @config {string}         path    cookie路径
 * @config {Date|number}    expires cookie过期时间. 如果类型是数字的话, 单位是毫秒
 * @config {string}         domain  cookie域名
 * @config {string}         secure  cookie是否安全传输
 */
Youngli.cookie.set = function (key, value, options) {
    Youngli.cookie.setRaw(key, encodeURIComponent(value), options);
};

/*
 * Copyright 2009 Youngli Inc. All rights reserved.
 * 
 * path: youngli/cookie/remove.js
 * author: erik
 * version: 1.1.0
 * date: 2009/11/15
 */

/**
 * 删除cookie的值
 * 
 * @param {string} key      需要删除Cookie的键名
 * @param {JSON}   options  cookie对应的 path domain expires 等值
 *
 * 20100402 meizz 在删除 cookie 的时候若指定删除的 cookie 的 domain path 
 * 等信息与原设定的 cookie 信息不致时，是无法删除这个 cookie 的。
 */
Youngli.cookie.remove = function (key, options) {
    options = options || {};
    options.expires = new Date(0);
    Youngli.cookie.setRaw(key, '', options);
};/*
 * Copyright 2009 Youngli Inc. All rights reserved.
 *
 * path: drag.js
 * author: lichunping/jarryli
 * version: 1.0.0
 * date: 2009/12/16
 */


/**
 * 拖动类
 * @param {DOM object} obj dom 对象
 * @param {Array object} range 区域对象 {minX, minY, maxX, maxY}
 * 
 */
function Drag(obj, range) {
	// 要拖动的对象
	this.obj    = obj || this.obj;
	// 存储鼠标相对于对象的位置以及对象的top与left
	this.position = {};	
	this.mousePosition = {};
	this.mozUserSelect = null;
	this.selectStart = null;
	// 鼠标移动的函数
	this.onmousemove = this.onmousemove || null;

	// 拖动区域
	this.range = range || this.range;
	if (range) {
		this.range = {
				minX : range.minX || null,
				minY : range.minY || null,
				maxX : range.maxX || null,
				maxY : range.maxY || null
		};
	};
	// 开始
	if (this.obj)
		this.init();

 }
Drag.prototype = {
	/**
	 * 函数初始化执行mousedown事件
	 */
	init : function() {
		var drag = this;
		this.obj.onmousedown = function(e) {
			drag.start(e);
		}
	},
	
/**	
	page : function() {
		getScrollLeft : function () {
			var d = document;
			return d.documentElement.scrollLeft || d.body.scrollLeft;
		},
		getScrollTop : function () {
			var d = document;
			return d.documentElement.scrollTop || d.body.scrollTop;
		}
	},
*/

	/**
	 * 获得鼠标坐标的私有函数
	 * @param {event} e 
	 * @param {object} {x : number, y : number}
	 */
	getMousePosition : function(e) {
		e = window.event || e;
        return {
            x : page.getScrollLeft() + e.clientX,
            y : page.getScrollTop() + e.clientY
        };
	},

	_selectOn : function() {
		document.body.style.MozUserSelect = this.mozUserSelect;
		document.onselectstart = function(e) {
			return true
		}; 
	},

	_selectOff : function() {
		this.mozUserSelect = document.body.style.MozUserSelect;
		document.body.style.MozUserSelect = "none";
		document.onselectstart = function(e) {
			return false
		};
	},

	_unselect : function(e) {
		Youngli.event.preventDefault(e);
	},

	/**
	 * 通过mousedown事件，得到鼠标相对于拖动对象的位置
	 * 再分别挂载document的鼠标移动与释放事件
	 * @param {event} e 
	 */
	start : function(e) {
		var drag = this;
		var obj  = this.obj;
		var mousePos = drag.getMousePosition(e);
		var pos  = dom.getPosition(obj);
		var left = pos.left;
		var top  = pos.top;
	    // 保存鼠标x、y轴减去对象的左边距与上边距信息
		this.position.x = mousePos.x - left;
		this.position.y = mousePos.y - top;
		this.position.left = pos.left;
		this.position.top  = pos.top;
		this._selectOff();
//		Youngli.on(document, "mousemove", drag.move, this);
//		Youngli.on(document, "mousemove", drag.move);
//		Youngli.on(document, "mouseup", drag.end);
		document.onmousemove = function(e) {
			drag.move(e);
		};
		document.onmouseup = function() {			
			drag.end();
		};


	},
	/**
	 * 当鼠标在文档内移动时，重设对象的left与top
	 * 对象的新位置为鼠标坐标减去(原鼠标座标相对于对象的位置)
	 * @param {event} e 
	 */
	move : function(e) {
		try {
			var mousePos = this.getMousePosition(e);			
			this.mousePosition = mousePos;
			var ex = mousePos.x;
			var ey = mousePos.y;
			var obj  = this.obj;
			var left = ex - this.position.x;
			var top  = ey - this.position.y;
			left = left > 0 ? left : 0;
			top  = top  > 0 ? top  : 0;
			// 设定区域
			var range = this.range;
			if ('object' == typeof range) {
				left = Math.max(range.minX, left);
				left = Math.min(range.maxX - this.obj.offsetWidth, left);
				top  = Math.max(range.minY, top);
				top  = Math.min(range.maxY - this.obj.offsetHeight, top);
			}
			obj.style.left = left + 'px';
			obj.style.top  = top + 'px';
			this.position.left = left;
			this.position.top  = top;

			// 鼠标移动时外调的函数
			if ('function' == typeof this.onmousemove) {
				this.onmousemove.call(this);
			}

		} catch(ex) {
			window.status = ex.toString();
		}
	},

	end : function() {
		// 鼠标停止时外调的函数
		if ('function' == typeof this.onmousestop) {
				this.onmousestop.call(this);
		}
		var drag = this;
		var obj = drag.obj;
        if (obj.releaseCapture) {
            obj.releaseCapture();
        } else if (window.captureEvents) {
//           window.captureEvents(Event.MOUSEMOVE|Event.MOUSEUP);
        }
//  Youngli.un(document, "mousemove", drag.move);
		document.onmousemove = null;
		this._selectOn();
	}

};//v.2.5 build 91111

/*
Copyright DHTMLX LTD. http://www.dhtmlx.com
You allowed to use this component or parts of it under GPL terms
To use it on other terms or get Professional edition of the component please contact us at sales@dhtmlx.com
*/
dhtmlx=function(obj){
	for (var a in obj) dhtmlx[a]=obj[a];
	return dhtmlx; //simple singleton
};
dhtmlx.extend_api=function(name,map,ext){
	var t = window[name];
	if (!t) return; //component not defined
	window[name]=function(obj){
		if (obj && typeof obj == "object" && !obj.tagName && !(obj instanceof Array)){
			var that = t.apply(this,(map._init?map._init(obj):arguments));
			//global settings
			for (var a in dhtmlx)
				if (map[a]) this[map[a]](dhtmlx[a]);			
			//local settings
			for (var a in obj){
				if (map[a]) this[map[a]](obj[a]);
				else if (a.indexOf("on")==0){
					this.attachEvent(a,obj[a]);
				}
			}
		} else
			var that = t.apply(this,arguments);
		if (map._patch) map._patch(this);
		return that||this;
	};
	window[name].prototype=t.prototype;
	if (ext)
		dhtmlXHeir(window[name].prototype,ext);
};

dhtmlxAjax={
	get:function(url,callback){
		var t=new dtmlXMLLoaderObject(true);
		t.async=(arguments.length<3);
		t.waitCall=callback;
		t.loadXML(url)
		return t;
	},
	post:function(url,post,callback){
		var t=new dtmlXMLLoaderObject(true);
		t.async=(arguments.length<4);
		t.waitCall=callback;
		t.loadXML(url,true,post)
		return t;
	},
	getSync:function(url){
		return this.get(url,null,true)
	},
	postSync:function(url,post){
		return this.post(url,post,null,true);		
	}
}

/**
  *     @desc: xmlLoader object
  *     @type: private
  *     @param: funcObject - xml parser function
  *     @param: object - jsControl object
  *     @param: async - sync/async mode (async by default)
  *     @param: rSeed - enable/disable random seed ( prevent IE caching)
  *     @topic: 0
  */
function dtmlXMLLoaderObject(funcObject, dhtmlObject, async, rSeed){
	this.xmlDoc="";

	if (typeof (async) != "undefined")
		this.async=async;
	else
		this.async=true;

	this.onloadAction=funcObject||null;
	this.mainObject=dhtmlObject||null;
	this.waitCall=null;
	this.rSeed=rSeed||false;
	return this;
};
/**
  *     @desc: xml loading handler
  *     @type: private
  *     @param: dtmlObject - xmlLoader object
  *     @topic: 0
  */
dtmlXMLLoaderObject.prototype.waitLoadFunction=function(dhtmlObject){
	var once = true;
	this.check=function (){
		if ((dhtmlObject)&&(dhtmlObject.onloadAction != null)){
			if ((!dhtmlObject.xmlDoc.readyState)||(dhtmlObject.xmlDoc.readyState == 4)){
				if (!once)
					return;

				once=false; //IE 5 fix
				if (typeof dhtmlObject.onloadAction == "function")
					dhtmlObject.onloadAction(dhtmlObject.mainObject, null, null, null, dhtmlObject);

				if (dhtmlObject.waitCall){
					dhtmlObject.waitCall.call(this,dhtmlObject);
					dhtmlObject.waitCall=null;
				}
			}
		}
	};
	return this.check;
};

/**
  *     @desc: return XML top node
  *     @param: tagName - top XML node tag name (not used in IE, required for Safari and Mozilla)
  *     @type: private
  *     @returns: top XML node
  *     @topic: 0  
  */
dtmlXMLLoaderObject.prototype.getXMLTopNode=function(tagName, oldObj){
	if (this.xmlDoc.responseXML){
		var temp = this.xmlDoc.responseXML.getElementsByTagName(tagName);
		if(temp.length==0 && tagName.indexOf(":")!=-1)
			var temp = this.xmlDoc.responseXML.getElementsByTagName((tagName.split(":"))[1]);
		var z = temp[0];
	} else
		var z = this.xmlDoc.documentElement;

	if (z){
		this._retry=false;
		return z;
	}

	if ((_isIE)&&(!this._retry)){
		//fall back to MS.XMLDOM
		var xmlString = this.xmlDoc.responseText;
		var oldObj = this.xmlDoc;
		this._retry=true;
		this.xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
		this.xmlDoc.async=false;
		this.xmlDoc["loadXM"+"L"](xmlString);

		return this.getXMLTopNode(tagName, oldObj);
	}
	dhtmlxError.throwError("LoadXML", "Incorrect XML", [
		(oldObj||this.xmlDoc),
		this.mainObject
	]);

	return document.createElement("DIV");
};

/**
  *     @desc: load XML from string
  *     @type: private
  *     @param: xmlString - xml string
  *     @topic: 0  
  */
dtmlXMLLoaderObject.prototype.loadXMLString=function(xmlString){
	{
		try{
			var parser = new DOMParser();
			this.xmlDoc=parser.parseFromString(xmlString, "text/xml");
		}
		catch (e){
			this.xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
			this.xmlDoc.async=this.async;
			this.xmlDoc["loadXM"+"L"](xmlString);
		}
	}

	this.onloadAction(this.mainObject, null, null, null, this);

	if (this.waitCall){
		this.waitCall();
		this.waitCall=null;
	}
}
/**
  *     @desc: load XML
  *     @type: private
  *     @param: filePath - xml file path
  *     @param: postMode - send POST request
  *     @param: postVars - list of vars for post request
  *     @topic: 0
  */
dtmlXMLLoaderObject.prototype.loadXML=function(filePath, postMode, postVars, rpc){
	if (this.rSeed)
		filePath+=((filePath.indexOf("?") != -1) ? "&" : "?")+"a_dhx_rSeed="+(new Date()).valueOf();
	this.filePath=filePath;

	if ((!_isIE)&&(window.XMLHttpRequest))
		this.xmlDoc=new XMLHttpRequest();
	else {
		if (document.implementation&&document.implementation.createDocument){
			this.xmlDoc=document.implementation.createDocument("", "", null);
			this.xmlDoc.onload=new this.waitLoadFunction(this);
			this.xmlDoc.load(filePath);
			return;
		} else
			this.xmlDoc=new ActiveXObject("Microsoft.XMLHTTP");
	}

	if (this.async)
		this.xmlDoc.onreadystatechange=new this.waitLoadFunction(this);
	this.xmlDoc.open(postMode ? "POST" : "GET", filePath, this.async);

	if (rpc){
		this.xmlDoc.setRequestHeader("User-Agent", "dhtmlxRPC v0.1 ("+navigator.userAgent+")");
		this.xmlDoc.setRequestHeader("Content-type", "text/xml");
	}

	else if (postMode)
		this.xmlDoc.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		
	this.xmlDoc.setRequestHeader("X-Requested-With","XMLHttpRequest");
	this.xmlDoc.send(null||postVars);

	if (!this.async)
		(new this.waitLoadFunction(this))();
};
/**
  *     @desc: destructor, cleans used memory
  *     @type: private
  *     @topic: 0
  */
dtmlXMLLoaderObject.prototype.destructor=function(){
	this.onloadAction=null;
	this.mainObject=null;
	this.xmlDoc=null;
	return null;
}

dtmlXMLLoaderObject.prototype.xmlNodeToJSON = function(node){
        var t={};
        for (var i=0; i<node.attributes.length; i++)
            t[node.attributes[i].name]=node.attributes[i].value;
        t["_tagvalue"]=node.firstChild?node.firstChild.nodeValue:"";
        for (var i=0; i<node.childNodes.length; i++){
            var name=node.childNodes[i].tagName;
            if (name){
                if (!t[name]) t[name]=[];
                t[name].push(this.xmlNodeToJSON(node.childNodes[i]));
            }            
        }        
        return t;
    }

/**  
  *     @desc: Call wrapper
  *     @type: private
  *     @param: funcObject - action handler
  *     @param: dhtmlObject - user data
  *     @returns: function handler
  *     @topic: 0  
  */
function callerFunction(funcObject, dhtmlObject){
	this.handler=function(e){
		if (!e)
			e=window.event;
		funcObject(e, dhtmlObject);
		return true;
	};
	return this.handler;
};

/**  
  *     @desc: Calculate absolute position of html object
  *     @type: private
  *     @param: htmlObject - html object
  *     @topic: 0  
  */
function getAbsoluteLeft(htmlObject){
	return getOffset(htmlObject).left;
}
/**
  *     @desc: Calculate absolute position of html object
  *     @type: private
  *     @param: htmlObject - html object
  *     @topic: 0  
  */
function getAbsoluteTop(htmlObject){
	return getOffset(htmlObject).top;
}

function getOffsetSum(elem) {
	var top=0, left=0;
	while(elem) {
		top = top + parseInt(elem.offsetTop);
		left = left + parseInt(elem.offsetLeft);
		elem = elem.offsetParent;
	}
	return {top: top, left: left};
}
function getOffsetRect(elem) {
	var box = elem.getBoundingClientRect();
	var body = document.body;
	var docElem = document.documentElement;
	var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
	var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
	var clientTop = docElem.clientTop || body.clientTop || 0;
	var clientLeft = docElem.clientLeft || body.clientLeft || 0;
	var top  = box.top +  scrollTop - clientTop;
	var left = box.left + scrollLeft - clientLeft;
	return { top: Math.round(top), left: Math.round(left) };
}
function getOffset(elem) {
	if (elem.getBoundingClientRect && !_isChrome) {
		return getOffsetRect(elem);
	} else {
		return getOffsetSum(elem);
	}
}

/**  
*     @desc: Convert string to it boolean representation
*     @type: private
*     @param: inputString - string for covertion
*     @topic: 0
*/
function convertStringToBoolean(inputString){
	if (typeof (inputString) == "string")
		inputString=inputString.toLowerCase();

	switch (inputString){
		case "1":
		case "true":
		case "yes":
		case "y":
		case 1:
		case true:
			return true;
			break;

		default: return false;
	}
}

/**  
*     @desc: find out what symbol to use as url param delimiters in further params
*     @type: private
*     @param: str - current url string
*     @topic: 0  
*/
function getUrlSymbol(str){
	if (str.indexOf("?") != -1)
		return "&"
	else
		return "?"
}

function dhtmlDragAndDropObject(){
	if (window.dhtmlDragAndDrop)
		return window.dhtmlDragAndDrop;

	this.lastLanding=0;
	this.dragNode=0;
	this.dragStartNode=0;
	this.dragStartObject=0;
	this.tempDOMU=null;
	this.tempDOMM=null;
	this.waitDrag=0;
	window.dhtmlDragAndDrop=this;

	return this;
};

dhtmlDragAndDropObject.prototype.removeDraggableItem=function(htmlNode){
	htmlNode.onmousedown=null;
	htmlNode.dragStarter=null;
	htmlNode.dragLanding=null;
}
dhtmlDragAndDropObject.prototype.addDraggableItem=function(htmlNode, dhtmlObject){
	htmlNode.onmousedown=this.preCreateDragCopy;
	htmlNode.dragStarter=dhtmlObject;
	this.addDragLanding(htmlNode, dhtmlObject);
}
dhtmlDragAndDropObject.prototype.addDragLanding=function(htmlNode, dhtmlObject){
	htmlNode.dragLanding=dhtmlObject;
}
dhtmlDragAndDropObject.prototype.preCreateDragCopy=function(e){
	if ((e||event) && (e||event).button == 2)
		return;

	if (window.dhtmlDragAndDrop.waitDrag){
		window.dhtmlDragAndDrop.waitDrag=0;
		document.body.onmouseup=window.dhtmlDragAndDrop.tempDOMU;
		document.body.onmousemove=window.dhtmlDragAndDrop.tempDOMM;
		return false;
	}

	window.dhtmlDragAndDrop.waitDrag=1;
	window.dhtmlDragAndDrop.tempDOMU=document.body.onmouseup;
	window.dhtmlDragAndDrop.tempDOMM=document.body.onmousemove;
	window.dhtmlDragAndDrop.dragStartNode=this;
	window.dhtmlDragAndDrop.dragStartObject=this.dragStarter;
	document.body.onmouseup=window.dhtmlDragAndDrop.preCreateDragCopy;
	document.body.onmousemove=window.dhtmlDragAndDrop.callDrag;
	window.dhtmlDragAndDrop.downtime = new Date().valueOf();
	

	if ((e)&&(e.preventDefault)){
		e.preventDefault();
		return false;
	}
	return false;
};
dhtmlDragAndDropObject.prototype.callDrag=function(e){
	if (!e)
		e=window.event;
	dragger=window.dhtmlDragAndDrop;
	if ((new Date()).valueOf()-dragger.downtime<100) return;

	if ((e.button == 0)&&(_isIE))
		return dragger.stopDrag();

	if (!dragger.dragNode&&dragger.waitDrag){
		dragger.dragNode=dragger.dragStartObject._createDragNode(dragger.dragStartNode, e);

		if (!dragger.dragNode)
			return dragger.stopDrag();

		dragger.dragNode.onselectstart=function(){return false;}
		dragger.gldragNode=dragger.dragNode;
		document.body.appendChild(dragger.dragNode);
		document.body.onmouseup=dragger.stopDrag;
		dragger.waitDrag=0;
		dragger.dragNode.pWindow=window;
		dragger.initFrameRoute();
	}

	if (dragger.dragNode.parentNode != window.document.body){
		var grd = dragger.gldragNode;

		if (dragger.gldragNode.old)
			grd=dragger.gldragNode.old;

		//if (!document.all) dragger.calculateFramePosition();
		grd.parentNode.removeChild(grd);
		var oldBody = dragger.dragNode.pWindow;

		//		var oldp=dragger.dragNode.parentObject;
		if (_isIE){
			var div = document.createElement("Div");
			div.innerHTML=dragger.dragNode.outerHTML;
			dragger.dragNode=div.childNodes[0];
		} else
			dragger.dragNode=dragger.dragNode.cloneNode(true);

		dragger.dragNode.pWindow=window;
		//		dragger.dragNode.parentObject=oldp;

		dragger.gldragNode.old=dragger.dragNode;
		document.body.appendChild(dragger.dragNode);
		oldBody.dhtmlDragAndDrop.dragNode=dragger.dragNode;
	}

	dragger.dragNode.style.left=e.clientX+15+(dragger.fx
		? dragger.fx*(-1)
		: 0)
		+(document.body.scrollLeft||document.documentElement.scrollLeft)+"px";
	dragger.dragNode.style.top=e.clientY+3+(dragger.fy
		? dragger.fy*(-1)
		: 0)
		+(document.body.scrollTop||document.documentElement.scrollTop)+"px";

	if (!e.srcElement)
		var z = e.target;
	else
		z=e.srcElement;
	dragger.checkLanding(z, e);
}

dhtmlDragAndDropObject.prototype.calculateFramePosition=function(n){
	//this.fx = 0, this.fy = 0;
	if (window.name){
		var el = parent.frames[window.name].frameElement.offsetParent;
		var fx = 0;
		var fy = 0;

		while (el){
			fx+=el.offsetLeft;
			fy+=el.offsetTop;
			el=el.offsetParent;
		}

		if ((parent.dhtmlDragAndDrop)){
			var ls = parent.dhtmlDragAndDrop.calculateFramePosition(1);
			fx+=ls.split('_')[0]*1;
			fy+=ls.split('_')[1]*1;
		}

		if (n)
			return fx+"_"+fy;
		else
			this.fx=fx;
		this.fy=fy;
	}
	return "0_0";
}
dhtmlDragAndDropObject.prototype.checkLanding=function(htmlObject, e){
	if ((htmlObject)&&(htmlObject.dragLanding)){
		if (this.lastLanding)
			this.lastLanding.dragLanding._dragOut(this.lastLanding);
		this.lastLanding=htmlObject;
		this.lastLanding=this.lastLanding.dragLanding._dragIn(this.lastLanding, this.dragStartNode, e.clientX,
			e.clientY, e);
		this.lastLanding_scr=(_isIE ? e.srcElement : e.target);
	} else {
		if ((htmlObject)&&(htmlObject.tagName != "BODY"))
			this.checkLanding(htmlObject.parentNode, e);
		else {
			if (this.lastLanding)
				this.lastLanding.dragLanding._dragOut(this.lastLanding, e.clientX, e.clientY, e);
			this.lastLanding=0;

			if (this._onNotFound)
				this._onNotFound();
		}
	}
}
dhtmlDragAndDropObject.prototype.stopDrag=function(e, mode){
	dragger=window.dhtmlDragAndDrop;

	if (!mode){
		dragger.stopFrameRoute();
		var temp = dragger.lastLanding;
		dragger.lastLanding=null;

		if (temp)
			temp.dragLanding._drag(dragger.dragStartNode, dragger.dragStartObject, temp, (_isIE
				? event.srcElement
				: e.target));
	}
	dragger.lastLanding=null;

	if ((dragger.dragNode)&&(dragger.dragNode.parentNode == document.body))
		dragger.dragNode.parentNode.removeChild(dragger.dragNode);
	dragger.dragNode=0;
	dragger.gldragNode=0;
	dragger.fx=0;
	dragger.fy=0;
	dragger.dragStartNode=0;
	dragger.dragStartObject=0;
	document.body.onmouseup=dragger.tempDOMU;
	document.body.onmousemove=dragger.tempDOMM;
	dragger.tempDOMU=null;
	dragger.tempDOMM=null;
	dragger.waitDrag=0;
}

dhtmlDragAndDropObject.prototype.stopFrameRoute=function(win){
	if (win)
		window.dhtmlDragAndDrop.stopDrag(1, 1);

	for (var i = 0; i < window.frames.length; i++){
		try{
		if ((window.frames[i] != win)&&(window.frames[i].dhtmlDragAndDrop))
			window.frames[i].dhtmlDragAndDrop.stopFrameRoute(window);
		} catch(e){}
	}

	try{
	if ((parent.dhtmlDragAndDrop)&&(parent != window)&&(parent != win))
		parent.dhtmlDragAndDrop.stopFrameRoute(window);
	} catch(e){}
}
dhtmlDragAndDropObject.prototype.initFrameRoute=function(win, mode){
	if (win){
		window.dhtmlDragAndDrop.preCreateDragCopy();
		window.dhtmlDragAndDrop.dragStartNode=win.dhtmlDragAndDrop.dragStartNode;
		window.dhtmlDragAndDrop.dragStartObject=win.dhtmlDragAndDrop.dragStartObject;
		window.dhtmlDragAndDrop.dragNode=win.dhtmlDragAndDrop.dragNode;
		window.dhtmlDragAndDrop.gldragNode=win.dhtmlDragAndDrop.dragNode;
		window.document.body.onmouseup=window.dhtmlDragAndDrop.stopDrag;
		window.waitDrag=0;

		if (((!_isIE)&&(mode))&&((!_isFF)||(_FFrv < 1.8)))
			window.dhtmlDragAndDrop.calculateFramePosition();
	}
	try{
	if ((parent.dhtmlDragAndDrop)&&(parent != window)&&(parent != win))
		parent.dhtmlDragAndDrop.initFrameRoute(window);
	}catch(e){}

	for (var i = 0; i < window.frames.length; i++){
		try{
		if ((window.frames[i] != win)&&(window.frames[i].dhtmlDragAndDrop))
			window.frames[i].dhtmlDragAndDrop.initFrameRoute(window, ((!win||mode) ? 1 : 0));
		} catch(e){}
	}
}

var _isFF = false;
var _isIE = false;
var _isOpera = false;
var _isKHTML = false;
var _isMacOS = false;
var _isChrome = false;

if (navigator.userAgent.indexOf('Macintosh') != -1)
	_isMacOS=true;


if (navigator.userAgent.toLowerCase().indexOf('chrome')>-1)
	_isChrome=true;

if ((navigator.userAgent.indexOf('Safari') != -1)||(navigator.userAgent.indexOf('Konqueror') != -1)){
	var _KHTMLrv = parseFloat(navigator.userAgent.substr(navigator.userAgent.indexOf('Safari')+7, 5));

	if (_KHTMLrv > 525){ //mimic FF behavior for Safari 3.1+
		_isFF=true;
		var _FFrv = 1.9;
	} else
		_isKHTML=true;
} else if (navigator.userAgent.indexOf('Opera') != -1){
	_isOpera=true;
	_OperaRv=parseFloat(navigator.userAgent.substr(navigator.userAgent.indexOf('Opera')+6, 3));
}


else if (navigator.appName.indexOf("Microsoft") != -1){
	_isIE=true;
	if (navigator.appVersion.indexOf("MSIE 8.0")!= -1 && document.compatMode != "BackCompat") _isIE=8;
} else {
	_isFF=true;
	var _FFrv = parseFloat(navigator.userAgent.split("rv:")[1])
}


//multibrowser Xpath processor
dtmlXMLLoaderObject.prototype.doXPath=function(xpathExp, docObj, namespace, result_type){
	if (_isKHTML || (!_isIE && !window.XPathResult))
		return this.doXPathOpera(xpathExp, docObj);

	if (_isIE){ //IE
		if (!docObj)
			if (!this.xmlDoc.nodeName)
				docObj=this.xmlDoc.responseXML
			else
				docObj=this.xmlDoc;
	
//	if (!docObj)
//		dhtmlxError.throwError("LoadXML", "Incorrect XML", [
//			(docObj||this.xmlDoc),
//			this.mainObject
//		]);
// not login 	added by jarry
		if (!docObj) {
			dhtmlxError.throwError("LoadXML", "Incorrect XML", [
				(docObj||this.xmlDoc),
				this.mainObject
			]);
		}
		if (namespace != null)
			docObj.setProperty("SelectionNamespaces", "xmlns:xsl='"+namespace+"'"); //

		if (result_type == 'single'){
			return docObj.selectSingleNode(xpathExp);
		}
		else {
			return docObj.selectNodes(xpathExp)||new Array(0);
		}
	} else { //Mozilla
		var nodeObj = docObj;

		if (!docObj){
			if (!this.xmlDoc.nodeName){
				docObj=this.xmlDoc.responseXML
			}
			else {
				docObj=this.xmlDoc;
			}
		}

		if (!docObj)
			dhtmlxError.throwError("LoadXML", "Incorrect XML", [
				(docObj||this.xmlDoc),
				this.mainObject
			]);

		if (docObj.nodeName.indexOf("document") != -1){
			nodeObj=docObj;
		}
		else {
			nodeObj=docObj;
			docObj=docObj.ownerDocument;
		}
		var retType = XPathResult.ANY_TYPE;

		if (result_type == 'single')
			retType=XPathResult.FIRST_ORDERED_NODE_TYPE
		var rowsCol = new Array();
		var col = docObj.evaluate(xpathExp, nodeObj, function(pref){
			return namespace
		}, retType, null);

		if (retType == XPathResult.FIRST_ORDERED_NODE_TYPE){
			return col.singleNodeValue;
		}
		var thisColMemb = col.iterateNext();

		while (thisColMemb){
			rowsCol[rowsCol.length]=thisColMemb;
			thisColMemb=col.iterateNext();
		}
		return rowsCol;
	}
}

function _dhtmlxError(type, name, params){
	if (!this.catches)
		this.catches=new Array();

	return this;
}

_dhtmlxError.prototype.catchError=function(type, func_name){
	this.catches[type]=func_name;
}
_dhtmlxError.prototype.throwError=function(type, name, params){
	if (this.catches[type])
		return this.catches[type](type, name, params);

	if (this.catches["ALL"])
		return this.catches["ALL"](type, name, params);
	// disabled error by jarryli@gmail.com
	//alert("Error type: "+arguments[0]+"\nDescription: "+arguments[1]);
	return null;
}

window.dhtmlxError=new _dhtmlxError();


//opera fake, while 9.0 not released
//multibrowser Xpath processor
dtmlXMLLoaderObject.prototype.doXPathOpera=function(xpathExp, docObj){
	//this is fake for Opera
	var z = xpathExp.replace(/[\/]+/gi, "/").split('/');
	var obj = null;
	var i = 1;

	if (!z.length)
		return [];

	if (z[0] == ".")
		obj=[docObj]; else if (z[0] == ""){
		obj=(this.xmlDoc.responseXML||this.xmlDoc).getElementsByTagName(z[i].replace(/\[[^\]]*\]/g, ""));
		i++;
	} else
		return [];

	for (i; i < z.length; i++)obj=this._getAllNamedChilds(obj, z[i]);

	if (z[i-1].indexOf("[") != -1)
		obj=this._filterXPath(obj, z[i-1]);
	return obj;
}

dtmlXMLLoaderObject.prototype._filterXPath=function(a, b){
	var c = new Array();
	var b = b.replace(/[^\[]*\[\@/g, "").replace(/[\[\]\@]*/g, "");

	for (var i = 0; i < a.length; i++)
		if (a[i].getAttribute(b))
			c[c.length]=a[i];

	return c;
}
dtmlXMLLoaderObject.prototype._getAllNamedChilds=function(a, b){
	var c = new Array();

	if (_isKHTML)
		b=b.toUpperCase();

	for (var i = 0; i < a.length; i++)for (var j = 0; j < a[i].childNodes.length; j++){
		if (_isKHTML){
			if (a[i].childNodes[j].tagName&&a[i].childNodes[j].tagName.toUpperCase() == b)
				c[c.length]=a[i].childNodes[j];
		}

		else if (a[i].childNodes[j].tagName == b)
			c[c.length]=a[i].childNodes[j];
	}

	return c;
}

function dhtmlXHeir(a, b){
	for (var c in b)
		if (typeof (b[c]) == "function")
			a[c]=b[c];
	return a;
}

function dhtmlxEvent(el, event, handler){
	if (el.addEventListener)
		el.addEventListener(event, handler, false);

	else if (el.attachEvent)
		el.attachEvent("on"+event, handler);
}

//============= XSL Extension ===================================

dtmlXMLLoaderObject.prototype.xslDoc=null;
dtmlXMLLoaderObject.prototype.setXSLParamValue=function(paramName, paramValue, xslDoc){
	if (!xslDoc)
		xslDoc=this.xslDoc

	if (xslDoc.responseXML)
		xslDoc=xslDoc.responseXML;
	var item =
		this.doXPath("/xsl:stylesheet/xsl:variable[@name='"+paramName+"']", xslDoc,
			"http:/\/www.w3.org/1999/XSL/Transform", "single");

	if (item != null)
		item.firstChild.nodeValue=paramValue
}
dtmlXMLLoaderObject.prototype.doXSLTransToObject=function(xslDoc, xmlDoc){
	if (!xslDoc)
		xslDoc=this.xslDoc;

	if (xslDoc.responseXML)
		xslDoc=xslDoc.responseXML

	if (!xmlDoc)
		xmlDoc=this.xmlDoc;

	if (xmlDoc.responseXML)
		xmlDoc=xmlDoc.responseXML

	//MOzilla
	if (!_isIE){
		if (!this.XSLProcessor){
			this.XSLProcessor=new XSLTProcessor();
			this.XSLProcessor.importStylesheet(xslDoc);
		}
		var result = this.XSLProcessor.transformToDocument(xmlDoc);
	} else {
		var result = new ActiveXObject("Msxml2.DOMDocument.3.0");
		try{
			xmlDoc.transformNodeToObject(xslDoc, result);
		}catch(e){
			result = xmlDoc.transformNode(xslDoc);
		}
	}
	return result;
}

dtmlXMLLoaderObject.prototype.doXSLTransToString=function(xslDoc, xmlDoc){
	var res = this.doXSLTransToObject(xslDoc, xmlDoc);
	if(typeof(res)=="string")
		return res;
	return this.doSerialization(res);
}

dtmlXMLLoaderObject.prototype.doSerialization=function(xmlDoc){
	if (!xmlDoc)
			xmlDoc=this.xmlDoc;
	if (xmlDoc.responseXML)
			xmlDoc=xmlDoc.responseXML
	if (!_isIE){
		var xmlSerializer = new XMLSerializer();
		return xmlSerializer.serializeToString(xmlDoc);
	} else
		return xmlDoc.xml;
}

/**
*   @desc: 
*   @type: private
*/
dhtmlxEventable=function(obj){
		obj.dhx_SeverCatcherPath="";
		obj.attachEvent=function(name, catcher, callObj){
			name='ev_'+name.toLowerCase();
			if (!this[name])
				this[name]=new this.eventCatcher(callObj||this);
				
			return(name+':'+this[name].addEvent(catcher)); //return ID (event name & event ID)
		}
		obj.callEvent=function(name, arg0){ 
			name='ev_'+name.toLowerCase();
			if (this[name])
				return this[name].apply(this, arg0);
			return true;
		}
		obj.checkEvent=function(name){
			return (!!this['ev_'+name.toLowerCase()])
		}
		obj.eventCatcher=function(obj){
			var dhx_catch = [];
			var z = function(){
				var res = true;
				for (var i = 0; i < dhx_catch.length; i++){
					if (dhx_catch[i] != null){
						var zr = dhx_catch[i].apply(obj, arguments);
						res=res&&zr;
					}
				}
				return res;
			}
			z.addEvent=function(ev){
				if (typeof (ev) != "function")
					ev=eval(ev);
				if (ev)
					return dhx_catch.push(ev)-1;
				return false;
			}
			z.removeEvent=function(id){
				dhx_catch[id]=null;
			}
			return z;
		}
		obj.detachEvent=function(id){
			if (id != false){
				var list = id.split(':');           //get EventName and ID
				this[list[0]].removeEvent(list[1]); //remove event
			}
		}
}
//v.2.5 build 91111

/*
 Copyright DHTMLX LTD. http://www.dhtmlx.com
 You allowed to use this component or parts of it under GPL terms
 To use it on other terms or get Professional edition of the component please contact us at sales@dhtmlx.com
 */
/*_TOPICS_
 @0:Initialization
 @1:Selection control
 @2:Add/delete
 @3:Private
 @4:Node/level control
 @5:Checkboxes/user data manipulation
 @6:Appearence control
 @7: Handlers
 */

function xmlPointer(data) {
	this.d = data;
}
xmlPointer.prototype = {
	text : function() {
		if (!_isFF)
			return this.d.xml;
		var x = new XMLSerializer();
		return x.serializeToString(this.d);
	},
	get : function(name) {
		return this.d.getAttribute(name);
	},
	exists : function() {
		return !!this.d
	},
	content : function() {
		return this.d.firstChild ? this.d.firstChild.data : "";
	}, // <4k in FF
	each : function(name, f, t, i) {
		var a = this.d.childNodes;
		var c = new xmlPointer();
		if (a.length)
			for (i = i || 0; i < a.length; i++)
				if (a[i].tagName == name) {
					c.d = a[i];
					if (f.apply(t, [c, i]) == -1)
						return;
				}
	},
	get_all : function() {
		var a = {};
		var b = this.d.attributes;
		for (var i = 0; i < b.length; i++)
			a[b[i].name] = b[i].value;
		return a;
	},
	sub : function(name) {
		var a = this.d.childNodes;
		var c = new xmlPointer();
		if (a.length)
			for (var i = 0; i < a.length; i++)
				if (a[i].tagName == name) {
					c.d = a[i];
					return c;
				}
	},
	up : function(name) {
		return new xmlPointer(this.d.parentNode);
	},
	set : function(name, val) {
		this.d.setAttribute(name, val);
	},
	clone : function(name) {
		return new xmlPointer(this.d);
	},
	sub_exists : function(name) {
		var a = this.d.childNodes;
		if (a.length)
			for (var i = 0; i < a.length; i++)
				if (a[i].tagName == name)
					return true;
		return false;
	},
	through : function(name, rule, v, f, t) {
		var a = this.d.childNodes;
		if (a.length)
			for (var i = 0; i < a.length; i++) {
				if (a[i].tagName == name && a[i].getAttribute(rule) != null
						&& a[i].getAttribute(rule) != ""
						&& (!v || a[i].getAttribute(rule) == v)) {
					var c = new xmlPointer(a[i]);
					f.apply(t, [c, i]);
				}
				var w = this.d;
				this.d = a[i];
				this.through(name, rule, v, f, t);
				this.d = w;
			}
	}
}

/**
 *     @desc: tree constructor
 *     @param: htmlObject - parent html object or id of parent html object
 *     @param: width - tree width
 *     @param: height - tree height
 *     @param: rootId - id of virtual root node (same as tree node id attribute in xml)
 *     @type: public
 *     @topic: 0
 */
function dhtmlXTreeObject(htmlObject, width, height, rootId) {
	if (_isIE)
		try {
			document.execCommand("BackgroundImageCache", false, true);
		} catch (e) {
		}
	if (typeof(htmlObject) != "object")
		this.parentObject = document.getElementById(htmlObject);
	else
		this.parentObject = htmlObject;

	this.parentObject.style.overflow = "hidden";
	//this.parentObject.style.overflow = "auto";
	this._itim_dg = true;
	this.dlmtr = ",";
	this.dropLower = false;
	this.enableIEImageFix();

	this.xmlstate = 0;
	this.mytype = "tree";
	this.smcheck = true; //smart checkboxes
	this.width = width;
	this.height = height;
	this.rootId = rootId;
	this.childCalc = null;
	this.def_img_x = "18px";
	this.def_img_y = "18px";
	this.def_line_img_x = "18px";
	this.def_line_img_y = "18px";

	this._dragged = new Array();
	this._selected = new Array();

	this.style_pointer = "pointer";
	if (_isIE)
		this.style_pointer = "hand";

	this._aimgs = true;
	this.htmlcA = " [";
	this.htmlcB = "]";
	this.lWin = window;
	this.cMenu = 0;
	this.mlitems = 0;
	this.iconURL = "";
	this.dadmode = 0;
	this.slowParse = false;
	this.autoScroll = true;
	this.hfMode = 0;
	this.nodeCut = new Array();
	this.XMLsource = 0;
	this.XMLloadingWarning = 0;
	this._idpull = {};
	this._pullSize = 0;
	this.treeLinesOn = true;
	this.tscheck = false;
	this.timgen = true;
	this.dpcpy = false;
	this._ld_id = null;
	this._oie_onXLE = [];
	this.imPath = window.dhx_globalImgPath || "";
	this.checkArray = new Array("iconUncheckAll.gif", "iconCheckAll.gif",
			"iconCheckGray.gif", "iconUncheckDis.gif", "iconCheckDis.gif",
			"iconCheckDis.gif");
	this.radioArray = new Array("radio_off.gif", "radio_on.gif",
			"radio_on.gif", "radio_off.gif", "radio_on.gif", "radio_on.gif");

	this.lineArray = new Array("line2.gif", "line3.gif", "line4.gif",
			"blank.gif", "blank.gif", "line1.gif");
	this.minusArray = new Array("minus2.gif", "minus3.gif", "minus4.gif",
			"minus.gif", "minus5.gif");
	this.plusArray = new Array("plus2.gif", "plus3.gif", "plus4.gif",
			"plus.gif", "plus5.gif");
	this.imageArray = new Array("leaf.gif", "folderOpen.gif",
			"folderClosed.gif");
	this.cutImg = new Array(0, 0, 0);
	this.cutImage = "but_cut.gif";

	dhtmlxEventable(this);

	this.dragger = new dhtmlDragAndDropObject();
	//create root
	this.htmlNode = new dhtmlXTreeItemObject(this.rootId, "", 0, this);
	this.htmlNode.htmlNode.childNodes[0].childNodes[0].style.display = "none";
	this.htmlNode.htmlNode.childNodes[0].childNodes[0].childNodes[0].className = "hiddenRow";
	//init tree structures
	this.allTree = this._createSelf();
	this.allTree.appendChild(this.htmlNode.htmlNode);
	if (_isFF) {
		this.allTree.childNodes[0].width = "100%";
		this.allTree.childNodes[0].style.overflow = "hidden";
	}

	var self = this;
	this.allTree.onselectstart = new Function("return false;");
	if (_isMacOS)
		this.allTree.oncontextmenu = function(e) {
			return self._doContClick(e || window.event);
		};
	this.allTree.onmousedown = function(e) {
		return self._doContClick(e || window.event);
	};

	this.XMLLoader = new dtmlXMLLoaderObject(this._parseXMLTree, this, true,
			this.no_cashe);
	if (_isIE)
		this.preventIECashing(true);

	if (window.addEventListener)
		window.addEventListener("unload", function() {
					try {
						self.destructor();
					} catch (e) {
					}
				}, false);
	if (window.attachEvent)
		window.attachEvent("onunload", function() {
					try {
						self.destructor();
					} catch (e) {
					}
				});

	this.setImagesPath = this.setImagePath;
	this.setIconsPath = this.setIconPath;

	if (dhtmlx.image_path)
		this.setImagePath(dhtmlx.image_path);
	if (dhtmlx.skin)
		this.setSkin(dhtmlx.skin);

	return this;
};

/**
 *     @desc: set default data transfer mode 
 *     @param: mode - data mode (json,xml,csv)
 *     @type: public
 *     @topic: 0
 */
dhtmlXTreeObject.prototype.setDataMode = function(mode) {
	this._datamode = mode;
}

dhtmlXTreeObject.prototype._doContClick = function(ev) {
	if (ev.button != 2) {
		if (this._acMenu) {
			if (this._acMenu.hideContextMenu)
				this._acMenu.hideContextMenu()
			else
				this.cMenu._contextEnd();
		}
		return true;
	}

	var el = (_isIE ? ev.srcElement : ev.target);
	while ((el) && (el.tagName != "BODY")) {
		if (el.parentObject)
			break;
		el = el.parentNode;
	}

	if ((!el) || (!el.parentObject))
		return true;

	var obj = el.parentObject;

	if (!this.callEvent("onRightClick", [obj.id, ev]))
		(ev.srcElement || ev.target).oncontextmenu = function(e) {
			(e || event).cancelBubble = true;
			return false;
		};

	this._acMenu = (obj.cMenu || this.cMenu);
	if (this._acMenu) {
		if (!(this.callEvent("onBeforeContextMenu", [obj.id])))
			return true;

		(ev.srcElement || ev.target).oncontextmenu = function(e) {
			(e || event).cancelBubble = true;
			return false;
		};

		if (this._acMenu.showContextMenu) {

			var dEl0 = window.document.documentElement;
			var dEl1 = window.document.body;
			var corrector = new Array((dEl0.scrollLeft || dEl1.scrollLeft),
					(dEl0.scrollTop || dEl1.scrollTop));
			if (_isIE) {
				var x = ev.clientX + corrector[0];
				var y = ev.clientY + corrector[1];
			} else {
				var x = ev.pageX;
				var y = ev.pageY;
			}

			this._acMenu.showContextMenu(x - 1, y - 1)
			this.contextID = obj.id;
			ev.cancelBubble = true;
			this._acMenu._skip_hide = true;
		} else {
			el.contextMenuId = obj.id;
			el.contextMenu = this._acMenu;
			el.a = this._acMenu._contextStart;
			el.a(el, ev);
			el.a = null;
		}

		return false;
	}
	return true;
}

/**
 *     @desc: replace IMG tag with background images - solve problem with IE image caching , not works for IE6 SP1
 *     @param: mode - true/false - enable/disable fix
 *     @type: public
 *     @topic: 0
 */
dhtmlXTreeObject.prototype.enableIEImageFix = function(mode) {
	if (!mode) {

		this._getImg = function(id) {
			return document.createElement((id == this.rootId) ? "div" : "img");
		}
		this._setSrc = function(a, b) {
			a.src = b;
		}
		this._getSrc = function(a) {
			return a.src;
		}
	} else {

		this._getImg = function() {
			var z = document.createElement("DIV");
			z.innerHTML = "&nbsp;";
			z.className = "dhx_bg_img_fix";
			return z;
		}
		this._setSrc = function(a, b) {
			a.style.backgroundImage = "url(" + b + ")";
		}
		this._getSrc = function(a) {
			var z = a.style.backgroundImage;
			return z.substr(4, z.length - 5);
		}
	}
}

/**
 *	@desc: deletes tree and clears memory
 *	@type: public
 */
dhtmlXTreeObject.prototype.destructor = function() {
	for (var a in this._idpull) {
		var z = this._idpull[a];
		if (!z)
			continue;
		z.parentObject = null;
		z.treeNod = null;
		z.childNodes = null;
		z.span = null;
		z.tr.nodem = null;
		z.tr = null;
		z.htmlNode.objBelong = null;
		z.htmlNode = null;
		this._idpull[a] = null;
	}
	this.parentObject.innerHTML = "";

	if (this.XMLLoader)
		this.XMLLoader.destructor();

	this.allTree.onselectstart = null;
	this.allTree.oncontextmenu = null;
	this.allTree.onmousedown = null;

	for (var a in this) {
		this[a] = null;
	}
}

function cObject() {
	return this;
}
cObject.prototype = new Object;
cObject.prototype.clone = function() {
	function _dummy() {
	};
	_dummy.prototype = this;
	return new _dummy();
}

/**
 *   @desc: tree node constructor
 *   @param: itemId - node id
 *   @param: itemText - node label
 *   @param: parentObject - parent item object
 *   @param: treeObject - tree object
 *   @param: actionHandler - onclick event handler(optional)
 *   @param: mode - do not show images
 *   @type: private
 *   @topic: 0
 */
function dhtmlXTreeItemObject(itemId, itemText, parentObject, treeObject,
		actionHandler, mode) {
	this.htmlNode = "";
	this.acolor = "";
	this.scolor = "";
	this.tr = 0;
	this.childsCount = 0;
	this.tempDOMM = 0;
	this.tempDOMU = 0;
	this.dragSpan = 0;
	this.dragMove = 0;
	this.span = 0;
	this.closeble = 1;
	this.childNodes = new Array();
	this.userData = new cObject();

	this.checkstate = 0;
	this.treeNod = treeObject;
	this.label = itemText;
	this.parentObject = parentObject;
	this.actionHandler = actionHandler;
	this.images = new Array(treeObject.imageArray[0], treeObject.imageArray[1],
			treeObject.imageArray[2]);

	this.id = treeObject._globalIdStorageAdd(itemId, this);
	if (this.treeNod.checkBoxOff)
		this.htmlNode = this.treeNod._createItem(1, this, mode);
	else
		this.htmlNode = this.treeNod._createItem(0, this, mode);

	this.htmlNode.objBelong = this;
	return this;
};

/**
 *     @desc: register node
 *     @type: private
 *     @param: itemId - node id
 *     @param: itemObject - node object
 *     @topic: 3  
 */
dhtmlXTreeObject.prototype._globalIdStorageAdd = function(itemId, itemObject) {
	if (this._globalIdStorageFind(itemId, 1, 1)) {
		itemId = itemId + "_" + (new Date()).valueOf();
		return this._globalIdStorageAdd(itemId, itemObject);
	}
	this._idpull[itemId] = itemObject;
	this._pullSize++;
	return itemId;
};

/**
 *     @desc: unregister node
 *     @type: private
 *     @param: itemId - node id
 *     @topic: 3
 */
dhtmlXTreeObject.prototype._globalIdStorageSub = function(itemId) {
	if (this._idpull[itemId]) {
		this._unselectItem(this._idpull[itemId]);
		this._idpull[itemId] = null;
		this._pullSize--;
	}
	if ((this._locker) && (this._locker[itemId]))
		this._locker[itemId] = false;
};

/**
 *     @desc: return node object
 *     @param: itemId - node id
 *     @type: private
 *     @topic: 3
 */
dhtmlXTreeObject.prototype._globalIdStorageFind = function(itemId,
		skipXMLSearch, skipParsing, isreparse) {
	var z = this._idpull[itemId]
	if (z) {

		return z;
	}

	return null;
};

/**
 *     @desc: escape string
 *     @param: itemId - item ID
 *     @type: private
 *     @topic: 3
 */
dhtmlXTreeObject.prototype._escape = function(str) {
	switch (this.utfesc) {
		case "none" :
			return str;
			break;
		case "utf8" :
			return encodeURIComponent(str);
			break;
		default :
			return escape(str);
			break;
	}
}

/**
 *     @desc: create and return  new line in tree
 *     @type: private
 *     @param: htmlObject - parent Node object
 *     @param: node - item object
 *     @topic: 2  
 */
dhtmlXTreeObject.prototype._drawNewTr = function(htmlObject, node) {
	var tr = document.createElement('tr');
	var td1 = document.createElement('td');
	var td2 = document.createElement('td');
	td1.appendChild(document.createTextNode(" "));
	td2.colSpan = 3;
	td2.appendChild(htmlObject);
	tr.appendChild(td1);
	tr.appendChild(td2);
	return tr;
};
/**
 *     @desc: load tree from xml string
 *     @type: public
 *     @param: xmlString - XML string
 *     @param: afterCall - function which will be called after xml loading
 *     @topic: 0
 */
dhtmlXTreeObject.prototype.loadXMLString = function(xmlString, afterCall) {
	var that = this;
	if (!this.parsCount)
		this.callEvent("onXLS", [that, null]);
	this.xmlstate = 1;

	if (afterCall)
		this.XMLLoader.waitCall = afterCall;
	this.XMLLoader.loadXMLString(xmlString);
};
/**
 *     @desc: load tree from xml file
 *     @type: public
 *     @param: file - link to XML file
 *     @param: afterCall - function which will be called after xml loading
 *     @topic: 0
 */
dhtmlXTreeObject.prototype.loadXML = function(file, afterCall) {
	if (this._datamode && this._datamode != "xml")
		return this["load" + this._datamode.toUpperCase()](file, afterCall);
	var that = this;
	if (!this.parsCount)
		this.callEvent("onXLS", [that, this._ld_id]);
	this._ld_id = null;
	this.xmlstate = 1;
	this.XMLLoader = new dtmlXMLLoaderObject(this._parseXMLTree, this, true,
			this.no_cashe);

	if (afterCall)
		this.XMLLoader.waitCall = afterCall;
	this.XMLLoader.loadXML(file);
};
/**
 *     @desc: create new child node
 *     @type: private
 *     @param: parentObject - parent node object
 *     @param: itemId - new node id
 *     @param: itemText - new node text
 *     @param: itemActionHandler - function fired on node select event
 *     @param: image1 - image for node without children;
 *     @param: image2 - image for closed node;
 *     @param: image3 - image for opened node
 *     @param: optionStr - string of otions
 *     @param: childs - node childs flag (for dynamical trees) (optional)
 *     @param: beforeNode - node, after which new node will be inserted (optional)
 *     @topic: 2
 */
dhtmlXTreeObject.prototype._attachChildNode = function(parentObject, itemId,
		itemText, itemActionHandler, image1, image2, image3, optionStr, childs,
		beforeNode, afterNode) {

	if (beforeNode && beforeNode.parentObject)
		parentObject = beforeNode.parentObject;
	if (((parentObject.XMLload == 0) && (this.XMLsource))
			&& (!this.XMLloadingWarning)) {
		parentObject.XMLload = 1;
		this._loadDynXML(parentObject.id);

	}

	var Count = parentObject.childsCount;
	var Nodes = parentObject.childNodes;

	if (afterNode) {
		if (afterNode.tr.previousSibling.previousSibling) {
			beforeNode = afterNode.tr.previousSibling.nodem;
		} else
			optionStr = optionStr.replace("TOP", "") + ",TOP";
	}

	if (beforeNode) {
		var ik, jk;
		for (ik = 0; ik < Count; ik++)
			if (Nodes[ik] == beforeNode) {
				for (jk = Count; jk != ik; jk--)
					Nodes[1 + jk] = Nodes[jk];
				break;
			}
		ik++;
		Count = ik;
	}

	if (optionStr) {
		var tempStr = optionStr.split(",");
		for (var i = 0; i < tempStr.length; i++) {
			switch (tempStr[i]) {
				case "TOP" :
					if (parentObject.childsCount > 0) {
						beforeNode = new Object;
						beforeNode.tr = parentObject.childNodes[0].tr.previousSibling;
					}
					parentObject._has_top = true;
					for (ik = Count; ik > 0; ik--)
						Nodes[ik] = Nodes[ik - 1];
					Count = 0;
					break;
			}
		};
	};

	var n;
	if (!(n = this._idpull[itemId]) || n.span != -1) {
		n = Nodes[Count] = new dhtmlXTreeItemObject(itemId, itemText,
				parentObject, this, itemActionHandler, 1);
		itemId = Nodes[Count].id;
		parentObject.childsCount++;
	}

	if (!n.htmlNode) {
		n.label = itemText;
		n.htmlNode = this._createItem((this.checkBoxOff ? 1 : 0), n);
		n.htmlNode.objBelong = n;
	}

	if (image1)
		n.images[0] = image1;
	if (image2)
		n.images[1] = image2;
	if (image3)
		n.images[2] = image3;

	var tr = this._drawNewTr(n.htmlNode);
	if ((this.XMLloadingWarning) || (this._hAdI))
		n.htmlNode.parentNode.parentNode.style.display = "none";

	if ((beforeNode) && (beforeNode.tr.nextSibling))
		parentObject.htmlNode.childNodes[0].insertBefore(tr,
				beforeNode.tr.nextSibling);
	else if (this.parsingOn == parentObject.id) {
		this.parsedArray[this.parsedArray.length] = tr;
	} else
		parentObject.htmlNode.childNodes[0].appendChild(tr);

	if ((beforeNode) && (!beforeNode.span))
		beforeNode = null;

	if (this.XMLsource)
		if ((childs) && (childs != 0))
			n.XMLload = 0;
		else
			n.XMLload = 1;
	n.tr = tr;
	tr.nodem = n;

	if (parentObject.itemId == 0)
		tr.childNodes[0].className = "hiddenRow";

	if ((parentObject._r_logic) || (this._frbtr))
		this
				._setSrc(
						n.htmlNode.childNodes[0].childNodes[0].childNodes[1].childNodes[0],
						this.imPath + this.radioArray[0]);

	if (optionStr) {
		var tempStr = optionStr.split(",");

		for (var i = 0; i < tempStr.length; i++) {
			switch (tempStr[i]) {
				case "SELECT" :
					this.selectItem(itemId, false);
					break;
				case "CALL" :
					this.selectItem(itemId, true);
					break;
				case "CHILD" :
					n.XMLload = 0;
					break;
				case "CHECKED" :
					if (this.XMLloadingWarning)
						this.setCheckList += this.dlmtr + itemId;
					else
						this.setCheck(itemId, 1);
					break;
				case "HCHECKED" :
					this._setCheck(n, "unsure");
					break;
				case "OPEN" :
					n.openMe = 1;
					break;
			}
		};
	};

	if (!this.XMLloadingWarning) {
		if ((this._getOpenState(parentObject) < 0) && (!this._hAdI))
			this.openItem(parentObject.id);

		if (beforeNode) {
			this._correctPlus(beforeNode);
			this._correctLine(beforeNode);
		}
		this._correctPlus(parentObject);
		this._correctLine(parentObject);
		this._correctPlus(n);
		if (parentObject.childsCount >= 2) {
			this._correctPlus(Nodes[parentObject.childsCount - 2]);
			this._correctLine(Nodes[parentObject.childsCount - 2]);
		}
		if (parentObject.childsCount != 2)
			this._correctPlus(Nodes[0]);

		if (this.tscheck)
			this._correctCheckStates(parentObject);

		if (this._onradh) {
			if (this.xmlstate == 1) {
				var old = this.onXLE;
				this.onXLE = function(id) {
					this._onradh(itemId);
					if (old)
						old(id);
				}
			} else
				this._onradh(itemId);
		}

	}
	return n;
};

/**
 *     @desc: create new node as a child to specified with parentId
 *     @type: deprecated
 *     @param: parentId - parent node id
 *     @param: itemId - new node id
 *     @param: itemText - new node text
 *     @param: itemActionHandler - function fired on node select event (optional)
 *     @param: image1 - image for node without children; (optional)
 *     @param: image2 - image for closed node; (optional)
 *     @param: image3 - image for opened node (optional)
 *     @param: optionStr - options string (optional)            
 *     @param: children - node children flag (for dynamical trees) (optional)
 *     @topic: 2  
 */
dhtmlXTreeObject.prototype.insertNewItem = function(parentId, itemId, itemText,
		itemActionHandler, image1, image2, image3, optionStr, children) {
	var parentObject = this._globalIdStorageFind(parentId);
	if (!parentObject)
		return (-1);
	var nodez = this._attachChildNode(parentObject, itemId, itemText,
			itemActionHandler, image1, image2, image3, optionStr, children);

	return nodez;
};
/**
 *     @desc: create new node as a child to specified with parentId
 *     @type: public
 *     @param: parentId - parent node id
 *     @param: itemId - new node id
 *     @param: itemText - new node label
 *     @param: itemActionHandler - function fired on node select event (optional)
 *     @param: image1 - image for node without children; (optional)
 *     @param: image2 - image for closed node; (optional)
 *     @param: image3 - image for opened node (optional)
 *     @param: optionStr - options string (optional)            
 *     @param: children - node children flag (for dynamical trees) (optional)
 *     @topic: 2  
 */
dhtmlXTreeObject.prototype.insertNewChild = function(parentId, itemId,
		itemText, itemActionHandler, image1, image2, image3, optionStr,
		children) {
	return this.insertNewItem(parentId, itemId, itemText, itemActionHandler,
			image1, image2, image3, optionStr, children);
}
/**  
 *     @desc: parse xml
 *     @type: private
 *     @param: dhtmlObject - jsTree object
 *     @param: node - top XML node
 *     @param: parentId - parent node id
 *     @param: level - level of tree
 *     @topic: 2
 */
dhtmlXTreeObject.prototype._parseXMLTree = function(a, b, c, d, xml) {
	var p = new xmlPointer(xml.getXMLTopNode("tree"));
	a._parse(p);
	a._p = p;
}

dhtmlXTreeObject.prototype._parseItem = function(c, temp, preNode, befNode) {
	var id;
	if (this._srnd
			&& (!this._idpull[id = c.get("id")] || !this._idpull[id].span)) {
		this._addItemSRND(temp.id, id, c);
		return;
	}

	var a = c.get_all();

	if ((typeof(this.waitUpdateXML) == "object") && (!this.waitUpdateXML[a.id])) {
		this._parse(c, a.id, 1);
		return;
	}

	var zST = [];
	if (a.select)
		zST.push("SELECT");
	if (a.top)
		zST.push("TOP");
	if (a.call)
		this.nodeAskingCall = a.id;
	if (a.checked == -1)
		zST.push("HCHECKED");
	else if (a.checked)
		zST.push("CHECKED");
	if (a.open)
		zST.push("OPEN");

	if (this.waitUpdateXML) {
		if (this._globalIdStorageFind(a.id))
			var newNode = this.updateItem(a.id, a.text, a.im0, a.im1, a.im2,
					a.checked);
		else {
			if (this.npl == 0)
				zST.push("TOP");
			else
				preNode = temp.childNodes[this.npl];

			var newNode = this._attachChildNode(temp, a.id, a.text, 0, a.im0,
					a.im1, a.im2, zST.join(","), a.child, 0, preNode);
			preNode = null;
		}
	} else
		var newNode = this._attachChildNode(temp, a.id, a.text, 0, a.im0,
				a.im1, a.im2, zST.join(","), a.child, (befNode || 0), preNode);
	if (a.tooltip)
		newNode.span.parentNode.parentNode.title = a.tooltip;

	if (a.style)
		if (newNode.span.style.cssText)
			newNode.span.style.cssText += (";" + a.style);
		else
			newNode.span.setAttribute("style", newNode.span
							.getAttribute("style")
							+ "; " + a.style);

	if (a.radio)
		newNode._r_logic = true;

	if (a.nocheckbox) {
		var check_node = newNode.span.parentNode.previousSibling.previousSibling;
		check_node.childNodes[0].style.display = 'none';
		if (window._KHTMLrv)
			check_node.style.display = "none";
		newNode.nocheckbox = true;
	}
	if (a.disabled) {
		if (a.checked != null)
			this._setCheck(newNode, a.checked);
		this.disableCheckbox(newNode, 1);
	}

	newNode._acc = a.child || 0;

	if (this.parserExtension)
		this.parserExtension._parseExtension.call(this, c, a, (temp
						? temp.id
						: 0));

	this.setItemColor(newNode, a.aCol, a.sCol);
	if (a.locked == "1")
		this.lockItem(newNode.id, true, true);

	if ((a.imwidth) || (a.imheight))
		this.setIconSize(a.imwidth, a.imheight, newNode);
	if ((a.closeable == "0") || (a.closeable == "1"))
		this.setItemCloseable(newNode, a.closeable);
	var zcall = "";
	if (a.topoffset)
		this.setItemTopOffset(newNode, a.topoffset);
	if ((!this.slowParse) || (typeof(this.waitUpdateXML) == "object")) {
		if (c.sub_exists("item"))
			zcall = this._parse(c, a.id, 1);
	}

	if (zcall != "")
		this.nodeAskingCall = zcall;

	c.each("userdata", function(u) {
				this.setUserData(c.get("id"), u.get("name"), u.content());
			}, this)

}
dhtmlXTreeObject.prototype._parse = function(p, parentId, level, start) {
	if (this._srnd && !this.parentObject.offsetHeight) {
		var self = this;
		return window.setTimeout(function() {
					self._parse(p, parentId, level, start);
				}, 100);
	}
	if (!p.exists())
		return;

	this.skipLock = true; //disable item locking
	//loading flags

	if (!parentId) { //top level  
		parentId = p.get("id");
		if (p.get("radio"))
			this.htmlNode._r_logic = true;
		this.parsingOn = parentId;
		this.parsedArray = new Array();
		this.setCheckList = "";
		this.nodeAskingCall = "";
	}

	var temp = this._globalIdStorageFind(parentId);
	if (!temp)
		return dhtmlxError.throwError("DataStructure",
				"XML refers to not existing parent");

	this.parsCount = this.parsCount ? (this.parsCount + 1) : 1;
	this.XMLloadingWarning = 1;

	if ((temp.childsCount) && (!start) && (!this._edsbps) && (!temp._has_top))
		var preNode = temp.childNodes[temp.childsCount - 1];
	else
		var preNode = 0;

	this.npl = 0;

	p.each("item", function(c, i) {

				temp.XMLload = 1;
				if ((this._epgps) && (this._epgpsC == this.npl)) {
					this._setNextPageSign(temp, this.npl + 1 * (start || 0),
							level, node);
					return -1;
				}

				this._parseItem(c, temp, preNode);

				this.npl++;

			}, this, start);

	if (!level) {
		p.each("userdata", function(u) {
					this.setUserData(p.get("id"), u.get("name"), u.content());
				}, this);

		temp.XMLload = 1;
		if (this.waitUpdateXML) {
			this.waitUpdateXML = false;
			for (var i = temp.childsCount - 1; i >= 0; i--)
				if (temp.childNodes[i]._dmark)
					this.deleteItem(temp.childNodes[i].id);
		}

		var parsedNodeTop = this._globalIdStorageFind(this.parsingOn);

		for (var i = 0; i < this.parsedArray.length; i++)
			temp.htmlNode.childNodes[0].appendChild(this.parsedArray[i]);

		this.lastLoadedXMLId = parentId;
		this.XMLloadingWarning = 0;

		var chArr = this.setCheckList.split(this.dlmtr);
		for (var n = 0; n < chArr.length; n++)
			if (chArr[n])
				this.setCheck(chArr[n], 1);

		if ((this.XMLsource) && (this.tscheck) && (this.smcheck)
				&& (temp.id != this.rootId)) {
			if (temp.checkstate === 0)
				this._setSubChecked(0, temp);
			else if (temp.checkstate === 1)
				this._setSubChecked(1, temp);
		}

		this._redrawFrom(this, null, start)
		if (p.get("order") && p.get("order") != "none")
			this._reorderBranch(temp, p.get("order"), true);

		if (this.nodeAskingCall != "")
			this.callEvent("onClick", [this.nodeAskingCall,
							this.getSelectedItemId()]);
		if (this._branchUpdate)
			this._branchUpdateNext(p);
	}

	if (this.parsCount == 1) {
		this.parsingOn = null;

		if ((!this._edsbps) || (!this._edsbpsA.length)) {
			var that = this;
			window.setTimeout(function() {
						that.callEvent("onXLE", [that, parentId]);
					}, 1);
			this.xmlstate = 0;
		}
		this.skipLock = false;
	}
	this.parsCount--;

	if ((this._epgps) && (start))
		this._setPrevPageSign(temp, (start || 0), level, node);

	if (!level && this.onXLE)
		this.onXLE(this, parentId);
	return this.nodeAskingCall;
};

dhtmlXTreeObject.prototype._branchUpdateNext = function(p) {
	p.each("item", function(c) {
				var nid = c.get("id");
				if (this._idpull[nid] && (!this._idpull[nid].XMLload))
					return;
				this._branchUpdate++;
				this.smartRefreshItem(c.get("id"), c);
			}, this)
	this._branchUpdate--;
}

dhtmlXTreeObject.prototype.checkUserData = function(node, parentId) {
	if ((node.nodeType == 1) && (node.tagName == "userdata")) {
		var name = node.getAttribute("name");
		if ((name) && (node.childNodes[0]))
			this.setUserData(parentId, name, node.childNodes[0].data);
	}
}

/**  
 *     @desc: reset tree images from selected level
 *     @type: private
 *     @param: dhtmlObject - tree
 *     @param: itemObject - current item
 *     @topic: 6
 */
dhtmlXTreeObject.prototype._redrawFrom = function(dhtmlObject, itemObject,
		start, visMode) {
	if (!itemObject) {
		var tempx = dhtmlObject
				._globalIdStorageFind(dhtmlObject.lastLoadedXMLId);
		dhtmlObject.lastLoadedXMLId = -1;
		if (!tempx)
			return 0;
	} else
		tempx = itemObject;
	var acc = 0;

	for (var i = (start ? start - 1 : 0); i < tempx.childsCount; i++) {
		if ((!this._branchUpdate) || (this._getOpenState(tempx) == 1))
			if ((!itemObject) || (visMode == 1))
				tempx.childNodes[i].htmlNode.parentNode.parentNode.style.display = "";
		if (tempx.childNodes[i].openMe == 1) {
			this._openItem(tempx.childNodes[i]);
			tempx.childNodes[i].openMe = 0;
		}

		dhtmlObject._redrawFrom(dhtmlObject, tempx.childNodes[i]);

	};

	if ((!tempx.unParsed) && ((tempx.XMLload) || (!this.XMLsource)))
		tempx._acc = acc;
	dhtmlObject._correctLine(tempx);
	dhtmlObject._correctPlus(tempx);

};

/**
 *     @desc: create and return main html element of tree
 *     @type: private
 *     @topic: 0  
 */
dhtmlXTreeObject.prototype._createSelf = function() {
	var div = document.createElement('div');
	div.className = "containerTableStyle";
	div.style.width = this.width;
	div.style.height = this.height;
	this.parentObject.appendChild(div);
	return div;
};

/**
 *     @desc: collapse target node
 *     @type: private
 *     @param: itemObject - item object
 *     @topic: 4  
 */
dhtmlXTreeObject.prototype._xcloseAll = function(itemObject) {
	if (itemObject.unParsed)
		return;
	if (this.rootId != itemObject.id) {
		var Nodes = itemObject.htmlNode.childNodes[0].childNodes;
		var Count = Nodes.length;

		for (var i = 1; i < Count; i++)
			Nodes[i].style.display = "none";

		this._correctPlus(itemObject);
	}

	for (var i = 0; i < itemObject.childsCount; i++)
		if (itemObject.childNodes[i].childsCount)
			this._xcloseAll(itemObject.childNodes[i]);
};
/**
 *     @desc: expand target node
 *     @type: private
 *     @param: itemObject - item object
 *     @topic: 4
 */
dhtmlXTreeObject.prototype._xopenAll = function(itemObject) {
	this._HideShow(itemObject, 2);
	for (var i = 0; i < itemObject.childsCount; i++)
		this._xopenAll(itemObject.childNodes[i]);
};
/**  
 *     @desc: set correct tree-line and node images
 *     @type: private
 *     @param: itemObject - item object
 *     @topic: 6  
 */
dhtmlXTreeObject.prototype._correctPlus = function(itemObject) {
	if (!itemObject.htmlNode)
		return;
	var imsrc = itemObject.htmlNode.childNodes[0].childNodes[0].childNodes[0].lastChild;
	var imsrc2 = itemObject.htmlNode.childNodes[0].childNodes[0].childNodes[2].childNodes[0];

	var workArray = this.lineArray;
	if ((this.XMLsource) && (!itemObject.XMLload)) {
		var workArray = this.plusArray;
		this._setSrc(imsrc2, this.iconURL + itemObject.images[2]);
		if (this._txtimg)
			return (imsrc.innerHTML = "[+]");
	} else if ((itemObject.childsCount) || (itemObject.unParsed)) {
		if ((itemObject.htmlNode.childNodes[0].childNodes[1])
				&& (itemObject.htmlNode.childNodes[0].childNodes[1].style.display != "none")) {
			if (!itemObject.wsign)
				var workArray = this.minusArray;
			this._setSrc(imsrc2, this.iconURL + itemObject.images[1]);
			if (this._txtimg)
				return (imsrc.innerHTML = "[-]");
		} else {
			if (!itemObject.wsign)
				var workArray = this.plusArray;
			this._setSrc(imsrc2, this.iconURL + itemObject.images[2]);
			if (this._txtimg)
				return (imsrc.innerHTML = "[+]");
		}
	} else {
		this._setSrc(imsrc2, this.iconURL + itemObject.images[0]);
	}

	var tempNum = 2;
	if (!itemObject.treeNod.treeLinesOn)
		this._setSrc(imsrc, this.imPath + workArray[3]);
	else {
		if (itemObject.parentObject)
			tempNum = this._getCountStatus(itemObject.id,
					itemObject.parentObject);
		this._setSrc(imsrc, this.imPath + workArray[tempNum]);
	}
};

/**
 *     @desc: set correct tree-line images
 *     @type: private
 *     @param: itemObject - item object
 *     @topic: 6
 */
dhtmlXTreeObject.prototype._correctLine = function(itemObject) {
	if (!itemObject.htmlNode)
		return;
	var sNode = itemObject.parentObject;
	if (sNode)
		if ((this._getLineStatus(itemObject.id, sNode) == 0)
				|| (!this.treeLinesOn))
			for (var i = 1; i <= itemObject.childsCount; i++) {
				if (!itemObject.htmlNode.childNodes[0].childNodes[i])
					break;
				itemObject.htmlNode.childNodes[0].childNodes[i].childNodes[0].style.backgroundImage = "";
				itemObject.htmlNode.childNodes[0].childNodes[i].childNodes[0].style.backgroundRepeat = "";
			}
		else
			for (var i = 1; i <= itemObject.childsCount; i++) {
				if (!itemObject.htmlNode.childNodes[0].childNodes[i])
					break;
				itemObject.htmlNode.childNodes[0].childNodes[i].childNodes[0].style.backgroundImage = "url("
						+ this.imPath + this.lineArray[5] + ")";
				itemObject.htmlNode.childNodes[0].childNodes[i].childNodes[0].style.backgroundRepeat = "repeat-y";
			}
};
/**
 *     @desc: return type of node
 *     @type: private
 *     @param: itemId - item id
 *     @param: itemObject - parent node object
 *     @topic: 6
 */
dhtmlXTreeObject.prototype._getCountStatus = function(itemId, itemObject) {
	if (itemObject.childsCount <= 1) {
		if (itemObject.id == this.rootId)
			return 4;
		else
			return 0;
	}

	if (itemObject.childNodes[0].id == itemId)
		if (itemObject.id == this.rootId)
			return 2;
		else
			return 1;
	if (itemObject.childNodes[itemObject.childsCount - 1].id == itemId)
		return 0;

	return 1;
};
/**
 *     @desc: return type of node
 *     @type: private
 *     @param: itemId - node id        
 *     @param: itemObject - parent node object
 *     @topic: 6
 */
dhtmlXTreeObject.prototype._getLineStatus = function(itemId, itemObject) {
	if (itemObject.childNodes[itemObject.childsCount - 1].id == itemId)
		return 0;
	return 1;
}

/**  
 *     @desc: open/close node 
 *     @type: private
 *     @param: itemObject - node object        
 *     @param: mode - open/close mode [1-close 2-open](optional)
 *     @topic: 6
 */
dhtmlXTreeObject.prototype._HideShow = function(itemObject, mode) {
	if ((this.XMLsource) && (!itemObject.XMLload)) {
		if (mode == 1)
			return; //close for not loaded node - ignore it
		itemObject.XMLload = 1;
		this._loadDynXML(itemObject.id);
		return;
	};

	var Nodes = itemObject.htmlNode.childNodes[0].childNodes;
	var Count = Nodes.length;
	if (Count > 1) {
		if (((Nodes[1].style.display != "none") || (mode == 1)) && (mode != 2)) {
			//nb:solves standard doctype prb in IE
			this.allTree.childNodes[0].border = "1";
			this.allTree.childNodes[0].border = "0";
			nodestyle = "none";
		} else
			nodestyle = "";

		for (var i = 1; i < Count; i++)
			Nodes[i].style.display = nodestyle;
	}
	this._correctPlus(itemObject);
}

/**
 *     @desc: return node state
 *     @type: private
 *     @param: itemObject - node object        
 *     @topic: 6
 */
dhtmlXTreeObject.prototype._getOpenState = function(itemObject) {
	var z = itemObject.htmlNode.childNodes[0].childNodes;
	if (z.length <= 1)
		return 0;
	if (z[1].style.display != "none")
		return 1;
	else
		return -1;
}

/**  
 *     @desc: ondblclick item  event handler
 *     @type: private
 *     @topic: 0  
 */
dhtmlXTreeObject.prototype.onRowClick2 = function() {
	var that = this.parentObject.treeNod;
	if (!that.callEvent("onDblClick", [this.parentObject.id, that]))
		return false;
	if ((this.parentObject.closeble) && (this.parentObject.closeble != "0"))
		that._HideShow(this.parentObject);
	else
		that._HideShow(this.parentObject, 2);

	if (that.checkEvent("onOpenEnd"))
		if (!that.xmlstate)
			that.callEvent("onOpenEnd", [this.parentObject.id,
							that._getOpenState(this.parentObject)]);
		else {
			that._oie_onXLE.push(that.onXLE);
			that.onXLE = that._epnFHe;
		}
	return false;
};
/**
 *     @desc: onclick item event handler
 *     @type: private
 *     @topic: 0
 */
dhtmlXTreeObject.prototype.onRowClick = function() {
	var that = this.parentObject.treeNod;
	if (!that.callEvent("onOpenStart", [this.parentObject.id,
					that._getOpenState(this.parentObject)]))
		return 0;
	if ((this.parentObject.closeble) && (this.parentObject.closeble != "0"))
		that._HideShow(this.parentObject);
	else
		that._HideShow(this.parentObject, 2);

	if (that.checkEvent("onOpenEnd"))
		if (!that.xmlstate)
			that.callEvent("onOpenEnd", [this.parentObject.id,
							that._getOpenState(this.parentObject)]);
		else {
			that._oie_onXLE.push(that.onXLE);
			that.onXLE = that._epnFHe;
		}

};

dhtmlXTreeObject.prototype._epnFHe = function(that, id, flag) {
	if (id != this.rootId)
		this.callEvent("onOpenEnd", [id, that.getOpenState(id)]);
	that.onXLE = that._oie_onXLE.pop();

	if (!flag && !that._oie_onXLE.length)
		if (that.onXLE)
			that.onXLE(that, id);
}

/**
 *     @desc: onclick item image event handler
 *     @type: private
 *     @edition: Professional
 *     @topic: 0  
 */
dhtmlXTreeObject.prototype.onRowClickDown = function(e) {
	e = e || window.event;
	var that = this.parentObject.treeNod;
	that._selectItem(this.parentObject, e);
};

/*****
 SELECTION
 *****/

/**
 *     @desc: retun selected item id
 *     @type: public
 *     @return: id of selected item
 *     @topic: 1
 */
dhtmlXTreeObject.prototype.getSelectedItemId = function() {
	var str = new Array();
	for (var i = 0; i < this._selected.length; i++)
		str[i] = this._selected[i].id;
	return (str.join(this.dlmtr));
};

/**
 *     @desc: visual select item in tree
 *     @type: private
 *     @param: node - tree item object
 *     @edition: Professional
 *     @topic: 0
 */
dhtmlXTreeObject.prototype._selectItem = function(node, e) {
	if (this.checkEvent("onSelect"))
		this._onSSCFold = this.getSelectedItemId();

	this._unselectItems();

	this._markItem(node);
	if (this.checkEvent("onSelect")) {
		var z = this.getSelectedItemId();
		if (z != this._onSSCFold)
			this.callEvent("onSelect", [z]);
	}
}
dhtmlXTreeObject.prototype._markItem = function(node) {
	if (node.scolor)
		node.span.style.color = node.scolor;
	node.span.className = "selectedTreeRow";
	node.i_sel = true;
	this._selected[this._selected.length] = node;
}

/**
 *     @desc: retun node index in children collection by Id
 *     @type: public
 *     @param: itemId - node id
 *     @return: node index
 *     @topic: 2
 */
dhtmlXTreeObject.prototype.getIndexById = function(itemId) {
	var z = this._globalIdStorageFind(itemId);
	if (!z)
		return null;
	return this._getIndex(z);
};
dhtmlXTreeObject.prototype._getIndex = function(w) {
	var z = w.parentObject;
	for (var i = 0; i < z.childsCount; i++)
		if (z.childNodes[i] == w)
			return i;
};

/**
 *     @desc: visual unselect item in tree
 *     @type: private
 *     @param: node - tree item object
 *     @edition: Professional
 *     @topic: 0
 */
dhtmlXTreeObject.prototype._unselectItem = function(node) {
	if ((node) && (node.i_sel)) {

		node.span.className = "standartTreeRow";
		if (node.acolor)
			node.span.style.color = node.acolor;
		node.i_sel = false;
		for (var i = 0; i < this._selected.length; i++)
			if (!this._selected[i].i_sel) {
				this._selected.splice(i, 1);
				break;
			}

	}
}

/**
 *     @desc: visual unselect items in tree
 *     @type: private
 *     @param: node - tree item object
 *     @edition: Professional
 *     @topic: 0
 */
dhtmlXTreeObject.prototype._unselectItems = function() {
	for (var i = 0; i < this._selected.length; i++) {
		var node = this._selected[i];
		node.span.className = "standartTreeRow";
		if (node.acolor)
			node.span.style.color = node.acolor;
		node.i_sel = false;
	}
	this._selected = new Array();
}

/**  
 *     @desc: select node text event handler
 *     @type: private
 *     @param: e - event object
 *     @param: htmlObject - node object     
 *     @param: mode - if false - call onSelect event
 *     @topic: 0  
 */
dhtmlXTreeObject.prototype.onRowSelect = function(e, htmlObject, mode) {
	e = e || window.event;
	var obj = this.parentObject;
	if (htmlObject)
		obj = htmlObject.parentObject;
	var that = obj.treeNod;

	var lastId = that.getSelectedItemId();
	if ((!e) || (!e.skipUnSel))
		that._selectItem(obj, e);

	if (!mode) {
		if (obj.actionHandler)
			obj.actionHandler(obj.id, lastId);
		else
			that.callEvent("onClick", [obj.id, lastId]);
	}
};

/**
 *     @desc: fix checkbox state
 *     @type: private
 *     @topic: 0
 */
dhtmlXTreeObject.prototype._correctCheckStates = function(dhtmlObject) {

	if (!this.tscheck)
		return;
	if (!dhtmlObject)
		return;
	if (dhtmlObject.id == this.rootId)
		return;
	//calculate state
	var act = dhtmlObject.childNodes;
	var flag1 = 0;
	var flag2 = 0;
	if (dhtmlObject.childsCount == 0)
		return;
	for (var i = 0; i < dhtmlObject.childsCount; i++) {
		if (act[i].dscheck)
			continue;
		if (act[i].checkstate == 0)
			flag1 = 1;
		else if (act[i].checkstate == 1)
			flag2 = 1;
		else {
			flag1 = 1;
			flag2 = 1;
			break;
		}
	}

	if ((flag1) && (flag2))
		this._setCheck(dhtmlObject, "unsure");
	else if (flag1)
		this._setCheck(dhtmlObject, false);
	else
		this._setCheck(dhtmlObject, true);

	this._correctCheckStates(dhtmlObject.parentObject);
}

/**
 *     @desc: checbox select action
 *     @type: private
 *     @topic: 0
 */
dhtmlXTreeObject.prototype.onCheckBoxClick = function(e) {
	if (!this.treeNod.callEvent("onBeforeCheck", [this.parentObject.id,
					this.parentObject.checkstate]))
		return;

	if (this.parentObject.dscheck)
		return true;
	if (this.treeNod.tscheck)
		if (this.parentObject.checkstate == 1)
			this.treeNod._setSubChecked(false, this.parentObject);
		else
			this.treeNod._setSubChecked(true, this.parentObject);
	else if (this.parentObject.checkstate == 1)
		this.treeNod._setCheck(this.parentObject, false);
	else
		this.treeNod._setCheck(this.parentObject, true);
	this.treeNod._correctCheckStates(this.parentObject.parentObject);

	return this.treeNod.callEvent("onCheck", [this.parentObject.id,
					this.parentObject.checkstate]);
};
/**
 *     @desc: create HTML elements for tree node
 *     @type: private
 *     @param: acheck - enable/disable checkbox
 *     @param: itemObject - item object
 *     @param: mode - mode
 *     @topic: 0
 */
dhtmlXTreeObject.prototype._createItem = function(acheck, itemObject, mode) {

	var table = document.createElement('table');
	table.cellSpacing = 0;
	table.cellPadding = 0;
	table.border = 0;

	if (this.hfMode)
		table.style.tableLayout = "fixed";
	table.style.margin = 0;
	table.style.padding = 0;

	var tbody = document.createElement('tbody');
	var tr = document.createElement('tr');

	var td1 = document.createElement('td');
	td1.className = "standartTreeImage";

	if (this._txtimg) {
		var img0 = document.createElement("div");
		td1.appendChild(img0);
		img0.className = "dhx_tree_textSign";
	} else {
		var img0 = this._getImg(itemObject.id);
		img0.border = "0";
		if (img0.tagName == "IMG")
			img0.align = "absmiddle";
		td1.appendChild(img0);
		img0.style.padding = 0;
		img0.style.margin = 0;
		img0.style.width = this.def_line_img_x;
		img0.style.height = this.def_line_img_y;
	}

	var td11 = document.createElement('td');
	//         var inp=document.createElement("input");            inp.type="checkbox"; inp.style.width="12px"; inp.style.height="12px";
	var inp = this._getImg(this.cBROf ? this.rootId : itemObject.id);
	inp.checked = 0;
//	this._setSrc(inp, this.imPath + this.checkArray[0]);
// comment by jarry 2010-06-12
	inp.style.width = "16px";
	inp.style.height = "16px";
	//can cause problems with hide/show check
	if (!acheck)
		((!_isIE) ? td11 : inp).style.display = "none";

	// td11.className="standartTreeImage";
	//if (acheck)
	td11.appendChild(inp);
	if ((!this.cBROf) && (inp.tagName == "IMG"))
		inp.align = "absmiddle";
	inp.onclick = this.onCheckBoxClick;
	inp.treeNod = this;
	inp.parentObject = itemObject;
	if (!window._KHTMLrv)
		td11.width = "20px";
	else
		td11.width = "16px";

	var td12 = document.createElement('td');
	td12.className = "standartTreeImage";
	var img = this._getImg(this.timgen ? itemObject.id : this.rootId);
	img.onmousedown = this._preventNsDrag;
	img.ondragstart = this._preventNsDrag;
	img.border = "0";
	if (this._aimgs) {
		img.parentObject = itemObject;
		if (img.tagName == "IMG")
			img.align = "absmiddle";
		img.onclick = this.onRowSelect;
	}
	if (!mode)
		this._setSrc(img, this.iconURL + this.imageArray[0]);
	td12.appendChild(img);
	img.style.padding = 0;
	img.style.margin = 0;
	if (this.timgen) {
		td12.style.width = img.style.width = this.def_img_x;
		img.style.height = this.def_img_y;
	} else {
		img.style.width = "0px";
		img.style.height = "0px";
		if (_isOpera || window._KHTMLrv)
			td12.style.display = "none";
	}

	var td2 = document.createElement('td');
	td2.className = "standartTreeRow";

	itemObject.span = document.createElement('span');
	itemObject.span.className = "standartTreeRow";
	if (this.mlitems) {
		itemObject.span.style.width = this.mlitems;
		//	if (!_isIE)
		itemObject.span.style.display = "block";
	} else
		td2.noWrap = true;
	if (_isIE && _isIE > 7)
		td2.style.width = "999999px";
	else if (!window._KHTMLrv)
		td2.style.width = "100%";

	//      itemObject.span.appendChild(document.createTextNode(itemObject.label));
	itemObject.span.innerHTML = itemObject.label;
	td2.appendChild(itemObject.span);
	td2.parentObject = itemObject;
	td1.parentObject = itemObject;
	td2.onclick = this.onRowSelect;
	td1.onclick = this.onRowClick;
	td2.ondblclick = this.onRowClick2;
	if (this.ettip)
		tr.title = itemObject.label;

	if (this.dragAndDropOff) {
		if (this._aimgs) {
			this.dragger.addDraggableItem(td12, this);
			td12.parentObject = itemObject;
		}
		this.dragger.addDraggableItem(td2, this);
	}

	itemObject.span.style.paddingLeft = "5px";
	itemObject.span.style.paddingRight = "5px";
	td2.style.verticalAlign = "";
	td2.style.fontSize = "10pt";
	td2.style.cursor = this.style_pointer;
	tr.appendChild(td1);
	tr.appendChild(td11);
	tr.appendChild(td12);
	tr.appendChild(td2);
	tbody.appendChild(tr);
	table.appendChild(tbody);

	if (this.ehlt || this.checkEvent("onMouseIn")
			|| this.checkEvent("onMouseOut")) {//highlighting
		tr.onmousemove = this._itemMouseIn;
		tr[(_isIE) ? "onmouseleave" : "onmouseout"] = this._itemMouseOut;
	}
	return table;
};

/**  
 *     @desc: set path to images directory
 *     @param: newPath - path to images directory (related to the page with tree or absolute http url)
 *     @type: public
 *     @topic: 0
 */
dhtmlXTreeObject.prototype.setImagePath = function(newPath) {
	this.imPath = newPath;
	this.iconURL = newPath;
};
/**
 *   @desc: set path to external images used as tree icons
 *   @type: public
 *   @param: path - url (or relative path) of images folder with closing "/"
 *   @topic: 0,7
 */
dhtmlXTreeObject.prototype.setIconPath = function(path) {
	this.iconURL = path;
}

/**
 *     @desc: set function called when tree node selected
 *     @param: (function) func - event handling function
 *     @type: deprecated
 *     @topic: 0,7
 *     @event: onRightClick
 *     @depricated: use grid.attachEvent("onRightClick",func); instead
 *     @eventdesc:  Event occurs after right mouse button was clicked.
 Assigning this handler can disable default context menu, and incompattible with dhtmlXMenu integration.
 *     @eventparam: (string) ID of clicked item
 *     @eventparam: (object) event object
 */
dhtmlXTreeObject.prototype.setOnRightClickHandler = function(func) {
	this.attachEvent("onRightClick", func);
};

/**
 *     @desc: set function called when tree node clicked, also can be forced to call from API
 *     @param: func - event handling function
 *     @type: deprecated
 *     @topic: 0,7
 *     @event: onClick
 *     @depricated: use grid.attachEvent("onClick",func); instead
 *     @eventdesc: Event raises immideatly after text part of item in tree was clicked, but after default onClick functionality was processed.
 Richt mouse button click can be catched by onRightClick event handler.
 *     @eventparam:  ID of clicked item
 *     @eventparam:  ID of previously selected item
 */
dhtmlXTreeObject.prototype.setOnClickHandler = function(func) {
	this.attachEvent("onClick", func);
};

/**
 *     @desc: set function called when tree node selected or unselected, include any select change caused by any functionality
 *     @param: func - event handling function
 *     @type: deprecated
 *     @topic: 0,7
 *     @event: onSelect
 *     @depricated: use grid.attachEvent("onSelect",func); instead
 *     @eventdesc: Event raises immideatly after selection in tree was changed
 *     @eventparam:  selected item ID ( list of IDs in case of multiselection)
 */
dhtmlXTreeObject.prototype.setOnSelectStateChange = function(func) {
	this.attachEvent("onSelect", func);
};

/**
 *     @desc: enables dynamic loading from XML
 *     @type: public
 *     @param: filePath - name of script returning XML; in case of virtual loading - user defined function
 *     @topic: 0  
 */
dhtmlXTreeObject.prototype.setXMLAutoLoading = function(filePath) {
	this.XMLsource = filePath;
};

/**
 *     @desc: set function called before checkbox checked/unchecked
 *     @param: func - event handling function
 *     @type: deprecated
 *     @topic: 0,7
 *     @event: onCheck
 *     @depricated: use tree.attachEvent("onCheck",func); instead
 *     @eventdesc: Event raises right before item in tree was checked/unchecked. can be canceled (return false from event handler)
 *     @eventparam: ID of item which will be checked/unchecked
 *     @eventparam: Current checkbox state. 1 - item checked, 0 - item unchecked.
 *		@eventreturn: true - confirm changing checked state; false - deny chaning checked state;
 */
dhtmlXTreeObject.prototype.setOnCheckHandler = function(func) {
	this.attachEvent("onCheck", func);
};

/**
 *     @desc: set function called before tree node opened/closed
 *     @param: func - event handling function
 *     @type: deprecated
 *     @topic: 0,7
 *     @event:  onOpen
 *     @depricated: use grid.attachEvent("onOpenStart",func); instead
 *     @eventdesc: Event raises immideatly after item in tree got command to open/close , and before item was opened//closed. Event also raised for unclosable nodes and nodes without open/close functionality - in that case result of function will be ignored.
 Event does not occur if node was opened by dhtmlXtree API.
 *     @eventparam: ID of node which will be opened/closed
 *     @eventparam: Current open state of tree item. 0 - item has not children, -1 - item closed, 1 - item opened.
 *     @eventreturn: true - confirm opening/closing; false - deny opening/closing;
 */
dhtmlXTreeObject.prototype.setOnOpenHandler = function(func) {
	this.attachEvent("onOpenStart", func);
};
/**
 *     @desc: set function called before tree node opened/closed
 *     @param: func - event handling function
 *     @type: deprecated
 *     @topic: 0,7
 *     @event:  onOpenStart
 *     @depricated: use grid.attachEvent("onOpenStart",func); instead
 *     @eventdesc: Event raises immideatly after item in tree got command to open/close , and before item was opened//closed. Event also raised for unclosable nodes and nodes without open/close functionality - in that case result of function will be ignored.
 Event not raised if node opened by dhtmlXtree API.
 *     @eventparam: ID of node which will be opened/closed
 *     @eventparam: Current open state of tree item. 0 - item has not children, -1 - item closed, 1 - item opened.
 *     @eventreturn: true - confirm opening/closing; false - deny opening/closing;
 */
dhtmlXTreeObject.prototype.setOnOpenStartHandler = function(func) {
	this.attachEvent("onOpenStart", func);
};

/**
 *     @desc: set function called after tree node opened/closed
 *     @param: func - event handling function
 *     @type: deprecated
 *     @topic: 0,7
 *     @event:  onOpenEnd
 *     @depricated: use grid.attachEvent("onOpenEnd",func); instead
 *     @eventdesc: Event raises immideatly after item in tree was opened//closed. Event also raised for unclosable nodes and nodes without open/close functionality - in that case result of function will be ignored.
 Event not raised if node opened by dhtmlXtree API.
 *     @eventparam: ID of node which will be opened/closed
 *     @eventparam: Current open state of tree item. 0 - item has not children, -1 - item closed, 1 - item opened.
 */
dhtmlXTreeObject.prototype.setOnOpenEndHandler = function(func) {
	this.attachEvent("onOpenEnd", func);
};

/**
 *     @desc: set function called when tree node double clicked
 *     @param: func - event handling function
 *     @type: public
 *     @topic: 0,7
 *     @event: onDblClick
 *     @depricated: use grid.attachEvent("onDblClick",func); instead
 *     @eventdesc: Event raised immideatly after item in tree was doubleclicked, before default onDblClick functionality was processed.
      Beware using both onClick and onDblClick events, because component can  generate onClick event before onDblClick event while doubleclicking item in tree.
      ( that behavior depend on used browser )
 *     @eventparam:  ID of item which was doubleclicked
 *     @eventreturn:  true - confirm opening/closing; false - deny opening/closing;
 */
dhtmlXTreeObject.prototype.setOnDblClickHandler = function(func) {
	this.attachEvent("onDblClick", func);
};

/**
 *     @desc: expand target node and all sub nodes
 *     @type: public
 *     @param: itemId - node id
 *     @topic: 4
 */
dhtmlXTreeObject.prototype.openAllItems = function(itemId) {
	var temp = this._globalIdStorageFind(itemId);
	if (!temp)
		return 0;
	this._xopenAll(temp);
};

/**
 *     @desc: return open/close state
 *     @type: public
 *     @param: itemId - node id
 *     @return: -1 - close, 1 - opened, 0 - node doesn't have children
 *     @topic: 4
 */
dhtmlXTreeObject.prototype.getOpenState = function(itemId) {
	var temp = this._globalIdStorageFind(itemId);
	if (!temp)
		return "";
	return this._getOpenState(temp);
};

/**  
 *     @desc: collapse target node and all sub nodes
 *     @type: public
 *     @param: itemId - node id
 *     @topic: 4  
 */
dhtmlXTreeObject.prototype.closeAllItems = function(itemId) {
	if (itemId === window.undefined)
		itemId = this.rootId;

	var temp = this._globalIdStorageFind(itemId);
	if (!temp)
		return 0;
	this._xcloseAll(temp);

	//nb:solves standard doctype prb in IE
	this.allTree.childNodes[0].border = "1";
	this.allTree.childNodes[0].border = "0";

};

/**
 *     @desc: set user data for target node
 *     @type: public
 *     @param: itemId - target node id
 *     @param: name - key for user data
 *     @param: value - user data value
 *     @topic: 5
 */
dhtmlXTreeObject.prototype.setUserData = function(itemId, name, value) {
	var sNode = this._globalIdStorageFind(itemId, 0, true);
	if (!sNode)
		return;
	if (name == "hint")
		sNode.htmlNode.childNodes[0].childNodes[0].title = value;
	if (typeof(sNode.userData["t_" + name]) == "undefined") {
		if (!sNode._userdatalist)
			sNode._userdatalist = name;
		else
			sNode._userdatalist += "," + name;
	}
	sNode.userData["t_" + name] = value;
};

/**  
 *     @desc: get user data from target node
 *     @type: public
 *     @param: itemId - target node id
 *     @param: name - key for user data
 *     @return: value of user data
 *     @topic: 5
 */
dhtmlXTreeObject.prototype.getUserData = function(itemId, name) {
	var sNode = this._globalIdStorageFind(itemId, 0, true);
	if (!sNode)
		return;
	return sNode.userData["t_" + name];
};

/**
 *     @desc: get node color (text color)
 *     @param: itemId - id of node
 *     @type: public
 *     @return: color of node (empty string for default color);
 *     @topic: 6  
 */
dhtmlXTreeObject.prototype.getItemColor = function(itemId) {
	var temp = this._globalIdStorageFind(itemId);
	if (!temp)
		return 0;

	var res = new Object();
	if (temp.acolor)
		res.acolor = temp.acolor;
	if (temp.scolor)
		res.scolor = temp.scolor;
	return res;
};
/**  
 *     @desc: set node text color
 *     @param: itemId - id of node
 *     @param: defaultColor - node color
 *     @param: selectedColor - selected node color
 *     @type: public
 *     @topic: 6
 */
dhtmlXTreeObject.prototype.setItemColor = function(itemId, defaultColor,
		selectedColor) {
	if ((itemId) && (itemId.span))
		var temp = itemId;
	else
		var temp = this._globalIdStorageFind(itemId);
	if (!temp)
		return 0;
	else {
		if (temp.i_sel) {
			if (selectedColor)
				temp.span.style.color = selectedColor;
		} else {
			if (defaultColor)
				temp.span.style.color = defaultColor;
		}

		if (selectedColor)
			temp.scolor = selectedColor;
		if (defaultColor)
			temp.acolor = defaultColor;
	}
};

/**
 *     @desc: return node text
 *     @param: itemId - id of node
 *     @type: public
 *     @return: text of item (with HTML formatting, if any)
 *     @topic: 6
 */
dhtmlXTreeObject.prototype.getItemText = function(itemId) {
	var temp = this._globalIdStorageFind(itemId);
	if (!temp)
		return 0;
	return (temp.htmlNode.childNodes[0].childNodes[0].childNodes[3].childNodes[0].innerHTML);
};
/**  
 *     @desc: return parent item id
 *     @param: itemId - id of node
 *     @type: public
 *     @return: id of parent item
 *     @topic: 4
 */
dhtmlXTreeObject.prototype.getParentId = function(itemId) {
	var temp = this._globalIdStorageFind(itemId);
	if ((!temp) || (!temp.parentObject))
		return "";
	return temp.parentObject.id;
};

/**  
 *     @desc: change item id
 *     @type: public
 *     @param: itemId - old node id
 *     @param: newItemId - new node id        
 *     @topic: 4
 */
dhtmlXTreeObject.prototype.changeItemId = function(itemId, newItemId) {
	if (itemId == newItemId)
		return;
	var temp = this._globalIdStorageFind(itemId);
	if (!temp)
		return 0;
	temp.id = newItemId;
	temp.span.contextMenuId = newItemId;
	this._idpull[newItemId] = this._idpull[itemId];
	delete this._idpull[itemId];
};

/**
 *     @desc: mark selected item as cut
 *     @type: public
 *     @topic: 2  
 */
dhtmlXTreeObject.prototype.doCut = function() {
	if (this.nodeCut)
		this.clearCut();
	this.nodeCut = (new Array()).concat(this._selected);
	for (var i = 0; i < this.nodeCut.length; i++) {
		var tempa = this.nodeCut[i];
		tempa._cimgs = new Array();
		tempa._cimgs[0] = tempa.images[0];
		tempa._cimgs[1] = tempa.images[1];
		tempa._cimgs[2] = tempa.images[2];
		tempa.images[0] = tempa.images[1] = tempa.images[2] = this.cutImage;
		this._correctPlus(tempa);
	}
};

/**
 *     @desc: insert previously cut branch
 *     @param: itemId - id of new parent node
 *     @type: public
 *     @topic: 2  
 */
dhtmlXTreeObject.prototype.doPaste = function(itemId) {
	var tobj = this._globalIdStorageFind(itemId);
	if (!tobj)
		return 0;
	for (var i = 0; i < this.nodeCut.length; i++) {
		if (this._checkPNodes(tobj, this.nodeCut[i]))
			continue;
		this._moveNode(this.nodeCut[i], tobj);
	}
	this.clearCut();
};

/**  
 *     @desc: clear cut
 *     @type: public
 *     @topic: 2  
 */
dhtmlXTreeObject.prototype.clearCut = function() {
	for (var i = 0; i < this.nodeCut.length; i++) {
		var tempa = this.nodeCut[i];
		tempa.images[0] = tempa._cimgs[0];
		tempa.images[1] = tempa._cimgs[1];
		tempa.images[2] = tempa._cimgs[2];
		this._correctPlus(tempa);
	}
	this.nodeCut = new Array();
};

/**  
 *     @desc: move node with subnodes
 *     @type: private
 *     @param: itemObject - moved node object
 *     @param: targetObject - new parent node
 *     @topic: 2  
 */
dhtmlXTreeObject.prototype._moveNode = function(itemObject, targetObject) {

	return this._moveNodeTo(itemObject, targetObject);

}

/**
 *     @desc: fix order of nodes in collection
 *     @type: private
 *     @param: target - parent item node
 *     @param: zParent - before node
 *     @edition: Professional
 *     @topic: 2
 */

dhtmlXTreeObject.prototype._fixNodesCollection = function(target, zParent) {
	var flag = 0;
	var icount = 0;
	var Nodes = target.childNodes;
	var Count = target.childsCount - 1;

	if (zParent == Nodes[Count])
		return;
	for (var i = 0; i < Count; i++)
		if (Nodes[i] == Nodes[Count]) {
			Nodes[i] = Nodes[i + 1];
			Nodes[i + 1] = Nodes[Count];
		}

	//         Count=target.childsCount;
	for (var i = 0; i < Count + 1; i++) {
		if (flag) {
			var temp = Nodes[i];
			Nodes[i] = flag;
			flag = temp;
		} else if (Nodes[i] == zParent) {
			flag = Nodes[i];
			Nodes[i] = Nodes[Count];
		}
	}
};

/**  
 *     @desc: recreate branch
 *     @type: private
 *     @param: itemObject - moved node object
 *     @param: targetObject - new parent node
 *     @param: level - top level flag
 *     @param: beforeNode - node for sibling mode
 *     @mode: mode - DragAndDrop mode (0 - as child, 1 as sibling)
 *     @edition: Professional
 *     @topic: 2
 */
dhtmlXTreeObject.prototype._recreateBranch = function(itemObject, targetObject,
		beforeNode, level) {
	var i;
	var st = "";
	if (beforeNode) {
		for (i = 0; i < targetObject.childsCount; i++)
			if (targetObject.childNodes[i] == beforeNode)
				break;

		if (i != 0)
			beforeNode = targetObject.childNodes[i - 1];
		else {
			st = "TOP";
			beforeNode = "";
		}
	}

	var t2 = this._onradh;
	this._onradh = null;
	var newNode = this._attachChildNode(targetObject, itemObject.id,
			itemObject.label, 0, itemObject.images[0], itemObject.images[1],
			itemObject.images[2], st, 0, beforeNode);

	//copy user data
	newNode._userdatalist = itemObject._userdatalist;
	newNode.userData = itemObject.userData.clone();
	newNode.XMLload = itemObject.XMLload;
	if (t2) {
		this._onradh = t2;
		this._onradh(newNode.id);
	}

	for (var i = 0; i < itemObject.childsCount; i++)
		this._recreateBranch(itemObject.childNodes[i], newNode, 0, 1);

	return newNode;
}

/**
 *     @desc: move single node
 *     @type: private
 *     @param: itemObject - moved node object
 *     @param: targetObject - new parent node
 *     @mode: mode - DragAndDrop mode (0 - as child, 1 as sibling)
 *     @topic: 2
 */
dhtmlXTreeObject.prototype._moveNodeTo = function(itemObject, targetObject,
		beforeNode) {
	//return;
	if (itemObject.treeNod._nonTrivialNode)
		return itemObject.treeNod._nonTrivialNode(this, targetObject,
				beforeNode, itemObject);

	if (targetObject.mytype)
		var framesMove = (itemObject.treeNod.lWin != targetObject.lWin);
	else
		var framesMove = (itemObject.treeNod.lWin != targetObject.treeNod.lWin);

	if (!this.callEvent("onDrag", [itemObject.id, targetObject.id,
					(beforeNode ? beforeNode.id : null), itemObject.treeNod,
					targetObject.treeNod]))
		return false;
	if ((targetObject.XMLload == 0) && (this.XMLsource)) {
		targetObject.XMLload = 1;
		this._loadDynXML(targetObject.id);
	}
	this.openItem(targetObject.id);

	var oldTree = itemObject.treeNod;
	var c = itemObject.parentObject.childsCount;
	var z = itemObject.parentObject;

	if ((framesMove) || (oldTree.dpcpy)) {//interframe drag flag
		var _otiid = itemObject.id;
		itemObject = this._recreateBranch(itemObject, targetObject, beforeNode);
		if (!oldTree.dpcpy)
			oldTree.deleteItem(_otiid);
	} else {

		var Count = targetObject.childsCount;
		var Nodes = targetObject.childNodes;
		if (Count == 0)
			targetObject._open = true;
		oldTree._unselectItem(itemObject);
		Nodes[Count] = itemObject;
		itemObject.treeNod = targetObject.treeNod;
		targetObject.childsCount++;

		var tr = this._drawNewTr(Nodes[Count].htmlNode);

		if (!beforeNode) {
			targetObject.htmlNode.childNodes[0].appendChild(tr);
			if (this.dadmode == 1)
				this._fixNodesCollection(targetObject, beforeNode);
		} else {
			targetObject.htmlNode.childNodes[0].insertBefore(tr, beforeNode.tr);
			this._fixNodesCollection(targetObject, beforeNode);
			Nodes = targetObject.childNodes;
		}

	}

	if ((!oldTree.dpcpy) && (!framesMove)) {
		var zir = itemObject.tr;

		if ((document.all)
				&& (navigator.appVersion.search(/MSIE\ 5\.0/gi) != -1)) {
			window.setTimeout(function() {
						zir.parentNode.removeChild(zir);
					}, 250);
		} else
			//if (zir.parentNode) zir.parentNode.removeChild(zir,true);

			itemObject.parentObject.htmlNode.childNodes[0]
					.removeChild(itemObject.tr);

		//itemObject.tr.removeNode(true);
		if ((!beforeNode) || (targetObject != itemObject.parentObject)) {
			for (var i = 0; i < z.childsCount; i++) {
				if (z.childNodes[i].id == itemObject.id) {
					z.childNodes[i] = 0;
					break;
				}
			}
		} else
			z.childNodes[z.childsCount - 1] = 0;

		oldTree._compressChildList(z.childsCount, z.childNodes);
		z.childsCount--;
	}

	if ((!framesMove) && (!oldTree.dpcpy)) {
		itemObject.tr = tr;
		tr.nodem = itemObject;
		itemObject.parentObject = targetObject;

		if (oldTree != targetObject.treeNod) {
			if (itemObject.treeNod._registerBranch(itemObject, oldTree))
				return;
			this._clearStyles(itemObject);
			this._redrawFrom(this, itemObject.parentObject);
		};

		this._correctPlus(targetObject);
		this._correctLine(targetObject);

		this._correctLine(itemObject);
		this._correctPlus(itemObject);

		//fix target siblings
		if (beforeNode) {

			this._correctPlus(beforeNode);
			//this._correctLine(beforeNode);
		} else if (targetObject.childsCount >= 2) {

			this._correctPlus(Nodes[targetObject.childsCount - 2]);
			this._correctLine(Nodes[targetObject.childsCount - 2]);
		}

		this._correctPlus(Nodes[targetObject.childsCount - 1]);
		//this._correctLine(Nodes[targetObject.childsCount-1]);

		if (this.tscheck)
			this._correctCheckStates(targetObject);
		if (oldTree.tscheck)
			oldTree._correctCheckStates(z);

	}

	//fix source parent

	if (c > 1) {
		oldTree._correctPlus(z.childNodes[c - 2]);
		oldTree._correctLine(z.childNodes[c - 2]);
	}

	//      if (z.childsCount==0)
	oldTree._correctPlus(z);
	oldTree._correctLine(z);

	this.callEvent("onDrop", [itemObject.id, targetObject.id,
					(beforeNode ? beforeNode.id : null), oldTree,
					targetObject.treeNod]);
	return itemObject.id;
};

/**
 *     @desc: recursive set default styles for node
 *     @type: private
 *     @param: itemObject - target node object
 *     @topic: 6  
 */
dhtmlXTreeObject.prototype._clearStyles = function(itemObject) {
	if (!itemObject.htmlNode)
		return; //some weird case in SRND mode
	var td1 = itemObject.htmlNode.childNodes[0].childNodes[0].childNodes[1];
	var td3 = td1.nextSibling.nextSibling;

	itemObject.span.innerHTML = itemObject.label;
	itemObject.i_sel = false;

	if (itemObject._aimgs)
		this.dragger.removeDraggableItem(td1.nextSibling);

	if (this.checkBoxOff) {
		td1.childNodes[0].style.display = "";
		td1.childNodes[0].onclick = this.onCheckBoxClick;
		this._setSrc(td1.childNodes[0], this.imPath
						+ this.checkArray[itemObject.checkstate]);
	} else
		td1.childNodes[0].style.display = "none";
	td1.childNodes[0].treeNod = this;

	this.dragger.removeDraggableItem(td3);
	if (this.dragAndDropOff)
		this.dragger.addDraggableItem(td3, this);
	if (this._aimgs)
		this.dragger.addDraggableItem(td1.nextSibling, this);

	td3.childNodes[0].className = "standartTreeRow";
	td3.onclick = this.onRowSelect;
	td3.ondblclick = this.onRowClick2;
	td1.previousSibling.onclick = this.onRowClick;

	this._correctLine(itemObject);
	this._correctPlus(itemObject);
	for (var i = 0; i < itemObject.childsCount; i++)
		this._clearStyles(itemObject.childNodes[i]);

};
/**
 *     @desc: register node and all children nodes
 *     @type: private
 *     @param: itemObject - node object
 *     @topic: 2  
 */
dhtmlXTreeObject.prototype._registerBranch = function(itemObject, oldTree) {
	if (oldTree)
		oldTree._globalIdStorageSub(itemObject.id);
	itemObject.id = this._globalIdStorageAdd(itemObject.id, itemObject);
	itemObject.treeNod = this;
	for (var i = 0; i < itemObject.childsCount; i++)
		this._registerBranch(itemObject.childNodes[i], oldTree);
	return 0;
};

/**  
 *     @desc: enable three state checkboxes
 *     @beforeInit: 1
 *     @param: mode - 1 - on, 0 - off;
 *     @type: public
 *     @topic: 0  
 */
dhtmlXTreeObject.prototype.enableThreeStateCheckboxes = function(mode) {
	this.tscheck = convertStringToBoolean(mode);
};

/**
 *     @desc: set function called when mouse is over tree node
 *     @param: func - event handling function
 *     @type: deprecated
 *     @topic: 0,7
 *     @event: onMouseIn
 *     @depricated: use grid.attachEvent("onMouseIn",func); instead
 *     @eventdesc: Event raised immideatly after mouse started moving over item
 *     @eventparam:  ID of item
 */
dhtmlXTreeObject.prototype.setOnMouseInHandler = function(func) {
	this.ehlt = true;
	this.attachEvent("onMouseIn", func);
};

/**
 *     @desc: set function called when mouse is out of tree node
 *     @param: func - event handling function
 *     @type: deprecated
 *     @topic: 0,7
 *     @event: onMouseOut
 *     @depricated: use grid.attachEvent("onMouseOut",func); instead
 *     @eventdesc: Event raised immideatly after mouse moved out of item
 *     @eventparam:  ID of clicked item
 */
dhtmlXTreeObject.prototype.setOnMouseOutHandler = function(func) {
	this.ehlt = true;
	this.attachEvent("onMouseOut", func);
};

/**
 *     @desc: enable tree images
 *     @beforeInit: 1
 *     @param: mode - 1 - on, 0 - off;
 *     @type: public
 *     @topic: 0  
 */
dhtmlXTreeObject.prototype.enableTreeImages = function(mode) {
	this.timgen = convertStringToBoolean(mode);
};

/**
 *     @desc: enable mode with fixed tables (looks better, but has no horisontal scrollbar)
 *     @beforeInit: 1
 *     @param: mode - 1 - on, 0 - off;
 *     @type: private
 *     @topic: 0  
 */
dhtmlXTreeObject.prototype.enableFixedMode = function(mode) {
	this.hfMode = convertStringToBoolean(mode);
};

/**  
 *     @desc: show/hide checkboxes (all checkboxes in tree)
 *     @type: public
 *     @param: mode - true/false
 *     @param: hidden - if set to true, checkboxes not rendered but can be shown by showItemCheckbox
 *     @topic: 0  
 */
dhtmlXTreeObject.prototype.enableCheckBoxes = function(mode, hidden) {
	this.checkBoxOff = convertStringToBoolean(mode);
	this.cBROf = (!(this.checkBoxOff || convertStringToBoolean(hidden)));
};
/**
 *     @desc: set default images for nodes (must be called before XML loading)
 *     @type: public
 *     @param: a0 - image for node without children;
 *     @param: a1 - image for closed node;
 *     @param: a2 - image for opened node                  
 *     @topic: 6  
 */
dhtmlXTreeObject.prototype.setStdImages = function(image1, image2, image3) {
	this.imageArray[0] = image1;
	this.imageArray[1] = image2;
	this.imageArray[2] = image3;
};

/**
 *     @desc: enable/disable tree lines (parent-child threads)
 *     @type: public
 *     @param: mode - enable/disable tree lines
 *     @topic: 6
 */
dhtmlXTreeObject.prototype.enableTreeLines = function(mode) {
	this.treeLinesOn = convertStringToBoolean(mode);
}

/**
 *     @desc: set images used for parent-child threads drawing (lines, plus, minus)
 *     @type: public
 *     @param: arrayName - name of array: plus, minus
 *     @param: image1 - line crossed image
 *     @param: image2 - image with top line
 *     @param: image3 - image with bottom line
 *     @param: image4 - image without line
 *     @param: image5 - single root image
 *     @topic: 6
 */
dhtmlXTreeObject.prototype.setImageArrays = function(arrayName, image1, image2,
		image3, image4, image5) {
	switch (arrayName) {
		case "plus" :
			this.plusArray[0] = image1;
			this.plusArray[1] = image2;
			this.plusArray[2] = image3;
			this.plusArray[3] = image4;
			this.plusArray[4] = image5;
			break;
		case "minus" :
			this.minusArray[0] = image1;
			this.minusArray[1] = image2;
			this.minusArray[2] = image3;
			this.minusArray[3] = image4;
			this.minusArray[4] = image5;
			break;
	}
};

/**  
 *     @desc: expand node
 *     @param: itemId - id of node
 *     @type: public
 *     @topic: 4
 */
dhtmlXTreeObject.prototype.openItem = function(itemId) {
	var temp = this._globalIdStorageFind(itemId);
	if (!temp)
		return 0;
	else
		return this._openItem(temp);
};

/**  
 *     @desc: expand node
 *     @param: item - tree node object
 *     @type: private
 *     @editing: pro
 *     @topic: 4  
 */
dhtmlXTreeObject.prototype._openItem = function(item) {
	var state = this._getOpenState(item);
	if ((state < 0) || (((this.XMLsource) && (!item.XMLload)))) {
		if (!this.callEvent("onOpenStart", [item.id, state]))
			return 0;
		this._HideShow(item, 2);
		if (this.checkEvent("onOpenEnd")) {
			if (this.onXLE == this._epnFHe)
				this._epnFHe(this, item.id, true);
			if (!this.xmlstate || !this.XMLsource)
				this
						.callEvent("onOpenEnd", [item.id,
										this._getOpenState(item)]);
			else {
				this._oie_onXLE.push(this.onXLE);
				this.onXLE = this._epnFHe;
			}
		}
	} else if (this._srnd)
		this._HideShow(item, 2);
	if (item.parentObject && !this._skip_open_parent)
		this._openItem(item.parentObject);
};

/**  
 *     @desc: collapse node
 *     @param: itemId - id of node
 *     @type: public
 *     @topic: 4  
 */
dhtmlXTreeObject.prototype.closeItem = function(itemId) {
	if (this.rootId == itemId)
		return 0;
	var temp = this._globalIdStorageFind(itemId);
	if (!temp)
		return 0;
	if (temp.closeble)
		this._HideShow(temp, 1);
};

/**
 *     @desc: get node level (position in hierarchy)
 *     @param: itemId - id of node
 *     @type: public
 *     @return: node level (0 if no such item in hierarchy - probably super root)
 *     @topic: 4
 */
dhtmlXTreeObject.prototype.getLevel = function(itemId) {
	var temp = this._globalIdStorageFind(itemId);
	if (!temp)
		return 0;
	return this._getNodeLevel(temp, 0);
};

/**  
 *     @desc: prevent node from closing
 *     @param: itemId - id of node
 *     @param: flag -  if 0 - node can't be closed, else node can be closed
 *     @type: public
 *     @topic: 4  
 */
dhtmlXTreeObject.prototype.setItemCloseable = function(itemId, flag) {
	flag = convertStringToBoolean(flag);
	if ((itemId) && (itemId.span))
		var temp = itemId;
	else
		var temp = this._globalIdStorageFind(itemId);
	if (!temp)
		return 0;
	temp.closeble = flag;
};

/**  
 *     @desc: recursive function used for node level calculation
 *     @param: itemObject - pointer to node object
 *     @param: count - counter of levels        
 *     @type: private
 *     @topic: 4  
 */
dhtmlXTreeObject.prototype._getNodeLevel = function(itemObject, count) {
	if (itemObject.parentObject)
		return this._getNodeLevel(itemObject.parentObject, count + 1);
	return (count);
};

/**  
 *     @desc: return number of children
 *     @param: itemId - id of node
 *     @type: public
 *     @return: number of child items for loaded branches; true - for not loaded branches
 *     @topic: 4
 */
dhtmlXTreeObject.prototype.hasChildren = function(itemId) {
	var temp = this._globalIdStorageFind(itemId);
	if (!temp)
		return 0;
	else {
		if ((this.XMLsource) && (!temp.XMLload))
			return true;
		else
			return temp.childsCount;
	};
};

/**
 *     @desc: get number of leafs (nodes without children)
 *     @param: itemNode -  node object
 *     @type: private
 *     @edition: Professional
 *     @topic: 4
 */
dhtmlXTreeObject.prototype._getLeafCount = function(itemNode) {
	var a = 0;
	for (var b = 0; b < itemNode.childsCount; b++)
		if (itemNode.childNodes[b].childsCount == 0)
			a++;
	return a;
}

/**
 *     @desc: set new node text (HTML allowed)
 *     @param: itemId - id of node
 *     @param: newLabel - node text
 *     @param: newTooltip - (optional)tooltip for the node
 *     @type: public
 *     @topic: 6
 */
dhtmlXTreeObject.prototype.setItemText = function(itemId, newLabel, newTooltip) {
	var temp = this._globalIdStorageFind(itemId);
	if (!temp)
		return 0;
	temp.label = newLabel;
	temp.span.innerHTML = newLabel;

	temp.span.parentNode.parentNode.title = newTooltip || "";
};

/**
 *     @desc: get item's tooltip
 *     @param: itemId - id of node
 *     @type: public
 *     @topic: 6
 */
dhtmlXTreeObject.prototype.getItemTooltip = function(itemId) {
	var temp = this._globalIdStorageFind(itemId);
	if (!temp)
		return "";
	return (temp.span.parentNode.parentNode._dhx_title
			|| temp.span.parentNode.parentNode.title || "");
};

/**  
 *     @desc: refresh tree branch from xml (XML with child nodes rerequested from server)
 *     @param: itemId - id of node, if not defined tree super root used.
 *     @type: public
 *     @topic: 6  
 */
dhtmlXTreeObject.prototype.refreshItem = function(itemId) {
	if (!itemId)
		itemId = this.rootId;
	var temp = this._globalIdStorageFind(itemId);
	this.deleteChildItems(itemId);
	this._loadDynXML(itemId);
};

/**  
 *     @desc: set item images
 *     @param: itemId - id of node
 *     @param: image1 - node without children icon
 *     @param: image2 - closed node icon          
 *     @param: image3 - open node icon         
 *     @type: public
 *     @topic: 6
 */
dhtmlXTreeObject.prototype.setItemImage2 = function(itemId, image1, image2,
		image3) {
	var temp = this._globalIdStorageFind(itemId);
	if (!temp)
		return 0;
	temp.images[1] = image2;
	temp.images[2] = image3;
	temp.images[0] = image1;
	this._correctPlus(temp);
};
/**
 *     @desc: set item icons (mostly usefull for childless nodes)
 *     @param: itemId - id of node
 *     @param: image1 - node without children icon or closed node icon (if image2 specified)
 *     @param: image2 - open node icon (optional)        
 *     @type: public
 *     @topic: 6  
 */
dhtmlXTreeObject.prototype.setItemImage = function(itemId, image1, image2) {
	var temp = this._globalIdStorageFind(itemId);
	if (!temp)
		return 0;
	if (image2) {
		temp.images[1] = image1;
		temp.images[2] = image2;
	} else
		temp.images[0] = image1;
	this._correctPlus(temp);
};

/**
 *     @desc: Returns the list of all subitems Ids from the next level of tree, separated by commas.
 *     @param: itemId - id of node
 *     @type: public
 *     @return: list of all subitems from the next level of tree, separated by commas.
 *     @topic: 6
 */
dhtmlXTreeObject.prototype.getSubItems = function(itemId) {
	var temp = this._globalIdStorageFind(itemId, 0, 1);
	if (!temp)
		return 0;

	var z = "";
	for (i = 0; i < temp.childsCount; i++) {
		if (!z)
			z = temp.childNodes[i].id;
		else
			z += this.dlmtr + temp.childNodes[i].id;

	}

	return z;
};

/**
 *     @desc: Returns the list of all sub items from all next levels of tree, separated by commas.
 *     @param: itemId - id of node
 *     @edition: Professional
 *     @type: private
 *     @topic: 6
 */
dhtmlXTreeObject.prototype._getAllScraggyItems = function(node) {
	var z = "";
	for (var i = 0; i < node.childsCount; i++) {
		if ((node.childNodes[i].unParsed)
				|| (node.childNodes[i].childsCount > 0)) {
			if (node.childNodes[i].unParsed)
				var zb = this._getAllScraggyItemsXML(
						node.childNodes[i].unParsed, 1);
			else
				var zb = this._getAllScraggyItems(node.childNodes[i])

			if (zb)
				if (z)
					z += this.dlmtr + zb;
				else
					z = zb;
		} else if (!z)
			z = node.childNodes[i].id;
		else
			z += this.dlmtr + node.childNodes[i].id;
	}
	return z;
};

/**
 *     @desc: Returns the list of all children items from all next levels of tree, separated by commas.
 *     @param: itemId - id of node
 *     @type: private
 *     @edition: Professional
 *     @topic: 6
 */

dhtmlXTreeObject.prototype._getAllFatItems = function(node) {
	var z = "";
	for (var i = 0; i < node.childsCount; i++) {
		if ((node.childNodes[i].unParsed)
				|| (node.childNodes[i].childsCount > 0)) {
			if (!z)
				z = node.childNodes[i].id;
			else
				z += this.dlmtr + node.childNodes[i].id;

			if (node.childNodes[i].unParsed)
				var zb = this
						._getAllFatItemsXML(node.childNodes[i].unParsed, 1);
			else
				var zb = this._getAllFatItems(node.childNodes[i])

			if (zb)
				z += this.dlmtr + zb;
		}
	}
	return z;
};

/**
 *     @desc: Returns the list of all children items from all next levels of tree, separated by commas.
 *     @param: itemId - id of node
 *     @type: private
 *     @topic: 6
 */
dhtmlXTreeObject.prototype._getAllSubItems = function(itemId, z, node) {
	if (node)
		temp = node;
	else {
		var temp = this._globalIdStorageFind(itemId);
	};
	if (!temp)
		return 0;

	z = "";
	for (var i = 0; i < temp.childsCount; i++) {
		if (!z)
			z = temp.childNodes[i].id;
		else
			z += this.dlmtr + temp.childNodes[i].id;
		var zb = this._getAllSubItems(0, z, temp.childNodes[i])

		if (zb)
			z += this.dlmtr + zb;
	}

	return z;
};

/**  
 *     @desc: select node ( and optionaly fire onselect event)
 *     @type: public
 *     @param: itemId - node id
 *     @param: mode - If true, script function for selected node will be called.
 *     @param: preserve - preserve earlier selected nodes
 *     @topic: 1
 */
dhtmlXTreeObject.prototype.selectItem = function(itemId, mode, preserve) {
	mode = convertStringToBoolean(mode);
	var temp = this._globalIdStorageFind(itemId);
	if ((!temp) || (!temp.parentObject))
		return 0;

	if (this.XMLloadingWarning)
		temp.parentObject.openMe = 1;
	else
		this._openItem(temp.parentObject);

	//temp.onRowSelect(0,temp.htmlNode.childNodes[0].childNodes[0].childNodes[3],mode);
	var ze = null;
	if (preserve) {
		ze = new Object;
		ze.ctrlKey = true;
		if (temp.i_sel)
			ze.skipUnSel = true;
	}
	if (mode)
		this.onRowSelect(ze,
				temp.htmlNode.childNodes[0].childNodes[0].childNodes[3], false);
	else
		this.onRowSelect(ze,
				temp.htmlNode.childNodes[0].childNodes[0].childNodes[3], true);
};

/**
 *     @desc: retun selected node text
 *     @type: public
 *     @return: text of selected node (or list of all selected nodes text if more than one selected)
 *     @topic: 1
 */
dhtmlXTreeObject.prototype.getSelectedItemText = function() {
	var str = new Array();
	for (var i = 0; i < this._selected.length; i++)
		str[i] = this._selected[i].span.innerHTML;
	return (str.join(this.dlmtr));
};

/**  
 *     @desc: correct childNode list after node deleting
 *     @type: private
 *     @param: Count - childNodes collection length        
 *     @param: Nodes - childNodes collection
 *     @topic: 4  
 */
dhtmlXTreeObject.prototype._compressChildList = function(Count, Nodes) {
	Count--;
	for (var i = 0; i < Count; i++) {
		if (Nodes[i] == 0) {
			Nodes[i] = Nodes[i + 1];
			Nodes[i + 1] = 0;
		}
	};
};
/**  
 *     @desc: delete node
 *     @type: private
 *     @param: itemId - target node id
 *     @param: htmlObject - target node object        
 *     @param: skip - node unregistration mode (optional, used by private methods)
 *     @topic: 2
 */
dhtmlXTreeObject.prototype._deleteNode = function(itemId, htmlObject, skip) {
	if ((!htmlObject) || (!htmlObject.parentObject))
		return 0;
	var tempos = 0;
	var tempos2 = 0;
	if (htmlObject.tr.nextSibling)
		tempos = htmlObject.tr.nextSibling.nodem;
	if (htmlObject.tr.previousSibling)
		tempos2 = htmlObject.tr.previousSibling.nodem;

	var sN = htmlObject.parentObject;
	var Count = sN.childsCount;
	var Nodes = sN.childNodes;
	for (var i = 0; i < Count; i++) {
		if (Nodes[i].id == itemId) {
			if (!skip)
				sN.htmlNode.childNodes[0].removeChild(Nodes[i].tr);
			Nodes[i] = 0;
			break;
		}
	}
	this._compressChildList(Count, Nodes);
	if (!skip) {
		sN.childsCount--;
	}

	if (tempos) {
		this._correctPlus(tempos);
		this._correctLine(tempos);
	}
	if (tempos2) {
		this._correctPlus(tempos2);
		this._correctLine(tempos2);
	}
	if (this.tscheck)
		this._correctCheckStates(sN);

	if (!skip) {
		this._globalIdStorageRecSub(htmlObject);
	}
};
/**
 *     @desc: set state of node's checkbox
 *     @type: public
 *     @param: itemId - target node id
 *     @param: state - checkbox state (0/1/"unsure")
 *     @topic: 5
 */
dhtmlXTreeObject.prototype.setCheck = function(itemId, state) {
	var sNode = this._globalIdStorageFind(itemId, 0, 1);
	if (!sNode)
		return;

	if (state === "unsure")
		this._setCheck(sNode, state);
	else {
		state = convertStringToBoolean(state);
		if ((this.tscheck) && (this.smcheck))
			this._setSubChecked(state, sNode);
		else
			this._setCheck(sNode, state);
	}
	if (this.smcheck)
		this._correctCheckStates(sNode.parentObject);
};

dhtmlXTreeObject.prototype._setCheck = function(sNode, state) {
	if (!sNode)
		return;
	if (((sNode.parentObject._r_logic) || (this._frbtr)) && (state))
		if (this._frbtrs) {
			if (this._frbtrL)
				this.setCheck(this._frbtrL.id, 0);
			this._frbtrL = sNode;
		} else
			for (var i = 0; i < sNode.parentObject.childsCount; i++)
				this._setCheck(sNode.parentObject.childNodes[i], 0);

	var z = sNode.htmlNode.childNodes[0].childNodes[0].childNodes[1].childNodes[0];

	if (state == "unsure")
		sNode.checkstate = 2;
	else if (state)
		sNode.checkstate = 1;
	else
		sNode.checkstate = 0;
	if (sNode.dscheck)
		sNode.checkstate = sNode.dscheck;
	this._setSrc(z, this.imPath
					+ ((sNode.parentObject._r_logic || this._frbtr)
							? this.radioArray
							: this.checkArray)[sNode.checkstate]);
};

/**
 *     @desc: change state of node's checkbox and all children checkboxes
 *     @type: public
 *     @param: itemId - target node id
 *     @param: state - checkbox state
 *     @topic: 5
 */
dhtmlXTreeObject.prototype.setSubChecked = function(itemId, state) {
	var sNode = this._globalIdStorageFind(itemId);
	this._setSubChecked(state, sNode);
	this._correctCheckStates(sNode.parentObject);
}

/**  
 *     @desc: change state of node's checkbox and all childnodes checkboxes
 *     @type: private
 *     @param: itemId - target node id
 *     @param: state - checkbox state
 *     @param: sNode - target node object (optional, used by private methods)
 *     @topic: 5  
 */
dhtmlXTreeObject.prototype._setSubChecked = function(state, sNode) {
	state = convertStringToBoolean(state);
	if (!sNode)
		return;
	if (((sNode.parentObject._r_logic) || (this._frbtr)) && (state))
		for (var i = 0; i < sNode.parentObject.childsCount; i++)
			this._setSubChecked(0, sNode.parentObject.childNodes[i]);

	if (sNode._r_logic || this._frbtr)
		this._setSubChecked(state, sNode.childNodes[0]);
	else
		for (var i = 0; i < sNode.childsCount; i++) {
			this._setSubChecked(state, sNode.childNodes[i]);
		};
	var z = sNode.htmlNode.childNodes[0].childNodes[0].childNodes[1].childNodes[0];

	if (state)
		sNode.checkstate = 1;
	else
		sNode.checkstate = 0;
	if (sNode.dscheck)
		sNode.checkstate = sNode.dscheck;

	this._setSrc(z, this.imPath
					+ ((sNode.parentObject._r_logic || this._frbtr)
							? this.radioArray
							: this.checkArray)[sNode.checkstate]);
};

/**
 *     @desc: get state of nodes's checkbox
 *     @type: public
 *     @param: itemId - target node id
 *     @return: node state (0 - unchecked,1 - checked, 2 - third state)
 *     @topic: 5  
 */
dhtmlXTreeObject.prototype.isItemChecked = function(itemId) {
	var sNode = this._globalIdStorageFind(itemId);
	if (!sNode)
		return;
	return sNode.checkstate;
};

/**
 *     @desc: delete all children of node
 *     @type: public
 *     @param: itemId - node id
 *     @topic: 2
 */
dhtmlXTreeObject.prototype.deleteChildItems = function(itemId) {
	var sNode = this._globalIdStorageFind(itemId);
	if (!sNode)
		return;
	var j = sNode.childsCount;
	for (var i = 0; i < j; i++) {
		this._deleteNode(sNode.childNodes[0].id, sNode.childNodes[0]);
	};
};

/**
 *     @desc: delete node
 *     @type: public
 *     @param: itemId - node id
 *     @param: selectParent - If true parent of deleted item get selection, else no selected items leaving in tree.
 *     @topic: 2  
 */
dhtmlXTreeObject.prototype.deleteItem = function(itemId, selectParent) {
	if ((!this._onrdlh) || (this._onrdlh(itemId))) {
		var z = this._deleteItem(itemId, selectParent);

	}

	//nb:solves standard doctype prb in IE
	this.allTree.childNodes[0].border = "1";
	this.allTree.childNodes[0].border = "0";
}
/**
 *     @desc: delete node
 *     @type: private
 *     @param: id - node id
 *     @param: selectParent - If true parent of deleted item get selection, else no selected items leaving in tree.
 *     @param: skip - unregistering mode (optional, used by private methods)        
 *     @topic: 2  
 */
dhtmlXTreeObject.prototype._deleteItem = function(itemId, selectParent, skip) {
	selectParent = convertStringToBoolean(selectParent);
	var sNode = this._globalIdStorageFind(itemId);
	if (!sNode)
		return;
	var pid = this.getParentId(itemId);

	var zTemp = sNode.parentObject;
	this._deleteNode(itemId, sNode, skip);
	this._correctPlus(zTemp);
	this._correctLine(zTemp);

	if ((selectParent) && (pid != this.rootId))
		this.selectItem(pid, 1);
	return zTemp;
};

/**
 *     @desc: uregister all child nodes of target node
 *     @type: private
 *     @param: itemObject - node object
 *     @topic: 3  
 */
dhtmlXTreeObject.prototype._globalIdStorageRecSub = function(itemObject) {
	for (var i = 0; i < itemObject.childsCount; i++) {
		this._globalIdStorageRecSub(itemObject.childNodes[i]);
		this._globalIdStorageSub(itemObject.childNodes[i].id);
	};
	this._globalIdStorageSub(itemObject.id);

	/*anti memory leaking*/
	var z = itemObject;
	//		var par=z.span.parentNode.parentNode.childNodes;
	//		par[0].parentObject=null;
	//		par[1].childNodes[0].parentObject=null;
	//		par[2].childNodes[0].parentObject=null;
	//		par[2].childNodes[0].treeNod=null;
	//		par[2].parentObject=null;
	//		par[3].parentObject=null;
	z.span = null;
	z.tr.nodem = null;
	z.tr = null;
	z.htmlNode = null;
};

/**  
 *     @desc: create new node next to specified
 *     @type: public
 *     @param: itemId - node id
 *     @param: newItemId - new node id
 *     @param: itemText - new node text
 *     @param: itemActionHandler - function fired on node select event (optional)
 *     @param: image1 - image for node without children; (optional)
 *     @param: image2 - image for closed node; (optional)
 *     @param: image3 - image for opened node (optional)
 *     @param: optionStr - options string (optional)            
 *     @param: children - node children flag (for dynamical trees) (optional)
 *     @topic: 2  
 */
dhtmlXTreeObject.prototype.insertNewNext = function(itemId, newItemId,
		itemText, itemActionHandler, image1, image2, image3, optionStr,
		children) {
	var sNode = this._globalIdStorageFind(itemId);
	if ((!sNode) || (!sNode.parentObject))
		return (0);

	var nodez = this._attachChildNode(0, newItemId, itemText,
			itemActionHandler, image1, image2, image3, optionStr, children,
			sNode);

	return nodez;
};

/**
 *     @desc: retun node id by index
 *     @type: public
 *     @param: itemId - parent node id
 *     @param: index - index of node, 0 based
 *     @return: node id
 *     @topic: 1
 */
dhtmlXTreeObject.prototype.getItemIdByIndex = function(itemId, index) {
	var z = this._globalIdStorageFind(itemId);
	if ((!z) || (index >= z.childsCount))
		return null;
	return z.childNodes[index].id;
};

/**
 *     @desc: retun child node id by index
 *     @type: public
 *     @param: itemId - parent node id        
 *     @param: index - index of child node
 *     @return: node id
 *     @topic: 1
 */
dhtmlXTreeObject.prototype.getChildItemIdByIndex = function(itemId, index) {
	var z = this._globalIdStorageFind(itemId);
	if ((!z) || (index >= z.childsCount))
		return null;
	return z.childNodes[index].id;
};

/**
 *     @desc: set function called when drag-and-drop event occured
 *     @param: aFunc - event handling function
 *     @type: deprecated
 *     @topic: 0,7
 *     @event:    onDrag
 *     @depricated: use grid.attachEvent("onDrag",func); instead
 *     @eventdesc: Event occured after item was dragged and droped on another item, but before item moving processed.
 Event also raised while programmatic moving nodes.
 *     @eventparam:  ID of source item
 *     @eventparam:  ID of target item
 *     @eventparam:  if node droped as sibling then contain id of item before whitch source node will be inserted
 *     @eventparam:  source Tree object
 *     @eventparam:  target Tree object
 *     @eventreturn:  true - confirm drag-and-drop; false - deny drag-and-drop;
 */
dhtmlXTreeObject.prototype.setDragHandler = function(func) {
	this.attachEvent("onDrag", func);
};

/**
 *     @desc: clear selection from node
 *     @param: htmlNode - pointer to node object
 *     @type: private
 *     @topic: 1
 */
dhtmlXTreeObject.prototype._clearMove = function() {
	if (this._lastMark) {
		this._lastMark.className = this._lastMark.className.replace(
				/dragAndDropRow/g, "");
		this._lastMark = null;
	}

	this.allTree.className = this.allTree.className
			.replace(" selectionBox", "");
};

/**  
 *     @desc: enable/disable drag-and-drop
 *     @type: public
 *     @param: mode - enabled/disabled [ can be true/false/temporary_disabled - last value mean that tree can be D-n-D can be switched to true later ]
 *     @param: rmode - enabled/disabled drag and drop on super root
 *     @topic: 0
 */
dhtmlXTreeObject.prototype.enableDragAndDrop = function(mode, rmode) {
	if (mode == "temporary_disabled") {
		this.dADTempOff = false;
		mode = true;
	} else
		this.dADTempOff = true;

	this.dragAndDropOff = convertStringToBoolean(mode);
	if (this.dragAndDropOff)
		this.dragger.addDragLanding(this.allTree, this);
	if (arguments.length > 1)
		this._ddronr = (!convertStringToBoolean(rmode));
};

/**
 *     @desc: set selection on node
 *     @param: node - pointer to node object
 *     @type: private
 *     @topic: 1
 */
dhtmlXTreeObject.prototype._setMove = function(htmlNode, x, y) {
	if (htmlNode.parentObject.span) {
		//window.status=x;
		var a1 = getAbsoluteTop(htmlNode);
		var a2 = getAbsoluteTop(this.allTree) - this.allTree.scrollTop;

		this.dadmodec = this.dadmode;//this.dadmode;
		this.dadmodefix = 0;

		var zN = htmlNode.parentObject.span;
		zN.className += " dragAndDropRow";
		this._lastMark = zN;

		this._autoScroll(null, a1, a2);

	}
};

dhtmlXTreeObject.prototype._autoScroll = function(node, a1, a2) {
	if (this.autoScroll) {
		if (node) {
			a1 = getAbsoluteTop(node);
			a2 = getAbsoluteTop(this.allTree);
		}
		//scroll down
		if ((a1 - a2 - parseInt(this.allTree.scrollTop)) > (parseInt(this.allTree.offsetHeight) - 50))
			this.allTree.scrollTop = parseInt(this.allTree.scrollTop) + 20;
		//scroll top
		if ((a1 - a2) < (parseInt(this.allTree.scrollTop) + 30))
			this.allTree.scrollTop = parseInt(this.allTree.scrollTop) - 20;
	}
}

/**
 *     @desc: create html element for dragging
 *     @type: private
 *     @param: htmlObject - html node object
 *     @topic: 1
 */
dhtmlXTreeObject.prototype._createDragNode = function(htmlObject, e) {
	if (!this.dADTempOff)
		return null;

	var obj = htmlObject.parentObject;
	if (!this.callEvent("onBeforeDrag", [obj.id]))
		return null;
	if (!obj.i_sel)
		this._selectItem(obj, e);

	var dragSpan = document.createElement('div');

	var text = new Array();
	if (this._itim_dg)
		for (var i = 0; i < this._selected.length; i++)
			text[i] = "<table cellspacing='0' cellpadding='0'><tr><td><img width='18px' height='18px' src='"
					+ this
							._getSrc(this._selected[i].span.parentNode.previousSibling.childNodes[0])
					+ "'></td><td>"
					+ this._selected[i].span.innerHTML
					+ "</td></tr></table>";
	else
		text = this.getSelectedItemText().split(this.dlmtr);

	dragSpan.innerHTML = text.join("");
	dragSpan.style.position = "absolute";
	dragSpan.className = "dragSpanDiv";
	this._dragged = (new Array()).concat(this._selected);
	return dragSpan;
}

/**  
 *     @desc: focus item in tree
 *     @type: private
 *     @param: item - node object
 *     @edition: Professional
 *     @topic: 0  
 */
dhtmlXTreeObject.prototype._focusNode = function(item) {
	var z = getAbsoluteTop(item.htmlNode) - getAbsoluteTop(this.allTree);
	if ((z > (this.allTree.scrollTop + this.allTree.offsetHeight - 30))
			|| (z < this.allTree.scrollTop))
		this.allTree.scrollTop = z;
};

///DragAndDrop

dhtmlXTreeObject.prototype._preventNsDrag = function(e) {
	if ((e) && (e.preventDefault)) {
		e.preventDefault();
		return false;
	}
	return false;
}

dhtmlXTreeObject.prototype._drag = function(sourceHtmlObject, dhtmlObject,
		targetHtmlObject) {
	if (this._autoOpenTimer)
		clearTimeout(this._autoOpenTimer);

	if (!targetHtmlObject.parentObject) {
		targetHtmlObject = this.htmlNode.htmlNode.childNodes[0].childNodes[0].childNodes[1].childNodes[0];
		this.dadmodec = 0;
	}

	this._clearMove();
	var z = sourceHtmlObject.parentObject.treeNod;
	if ((z) && (z._clearMove))
		z._clearMove("");

	if ((!this.dragMove) || (this.dragMove())) {
		if ((!z) || (!z._clearMove) || (!z._dragged))
			var col = new Array(sourceHtmlObject.parentObject);
		else
			var col = z._dragged;
		var trg = targetHtmlObject.parentObject;

		for (var i = 0; i < col.length; i++) {
			var newID = this._moveNode(col[i], trg);
			if ((this.dadmodec) && (newID !== false))
				trg = this._globalIdStorageFind(newID, true, true);
			if ((newID) && (!this._sADnD))
				this.selectItem(newID, 0, 1);
		}

	}
	if (z)
		z._dragged = new Array();

}

dhtmlXTreeObject.prototype._dragIn = function(htmlObject, shtmlObject, x, y) {

	if (!this.dADTempOff)
		return 0;
	var fobj = shtmlObject.parentObject;
	var tobj = htmlObject.parentObject;
	if ((!tobj) && (this._ddronr))
		return;
	if (!this.callEvent("onDragIn", [fobj.id, tobj ? tobj.id : null,
					fobj.treeNod, this])) {
		if (tobj)
			this._autoScroll(htmlObject);
		return 0;
	}

	if (!tobj)
		this.allTree.className += " selectionBox";
	else {
		if (fobj.childNodes == null) {
			this._setMove(htmlObject, x, y);
			return htmlObject;
		}

		var stree = fobj.treeNod;
		for (var i = 0; i < stree._dragged.length; i++)
			if (this._checkPNodes(tobj, stree._dragged[i])) {
				this._autoScroll(htmlObject);
				return 0;
			}

		this._setMove(htmlObject, x, y);
		if (this._getOpenState(tobj) <= 0) {
			this._autoOpenId = tobj.id;
			this._autoOpenTimer = window.setTimeout(new callerFunction(
							this._autoOpenItem, this), 1000);
		}
	}

	return htmlObject;

}
dhtmlXTreeObject.prototype._autoOpenItem = function(e, treeObject) {
	treeObject.openItem(treeObject._autoOpenId);
};
dhtmlXTreeObject.prototype._dragOut = function(htmlObject) {
	this._clearMove();
	if (this._autoOpenTimer)
		clearTimeout(this._autoOpenTimer);
}

//#complex_move:01112006{

/**
 *     @desc: move item (inside of tree)
 *     @type:  public
 *     @param: itemId - item Id
 *     @param: mode - moving mode (left,up,down,item_child,item_sibling,item_sibling_next,up_strict,down_strict)
 *     @param: targetId - target Node in item_child and item_sibling mode
 *     @param: targetTree - used for moving between trees (optional)
 *     @return: node id
 *     @topic: 2
 */
dhtmlXTreeObject.prototype.moveItem = function(itemId, mode, targetId,
		targetTree) {
	var sNode = this._globalIdStorageFind(itemId);
	if (!sNode)
		return (0);

	switch (mode) {
		case "right" :
			alert('Not supported yet');
			break;
		case "item_child" :
			var tNode = (targetTree || this)._globalIdStorageFind(targetId);
			if (!tNode)
				return (0);
			(targetTree || this)._moveNodeTo(sNode, tNode, 0);
			break;
		case "item_sibling" :
			var tNode = (targetTree || this)._globalIdStorageFind(targetId);
			if (!tNode)
				return (0);
			(targetTree || this)._moveNodeTo(sNode, tNode.parentObject, tNode);
			break;
		case "item_sibling_next" :
			var tNode = (targetTree || this)._globalIdStorageFind(targetId);
			if (!tNode)
				return (0);
			if ((tNode.tr) && (tNode.tr.nextSibling)
					&& (tNode.tr.nextSibling.nodem))
				(targetTree || this)._moveNodeTo(sNode, tNode.parentObject,
						tNode.tr.nextSibling.nodem);
			else
				(targetTree || this)._moveNodeTo(sNode, tNode.parentObject);
			break;
		case "left" :
			if (sNode.parentObject.parentObject)
				this._moveNodeTo(sNode, sNode.parentObject.parentObject,
						sNode.parentObject);
			break;
		case "up" :
			var z = this._getPrevNode(sNode);
			if ((z == -1) || (!z.parentObject))
				return;
			this._moveNodeTo(sNode, z.parentObject, z);
			break;
		case "up_strict" :
			var z = this._getIndex(sNode);
			if (z != 0)
				this._moveNodeTo(sNode, sNode.parentObject,
						sNode.parentObject.childNodes[z - 1]);
			break;
		case "down_strict" :
			var z = this._getIndex(sNode);
			var count = sNode.parentObject.childsCount - 2;
			if (z == count)
				this._moveNodeTo(sNode, sNode.parentObject);
			else if (z < count)
				this._moveNodeTo(sNode, sNode.parentObject,
						sNode.parentObject.childNodes[z + 2]);
			break;
		case "down" :
			var z = this._getNextNode(this._lastChild(sNode));
			if ((z == -1) || (!z.parentObject))
				return;
			if (z.parentObject == sNode.parentObject)
				var z = this._getNextNode(z);
			if (z == -1) {
				this._moveNodeTo(sNode, sNode.parentObject);
			} else {
				if ((z == -1) || (!z.parentObject))
					return;
				this._moveNodeTo(sNode, z.parentObject, z);
			}
			break;
	}
	if (_isIE && _isIE < 8) {
		this.allTree.childNodes[0].border = "1";
		this.allTree.childNodes[0].border = "0";
	}
}

//#}

/**
 *     @desc: load xml for tree branch
 *     @param: id - id of parent node
 *     @param: src - path to xml, optional
 *     @type: private
 *     @topic: 1
 */
dhtmlXTreeObject.prototype._loadDynXML = function(id, src) {
	src = src || this.XMLsource;
	var sn = (new Date()).valueOf();
	this._ld_id = id;

	this.loadXML(src + getUrlSymbol(src) + "uid=" + sn + "&id="
			+ this._escape(id));
};

/**
 *     @desc: check possibility of drag-and-drop
 *     @type: private
 *     @param: itemId - draged node id
 *     @param: htmlObject - droped node object
 *     @param: shtmlObject - sourse node object
 *     @topic: 6
 */
dhtmlXTreeObject.prototype._checkPNodes = function(item1, item2) {
	if (item2 == item1)
		return 1
	if (item1.parentObject)
		return this._checkPNodes(item1.parentObject, item2);
	else
		return 0;
};

/**
 *   @desc:  prevent caching in IE  by adding random value to URL string
 *   @param: mode - enable/disable random value ( disabled by default )
 *   @type: public
 *   @topic: 0
 */
dhtmlXTreeObject.prototype.preventIECaching = function(mode) {
	this.no_cashe = convertStringToBoolean(mode);
	this.XMLLoader.rSeed = this.no_cashe;
}
dhtmlXTreeObject.prototype.preventIECashing = dhtmlXTreeObject.prototype.preventIECaching;

/**
 *     @desc: disable checkbox
 *     @param: itemId - Id of tree item
 *     @param: mode - 1 - on, 0 - off;
 *     @type: public
 *     @topic: 5
 */
dhtmlXTreeObject.prototype.disableCheckbox = function(itemId, mode) {
	if (typeof(itemId) != "object")
		var sNode = this._globalIdStorageFind(itemId, 0, 1);
	else
		var sNode = itemId;
	if (!sNode)
		return;
	sNode.dscheck = convertStringToBoolean(mode)
			? (((sNode.checkstate || 0) % 3) + 3)
			: ((sNode.checkstate > 2)
					? (sNode.checkstate - 3)
					: sNode.checkstate);
	this._setCheck(sNode);
	if (sNode.dscheck < 3)
		sNode.dscheck = false;
};

/**
 *     @desc: set escaping mode (used for escaping ID in requests)
 *     @param: mode - escaping mode ("utf8" for UTF escaping)
 *     @type: public
 *     @topic: 0
 */
dhtmlXTreeObject.prototype.setEscapingMode = function(mode) {
	this.utfesc = mode;
}

/**
 *     @desc: enable item highlighting (item text highlited on mouseover)
 *     @beforeInit: 1
 *     @param: mode - 1 - on, 0 - off;
 *     @type: public
 *     @topic: 0
 */
dhtmlXTreeObject.prototype.enableHighlighting = function(mode) {
	this.ehlt = true;
	this.ehlta = convertStringToBoolean(mode);
};

/**
 *     @desc: called on mouse out
 *     @type: private
 *     @topic: 0
 */
dhtmlXTreeObject.prototype._itemMouseOut = function() {
	var that = this.childNodes[3].parentObject;
	var tree = that.treeNod;
	tree.callEvent("onMouseOut", [that.id]);
	if (that.id == tree._l_onMSI)
		tree._l_onMSI = null;
	if (!tree.ehlta)
		return;
	that.span.className = that.span.className.replace("_lor", "");
}
/**
 *     @desc: called on mouse in
 *     @type: private
 *     @topic: 0
 */
dhtmlXTreeObject.prototype._itemMouseIn = function() {
	var that = this.childNodes[3].parentObject;
	var tree = that.treeNod;

	if (tree._l_onMSI != that.id)
		tree.callEvent("onMouseIn", [that.id]);
	tree._l_onMSI = that.id;
	if (!tree.ehlta)
		return;
	// added mouseon class by jarry 2010-06
	//that.span.innerHTML.className = "mouseonTreeRow";

	that.span.className = that.span.className.replace("_lor", "");
	that.span.className = that.span.className.replace(
			/((standart|selected)TreeRow)/, "$1_lor");
}

/**
 *     @desc: enable active images (clickable and dragable). By default only text part of the node is active
 *     @beforeInit: 1
 *     @param: mode - 1 - on, 0 - off;
 *     @type: public
 *     @topic: 0
 */
dhtmlXTreeObject.prototype.enableActiveImages = function(mode) {
	this._aimgs = convertStringToBoolean(mode);
};

/**
 *     @desc: focus item in tree (scroll to it if necessary)
 *     @type: public
 *     @param: itemId - item Id
 *     @topic: 0
 */
dhtmlXTreeObject.prototype.focusItem = function(itemId) {
	var sNode = this._globalIdStorageFind(itemId);
	if (!sNode)
		return (0);
	this._focusNode(sNode);
};

/**
 *     @desc: Returns the list of all children from all next levels of tree, separated by default delimiter.
 *     @param: itemId - id of node
 *     @type: public
 *     @return: list of all children items from all next levels of tree, separated by default delimiter
 *     @topic: 6
 */
dhtmlXTreeObject.prototype.getAllSubItems = function(itemId) {
	return this._getAllSubItems(itemId);
}

/**
 *     @desc: Returns the list of all items which doesn't have child nodes.
 *     @type: public
 *     @return: list of all items which doesn't have child nodes.
 *     @topic: 6
 */
dhtmlXTreeObject.prototype.getAllChildless = function() {
	return this._getAllScraggyItems(this.htmlNode);
}
dhtmlXTreeObject.prototype.getAllLeafs = dhtmlXTreeObject.prototype.getAllChildless;

/**
 *     @desc: Returns the list of all children from all next levels of tree, separated by default delimiter.
 *     @param: itemId - id of node
 *     @edition: Professional
 *     @type: private
 *     @topic: 6
 */
dhtmlXTreeObject.prototype._getAllScraggyItems = function(node) {
	var z = "";
	for (var i = 0; i < node.childsCount; i++) {
		if ((node.childNodes[i].unParsed)
				|| (node.childNodes[i].childsCount > 0)) {
			if (node.childNodes[i].unParsed)
				var zb = this._getAllScraggyItemsXML(
						node.childNodes[i].unParsed, 1);
			else
				var zb = this._getAllScraggyItems(node.childNodes[i])

			if (zb)
				if (z)
					z += this.dlmtr + zb;
				else
					z = zb;
		} else if (!z)
			z = node.childNodes[i].id;
		else
			z += this.dlmtr + node.childNodes[i].id;
	}
	return z;
};

/**
 *     @desc: Returns the list of all children from all next levels of tree, separated by default delimiter.
 *     @param: itemId - id of node
 *     @type: private
 *     @edition: Professional
 *     @topic: 6
 */
dhtmlXTreeObject.prototype._getAllFatItems = function(node) {
	var z = "";
	for (var i = 0; i < node.childsCount; i++) {
		if ((node.childNodes[i].unParsed)
				|| (node.childNodes[i].childsCount > 0)) {
			if (!z)
				z = node.childNodes[i].id;
			else
				z += this.dlmtr + node.childNodes[i].id;

			if (node.childNodes[i].unParsed)
				var zb = this
						._getAllFatItemsXML(node.childNodes[i].unParsed, 1);
			else
				var zb = this._getAllFatItems(node.childNodes[i])

			if (zb)
				z += this.dlmtr + zb;
		}
	}
	return z;
};

/**
 *     @desc: Returns the list of all items which have child nodes, separated by default delimiter.
 *     @type: public
 *     @return: list of all items which has child nodes, separated by default delimiter.
 *     @topic: 6
 */
dhtmlXTreeObject.prototype.getAllItemsWithKids = function() {
	return this._getAllFatItems(this.htmlNode);
}
dhtmlXTreeObject.prototype.getAllFatItems = dhtmlXTreeObject.prototype.getAllItemsWithKids;

/**
 *     @desc: return list of identificators of nodes with checked checkboxes, separated by default delimiter
 *     @type: public
 *     @return: list of ID of items with checked checkboxes, separated by default delimiter
 *     @topic: 5
 */
dhtmlXTreeObject.prototype.getAllChecked = function() {
	return this._getAllChecked("", "", 1);
}
/**
 *     @desc: return list of identificators of nodes with unchecked checkboxes, separated by default delimiter
 *     @type: public
 *     @return: list of ID of items with unchecked checkboxes, separated by default delimiter
 *     @topic: 5
 */
dhtmlXTreeObject.prototype.getAllUnchecked = function(itemId) {
	if (itemId)
		itemId = this._globalIdStorageFind(itemId);
	return this._getAllChecked(itemId, "", 0);
}

/**
 *     @desc: return list of identificators of nodes with third state checkboxes, separated by default delimiter
 *     @type: public
 *     @return: list of ID of items with third state checkboxes, separated by default delimiter
 *     @topic: 5
 */
dhtmlXTreeObject.prototype.getAllPartiallyChecked = function() {
	return this._getAllChecked("", "", 2);
}

/**
 *     @desc: return list of identificators of nodes with checked and third state checkboxes, separated by default delimiter
 *     @type: public
 *     @return: list of ID of items with checked and third state checkboxes, separated by default delimiter
 *     @topic: 5
 */
dhtmlXTreeObject.prototype.getAllCheckedBranches = function() {
	var temp = this._getAllChecked("", "", 1);
	if (temp != "")
		temp += this.dlmtr;
	return temp + this._getAllChecked("", "", 2);
}

/**
 *     @desc: return list of identificators of nodes with checked checkboxes
 *     @type: private
 *     @param: node - node object (optional, used by private methods)
 *     @param: list - initial identificators list (optional, used by private methods)
 *     @topic: 5
 */
dhtmlXTreeObject.prototype._getAllChecked = function(htmlNode, list, mode) {
	if (!htmlNode)
		htmlNode = this.htmlNode;

	if (htmlNode.checkstate == mode)
		if (!htmlNode.nocheckbox) {
			if (list)
				list += this.dlmtr + htmlNode.id;
			else
				list = htmlNode.id;
		}
	var j = htmlNode.childsCount;
	for (var i = 0; i < j; i++) {
		list = this._getAllChecked(htmlNode.childNodes[i], list, mode);
	};

	if (list)
		return list;
	else
		return "";
};

/**
 *     @desc: set individual item style
 *     @type: public
 *     @param: itemId - node id
 *     @param: styleString - valid CSS string
 *     @param: resetCss - reset current style : 0/1
 *     @topic: 2
 */
dhtmlXTreeObject.prototype.setItemStyle = function(itemId, style_string,
		resetCss) {
	var resetCss = resetCss || false;
	var temp = this._globalIdStorageFind(itemId);
	if (!temp)
		return 0;
	if (!temp.span.style.cssText)
		temp.span.setAttribute("style", temp.span.getAttribute("style") + "; "
						+ style_string);
	else
		temp.span.style.cssText = resetCss
				? style_string
				: temp.span.style.cssText + ";" + style_string;
}

/**
 *     @desc: enable draging item image with item text
 *     @type: public
 *     @param: mode - true/false
 *     @topic: 1
 */
dhtmlXTreeObject.prototype.enableImageDrag = function(mode) {
	this._itim_dg = convertStringToBoolean(mode);
}

/**
 *     @desc: set function called when tree item draged over another item
 *     @param: func - event handling function
 *     @type: depricated
 *     @edition: Professional
 *     @topic: 4
 *     @event: onDragIn
 *     @depricated: use grid.attachEvent("onDragIn",func); instead
 *     @eventdesc: Event raised when item draged other other dropable target
 *     @eventparam:  ID draged item
 *     @eventparam:  ID potencial drop landing
 *     @eventparam:  source object
 *     @eventparam:  target object
 *     @eventreturn: true - allow drop; false - deny drop;
 */
dhtmlXTreeObject.prototype.setOnDragIn = function(func) {
	this.attachEvent("onDragIn", func);
};

/**
 *     @desc: enable/disable auto scrolling while drag-and-drop
 *     @type: public
 *     @param: mode - enabled/disabled
 *     @topic: 0
 */
dhtmlXTreeObject.prototype.enableDragAndDropScrolling = function(mode) {
	this.autoScroll = convertStringToBoolean(mode);
};

dhtmlXTreeObject.prototype.setSkin = function(name) {
	var tmp = this.parentObject.className.replace(/dhxtree_[^ ]*/gi, "");
	this.parentObject.className = tmp + " dhxtree_" + name;
};

//tree
(function() {

	dhtmlx.extend_api("dhtmlXTreeObject", {
				_init : function(obj) {
					return [obj.parent, (obj.width || "100%"),
							(obj.height || "100%"), (obj.root_id || 0)];
				},
				auto_save_selection : "enableAutoSavingSelected",
				auto_tooltip : "enableAutoTooltips",
				checkbox : "enableCheckBoxes",
				checkbox_3_state : "enableThreeStateCheckboxes",
				checkbox_smart : "enableSmartCheckboxes",
				context_menu : "enableContextMenu",
				distributed_parsing : "enableDistributedParsing",
				drag : "enableDragAndDrop",
				drag_copy : "enableMercyDrag",
				drag_image : "enableImageDrag",
				drag_scroll : "enableDragAndDropScrolling",
				editor : "enableItemEditor",
				hover : "enableHighlighting",
				images : "enableTreeImages",
				image_fix : "enableIEImageFix",
				image_path : "setImagePath",
				lines : "enableTreeLines",
				loading_item : "enableLoadingItem",
				multiline : "enableMultiLineItems",
				multiselect : "enableMultiselection",
				navigation : "enableKeyboardNavigation",
				radio : "enableRadioButtons",
				radio_single : "enableSingleRadioMode",
				rtl : "enableRTL",
				search : "enableKeySearch",
				smart_parsing : "enableSmartXMLParsing",
				smart_rendering : "enableSmartRendering",
				text_icons : "enableTextSigns",
				xml : "loadXML",
				skin : "setSkin"
			}, {});

})();

//(c)dhtmlx ltd. www.dhtmlx.com
/**
 * SWFUpload: http://www.swfupload.org, http://swfupload.googlecode.com
 *
 * mmSWFUpload 1.0: Flash upload dialog - http://profandesign.se/swfupload/,  http://www.vinterwebb.se/
 *
 * SWFUpload is (c) 2006-2007 Lars Huring, Olov Nilz?n and Mammon Media and is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * SWFUpload 2 is (c) 2007-2008 Jake Roberts and is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */


/* ******************* */
/* Constructor & Init  */
/* ******************* */
var SWFUpload;

if (SWFUpload == undefined) {
	SWFUpload = function (settings) {
		this.initSWFUpload(settings);
	};
}

SWFUpload.prototype.initSWFUpload = function (settings) {
	try {
		this.customSettings = {};	// A container where developers can place their own settings associated with this instance.
		this.settings = settings;
		this.eventQueue = [];
		this.movieName = "SWFUpload_" + SWFUpload.movieCount++;
		this.movieElement = null;


		// Setup global control tracking
		SWFUpload.instances[this.movieName] = this;

		// Load the settings.  Load the Flash movie.
		this.initSettings();
		this.loadFlash();
		this.displayDebugInfo();
	} catch (ex) {
		delete SWFUpload.instances[this.movieName];
		throw ex;
	}
};

/* *************** */
/* Static Members  */
/* *************** */
SWFUpload.instances = {};
SWFUpload.movieCount = 0;
SWFUpload.version = "2.2.0 2009-03-25";
SWFUpload.QUEUE_ERROR = {
	QUEUE_LIMIT_EXCEEDED	  		: -100,
	FILE_EXCEEDS_SIZE_LIMIT  		: -110,
	ZERO_BYTE_FILE			  		: -120,
	INVALID_FILETYPE		  		: -130
};
SWFUpload.UPLOAD_ERROR = {
	HTTP_ERROR				  		: -200,
	MISSING_UPLOAD_URL	      		: -210,
	IO_ERROR				  		: -220,
	SECURITY_ERROR			  		: -230,
	UPLOAD_LIMIT_EXCEEDED	  		: -240,
	UPLOAD_FAILED			  		: -250,
	SPECIFIED_FILE_ID_NOT_FOUND		: -260,
	FILE_VALIDATION_FAILED	  		: -270,
	FILE_CANCELLED			  		: -280,
	UPLOAD_STOPPED					: -290
};
SWFUpload.FILE_STATUS = {
	QUEUED		 : -1,
	IN_PROGRESS	 : -2,
	ERROR		 : -3,
	COMPLETE	 : -4,
	CANCELLED	 : -5
};
SWFUpload.BUTTON_ACTION = {
	SELECT_FILE  : -100,
	SELECT_FILES : -110,
	START_UPLOAD : -120
};
SWFUpload.CURSOR = {
	ARROW : -1,
	HAND : -2
};
SWFUpload.WINDOW_MODE = {
	WINDOW : "window",
	TRANSPARENT : "transparent",
	OPAQUE : "opaque"
};

// Private: takes a URL, determines if it is relative and converts to an absolute URL
// using the current site. Only processes the URL if it can, otherwise returns the URL untouched
SWFUpload.completeURL = function(url) {
	if (typeof(url) !== "string" || url.match(/^https?:\/\//i) || url.match(/^\//)) {
		return url;
	}
	
	var currentURL = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "");
	
	var indexSlash = window.location.pathname.lastIndexOf("/");
	if (indexSlash <= 0) {
		path = "/";
	} else {
		path = window.location.pathname.substr(0, indexSlash) + "/";
	}
	
	return /*currentURL +*/ path + url;
	
};


/* ******************** */
/* Instance Members  */
/* ******************** */

// Private: initSettings ensures that all the
// settings are set, getting a default value if one was not assigned.
SWFUpload.prototype.initSettings = function () {
	this.ensureDefault = function (settingName, defaultValue) {
		this.settings[settingName] = (this.settings[settingName] == undefined) ? defaultValue : this.settings[settingName];
	};
	
	// Upload backend settings
	this.ensureDefault("upload_url", "");
	this.ensureDefault("preserve_relative_urls", false);
	this.ensureDefault("file_post_name", "Filedata");
	this.ensureDefault("post_params", {});
	this.ensureDefault("use_query_string", false);
	this.ensureDefault("requeue_on_error", false);
	this.ensureDefault("http_success", []);
	this.ensureDefault("assume_success_timeout", 0);
	
	// File Settings
	this.ensureDefault("file_types", "*.*");
	this.ensureDefault("file_types_description", "All Files");
	this.ensureDefault("file_size_limit", 0);	// Default zero means "unlimited"
	this.ensureDefault("file_upload_limit", 0);
	this.ensureDefault("file_queue_limit", 0);

	// Flash Settings
	this.ensureDefault("flash_url", "swfupload.swf");
	this.ensureDefault("prevent_swf_caching", true);
	
	// Button Settings
	this.ensureDefault("button_image_url", "");
	this.ensureDefault("button_width", 1);
	this.ensureDefault("button_height", 1);
	this.ensureDefault("button_text", "");
	this.ensureDefault("button_text_style", "color: #000000; font-size: 16pt;");
	this.ensureDefault("button_text_top_padding", 0);
	this.ensureDefault("button_text_left_padding", 0);
	this.ensureDefault("button_action", SWFUpload.BUTTON_ACTION.SELECT_FILES);
	this.ensureDefault("button_disabled", false);
	this.ensureDefault("button_placeholder_id", "");
	this.ensureDefault("button_placeholder", null);
	this.ensureDefault("button_cursor", SWFUpload.CURSOR.ARROW);
	this.ensureDefault("button_window_mode", SWFUpload.WINDOW_MODE.WINDOW);
	
	// Debug Settings
	this.ensureDefault("debug", false);
	this.settings.debug_enabled = this.settings.debug;	// Here to maintain v2 API
	
	// Event Handlers
	this.settings.return_upload_start_handler = this.returnUploadStart;
	this.ensureDefault("swfupload_loaded_handler", null);
	this.ensureDefault("file_dialog_start_handler", null);
	this.ensureDefault("file_queued_handler", null);
	this.ensureDefault("file_queue_error_handler", null);
	this.ensureDefault("file_dialog_complete_handler", null);
	
	this.ensureDefault("upload_start_handler", null);
	this.ensureDefault("upload_progress_handler", null);
	this.ensureDefault("upload_error_handler", null);
	this.ensureDefault("upload_success_handler", null);
	this.ensureDefault("upload_complete_handler", null);
	
	this.ensureDefault("debug_handler", this.debugMessage);

	this.ensureDefault("custom_settings", {});

	// Other settings
	this.customSettings = this.settings.custom_settings;
	
	// Update the flash url if needed
	if (!!this.settings.prevent_swf_caching) {
		this.settings.flash_url = this.settings.flash_url + (this.settings.flash_url.indexOf("?") < 0 ? "?" : "&") + "preventswfcaching=" + new Date().getTime();
	}
	
	if (!this.settings.preserve_relative_urls) {
		//this.settings.flash_url = SWFUpload.completeURL(this.settings.flash_url);	// Don't need to do this one since flash doesn't look at it
		this.settings.upload_url = SWFUpload.completeURL(this.settings.upload_url);
		this.settings.button_image_url = SWFUpload.completeURL(this.settings.button_image_url);
	}
	
	delete this.ensureDefault;
};

// Private: loadFlash replaces the button_placeholder element with the flash movie.
SWFUpload.prototype.loadFlash = function () {
	var targetElement, tempParent;

	// Make sure an element with the ID we are going to use doesn't already exist
	if (document.getElementById(this.movieName) !== null) {
		throw "ID " + this.movieName + " is already in use. The Flash Object could not be added";
	}

	// Get the element where we will be placing the flash movie
	targetElement = document.getElementById(this.settings.button_placeholder_id) || this.settings.button_placeholder;

	if (targetElement == undefined) {
		throw "Could not find the placeholder element: " + this.settings.button_placeholder_id;
	}

	// Append the container and load the flash
	tempParent = document.createElement("div");
	tempParent.innerHTML = this.getFlashHTML();	// Using innerHTML is non-standard but the only sensible way to dynamically add Flash in IE (and maybe other browsers)
	targetElement.parentNode.replaceChild(tempParent.firstChild, targetElement);

	// Fix IE Flash/Form bug
	if (window[this.movieName] == undefined) {
		window[this.movieName] = this.getMovieElement();
	}
	
};

// Private: getFlashHTML generates the object tag needed to embed the flash in to the document
SWFUpload.prototype.getFlashHTML = function () {
	// Flash Satay object syntax: http://www.alistapart.com/articles/flashsatay
	return ['<object id="', this.movieName, '" type="application/x-shockwave-flash" data="', this.settings.flash_url, '" width="', this.settings.button_width, '" height="', this.settings.button_height, '" class="swfupload">',
				'<param name="wmode" value="', this.settings.button_window_mode, '" />',
				'<param name="movie" value="', this.settings.flash_url, '" />',
				'<param name="quality" value="high" />',
				'<param name="menu" value="false" />',
				'<param name="allowScriptAccess" value="always" />',
				'<param name="flashvars" value="' + this.getFlashVars() + '" />',
				'</object>'].join("");
};

// Private: getFlashVars builds the parameter string that will be passed
// to flash in the flashvars param.
SWFUpload.prototype.getFlashVars = function () {
	// Build a string from the post param object
	var paramString = this.buildParamString();
	var httpSuccessString = this.settings.http_success.join(",");
	
	// Build the parameter string
	return ["movieName=", encodeURIComponent(this.movieName),
			"&amp;uploadURL=", encodeURIComponent(this.settings.upload_url),
			"&amp;useQueryString=", encodeURIComponent(this.settings.use_query_string),
			"&amp;requeueOnError=", encodeURIComponent(this.settings.requeue_on_error),
			"&amp;httpSuccess=", encodeURIComponent(httpSuccessString),
			"&amp;assumeSuccessTimeout=", encodeURIComponent(this.settings.assume_success_timeout),
			"&amp;params=", encodeURIComponent(paramString),
			"&amp;filePostName=", encodeURIComponent(this.settings.file_post_name),
			"&amp;fileTypes=", encodeURIComponent(this.settings.file_types),
			"&amp;fileTypesDescription=", encodeURIComponent(this.settings.file_types_description),
			"&amp;fileSizeLimit=", encodeURIComponent(this.settings.file_size_limit),
			"&amp;fileUploadLimit=", encodeURIComponent(this.settings.file_upload_limit),
			"&amp;fileQueueLimit=", encodeURIComponent(this.settings.file_queue_limit),
			"&amp;debugEnabled=", encodeURIComponent(this.settings.debug_enabled),
			"&amp;buttonImageURL=", encodeURIComponent(this.settings.button_image_url),
			"&amp;buttonWidth=", encodeURIComponent(this.settings.button_width),
			"&amp;buttonHeight=", encodeURIComponent(this.settings.button_height),
			"&amp;buttonText=", encodeURIComponent(this.settings.button_text),
			"&amp;buttonTextTopPadding=", encodeURIComponent(this.settings.button_text_top_padding),
			"&amp;buttonTextLeftPadding=", encodeURIComponent(this.settings.button_text_left_padding),
			"&amp;buttonTextStyle=", encodeURIComponent(this.settings.button_text_style),
			"&amp;buttonAction=", encodeURIComponent(this.settings.button_action),
			"&amp;buttonDisabled=", encodeURIComponent(this.settings.button_disabled),
			"&amp;buttonCursor=", encodeURIComponent(this.settings.button_cursor)
		].join("");
};

// Public: getMovieElement retrieves the DOM reference to the Flash element added by SWFUpload
// The element is cached after the first lookup
SWFUpload.prototype.getMovieElement = function () {
	if (this.movieElement == undefined) {
		this.movieElement = document.getElementById(this.movieName);
	}

	if (this.movieElement === null) {
		throw "Could not find Flash element";
	}
	
	return this.movieElement;
};

// Private: buildParamString takes the name/value pairs in the post_params setting object
// and joins them up in to a string formatted "name=value&amp;name=value"
SWFUpload.prototype.buildParamString = function () {
	var postParams = this.settings.post_params;
	var paramStringPairs = [];

	if (typeof(postParams) === "object") {
		for (var name in postParams) {
			if (postParams.hasOwnProperty(name)) {
				paramStringPairs.push(encodeURIComponent(name.toString()) + "=" + encodeURIComponent(postParams[name].toString()));
			}
		}
	}

	return paramStringPairs.join("&amp;");
};

// Public: Used to remove a SWFUpload instance from the page. This method strives to remove
// all references to the SWF, and other objects so memory is properly freed.
// Returns true if everything was destroyed. Returns a false if a failure occurs leaving SWFUpload in an inconsistant state.
// Credits: Major improvements provided by steffen
SWFUpload.prototype.destroy = function () {
	try {
		// Make sure Flash is done before we try to remove it
		this.cancelUpload(null, false);
		

		// Remove the SWFUpload DOM nodes
		var movieElement = null;
		movieElement = this.getMovieElement();
		
		if (movieElement && typeof(movieElement.CallFunction) === "unknown") { // We only want to do this in IE
			// Loop through all the movie's properties and remove all function references (DOM/JS IE 6/7 memory leak workaround)
			for (var i in movieElement) {
				try {
					if (typeof(movieElement[i]) === "function") {
						movieElement[i] = null;
					}
				} catch (ex1) {}
			}

			// Remove the Movie Element from the page
			try {
				movieElement.parentNode.removeChild(movieElement);
			} catch (ex) {}
		}
		
		// Remove IE form fix reference
		window[this.movieName] = null;

		// Destroy other references
		SWFUpload.instances[this.movieName] = null;
		delete SWFUpload.instances[this.movieName];

		this.movieElement = null;
		this.settings = null;
		this.customSettings = null;
		this.eventQueue = null;
		this.movieName = null;
		
		
		return true;
	} catch (ex2) {
		return false;
	}
};


// Public: displayDebugInfo prints out settings and configuration
// information about this SWFUpload instance.
// This function (and any references to it) can be deleted when placing
// SWFUpload in production.
SWFUpload.prototype.displayDebugInfo = function () {
	this.debug(
		[
			"---SWFUpload Instance Info---\n",
			"Version: ", SWFUpload.version, "\n",
			"Movie Name: ", this.movieName, "\n",
			"Settings:\n",
			"\t", "upload_url:               ", this.settings.upload_url, "\n",
			"\t", "flash_url:                ", this.settings.flash_url, "\n",
			"\t", "use_query_string:         ", this.settings.use_query_string.toString(), "\n",
			"\t", "requeue_on_error:         ", this.settings.requeue_on_error.toString(), "\n",
			"\t", "http_success:             ", this.settings.http_success.join(", "), "\n",
			"\t", "assume_success_timeout:   ", this.settings.assume_success_timeout, "\n",
			"\t", "file_post_name:           ", this.settings.file_post_name, "\n",
			"\t", "post_params:              ", this.settings.post_params.toString(), "\n",
			"\t", "file_types:               ", this.settings.file_types, "\n",
			"\t", "file_types_description:   ", this.settings.file_types_description, "\n",
			"\t", "file_size_limit:          ", this.settings.file_size_limit, "\n",
			"\t", "file_upload_limit:        ", this.settings.file_upload_limit, "\n",
			"\t", "file_queue_limit:         ", this.settings.file_queue_limit, "\n",
			"\t", "debug:                    ", this.settings.debug.toString(), "\n",

			"\t", "prevent_swf_caching:      ", this.settings.prevent_swf_caching.toString(), "\n",

			"\t", "button_placeholder_id:    ", this.settings.button_placeholder_id.toString(), "\n",
			"\t", "button_placeholder:       ", (this.settings.button_placeholder ? "Set" : "Not Set"), "\n",
			"\t", "button_image_url:         ", this.settings.button_image_url.toString(), "\n",
			"\t", "button_width:             ", this.settings.button_width.toString(), "\n",
			"\t", "button_height:            ", this.settings.button_height.toString(), "\n",
			"\t", "button_text:              ", this.settings.button_text.toString(), "\n",
			"\t", "button_text_style:        ", this.settings.button_text_style.toString(), "\n",
			"\t", "button_text_top_padding:  ", this.settings.button_text_top_padding.toString(), "\n",
			"\t", "button_text_left_padding: ", this.settings.button_text_left_padding.toString(), "\n",
			"\t", "button_action:            ", this.settings.button_action.toString(), "\n",
			"\t", "button_disabled:          ", this.settings.button_disabled.toString(), "\n",

			"\t", "custom_settings:          ", this.settings.custom_settings.toString(), "\n",
			"Event Handlers:\n",
			"\t", "swfupload_loaded_handler assigned:  ", (typeof this.settings.swfupload_loaded_handler === "function").toString(), "\n",
			"\t", "file_dialog_start_handler assigned: ", (typeof this.settings.file_dialog_start_handler === "function").toString(), "\n",
			"\t", "file_queued_handler assigned:       ", (typeof this.settings.file_queued_handler === "function").toString(), "\n",
			"\t", "file_queue_error_handler assigned:  ", (typeof this.settings.file_queue_error_handler === "function").toString(), "\n",
			"\t", "upload_start_handler assigned:      ", (typeof this.settings.upload_start_handler === "function").toString(), "\n",
			"\t", "upload_progress_handler assigned:   ", (typeof this.settings.upload_progress_handler === "function").toString(), "\n",
			"\t", "upload_error_handler assigned:      ", (typeof this.settings.upload_error_handler === "function").toString(), "\n",
			"\t", "upload_success_handler assigned:    ", (typeof this.settings.upload_success_handler === "function").toString(), "\n",
			"\t", "upload_complete_handler assigned:   ", (typeof this.settings.upload_complete_handler === "function").toString(), "\n",
			"\t", "debug_handler assigned:             ", (typeof this.settings.debug_handler === "function").toString(), "\n"
		].join("")
	);
};

/* Note: addSetting and getSetting are no longer used by SWFUpload but are included
	the maintain v2 API compatibility
*/
// Public: (Deprecated) addSetting adds a setting value. If the value given is undefined or null then the default_value is used.
SWFUpload.prototype.addSetting = function (name, value, default_value) {
    if (value == undefined) {
        return (this.settings[name] = default_value);
    } else {
        return (this.settings[name] = value);
	}
};

// Public: (Deprecated) getSetting gets a setting. Returns an empty string if the setting was not found.
SWFUpload.prototype.getSetting = function (name) {
    if (this.settings[name] != undefined) {
        return this.settings[name];
	}

    return "";
};



// Private: callFlash handles function calls made to the Flash element.
// Calls are made with a setTimeout for some functions to work around
// bugs in the ExternalInterface library.
SWFUpload.prototype.callFlash = function (functionName, argumentArray) {
	argumentArray = argumentArray || [];
	
	var movieElement = this.getMovieElement();
	var returnValue, returnString;

	// Flash's method if calling ExternalInterface methods (code adapted from MooTools).
	try {
		returnString = movieElement.CallFunction('<invoke name="' + functionName + '" returntype="javascript">' + __flash__argumentsToXML(argumentArray, 0) + '</invoke>');
		returnValue = eval(returnString);
	} catch (ex) {
		throw "Call to " + functionName + " failed";
	}
	
	// Unescape file post param values
	if (returnValue != undefined && typeof returnValue.post === "object") {
		returnValue = this.unescapeFilePostParams(returnValue);
	}

	return returnValue;
};

/* *****************************
	-- Flash control methods --
	Your UI should use these
	to operate SWFUpload
   ***************************** */

// WARNING: this function does not work in Flash Player 10
// Public: selectFile causes a File Selection Dialog window to appear.  This
// dialog only allows 1 file to be selected.
SWFUpload.prototype.selectFile = function () {
	this.callFlash("SelectFile");
};

// WARNING: this function does not work in Flash Player 10
// Public: selectFiles causes a File Selection Dialog window to appear/ This
// dialog allows the user to select any number of files
// Flash Bug Warning: Flash limits the number of selectable files based on the combined length of the file names.
// If the selection name length is too long the dialog will fail in an unpredictable manner.  There is no work-around
// for this bug.
SWFUpload.prototype.selectFiles = function () {
	this.callFlash("SelectFiles");
};


// Public: startUpload starts uploading the first file in the queue unless
// the optional parameter 'fileID' specifies the ID 
SWFUpload.prototype.startUpload = function (fileID) {
	this.callFlash("StartUpload", [fileID]);
};

// Public: cancelUpload cancels any queued file.  The fileID parameter may be the file ID or index.
// If you do not specify a fileID the current uploading file or first file in the queue is cancelled.
// If you do not want the uploadError event to trigger you can specify false for the triggerErrorEvent parameter.
SWFUpload.prototype.cancelUpload = function (fileID, triggerErrorEvent) {
	if (triggerErrorEvent !== false) {
		triggerErrorEvent = true;
	}
	this.callFlash("CancelUpload", [fileID, triggerErrorEvent]);
};

// Public: stopUpload stops the current upload and requeues the file at the beginning of the queue.
// If nothing is currently uploading then nothing happens.
SWFUpload.prototype.stopUpload = function () {
	this.callFlash("StopUpload");
};

/* ************************
 * Settings methods
 *   These methods change the SWFUpload settings.
 *   SWFUpload settings should not be changed directly on the settings object
 *   since many of the settings need to be passed to Flash in order to take
 *   effect.
 * *********************** */

// Public: getStats gets the file statistics object.
SWFUpload.prototype.getStats = function () {
	return this.callFlash("GetStats");
};

// Public: setStats changes the SWFUpload statistics.  You shouldn't need to 
// change the statistics but you can.  Changing the statistics does not
// affect SWFUpload accept for the successful_uploads count which is used
// by the upload_limit setting to determine how many files the user may upload.
SWFUpload.prototype.setStats = function (statsObject) {
	this.callFlash("SetStats", [statsObject]);
};

// Public: getFile retrieves a File object by ID or Index.  If the file is
// not found then 'null' is returned.
SWFUpload.prototype.getFile = function (fileID) {
	if (typeof(fileID) === "number") {
		return this.callFlash("GetFileByIndex", [fileID]);
	} else {
		return this.callFlash("GetFile", [fileID]);
	}
};

// Public: addFileParam sets a name/value pair that will be posted with the
// file specified by the Files ID.  If the name already exists then the
// exiting value will be overwritten.
SWFUpload.prototype.addFileParam = function (fileID, name, value) {
	return this.callFlash("AddFileParam", [fileID, name, value]);
};

// Public: removeFileParam removes a previously set (by addFileParam) name/value
// pair from the specified file.
SWFUpload.prototype.removeFileParam = function (fileID, name) {
	this.callFlash("RemoveFileParam", [fileID, name]);
};

// Public: setUploadUrl changes the upload_url setting.
SWFUpload.prototype.setUploadURL = function (url) {
	this.settings.upload_url = url.toString();
	this.callFlash("SetUploadURL", [url]);
};

// Public: setPostParams changes the post_params setting
SWFUpload.prototype.setPostParams = function (paramsObject) {
	this.settings.post_params = paramsObject;
	this.callFlash("SetPostParams", [paramsObject]);
};

// Public: addPostParam adds post name/value pair.  Each name can have only one value.
SWFUpload.prototype.addPostParam = function (name, value) {
	this.settings.post_params[name] = value;
	this.callFlash("SetPostParams", [this.settings.post_params]);
};

// Public: removePostParam deletes post name/value pair.
SWFUpload.prototype.removePostParam = function (name) {
	delete this.settings.post_params[name];
	this.callFlash("SetPostParams", [this.settings.post_params]);
};

// Public: setFileTypes changes the file_types setting and the file_types_description setting
SWFUpload.prototype.setFileTypes = function (types, description) {
	this.settings.file_types = types;
	this.settings.file_types_description = description;
	this.callFlash("SetFileTypes", [types, description]);
};

// Public: setFileSizeLimit changes the file_size_limit setting
SWFUpload.prototype.setFileSizeLimit = function (fileSizeLimit) {
	this.settings.file_size_limit = fileSizeLimit;
	this.callFlash("SetFileSizeLimit", [fileSizeLimit]);
};

// Public: setFileUploadLimit changes the file_upload_limit setting
SWFUpload.prototype.setFileUploadLimit = function (fileUploadLimit) {
	this.settings.file_upload_limit = fileUploadLimit;
	this.callFlash("SetFileUploadLimit", [fileUploadLimit]);
};

// Public: setFileQueueLimit changes the file_queue_limit setting
SWFUpload.prototype.setFileQueueLimit = function (fileQueueLimit) {
	this.settings.file_queue_limit = fileQueueLimit;
	this.callFlash("SetFileQueueLimit", [fileQueueLimit]);
};

// Public: setFilePostName changes the file_post_name setting
SWFUpload.prototype.setFilePostName = function (filePostName) {
	this.settings.file_post_name = filePostName;
	this.callFlash("SetFilePostName", [filePostName]);
};

// Public: setUseQueryString changes the use_query_string setting
SWFUpload.prototype.setUseQueryString = function (useQueryString) {
	this.settings.use_query_string = useQueryString;
	this.callFlash("SetUseQueryString", [useQueryString]);
};

// Public: setRequeueOnError changes the requeue_on_error setting
SWFUpload.prototype.setRequeueOnError = function (requeueOnError) {
	this.settings.requeue_on_error = requeueOnError;
	this.callFlash("SetRequeueOnError", [requeueOnError]);
};

// Public: setHTTPSuccess changes the http_success setting
SWFUpload.prototype.setHTTPSuccess = function (http_status_codes) {
	if (typeof http_status_codes === "string") {
		http_status_codes = http_status_codes.replace(" ", "").split(",");
	}
	
	this.settings.http_success = http_status_codes;
	this.callFlash("SetHTTPSuccess", [http_status_codes]);
};

// Public: setHTTPSuccess changes the http_success setting
SWFUpload.prototype.setAssumeSuccessTimeout = function (timeout_seconds) {
	this.settings.assume_success_timeout = timeout_seconds;
	this.callFlash("SetAssumeSuccessTimeout", [timeout_seconds]);
};

// Public: setDebugEnabled changes the debug_enabled setting
SWFUpload.prototype.setDebugEnabled = function (debugEnabled) {
	this.settings.debug_enabled = debugEnabled;
	this.callFlash("SetDebugEnabled", [debugEnabled]);
};

// Public: setButtonImageURL loads a button image sprite
SWFUpload.prototype.setButtonImageURL = function (buttonImageURL) {
	if (buttonImageURL == undefined) {
		buttonImageURL = "";
	}
	
	this.settings.button_image_url = buttonImageURL;
	this.callFlash("SetButtonImageURL", [buttonImageURL]);
};

// Public: setButtonDimensions resizes the Flash Movie and button
SWFUpload.prototype.setButtonDimensions = function (width, height) {
	this.settings.button_width = width;
	this.settings.button_height = height;
	
	var movie = this.getMovieElement();
	if (movie != undefined) {
		movie.style.width = width + "px";
		movie.style.height = height + "px";
	}
	
	this.callFlash("SetButtonDimensions", [width, height]);
};
// Public: setButtonText Changes the text overlaid on the button
SWFUpload.prototype.setButtonText = function (html) {
	this.settings.button_text = html;
	this.callFlash("SetButtonText", [html]);
};
// Public: setButtonTextPadding changes the top and left padding of the text overlay
SWFUpload.prototype.setButtonTextPadding = function (left, top) {
	this.settings.button_text_top_padding = top;
	this.settings.button_text_left_padding = left;
	this.callFlash("SetButtonTextPadding", [left, top]);
};

// Public: setButtonTextStyle changes the CSS used to style the HTML/Text overlaid on the button
SWFUpload.prototype.setButtonTextStyle = function (css) {
	this.settings.button_text_style = css;
	this.callFlash("SetButtonTextStyle", [css]);
};
// Public: setButtonDisabled disables/enables the button
SWFUpload.prototype.setButtonDisabled = function (isDisabled) {
	this.settings.button_disabled = isDisabled;
	this.callFlash("SetButtonDisabled", [isDisabled]);
};
// Public: setButtonAction sets the action that occurs when the button is clicked
SWFUpload.prototype.setButtonAction = function (buttonAction) {
	this.settings.button_action = buttonAction;
	this.callFlash("SetButtonAction", [buttonAction]);
};

// Public: setButtonCursor changes the mouse cursor displayed when hovering over the button
SWFUpload.prototype.setButtonCursor = function (cursor) {
	this.settings.button_cursor = cursor;
	this.callFlash("SetButtonCursor", [cursor]);
};

/* *******************************
	Flash Event Interfaces
	These functions are used by Flash to trigger the various
	events.
	
	All these functions a Private.
	
	Because the ExternalInterface library is buggy the event calls
	are added to a queue and the queue then executed by a setTimeout.
	This ensures that events are executed in a determinate order and that
	the ExternalInterface bugs are avoided.
******************************* */

SWFUpload.prototype.queueEvent = function (handlerName, argumentArray) {
	// Warning: Don't call this.debug inside here or you'll create an infinite loop
	
	if (argumentArray == undefined) {
		argumentArray = [];
	} else if (!(argumentArray instanceof Array)) {
		argumentArray = [argumentArray];
	}
	
	var self = this;
	if (typeof this.settings[handlerName] === "function") {
		// Queue the event
		this.eventQueue.push(function () {
			this.settings[handlerName].apply(this, argumentArray);
		});
		
		// Execute the next queued event
		setTimeout(function () {
			self.executeNextEvent();
		}, 0);
		
	} else if (this.settings[handlerName] !== null) {
		throw "Event handler " + handlerName + " is unknown or is not a function";
	}
};

// Private: Causes the next event in the queue to be executed.  Since events are queued using a setTimeout
// we must queue them in order to garentee that they are executed in order.
SWFUpload.prototype.executeNextEvent = function () {
	// Warning: Don't call this.debug inside here or you'll create an infinite loop

	var  f = this.eventQueue ? this.eventQueue.shift() : null;
	if (typeof(f) === "function") {
		f.apply(this);
	}
};

// Private: unescapeFileParams is part of a workaround for a flash bug where objects passed through ExternalInterface cannot have
// properties that contain characters that are not valid for JavaScript identifiers. To work around this
// the Flash Component escapes the parameter names and we must unescape again before passing them along.
SWFUpload.prototype.unescapeFilePostParams = function (file) {
	var reg = /[$]([0-9a-f]{4})/i;
	var unescapedPost = {};
	var uk;

	if (file != undefined) {
		for (var k in file.post) {
			if (file.post.hasOwnProperty(k)) {
				uk = k;
				var match;
				while ((match = reg.exec(uk)) !== null) {
					uk = uk.replace(match[0], String.fromCharCode(parseInt("0x" + match[1], 16)));
				}
				unescapedPost[uk] = file.post[k];
			}
		}

		file.post = unescapedPost;
	}

	return file;
};

// Private: Called by Flash to see if JS can call in to Flash (test if External Interface is working)
SWFUpload.prototype.testExternalInterface = function () {
	try {
		return this.callFlash("TestExternalInterface");
	} catch (ex) {
		return false;
	}
};

// Private: This event is called by Flash when it has finished loading. Don't modify this.
// Use the swfupload_loaded_handler event setting to execute custom code when SWFUpload has loaded.
SWFUpload.prototype.flashReady = function () {
	// Check that the movie element is loaded correctly with its ExternalInterface methods defined
	var movieElement = this.getMovieElement();

	if (!movieElement) {
		this.debug("Flash called back ready but the flash movie can't be found.");
		return;
	}

	this.cleanUp(movieElement);
	
	this.queueEvent("swfupload_loaded_handler");
};

// Private: removes Flash added fuctions to the DOM node to prevent memory leaks in IE.
// This function is called by Flash each time the ExternalInterface functions are created.
SWFUpload.prototype.cleanUp = function (movieElement) {
	// Pro-actively unhook all the Flash functions
	try {
		if (this.movieElement && typeof(movieElement.CallFunction) === "unknown") { // We only want to do this in IE
			this.debug("Removing Flash functions hooks (this should only run in IE and should prevent memory leaks)");
			for (var key in movieElement) {
				try {
					if (typeof(movieElement[key]) === "function") {
						movieElement[key] = null;
					}
				} catch (ex) {
				}
			}
		}
	} catch (ex1) {
	
	}

	// Fix Flashes own cleanup code so if the SWFMovie was removed from the page
	// it doesn't display errors.
	window["__flash__removeCallback"] = function (instance, name) {
		try {
			if (instance) {
				instance[name] = null;
			}
		} catch (flashEx) {
		
		}
	};

};


/* This is a chance to do something before the browse window opens */
SWFUpload.prototype.fileDialogStart = function () {
	this.queueEvent("file_dialog_start_handler");
};


/* Called when a file is successfully added to the queue. */
SWFUpload.prototype.fileQueued = function (file) {
	file = this.unescapeFilePostParams(file);
	this.queueEvent("file_queued_handler", file);
};


/* Handle errors that occur when an attempt to queue a file fails. */
SWFUpload.prototype.fileQueueError = function (file, errorCode, message) {
	file = this.unescapeFilePostParams(file);
	this.queueEvent("file_queue_error_handler", [file, errorCode, message]);
};

/* Called after the file dialog has closed and the selected files have been queued.
	You could call startUpload here if you want the queued files to begin uploading immediately. */
SWFUpload.prototype.fileDialogComplete = function (numFilesSelected, numFilesQueued, numFilesInQueue) {
	this.queueEvent("file_dialog_complete_handler", [numFilesSelected, numFilesQueued, numFilesInQueue]);
};

SWFUpload.prototype.uploadStart = function (file) {
	file = this.unescapeFilePostParams(file);
	this.queueEvent("return_upload_start_handler", file);
};

SWFUpload.prototype.returnUploadStart = function (file) {
	var returnValue;
	if (typeof this.settings.upload_start_handler === "function") {
		file = this.unescapeFilePostParams(file);
		returnValue = this.settings.upload_start_handler.call(this, file);
	} else if (this.settings.upload_start_handler != undefined) {
		throw "upload_start_handler must be a function";
	}

	// Convert undefined to true so if nothing is returned from the upload_start_handler it is
	// interpretted as 'true'.
	if (returnValue === undefined) {
		returnValue = true;
	}
	
	returnValue = !!returnValue;
	
	this.callFlash("ReturnUploadStart", [returnValue]);
};



SWFUpload.prototype.uploadProgress = function (file, bytesComplete, bytesTotal) {
	file = this.unescapeFilePostParams(file);
	this.queueEvent("upload_progress_handler", [file, bytesComplete, bytesTotal]);
};

SWFUpload.prototype.uploadError = function (file, errorCode, message) {
	file = this.unescapeFilePostParams(file);
	this.queueEvent("upload_error_handler", [file, errorCode, message]);
};

SWFUpload.prototype.uploadSuccess = function (file, serverData, responseReceived) {
	file = this.unescapeFilePostParams(file);
	this.queueEvent("upload_success_handler", [file, serverData, responseReceived]);
};

SWFUpload.prototype.uploadComplete = function (file) {
	file = this.unescapeFilePostParams(file);
	this.queueEvent("upload_complete_handler", file);
};

/* Called by SWFUpload JavaScript and Flash functions when debug is enabled. By default it writes messages to the
   internal debug console.  You can override this event and have messages written where you want. */
SWFUpload.prototype.debug = function (message) {
	this.queueEvent("debug_handler", message);
};


/* **********************************
	Debug Console
	The debug console is a self contained, in page location
	for debug message to be sent.  The Debug Console adds
	itself to the body if necessary.

	The console is automatically scrolled as messages appear.
	
	If you are using your own debug handler or when you deploy to production and
	have debug disabled you can remove these functions to reduce the file size
	and complexity.
********************************** */
   
// Private: debugMessage is the default debug_handler.  If you want to print debug messages
// call the debug() function.  When overriding the function your own function should
// check to see if the debug setting is true before outputting debug information.
SWFUpload.prototype.debugMessage = function (message) {
	if (this.settings.debug) {
		var exceptionMessage, exceptionValues = [];

		// Check for an exception object and print it nicely
		if (typeof message === "object" && typeof message.name === "string" && typeof message.message === "string") {
			for (var key in message) {
				if (message.hasOwnProperty(key)) {
					exceptionValues.push(key + ": " + message[key]);
				}
			}
			exceptionMessage = exceptionValues.join("\n") || "";
			exceptionValues = exceptionMessage.split("\n");
			exceptionMessage = "EXCEPTION: " + exceptionValues.join("\nEXCEPTION: ");
			SWFUpload.Console.writeLine(exceptionMessage);
		} else {
			SWFUpload.Console.writeLine(message);
		}
	}
};

SWFUpload.Console = {};
SWFUpload.Console.writeLine = function (message) {
	var console, documentForm;

	try {
		console = document.getElementById("SWFUpload_Console");

		if (!console) {
			documentForm = document.createElement("form");
			document.getElementsByTagName("body")[0].appendChild(documentForm);

			console = document.createElement("textarea");
			console.id = "SWFUpload_Console";
			console.style.fontFamily = "monospace";
			console.setAttribute("wrap", "off");
			console.wrap = "off";
			console.style.overflow = "auto";
			console.style.width = "700px";
			console.style.height = "350px";
			console.style.margin = "5px";
			documentForm.appendChild(console);
		}

		console.value += message + "\n";

		console.scrollTop = console.scrollHeight - console.clientHeight;
	} catch (ex) {
		alert("Exception: " + ex.name + " Message: " + ex.message);
	}
};

/*
	Queue Plug-in
	
	Features:
		*Adds a cancelQueue() method for cancelling the entire queue.
		*All queued files are uploaded when startUpload() is called.
		*If false is returned from uploadComplete then the queue upload is stopped.
		 If false is not returned (strict comparison) then the queue upload is continued.
		*Adds a QueueComplete event that is fired when all the queued files have finished uploading.
		 Set the event handler with the queue_complete_handler setting.
		
	*/

var SWFUpload;
if (typeof(SWFUpload) === "function") {
	SWFUpload.queue = {};
	
	SWFUpload.prototype.initSettings = (function (oldInitSettings) {
		return function () {
			if (typeof(oldInitSettings) === "function") {
				oldInitSettings.call(this);
			}
			
			this.queueSettings = {};
			
			this.queueSettings.queue_cancelled_flag = false;
			this.queueSettings.queue_upload_count = 0;
			
			this.queueSettings.user_upload_complete_handler = this.settings.upload_complete_handler;
			this.queueSettings.user_upload_start_handler = this.settings.upload_start_handler;
			this.settings.upload_complete_handler = SWFUpload.queue.uploadCompleteHandler;
			this.settings.upload_start_handler = SWFUpload.queue.uploadStartHandler;
			
			this.settings.queue_complete_handler = this.settings.queue_complete_handler || null;
		};
	})(SWFUpload.prototype.initSettings);

	SWFUpload.prototype.startUpload = function (fileID) {
		this.queueSettings.queue_cancelled_flag = false;
		this.callFlash("StartUpload", [fileID]);
	};

	SWFUpload.prototype.cancelQueue = function () {
		this.queueSettings.queue_cancelled_flag = true;
		this.stopUpload();
		
		var stats = this.getStats();
		while (stats.files_queued > 0) {
			this.cancelUpload();
			stats = this.getStats();
		}
	};
	
	SWFUpload.queue.uploadStartHandler = function (file) {
		var returnValue;
		if (typeof(this.queueSettings.user_upload_start_handler) === "function") {
			returnValue = this.queueSettings.user_upload_start_handler.call(this, file);
		}
		
		// To prevent upload a real "FALSE" value must be returned, otherwise default to a real "TRUE" value.
		returnValue = (returnValue === false) ? false : true;
		
		this.queueSettings.queue_cancelled_flag = !returnValue;

		return returnValue;
	};
	
	SWFUpload.queue.uploadCompleteHandler = function (file) {
		var user_upload_complete_handler = this.queueSettings.user_upload_complete_handler;
		var continueUpload;
		
		if (file.filestatus === SWFUpload.FILE_STATUS.COMPLETE) {
			this.queueSettings.queue_upload_count++;
		}

		if (typeof(user_upload_complete_handler) === "function") {
			continueUpload = (user_upload_complete_handler.call(this, file) === false) ? false : true;
		} else if (file.filestatus === SWFUpload.FILE_STATUS.QUEUED) {
			// If the file was stopped and re-queued don't restart the upload
			continueUpload = false;
		} else {
			continueUpload = true;
		}
		
		if (continueUpload) {
			var stats = this.getStats();
			if (stats.files_queued > 0 && this.queueSettings.queue_cancelled_flag === false) {
				this.startUpload();
			} else if (this.queueSettings.queue_cancelled_flag === false) {
				this.queueEvent("queue_complete_handler", [this.queueSettings.queue_upload_count]);
				this.queueSettings.queue_upload_count = 0;
			} else {
				this.queueSettings.queue_cancelled_flag = false;
				this.queueSettings.queue_upload_count = 0;
			}
		}
	};
}
/*
	A simple class for displaying file information and progress
	Note: This is a demonstration only and not part of SWFUpload.
	Note: Some have had problems adapting this class in IE7. It may not be suitable for your application.
*/

// Constructor
// file is a SWFUpload file object
// targetID is the HTML element id attribute that the FileProgress HTML structure will be added to.
// Instantiating a new FileProgress object with an existing file will reuse/update the existing DOM elements
function FileProgress(file, targetID) {
	this.fileProgressID = file.id;

	this.opacity = 100;
	this.height = 0;
	// added by jarryli
	this.uploadBoxId = targetID || this.uploadBoxId;

	this.fileProgressWrapper = document.getElementById(this.fileProgressID);
	if (!this.fileProgressWrapper) {
		this.fileProgressWrapper = document.createElement("div");
		this.fileProgressWrapper.className = "progressWrapper";
		this.fileProgressWrapper.id = this.fileProgressID;

		this.fileProgressElement = document.createElement("div");
		this.fileProgressElement.className = "progressContainer";

		var progressCancel = document.createElement("a");
		progressCancel.className = "progressCancel";
		progressCancel.href = "#";
		progressCancel.style.visibility = "hidden";
		progressCancel.appendChild(document.createTextNode(" "));

		var progressText = document.createElement("div");
		progressText.className = "progressName";
		progressText.appendChild(document.createTextNode(file.name));

		var progressBar = document.createElement("div");
		progressBar.className = "progressBarInProgress";

		var progressStatus = document.createElement("div");
		progressStatus.className = "progressBarStatus";
		progressStatus.innerHTML = "&nbsp;";

		this.fileProgressElement.appendChild(progressCancel);
		this.fileProgressElement.appendChild(progressText);
		this.fileProgressElement.appendChild(progressStatus);
		this.fileProgressElement.appendChild(progressBar);

		this.fileProgressWrapper.appendChild(this.fileProgressElement);

		document.getElementById(targetID).appendChild(this.fileProgressWrapper);
		// reset QueueBox height by jarryli
		this.setUploadBoxHeight(document.getElementById(targetID));
	} else {
		this.fileProgressElement = this.fileProgressWrapper.firstChild;
		this.reset();
	}

	this.height = this.fileProgressWrapper.offsetHeight;
	this.setTimer(null);
}

var SWF_UPLOAD_BOX_HEIGHT = SWF_UPLOAD_BOX_HEIGHT || null;

/**
 * set max height for the upload box
 * when most files be uploading
 * @param {DOM object} obj
 * @author jarryli@gmail.com
 *��
 */
FileProgress.prototype.setUploadBoxHeight = function(obj) {
	if ('object' != typeof obj) return;
	var sh = document.body.scrollHeight;
	var h  = obj.offsetHeight;
	var threshold = 250;
	sh = sh - threshold;
	if (h > sh && obj.style.height == '') {
		obj.style.height = sh + 'px';
		obj.style.overflow = 'auto';
		SWF_UPLOAD_BOX_HEIGHT = sh;
	}
}

/**
 * reset the upload box height
 * @param {DOM object} obj
 * @author jarryli@gmail.com
 *��
 */
FileProgress.prototype.resetUploadBoxHeight = function(obj) {
	if ('object' != typeof obj) return;
	if (obj.style.height && obj.style.height != ''
			&& obj.scrollHeight <= SWF_UPLOAD_BOX_HEIGHT + 50) {
			obj.style.height = '';
			obj.style.overflow = '';
	}
}

FileProgress.prototype.setTimer = function (timer) {
	this.fileProgressElement["FP_TIMER"] = timer;
};
FileProgress.prototype.getTimer = function (timer) {
	return this.fileProgressElement["FP_TIMER"] || null;
};

FileProgress.prototype.reset = function () {
	this.fileProgressElement.className = "progressContainer";

	this.fileProgressElement.childNodes[2].innerHTML = "&nbsp;";
	this.fileProgressElement.childNodes[2].className = "progressBarStatus";
	
	this.fileProgressElement.childNodes[3].className = "progressBarInProgress";
	this.fileProgressElement.childNodes[3].style.width = "0%";
	
	this.appear();	
};

FileProgress.prototype.setProgress = function (percentage) {
	this.fileProgressElement.className = "progressContainer green";
	this.fileProgressElement.childNodes[3].className = "progressBarInProgress";
	this.fileProgressElement.childNodes[3].style.width = percentage + "%";

	this.appear();	
};
FileProgress.prototype.setComplete = function () {
	this.fileProgressElement.className = "progressContainer blue";
	this.fileProgressElement.childNodes[3].className = "progressBarComplete";
	this.fileProgressElement.childNodes[3].style.width = "";

	var oSelf = this;
	this.setTimer(setTimeout(function () {
		oSelf.disappear();
	}, 2000));
	// change 10000 to 3000 by JarryLi
};
FileProgress.prototype.setError = function () {
	this.fileProgressElement.className = "progressContainer red";
	this.fileProgressElement.childNodes[3].className = "progressBarError";
	this.fileProgressElement.childNodes[3].style.width = "";

	var oSelf = this;
	this.setTimer(setTimeout(function () {
		oSelf.disappear();
	}, 5000));
};
FileProgress.prototype.setCancelled = function () {
	this.fileProgressElement.className = "progressContainer";
	this.fileProgressElement.childNodes[3].className = "progressBarError";
	this.fileProgressElement.childNodes[3].style.width = "";

	var oSelf = this;
	this.setTimer(setTimeout(function () {
		oSelf.disappear();
	}, 2000));
};
FileProgress.prototype.setStatus = function (status) {
	this.fileProgressElement.childNodes[2].innerHTML = status;
};

// Show/Hide the cancel button
FileProgress.prototype.toggleCancel = function (show, swfUploadInstance) {
	this.fileProgressElement.childNodes[0].style.visibility = show ? "visible" : "hidden";
	if (swfUploadInstance) {
		var fileID = this.fileProgressID;
		this.fileProgressElement.childNodes[0].onclick = function () {
			swfUploadInstance.cancelUpload(fileID);
			return false;
		};
	}
};

FileProgress.prototype.appear = function () {
	if (this.getTimer() !== null) {
		clearTimeout(this.getTimer());
		this.setTimer(null);
	}
	
	if (this.fileProgressWrapper.filters) {
		try {
			this.fileProgressWrapper.filters.item("DXImageTransform.Microsoft.Alpha").opacity = 100;
		} catch (e) {
			// If it is not set initially, the browser will throw an error.  This will set it if it is not set yet.
			this.fileProgressWrapper.style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity=100)";
		}
	} else {
		this.fileProgressWrapper.style.opacity = 1;
	}
		
	this.fileProgressWrapper.style.height = "";
	
	this.height = this.fileProgressWrapper.offsetHeight;
	this.opacity = 100;
	this.fileProgressWrapper.style.display = "";
	
};

// Fades out and clips away the FileProgress box.
FileProgress.prototype.disappear = function () {

	var reduceOpacityBy = 15;
	var reduceHeightBy = 4;
	var rate = 10;	// 15 fps
	// changed rate 30 to 10 by Jarryli
	//var rate = 10;

	if (this.opacity > 0) {
		this.opacity -= reduceOpacityBy;
		if (this.opacity < 0) {
			this.opacity = 0;
		}

		if (this.fileProgressWrapper.filters) {
			try {
				this.fileProgressWrapper.filters.item("DXImageTransform.Microsoft.Alpha").opacity = this.opacity;
			} catch (e) {
				// If it is not set initially, the browser will throw an error.  This will set it if it is not set yet.
				this.fileProgressWrapper.style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity=" + this.opacity + ")";
			}
		} else {
			this.fileProgressWrapper.style.opacity = this.opacity / 100;
		}
	}

	if (this.height > 0) {
		this.height -= reduceHeightBy;
		if (this.height < 0) {
			this.height = 0;
		}

		this.fileProgressWrapper.style.height = this.height + "px";
	}

	if (this.height > 0 || this.opacity > 0) {
		var oSelf = this;
		this.setTimer(setTimeout(function () {
			oSelf.disappear();			
		}, rate));
	} else {
		this.fileProgressWrapper.style.display = "none";
		this.setTimer(null);

		// reset the height. added by jarryli
		this.resetUploadBoxHeight(document.getElementById(this.uploadBoxId));
	}
};
/* Demo Note:  This demo uses a FileProgress class that handles the UI for displaying the file name and percent complete.
The FileProgress class is not part of SWFUpload.
*/


/* **********************
   Event Handlers
   These are my custom event handlers to make my
   web application behave the way I went when SWFUpload
   completes different tasks.  These aren't part of the SWFUpload
   package.  They are part of my application.  Without these none
   of the actions SWFUpload makes will show up in my application.
   ********************** */
function fileQueued(file) {
	try {
		var progress = new FileProgress(file, this.customSettings.progressTarget);
		progress.setStatus("Pending...");
		progress.toggleCancel(true, this);

	} catch (ex) {
		this.debug(ex);
	}

}

function fileQueueError(file, errorCode, message) {
	try {
		if (errorCode === SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED) {
			alert("You have attempted to queue too many files.\n" + (message === 0 ? "You have reached the upload limit." : "You may select " + (message > 1 ? "up to " + message + " files." : "one file.")));
			return;
		}

		var progress = new FileProgress(file, this.customSettings.progressTarget);
		progress.setError();
		progress.toggleCancel(false);

		switch (errorCode) {
		case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
			progress.setStatus("File is too big.");
			this.debug("Error Code: File too big, File name: " + file.name + ", File size: " + file.size + ", Message: " + message);
			break;
		case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:
			progress.setStatus("Cannot upload Zero Byte files.");
			this.debug("Error Code: Zero byte file, File name: " + file.name + ", File size: " + file.size + ", Message: " + message);
			break;
		case SWFUpload.QUEUE_ERROR.INVALID_FILETYPE:
			progress.setStatus("Invalid File Type.");
			this.debug("Error Code: Invalid File Type, File name: " + file.name + ", File size: " + file.size + ", Message: " + message);
			break;
		default:
			if (file !== null) {
				progress.setStatus("Unhandled Error");
			}
			this.debug("Error Code: " + errorCode + ", File name: " + file.name + ", File size: " + file.size + ", Message: " + message);
			break;
		}
	} catch (ex) {
        this.debug(ex);
    }
}

function fileDialogComplete(numFilesSelected, numFilesQueued) {
	try {
		// set upload path when path be changed. added by jarry
		if ('undefined' != typeof UploadAction) { 
			UploadAction.setSWFUploadPath();
		}

		if (numFilesSelected > 0) {
			document.getElementById(this.customSettings.cancelButtonId).disabled = false;
		}

		// show the queue dialog
		// added by JarryLi
	    showHideQueueBox.call(this, "block");
		
		/* I want auto start the upload and I can do that here */
		this.startUpload();
	} catch (ex)  {
        this.debug(ex);
	}
}

/**
 * @desc show the queue box when selected the files
 *       or hide the box on upload complete.
 * @author JarryLi
 * @date 2010-5-23
 */
function showHideQueueBox(status) {
	var queueBox = this.customSettings.queueBox ? this.customSettings.queueBox : null;
	if (queueBox && document.getElementById(queueBox)) {
		var queue = document.getElementById("QueueBox");
		queue.style.display = status;		
	}
}

function uploadStart(file) {
	try {
		/* I don't want to do any file validation or anything,  I'll just update the UI and
		return true to indicate that the upload should start.
		It's important to update the UI here because in Linux no uploadProgress events are called. The best
		we can do is say we are uploading.
		 */
		var progress = new FileProgress(file, this.customSettings.progressTarget);
		progress.setStatus("Uploading...");
		progress.toggleCancel(true, this);
	}
	catch (ex) {}
	
	return true;
}

function uploadProgress(file, bytesLoaded, bytesTotal) {
	try {
		var percent = Math.ceil((bytesLoaded / bytesTotal) * 100);

		var progress = new FileProgress(file, this.customSettings.progressTarget);
		progress.setProgress(percent);
		progress.setStatus("Uploading...");
	} catch (ex) {
		this.debug(ex);
	}
}

function uploadSuccess(file, serverData) {
	try {
		var progress = new FileProgress(file, this.customSettings.progressTarget);
		progress.setComplete();
		progress.setStatus("Complete.");
		progress.toggleCancel(false);
		// hide the queue dialog
		// added by JarryLi
		var self = this;
		setTimeout(
			function(){
				showHideQueueBox.call(self, "none")
			}, 3000);

	} catch (ex) {
		this.debug(ex);
	}
}

function uploadError(file, errorCode, message) {
	try {
		var progress = new FileProgress(file, this.customSettings.progressTarget);
		progress.setError();
		progress.toggleCancel(false);

		switch (errorCode) {
		case SWFUpload.UPLOAD_ERROR.HTTP_ERROR:
			progress.setStatus("Upload Error: " + message);
			this.debug("Error Code: HTTP Error, File name: " + file.name + ", Message: " + message);
			break;
		case SWFUpload.UPLOAD_ERROR.UPLOAD_FAILED:
			progress.setStatus("Upload Failed.");
			this.debug("Error Code: Upload Failed, File name: " + file.name + ", File size: " + file.size + ", Message: " + message);
			break;
		case SWFUpload.UPLOAD_ERROR.IO_ERROR:
			progress.setStatus("Server (IO) Error");
			this.debug("Error Code: IO Error, File name: " + file.name + ", Message: " + message);
			break;
		case SWFUpload.UPLOAD_ERROR.SECURITY_ERROR:
			progress.setStatus("Security Error");
			this.debug("Error Code: Security Error, File name: " + file.name + ", Message: " + message);
			break;
		case SWFUpload.UPLOAD_ERROR.UPLOAD_LIMIT_EXCEEDED:
			progress.setStatus("Upload limit exceeded.");
			this.debug("Error Code: Upload Limit Exceeded, File name: " + file.name + ", File size: " + file.size + ", Message: " + message);
			break;
		case SWFUpload.UPLOAD_ERROR.FILE_VALIDATION_FAILED:
			progress.setStatus("Failed Validation.  Upload skipped.");
			this.debug("Error Code: File Validation Failed, File name: " + file.name + ", File size: " + file.size + ", Message: " + message);
			break;
		case SWFUpload.UPLOAD_ERROR.FILE_CANCELLED:
			// If there aren't any files left (they were all cancelled) disable the cancel button
			if (this.getStats().files_queued === 0) {
				document.getElementById(this.customSettings.cancelButtonId).disabled = true;
			}
			progress.setStatus("Cancelled");
			progress.setCancelled();
			break;
		case SWFUpload.UPLOAD_ERROR.UPLOAD_STOPPED:
			progress.setStatus("Stopped");
			break;
		default:
			progress.setStatus("Unhandled Error: " + errorCode);
			this.debug("Error Code: " + errorCode + ", File name: " + file.name + ", File size: " + file.size + ", Message: " + message);
			break;
		}
	} catch (ex) {
        this.debug(ex);
    }
}

function uploadComplete(file) {
	if (this.getStats().files_queued === 0) {
		document.getElementById(this.customSettings.cancelButtonId).disabled = true;

	}
}

// This event comes from the Queue Plugin
function queueComplete(numFilesUploaded) {
	var status = document.getElementById("divStatus");
//	status.innerHTML = numFilesUploaded + " file" + (numFilesUploaded === 1 ? "" : "s") + " uploaded.";
	status.innerHTML = "上传了" + numFilesUploaded +  "个文件"  + "";
	// 上传完成后执行文件加载

	if ('undefined' != typeof DirAction) {
		DirAction.getDirJSON(UPLOAD.uploadPath);
	}
}
/**
 * FileAdmin
 * Copyright 2010 Youngli Inc. All rights reserved.
 * 
 * path: js-src/fa/tpl.js
 * author: lichunping/jarry
 * version: 0.9
 * date: 2010/06/15
 */

/**
 * 模板文件
 * 用来临时创建页面
 * @author lichunping/jarry
 */

var HTMLTemplate = {
  createNewFolderHTML : 
	  '<div class="create-newfolder" id="CreateNewFolder">'
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
	//+ '		<span id="divStatus">上传了 0 个文件</span>'
	+ '		<span id="divStatus">&nbsp;</span>'
	+ '	<div>'
	+ '		<span id="spanButtonPlaceHolder"></span>'
	+ '		<input id="btnCancel" type="button" value="停止上传" onClick="swfu.cancelQueue();" disabled="disabled"  />'
	+ '		&nbsp;<a href="javascript:UploadAction.hideUploadArea();">关闭</a>'
	+ '	</div>'
	+ '</div>',

	editHTML : 
	''
/*	+ '<span><a href="javascript:FileAction.deleteFile(FileAction.tableListTr)">删除</a></span>'
	+ '<span><a href="javascript:FileAction.setRenameArea(FileAction.tableListTr)">更名</a></span>'
	+ '<span><a href="javascript:FileAction.copyFile(FileAction.tableListTr)">复制</a></span>',
*/
	+ '<span><a href="javascript:FileAction.deleteFile(FileAction.tableListTr)" class="edit-delete" title="删除">&nbsp;</a></span>'
	+ '<span><a href="javascript:FileAction.setRenameArea(FileAction.tableListTr)" class="edit-rename" title="重命名">&nbsp;</a></span>'
	+ '<span><a href="javascript:FileAction.copyFile(FileAction.tableListTr)" class="edit-copy" title="复制">&nbsp;</a></span>',

	renameHTML : 
	 '<input id="Rename" value="" size="30" />'
	+ '<span><a href="javascript:FileAction.renameFile(FileAction.tableListTr, g(\'Rename\').value)">确定</a></span>'
	+ '<span><a href="javascript:FileAction.hideRenameArea()">取消</a></span>',

	helpHTML : 
		'<div id="HelpContent" class="help-content">'
	+	'</div>'
	+   '<div class="help-close"><a href="javascript:HelpAction.close()">关闭</a></div>'

};/**
 * FileAdmin
 * Copyright 2010 Youngli Inc. All rights reserved.
 * 
 * path: js-src/fa/config.js
 * author: lichunping/jarry
 * version: 0.9
 * date: 2010/06/15
 */

/**
 * 文件管理配置文件
 * 合并js时config.js放置最前面
 * @author lichunping/jarry
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
	OPEN_FILE_REDIRECT : false,
	
	// 打开文件夹时是否同步更新目录树
	OPEN_FOLDER_UPDATE_TREE : true,
	
	// 是否通过web service 的WEB目录浏览方式在新窗口打开文件夹
	OPEN_FOLDER_NEW_WINDOW : false

}
/**
 * FileAdmin
 * Copyright 2010 Youngli Inc. All rights reserved.
 * 
 * path: js-src/com/com.js
 * author: lichunping/jarry
 * version: 0.9
 * date: 2010/06/15
 */
 
/**
 * FA使用的公共函数库
 * author: lichunping/jarry
 */
 
 /**
  * 得到文件名的后缀格式
  * 
  * @param {string} name 文件名
  * @return {string} ext 扩展名
  * @author jarry
  */
var getExt = function(name) {
	if (name && name.length > 0) {
		var ext;	
		var lastDotAt = name.lastIndexOf(".");
		if (lastDotAt != -1) {
			ext = name.substr(lastDotAt + 1);
		} else {
			ext = "";
		}
	}
	return ext
}	

var OFFICE_FILE_EXT = [
	'doc', 'ppt', 'xls', 'docx', 'pptx', 'xlsx'
];

var isOfficeFile = function(ext) {
	return array.indexOf(OFFICE_FILE_EXT, ext);
}

var getFolderIconCss = function() {
	return 'folder';
}

var	getFileIconCss = function(type) {
	if (type == 'folder') return 'folder';
	type = type.toLowerCase();		
	switch(type) {
		// 常用文档
		case 'doc' : 
				ext = 'doc'; break;
		case 'docx' : 
				ext = 'doc'; break;
		case 'xls' : 
				ext = 'xls'; break;
		case 'xlsx' : 
				ext = 'xls'; break;
		case 'ppt' : 
				ext = 'ppt'; break;
		case 'pptx' : 
				ext = 'ppt'; break;
		case 'pdf' : 
				ext = 'pdf'; break;
		case 'txt' : 
				ext = 'txt'; break;
		
		// 可执行文件		
		case 'exe' : 
				ext = 'exe'; break;
		
		// web文件		
		case 'html' : 
				ext = 'html'; break;
		case 'htm' : 
				ext = 'html'; break;
		case 'css' : 
				ext = 'css'; break;
		case 'js' : 
				ext = 'js'; break;	
		case 'swf' : 
				ext = 'swf'; break;	
		case 'fla' : 
				ext = 'swf'; break;		

		// 压缩				
		case 'zip' : 
				ext = 'zip'; break;
		case 'rar' : 
				ext = 'rar'; break;
		case 'gz' : 
				ext = 'rar'; break;
		case 'tar' : 
				ext = 'rar'; break;
				
		// 图片		
		case 'gif' : 		
				ext = 'gif'; break;
		case 'png' : 		
				ext = 'png'; break;
		case 'jpg' : 		
				ext = 'jpg'; break;		
				
		// 音乐		
		case 'mp3' : 		
				ext = 'mp3'; break;
		case 'wma' : 		
				ext = 'mp3'; break;
		case 'wav' : 		
				ext = 'mp3'; break;
		case 'rm' : 		
				ext = 'rm'; break;									
					
		default : 
				ext = 'file';				
	}			
	return ext;			
};

/**
 * 解开后台java encode html方法，解码字符包括 & ' " < >
 * @param {String} html 传入的html字符串
 * @return {String} 解码后的字符串
 * @author jarryli@gmail.com
 */
var decodeHTML = function(html) {
	if (!html || html.length <= 0) return html;
	html = html.replace(/&amp;/g, "&");
	html = html.replace(/&#039;/g, "'");
	html = html.replace(/&quot;/g, "\"");
	html = html.replace(/&lt;/g, "<");
	html = html.replace(/&gt;/g, ">");
	return html;
} 

var encodeURLCharForFlash = function(url) {
	url = url.replace(/&/g, '&amp;');
	return url;
}

/**
 * 解开前端为了进过html字符编码的字串
 * @param {String} str 传入的字符串
 * @return {String} 解码后的字符串
 * @author jarryli@gmail.com
 */
var decodeSpecial = function(str) {
	if (!str || str.length <= 0) return str;
	str = str.replace(/&/g, '&amp;');
	str = str.replace(/'/g, '&#039;');
	str = str.replace(/"/g, '&quot;');
	str = str.replace(/</g, '&lt;');
	str = str.replace(/>/g, '&gt;');
	return str;
}

/**
 * 根据路径名是否需要增加斜杠
 * @param {String} path 路径
 * @return {String} slash 斜杠或者空字符串
 * @author jarryli@gmail.com
 */
var getSlash = function(path) {
	if (path == null || path.length <= 0) return path;
	var last = path.substring(path.length - 1);
	//alert(path + " | " + last);
	if (last == '/' || last == '\\') {
		return '';
	}
	return '/';
}

/**
 * 若最后一个字符是斜杠或反斜杠，就删除斜杠
 * @param {String} path 路径, 长度不小于1
 * @param {String} path 新路径
 */
var removeLastSlash = function(path) {
	if (path == null || path.length <= 1) return path;
	var last = path.substring(path.length - 1);
	if (last == '/' || last == '\\') {
		return path.substr(0, path.length - 1);
	}
	return path;
}

/**
 * 根据路径名返回上一级目录
 * @param {String} path 路径
 * @return {String} slash 新路径
 * @author jarryli@gmail.com
 */
var	getParentPath = function(path) {
	if (path == null || path.length <= 0) return path;
	var parentPath = path;
	parentPath = removeLastSlash(parentPath);
	parentPath = replaceSlash(parentPath);
	// 若最后一位是斜杠，则先移除最后一个字符
	// 把反斜杠(\)替换成斜杠(/)
	var lastSlash = parentPath.lastIndexOf("/");
	if (lastSlash != -1 ) {
		return parentPath.substr(0, lastSlash + 1);
	}
	return path;
}

/**
 * 给JS加上转义字符，仅包含单引号与双引号
 */
var encodeJS = function (str) {
	str = str.replace(/'/g, '\'');
	str = str.replace(/"/g, '\"');
	return str;
}

/**
 * 给JS加上转义字符，仅包含单引号与双引号
 * 因为用作js传递参数，需要给\再转义
 * 在dir.class.js在窗口内打开文件夹用到
 */
var encodeforJS = function(str) {
	str = str.replace(/'/g, '\\\'');
	str = str.replace(/"/g, '\\\"');
	return str;	
}

// 特殊字符，含不允许单引号
//var SPECIAL_CHAR = ['\\', '/', ':', '*', '?', '"', '<', '>', '|', '\''];
var SPECIAL_CHAR = ['\\', '/', ':', '*', '?', '"', '<', '>', '|'];

/**
 * 校验文件名是否合法，不能含有的字符见 SPECIAL_CHAR
 * @param {String} name
 * @return {Boolean} true || false
 */
var isAvailableName = function(name) {
	if (name == null || name.length < 0) return false;
	var regexp = /[\\\/:*?\"<>|]+/g;
	// var regexp = /[\\\/:*?\"<>|\']+/g; // 不允许单引号
	return !regexp.test(name);
}

/**
 * 斜杠替换反斜杠
 * @param path {String}
 * @param path {String}
 *
 */ 
var replaceSlash = function(str) {
	if (str == null || str.length <= 0) return str;
	str = str.replace(/\\/g, "/");
	return str;
}

/**
 * encodeURIComponent路径，但是斜杠除外
 * @param path {String}
 * @param path {String}
 *
 */ 
var encodeURL = function(str) {
	if (str == null || str.length <= 0) return str;
	var newStr = str;
	
	// 过滤http://
	var httpStr = 'http://';
	var hasHttpStr = false;
	if (str.substr(0, 7) == httpStr) {
		hasHttpStr = true;
		str = (str.substr(7));
	}
	
	if (str.indexOf("\\") != -1) {
		str = replaceSlash(str);
	}
	
	if (str.indexOf("/") != -1) {
		var tmpArr = [];
		tmpArr = str.split("/");		

		var len = tmpArr.length;
		for (var i = 0; i < len; i++) {
			tmpArr[i] = encodeURIComponent(tmpArr[i]);
		}		
		
		newStr = tmpArr.join("/");
		// 加上http://
		if (hasHttpStr) {
			newStr = httpStr + tmpArr.join("/");
		}
		return newStr;
	}
	
	return encodeURIComponent(newStr);	
}

/**
 * 创建装html模板的容器，装载在页面中
 *
 */ 
var createTemplateHTMLContainer = function() {
	if (!g('TemplateHTMLContainer')) {
		var div = document.createElement('div');
		div.id = 'TemplateHTMLContainer';
		document.body.appendChild(div);
	}
}

/**
 * 创建装html模板的容器，装载在页面中
 * @param obj {HTMLDivElement}
 */ 
var getTemplateHTMLContainer = function() {
	if (g('TemplateHTMLContainer')) {
		return g('TemplateHTMLContainer');
	} else {
		createTemplateHTMLContainer();
		return g('TemplateHTMLContainer');
	}
}

/**
 * 开关遮罩层
 * @param obj {HTMLDivElement}，无obj时默认id为mask 
 * @param act {String} hide | show ，无act时，根据当前状态开关
 * 
 */ 
var toggleMask = function(obj, act) {
	var mask = (obj && typeof obj == 'object') ? obj : g('mask'); 
	if (act != null && act.lenght > 0) {
		mask.style.display = act;
	} else {
		var isHide = (mask.style.display == '' || mask.style.display == 'none');
		mask.style.display = isHide ? 'block' : 'none';
	}
}


/**
 * action文件的出错信息处理
 * 主要用在无权限访问页面时
 */
function hasError() {
 	
 	this.showTips = function(ErrorMessage) {
 		var str = [];
 		var len = 0;
 		for (var item in ErrorMessage) {
 			str.push(ErrorMessage[item] + '\r\n');
 			len ++;
 		}
 		
 		if (len > 0) {
			alert(str.join(''));
			//delete ErrorMessage;
			ErrorMessage = {};
			gotoUrl();
			return true;
 		}
 		// 错误提示小于0，表示空，可返回true
 		return false;
 	}
 	
 	this.gotoUrl = function() {
 		window.location.replace(global.FA_LOGIN_URL);
 	}
 
 	return showTips(ErrorMessage);

 }


/**
 * FileAdmin
 * Copyright 2010 Youngli Inc. All rights reserved.
 * 
 * path: js-src/fa/action.js
 * author: lichunping/jarry
 * version: 0.9
 * date: 2010/06/15
 */

/**
 * action静态类，用来初始化各种页面与调用js类库
 * 内部方法部分对外公开
 * 给Action用的一些常用函数
 * author: lichunping/jarry
 * 
 */
var UploadActoin = UploadActoin || {};
var DirAction   = DirAction || {};
var FileAction   = FileAction || {};
var UploadAction = UploadAction || {};
var HelpAction   = HelpAction   || {};
var ErrorMessage = ErrorMessage || {};
var MESSAGE = MESSAGE || {};
// 定义JSON对象
var DIR = DIR || {};
var FILE = FILE || {};
var UPLOAD = UPLOAD || {};
	UPLOAD.uploadPath = UPLOAD.uploadPath || '';
var Tree = Tree || {};
var SWFUP = SWFUP || {};
/**
 * FileAdmin
 * Copyright 2010 Youngli Inc. All rights reserved.
 * 
 * path: js-src/fa/upload.class.js
 * author: lichunping/jarry
 * version: 0.9
 * date: 2010/06/15
 */

/**
 * 上传文件类
 * @author lichunping/jarry
 */
function Upload() {
}

Upload.prototype = {
		
	setSWFUploadPath : function(path) {
		var path = path || UPLOAD.uploadPath;
		if (SWFUP && 'function' == typeof SWFUP.setPostParams) {
			try {
				SWFUP.setPostParams ({"path" : path});
			} catch (ex) {
				alert(ex.toString());
			}
//				var post = SWFUP.getSetting('post_params'); 
//				alert(' |\r\n　' + UPLOAD.uploadPath +  ' |\r\n　' 
//				+ (this.uploadPath) + ' |\r\n　' 
//				+  SWFUP +  ' |\r\n　' 
//				+ post['path']);
//				if (browser.ie) {
//					SWFUP.setPostParams ({"path" : UPLOAD.uploadPath});
//					在firefox/chrome下更改参数失效，重新实例化对
//					只能改成iframe，每次都调用新页面来传递上传路径
//					报错：Call to SetPostParams failed
//	              最后改为：在handlers.js里面的fileDialogComplete(numFilesSelected, numFilesQueued)方法
//					在swfupload对象加载完成后再更新路径
//	 				UploadAction.setSWFUploadPath();
//				} else {
//					try {
//					SWFUP.setPostParams ({"path" : UPLOAD.uploadPath});
//					} catch (ex) {
//						alert(ex.toString());
//					}			
//				}			
		} 
	},

	SWFUPsetting : function() {
		var settings = {
			flash_url : "swf/swfupload.swf",
			upload_url: global.UPLOAD_PATH,
			file_post_name : "uploads",
			post_params: {"path" : (UPLOAD.uploadPath)},
			file_size_limit : "1024 MB",
			file_types : "*.*",
			file_types_description : "All Files",
			file_upload_limit : 100,
			file_queue_limit : 0,
			custom_settings : {
				progressTarget : "fsUploadProgress",
				cancelButtonId : "btnCancel"
			},
			// debug: true,
			debug: false,
			// Button settings
			button_image_url: "img/upload-button.png",
			button_width: "90",
			button_height: "24",
			button_placeholder_id: "spanButtonPlaceHolder",
			
			// The event handler functions are defined in handlers.js
			file_queued_handler : fileQueued,
			file_queue_error_handler : fileQueueError,
			file_dialog_complete_handler : fileDialogComplete,
			upload_start_handler : uploadStart,
			upload_progress_handler : uploadProgress,
			upload_error_handler : uploadError,
			upload_success_handler : uploadSuccess,
			upload_complete_handler : uploadComplete,
			queue_complete_handler : queueComplete	// Queue plugin event
		};
		SWFUP = new SWFUpload(settings);	
		// alert(UPLOAD.uploadPath +  ' |　' + (this.uploadPath) + SWFUP.setPostParams + SWFUP.getSetting);	
	 },
	 
	setPosition : function(dom, left, top) {
		if (!dom) return;
		dom.style.left = left + 'px';
		dom.style.top  = top  + 'px';
	},
	 
	setUploadHTML : function() {
		if (!g('UploadArea')) {
			try {
				var html = HTMLTemplate.uploadHTML;
				var container = getTemplateHTMLContainer();
				var div = document.createElement('div');
				div.innerHTML = html;
				container.appendChild(div);
				this.SWFUPsetting();
			} catch (ex) {
				alert(ex.toString());
			}
		}
	}
}/**
 * FileAdmin
 * Copyright 2010 Youngli Inc. All rights reserved.
 * 
 * path: js-src/fa/upload.act.js
 * author: lichunping/jarry
 * version: 0.9
 * date: 2010/06/15
 */

/**
 * 上传Action文件
 * 设置通用的上传路径
 * 绘制上传模板，执行上传事件
 * @author lichunping/jarry
 */
UploadAction = (function () {
	var uploadPath = "";
	
	var uploadClass = new Upload();
		
	var setSWFUploadPath = function(path) {
		uploadClass.setSWFUploadPath(path);
	}
	
	var setUploadPath = function(path) {
		path = path +　getSlash(path);
		UPLOAD.uploadPath = decodeHTML(path);
	 };

	var hideUploadArea = function() {
		g('UploadArea').style.display = 'none';
		toggleMask();
	};
	
	var setUploadHTML = function() {
		uploadClass.setUploadHTML();
		if (!g('UploadArea')) return; 
		var obj = g('UploadArea');
		
		if (obj.style.display == '') {
			// set position on first create
			var left = dom.getPosition(this).left;
			var top = dom.getPosition(this).top;
			uploadClass.setPosition(obj, left, top + 20);
		}
		
		// can not add the event for chrome blow.
		// Youngli.on(g('CreateNewFolderCancelButton'), 'onclick', FileAction.hideCreateFolder);
		// so added the event in tag A for g('CreateNewFolderCancelButton');
		_showOrHide(obj);
		g('UploadPathTips').innerHTML = UPLOAD.uploadPath;
		g('divStatus').innerHTML = '';
		toggleMask();
		
	};
	
	var _showOrHide = function(obj) {
		if ('object' != typeof obj) return;
		var isHide = ((obj.style.display == '' || obj.style.display == 'none'));
		obj.style.display = isHide ? 'block' : 'none';
	}
	
	var init = function() {
		Youngli.on(g('UploadFileLink'), "onclick", UploadAction.setUploadHTML);	  
	};
	
	return {
		init : init,
		setUploadPath : setUploadPath,
		setUploadHTML : setUploadHTML,
		hideUploadArea : hideUploadArea,
		setSWFUploadPath : setSWFUploadPath
	};
})();
UploadAction.init();/**
 * FileAdmin
 * Copyright 2010 Youngli Inc. All rights reserved.
 * 
 * path: js-src/fa/dir.class.js
 * author: lichunping/jarry
 * version: 0.9
 * date: 2010/06/15
 */

/**
 * 生成目录列表与文件列表的类
 * @param {object} 生成目录对象的类
 * @author lichunping/jarry
 * 
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
 * @private
 * @author jarryli@gmail.com
 * @param {array} html html数组
 */
Directory.prototype._setHTML = function(html) {
	this.html = html;
}
/**
 * @private
 * @author jarryli@gmail.com
 * @return {string} html串
 */
Directory.prototype._getHTML = function() {
	return this.html;
}

Directory.prototype.listDirTree = function() {	
	 function dirClick(id, text) {
		// UploadAction.setUploadPath(id);	 
	    DirAction.getDirJSON(id);
	}	
	
	Tree = new dhtmlXTreeObject("DirList", "100%", "100%", 0);	
	Tree.parentObject.style.overflow = 'auto';
	Tree.setSkin('dhx_skyblue');
	Tree.enableHighlighting(1);
	Tree.setImagePath("img/tree/");
	Tree.enableDragAndDrop(0);
	Tree.enableTreeLines(false);
	Tree.setEscapingMode('utf8')
	Tree.setImageArrays("plus", null, null, null, "plus_ar.gif");
	Tree.setImageArrays("minus", null, null, null, "minus_ar.gif");
	Tree.setStdImages("folderClosed.gif", "folderOpen.gif", "folderClosed.gif");
	Tree.setXMLAutoLoading("dir!getTree.action");
	Tree.setOnClickHandler(dirClick);
	Tree.loadXML("dir!getTree.action", function(){});
}

/**
 * 得到文件夹列表的html，采用listDirTree替代本方法
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
		
	// dtree方案，因无法动态加载而选用dhtmlXTree方案
		var d = new dTree('tree');
		d.add(0, -1, DIR.root);
		for (i = 0; i < len; i++) {
			path = DIR.absolutePath + folders.nameList[i];
			name = folders.nameList[i];			
			html.push('<a href="#" onclick="DirAction.getDirJSON(\''+ (path) +'\');">' + name + '</a>');
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
	
	this._setHTML(html);
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
	// 每次都更新下上传地址;
	var _uploadPath = _DIR.path ? _DIR.path : _DIR.absolutePath;
	UploadAction.setUploadPath(_uploadPath);
	var html = [];
	// if (DIR && DIR.Folders && DIR.Files) {
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
			var name = file.name;
			var relationPath = DIR.relationPath + getSlash(DIR.relationPath);
			var ext = getExt(name);
			var hrefClass = getHrefClass(ext);
			var nameLink = '';
			var type = '&nbsp;';
			var href = '#';
			var target = '';
			// 文件夹链接
			if (file.type == 'folder') {			
				var _path = "";				
				
				// 重定向文件夹与直接打开文件夹
//				if (global.FIEL_WEB_ROOT_URL) {
//                    target = '_blank';
//					_path = decodeHTML(relationPath) + decodeHTML(name);
//					href = global.FIEL_WEB_ROOT_URL + encodeURL(_path);
//					// _path = decodeSpecial(_path);
//					// 若是重定向
//					if (global.OPEN_FILE_REDIRECT) {
//						href = 'redir?url=' + href;
//					}
//				}
				
				// 在窗口内打开文件夹
				if (!global.OPEN_FOLDER_NEW_WINDOW) {
					target = '';
					_path = decodeHTML(_uploadPath)  + getSlash(_uploadPath) + decodeHTML(name);
					href = 'javascript:DirAction.openFolder(\'' +  encodeforJS(_path) + '\');';
				}
				
				type = 'folder';
				hrefClass = getFolderIconCss();				
			} 
			
			// 文件链接
			if (file.type != 'folder') {			
				href = '#';
				if (global.FIEL_WEB_ROOT_URL) {
					var _path = decodeHTML(relationPath) + decodeHTML(name);
					
//					// 针对ut服务器单独设置web目录浏览，其他服务器没有这个目录可以注释掉
//					if (_DIR.root != "/home/work/www/") {
//						var _absolutePath = DIR.absolutePath;
//						if (_absolutePath.substr(0, 1) == '/') { 
//							_absolutePath = _absolutePath.substr(1);
//						}
//						_path = decodeHTML(_absolutePath) + decodeHTML(name);
//					}
					
					href = global.FIEL_WEB_ROOT_URL + encodeURL(_path);
				// 增加重定向	
					if (global.OPEN_FILE_REDIRECT) {
						href = 'redir?url=' + href;
					}
				} 
				
				// office在线阅读链接
				if (isOfficeFile(ext) != -1 && global.DOC_WEB_ROOT_URL) {
					// is office file read online
					href = global.DOC_WEB_ROOT_URL + '?file='+ encodeURIComponent(decodeHTML(DIR.absolutePath))
						 + encodeURIComponent(decodeHTML(name));
					// href = global.DOC_WEB_ROOT_URL + '?file='+ (decodeHTML(DIR.absolutePath))
					// + getSlash(relationPath) + (decodeHTML(name));
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
	this._setHTML(html);
	return html.join('');
}

/**
 * 得到文件列表，本系统中被getFileAndFolderListHTML()替代
 * @param {object} _DIR dir JSON 对象
 * @return {string} html 字符串
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
	this._setHTML(html);
	return html.join('');
}

/**
 * 得到面板信息
 * @param {object} _DIR JSON 对象
 * @return {string} html 字符串
 */
Directory.prototype.getInfoPanelHTML = function(_DIR) {
	var DIR = _DIR ? _DIR : this.DIR;
	var html = [];
	if (DIR && DIR.Folders && DIR.Files) {
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
	this._setHTML(html);
	return html.join('');
}

Directory.prototype.setDirAndFileList = function(_DIR) {
	if (hasError()) return false; 
	var DIR = _DIR ? _DIR : this.DIR;
	this.listDirTree();
	this.setFileAndFolderList(DIR);
}

Directory.prototype.setDirList = function(_DIR) {
	this.DirList.innerHTML = this.getDirListHTML(_DIR);
}

Directory.prototype.setFileAndFolderList = function(_DIR) {
	if (hasError()) return false; 
	this.FileListTitle.innerHTML = this.getFileAndFolderTheadHTML(_DIR);
	this.FileListContent.innerHTML = this.getFileAndFolderListHTML(_DIR);
	if (browser.ie == 6) {
		DirAction.setPageHeight();
	}
}

Directory.prototype.setFileList = function(_DIR) {
	this.FileList.innerHTML = this.getFileListHTML(_DIR);
}

Directory.prototype.setInfoPanel = function(_DIR) {
	this.InfoPanel.innerHTML = this.getInfoPanelHTML(_DIR);
}

/**
 * FileAdmin
 * Copyright 2010 Youngli Inc. All rights reserved.
 * 
 * path: js-src/fa/dir.act.js
 * author: lichunping/jarry
 * version: 0.9
 * date: 2010/06/15
 */

/**
 * 目录Action
 * 目录显示功能事件
 * @author lichunping/jarry
 */

DirAction = function() {

	var dirClass = new Directory();
	var page     = g('Page');

	var DIR      = dirClass.DIR; // 与directory类相同
	var dirPath  = global.DIR_PATH;
	var FileListContent = dirClass.FileListContent; 
	var DirList = dirClass.DirList;
	var FileList = dirClass.FileList;
	
	var dragBar = dragBar || g('DragBar');
	/**
	 * 设置页面高度
	 */ 
	var setPageHeight = function() {
		var h = document.body.offsetHeight ;
		h = h > 200 ? h : 200;
		var height = h - 180;
		if(browser.ie <= 6){
			height = h - 200;
		}
		dom.setStyle(FileListContent, "height", height);
		dom.setStyle(DirList, "height", height + 41);
		dom.setStyle(dragBar, "height", height + 41);
	};
	
	/**
	 * 拖动改变左右列宽度
	 */
	function dragColumn() {
			if ('undefined' == typeof dragBar) return;
			var dragSide = new Drag();
			dragSide.obj = dragBar;			
			// 定义拖拽区域，限定横向拖拽，且左右最小距离为50,200
			dragSide.range = {
					minX : 50, 
					minY : dom.getPosition(dragBar).top, 
					maxX : document.body.offsetWidth - 200,
					maxY : dom.getPosition(dragBar).top + dragBar.offsetHeight	
			};
			var DirList = DirList || g('DirList');
			var FileList = FileList || g('FileList');
			// 加载拖拽事件,实时更改侧栏宽度
			var process = 0;
			dragSide.onmousemove = function() {
				var ex = dragSide.mousePosition.x;
				var ey = dragSide.mousePosition.y;
				process = this.position.left - this.range.minX;
//      var percent  = process / (this.range.maxX - this.obj.offsetWidth - this.range.minX) * 100;				
				var DirListWidth = DirList.offsetWidth;
				var marginLeft = parseInt(FileList.style.paddingLeft);
				DirList.style.width = process + 55 + 'px';					
				FileList.style.marginLeft = process - 162 + 'px';
//      document.title = process + " | " + FileList.style.marginLeft + ' | ' + dragBar.style.left;			
			}
			// 写入进度到Cookie中
			dragSide.onmousestop = function() {
				Youngli.cookie.set('dragColumn.process', process, {
							path    : '',
							expires : 60 * 60 * 24 * 365,
							domain  : '',
							secure  : '' 
						}
				);	
			}
			dragSide.init();	
	}
	
	/**
	 * 从cookie中取出进度值，回填到DirList与FileList中
	 */
	var setDragColumnProcess = function() {
			var process = Youngli.cookie.get('dragColumn.process');
			if (process) {
				var process = parseInt(process);
				dragBar.style.left        = process + 50  + 'px';
				FileList.style.marginLeft = process - 162 + 'px';			
				DirList.style.width	      = process + 55  + 'px';
			}
	}

	/**
	 * 初始化函数
	 */
	var pageInit = function() {
		setDragColumnProcess();
		getDirJSON('');			//	初始化传入空路径
		dirClass.setDirAndFileList();		
		setPageHeight();
	}
	
	var getDirJSON = function(path) {
		var url = dirPath + '?path=' + encodeURIComponent(path);
		var xhr = ajax.get(url, _parseDirJSON);
	}

	/**
	 * Ajax的回调函数
	 * @param {object} xhr对象
	 * @param {String} xhr获得的结果
	 */
	var _parseDirJSON = function(xhr, responseText) {
		eval(responseText);
		dirClass.setFileAndFolderList(DIR);
		dirClass.setInfoPanel(DIR);
		FileAction.initTableListRowEvent();		// 初始化table里面的tr，增加事件
	}

	/**
	 * 点击文件夹，load相应目录树 
	 * @param {String} path 路径
	 */
	var openFolder = function(path) {
		// 找到tree里面的节点，刷新相应节点的数据，做到同步响应		
		if (global.OPEN_FOLDER_UPDATE_TREE) {
//    loadXML and refresh dir tree;
//		var id = encodeURL(path);		
			var id = decodeHTML(path) + getSlash(path);
			var sn = (new Date()).valueOf();	
			var parentPath = getParentPath(id);
			var dirUrl = "dir!getTree.action?id=" + id;
			dirUrl = dirUrl + "&uid=" + sn;
			if (Tree.getOpenState(parentPath) != 1 && Tree.getOpenState(id) != 1) {
			  // 如果不是打开状态则加载内容并打开
				Tree.openItem(parentPath);
			  // 有openItem可以不再重新load Tree
//			Tree.loadXML(dirUrl, Tree.selectItem(id));
//			Tree.focusItem(id);
			  // 打开item后要超时再选择子item
				window.setTimeout(function(){Tree.selectItem(id)}, 100);
			} else {
				Tree.selectItem(id);
			}
		}
		getDirJSON(path);
	}
	
	return {
		pageInit      : pageInit,            //  初始化页面
		setPageHeight : setPageHeight,       //  设置页面高度
		getDirJSON    : getDirJSON,          //  得到dir的JSON数据
		openFolder    : openFolder,
		dragColumn    : dragColumn
	}
	
}();
 
DirAction.pageInit();
Youngli.on(window, "onresize", DirAction.setPageHeight);
Youngli.on(window, "onload", DirAction.dragColumn);


/**
 * FileAdmin
 * Copyright 2010 Youngli Inc. All rights reserved.
 * 
 * path: js-src/fa/file.class.js
 * author: lichunping/jarry
 * version: 0.9
 * date: 2010/06/15
 */

/**
 * 文件夹、文件编辑操作类
 * 提供文件改名、复制、删除，鼠标移动事件等功能
 * @author lichunping/jarry
 */
function File() {
	this.path = '';
	this.relationPath = '';
	this.absolutePath = '';
	this.filePath  = global.FILE_PATH;
}

File.prototype = {
	
	setCreateFolderHTML : function() {
		if (!g('CreateNewFolder')) {
			try {
				var html = HTMLTemplate.createNewFolderHTML;
				var container = getTemplateHTMLContainer();
				var div = document.createElement('div');
				div.innerHTML = html;
				container.appendChild(div);
			} catch (ex) {
				alert(ex.toString());
			}
		}
	},
	
	getFolderJSON : function(path, name) {
		try {
			var path = path + getSlash(path);
				path = decodeHTML(path); 
			var url = this.filePath + '?mkdir=yes&path=' + encodeURIComponent(path) + '&name=' + encodeURIComponent(name);
			var xhr = ajax.get(url, FileAction.parseFolderJSON);
		} catch(ex) {
			alert(ex.toString());	
		}
	},
	
	setPosition : function(dom, left, top) {
		if (!dom) return;
		dom.style.left = left + 'px';
		dom.style.top  = top  + 'px';
	},
	
	insertRow : function(folder) {
		if (hasError()) return false; 
//		alert(this._getFolderTr(folder));
// 		需要改为动态dom操作，而非动态请求数据
//		FILE 作为传递过来的JSON数据，可以根据这个数据insertBefore到table的某行中
//		这样可以减少一次请求，有时间再升级
		DirAction.getDirJSON(decodeHTML(UPLOAD.uploadPath));
	},
	
	/**
	 * 创建编辑文件的HTML
	 */
	setFileEditHTML : function() {
		try {
			if (!g('FileEditBar')) {
				var html = HTMLTemplate.editHTML;
				var div = document.createElement('div');
				div.id = 'FileEditBar';
				div.innerHTML = html;
				document.body.appendChild(div);
				div.className = 'file-edit-bar';
			}
		} catch (ex) {
				alert(ex.toString());
		}
	},

	/**
	 * 重命名区域的HTML
	 */
	setRenameArea : function() {
		try {
			if (!g('FileRenameArea') || null == g('FileRenameArea')) {
				var html = HTMLTemplate.renameHTML;
				var div = document.createElement('div');
				div.id = 'FileRenameArea';
				div.innerHTML = html;
				div.className = 'file-rename-area';
				document.body.appendChild(div);
			}
		} catch (ex) {
				alert(ex.toString());
		}
	},
	
	/**
	 * 重命名文件(夹)
	 * @param {object} trObj 一个tr DOM对象
	 * @param {string} newName 新名称
	 * 
	 */
	renameFile : function(trObj, newName) {
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
				var xhr = ajax.get(url, FileAction.parseRenameJSON);
			} catch (ex) {
				alert(ex.toString());
			}
	 	}
	},	
	
	/**
	 * 复制文件(夹)
	 * @param {object} trObj 一个tr DOM对象
	 * 
	 */
	copyFile : function(trObj) {
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
			var xhr = ajax.get(url, FileAction.parseCopyJSON);
		} catch (ex) {
				alert(ex.toString());
		}
	},
	
	/**
	 * 删除文件(夹)
	 * @param {object} trObj 一个tr DOM对象
	 * 
	 */
	deleteFile : function(trObj) {
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
				var xhr = ajax.get(url, FileAction.parseDeleteJSON);	
			}
		} catch (ex) {
				alert(ex.toString());
		}
	},	
	
	/**
	 * 得到文件夹对象的tr的HTML，用于插入到table中
	 * @param {object} folder 文件夹对象
	 * @param {string} tr html
	 */
	_getFolderTr : function(folder) {
		var tr = "", target = '_blank', href = '';
		var relationPath = this.relationPath || DIR.relationPath;
		var hrefClass = getFolderIconCss();
		if (global.FIEL_WEB_ROOT_URL) {
			href = global.FIEL_WEB_ROOT_URL + encodeURIComponent(decodeHTML(relationPath)) + getSlash(relationPath) + encodeURIComponent(decodeHTML(folder.name));
		} 
		nameLink = ('<a href="' + href + '" class="' + hrefClass +  '" target="' + target + '">' + folder.name + '</a>');
		tr += '<tr><td>' + nameLink +  '</td><td>' + folder.length +  '</td><td>'
		       + folder.date +  '</td><td>' + folder.type +  '</td><td>&nbsp;</td></tr>';	
		       
	   return(tr);
	}
	
}/**
 * FileAdmin
 * Copyright 2010 Youngli Inc. All rights reserved.
 * 
 * path: js-src/fa/file.act.js
 * author: lichunping/jarry
 * version: 0.9
 * date: 2010/06/15
 */

/**
 * 文件Action
 * 提供文件改名、复制、删除，鼠标移动事件等功能
 * @author lichunping/jarry
 */
FileAction = (function() {	
	
	var fileClass = new File();
	var filePath  = global.FILE_PATH;
	
	var tableListTr;
	var tableListTrIndex;
	
	var isEditing = false;

	var init = function () {
		Youngli.on(g('CreateNewFolderLink'), "onclick", FileAction.setCreateFolderHTML);
		Youngli.on(g('FileListContent'), "onscroll", function() {
			_hideFileEditBar();
			_hideRenameArea();
		});		
		Youngli.on(g('FileListContent'), "onmouseout", FileAction.outFileListContent);	
	}
	
	/**
	 * 鼠标移出了FileTableList区域时
	 * @param {object} event事件
	 */
	var outFileListContent = function(e) {
		e = window.event || e;
		var x, y;
		if(!document.all) {
      		x = e.clientX; y = e.clientY;
     	} else {
        	x = e.x; y = e.y;
	  	}
	  	if (!_isInFileTableList(x, y)) {
	  		_hideFileEditBar();
	  		_hideRenameArea();
	  	}
	}
	
	/**
	 * 判断x,y坐标是否在FileTableList区域
	 * @param {number} x
	 * @param {number} y
	 * @return {boolean} ture || false
	 */
	var _isInFileTableList = function(x, y) {
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
		if (g('CreateNewFolder'))
			_hide(g('CreateNewFolder'));
		toggleMask();
	}
	
	/**
	 * 生成创建文件夹的HTML
	 */	
	var setCreateFolderHTML = function () {
		fileClass.setCreateFolderHTML();
		if (g('CreateNewFolder')) {
			try {
				// can not add the below event for chrome
				// Youngli.on(g('CreateNewFolderCancelButton'), 'onclick', FileAction.hideCreateFolder);
				var left = dom.getPosition(this).left;
				var top = dom.getPosition(this).top + 20;
				fileClass.setPosition(g('CreateNewFolder'), left, top);
				_showOrHide(g('CreateNewFolder'));
				_setNewFolderNameInputStatus();
				toggleMask();
			} catch (ex) {
				alert(ex.toString());
			}
		}
	}
	
	var _setNewFolderNameInputStatus = function() {
		if (g('CreateNewFolder').style.display != 'none'
				&& g('NewFolderName')) {
			g('NewFolderName').focus();
			if (g('NewFolderName').value== "" ) _setTips(null, '');
		}
	}
	
	var _setTips = function(id, str) {
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
		
		for (var i = 0; i < len; i++) {
			var obj = {};
//			obj.tr = tableList.rows[i];
			// the Youngli.on event can not support chrome
//			if (browser.firefox || browser.ie) {
//				Youngli.on(tableList.rows[i], 'onmouseover', FileAction.setTrOver, obj);
//				Youngli.on(tableList.rows[i], 'onmouseout', FileAction.setTrOut);
// 			} else {
//				tableList.rows[i].onmouseover = function() {
//					FileAction.setTrOver(this);
//				};
//				tableList.rows[i].onmouseout = function() {
//					FileAction.setTrOut(this);
//				};
// 			}
//			can use ing all browsers
			tableList.rows[i].onmouseover = function() {
				FileAction.setTrOver(this);
			};	
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
		// when use Youngli.on() type to add event
		// this.tr is obj.tr
		var trObj = (typeof (obj.tagName) == 'string') ? obj : this.tr;
		dom.addClass(trObj, 'tr-over');
		setFileEditHTML(trObj);
	}
	
	/**
	 * 创建编辑文件的链接HTML
	 * @param {object} trObj tr对象
	 */
	var setFileEditHTML = function(trObj) {
		FileAction.tableListTr = trObj;
		FileAction.tableListTrIndex = (_getTableListTrIndex(trObj));
		fileClass.setFileEditHTML();
		try {
			// set events for edit area 
			g('FileEditBar').onmouseover = function() {
				dom.addClass(trObj, 'tr-over');
				_showFileEditBar();
			}
			g('FileEditBar').onmouseout = function() {
				dom.removeClass(trObj, 'tr-over');
				_hideFileEditBar();
			}
			var left = dom.getPosition(trObj).left;
			var top = dom.getPosition(trObj).top;
			left += 200; // add 200px for file name display
			fileClass.setPosition(g('FileEditBar'), left, top);      
			_showFileEditBar();
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
		// it's DOM or event
		// 'this' for Youngli.on() method
		var trObj = (typeof (obj.tagName) == 'string') ? obj : this;
		dom.removeClass(trObj, 'tr-over');
		// _hideFileEditBar();
	}
	
	/**
	 * 重命名区域的HTML
	 * @param {object} trObj DOM Element
	 */
	var setRenameArea = function(trObj) {
		fileClass.setRenameArea();
		try {
			if (g('FileRenameArea') && trObj.cells[0]) {
				var left = dom.getPosition(g('FileEditBar')).left - 175;
				var top = dom.getPosition(g('FileEditBar')).top - 4;
				fileClass.setPosition(g('FileRenameArea'), left, top);				
				g('FileRenameArea').style.width = trObj.offsetWidth - 35 + 'px';
				// added event on mouse out
//				Youngli.on(g('FileRenameArea'), 'onmouseout', function() {
//						_hideRenameArea();
//				}); 
				if (g('Rename') != null) {
					g('Rename').value = decodeHTML(trObj.cells[0].firstChild.innerHTML); 
					// add return event
					var code = 0;
					if (browser.ie) {
						// repeat events in firefox and chrome
						Youngli.on(g('Rename'), 'onkeyup', 
						function(e) {
//							code = browser.ie ? e.charCode || e.keyCode : e.keyCode;
							code = e.keyCode;
							if (code == 13)
								renameFile(trObj, this.value);
						});
					} else {
						// ie can not get the keyup event
						g('Rename').onkeyup = function(e) {
							code = e.keyCode;
							if (code == 13)
								renameFile(trObj, this.value);
						}
					}					
				}
				_showRenameArea();
			}
		} catch (ex) {
				alert(ex.toString());
		}
	}
	
	/**
	 * 根据当前dom对象，获得当前tr在table里面的序号
	 * @param {obj} trObj tr对象
	 * @param {obj} table table对象,无参数时默认为g('FileTableList')
	 * @return {number} 位置序号，若无则返回-1
	 * 
	 */
	var _getTableListTrIndex = function(trObj, table) {
		var table = table || g('FileTableList');
		var len = table.rows.length;
		for (var i = 0; i < len; i++) {
			if (table.rows[i] == trObj) {
				return i;
			}
		}
		return -1;
	}

	/**
	 * 重命名文件(夹)
	 * @param {object} trObj 一个tr DOM对象
	 * @param {string} newName 新名称
	 * 
	 */
	var renameFile = function(trObj, newName) {
		fileClass.renameFile(trObj, newName);
		_hideRenameArea();
	}
	
	/**
	 * 当新建、删除、复制、更改目录名后刷新左侧导航树目录
	 * 
	 */
	var _refreshDirTree = function() {
		try {
			var state = Tree.getOpenState(UPLOAD.uploadPath);
			Tree.refreshItem(decodeHTML(UPLOAD.uploadPath));
			if (state != 1) {
				// 如果之前的状态不是打开就关闭item
				Tree.closeItem(UPLOAD.uploadPath);
				window.setTimeout(function(){Tree.closeItem(UPLOAD.uploadPath)}, 50); 
			}
		} catch (ex) {
			alert(ex.toString());
		}		
	}
	
	/**
	 * tableListTr获得文件的type
	 */
	var _getType = function() {
		var type;
		if ('object' == typeof FileAction.tableListTr.cells
				&& FileAction.tableListTr.cells[3]
				) {			
			type = (FileAction.tableListTr.cells[3].innerHTML);
		}
		return type;
	}
	
	var parseRenameJSON = function(xhr, responseText) {
		eval(responseText);
		if (MESSAGE['1'] == 'RENAME_RESULT=success') {
			DirAction.getDirJSON(decodeHTML(UPLOAD.uploadPath));
			if (FileAction.tableListTr.cells[3].innerHTML == 'folder') {
				_refreshDirTree();
			}
		} else {
			getReNameError(MESSAGE);
		}
	}
	
	/**
	 * 复制文件(夹)
	 * @param {object} trObj 一个tr DOM对象
	 * 
	 */
	var copyFile = function(trObj) {
		fileClass.copyFile(trObj);
		_hideFileEditBar();
	}
	
	var parseCopyJSON = function(xhr, responseText) {
		eval(responseText);
		if (MESSAGE['2'] == 'COPY_RESULT=success') {
			DirAction.getDirJSON(decodeHTML(UPLOAD.uploadPath));
			_refreshDirTree();
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
	var deleteFile = function(trObj) {
		FileAction.tableListTr = trObj;
		FileAction.tableListTrIndex = (_getTableListTrIndex(trObj));		
		// get the trObj's index number
		fileClass.deleteFile(trObj);
		_hideFileEditBar();
	} 
	
	var parseDeleteJSON = function(xhr, responseText) {
		eval(responseText);
		if (MESSAGE) {
			if (MESSAGE['1'] == 'DELETE_RESULT=success') {
				// refreshItem when delete file
				if (FileAction.tableListTr.cells[3].innerHTML == 'folder') {
					_refreshDirTree();
				}
//				use DHTML to deleteRow or removeChild(DOM);
//				g('FileTableList').deleteRow(FileAction.tableListTrIndex);
				g('FileTableList').childNodes[1].removeChild(FileAction.tableListTr);
// 				// or reload data
//				DirAction.getDirJSON(decodeHTML(UPLOAD.uploadPath));			
			} else {
				getDeleteFileError(MESSAGE);
			}			
		}
	}
		
	var createFolder = function(path, name) {
		if(name == null || trim(name).length == '') {
			_setTips(null, '请输入文件夹名称');
			return false;
		}		
		if(!isAvailableName(name)) {
			_setTips(null, '名字不能含有:' + SPECIAL_CHAR.join(', ') + ' 字符');
			return false;
		}

		fileClass.getFolderJSON(path, name);
		return false;
	}
	
	var parseFolderJSON = function(xhr, responseText) {
//		FILE 作为传递过来的JSON数据，可以根据这个数据insertBefore到table的某行中
//		类似删除文件时的DOM操作，这样可以减少一次请求，等有时间再升级
//      返回JSON串
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
		// 新建文件夹后刷新目录树
		_refreshDirTree();
	}
	
	var _showOrHide = function(obj) {
		if ('object' != typeof obj) return;
		var isHide = ((obj.style.display == '' || obj.style.display == 'none'));
		obj.style.display = isHide ? 'block' : 'none';
	}
	
	var _show = function(obj) {
		if ('object' != typeof obj) return;
		obj.style.display = 'block';
	}
	
	var _hide = function(obj) {
		if ('object' == typeof obj) {
			obj.style.display = 'none';
		}
	}
	
	var _showFileEditBar = function() {
		if (g('FileEditBar'))
			_show(g('FileEditBar'));
	}
	
	var _showRenameArea = function() {
		if (g('FileRenameArea'))
			_show(g('FileRenameArea'));
		isEditing = true;
	}
	
	var _hideFileEditBar = function() {
		if (g('FileEditBar'))
			_hide(g('FileEditBar'));
	}
	
	var hideRenameArea = function() {
		if (g('FileRenameArea')) {
			_hideRenameArea();	
		}
	}
	var _hideRenameArea = function() {
		if (g('FileRenameArea')) {
			_hide(g('FileRenameArea'));
		}		
		isEditing = false;
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
		parseFolderJSON : parseFolderJSON,
		parseDeleteJSON : parseDeleteJSON,
		parseRenameJSON : parseRenameJSON,
		parseCopyJSON   : parseCopyJSON,
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

FileAction.init();/**
 * FileAdmin
 * Copyright 2010 Youngli Inc. All rights reserved.
 * 
 * path: js-src/fa/help.class.js
 * author: lichunping/jarry
 * version: 0.9
 * date: 2010/06/15
 */

/**
 * 帮助类
 * @author lichunping/jarry
 * 
 */
function Help() {
	
}

Help.prototype = {
		
		/**
		 * 生成帮助信息的html
		 */
		setHelpHTML : function(content) {
			try {
				// 创建帮助区域内容
				if (!g('HelpArea')) {
					var html = HTMLTemplate.helpHTML;
					var container = getTemplateHTMLContainer();
					var div = document.createElement('div');
					div.innerHTML = html;
					div.id = 'HelpArea';
					div.className = 'help-area';
					document.body.appendChild(div);
					// 填充帮助信息内容
					if (g('HelpContent')) 
						g('HelpContent').innerHTML = content;
				} else {
					// 直接填充帮助信息内容
					if (g('HelpContent')) 
						g('HelpContent').innerHTML = content;
				}
				// 设置居中显示
				this.setPosition(g('HelpArea'), null, null);				
			} catch (ex) {
				alert(ex.toString());
			}
		},
		
		/**
		 * 设置帮助信息对象的尺寸
		 * @param {object HTMLDivElement} dom 对象
		 * @param {number}  x 纵坐标
		 * @param {number}  y 横坐标
		 * @author lichunping
		 * @version 0.9 
		 */
		setPosition : function(dom, x, y) {
			if(!dom || typeof dom == 'undefined') return;
			
			var windowWidth = document.body.offsetWidth;
			var windowHeight = document.body.offsetHeight;
			var width = 600;
			var height = 400;
			if (!x)
				x = windowWidth > width ? (windowWidth -  width) / 2 : 0;
			if (!y)
				y = windowHeight > height ? (windowHeight -  height) / 2 - 20: 0;
			
			dom.style.left = x + 'px';
			dom.style.top  = y + 'px';
		}
	
}/**
 * FileAdmin
 * Copyright 2010 Youngli Inc. All rights reserved.
 * 
 * path: js-src/fa/help.act.js
 * author: lichunping/jarry
 * version: 0.9
 * date: 2010/06/15
 */
 
 /**
 * 帮助Action
 * 帮助模板与显示帮助信息
 * @author lichunping/jarry
 * 
 */
HelpAction = (function() {
	
	var helpClass = new Help();

	var HELP_PAGE = {
		index  : ''
	};

	var pageInit = function() {
	}

	var show  = function() {
		if (HELP_PAGE.index.length <= 0) {
			var url = 'help/index.html';
			var xhr = ajax.get(url, parseHelpJSON);
		} else {
			helpClass.setHelpHTML(HELP_PAGE.index);
			toggleMask();
			_showHelpArea();
		}
	}

	var _showHelpArea = function() {
		if (g('HelpArea')) {
			g('HelpArea').style.display = '';
		}
	}

	var _hideHelpArea = function() {
		if (g('HelpArea')) {
			g('HelpArea').style.display = 'none';
		}
	}

	var close = function() {
		_hideHelpArea();
		toggleMask();
	}

	var parseHelpJSON = function(xhr, responseText) {
		HELP_PAGE.index = responseText;
		helpClass.setHelpHTML(responseText);
		toggleMask();
		_showHelpArea();
	}

	return {
		pageInit : pageInit,
		show : show,
		close : close
	}
})();
 
HelpAction.pageInit();