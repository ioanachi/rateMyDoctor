import {
  app
} from '../main.js';


app.controller("FrontHospListController", ["$scope", 'httpGetService', '$mdDialog', '$location', function($scope, httpGetService, $mdDialog, $location) {
  var tThis = this;
  tThis.frontHospitalsObj = [];
  tThis.rowIndex = -1;
  tThis.idHosp;

  httpGetService.getFrontHosp().then(function(raspuns) {
    console.log(raspuns, "raspunsNNlllllllllllllllllllll");
    var result = raspuns.data.result;
    tThis.frontHospitalsObj = result;
  });



  tThis.selectedRowSH = function(index) {
    tThis.rowIndex = index;
    console.log(index, "index");
    tThis.idHosp = tThis.frontHospitalsObj[tThis.rowIndex].ID;
    console.log(tThis.idHosp, "idHosp");

  };
  tThis.getspecialitySH = function(index) {
    httpGetService.getFrontSpecbyHospitalById(tThis.idHosp).then(function(raspuns) {
      console.log(raspuns, "sarahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
      $location.path('/frontHospitalsList/' + tThis.idHosp);
    });
  }



  tThis.updateHosp = function() {
    console.log(tThis.hospitalsObj[tThis.rowIndex].ID, "tThis.hospObj[tThis.rowIndex].ID");
    $location.path('/hospitals/edit/' + tThis.hospitalsObj[tThis.rowIndex].ID);
  };





}]);
