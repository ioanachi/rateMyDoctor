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



  tThis.selectedRowSH = function(index, isDirective) {
    if (!isDirective) {
      tThis.rowIndex = index;
    }
      return tThis.frontHospitalsObj[index].hID;
  };











}]);
