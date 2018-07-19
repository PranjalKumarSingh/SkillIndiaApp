
app.controller('talentAcquisitionController', function($scope,$http){
	

	    $scope.jobrolename="";
		$scope.errorMessage="";
		$scope.openBlock="block1";
		
		$scope.gridOptionsTalent = {
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
		              { name: 'candidateId', displayName: 'Candidate ID', cellClass:'trainingCenterCellClass',headerCellClass:''},
		              { name: 'jobRoleId',displayName: 'job role ID' , cellClass:'trainingCenterCellClass',headerCellClass:''},
		              { name: 'candidateName', displayName: 'Name' ,cellClass:'trainingCenterCellClass',headerCellClass:'' },
		              { name: 'age',      displayName: 'Age' , cellClass:'trainingCenterCellClass',headerCellClass:''},
		              { name: 'location',displayName: 'Location' , cellClass:'trainingCenterCellClass',headerCellClass:''},
		              { name: 'email',displayName: 'Email' , cellClass:'trainingCenterCellClass',headerCellClass:''},
		              

		    ]
		  }; 
		
		 $scope.getTableHeight=function(){
		    	var rowHeight=30;
		    	var headerHeight=30;
		    	return{
		    		height:($scope.gridTraining.data.length * rowHeight + headerHeight) + "px"
		    	};
		    };
		    
			                $http.get('/getCandidateDetails')
						    .then(function (response) {
						    	console.log("Working ui grid");
						    	 $scope.gridTraining.data= response.data;

						    });
						    
						    
						   
						 
						     
						});


			 