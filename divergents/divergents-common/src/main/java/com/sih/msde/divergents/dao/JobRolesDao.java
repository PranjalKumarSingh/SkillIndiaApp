
package com.sih.msde.divergents.dao;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.sih.msde.divergents.common.AbstractTransactionalDao;
import com.sih.msde.divergents.config.JobRolesConfig;
import com.sih.msde.divergents.dto.JobRolesDto;

@Repository
public class JobRolesDao extends AbstractTransactionalDao{
	
	private static final Logger LOGGER= LoggerFactory.getLogger(JobRolesDao.class);
	
	private static final JobRolesRowmapper JobRoles_RowMapper = new JobRolesRowmapper();
	
	@Autowired
	private JobRolesConfig jobRolesConfig;
	
	public Collection<JobRolesDto> getshowJobRolesBox(String jobRole){
		
		LOGGER.error("Request received from Service through search box");
		LOGGER.error("In JobRolesDao, to get jobRoles  Detail  through search box" +jobRole);
		
		
		try {
		
			LOGGER.error("In try block of JobRoleDao" +jobRole);
			Map<String,Object> parameters = new HashMap<>();
			LOGGER.error("Execute query to get JobRoles details  through search box");
			parameters.put("jobRole",jobRole);
			return getJdbcTemplate().query(jobRolesConfig.getshowJobRolesBox(),parameters,JobRoles_RowMapper);
			
		} catch (Exception e){
			
			LOGGER.error("In Catch Block of JobRolesDao  through search box");
			LOGGER.error("An error occured while getting the job role details with exception  through search box" + e);
			return null;
			
		}
		
	}
	// for populating ui grid for job roles
       public Collection<JobRolesDto> getPopulateJobRoleGrid(){
		
		LOGGER.error("Request received from Service");
		LOGGER.error("In JobRolesDao, to populate the ui grid");
		
		
		try {
		
			LOGGER.error("In try block of JobRoleDao");
			
			return getJdbcTemplate().query(jobRolesConfig.getPopulateJobRoleGrid(),JobRoles_RowMapper);
			
		} catch (Exception e){
			
			LOGGER.error("In Catch Block of JobRolesDao");
			LOGGER.error("An error occured while getting the job role details for populating ui grid with exception" + e);
			return null;
			
		}
		
	}
       public Collection<JobRolesDto> getshowJobRolesLetter(String Alphabet){
   		
   		LOGGER.error("Request received from Service");
   		LOGGER.error("In JobRolesDao, to get jobRoles  Detail for through letter" +Alphabet);
   		
   		
   		try {
   		
   			LOGGER.error("In try block of JobRoleDao" +Alphabet);
   			Map<String,Object> parameters = new HashMap<>();
   			LOGGER.error("Execute query to get JobRoles details through alphabet");
   			parameters.put("Alphabet",Alphabet);
   			return getJdbcTemplate().query(jobRolesConfig.getshowJobRolesLetter(),parameters,JobRoles_RowMapper);
   			
   		} catch (Exception e){
   			
   			LOGGER.error("In Catch Block of JobRolesDao");
   			LOGGER.error("An error occured while getting the job role details through letter with exception " + e);
   			return null;
   			
   		}
   		
   	}
	private static class JobRolesRowmapper implements RowMapper<JobRolesDto>
	{
		
		@Override
		public JobRolesDto mapRow(ResultSet rs, int rowNum) throws SQLException {
			
			String jobRoleId = rs.getString("jobRoleId");
			String jobRole = rs.getString("jobRole");
			String sectorSkillCouncil = rs.getString("sectorSkillCouncil");			
			
			return new JobRolesDto(jobRoleId,jobRole,sectorSkillCouncil);
			
		}
		
		
	}
}
