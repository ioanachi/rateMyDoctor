import {
  app
} from '../main.js';


app.controller("DrSpecController", ["$scope", '$localStorage', 'httpGetService', '$mdDialog', '$location', '$routeParams', function($scope, $localStorage, httpGetService, $mdDialog, $location, $routeParams) {
  var tThis = this;
  $scope.drBySpecObj = [];
  $scope.SpecName;
  tThis.paramIdF = $routeParams.id;

  httpGetService.getDrBySpec(tThis.paramIdF).then(function(raspuns) {
    var result = raspuns.data.result;
    console.log(result, "1");

    $scope.drBySpecObj = result;

  });


httpGetService.getSpecificSpeciality(tThis.paramIdF).then(function(raspuns3) {
var SpecialityName = raspuns3.data.result;
$scope.SpecName = SpecialityName[0].Name;
console.log($scope.SpecName, "$scope.SpecName");

  });



  tThis.selectedRowDBS = function(index, isDirective) {
      tThis.rowIndex = index;
  };







}]);
