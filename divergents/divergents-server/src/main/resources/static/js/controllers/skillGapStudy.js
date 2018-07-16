var app = angular.module('skillIndiaApp');
app.controller('skillGapStudyController', function($scope, $http){
$scope.states = ["Andhra Pradesh ", "Arunachal Pradesh", "Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu & Kashmir","Jharkhand","Karnataka ","Kerala ","Madhya Pradesh ","Maharashtra","Manipur ","Meghalaya","Mizoram","Nagaland","Odisha ","Punjab","Rajasthan","Sikkim","Tamil Nadu ","Telangana","Tripura ","Uttarakhand","Uttar Pradesh","West Bengal"];
	
    $scope.statesSkillGapStudy = {
            enableGridMenus: false,
            enableSorting: false,
            enableFiltering: false,
            enableCellEdit: false,
            enableColumnMenus: false,
            enableHorizontalScrollbar: 0,
            enableVerticalScrollbar: 0,
            paginationPageSizes: [5, 10, 20, 30],
            paginationPageSize: 10,
            useExternalPagination: true,

            columnDefs: [
                {
                	name: 'nameStudent', 
                    displayName: 'Student Name'
                },
                {
                	name: 'ageStudent',
                	displayName: 'Age'
                }
            ]
    };
    $http.get('/partials/json/meghna.json')
    .then(function(response){
    	console.log("working.." + response.data[0].ageStudent);   
      $scope.statesSkillGapStudy.data=response.data;
    });    
    
    
    
$scope.industry = ["Education & Skill Development Services", "Furniture & Furnishings industry", "Media & Entertainment","Organized Retail sector","Pharmaceuticals","Private Security Services","Telcommunications"," Agriculture","Auto & Auto component","Banking & Financial Services Insurance","Beauty & Wellness ","Building, Construction industry & Real Estate","Construction Materials & Building Hardware"," Domestic Help","Electronics & IT hardware industry","Food Processing sector","Gems & Jewellery","Handlooms and Handicrafts","Healthcare Services","IT & ITes","Leather & Leather goods industry","Textile & Clothing industry","Tourism, Travel, Hospitality & Trade sector","Transportation, Logistics, Warehousing & Packaging"];
	


   $scope.industrySkillGapStudy1 = {
            enableGridMenus: false,
            enableSorting: false,
            enableFiltering: false,
            enableCellEdit: false,
            enableColumnMenus: false,
            enableHorizontalScrollbar: 0,
            enableVerticalScrollbar: 0,
            paginationPageSizes: [5, 10, 20, 30],
            paginationPageSize: 10,
            useExternalPagination: true,

            columnDefs: [
                {
                	name: 'nameStudent', 
                    displayName: 'Student Name'
                },
                {
                	name: 'ageStudent',
                	displayName: 'Age'
                }
            ]
    };
	    $http.get('/partials/json/meghna1.json')
  .then(function(response){
  	console.log("working.." + response.data[0].ageStudent);   
    $scope.industrySkillGapStudy1.data=response.data;
   
  });
});
	