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
            	name: 'jobId', 
                displayName: 'Job ID'
            },
            {
            	name: 'jobTitle',
            	displayName: 'Job Title'
            },
            {
                name: 'jobOrganisation',
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
                displayName: 'Job Describtion'
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

   
   $http.get('/showJobOpportunity')
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
   

 
 
 $scope.search= function(){
	 console.log("validation js working");
     
     if($scope.name=="" && $scope.location==""){
             $scope.errorMessage="Enter the value to search";
             $http.get('/showJobOpportunity')
         .success(function (response) {
             $scope.gridOptions.data= response;
         })
         .error(function (error) {
            console.log("Error"+ error);
         });
     }
     
     else if($scope.location==""){
             $scope.errorMessage="";
             var fd = new FormData();
         fd.append("name", "%"+$scope.name+"%")
         console.log(fd);
         var method = "POST";
         $http.post('/get', fd, {
         transformRequest: angular.identity,
         headers: {'Content-Type': undefined}
        })
        .then(function(response){
                console.log(response);
                $scope.gridOptions.data = response.data;
        },function errorCallback(response){
             console.log(JSON.stringify(response.data));
        });
     }
     
     else if($scope.name==""){
             $scope.errorMessage="";
             var fd = new FormData();
         fd.append("location", "%"+$scope.location+"%")
         console.log(fd);
         var method = "POST";
         $http.post('/get', fd, {
         transformRequest: angular.identity,
         headers: {'Content-Type': undefined}
        })
        .then(function(response){
                console.log(response);
                $scope.gridOptions.data = response.data;
         },function errorCallback(response){
             console.log(JSON.stringify(response.data));
        });
     }
     
     else{
             $scope.errorMessage="";
             var fd = new FormData();
             fd.append("name", "%"+$scope. name+"%")
         fd.append("location", "%"+$scope.location+"%")
         console.log(fd);
         var method = "POST";
         $http.post('/', fd, {
         transformRequest: angular.identity,
         headers: {'Content-Type': undefined}
        })
        .then(function(response){
                console.log(response);
                $scope.gridOptions.data = response.data;
        },function errorCallback(response){
             console.log(JSON.stringify(response.data));
        });
     }

     
     
     
     
}

 
});
	