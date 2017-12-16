import {
  app
} from '../main.js';


app.controller("HospitalsListController", ["$scope", 'httpGetService', "httpDeleteService", '$mdDialog', '$location', function($scope, httpGetService, httpDeleteService, $mdDialog, $location) {
  var tThis = this;
  tThis.hospitalsObj = [];
  tThis.rowIndex = -1;

  httpGetService.getHospital().then(function(raspuns) {
    console.log(raspuns, "raspunsNN");
    var result = raspuns.data.result;
    tThis.hospitalsObj = result;
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
      console.log(tThis.hospitalsObj,"enter");

      $scope.status = 'You decided to delete this hospital.';
      httpDeleteService.deleteHospital(tThis.hospitalsObj[tThis.rowIndex].hID).then(function(raspuns) {
        console.log(raspuns, "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbs");
      });
      tThis.hospitalsObj.splice(tThis.rowIndex, 1);
      tThis.rowIndex = -1;
    }, function() {
      $scope.status = 'You decided to keep this hospital.';
    });
  };


  tThis.updateHosp = function() {
      $location.path('/hospitals/edit/'+tThis.hospitalsObj[tThis.rowIndex].hID);
  };





}]);
