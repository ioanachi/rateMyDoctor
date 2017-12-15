import {
  app
} from '../main.js';


app.controller("FrontHospListController", ["$scope", 'httpGetService', '$mdDialog', '$location', function($scope, httpGetService, $mdDialog, $location) {
  var tThis = this;
  tThis.frontHospitalsObj = [];
  tThis.rowIndex = -1;
  $scope.specSelectedUp;

  httpGetService.getFrontHosp().then(function(raspuns) {
    console.log(raspuns, "raspunsNNlllllllllllllllllllll");
    var result = raspuns.data.result;
    tThis.frontHospitalsObj = result;
  });

  tThis.selectedRow = function(index) {
    tThis.rowIndex = index;
    console.log(index, "index");


  };

  $scope.showConfirm = function(ev) {
    console.log(tThis.hospitalsObj, "tThis.hospitalsObj");

    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.confirm()
      .title('Would you like to delete hospital?')
      .ariaLabel('Lucky day')
      .targetEvent(ev)
      .ok('Yes')
      .cancel('No');
    $mdDialog.show(confirm).then(function() {

      $scope.status = 'You decided to delete this hospital.';

      httpDeleteService.deleteHospital(tThis.hospitalsObj[tThis.rowIndex].ID).then(function(raspuns) {
        console.log(raspuns);
      });
      tThis.hospitalsObj.splice(tThis.rowIndex, 1);
      tThis.rowIndex = -1;
    }, function() {
      $scope.status = 'You decided to keep this hospital.';
    });
  };


  tThis.updateHosp = function() {
    console.log(tThis.hospitalsObj[tThis.rowIndex].ID, "tThis.hospObj[tThis.rowIndex].ID");
      $location.path('/hospitals/edit/'+tThis.hospitalsObj[tThis.rowIndex].ID);
  };





}]);
