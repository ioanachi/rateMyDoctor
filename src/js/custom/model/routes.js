import {
  app
} from '../main.js';
app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "src/views/loginPage.html"
    })
    .when("/login", {
      templateUrl: "src/views/loginPage.html"
    })
    .when("/register", {
      templateUrl: "src/views/registerPage.html"
    })



    .when('/404', {
      templateUrl: "src/views/404.html"
    })
    .otherwise("/404");
});
