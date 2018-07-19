package com.sih.msde.divergents.service;

import java.util.Collection;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sih.msde.divergents.dao.policiesDao;
import com.sih.msde.divergents.dto.policiesDto;


@Service
public class policiesService {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(policiesService.class);
	
	@Autowired
	private policiesDao policyDao;
	
	public Collection<policiesDto> getPoliciesDetails(){
		
		LOGGER.debug("Request received from Control");
		LOGGER.debug("In policies Service, to get policies details");
		
		try {
			LOGGER.debug("In try block to get policies details");
			return policyDao.getPoliciesDetails();
		} catch (Exception e) {
		
			LOGGER.error("An error occurred while getting the policies details"+ e);
			return null;
		}
	}

}
