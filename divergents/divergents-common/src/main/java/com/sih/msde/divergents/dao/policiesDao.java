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
import com.sih.msde.divergents.config.policiesConfig;
import com.sih.msde.divergents.dto.policiesDto;



@Repository
public class policiesDao extends AbstractTransactionalDao{
	
	private static final Logger LOGGER= LoggerFactory.getLogger(policiesDao.class);
	
	private static final POCRowmapper POC_RowMapper = new POCRowmapper();
	
	@Autowired
	private policiesConfig policyConfig;
	
	public Collection<policiesDto> getPoliciesDetails(){
		
		LOGGER.debug("Request received from Service");
		LOGGER.debug("In policiesDao, to get policies Detail");
		
		
		try {
			
			LOGGER.debug("In try block");
			LOGGER.debug("Execute query to get policies details");
			return getJdbcTemplate().query(policyConfig.getShowPoliciesDetails(), POC_RowMapper);
			
		} catch (Exception e) {
			
			LOGGER.error("In Catch Block");
			LOGGER.error("An error occured while getting the policies details" + e);
			return null;
			
		}
		
	}
	
	private static class POCRowmapper implements RowMapper<policiesDto>{
		
		@Override
		public policiesDto mapRow(ResultSet rs, int rowNum) throws SQLException {
			
			String policyId = rs.getString("policyId");
			String title = rs.getString("title");
			String path = rs.getString("path");
					
			
			return new policiesDto(policyId,title,path);
			
		}
		
		
	}

}
