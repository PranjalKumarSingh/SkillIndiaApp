package com.sih.msde.divergents.dto;

import com.sih.msde.divergents.common.BaseDto;

public class TalentAquisitionDto extends BaseDto {
	private String candidateId;
	private String candidateName;
	private String age;
	private String location;
	private String email;
	
	public String getCandidateId() {
		return candidateId;
	}
	public void setCandidateId(String candidateId) {
		this.candidateId = candidateId;
	}
	public String getCandidateName() {
		return candidateName;
	}
	public void setCandidateName(String candidateName) {
		this.candidateName = candidateName;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	


	

	

	

	public TalentAquisitionDto(String candidateId, String candidateName,
		String age, String location, String email) {
	super();
	this.candidateId = candidateId;
	this.candidateName = candidateName;
	this.age = age;
	this.location = location;
	this.email = email;
}
	public TalentAquisitionDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}

