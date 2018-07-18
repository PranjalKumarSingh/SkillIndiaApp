
package com.sih.msde.divergents.dto;

import com.sih.msde.divergents.common.BaseDto;

public class JobRolesDto extends BaseDto{
	
	private String jobRoleId;
	private String jobRole;
	private String sectorSkillCouncil;
	
	public String getJobRoleId() {
		return jobRoleId;
	}
	public void setJobRoleId(String jobRoleId) {
		this.jobRoleId = jobRoleId;
	}
	public String getJobRole() {
		return jobRole;
	}
	public void setJobRole(String jobRole) {
		this.jobRole = jobRole;
	}
	public String getSectorSkillCouncil() {
		return sectorSkillCouncil;
	}
	public void setSectorSkillCouncil(String sectorSkillCouncil) {
		this.sectorSkillCouncil = sectorSkillCouncil;
	}
	
	
	public JobRolesDto(String jobRoleId, String jobRole, String sectorSkillCouncil) {
		super();
		this.jobRoleId = jobRoleId;
		this.jobRole = jobRole;
		this.sectorSkillCouncil = sectorSkillCouncil;

	}

	
	public JobRolesDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
}
