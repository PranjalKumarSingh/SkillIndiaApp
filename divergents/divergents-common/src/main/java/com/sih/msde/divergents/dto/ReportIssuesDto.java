package com.sih.msde.divergents.dto;

import com.sih.msde.divergents.common.BaseDto;

public class ReportIssuesDto extends BaseDto
{

	private String issueId;
	private String candidateName;
	private String candidateId;
	private String issueWith;
	private String issueType;
	private String instituteName;
	private String instituteId;
	private String issueDesription;
	public String getIssueId() {
		return issueId;
	}
	public void setIssueId(String issueId) {
		this.issueId = issueId;
	}
	public String getCandidateName() {
		return candidateName;
	}
	public void setCandidateName(String candidateName) {
		this.candidateName = candidateName;
	}
	public String getCandidateId() {
		return candidateId;
	}
	public void setCandidateId(String candidateId) {
		this.candidateId = candidateId;
	}
	public String getIssueWith() {
		return issueWith;
	}
	public void setIssueWith(String issueWith) {
		this.issueWith = issueWith;
	}
	public String getIssueType() {
		return issueType;
	}
	public void setIssueType(String issueType) {
		this.issueType = issueType;
	}
	public String getInstituteName() {
		return instituteName;
	}
	public void setInstituteName(String instituteName) {
		this.instituteName = instituteName;
	}
	public String getInstituteId() {
		return instituteId;
	}
	public void setInstituteId(String instituteId) {
		this.instituteId = instituteId;
	}
	public String getIssueDesription() {
		return issueDesription;
	}
	public void setIssueDesription(String issueDesription) {
		this.issueDesription = issueDesription;
	}
	

	public ReportIssuesDto(String issueId,String candidateName, String candidateId, String issueWith,
			String issueType, String instituteName, String instituteId , String issueDescription) {
		super();

		this.issueId =issueId ;
		this.candidateName =candidateName ;
		this.issueWith =issueWith ;
		this.issueType =issueType;
		this.instituteName =instituteName ;
		this.instituteId =instituteId ;
		this.issueDesription =issueDescription ;
	}
	public ReportIssuesDto() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	
	

}
