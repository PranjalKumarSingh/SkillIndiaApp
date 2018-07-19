package com.sih.msde.divergents.dto;

import com.sih.msde.divergents.common.BaseDto;

public class SkillCompetitionDto extends BaseDto
{
	private String id;
	private String participantName;
	private String participantEmail;
	private String participantAddress;
	private int participantAge;
	private String skillSector;
	private String skillSectorCategory;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getParticipantName() {
		return participantName;
	}
	public void setParticipantName(String participantName) {
		this.participantName = participantName;
	}
	public String getParticipantEmail() {
		return participantEmail;
	}
	public void setParticipantEmail(String participantEmail) {
		this.participantEmail = participantEmail;
	}
	public String getParticipantAddress() {
		return participantAddress;
	}
	public void setParticipantAddress(String participantAddress) {
		this.participantAddress = participantAddress;
	}
	public int getParticipantAge() {
		return participantAge;
	}
	public void setParticipantAge(int participantAge) {
		this.participantAge = participantAge;
	}
	public String getSkillSector() {
		return skillSector;
	}
	public void setSkillSector(String skillSector) {
		this.skillSector = skillSector;
	}
	public String getSkillSectorCategory() {
		return skillSectorCategory;
	}
	public void setSkillSectorCategory(String skillSectorCategory) {
		this.skillSectorCategory = skillSectorCategory;
	}
	

	public SkillCompetitionDto(String id,String participantName, String participantEmail, String participantAddress,
			int participantAge, String skillSector, String skillSectorCategory ) {
		super();

		this.id =id ;
		this.participantName =participantName ;
		this.participantEmail =participantEmail ;
		this.participantAddress =participantAddress;
		this.participantAge =participantAge ;
		this.skillSector =skillSector ;
		this.skillSectorCategory =skillSectorCategory ;
	}
	public SkillCompetitionDto() {
		super();
		// TODO Auto-generated constructor stub
	}
}
