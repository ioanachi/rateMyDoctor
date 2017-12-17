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
  httpGetService.getSpecificHosp(tThis.paramIdF).then(function(raspuns2) {
  var hospName = raspuns2.data.result;
  $scope.HospitalName=hospName[0].Name;
  console.log($scope.HospitalName, "$scope.HospitalName");

    });
  tThis.selectedRowsh = function(index, isDirective) {
    if (!isDirective) {
      tThis.rowIndex = index;
    }
    console.log($scope.frontSpecByHospObj[index].sID, "b");

    return $scope.frontSpecByHospObj[index].sID;
  };







}]);
