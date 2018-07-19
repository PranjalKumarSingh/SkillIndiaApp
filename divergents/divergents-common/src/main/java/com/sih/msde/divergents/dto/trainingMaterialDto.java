package com.sih.msde.divergents.dto;


	import com.sih.msde.divergents.common.BaseDto;

	public class trainingMaterialDto extends BaseDto {
		 
		private String jobRole;
		private String trainingMaterialId;
		private String trainingTitle;
		private String path;
		
		public String getjobRole() {
			return jobRole;
		}
		public void setjobRole(String jobRole) {
			this.jobRole = jobRole;
		}
		public String gettrainingMaterialId() {
			return trainingMaterialId;
		}
		public void settrainingMaterialId(String trainingMaterialId) {
			this.trainingMaterialId = trainingMaterialId;
		}
		public String gettrainingTitle() {
			return trainingTitle;
		}
		public void settrainingTitle(String trainingTitle) {
			this.trainingTitle = trainingTitle;
		}
		public String getpath() {
			return path;
		}
		public void setpath(String path) {
			this.path= path;
		}
		
		/*------CONSTRUCTOR-------------*/
		
		public trainingMaterialDto(String jobRole, String trainingMaterialId, String trainingTitle, String path)
		{
			super();
			this.jobRole = jobRole;
			this.trainingMaterialId = trainingMaterialId;
			this.trainingTitle = trainingTitle;
			this.path = path;
		}
		
		
		public trainingMaterialDto() {
			super();
			// TODO Auto-generated constructor stub
		}
		
}
