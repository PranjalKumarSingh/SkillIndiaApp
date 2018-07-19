package com.sih.msde.divergents.dao;
import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;

import com.sih.msde.divergents.common.AbstractTransactionalDao;
import com.sih.msde.divergents.config.ReportIssuesConfig;
import com.sih.msde.divergents.dto.ReportIssuesDto;

@Repository
public class ReportIssuesDao extends AbstractTransactionalDao
{

	private static final Logger LOGGER= LoggerFactory.getLogger(ReportIssuesDao.class);
	int result;
	//private static final ReportIssuesRowmapper ReportIssues_RowMapper = new ReportIssuesRowmapper();
	@Autowired
	private ReportIssuesConfig reportIssuesConfig;
	
	public Integer ReportIssues(ReportIssuesDto reportIssuesDto)
	{
	    LOGGER.debug("Received request from service to issue the reports with issueId: ");
	    
	    try
	    {
	    	LOGGER.debug("Creating hashmap of object to report the issue of user with issueId : " );
	    	Map<String,Object> parameter = new HashMap<>();
	    	LOGGER.debug("Hashmap of object created to report issue");
	    	parameter.put("issueId", reportIssuesDto.getIssueId());
	    	parameter.put("candidateName", reportIssuesDto.getCandidateName());
	    	parameter.put("candidateId", reportIssuesDto.getCandidateId());
	    	parameter.put("issueWith", reportIssuesDto.getIssueWith());
	    	parameter.put("issueType", reportIssuesDto.getIssueType());
	    	parameter.put("instituteName", reportIssuesDto.getInstituteName());
	    	parameter.put("instituteId", reportIssuesDto.getInstituteId());
	    	parameter.put("issueDescription", reportIssuesDto.getIssueDesription());
	    
	    	LOGGER.debug("Parameters inserted into hashmap");
	    	
	    	return getJdbcTemplate().update(reportIssuesConfig.getReportIssuesCredentials(), parameter);
	    }
	    
	    catch(DataAccessException dE)
	    {
	    	LOGGER.error("An exception has occured while reporting issue : " + dE);
	    	LOGGER.error("Returning -1");
	    	return -1;
	    }
	    catch(Exception e)
	    {
	    	LOGGER.error("An exception has occured while reporting issue : " + e);
	    	LOGGER.error("Returning -10");
	    	return -10;
	    	
	    }
		
	    
	}
}