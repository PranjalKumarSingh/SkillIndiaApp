package com.sih.msde.divergents.controller;

import java.util.Collection;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sih.msde.divergents.dto.TalentAquisitionDto;
import com.sih.msde.divergents.service.TalentAquisitionService;





@RestController
public class TalentAquisitionController {
	private static final Logger LOGGER= LoggerFactory.getLogger(TalentAquisitionController.class);

	@Autowired
	private TalentAquisitionService talentAquisitionService;
	
	
	@RequestMapping("/getCandidateDetails")
	public Collection<TalentAquisitionDto> getCandidateDetails(@RequestParam("jobRole") String jobRole){
		
		 	
		try {
			LOGGER.error("in try block");
			return talentAquisitionService.getCandidateDetails(jobRole);
			
		}catch(Exception e) {

			LOGGER.error("The exception is : " + e);
			return null;
			
		}
	

}
}