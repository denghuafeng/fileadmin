package com.youngli.fileadmin.act;

import java.io.File;
import java.util.Map;

import com.opensymphony.xwork2.ActionContext;
import com.youngli.fileadmin.common.ConfigProperties;
import com.youngli.fileadmin.common.FilePath;

/**
 * @author lichunping 2010-5
 *         jarryli@gmail.com 
 * 
 */
public class LoginAction {
	
	private String userName, passWord, validateCode;
	private double random;
	private String randomNumber;
	
	private String message;

	public String execute() {
		
		setRandom(Math.random() * 1000);		
		Map<String, Object> session = ActionContext.getContext().getSession();
		setRandomNumber( (String)session.get("randomNumber"));
		
		if (userName == null || passWord == null || validateCode == null) {
			return "failed";
		}		
		if (checkUserName() && checkPassWord() && checkValidateCode()) {
			session.put("userName", userName);
			setMessage("loginSuccess");
			return "success";
		}
		setMessage("loginFailed");
		return "failed";
	}
	
	public boolean checkUserName() {
		if (userName != null) {	
			String webInfPath = new File(FilePath.class.getResource("/").getPath()).getParent();
			String propertiesPath = webInfPath + "/classes/fileadmin.properties";			
			ConfigProperties configProps = new ConfigProperties(propertiesPath);
			String user = configProps.getValue("fileadmin.admin.username");
			
			return userName.toLowerCase().equals(user);
		}
		return false;
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
	
	public boolean checkPassWord() {
		if (passWord != null) {
			String webInfPath = new File(FilePath.class.getResource("/").getPath()).getParent();
			String propertiesPath = webInfPath + "/classes/fileadmin.properties";			
			ConfigProperties configProps = new ConfigProperties(propertiesPath);
			String user = configProps.getValue("fileadmin.admin.password");
			
			return passWord.toLowerCase().equals(user);
		}
		return false;
	}
	
	public boolean checkValidateCode() {
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

	public String getRandomNumber() {
		return randomNumber;
	}

	public void setRandomNumber(String randomNumber) {
		this.randomNumber = randomNumber;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}	
	
}