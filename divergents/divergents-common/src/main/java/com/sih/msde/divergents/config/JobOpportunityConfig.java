package com.sih.msde.divergents.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix="jobOpportunityQuery",locations="classpath:sql/jobOpportunityQuery.yml")

public class JobOpportunityConfig {
private String  showJobOpportunity;
private String populateDetailsGrid;
public String getPopulateDetailsGrid() {
	return populateDetailsGrid;
}

public void setPopulateDetailsGrid(String populateDetailsGrid) {
	this.populateDetailsGrid = populateDetailsGrid;
}

public String getShowJobOpportunity() {
	return showJobOpportunity;
}

public void setShowJobOpportunity(String showJobOpportunity) {
	this.showJobOpportunity = showJobOpportunity;
}

}
