import {
  app
} from '../main.js';


app.controller("HospBySpecController", ["$scope", '$localStorage', 'httpGetService', '$mdDialog', '$location', '$routeParams', function($scope, $localStorage, httpGetService, $mdDialog, $location, $routeParams) {
  var tThis = this;
  $scope.hospBySpecObj = [];
  console.log($routeParams, "$routeParams");
  tThis.paramIdF = $routeParams.id;

  httpGetService.getHospBySpec(tThis.paramIdF).then(function(raspuns) {
    var result = raspuns.data.result;
    console.log(result, "12121221212121121122");
    $scope.hospBySpecObj = result;

  });

  tThis.selectedRowHS = function(index, isDirective) {
      tThis.rowIndex = index;
  };
  httpGetService.getSpecificSpeciality(tThis.paramIdF).then(function(raspuns3) {
    var SpecialityName = raspuns3.data.result;
    $scope.SpecName = SpecialityName[0].Name;
    console.log($scope.SpecName, "$scope.SpecName");

  });

}]);
