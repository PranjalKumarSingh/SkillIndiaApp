package com.sih.msde.divergents.controller;

import java.util.Collection;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sih.msde.divergents.dto.policiesDto;
import com.sih.msde.divergents.service.policiesService;





@RestController
public class policiesController {
	
	private static final Logger LOGGER= LoggerFactory.getLogger(policiesController.class);
	
	@Autowired
	private policiesService policyservice;
	
	@RequestMapping("/getPoliciesDetails")
	public Collection<policiesDto> getPoliciesDetails(){
		
		LOGGER.debug("Request received from frontend");
		LOGGER.debug("In Controller");
		
		try {
			
			LOGGER.debug("In try block to get policies details");
			LOGGER.debug("Sending request to service");
			return policyservice.getPoliciesDetails();
			
		}catch(Exception e) {
			
			LOGGER.error("An error occurred while getting the policies details" + e);
			return null;
			
		}
	}

}
