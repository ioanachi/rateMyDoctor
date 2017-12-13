import {
  app
} from '../main.js';

app.factory('httpGetService', ['generalService', '$http', '$localStorage', function(generalService, $http, $localStorage) {
  return {
    getSpecialy: function() {
      return $http.get(generalService.requestLinks('/specialities?token=' + $localStorage.user.token));
    },
    getSpecialityById: function(id) {
      return $http.get(generalService.requestLinks('/speciality/' + id + '?token=' + $localStorage.user.token));
    },
    getHospital: function() {
      return $http.get(generalService.requestLinks('/hospitals?token=' + $localStorage.user.token));
    },
    getHospitalsById: function(id) {
      return $http.get(generalService.requestLinks('/hospital/' + id + '?token=' + $localStorage.user.token));
    },
    getDoctors: function() {
      return $http.get(generalService.requestLinks('/doctors?token=' + $localStorage.user.token));
    },
    getDoctorsById: function(id) {
      return $http.get(generalService.requestLinks('/doctor/' + id + '?token=' + $localStorage.user.token));
    },
  };
}]);
