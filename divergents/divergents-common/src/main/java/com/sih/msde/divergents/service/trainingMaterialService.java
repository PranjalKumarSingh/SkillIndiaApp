package com.sih.msde.divergents.service;


	import java.util.Collection;

	import org.slf4j.Logger;
	import org.slf4j.LoggerFactory;
	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.stereotype.Service;

	import com.sih.msde.divergents.dao.trainingMaterialDao;
	import com.sih.msde.divergents.dto.trainingMaterialDto;



	@Service
	public class trainingMaterialService {
		
			
			private static final Logger LOGGER = LoggerFactory.getLogger(trainingMaterialService.class);
			
			@Autowired
			private trainingMaterialDao trainingmaterialDao;
			
			public Collection<trainingMaterialDto> getTrainingMaterialDetails(){
				
				LOGGER.debug("Request received from Control");
				LOGGER.debug("In training Material Service, to get training Material details");
				
				try {
					LOGGER.debug("In try block to get training Material details");
					return trainingmaterialDao.getTrainingMaterialDetails();
				} catch (Exception e) {
				
					LOGGER.debug("An error occurred while getting the training Material details "+ e);
					return null;
				}
			}
				public Collection <trainingMaterialDto> getshowTrainingMaterialBox(String jobRole){
					
					LOGGER.error("Request received from training material Controller through search box");
					LOGGER.error("In Service through search box");
					
					try {
						LOGGER.error("In try block to get jobroles details through search box");
						return trainingmaterialDao.getshowTrainingMaterialBox(jobRole);
					} catch (Exception e) {
					
						LOGGER.error("An error occurred while getting the jobRoles details through search box"+ e);
						return null;
					}
				}
			
			}
			

	
	
