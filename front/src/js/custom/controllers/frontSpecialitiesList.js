import {
  app
} from '../main.js';


app.controller("FrontSpecialitiesController", ["$scope", '$localStorage', 'httpGetService', '$mdDialog', '$location', function($scope, $localStorage, httpGetService, $mdDialog, $location) {
  var tThis = this;
  $scope.specialitiesObj = [];


  httpGetService.getAllSpec().then(function(raspuns) {
    var result = raspuns.data.result;
    console.log(raspuns.data.result, "222222");
    $scope.specialitiesObj = result;

  });

  tThis.selectedRowSD = function(index, isDirective) {
    if (!isDirective) {
      tThis.rowIndex = index;
    };
    return $scope.specialitiesObj[index].sID;
  };
}]);
