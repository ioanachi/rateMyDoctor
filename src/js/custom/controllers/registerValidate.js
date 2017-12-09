import {
  app
} from '../main.js';

app.controller("validationRegisterController", ["$http", "generalService", "httpPutService", function($http, generalService, httpPutService) {
  var tThis = this;
  tThis.validateRorm = function(formName) {

    if (formName.$valid) {
      var _data = {
        "username": tThis.username,
        "password": tThis.pw1,
        "email": tThis.email,
      };
      httpPutService.registerUser(_data).then(function(raspuns) {
        console.log(raspuns);
      });

    } else {
      console.log("errrrrrrrrrrrr");

    }
  };
}])
