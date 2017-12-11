import {
  app
} from '../main.js';

app.factory('httpPutService', ['generalService', '$http', function(generalService,$http) {
  return {
     registerUser:function(_data){
      return $http.put(generalService.requestLinks("/user"), _data);
     }
  };
}]);
app.factory('httpPutSpeciality', ['generalService', '$http', function(generalService, $http) {
  return {
     addSpeciality:function(_data){
      return $http.put(generalService.requestLinks("/speciality"), _data);
     }
  };
}]);
