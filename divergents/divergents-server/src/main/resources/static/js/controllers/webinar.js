app.controller('webinar' , function($scope,$http){
	
	$scope.showWebinar= false;
	$scope.errorMessage="";
	
	
$scope.gridOptionwebinar = {
	         enableGridMenus : false, 
	         rowHeight: 30,
	         enableSorting: false, 
	         enableFiltering: false,
	         enableCellEdit : false,
	         enableColumnMenus : false,
	         enableHorizontalScrollbar:0,
	         enableVerticalScrollbar:0,
	         paginationPageSizes: [10, 2, 50],
	         paginationPageSize: 2,   
	         useExternalPagination: true,  
	         
	         columnDefs: [
	              { name: 'id', displayName: 'Id', width:"5%"},
	              { name: 'title', displayName: 'Title' },
	              { name: 'category',displayName: 'Category'},
	              { name: 'partner',displayName: 'Author'},
	              { name: 'schedule',displayName: 'Schedule' },
	              { name: 'register',displayName: 'Register',cellTemplate:'<a><img src="images/tick.png" class="pointer"></a>'}
	              ]
	  }; 	
	
	

	$http.get('jsonData/data1.json')
    .success(function (response) {
        $scope.gridOptionwebinar.data= response;
    })
    .error(function (error) {
       console.log("Error"+ error);
    });
	
	
	$scope.showWebinarFunc=function(){
		if ($scope.searchtitle== ""){
			$scope.errorMessage="Enter title to search";
		}
		else{
			$scope.errorMessage="";
			$scope.showWebinar= true;
		}
	}
	
	$scope.gridOptionwebinar2 = {
	         enableGridMenus : false,  
	         enableSorting: false, 
	         enableFiltering: false,
	         enableCellEdit : false,
	         enableColumnMenus : false,
	         enableHorizontalScrollbar:0,
	         enableVerticalScrollbar:0,
	         paginationPageSizes: [10, 2, 50],
	         paginationPageSize: 2,   
	         useExternalPagination: true,  
	         
	         columnDefs: [
	              { name: 'id', displayName: 'Id', width:"5%"},
	              { name: 'title', displayName: 'Title' },
	              { name: 'category',displayName: 'Category'},
	              { name: 'partner',displayName: 'Author'},
	              { name: 'schedule',displayName: 'Schedule' },
	              { name: 'register',displayName: 'Register',cellTemplate:'<a><img src="images/tick.png" class="pointer"></a>'}
	              ]
	  }; 	
	
	

	$http.get('jsonData/data2.json')
   .success(function (response) {
       $scope.gridOptionwebinar2.data= response;
   })
   .error(function (error) {
      console.log("Error"+ error);
   });
	
	$scope.getTableHeight = function() {
	       var rowHeight = 30;
	       var headerHeight = 30;
	       return {
	          height: ($scope.gridOptionwebinar.data.length * rowHeight + headerHeight) + "px"
	       };
	    };
	      

});