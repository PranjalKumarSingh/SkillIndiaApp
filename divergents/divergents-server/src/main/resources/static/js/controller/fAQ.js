//console.log("code reached to faq.js");
var page4 = angular.module('divergents');

page4.controller('page4',function($scope, $http) {
    $scope.status = {
        isFirstOpen: true,
        isFirstDisabled: false
    };

    $scope.selectedScheme = {
        scheme: "",
        schemeForMonth: "",
        selectedBatchType: ""
    };
    $scope.candidatesSelected = {
        candidate: "",
        candidateEnrolledInMonth: ""
    }
    $scope.year = {
        selectedYear: $scope.year,
        selectedMonth: "",
        selectedYearForCondidate: "",
        yearOfEnrollment: ""

    }
    $scope.selectedState = {
        state: "",
        selectedStateForTrainingCentres: "",

    };
    $scope.trainingCenter = {
        CountOfTrainingCentresConductingTraining: $scope.CountOfTrainingCentresConductingTraining,
        totalTrainingCentresWeHave: ""
    }
    $scope.batch = {
        selectedBatchId: "",
        inputBatchIdForBatchStatus: "",
        inputBatchIdForBatchWiseCandidateDetails: ""
    }
    $scope.agency = {
        getNameOfAssessmentAgency: "",
        assessmentAgencyForAParticularState: ""
    }
    $scope.schemeDropDownOptions = [{
        id: 'PMKVY',
        scheme: 'PMKVY'
    }, {
        id: 'Non-PMKVY',
        scheme: 'Non-PMKVY'
    }];
    $scope.candidatesOptions = [{
        id: 'Enrolled',
        name: 'Enrolled'
    }, {
        id: 'Assessed',
        name: 'Assessed'
    }, {
        id: 'Certified',
        name: 'Certified'
    }];
    $scope.yearOptions = [{
            id: 2015,
            value: 2015
        },
        {
            id: 2016,
            value: 2016
        },
        {
            id: 2017,
            value: 2017
        },
        {
            id: 2018,
            value: 2018
        },
        {
            id: 2019,
            value: 2019
        }
    ];
    $scope.stateDropDownOptions = [{
            id: 'Andhra Pradesh',
            state: 'Andhra Pradesh'
        },
        {
            id: 'Arunachal Pradesh',
            state: 'Arunachal Pradesh'
        },
        {
            id: 'Assam',
            state: 'Assam'
        },
        {
            id: 'Bihar',
            state: 'Bihar'
        },
        {
            id: 'Chandigarh',
            state: 'Chandigarh'
        },
        {
            id: 'Chhattisgarh',
            state: 'Chhattisgarh'
        },
        {
            id: 'Delhi',
            state: 'Delhi'
        },
        {
            id: 'Goa',
            state: 'Goa'
        },
        {
            id: 'Gujarat',
            state: 'Gujarat'
        },
        {
            id: 'Haryana',
            state: 'Haryana'
        },
        {
            id: 'Himachal Pradesh',
            state: 'Himachal Pradesh'
        },
        {
            id: 'Jammu & Kashmir',
            state: 'Jammu & Kashmir'
        },
        {
            id: 'Jharkhand',
            state: 'Jharkhand'
        },
        {
            id: 'Karnataka',
            state: 'Karnataka'
        },
        {
            id: 'Kerala',
            state: 'Kerala'
        },
        {
            id: 'Madhya Pradesh',
            state: 'Madhya Pradesh'
        },
        {
            id: 'Maharastra',
            state: 'Maharastra'
        },
        {
            id: 'Manipur',
            state: 'Manipur'
        },
        {
            id: 'Meghalaya',
            state: 'Meghalaya'
        },
        {
            id: 'Mizoram',
            state: 'Mizoram'
        },
        {
            id: 'Nagaland',
            state: 'Nagaland'
        },
        {
            id: 'Orissa',
            state: 'Odisha'
        },
        {
            id: 'Punjab',
            state: 'Punjab'
        },
        {
            id: 'Rajasthan',
            state: 'Rajasthan'
        },
        {
            id: 'Sikkim',
            state: 'Sikkim'
        },
        {
            id: 'Tamil Nadu',
            state: 'Tamil Nadu'
        },
        {
            id: 'Telangana',
            state: 'Telangana'
        },
        {
            id: 'Tripura',
            state: 'Tripura'
        },
        {
            id: 'Uttarakhand',
            state: 'Uttarakhand'
        },
        {
            id: 'Uttar Pradesh',
            state: 'Uttar Pradesh'
        },
        {
            id: 'West Bengal',
            state: 'West Bengal'
        }
    ];

    $scope.monthDropDownOptions = [{
            id: 01,
            month: 'JANUARY'
        },
        {
            id: 02,
            month: 'FEBRUARY'
        },
        {
            id: 03,
            month: 'MARCH'
        },
        {
            id: 04,
            month: 'APRIL'
        },
        {
            id: 05,
            month: 'MAY'
        },
        {
            id: 06,
            month: 'JUNE'
        },
        {
            id: 07,
            month: 'JULY'
        },
        {
            id: 08,
            month: 'AUGUST'
        },
        {
            id: 09,
            month: 'SEPTEMBER'
        },
        {
            id: 10,
            month: 'OCTOBER'
        },
        {
            id: 11,
            month: 'NOVEMBER'
        },
        {
            id: 12,
            month: 'DECEMBER'
        }
    ];

    $scope.gridOptions = {
        enableGridMenus: false,
        enableSorting: false,
        enableFiltering: false,
        enableCellEdit: false,
        enableColumnMenus: false,
        columnDefs: [{
                name: 'totalNoOfCandidatesEnrolled',
                displayName: 'Total No. Of Candidate Enrolled',
                width: "30%"
            },
            {
                name: 'totalNoOfCandidatesAssessed',
                displayName: 'Total No. Of Candidate Assessed',
                width: "30%"
            },
            {
                name: 'totalNoOfCandidatesCertified',
                displayName: 'Total No. Of Candidate Certified',
                width: "40%"
            }
        ]
    };

    $scope.gridOptionsSelectedScheme = {
        enableGridMenus: false,
        enableSorting: false,
        enableFiltering: false,
        enableCellEdit: false,
        enableColumnMenus: false,
        columnDefs: [{
                name: 'totalNoOfCandidatesEnrolled',
                displayName: 'Total No. Of Candidate Enrolled',
                width: "30%"
            },
            {
                name: 'totalNoOfCandidatesAssessed',
                displayName: 'Total No. Of Candidate Assessed',
                width: "30%"
            },
            {
                name: 'totalNoOfCandidatesCertified',
                displayName: 'Total No. Of Candidate Certified',
                width: "40%"
            }
        ]
    };

    $scope.gridOptionsSelectCandidates = {
        enableGridMenus: false,
        enableSorting: false,
        enableFiltering: false,
        enableCellEdit: false,
        enableColumnMenus: false,
        columnDefs: [{
                name: 'month',
                displayName: 'Months',
                width: "50%"
            },
            {
                name: 'numberOfCandidates',
                displayName: 'Number of Candidates',
                width: "50%"
            }
        ]
    };

    $scope.gridOptionsSelectCandidatesSchemeWise = {
        enableGridMenus: false,
        enableSorting: false,
        enableFiltering: false,
        enableCellEdit: false,
        enableColumnMenus: false,
        columnDefs: [{
                name: 'month',
                displayName: 'Months',
                width: "50%"
            },
            {
                name: 'numberOfCandidates',
                displayName: 'Number of Candidates',
                width: "50%"
            }
        ]
    };

    $scope.gridTotalBatchesAndTotalCandidatesInState = {
        enableGridMenus: false,
        enableSorting: false,
        enableFiltering: false,
        enableCellEdit: false,
        enableColumnMenus: false,
        columnDefs: [{
                name: 'batches',
                displayName: 'Number of batches',
                width: "50%"
            },
            {
                name: 'totalCandidates',
                displayName: 'Number of Candidates',
                width: "50%"
            }
        ]
    };

    $scope.getTotalBatchesAndTotalCandidatesInAScheme = {
        enableGridMenus: false,
        enableSorting: false,
        enableFiltering: false,
        enableCellEdit: false,
        enableColumnMenus: false,
        columnDefs: [{
                name: 'batches',
                displayName: 'Number of batches',
                width: "50%"
            },
            {
                name: 'totalCandidates',
                displayName: 'Number of Candidates',
                width: "50%"
            }
        ]
    };

    $scope.gridOptionsForSelectedStateShowingTotalBatchesAndCandidatesEnrolled = {
        enableGridMenus: false,
        enableSorting: false,
        enableFiltering: false,
        enableCellEdit: false,
        enableColumnMenus: false,
        columnDefs: [{
                name: 'month',
                displayName: 'Month',
                width: "40%"
            },
            {
                name: 'totalBatches',
                displayName: 'Number of Batches',
                width: "30%"
            },
            {
                name: 'candidatesEnrolled',
                displayName: 'Total Candidates Enrolled',
                width: "30%"
            }
        ]
    };

    $scope.gridOptionForNamesOfTrainingCentresNotConductingTraining = {
        enableGridMenus: false,
        enableSorting: false,
        enableFiltering: false,
        enableCellEdit: false,
        enableColumnMenus: false,
        columnDefs: [{
                name: 'centreId',
                displayName: 'Center Id',
                width: "50%"
            },
            {
                name: 'centreName',
                displayName: 'Center Name',
                width: "50%"
            }
        ]
    };

    $scope.gridOptionsBatchStausOfAParticularBatchWithBatchId = {
        enableGridMenus: false,
        enableSorting: false,
        enableFiltering: false,
        enableCellEdit: false,
        enableColumnMenus: false,
        columnDefs: [{
                name: 'batchId',
                displayName: 'Batch Id',
                width: "10%"
            },
            {
                name: 'trainingPartnerName',
                displayName: 'Training Partner Name',
                width: "30%"
            },
            {
                name: 'batchStartDate',
                displayName: 'Batch Start Date',
                width: "10%"
            },
            {
                name: 'batchEndDate',
                displayName: 'Batch End Date',
                width: "20%"
            },
            {
                name: 'assessmentDate',
                displayName: 'Assessment Date',
                width: "20%"
            },
            {
                name: 'resultApproved',
                displayName: 'Result Approved',
                width: "10%"
            }
        ]
    };

    $scope.gridOptionsBatchWiseCandidateDetails = {
        enableGridMenus: false,
        enableSorting: false,
        enableFiltering: false,
        enableCellEdit: false,
        enableColumnMenus: false,
        columnDefs: [{
                name: 'candidateName',
                displayName: 'Candidate Name',
                width: 130
            },
            {
                name: 'mobileNumber',
                displayName: 'Mobile Number',
                width: 130
            },
            {
                name: 'traineeAddress',
                displayName: 'Trainee Address',
                width: 130
            },
            {
                name: 'trainingPartnerName',
                displayName: 'Training Partner Name',
                width: 130
            },
            {
                name: 'batchId',
                displayName: 'Batch Id',
                width: 130
            },
            {
                name: 'batchStartDate',
                displayName: 'Batch Start Date',
                width: 130
            },
            {
                name: 'batchEndDate',
                displayName: 'Batch End Date',
                width: 130
            },
            {
                name: 'eMailId',
                displayName: 'E-Mail Id',
                width: 130
            }
        ]
    };


    $scope.getDataAcrossAllScheme = function() {

        $http.get('/getFAQTotalCandidatesTrainedAssessedCertified')
            .then(function(response) {
                //console.log(response);
                $scope.gridOptions.data = response.data;
            });
    };


    $scope.getDataOfScheme = function() {
        //console.log("Selected Scheme is -" + $scope.selectedScheme.scheme);
        //var scheme = $scope.selectedScheme;
        $http.post('/getFAQTotalCandidatesTrainedAssessedCertifiedSchemeWise?batchType=' + $scope.selectedScheme.scheme)
            .then(function(response) {

                //console.log(response);
                $scope.gridOptionsSelectedScheme.data = response.data;
            });
    };

    $scope.getDataOfCandidatesMonthWise = function() {

        var candidatesType = $scope.candidatesSelected.candidate;
        //console.log('CANDIDATES  :' + candidatesType);

        var url = '/getFAQCandidatesEnrolledAssessedCertifiedMonthWise?year=' + $scope.year.selectedYear + '&candidates=' + $scope.candidatesSelected.candidate;
        //console.log(url);
        $http.post(url)
            .then(function(response) {
                //console.log(response);
                $scope.gridOptionsSelectCandidates.data = response.data;
            });
    };

    $scope.getDataOfCandidatesSchemeAndMonthWise = function() {

        var candidatesType = $scope.candidatesSelected.candidateEnrolledInMonth;
        //console.log('CANDIDATES  :' + candidatesType);
        var selectedYear = $scope.year.selectedYearForCondidate;
        var selectedscheme = $scope.selectedScheme.schemeForMonth;
        var url = '/getFAQCandidatesEnrolledAssessedCertifiedMonthAndSchemeWise?year=' + selectedYear + '&candidates=' + candidatesType + '&batchType=' + selectedscheme;
        //console.log('YE HAI URL' + url);
        $http.post(url)
            .then(function(response) {
                //console.log(response);
                $scope.gridOptionsSelectCandidatesSchemeWise.data = response.data;
            });
    };

    $scope.getTotalBatchesAndAllCandidatesInAState = function() {


        //console.log('State is :' + $scope.selectedState.state);
        var url = '/getFAQCountOfTotalNumberOfBatchesAndTotalEnrolledInAParticularState?state=' + $scope.selectedState.state;
        $http.post(url)
            .then(function(response) {
                //console.log(response);
                $scope.gridTotalBatchesAndTotalCandidatesInState.data = response.data;
            });
    };

    $scope.getTotalBatchesAndAllCandidatesInAScheme = function() {

        var selectedBatchScheme = $scope.selectedScheme.selectedBatchType;
        //console.log('SELECTED SCHEME IS:' + selectedBatchScheme);
        var url = '/getFAQCountOfTotalNumberOfBatchesAndTotalEnrolledInAParticularScheme?batchType=' + selectedBatchScheme;
        $http.post(url)
            .then(function(response) {
                //console.log(response);
                $scope.getTotalBatchesAndTotalCandidatesInAScheme.data = response.data;
            });
    };

    $scope.getTotalCandidatesToBeAssessedForMonth = function() {

        var selectedMonth = $scope.year.selectMonth;
        //console.log(selectedMonth);
        var url = '/getFAQCountOfCandidatesAssessmentUpcomingForAMonth?month=' + selectedMonth;
        $http.post(url)
            .then(function(response) {
                //console.log(response.data);
                $scope.candidatesAssessmentForUpcomingMonth = "Candidates assessed will be : " + response.data;
                //             $scope.getTotalCandidatesToBeAssessedForUpcomingMonth = response.data;
            });
    };

    $scope.getTotalTrainingCentresInAState = function() {

        var state = $scope.selectedState.selectedStateForTrainingCentres;
        //console.log(state);
        var url = '/getFAQTotalTrainingCentresInAState?state=' + state;
        $http.post(url)
            .then(function(response) {
                //console.log(response.data);
                $scope.NumberOfTrainingCentres = response.data;
            });
    };

    $scope.getTotalBatchesAndCandidatesEnrolledMonthWiseForAYear = function() {

        var year = $scope.year.yearOfEnrollment;
        //console.log(year);
        var url = '/getFAQTotalBatchesWithTotalCandidatesEnrolledYearWise?year=' + year;
        $http.post(url)
            .then(function(response) {
                //console.log(response);
                $scope.gridOptionsForSelectedStateShowingTotalBatchesAndCandidatesEnrolled.data = response.data;
            });
    };

    $scope.getTotalTrainingCentresConductingTraining = function() {

        var url = '/getFAQCountOfTotalTrainingCentresConductingTraining';
        $http.get(url)
            .then(function(response) {
                //console.log(response.data);
                $scope.trainingCenter.CountOfTrainingCentresConductingTraining = response.data;
                //            Return Output here
            });
    };

    $scope.getNamesOfTrainingCentresNotConductingTraining = function() {

        var url = '/getFAQTrainingCentresNotTakingAnyBatches';
        $http.get(url)
            .then(function(response) {
                //console.log(response.data);
                $scope.gridOptionForNamesOfTrainingCentresNotConductingTraining.data = response.data;
            });
    };

    $scope.getTotalTrainingCentresAllIndia = function() {

        var url = '/getDashboardTotalTrainingCentersInIndia';
        $http.get(url)
            .then(function(response) {
                //console.log(response.data);
                $scope.trainingCenter.totalTrainingCentresWeHave = response.data;
                //var totalTrainingCentresWeHave = "We have total "+response.data+" training centers";
            });
    };

    $scope.getAgencyNameForParticularBatchWithId = function() {

        var batchId = $scope.batch.selectedBatchId;
        var url = '/getFAQNameOfAgencyToWhichABatchIsAssigned?batchId=' + batchId;
        var agencyName;
        $http({
            method: 'POST',
            url: url,
            transformResponse: [function (data)  {
	        //console.log(data);
    	    agencyName=data;
        	return data;}]
        }).then(function(response) {
            //console.log(response)
            if (agencyName) {
                $scope.AgencyNameForParticularBatchWithId = 'Batch : ' + batchId + ' is assigned to agency : ' + agencyName;
            } else {
                $scope.AgencyNameForParticularBatchWithId = 'No results found for batch :' + batchId;
            }


        });
    };

    $scope.getStatusOfABatchWithBatchId = function() {

        var batchId = $scope.batch.inputBatchIdForBatchStatus;
        var url = '/getFAQStatusOfAParticularBatchWithId?batchId=' + batchId;
        $http.post(url)
            .then(function(response) {
                //console.log(response.data);
                $scope.gridOptionsBatchStausOfAParticularBatchWithBatchId.data = response.data;
            });
    };

    $scope.getNumberofBatchesAssignedToAParticularAssessmentAgency = function() {

        var agencyName = $scope.agency.getNameOfAssessmentAgency;
        var batchesCountForAgencyName;
        var url = '/getFAQTotalCountOfBatchesAssignedToAAssessmentAgency?agencyName=' + agencyName;
        $http.post(url)
            .then(function(response) {
                //console.log(response.data);
                if (response.data == 0) {
                    $scope.batchesAssignedToAssessmentAgency = 'No records found for agency : ' + agencyName;
                } else {
                    $scope.batchesAssignedToAssessmentAgency = 'Total Batches assigned to Agency : ' + agencyName + ' are ' + response.data;
                }
            });
    };

    $scope.getNumberOfAssessorForAParticularAgencyInAParticularState = function() {

        var agencyName = $scope.agency.assessmentAgencyForAParticularState;
        var state = $scope.selectedState.selectedStateForAParticularAgencyForAParticularState;
        var url = '/getFAQCountTotalAssessorsOfAParticularAgencyInAParticularState?agencyName=' + agencyName + '&state=' + state;
        $http.post(url)
            .then(function(response) {
                $scope.assessorNumberForSelectedStateAndSelectedAgency = 'Total assessors af agency ' + agencyName + '  in ' + state + ' are :' + response.data;
            });

    };

    $scope.getCountOfBatchesForWhichResultIsPending = function() {

        var url = '/getFAQCountBatchesForWhichResultIsPending';
        $http.get(url)
            .then(function(response) {
                //console.log(response.data);
                $scope.countOfBatchesForWhichResultUploadIsPending = 'Result Pending : ' + response.data;
            });
    };

    $scope.getCountOfNonAssignedBatches = function() {

        var url = '/getFAQCountTotalNonAssignedBatches';
        $http.get(url)
            .then(function(response) {
                //console.log(response.data);
                $scope.countOfTotalNonAssignedbatches = 'Non-Assigned Batches :' + response.data;
            });
    };

    $scope.getbatchWiseCandidateDetailsForAParticularBatchWithBatchId = function() {

        var batchId = $scope.batch.inputBatchIdForBatchWiseCandidateDetails;
        var url = '/getFAQBatchWiseCandidatesDetails?batchId=' + batchId;
        $http.post(url)
            .then(function(response) {
                //console.log(response.data);
                $scope.gridOptionsBatchWiseCandidateDetails.data = response.data;
            });

    };
});



//function ends here //pooja
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
}

$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);