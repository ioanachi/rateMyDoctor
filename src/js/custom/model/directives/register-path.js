import {
  app
} from '../../main.js';
app.directive("gotoPath", ["$location", function($location) {
  return {
    restrictive: "A",
    link: function(scope, element, attrs) {
      element.on("click", function() {
        console.log(attrs.gotoPath, "attrs");
        scope.$apply(function() {
          $location.path(attrs.gotoPath);
        });
      });
    },
  }
}])
