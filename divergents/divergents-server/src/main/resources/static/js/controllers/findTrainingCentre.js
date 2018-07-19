var app = angular.module('skillIndiaApp');
app.controller('findTCController', function($scope,$http){
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

	   	              { name: 'trainingCenterName', displayName: 'Center Name', cellClass:'',headerCellClass:''},
	   	              { name: 'address', displayName: 'Address' ,cellClass:'',headerCellClass:'' },
	   	              { name: 'contactNumber',displayName: 'Contact' , cellClass:'',headerCellClass:''},
	   	              { name: 'Interest', displayName:'Show Interest' , cellTemplate: '<i class="glyphicon glyphicon-thumbs-up"  ng-click=grid.appScope.showYourInterest()></i>',headerCellClass:'trainingCenters',cellClass:'trainingCenterCellClass'}
	   	              
	   	   ]
	           
	             
	  };
	    
	    
	    
	   
	    $http.get('/jsonData/findCenter.json')
	    .then(function (response) {
	    	 $scope.details.data= response.data;

});
	    
	    
	    $scope.showYourInterest=function(){
			if($scope.showInterest== false){
			$scope.showInterest= true;}
			else{
				$scope.showInterest= false;
			}
			
			
		}
});    

    
 
   
 	