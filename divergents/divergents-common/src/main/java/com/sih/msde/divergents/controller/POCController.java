package com.sih.msde.divergents.controller;

import java.util.Collection;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sih.msde.divergents.dto.PocDto;
import com.sih.msde.divergents.service.POCService;





@RestController
public class POCController {
	
	private static final Logger LOGGER= LoggerFactory.getLogger(POCController.class);
	
	@Autowired
	private POCService pocservice;
	
	@RequestMapping("/getTrainingPartnerDetailForPOC")
	public Collection<PocDto> getTrainingPartnerDetailForPOC(){
		
		LOGGER.debug("Request received from frontend");
		LOGGER.debug("In POC Controller");
		
		try {
			
			LOGGER.debug("In try block to get training partner details for POC");
			LOGGER.debug("Sending request to service");
			return pocservice.getPOCTrainingPartnerDetail();
			
		}catch(Exception e) {
			
			LOGGER.debug("An error occurred while getting the training partner details for POC" + e);
			return null;
			
		}
	}

}
