import {
  app
} from '../main.js';
app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "src/views/loginPage.html"
    })

    .when('/404', {
      templateUrl: "src/views/404.html"
    })
    .otherwise("/404");
});
