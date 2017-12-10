import {
  app
} from '../main.js';




app.controller("MainController", ["$localStorage", "$scope", "$location",  function($localStorage, $scope, $location) {
  var tThis = this;
  tThis.user;
  $scope.userData = function(param) {
    tThis.user = param;
  };

  tThis.activateLogout = function() {
    console.log("start")
    $localStorage.user= null;
    tThis.user=null;
    $location.path("/login");
    console.log("end");
  };
}])
