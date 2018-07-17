package com.sih.msde.divergents.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Collection;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.sih.msde.divergents.common.AbstractTransactionalDao;
import com.sih.msde.divergents.config.JobOpportunityConfig;
import com.sih.msde.divergents.dto.JobOpportunityDto;



@Repository
public class JobOpportunityDao extends AbstractTransactionalDao{
	@Autowired
	private JobOpportunityConfig jobOpportunityConfig;
	private static final Logger LOGGER= LoggerFactory.getLogger(JobOpportunityDao.class);
	private static final JobOpportunityRowmapper JobOpportunity_RowMapper = new JobOpportunityRowmapper();
	
public Collection<JobOpportunityDto> getJobOpportunity(){

	LOGGER.debug("Request received from Service");
	LOGGER.debug("In JobOpportunityDao, to get job opportunity Detail");

		
		try {
			LOGGER.debug("In try block");
			LOGGER.debug("Execute query to get job opportunity details");

			return getJdbcTemplate().query(jobOpportunityConfig.getShowJobOpportunity(), JobOpportunity_RowMapper);
			
		} catch (Exception e) {
			LOGGER.debug("In catch block");
			LOGGER.debug("The exception is : " + e);
			return null;
			
		}
		
	}
private static class JobOpportunityRowmapper implements RowMapper<JobOpportunityDto>{
	
	@Override
	public JobOpportunityDto mapRow(ResultSet rs, int rowNum) throws SQLException {
		
		String jobId = rs.getString("jobRoleId");
		String jobTitle = rs.getString("jobTitle");
		String jobOrganisation = rs.getString("organisation");
		String location = rs.getString("location");
		double ctc = rs.getDouble("ctc");
		String jobDescription = rs.getString("jobDescription");
		
		
		return new JobOpportunityDto(jobId,jobTitle,jobOrganisation,location,ctc,jobDescription);
		
	}
	
	
}


}
