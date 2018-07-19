package com.sih.msde.divergents.service;


	import java.util.Collection;

	import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sih.msde.divergents.dao.TalentAquisitionDao;
import com.sih.msde.divergents.dto.TalentAquisitionDto;

	

	@Service
	public class TalentAquisitionService {
		
		private static final Logger LOGGER = LoggerFactory.getLogger(TalentAquisitionService.class);
		
		@Autowired
		private TalentAquisitionDao talentAquisitionDao;
		
		public Collection<TalentAquisitionDto> getCandidateDetails(String jobRole){
			
			LOGGER.debug("Request received from Control");
			LOGGER.debug("In talentAquisition Service, to get job role name for talentAquisition");
			
			try {
				LOGGER.debug("In try block to get job role name");
				return talentAquisitionDao.getCandidateDetails(jobRole);
			} catch (Exception e) {
			
				LOGGER.error("An error occurred while getting the job role name for talentAquisition" + e);
				return null;
			}
		}

	}


