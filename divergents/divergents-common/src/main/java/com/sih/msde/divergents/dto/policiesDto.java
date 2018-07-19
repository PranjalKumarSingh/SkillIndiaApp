package com.sih.msde.divergents.dto;

import com.sih.msde.divergents.common.BaseDto;

public class policiesDto extends BaseDto{
	
	private String policyId;
	private String title;
	private String path;

	public String getPolicyId() {
		return policyId;
	}


	public String getTitle() {
		return title;
	}


	public String getPath() {
		return path;
	}


	public void setPolicyId(String policyId) {
		this.policyId = policyId;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public void setPath(String path) {
		this.path = path;
	}

	
	/*------CONSTRUCTOR-------------*/
	
	public policiesDto(String policyId, String title, String path) {
		super();
		this.policyId = policyId;
		this.title = title;
		this.path = path;
		
	}
	
	
	public policiesDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
