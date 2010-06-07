package com.youngli.fileadmin;
import java.util.Map;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.youngli.fileadmin.act.LoginAction;
import com.youngli.fileadmin.common.CharacterCode;
/**
 * @author lichunping
 * 
 */
public class Index extends ActionSupport {
	
	private static final long serialVersionUID = 1L;
	private String message;
	private String path, userName, login;

	public Index() {
		
	}
	
	public String execute() {
		//message = "Welcome";
		
		if (login != null) 
			return "login";
		
		Map<String, Object> session = ActionContext.getContext().getSession();
		userName = (String)session.get("userName");
		LoginAction login = new LoginAction();
		if (userName == null) {
			return "login";
		} else if (!login.checkUserName(userName)) {
			return "login";
		}		
		
		return SUCCESS;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		path = CharacterCode.iso2utf8(path);
		this.path = path;
	}


	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}	
	
}
