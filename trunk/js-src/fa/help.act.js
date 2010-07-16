/*
 * FileAdmin
 * Copyright 2010 Youngli Inc. All rights reserved.
 * 
 * path: help.act.js
 * author: lichunping/jarry
 * version: 0.9
 * date: 2010/06/15
 */
 
 /**
 * 帮助Action
 * 绘制帮助模板与显示帮助信息
 * 
 */
HelpAction = function() {

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
			setHelpHTML(HELP_PAGE.index);
		}
	}
	
	var setHelpHTML = function(content) {
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
			setPosition(g('HelpArea'), null, null);
			toggleMask();
			showHelpArea();
		} catch (ex) {
			alert(ex.toString());
		}
	}
	
	/**
	 * 设置帮助信息对象的尺寸
	 * @param {object HTMLDivElement} dom 对象
	 * @param {number}  x 纵坐标
	 * @param {number}  y 横坐标
	 * @author lichunping
	 * @version 0.9 
	 */
	var setPosition = function(dom, x, y) {
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

	var showHelpArea = function() {
		if (g('HelpArea')) {
			g('HelpArea').style.display = '';
		}
	}

	var hideHelpArea = function() {
		if (g('HelpArea')) {
			g('HelpArea').style.display = 'none';
		}
	}

	var close = function() {
		hideHelpArea();
		toggleMask();
	}

	var parseHelpJSON = function(xhr, responseText) {
		HELP_PAGE.index = responseText;
		setHelpHTML(responseText);
	}

	return {
		pageInit : pageInit,
		show : show,
		close : close
	}
}();
 
HelpAction.pageInit();