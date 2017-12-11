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

    .when("/specialitiesAdd", {
      templateUrl: "src/views/specialitiesAdd.html",
      // resolve:{
      //   factoryResolve:function(generalService){
      //     return generalService.isLogged();
      //   },
      // }
    })
    .when("/specialitiesList", {
      templateUrl: "src/views/specialitiesList.html",
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
