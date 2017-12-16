import {
  app
} from '../main.js';


app.controller("FrontDoctorsListController", ["$scope", 'httpGetService',  '$location', function($scope, httpGetService, $location) {
  var tThis = this;
  tThis.frontdoctorsObj = [];
  tThis.rowIndex = -1;

  httpGetService.getAllDr().then(function(raspuns) {
    var result = raspuns.data.result;
    tThis.frontdoctorsObj = result;
    console.log(raspuns, "raspuns SImplu");

  });

  tThis.selectedRow = function(index) {
    tThis.rowIndex = index;
  };

  $scope.showConfirm = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.confirm()
      .title('Would you like to delete doctor?')
      .ariaLabel('Lucky day')
      .targetEvent(ev)
      .ok('Yes')
      .cancel('No');
    $mdDialog.show(confirm).then(function() {

      $scope.status = 'You decided to delete this doctor.';

      httpDeleteService.deleteDoctor(tThis.doctorsObj[tThis.rowIndex].ID).then(function(raspuns) {
        console.log(raspuns);
      });
      tThis.doctorsObj.splice(tThis.rowIndex, 1);
      tThis.rowIndex = -1;
    }, function() {
      $scope.status = 'You decided to keep this hospital.';
    });
  };


  tThis.updateDoctor = function() {
    console.log(tThis.doctorsObj[tThis.rowIndex].ID, "tThis.doctorsObj[tThis.rowIndex].ID");
      $location.path('/doctors/edit/'+tThis.doctorsObj[tThis.rowIndex].ID);
  };





}]);
