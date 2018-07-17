package com.sih.msde.divergents.controller;

import java.util.Collection;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sih.msde.divergents.dto.JobOpportunityDto;
import com.sih.msde.divergents.service.JobOpportunityService;

@RestController

public class JobOpportunityController {
	@Autowired
	private JobOpportunityService jobOpportunityService;
	
	private static final Logger LOGGER= LoggerFactory.getLogger(JobOpportunityController.class);
	
	@RequestMapping("/showJobOpportunity")
	public Collection<JobOpportunityDto> getJobOpportunity(){
		
		 	
		try {
			
			return jobOpportunityService.getJobOpportunity();
			
		}catch(Exception e) {

			LOGGER.debug("The exception is : " + e);
			return null;
			
		}
	

}
}