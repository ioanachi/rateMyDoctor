import {
  app
} from '../main.js';

app.factory('generalService', function() {
  return {
    requestLinks: function(routePath) {
      return 'http://rmdserver.ioanachichernea.com' + routePath;
    },
  };
});
