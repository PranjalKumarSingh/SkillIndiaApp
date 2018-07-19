package com.sih.msde.divergents.config;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix="skillCompetitiondata",locations="classpath:sql/SkillCompetition.yml")
public class SkillCompetitionConfig {
private String skillCompetitionCredentials;

	

	public String getSkillCompetitionCredentials() {
		return skillCompetitionCredentials;
	}

	public void setSkillCompetitionCredentials(String skillCompetitionCredentials) {
		this.skillCompetitionCredentials = skillCompetitionCredentials;
	}

   

}
