package com.sih.msde.divergents.config;


	import org.springframework.boot.context.properties.ConfigurationProperties;
	import org.springframework.stereotype.Component;

	@Component
	@ConfigurationProperties(prefix="TrainingMaterialQuery",locations="classpath:sql/TrainingMaterial.yml")
	
	public class trainingMaterialConfig {

		    private String showTrainingMaterialBox;
			private String showTrainingMaterialDetails;
			
			public String getShowTrainingMaterialBox() {
				return showTrainingMaterialBox;
			}
			public void setShowTrainingMaterialBox(String showTrainingMaterialBox) {
				this.showTrainingMaterialBox = showTrainingMaterialBox;
			}
			public String getShowTrainingMaterialDetails() {
				return showTrainingMaterialDetails;
			}
			public void setShowTrainingMaterialDetails(String showTrainingMaterialDetails) {
				this.showTrainingMaterialDetails = showTrainingMaterialDetails;
			}

			
	}
	
	


