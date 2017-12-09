import {
  app
} from '../main.js';

app.factory('httpPostService', ['generalService', '$http', function(generalService,$http) {
  return {
     loginUser:function(_data){
      return $http.post(generalService.requestLinks("/login"), _data);
     }
  };
}]);
