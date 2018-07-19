var app = angular.module('skillIndiaApp');
 
app.controller('jobRoleController', function($scope,$http){
      $scope.gridJobRoles = {
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
               name: 'jobRoleId', 
                displayName: 'Id'
            },
            {
               name: 'jobRole',
               displayName: 'Job Role'
            },
            {
               name: 'sectorSkillCouncil', 
                displayName: 'Description'
            },
            {
                name: 'Trainingcenter', 
                displayName: 'Training Center|State',
                cellTemplate: '<a ng-href="{{row.entity.Trainingcenter}}"><button class="btn btn-primary btn-sm" data-toggle="modal" data-target="#loginModal" ng-click="grid.appScope.getTrainingDetails()">Check Training Center</button></a>'
             }
        ]
    }
   
   
    $scope.gridTrainingCenterDetails = {
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
                              name: 'trainingCenterName', 
                    displayName: 'Training Center'
                },
                {
                              name: 'states',
                              displayName: 'States'
                }
            ]
        };
     
    $scope.getTrainingDetails=function(){
                
                console.log("button is working");
                $http.get('/jsonData/trainingCenter.json')
        .then(function(response) {
                $scope.gridTrainingCenterDetails.data= response.data;
 
        });
    };
    
    $scope.searchJobRole = function () {
                                console.log("inside search for job role text box"+$scope.JobRole);
                                
                                  $http.get('/SearchJobRole?JobRole='+$scope.JobRole)
                    .then(function (response) {
                                 $scope.gridJobRoles.data= response.data;
                                console.log("working searchJobRole function");
                                });
                     };
      $http.get('/JobRoles')
    .then(function (response) {
                 $scope.gridJobRoles.data= response.data;
 
    });
          
                                     
    $scope.search= function(letter){
                console.log("Searching letter");
                $http.get('getJobRoleForSelectedLetter?x='+letter)
                //$http.get('getJobRoleForSelectedLetter?x=S')
                .then(function(response){
                                console.log(" working job role letter");
                                console.log(response.data);
                                $scope.gridJobRoles.data= response.data;
                });
    };
    });
 









