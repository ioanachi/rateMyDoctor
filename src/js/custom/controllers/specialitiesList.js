import {
  app
} from '../main.js';


app.controller("SpecilitiesListController", ["$scope", 'httpGetService', "httpDeleteService", '$mdDialog', '$location', function($scope, httpGetService, httpDeleteService, $mdDialog, $location) {
  var tThis = this;
  tThis.specialitiesObj = [];
  tThis.rowIndex = -1;
  $scope.specSelectedUp;

  httpGetService.getSpecialy().then(function(raspuns) {
    var result = raspuns.data.result;
    tThis.specialitiesObj = result;
  });

  tThis.selectedRow = function(index) {
    tThis.rowIndex = index;

  };

  $scope.showConfirm = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.confirm()
      .title('Would you like to delete speciality?')
      .ariaLabel('Lucky day')
      .targetEvent(ev)
      .ok('Yes')
      .cancel('No');
    $mdDialog.show(confirm).then(function() {
      $scope.status = 'You decided to delete this speciality.';
      httpDeleteService.deleteSpeciality(tThis.specialitiesObj[tThis.rowIndex].ID).then(function(raspuns) {
        console.log(raspuns);
      });
      tThis.specialitiesObj.splice(tThis.rowIndex, 1);
      tThis.rowIndex = -1;
    }, function() {
      $scope.status = 'You decided to keep this speciality.';
    });
  };


  tThis.updateSpec = function() {
      $location.path('/specialities/edit/'+tThis.specialitiesObj[tThis.rowIndex].ID);
  };





}]);
