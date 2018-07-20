var myApp = angular.module('skillIndiaApp');

var flag = 1;
/*
This is the Directive for any pie chart
Load the directive before loading the controller file
*/
myApp.directive('hcChart', function(){
        return{
               restrict : 'E',
               template : '<div></div>',
               scope : {
                       title : '@',
                       data : '='
               },
               
               link : function(scope, element){
                       //the second parameter can also be passed from a scope variable having different name
                             Highcharts.chart(element[0], {
                                      chart: {
                                      plotBackgroundColor: null,
                                      plotBorderWidth: null,
                                      plotShadow: false,
                                      type: 'pie'
                                  },
                                  title: {
                                      text: 'Top 5 Training partners with maximum placement percentage'
                                  },
                                  tooltip: {
                                      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                                  },
                                  plotOptions: {
                                      pie: {
                                          allowPointSelect: true,
                                          cursor: 'pointer',
                                          dataLabels: {
                                              enabled: false
                                          },
                                          showInLegend: false
                                      }
                                  },
                                  series: [{
                                      name: 'Percentage',
                                      colorByPoint: true,
                                      data: scope.data
                                  }]
                       });
               }
        };
});

/*
This is the Directive for any generic chart
Pass in the options in the scope variable in the controller
Load the directive before loading the controller file
*/
myApp.directive('hcGenericChart', function(){
        return{
               restrict : 'E',
               template : '<div> </div>',
               scope : {
                       options : '='
               },
               //scope.options refers to the options specified in the controller or the services file
               link : function(scope, element){
                       Highcharts.chart(element[0], scope.options)
                       chart: {
                           type: 'pie'
                       }
               }
        }
});


myApp.controller('quickFactsController', function($scope, $http){
    console.log("Starting chart rendering....");
    
    
    $scope.firstFunc = function(){
           console.log("Test success " + $scope.myVar);
           
           if($scope.myVar == 2){}
    }
    
    $scope.pieData = [
	
{
           name : "INDUSTRY PARTNERSHIP",
           y : 20
    },
    {
           name : "CSR FUNDS",
           y : 20
    },
	{
		name : "CANDIDATE CERTIFIED",
		y : 20
	},
	{
		name : "JOB ROLES",
			y : 20
	},
	{
		name : "TRAINING PARTNERSHIP",
		y : 20

		
	}
	
	];
    
    $scope.chartOptions = {
                   chart : {
                          type : 'column'
                   },
                   title: {
                          text : 'Top 5 Corporate with maximum contribution'
                   },
                   xAxis: {
                   categories: [
                       'IBM',
                       'cognizant',
                       'Smalt and beryl',
                       'Torry Harris',
                       'Fluper'
                   ],
                   crosshair: true
               },
               yAxis: {
                   min: 0,
                   title: {
                       text: 'CSR Contribution(INR)'
                   }
               },
               tooltip: {
                   headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                   pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                       '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                   footerFormat: '</table>',
                   shared: true,
                   useHTML: true
               },
               plotOptions: {
                   column: {
                       pointPadding: 0.3,
                       borderWidth: 0
                   }
               },
               series: [{
                   name: 'CSR Contribution',
                   data: [24, 22, 22, 20, 10]
               }]  
    }
	       
	});