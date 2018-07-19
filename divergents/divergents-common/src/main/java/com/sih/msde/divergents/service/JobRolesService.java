package com.sih.msde.divergents.service;

import java.util.Collection;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sih.msde.divergents.dao.JobRolesDao;
import com.sih.msde.divergents.dto.JobRolesDto;


@Service
public class JobRolesService {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(JobRolesService.class);
	
	@Autowired
	private JobRolesDao jobRolesDao;
	
	public Collection <JobRolesDto> getshowJobRolesBox(String jobRoles){
		
		LOGGER.error("Request received from JobRoles Controller through search box");
		LOGGER.error("In JobRoles Service through search box");
		
		try {
			LOGGER.error("In try block to get jobroles details through search box");
			return jobRolesDao.getshowJobRolesBox(jobRoles);
		} catch (Exception e) {
		
			LOGGER.error("An error occurred while getting the jobRoles details through search box"+ e);
			return null;
		}
	}
		
public Collection<JobRolesDto> getshowJobRolesLetter(String Alphabet){
	
	LOGGER.error("Request received from JobRoles Controller through letter");
	LOGGER.error("In JobRoles Service through letter");
	
	try {
		LOGGER.error("In try block to get jobroles details through letter");
		return jobRolesDao.getshowJobRolesLetter(Alphabet);
	} catch (Exception e) {
	
		LOGGER.error("An error occurred while getting the details through letter"+ e);
		return null;
	}
}
public Collection<JobRolesDto> getPopulateJobRoleGrid() {
	LOGGER.error("Request received from JobRoles Controller through grid");
	LOGGER.error("In JobRoles Service");
	
	try {
		LOGGER.error("In try block to get jobroles details through grid");
		return jobRolesDao.getPopulateJobRoleGrid();
	} catch (Exception e) {
	
		LOGGER.error("An error occurred while getting  details through grid"+ e);
		return null;
	}
}
}
	

	