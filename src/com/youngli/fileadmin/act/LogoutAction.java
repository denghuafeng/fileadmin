package com.youngli.fileadmin.act;

import java.util.Map;

import com.opensymphony.xwork2.ActionContext;

/**
 * @author lichunping 2010-5
 *         jarryli@gmail.com 
 * 
 */
public class LogoutAction {

	public String execute() {
		Map<String, Object> session = ActionContext.getContext().getSession();
		session.remove("userName");
		session.remove("randomNumber");
		return "success";
	}

}