package com.sih.msde.divergents.controller;
import java.util.Collection;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.sih.msde.divergents.dto.JobRolesDto;
import com.sih.msde.divergents.service.JobRolesService;



@RestController
public class JobRolesController {
	
	private static final Logger LOGGER= LoggerFactory.getLogger(JobRolesController.class);
	
	@Autowired
	private JobRolesService jobRolesservice;

	String jobRole = "";
	String x= ""; 
	
     @RequestMapping("/JobRoles")
	public Collection<JobRolesDto> getPopulateJobRoleGrid(){
		
		LOGGER.error("Request received from frontend to populate ui grid");
		LOGGER.error("In JobRoles Controller to populate ui grid");
		try {
			
			LOGGER.error("In try block to get jobroles details to populate ui grid");
			LOGGER.error("Sending request to service to populate ui grid");
			return jobRolesservice.getPopulateJobRoleGrid();
			
		}catch(Exception e) {
			
			LOGGER.error("An error occurred while getting the job roles details for JobRolesPage to populate ui grid" + e);
			return null;
			
		}
	}
     
	@RequestMapping("/SearchJobRole")
	public Collection<JobRolesDto> SearchRoleInSearchBox(@RequestParam("JobRole") String jobRole){
		
		try {
			
			LOGGER.error("In try block ");
			LOGGER.error("Sending request to service to get JobRole by searchbox :" +jobRole);
		  //  String job = jobRole+"%";
			Collection<JobRolesDto> oldCollection = jobRolesservice.getshowJobRolesBox(jobRole);
			return oldCollection;
			
			}catch(Exception e) {
			
			LOGGER.error("An error occurred while getting the details of the job role in search box" + e);
			return null;
			
		}
	}
	
    @RequestMapping("/getJobRoleForSelectedLetter")
	public Collection<JobRolesDto> SearchJobByLetter(@RequestParam("x") String Alphabet){
		
		try {
			
			LOGGER.error("In try block ");
			LOGGER.error("Sending request to service to get JobRole through clicked letter  :" +Alphabet);
			
			String letter = Alphabet+"%";
			Collection<JobRolesDto> oldCollection = jobRolesservice.getshowJobRolesLetter(letter);
			return oldCollection;
			
			}catch(Exception e) {
			
			LOGGER.error("An error occurred while getting the details of the job role through letter" + e);
			return null;
			
		}
	}
}

