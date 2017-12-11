import {
  app
} from '../main.js';

app.factory('httpUpdateService', ['generalService', '$http','$localStorage', function(generalService,$http,$localStorage) {
  return {
     updateSpeciality:function(id,_data){
      return $http.put(generalService.requestLinks('/speciality/'+id+'?token='+$localStorage.user.token),_data);
     }
  };
}]);
