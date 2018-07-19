package com.sih.msde.divergents.controller;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sih.msde.divergents.dto.SkillCompetitionDto;
import com.sih.msde.divergents.service.SkillCompetitionService;



@RestController
public class SkillCompetitionController {
	private static final Logger LOGGER= LoggerFactory.getLogger(SkillCompetitionController.class);
	@Autowired
	private SkillCompetitionService skillcompetitionService;
	
	// @RequestMapping(value="/getSkillCompetition",method=RequestMethod.POST,consumes=MediaType.ALL_VALUE)
	 @RequestMapping(value="/getSkillCompetition",method=RequestMethod.POST,consumes=MediaType.APPLICATION_JSON_VALUE)
	 public Integer skillCompetitionController(@RequestBody SkillCompetitionDto skillCompetitionDto)
	 {
			
	 try{
			
		 return skillcompetitionService.getSkillCompetitionService(skillCompetitionDto);
				
	 }
		
		 catch(Exception e) {
		
			 LOGGER.error("An error occurred while reporting issue" + e);
			
			 return -1;
		 }

	 }
}


	
