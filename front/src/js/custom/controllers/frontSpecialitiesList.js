import {
  app
} from '../main.js';


app.controller("FrontSpecialitiesController", ["$scope", '$localStorage', 'httpGetService', '$mdDialog', '$location', function($scope, $localStorage, httpGetService, $mdDialog, $location) {
  var tThis = this;
  $scope.frontSpecialitiesObj = [];

  httpGetService.getAllSpec().then(function(raspuns) {
    var result = raspuns.data.result;
    $scope.specialitiesObj = result;

  });

  tThis.selectedRow = function(index) {
    tThis.rowIndex = index;
  };
}]);
