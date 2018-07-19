var app = angular.module('skillindia', ['ngRoute','ui.grid',
	                                        'ui.grid.edit',
	                                        'ui.grid.cellNav',
	                                        'ui.grid.autoResize',
	                                        'ui.bootstrap',
	                                        'ui.grid.pagination']);

	app.controller('webinarController',function($scope,$http) {
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
	            	name: 'id', 
	                displayName: 'ID'
	            },
	            {
	            	name: 'title',
	            	displayName: 'Title'
	            },
	            {
	                name: 'category',
	                displayName: 'Category'
	            },
	            {
	                name: 'author',
	                displayName: 'Author'
	            },
	            {
	                name: 'schedule',
	                displayName: 'Schedule'
	             },
				 {
	                name: 'register',
	                displayName: 'Register',
	                cellTemplate: '<i class="glyphicon glyphicon-ok"></i>'
	             }       
	        ]
	    };
	    $http.get('/')
	    .then(function (response) {
	    	
	    	 $scope.details.data= response.data;

	    });     
	});

});
	