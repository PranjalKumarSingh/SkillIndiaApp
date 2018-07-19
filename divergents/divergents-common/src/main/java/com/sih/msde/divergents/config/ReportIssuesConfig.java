package com.sih.msde.divergents.config;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix="reportIssuesdata",locations="classpath:sql/ReportIssues.yml")
public class ReportIssuesConfig {
	
	private String reportIssuesCredentials;

	

	public String getReportIssuesCredentials() {
		return reportIssuesCredentials;
	}

	public void setReportIssuesCredentials(String reportIssuesCredentials) {
		this.reportIssuesCredentials = reportIssuesCredentials;
	}

   
}


