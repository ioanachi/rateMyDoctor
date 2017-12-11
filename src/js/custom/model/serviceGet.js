import {
  app
} from '../main.js';

app.factory('httpGetService', ['generalService', '$http', function(generalService,$http) {
  return {
     getSpecialy:function(param){
      return $http.get(generalService.requestLinks('/specialities'), param);
     }
  };
}]);
