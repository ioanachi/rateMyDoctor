import {
  app
} from '../main.js';


app.controller("AdddoctorController", ['Notification', "httpPutService", "httpUpdateService", "$scope", "$routeParams", '$localStorage', 'httpGetService', function(Notification, httpPutService, httpUpdateService, $scope, $routeParams, $localStorage, httpGetService) {
  var tThis = this;
  tThis.paramId = $routeParams.id;
  $scope.doctorName;
  $scope.doctorPrivate;
  $scope.doctorDescription;
  $scope.doctorPhoto;
  tThis.specialityDr;
  $scope.idSpeciality;
  tThis.hospitalDr;
  $scope.idHospital;
  tThis.rankDr;
  $scope.idRank;

  httpGetService.getSpecialy().then(function(raspuns) {
    var result = raspuns.data.result;
    tThis.specialityDr = result;
    console.log(result, "result")
    console.log(tThis.specialityDr, "tThis.specialityDr")
  });
  httpGetService.getHospital().then(function(date) {
    var result2 = date.data.result;
    tThis.hospitalDr = result2;
    console.log(result2, "result2")
    console.log(tThis.hospitalDr, "tThis.hospitalDr")
    console.log($scope.idHospital, "$scope.idHospital")

  });
  httpGetService.getRank().then(function(rezultat) {
    var result3 = rezultat.data.result;
    tThis.rankDr = result3;
    console.log(result3, "result3")
    console.log($scope.idRank, "$scope.idRank")
  });


  tThis.addEditDr = function() {
    if (typeof $scope.doctorName != "undefined") {
      var _data = {
        "Name": $scope.doctorName,
        "Rank_ID": $scope.idRank,
        "Speciality_ID": $scope.idSpeciality,
        "Hospital_ID": $scope.idHospital,
        "PrivatePractice": $scope.doctorPrivate,
        "CV": $scope.doctorDescription,
        "Picture": $scope.doctorPicture,
      };

      if ($routeParams.id) {
        httpUpdateService.updateDoctors(tThis.paramId, _data).then(function(raspuns) {
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
    httpGetService.getDoctorsById(tThis.paramId).then(function(raspuns) {
      console.log(raspuns, "raspuns");
      console.log(tThis.paramId, "tThis.paramId", )

      var data = raspuns.data.result;
      $scope.doctorName = data.Name;
       $scope.idRank = data.Rank_ID;
      $scope.idSpeciality = data.Speciality_ID;
      $scope.idHospital = data.Hospital_ID;
      $scope.doctorPrivate = data.PrivatePractice;
      $scope.doctorDescription = data.CV;
      $scope.doctorPicture = data.Picture;

      tThis.doctorBtn = "Update Doctor";


    });
  };
  if ($routeParams.id) {
    resetDefaults();

  }
  tThis.doctorBtn = "Add Doctor";

}]);
