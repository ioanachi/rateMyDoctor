import {
  app
} from '../main.js';


app.controller("FrontSpecByHospListController", ["$scope", '$localStorage', 'httpGetService', '$mdDialog', '$location', '$routeParams', function($scope, $localStorage, httpGetService, $mdDialog, $location, $routeParams) {
  var tThis = this;
  $scope.frontSpecByHospObj = [];
  console.log($routeParams, "$routeParams");

  tThis.paramIdF = $routeParams.id
  httpGetService.getSpecByHosp(tThis.paramIdF).then(function(raspuns) {
    var result = raspuns.data.result;
    console.log(result, "specccccccccccccccccccccccccccccccccccc");
    $scope.frontSpecByHospObj = result;

  });








}]);
