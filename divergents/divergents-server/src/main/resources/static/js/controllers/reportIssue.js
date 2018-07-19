var app = angular.module('skillIndiaApp');
app.controller('reportIssueController', function($scope){
	
<<<<<<< .mine
	
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
		            	name: 'policies reports', 
		                displayName: 'Policies|Reports'
		            },
		            {
		            	name: 'title',
		            	displayName: 'Title'
		            },
		            
					 {
		                name: 'description',
		                displayName: 'Description',
		               cellTemplate: '<a ng-href="{{row.entity.description}}" target="_blank" download><img src="images/pdf.png" class="pointer"></a>'
		               }
		             
		        ]
		    };
		   
		    $http.get('/')
		    .then(function (response) {
		    	 $scope.details.data= response.data;
		    
		    });  
		   
		  
		    
		});

	||||||| .r507
	
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
		            	name: 'policies reports', 
		                displayName: 'Policies|Reports'
		            },
		            {
		            	name: 'title',
		            	displayName: 'Title'
		            },
		            
					 {
		                name: 'description',
		                displayName: 'Description',
		               cellTemplate: '<a ng-href="{{row.entity.description}}" target="_blank" download><img src="images/pdf.png" class="pointer"></a>'
		               }
		             
		        ]
		    };
		   
		    $http.get('/json/policies.json')
		    .then(function (response) {
		    	 $scope.details.data= response.data;
		    
		    });  
		   
		  
		    
		});

	=======
});>>>>>>> .r511
