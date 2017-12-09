import {
  app
} from '../main.js';


console.log("generalService");

app.controller("LogvalidateController", ['Notification', "$http", "generalService", "httpPostService", "$localStorage", function(Notification, $http, generalService, httpPostService, $localStorage) {
  var tThis = this;
  console.log(generalService);

  tThis.validateLogin = function(formName) {
    if (formName.$valid) {
      var _data = {
        "username": tThis.username,
        "password": tThis.password,
      };
      httpPostService.logInn(_data).then(function(raspuns) {
          var data = raspuns.data;
          console.log(raspuns, "raspuns");
          Notification.success("Login successfull");
          $localStorage.user = {
            username: tThis.username,
            token: data.token,
          };

          $location.path('/dashboard');
        },
        function(err) {
          Notification.error({
            message: 'Could not find user'
          });
        });

    } else {
      Notification.error({
        message: 'Form not valid'
      });
    }
  };
}])
