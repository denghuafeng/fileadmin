package com.youngli.fileadmin.common;

import java.io.File;


/**
 * @author lichunping 2010-5 jarryli@gmail.com 
 * 
 */
public class FilePath {
	
	public static String ROOT_PATH = getRootPath();
	
	public FilePath() {

	}
	
	public static String getRootPath() {
		try {
			String webInfPath = new File(FilePath.class.getResource("/").getPath()).getParent();
			String propertiesPath = webInfPath + "/classes/fileadmin.properties";			
			ConfigProperties configProps = new ConfigProperties(propertiesPath);
			return configProps.getValue("fileadmin.root.path");				
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "";
	}
	
	/**
	 * set default root path, if it has not root path, add root path for the path;
	 * @param path
	 * @return
	 */
	public static String getPath (String path) {
		ROOT_PATH = getRootPath();
		if (path == null) return ROOT_PATH;
		try {
			int rootLen = ROOT_PATH.length();
			String startPath = "";
				if (path.indexOf(ROOT_PATH) != -1)
					startPath = path.substring(0, rootLen);
				
				if (!startPath.equals(ROOT_PATH)) {
					path = ROOT_PATH + path;
				}
			
			} catch (Exception e) {
				e.printStackTrace();
		}
		return path;
	}
	
	public static String getDirRealPath(String path) {
		ROOT_PATH = getRootPath();
		if (path == null || path.trim().equals("")) path = ROOT_PATH;
		int len = path.length();
		String lastChar = path.substring(len - 1, len);
		path = CharacterCode.iso2utf8(path);
		path = escapePath(path);
		if (!lastChar.equals("/")) {
			path += "/";
		}
		path = getPath(path);  // check root path
		return path;
	}
	
	public static String getFileRealPath(String path) {
		if (path == null || path.equals(""))return null;
		path = CharacterCode.iso2utf8(path);
		path = escapePath(path);
		path = getPath(path);  // check root path
		return path;
	}
	
	public static String getRelativePath(String root, String path) {
		String relativePath = null;
		try {
			path = CharacterCode.iso2utf8(path);
			int rootLen = root.length();
			String lastChar = root.substring(rootLen - 1, rootLen);
			if (!lastChar.equals("/")) {
				root += "/";
			}
			
			relativePath = path.replaceFirst(root, "");
	   } catch(Exception e) {
		   e.printStackTrace();
	   }
		return relativePath;
	}
	
	public static String escapePath(String path) {
		if (path != null && path.length() > 1) {
			path = path.replaceAll("\\\\", "/");
		}
		return path;
	}
	
	/**
	 * get previous path, find last slash
	 * @param path local path /home/work/ 
	 * @return
	 */
	public static String getPreviousPath(String path) {
		int last;
		if (path != null && path.length() > 1) {
			last = path.lastIndexOf("/");
			path = path.substring(0, last);
			last = path.lastIndexOf("/");
			path = path.substring(0, last + 1);
		}
		return path;
	}
	
	/**
	 * according last dot get extension by file name
	 * @param fileName
	 * @return extension or null;
	 */
	public static String getExt(String fileName) {
		try {
			if (fileName != null && fileName.length() > 0) {
				int lastDotAt = fileName.lastIndexOf(".");
				if (lastDotAt != -1) {
					fileName = fileName.substring(lastDotAt + 1, fileName.length());
				} else {
					fileName = "";
				}
			}
		} catch(Exception e) {
	        System.out.println(e.getMessage());
		}
		return fileName;
	}
	/**
	 * get name no extension
	 * @param fileName
	 * @return
	 */	
	public static String getRealName(String fileName) {
		try {
			if (fileName != null && fileName.length() > 0) {
				String ext = getExt(fileName);
				int extAt = fileName.length();
				if (ext.length() > 0) {
					extAt = fileName.lastIndexOf(ext) - 1;
				}
				fileName = fileName.substring(0, extAt);
			}
		} catch(Exception e) {
	        System.out.println(e.getMessage());
		}
		return fileName;
	}
	
	/**
	 * check the file extension is contained by the extensions;
	 * @param ext
	 * @param exts
	 * @return true or false
	 */
	public static boolean isContainExt(String ext, String[] exts) {
		if (ext == null || exts == null) return false;
		int i = 0, extsLen = exts.length;
			while (i < extsLen) {
				if (exts[i].equals(ext)) 
					return true;
				i++;
			}
		return false;
	}
	
	public static boolean isOfficeExt(String ext) {
		String[] exts = {"doc", "xls", "ppt", "docx", "xlsx", "pptx"};
		return isContainExt(ext, exts);
	}	
	
	/**
	 * path Test Program
	 * main:
	 *
	 * @param args
	 * @throws Exception      
	 * @since
	 */
	public static void main(String[] args) throws Exception {
		System.out.println(Thread.currentThread().getContextClassLoader().getResource(""));
		//System.out.println(Class.class.getClassLoader().getResource("/"));
		System.out.println(ClassLoader.getSystemResource(""));
		System.out.println(Class.class.getResource("/"));
		System.out.println(Class.class.getResource("/"));
		
		String webAppPath = Class.class.getClass().getResource("/").getPath();
		//int len = webAppPath.length();
		int lastIdx = webAppPath.indexOf("work") != -1 ? webAppPath.indexOf("work") : webAppPath.length();
		webAppPath = webAppPath.substring(0, lastIdx);
		
		System.out.println(webAppPath + "WEB-INF/classes/fileadmin.properties");
		//webAppPath = webAppPath + "WEB-INF/classes/fileadmin.properties";
		webAppPath = System.getProperty("user.dir")+ "/WEB-INF/classes/fileadmin.properties";
		File f = new File(webAppPath);
		if (f.isFile()) {
			System.out.println(f.length());
		} 
		
		String webinfPath = new File(FilePath.class.getResource("/").getPath()).getParent()+"/WEB-INF/";
		System.out.println(webinfPath);
				
		String root = new ConfigProperties(webAppPath).getValue("fileadmin.root.path");
		System.out.println(root);
		System.out.println(ROOT_PATH);
		
		//Class
		System.out.println(new File("/").getAbsolutePath());
		System.out.println(System.getProperty("user.dir")); 
		System.out.println("物理路径分割符是： " + System.getProperty("file.separator") );
	}

}
