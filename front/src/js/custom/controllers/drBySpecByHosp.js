import {
  app
} from '../main.js';


app.controller("DrSpecHospController", ["$scope", '$localStorage', 'httpGetService', '$mdDialog', '$location', '$routeParams', function($scope, $localStorage, httpGetService, $mdDialog, $location, $routeParams) {
  var tThis = this;
  $scope.drBySpecByHospObj = [];
  console.log($routeParams, "$routeParamseeeeeeeeeeeeee");

  tThis.paramIdh = $routeParams.idh;
  tThis.paramIds = $routeParams.ids;
  httpGetService.getDrbySpecAndHosp(tThis.paramIdh, tThis.paramIds).then(function(raspuns) {
    var result = raspuns.data.result;
    console.log(result, "specccccccccccccccccccccccccccccccccccc");
    $scope.frontSpecByHospObj = result;

  });

  tThis.selectedRowDSH = function(index, isDirective) {
    console.log(tThis.frontSpecByHospObj[index], "tThis.frontSpecByHospObj[index]");

    if (!isDirective) {
      tThis.rowIndex = index;
    }
      return tThis.frontSpecByHospObj[index].hID;
  };







}]);
