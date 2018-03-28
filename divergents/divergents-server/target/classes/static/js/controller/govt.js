var govt = angular.module('divergents');

govt.controller( 'govt' , function($scope,$http,$rootScope,$location){
	$rootScope.templateShowGovt = false;
	//Method to route using $location.path()
	
	//$rootScope.screen = 'screen4';
$scope.switchGovt = 'quick-facts-govt';	
	$rootScope.templateShow = false;
	$scope.openStudent = function()
	{
		$rootScope.templateShowTP = false;
		$rootScope.templateShowI = false;
		$rootScope.templateShowGovt = false;
		$rootScope.templateShow = true;
	
	var openStudentUrl = "/student";
	$location.path(openStudentUrl);
	};

	$scope.openIndustry = function()
	{
		$rootScope.templateShowGovt = false;
		$rootScope.templateShow = false;
		$rootScope.templateShowTP = false;
		$rootScope.templateShowI = true;
		var openStudentUrl = "/industry";
		$location.path(openStudentUrl);
		};

	$scope.openGovt = function(){
		
		$rootScope.templateShow = false;
		
		$rootScope.templateShowI = false;
		$rootScope.templateShowTP = false;
		$rootScope.templateShowGovt = true;
		var openStudentUrl = "/govt";
		$location.path(openStudentUrl);
		};
	
	$scope.openTrainingPartner = function(){
		$rootScope.templateShowGovt = false;
		$rootScope.templateShow = false;
		$rootScope.templateShowI = false;
		$rootScope.templateShowTP = true;
		var openStudentUrl = "/trainingPartner";
		$location.path(openStudentUrl);
		};
	//-----------------------------------------------
});