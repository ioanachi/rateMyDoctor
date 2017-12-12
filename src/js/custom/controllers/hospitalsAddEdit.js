import {
  app
} from '../main.js';


console.log("efrejheruergygu");
app.controller("AddhospitalController", ['Notification', "httpPutService", "httpUpdateService", "$scope", "$routeParams", 'httpGetService', function(Notification, httpPutService, httpUpdateService, $scope, $routeParams, httpGetService) {
  var tThis = this;
  tThis.paramId = $routeParams.id;
  $scope.hospName;
  $scope.hospCounty;
  $scope.hospCity;
  $scope.hospStreet;
  $scope.hospWebsite;
  $scope.hospDescription;
  $scope.hospPhoto;
  $scope.hospCountry;
  console.log($routeParams, 'data');

  tThis.addEdithosp = function() {
    console.log($scope.hospName, '$scope.hospName');

    if (typeof $scope.hospName != "undefined") {
      var _data = {
        "Name": $scope.hospName,
        "Description": $scope.hospDescription,
        "Country": $scope.hospCountry,
        "County": $scope.hospCounty,
        "City": $scope.hospCity,
        "Street": $scope.hospStreet,
        "Website": $scope.hospWebsite,
        "id": "src/img/DrDash",
      };

      if ($routeParams.id) {
        httpUpdateService.updateHospitals(tThis.paramId, _data).then(function(raspuns) {
          console.log(tThis.paramId,"updateeeeeeee");
          Notification.success("Hospital Updated");
        });
      } else {
        httpPutService.addHospital(_data).then(function(raspuns) {
          Notification.success("Hospital created");
        });
      }
    } else {
      Notification.error({
        message: 'Could not add hospital'
      });

    };
  };

  var resetDefaults = function() {
    httpGetService.getHospitalsById(tThis.paramId).then(function(raspuns) {
      console.log(raspuns, "raspuns");
      console.log(tThis.paramId, "tThis.paramId", )

      var data = raspuns.data.result;
      $scope.hospName = data.Name;
      $scope.hospCounty = data.County;
      $scope.hospCity = data.City;
      $scope.hospStreet = data.Street;
      $scope.hospWebsite = data.Website;
      $scope.hospDescription = data.Description;
      $scope.hospPhoto = data.Photo;
      $scope.hospCountry = data.Country;
      tThis.hospitalBtn = "Update Hospital";


    });
  };
  if ($routeParams.id) {
    resetDefaults();

  }
  tThis.hospitalBtn = "Add Hospital";

}]);
