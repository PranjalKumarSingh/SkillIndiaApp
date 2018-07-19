package com.sih.msde.divergents.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix="pocQuery",locations="classpath:sql/policies.yml")
public class policiesConfig {
	
	private String showPoliciesDetails;

	public String getShowPoliciesDetails() {
		return showPoliciesDetails;
	}

	public void setShowPoliciesDetails(String showPoliciesDetails) {
		this.showPoliciesDetails = showPoliciesDetails;
	}
	

}
