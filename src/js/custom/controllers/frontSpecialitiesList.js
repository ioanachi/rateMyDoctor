import {
  app
} from '../main.js';


app.controller("FrontSpecialitiesController", ["$scope", '$localStorage', 'httpGetService', '$mdDialog', '$location', function($scope, $localStorage, httpGetService, $mdDialog, $location) {
  var tThis = this;
  $scope.frontSpecialitiesObj = [];

  // httpGetService.getSpecialy().then(function(raspuns) {
  //   var result = raspuns.data.result;
  //   console.log(result, "specccccccccccccccccccccccccccccccccccc");
  //   $scope.specialitiesObj = result;
  //   $localStorage.speciality = result;
  //
  // });


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
      httpDeleteService.deleteSpeciality($scope.specialitiesObj[tThis.rowIndex].ID).then(function(raspuns) {});
      $scope.specialitiesObj.splice(tThis.rowIndex, 1);
      tThis.rowIndex = -1;
    }, function() {
      $scope.status = 'You decided to keep this speciality.';
    });
  };


  tThis.updateSpec = function() {
    $location.path('/specialities/edit/' + $scope.specialitiesObj[tThis.rowIndex].ID);
  };





}]);
