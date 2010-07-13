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
	
	private String userName, passWord, validateCode;
	private double random;
	
	private String message;

	
	public String execute() {
		
		 // 给验证码加随机数防止图片被缓存
		setRandom(Math.random() * 1000);		
		
		if (userName == null || passWord == null || validateCode == null) {
			return "failed";
		}				
		if (checkUserName(userName) && checkPassWord(passWord) && checkValidateCode(validateCode)) {
			new SessionAction().setUserName(userName);
			setMessage("loginSuccess");
			return "success";
		}
		setMessage("loginFailed");
		return "failed";
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
		SessionAction sessionAction = new SessionAction();
		String userName = sessionAction.getUserName();	
		if (userName == null || userName.length() <= 0)  	
			return false;
		return checkUserName(userName);
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

	public void setMessage(String message) {
		this.message = message;
	}	
	
}