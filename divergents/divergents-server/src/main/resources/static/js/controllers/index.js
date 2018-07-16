var app = angular.module('skillIndiaApp',['ngRoute','ui.grid',
                                          'ui.grid.edit',
                                          'ui.grid.cellNav',
                                          'ui.grid.autoResize',
                                          'ui.bootstrap',
                                          'ui.grid.pagination']);


//Application Configuration
app.config(function($routeProvider, $httpProvider){
	
	$routeProvider.when('/student', {
	    templateUrl : 'student.html',
	    controller : 'studentController'

	})
	.when('/industry', {
        templateUrl : 'industry.html',
        controller : 'industryController'

    })
    .otherwise('/');

    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

});

app.controller('landingPageController', function($scope,$location,$rootScope){
	
	$rootScope.templateShow=true;
	
	$scope.students=function(){
		console.log("working");
		$rootScope.templateShow=false;
		$location.path("student");
	}
	
	$scope.industry=function(){
		console.log("working");
		$rootScope.templateShow=false;
		$location.path("industry");
	}
	
	
	
	//write your code here
	
});
	