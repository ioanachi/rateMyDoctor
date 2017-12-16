import {
  app
} from '../main.js';


app.controller("DrSpecController", ["$scope", '$localStorage', 'httpGetService', '$mdDialog', '$location', '$routeParams', function($scope, $localStorage, httpGetService, $mdDialog, $location, $routeParams) {
  var tThis = this;
  $scope.drBySpecObj = [];
  console.log($routeParams, "$routeParams");
  tThis.paramIdF = $routeParams.id;

  httpGetService.getDrBySpec(tThis.paramIdF).then(function(raspuns) {
    var result = raspuns.data.result;
    console.log(result, "1");
    $scope.drBySpecObj = result;

  });

  tThis.selectedRowDh = function(index, isDirective) {
      tThis.rowIndex = index;
  };







}]);
