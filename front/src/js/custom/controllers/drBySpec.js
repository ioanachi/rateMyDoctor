import {
  app
} from '../main.js';


app.controller("DrSpecController", ["$scope", '$localStorage', 'httpGetService', '$mdDialog', '$location', '$routeParams', function($scope, $localStorage, httpGetService, $mdDialog, $location, $routeParams) {
  var tThis = this;
  $scope.drBySpecObj = [];
  console.log($routeParams, "nooooooooooooooo");
  tThis.paramIdF = $routeParams.id;
  console.log(tThis.paramIdF, "nooooooooooooooo");

  httpGetService.getDrBySpec(tThis.paramIdF).then(function(raspuns) {
    var result = raspuns.data.result;
    console.log(result, "1");
    $scope.drBySpecObj = result;

  });

  tThis.selectedRowDBS = function(index, isDirective) {
      tThis.rowIndex = index;
  };







}]);
