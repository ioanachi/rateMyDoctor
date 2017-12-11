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
    .when("/dashboard", {
      templateUrl: "src/views/dashboard.html",
      // resolve:{
      //   factoryResolve:function(generalService){
      //     return generalService.isLogged();
      //   },
      // }
    })
    .when("/specialities", {
      templateUrl: "src/views/specialitiesList.html",
      // resolve:{
      //   factoryResolve:function(generalService){
      //     return generalService.isLogged();
      //   },
      // }
    })
    .when("/specialities/add", {
      templateUrl: "src/views/specialitiesAddUpdate.html",
      // resolve:{
      //   factoryResolve:function(generalService){
      //     return generalService.isLogged();
      //   },
      // }
    })
    .when("/specialities/edit/:id", {
      templateUrl: "src/views/specialitiesAddUpdate.html",
      // resolve:{
      //   factoryResolve:function(generalService){
      //     return generalService.isLogged();
      //   },
      // }
    })



    .when('/404', {
      templateUrl: "src/views/404.html"
    })
    .otherwise("/404");
});
