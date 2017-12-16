import {
  app
} from '../main.js';


app.controller("FrontSpecialitiesController", ["$scope", '$localStorage', 'httpGetService', '$mdDialog', '$location', function($scope, $localStorage, httpGetService, $mdDialog, $location) {
  var tThis = this;
  $scope.frontSpecialitiesObj = [];

  httpGetService.getAllSpec().then(function(raspuns) {
    var result = raspuns.data.result;
    console.log(result, "specccccccccccccccccccccccccccccccccccc");
    $scope.specialitiesObj = result;

  });


  

  tThis.updateSpec = function() {
    $location.path('/specialities/edit/' + $scope.specialitiesObj[tThis.rowIndex].ID);
  };





}]);
