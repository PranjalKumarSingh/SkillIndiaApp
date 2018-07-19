package com.sih.msde.divergents.service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sih.msde.divergents.dao.ReportIssuesDao;
import com.sih.msde.divergents.dto.ReportIssuesDto;

@Service
public class ReportIssuesService {
private static final Logger LOGGER= LoggerFactory.getLogger(ReportIssuesService.class);
	
	@Autowired
	private ReportIssuesDao reportIssuesDao;
	public Integer getReportIssuesService(ReportIssuesDto reportIssuesDto)
	{

			LOGGER.debug("Report Issued by user : " );
			return reportIssuesDao.ReportIssues(reportIssuesDto);	
		
      
	
	}
}
	


