package com.sih.msde.divergents.controller;


	import java.util.Collection;

	import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

	import com.sih.msde.divergents.dto.trainingMaterialDto;
import com.sih.msde.divergents.service.trainingMaterialService;
	
	@RestController
	public class trainingMaterialController {
			
			private static final Logger LOGGER= LoggerFactory.getLogger(trainingMaterialController.class);
			
			@Autowired
			private trainingMaterialService trainingmaterialService;
			
			@RequestMapping("/getTrainingMaterialDetails")
			public Collection<trainingMaterialDto> getTrainingMaterialDetails(){
				
				LOGGER.debug("Request received from frontend");
				LOGGER.debug("In training Material Controller");
				
				try {
					
					LOGGER.debug("In try block to get training Material details ");
					LOGGER.debug("Sending request to service");
					return trainingmaterialService.getTrainingMaterialDetails();
					
				}catch(Exception e) {
					
					LOGGER.debug("An error occurred while getting the training Material details" + e);
					return null;
					
				}
			}

	@RequestMapping("/searchTrainingMaterial")
	public Collection<trainingMaterialDto> SearchRoleInSearchBox(@RequestParam("jobRole") String jobRole){
		
		try {
			
			LOGGER.debug("In try block to get training Material details ");
			LOGGER.debug("Sending request to service");
			
			return trainingmaterialService.getshowTrainingMaterialBox(jobRole);
			
			
		}catch(Exception e) {
			
			LOGGER.debug("An error occurred while getting the training Material details" + e);
			return null;
			
		}
		
		
	}
	
	}
