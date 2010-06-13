package com.youngli.fileadmin.act;

import com.youngli.fileadmin.common.ConstantSession;

/**
 * @author lichunping 2010-5
 *         jarryli@gmail.com 
 * 
 */
public class LogoutAction {
	
	String userName;

	public String execute() {
		SessionAction sessionAction = new SessionAction();
		sessionAction.removeUserName();
		sessionAction.remove(ConstantSession.RANDOM_NUMBER);
		return "success";
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

}