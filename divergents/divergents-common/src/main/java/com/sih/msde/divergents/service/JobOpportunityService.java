package com.sih.msde.divergents.service;

import java.util.Collection;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.sih.msde.divergents.dao.JobOpportunityDao;
import com.sih.msde.divergents.dto.JobOpportunityDto;


@Service
public class JobOpportunityService {
@Autowired
private JobOpportunityDao jobOpportunityDao;

private static final Logger LOGGER= LoggerFactory.getLogger(JobOpportunityService.class);
public Collection<JobOpportunityDto> getJobOpportunity(String location){
	
	LOGGER.debug("Request received from Controller");
	LOGGER.debug("In Job opportunity Service, to get Job opportunity details");
	
	try {
		LOGGER.debug("In try block to get Job opportunity details");
		return jobOpportunityDao.getJobOpportunity(location);
	}
	catch (Exception e) {
	
		LOGGER.debug("An error occurred while getting the details of job opportunity : " + e);
		return null;
	}
}

public Collection<JobOpportunityDto> getPopulateDetailsGrid(){
	
	LOGGER.debug("Request received from Controller");
	LOGGER.debug("In Job opportunity Service, to get Job opportunity details");
	
	try {
		LOGGER.debug("In try block to get Job opportunity details");
		return jobOpportunityDao.getPopulateDetailsGrid();
	}
	catch (Exception e) {
	
		LOGGER.debug("An error occurred while getting the details of job opportunity : " + e);
		return null;
	}
}
}
