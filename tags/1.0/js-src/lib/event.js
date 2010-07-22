
/**
 * 事件监听对象
 */
var event = event || {};
event._listeners = event._listeners || [];

/**
 * 为目标元素添加事件监听器
 * 
 * @param {HTMLElement|string|window} element  目标元素或目标元素id
 * @param {string}                    type     事件类型
 * @param {Function}                  listener 事件监听器
 * @return {HTMLElement} 目标元素
 */

//event.on = function (element, type, listener) {
event.on = function (element, type, listener, args) {
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
    
    lis = event._listeners;
    
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

event.on = event.on || {};

/*
 * Tangram
 * Copyright 2009 Young li Inc. All rights reserved.
 * 
 * path: event/_unload.js
 * author: erik
 * version: 1.1.0
 * date: 2009/12/16
 */

///import event;

/**
 * 卸载所有事件监听器
 * @private
 */
event._unload = function () {
    var lis = event._listeners,
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
        window.removeEventListener('unload', event._unload, false);
    } else {
        window.detachEvent('onunload', event._unload);
    }
};


// 在页面卸载的时候，将所有事件监听器移除
if (window.attachEvent) {
    window.attachEvent('onunload', event._unload);
} else {
    window.addEventListener('unload', event._unload, false);
}


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
