package com.youngli.fileadmin.act;

import java.util.ArrayList;
import java.util.Map;
import com.youngli.fileadmin.common.*;
import com.youngli.fileadmin.file.*;

/**
 * @author lichunping 2010-5
 *         jarryli@gmail.com 
 * 
 */
public class DirAction {

	private String root, path, previousPath, absolutePath;
	private ArrayList<Map<String, String>> fileListMap;
	private ArrayList<String> filesName; 
	private ArrayList<String> foldersName; 
	
	private String[] propertiesName;

	private int listLength;
	private int filesLength, foldersLength, fileListMapLength;
	
	public void setFiles() {
		try {
		absolutePath = FilePath.getDirRealPath(path);
		root = FilePath.getRootPath();
		previousPath = FilePath.getPreviousPath(absolutePath);
		Directory dir = new Directory(absolutePath);
		filesName = dir.getFilesName();
		foldersName = dir.getFolderName();
		listLength = dir.getListLength();
		filesLength = dir.getFilesLength();
		foldersLength = dir.getFoldersLength();
		
		propertiesName = dir.getPropertiesName(); 
		fileListMap    = dir.getFileListMap();
		fileListMapLength = fileListMap.size();
		
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}	
	
	public String execute() {
		setFiles();
		return "success";
	}

	public String getRoot() {
		return root;
	}

	public void setRoot(String root) {
		this.root = root;
	}

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}

	public String getPreviousPath() {
		return previousPath;
	}

	public void setPreviousPath(String previousPath) {
		this.previousPath = previousPath;
	}
	
	public String getAbsolutePath() {
		return absolutePath;
	}

	public void setAbsolutePath(String absolutePath) {
		this.absolutePath = absolutePath;
	}

	public ArrayList<Map<String, String>> getFileListMap() {
		return fileListMap;
	}

	public void setFileListMap(ArrayList<Map<String, String>> fileListMap) {
		this.fileListMap = fileListMap;
	}

	public ArrayList<String> getFilesName() {
		return filesName;
	}

	public void setFilesName(ArrayList<String> filesName) {
		this.filesName = filesName;
	}

	public ArrayList<String> getFoldersName() {
		return foldersName;
	}

	public void setFoldersName(ArrayList<String> foldersName) {
		this.foldersName = foldersName;
	}

	public String[] getPropertiesName() {
		return propertiesName;
	}

	public void setPropertiesName(String[] propertiesName) {
		this.propertiesName = propertiesName;
	}

	public int getListLength() {
		return listLength;
	}

	public void setListLength(int listLength) {
		this.listLength = listLength;
	}

	public int getFilesLength() {
		return filesLength;
	}

	public void setFilesLength(int filesLength) {
		this.filesLength = filesLength;
	}
	

	public int getFileListMapLength() {
		return fileListMapLength;
	}

	public void setFileListMapLength(int fileListMapLength) {
		this.fileListMapLength = fileListMapLength;
	}

	public int getFoldersLength() {
		return foldersLength;
	}

	public void setFoldersLength(int foldersLength) {
		this.foldersLength = foldersLength;
	}	
	
}
