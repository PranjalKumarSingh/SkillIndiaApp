package com.sih.msde.divergents.dto;


	import com.sih.msde.divergents.common.BaseDto;

	public class trainingMaterialDto extends BaseDto {
		 
		
		private String trainingMaterialId;
		private String trainingTitle;
		private String path;
		

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
		
		public trainingMaterialDto(String trainingMaterialId, String trainingTitle, String path)
		{
			super();
			this.trainingMaterialId = trainingMaterialId;
			this.trainingTitle = trainingTitle;
			this.path = path;
		}
		
		
		public trainingMaterialDto() {
			super();
			// TODO Auto-generated constructor stub
		}
		
}
