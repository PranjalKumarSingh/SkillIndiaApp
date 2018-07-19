package com.sih.msde.divergents.controller;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sih.msde.divergents.dto.ReportIssuesDto;
import com.sih.msde.divergents.service.ReportIssuesService;

 @RestController
 public class ReportIssuesController 
 {

	private static final Logger LOGGER= LoggerFactory.getLogger(ReportIssuesController.class);
		@Autowired
		private ReportIssuesService reportissuesService;
		
//		 @RequestMapping(value="/getReportIssues",method=RequestMethod.POST,consumes=MediaType.ALL_VALUE)
		@RequestMapping(value="/getReportIssues",method=RequestMethod.POST,consumes=MediaType.APPLICATION_JSON_VALUE)
		 public Integer reportIssuesController(@RequestBody ReportIssuesDto reportIssuesDto)
		 {
				
		 try{
				
			 return reportissuesService.getReportIssuesService(reportIssuesDto);
					
		 }
			
			 catch(Exception e) {
			
				 LOGGER.error("An error occurred while reporting issue" + e);
				
				 return -1;
			 }

		 }
	}





