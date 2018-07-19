package com.sih.msde.divergents.config;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

	@Component
	@ConfigurationProperties(prefix="talentAquisition",locations="classpath:sql/TalentAquisition.yml")
	public class TalentAquisitionConfig {
		
		private String showCandidateDetails;

		public String getShowCandidateDetails() {
			return showCandidateDetails;
		}

		public void setShowCandidateDetails(String showCandidateDetails) {
			this.showCandidateDetails = showCandidateDetails;
		}
	}
		
	

		