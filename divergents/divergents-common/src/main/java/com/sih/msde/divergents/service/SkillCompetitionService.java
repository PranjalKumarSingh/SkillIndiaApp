package com.sih.msde.divergents.service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



import com.sih.msde.divergents.dao.SkillCompetitionDao;
import com.sih.msde.divergents.dto.SkillCompetitionDto;


@Service
public class SkillCompetitionService {
	
private static final Logger LOGGER= LoggerFactory.getLogger(SkillCompetitionService.class);
	
	@Autowired
	private SkillCompetitionDao skillCompetitionDao;
	
	public Integer getSkillCompetitionService(SkillCompetitionDto skillCompetitionDto)
	{

			LOGGER.debug("Entry in skill competitions by user : " );
			return skillCompetitionDao.SkillCompetition(skillCompetitionDto);	
		
    
	}
}
	
	

