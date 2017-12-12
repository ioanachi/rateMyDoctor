import {
  app
} from '../main.js';


console.log("efrejheruergygu");
app.controller("AddhospitalController", ['Notification', "httpPutService","httpUpdateService", "$scope", "$routeParams", 'httpGetService', function(Notification, httpPutService,httpUpdateService, $scope, $routeParams, httpGetService) {
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
  console.log($routeParams,'data');

  tThis.addEdithosp = function() {
    console.log( $scope.hospName,'$scope.hospName');

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
      console.log($routeParams,'routeParams');

      if($routeParams.id){
        console.log($routeParams,'routeParams');

        httpUpdateService.updateSpeciality(tThis.paramId,_data).then(function(raspuns) {
          console.log(raspuns, "raspuns");
          Notification.success("Hsopital Updated");
        });
      }else{
        httpPutService.addHospital(_data).then(function(raspuns) {
          console.log(raspuns, "raspuns");
          Notification.success("Hospital created");
        });
      }
    } else {
      console.log("errrrrrrrrrrrr");
      Notification.error({
        message: 'Could not add hospital'
      });

    };
  };
  var resetDefaults = function() {
    httpGetService.getSpecialityById(tThis.paramId).then(function(raspuns) {
      var data = raspuns.data.result;
      $scope.specialityAdded = data.Name;
      $scope.addSpecialDescription=data.Description;
      tThis.specialBtn="Update Speciality";


      console.log(raspuns,"jghiyfutrdtuydtfughijogfgyhuij");
    });
  };
  if($routeParams.id){
    resetDefaults();

  }
tThis.specialBtn="Add Speciality";

}]);
