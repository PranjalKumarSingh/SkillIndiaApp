var app = angular.module('skillIndiaApp');
app.controller('trainingMaterialController', function($scope,$http){
	
       $scope.gridTraining = {
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
            	name: 'trainingMaterialId', 
                displayName: 'Training Material Id'
            },
            {
            	name: 'trainingTitle',
            	displayName: 'Training Title'
            },
            
            {
            	 name: 'sources', 
            	 displayName: 'Source(Online|Material)', 
            	 cellTemplate: '<a ng-href="{{row.entity.sources}}" target="_blank" download><img src="images/pdf.png" class="pointer"></a>'
             }
        ]
    };
       
       $scope.searchTrainingMaterial=function(){
    	   console.log("inside search for training material text box"+$scope.trainingmaterial);
    	   
    	   $http.get('/searchTrainingMaterial?trainingmaterial='+$scope.trainingmaterial)
    	    .then(function (response) {
    	    	 $scope.gridTraining.data= response.data;

    	    });
       };
    
    $scope.getTableHeight=function(){
    	var rowHeight=30;
    	var headerHeight=30;
    	return{
    		height:($scope.gridTraining.data.length * rowHeight + headerHeight) + "px"
    	};
    };
    
	    
    $http.get('/getTrainingMaterialDetails')
    .then(function (response) {
    	console.log("Working ui grid");
    	 $scope.gridTraining.data= response.data;

    });
    
    
   
 
     
});

