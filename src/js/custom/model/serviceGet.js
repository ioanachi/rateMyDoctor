import {
  app
} from '../main.js';

app.factory('httpGetService', ['generalService', '$http', '$localStorage', function(generalService,$http, $localStorage) {
  return {
     getSpecialy:function(){
      return $http.get(generalService.requestLinks('/specialities?token='+$localStorage.user.token));
    },
    getSpecialityById:function(id){
      return $http.get(generalService.requestLinks('/speciality/'+id+'?token='+$localStorage.user.token));
    },
    getHospital:function(){
     return $http.get(generalService.requestLinks('/hospitals?token='+$localStorage.user.token));
   },
  };
}]);
