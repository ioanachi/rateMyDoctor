import {
  app
} from '../main.js';


console.log("efrejheruergygu");
app.controller("AdddoctorController", ['Notification', "httpPutService", "httpUpdateService", "$scope", "$routeParams", 'httpGetService', function(Notification, httpPutService, httpUpdateService, $scope, $routeParams, httpGetService) {
  var tThis = this;
  tThis.paramId = $routeParams.id;
  $scope.doctorName;
  $scope.doctorRank;
  $scope.doctorSpeciality;
  $scope.doctorOtherSpec;
  $scope.doctorHospital;
  $scope.doctorPrivate;
  $scope.doctorDescription;
  $scope.doctorPhoto;

  tThis.addEditDr = function() {
    console.log($scope.hospName, '$scope.hospName');

    if (typeof $scope.doctorName != "undefined") {
      var _data = {
        "Name": $scope.doctorName,
        "Rank": $scope.doctorRank,
        "Speciality": $scope.doctorSpeciality,
        "SecSpeciality": $scope.doctorOtherSpec,
        "Hospital": $scope.doctorHospital,
        "Private": $scope.doctorPrivate,
        "Description": $scope.doctorDescription,
        "Photo": $scope.doctorPhoto,
        "id": "src/img/DrDash",
      };

      if ($routeParams.id) {
        httpUpdateService.updateDoctors(tThis.paramId, _data).then(function(raspuns) {
          console.log(tThis.paramId,"updateeeeeeee");
          Notification.success("Doctor Updated");
        });
      } else {
        httpPutService.addDoctor(_data).then(function(raspuns) {
          Notification.success("Doctor added");
        });
      }
    } else {
      Notification.error({
        message: 'Could not add doctor'
      });

    };
  };

  var resetDefaults = function() {
    httpGetService.getHospitalsById(tThis.paramId).then(function(raspuns) {
      console.log(raspuns, "raspuns");
      console.log(tThis.paramId, "tThis.paramId", )

      var data = raspuns.data.result;
      $scope.doctorName = data.Name;
      $scope.doctorRank = data.Rank;
      $scope.doctorSpeciality = data.Speciality;
      $scope.doctorOtherSpec = data.SecSpeciality;
      $scope.doctorHospital = data.Hospital;
      $scope.doctorPrivate = data.Private;
      $scope.doctorDescription = data.Description;
      $scope.doctorPhoto = data.Photo;
      tThis.doctorBtn = "Update Hospital";


    });
  };
  if ($routeParams.id) {
    resetDefaults();

  }
  tThis.doctorBtn = "Add Hospital";

}]);
