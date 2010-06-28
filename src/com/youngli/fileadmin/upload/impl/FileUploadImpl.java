package com.youngli.fileadmin.upload.impl;

import java.io.*;
import java.util.*;

import com.youngli.fileadmin.upload.FileUpload;

/**
 * @author lichunping 2010-5 jarryli@gmail.com 
 * upload file and save
 */
public class FileUploadImpl implements FileUpload {
	/**
	 * save upload files name and type
	 * @see FileUploadAction.java
	 */
	private ArrayList<Map<String, String>> uploadsList = new ArrayList<Map<String, String>>();
	private Map<String, String> properties = new HashMap<String, String>();
	
    public FileUploadImpl() {

    }
     
    public ArrayList<Map<String, String>> getUploadsList() {
    	return uploadsList;
    }
    
	public void setUploadsList(ArrayList<Map<String, String>> uploadsList) {
		this.uploadsList = uploadsList;
	}
    
    public void addProperty(String key, String value) {
    	properties.put(key, value);
    }
    
    public void addUploadsListRow(Map<String, String> properties) {
		if (properties != null) {
			this.properties = properties;
		}
		uploadsList.add(this.properties);
    }
    
	public void resetProperty() {
		properties = new HashMap<String, String>();
	}
    
    /**
     * move upload file to the path;
     * @param file
     * @param to
     * @return
     */
	public boolean move(String from, String to) {
		try {
			File fromFile = new File(to);
			File toFile   = new File(to);
			if (!toFile.exists()) {
				return fromFile.renameTo(toFile);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;
	}
	
	public boolean move(File fromFile, String to) {
		try {
			String toPath = to;
			File toFile   = new File(toPath);
			if (fromFile.exists() && !toFile.exists()) {
				return fromFile.renameTo(toFile);
				// move or copy file to new path
				//FileEdit fileEdit = new FileEdit();
				//return fileEdit.copyFile(fromFile.getAbsolutePath(), toPath);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;
	}
	
	/**
	 * moveFileReplace:
	 * 移动文件，若已存在移动到的同名文件，则提前删除
	 * @param fromFile
	 * @param to
	 * @return      
	 * @since
	 */
	public boolean moveFileReplace(File fromFile, String to) {
		try {
			String toPath = to;
			File toFile   = new File(toPath);
			if (toFile.exists()) {
				toFile.delete();
			}
			if (fromFile.exists()) {
				return fromFile.renameTo(toFile);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;
	}
	
	public boolean moveFiles(ArrayList<File> from, String toPath) {
		boolean moveSuccess = true;
		try {
			for (int i = 0; i < from.size(); i++) {
				File file = from.get(i);
				Map<String, String> uploadFile = uploadsList.get(i);
				if (!moveFileReplace(file, toPath + uploadFile.get("name"))) {
					moveSuccess = false;
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return moveSuccess;
	}

	public Map<String, String> getProperties() {
		return properties;
	}

	public void setProperties(Map<String, String> properties) {
		this.properties = properties;
	}
	
}
