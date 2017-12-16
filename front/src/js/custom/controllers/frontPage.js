import {
  app
} from '../main.js';


console.log("run");

app.controller("FrontController", ["$localStorage", "$scope", function($localStorage, $scope){
var tThis =this;
tThis.user;
$scope.userData= function(param){
tThis.user = param;


};

}])
