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
import com.sih.msde.divergents.config.TalentAquisitionConfig;
import com.sih.msde.divergents.dto.TalentAquisitionDto;


@Repository
public class TalentAquisitionDao extends AbstractTransactionalDao{
	private static final Logger LOGGER= LoggerFactory.getLogger(TalentAquisitionDao.class);
	private static final TalentAquisitionRowmapper TalentAquisition_RowMapper=new TalentAquisitionRowmapper();
	@Autowired
	private TalentAquisitionConfig talentAquisitionConfig;
	public Collection<TalentAquisitionDto>getCandidateDetails(String jobRole){
		LOGGER.debug("request recived from service");
		LOGGER.debug("send request to get Candidate names ");
	
		try{
			LOGGER.debug("in try block");
			LOGGER.debug("executing query to get candidate names");
			Map<String,Object> parameters = new HashMap<>();
			parameters.put("jobRole", jobRole);
			return getJdbcTemplate().query(talentAquisitionConfig.getShowCandidateDetails(),parameters,TalentAquisition_RowMapper);
}
		catch(Exception h){
			LOGGER.error("error while fetching candidates names" + h );
			return null;
		}
		
	}
	private static class TalentAquisitionRowmapper implements RowMapper<TalentAquisitionDto>{
		@Override
		public TalentAquisitionDto mapRow(ResultSet rs, int rowNum) throws SQLException {
			String candidateId=rs.getString("candidateId");
			String candidateName=rs.getString("candidateName");
			String age=rs.getString("age");
			String location=rs.getString("location");
			String email=rs.getString("email");




			return new TalentAquisitionDto(candidateId,candidateName,age,location,email);
			
			
		}
			
	}
	
	

}
