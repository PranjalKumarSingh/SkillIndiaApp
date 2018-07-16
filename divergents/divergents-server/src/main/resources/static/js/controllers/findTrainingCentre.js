var app = angular.module('skillIndiaApp');
app.controller('findTCController', function($scope){
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
	            	name: 'center_name', 
	                displayName: 'Center Name' 
	            },
	            {
	            	name: 'address',
	            	displayName: 'Address'
	            },
	            {
	                name: 'contact',
	                displayName: 'Contact'
	            },
	            {
	            	name: 'show_interest',
	            	displayName: 'Show Interest'
	            }]
	           
	             
	  };
	    
	    
	    
	    
	    $http.get('/')
	    .then(function (response) {
	    	 $scope.details.data= response.data;

});

    
 console.log("working..");
   
 	