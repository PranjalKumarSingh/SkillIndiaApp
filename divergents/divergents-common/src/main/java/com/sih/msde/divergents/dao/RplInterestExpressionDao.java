package com.sih.msde.divergents.dao;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.sih.msde.divergents.common.AbstractTransactionalDao;
import com.sih.msde.divergents.config.RplInterestExpressionConfigSql;
import com.sih.msde.divergents.dto.RplInterestExpressionDto;

@Repository
public class RplInterestExpressionDao extends AbstractTransactionalDao{

	private static final Logger LOGGER = LoggerFactory.getLogger(RplInterestExpressionDao.class);
	@Autowired
	private RplInterestExpressionConfigSql rplInterestExpressionConfigSql;
	
	int submitStatus=-5;
	public Integer registerForRpl(RplInterestExpressionDto rplInterestExpressionDto)
	{
		try {
			LOGGER.debug("Received Request from service to insert details into the database");
			Map<String,Object> parameters = new HashMap<>();
			LOGGER.debug("Creating hashmap of objects");
			parameters.put("organisationName", rplInterestExpressionDto.getOrganisationName());
			parameters.put("areaOfOpreration",rplInterestExpressionDto.getAreaOfOperation());
			parameters.put("numberOfEmployeesToBeCertified",rplInterestExpressionDto.getNumberOfEmployeesToBeCertified());
			parameters.put("companyIncorporationNumber", rplInterestExpressionDto.getCompanyIncorporationNumber());
			parameters.put("hrPocEmail", rplInterestExpressionDto.getHrPocEmail());
			
			submitStatus = getJdbcTemplate().queryForObject(rplInterestExpressionConfigSql.getExpressInterestForRpl(), parameters, Integer.class);
		
			return submitStatus;
			
		}
		catch(Exception e)
		{
			LOGGER.debug("An exception occured while inserting values in the database" +e);
			LOGGER.debug("Returning submitStatus");
			return submitStatus;
		}
	}
}
