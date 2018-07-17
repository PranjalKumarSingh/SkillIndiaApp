package com.sih.msde.divergents.dto;

import com.sih.msde.divergents.common.BaseDto;

public class JobOpportunityDto extends BaseDto{
	private String jobId;
	private String jobTitle;
	private String jobOrganisation;
	private String location;
	private double ctc;
	private String jobDescription;
	public String getJobId() {
		return jobId;
	}
	public void setJobId(String jobId) {
		this.jobId = jobId;
	}
	public String getJobTitle() {
		return jobTitle;
	}
	public void setJobTitle(String jobTitle) {
		this.jobTitle = jobTitle;
	}
	public String getJobOrganisation() {
		return jobOrganisation;
	}
	public void setJobOrganisation(String jobOrganisation) {
		this.jobOrganisation = jobOrganisation;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public double getCtc() {
		return ctc;
	}
	public void setCtc(double ctc) {
		this.ctc = ctc;
	}
	public String getJobDescription() {
		return jobDescription;
	}
	public void setJobDescription(String jobDescription) {
		this.jobDescription = jobDescription;
	}
	public JobOpportunityDto(String jobId, String jobTitle,
			String jobOrganisation, String location, double ctc,
			String jobDescription) {
		super();
		this.jobId = jobId;
		this.jobTitle = jobTitle;
		this.jobOrganisation = jobOrganisation;
		this.location = location;
		this.ctc = ctc;
		this.jobDescription = jobDescription;
	}
	public JobOpportunityDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	

}
