var app = angular.module('skillIndiaApp');
app.controller('jobOpportunityController', function($scope, $http){
	console.log("job opportunity js is working");
	$scope.showingInterestForm=false;
	
    $scope.details = {
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
            	name: 'jobRoleId', 
                displayName: 'Job ID'
            },
            {
            	name: 'jobTitle',
            	displayName: 'Job Title'
            },
            {
                name: 'organisation',
                displayName: 'Organisation'
            },
            {
                name: 'location',
                displayName: 'Location.'
            },
            {
                name: 'ctc',
                displayName: 'CTC'
             },
			 {
                name: 'jobDescription',
                displayName: 'Job Description'
             },
             {
            	name: 'showinterest',
            	displayName: 'Show Interest',
            	cellTemplate: '<i class="glyphicon glyphicon-thumbs-up"  ng-click="grid.appScope.showInterstForm()"></i>'
            }
             
        ]
    };

$scope.getTableHeight=function(){
	var rowHeight=30;
	var headerHeight=30;
	return{
		height: ($scope.details.data.length * rowHeight + headerHeight) + "px"
		
	};
};

$scope.search = function () {
	 console.log("inside search for location text box"+$scope.location);
	 
	  $http.get('/showJobOpportunity?location='+$scope.location)
   .then(function (response) {
   	 $scope.details.data= response.data;
   	console.log("working search function");
   	});
    };
 
   $http.get('/populategrid')
  .then(function (response) {
    	 $scope.details.data= response.data;

    });
    
    $scope.showInterstForm=function(){
    	 
    	$scope.showingInterestForm=true; 
    	console.log("WORKING SHOW INTEREST");
    };
    
    $scope.closeForm=function(){
    	$scope.showingInterestForm=false;
    	console.log("WORKING Closing of the form");
    };
   


	    

		      
     
     
     
});

	