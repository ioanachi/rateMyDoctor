import {
  app
} from '../main.js';
app.config(function($routeProvider) {

  $routeProvider
    .when("/", {
      templateUrl: "src/views/frontPage.html"
    })

    .when("/front", {
      templateUrl: "src/views/frontPage.html",
      // resolve:{
      //   factoryResolve:function(generalService){
      //     return generalService.isLogged();
      //   },
      // }
    })
    .when("/frontHospitalsList", {
      templateUrl: "src/views/frontHospitalsList.html",
      // resolve:{
      //   factoryResolve:function(generalService){
      //     return generalService.isLogged();
      //   },
      // }
    })
    .when("/frontSpecialitiesList", {
      templateUrl: "src/views/frontSpecialitiesList.html",
      // resolve:{
      //   factoryResolve:function(generalService){
      //     return generalService.isLogged();
      //   },
      // }
    })
    .when("/frontDoctorsList", {
      templateUrl: "src/views/frontDoctorsList.html",
      // resolve:{
      //   factoryResolve:function(generalService){
      //     return generalService.isLogged();
      //   },
      // }
    })
    .when("/frontSpecByHosp/:id", {
      templateUrl: "src/views/frontSpecByHosp.html",
      // resolve:{
      //   factoryResolve:function(generalService){
      //     return generalService.isLogged();
      //   },
      // }
    })
    .when("/drBySpecByHosp/:idh/:ids", {
      templateUrl: "src/views/drBySpecByHosp.html",
      // resolve:{
      //   factoryResolve:function(generalService){
      //     return generalService.isLogged();
      //   },
      // }
    })
    .when("/drByHosp/:id", {
      templateUrl: "src/views/drByHosp.html",
      // resolve:{
      //   factoryResolve:function(generalService){
      //     return generalService.isLogged();
      //   },
      // }
    })
    .when("/drBySpec/:id", {
      templateUrl: "src/views/drBySpec.html",
      // resolve:{
      //   factoryResolve:function(generalService){
      //     return generalService.isLogged();
      //   },
      // }
    })
    .when("/hospBySpec/:id", {
      templateUrl: "src/views/hospBySpec.html",
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
