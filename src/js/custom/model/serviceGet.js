import {
  app
} from '../main.js';

app.factory('httpGetService', ['generalService', '$http', '$localStorage', function(generalService,$http, $localStorage) {
  return {
     getSpecialy:function(){
      return $http.get(generalService.requestLinks('/specialities?token='+$localStorage.user.token));
     }
  };
}]);
