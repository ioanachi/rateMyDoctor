import {
  app
} from '../main.js';


console.log("efrejheruergygu");
app.controller("AddspecialityController", ["$scope", function($scope) {
  var tThis = this;
  $scope.specialityAdded;
  $scope.addSpecialDescription;


  tThis.addSpecialityList = function() {
    $scope.objSpecility={}
    $scope.objSpecility.name = $scope.specialityAdded;
    $scope.objSpecility.description = $scope.addSpecialDescription;
    $scope.addSpecialityobj.push($scope.objSpecility);
    console.log($scope.addSpecialityobj)
  }
}]);
