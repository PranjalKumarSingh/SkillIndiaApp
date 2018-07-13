
var app = angular.module('', ['ui.grid',
                                      'ui.grid.edit',
                                      'ui.grid.cellNav',
                                      'ui.grid.autoResize',
                                      'ui.bootstrap',
                                      'ui.grid.pagination']);






app.controller('',function($scope, $http) {
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
            	name: 'jobid', 
                displayName: 'Job ID'
            },
            {
            	name: 'jobtitle',
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
                name: 'jobdescribtion',
                displayName: 'Job Describtion'
             },
             {
            	name: 'showinterest',
            	displayName: 'Show Interest',
            	cellTemplate: '<i class="glyphicon glyphicon-thumbs-up" ng-click="grid.appScope.showInterstForm()"></i>'
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
console.log("");

    $http.get('')
    .then(function (response) {
    	 $scope.details.data= response.data;

    });
    
    $scope.showInterstForm=function(){
    	$scope.showingInterestForm=true; 
    	console.log("WORKING SHOW INTEREST");
    }
    
    $scope.closeForm=function(){
    	$scope.showingInterestForm=false;
    	console.log("WORKING Closing of the form");
    }
   
 
     
});



