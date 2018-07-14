
var app = angular.module('', ['ngRoute','ui.grid',
                                      'ui.grid.edit',
                                      'ui.grid.cellNav',
                                      'ui.grid.autoResize',
                                      'ui.bootstrap',
                                      'ui.grid.pagination']);


app.controller('jobRolesController',function($scope, $http) {
    $scope.gridJobsRoles = {
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
                displayName: 'Id'
            },
            {
            	name: 'jobRole',
            	displayName: 'Job Role'
            },
            {
            	name: 'sector', 
                displayName: 'Sector Skill CouncilS'
            },
            {
            	 name: 'Trainingcenter', 
            	 displayName: 'Source(Online|Material)', 
            	 cellTemplate: '<a ng-href="{{row.entity.Trainingcenter}}" target="_blank" download><button type="button" class="btn btn-info">Check Training Material</button></a>'
             }
        ]
    };
    
    $scope.getTableHeight=function(){
    	var rowHeight=30;
    	var headerHeight=30;
    	return{
    		height:($scope.gridTraining.data.length * rowHeight + headerHeight) + "px"
    	};
    };
    
	$scope.x="";
	$scope.search = function(alphabet){
		console.log("Success and the filter is " + alphabet);
		$http.get('/getJobRoleForSelectedLetter?letter='+alphabet);
   };
    
    
    $http.get('/json/datajson.json')
    .then(function (response) {
    	 $scope.gridJobsRoles.data= response.data;

    });
    });


