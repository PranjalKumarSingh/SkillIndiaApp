var app = angular.module('skillIndiaApp');
app.controller('skillGapStudyController', function($scope, $http){
	$scope.showDetail= false;
	$scope.errorMaessage="";
	$scope.tab = "Statewise";
	$scope.skillgap = {
			state : "",
			district: ""
	};
	$scope.cards = [];
	
	$scope.AnalysisGrid= false;
	
	
    $scope.gridOptionstate = {
	         enableGridMenus : false,  
	         enableSorting: false, 
	         enableFiltering: false,
	         enableCellEdit : false,
	         enableColumnMenus : false,
	         enableHorizontalScrollbar:0,
	         enableVerticalScrollbar:0,  
	         useExternalPagination: true,  
	         
	         columnDefs: [
	              { name: 'documentname', displayName: 'Document'},
	              { name: 'file', displayName: 'File',cellTemplate: '<a href="{{row.entity.file}}" target="_blank" download><img src="images/pdf.png" class="pointer"></a>' }
	              ]
	  }; 	
    
    
    
    $scope.gridOptionSkillGap = {
	         enableGridMenus : false,  
	         enableSorting: false, 
	         enableFiltering: false,
	         enableCellEdit : false,
	         enableColumnMenus : false,
	         enableHorizontalScrollbar:0,
	         enableVerticalScrollbar:0,  
	         useExternalPagination: true,  
	         
	         columnDefs: [
	              { name: 'jobrolename', displayName: 'Job Role'},
	              { name: 'noofskilledmanpower', displayName: 'Skilled Manpower'},
	              { name: 'countCandidate', displayName: 'Number of Candidates'}
	              ]
	  }; 	
	
	

	$http.get('jsonData/data4.json')
   .then(function (response) {
       $scope.gridOptionstate.data= response.data;
   }, function (error) {
      console.log("Error"+ error);
   });
	              
	$scope.showYourInterest=function(){
		if($scope.showInterest== false){
		$scope.showInterest= true;}
		else{
			$scope.showInterest= false;
		}
	}

	
	$scope.search= function(){
				
		if($scope.skillgap.state=="" && $scope.skillgap.district==""){
			$scope.errorMessage="Enter the value to search";
		}
		
		else if($scope.skillgap.district==""){
			$scope.errorMessage="";
			$scope.AnalysisGrid= true;
			var fd = new FormData();
		    fd.append("state", $scope.skillgap.state)
		    console.log(fd);
		    var method = "POST";
		    $http.post('/getSkillGapStudyUsingState', fd, {
		    transformRequest: angular.identity,
		    headers: {'Content-Type': undefined}
		   })
		   .then(function(response){
			   console.log(response);
			   $scope.gridOptionSkillGap.data = response.data;
		   },function errorCallback(response){
		        console.log(JSON.stringify(response.data));
		   });
		    
		    var url= 'getRecommendedCourseUsingState?state='+$scope.skillgap.state;
		    $http.get(url)
		    .then(function(response){
		    	console.log(response.data);
		    	$scope.cards = response.data;
		    });
		    
		}
		
		else if($scope.skillgap.state==""){
			$scope.AnalysisGrid= true;
			$scope.errorMessage="";
			var fd = new FormData();
		    fd.append("district", $scope.skillgap.district)
		    console.log(fd);
		    var method = "POST";
		    $http.post('/getSkillGapStudyUsingDistrict', fd, {
		    transformRequest: angular.identity,
		    headers: {'Content-Type': undefined}
		   })
		   .then(function(response){
			   console.log(response);
			   $scope.gridOptionSkillGap.data = response.data;
		   },function errorCallback(response){
		        console.log(JSON.stringify(response.data));
		   });
		    
		    
		    var url= 'getRecommendedCourseUsingDistrict?district='+$scope.skillgap.district;
		    $http.get(url)
		    .then(function(response){
		    	console.log(response.data);
		    	$scope.cards = response.data;
		    });
		}
		
		else{
			$scope.AnalysisGrid= true;
			$scope.errorMessage="";
			var fd = new FormData();
			fd.append("state",$scope.skillgap.state)
		    fd.append("district", $scope.skillgap.district)
		    console.log(fd);
		    var method = "POST";
		    $http.post('/getSkillGapStudyUsingStateandDistrict', fd, {
		    transformRequest: angular.identity,
		    headers: {'Content-Type': undefined}
		   })
		   .then(function(response){
			   console.log(response);
			   $scope.gridOptionSkillGap.data = response.data;
		   },function errorCallback(response){
		        console.log(JSON.stringify(response.data));
		   });
		    
		    var url= 'getRecommendedCoursesUsingStateandDistrict?state='+$scope.skillgap.state+'&district='+$scope.skillgap.district;
			    $http.get(url)
			    .then(function(response){
			    	console.log(response.data);
			    	$scope.cards = response.data;
			    });
		}
	
	
	}
	
	
	$scope.getTableHeight = function() {
	       var rowHeight = 30;
	       var headerHeight = 30;
	       return {
	          height: ($scope.gridOptionSkillGap.data.length * rowHeight + headerHeight) + "px"
	       };
	    };
});
	