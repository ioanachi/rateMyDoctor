import {
  app
} from '../main.js';


console.log("efrejheruergygu");
app.controller("AddspecialityController", ["$scope", "httpPutSpeciality", "$localStorage", function($scope, httpPutSpeciality, $localStorage) {
  var tThis = this;
  $scope.specialityAdded;
  $scope.addSpecialDescription;
  tThis.addspec = function() {
    if (typeof $scope.specialityAdded != "undefined") {
      var _data = {

        "code": "869754",
        "name": "$scope.specialityAdded",
        "description": "$scope.addSpecialDescription",

      };
      httpPutService.addSpeciality(_data).then(function(raspuns) {
        console.log(raspuns, "raspuns");
        Notification.success("Speciality created");
        // $location.path('/login');
      });

    } else {
      console.log("errrrrrrrrrrrr");
      Notification.error({
        message: 'Could not add speciality'
      });

    };
  };

  tThis.addSpecialityList = function() {
    $scope.objSpecility = {}
    $scope.objSpecility.name = $scope.specialityAdded;
    $scope.objSpecility.description = $scope.addSpecialDescription;
    $scope.addSpecialityobj.push($scope.objSpecility);
    console.log($scope.addSpecialityobj)
  }
}]);
