import {
  app
} from '../main.js';


console.log("generalService");

app.controller("LogvalidateController", ['Notification', "$http","generalService", "httpPostService", "$localStorage", "$location",  function( Notification, $http, generalService, $localStorage, httpPostService , $location) {
  var tThis = this;
console.log(generalService);
tThis.validateLogin = function(formName) {
  if (formName.$valid) {
    var _data = {
      "username": tThis.username,
      "password": tThis.password,
    };
    httpPostService.loginUser(_data).then(function(raspuns) {
      var data=raspuns.data;
      console.log(raspuns,"raspuns");
       Notification.success("Login successfull");
$localStorage.user={
  username:tThis.username,
  token: data.token,
};

      $location.path('/dashboard');
    },
  function(err){
    Notification.error({message: 'Could not find user'});
  });

  } else {
    Notification.error({message: 'Form not valid'});


  }
};


}] )
