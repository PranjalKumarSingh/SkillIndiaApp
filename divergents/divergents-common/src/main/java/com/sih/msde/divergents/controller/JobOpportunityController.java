package com.sih.msde.divergents.controller;

import java.util.Collection;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sih.msde.divergents.dto.JobOpportunityDto;
import com.sih.msde.divergents.service.JobOpportunityService;

@RestController

public class JobOpportunityController {
	@Autowired
	private JobOpportunityService jobOpportunityService;
	
	private static final Logger LOGGER= LoggerFactory.getLogger(JobOpportunityController.class);
	
	@RequestMapping("/showJobOpportunity")
	public Collection<JobOpportunityDto> getJobOpportunity(@RequestParam("location") String location){
		
		 	
		try {
			LOGGER.error("in try block of controller");
			LOGGER.error("Sending request to service :" +location);
			Collection<JobOpportunityDto> oldCollection = jobOpportunityService.getJobOpportunity(location);
			return oldCollection;
			
		}catch(Exception e) {

			LOGGER.debug("The exception is : " + e);
			return null;
			
		}
	

}
	
	@RequestMapping("/populategrid")
	public Collection<JobOpportunityDto> getPopulatedetailsGrid(){
		
	 	
		try {
			LOGGER.error("in try block of controller");
			LOGGER.error("Sending request to service :");
			return jobOpportunityService.getPopulateDetailsGrid();
			
		}catch(Exception e) {

			LOGGER.debug("The exception is : " + e);
			return null;
			
		}
	

}
	
}