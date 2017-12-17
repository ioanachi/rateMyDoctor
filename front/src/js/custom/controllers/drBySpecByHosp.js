import {
  app
} from '../main.js';
 

app.controller("DrSpecHospController", ["$scope", '$localStorage', 'httpGetService', '$mdDialog', '$location', '$routeParams', function($scope, $localStorage, httpGetService, $mdDialog, $location, $routeParams) {
  var tThis = this;
  $scope.drBySpecByHospObj = [];
  console.log($routeParams, "$routeParams");

  tThis.paramIdF = $routeParams.id
  httpGetService.getSpecByHosp(tThis.paramIdF).then(function(raspuns) {
    var result = raspuns.data.result;
    console.log(result, "specccccccccccccccccccccccccccccccccccc");
    $scope.frontSpecByHospObj = result;

  });

  tThis.selectedRowDS = function(index, isDirective) {
    console.log(tThis.frontSpecByHospObj[index], "tThis.frontSpecByHospObj[index]");

    if (!isDirective) {
      tThis.rowIndex = index;
    }
      return tThis.frontSpecByHospObj[index].hID;
  };







}]);
