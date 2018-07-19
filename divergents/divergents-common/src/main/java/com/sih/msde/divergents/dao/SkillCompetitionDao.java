package com.sih.msde.divergents.dao;
import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;

import com.sih.msde.divergents.common.AbstractTransactionalDao;
import com.sih.msde.divergents.config.SkillCompetitionConfig;
import com.sih.msde.divergents.dto.SkillCompetitionDto;

@Repository
public class SkillCompetitionDao  extends AbstractTransactionalDao {
	private static final Logger LOGGER= LoggerFactory.getLogger(SkillCompetitionDao.class);
	int result;
	
	@Autowired
	private SkillCompetitionConfig skillCompetitionConfig;
	
	public Integer SkillCompetition(SkillCompetitionDto skillCompetitionDto)
	{
	    LOGGER.debug("Received request from service to go to skill competitions: ");
	    
	    try
	    {
	    	LOGGER.debug("Creating hashmap of object to go to skill competitions : " );
	    	Map<String,Object> parameter = new HashMap<>();
	    	LOGGER.debug("Hashmap of object created for skill competition");
	    	parameter.put("id", skillCompetitionDto.getId());
	    	parameter.put("participantName", skillCompetitionDto.getParticipantName());
	    	parameter.put("participantEmail", skillCompetitionDto.getParticipantEmail());
	    	parameter.put("participantAddress", skillCompetitionDto.getParticipantAddress());
	    	parameter.put("participantAge", skillCompetitionDto.getParticipantAge());
	    	parameter.put("skillSector", skillCompetitionDto.getSkillSector());
	    	parameter.put("skillSectorCategory", skillCompetitionDto.getSkillSectorCategory());

	    
	    	LOGGER.debug("Parameters inserted into hashmap");
	    	
	    	return getJdbcTemplate().update(skillCompetitionConfig.getSkillCompetitionCredentials(), parameter);
	    }
	    
	    catch(DataAccessException dE)
	    {
	    	LOGGER.error("An exception has occured while going to skill competition : " + dE);
	    	LOGGER.error("Returning -1");
	    	return -1;
	    }
	    catch(Exception e)
	    {
	    	LOGGER.error("An exception has occured while going to skill competition : " + e);
	    	LOGGER.error("Returning -10");
	    	return -10;
	    	
	    }
		
	    
	}
	

}
