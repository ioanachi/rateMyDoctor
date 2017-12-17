import {
  app
} from '../main.js';


app.controller("DrHospController", ["$scope", '$localStorage', 'httpGetService', '$mdDialog', '$location', '$routeParams', function($scope, $localStorage, httpGetService, $mdDialog, $location, $routeParams) {
  var tThis = this;
  $scope.drByHospObj = [];
  $scope.HospitalName;

  tThis.paramIdF = $routeParams.id
  httpGetService.getDrByHosp(tThis.paramIdF).then(function(raspuns) {
    var result = raspuns.data.result;
    console.log(result, "1");
    $scope.drByHospObj = result;

  });
httpGetService.getSpecificHosp(tThis.paramIdF).then(function(raspuns2) {
var hospName = raspuns2.data.result;
$scope.HospitalName=hospName[0].Name;
console.log($scope.HospitalName, "$scope.HospitalName");

  });




  tThis.selectedRowDh = function(index, isDirective) {
      tThis.rowIndex = index;
  };







}]);
