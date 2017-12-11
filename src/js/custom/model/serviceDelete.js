import {
  app
} from '../main.js';

app.factory('httpDeleteService', ['generalService', '$http', '$localStorage', function(generalService,$http, $localStorage) {
  return {
     deleteSpeciality:function(id){
      return $http.delete(generalService.requestLinks('/speciality/'+id+'?token='+$localStorage.user.token));
     }
  };
}]);
