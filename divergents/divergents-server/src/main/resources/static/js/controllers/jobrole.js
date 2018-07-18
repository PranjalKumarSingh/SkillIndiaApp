var app = angular.module('skillIndiaApp');

app.controller('jobRoleController', function($scope,$http){
      $scope.gridJobRoles = {
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
                displayName: 'Id'
            },
            {
            	name: 'jobRole',
            	displayName: 'Job Role'
            },
            {
            	name: 'sectorSkillCouncil', 
                displayName: 'Sector Skill Council'
            },
            {
            	 name: 'Trainingcenter', 
            	 displayName: 'Source(Online|Material)', 
            	 cellTemplate: '<a ng-href="{{row.entity.Trainingcenter}}"><button class="btn btn-primary btn-sm" data-toggle="modal" data-target="#loginModal" ng-click="grid.appScope.getTrainingDetails()">Check Training Material</button></a>'
             }
        ]
    }
   
   
    $scope.gridTrainingCenterDetails = {
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
                	name: 'trainingCenterName', 
                    displayName: 'Training Center'
                },
                {
                	name: 'states',
                	displayName: 'States'
                }
            ]
        };
     
    $scope.getTrainingDetails=function(){
    	
    	console.log("button is working");
    	$http.get('')
        .then(function (response) {
        	 $scope.gridTrainingCenterDetails.data= response.data;

        });
    };
    
    $scope.getTableHeight=function(){
    	var rowHeight=30;
    	var headerHeight=30;
    	return{
     height: ($scope.details.data.length * rowHeight + headerHeight) + "px"
    		
    	};
    };
    
    $scope.searchJobRole = function () {
		 console.log("inside search for job role text box"+$scope.JobRole);
		 
		  $http.get('/SearchJobRole?JobRole='+$scope.JobRole)
	    .then(function (response) {
	    	 $scope.gridJobRoles.data= response.data;
	    	console.log("working searchJobRole function");
	    	});
	     };
	     
	$scope.x="";
	$scope.search = function(x){
	console.log("Success and the filter is " +x);
	
	$http.get('/getJobRoleForSelectedLetter='+$scope.x)
	.then(function (response) {
    	 $scope.gridJobRoles.data= response.data;

    });
    
	};
    
    $http.get('/JobRoles')
    .then(function (response) {
    	 $scope.gridJobRoles.data= response.data;

    });
    
    });


