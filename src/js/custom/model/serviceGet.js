import {
  app
} from '../main.js';

app.factory('httpGetService', ['generalService', '$http', function(generalService,$http) {
  return {
     getSpecialy:function(){
      return $http.get(generalService.requestLinks('/specialities?token'=$localStorage.user.token);
     }
  };
}]);
