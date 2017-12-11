import {
  app
} from '../main.js';

app.factory('httpPutService', ['generalService', '$http','$localStorage', function(generalService,$http,$localStorage) {
  return {
     registerUser:function(_data){
      return $http.put(generalService.requestLinks("/user"), _data);
    },
    addSpeciality:function(_data){
     return $http.put(generalService.requestLinks("/speciality"+'?token='+$localStorage.user.token), _data);
    }
  };
}]);
