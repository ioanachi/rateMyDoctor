import {
  app
} from '../main.js';


app.controller("AddRankController", ['Notification', "httpPutService", "httpUpdateService", "$scope", "$routeParams", 'httpGetService', function(Notification, httpPutService, httpUpdateService, $scope, $routeParams, httpGetService) {
  // var tThis = this;
  // tThis.paramId = $routeParams.id;
  // $scope.doctorName;
  // $scope.doctorRank;
  // $scope.doctorSpeciality;
  // $scope.doctorOtherSpec;
  // $scope.doctorHospital;
  // $scope.doctorPrivate;
  // $scope.doctorDescription;
  // $scope.doctorPhoto;
  //
  // tThis.addEditDr = function() {
  //   console.log($scope.hospName, '$scope.hospName');
  //
  //   if (typeof $scope.doctorName != "undefined") {
  //     var _data = {
  //       "Name": $scope.doctorName,
  //       "Rank_ID": $scope.doctorRank,
  //       // "Speciality": $scope.doctorSpeciality,
  //       // "SecSpeciality": $scope.doctorOtherSpec,
  //       // "Hospital": $scope.doctorHospital,
  //       "PrivatePractice": $scope.doctorPrivate,
  //       "CV": $scope.doctorDescription,
  //       "Picture": $scope.doctorPicture,
  //       // "id": "src/img/DrDash"
  //     };
  //
  //     if ($routeParams.id) {
  //       httpUpdateService.updateDoctors(tThis.paramId, _data).then(function(raspuns) {
  //         console.log(tThis.paramId,"updateeeeeeee");
  //         Notification.success("Doctor Updated");
  //       });
  //     } else {
  //       httpPutService.addDoctor(_data).then(function(raspuns) {
  //         Notification.success("Doctor added");
  //       });
  //     }
  //   } else {
  //     Notification.error({
  //       message: 'Could not add doctor'
  //     });
  //
  //   };
  // };
  //
  // var resetDefaults = function() {
  //   httpGetService.getDoctorsById(tThis.paramId).then(function(raspuns) {
  //     console.log(raspuns, "raspuns");
  //     console.log(tThis.paramId, "tThis.paramId", )
  //
  //     var data = raspuns.data.result;
  //     $scope.doctorName = data.Name;
  //     $scope.doctorRank = data.Rank_ID;
  //     // $scope.doctorSpeciality = data.Speciality;
  //     // $scope.doctorOtherSpec = data.SecSpeciality;
  //     // $scope.doctorHospital = data.Hospital;
  //     $scope.doctorPrivate = data.PrivatePractice;
  //     $scope.doctorDescription = data.CV;
  //     $scope.doctorPicture = data.Picture;
  //     tThis.doctorBtn = "Update Doctor";
  //
  //
  //   });
  // };
  // if ($routeParams.id) {
  //   resetDefaults();
  //
  // }
  // tThis.doctorBtn = "Add Doctor";

}]);
