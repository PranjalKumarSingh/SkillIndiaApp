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


	import com.sih.msde.divergents.config.trainingMaterialConfig;
import com.sih.msde.divergents.dto.trainingMaterialDto;

	@Repository
	public class trainingMaterialDao extends AbstractTransactionalDao{
			
			private static final Logger LOGGER= LoggerFactory.getLogger(trainingMaterialDao.class);
			
			private static final trainingRowmapper training_RowMapper = new trainingRowmapper();
			
			@Autowired
			private trainingMaterialConfig trainingmaterialConfig;
			
			public Collection<trainingMaterialDto>getTrainingMaterialDetails(){
				
				LOGGER.debug("Request received from Service");
				LOGGER.debug("To get Training Material Detail ");
				
				
				try {
					
					LOGGER.debug("In try block");
					LOGGER.debug("Execute query to get training material details");
					return getJdbcTemplate().query(trainingmaterialConfig.getShowTrainingMaterialDetails(),training_RowMapper);
					
				} catch (Exception e) {
					
					LOGGER.error("In Catch Block");
					LOGGER.error("An error occured while getting the training material details " + e);
					return null;
					
				}
			}
				
				/*public Collection<trainingMaterialDto> getshowTrainingMaterialBox(String jobRole){
					
					LOGGER.error("Request received from Service through search box");
					LOGGER.error(" To get training material  Detail  through search box");
					
					
					try {
					
						LOGGER.error("In try block ");
						Map<String,Object> parameters = new HashMap<>();
						LOGGER.error("Execute query to get Training material details  through search box");
						parameters.put("jobRole",jobRole);
						LOGGER.debug("The job role is : " + parameters.get("jobRole"));
						return getJdbcTemplate().query(trainingmaterialConfig.getShowTrainingMaterialBox(),parameters,training_RowMapper);
						
					} catch (Exception e){
						
						LOGGER.error("In Catch Block of training material Dao  through search box");
						LOGGER.error("An error occured while getting the training material details with exception  through search box" + e);
						return null;
						
					}
					
				}*/
				
			
			
			public static class trainingRowmapper implements RowMapper<trainingMaterialDto>
			{
				
				@Override
				public trainingMaterialDto mapRow(ResultSet rs, int rowNum) throws SQLException {
					
					
					String trainingMaterialId = rs.getString("trainingMaterialId");
					String trainingTitle = rs.getString("trainingTitle");
					String path = rs.getString("path");			
				
					return new trainingMaterialDto(trainingMaterialId,trainingTitle,path);
					
				}
				
				
			}
	}
