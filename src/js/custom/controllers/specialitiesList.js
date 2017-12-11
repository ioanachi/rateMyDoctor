import {
  app
} from '../main.js';


app.controller("SpecilitiesListController", ["$scope", 'httpGetService', function($scope, httpGetService) {
  var tThis = this;
  tThis.specialitiesObj = [];
  tThis.rowIndex=-1;

httpGetService.getSpecialy().then(function(raspuns) {
    var result =raspuns.data.result;
      tThis.specialitiesObj = result;
    });

    tThis.selectedRow=function(index){
tThis.rowIndex=index;

};
tThis.deleteRow=function(){
console.log(tThis.rowIndex, "gfcugdtd");
tThis.specialitiesObj.splice(tThis.rowIndex, 1)
};



}]);
