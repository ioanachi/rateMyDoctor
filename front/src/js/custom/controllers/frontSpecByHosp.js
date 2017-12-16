import {
  app
} from '../main.js';


app.controller("FrontSpecByHospListController", ["$scope", '$localStorage', 'httpGetService', '$mdDialog', '$location', '$routeParams', function($scope, $localStorage, httpGetService, $mdDialog, $location, $routeParams) {
  var tThis = this;
  $scope.frontSpecByHospObj = [];
  console.log($routeParams.id, "$routeParams");
  tThis.rowIndex = -1;
  tThis.paramIdF = $routeParams.id

  httpGetService.getSpecByHosp(tThis.paramIdF).then(function(raspuns) {
    var result = raspuns.data.result;
    console.log(result, "a");
    $scope.frontSpecByHospObj = result;

  });
  tThis.selectedRowDS = function(index, isDirective) {
    if (!isDirective) {
      tThis.rowIndex = index;
    }
    console.log($scope.frontSpecByHospObj, "b");

    return $scope.frontSpecByHospObj[index].sID;
  };







}]);
