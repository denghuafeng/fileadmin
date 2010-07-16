package com.youngli.fileadmin.act;
import java.io.File;
import com.youngli.fileadmin.common.ConfigProperties;
import com.youngli.fileadmin.common.FilePath;
import com.youngli.fileadmin.common.StringUtils;

/**
 * @author lichunping 2010-5
 *         jarryli@gmail.com 
 * 
 */
public class LoginAction {
	
	private String userName;
	private String passWord;
	private String validateCode;
	private String remember;
	private double random;	
	private String message;
	
	private CookieAction cookie;
	
	public LoginAction() {
		cookie = new CookieAction();
	}
	
	public String execute() {
		
		 // 给验证码加随机数防止图片被缓存
		setRandom(Math.random() * 1000);		
		
		if (userName == null || passWord == null || validateCode == null) {
			return "failed";
		}
		
		if (checkUserName(userName) && checkPassWord(passWord) && checkValidateCode(validateCode)) {
			new SessionAction().setUserName(userName);
			setMessage("loginSuccess");
			// if selected remember user
			if (remember != null) {
				if (remember.equals("yes")) {
					setRememberUser();
				} else {
					removeRememberUser();
				}			
			}

			return "success";
		}
		setMessage("loginFailed");
		return "failed";
	}
	
	private void setRememberUser() {
		cookie.setCookie("userName", userName);
		cookie.setCookie("remember", remember);
	}
	
	private void removeRememberUser() {
		cookie.removeCookie("userName");
		cookie.removeCookie("remember");
	}
	
	public boolean checkUserName(String userName) {
		if (userName != null) {	
			String webInfPath = new File(FilePath.class.getResource("/").getPath()).getParent();
			String propertiesPath = webInfPath + "/classes/fileadmin.properties";			
			ConfigProperties configProps = new ConfigProperties(propertiesPath);
			String user = configProps.getValue("fileadmin.admin.username");
			
			return userName.toLowerCase().equals(user);
		}
		return false;
	}

	public boolean isLogon() {
		// 先检查cookie
		String userName;
		userName = cookie.getCookie("userName");
		String remember = cookie.getCookie("remember");
		if (remember != null && userName != null) {
			if (remember.equals("yes") && checkUserName(userName)) {
				// 同时把用户信息写入到session
				new SessionAction().setUserName(userName);
				return true;
			}
		}
		// 再检查session
		SessionAction sessionAction = new SessionAction();
		userName = sessionAction.getUserName();	
		if (userName != null && userName.length() > 0) {	
				if (checkUserName(userName)) {
					return true;
				}
		}
		return false;
	}
	
	public boolean logon() {
		return isLogon();
	}
	
	public boolean checkPassWord(String passWord) {
		if (passWord != null) {
			String webInfPath = new File(FilePath.class.getResource("/").getPath()).getParent();
			String propertiesPath = webInfPath + "/classes/fileadmin.properties";			
			ConfigProperties configProps = new ConfigProperties(propertiesPath);
			String pass = configProps.getValue("fileadmin.admin.password");
			return StringUtils.md5(passWord).equals(pass);
		}
		return false;
	}
	
	public boolean checkValidateCode(String validateCode) {
		SessionAction sessionAction = new SessionAction();
		String randomNumber = sessionAction.getRandomNumber();
		if (validateCode != null && randomNumber != null)
			return validateCode.toLowerCase().equals(randomNumber.toLowerCase());
		
		return false;
	}
	
	public double getRandom() {
		return random;
	}

	public void setRandom(double random) {
		this.random = random;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassWord() {
		return passWord;
	}

	public void setPassWord(String passWord) {
		this.passWord = passWord;
	}

	public String getValidateCode() {
		return validateCode;
	}

	public void setValidateCode(String validateCode) {
		this.validateCode = validateCode;
	}

	public String getMessage() {
		return message;
	}

	public String getRemember() {
		return remember;
	}

	public void setRemember(String remember) {
		this.remember = remember;
	}

	public void setMessage(String message) {
		this.message = message;
	}	
	
}