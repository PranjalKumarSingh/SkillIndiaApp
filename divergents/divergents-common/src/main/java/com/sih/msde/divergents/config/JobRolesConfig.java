
package com.sih.msde.divergents.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix="JobRolesDetails",locations="classpath:sql/JobRoles.yml")
public class JobRolesConfig {
	
	private String showJobRolesBox;
    private String PopulateJobRoleGrid;
    private String showJobRolesLetter;
    
     public  String getshowJobRolesBox() {
		return showJobRolesBox;
	}

	public void setshowJobRolesBox(String showJobRolesBox) {
		this.showJobRolesBox = showJobRolesBox;
	}

	public String getPopulateJobRoleGrid() {
		return PopulateJobRoleGrid ;
	}

	public void setPopulateJobRoleGrid(String PopulateJobRoleGrid) {
		this.PopulateJobRoleGrid= PopulateJobRoleGrid;
	}

	public String getshowJobRolesLetter() {
		return showJobRolesLetter;
	}

	public void setshowJobRolesLetter(String showJobRolesLetter) {
		this.showJobRolesLetter = showJobRolesLetter;
	}

	


}

